const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client;
const token = process.env.BOT_TOKEN;
//this is a environment variable that i have with my host so that i dont need to share my token to the public XD
const prefix = "!"; // Set the prefix
client.on("ready", () => {	
    console.log(`${client.user.tag} Is Active!`);
    client.user.setPresence({game: {name: `with you!`, type: 1}});
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setStatus("idle");

});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Hey! ${member}, Welcome to the server! right now everyone is like this guy right now--> :fukinpingme: lol`);
  client.user.setPresence({game: {name: `with you!`, type: 1}});
  console.log(`New member joined: ${guild.name} (id: ${guild.id}). This guild now has ${guild.memberCount} members!`);

});
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    
});
  var i;
const responseObject = {
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "!Invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "!invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "RAPE":"https://goo.gl/images/br7sis",
  "+bal":"stop it your not rich",
	"mew.bal":"stop it your not rich",
	"+balance":"stop it your not rich",
	"+cash":"stop it your not rich",
	"mew.daily":"stop it your not going to be rich",
	"+daily":"stop it your not going to be rich",
	"mew.heist":"Pay me 300 and Ill let you go!",
	"mew.crime":"Stop you criminal!",
	"mew.slots":"*pling pling pling*",
	"mew.fish":"did your rod break?"
	"mew.mine":"did you pickaxe break?"

};


client.on('message', message => {
  if (message.content === 'mew.play') {
    console.log("Looping! for coins!");

for (i = 0; i < 5; i++) {
client.user.setPresence({game: {name: `Looping For Coins!`, type: 1}});
message.channel.send("mew.crime");
message.channel.send("mew.bal");
}
client.user.setPresence({game: {name: `Done Looping!`, type: 1}});

}
});


//adding new code to replace the current command system
  client.on("message", message => {
	  
  // This is where we'll put our code.

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

	if (message.content.startsWith(prefix + "profile")||message.content === "+profile") {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }else
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }else
  if(message.content===null){
    message.channel.send("Unknown Command");
  }
  });
// THIS  MUST  BE  THIS  WAY
client.login(token);
