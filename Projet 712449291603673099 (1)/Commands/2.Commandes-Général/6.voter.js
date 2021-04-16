const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle(`Liens des votes`)
  .setDescription(`Vote serveur -> [Cliquez ici](https://top-serveurs.net/gta/miami)`);
  message.channel.send(E);
}

module.exports.help = COMMANDS.GENERAL.VOTER;