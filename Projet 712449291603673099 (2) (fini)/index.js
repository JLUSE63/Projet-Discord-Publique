const { Client } = require("discord.js");
const { Token } = require("./config");
const { loadEvents } = require("./Utilitaire/Loader");

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

loadEvents(client);

client.on('messageReactionAdd', async(reaction, user) => {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();
});

client.login(Token);