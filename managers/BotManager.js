const Discord = require("discord.js");

const CommandManager = require("./CommandsManager.js")
const ConfigManager = require("./ConfigManager.js")
const { BotError, TYPE_ERROR } = require("../types/bor_error.js")
CommandManager.LoadCommands()


module.exports = class BotManager{
    client = new Discord.Client();
    #token = "";
    constructor(token){
        this.#token = token;
        this.client.on("message",(msg)=>{
            for(let i = 0; i < ConfigManager.getPrefixes().length; i++){
                let p = ConfigManager.getPrefixes()[i];
                if(msg.content.startsWith(p)){
                    //if the message starts with one of the prefixes
                    
                    let commandName = msg.content.split(" ")[0];
                    commandName = commandName.replace(p,"");
                    
                    console.log(commandName)

                    if(!CommandManager.RunCommand(commandName,msg)){
                        new BotError("Упс... Команда не найдена!",TYPE_ERROR.UNKNOW_COMMAND).send(msg.channel)
                    }

                    break;
                }
            }
        })
    }
    LogIn(){
        return this.client.login(this.#token);
    }

}