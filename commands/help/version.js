module.exports = {
  name: "version",
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  description: "Para ver la version del bot",
  async execute(client, message, args, discord) {
    //# MENSAJES
    const msgA = {
      title: "Version del bot",
      description: "EnCubot 0.0.6",
      color: 10181046,
      footer: {
        text: "EnCubos Network | Discord & Minecraft",
        icon_url: "https://media.discordapp.net/attachments/945744137444016211/945747416563470366/EnCubos.PNG",
      },
    };


    message.channel.send({ embeds: [msgA] });
  },
};
