const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
     let role = message.member.guild.roles.find("name", "aDc");
     message.member.addRole(role)
     let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
     let Discount = message.guild.roles.find(r => r.name === "aDc")
     message.delete();
     
    message.channel.send("This message will automatically DELETE itself in 15 seconds!").then(msg => msg.delete(15000));
    message.reply("Hey, you used the discount code. You must send a message to R6Boost#7317 OR to NotMyMain#4743 Aswell a Positiv Reply in https://www.elitepvpers.com/forum/rainbow-six-siege-trading/4774999-steel-wave-boosting-cheap-fast-boosting-service.html").then(msg => msg.delete(15000));
    
}

module.exports.config = {
    name: "a3431y",
    description: " ",
    usage: "Discount",
    accessableby: "Members",
    aliases: ["AhmadDiscount"]
    
}