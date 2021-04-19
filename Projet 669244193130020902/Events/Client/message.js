const { Collection } = require("discord.js");
let { Prefix, Admins, Cooldown } = require("../../config");
const moment = require("moment");
moment.locale("fr");

module.exports = (client , message) => {
  let user = message.author;
  let member = message.member;
  let guild = message.guild;
  
  if(message.channel.type === "dm") return;
  if(user.bot) return;
  if(!message.content.startsWith(Prefix) || message.content.split(Prefix)[1].split(" ")[0] == "") return;

  const args = message.content.slice(Prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.alias && cmd.help.alias.includes(commandName));

  if(!command) message.channel.send(`Cette commande n'existe pas: ${Prefix}help`);
  if(!command) return console.log(`${user.id}: ${message.content}`);

  const commandUse = command.help;

  function FuturMessage() {
    if(command.help.args && !args.length) {
      message.delete();
      let solution = `Erreur !\nIl faut faire:\n__${Prefix}${command.help.name} ${command.help.usage ? command.help.usage : ``}__.`;
      return message.channel.send(solution);
    }

    if (!client.cooldowns.has(command.help.name)) {
      client.cooldowns.set(command.help.name, new Collection());
    }
    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (Admins.includes(user.id) ? 1 : (command.help.cooldown || Cooldown)) * 1000;
    if (tStamps.has(user.id)) {
      const cdExpirationTime = tStamps.get(user.id) + cdAmount;
      if (timeNow < cdExpirationTime) {
        timeLeft = (cdExpirationTime - timeNow) / 1000;
        return message.channel.send(`${user.username}, Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\`.`).then(m => {
          m.delete({timeout: (timeLeft.toFixed(0))*1000});
        })
      }
    }
    tStamps.set(user.id, timeNow);
    setTimeout(() => tStamps.delete(user.id), cdAmount);

    command.run(client, message, args, commandUse);
  }
  
  if(command.help.permission) {
    let perm = command.help.permission;
    if(!perm.includes("OwnerBot") && !guild.members.cache.get(client.user.id).hasPermission([perm])) {
      return message.channel.send(`Le bot n'a pas la permission ${perm} d'effectuer cette commande.`);
    } else if(Admins.includes(user.id)) {
      FuturMessage();
    } else if(member.hasPermission([perm]) && !perm.includes("OwnerBot")) {
      FuturMessage();
    } else {
      return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.");
    }
  } else {
    FuturMessage();
  }
}