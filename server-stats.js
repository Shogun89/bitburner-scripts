export async function main(ns) {

  var servers = [
    "CSEC",
    "I.I.I.I",
    "avmnite-02h",
    "catalyst",
    "computek",
    "crush-fitness",
    "foodnstuff",
    "harakiri-sushi",
    "hong-fang-tea",
    "iron-gym",
    "joesguns",
    "johnson-ortho",
    "max-hardware",
    "n00dles",
    "nectar-net",
    "neo-net",
    "netlink",
    "omega-net",
    "phantasy",
    "rothman-uni",
    "sigma-cosmetics",
    "silver-helix",
    "summit-uni",
    "syscore",
    "the-hub",
    "zb-institute",
    "zer0",

  ]


  while (true) {
    servers.forEach((server, index) => {
      
      ns.print(ns.getServerMaxMoney(server))
    })

    await ns.sleep(1000 * 5)
  }
}