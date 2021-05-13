const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 

    message.channel.send("Ich habe dir ein dm geschrieben!")
    message.author.send("Danke Das du in uns investieren willst Die vip rolle sollte dir nach spätestens 24h Bereit stehen")
    message.author.send("https://www.patreon.com/Snakebot");
}


module.exports.config = {
    name: "pay",
    description: " ",
    usage: "+pay",
    accessableby: "Members",
    aliases: []
}