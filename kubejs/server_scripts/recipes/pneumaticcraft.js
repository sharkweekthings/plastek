////
// pneumatic craft
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'pneumaticcraft:pressure_chamber/coal_to_diamond'})
  event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
  event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_valve_x4'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_valve_x1'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_valve'})
  event.remove({id: 'pneumaticcraft:pressure_tube'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_wall'})
  event.remove({id: 'pneumaticcraft:reinforced_stone'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_glass'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_glass_x4'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_glass_x1'})
  event.remove({id: 'pneumaticcraft:pressure_chamber_interface'})
  event.remove({id: 'pneumaticcraft:air_compressor'})
  event.remove({id: 'pneumaticcraft:printed_circuit_board'})
  event.remove({id: 'pneumaticcraft:vortex_tube'})
  event.remove({id: 'pneumaticcraft:refinery'})
  event.remove({id: 'pneumaticcraft:refinery_output'})
  event.remove({id: 'pneumaticcraft:small_tank'})
  event.remove({id: 'pneumaticcraft:uv_light_box'})
  event.remove({id: 'pneumaticcraft:pressure_chamber/transistor'})
  event.remove({id: 'pneumaticcraft:pressure_chamber/capacitor'})
  event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'})
  event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
  event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})
  event.remove({id: 'pneumaticcraft:heat_frame'})
  event.remove({id: 'pneumaticcraft:thermopneumatic_processing_plant'})
  event.remove({id: 'pneumaticcraft:smart_chest'})
  event.remove({id: 'pneumaticcraft:pneumatic_dynamo'})
  event.remove({id: 'pneumaticcraft:assembly_platform'})
  event.remove({id: 'pneumaticcraft:assembly_io_unit_import'})
  event.remove({id: 'pneumaticcraft:assembly_io_unit_export'})
  event.remove({id: 'pneumaticcraft:assembly_drill'})
  event.remove({id: 'pneumaticcraft:assembly_laser'})
  event.remove({id: 'pneumaticcraft:assembly_controller'})
  event.remove({id: 'pneumaticcraft:bandage'})
  event.remove({id: 'pneumaticcraft:etching_tank'})
  event.remove({id: 'pneumaticcraft:chunkloader_upgrade'})
  event.remove({id: 'pneumaticcraft:pressure_chamber/etching_acid'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD
    
// Assembly Platform
  event.shaped('pneumaticcraft:assembly_platform', 
    ['111','222','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board'}).id('pneumaticcraft:assembly_platform')
    
// Assembly IO Import
  event.shaped('pneumaticcraft:assembly_io_unit_import', 
    ['511',' 21','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:hopper'}).id('pneumaticcraft:assembly_io_unit_import')
    
// Assembly IO Export
  event.shaped('pneumaticcraft:assembly_io_unit_export', 
    ['115','12 ','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:hopper'}).id('pneumaticcraft:assembly_io_unit_export')
    
// Assembly Controller
  event.shaped('pneumaticcraft:assembly_controller', 
    ['545','242','313'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: '#forge:glass'}).id('pneumaticcraft:assembly_controller')
    
// Assembly Drill
  event.shaped('pneumaticcraft:assembly_drill', 
    ['511',' 21','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:diamond_block'}).id('pneumaticcraft:assembly_drill')
    
// Assembly Laser
  event.shaped('pneumaticcraft:assembly_laser', 
    ['511',' 21','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:red_stained_glass_pane'}).id('pneumaticcraft:assembly_laser')
    
// Pressure Chamber Valve  
  event.shaped('pneumaticcraft:pressure_chamber_valve', 
    ['111','232','141'], {
    1: 'industrialforegoing:plastic',
    2: 'minecraft:iron_block',
    3: 'pneumaticcraft:pressure_tube',
    4: 'emendatusenigmatica:iron_gear'}).id('pneumaticcraft:pressure_chamber_valve')
    
// Thermopneumatic Processing Plant 
  event.shaped('pneumaticcraft:thermopneumatic_processing_plant', 
    ['414','232','414'], {
    1: 'pneumaticcraft:plastic',
    2: 'pneumaticcraft:small_tank',
    3: 'pneumaticcraft:pressure_tube',
    4: 'pneumaticcraft:reinforced_stone_slab'}).id('pneumaticcraft:thermopneumatic_processing_plant')
    
// Pressure Tube
  event.shaped('pneumaticcraft:pressure_tube', 
    ['   ','231','   '], {
    1: 'industrialforegoing:plastic',
    2: 'emendatusenigmatica:iron_rod',
    3: 'emendatusenigmatica:iron_gear'}).id('pneumaticcraft:pressure_tube')
    
// Pressure Chamber Wall
  event.shaped('4x pneumaticcraft:pressure_chamber_wall', 
    [' 2 ','212',' 2 '], {
    1: 'industrialforegoing:plastic',
    2: 'pneumaticcraft:reinforced_bricks'}).id('pneumaticcraft:pressure_chamber_wall')
    
// Pressure Chamber Glass
  event.shaped('4x pneumaticcraft:pressure_chamber_glass', 
    [' 2 ','212',' 2 '], {
    1: 'tconstruct:seared_glass',
    2: 'pneumaticcraft:reinforced_bricks'}).id('pneumaticcraft:pressure_chamber_glass')
    
// Pressure Chamber Interface
  event.shaped('pneumaticcraft:pressure_chamber_interface', 
    ['444','333','121'], {
    1: 'pneumaticcraft:pressure_chamber_wall',
    2: 'minecraft:hopper',
    3: 'emendatusenigmatica:iron_plate',
    4: 'industrialforegoing:plastic'}).id('pneumaticcraft:pressure_chamber_interface')
    
// Air Compressor
  event.shaped('pneumaticcraft:air_compressor', 
    ['111','542','131'], {
    1: 'pneumaticcraft:reinforced_bricks',
    2: 'pneumaticcraft:pressure_tube',
    3: 'minecraft:furnace',
    4: 'industrialforegoing:plastic',
    5: 'emendatusenigmatica:iron_gear'}).id('pneumaticcraft:air_compressor')
    
// Reinforced Stone
  event.shaped('32x pneumaticcraft:reinforced_stone', 
    ['232','313','232'], {
    1: 'industrialforegoing:plastic',
    2: 'compressium:stone_1',
    3: '#forge:concrete'}).id('pneumaticcraft:reinforced_stone')

// Spawner Agitator
  event.shaped('pneumaticcraft:spawner_agitator', 
    ['343','424','313'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'pneumaticcraft:heat_frame',
    3: 'minecraft:fermented_spider_eye',
    4: 'minecraft:blaze_rod'}).id('pneumaticcraft:spawner_agitator')
    
// // Finished PCB
//   event.shaped('pneumaticcraft:printed_circuit_board', 
//     ['414','232','414'], {
//     1: 'pneumaticcraft:transistor',
//     2: 'pneumaticcraft:capacitor',
//     3: 'pneumaticcraft:unassembled_pcb',
//     4: 'immersiveengineering:wire_aluminum'}).id('pneumaticcraft:printed_circuit_board')

// Vortex Tube  
  event.shaped('pneumaticcraft:vortex_tube', 
    ['212','313','444'], {
    1: 'pneumaticcraft:pressure_tube',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: 'create:precision_mechanism',
    4: 'pneumaticcraft:plastic'}).id('pneumaticcraft:vortex_tube')
    
// Refinery Controller 
  event.shaped('pneumaticcraft:refinery', 
    ['141','323','141'], {
    1: 'pneumaticcraft:reinforced_stone_slab',
    2: 'pneumaticcraft:small_tank',
    3: 'create:precision_mechanism',
    4: 'pneumaticcraft:plastic'}).id('pneumaticcraft:refinery')
    
// Refinery Output 
  event.shaped('pneumaticcraft:refinery_output', 
    ['141','232','141'], {
    1: 'pneumaticcraft:reinforced_stone_slab',
    2: '#forge:glass',
    3: 'create:precision_mechanism',
    4: 'pneumaticcraft:plastic'}).id('pneumaticcraft:refinery_output')
    
// Small Fluid Tank
  event.shaped('pneumaticcraft:small_tank', 
    ['141','232','141'], {
    1: 'minecraft:iron_bars',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: '#forge:glass',
    4: 'pneumaticcraft:plastic'}).id('pneumaticcraft:small_tank')
    
// UV Light Box
  event.shaped('pneumaticcraft:uv_light_box', 
    ['111','435','222'], {
    1: 'minecraft:redstone_lamp',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: 'pneumaticcraft:pcb_blueprint',
    4: 'create:precision_mechanism',
    5: 'pneumaticcraft:pressure_tube'}).id('pneumaticcraft:uv_light_box')
    
// Heat Frame
  event.shaped('pneumaticcraft:heat_frame', 
    ['353','212','343'], {
    1: 'create:blaze_burner',
    2: 'pneumaticcraft:compressed_iron_block',
    3: 'emendatusenigmatica:iron_rod',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'pneumaticcraft:plastic'}).id('pneumaticcraft:heat_frame')
    
// Smart Chest
  event.shaped('pneumaticcraft:smart_chest', 
    ['   ','121','354'], {
    1: 'minecraft:diamond',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:reinforced_chest',
    4: 'minecraft:ender_chest',
    5: 'pneumaticcraft:omnidirectional_hopper'}).id('pneumaticcraft:smart_chest')
    
// Capacitor
  event.shaped('pneumaticcraft:capacitor', 
    ['151','343',' 2 '], {
    1: 'pneumaticcraft:plastic',
    2: 'immersiveengineering:wire_electrum',
    3: 'emendatusenigmatica:apatite_dust',
    4: 'silentcompat:arcmetal_nugget',
    5: 'immersivepetroleum:petcoke_dust'}).id('pneumaticcraftpressure_chamber/capacitor')
    
// Transistor
  event.shaped('pneumaticcraft:transistor', 
    ['151','343',' 2 '], {
    1: 'pneumaticcraft:plastic',
    2: 'immersiveengineering:wire_electrum',
    3: 'immersiveengineering:dust_hop_graphite',
    4: 'silentcompat:arcmetal_nugget',
    5: 'immersivepetroleum:petcoke_dust'}).id('pneumaticcraft:pressure_chamber/transistor')

// Compressed Iron Gear
  event.shaped('pneumaticcraft:compressed_iron_gear',
    [' 1 ','121',' 1 '], {
    1: 'pneumaticcraft:ingot_iron_compressed',
    2: 'create:super_glue'}).id('pneumaticcraft:compressed_iron_gear')

// Green Board
  event.shapeless(Item.of('pneumaticcraft:printed_circuit_board'), ['pneumaticcraft:unassembled_pcb', 'immersiveengineering:wire_aluminum', 'immersiveengineering:wire_aluminum', 'pneumaticcraft:transistor', 'pneumaticcraft:capacitor']).id('pneumaticcraft:printed_circuit_board')

// Pneumatic Helmet
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:advanced_pressure_tube"
    },
    "B": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "C": {
      "type": "forge:nbt",
      "item": "pneumaticcraft:air_canister",
      "count": 1,
      "nbt": "{\"pneumaticcraft:air\":30000}"
    },
    "D": {
      "item": "pneumaticcraft:compressed_iron_helmet"
    }
  },
  "result": {
    "item": "pneumaticcraft:pneumatic_helmet"
  }
}).id('pneumaticcraft:pneumatic_helmet')

