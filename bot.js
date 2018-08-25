const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client;
const token = process.env.BOT_TOKEN;
//this is a environment variable that i have with my host so that i dont need to share my token to the public XD
const prefix = "!"; // Set the prefix



const responseObject = {
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "!Invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "!invite":"http://www.tinyurl.com/PokemonGoAITrainer",
  "!pad":"*puts you in a nice padded diaper*",
  "RAPE":"https://goo.gl/images/br7sis"

};


//const config = require('config.js'); //this causes errors (if you know where this file is PLEASE let me know!!! or how to link to another file here on github XD
// config.token contains the bot's token
//config.prefix contains the bot's prefix


// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully
      // Set the bot's online/idle/dnd/invisible status
     
client.on("ready", () => {	
    client.user.setStatus("idle");
    console.log(`${client.user.tag} Is Active!`);
    console.log(`----------------`);
    client.user.setPresence({game: {name: `with you!`, type: 1}});
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

//stuff that might break stuffs
client.on('message', message => {
    if(message.content === prefix + "deletechannel"){
       
        message.channel.delete(1000);
        
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'hpmeme')) {
    if(index == meme.length - 1){
          shuffle(meme);
          index2 = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("Harry Potter Meme")
           .setColor(getRandomColor())
           .setDescription("Here is your Harry Potter meme! :smile: :fire:")
           .setImage(meme[index2])
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg")
      message.channel.send({embed});
      index2++;
    }
});

client.on('message', message => {
  if (message.content === '!play') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});




//potentialy helpfull things but still dangerouse



bot.on('error', (err) => {
    console.log("————— BIG ERROR —————");
    console.log(err);
    console.log("——— END BIG ERROR ———");
});

bot.on("disconnected", () => {
	console.log("Disconnected!");
});
//end of helpful but harmful stuff



//end of potentialy harmfull things




//not harmfull but still needs to be implemented properly
client.on('message', message => {
    if (message.content === 'xD') {
    	message.channel.send('aye b whats so funny eh*');
  	}
});
client.on('message', message => {
    if (message.content === '.') {
    	message.reply('you gonna put me on hold like that?');
  	}
});
client.on('message', message => {
    if (message.content === 'nothing') {
    	message.channel.send('thats what i thought');
  	}
});

client.on('message', message => {
    if (message.content === '+bal') {
    	message.channel.send('stop it you aint rich');
  	}
});

//end of line 117
//adding new code to replace the current command system
  client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //if (message.channel.type === 'dm'){
    //return message.reply ("You cannot use my commands in DMs!") 
  //}else
    if(command === 'ping') {
message.channel.send('Pinging...').then(async (msg) => {
            const embed = {
                "title": "Pong!",
                "description": "🏓",
                "color": 65393,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": client.user.displayAvatarURL,
                    "text": client.user.tag
                },
                "author": {
                    "name": message.author.tag,
                    "icon_url": message.author.displayAvatarURL
                },
                "fields": [{
                    "name": "Bot Latency",
                    "value": `${msg.createdTimestamp - message.createdTimestamp} ms`,
                    "inline": !0
                }, {
                    "name": "API Latency",
                    "value": `${Math.round(client.ping)} ms`,
                    "inline": !0
                }, {
                    "name": "What does this mean?",
                    "value": `This means that the bot took ${msg.createdTimestamp - message.createdTimestamp} ms to respond to your command, and it took ${Math.round(client.ping)} ms for Discord API. This is the speed at which the bot responds to you, after you sent your command.`
                }]
            };
            await msg.edit({
                embed
            })
        })  } else
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
        
      }else
       if (command === "eval") {
       if(message.author.id !== "360894787785719809") { return message.channel.send (`You do not have permission to use this, ${message.author}, you silly billy!`) };
// Clean
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
// End it
          try {
          const code = args.join(" ");
          let evaled = eval(code);

          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

            message.channel.send(`__**Output**__\n\n` + `\`\`\`js\n` + clean(evaled) + `\`\`\``);
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
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
});
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    
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
