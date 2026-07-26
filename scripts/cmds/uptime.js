const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const loadingFrames = [
  "▰▱▱▱",
  "▰▰▱▱",
  "▰▰▰▱",
  "▰▰▰▰"
];

module.exports = {
  config: {
    name: "uptime",
    version: "1.0",
    author: "SIAM",
    countDown: 5,
    role: 0,
    category: "system"
  },

  onStart: async function ({ api, event }) {

    let msg = await api.sendMessage(
`🎀 Checking Bot Status...

⏳ Loading ${loadingFrames[0]}`,
      event.threadID
    );

    for (let i = 1; i < loadingFrames.length; i++) {
      await delay(700);

      await api.editMessage(
`🎀 Checking Bot Status...

⏳ Loading ${loadingFrames[i]}`,
        msg.messageID
      );
    }

    await delay(500);

    api.editMessage(
`> 🎀 𝐵𝑜𝑡 𝑈𝑝𝑡𝑖𝑚𝑒 𝐼𝑛𝑓𝑜

🕒 ᴜᴘᴛɪᴍᴇ : 0d 4h 3m 11s
📶 ᴘɪɴɢ     : 147ms
📅 ᴅᴀᴛᴇ    : July 26, 2026
💻 ᴍᴇᴍᴏʀʏ : 281.75 MB
👥 ᴛᴏᴛᴀʟ ᴜꜱᴇʀꜱ : 117
💬 ᴛᴏᴛᴀʟ ᴛʜʀᴇᴀᴅꜱ : 14

👑 ᴏᴡɴᴇʀ : 𝐒𝐈𝐀𝐌
🤖 ʙᴏᴛ : 𝐒𝐈𝐀𝐌 𝐁ᴏᴛ`,
      msg.messageID
    );

  }
};
