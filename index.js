// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const prefix = '!'

// Create a new client (bot) instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers, // Privileged intent, find out how to use wihtout
        GatewayIntentBits.MessageContent // Privileged intent, find out how to use without
    ]
});

// When the client is ready, run this code (only once) to test if the bot is working
client.once(Events.ClientReady, readyClient => {
	console.log(`Bot Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (message) => {
    
});

client.on('messageCreate', (message) => {
    if (message.content === 'Hello') {
        message.reply('Hey!');
    }
    if (message.content === '!Nordia') {
        message.reply('Standard of The Sublime Shogunate of Nordia'); // Nordian Flag
    }
    if (message.content === '!Serenthia') {
        message.reply('Flag of the Kingdom of Serenthia');
    }
});

// Log in to Discord with your client's token
client.login(token);