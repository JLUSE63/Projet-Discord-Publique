const { COMMANDS } = require("../../Utilitaire/Constants");

module.exports.run = (client, message, args, commandUse) => {
    let reponse = [
      `D'accord`,
      `J'peux pas j'ai pas le temps`,
      `**Non.**`,
      `Oui."Bien-sur"`,
      `Je suis supérieur à toi !`,
      `tu veux quoi toi`,
      `${client.users.cache.get("538483542540156931") ? client.users.cache.get("538483542540156931").tag : "Jules"} est supérieur à toi`
    ];
    message.channel.send(reponse[parseInt(Math.random() * reponse.length)]);
}

module.exports.help = COMMANDS.COMMANDES_GENERALS.EIGHTBALL