const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle("Ouverture de la douane")
  .setColor("#00FF00")
  .setDescription("Ouverture de la Douane Whitlist");
  message.channel.send(E);
}

module.exports.help = COMMANDS.DOUANIERS.OUVERTURE;