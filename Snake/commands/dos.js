const Discord = require("discord.js")
const ownerid = "534751262416175116";


module.exports.run = async (bot, message, args) => {
    if(message.author.id == ownerid) { 

        if(!args[0]) return message.channel.send("Du hast den user vergessen!")
        message.channel.send("Attacking...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = [" ", " ", " "]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`:fetching ip\`\`get-addr.js`)
        m.edit(`:fetching ip\`\`get-addr.js`)
        m.edit(`:fetching ip\`\`get-addr.js`)
        m.edit(`:updating ip addr\`\`get-addr.js`)
        m.edit(`:updating ip addr\`\`get-addr.js`)
        m.edit(`:updating ip addr\`\`get-addr.js`)
       



        m.edit(`:Ziel Ping 49\`\`API: root@base64`)
        m.edit(`:Ziel Ping 120\`\`API: root@base64`)
        m.edit(`:Ziel Ping 177\`\`API: root@base64`)
        m.edit(`:Ziel Ping 215\`\`API: root@base64`)
        m.edit(`:Ziel Ping 215\`\`API: root@base64`)
        m.edit(`:Ziel Ping 340\`\`API: root@base64`)
        m.edit(`:Ziel Ping 680\`\`API: root@base64`)
        m.edit(`:Ziel Ping 785\`\`API: root@base64`)
        m.edit(`:Ziel Ping 785\`\`API: root@base64`)
        m.edit(`:Ziel Ping 785\`\`API: root@base64`)
        m.edit(`:Ziel Ping 1642\`\`API: root@base64`)
        m.edit(`:Ziel Ping 1642\`\`API: root@base64`)
        m.edit(`:Ziel Ping 2050\`\`API: root@base64`)
        m.edit(`:Ziel Ping 2051\`\`API: root@base64`)
        m.edit(`:Ziel Ping 2052\`\`API: root@base64`)
        m.edit(`:Ziel Ping 2053\`\`API: root@base64`)
        m.edit(`:Ziel Ping 3502\`\`API: root@base64`)
        m.edit(`:Ziel Ping 4712\`\`API: root@base64`)
        m.edit(`:Ziel Ping 9150\`\`API: root@base64`)
        m.edit(`:Ziel Ping Error connection lost\`\`API: root@base64`)
        m.edit(`:Ziel Ping Error connection lost\`\`API: root@base64`)
        m.edit(`:ATTACK FINISHED\`\`API: root@base64`)
        m.edit(`:ATTACK FINISHED\`\`API: root@base64`)
        m.edit(`:ATTACK FINISHED\`\`API: root@base64`)
        m.edit(`:shutdown service UDP2.pl\`\`API: root@base64`)
        m.edit(`:shutdown service UDP2.pl\`\`API: root@base64`)
        m.edit(`:shutdown service UDP2.pl\`\`API: root@base64`).then(m => m.delete(10000))
        message.channel.send("Die Attacke wurde erfolgreich ausgeführt!").then(m => m.delete(10000))
        message.channel.send("||perl.run_UDP2.pl<on.error return true>||").then(m => m.delete(10000))  
    })
    } else {
        message.channel.send("Derzeit deaktiviert und nur für Shaiikololo Freigegeben!")
    }
}


module.exports.config = {
    name: "ddos",
    description: " ",
    usage: "+dos",
    accessableby: "Members",
    aliases: ["dos"]
}