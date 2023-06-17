export async function main(ns) {


    let servers = ns.getPurchasedServers()
  
    servers.forEach((server, index) => {
  
      ns.scriptKill('early-hack-template.js', servers[index])
      ns.deleteServer(servers[index])
    })
  
  }