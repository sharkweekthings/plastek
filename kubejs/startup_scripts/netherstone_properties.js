////
// make netherstone take longer to break
//// renik

BlockEvents.modification(e => {
  e.modify('kubejs:infused_nether_stone', block => {
    block.destroySpeed = 1
    block.hasCollision = true
    block.requiresTool = true
    // block.tagBlock("mineable/pickaxe")
    // block.tagBlock('minecraft:needs_diamond_tool')
  })

  e.modify('kubejs:nether_stone', block => {
    block.destroySpeed = 1
    block.hasCollision = true
    block.requiresTool = true
    // block.tagBlock("mineable/pickaxe")
    // block.tagBlock('minecraft:needs_diamond_tool')
  })

  e.modify('minecraft:honeycomb_block', block => {
    block.destroySpeed = 0.6
    block.hasCollision = true
    block.requiresTool = true
  })

  // e.modify(/log/, block => {
  //     block.destroySpeed = 4
  //     block.requiresTool = true
  // })




////
//fin
////

})