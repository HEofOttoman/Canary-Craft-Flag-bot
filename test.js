// test.js
// A testing file to test all sorts of different things

const { Client, AttachmentBuilder, Events, GatewayIntentBits, BaseInteraction } = require('discord.js');

const { token } = require('./config.json');
const { pathToFileURL } = require('url');
const { EmbedBuilder } = require('discord.js'); // To use embeds
const { title } = require('process');
const prefix = '!'

const { SlashCommandBuilder } = require('discord.js');
const { CommandInteraction } = require('discord.js');

// Create a new client (bot) instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers, // Privileged intent, maybe find out how to use without?
        GatewayIntentBits.MessageContent // Privileged intent, maybe find out how to use without?
    ]
});


client.once('ready', () => {
    console.log('Testing bot is ready!');
});

client.on('messageCreate', message => {
    if (message.content === '!sendimage') {
        const attachment = new AttachmentBuilder('./assets/Nordian Flag.png');
        message.channel.send({ content: 'Here is your image:', files: [attachment] });
    }
});

// Using module exports
const { Nordia } = require('./commands/flagNordia.js');
const { Thalizar } = require('./commands/flagThalizar.js');


client.on('messageCreate', (message) => {
    if (message.content === '!Nordia')
        return Nordia.Nordia(message);
    if (message.content === '!Thalizar')
        return Thalizar.Thalizar(message)
});

// Testing the flagTemplate file
const { customflag } = require('./commands/YOUR_FILE_PATH_HERE.js'); // This path should point to your command file

    client.on('messageCreate', (message) => {
        if (message.content === '!myflag')
            return customflag.customflag(message);
    });

// Embed for the flaglist
const flagslist = new EmbedBuilder()
.setColor('DarkGold')
.setTitle('List of all Flag Commands')
.setDescription('All flags currently available in this bot')
.addFields(
    { name: 'Usage: ', value: '`!<flag id>`' }, //
    { name: 'Existing Country Flags', value: '`Nordia`,`Thalizar`,`Nova`,`Jiyustan`' },
    { name: 'Old Country Flags', value: '`Serenthia`, `Luxuria`' },
    { name: 'Minor/legacy flags', value: '`To be added`, ' }
)


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'flaglist') {
        await interaction.reply({ embeds: [flagslist] })
    }
});


client.once('ready', async () => {
    const data = [
        new SlashCommandBuilder()
            .setName('flaglist')
            .setDescription('Lists all flag commands'),
            
    ];
    
    await client.application.commands.set(data);
    console.log('Slash commands registered');
});


client.login(token);