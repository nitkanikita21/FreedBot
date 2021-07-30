const { MessageEmbed } = require('discord.js');
const { BotError, TYPE_ERROR } = require("../types/bor_error.js")
const translate = require("google-translate-open-api");

module.exports = new (class Command{
    info = {
        name: "translate",
        description: "this is test command",
        example: "test <text>"
    } //Info object
    async Use(message){ //On use command
        let embed = new MessageEmbed();

        let text_sections = message.content.split("\"");
        let text = text_sections[text_sections.length-2]

        if(text.length > 20){
            new BotError("Превышен лимит символов: 20",TYPE_ERROR.UNKNOW_COMMAND).send(msg.channel)
            return;
        }

        let from_to = text_sections[0].split(" ")
        from_to.shift()

        let from = from_to[0];
        let to = from_to[1];
 
        const result = await translate(text, {
          tld: from,
          to: to,
        });
        const data = result.data[0];
        console.log(`Text: ${text}`);
        console.log(`Translation: ${data}`);

        message.reply(data)
    }
})()