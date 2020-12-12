const permsrolesids = 786931301798117407;
const botchannel = 782470394300596225;
const fetch = require("node-fetch");
const Discord = require("discord.js");
const bot = new Discord.Client();

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
  "nickname"
];

var verified = [
  "478400522211295245",
  "332008871289683978"
];

bot.on('guildMemberAdd', member => {
  if (member.guild.id !== 706723877673500682) return;
  var id = makeid(8) + '-' + makeid(4) + '-' + makeid(4) + '-' + makeid(4) + '-' + makeid(12);
  var bname = "MBHQ Bot";
  var bcolor = "RANDOM";
  var verifyid = 717628325882757160;

  const failembed = new Discord.RichEmbed()
    .setTitle(bname)
    .setColor(bcolor)
    .setDescription(`You are not whitelisted for my server on this Discord account. Please contact Wretcheds for whitelist proof.`)
    .setFooter("ID - " + id).setTimestamp();

  if (!verified.includes(member.id)) return member.send(failembed);

  if (verified.includes(member.id)) return message.guild.member(member).addRole(verifyid);
});

bot.on("message", message => {
    if (message.author.bot) return;

    if (message.content.length >= 1000) return;

    const prefix = '!';
    const botname = 'MBHQ Bot';
    const embedcolor = "RANDOM";
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

    const botchanpls = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Please use this command in the bot channel, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

    if(command === "help"){
      const helpcommand = args[0];
      
      const embed1 = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **help**`)
        .setFooter("ID - " + id).setTimestamp();

      const embedowner = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **status**, **help**, **kick**, **ban**, **nick**, **nickname**, **~~mute~~**, **~~unmute~~**, **verify**, **purge**`)
        .setFooter("ID - " + id).setTimestamp();
    
      if(!helpcommand) {
        if (message.member.roles.has(permsrolesids)) {
          return message.channel.send(embedowner);
        } else
        if (message.channel.id !== botchannel) {
          return message.channel.send(botchanpls);
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
        .setDescription(`Command **help**: \n \nDescription: \`Lists commands in the Bot.\` \n \n**Usage**: \`\`\`${prefix}help - returns the list of commands available to only you. \n${prefix}help command - returns the description + usage for [command].\`\`\` \n \n**Keywords**: \n\`command\` - the command to return the usages and keywords for it.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `help`) return message.channel.send(helpembed);
      if(helpcommand.toLowerCase() === `?`) return message.channel.send(helpembed);
      
      const ballembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **8ball**: \n \nDescription: \`Uses the powers of System.Random to answer your deepest questions.\` \n \n**Usage**: \`\`\`${prefix}8ball [string]\`\`\` \n \n**Keywords**: \n\`string\` - string question you are asking.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `8ball`) return message.channel.send(ballembed);
      
      const ppembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **pp**/**sizepp**: \n \nDescription: \`Calculates your pp size :flushed:\` \n \n**Usage**: \`\`\`${prefix}pp @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `pp`) return message.channel.send(ppembed);
      if(helpcommand.toLowerCase() === `sizepp`) return message.channel.send(ppembed)
      
      const gayembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **gay**: \n \nDescription: \`Calculates how much like Meech you are :flushed:\` \n \n**Usage**: \`\`\`${prefix}gay @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `gay`) return message.channel.send(gayembed);
        
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
        .setDescription(`Command **kick**: \n \nDescription: \`Kicks the target user.\`\n \n**Usage**: \`\`\`${prefix}kick @user [reason] - kicks @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to kick. \n\`reason\` - reason for kick.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `kick`) {
        if (message.member.roles.has(permsrolesids)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(kickembed);
      };

      const banembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **ban**: \n \nDescription: \`Bans the target user.\`\n \n**Usage**: \`\`\`${prefix}ban @user [reason] - bans @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to ban. \n\`reason\` - reason for ban.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `ban`) {
        if (message.member.roles.has(permsrolesids)) {
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
        if (message.member.roles.has(permsrolesids)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(nickembed);
      };

      if(helpcommand.toLowerCase() === `nickname`) {
        if (message.member.roles.has(permsrolesids)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(nickembed);
      };
      
      if(!helpcommand) return;
      
      if(helpcommand !== commands.length) return message.channel.send(embed3);
    } else
    if (command === "?") {

      console.log(message.member.roles);
      const helpcommand = args[0];
      
      const embed1 = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **help**`)
        .setFooter("ID - " + id).setTimestamp();

      const embedowner = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Available commands for user ${author}: \n \n**8ball**, **sizepp**, **gay**, **ping**, **status**, **help**, **kick**, **ban**, **nick**, **nickname**, **~~mute~~**, **~~unmute~~**, **verify**, **purge**`)
        .setFooter("ID - " + id).setTimestamp();
    
      if(!helpcommand) {
        if (message.member.roles.has(permsrolesids)) {
          return message.channel.send(embedowner);
        } else
        if (message.channel.id !== botchannel) {
          return message.channel.send(botchanpls);
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
        .setDescription(`Command **help**: \n \nDescription: \`Lists commands in the Bot.\` \n \n**Usage**: \`\`\`${prefix}help - returns the list of commands available to only you. \n${prefix}help command - returns the description + usage for [command].\`\`\` \n \n**Keywords**: \n\`command\` - the command to return the usages and keywords for it.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `help`) return message.channel.send(helpembed);
      if(helpcommand.toLowerCase() === `?`) return message.channel.send(helpembed);
      
      const ballembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **8ball**: \n \nDescription: \`Uses the powers of System.Random to answer your deepest questions.\` \n \n**Usage**: \`\`\`${prefix}8ball [string]\`\`\` \n \n**Keywords**: \n\`string\` - string question you are asking.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `8ball`) return message.channel.send(ballembed);
      
      const ppembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **pp**/**sizepp**: \n \nDescription: \`Calculates your pp size :flushed:\` \n \n**Usage**: \`\`\`${prefix}pp @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `pp`) return message.channel.send(ppembed);
      if(helpcommand.toLowerCase() === `sizepp`) return message.channel.send(ppembed)
      
      const gayembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **gay**: \n \nDescription: \`Calculates how much like Meech you are :flushed:\` \n \n**Usage**: \`\`\`${prefix}gay @user\`\`\` \n \n**Keywords**: \n\`@user\` - the target user.`)
        .setFooter("ID - " + id).setTimestamp();
      
      if(helpcommand.toLowerCase() === `gay`) return message.channel.send(gayembed);
        
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
        .setDescription(`Command **kick**: \n \nDescription: \`Kicks the target user.\`\n \n**Usage**: \`\`\`${prefix}kick @user [reason] - kicks @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to kick. \n\`reason\` - reason for kick.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `kick`) {
        if (message.member.roles.has(permsrolesids)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(kickembed);
      };

      const banembed = new Discord.RichEmbed()
        .setTitle(botname)
        .setColor(embedcolor)
        .setDescription(`Command **ban**: \n \nDescription: \`Bans the target user.\`\n \n**Usage**: \`\`\`${prefix}ban @user [reason] - bans @user from server with [reason].\`\`\` \n \n**Keywords**: \n\`@user\` - user to ban. \n\`reason\` - reason for ban.`)
        .setFooter("ID - " + id).setTimestamp();

      if(helpcommand.toLowerCase() === `ban`) {
        if (message.member.roles.has(permsrolesids)) {
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
        if (message.member.roles.has(permsrolesids)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(nickembed);
      };

      if(helpcommand.toLowerCase() === `nickname`) {
        if (message.member.roles.has(permsrolesids)) {
            return message.channel.send(embed3);
        } else
        return message.channel.send(nickembed);
      };
      
      if(!helpcommand) return;
      
      if(helpcommand !== commands.length) return message.channel.send(embed3);
    } else
    if (command === "pp") {
      if (message.channel.id !== botchannel) return message.channel.send(botchanpls);
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
      if (message.channel.id !== botchannel) return message.channel.send(botchanpls);
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
      if (message.channel.id !== botchannel) return message.channel.send(botchanpls);
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
      if (message.channel.id !== botchannel) return message.channel.send(botchanpls);
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
    if (command === "8ball") {
      if (message.channel.id !== botchannel) return message.channel.send(botchanpls);
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
      if (message.channel.id !== botchannel) return message.channel.send(botchanpls);
      message.channel.send(`**Loading**...`).then(msg => {
        msg.delete();
        var embed = new Discord.RichEmbed()
          .setTitle(botname, bot.user.displayAvatarURL)
          .setColor(embedcolor)
          .setDescription(`:ping_pong: Pong! \n \n**Discord API Ping**: \`${Math.round(bot.ping)}\`ms \n**Bot Ping**: \`${msg.createdTimestamp - message.createdTimestamp}\`ms`)
          .setFooter("ID - " + id).setTimestamp();

        return message.channel.send(embed);
      });
    } else
    if (command === "kick") {
      if (!message.member.roles.has(permsrolesids)) return message.channel.send(notauthorized);

      var target = message.mentions.users.first();
      var reason = args.slice(1).join(" ");

      if (!target) return message.channel.send(invalidargs);
      if (!reason) return message.channel.send(invalidargs);

      var kickfail = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Failed to kick ${target}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var kickdm = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`You have been kicked from ${message.guild.name}, by user ${author} with reason \`${reason}\`, ${target}. \n \n**Please follow the rules in order to avoid being kicked next time.**`)
        .setFooter("ID - " + id).setTimestamp();

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Successfully kicked ${target}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      message.guild.member(target).kick(reason);
      var successdm = target.send(kickdm);

      setTimeout(function() {
        if (message.guild.member(target)) {
          successdm.delete();
          return message.channel.send(kickfail);
        } else
        return message.channel.send(embed);
      }, 500);
    } else
    if (command === "ban") {
      if (!message.member.roles.has(permsrolesids)) return message.channel.send(notauthorized);

      var target = message.mentions.users.first();
      var reason = args.slice(1).join(" ");

      if (!target) return message.channel.send(invalidargs);
      if (!reason) return message.channel.send(invalidargs);

      var banfail = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Failed to ban ${target}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var bandm = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`You have been banned from ${message.guild.name}, by user ${author} with reason \`${reason}\`, ${target}. \n \n**Do not attempt to bypass this ban - you'll just be rebanned again. Please follow the rules in order to avoid being banned next time.**`)
        .setFooter("ID - " + id).setTimestamp();

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Successfully banned ${target}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      message.guild.member(target).kick(reason);
      var successdm = target.send(bandm);

      setTimeout(function() {
        if (message.guild.member(target)) {
          successdm.delete();
          return message.channel.send(banfail);
        } else
        return message.channel.send(embed);
      }, 500);
    } else
    if (command === "nick") {
      if (!message.member.roles.has(permsrolesids)) return message.channel.send(notauthorized);

      var target = message.mentions.users.first();
      var nnn = args.slice(1).join(" ");

      if (!target) return message.channel.send(invalidargs);
      if (!nnn) return message.channel.send(invalidargs);

      var nickfail = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Failed to ban ${target}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var toobigname = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Nickname is too long, ${author}. Should be between 1 and 32 characters long.`)
        .setFooter("ID - " + id).setTimestamp();

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Successfully changed ${target}'s nickname to \`${nnn}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (nnn.length > 32) return message.channel.send(toobigname);

      message.member.setNickname(nnn).catch(message.channel.send(nickfail));
    } else
    if (command === "nickname") {
      if (!message.member.roles.has(permsrolesids)) return message.channel.send(notauthorized);

      var target = message.mentions.users.first();
      var nnn = args.slice(1).join(" ");

      if (!target) return message.channel.send(invalidargs);
      if (!nnn) return message.channel.send(invalidargs);

      var nickfail = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Failed to ban ${target}, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var toobigname = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Nickname is too long, ${author}. Should be between 1 and 32 characters long.`)
        .setFooter("ID - " + id).setTimestamp();

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Successfully changed ${target}'s nickname to \`${nnn}\`, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (nnn.length > 32) return message.channel.send(toobigname);

      message.member.setNickname(nnn).catch(message.channel.send(nickfail));
    } else
    if (command === "verify") {
      if (!message.member.roles.has(permsrolesids)) return message.channel.send(notauthorized);

      var target = message.mentions.users.first();

      if (!target) return message.channel.send(invalidargs);

      var embed = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Successfully manually verified ${target} to the server, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var alreadyverified = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`User ${target} is already verified, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (!message.guild.member(target).roles.has(717628325882757160)) {
        message.guild.member(target).addRole(717628325882757160);
      } else
      return message.channel.send(alreadyverified);
    } else
    if (command === "purge") {
      if (!message.member.roles.has(permsrolesids)) return message.channel.send(notauthorized);

      var messageAmount = args[0];

      if (!messageAmount) return message.channel.send(invalidargs);

      var toomanypurge = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Message amount set out of range, should be between \`1\` and \`100\`, purging \`100\` messages, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      var toolittlepurge = new Discord.RichEmbed()
        .setTitle(botname, bot.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription(`Message amount set out of range, should be between \`1\` and \`100\`, purging \`1\` messages, ${author}.`)
        .setFooter("ID - " + id).setTimestamp();

      if (messageAmount > 100) {
        message.channel.send(toomanypurge);
        return message.channel.bulkDelete(100);
      } else
      if (messageAmount < 1) {
        message.channel.send(toolittlepurge);
        return message.channel.bulkDelete(100);
      } else
      message.channel.send(embed);
      return message.channel.bulkDelete(messageAmount);
    };
});

bot.on('ready', () => {
    console.log("Successfully connected to user " + bot.user.tag)
});

bot.login(process.env.token);