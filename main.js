const ConfigManager = new (require("./managers/config_manager.js"))()
const BotManager = new (require("./managers/bot_manager.js"))(ConfigManager.getToken())
const DatabaseManager = new (require("./managers/database_manager.js"))()
let CommandManager
BotManager.LogIn().then(()=>{
    CommandManager = new (require("./managers/commands_manager.js"))()
    CommandManager.LoadCommands()
})