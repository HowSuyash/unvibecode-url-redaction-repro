// Minimal app that fans a message out to every notification channel.
import { notifySlack, notifyDiscord, sendTelegram } from "./notify.js";

export async function broadcast(message) {
  await notifySlack(message);
  await notifyDiscord(message);
  await sendTelegram("1001", message);
  return { delivered: true };
}
