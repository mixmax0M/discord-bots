const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = [" ", " ", " "]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}: Bot in Ms: \`${ping}\`, Dein ping in Ms: \`${Math.round(bot.ping)}\``)
    })

}


module.exports.config = {
    name: "ping",
    description: " ",
    usage: "+ping",
    accessableby: "Members",
    aliases: ["latency"]
}