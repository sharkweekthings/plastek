////
// ftb age rewards
//// renik test
// The idea for this script came from a modpack called Decursio Project and was originally Authored by Lady Lexxie and Alexandr

FTBQuestsEvents.customReward('75C204049F7833F5', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_1`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_1`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 15`) // Start Age 1 at 15
  event.server.runCommand(`tell ${event.player.username} Welcome to Age 1!`)
})

FTBQuestsEvents.customReward('2E87419E472B2A55', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_2`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_2`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 25`) // 20 - 30
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 2!`)
})

FTBQuestsEvents.customReward('6F0C49F751B5CFEF', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_3`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_3`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 35`) // 35 - 50
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 3!`)
})

FTBQuestsEvents.customReward('7E62DE06EC870236', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_4`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_4`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 55`) // 55 - 80
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 4!`)
})

FTBQuestsEvents.customReward('5D843BDA277B19CB', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_5`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_5`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 85`) // 85 - 100
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 5!`)
})

FTBQuestsEvents.customReward('4C97A02A7D12AB2C', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_6`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_6`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 105`) // 105 - 200
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 6!`)
})

FTBQuestsEvents.customReward('3B93B7256E6AC495', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} age_7`)
  event.server.runCommandSilent(`ftbranks add ${event.player.username} age_7`)
  event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 225`) // 225 - 250
  event.server.runCommandSilent(`tell ${event.player.username} Welcome to Age 7!`)
})

FTBQuestsEvents.customReward('2992209DD6A62C67', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} loot_1`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to loot vanilla chests and barrels!`)
})

FTBQuestsEvents.customReward('055C949031C21BAE', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} loot_2`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to loot Quark variant chests!`)
})

FTBQuestsEvents.customReward('04220A1E480F1E47', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} nether`)
  event.server.runCommandSilent(`tell ${event.player.username} You have gained access to the Nether!`)
})

FTBQuestsEvents.customReward('0CB202079AC5CAA2', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} end`)
  event.server.runCommandSilent(`tell ${event.player.username} You have gained access to the End!`)
})

FTBQuestsEvents.customReward('2DC687F7A36459AF', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} twilight_forest`)
  event.server.runCommandSilent(`tell ${event.player.username} You have gained access to the Twilight Forest!`)
})

FTBQuestsEvents.customReward('58AD6358671D5915', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} otherside`)
  event.server.runCommandSilent(`tell ${event.player.username} You have gained access to the Otherside!`)
})

FTBQuestsEvents.customReward('38790CFB44D09A1C', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} copper_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip Copper tiered items!`)
})

FTBQuestsEvents.customReward('170054EED0E4B314', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} silver_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip Silver tiered items!`)
})

FTBQuestsEvents.customReward('0827C48B3A1BA723', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} iron_equipment`)
  event.server.runCommandSilent(`tell ${event.player.username} You are now able to equip Iron tiered items!`)
})

FTBQuestsEvents.customReward('59C971762C0507A0', event => {
  event.server.runCommandSilent(`thitemstages add ${event.player.username} everything_else`)
  event.server.runCommandSilent(`tell ${event.player.username} It feels like a weight has been lifted from your shoulders. It's magical`)
})