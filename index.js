const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { CommandHandler } = require('djs-commands');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['h.']
});

bot.on('ready', () => {
    console.log('========================');
    console.log(`Bot Loaded: ${bot.user.tag}`);
    console.log(`Bot Author: Spacella#0001`);
    console.log(`Servers ${bot.guilds.size}`);
    console.log(`Users using Bot: ${bot.users.size}`);
    console.log('Library: Discord.js')
    console.log('========================');

    bot.user.setActivity(`over ${bot.guilds.size} islands`, { type: 'WATCHING' });

});

bot.on('message', message => {
    if (message.channel.type === 'dm') return;
    if (message.author.type === 'bot') return;
    let args = message.content.split(/ +/g);
    let command = args[0];
    let cmd = CH.getCommand(command);
    if (!cmd) return;

    try {
        cmd.run(bot, message, args);
    } catch(e) {
        console.log(e);
    }
});

bot.login(config.token);
