const { RichEmbed } = require("discord.js")
const { redlight } = require("../colours.json");

module.exports.run = async (bot, message, args) => {
// check if the command caller has permission to use the command
if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Du hast keine berechtigung für diesen befehl.");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Ich habe keine berechtigung für diesen befehl")

//define the reason and mutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Bitte wähle einen user aus den du muten willst");

let reason = args.slice(1).join(" ");
if(!reason) reason = "Keinen grund ausgewählt"

//define mute role and if the mute role doesnt exist then create one
let muterole = message.guild.roles.find(r => r.name === "Muted")
if(!muterole) {
    try{
        muterole = await message.guild.createRole({
            name: "Muted",
            color: "#514f48",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })
    } catch(e) {
        console.log(e.stack);
    }
}

//add role to the mentioned user and also send the user a dm explaing where and why they were muted
mutee.addRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Hey du, wurdest gemuted in ${message.guild.name} für: ${reason}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} Wurde erfolgreich gemuted.`)
})

//send an embed to the modlogs channel
let embed = new RichEmbed()
    .setColor(redlight)
    .setAuthor(`${message.guild.name} logs`, message.guild.iconURL)
    .addField("Moderation:", "mute")
    .addField("Mutee:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Grund:", reason)
    .addField("Datum:", message.createdAt.toLocaleString())

let sChannel = message.guild.channels.find(c => c.name === "logs")
sChannel.send(embed)
    }


    
module.exports.config = {
    name: "mute",
    description: " ",
    usage: "+mute",
    accessableby: "Members",
    aliases: ["Mute"]
}