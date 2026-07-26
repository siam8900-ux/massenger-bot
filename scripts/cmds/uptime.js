module.exports = {
  config: {
    name: "uptime",
    version: "1.0",
    author: "SIAM",
    countDown: 5,
    role: 0,
    shortDescription: "Bot uptime",
    category: "system",
    guide: "{pn}"
  },

  onStart: async function ({ api, event, usersData, threadsData }) {

    const loading = await api.sendMessage(
`🎀 𝐶ℎ𝑒𝑐𝑘𝑖𝑛𝑔 𝐵𝑜𝑡 𝑆𝑡𝑎𝑡𝑢𝑠...

⏳ Loading ▰▱▱▱`,
      event.threadID
    );

    setTimeout(async () => {

      await api.editMessage(
`🎀 𝐶ℎ𝑒𝑐𝑘𝑖𝑛𝑔 𝐵𝑜𝑡 𝑆𝑡𝑎𝑡𝑢𝑠...

⏳ Loading ▰▰▰▱`,
        loading.messageID
      );

    }, 1000);


    setTimeout(async () => {

      const uptime = process.uptime();

      const days = Math.floor(uptime / 86400);
      const hours = Math.floor((uptime % 86400) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const ping = Date.now() - event.timestamp;
      const memory = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);

      const users = await usersData.getAll();
      const threads = await threadsData.getAll();

      const date = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });


      api.editMessage(
`> 🎀 𝐵𝑜𝑡 𝑈𝑝𝑡𝑖𝑚𝑒 𝐼𝑛𝑓𝑜

🕒 ᴜᴘᴛɪᴍᴇ : ${days}d ${hours}h ${minutes}m ${seconds}s
📶 ᴘɪɴɢ     : ${ping}ms
📅 ᴅᴀᴛᴇ    : ${date}
💻 ᴍᴇᴍᴏʀʏ : ${memory} MB
👥 ᴛᴏᴛᴀʟ ᴜꜱᴇʀꜱ : ${users.length}
💬 ᴛᴏᴛᴀʟ ᴛʜʀᴇᴀᴅꜱ : ${threads.length}

👑 ᴏᴡɴᴇʀ : 𝐒𝐈𝐀𝐌
🤖 ʙᴏᴛ : 𝐒𝐈𝐀𝐌 𝐵ᴏᴛ`,
        loading.messageID
      );

    }, 2000);

  }
};
