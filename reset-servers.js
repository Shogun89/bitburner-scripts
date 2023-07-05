export async function main(ns) {

  var num_minutes = ns.args[0]
  var servers = ns.getPurchasedServers()
  var sleep_time = 1000 * 60 * num_minutes

  while (true) {
    servers.forEach((server, index) => {

      // TODO : Make it take in list of scripts to copy, kill, execute
      //ns.scriptKill(hackScript, server)
      //ns.rm(hackScript , server)
      ns.scp('daemon.js', server)
      ns.scp('farm.js', server)
      ns.exec('daemon.js', server)
      
      })
      await ns.sleep(sleep_time)
  }

}