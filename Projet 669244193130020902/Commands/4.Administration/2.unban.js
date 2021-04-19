const { COMMANDS } = require("../../Utilitaire/Constants");

module.exports.run = async(client, message, args, commandUse) => {
  let mention = args[0];
  args.splice(0, 1);
  if(!mention) return message.channel.send("Tu n'as id personne.");
  if(message.guild.ownerID == mention.id) return message.channel.send("Tu ne peux pas bannir le chef du serveur.");
  if(!message.guild.members.cache.get(mention.id).banable) return message.channel.send("Tu ne peux pas bannir ce membre.");
  if(!args[0]) return message.channel.send("Tu n'as pas mis de description.");
  await message.guild.members.unban(mention, `Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}`.length < 510 ? `Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}` : `Par ${message.author.tag} (${message.author.id}): Description trop longue.`).then(() => {
    message.channel.send(`${mention} a été banni par ${message.author.tag}.`);
  }).catch((err) => {
      console.log(err);
      message.channel.send("Une erreur est survenue.");
  });
}

module.exports.help = COMMANDS.COMMANDES_ADMINISTRATEURS.UNBAN