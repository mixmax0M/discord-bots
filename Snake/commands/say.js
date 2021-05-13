const Discord = require("discord.js")
const ownerid = "534751262416175116";
module.exports.run = async (bot, message, args) => {
  
    if(message.author.id == ownerid) {
    //if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Du Kannst den befehl nicht Benutzen..")
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
    }
    else
    {
        
    }
}


module.exports.config = {
    name: "say",
    description: "123",
    usage: "+say",
    accessableby: "Staff",
    aliases: ["acc", "announcement"]
}