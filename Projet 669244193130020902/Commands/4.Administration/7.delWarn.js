const { COMMANDS } = require("../../Utilitaire/Constants");
const Logs = require("../../bd/MyBd");

module.exports.run = async(client, message, args, commandUse) => {
  new Logs().DelInfra(Number(args[0]), message);
}

module.exports.help = COMMANDS.COMMANDES_ADMINISTRATEURS.DELWARN