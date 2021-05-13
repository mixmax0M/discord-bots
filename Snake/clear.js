const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    
    if(message.member.hasPermission("ADMINISTRATOR")) { 
        if(!args[0]) return message.reply("+clear <Nummer>")
        message.channel.bulkDelete(args[0]);
        }

}

module.exports.config = {
    name: "clear",
    description: " ",
    usage: "+clear",
    accessableby: "Members",
    aliases: ["c"]
}