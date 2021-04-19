const { COMMANDS } = require("../../Utilitaire/Constants");
const Logs = require("../../bd/MyBd");

module.exports.run = async(client, message, args, commandUse) => {
  let mention = (message.mentions.users.first() || client.users.cache.get(args[0])) ? (message.mentions.users.first() || client.users.cache.get(args[0])) : false;
  args.splice(0, 1);
  if(!mention) return message.channel.send("Tu n'as mentionné personne.");
  if(message.guild.ownerID == mention.id) return message.channel.send("Tu ne peux pas expulser le chef du serveur.");
  if(!message.guild.members.cache.get(mention.id).kickable) return message.channel.send("Tu ne peux pas expulser ce membre.");
  if(!args[0]) return message.channel.send("Tu n'as pas mis de description.");
  await message.guild.members.cache.get(mention.id).kick(`Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}`.length < 510 ? `Par ${message.author.tag} (${message.author.id}): ${args.join(" ")}` : `Par ${message.author.tag} (${message.author.id}): Description trop longue.`).then(() => {
    message.channel.send(`${mention.tag} a été expulsé par ${message.author.tag}.`);
    new Logs().Sanction(mention, args.join(" "), "Kick", message.author);
  }).catch((err) => {
      console.log(err);
      message.channel.send("Une erreur est survenue.");
  });
}

module.exports.help = COMMANDS.COMMANDES_MODERATEURS.KICK