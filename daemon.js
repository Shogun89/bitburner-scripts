export async function main(ns) {

  var hackScript = 'farm.js' 

  var host = ns.getHostname();
  var maxServerRam = ns.getServerMaxRam(host);
  var usedRam = ns.getServerUsedRam(host);
  var availableRam = maxServerRam - usedRam;
  var threadCost = ns.getScriptRam(hackScript);
  
  // TODO : Make this a function that gets list of servers you can hack (use map function)
  var targets = [
    'n00dles',
    'foodnstuff',
    'sigma-cosmetics',
    'joesguns',
    'hong-fang-tea',
    'harakiri-sushi',
    'iron-gym',
    "computek",
    "johnson-ortho",
    "netlink",
    "crush-fitness",
    "max-hardware",
    "foodnstuff",
    "neo-net",
    "zer0",
    "sigma-cosmetics",
    "joesguns",
    "rho-construction",
    "solaris",
    "infocomm",
    "nova-med",
    "taiyang-digital",
    "snap-fitness",
    "unitalife",
    "icarus",
    "powerhouse-fitness",
    "kuai-gong",
    "applied-energetics",
    "ecorp",
    "megacorp"

  ]
  var numTargets = targets.length
  var numThreads = Math.floor(availableRam/(threadCost * numTargets))

  targets.forEach((server, index) => {
    ns.exec(hackScript, host,numThreads,server)

  })


}