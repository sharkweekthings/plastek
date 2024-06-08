////
// edit items
//// renik

ItemEvents.modification(e => {
  e.modify('minecraft:ender_pearl', item => {
    item.maxStackSize = 64
  })
  
  e.modify('natprog:bone_pickaxe', item => {
    item.maxDamage = 75
  })
})