// Pneumatic Chestplate
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:advanced_pressure_tube"
    },
    "B": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "C": {
      "type": "forge:nbt",
      "item": "pneumaticcraft:air_canister",
      "count": 1,
      "nbt": "{\"pneumaticcraft:air\":30000}"
    },
    "D": {
      "item": "pneumaticcraft:compressed_iron_chestplate"
    }
  },
  "result": {
    "item": "pneumaticcraft:pneumatic_chestplate"
  }
}).id('pneumaticcraft:pneumatic_chestplate')

// Pneumatic Leggings
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:advanced_pressure_tube"
    },
    "B": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "C": {
      "type": "forge:nbt",
      "item": "pneumaticcraft:air_canister",
      "count": 1,
      "nbt": "{\"pneumaticcraft:air\":30000}"
    },
    "D": {
      "item": "pneumaticcraft:compressed_iron_leggings"
    }
  },
  "result": {
    "item": "pneumaticcraft:pneumatic_leggings"
  }
}).id('pneumaticcraft:pneumatic_leggings')

// Pneumatic Boots
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:advanced_pressure_tube"
    },
    "B": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "C": {
      "type": "forge:nbt",
      "item": "pneumaticcraft:air_canister",
      "count": 1,
      "nbt": "{\"pneumaticcraft:air\":30000}"
    },
    "D": {
      "item": "pneumaticcraft:compressed_iron_boots"
    }
  },
  "result": {
    "item": "pneumaticcraft:pneumatic_boots"
  }
}).id('pneumaticcraft:pneumatic_boots')


