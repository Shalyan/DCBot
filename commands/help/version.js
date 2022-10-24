module.exports = {
  name: "version",
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  description: "Para ver la version del bot",
  async execute(client, message, args, discord) {
    // Permisos
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Te faltan permisos para ejecutar este comando")
    //# MENSAJES
    const msgA = {
      title: "Version del bot",
      description: "0.1.4",
      color: 10181046,
      footer: {
        text: "Tittle",
        icon_url: "",
      },
    };


    message.reply({ embeds: [msgA] });
  },
};
