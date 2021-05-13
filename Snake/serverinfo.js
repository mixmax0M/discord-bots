const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.red)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Member:**", `${message.guild.memberCount}`, true)
    .addField("**Rollen:**", `${message.guild.roles.size}`, true)
    .setFooter(`Viel Spaß Auf dem Server`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});


}

module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "serverdesc"]
}