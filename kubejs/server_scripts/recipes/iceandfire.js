////
// ice and fire
//// renik


ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'iceandfire:dragonforge_ice_core_disabled'})
  event.remove({id: 'iceandfire:dragonforge_fire_core_disabled'})
  event.remove({id: 'iceandfire:dragonforge_lightning_core_disabled'})


//
})


//
ServerEvents.recipes(event => {
//

  //ADD

// Ear Plugs
  event.shaped('iceandfire:earplugs', 
    ['2 2','1 1','2 2'], {
    1: '#minecraft:buttons',
    2: '#forge:wool'}).id('iceandfire:earplugs')

// Copper Helmet
  event.shaped('iceandfire:armor_copper_metal_helmet', 
    ['   ','111','121'], {
    1: 'minecraft:copper_ingot',
    2: 'minecraft:leather_helmet'}).id('iceandfire:armor_copper_metal_helmet')

// Copper Chestplate
  event.shaped('iceandfire:armor_copper_metal_chestplate', 
    ['1 1','121','111'], {
    1: 'minecraft:copper_ingot',
    2: 'minecraft:leather_chestplate'}).id('iceandfire:armor_copper_metal_chestplate')

// Copper Leggings>
  event.shaped('iceandfire:armor_copper_metal_leggings', 
    ['111','121','1 1'], {
    1: 'minecraft:copper_ingot',
    2: 'minecraft:leather_leggings'}).id('iceandfire:armor_copper_metal_leggings')

// Copper Boots
  event.shaped('iceandfire:armor_copper_metal_boots', 
    ['   ','121','1 1'], {
    1: 'minecraft:copper_ingot',
    2: 'minecraft:leather_boots'}).id('iceandfire:armor_copper_metal_boots')

// Silver Helmet
  event.shaped('iceandfire:armor_silver_metal_helmet', 
    ['   ','111','121'], {
    1: 'thermal:silver_ingot',
    2: 'minecraft:leather_helmet'}).id('iceandfire:armor_silver_metal_helmet')

// Silver Chestplate
  event.shaped('iceandfire:armor_silver_metal_chestplate', 
    ['1 1','121','111'], {
    1: 'thermal:silver_ingot',
    2: 'minecraft:leather_chestplate'}).id('iceandfire:armor_silver_metal_chestplate')

// Silver Leggings>
  event.shaped('iceandfire:armor_silver_metal_leggings', 
    ['111','121','1 1'], {
    1: 'thermal:silver_ingot',
    2: 'minecraft:leather_leggings'}).id('iceandfire:armor_silver_metal_leggings')

// Silver Boots
  event.shaped('iceandfire:armor_silver_metal_boots', 
    ['   ','121','1 1'], {
    1: 'thermal:silver_ingot',
    2: 'minecraft:leather_boots'}).id('iceandfire:armor_silver_metal_boots')


// Enoty Alfheim Package
  event.shaped('kubejs:empty_alfheim_package', 
    ['222','212','222'], {
    1: 'minecraft:chest',
    2: 'rootsclassic:growth_powder'}).id('kubejs:empty_alfheim_package')

// Fire Dragonstone Core Package
  event.shaped('kubejs:fire_dragonforge_core_package', 
    ['424','434','541'], {
    1: 'kubejs:empty_alfheim_package',
    2: 'kubejs:magical_note',
    3: 'iceandfire:fire_dragon_heart',
    4: 'iceandfire:dragonforge_fire_brick',
    5: 'botania:dragonstone'}).id('kubejs:fire_dragonforge_core_package')

// Ice Dragonstone Core Package
  event.shaped('kubejs:ice_dragonforge_core_package', 
    ['424','434','541'], {
    1: 'kubejs:empty_alfheim_package',
    2: 'kubejs:magical_note',
    3: 'iceandfire:ice_dragon_heart',
    4: 'iceandfire:dragonforge_ice_brick',
    5: 'botania:mana_diamond'}).id('kubejs:ice_dragonforge_core_package')

// Lightning Dragonstone Core Package
  event.shaped('kubejs:lightning_dragonforge_core_package', 
    ['424','434','541'], {
    1: 'kubejs:empty_alfheim_package',
    2: 'kubejs:magical_note',
    3: 'iceandfire:lightning_dragon_heart',
    4: 'iceandfire:dragonforge_lightning_brick',
    5: 'botania:dragonstone'}).id('kubejs:lightning_dragonforge_core_package')

// Dragonforge Lightning Brick
  event.shaped('3x iceandfire:dragonforge_lightning_brick', 
    ['232','313','232'], {
    1: '#forge:storage_blocks/scales/dragon/lightning',
    2: 'pneumaticcraft:reinforced_bricks',
    3: '#iceandfire:scales/dragon/lightning'}).id('iceandfire:dragonforge_lightning_brick')

// Dragonforge Fire Brick
  event.shaped('3x iceandfire:dragonforge_fire_brick', 
    ['232','313','232'], {
    1: '#forge:storage_blocks/scales/dragon/fire',
    2: 'pneumaticcraft:reinforced_bricks',
    3: '#iceandfire:scales/dragon/fire'}).id('iceandfire:dragonforge_fire_brick')

// Dragonforge Ice Brick
  event.shaped('3x iceandfire:dragonforge_ice_brick', 
    ['232','313','232'], {
    1: '#forge:storage_blocks/scales/dragon/ice',
    2: 'pneumaticcraft:reinforced_bricks',
    3: '#iceandfire:scales/dragon/ice'}).id('iceandfire:dragonforge_ice_brick')

// Dragonforge Ice Aperture
  event.shaped('iceandfire:dragonforge_ice_input', 
    ['121','232','121'], {
    1: 'iceandfire:dragonforge_ice_brick',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: 'pneumaticcraft:pressure_tube'}).id('iceandfire:dragonforge_ice_input')

// Dragonforge Fire Aperture
  event.shaped('iceandfire:dragonforge_fire_input', 
    ['121','232','121'], {
    1: 'iceandfire:dragonforge_fire_brick',
    2: 'emendatusenigmatica:steel_plate',
    3: 'pneumaticcraft:pressure_tube'}).id('iceandfire:dragonforge_fire_input')

// Dragonforge Lightning Aperture
  event.shaped('iceandfire:dragonforge_lightning_input', 
    ['121','232','121'], {
    1: 'iceandfire:dragonforge_lightning_brick',
    2: 'emendatusenigmatica:steel_plate',
    3: 'pneumaticcraft:pressure_tube'}).id('iceandfire:dragonforge_lightning_input')

//    
})
//