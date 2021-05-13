const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
    if(message.author.id != "534751262416175116") return message.channel.send("Nur für Mich surry..")

    if(!args[0]) return message.channel.send("Konnte Nicht Reloaden..")

    let commandName = args[0].toLowerCase()
    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
   
   
    } catch(e) {
        return message.channel.send(`konnte nicht reloaden: \`${args[0].toUpperCase()}\` Nicht gereloaded!`)

    }
    message.channel.send(`Reloaded \`${args[0].toUpperCase()}\``)
}
   


module.exports.config = {
    name: "reload",
    aliases: ["rl"]
}