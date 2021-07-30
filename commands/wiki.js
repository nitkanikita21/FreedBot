const Discord = require('discord.js')
const axios = require('axios').default
const REGION = 'ru';

const search = async (request)=>{
    let URL_search = `https://${REGION}.wikipedia.org/w/api.php?format=json&action=query&srsearch=${encodeURI(request.replace(/ \g/,"_"))}&list=search`
    let response = await axios.request(URL_search)
    if(response.data.query.searchinfo.totalhits == 0)return null;

    return response.data.query.search.map(async (page_short)=>{
        let URL_page = `https://${REGION}.wikipedia.org/w/api.php?format=json&action=query&titles=${encodeURI(page_short.title.replace(/ \g/,"_"))}&prop=description`
        let page = await axios.request(URL_page)
        page = page.data.query.pages[page_short.pageid];
        return {
            title:page.title,
            url:`https://${REGION}.wikipedia.org/wiki/${encodeURI(page.title)}`,
            desc: page.description ? page.description : "Description not found"
        }
    })
}

module.exports = new (class Command{
    info = {
        name: "wiki",
        description: `search wiki pages in https://${REGION}.wikipedia.org`,
        example: "wiki <request>"
    } //Info object
    async Use(message){ //On use command
        
        let text = message.content.split(" "); text.shift(); text = text.join(" ")
        
        let embed = new Discord.MessageEmbed()
        .setColor("#aaaaaa")
        .setAuthor("Wikipedia results:","https://cdn.discordapp.com/attachments/869677675403415564/870749589114880010/images.png");

        let results = await search(text);

        if(results == null){
            embed.addField("Results not found!","Try to enter the request differently")
        }else{
            let fields = []
            for(let i = 0; i < results.length; i++){
                let obj = await results[i];
                fields.push(`**[${obj.title}](${obj.url})**\n${obj.desc}`);
            }
            embed.description = fields.join("\n \n")

        }
        message.channel.send(embed);
    }
})()