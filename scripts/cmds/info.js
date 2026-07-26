const fs = require("fs-extra");
const axios = require("axios");

module.exports = {
 config: {
  name: "info",
  version: "1.0",
  author: "SIAM",
  countDown: 5,
  role: 0,
  shortDescription: "Owner Info",
  longDescription: "Show owner information",
  category: "info",
  guide: "{pn}"
 },

 onStart: async function ({ message }) {
  try {
   const uid = "100046186655809";
   const imgPath = __dirname + "/cache/owner.jpg";

   const img = await axios.get(
    https://graph.facebook.com/${uid}/picture?width=720&height=720,
    { responseType: "arraybuffer" }
   );

   fs.writeFileSync(imgPath, Buffer.from(img.data));

   message.reply({
    body: `╔════════════════════════════╗
      👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👑
╚════════════════════════════╝

👤 𝗡𝗮𝗺𝗲    : 𝗦𝗜𝗔𝗠
🚹 𝗚𝗲𝗻𝗱𝗲𝗿   : 𝗠𝗮𝗹𝗲
🎂 𝗔𝗴𝗲      : 18
❤️ 𝗦𝘁𝗮𝘁𝘂𝘀    : Single
🕌 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻   : Islam
🏡 𝗖𝗼𝘂𝗻𝘁𝗿𝘆   : Bangladesh

━━━━━━━━━━━━━━━━━━

📘 Facebook
https://www.facebook.com/siam.ahmed.28067

💬 Telegram
https://t.me/Hunter11110001

🎵 TikTok
@siam__ahmed1368

━━━━━━━━━━━━━━━━━━

🤖 𝗦𝗜𝗔𝗠 𝗕𝗢𝗧
💖 Thanks For Using My Bot 💖`,
    attachment: fs.createReadStream(imgPath)
   }, () => fs.unlinkSync(imgPath));

  } catch (e) {
   message.reply("❌ PFP লোড করা যায়নি।");
  }
 }
};
