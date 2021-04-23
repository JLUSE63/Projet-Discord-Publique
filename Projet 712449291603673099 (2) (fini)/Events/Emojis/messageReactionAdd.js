const { MessageEmbed } = require("discord.js")
const AddChannelEmojis = [
  "❓",
  "🚫",
  "🛃",
  "🏧",
  "🃏",
  "💯",
  "🐛",
  "💢",
  "🚸"
];
const AddChannelName = [
  "❓-Questions",
  "🚫-Demande-de-deban",
  "🛃-Recrutement-staff",
  "🏧-Remboursement",
  "🃏-Illégal",
  "💯-Légal",
  "🐛-Bug",
  "💢-Wipe",
  "🚸-Mort RP"
];
const RemoveChannelEmojis = [
  "🔒", // emoji de close ticket
  "✅", // emoji de confirmation
  "❎" // emojei de retour
];

module.exports = async(client, messageReaction, user) => {
  if(messageReaction.message.partial) await messageReaction.message.fetch();
  if(messageReaction.partial) await messageReaction.fetch();

  let message = messageReaction.message;
  let guild = message.guild;
  let category = message.channel.parent;
  let member = guild.members.cache.get(user.id);
  let emoji = messageReaction.emoji;

  if(user.bot) return;
  if(message.author.id != client.user.id) return;

  if(AddChannelEmojis.includes(emoji.name)) {
    message.reactions.resolve(emoji.name).users.remove(user.id);
    if(AddChannelEmojis.indexOf(emoji.name) < 0) return console.log("erreur: emoji.name n'est pas définie..");
    let channelName = AddChannelName[AddChannelEmojis.indexOf(emoji.name)];
    guild.channels.create(channelName, {
      type: "text",
      topic: `Ticket de ${user.tag} (${user.id}) => ${channelName}`,
      parent: category,
      position: message.channel.position+1,
      reason: `Ticket de ${user.tag} (${user.id}) => ${channelName}`
    }).then((channel) => {
      channel.updateOverwrite(user.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true });
      channel.updateOverwrite(guild.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false });
      channel.send(
        new MessageEmbed()
        .setTitle(`Ticket de ${user.tag} => ${channelName}`)
        .setColor("RANDOM")
        .setDescription(`${RemoveChannelEmojis[0]}-Pour fermer le ticket`)
        .setFooter(`Propulsé par ${client.guilds.cache.get("826857037962936381").name}\nCréateur ${client.users.cache.get("538483542540156931").tag}`)
      ).then(msg => {
        msg.react(RemoveChannelEmojis[0]);
      });
    }).catch((err) => {
      console.log(err);
    });
  } else if(RemoveChannelEmojis.includes(emoji.name)) {
    if(emoji.name == RemoveChannelEmojis[0]) {
      message.react(RemoveChannelEmojis[1]).then(message.react(RemoveChannelEmojis[2]));
    } else if(emoji.name == RemoveChannelEmojis[1]) {
      message.channel.setName(`Close-${message.channel.name}`);
      message.delete();
      message.channel.permissionOverwrites.map(permission => {
        if(permission.type == "member") {
          permission.delete();
        }
      });
    } else if(emoji.name == RemoveChannelEmojis[2]) {
      message.reactions.removeAll().then(message.react(RemoveChannelEmojis[0]));
    }
  }
}