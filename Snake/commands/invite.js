const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.author.sendMessage("Hier ist der Einladungs link für den 'Snake' Bot Falls du Probleme beim einrichten hast wende dich bitte an das DEV team ")
message.author.sendMessage("https://discordapp.com/api/oauth2/authorize?client_id=677151357936861185&permissions=8&scope=bot")
message.channel.send("Habe dir eine dm geschickt!")

}

module.exports.config = {
    name: "invite",
    description: " ",
    usage: "+invite",
    accessableby: "Members",
    aliases: []
    
}