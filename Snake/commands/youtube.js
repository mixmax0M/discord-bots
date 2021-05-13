const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = (client, message, args) => {



    message.channel.send("Der Kanal Von Shaiikololo: https://bit.ly/2PRKarQ ")

    message.channel.send("Das Letzte video von Shaiikololo: https://bit.ly/38wpxrM ")


    
}

module.exports.config = {
    name: "youtube",
    description: " ",
    usage: "+yt",
    accessableby: "Members",
    aliases: ["yt"]
}