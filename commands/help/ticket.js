module.exports = {
    name: "ticket",
    aliases: [""],
    permissions: ["ADMINISTRATOR"],
    description: "Para abrir ticket",
    async execute(client, message, args, discord) {
        // Permisos
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Te faltan permisos para ejecutar este comando")
            // Permisos
            //% BUTTONS
        const btn1 = new discord.MessageButton()
            .setCustomId("ticket")
            .setLabel("Abrir")
            .setEmoji("🎴")
            .setStyle("SUCCESS");
        //% BUTTONS

        //& FILA

        const fila = new discord.MessageActionRow().addComponents(btn1);

        //& FILA

        //# MENSAJES

        const msgB = {
            title: "🛃 | Soporte",
            description: "Abre un ticket para que puedas hablar con nuestro equipo de soporte y asi aclarar alguna duda o ayudarte en algo.",
            color: 3066993,
            footer: {
                text: "EnCubos Network | Discord & Minecraft",
                icon_url: "https://media.discordapp.net/attachments/945744137444016211/945747416563470366/EnCubos.PNG",
            },
        };


        message.channel.send({ embeds: [msgB], components: [fila] });
    },
};
