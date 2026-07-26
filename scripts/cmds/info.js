const fs = require("fs");
const axios = require("axios");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.0",
    author: "SIAM",
    countDown: 5,
    role: 0,
    shortDescription: "Owner Information",
    longDescription: "Show Bot Owner Info",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const imgPath = path.join(__dirname, "cache", "owner.jpg");

    // এখানে আপনার ছবির Direct Image URL দিন
    const imgUrl = "https://i.imgur.com/XXXXXXXX.jpg";

    const response = await axios({
      url: imgUrl,
      responseType: "stream"
    });

    response.data.pipe(fs.createWriteStream(imgPath)).on("finish", () => {
      message.reply({
        body: `
╔════════════════════╗
       🌟 OWNER INFO 🌟
╚════════════════════╝

👤 Name      : SIAM
🚹 Gender    : Male
🎂 Age       : 18
❤️ Status    : Single
🕌 Religion  : Islam
🎓 Education : Student
🏠 Address   : Bangladesh

📘 Facebook : https://www.facebook.com/siam.ahmed.28067
💬 Telegram : https://t.me/@Hunter11110001
🎵 TikTok   : @siam__ahmed1368

⏰ Thanks For Using My Bot ❤️
`,
        attachment: fs.createReadStream(imgPath)
      }, () => fs.unlinkSync(imgPath));
    });
  }
};
