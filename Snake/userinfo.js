const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("UserInfo")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Erstellt am:**", `${message.author.createdAt}`, true)
        .setFooter(`Viel Spaß Auf dem Server`, bot.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});
    }

    module.exports.config = {
        name: "userinfo",
        description: " ",
        usage: "+userinfo",
        accessableby: "Members",
        aliases: ["ui"]
    }