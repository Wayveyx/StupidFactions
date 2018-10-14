const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
if(!message.author.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permission to create a faction (Manage Roles)');
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
