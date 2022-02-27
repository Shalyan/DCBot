const Discord = require('discord.js')

module.exports = {
  name: "avatar"
  aliases: ["foto"],
  
async execute (client, message, args){

let usuairo = message.mentions.members.first() || message.member;

let embedavatar = new Discord.MessageEmbed()

.setTitle(`Foto de **${usuario.user.username}**`)
.setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true }))
.setFooter(`Ped.displayNaido por ${message.memberme}`)
.setTimestamp()

message.channel.send({ embeds: [embedavatar] })

 }

}
