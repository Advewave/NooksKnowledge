const Discord = require("discord.js");

module.exports = class ping {
    constructor(){
        this.name = 'ping',
        this.alias = ['ping'],
        this.usage = 'ping'
    }

    run(bot, message, args){
            let ping = message.createdTimestamp - message.createdTimestamp
            let embed = new Discord.RichEmbed();

            embed.setTimestamp()
            embed.addField('Bot Latency',
            `${ping}ms`)
            embed.addField('API Latency',
            `${Math.round(bot.ping)}ms`)

            message.channel.send(embed)
    }
}