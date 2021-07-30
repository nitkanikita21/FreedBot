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
        .setAuthor(`${type}: ${msg}`,"https://discord.com/assets/baf44b1c1e3c284e9b263d08b426bdc5.svg")
        .setColor("#fc513a")
        )
    }
}

module.exports = {
    BotError,
    TYPE_ERROR
}