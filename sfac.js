const Discord = require('discord.js');
const settings = require('./commands/jsons/settings.json');
const bot = new Discord.Client();
const pfix = 'SF;';

bot.on("ready", () => {
bot.user.setActivity(`Factions | sf;help`);
console.log(`Factions?`);
});

bot.on("message", message => {
let msg = message.content.toUpperCase();
let args = message.content.slice(pfix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();
if(!msg.startsWith(pfix)) return;
if(msg === pfix + 'TEST') return message.channel.send('Seems to be working :thinking:');

try{
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
} catch(e) {
message.channel.send(e.message);
}

});

bot.login(process.env.TOKEN)
