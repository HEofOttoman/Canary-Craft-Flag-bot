// Require the necessary discord.js classes
const { AttachmentBuilder } = require('discord.js');
const { pathToFileURL } = require('url');
const { SlashCommandBuilder } = require('discord.js');
const { CommandInteraction } = require('discord.js');

// Handle '!' commands with the file module export
const Thalizar = {
    Thalizar: function(message) {
                const thalizarflag = new AttachmentBuilder('./assets/Thalizar Flag.png')
                message.channel.send({content: 'Flag of the Thalizar Empire', files: [thalizarflag]});
            }
};

module.exports = {
    Thalizar,
}