// Pneumatic Craft - Plastic
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "industrialforegoing:plastic",},
        {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {"EntityTag": {
        "type": "productivebees:plastic"}}
        },
        {"item": "emendatusenigmatica:desh_dust",},
        {"item": "emendatusenigmatica:apatite_dust",}],
          "pressure": 2.0, 
          "results": [{"item": "pneumaticcraft:plastic",
                       "count": 2}]
}).id('pneumaticcraft:pressure_chamber_plastic')

// Plastim Dust
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "emendatusenigmatica:sharkinite_ingot",},
        {"item": "emendatusenigmatica:weekonium_ingot",},
        {"item": "powah:crystal_spirited",},],
          "pressure": 2.0, 
          "results": [{"item": "emendatusenigmatica:plastim_dust"}]
  }).id('emendatusenigmatica:pressure_chamber_plastim_dust')

// Desh Ingot From Raw
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "ad_astra:raw_desh",},
        {"item": "pneumaticcraft:ingot_iron_compressed",},
        {"item": "emendatusenigmatica:brass_dust",},],
          "pressure": 2.0, 
          "results": [{"item": "ad_astra:desh_ingot"}]
  }).id('pneumaticcraft:pc_desh_ingot_from_raw')

// Desh Ingot From Ore
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "ad_astra:moon_desh_ore",},
        {"item": "pneumaticcraft:ingot_iron_compressed",},
        {"item": "emendatusenigmatica:brass_dust",},],
          "pressure": 2.0, 
          "results": [{"item": "ad_astra:desh_ingot"}]
  }).id('pneumaticcraft:pc_desh_ingot_from_ore')

