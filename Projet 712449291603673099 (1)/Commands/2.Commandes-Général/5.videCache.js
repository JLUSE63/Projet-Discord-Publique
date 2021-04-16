const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle(`Vider le cache`)
  .setDescription(`Pour vider le cache, suivez ce tuto. [Cliquez ici](https://fivem-france.net/t/vider-son-cache-sur-fivem/2955)\nOu allez sur ce salon. ${client.channels.cache.get("829796075971674192")}`);
  message.channel.send(E);
}

module.exports.help = COMMANDS.GENERAL.VIDECACHE;