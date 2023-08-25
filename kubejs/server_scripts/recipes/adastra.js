////
// ad astra
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'ad_astra:recipes/aeronos_chest'})
  event.remove({id: 'ad_astra:recipes/strophar_chest'})
  event.remove({id: 'ad_astra:recipes/iron_rod'})
  event.remove({id: 'ad_astra:recipes/nasa_workbench'})
  event.remove({id: 'ad_astra:recipes/fuel_refinery'})
  event.remove({id: 'ad_astra:recipes/oxygen_loader'})
  event.remove({id: 'ad_astra:recipes/space_helmet'})
  event.remove({id: 'ad_astra:recipes/space_suit'})
  event.remove({id: 'ad_astra:recipes/space_pants'})
  event.remove({id: 'ad_astra:recipes/space_boots'})
  event.remove({id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
  event.remove({id: 'ad_astra:recipes/steel_engine'})
  event.remove({id: 'ad_astra:recipes/desh_engine'})
  event.remove({id: 'ad_astra:recipes/ostrum_engine'})
  event.remove({id: 'ad_astra:recipes/calorite_engine'})
  event.remove({id: 'ad_astra:recipes/rocket_nose_cone'})
  event.remove({id: 'ad_astra:recipes/oxygen_tank'})
  event.remove({id: 'ad_astra:recipes/calorite_tank'})
  event.remove({id: 'ad_astra:recipes/ostrum_tank'})
  event.remove({id: 'ad_astra:recipes/desh_tank'})
  event.remove({id: 'ad_astra:recipes/desh_fluid_pipe'})
  event.remove({id: 'ad_astra:recipes/ostrum_fluid_pipe'})
  event.remove({id: 'ad_astra:recipes/cable_duct'})
  event.remove({id: 'ad_astra:recipes/steel_cable'})
  event.remove({id: 'ad_astra:recipes/desh_cable'})
  event.remove({id: 'ad_astra:recipes/fluid_pipe_duct'})
  event.remove({id: 'ad_astra:recipes/coal_generator'})
  event.remove({id: 'ad_astra:recipes/solar_panel'})
  event.remove({id: 'ad_astra:recipes/energizer'})
  event.remove({id: 'ad_astra:recipes/rocket_fin'})
  event.remove({id: 'ad_astra:recipes/oxygen_sensor'})
  event.remove({id: 'ad_astra:recipes/water_pump'})
  event.remove({id: 'ad_astra:recipes/compressor'})
  event.remove({id: 'ad_astra:recipes/oxygen_distributor'})
  event.remove({id: 'ad_astra:recipes/tier_1_rover'})
  event.remove({id: 'ad_astra:recipes/engine_fan'})
  event.remove({id: 'ad_astra:recipes/oxygen_gear'})
  event.remove({id: 'ad_astra:recipes/calorite_block'})
  event.remove({id: 'ad_astra:recipes/calorite_ingot'})
  event.remove({id: 'ad_astra:hammering/desh_plate'})
  event.remove({id: 'ad_astra:hammering/ostrum_plate'})
  event.remove({id: 'ad_astra:hammering/iron_plate'})
  event.remove({id: 'ad_astra:hammering/steel_plate'})
  event.remove({id: 'ad_astra:hammering/calorite_plate'})
  event.remove({id: 'ad_astra:recipes/netherite_space_helmet'})
  event.remove({id: 'ad_astra:recipes/netherite_space_suit'})
  event.remove({id: 'ad_astra:recipes/netherite_space_pants'})
  event.remove({id: 'ad_astra:recipes/netherite_space_boots'})

  event.remove({id: 'ad_astra:recipes/desh_ingot_from_blasting_raw_desh'})
  event.remove({id: 'ad_astra:recipes/desh_ingot_from_blasting_moon_desh_ore'})
  event.remove({id: 'ad_astra:recipes/desh_ingot_from_blasting_deepslate_desh_ore'})
  event.remove({id: 'ad_astra:recipes/desh_ingot_from_smelting_raw_desh'})
  event.remove({id: 'ad_astra:recipes/desh_ingot_from_smelting_moon_desh_ore'})
  event.remove({id: 'ad_astra:recipes/desh_ingot_from_smelting_deepslate_desh_ore'})

  event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_blasting_raw_ostrum'})
  event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_blasting_mars_ostrum_ore'})
  event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_blasting_deepslate_ostrum_ore'})
  event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_smelting_raw_ostrum'})
  event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_smelting_mars_ostrum_ore'})
  event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_smelting_deepslate_ostrum_ore'})

  event.remove({id: 'ad_astra:recipes/calorite_ingot_from_blasting_raw_calorite'})
  event.remove({id: 'ad_astra:recipes/calorite_ingot_from_blasting_venus_calorite_ore'})
  event.remove({id: 'ad_astra:recipes/calorite_ingot_from_blasting_deepslate_calorite_ore'})
  event.remove({id: 'ad_astra:recipes/calorite_ingot_from_smelting_raw_calorite'})
  event.remove({id: 'ad_astra:recipes/calorite_ingot_from_smelting_venus_calorite_ore'})
  event.remove({id: 'ad_astra:recipes/calorite_ingot_from_smelting_deepslate_calorite_ore'})

  event.remove({id: 'thermal:furnace_822402960'})
  event.remove({id: 'ad_astra_giselle_addon:crafting/gravity_normalizer'})
  event.remove({id: 'ad_astra_giselle_addon:crafting/fuel_loader'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD
    
// Launch Pad
  event.shaped('ad_astra:launch_pad', 
    ['121','212','121'], {
    1: 'industrialforegoing:plastic',
    2: 'emendatusenigmatica:iron_plate'}).id('ad_astra:recipes/launch_pad')
    
// Nasa Workbench 
  event.shaped('ad_astra:nasa_workbench', 
    ['565','343','121'], {
    1: 'minecraft:redstone_block',
    2: 'pneumaticcraft:compressed_iron_block',
    3: 'industrialforegoing:plastic',
    4: 'minecraft:crafting_table',
    5: 'create:precision_mechanism',
    6: 'create:electron_tube'}).id('ad_astra:recipes/nasa_workbench')
    
// Fuel Refinery 
  event.shaped('ad_astra:fuel_refinery', 
    ['151','232','141'], {
    1: 'industrialforegoing:plastic',
    2: 'emendatusenigmatica:iron_plate',
    3: 'minecraft:furnace',
    4: 'create:precision_mechanism',
    5: 'pneumaticcraft:ingot_iron_compressed'}).id('ad_astra:recipes/fuel_refinery')
    
// Oxygen Loader
  event.shaped('ad_astra:oxygen_loader', 
    ['141','323','151'], {
    1: 'industrialforegoing:plastic',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: 'ad_astra:oxygen_tank',
    4: 'ad_astra:engine_fan',
    5: 'create:precision_mechanism'}).id('ad_astra:recipes/oxygen_loader')
    
// Space Helmet
  event.shaped('ad_astra:space_helmet', 
    ['121','232','121'], {
    1: 'industrialforegoing:plastic',
    2: 'emendatusenigmatica:iron_plate',
    3: 'minecraft:glass_pane'}).id('ad_astra:recipes/space_helmet')
    
// Space Suit
  event.shaped('ad_astra:space_suit', 
    ['121','343','252'], {
    1: 'industrialforegoing:plastic',
    2: 'emendatusenigmatica:iron_plate',
    3: 'ad_astra:oxygen_tank',
    4: 'ad_astra:oxygen_gear',
    5: 'minecraft:white_wool'}).id('ad_astra:recipes/space_suit')
    
// Space Pants
  event.shaped('ad_astra:space_pants', 
    ['121','313','3 3'], {
    1: 'industrialforegoing:plastic',
    2: 'emendatusenigmatica:iron_plate',
    3: 'minecraft:white_wool'}).id('ad_astra:recipes/space_pants')

// Space Boots
  event.shaped('ad_astra:space_boots', 
    ['1 1','3 3','2 2'], {
    1: 'industrialforegoing:plastic',
    2: 'emendatusenigmatica:iron_plate',
    3: 'minecraft:white_wool'}).id('ad_astra:recipes/space_boots')

// Rocket Fin
  event.shaped('ad_astra:rocket_fin', 
    [' 2 ','313','2 2'], {
    1: 'kubejs:cheap_plastic_rocket_fin',
    2: 'emendatusenigmatica:steel_plate',
    3: 'pneumaticcraft:plastic'}).id('ad_astra:recipes/rocket_fin')

// Nose Cone
  event.shaped('ad_astra:rocket_nose_cone', 
    [' 4 ',' 1 ','232'], {
    1: 'kubejs:cheap_plastic_rocket_nose_cone',
    2: 'emendatusenigmatica:steel_plate',
    3: 'pneumaticcraft:plastic',
    4: 'create:electron_tube'}).id('ad_astra:recipes/rocket_nose_cone')
    
// Oxygen Tank
  event.shaped('ad_astra:oxygen_tank', 
    ['21 ','22 ','22 '], {
    1: 'create:cogwheel',
    2: 'emendatusenigmatica:iron_plate'}).id('ad_astra:recipes/oxygen_tank')

// Desh Engine
  event.shaped('ad_astra:desh_engine', 
    ['212','343',' 5 '], {
    1: 'kubejs:cheap_plastic_engine',
    2: 'ad_astra:desh_plate',
    3: 'pneumaticcraft:plastic',
    4: 'ad_astra:engine_frame',
    5: 'ad_astra:engine_fan'}).id('ad_astra:recipes/desh_engine')

// Ostrum Engine
  event.shaped('ad_astra:ostrum_engine', 
    ['212','343',' 5 '], {
    1: 'ad_astra:desh_engine',
    2: 'ad_astra:ostrum_plate',
    3: 'silentcompat:plasteel_ingot',
    4: 'ad_astra:engine_frame',
    5: 'ad_astra:engine_fan'}).id('ad_astra:recipes/ostrum_engine')

// Calorite Engine
  event.shaped('ad_astra:calorite_engine', 
    ['212','343',' 5 '], {
    1: 'ad_astra:ostrum_engine',
    2: 'ad_astra:calorite_plate',
    3: 'mekanism:hdpe_sheet',
    4: 'ad_astra:engine_frame',
    5: 'ad_astra:engine_fan'}).id('ad_astra:recipes/calorite_engine')

// Desh Tank
  event.shaped('ad_astra:desh_tank', 
    ['22 ','21 ','22 '], {
    1: 'kubejs:cheap_plastic_tank',
    2: 'ad_astra:desh_plate'}).id('ad_astra:recipes/desh_tank')

// Ostrum Tank
  event.shaped('ad_astra:ostrum_tank', 
    ['22 ','21 ','22 '], {
    1: 'ad_astra:desh_tank',
    2: 'ad_astra:ostrum_plate'}).id('ad_astra:recipes/ostrum_tank')

// Engine Fan
  event.shaped('ad_astra:engine_fan', 
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:iron_rod',
    2: 'emendatusenigmatica:iron_plate'}).id('ad_astra:recipes/engine_fan')

// Calorite Tank
  event.shaped('ad_astra:calorite_tank', 
    ['22 ','21 ','22 '], {
    1: 'ad_astra:ostrum_tank',
    2: 'ad_astra:calorite_plate'}).id('ad_astra:recipes/calorite_tank')

// Oxygen Gear
  event.shaped('ad_astra:oxygen_gear', 
    [' 1 ','212','212'], {
    1: 'emendatusenigmatica:iron_rod',
    2: 'emendatusenigmatica:iron_plate'}).id('ad_astra:recipes/oxygen_gear')

// Fuel Loader
  event.shaped('ad_astra_giselle_addon:fuel_loader', 
    ['333','313','323'], {
    1: 'ad_astra:fuel_refinery',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'}).id('ad_astra:crafting/fuel_loader')

// Netherite Space Helmet
  event.shaped('ad_astra:netherite_space_helmet', 
    ['   ','212','232'], {
    1: 'thermal:hazmat_helmet',
    2: 'ad_astra:ostrum_plate',
    3: 'thermal:netherite_plate'}).id('ad_astra:recipes/netherite_space_helmet')

// Netherite Space Suit
  event.shaped('ad_astra:netherite_space_suit', 
    ['232','545','212'], {
    1: 'thermal:hazmat_chestplate',
    2: 'ad_astra:ostrum_plate',
    3: 'thermal:netherite_plate',
    4: 'ad_astra:oxygen_gear',
    5: 'ad_astra:oxygen_tank'}).id('ad_astra:recipes/netherite_space_suit')

// Netherite Space Pants
  event.shaped('ad_astra:netherite_space_pants', 
    ['313','2 2','2 2'], {
    1: 'thermal:hazmat_leggings',
    2: 'ad_astra:ostrum_plate',
    3: 'thermal:netherite_plate'}).id('ad_astra:recipes/netherite_space_pants')

// Netherite Space Boots
  event.shaped('ad_astra:netherite_space_boots', 
    ['   ','3 3','212'], {
    1: 'thermal:hazmat_boots',
    2: 'ad_astra:ostrum_plate',
    3: 'thermal:netherite_plate'}).id('ad_astra:recipes/netherite_space_boots')

  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "AAAAA",
    "AAAAA",
    "AAAAA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "ad_astra:calorite_ingot"
    }
  },
  "result": {
    "item": "ad_astra:calorite_block"
  }
}).id('ad_astra:recipes/calorite_block')

// Leather + Raw Rabbit = Rabbit Hide  
  event.shapeless(Item.of('25x ad_astra:calorite_ingot'), ['ad_astra:calorite_block']).id('ad_astra:recipes/calorite_ingot')




//    
})
//