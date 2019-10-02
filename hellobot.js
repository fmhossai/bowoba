const Discord = require("discord.js");
const client = new Discord.Client();
const pre = "!";
const attach1 = new Discord.Attachment("http://66.media.tumblr.com/65c6bcb9e9547ed07a4042cae90ed930/tumblr_nnve4qxwHr1takspwo2_540.gif")
const request = require("request")

request({
	url:"https://pixabay.com/api/?key=13218092-ba62fb107e3a4e473c2dd61af&q=cats&image_type=photo&pretty=true",
	json:true
},(error,response, body) =>{
	// console.log(error);
	// console.log(response)
	main(body)
}
)


function main(data){
	const attach2 = new Discord.Attachment(data["hits"][0]["largeImageURL"])
	client.on('ready', function(){
		console.log("Constant as " + client.user.tag)
	
		client.user.setActivity("Youtube",{type:"WATCHING"});
	
		client.channels.forEach(function(channel){
			console.log(`- ${channel.name} ${channel.type} ${channel.id}`)
			/* general text id 608140483130294294 */
		})
	
		// let genchan = client.channels.get("608140483130294294");
		// const attach = new Discord.Attachment("https://clipart.wpblink.com/sites/default/files/wallpaper/asuna-clipart/478886/asuna-clipart-furry-478886-2597308.png")
		// genchan.send(attach);
	})
	
	client.on("message",function(message){
		let gen = client.channels.get("608140483130294294");
		if (message.author == client.user){
			return
		}
		let message1 = message.content.split(" ");
		let cmd = message1[0];
		if (!cmd.startsWith(pre)) return;
		if (cmd === `${pre}sungjae`){
			gen.send(attach1)
		}
		if (cmd === `${pre}cats`){
			let h = Math.floor(Math.random()*20)
			let v = new Discord.Attachment(data["hits"][h]["largeImageURL"])
			gen.send(v)
		}
		// message.channel.send("Message Recived: " + message.content + message.author.toString());
		// message.react("😇")
		if (message.content === 'what is my avatar') {
			// Send the user's avatar URL
			message.reply(message.author.avatarURL);
		  }
		
	
	})
	client.login("NjA4MTQwOTE4NTQ1MTg2ODQ4.XUj1sg.UHBEO4Hx6CD_o8dvj728hL20DTQ");
}