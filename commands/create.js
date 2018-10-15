const Discord = require('discord.js');
const settings = require('./jsons/settings.json');
const no = ["fuck", "damn", "shit", "cunt", "ass", "gay", "lesbian", "bitch", "cock", "pussy", "clit", "penis", "nigger", "nigga", "nig", "niggah", "nigg", "vagina", "porn", "hentai", "shemale"];

exports.run = (bot, message, args, tools) => { 
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permission to create a faction. (Manage Roles)');
if(no.some(word => message.content.includes(word))) return message.channel.send('How dare u try to name it that');
if(!args) return message.channel.send('Please provide a name for the faction.');
try{
message.guild.createRole({
name:`⚔ ${args.join(" ")}`
});
message.channel.send('Faction Created.');
} catch(e) {
message.channel.send(e.message)
}

}
