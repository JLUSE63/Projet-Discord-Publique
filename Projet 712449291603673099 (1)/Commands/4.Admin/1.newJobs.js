const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  const logs = JSON.parse(fs.readFileSync("./jobs.json", "utf8"));
  if(!args[0]) return message.channel.send("Tu n'as pas mis de nom d'entreprise.");
  logs["jobs"].push(args.join(" "));
  fs.writeFile("./jobs.json", JSON.stringify(logs), (err) => {
    if(err) console.log(err);
  });
}

module.exports.help = COMMANDS.ADMINISTRATION.NEWJOB;