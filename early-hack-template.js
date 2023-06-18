/** @param {NS} ns */
export async function main(ns) {
  const target = "foodnstuff";
  const moneyThresh = ns.getServerMaxMoney(target) * 0.75;
  const securityThresh = ns.getServerMinSecurityLevel(target) + 5;

  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(target);
  }

  ns.nuke(target);


  while (true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
      await ns.weaken(target);
    }
    else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
      await ns.grow(target);
    }
    else {
      await ns.hack(target);
    }
  }
}