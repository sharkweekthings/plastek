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
  event.remove({id: 'pneumaticcraft:security_upgrade'})
  event.remove({id: 'pneumaticcraft:smart_chest'})
  event.remove({id: 'pneumaticcraft:pneumatic_dynamo'})
  event.remove({id: 'pneumaticcraft:assembly_platform'})
  event.remove({id: 'pneumaticcraft:assembly_io_unit_import'})
  event.remove({id: 'pneumaticcraft:assembly_io_unit_export'})
  event.remove({id: 'pneumaticcraft:assembly_drill'})
  event.remove({id: 'pneumaticcraft:assembly_laser'})
  event.remove({id: 'pneumaticcraft:assembly_controller'})
  event.remove({id: 'pneumaticcraft:bandage'})

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
    4: 'pneumaticcraft:printed_circuit_board'})
    
// Assembly IO Import
  event.shaped('pneumaticcraft:assembly_io_unit_import', 
    ['511',' 21','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:hopper'})
    
// Assembly IO Export
  event.shaped('pneumaticcraft:assembly_io_unit_export', 
    ['115','12 ','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:hopper'})
    
// Assembly Controller
  event.shaped('pneumaticcraft:assembly_controller', 
    ['545','242','313'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: '#forge:glass'})
    
// Assembly Drill
  event.shaped('pneumaticcraft:assembly_drill', 
    ['511',' 21','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:diamond_block'})
    
// Assembly Laser
  event.shaped('pneumaticcraft:assembly_laser', 
    ['511',' 21','343'], {
    1: 'pneumaticcraft:pneumatic_cylinder',
    2: 'pneumaticcraft:plastic',
    3: 'emendatusenigmatica:steel_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'industrialforegoing:laser_lens14'})
    
// Pressure Chamber Valve  
  event.shaped('pneumaticcraft:pressure_chamber_valve', 
    ['111','232','111'], {
    1: 'industrialforegoing:plastic',
    2: 'compressium:iron_1',
    3: 'pneumaticcraft:pressure_tube'})
    
// Security Upgrade
  event.shaped('pneumaticcraft:security_upgrade', 
    ['313','121','313'], {
    1: '#pneumaticcraft:upgrade_components',
    2: 'sophisticatedbackpacks:upgrade_base',
    3: 'pneumaticcraft:pressure_tube'})
    
// Thermopneumatic Processing Plant 
  event.shaped('pneumaticcraft:thermopneumatic_processing_plant', 
    ['414','232','414'], {
    1: 'pneumaticcraft:plastic',
    2: 'pneumaticcraft:small_tank',
    3: 'pneumaticcraft:pressure_tube',
    4: 'pneumaticcraft:reinforced_stone_slab'})
    
// Pressure Tube
  event.shaped('2x pneumaticcraft:pressure_tube', 
    [' 3 ','121',' 3 '], {
    1: 'industrialforegoing:plastic',
    2: 'minecraft:iron_ingot',
    3: 'create:cogwheel'})
    
// Pressure Chamber Wall
  event.shaped('4x pneumaticcraft:pressure_chamber_wall', 
    ['222','212','222'], {
    1: 'industrialforegoing:plastic',
    2: 'pneumaticcraft:reinforced_bricks'})
    
// Pressure Chamber Glass
  event.shaped('4x pneumaticcraft:pressure_chamber_glass', 
    ['222','212','222'], {
    1: '#forge:glass',
    2: 'pneumaticcraft:reinforced_bricks'})
    
// Pressure Chamber Interface
  event.shaped('pneumaticcraft:pressure_chamber_interface', 
    ['444','333','121'], {
    1: 'pneumaticcraft:pressure_chamber_wall',
    2: 'minecraft:hopper',
    3: 'emendatusenigmatica:iron_plate',
    4: 'industrialforegoing:plastic'})
    
// Air Compressor
  event.shaped('pneumaticcraft:air_compressor', 
    ['111','142','131'], {
    1: 'pneumaticcraft:reinforced_bricks',
    2: 'pneumaticcraft:pressure_tube',
    3: 'minecraft:furnace',
    4: 'industrialforegoing:plastic'})
    
// Reinforced Stone
  event.shaped('4x pneumaticcraft:reinforced_stone', 
    ['222','212','222'], {
    1: 'industrialforegoing:plastic',
    2: 'compressium:stone_1'})
    
// PCB Blueprint
  event.shaped('pneumaticcraft:pcb_blueprint', 
    ['222','212','222'], {
    1: 'pneumaticcraft:ingot_iron_compressed',
    2: 'silentgear:blueprint_paper'})
    
// Finished PCB
  event.shaped('pneumaticcraft:printed_circuit_board', 
    ['414','232','414'], {
    1: 'pneumaticcraft:transistor',
    2: 'pneumaticcraft:capacitor',
    3: 'pneumaticcraft:unassembled_pcb',
    4: 'immersiveengineering:wire_aluminum'})

// Vortex Tube  
  event.shaped('pneumaticcraft:vortex_tube', 
    ['212','313','222'], {
    1: 'pneumaticcraft:pressure_tube',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: 'create:precision_mechanism'})
    
// Refinery Controller 
  event.shaped('pneumaticcraft:refinery', 
    ['111','323','111'], {
    1: 'pneumaticcraft:reinforced_stone_slab',
    2: 'pneumaticcraft:small_tank',
    3: 'create:precision_mechanism'})
    
// Refinery Output 
  event.shaped('pneumaticcraft:refinery_output', 
    ['111','232','111'], {
    1: 'pneumaticcraft:reinforced_stone_slab',
    2: '#forge:glass',
    3: 'create:precision_mechanism'})
    
// Small Fluid Tank
  event.shaped('pneumaticcraft:small_tank', 
    ['121','232','121'], {
    1: 'minecraft:iron_bars',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: '#forge:glass'})
    
// UV Light Box
  event.shaped('pneumaticcraft:uv_light_box', 
    ['111','435','222'], {
    1: 'minecraft:redstone_lamp',
    2: 'pneumaticcraft:ingot_iron_compressed',
    3: 'pneumaticcraft:pcb_blueprint',
    4: 'create:precision_mechanism',
    5: 'pneumaticcraft:pressure_tube'})
    
// Heat Frame
  event.shaped('pneumaticcraft:heat_frame', 
    ['333','212','343'], {
    1: 'create:blaze_burner',
    2: 'pneumaticcraft:compressed_iron_block',
    3: 'emendatusenigmatica:iron_rod',
    4: 'pneumaticcraft:printed_circuit_board'})
    
// Smart Chest
  event.shaped('pneumaticcraft:smart_chest', 
    ['   ','121','354'], {
    1: 'minecraft:diamond',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:reinforced_chest',
    4: 'minecraft:ender_chest',
    5: 'pneumaticcraft:omnidirectional_hopper'})
    
// Capacitor
  event.shaped('pneumaticcraft:capacitor', 
    ['131','343','222'], {
    1: 'pneumaticcraft:plastic',
    2: 'immersiveengineering:wire_electrum',
    3: 'emendatusenigmatica:apatite_dust',
    4: 'minecraft:iron_nugget'})
    
// Transistor
  event.shaped('pneumaticcraft:transistor', 
    ['131','343','222'], {
    1: 'pneumaticcraft:plastic',
    2: 'immersiveengineering:wire_electrum',
    3: 'immersiveengineering:dust_hop_graphite',
    4: 'emendatusenigmatica:copper_nugget'})

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
          "results": [{"item": "pneumaticcraft:plastic"}]
})

