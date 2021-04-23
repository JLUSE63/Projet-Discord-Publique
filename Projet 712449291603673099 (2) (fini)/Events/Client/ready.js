const moment = require("moment")
moment.locale("fr")

module.exports = client => {
    let date = `${moment().format("dddd Do MMMM YYYY")} - ${moment().format('LTS')}`
    client.user.setPresence({activity: {name: `!ticket`, type: "LISTENING"}, status: "online"})
    console.log(`\r\n${client.user.tag}: I'm on !\r\n${date}\r\n`)
}