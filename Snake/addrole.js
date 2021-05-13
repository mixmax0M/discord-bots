const Discord = require("discord.js")
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Du hast Keine berechtigung..")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("du hast den user vergessen..")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Du hast evtl die rolle vergessen..") 
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("Was ist der grund dafür?")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Ich hast Keine berechtigung...")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, Hat bereits die rolle!`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`Die rolle, ${role.name}, wurde  ${rMember.displayName}. erfolgreich gegeben`)
    }
   
}

module.exports.config = {
    name: "addrole",
    description: "Adds a role to a member of the guild!",
    usage: "!addrole",
    accessableby: "Moderators",
    aliases: ["ar", "rl"]
}