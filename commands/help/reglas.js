module.exports = {
  name: "reglas",
  aliases: ["rules"],
  description: "Muestra las reglas",
  async execute(client, message, args, discord) {
    // Permisos
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Te faltan permisos para ejecutar este comando")
    //# MENSAJES
    const msgR = {
      title: "Reglas",
      description: "```Favor de leer todas nuestras reglas para evitar ser sancionado y pasarla bien en nuestra comunidad.```",
      color: 2067276,
      fields: [
          {	       
	      name: 'No está permitido publicar contenido u enlaces que puedan considerarse como:',
	      value: '- Insultos \r\- NSFW \r\- Politica \r\- Racismo \r\- Religion ',
          },
      ],
      author: {
        name: "EnCubos Netwowk",
        icon_url: "https://media.discordapp.net/attachments/945744137444016211/945747416563470366/EnCubos.PNG",
      },
      timestamp: new Date(),
      footer: {
        text: "Discord & Minecraft"
      },
    };

    //# MENSAJES
  
     message.channel.send({ embeds: [msgR] });
  },
};
