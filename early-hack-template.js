export async function main(ns) {

  var targets = ["nectar-net",
    "omega-net",
    "iron-gym",
    "phantasy",
    "harakiri-sushi",
    "silver-helix",
    "max-hardware",
    "foodnstuff",
    "neo-net",
    "zer0",
    "sigma-cosmetics",
    "joesguns"]

  var target = targets[Math.floor(Math.random() * targets.length)];
  const moneyThresh = ns.getServerMaxMoney(target) * 0.75;
  const securityThresh = ns.getServerMinSecurityLevel(target) + 5;

  while (true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
      // If the server's security level is above our threshold, weaken it
      await ns.weaken(target);
    }
    else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
      // If the server's money is less than our threshold, grow it
      await ns.grow(target);
    }
    else {
      // Otherwise, hack it
      await ns.hack(target);
    }
  }
}