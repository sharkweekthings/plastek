////
// ice and fire
//// renik

//
// ServerEvents.recipes(event => {
// //

//   //REMOVE


// //
// })
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Ear Plugs
  event.shaped('iceandfire:earplugs', 
    ['2 2','1 1','2 2'], {
    1: '#minecraft:buttons',
    2: '#forge:wool'}).id('iceandfire:earplugs')

// Enoty Alfheim Package
  event.shaped('kubejs:empty_alfheim_package', 
    ['222','212','222'], {
    1: 'minecraft:chest',
    2: 'rootsclassic:growth_powder'}).id('kubejs:empty_alfheim_package')

// Fire Dragonstone Core Package
  event.shaped('kubejs:fire_dragonforge_core_package', 
    ['424','434','441'], {
    1: 'kubejs:empty_alfheim_package',
    2: 'kubejs:magical_note',
    3: 'iceandfire:fire_dragon_heart',
    4: 'iceandfire:dragonforge_fire_brick'}).id('kubejs:fire_dragonforge_core_package')

// Ice Dragonstone Core Package
  event.shaped('kubejs:ice_dragonforge_core_package', 
    ['424','434','441'], {
    1: 'kubejs:empty_alfheim_package',
    2: 'kubejs:magical_note',
    3: 'iceandfire:ice_dragon_heart',
    4: 'iceandfire:dragonforge_ice_brick'}).id('kubejs:ice_dragonforge_core_package')

// Lightning Dragonstone Core Package
  event.shaped('kubejs:lightning_dragonforge_core_package', 
    ['424','434','441'], {
    1: 'kubejs:empty_alfheim_package',
    2: 'kubejs:magical_note',
    3: 'iceandfire:lightning_dragon_heart',
    4: 'iceandfire:dragonforge_lightning_brick'}).id('kubejs:lightning_dragonforge_core_package')

// Dragonforge Lightning Brick
  event.shaped('4x iceandfire:dragonforge_lightning_brick', 
    ['131','323','131'], {
    1: '#forge:storage_blocks/scales/dragon/lightning',
    2: 'botania:dragonstone',
    3: 'immersiveengineering:concrete'}).id('iceandfire:dragonforge_lightning_brick')

// Dragonforge Fire Brick
  event.shaped('4x iceandfire:dragonforge_fire_brick', 
    ['131','323','131'], {
    1: '#forge:storage_blocks/scales/dragon/fire',
    2: 'botania:dragonstone',
    3: 'immersiveengineering:concrete'}).id('iceandfire:dragonforge_fire_brick')

// Dragonforge Ice Brick
  event.shaped('4x iceandfire:dragonforge_ice_brick', 
    ['131','323','131'], {
    1: '#forge:storage_blocks/scales/dragon/ice',
    2: 'botania:mana_diamond',
    3: 'immersiveengineering:concrete'}).id('iceandfire:dragonforge_ice_brick')

//    
})
//