module.exports = {
  name: "reglas",
  aliases: ["rules"],
  description: "Muestra las reglas",
  async execute(client, message, args, discord) {
    //# MENSAJES
    
    const msgR = {
      title: "Reglas",
      description: "*Favor de leer todas nuestras reglas para evitar sanciones y pasarla bien*",
      color: 2067276,
      fields: [
          {	       
	      name: 'No está permitido publicar contenido u enlaces que puedan considerarse como:',
	      value: '- Insultos',
              value: '- NSFW',
              value: '- Politico',
              value: '- Racista',
              value: '- Religioso',
          },
      ],
      author: {
        name: "EnCubos Netwowk",
        icon_url: "https://media.discordapp.net/attachments/945744137444016211/945747416563470366/EnCubos.PNG",
      },
      timestamp: new date(),
      footer: {
        name: "Discord & Minecraft"
      },
    };

    //# MENSAJES
  
     message.channel.send({ embeds: [msgR] });
  },
};
