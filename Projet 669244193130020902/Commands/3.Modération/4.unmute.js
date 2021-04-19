const { COMMANDS } = require("../../Utilitaire/Constants");
const { Roles } = require("../../config");

module.exports.run = async(client, message, args, commandUse) => {
  let role = message.guild.roles.cache.get(Roles.mute)
  let mention = (message.mentions.users.first() || client.users.cache.get(args[0])) ? (message.mentions.users.first() || client.users.cache.get(args[0])) : false;
  args.splice(0, 1);
  if(!mention) return message.channel.send("Tu n'as mentionné personne.");
  if(!message.guild.members.cache.get(mention.id).roles.cache.some(r => r.id == role.id)) return message.channel.send("Ce membre n'est pas muet.");
  if(!args[0]) return message.channel.send("Tu n'as pas mis de description.");
  if(!message.guild.members.cache.get(mention.id).roles.cache.some(r => r.id == Roles.member)) message.guild.members.cache.get(mention.id).roles.add(Roles.member)
  await message.guild.members.cache.get(mention.id).roles.remove(role.id, {reason: `Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}`.length < 510 ? `Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}` : `Par ${message.author.tag} (${message.author.id}): Description trop longue.`}).then(() => {
    message.channel.send(`${mention.tag} retrouve son statut de membre grâce à ${message.author.tag}.`);
  }).catch((err) => {
    console.log(err);
    message.channel.send("Une erreur est survenue.");
  });
}

module.exports.help = COMMANDS.COMMANDES_MODERATEURS.UNMUTE