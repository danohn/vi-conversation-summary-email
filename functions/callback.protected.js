const sgMail = require("@sendgrid/mail");

exports.handler = async (context, event, callback) => {
  console.log(event);

  sgMail.setApiKey(context.SENDGRID_API_SECRET);

  const transcriptSid = event.transcript_sid;
  const client = context.getTwilioClient();

  try {
    let operatorResults = await client.intelligence.v2
      .transcripts(transcriptSid)
      .operatorResults.list();

    let conversationSummary = "";

    for (let record of operatorResults) {
      if (record.name == "Conversation Summary") {
        conversationSummary = record.textGenerationResults.result;
        break;
      }
    }

    const msg = {
      to: context.TO_EMAIL_ADDRESS,
      from: {
        name: "Voice Intelligence Transcripts",
        email: context.FROM_EMAIL_ADDRESS,
      },
      html: `Conversation Summary: ${conversationSummary}`,
      subject: `Conversation Summary for ${transcriptSid}`,
    };

    message = await sgMail.send(msg);
    console.log("Email sent!");
  } catch (error) {
    console.error(error);
    return callback(error);
  }

  let resp = "Email sent!";
  return callback(null, resp);
};
