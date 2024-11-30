const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { token } = require('./config.json');

client.once('ready', () => {
    console.log('Testing is ready!');
});

client.on('messageCreate', message => {
    if (message.content === '!sendimage') {
        const attachment = new AttachmentBuilder('./assets/Nordian Flag.png');
        message.channel.send({ content: 'Here is your image:', files: [attachment] });
    }
});

client.login(token);