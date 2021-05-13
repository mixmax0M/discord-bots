const Discord = require("discord.js"); //Calling the library we need to create commands.
const { RichEmbed } = require("discord.js"); //Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.//Calling an option to create rich embeds.
const moment = require("moment"); //Calling the moment package to display time.
const settings = require("../botconfig.json"); //Calling the settings.

module.exports.run = (client, message, args) => { //Setting definitions to make commands.

    message.delete(); //Deleting the message.

   

    const Embed = new RichEmbed() //Creating the embed.
        .setTitle("Bot Settings / Information") //Setting the title.
        .setDescription("zeige dir die informationen zum  " + client.user.tag + " bot am " + moment(message.createdAt).format("MM[-]DD[-]YYYY") + ".") //Setting the description.
        .addField("Username", client.user.username, true) //Setting an an addfield.
        .addField("Prefix", settings.prefix, true) //Setting an inline addfield.
        .setImage(client.user.displayAvatarURL) //Setting an image.
        .setColor(settings.color) //Setting the color.
        .setFooter(settings.footer); //Setting the footer and ending the embed builder.

    message.channel.send(Embed); //Sending the embed.

};


module.exports.config = {
    name: "info",
    description: " ",
    usage: "+info",
    accessableby: "Members",
    aliases: ["Info"]
}