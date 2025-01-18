// Require the necessary discord.js classes
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

// Embed for the flaglist
const flagslist = new EmbedBuilder()
.setColor('Navy')
.setTitle('List of all Flag Commands')
.setDescription('All flags currently available in this bot')
.addFields(
    { name: 'Usage: ', value: '`!<flag id>`' }, // Empty value
    { name: 'Existing Country Flags', value: '`Nordia`,`Thalizar`,`Nova`,`Jiyustan`' },
    { name: 'Old Country Flags', value: '`Serenthia`, `Luxuria`, `Red Skull`' },
    { name: 'Minor/legacy flags', value: '`Eregore` (Nordian Realm),' }
)

// List of all commands and flags (legacy command version using '!')
client.on('messageCreate', (message) => {
    if (message.content === '!flaglist') {
        message.reply({ embeds: [flagslist] }) // Send Embed
    }
})

// Registering the Slash Command (replying to)
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'flaglist') {
        await interaction.reply({ embeds: [flagslist] })
        
    }
});

// Register commands globally
client.once('ready', async () => {
    const data = [
        new SlashCommandBuilder()
            .setName('flaglist') // Slash command to list all flags
            .setDescription('Lists all commands and flags')
    ];
    
    await client.application.commands.set(data);
    console.log('Slash command(s) registered!');
});



// Handle '!' commands
client.on('messageCreate', (message) => {
    if (message.content === '!Nordia') { // Nordia
        const nordiaflag = new AttachmentBuilder('./assets/Nordian Flag.png');
        message.channel.send({ content: 'Standard of The Sublime Shogunate of Nordia', files: [nordiaflag] });
    }
    
    if (message.content === '!Serenthia') { // Serenthia
        const serenthiaflag = new AttachmentBuilder('./assets/Serenthia Flag.png');
        message.channel.send({ content: 'Flag of the Kingdom of Serenthia', files: [serenthiaflag] });
    }

    if (message.content === '!Jiyustan') { // Jiyustan
            const jiyustanflag = new AttachmentBuilder('./assets/Jiyustan Flag.png');
            message.channel.send({content: 'Flag of Jiyustan', files: [jiyustanflag] });
    }

    if (message.content === '!Nova') { // Nova
        const novaflag = new AttachmentBuilder('./assets/Nova Flag.png');
        message.channel.send({ content: 'Flag of the Republic of Nova', files: [novaflag ]});
    }
    
    if (message.content === '!Luxuria') { // Luxuria
        const luxuriaflag = new AttachmentBuilder('./assets/Luxuria Flag.png')
        message.channel.send({content: 'Flag of Luxuria', files: [luxuriaflag]});
    }
    
    if (message.content === '!Thalizar') { // Thalizar
        const thalizarflag = new AttachmentBuilder('./assets/Thalizar Flag.png')
        message.channel.send({content: 'Flag of the Thalizar Empire', files: [thalizarflag]});
    }

    if (message.content === '!Eregore') { // Eregore
        const eregoreflag = new AttachmentBuilder('./assets/Eregore Flag.png') // *This flag may be slightly inaccurate
        message.channel.send({content: 'Flag of Eregore', files: [eregoreflag]});
    }
    if (message.content === '!Red Skull') { // Red Skull
        const redskullflag = new AttachmentBuilder('./assets/Red Skull Flag.png') // *This flag may be slightly inaccurate
        message.channel.send({content: 'Flag of the Red Skull Sultanate', files: [redskullflag]})
    }

});


// Login with client (bot) token
client.login(token);