const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const img = new MessageAttachment("./media/bannière.png", "banniere.png")

module.exports.run = async(client, message, args) => {
  let E = new MessageEmbed()
  .setTitle("Serveur off")
  .setColor("#FF0000")
  .attachFiles(img)
  .setImage(`attachment://${img.name}`);
  message.channel.send("@here", E);
}

module.exports.help = COMMANDS.GENERAL.OFF;