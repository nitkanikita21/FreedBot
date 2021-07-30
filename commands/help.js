const { MessageEmbed } = require("discord.js");
const CommandManager = require("../managers/commands_manager");

module.exports = new (class Command{
    info = {
        name: "help",
        description: "Help command",
        example: "help"
    } //Info object
    Use(message){ //On use command
        let embed = new MessageEmbed()
            .setTitle("Help")
            .setColor("#3bcbff");
        CommandManager.GetInfoCommands().forEach((inf)=>{
            embed.addField(inf.name,[
                `\`${inf.example}\``,
                `*${inf.description}*`
            ].join("\n"))
        })
        message.channel.send(embed);
        
    }
})()