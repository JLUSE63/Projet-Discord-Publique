const { COMMANDS } = require("../../Utilitaire/Constants");
const Logs = require("../../bd/MyBd")

module.exports.run = (client, message, args, commandUse) => {
  let user = (message.mentions.users.first() || client.users.cache.get(args[0])) ? (message.mentions.users.first() || client.users.cache.get(args[0])) : message.author;
  new Logs().Infraction(message, user, commandUse.colorEmbed);
}

module.exports.help = COMMANDS.COMMANDES_MODERATEURS.INFRACTION