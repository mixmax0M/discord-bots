
const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const bot = new Discord.Client({disableEveryone: true});




module.exports.run = async (bot, message, args) => {

    message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));

}
module.exports.config = {
    name: "removeReact",
    description: " ",
    usage: "react",
    accessableby: "Members",
    aliases: ["rrea", "rreactor"]
}




