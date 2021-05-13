const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const bot = new Discord.Client({disableEveryone: true});

function emoji (id) {
    return bot.emojis.get(id).toString();
}

module.exports.run = async (bot, message, args) => {

 message.delete();
const emojiChannelID = '753305870258929734';

    try {
      const channel = bot.channels.get(emojiChannelID);
      if (!channel) return console.error('missing channel.');
  
      const messages = await channel.fetchMessages({ limit: 15 });
  
      for (const [id, message] of messages) {
        await message.react('🇫');
        await message.react('🇩');
        await message.react('🇵');
        await message.react('🐍');
      }
    } catch(err) {
      console.error(err);
    }
  
}
  module.exports.config = {
    name: "react",
    description: " ",
    usage: "react",
    accessableby: "Members",
    aliases: ["rea", "reactor"]
}