// Import necessary Discord.js
const Discord = require('discord.js')
const bot = new Discord.Client()

// Import the Token for the bot from the config
const Token = require('./config.json')

const prefix = '!'

bot.on('message', (message) => {
    if (!message.content.startsWith(prefix)) return 
    var command = message.content.slice(prefix.length)
    if (command == 'hello') {
        message.reply('world')
    }
})


// Login into bot?s
bot.login('Token')