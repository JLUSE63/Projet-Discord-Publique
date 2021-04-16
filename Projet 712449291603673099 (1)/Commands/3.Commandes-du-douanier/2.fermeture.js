const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle("Fermeture de la douane")
  .setColor("#00FF00")
  .setDescription("Fermeture de la Douane Whitlist");
  message.channel.send(E);
}

module.exports.help = COMMANDS.DOUANIERS.FERMETURE;