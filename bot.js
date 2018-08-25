//                                                                    //_________________ DEPENDENCYS _________________\\
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = client;
//                                                                    //_________________ INITIALIZATION _________________\\
var prefix = "!";
var botowner = "360894787785719809";

client.on("ready", () => {
    client.user.setStatus("idle");
    console.log(`${client.user.tag} Is Active!`);
    console.log(`----------------`);
    client.user.setPresence({game: {name: `with you!`, type: 1}});
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});
//                                                                    //_________________EVENTS_________________\\
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


//                                                                    //_________________ VARIABLES _________________\\


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
//                                                                    //_________________ FUNCTIONS _________________\\

function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...');
     client.destroy();
    client.login(process.env.BOT_TOKEN);
}
//                                                                    //_________________ COmmands _________________\\

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  
  
  
 if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: SeeGreatness Bot Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm Tessera, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
	    .addField(`Other`, `[${prefix}help]() > Shows you this help menu you're reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about ME`);
    message.channel.send({ embed: embed });
  }
	
  if (message.content.toLowerCase().startsWith(prefix + `invite`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:thumbsup: Invite SeeGreatness Bot`)
    .setColor(0xCF40FA)
    .setDescription(`Thank you so much for choosing me! You can invite me at https://discordapp.com/oauth2/authorize?client_id=461182128101785621&scope=bot&permissions=8`);
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefix + `play`)) {
      // Note that this will only work if the message was sent in a guild
     // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
  
  
if (message.author.id === botowner) {
  if (message.author.id !== '360894787785719809') return;
// my Commands Here *not yours because ^^^^^^ is me seegreatness and not you

if (message.content.startsWith('!restart')) {
  message.channel.send('Resetting...');
  resetBot(message.channel); 
      
      
    }}
  
	if (message.content.toLowerCase().startsWith(prefix + `hpmeme`)) {
    if(index == meme.length - 1){
          shuffle(meme);
          index2 = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("Harry Potter Meme")
           .setColor(getRandomColor())
           .setDescription("Here is your Harry Potter meme! :smile: :fire:")
           .setImage(meme[index2])
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg");
      message.channel.send({embed});
      index2++;
    } 
	 
	 
//                                                                    //_________________ EVAL _________________\\
if (message.author.id === botowner) {
    if (message.content.startsWith('=eval')) {
      const command = message.content.split(' ').slice(1).join(' ');
      message.reply(
`\`\`\`js
${eval(command)}
\`\`\``);
    } else if (message.content.startsWith('=run')) {
      const command = message.content.split(' ').slice(1).join(' ');
      child_process.exec(command, (error, out) => {
        const m = error ? `ERROR\n\n${error}` : `OUTPUT\n\n${out}`;
        message.reply(
`\`\`\`js
${m}
\`\`\``);
      });
    }
  }	

});
//                                                                    //_________________ LOGIN _________________\\

client.login(process.env.BOT_TOKEN);
