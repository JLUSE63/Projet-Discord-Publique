const { COMMANDS } = require("../../Utilitaire/Constants");
const Logs = require("../../bd/MyBd");

module.exports.run = (client, message, args, commandUse) => {
  let mention = (message.mentions.users.first() || client.users.cache.get(args[0])) ? (message.mentions.users.first() || client.users.cache.get(args[0])) : false;
  args.splice(0, 1);
  if(!mention) return message.channel.send("Tu n'as mentionné personne.");
  if(!args[0]) return message.channel.send("Tu n'as pas mis de description.");
  new Logs().Sanction(mention, args.join(" "), "Warn", message.author);
  message.react("✅")
}

module.exports.help = COMMANDS.COMMANDES_MODERATEURS.WARN