module.exports = {
  name: "verificar",
  aliases: ["verify"],
  permissions: ["ADMINISTRATOR"],
  description: "Para verificarse",
  async execute(client, message, args, discord) {
    //% BUTTONS
    const btn1 = new discord.MessageButton()
      .setCustomId("verify")
      .setLabel("<a:chec1:945073442808557699> Verificarme")
      .setStyle("SUCCESS");
    //% BUTTONS

    //& FILA

    const fila = new discord.MessageActionRow().addComponents(btn1);

    //& FILA

    //# MENSAJES

const msgE = new MessageEmbed()
	.setColor('#2ECC71')
	.setTitle('<a:emoji_7:809833434766639134> | Verificacion')
	.setDescription('Dale click al boton para que puedas ver nuestros canales y formes parte de nuestra hermosa comunidad')
	.setFooter({ text: 'EnCubos Network | Discord & Minecraft', iconURL: 'https://media.discordapp.net/attachments/945744137444016211/945747416563470366/EnCubos.PNG' });

    //# MENSAJES

    message.channel.send({ embeds: [msgE], components: [fila] });
  },
};
