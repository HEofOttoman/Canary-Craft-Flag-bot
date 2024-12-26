# Canary Craft Flag Bot
![Demo Screenshot](<https://github.com/HEofOttoman/Canary-Craft-Flag-bot/blob/9a71f9d7baeaf9fcaa67f5ba9e4769225af0108b/Assets/Demo%20Screenshot%202.png>)

A Discord bot made with Discord.JS that displays the flags of countries from the Canary Craft/ADSCraft Minecraft server.

Disclaimer: This bot uses the following privileged intents to function:
- MessageContent
- ServerMembers

### Features:
Features the following flags, along with a subtitle:
- Nordia
- Serenthia
- Thalizar
- Nova
- Luxuria

### Checklist
- [ ] Add a list of commands
- [x] Attach images of the flags to the responses
- [x] Add Nordia flag
- [x] Add Serenthia flag
- [x] Add Thalizar flag
- [x] Add Nova flag
- [x] Add Luxuria flag
- [ ] Add Jiyustan flag
- [ ] Add other 'minor' flags
    - [ ] Eregore (Realm of Nordia)
    - [ ] Kastavia (Realm of Nordia)
    - [ ] The Red Skull (Defunct Country)
    - [ ] Laxamentum (Defunct Country)
    - [ ] Rainy and tgforce14's 'rebellion flag'
    
- [ ] Enable customisation somehow
- [ ] ~~Possibly rework reply system to use embeds~~ 
- [ ] ~~Possibly change how commands are handled to use a different system~~

### How to use
Use the [bot invite](https://discord.com/oauth2/authorize?client_id=1309719801165385728&permissions=116736&integration_type=0&scope=bot), and invite the bot to your desired server.

To display one of the flags, type in one of the commands below:
- !Nordia
- !Thalizar
- !Luxuria
- !Nova
- !Serenthia

### Self-Hosting
1. Clone the repository onto your device <br>
    `gh repo clone HEofOttoman/Canary-Craft-Flag-bot`

2. Install NodeJS
    
3. Install Discord.js. <br>
    `npm install discord.js`

4. Create a file named `config.json` 

5. Create a variable named `token` in `config.json`

6. Inside the `token` variable, insert your own bot

7. Your `config.json` file should look like this:
    `{"token" : "your_token_here"}`

8. Run `node index.js`

### Credits
- Bot & code © HenryWauzivuff.
- Made for Hack Club High Seas