const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
message.channel.send(new Discord.RichEmbed()
.setTitle('Help')
.setDescription('**sf;create** - Create a faction.\n**sf;join** - Join a faction.\n**sf;leave** - Leave a faction\n**sf;list** - List all the created factions.')
.setFooter('Stupid Factions by Wayve#6498')
.setColor('RANDOM'));
}