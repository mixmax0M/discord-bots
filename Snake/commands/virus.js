

const {Client, Attachment} = require('discord.js');
const bot = new Client();
const cheerio = require('cheerio');
const request = require('request');

module.exports.run = async (bot, message, args) => {





const attachment2 = new Attachment("./dontinstall.exe")
    message.channel.send(message.author, attachment2).then(msg => msg.delete(20000));
    

}


module.exports.config = {
    name: "virus",
    description: " ",
    usage: "+virus",
    accessableby: "Members",
    aliases: ["vrs"]
}