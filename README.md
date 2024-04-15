# Voice Intelligence Email Transcript

A Twilio Serverless Function that emails Voice Intelligence Conversation Summaries using SendGrid.

## Requirements

- A Twilo account configured with Voice Intelligence that has the Conversation Summary Language Operator enabled
- A Sendgrid account and Sendgrid API Key that allows sending email
- [Twilio CLI](https://www.twilio.com/docs/twilio-cli) installed
- [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started) installed

## Installation

1. `git clone https://github.com/danohn/vi-conversation-summary-email.git`
2. `cd vi-conversation-summary-email`
3. `mv .env.example .env`
4. `nano .env` (replace placeholders with real values)
5. `twilio serverless:deploy`

## Usage

Once the serverless function has been deployed, copy the callback function URL e.g. `https://vi-conversation-summary-email-1234-dev.twil.io/callback` and set it as the Webhook under `Twilio Console > Voice Intelligence > Services > Service > Webhooks`.
