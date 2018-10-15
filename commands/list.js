const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
let facs = message.guild.roles.filter(role => role.name.startsWith('⚔'));
if(facs.size < 1) return message.channel.send(new Discord.RichEmbed()
.setTitle('No Factions')
.setDescription('This server has no factions.')
.setColor([255, 0, 0]))
let str = args.join(" ");
let role = facs.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

if(!str) return message.channel.send(new Discord.RichEmbed()
.setTitle('Factions')
.setDescription(facs.array().filter(r => r.name).join("\n"))
.setColor('#FFA500')
.setFooter('Faction List ⚔'));
if(!role) return message.channel.send(new Discord.RichEmbed()
.setTitle('Role doesnt exist')
.setDescription(str + ' doesnt exist.')
.setColor([255, 0, 0]));
}
