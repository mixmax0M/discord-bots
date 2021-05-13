const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    message.delete();

	const getMember = (m, id) => m.mentions.members.first() || m.guild.members.get(id);
	let member = getMember(message, args[0]);

	if (!member) {
		member = await new Promise(async r => {
			const msg = await message.channel.send("[fdp]?");
			const filter = m => m.author.id === message.author.id;
			const collector = message.channel.createMessageCollector(filter, { time: 20000, max: 1 });

			collector.on("end", c => {
				r(c.first() ? getMember(c.first(), c.first().content) : null);
				msg.delete().catch(() => null);
			});
		});
	}
    if (!member) return message.reply("Bitte Wähle einen Richtigen Spieler aus!");

    let arg0 = args[1]
    let arg1 = args[2]
    let arg2 = args[3]
    let arg3 = args[4]
    let argurl = args[5]
    if(!args[1]) return message.reply("+embed <@user> <arg> <arg> <arg> <arg> <url>")
   let xembed = new Discord.RichEmbed()
    .setColor(colours.red_dark)
    //.setTitle(args0)
    //.setThumbnail(message.guild.iconURL)
    .setURL(argurl)
   // .setFooter(`SnakeXOnTop.`, bot.user.displayAvatarURL);
    member.send({embed: xembed});
    //message.channel.send({embed: xembed});

}

module.exports.config = {
    name: "EURL",
    description: " ",
    usage: "eembed",
    accessableby: "Members",
    aliases: ["URL"]
    
 }