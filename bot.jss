const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client;
const token = process.env.BOT_TOKEN;
//this is a environment variable that i have with my host so that i dont need to share my token to the public XD
const prefix = "!"; // Set the prefix



// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted

  // This event will run if the bot starts, and logs in, successfully
  // Set the bot's online/idle/dnd/invisible status
     
client.on("ready", () => {
    client.user.setStatus("idle");
    console.log(`${client.user.tag} Is Active!`);
    console.log(`----------------`);
    client.user.setPresence({game: {name: `with you!`, type: 1}});
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});

//const config = require('config.js'); //this causes errors (if you know where this file is PLEASE let me know!!! or how to link to another file here on github XD
// config.token contains the bot's token
//config.prefix contains the bot's prefix



//variables for custom commands by frends (future use)

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
const responseObject = {
  "xD":"aye b whats so funny eh*",
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "!Invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "!invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "!pad":"*puts you in a nice padded diaper*",
  "RAPE":"https://goo.gl/images/br7sis",
  ".":"you gonna put me on hold like that?",
  "nothing":"thats what i thought",
  "+bal":"stop it you aint rich"

};
function randomNumber(sides){
 var ranNumber = Math.floor(Math.random() * sides) + 1;
  return RanNumber;
}


client.on("message", message => {
  if (message.channel.type === 'dm'){
     message.reply ("You shuldnt use my commands in DMs!");
  }});
  
//adding new code to replace the current command system           _________COMMAND SYSTEM!!_______
//this allows for commands to be uppercase lowercase and have paramaters Plus with a changeable prefix (somethig im not woryed right now!)

  client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
    // Exit and stop if it doesn't have the prefix
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
     if(command === "say"){
       message.delete();
     let text = args.slice(0).join(" ");
    message.channel.send(text);
}else
if(command==="profile"){
      message.reply(message.author.avatarURL);

}else
if(command ==="RESET"){
      message.channel.send('NOPE XD not for you!!...');

}else
if(command==="bot"){
     message.channel.sendMessage("UP AND RUNNING!");
}else
if(command==="rip"){
   // Create the attachment using Attachment
     const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
     // Send the attachment in the message channel
     message.channel.send(attachment);
}else
    if (message.content.toLowerCase().startsWith(prefix + `eval`)) {
    if(message.author.id !== "360894787785719809") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}else
 if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
    
  });

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



bot.on('error', (err) => {
    console.log("————— BIG ERROR —————");
    console.log(err);
    console.log("——— END BIG ERROR ———");
});

bot.on("disconnected", () => {
	console.log("Disconnected!");
});
