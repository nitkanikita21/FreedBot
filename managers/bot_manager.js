const Discord = require("discord.js");

module.exports = class BotManager{
    client = new Discord.Client();
    #token = "";
    constructor(token){
        this.#token = token;
    }
    LogIn(){
        return this.client.login(this.#token);
    }
}