module.exports = (client, discord, interaction) => {
  //%BUTTONS

  if (interaction.isButton()) {
    interaction.deferReply({ ephemeral: true });
    interaction.followUp({ content: "Hola" });

    const member = interaction.member;

    if (interaction.customId === "verify") {
      let rol = "813606660559470593";
      member.roles.add(rol);
      return console.log("Acepto");
    }
  }

  //%BUTTONS
};
