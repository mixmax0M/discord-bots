const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
    let xembed = new Discord.RichEmbed()

    .setColor(colours.red_dark)
    .setTitle("Seite 2")
    .setThumbnail(message.guild.iconURL)
    .addField("**Fun**", "Befehle:")
    .addField("**msg**", "sende einem spieler eine fake message um ihn zu trollen:")
    .addField("**r6**", "Zeige dir die stats eines Rainbow six spielers an Usage +r6 Name ps4/pc/..")
    .addField("**say**", "Schreibe als der bot selber")
    .addField("**crash**", "Sende einem Spieler einen crash code der sein discord crashed(PC ONLY)")
    .addField("**INVITE**", "Zum einladen des Snake bots Schreib einfach +invite")
    .addField("**PAY**", "Spende dem bot ein wenig geld und erhalte die **VIP** rolle mit extra rechten!")
    

    .setFooter(`Viel Spaß Auf dem Server`, bot.user.displayAvatarURL);
    message.channel.send({embed: xembed});
    
}

module.exports.config = {
    name: "help2",
    description: " ",
    usage: "+help2",
    accessableby: "Members",
    aliases: ["helpers2"]
}