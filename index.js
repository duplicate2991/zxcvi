var { Client, GatewayIntentBits } = require('discord.js');
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
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

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
    message.reply({content: `${ms(client.uptime).days}:${ms(client.uptime).hours}:${ms(client.uptime).minutes}:${ms(client.uptime).seconds}:`});
  }
});

client.login(process.env.TOKEN);