// Desh Ingot From Ore
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "ad_astra:deepslate_desh_ore",},
        {"item": "pneumaticcraft:ingot_iron_compressed",},
        {"item": "emendatusenigmatica:brass_dust",},],
          "pressure": 2.0, 
          "results": [{"item": "ad_astra:desh_ingot"}]
  }).id('pneumaticcraft:pc_desh_ingot_from_ds_ore')

// Blood of Kvasir
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "kubejs:mason_jar",},
        {"item": "mythicbotany:alfheim_rune",},
        {"item": "rootsclassic:growth_powder",},
        {"item": "botania:life_essence",},
        {"item": "mythicbotany:raw_elementium",}],
          "pressure": 2.5, 
          "results": [{"item": "mythicbotany:kvasir_blood"}]
  }).id('mythicbotany:pressure_chamber_kvasir_blood')

// Solar Metal Ingot
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "silentcompat:raw_solarmetal",},
        {"item": "industrialforegoing:plastic",},],
          "pressure": 2.3, 
          "results": [{"item": "silentcompat:solarmetal_ingot"}]
  }).id('silentcompat:pressure_chamber_solarmetal_ingot')

// Rose Quartz Shard
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "biomesoplenty:rose_quartz_shard",},
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 5,
          "item": "minecraft:netherrack"
        },],
          "pressure": 2.0, 
          "results": [{"item": "biomesoplenty:rose_quartz_shard",
                       "count": 3}]
  }).id('biomesoplenty:rose_quartz_shard_2')

