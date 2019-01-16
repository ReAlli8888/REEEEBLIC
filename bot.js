const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523116177669750794")
setInterval(function() {
channel.send(`مكم از هيرررررررررررررررررررررررررررررررررررررررررررر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