// Plastim Dust
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "emendatusenigmatica:sharkinite_ingot",},
        {"item": "emendatusenigmatica:weekonium_ingot",},
        {"item": "powah:crystal_spirited",},],
          "pressure": 2.0, 
          "results": [{"item": "emendatusenigmatica:plastim_dust"}]
  })

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
  })

// Solar Metal Ingot
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "silentcompat:raw_solarmetal",},
        {"item": "industrialforegoing:plastic",},
        {"item": "minecraft:blaze_powder",},
        {"item": "emendatusenigmatica:cinnabar_dust",}],
          "pressure": 2.3, 
          "results": [{"item": "silentcompat:solarmetal_ingot"}]
  })

// Diamond Ring
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "compressium:diamond_3",},
        {"item": "compressium:diamond_3",},
        {"item": "powah:crystal_spirited",},
        {"item": "powah:crystal_spirited",},
        {"item": "mekanism:enriched_diamond",},
        {"item": "mekanism:enriched_diamond",}],
          "pressure": 2.5, 
          "results": [{"item": "angelring:diamond_ring"}]
  })

// Coal to Diamond
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {"item": "compressium:coal_9",}],
          "pressure": 3.0, 
          "results": [{"item": "minecraft:diamond_block"}]
  })


// Molten Plastic w/ Honeycomb Biodiesel
  event.custom({
      "type": "pneumaticcraft:thermo_plant",
  "exothermic": false,
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "amount": 100,
    "tag": "forge:biodiesel"
  },
  "fluid_output": {
    "amount": 1000,
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
  })


// Molten Plastic w/ Honeycomb LPG
  event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "exothermic": false,
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "amount": 100,
    "tag": "forge:lpg"
  },
  "fluid_output": {
    "amount": 1000,
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
})

//    
})
//