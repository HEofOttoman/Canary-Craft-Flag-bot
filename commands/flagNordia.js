// Require the necessary discord.js classes
const { AttachmentBuilder } = require('discord.js');
const { pathToFileURL } = require('url');
const { SlashCommandBuilder } = require('discord.js');
const { CommandInteraction } = require('discord.js');

// Handle '!' commands with the file module export
const Nordia = {
    Nordia: function(message) {
                const nordiaflag = new AttachmentBuilder('./assets/Nordian Flag.png');
                message.channel.send({ content: 'Standard of The Sublime Shogunate of Nordia', files: [nordiaflag] });
            }
};

module.exports = {
    Nordia,
}