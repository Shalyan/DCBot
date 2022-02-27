module.exports = {
  name: "verificar",
  aliases: ["verify"],
  permissions: ["ADMINISTRATOR"],
  description: "Para verificarse",
  async execute(client, message, args, discord) {
    //% BUTTONS
    const btn1 = new discord.MessageButton()
      .setCustomId("acp")
      .setLabel("Verificarme")
      .setEmoji("<a:chec1:945073442808557699>")
      .setStyle("SUCCESS");
    //% BUTTONS

    //& FILA

    const fila = new discord.MessageActionRow().addComponents(btn1);

    //& FILA

    //# MENSAJES

    const msgE = {
      title: "<a:emoji_7:809833434766639134> | Verificacion",
      description: "Dale click al boton para que puedas ver nuestros canales y formes parte de nuestra hermosa comunidad",
      color: 3066993,
      footer: {
        text: "EnCubos Network | Discord & Minecraft",
        icon_url: "https://media.discordapp.net/attachments/945744137444016211/945747416563470366/EnCubos.PNG",
      },
    };


    message.channel.send({ embeds: [msgE], components: [fila] });
  },
};
