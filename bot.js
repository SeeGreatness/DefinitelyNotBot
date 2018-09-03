//                                                                    //_________________ DEPENDENCYS _________________\\
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = client;
const config = require("./config.json");
//                                                                    //_________________ INITIALIZATION _________________\\

const token = config.token; // Set the token
const prefix = config.token; // Set the prefix
const BotName = config.BotName // Set the current Bot Name

//                                                                    //_________________EVENTS_________________\\
  //event listener for when the bot is ready
client.on("ready", () => {
    client.user.setStatus("idle");
    console.log(`${client.user.tag} Is Active!`);
    console.log(`----------------`);
    client.user.setPresence({game: {name: `with you!`, type: 1}});
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
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
//                                                                    //_________________ Events Untested _________________\\

client.on('error', (err) => {
    console.log("————— BIG ERROR —————");
    console.log(err);
    console.log("——— END BIG ERROR ———");
});

client.on("disconnected", () => {
	console.log("Disconnected!");
});
//                                                                    //_________________ VARIABLES _________________\\

const responseObject = {
  "xD":"aye b whats so funny eh*",
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmao",
  "invite":"https://tinyurl.com/DiscordPlugPe",
  "Invite":"https://tinyurl.com/DiscordPlugPe",
  "!Invite":"http://www.tinyurl.com/DiscordPlugPe",
  "!invite":"http://www.tinyurl.com/DiscordPlugPe",
  "RAPE":"https://goo.gl/images/br7sis",
  ".":"you gonna put me on hold like that?",
  "nothing":"thats what i thought",
  "+bal":"stop it you aint rich",
  "bal":"stop it you aint rich"
};

// "!Invite":"http://www.tinyurl.com/PokemonGoAITrainer","!invite":"http://www.tinyurl.com/PokemonGoAITrainer",


//                                                                    //_________________ FUNCTIONS _________________\\

function randomNumber(sides){
 var ranNumber = Math.floor(Math.random() * sides) + 1; 
  return RanNumber;
}


//hi

//                                                                    //_________________ COmmands _________________\\

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) return;
      if (message.author.bot) return;
	if (message.channel.type === "dm") return;
//if the message is not in a DM and the message is not from a bot...
	
//                                  //_________________ RESPONSE OBJECT _________________\\
  
 if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
//                                  //_________________ HELP _________________\\

  if (message.content.toLowerCase().startsWith(prefix + `help1`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: PlugPE Bot Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm PlugPE Bot, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
	    .addField(`Other`, `[${prefix}help]() > Shows you this help menu you're reading, use [${prefix}help2] for modern help \n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about ME`);
    message.channel.send({ embed: embed });
  }
    if (message.content.toLowerCase().startsWith(prefix +`help2`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: PlugPE Bot Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm PlugPE Bot, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`commands`, `[${prefix}hpmeme]() > Fetches a Harry Potter Meme`)
    .addField(`Utilitys`, `[${prefix}help]() > Shows you this help menu you're reading use [${prefix}help1] for less modern help\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}invite]() > Fetches my Invite Link so you can invite me to your server!`);
    message.channel.send({ embed: embed }); 
  }
	
//                                  //_________________ INVITE _________________\\

  if (message.content.toLowerCase().startsWith(prefix + `invite`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:thumbsup: Invite ${BotName}`)
    .setColor(0xCF40FA)
    .setDescription(`Thank you so much for choosing me! You can invite me at https://discordapp.com/oauth2/authorize?client_id=485273857905655818&scope=bot&permissions=8`);
    message.channel.send({ embed: embed });
  }
	
	
}
	  
client.on("message", (message) => {
  if (message.channel.type === "dm"){
     if (message.author.bot) return;
//if the message is in a DM and the message is not from the bot...
  message.channel.send('hi');	  

  }
}








hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

//end of line 117
//adding new code to replace the current command system
  client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
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
    if(command === "kick") {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
}else
  if(command === "say"){
       message.delete();
 let text = args.slice(0).join(" ");
    message.channel.send(text);
	  
      }else
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
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



// Create an event listener for other kinds of commands messages
client.on("message", (message) => {
      // if  message is '<prefix> profile'
  if (message.content.startsWith(prefix + "profile")||message.content === "+profile") {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
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


// THIS  MUST  BE  THIS  WAY XD 
client.login(token);
