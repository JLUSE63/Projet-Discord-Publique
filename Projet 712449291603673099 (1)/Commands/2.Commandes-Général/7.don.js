const { COMMANDS } = require("../../Utilitaire/Constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  let user = (message.mentions.users.first() || client.users.cache.get(args[0])) ? (message.mentions.users.first() || client.users.cache.get(`${args[0]}`)) : message.author
  let E = new MessageEmbed()
  .setTitle(`Paypal`)
  .setDescription(`Lien: [Cliquez ici](https://www.paypal.com/paypalme/MiamiLifeV)`);
  user.send(E).then(() => {
    message.channel.send(`${user.tag}, vas voir tes mp.`);
  })
}

module.exports.help = COMMANDS.GENERAL.DON;