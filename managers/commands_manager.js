const fs = require("fs");

class Command{
    name = "";
    description = "";
    use();
}

module.exports = class CommandManager{
    commands = [];
    
    LoadCommands(){
        fs.readdirSync("./commands").forEach(file_name=>{
            this.commands.push(require("./commands/"+file_name));
            console.log(file_name+" ✔")
        })
        
    }
}