const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

    module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
            .setDescription("Füge eine Reaktion auf eines dieser Emojis´s hinzu, um das Spiel schere stein papier!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Du Hast schere stein papier gewonnen!";
            } else if (me === clientChosen) {
                return "Unentschieden!";
            } else {
                return "Du hast schere stein papier verloren!";
            }
        }
    }

    module.exports.config = {
        name: "rps",
        description: "",
        usage: "rock paper scissors",
        accessableby: "Games",
        aliases: []
    };
    