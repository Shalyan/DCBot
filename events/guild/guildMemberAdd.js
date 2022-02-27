module.exports = async (client, discord, member) => {
  //& REGISTRAR USUARIO

  //try {
    //let user = await userModel.create({
      //userID: member.id,
      //userName: member.displayName,
      //serverID: member.guild.id,
    //});
    //user.save();
  //} catch (error) {
    //console.log(error);
  //}

  //& REGISTRAR USUARIO
    
    const channel = member.guild.channels.cache.find(
      (channel) => channel.id === "847656812517392485"
    );
    const me = new discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`<a:emoji_4:809833277929816115> Saludos <a:emoji_4:809833277929816115>`)
      .setAuthor(
        member.user.username /*Autor*/,
        member.user.displayAvatarURL() /* Icono*/
      )
      .setDescription(`Bienvendio al servidor EnCubos, esperamos que la pases genial recuerda verificarte y leer las reglas`)
      .setThumbnail(
        member.user.displayAvatarURL()
      )
      .setTimestamp()
      .setFooter("EnCubos", "https://media.discordapp.net/attachments/945744137444016211/945747416563470366/EnCubos.PNG");
    channel.send({ embeds: [me] });
  };
