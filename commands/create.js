const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {

if(!args) return message.channel.send('Please provide a name for the faction.');
try{
message.guild.createRole({
name:`⚔ ${args.join(" ")}`
});
message.channel.send('Faction Created.');
} catch(e) {
message.channel.send(e)
}

}