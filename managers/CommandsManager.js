const fs = require("fs");
const { logger } = require("../modules/LoggerModule");

module.exports = new (class CommandManager{
    #commands = {};
    
    LoadCommands(){
        fs.readdirSync("./commands").forEach(file_name=>{
            let cmd = require("../commands/"+file_name);
            let commandName = cmd.info.name; 
            this.#commands[commandName] = cmd;

            logger.Log(__filename,`✔ Loaded ${commandName}`)
        })
    }

    RunCommand(commandName,msg){
        if(this.#commands[commandName] !== undefined){
            this.#commands[commandName].Use(msg);
            return true;
        }else{
            return false;
        }
    }
    GetInfoCommands(){
        return Object.keys(this.#commands).map(name=>{
            let cmd = this.#commands[name].info;
            return cmd;
        })
    }
}) ()