const permissionrolename = "BotPerms"
const fetch = require("node-fetch");
const Discord = require("discord.js");
const bot = new Discord.Client();
const Logs = new Discord.WebhookClient('786256168691302411', 'SYQ9wg5wEJjgZWfExwn68hco0MigdU9cNpf-PU9Qw7wyhlTs6AgjqEQOpIvviKfIvbUc');
const DMLogs = new Discord.WebhookClient('786259121984765972', '09tosIpvK2ZBu_SgOWKwBHyZWYwVkyeHBr15u9b-i3pl_HVriLYg9wgcsGD7Z3E8DVe6');
const CmdLogs = new Discord.WebhookClient('782926820856692737', 'BTfCAoInSu_deOKTPTkPZNJRyjFLImKA6OFLA94pQQ1yAs0F9vaUQC1lN7XG5U4JPzRV');
var specialcommands = [];


function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function commaify(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}

// Current bot commands \\
const commands = [
  "8ball",
  "help",
  "sizepp",
  "pp",
  "gay",
  "discordid",
  "ping",
  "status",
  "kick",
  "ban",
  "nick",
  "nickname",
  "mute",
  "unmute"
];

function cmdlog(message) {
  CmdLogs.send(message);
};

bot.on("message", message => {
  if (message.author.bot) return;

  if (message.content.length >= 300) return;

  const prefix = '-';
  const botname = 'Bot';
  const embedcolor = "#FFFFFF";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.indexOf(prefix) !== 0) return;  
  const author = message.author
  
  const id = makeid(8) + '-' + makeid(4) + '-' + makeid(4) + '-' + makeid(4) + '-' + makeid(12);
 
  const invalidargs = new Discord.RichEmbed()
    .setTitle(botname)
    .setColor(embedcolor)
    .setDescription(`Invalid amount of arguments for command, ${author}.`)
    .setFooter("ID - " + id).setTimestamp();

  const failembed = new Discord.RichEmbed()
    .setTitle(botname)
    .setColor(embedcolor)
    .setDescription(`An error occured, ${author}.`)
    .setFooter("ID - " + id).setTimestamp();

  const notauthorized = new Discord.RichEmbed()
    .setTitle(botname)
    .setColor(embedcolor)
    .setDescription(`You are not authorized to use this command, ${author}.`)
    .setFooter("ID - " + id).setTimestamp();

  const cmdlogembed = new Discord.RichEmbed()
    .setTitle(botname)
    .setColor(embedcolor)
    .setDescription(`User ${author.tag} (\`${author.id}\`) ran command \`${command}\`.`)
    .setFooter("ID - " + id).setTimestamp();

  if (command) {
    if(command !== commands.length) {
      console.log('hi');
    } else
    if (command === commands.length) {
      cmdlog(cmdlogembed);
    };
  };

    if(command === "help"){
      const helpcommand = args[0];
      
      const embed1 = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **status**, **info**, **help** \n \n**Current Prefix**: ${prefix}`)
        .setFooter("ID - " + id).setTimestamp();

      const embedowner = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **status**, **info**, **help**, **kick**, **ban**, **nick**, **nickname**, **mute**, **unmute**\n \n**Current Prefix**: ${prefix}`)
        .setFooter("ID - " + id).setTimestamp();
    
      if(!helpcommand) {
        if (message.member.roles.find(r => r.name === permissionrolename)) {
          return message.channel.send(embedowner);
        } else
        return message.channel.send(embed1);
      }

      const embed3 = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Failed to find command \`${helpcommand}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();
      
      const helpembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **help**: \n \nDescription: \`Lists commands in the Wretched Bot.\` \n \n**Usage**: \`\`\`${prefix}help - returns the list of commands available to you. \n${prefix}help command - returns the description + usage for command.\`\`\` \n \n**Keywords**: \n\`command\` - the command to return usages and keywords for.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `help`) return message.channel.send(helpembed);
      
      const ballembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **8ball**: \n \nDescription: \`Uses the powers of System.Random to answer your deepest questions.\` \n \n**Usage**: \`\`\`${prefix}8ball question\`\`\` \n \n**Keywords**: \n\`question\` - string question you are asking the bot.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `8ball`) return message.channel.send(ballembed);
      
      const ppembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **pp/sizepp**: \n \nDescription: \`Calculates your pp size :flushed:\` \n \n**Usage**: \`\`\`${prefix}pp @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `pp`) return message.channel.send(ppembed);
      if(helpcommand.toLowerCase() === `sizepp`) return message.channel.send(ppembed)
      
      const gayembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **gay**: \n \nDescription: \`Calculates how much like Tear you are :flushed:\` \n \n**Usage**: \`\`\`${prefix}gay @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `gay`) return message.channel.send(gayembed);
        
      const embedembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **embed**: \n \nDescription: \`Sends an embedded message with custom text.\` \n \n**Usage**: \`\`\`${prefix}embed basic string \n${prefix}embed advanced string\`\`\` \n \n**Keywords**: \n\`basic\` - uses a basic embed message not containing its own unique ID or bot name title. \n\`advanced\` - uses embeds with their own unique ID and bot name title. \n\`string\` - the string or body text of the embedded message.`)
        .setFooter("ID - " + id).setTimestamp();
        
      if(helpcommand.toLowerCase() === `embed`) return message.channel.send(embedembed);
        
      const discordidembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **discordid**: \n \nDescription: \`Returns the Discord ID of a user.\` \n \n**Usage**: \`\`\`${prefix}discordid @user - returns @user's Discord ID.\`\`\`\n \n**Keywords**: \n\`@user\` - the target user.`)
        .setFooter("ID - " + id).setTimestamp();
        
      if(helpcommand.toLowerCase() === `discordid`) return message.channel.send(discordidembed);
        
      const pingembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **ping**: \n \nDescription: \`Returns "Pong!" if the bot is alive.\``)
        .setFooter("ID - " + id).setTimestamp();
        
      if(helpcommand.toLowerCase() === `ping`) return message.channel.send(pingembed);
      
      const kickembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **kick**: \n \nDescription: \`Kicks the target.\`\n \n**Usage**: \`\`\`${prefix}kick @user [reason] - kicks @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to kick. \n\`reason\` - reason for kick.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `kick`) {
        if (!message.member.roles.find(r => r.name === permissionrolename)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(kickembed);
      };

      const banembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **ban**: \n \nDescription: \`Bans the target.\`\n \n**Usage**: \`\`\`${prefix}ban @user [reason] - bans @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to ban. \n\`reason\` - reason for ban.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `ban`) {
        if (!message.member.roles.find(r => r.name === permissionrolename)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(banembed);
      };

      const nickembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **nick/nickname**: \n \nDescription: \`Changes the target's nickname.\`\n \n**Usage**: \`\`\`${prefix}nick @user [name] - changes @user's server nickname to [name]. \n${prefix}nickname @user [name] - changes @user's server nickname to [name].\`\`\` \n \n**Keywords**: \n\`@user\` - user to change name of. \n\`name\` - nickname to give.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `nick`) {
        if (!message.member.roles.find(r => r.name === permissionrolename)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(nickembed);
      };

      if(helpcommand.toLowerCase() === `nickname`) {
        if (!message.member.roles.find(r => r.name === permissionrolename)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(nickembed);
      };

      const muteembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **mute**: \n \nDescription: \`Mutes the target user.\`\n \n**Usage**: \`\`\`${prefix}mute @user [time] [reason] - mutes @user for [time] minutes with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to ban.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `mute`) {
        if (!message.member.roles.find(r => r.name === permissionrolename)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(muteembed);
      };

      const unmuteembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **unmute**: \n \nDescription: \`Unmutes the target user.\`\n \n**Usage**: \`\`\`${prefix}unmute @user - unmutes @user.\`\`\` \n \n**Keywords**: \n\`@user\` - user to unmute.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `unmute`) {
        if (!message.member.roles.find(r => r.name === permissionrolename)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(unmuteembed);
      };
      
      if(!helpcommand) return;
      
      if(helpcommand !== commands.length) return message.channel.send(embed3);
    } else
    if (command === "?") {
        const helpcommand = args[0];
      
        const embed1 = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **status**, **info**, **help** \n \n**Current Prefix**: ${prefix}`)
          .setFooter("ID - " + id).setTimestamp();
  
        const embedowner = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **status**, **info**, **help**, **embed**, **gettoken**, **authenticate**, **unauthenticate**, **getemail**, **resettime**\n \n**Current Prefix**: ${prefix}`)
          .setFooter("ID - " + id).setTimestamp();
      
        if(!helpcommand) {
          if (specialcommands.includes(author.id)) {
            return message.channel.send(embedowner);
          } else
          return message.channel.send(embed1);
        }
  
        const embed3 = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Failed to find command \`${helpcommand}\`, ${author}.`)
          .setFooter("ID - " + id).setTimestamp();
        
        const helpembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **help**: \n \nDescription: \`Lists commands in the Wretched Bot.\` \n \n**Usage**: \`\`\`${prefix}help - returns the list of commands available to you. \n${prefix}help command - returns the description + usage for command.\`\`\` \n \n**Keywords**: \n\`command\` - the command to return usages and keywords for.`)
          .setFooter("ID - " + id).setTimestamp();
        
        if(helpcommand.toLowerCase() === `help`) return message.channel.send(helpembed);
        
        const ballembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **8ball**: \n \nDescription: \`Uses the powers of System.Random to answer your deepest questions.\` \n \n**Usage**: \`\`\`${prefix}8ball question\`\`\` \n \n**Keywords**: \n\`question\` - string question you are asking the bot.`)
          .setFooter("ID - " + id).setTimestamp();
        
        if(helpcommand.toLowerCase() === `8ball`) return message.channel.send(ballembed);
        
        const ppembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **pp/sizepp**: \n \nDescription: \`Calculates your pp size :flushed:\` \n \n**Usage**: \`\`\`${prefix}pp @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
          .setFooter("ID - " + id).setTimestamp();
        
        if(helpcommand.toLowerCase() === `pp`) return message.channel.send(ppembed);
        if(helpcommand.toLowerCase() === `sizepp`) return message.channel.send(ppembed)
        
        const gayembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **gay**: \n \nDescription: \`Calculates how much like Tear you are :flushed:\` \n \n**Usage**: \`\`\`${prefix}gay @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
          .setFooter("ID - " + id).setTimestamp();
        
        if(helpcommand.toLowerCase() === `gay`) return message.channel.send(gayembed);
          
        const embedembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **embed**: \n \nDescription: \`Sends an embedded message with custom text.\` \n \n**Usage**: \`\`\`${prefix}embed basic string \n${prefix}embed advanced string\`\`\` \n \n**Keywords**: \n\`basic\` - uses a basic embed message not containing its own unique ID or bot name title. \n\`advanced\` - uses embeds with their own unique ID and bot name title. \n\`string\` - the string or body text of the embedded message.`)
          .setFooter("ID - " + id).setTimestamp();
          
        if(helpcommand.toLowerCase() === `embed`) return message.channel.send(embedembed);
          
        const discordidembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **discordid**: \n \nDescription: \`Returns the Discord ID of a user.\` \n \n**Usage**: \`\`\`${prefix}discordid @user - returns @user's Discord ID.\`\`\`\n \n**Keywords**: \n\`@user\` - the target user.`)
          .setFooter("ID - " + id).setTimestamp();
          
        if(helpcommand.toLowerCase() === `discordid`) return message.channel.send(discordidembed);
          
        const pingembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **ping**: \n \nDescription: \`Returns "Pong!" if the bot is alive.\``)
          .setFooter("ID - " + id).setTimestamp();
          
        if(helpcommand.toLowerCase() === `ping`) return message.channel.send(pingembed);
        
        const kickembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **kick**: \n \nDescription: \`Kicks the target.\`\n \n**Usage**: \`\`\`${prefix}kick @user [reason] - kicks @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to kick. \n\`reason\` - reason for kick.`)
          .setFooter("ID - " + id).setTimestamp();
  
        if(helpcommand.toLowerCase() === `kick`) {
          if (!message.member.roles.find(r => r.name === permissionrolename)) {
              return message.channel.send(embed3);
          } else
          message.channel.send(kickembed);
        };
  
        const banembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **ban**: \n \nDescription: \`Bans the target.\`\n \n**Usage**: \`\`\`${prefix}ban @user [reason] - bans @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to ban. \n\`reason\` - reason for ban.`)
          .setFooter("ID - " + id).setTimestamp();
  
        if(helpcommand.toLowerCase() === `ban`) {
          if (!message.member.roles.find(r => r.name === permissionrolename)) {
              return message.channel.send(embed3);
          } else
          message.channel.send(banembed);
        };
  
        const nickembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **nick/nickname**: \n \nDescription: \`Changes the target's nickname.\`\n \n**Usage**: \`\`\`${prefix}nick @user [name] - changes @user's server nickname to [name]. \n${prefix}nickname @user [name] - changes @user's server nickname to [name].\`\`\` \n \n**Keywords**: \n\`@user\` - user to change name of. \n\`name\` - nickname to give.`)
          .setFooter("ID - " + id).setTimestamp();
  
        if(helpcommand.toLowerCase() === `nick`) {
          if (!message.member.roles.find(r => r.name === permissionrolename)) {
              return message.channel.send(embed3);
          } else
          message.channel.send(nickembed);
        };
  
        if(helpcommand.toLowerCase() === `nickname`) {
          if (!message.member.roles.find(r => r.name === permissionrolename)) {
              return message.channel.send(embed3);
          } else
          message.channel.send(nickembed);
        };
  
        const muteembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **mute**: \n \nDescription: \`Mutes the target user.\`\n \n**Usage**: \`\`\`${prefix}mute @user [time] [reason] - mutes @user for [time] minutes with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to ban.`)
          .setFooter("ID - " + id).setTimestamp();
  
        if(helpcommand.toLowerCase() === `mute`) {
          if (!message.member.roles.find(r => r.name === permissionrolename)) {
              return message.channel.send(embed3);
          } else
          message.channel.send(muteembed);
        };
  
        const unmuteembed = new Discord.RichEmbed()
          .setTitle(botname)
          .setColor(embedcolor)
          .setDescription(`Command **unmute**: \n \nDescription: \`Unmutes the target user.\`\n \n**Usage**: \`\`\`${prefix}unmute @user - unmutes @user.\`\`\` \n \n**Keywords**: \n\`@user\` - user to unmute.`)
          .setFooter("ID - " + id).setTimestamp();
  
        if(helpcommand.toLowerCase() === `unmute`) {
          if (!message.member.roles.find(r => r.name === permissionrolename)) {
              return message.channel.send(embed3);
          } else
          message.channel.send(unmuteembed);
        };
        
        if(!helpcommand) return;
        
        if(helpcommand !== commands.length) return message.channel.send(embed3);
    } else
    if (command === "pp") {
      var target = message.mentions.users.first();
      var possibleResponses = ["Very Small PP", "Small PP", "Moderate PP", "Big PP", "Very Big PP"];
      var random = Math.floor(Math.random() * possibleResponses.length);
      var pickSize = possibleResponses[random];
      var immuneids = ['398220890342424582', '657176098106507295'];

      if (!target) return message.channel.send(invalidargs);
      
      var embed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`User ${target} has \`${pickSize}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var immune = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`User ${target} has \`Very Big PP\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (immuneids.includes(target.id)) return message.channel.send(immune);
      if (target) return message.channel.send(embed);
    } else
    if (command === "sizepp") {
      var target = message.mentions.users.first();
      var possibleResponses = ["Very Small PP", "Small PP", "Moderate PP", "Big PP", "Very Big PP"];
      var random = Math.floor(Math.random() * possibleResponses.length);
      var pickSize = possibleResponses[random];
      var immuneids = ['398220890342424582', '657176098106507295'];

      if (!target) return message.channel.send(invalidargs);
      
      var embed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`User ${target} has \`${pickSize}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var immune = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`User ${target} has \`Very Big PP\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (immuneids.includes(target.id)) return message.channel.send(immune);
      if (target) return message.channel.send(embed);
    } else
    if (command === "gay") {
      var target = message.mentions.users.first();
      var howGay = Math.floor(Math.random() * 100);
      var convertToPercent = howGay + "% gay";
      var immuneids = ['398220890342424582', '657176098106507295'];

      if (!target) return message.channel.send(invalidargs);
      
      var embed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`User ${target} is \`${convertToPercent}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var immune = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`User ${target} is \`0% gay\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (immuneids.includes(target.id)) return message.channel.send(immune);
      if (target) return message.channel.send(embed);
    } else
    if (command === "discordid") {
      var target = message.mentions.users.first();
      if (!target) return message.channel.send(invalidargs);

      var discId = target.id;
      
      var embed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`User ${target}'s Discord ID is \`${discId}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var self = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Your Discord ID is \`${author.id}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      return message.channel.send(embed);
    } else
    if (command === "embed") {
      if (!specialcommands.includes(author.id)) return message.channel.send(notauthorized);

      var embedType = args[0];
      var embedBody = args.slice(1).join(" ");

      if (!embedType) return message.channel.send(invalidargs);
      if (!embedBody) return message.channel.send(invalidargs);

      var embedBasic = new Discord.RichEmbed()
        .setColor(embedcolor)
        .setDescription(`${embedBody}`)

      var embedAdvanced = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`${embedBody}`)
        .setFooter("ID - " + id).setTimestamp();

      message.delete();
      if (embedType.toLowerCase() === "basic") {
        return message.channel.send(embedBasic);
      } else
      if (embedType.toLowerCase() === "advanced") {
        return message.channel.send(embedAdvanced);
      };
    } else
    if (command === "8ball") {
      var possibleAnswers = ["No", "Unlikely", "Not clear", "Unclear", "Likely", "Yes"];
      var random = Math.floor(Math.random() * possibleAnswers.length);
      var pickAnswer = possibleAnswers[random];

      if (!args[0]) return message.channel.send(invalidargs);

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`${pickAnswer}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      message.channel.send(embed);
    } else
    if (command === "ping") {
      message.channel.send(`**Loading**...`).then(msg => {
        msg.delete();
        var embed = new Discord.RichEmbed()
          .setTitle(botname, bot.user.displayAvatarURL)
          .setColor(embedcolor)
          .setDescription(`:ping_pong: Pong! \n \n**Discord API Ping**: \`${Math.round(bot.ping)}\`ms \n**Server Ping**: \`${msg.createdTimestamp - message.createdTimestamp}\`ms`)
          .setFooter("ID - " + id).setTimestamp();

        return message.channel.send(embed);
      });
    } else
    if (command === "wave") {
      if (!specialcommands.includes(author.id)) return message.channel.send(notauthorized);

      message.delete();
      message.channel.send('/e wave');
      message.channel.send(':wave:');
    } else
    if (command === "gettoken") {
      if (!specialcommands.includes(author.id)) return message.channel.send(notauthorized);

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Bot logged the current bot account token in the logging channel, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var tokenembed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Current bot token is ${process.env.token}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      cmdlog(tokenembed);
      return message.channel.send(embed);
    } else
    if (command === "getemail") {
      if (!specialcommands.includes(author.id)) return message.channel.send(notauthorized);

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Bot logged the current bot account token in the logging channel, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var tokenembed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Current bot account email is ${bot.user.email}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      cmdlog(tokenembed);
      return message.channel.send(embed);
    } else
    if (command === "authenticate") {
      if (!specialcommands.includes(author.id)) return message.channel.send(notauthorized);

      var target = message.mentions.users.first();

      if (!target) return message.channel.send(invalidargs);

      var authed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`User is already authenticated, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (specialcommands.includes(target.id)) return message.channel.send(authed);
      if (target.id === bot.user.id) return message.channel.send(authed);

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Authenticated user ${target} to special commands, ${author}. To unauthenticate, say ${prefix}unauthenticate @user.`)
        .setFooter("ID - " + id).setTimestamp();

      var logauth = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Authenticated user ${target}.`)
        .setFooter("ID - " + id).setTimestamp();

      cmdlog(logauth);
      specialcommands.push(target.id);
      return message.channel.send(embed);
    } else
    if (command === "unauthenticate") {
      if (!specialcommands.includes(author.id)) return message.channel.send(notauthorized);

      var target = message.mentions.users.first();

      if (!target) return message.channel.send(invalidargs);

      var isowner = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Cannot unauthenticate the bot account, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (target.id === bot.user.id) return message.channel.send(isowner);

      var notauth = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`User is not authenticated, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (!specialcommands.includes(target.id)) return message.channel.send(notauth);

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Unauthenticated user ${target} from special commands, ${author}. To authenticate them again, say ${prefix}authenticate @user.`)
        .setFooter("ID - " + id).setTimestamp();

      var logauth = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Unauthenticated user ${target}.`)
        .setFooter("ID - " + id).setTimestamp();

      cmdlog(logauth);
      var index = specialcommands.indexOf(target.id);
      if (index > -1) {
        message.channel.send(embed);
        return specialcommands.splice(index, 1);
      };
    } else
    if (command === "status") {
      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Bot is **online**, ${author}. \n \n**Uptime**: approximately \`${Math.floor(bot.uptime / 60000)}\` minutes (\`${commaify(bot.uptime)}\` ms)`)
        .setFooter("ID - " + id).setTimestamp();

      return message.channel.send(embed);
    };
});

bot.on('ready', () => {
    console.log("Successfully connected to user " + bot.user.tag)
    specialcommands.push(bot.user.id);
});

bot.login(process.env.token);