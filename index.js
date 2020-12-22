const countingchannel = 782470394300596225;
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

bot.on("message", message => {
  if (process.env.enabledordisabled === "disabled") return;
  if (message.author.id !== "398220890342424582") return;
  if (message.channel.id !== "790842611446317056") return;

  var number = parseInt(message.content);
  console.log(parseInt(message.content));
  if (isNaN(number)) return;

  setTimeout(function() {
    message.channel.send(number + 1);
  }, 3000);
});

bot.on('ready', () => {
    console.log("Successfully connected to user " + bot.user.tag)
});

bot.login(process.env.token);