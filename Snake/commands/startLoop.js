const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {

  // add message as a parameter to your callback function
bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "+start") { 
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Du Kannst den befehl nicht Benutzen..")
    
        message.channel.send("Aktiviert!")
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("Hey an alle vergesst nicht euch #selfroles Zu geben! :wave:")
            .catch(console.error); // add error handling here
        }, 1 * 900000); 
       
    }
});

}

module.exports.config = {
    name: "start",
    description: "start",
    usage: "+start",
    accessableby: "Staff",
    aliases: []
}