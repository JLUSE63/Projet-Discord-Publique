const moment = require("moment");
moment.locale("fr");
let { Admins, Prefix, Serveur, Roles } = require("../../config");

module.exports = client => {
    let date = `${moment().format("dddd Do MMMM YYYY")} - ${moment().format('LTS')}`;

    let intervalTime = 0;

    setInterval(() => {
        if(intervalTime == 0) {
            client.user.setPresence({activity: {name: `${Prefix}help`, type: "WATCHING"}, status: "online"});
            intervalTime+=1;
        } else if(intervalTime == 1) {
            client.user.setPresence({activity: {name: `${client.guilds.cache.get(Serveur).memberCount} membres`, type: "LISTENING"}, status: "online"});
            intervalTime=0;
        }
    }, 5000);

    console.log("\r\nAdmin du bot:");
    for(admin of Admins) {
        console.log(`_${admin} (${client.users.cache.get(admin) ? client.users.cache.get(admin).username : "Pseudo inconnue"})`);
    }
    setTimeout(() => {
        console.log(`\nUsers: ${client.users.cache.size}\n\n${client.user.tag}: I'm on !\n${date}\n${client.user.username} (${client.user.id}) est connecté avec le préfix '${Prefix}'\n`);
    }, 500);
}