const config = require("../botconfig.json");
const { inspect } = require("util");
const ownerid = "534751262416175116";

module.exports.run = async (bot, message, args) => {
    if(message.author.id == ownerid) {
        let toEval = args.join(" ");
        let evaluated = inspect(eval(toEval, { depth: 0 } ))
        try {
            if(toEval) {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart)
                return message.channel.send(`*Gefunden in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
                
            } else {
                message.channel.send("Fehler bei der Auswertung: `Versucht nochmal`")
            }
        } catch(e) {
            message.channel.send(`Fehler bei der Auswertung: \`${e.message}\``)
        }
    } else {
        return message.reply(" Sie haben nicht die Erlaubnis, diesen Befehl zu verwenden.").then(m => m.delete(10000))
    }

}

module.exports.config = {
    name: "eval",
    description: "Evaluates ",
    accessableby: "Bot Owner",
    type: "owner",
    aliases: ["e"],
    usage: `${config.prefix}eval <input>`
}

