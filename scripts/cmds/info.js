module.exports = {
 config: {
  name: "info",
  version: "1.0",
  author: "SIAM",
  countDown: 5,
  role: 0,
  shortDescription: "Owner Information",
  longDescription: "Show owner information",
  category: "info",
  guide: "{pn}"
 },

 onStart: async function ({ message }) {

  const msg = `
╔════════════════════════════╗
        👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👑
╚════════════════════════════╝

👤 Name        : SIAM
🚹 Gender      : Male
🎂 Age         : 18
❤️ Status      : Single
🕌 Religion    : Islam
🎓 Education   : Student
🏠 Address     : Bangladesh

━━━━━━━━━━━━━━━━━━━━━━

📘 Facebook : https://www.facebook.com/siam.ahmed.28067

💬 Telegram : https://t.me/Hunter11110001

🎵 TikTok : @siam__ahmed1368

━━━━━━━━━━━━━━━━━━━━━━

🤖 Bot Name   : SIAM BOT
⚡ Version    : 2.0
💻 Owner      : SIAM

━━━━━━━━━━━━━━━━━━━━━━

💖 Thanks For Using My Bot 💖
`;

  return message.reply(msg);
 }
};
