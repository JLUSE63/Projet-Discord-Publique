const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {
  const logs = JSON.parse(fs.readFileSync("./jobs.json", "utf8"));
  let E = new MessageEmbed()
  .setTitle(`Entreprise`);
  if(logs["jobs"].length == 0) {
    E.setDescription("Il n'y a pas de d'entreprise.");
  } else if(logs["jobs"].length == 1) {
    E.setDescription(logs["jobs"].join("\n"));
  } else {
    E.setTitle(`Entreprises`);
    E.setDescription(logs["jobs"].join("\n"));
  }
  message.channel.send(E);
}

module.exports.help = COMMANDS.GENERAL.JOBS;