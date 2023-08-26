////
// Renders the stored mana of a Mana Pool onto the screen when hovering over it with a Wand of the Forest
// Author: Quarris

var BlockContainerJS = Java.loadClass('dev.latvian.mods.kubejs.level.BlockContainerJS')

ClientEvents.paintScreen(event => {
  if (event.mc.screen) { // Don't display if there is a screen up (such as inventory screen)
    return
  }

  // Make sure we are holding Wand of the Forest
  if (event.mc.player.getMainHandItem().item != 'twig_wand' && event.mc.player.getOffHandItem().item != 'twig_wand') {
    return
  }

  var hitResult = event.mc.hitResult // Thing we are looking at
  // Make sure we are looking at the block
  if (hitResult.type != 'BLOCK') {
    return
  }

  var block = new BlockContainerJS(event.mc.level, hitResult.blockPos); // KJS Block Wrapper
  // Make sure our block has Mana
  if (block != 'botania:mana_pool' &&
    block != 'botania:diluted_pool' &&
    block != 'botania:fabulous_pool') {
    return
  }

  var dataText = `${block.entityData['mana']}`
  // If the block entity has the 'manaCap' data, display it too
  if (block.entityData['manaCap']) {
    dataText += ` / ${block.entityData['manaCap']}`
  }

  var height = event.height / 2 + 51

  // Render Block Data
  var dataWidth = event.font.width(dataText) // Width of the data string
  event.text('Mana', (event.width - event.font.width('Mana')) / 2, height, -11549999, true)
  event.text(dataText, (event.width - dataWidth) / 2, height + 11, -11549999, true)
})