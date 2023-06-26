export async function main(ns) {

  const sleep_time = 1000
  ns.disableLog("getServerMoneyAvailable");
  ns.disableLog("sleep");

  while(true){

    let num_nodes =  ns.hacknet.numNodes()
    //let setting = 'constant'
    const level_ratio = 1
    const core_ratio = 1
    const ram_ratio = 1

    const max_level = 115
    const max_ram = 64
    const max_cores = 2
    const max_nodes = 16

    for (let i = 0; i < num_nodes; i++) {

      
      let node_stats = ns.hacknet.getNodeStats(i)

      let node_level_cost = ns.hacknet.getLevelUpgradeCost(i)
      let available_money_level = ns.getServerMoneyAvailable('home') * level_ratio
      
      if (node_level_cost  < available_money_level && (
        node_stats.level <= max_level || num_nodes >= max_nodes)
        ){
        ns.print("Upgrading node level for node " + i)
        ns.hacknet.upgradeLevel(i) 
      }

      let node_core_cost = ns.hacknet.getCoreUpgradeCost(i)
      let available_money_core = ns.getServerMoneyAvailable('home') * core_ratio
      
      if (node_core_cost < available_money_core && (
        node_stats.cores <= max_cores || num_nodes >= max_nodes)
        ){
        ns.print("Upgrading node cores for node " + i) 
        ns.hacknet.upgradeCore(i)
      }

      let node_ram_cost = ns.hacknet.getRamUpgradeCost(i)
      let available_money_ram = ns.getServerMoneyAvailable('home') * ram_ratio
      
      if (node_ram_cost < available_money_ram && (
        node_stats.ram <= max_ram || num_nodes >= max_nodes)){
        ns.print("Upgrading node ram for node " + i) 
        ns.hacknet.upgradeRam(i)
      }

    }

    const purchaseNodeCost = ns.hacknet.getPurchaseNodeCost();
    if (ns.getServerMoneyAvailable('home') > purchaseNodeCost){
      ns.hacknet.purchaseNode();
    }

    ns.print("\n")
    await ns.sleep(sleep_time)
  }

}