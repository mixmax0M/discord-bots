const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
    let xembed = new Discord.RichEmbed()

    .setColor(colours.red_dark)
    .setTitle("Hilf Seite")
    .setThumbnail(message.guild.iconURL)
    .addField("**Admin**", "Befehle:")
    .addField("**clear**", "+clear <Nummber>")
    .addField("**addrole**", "Gib einem Spieler eine rolle")
    .addField("**removerole**", "Nimm einem Spieler eine rolle weg ")
    .addField("**deletechannel**", "Löscht den channel ")
    .addField("**say**", "Schreibe als der bot selber")
    .addField("**User**", "Befehle:")
    .addField("**serverinfo**", "Zeigt dir die Serverinformationen")
    .addField("**userinfo**", "Zeigt dir die userinformationen ")
    .addField("**ping**", "Zeigt Dir Deinen ping und den ping des bots ")
    .addField("**Snake**", "Sende ein gif mit einer Snake")
    .addField("**crash**", "Sendet dir eine dm mit einem crash code dieser wird dein discord crashen(PC ONLY)")
    .setFooter(`Viel Spaß Auf dem Server`, bot.user.displayAvatarURL);
    message.channel.send({embed: xembed});
    
}

module.exports.config = {
    name: "help",
    description: " ",
    usage: "+help",
    accessableby: "Members",
    aliases: ["helpers"]
}