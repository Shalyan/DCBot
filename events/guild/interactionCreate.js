module.exports = (client, discord, interaction) => {
  //--------------------------

  if (interaction.isButton()) {
    interaction.reply({ content: 'string', ephemeral: true })
    
    const member = interaction.member;

    if (interaction.customId === "acp") {
      let rol = "813606660559470593";
      member.roles.add(rol);
      return console.log("Verificado");
    }
  }

  //--------------------------------
};
