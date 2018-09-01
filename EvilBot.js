//                                                                    //_________________ DEPENDENCYS _________________\\
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = client;
//                                                                    //_________________ INITIALIZATION _________________\\

var prefix = "=";
//var rolePrefix="&";
var TOKEN=process.env.EVILBOT_TOKEN;

//                                    //______ MEMBER ID's ______\\
//bot owner
var botowner = "360894787785719809";
//owners
var InDev = "330045108881850369";
//admins
//var kevin = "341485938679218177";
//var Teddy = "364360768101023754";
//moderators
//var highPrize = "317798534286016515";
//                                    //______ BOT ID's ______\\
//var mee6 = "159985870458322944";
//var PlugPE = "485273857905655818";
//                                    //______ ROLE ID's ______\\
//var PlugRoles={};
//plugroles.admin="485184846801534978";
//plugroles.member="485197873550589952";
//plugroles.moderator="485195369836314625";





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

function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...');
     client.destroy();
    client.login(TOKEN);
}
//                                                                    //_________________ COmmands _________________\\

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.channel.type === "dm"){
    
    
//                                  //_________________ DM HELP _________________\\
  if (message.content.toLowerCase().startsWith(`help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: PlugPE Bot Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm PlugPE Bot, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`commands`, `[${prefix}hpmeme]() > Fetches a Harry Potter Meme`)
    .addField(`Utilitys`, `[${prefix}help]() > Shows you this help menu you're reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}invite]() > Fetches my Invite Link so you can invite me to your server!`);
    message.channel.send({ embed: embed });
    
    
  }

//                                  //_________________ DM INVITE _________________\\

   if (message.content.toLowerCase().startsWith(prefix + `invite`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:thumbsup: Invite PlugPE Bot`)
    .setColor(0xCF40FA)
    .setDescription(`Thank you so much for choosing me! You can invite me at https://discordapp.com/oauth2/authorize?client_id=485273857905655818&scope=bot&permissions=8`);
    message.channel.send({ embed: embed });
     
     
   }  
    
    
    
  }
  
  
  
//                                  //_________________ RESPONSE OBJECT _________________\\
  
 if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
//                                  //_________________ HELP _________________\\

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
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
    .addField(`Utilitys`, `[${prefix}help]() > Shows you this help menu you're reading use [${prefix}help] for less modern help\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}invite]() > Fetches my Invite Link so you can invite me to your server!`);
    message.channel.send({ embed: embed });
    
    
  }
//                                  //_________________ INVITE _________________\\

  if (message.content.toLowerCase().startsWith(prefix + `invite`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:thumbsup: Invite PlugPE Bot`)
    .setColor(0xCF40FA)
    .setDescription(`Thank you so much for choosing me! You can invite me at https://discordapp.com/oauth2/authorize?client_id=485273857905655818&scope=bot&permissions=8`);
    message.channel.send({ embed: embed });
  }
//                                  //_________________ play _________________\\

  if (message.content.toLowerCase().startsWith(prefix + `play`)) {
      // Note that this will only work if the message was sent in a guild
     // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
//                                  //_________________ HPMEME _________________\\

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
//                                                                    //_________________ RESTART _________________\\

if (message.author.id === botowner||message.author.id === InDev) {
  if (message.author.id !== '360894787785719809'||message.author.id !== '330045108881850369') return;
// my Commands Here *not yours because ^^^^^^ is me SeeGreatness and not you but ^^^^^^ is InDev

if (message.content.startsWith('!restart')) {
  message.channel.send('Resetting...');
  resetBot(message.channel); 
      
      
    }}
	 
//                                                                    //_________________ EVAL _________________\\
if (message.author.id === botowner||message.author.id === InDev) {
    if (message.content.startsWith('eval')) {
      const command = message.content.split(' ').slice(1).join(' ');
      message.reply(
`\`\`\`js
${eval(command)}
\`\`\``);
    } else if (message.content.startsWith('run')) {
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

client.login(TOKEN);
