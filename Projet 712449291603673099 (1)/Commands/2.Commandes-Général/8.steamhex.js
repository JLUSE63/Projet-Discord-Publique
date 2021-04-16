const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle(`Avoir steamhex`)
  .setDescription(`Voici comment obtenir votre steamhex. [Cliquez ici](https://help.daybreakgames.com/hc/fr/articles/230631407-Comment-puis-je-trouver-mon-ID-Steam-)`);
  message.channel.send(E);
}

module.exports.help = COMMANDS.GENERAL.DON;