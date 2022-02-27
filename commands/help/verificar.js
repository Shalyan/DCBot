module.exports = {
  name: "verificar",
  aliases: ["verify"],
  permissions: ["ADMINISTRATOR"],
  description: "Para verificarse",
  async execute(client, message, args, discord) {
    //% BUTTONS
    const btn1 = new discord.MessageButton()
      .setCustomId("verify")
      .setLabel("Verificarme")
      .setStyle("SUCCESS");
    //% BUTTONS

    //& FILA

    const fila = new discord.MessageActionRow().addComponents(btn1);

    //& FILA

    //# MENSAJES

    const msgE = {
      title: "Verificacion | <a:emoji_7:809833434766639134>",
      description: "Dale click al boton para que puedas ver nuestros canales y formes parte de nuestra hermosa comunidad",
      color: 3066993,
    };

    //# MENSAJES

    message.channel.send({ embeds: [msgE], components: [fila] });
  },
};
