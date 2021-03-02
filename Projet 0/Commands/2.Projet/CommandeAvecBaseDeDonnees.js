const sqlite = require("sqlite3").verbose()
const moment = require("moment")
moment.locale("fr")

module.exports.run = (client, message, args, Prefix) => {
    let baseDeDonnees = new sqlite.Database("./MaBaseDeDonnees.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
    baseDeDonnees.run(`CREATE TABLE IF NOT EXISTS <table>("")`)
    baseDeDonnees.run(`INSERT INTO <table>("") VALUES ("")`)
    let query = `SELECT * FROM <table> WHERE "" = ?`
    baseDeDonnees.all(query, [], (err, row) => {
        if(err) { console.log(`${moment().format('LTS')} Il y a un problème avec la base de données.`); return /*console.log(err)*/ }
        if(row == undefined) {
            console.log("row is undefined")
        } else {
            console.log(row)
        }
    })
}

const { COMMANDS } = require("../../Utilitaire/Constants")
module.exports.help = COMMANDS.PROJET.COMMAND