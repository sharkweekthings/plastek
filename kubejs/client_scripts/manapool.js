////
// Renders the stored mana of a Mana Pool onto the screen when hovering over it with a Wand of the Forest
// Author: Quarris

var BlockContainerJS = Java.loadClass('dev.latvian.mods.kubejs.level.BlockContainerJS')

ClientEvents.paintScreen(event => {
  if (event.mc.screen) { // Don't display if there is a screen up (such as inventory screen)
    return
  }

  var hitResult = event.mc.hitResult // Thing we are looking at
  if (hitResult.type == 'BLOCK') {
    var pos = hitResult.blockPos
    var block = new BlockContainerJS(event.mc.level, pos); // KJS Block Wrapper
    if (block.id == 'botania:mana_pool') {
      if (event.mc.player.getMainHandItem().item == 'twig_wand') { // Wand of the Forest
        var displayText = `${block.entityData["mana"]}`
        var textWidth = event.font.width(displayText)
        event.text(displayText, (event.width - textWidth) / 2, event.height / 2 + 50, -11549999, true)
      }
    }
  }
})