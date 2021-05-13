const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
    message.delete();
    
    
    let arg0 = args[0]
    let arg1 = args[1]
    let arg2 = args[2]
    let arg3 = args[3]
    let argurl = args[4]
    if(!args[0]) return message.reply("+embed <arg> <arg> <arg> <arg>")
    if(!args[1]) return message.reply("+embed <arg> <arg> <arg> <arg>")
    if(!args[2]) return message.reply("+embed <arg> <arg> <arg> <arg>")
    if(!args[3]) return message.reply("+embed <arg> <arg> <arg> <arg>")
    if(!args[4]) return argurl = "https://www.google.de";
    let xembed = new Discord.RichEmbed()
    .setColor(colours.red_dark)
    .setTitle(arg0)
    .setThumbnail(message.guild.iconURL)
    .addField(arg1)
    .addField(arg2)
    .addField(arg3)
    .setURL(argurl)
    .setFooter(`SnakeXOnTop.`, bot.user.displayAvatarURL);
    message.channel.send({embed: xembed});
}

module.exports.config = {
   name: "embed",
   description: " ",
   usage: "eembed",
   accessableby: "Members",
   aliases: ["eembed"]
   
}