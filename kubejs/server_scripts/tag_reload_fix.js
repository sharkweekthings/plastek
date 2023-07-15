////
// force a reload on startup to correct tag issues (temporary until KubeJS fixes an issue).
//// renik
// Author: LadyLexxie

ServerEvents.loaded(e => e.server.runCommandSilent('reload')) 

