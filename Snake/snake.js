const {Client, Attachment} = require('discord.js');
const bot = new Client();
const cheerio = require('cheerio');
const request = require('request');

module.exports.run = async (bot, message, args) => {

    const attachment2 = new Attachment('https://tenor.com/view/snake-hypnotize-hypnotizingsnake-dancingsnake-disney-gif-4846493.gif')
    message.channel.send(message.author, attachment2).then(msg => msg.delete(20000));
    

}


module.exports.config = {
    name: "snake",
    description: " ",
    usage: "+snake",
    accessableby: "Members",
    aliases: ["hungry", "mixmax"]
}