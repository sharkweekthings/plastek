////
// custom block
//// renik

BlockEvents.modification(e => {
  e.modify('kubejs:nether_stone', block => {
    block.destroySpeed = 3
    block.hasCollision = true
    block.requiresTool = true
  })

////
//fin
////

})