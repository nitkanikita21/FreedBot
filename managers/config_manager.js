
module.exports = class ConfigManager {
    #config = require("../config.json")
    constructor(){
        require('dotenv').config()
    }
    getToken(){
        return process.env.TOKEN;
    }
}