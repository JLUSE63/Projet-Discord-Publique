const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle("Rappel des douaniers")
  .setColor("#00FF9E")
  message.channel.send(E);
}

module.exports.help = COMMANDS.DOUANIERS.DOUANE;