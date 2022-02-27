module.exports = {
  name: "version",
  description: "Ver la versión del bot",
  permissions: ["ADMINISTRATOR"],
  async execute(client, message, args, discord) {
    return message.reply("Versión: EncuBot0.0.1");
  },
};
