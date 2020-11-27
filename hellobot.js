const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


client.on('ready', function(){
		console.log("Constant as " + client.user.tag)
	
		client.user.setActivity("Youtube",{type:"WATCHING"});
	})
	
client.on("message",function(message){
		console.log(message.content)
		if (!message.content.startsWith(config.prefix) || message.author.bot) return;
		const args = message.content.slice(config.prefix.length).trim().split(' ');
		const command = args.shift().toLowerCase();
		if(command === 'hello'){
			message.channel.send("HI")
		}
		if (message.content === 'what is my avatar') {
			// Send the user's avatar URL
			message.reply(message.author.avatarURL);
		  }
		  console.log("HELLO")	
	
	})
client.login(config.token);