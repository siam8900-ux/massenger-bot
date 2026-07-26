module.exports = {
  config: {
    name: "uptime",
    version: "2.0",
    author: "SIAM",
    countDown: 5,
    role: 0,
    shortDescription: "Bot uptime info",
    longDescription: "Show bot status with animation",
    category: "system",
    guide: "{pn}"
  },

  onStart: async function ({ api, event, usersData, threadsData }) {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const loading = [
      "▰▱▱▱",
      "▰▰▱▱",
      "▰▰▰▱",
      "▰▰▰▰"
    ];

    // Loading animation
    let msg = await api.sendMessage(
`🎀 Checking Bot Status...

⏳ Loading ${loading[0]}`,
      event.threadID
    );

    for (let i = 1; i < loading.length; i++) {
      await delay(700);

      await api.editMessage(
`🎀 Checking Bot Status...

⏳ Loading ${loading[i]}`,
        msg.messageID
      );
    }


    // Get real data
    const uptime = process.uptime();

    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const ping = Date.now() - event.timestamp;

    const memory = (
      process.memoryUsage().rss / 1024 / 1024
    ).toFixed(2);


    const users = await usersData.getAll();
    const threads = await threadsData.getAll();


    const date = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });


    // Final result
    await delay(500);

    api.editMessage(
`> 🎀 𝐵𝑜𝑡 𝑈𝑝𝑡𝑖𝑚𝑒 𝐼𝑛𝑓𝑜

🕒 ᴜᴘᴛɪᴍᴇ : ${days}d ${hours}h ${minutes}m ${seconds}s
📶 ᴘɪɴɢ     : ${ping}ms
📅 ᴅᴀᴛᴇ    : ${date}
💻 ᴍᴇᴍᴏʀʏ : ${memory} MB
👥 ᴛᴏᴛᴀʟ ᴜꜱᴇʀꜱ : ${users.length}
💬 ᴛᴏᴛᴀʟ ᴛʜʀᴇᴀᴅꜱ : ${threads.length}

👑 ᴏᴡɴᴇʀ : 𝐒𝐈𝐀𝐌
🤖 ʙᴏᴛ : 𝐒𝐈𝐀𝐌 𝐁ᴏᴛ

💖 Thanks For Using My Bot`,
      msg.messageID
    );

  }
};
