module.exports = (client, discord, interaction) => {
  //--------------------------

  if (interaction.isButton()) {
    interaction.deferReply({ ephemeral: true });
    interaction.followUp({ content: "Te has verificado correctamente!" });

    const member = interaction.member;

    if (interaction.customId === "acp") {
      let rol = "813606660559470593";
      member.roles.add(rol);
      return console.log("Verificado");
    }
  }

  //--------------------------------
};
