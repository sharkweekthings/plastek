////
// botania
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'botania:apothecary_forest'})
  event.remove({id: 'botania:apothecary_forest'})
  event.remove({id: 'botania:apothecary_plains'})
  event.remove({id: 'botania:apothecary_mountain'})
  event.remove({id: 'botania:apothecary_fungal'})
  event.remove({id: 'botania:apothecary_swamp'})
  event.remove({id: 'botania:apothecary_desert'})
  event.remove({id: 'botania:apothecary_taiga'})
  event.remove({id: 'botania:apothecary_mesa'})
  event.remove({id: 'botania:apothecary_mossy'})
  event.remove({id: 'botania:apothecary_deepslate'})
  event.remove({id: 'botania:apothecary_livingrock'})
  event.remove({id: 'botania:apothecary_default'})
  event.remove({id: 'botania:mana_spreader'})
  event.remove({id: 'botania:mana_pool'})
  event.remove({id: 'botania:mana_pylon'})
  event.remove({id: 'botania:open_crate'})
  event.remove({id: 'botania:glimmering_livingwood'})
  event.remove({id: 'botania:alfheim_portal'})
  event.remove({id: 'botania:mana_infusion/mana_pearl'})
  event.remove({id: 'botania:mana_infusion/mana_diamond'})
  event.remove({id: 'botania:elven_spreader'})
  event.remove({id: 'botania:flighttiara_0'})
  event.remove({id: 'botania:terrastel_helmet'})
  event.remove({id: 'botania:terrastel_chestplate'})
  event.remove({id: 'botania:terrastel_leggings'})
  event.remove({id: 'botania:terrastel_boots'})
  event.remove({id: 'botania:manasteel_helmet'})
  event.remove({id: 'botania:manasteel_chestplate'})
  event.remove({id: 'botania:manasteel_leggings'})
  event.remove({id: 'botania:manasteel_boots'})
  event.remove({id: 'botania:terra_plate'})
  event.remove({id: 'botania:mana_infusion/rotten_flesh_to_leather'})
  event.remove({id: 'botania:mana_infusion/mana_diamond_block'})
  event.remove({id: 'botania:glimmering_livingwood_from_log'})
  event.remove({id: 'botania:elven_trade/dragonstone'})
  event.remove({id: 'botania:elven_trade/dragonstone_block'})
  event.remove({id: 'mythicbotany:blasting/dragonstone'})
  event.remove({id: 'mythicbotany:smelting/dragonstone'})
  event.remove({id: 'thermal:furnace_1447321962'})
  
//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Petal Apothecary - Default
  event.shaped('botania:apothecary_default', 
    ['424','323','111'], {
    1: '#forge:treated_wood_slab', 
    2: 'compressium:stone_1',
    3: '#botania:mystical_flowers',
    4: 'minecraft:stone_slab'}).id('botania:apothecary_default')

// Flugel Tiara
  event.shaped('botania:flight_tiara', 
    ['111','212','232'], {
    1: 'botania:life_essence', 
    2: 'botania:elementium_ingot',
    3: 'botania:dragonstone'}).id('botania:flight_tiara')

// Petal Apothecary - Livingrock
  event.shaped('botania:apothecary_livingrock', 
    ['424','323','111'], {
    1: '#forge:treated_wood_slab', 
    2: 'botania:livingrock',
    3: '#botania:mystical_flowers',
    4: 'botania:livingrock_slab'}).id('botania:apothecary_livingrock')

// Mana Spreader
  event.shaped('botania:mana_spreader', 
    ['131','242','131'], {
    1: '#botania:livingwood_logs', 
    2: 'rootsclassic:growth_powder',
    3: '#botania:petals',
    4: 'minecraft:gold_ingot'}).id('botania:mana_spreader')

// Mana Pool
  event.shaped('botania:mana_pool', 
    ['222','121','111'], {
    1: 'botania:livingrock', 
    2: '#botania:petals'}).id('botania:mana_pool')

// Open Crate
  event.shaped('botania:open_crate', 
    ['111','121','111'], {
    1: 'botania:livingwood_planks', 
    2: 'minecraft:barrel'}).id('botania:open_crate')

// Glimmering Livingwood
  event.shaped('4x botania:glimmering_livingwood', 
    ['121','212','121'], {
    1: 'botania:livingwood', 
    2: 'rootsclassic:growth_powder'}).id('botania:glimmering_livingwood')

// Elven Gateway Core
  event.shaped('botania:alfheim_portal', 
    ['121','131','121'], {
    1: 'botania:glimmering_livingwood', 
    2: 'rootsclassic:growth_powder', 
    3: 'botania:terrasteel_ingot'}).id('botania:alfheim_portal')

// Elven Mana Spreader
  event.shaped('botania:elven_spreader', 
    ['111','323','111'], {
    1: '#botania:dreamwood_logs', 
    2: '#botania:petals', 
    3: 'botania:terrasteel_ingot'}).id('botania:elven_spreader')

// Manasteel Helmet
  event.shaped('botania:manasteel_helmet', 
    ['   ','222','212'], {
    1: 'botania:manaweave_helmet', 
    2: 'botania:manasteel_ingot'}).id('botania:manasteel_helmet')

// Manasteel Chestplate
  event.shaped('botania:manasteel_chestplate', 
    ['2 2','212','222'], {
    1: 'botania:manaweave_chestplate', 
    2: 'botania:manasteel_ingot'}).id('botania:manasteel_chestplate')

// Manasteel Leggings
  event.shaped('botania:manasteel_leggings', 
    ['222','212','2 2'], {
    1: 'botania:manaweave_leggings', 
    2: 'botania:manasteel_ingot'}).id('botania:manasteel_leggings')

// Manasteel Boots
  event.shaped('botania:manasteel_boots', 
    ['   ','2 2','212'], {
    1: 'botania:manaweave_boots', 
    2: 'botania:manasteel_ingot'}).id('botania:manasteel_boots')

// Terra Plate
  event.shaped('botania:terra_plate', 
    ['111','424','333'], {
    1: 'minecraft:lapis_block', 
    2: 'botania:manasteel_block',
    3: 'supplementaries:lapis_bricks_slab',
    4: 'rootsclassic:growth_powder'}).id('botania:terra_plate')

// Mana Pylon
  event.shaped('botania:mana_pylon', 
    [' 1 ','232',' 1 '], {
    1: 'minecraft:gold_ingot', 
    2: 'botania:manasteel_ingot',
    3: 'occultism:spirit_attuned_gem'}).id('botania:mana_pylon')

//    
})
//