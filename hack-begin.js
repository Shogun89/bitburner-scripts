export async function main(ns) {

    ns.run('take-over.js')
    var homeServer = 'home'
    var hackScript = 'early-hack-template.js' 
  
    var maxServerRam = ns.getServerMaxRam(homeServer);
    var usedRam = ns.getServerUsedRam(homeServer);
    var availableRam = maxServerRam - usedRam;
    var threadCost = ns.getScriptRam(hackScript);
    
    var targets = [
      'n00dles',
      'foodnstuff',
      'sigma-cosmetics',
      'joesguns',
      'hong-fang-tea',
      'harakiri-sushi',
      'iron-gym'
  
    ]
    var numTargets = targets.length
    var numThreads = Math.floor(availableRam/(threadCost * numTargets))
  
    targets.forEach((server, index) => {
      ns.exec(hackScript, homeServer,numThreads,server)
  
    })
  
  
  }