export async function main(ns) {

  function print_cost(available, cost, type){
    ns.print("Available " + type + " Money : " + available)
    ns.print("Node " + type + " Cost : " + cost)
    ns.print("\n")
  }

  const sleep_time = 1000
  ns.disableLog("getServerMoneyAvailable");
  ns.disableLog("sleep");


  while(true){

    let num_nodes =  ns.hacknet.numNodes()

    //const level_ratio = Math.exp(-num_nodes/3)
    //const core_ratio = Math.exp(-num_nodes/20)
    //const ram_ratio = Math.exp(-num_nodes/15)

    const level_ratio = 1
    const core_ratio = 1
    const ram_ratio = 1

    for (let i = 0; i < num_nodes; i++) {

      
      
      let node_level_cost = ns.hacknet.getLevelUpgradeCost(i)
      let available_money_level = ns.getServerMoneyAvailable('home') * level_ratio
      //print_cost(available_money_level, node_level_cost, 'level')
      
      if (node_level_cost < available_money_level){
        ns.print("Upgrading node level for node " + i)
        ns.hacknet.upgradeLevel(i) 
      }

      let node_core_cost = ns.hacknet.getCoreUpgradeCost(i)
      let available_money_core = ns.getServerMoneyAvailable('home') * core_ratio
      //print_cost(available_money_core, node_core_cost, 'core')
      
      if (node_core_cost < available_money_core){
        ns.print("Upgrading node cores for node " + i) 
        ns.hacknet.upgradeCore(i)
      }

      let node_ram_cost = ns.hacknet.getRamUpgradeCost(i)
      let available_money_ram = ns.getServerMoneyAvailable('home') * ram_ratio
      //print_cost(available_money_ram, node_ram_cost, 'ram')
      
      if (node_ram_cost < available_money_ram){
        ns.print("Upgrading node ram for node " + i) 
        ns.hacknet.upgradeRam(i)
      }

    }

    ns.print("\n")
    await ns.sleep(sleep_time)
  }

}