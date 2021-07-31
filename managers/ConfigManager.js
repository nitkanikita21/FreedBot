
module.exports = new (class ConfigManager {
    #config = require("../config.json")
    constructor(){
        require('dotenv').config()
    }
    getToken(){
        return process.env.TOKEN;
    }
    getPrefixes(){
        return this.#config.start_settings.prefixes;
    }
})()