const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = async (bot, message, args, tools) => {
if(!message.member.hasPermission('MANAGE_ROLES')) return;
let facs = message.guild.roles.filter(role => role.name.startsWith('⚔'));
if(facs.size < 1) return message.channel.send(new Discord.RichEmbed()
.setTitle('No Factions')
.setDescription('This server has no factions.')
.setColor([255, 0, 0]));
let str = args.join(" ");
let role = facs.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

await message.guild.role.delete(role)
message.channel.send('Deleted the faction.');
}
