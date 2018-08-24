const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
//this is a environment variable that i have with my host so that i dont need to share my token to the public XD
const prefix = "!"; // Set the prefix
var sides = 6;

var diapers = {
  "1": "Lil Monsters",
  "2": "Goodnites",
  "3": "Depends",
  "4": "Tena",
  "5": "Prevail",
  "6": "Abena",
  "7": "Molicare",
  "8": "Dignity",
  "9": "Wearing Clouds",
  "10": "Magnifico Dino",
  "11": "Mambino",
  "12": "Peekabu",
  "13": "Overnights"
};
function randomNumber(sides){
 var ranNumber = Math.floor(Math.random() * sides) + 1; 
  return RanNumber;
}


const responseObject = {
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "!Invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "!invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "!pad":"*puts you in a nice padded diaper*"
};

//var location
//var pokemon
//var raidTemplate = "A "+pokemon+" Raid Is About To Start In "+time+" At The "+location"



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

//adding new code to replace the current command system
  client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  }else
  if (command === 'foo') {
    message.channel.send("pong!");
  }else
    if(command === "kick") {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
}else
  if(command === "say"){
       message.delete();
     // console.log(`Deleted message from ${msg.author.username}`);
     //console.log(`[WARNING!] [Possible Error] A glitch occurs and doesnt show it deleted immediatly `);
 let text = args.slice(0).join(" ");
    message.channel.send(text);
}else 
  if(command === "owner"){
    message.reply("my owner is SeeGreatness");
  }else
    if(command === "wtf"){
message.channel.send('WTF <@234802370507309056>')}
    else
      if(command==="change"){
          message.delete();
          message.channel.send(text);
        
      }
});



//done adding code
// Create an event listener for messages
client.on("message", (message) => {
  // Exit and stop if it doesn't have the prefix
  if (message.content.startsWith(prefix + "ping")||message.content === "ping") {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")||message.content === "foo") {
    message.channel.send("bar!");
  }else
    // if  message is '<prefix> profile'
  if (message.content.startsWith(prefix + "profile")||message.content === "+profile") {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }else
  if (message.content.startsWith(prefix + "prefix")||message.content === "prefix") {
      message.reply("My Prefix is "+prefix);
    message.channel.send("But keep in mind that pollux also uses this prefix");
    message.channel.send("she also has a alternative prefix p!");
  }else
  if (message.content.startsWith(prefix + "kick")||message.content === "kick") {
    message.channel.send('kicking?');
  }else
  if (message.content.startsWith(prefix + "!RESET")) {
   // send channel a message that you're resetting bot [optional]
    message.channel.send('NOPE XD not for you!!...');

  }else
  if (message.content === '!rip') {
     // If the message is '!rip'
     // Create the attachment using Attachment
     const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
     // Send the attachment in the message channel
     message.channel.send(attachment);
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
  bot.user.setGame('yo momma');
  }else    
  if (message.content.startsWith(prefix + "bot")){ // when message is !bot
      message.channel.sendMessage("UP AND RUNNING!"); // send running message into the channel where the message was sent
  }else
  if (message.content.startsWith(prefix + 'online')) {
       // Restrict a command to a specific user by ID
  if (message.author.id !== '360894787785719809' || '271394014358405121' || '438418186677911553') return;
    message.channel.sendMessage("UP AND RUNNING!"); // send running message into the channel where the message was sent

}else
  if(message.content.startsWith(prefix + "setgame1")){// when message is !setgame1
      bot.user.setGame('yo momma');
  }else
  if(message.content.startsWith(prefix + "setgame2")){// when message is !setgame2
  client.user.setActivity("Playing: your momn!");
  }else
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }else
  if(message.content===null){
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
client.login(token);
