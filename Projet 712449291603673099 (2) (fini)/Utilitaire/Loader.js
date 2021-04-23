const fs = require("fs")

const loadEvents = (client, dir = "./Events/") => {
  //console.log("\r\nEvents chargés:")
  fs.readdirSync(dir).forEach(dirs => {
    const events = fs.readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"))
    for(const event of events) {
      const evtName = event.split(".")[0]
      const evt = require(`../${dir}/${dirs}/${event}`)
      client.on(evtName, evt.bind(null, client))
      //console.log(`${evtName}`)
    }
  })
}

module.exports = { loadEvents }