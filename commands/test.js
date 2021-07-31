module.exports = new (class Command{
    info = {
        name: "test",
        description: "this is test command",
        example: "test <text>",
        category:"Base"
    } //Info object
    Use(message){ //On use command
        
        let text = message.content.split(" "); text.shift();
        message.reply(text.join(" "))
        
    }
})()