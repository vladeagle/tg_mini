import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "7107802884:AAHOP-JsuLk8-jKNCpUSh4xl-vALNhurNrY";
const webUrl = "https://g-app-625f1.web.app/";
const bot = new Telegraf(token);

bot.command("start", (context) => {
  context.reply(
    `Hello, world! Press "Open App" button to explore our page. Press "Feedback" button to send us some message`,
    Markup.keyboard([
      Markup.button.webApp("Feedback", `${webUrl}/feedback`)
    ])
  );
});

bot.on(message("web_app_data"), async (context) => {
  const data = context.webAppData.data.json();
  context.reply(
    `We've received your message, thank you for your feedback! Your message: ${
      data?.message ? data?.message : "Empty message"
    }`
  );
});

bot.launch();
