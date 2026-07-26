module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "SIAM",
    countDown: 5,
    role: 0,
    shortDescription: "Owner Info",
    longDescription: "Show owner info",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    api.sendMessage(
`╔════════════════════════════╗
      👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👑
╚════════════════════════════╝

👤 𝗡𝗮𝗺𝗲 : 𝗦𝗜𝗔𝗠
🚹 𝗚𝗲𝗻𝗱𝗲𝗿 : Male
🎂 𝗔𝗴𝗲 : 18
❤️ 𝗦𝘁𝗮𝘁𝘂𝘀 : Single
🕌 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻 : Islam
🏠 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 : Bangladesh

━━━━━━━━━━━━━━━━━━

📘 Facebook:
https://www.facebook.com/siam.ahmed.28067

💬 Telegram:
https://t.me/Hunter11110001

🎵 TikTok:
@siam__ahmed1368

━━━━━━━━━━━━━━━━━━

🤖 SIAM BOT
💖 Thanks For Using My Bot 💖`,
      event.threadID,
      event.messageID
    );
  }
};
