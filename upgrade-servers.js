export async function main(ns) {

  var servers = ns.getPurchasedServers()
  ns.disableLog("sleep");
  
  servers.forEach((server, index) => {

    let serverRam = ns.getServerMaxRam(server)
    let ramUpgrade = serverRam * 2
    let upgradeCost = ns.getPurchasedServerUpgradeCost(server, ramUpgrade)
    let availableMoney = ns.getServerMoneyAvailable("home")
    if (availableMoney > upgradeCost) {
      ns.upgradePurchasedServer(server, ramUpgrade)
    }
  })

}