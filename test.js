const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { token } = require('./config.json');

const {SlashCommandBuilder} = require('discord.js')
const { EmbedBuilder } = require('discord.js')

client.once('ready', () => {
    console.log('Testing bot is ready!');
});

client.on('messageCreate', message => {
    if (message.content === '!sendimage') {
        const attachment = new AttachmentBuilder('./assets/Nordian Flag.png');
        message.channel.send({ content: 'Here is your image:', files: [attachment] });
    }
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