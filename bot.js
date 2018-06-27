const Discord = require('discord.js');
const client = new Discord.Client();


//const config = require('config.js'); //this causes errors (if you know where this file is PLEASE let me know!!! or how to link to another file here on github XD
// config.token contains the bot's token
//config.prefix contains the bot's prefix






// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  
});
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});
// Create an event listener for messages
client.on('message', message => {
  // If the message is "+profile"
  if (message.content === '+profile') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity("hello!");
});


// Create an event listener for messages
client.on('message', message => {
  // If the message is "+profile"
  if (message.content === 'prefix') {
    // Send the user's avatar URL
    message.reply("The Prefix for this bot is +");
    message.channel.send("But keep in mind that pollux also uses this prefix");
    message.channel.send("she also has a alternative prefix p!");
  }
});
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'kick') {
    // Send "pong" to the same channel
    message.channel.send('');
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "?RESET"
  if (message.content === '?RESET') {
    // Send "RESETING!!!" to the same channel
    message.channel.send('RESETING!!!');
    resetBot(message.channel);

  }
});


// set message listener 
client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '?RESET':
            break;
             message.channel.send('Resetting.')
        // ... other commands
    }
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
