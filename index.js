const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = process.env.DISCORD_TOKEN; // El token se guarda como variable de entorno

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  // Ejemplo: Responder al comando "!ping"
  if (message.content === '!ping') {
    message.channel.send('¡Pong! 🏓');
  }

  // Aquí va la lógica para controlar los autobots en Agar.io (seguir, comer, etc)
});

client.login(TOKEN);
