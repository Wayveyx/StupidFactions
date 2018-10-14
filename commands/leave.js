const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = async (bot, message, args, tools) => {
let facs = message.guild.roles.filter(role => role.name.startsWith('⚔'));
let str = args.join(" ");
let role = facs.find(role => role.name.slice(2).toLowerCase() === str.toLowerCase());

try{
await message.member.removeRoles(facs);
message.channel.send('Successfully left the Faction.');
} catch(e) {
message.channel.send(e);
}
}