const Discord = require("discord.js")
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {

  
    if (message.member.hasPermission('MANAGE_ROLES')) {
        message.channel.send("Der User Wurde gekillt und alle seine rollen zurück gesetzt")
        let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); //Gets the user
        if (!rMember) return message.reply("Der user exestiert nicht!.");
        
        rMember.removeRoles(rMember.roles).then(console.log).catch(console.error); //Removes all roles
        rMember.addRole(gRole.id); //Adds suspended Role
        message.channel.send("User wurde gekillt."); //Messages the channel that the user was suspended

        try {
          await rMember.send("Deine rollen wurden alle entfernt.."); //Tries to DM User
        } catch (e) {
          message.channel.send("Wir haben versucht, die Benutzer mit DM zu informieren, aber ihre DM's sind gesperrt."); //Announces that their DMs are locked
        }
    
    
      } else {
        message.channel.send("Du hast keine berechtigung für diesen befehl.");
      }

}

module.exports.config = {
    name: "kill",
    description: "Removes all role to a member of the guild!",
    usage: "+kill",
    accessableby: "Moderators",
    aliases: []
}