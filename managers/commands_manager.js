const fs = require("fs");

module.exports = class CommandManager{
    commands = [];
    
    LoadCommands(){
        fs.readdirSync("./commands").forEach(file_name=>{
            this.commands.push(require("../commands/"+file_name));
            console.log(file_name+" ✔")
        })
        
    }
}