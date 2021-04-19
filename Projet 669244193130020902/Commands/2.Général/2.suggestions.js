const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");
const { Salons } = require("../../config")

module.exports.run = async(client, message, args, commandUse) => {
    let E = new MessageEmbed()
    .setColor(commandUse.colorEmbed)
    .addField(
      `${message.author.tag} (${message.author.id})`,
      `${args.join(" ")}`
    );
    client.channels.cache.get(Salons.suggestions).send(E).then(async msg => {
      await msg.reat("✅");
      await msg.reat("❌");
    }).catch((err) => {
      console.log(err)
    });
}

module.exports.help = COMMANDS.COMMANDES_GENERALS.SUGGESTIONS