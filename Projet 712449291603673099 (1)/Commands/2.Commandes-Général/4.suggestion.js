const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle(`Suggestion de ${message.author.tag}`)
  .setColor("#F7FF00")
  .setDescription(args.join(" "));
  client.channels.cache.get("831231309153435688").send(E).then(() => {
    message.channel.send("Ta suggestion a bien été prise en compte.")
  })
}

module.exports.help = COMMANDS.GENERAL.SUGGESTIONS;