const { MessageEmbed } = require("discord.js");
const CommandManager = require("../managers/CommandsManager");
const ConfigManager = require("../managers/ConfigManager");
const { logger } = require("../modules/LoggerModule");

module.exports = new (class Command{
    info = {
        name: "help",
        description: "Help command",
        example: "help",
        category:"Base"
    } //Info object

    settings = {
        title: "Помощь по командам",
        description:[
            '```',
            'Здесь можно получить справку по командам',
            '```'
        ],
        color:"#3bcbff",
    }

    Use(message){ //On use command

        let categorys = {}

        let embed = new MessageEmbed()
            .setTitle(this.settings.title)
            .setDescription(this.settings.description ? this.settings.description.join("\n") : "```Помощь по командам```")
            .setFooter('by Нитка Никита#6240',"https://cdn.discordapp.com/avatars/391549863185219585/4e4610fc5d4e17f6133153755013ab89.png?size=2048")
            .setColor("#3bcbff");
        CommandManager.GetInfoCommands().forEach((inf) => {
            if(categorys[inf.category] == null)
                categorys[inf.category] = [];
            categorys[inf.category].push(inf);
        })

        Object.keys(categorys).forEach(ctg => {
            let commandsInfo = categorys[ctg].map(inf => {
                return [
                    `:small_orange_diamond: **${inf.name}**`,
                    `\`${ConfigManager.getPrefixes()[0]}${inf.example}\``,
                    `*${inf.description}*`
                ].join("\n")
            })
            commandsInfo.push("=========================")

            embed.addField(`Категория ${ctg}`,commandsInfo.join("\n \n"))
        })
        message.channel.send(embed);
        
    }
})()