// Diamond Ring
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 2,
          "item": "compressium:diamond_3"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 2,
          "item": "powah:crystal_spirited"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 2,
          "item": "mekanism:enriched_diamond"
        },],
          "pressure": 2.5, 
          "results": [{"item": "angelring:diamond_ring"}]
  }).id('angelring:pressure_chamber_diamond_ring')

// Etching Acid Bucket
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {
          "item": "minecraft:slime_ball"
        },
        {
          "item": "create:electron_tube"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 5,
          "item": "rootsclassic:growth_powder"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 5,
          "item": "immersiveengineering:fertilizer"
        },
        {
          "item": "pneumaticcraft:plastic_bucket"
        },],
          "pressure": 3, 
          "results": [{"item": "kubejs:etching_acid_catalyst"}]
  }).id('pneumaticcraft:pressure_chamber/etching_acid_catalyst')

  // HDPE Sheet
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 5,
          "item": "mekanism:hdpe_pellet"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 1,
          "item": "industrialforegoing:plastic"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 1,
          "item": "pneumaticcraft:plastic"
        },],
          "pressure": 2.5, 
          "results": [{"item": "mekanism:hdpe_sheet"}]
  }).id('mekanism:enriching/hdpe_sheet')

// Rose Quartz Shard
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "biomesoplenty:rose_quartz_block",}],
          "pressure": 2.5, 
          "results": [{"item": "biomesoplenty:rose_quartz_shard",
                       "count": 4}]
  }).id('biomesoplenty:rose_quartz_block_pc')

// Coal to Diamond
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "compressium:coal_9",}],
          "pressure": 3.0, 
          "results": [{"item": "minecraft:diamond_block"}]
  }).id('pneumaticcraft:pressure_chamber_diamond_block')


// Molten Plastic w/ Honeycomb Biodiesel
  event.custom({
      "type": "pneumaticcraft:thermo_plant",
  "exothermic": false,
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "amount": 75,
    "tag": "forge:biodiesel"
  },
  "fluid_output": {
    "amount": 150,
    "fluid": "pneumaticcraft:plastic"
  },
  "item_input": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {"EntityTag": {
        "type": "productivebees:plastic"}}
  },
  "temperature": {
    "min_temp": 373
  }
  }).id('kubejs:thermo_plant_plastic_from_comb_biodiesel')


// Molten Plastic w/ Honeycomb LPG
  event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "exothermic": false,
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "amount": 75,
    "tag": "forge:lpg"
  },
  "fluid_output": {
    "amount": 150,
    "fluid": "pneumaticcraft:plastic"
  },
  "item_input": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {"EntityTag": {
        "type": "productivebees:plastic"}}
  },
  "temperature": {
    "min_temp": 373
  }
}).id('kubejs:thermo_plant_plastic_from_comb_lpg')

  // Bee Stinger Amber
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 64,
          "item": "the_bumblezone:bee_stinger"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 1,
          "item": "minecraft:honeycomb_block"
        },],
          "pressure": 2.5, 
          "results": [{"item": "kubejs:bee_stinger_amber"}]
  }).id('the_bumblezone:bee_stinger_amber')

//    
})
//