const { MessageEmbed } = require("discord.js")

module.exports = (client , message) => {
  if(message.channel.type === "dm") return;
  if(message.author.bot) return;

  if(message.content.startsWith("!ticket")) {
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return;
    message.delete();
    let E = new MessageEmbed()
    .setTitle("Ticket")
    .setColor("RANDOM")
    .addField("Type de ticket", `❓-Questions\n🚫-Demande de deban\n🛃-Recrutement staff\n🏧-Remboursement\n🃏-Illégal\n💯-Légal\n🐛-Bug\n💢-Wipe\n🚸-Mort RP`)
    .setFooter(`Propulsé par ${client.guilds.cache.get("826857037962936381").name}\nCréateur ${client.users.cache.get("538483542540156931").tag}`)
    message.channel.send(E).then(async msg => {
      await msg.react("❓");
      await msg.react("🚫");
      await msg.react("🛃");
      await msg.react("🏧");
      await msg.react("🃏");
      await msg.react("💯");
      await msg.react("🐛");
      await msg.react("💢");
      await msg.react("🚸");
    });
  }
}