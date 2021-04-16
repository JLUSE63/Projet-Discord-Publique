const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle("Anonyme")
  .setColor("#FF0080")
  .setDescription(args.join(" "));
  message.channel.send(E);
}

module.exports.help = COMMANDS.DOUANIERS.ANO;