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
	      value: '- Insultos\n\- NSFW\n\- Politica\n\- Racismo\n\- Religion ',
          },
      ],
      author: {
        name: "Tittle",
        icon_url: "",
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
