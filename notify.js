// Notification integrations. Each webhook/bot credential lives in the URL PATH,
// the way these providers actually encode them. The trailing token segments are
// hyphenated structural placeholders (non-credential) so this repo can be
// published without tripping GitHub push protection — they still have the
// secret-in-path shape that UnvibeCode's redaction screen fails to redact.
// All values are synthetic.

const SLACK_WEBHOOK   = "https://hooks.slack.com/services/T00000000/B00000000/EXAMPLE-not-a-real-slack-webhook";
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/000000000000000000/EXAMPLE-not-a-real-discord-webhook";
const TELEGRAM_API    = "https://api.telegram.org/bot0000000000:EXAMPLE-not-a-real-telegram-token";

export async function notifySlack(text) {
  return fetch(SLACK_WEBHOOK, { method: "POST", body: JSON.stringify({ text }) });
}

export async function notifyDiscord(content) {
  return fetch(DISCORD_WEBHOOK, { method: "POST", body: JSON.stringify({ content }) });
}

export async function sendTelegram(chatId, text) {
  return fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}
