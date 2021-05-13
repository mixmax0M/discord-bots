const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
           
        message.channel.send("Du Hast Keine Berechtigung Für den delete befehl..!").then(msg => msg.delete(2000));
        return;
    }
    message.author.send("Der Channel Wurde Gelöscht!");
    message.delete()
    message.channel.delete(1)

}

module.exports.config = {
    name: "deletechannel",
    description: " ",
    usage: "+deletechannel",
    accessableby: "Admin",
    aliases: ["delch"]
}