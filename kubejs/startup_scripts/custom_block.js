////
// custom block
//// renik

BlockEvents.modification(e => {
  e.modify('kubejs:infused_nether_stone', block => {
    block.destroySpeed = 15
    block.hasCollision = true
    block.requiresTool = true
  })

////
//fin
////

})