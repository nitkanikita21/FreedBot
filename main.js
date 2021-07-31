const ConfigManager = require("./managers/ConfigManager.js");
const { logger } = require("./modules/LoggerModule.js");
const BotManager = new (require("./managers/BotManager.js"))(ConfigManager.getToken())
const LoggerModule = require('./modules/LoggerModule.js');
BotManager.LogIn()