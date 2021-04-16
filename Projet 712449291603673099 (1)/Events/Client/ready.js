const { Prefix } = require("../../config");
const moment = require("moment");
const { MessageEmbed } = require("discord.js");
moment.locale("fr");

module.exports = client => {
    let date = `${moment().format("dddd Do MMMM YYYY")} - ${moment().format('LTS')}`;
    let interval = 0;
    setInterval(() => {
        interval+=1;
        if(interval == 0) {
            client.user.setPresence({activity: {name: `${Prefix}help`, type: "LISTENING"}, status: "online"});
        } else if(interval == 1) {
            client.user.setPresence({activity: {name: `${client.users.cache.size} utilisateurs`, type: "LISTENING"}, status: "online"});
        } else {
            interval = 0;
        }
    }, 5000);
    client.user.setPresence({activity: {name: `${Prefix}help`, type: "LISTENING"}, status: "online"});
    console.log(`\r\n${client.user.tag}: I'm on !\r\n${date}\r\n`);
}