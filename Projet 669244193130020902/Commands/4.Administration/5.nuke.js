const { COMMANDS } = require("../../Utilitaire/Constants");

module.exports.run = (client, message, args, commandUse) => {
  message.channel.clone().then(channel => {
    channel.setPosition(message.channel.position)
    channel.send('nuked')
  })
  message.channel.delete()
}

module.exports.help = COMMANDS.COMMANDES_ADMINISTRATEURS.NUKE