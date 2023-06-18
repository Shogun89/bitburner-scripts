/** @param {NS} ns */
export async function main(ns) {


  var ram_upgrade = ns.args[0];
  var servers = ns.getPurchasedServers();
  
  servers.forEach((server, index) => {

    ns.upgradePurchasedServer(server, ram_upgrade)
  })

}