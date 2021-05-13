module.exports.run = async (bot, message, args) => {
	if (!message.member || !message.member.hasPermission("ADMINISTRATOR")) {
		return message.reply("Das ist ein Admin Command!");
	}

	if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
		return message.reply("Ich habe keine permissions für den command");
	}

	// Find the member
	const member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!member) return message.reply("Bitte wähle eine User aus");

	// Find the role
	const value = args
		.slice(1)
		.join(" ")
		.toLowerCase();
	const role =
		message.mentions.roles.first() ||
		message.guild.roles.find(r => r.id === value || r.name.toLowerCase() === value);

	try {
		// Delete the role
		role.delete();
		message.channel.send(
			`Rolle **${role.name}** Wurde erfolgreich gelöscht und entfernt von **${member.user.tag}!**`
		);
	} catch (e) {
		return message.reply(`error : ${e.message}`);
	}
};

module.exports.config = {
	name: "deleterole",
	description: "",
	usage: "+deleterole <member> <rolename>",
	accessableby: "Moderators",
	aliases: []
};
