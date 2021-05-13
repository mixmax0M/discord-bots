const discord = require('discord.js');
const fetch = require('node-fetch');



module.exports.run = async (bot, message, args) => {

    bot.on('message', async message => {
if(message.author.bot) return;
if(message.content.toLowerCase().startsWith("+quiz"))
{
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=boolean')
    const data = await response.json();
    var length = data.results.length;
    var randomNumber = Math.floor(Math.random() * length);
    var randomQuestion = data.results[randomNumber];
    var question = randomQuestion.correct_answer;
    console.log(q)
    
    message.channel.send(question);
    const filter = m => m.author.id === message.author.id
    const answer = await message.channel.awaitMessages(filter, {maxMatches: 1, time: 10000, errors:['time', 'maxMatches']});
    const ans = answer.first();

}
    });

}

module.exports.config = {
    name: "quiz",
    aliases: ["q"]
}