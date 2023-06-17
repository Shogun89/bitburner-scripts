/** @param {NS} ns */
export async function main(ns) {

  let sleep_time = 60 * 1000
  ns.disableLog("getServerMoneyAvailable");
  ns.disableLog("sleep");

  while(true){

    let available_money = ns.getServerMoneyAvailable("home")
    let node_cost = ns.hacknet.getPurchaseNodeCost()
    let ratio = 0.99
    
    // if node_cost is half of available money then buy
    if (available_money * ratio >= node_cost){
      ns.hacknet.purchaseNode()
      ns.print("Purchasing another node")
      let number_of_nodes = ns.hacknet.numNodes()
      ns.print("There are now " + number_of_nodes + " available")
    }
    else{
      ns.print("You didn't have enough money to buy another node")
    }


    await ns.sleep(sleep_time)
  }

}