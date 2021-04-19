const { COMMANDS } = require("../../Utilitaire/Constants");

module.exports.run = (client, message, args, commandUse) => {
  if(args[0] || isNaN(args[0])) return message.channel.send("Tu n'as pas mis de nombres.");
  let num = parseInt(args[0]);
  if(num <= 1) return message.channel.send("Ton nombre est trop petit.");
  if(num >= 100) return message.channel.send("Ton nombre est trop grand.");
  message.channel.bulkDelete(num).then(() => {
    message.channel.send(`${num} messages viennent d'être supprimés par ${message.author.tag} (${message.author.id})`)
  });
}

module.exports.help = COMMANDS.COMMANDES_MODERATEURS.DELMSG