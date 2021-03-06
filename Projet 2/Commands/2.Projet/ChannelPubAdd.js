const { COMMANDS } = require("../../Utilitaire/Constants")
const moment = require("moment")
moment.locale("fr")
const sqlite = require("sqlite3").verbose()

module.exports.run = (client, message, args, Prefix) => {
  let guild = message.guild
  let channel = (guild.channels.cache.get(args[0]) || message.mentions.channels.first()) ? (guild.channels.cache.get(args[0]) || message.mentions.channels.first()) : false
  let baseDeDonnees = new sqlite.Database("./MaBaseDeDonnees.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
  baseDeDonnees.run(`CREATE TABLE IF NOT EXISTS ChannelPub("idServeur", "idChannel")`)
  let query = `SELECT * FROM ChannelPub WHERE idServeur = ?`
  if(channel && channel.type == "text") {
    baseDeDonnees.get(query, guild.id, (err, row) => {
      if(err) { console.log(`${moment().format('LTS')} Il y a un problème avec la base de données.`); return /*console.log(err)*/ }
      if(row == undefined) {
        baseDeDonnees.run(`INSERT INTO ChannelPub("idServeur", "idChannel") VALUES ("${guild.id}", "${channel.id}")`)
      } else {
        baseDeDonnees.run(`UPDATE ChannelPub SET idChannel = "${channel.id}" WHERE idServeur = "${guild.id}"`)
      }
    })
    channel.send(`${channel} est désormais le salon pub du serveur.`)
    baseDeDonnees.close()
  } else {
    message.channel.send("Ça n'a pas fonctionné.")
  }
}

module.exports.help = COMMANDS.PROJET.PUBADD