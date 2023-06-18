function getServerWithMostMoney(playerHackingLevel, hackingRatio = 0.5) {
    var server_info = {
      "CSEC": {
        "hacking_level": 58,
        "max_money": 0
      },
      "I.I.I.I": {
        "hacking_level": 342,
        "max_money": 0
      },
      "avmnite-02h": {
        "hacking_level": 213,
        "max_money": 0
      },
      "catalyst": {
        "hacking_level": 406,
        "max_money": 12273502650
      },
      "computek": {
        "hacking_level": 387,
        "max_money": 5727015600
      },
      "crush-fitness": {
        "hacking_level": 267,
        "max_money": 1127302875
      },
      "foodnstuff": {
        "hacking_level": 1,
        "max_money": 50000000
      },
      "harakiri-sushi": {
        "max_money": 100000000,
        "hacking_level": 40
      },
      "hong-fang-tea": {
        "max_money": 75000000,
        "hacking_level": 30
      },
      "iron-gym": {
        "max_money": 500000000,
        "hacking_level": 100
      },
      "joesguns": {
        "max_money": 62500000,
        "hacking_level": 10
      },
      "johnson-ortho": {
        "max_money": 2028850225,
        "hacking_level": 275
      },
      "max-hardware": {
        "max_money": 250000000,
        "hacking_level": 80
      },
      "n00dles": {
        "max_money": 1750000,
        "hacking_level": 1
      },
      "nectar-net": {
        "max_money": 68750000,
        "hacking_level": 20
      },
      "neo-net": {
        "max_money": 125000000,
        "hacking_level": 50
      },
      "netlink": {
        "max_money": 6875000000,
        "hacking_level": 402
      },
      "omega-net": {
        "max_money": 1508426825,
        "hacking_level": 207
      },
      "phantasy": {
        "max_money": 600000000,
        "hacking_level": 100
      },
      "rothman-uni": {
        "max_money": 5037707200,
        "hacking_level": 415
      },
      "sigma-cosmetics": {
        "max_money": 57500000,
        "hacking_level": 5
      },
      "silver-helix": {
        "max_money": 1125000000,
        "hacking_level": 150
      },
      "summit-uni": {
        "max_money": 5517272425,
        "hacking_level": 455
      },
      "syscore": {
        "max_money": 12354539875,
        "hacking_level": 588
      },
      "the-hub": {
        "max_money": 4556969725,
        "hacking_level": 325
      },
      "zb-institute": {
        "max_money": 22129076450,
        "hacking_level": 731
      },
      "zer0": {
        "max_money": 187500000,
        "hacking_level": 75
      }
    }
  
    let maxMoney = 0;
    let mostMoneyServer = null;
    let hackingThreshold = playerHackingLevel * hackingRatio
  
    for (const server in server_info) {
      const hackingLevel = server_info[server].hacking_level;
      const maxMoneyValue = server_info[server].max_money;
  
      if (hackingLevel < hackingThreshold && maxMoneyValue > maxMoney) {
        maxMoney = maxMoneyValue;
        mostMoneyServer = server
      }
    }
  
    return mostMoneyServer
  }
  export async function main(ns) {
    // Write function to get
    // 1) the available memory on the local server
    // 2) the max number of threads it can run
    // 3)  set threads for that
    const target = getServerWithMostMoney(ns.getHackingLevel())
    const sleepTime = 1000 * 10
   
    while (true) {
      ns.print(target)
      await ns.sleep(sleepTime)
    }
  }