const { MessageEmbed } = require("discord.js");

module.exports= {
    name: "say",
    description: "El bot repetirá la imagen que subas o el texto que escribas",
    async execute(client, message, args , discord) {
        let sayimage = message.attachments.first()
        const saytext = args.join(" ")
        if(!saytext && !sayimage) return message.channel.send('Debes escribir algo o enviar una imagen!')

        const sayembed = new MessageEmbed()
        .setDescription(saytext)
        if(sayimage){sayembed.setImage(sayimage.url)}

        message.channel.send({ embeds: [sayembed] })

    }
}; 