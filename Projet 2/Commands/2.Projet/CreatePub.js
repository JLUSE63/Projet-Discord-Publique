const { COMMANDS } = require("../../Utilitaire/Constants")
const moment = require("moment")
moment.locale("fr")
const sqlite = require("sqlite3").verbose()
const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args, Prefix) => {
    let serveurList = new Array()
    let guild = message.guild
    let user = message.author
    let baseDeDonnees = new sqlite.Database("./MaBaseDeDonnees.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
    baseDeDonnees.run(`CREATE TABLE IF NOT EXISTS ChannelPub("idServeur", "idChannel")`)
    let query = `SELECT * FROM ChannelPub`
    baseDeDonnees.all(query, [], (err, rows) => {
        if(err) { console.log(`${moment().format('LTS')} Il y a un problème avec la base de données.`); return /*console.log(err)*/ }
        for (let i = 0; i < rows.length; i++) {
            if(client.channels.cache.get(rows[i].idChannel)) {
                let E = new MessageEmbed()
                .setDescription(args.join(" "))
                .setFooter(`${guild.name} (${guild.id})\n${user.username} (${user.id})`)
                client.channels.cache.get(rows[i].idChannel).send(E)
            }
        }
    })
}

module.exports.help = COMMANDS.PROJET.PUBCREATE