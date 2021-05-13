const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => { 
    if(!message.member.hasPermission("VIEW_AUDIT_LOG") || !message.guild.owner) return message.channel.send("Du hast keine berechtigung für diesen befehl.");
    
 if(!args[2]) return message.reply("Bitte stelle eine richtige frage!");
 let replies = ["Ja..", "Nein..", "Frag Shaiiko Er Weiß die antwort bestimmt!", "Frag später nochmal.. Keine zeit momentan"];

 let reesult = Math.floor((Math.random() * replies.length));
 let frage = args.slice(1).join(" ");
 

 let ballembed = new Discord.RichEmbed()
 .setAuthor(message.author.tag)
 .setColor("#FF9900")
 .addField("Frage", frage)
 .addField("Antwort", replies[reesult]);
    
 message.channel.send(ballembed);
}



module.exports.config = {
    name: "frage",
    description: " ",
    usage: "+frage",
    accessableby: "Members",
    aliases: ["Frage"]
}

