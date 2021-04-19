const { COMMANDS } = require("../../Utilitaire/Constants");
const { Roles } = require("../../config");
const Logs = require("../../bd/MyBd");

module.exports.run = async(client, message, args, commandUse) => {
  let mention = (message.mentions.users.first() || client.users.cache.get(args[0])) ? (message.mentions.users.first() || client.users.cache.get(args[0])) : false;
  args.splice(0, 1);
  if(!mention) return message.channel.send("Tu n'as mentionné personne.");
  if(message.guild.ownerID == mention.id) return message.channel.send("Tu ne peux pas rendre muet le chef du serveur.");
  if(message.guild.members.cache.get(mention.id).roles.cache.some(r => r.id == Roles.mute)) return message.channel.send("Ce membre est déjà muet.");
  if(!args[0]) return message.channel.send("Tu n'as pas mis de description.");
  await message.guild.members.cache.get(mention.id).roles.add(Roles.mute, {reason: `Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}`.length < 510 ? `Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}` : `Par ${message.author.tag} (${message.author.id}): Description trop longue.`}).then(() => {
    if(message.guild.members.cache.get(mention.id).roles.cache.some(r => r.id == Roles.member)) message.guild.members.cache.get(mention.id).roles.remove(Roles.member)
    message.channel.send(`${mention.tag} a été rendu muet par ${message.author.tag}.`);
    new Logs().Sanction(mention, args.join(" "), "Mute", message.author)
  }).catch((err) => {
    console.log(err);
    message.channel.send("Une erreur est survenue.");
  });
}

module.exports.help = COMMANDS.COMMANDES_MODERATEURS.MUTE