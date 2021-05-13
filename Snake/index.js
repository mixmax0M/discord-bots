const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const Discord = require("discord.js");
const passwrd = require("./passwrd.json")
const fss = require('fs')
const bot = new Discord.Client({disableEveryone: true});
var port = process.env.PORT || 8080;

bot.on("ready", async() => {
    console.log("Geladen")

    // bot.user.setActivity("Programmieren", {type: "STREAMING"});WATCHING
   
    let statuses = [
       
        "🐍",
        "🐍🐍",
		"🐍🐍🐍"
        
       ]


    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {type: "WATCHING"});
        
    }, 10000)
})

//var reqTimer = setTimeout(function wakeUp() {
  // request("https://nameless-gorge-19527.herokuapp.com", function() {
  //    console.log("WAKE UP DYNO");
 //  });
//   return reqTimer = setTimeout(wakeUp, 1200000);
//},// 1200000);

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)
let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
    return console.log("[logs] nicht gefunden");
}

jsfile.forEach((f, i) => {
    let pull =require(`./commands/${f}`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias =>{
        bot.aliases.set(alias, pull.config.name)
    });
  });
});



bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)


    if(!message.member.hasPermission(["ATTACH_FILES"])) return message.channel.send("Du hast Keine Berechtigung für die VIP regristrierung");
if(message.content.startsWith("+register")) {
    if(message.author.bot) return;
        message.delete();
        if(passwrd[message.author.id]) return message.channel.send("Du hast dich bereits Registriert Benutze +login <Passwort> Um dich einzuloggen").then(msg=>msg.delete(5000))
        let passwort = message.content.split(' ').slice(1).join(' ');

        if(!passwort) return message.channel.send("Du hast kein passwort angegeben").then(msg=>msg.delete(5000))

        passwrd[message.author.id] = {
            passwort,
            login: "nein"

        }
        message.channel.send("Du hast dich Registriert Nutze +login <Passwort> Um dich einzuloggen")


        fss.writeFile("./passwrd.json", JSON.stringify(passwrd), err => {
            if(err) console.log(err)
        })
    }

        if(message.content.startsWith("+login")){

            if(message.author.bot) return;
            message.delete()
            if(!passwrd[message.author.id]) return message.channel.send("Du hast kein passwort.. Registriere dich mit +register <Passwort>").then(msg=>msg.delete(5000))
            if(passwrd[message.author.id].login == "ja") return message.channel.send("Du bist bereits eingeloggt").then(msg=>msg.delete(5000))
        
            let passwort = message.content.split(' ').slice(1).join(' ');
            if(passwort != passwrd[message.author.id].passwort){
                message.channel.send("Dein Passwort ist falsch!").then(msg=>msg.delete(5000))
            } else{
                let role = message.member.guild.roles.find("name", "*VIP*");
                message.member.addRole(role)
        
        passwrd[message.author.id] = {
            passwort,
            login: "ja"
        }
        fss.writeFile("./passwrd.json", JSON.stringify(passwrd), err => {
            if(err) console.log(err)
               })
             }
            }
        
        if(message.content.startsWith("+logout")){
            if(message.author.bot) return;
            message.delete()
        
        if(passwrd[message.author.id].login == "out") return message.channel.send("Du bist noch nicht eingeloggt").then(msg=>msg.delete(5000))
        let passwort = message.content.split(' ').slice(1).join(' ')
        if(!passwort) return message.channel.send("Du hast evtl das passwort vergessen?").then(msg=>msg.delete(5000))
        
        if(passwort != passwrd[message.author.id].passwort) return message.channel.send("Dein passwort ist flasch!").then(msg=>msg.delete(5000))
        
        passwrd[message.author.id] = {
            passwort,
            login: "out"
        }
        let role = message.guild.roles.find(role => role.name === "*VIP*").then(msg=>msg.delete(5000))
        message.member.removeRole(role)
        
        
            message.channel.send("Du Wurdest ausgeloggt, Auf Wiedersehen :wave: ").then(msg=>msg.delete(5000))
        }


})
bot.login(botconfig.token)