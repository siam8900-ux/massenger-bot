module.exports = {
	config: {
		name: "kick",
		version: "1.4",
		author: "SIAM",
		countDown: 5,
		role: 1,
		category: "box chat"
	},

	onStart: async function ({ api, message, event }) {

		if (!event.messageReply && Object.keys(event.mentions).length == 0)
			return message.reply("⚠️ Reply or tag someone to kick.");

		let uid;

		if (event.messageReply)
			uid = event.messageReply.senderID;
		else
			uid = Object.keys(event.mentions)[0];

		try {

			await api.removeUserFromGroup(
				uid,
				event.threadID
			);

			return message.reply(
				"✅ Member removed successfully."
			);

		} catch (err) {

			console.log(err);

			return message.reply(
				"❌ Cannot kick member.\nMake sure bot is admin."
			);
		}
	}
};
