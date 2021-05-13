const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
    let xembed = new Discord.RichEmbed()

    .setColor(colours.red_dark)
    .setTitle("Hilf Seite")
    .setThumbnail(message.guild.iconURL)
    .addField("**Admin**", "Befehle: Alle Befehle Starten mit einem +")
    .addField("**clear**", "+clear <Nummber>")
    .addField("**addrole**", "Gib einem Spieler eine rolle")
    .addField("**removerole**", "Nimm einem Spieler eine rolle weg")
    .addField("**deletechannel**", "Löscht den channel ")
    .addField("**kill**", "Setzt einen user auf die standart einstellungen zurück und Entferne alle seine rollen")
    .addField("**VIP**", "Befehle:")
    .addField("**register**", "register <Passwort>")
    .addField("**login**", "login <Passwort>")
    .addField("**logout**", "logout <Passwort>")
    .addField("**frage**", "Stell dem bot eine frage :D")
    .addField("**User**", "Befehle:")
    .addField("**serverinfo**", "Zeigt dir die Serverinformationen")
    .addField("**userinfo**", "Zeigt dir die userinformationen ")
    .addField("**ping**", "Zeigt Dir Deinen ping und den ping des bots ")
    .addField("**Snake**", "Sendet ein gif mit einer Snake")
    .addField("**image**", "Sendet Ein random Google Bild")
    .addField("**anime**", "Sendet Ein random Anime Bild")
    .addField("**Game**", "Befehle:")
    .addField("**rps**", "Spiele Eine runde schere stein papier..")
    .addField("**Seite 2**", "+help2")



    
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