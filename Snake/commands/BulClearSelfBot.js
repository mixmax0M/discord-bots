
const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {


 message.channel.fetchMessages({ limit: 100 }).then(msgs=>msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))
}

module.exports.config = {
    name: "selfclear",
    description: " ",
    usage: "react",
    accessableby: "Members",
    aliases: ["clearFast", "cc"]
}