const ConfigManager = require("./managers/config_manager.js")
const BotManager = new (require("./managers/bot_manager.js"))(ConfigManager.getToken())
BotManager.LogIn()