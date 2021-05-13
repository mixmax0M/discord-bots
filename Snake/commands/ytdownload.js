const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    let arg0 = args[0]
    if(!args[0]) return message.reply("+ytd <Video-ID>" + "example:+ytd v=9w5M1__yNM4&list=RDMMSD0LxBx9eUM&index=5")
    else if(args[0])
    {
        return message.reply("https://www.yt-download.org/api/button/mp3/" + arg0)
    }
    
}

module.exports.config = {
    name: "ytd",
    description: " ",
    usage: "+clear",
    accessableby: "Members",
    aliases: ["yttc"]
}