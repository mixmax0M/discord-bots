const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 
    message.channel.send("API:login_`root``Passwort123`")

}


module.exports.config = {
    name: "api",
    description: " ",
    usage: "+api",
    accessableby: "Members",
    aliases: []
}