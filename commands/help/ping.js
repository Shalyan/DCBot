module.exports = {
  name: "ping",
  description: "Tiempo de respuesta",
  permissions: ["ADMINISTRATOR"],
  async execute(client, message, args, discord) {
    return message.reply("Mi ping es de "+client.ws.ping+"ms");
  },
};
