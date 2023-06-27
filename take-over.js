import { multiscan } from "utils.js";

export async function main(ns) {

  var targets = multiscan(ns, 'home');

  for (let i = 0; i < targets.length; i++) {
    let server = targets[i]
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
      if (ns.getServerNumPortsRequired(server) == true){
        ns.nuke(server)
      }
    }
  }

}