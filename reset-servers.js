export async function main(ns) {
  var servers = ns.getPurchasedServers()
  var hackScript = "early-hack-template.js"

  servers.forEach((server, index) => {

    let maxServerRam = ns.getServerMaxRam(server);
    let threadCost = ns.getScriptRam(hackScript);
    let numThreads = Math.floor(maxServerRam/threadCost)
    ns.scriptKill(hackScript, server)
    ns.rm(hackScript , server)
    ns.scp(hackScript , server)
    ns.exec(hackScript, server, numThreads)
    
    })

}