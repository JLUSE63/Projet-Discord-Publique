const sqlite = require("sqlite3").verbose();
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment().locale("fr")

module.exports = class LogsBot {
  Sanction(user, raison, sanction, admin) {
    let baseDeDonnees = new sqlite.Database("./bd/MaBaseDeDonnees.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    setTimeout(() => {
      baseDeDonnees.run(`CREATE TABLE IF NOT EXISTS Sanctions("InfractionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, "Date", "UserId", "UserTag", "Sanction", "Raison", "AdministrateurId", "AdministrateurTag");`);
    }, 300);
    setTimeout(() => {
      baseDeDonnees.run(`INSERT INTO Sanctions("Date", "UserId", "UserTag", "Sanction", "Raison", "AdministrateurId", "AdministrateurTag") VALUES ("${moment().format('L')}", "${user.id}", "${user.tag}", "${sanction}", "${raison}", "${admin.id}", "${admin.tag}");`);
    }, 600);
    setTimeout(() => {
      baseDeDonnees.emit();
      baseDeDonnees.close();
    }, 900);
  }

  async Infraction(message, user, color) {
    let E = new MessageEmbed()
    .setTitle(`Infraction(s) de ${user.tag} (${user.id})`)
    .setColor(color);
    let baseDeDonnees = new sqlite.Database("./bd/MaBaseDeDonnees.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    baseDeDonnees.run(`CREATE TABLE IF NOT EXISTS Sanctions("InfractionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, "Date", "UserId", "UserTag", "Sanction", "Raison", "AdministrateurId", "AdministrateurTag");`);
    baseDeDonnees.all(`SELECT * FROM Sanctions WHERE UserId = ?`, [user.id], (err, rows) => {
      if(err) console.log(err);
      if(err) return message.channel.send(E.setDescription("Une erreur est survenue avec la base de données."));
      if(!rows) {
        return console.log(`Row n'existe pas.`);
      } else if(rows.length == 0) {
        return message.channel.send(E.setDescription(`${user.username} n'a pas d'infraction`));
      } else {
        rows.reverse()
        return message.channel.send(E.setDescription(`${user.username} possède **${rows.length}** infraction(s)`).addField("Détail", `${rows.map(infra => `\n${infra.Sanction} (${infra.InfractionId}):\n- **${infra.Date}**\n- ${infra.Raison}`).join("\n")}`));
      }
    });
  }

  async DelInfra(id, message) {
    let baseDeDonnees = new sqlite.Database("./bd/MaBaseDeDonnees.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    baseDeDonnees.run(`CREATE TABLE IF NOT EXISTS Sanctions("InfractionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, "Date", "UserId", "UserTag", "Sanction", "Raison", "AdministrateurId", "AdministrateurTag");`);
    baseDeDonnees.get(`SELECT * FROM Sanctions WHERE InfractionId = ?`, [id], (err, row) => {
      if(err) console.log(err);
      if(err) return message.channel.send(E.setDescription("Une erreur est survenue avec la base de données."));
      if(!row) {
        return message.channel.send("Cette id est invalide.");
      } else {
        baseDeDonnees.run(`DELETE FROM Sanctions WHERE InfractionId = ${id};`);
        message.react("✅")
      }
    })
  }
}

// baseDeDonnees.all(`SELECT * FROM Sanctions WHERE UserId = ?`, [user.id], (err, rows) => {
//   if(err) console.log(err);
//   if(err) return message.channel.send(E.setDescription("Une erreur est survenue avec la base de données."));
//   if(!rows) {
//     console.log(`Row n'existe pas.`);
//   } else if(rows.length == 0) {
//     return message.channel.send(E.setDescription(`${user.username} n'a pas d'infraction`));
//   } else {
//     let array = new Array();
//     for(let i = 0; i < rows.length; i++) {
//       array.push(rows[i].Sanction);
//     }
//     let infractions = new Array();
//     array.map(infraction => {
//       if(infractions.map(infra => infra.infraction).includes(infraction)) {
//         infractions.map(infra => {
//           if(infra.infraction == infraction) infra.nbInfra += 1;
//         });
//       } else {
//         infractions.push({infraction: infraction, nbInfra: 1});
//       }
//     });
//     return message.channel.send(E.setDescription(`${user.username} possède ${rows.length} infraction(s)`).addField("Détail", `${infractions.map(infra => `${infra.infraction}: **${infra.nbInfra}**`).join("\n")}`));
//   }
// });