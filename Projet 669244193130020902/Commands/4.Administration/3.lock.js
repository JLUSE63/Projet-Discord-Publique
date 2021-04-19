const { COMMANDS } = require("../../Utilitaire/Constants");
const { Roles } = require("../../config")

module.exports.run = (client, message, args, commandUse) => {
  let channel = message.channel;
  channel.updateOverwrite(Roles.member, { SEND_MESSAGES: false });
}

module.exports.help = COMMANDS.COMMANDES_ADMINISTRATEURS.LOCK