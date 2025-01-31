# Canary Craft Flag Bot
![Demo Screenshot](<https://github.com/HEofOttoman/Canary-Craft-Flag-bot/blob/9a71f9d7baeaf9fcaa67f5ba9e4769225af0108b/Assets/Demo%20Screenshot%202.png>)

A Discord bot made with Discord.JS that displays the flags of countries from the Canary Craft/ADSCraft Minecraft server.

Disclaimer: This bot uses the following privileged intents to function:
- MessageContent
- ServerMembers

### Features:
Features the following flags, along with a subtitle:
- Nordia
- Jiyustan
- Thalizar
- Nova
- Luxuria
- Serenthia
- Red Skull
- Eregore

### Checklist
- [x] Add a list of commands
- [x] Attach images of the flags to the responses
- [x] Add Nordia flag
- [x] Add Serenthia flag
- [x] Add Thalizar flag
- [x] Add Nova flag
- [x] Add Luxuria flag
- [x] Add Jiyustan flag
- [x] Distinguish between Jiyustan and Serenthia
- [ ] Add other 'minor' flags
    - [x] Eregore (Realm of Nordia)
    - [ ] Kastavia (Realm of Nordia)
    - [x] The Red Skull (Defunct Country)
    - [ ] Laxamentum (Defunct Country)
    - [ ] Rainy and tgforce14's 'rebellion flag'
    - [ ] Old Nova flag
    
- [x] Enable customisation somehow (WIP)
- [ ] Add better artwork and assets
    - [x] Edit certain flags to look better
    - [ ] Add a better banner
- [ ] Possibly rework reply system to use embeds
- [ ] Change how commands are handled to use a modular system
    - [x] Started work on a modular system using module exports.
        > This will allow some customisation through `./commands`   
    - [ ] Replace the current messy command handling system in bot.js with the slightly less messy modular system*

### How to use
Use the [bot invite](https://discord.com/oauth2/authorize?client_id=1309719801165385728&permissions=116736&integration_type=0&scope=bot), and invite the bot to your desired server.

To see a list of all commands, use `/flaglist`. To display one of the flags, type in one of the commands displayed

<details>
<summary>List of all commands currently featured in the bot</summary>
<ul>
<li> /flaglist </li>
<li> !Nordia </li>
<li> !Thalizar </li>
<li> !Luxuria </li>
<li> !Nova </li>
<li> !Jiyustan </li>
<li> !Serenthia </li>
<li> !Red Skull </li>
<li> !Eregore </li>
</ul>
</details>

### Self-Hosting
1. Clone the repository onto your device <br>
    ```
    gh repo clone HEofOttoman/Canary-Craft-Flag-bot
    ```

2. Install NodeJS
    
3. Install Discord.js with npm. <br>
    ```
    npm install discord.js
    ```

4. Create a JSON file named `config.json` 

5. Create a variable named `token` in `config.json`

6. Inside the `token` variable, insert your own bot

7. Your `config.json` file should look like this:
    ```
    {"token" : "your_token_here"}
    ```

8. Run `bot.js`
    ```
    node bot.js
    ```

### Customisation (WIP)
Modular customisation is a work in progress, but customisation can directly be done through `bot.js`.

#### Using the `if` chain in `bot.js`
This method 

1. Create your own instance of the bot (see )
2. Create the flag/image you wish to display, and put it in the `./assets` folder.

3. Customise the following code to suit your flag.
    ```
    client.on('messageCreate', (message) => {
        if (message.content === '!YOUR_COMMAND_HERE') {
            const myflag = new AttachmentBuilder('./assets/YOUR_FLAG_PATH_HERE.png');
            message.channel.send({ content: 'YOUR_FLAG_HERE', files: [myflag] });
        }
    });
    ```

4. Paste your new code within `bot.js`.

5. Run the bot and test your new command in Discord. 

#### Using command modules in `./commands`
This method of customisation has not yet been fully implemented, but this would be the method of customisation using it.

1. Create your own instance of the bot by following the instructions in the 'Self-Hosting' section above.

2. Create your command file within the `./commands` folder. 

3. Paste this template into the file (or use the template file already provided)
    ```
    // Import necessary Discord.js classes
    const { AttachmentBuilder } = require('discord.js');
    const { pathToFileURL } = require('url');
    const { SlashCommandBuilder } = require('discord.js');
    const { CommandInteraction } = require('discord.js');

    // Export command module
    const customflag = {
        customflag: function(message) {
                    const customflag = new AttachmentBuilder('./assets/YOUR_FLAG_PATH_HERE.png'); // This path should point to your desired image 
                    message.channel.send({ content: 'YOUR_CAPTION_HERE', files: [customflag] });
                }
    };

    module.exports = {
        customflag,
    }
    ```

4. Paste the following code within `bot.js`. This command will call the function from your command file.
    ```
    const { customflag } = require('./commands/YOUR_FILE_PATH_HERE.js'); // This path should point to your command file

    client.on('messageCreate', (message) => {
        if (message.content === '!myflag')
            return customflag.customflag(message);
    });
    ```
5. Run the bot and test the command in Discord.

### Credits
- Bot & code © HenryWauzivuf 2025.
- Made for Hack Club High Seas