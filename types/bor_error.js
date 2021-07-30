const { MessageEmbed } = require("discord.js");

let TYPE_ERROR = {
    ARGS: "Argiment error",
    UNKNOW_COMMAND:"UnknowCommand error",
    EXECUTE:"Executing error",
    DEFAULT:"Error"
}

class BotError{
    #msg = "An unknown error has occurred";
    #type = TYPE_ERROR.DEFAULT;
    constructor(message,type){
        if(message !== undefined)this.#msg = message ;
        if(type !== undefined)this.#type = this.#type;
    }
    send(channel){
        channel.send(new MessageEmbed()
        .setAuthor(`${this.#type}: ${this.#msg}`,"https://cdn.discordapp.com/attachments/869677675403415564/870730516243038208/Error-512.png")
        .setColor("#fc513a")
        )
    }
}

module.exports = {
    BotError,
    TYPE_ERROR
}