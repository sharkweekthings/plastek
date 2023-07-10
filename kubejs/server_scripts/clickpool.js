////
// right click on a mana pool to display chat output
//// renik
// Author: Lat

 BlockEvents.rightClicked('botania:mana_pool', event => {
  event.player.tell(event.block.entityData)
})