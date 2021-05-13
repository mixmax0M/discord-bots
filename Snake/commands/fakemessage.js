module.exports.run = async (bot, message, args) => {
	if (!message.member || !message.member.hasPermission("ADMINISTRATOR")) {
		return message.reply("Du hast keine Permissions!");
    }
    message.delete();

	const getMember = (m, id) => m.mentions.members.first() || m.guild.members.get(id);
	let member = getMember(message, args[0]);

	if (!member) {
		member = await new Promise(async r => {
			const msg = await message.channel.send("Welchen Member willst du Verarschen?");
			const filter = m => m.author.id === message.author.id;
			const collector = message.channel.createMessageCollector(filter, { time: 20000, max: 1 });

			collector.on("end", c => {
				r(c.first() ? getMember(c.first(), c.first().content) : null);
				msg.delete().catch(() => null);
			});
		});
	}

	if (!member) return message.reply("Bitte Wähle einen Richtigen Spieler aus!");

    const msg = "``` Downloading: yjsa2s.json ``` \n ``` Downloading: yjsa2s.client``` \n ``` Installing: yjsa2s.client && yjsa2s.json  ``` ";
    

	member
	.send(msg)
	.then(m => {
		m.delete(10000);
		message.channel.send("Der FakeNachricht Wurde erfolgreich gesendet!").then(msg => msg.delete(2000));
	})
	.catch(() => {
		message.channel.send("Nachricht Konnte nicht gesendet werden!");
	});
};

module.exports.config = {
	name: "msg",
	description: " .",
	usage: "+msg",
	accessableby: "Moderators",
	aliases: []
};
