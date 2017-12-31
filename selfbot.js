const Discord = require ("discord.js")
const bot = new Discord.Client();
const config = require ('./config.json');

//Ready
bot.on("ready", () => {
  var Data = new Date();
  bot.user.setStatus('Idle');
	console.log('___________________________________________________________________');
	console.log('Prefix: ' + config.prefix);
	console.log('___________________________________________________________________');
	console.log('Ping: ' + bot.ping + 'ms');
	console.log('___________________________________________________________________');
	console.log('Guilds: ' + bot.guilds.size);
	console.log('___________________________________________________________________');
	console.log('Hour: ' + Data.getHours() + ':' + Data.getMinutes() + ':' + Data.getSeconds());
	console.log('___________________________________________________________________');
});

//Message
bot.on('message', (message) => {
	if (message.content === config.prefix + "ping") {
 	  message.reply(`PONG! \nPing: **${bot.ping}** ms`);
    message.react("✅");
	}
	if (message.content === config.prefix + "pong") {
		message.reply(`PING! \nPing: **${bot.ping}** ms`);
		message.react("✅");
  }
});

//Login
bot.login(config.token);
