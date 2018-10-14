const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = async (bot, message, args, tools) => {
let facs = message.guild.roles.filter(role => role.name.startsWith('⚔'));
let str = args.join(" ");
let role = facs.find(role => role.name.slice(2).toLowerCase() === str.toLowerCase());
if(facs.size > 0) return message.channel.send('Please leave the faction you\'re in first.');

try{
await message.member.removeRoles(facs);
await message.member.addRole(role);
message.channel.send(`You have joined ${role}.`);
} catch(e) {
message.channel.send(e.message);
}
}
