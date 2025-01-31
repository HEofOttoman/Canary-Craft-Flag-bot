// Import necessary Discord.js classes
const { AttachmentBuilder } = require('discord.js');
const { pathToFileURL } = require('url');
const { SlashCommandBuilder } = require('discord.js');
const { CommandInteraction } = require('discord.js');

// Export command module
const customflag = { /// Rename this to whatever you want 
    customflag: function(message) {
                const customflag = new AttachmentBuilder('./assets/YOUR_FLAG_PATH_HERE.png'); // This path should point to your desired image
                message.channel.send({ content: 'YOUR_CAPTION_HERE', files: [customflag] }); // Change 'YOUR_CAPTION_HERE' to  your desired caption description (message to send with image)
            }
};

module.exports = {
    customflag,
}