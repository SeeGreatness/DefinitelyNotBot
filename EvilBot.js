const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client;
var prefix = "=";
var botowner = "360894787785719809";

client.on("ready", () => {
    client.user.setStatus("idle");
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`${client.user.tag} Is Active!`);
    console.log(`----------------`);
    client.user.setPresence({game: {name: `with you!`, type: 1}});
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('process.env.EVILBOT_TOKEN');
