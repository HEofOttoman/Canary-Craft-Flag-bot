// Require the necessary discord.js classes
const { Client, AttachmentBuilder, Events, GatewayIntentBits } = require('discord.js');

const { token } = require('./config.json');
const { pathToFileURL } = require('url');
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

// Run this code (only once) to test if the bot is working
client.once(Events.ClientReady, readyClient => {
	console.log(`Bot Ready! Logged in as ${readyClient.user.tag}`);
});

// Simple testing command
client.on('messageCreate', (message) => {
    if (message.content === 'Hello!') {
        message.reply({ content: 'Hey!' });
    }
});

// Handle commands
client.on('messageCreate', (message) => {
    if (message.content === '!Nordia') { // Nordia
        const nordiaflag = new AttachmentBuilder('./assets/Nordian Flag.png');
        message.channel.send({ content: 'Standard of The Sublime Shogunate of Nordia', files: [nordiaflag] });
    }
    if (message.content === '!Serenthia') { // Serenthia
        const serenthiaflag = new AttachmentBuilder('./assets/Serenthia Flag.png');
        message.channel.send({ content: 'Flag of the Kingdom of Serenthia', files: [serenthiaflag] });
    }
    if (message.content === '!Nova') { // Nova
        const novaflag = new AttachmentBuilder('./assets/Thalizar Flag.png'); // add file (current is placeholder)
        message.channel.send({ content: 'Flag of Nova.png', files: [novaflag ]});
    }
    if (message.content === '!Luxuria') { // Luxuria
        const luxuriaflag = new AttachmentBuilder('./assets/Thalizar Flag.png') // add file (current is placeholder)
        message.channel.send({content: 'Flag of Luxuria.png', files: [luxuriaflag]});
    }
    if (message.content === '!Thalizar') { // Thalizar
        const thalizarflag = new AttachmentBuilder('./assets/Thalizar Flag.png')
        message.channel.send({content: 'Flag of the Thalizar Empire.png', files: [thalizarflag]});
    }
});


// Login with client (bot) token
client.login(token);