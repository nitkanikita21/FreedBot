const fs = require("fs");

module.exports = new (class CommandManager{
    #commands = {};
    
    LoadCommands(){
        fs.readdirSync("./commands").forEach(file_name=>{
            let cmd = require("../commands/"+file_name);
            let commandName = cmd.info.name; 
            this.#commands[commandName] = cmd;

            console.log(commandName+" ✔")
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