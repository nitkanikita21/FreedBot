const fs = require("fs");
const path = require("path");

class LogModule {
    #streams = [process.stdout]
    constructor(out_streams){
        this.#streams = out_streams;

    }
    #Write(...str){
        this.#streams.forEach(strm=> {
            strm.write(str.join(""));
        })
    }

    Log(from, ...str){
        this.#Write(`[${new Date().toLocaleTimeString()}] [${path.parse(from).name}] `,str.join(", "),'\n')
    }
    Error(from, ...str){
        this.#Write(`[ERROR] [${new Date().toLocaleTimeString()}] [${path.parse(from).name}] `,str.join(", "),'\n')
    }
    Warn(from, ...str){
        this.#Write(`[WARN] [${new Date().toLocaleTimeString()}] [${path.parse(from).name}] `,str.join(", "),'\n')
    }
}

module.exports = {
    LogModule,
    logger: new LogModule([process.stdout]),
}