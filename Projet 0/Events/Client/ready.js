const { Prefix } = require("../../config")
const moment = require("moment")
moment.locale("fr")

module.exports = client => {
    let date = `${moment().format("dddd Do MMMM YYYY")} - ${moment().format('LTS')}`
    let interval = 0
    setInterval(() => {
        if(interval == 0) {
            let guildCount = client.guilds.cache.size
            client.user.setPresence({activity: {name: `${guildCount} serveur(s)`, type: "LISTENING"}, status: "online"})
        } else if(interval == 1) {
            let userCount = client.users.cache.size
            client.user.setPresence({activity: {name: `${userCount} utilisateur(s)`, type: "LISTENING"}, status: "online"})
        } else if(interval == 2) {
            client.user.setPresence({activity: {name: `Beta`, type: "LISTENING"}, status: "online"})
        } else if(interval == 3) {
            client.user.setPresence({activity: {name: `${Prefix}help`, type: "LISTENING"}, status: "online"})
        } else {
            interval = -1
        }
        interval+=1
    }, 5000);
    client.user.setPresence({activity: {name: `${Prefix}help`, type: "LISTENING"}, status: "online"})
    console.log(`\r\n${client.user.tag}: I'm on !\r\n${date}\r\n`)
}