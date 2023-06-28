import { multiscan } from "utils.js";

function count_cracks(ns){
  var cracks = [
    'BruteSSH.exe',
    'FTPCrack.exe',
    'relaySMTP.exe',
    'HTTPWorm.exe',
    'SQLInject.exe'

  ]
  var num_cracks = 0
  for (let i=0; i < cracks.length; i++){
    if (ns.fileExists(cracks[i], "home")){
      num_cracks += 1
    }
  }

  return num_cracks


}

export async function main(ns) {

  var targets = multiscan(ns, 'home');

  for (let i = 0; i < targets.length; i++) {
    var server = targets[i]
    if (ns.hasRootAccess(server) == false) {
      
      if (ns.fileExists('BruteSSH.exe', "home")) {
        ns.brutessh(server);
      }
      if (ns.fileExists('FTPCrack.exe', "home")) {
        ns.ftpcrack(server);
      }
      if (ns.fileExists('relaySMTP.exe', "home")) {
        ns.relaysmtp(server);
      }
      if (ns.fileExists('HTTPWorm.exe', "home")) {
        ns.httpworm(server);
      }
      if (ns.fileExists('SQLInject.exe', "home")) {
        ns.sqlinject(server);
      }

      let cracks = count_cracks(ns)
      if (ns.getServerNumPortsRequired(server) <= cracks ){
        ns.nuke(server)
        
      }
    }
  }

}