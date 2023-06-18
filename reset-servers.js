export async function main(ns) {

  var num_threads = ns.args[0]
  var servers = ns.getPurchasedServers()

  servers.forEach((server, index) => {

    ns.scriptKill("early-hack-template.js", server)
    //ns.rm("early-hack-template.js", servers[index])
    //ns.scp("early-hack-template.js", servers[index])
    ns.exec("early-hack-template.js", server, num_threads)
  })

}