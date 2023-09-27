var { Client, GatewayIntentBits } = require('discord.js');
  var { GatewayIntentBits, Partials, Client, Events } = require("discord.js"); 
function ms(milliseconds){
    const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
	return {
		days: roundTowardsZero(milliseconds / 86400000),
		hours: roundTowardsZero(milliseconds / 3600000) % 24,
		minutes: roundTowardsZero(milliseconds / 60000) % 60,
		seconds: roundTowardsZero(milliseconds / 1000) % 60,
		milliseconds: roundTowardsZero(milliseconds) % 1000,
		microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
		nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
	};
}
const client = new Client({
    fetchAllMembers: true,
    restTimeOffset: 0,
    failIfNotExists: false,
    shards: "auto",
    shardCount: 5,
    allowedMentions: {
      parse: ["roles", "users"],
      repliedUser: true,
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER', 'MANAGE_MESSAGE', 'DIRECT_MESSAGE', Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction],
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildVoiceStates
    ]
  });
const express = require('express');
const app = express();
const port = 3000;
const server = app.listen(port, () => {
  
});
const host = server.address().address;
  const portt = server.address().port;
  console.log(`Server listening at http://${host}:${port}`);


app.get("/", (q, res) => {
    res.send("hii");
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
client.on("messageCreate", async(msg) => {
if(msg.content.startsWith(".uptime")){
    msg.reply({content: `${ms(client.uptime).days}:${ms(client.uptime).hours}:${ms(client.uptime).minutes}:${ms(client.uptime).seconds}:`});
  }
});
client.on("messageCreate", async(msg) => {
if(msg.content.startsWith(".ping")){
    msg.reply({content: `${client.ws.ping}`});
  }
});

			client.on("messageCreate", async(msg) => {
if(msg.content.startsWith(".server")){
    msg.reply({content: `${host}:${portt}`});
  }
});

client.login(process.env.TOKEN);
