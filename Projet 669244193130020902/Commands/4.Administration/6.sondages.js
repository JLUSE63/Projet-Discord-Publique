const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args, commandUse) => {
  message.delete();
  
  let emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
  let array = args.join(" ").split("\n");

  let msgToSend = () => {
    array.splice(0, 1);
    if(!array[0]) return "Il n'y a pas de sondage.";
    let msg = "";
    for (let i = 0; i < array.length; i++) {
      if(!emojis[i]) continue;
      msg += `${emojis[i]} - ${array[i]}\n`;
    }
    return msg;
  }

  message.channel.send(new MessageEmbed().addField(array[0], msgToSend())).then(async msg => {
    for (let i = 0; i < array.length; i++) {
      msg.react(emojis[i])
    }
  });
}

module.exports.help = COMMANDS.COMMANDES_ADMINISTRATEURS.SONDAGES