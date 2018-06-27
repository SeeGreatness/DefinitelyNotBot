const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"; // Set the prefix

//const config = require('config.js'); //this causes errors (if you know where this file is PLEASE let me know!!! or how to link to another file here on github XD
// config.token contains the bot's token
//config.prefix contains the bot's prefix


// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully
      // Set the bot's online/idle/dnd/invisible status
      client.user.setStatus("online");
      client.user.setGame("Type !help");
      //client.user.setActivity({game: {name: "with my code", type: 0}});
      client.user.setPresence({ status: 'online', game: { name: 'with my code' } });

  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  
});

// Create an event listener for messages
client.on("message", (message) => {
  // Exit and stop if it doesn't have the prefix
  if (message.content === "ping") {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }else
    // if  message is '<prefix> profile'
  if (message.content.startsWith(prefix + "profile")) {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }else
  if (message.content.startsWith(prefix + "prefix")) {
      message.reply("My Prefix is "+prefix);
    message.channel.send("But keep in mind that pollux also uses this prefix");
    message.channel.send("she also has a alternative prefix p!");
  }else
  if (message.content.startsWith(prefix + "kick")) {
    message.channel.send('kicking?');
  }else
  if (message.content.startsWith(prefix + "?RESET")) {
    // Send "RESETING!!!" to the same channel
    message.channel.send('RESETING!!!');
    resetBot(message.channel);
  }else
  if (message.content.startsWith(prefix + "!RESET")) {
   // send channel a message that you're resetting bot [optional]
    message.channel.send('NOPE XD not for you!!...');

  }else  
  if (message.content.startsWith(prefix + 'RESET')) {
  // Restrict a command to a specific user by ID
    if (message.author.id !== '360894787785719809') return;
    // my Commands Here *not yours because ^^^^^^ is me and not you
   message.channel.send('Resetting...');
   resetBot(message.channel);
  }else
  if (message.content.startsWith(prefix + 'setgame')) {
  // Restrict a command to a specific user by ID
  if (message.author.id !== '360894787785719809') return;
  // my Commands Here *not yours because ^^^^^^ is me and not you
  bot.user.setGame('yo momma')
  }else    
  if (message.content.startsWith(prefix + "bot")){ // when message is !bot
      message.channel.sendMessage("UP AND RUNNING!"); // send running message into the channel where the message was sent
  }else
  if (message.content.startsWith(prefix + 'online')) {
       // Restrict a command to a specific user by ID
  if (message.author.id !== '360894787785719809') return;
    message.channel.sendMessage("UP AND RUNNING!"); // send running message into the channel where the message was sent

}
  if(message.content==''){
    message.channel.send("Unknown Command");
  }
});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Hey! ${member}, Welcome to the server! right now everyone is like this guy right now--> :fukinpingme: lol`);
  client.user.setActivity("Playing: your momn!");
  console.log(`New member joined: ${guild.name} (id: ${guild.id}). This guild now has ${guild.memberCount} members!`);

});
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity("hello!");
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(process.env.BOT_TOKEN));
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
