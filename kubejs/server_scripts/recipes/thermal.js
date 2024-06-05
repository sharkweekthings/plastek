////
// thermal
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'thermal:earth_charge/quartz_dust_from_quartz'})
  event.remove({id: 'thermal:earth_charge/cinnabar_dust_from_cinnabar'})
  event.remove({id: 'thermal:dynamo_lapidary'})
  event.remove({id: 'thermal:dynamo_magmatic'})
  event.remove({id: 'thermal:dynamo_numismatic'})
  event.remove({id: 'thermal:dynamo_disenchantment'})
  event.remove({id: 'thermal:dynamo_stirling'})
  event.remove({id: 'thermal:dynamo_gourmand'})
  event.remove({id: 'thermal:dynamo_compression'})
  event.remove({id: 'thermal:device_tree_extractor'})
  event.remove({id: 'thermal:machine_refinery'})
  event.remove({id: 'thermal:machine_pyrolyzer'})
  event.remove({id: 'thermal:machine_crystallizer'})
  event.remove({id: 'thermal:machine_centrifuge'})
  event.remove({id: 'thermal:machine_crucible'})
  event.remove({id: 'thermal:machines/press/press_vine_to_latex'})
  event.remove({id: 'thermal:machines/press/press_dandelion_to_latex'})
  event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_jungle'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_apatite'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_niter'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_diamond'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_sulfur'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_lapis'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_quartz'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_cinnabar'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_emerald'})
  event.remove({id: 'thermal:machines/crystallizer/crystallizer_amethyst_cluster'})
  event.remove({id: 'thermal:machine_frame'})
  event.remove({id: 'thermal:armor/hazmat_helmet'})
  event.remove({id: 'thermal:armor/hazmat_chestplate'})
  event.remove({id: 'thermal:armor/hazmat_leggings'})
  event.remove({id: 'thermal:armor/hazmat_boots'})
  event.remove({id: 'thermal:hazmat_fabric'})
  event.remove({id: 'thermal:machines/press/unpacking/press_rubber_unpacking'})
  event.remove({id: 'thermal:machines/smelter/smelter_cured_rubber'})
  event.remove({id: 'thermal:machines/press/packing2x2/press_rubber_packing'})
  event.remove({id: 'thermal:hazmat_fabric'})
  event.remove({id: 'thermal:rubber_from_vine'})
  event.remove({id: 'thermal:rubber_from_dandelion'})
  event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
  event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
  event.remove({id: 'thermal:fluid_cell'})
  event.remove({id: 'thermal:fluid_cell_frame'})
  event.remove({id: 'thermal:signalum_dust_4'})
  event.remove({id: 'thermal:lumium_dust_4'})
  event.remove({id: 'thermal:invar_dust_4'})
  event.remove({id: 'thermal:invar_dust_3'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_ender_pearl'})
  event.remove({id: 'thermal:white_concrete_powder_with_slag'})
  event.remove({id: 'thermal:orange_concrete_powder_with_slag'})
  event.remove({id: 'thermal:magenta_concrete_powder_with_slag'})
  event.remove({id: 'thermal:light_blue_concrete_powder_with_slag'})
  event.remove({id: 'thermal:yellow_concrete_powder_with_slag'})
  event.remove({id: 'thermal:lime_concrete_powder_with_slag'})
  event.remove({id: 'thermal:pink_concrete_powder_with_slag'})
  event.remove({id: 'thermal:gray_concrete_powder_with_slag'})
  event.remove({id: 'thermal:light_gray_concrete_powder_with_slag'})
  event.remove({id: 'thermal:cyan_concrete_powder_with_slag'})
  event.remove({id: 'thermal:purple_concrete_powder_with_slag'})
  event.remove({id: 'thermal:blue_concrete_powder_with_slag'})
  event.remove({id: 'thermal:brown_concrete_powder_with_slag'})
  event.remove({id: 'thermal:green_concrete_powder_with_slag'})
  event.remove({id: 'thermal:red_concrete_powder_with_slag'})
  event.remove({id: 'thermal:black_concrete_powder_with_slag'})
  event.remove({id: 'thermal:earth_charge/ender_pearl_dust_from_ender_pearl'})
  event.remove({id: 'thermal:parts/netherite_gear'})
  event.remove({id: 'thermal:parts/emerald_gear'})
  event.remove({id: 'thermal:parts/quartz_gear'})
  event.remove({id: 'thermal:machines/press/press_netherite_to_gear'})
  event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
  event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
  event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
  event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
  event.remove({id: 'thermal:phytogro_8'})
  event.remove({id: 'thermal:phytogro_2'})
  event.remove({id: 'thermal:phytogro_4'})
  event.remove({id: 'thermal:earth_charge/emerald_dust_from_emerald'})
  event.remove({id: 'thermal:earth_charge/niter_dust_from_niter'})
  event.remove({id: 'thermal:earth_charge/lapis_dust_from_lapis'})
  event.remove({id: 'thermal:earth_charge/sulfur_dust_from_sulfur'})
  event.remove({id: 'thermal:earth_charge/apatite_dust_from_apatite'})
  event.remove({id: 'thermal:earth_charge/diamond_dust_from_diamond'})
//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Slag Block
  event.shaped('thermal:slag_block',
    ['11 ','11 ','   '], {
  1: '#forge:slag'}).id('thermal:storage/slag_block')

// Arboreal Extractor
  event.shaped('thermal:device_tree_extractor',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_pity',
	4: 'emendatusenigmatica:iron_gear',
	5: 'pneumaticcraft:plastic'}).id('thermal:device_tree_extractor')

// Fractionating Still
  event.shaped('thermal:machine_refinery',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'create:mechanical_pump',
	5: 'pneumaticcraft:plastic'}).id('thermal:machine_refinery')

// Crystallizer
  event.shaped('thermal:machine_crystallizer',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:diamond_block',
	5: 'pneumaticcraft:plastic'}).id('thermal:machine_crystallizer')

// Magma Crucible
  event.shaped('thermal:machine_crucible',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:magma_block',
	5: 'pneumaticcraft:plastic'}).id('thermal:machine_crucible')

// Induction Smelter
  event.shaped('thermal:machine_smelter',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:furnace',
	5: 'pneumaticcraft:plastic'}).id('thermal:machine_smelter')

// Centrifugal Separator
  event.shaped('thermal:machine_centrifuge',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'minecraft:compass',
	5: 'pneumaticcraft:plastic'}).id('thermal:machine_centrifuge')

// Multiservo Press
  event.shaped('thermal:machine_press',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:anvil',
	5: 'pneumaticcraft:plastic'}).id('thermal:machine_press')

// Pyrolyzer
  event.shaped('thermal:machine_pyrolyzer',
    ['545','232','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'thermal:rf_coil',
	5: 'pneumaticcraft:plastic'}).id('thermal:machine_pyrolyzer')

// Energetic Infuser
  event.shaped('thermal:charge_bench',
    ['424','232','515'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'pneumaticcraft:plastic',
	3: 'immersiveengineering:charging_station',
  4: 'emendatusenigmatica:gold_plate',
  5: 'emendatusenigmatica:steel_plate'}).id('thermal:charge_bench')

// Hazmat Helmet
  event.shaped('thermal:hazmat_helmet',
    ['323','212','343'], {
  1: 'mekanism:hazmat_mask',
  2: 'thermal:lead_plate',
	3: 'thermal:hazmat_fabric',
  4: 'pneumaticcraft:pressure_chamber_glass'}).id('thermal:hazmat_helmet')

// Hazmat Chestplate
  event.shaped('thermal:hazmat_chestplate',
    ['323','212','323'], {
  1: 'mekanism:hazmat_gown',
  2: 'thermal:lead_plate',
	3: 'thermal:hazmat_fabric'}).id('thermal:hazmat_chestplate')

// Hazmat Leggings
  event.shaped('thermal:hazmat_leggings',
    ['323','212','323'], {
  1: 'mekanism:hazmat_pants',
  2: 'thermal:lead_plate',
	3: 'thermal:hazmat_fabric'}).id('thermal:hazmat_leggings')

// Hazmat Boots
  event.shaped('thermal:hazmat_boots',
    ['323','212','323'], {
  1: 'mekanism:hazmat_boots',
  2: 'thermal:lead_plate',
	3: 'thermal:hazmat_fabric'}).id('thermal:hazmat_boots')

// Arc Metal Crystal
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "thermal:glowstone",
      "amount": 500},
    {"item": "emendatusenigmatica:diamond_dust"},
    {"item": "silentgear:azure_electrum_dust"}],
  "result": [
    {"item": "emendatusenigmatica:arcmetal_crystal"}
  ]
}).id('ae2:thermal_crystallizer_arcmetal_crystal')

// Certus Quartz Crystal
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:rosin"},
    {"item": "ae2:certus_quartz_dust"}],
  "result": [
    {"item": "ae2:certus_quartz_crystal"}
  ]
}).id('ae2:thermal_crystallizer_certus_quartz')

// Fluix Crystal
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:tar"},
    {"item": "ae2:fluix_dust"}],
  "result": [
    {"item": "ae2:fluix_crystal"}
  ]
}).id('ae2:thermal_crystallizer_fluix')

// Rose Quartz
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "thermal:redstone",
      "amount": 500},
    {"item": "thermal:rosin"},
    {"item": "minecraft:redstone_block"}],
  "result": [
    {"item": "create:rose_quartz"}
  ]
}).id('create:thermal_crystallizer_rose_quartz')

// Apatite Crystal
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:rosin"},
    {"item": "emendatusenigmatica:apatite_dust"}],
  "result": [
    {"item": "emendatusenigmatica:apatite_gem"}
  ]
}).id('emendatusenigmatica:thermal_crystallizer_apatite')

// Niter Crystal
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:rosin"},
    {"item": "thermal:niter_dust"}],
  "result": [
    {"item": "thermal:niter"}
  ]
}).id('thermal:crystallizer_niter')

// Lapis Crystal
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:tar"},
    {"item": "thermal:lapis_dust"}],
  "result": [
    {"item": "minecraft:lapis_lazuli"}
  ]
}).id('minecraft:thermal_crystallizer_lapis_lazuli')

// Diamond Crystal
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:tar"},
    {"item": "emendatusenigmatica:diamond_dust"}],
  "result": [
    {"item": "minecraft:diamond"}
  ]
}).id('minecraft:thermal_crystallizer_diamond')

// Sulfur Gem
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:tar"},
    {"item": "emendatusenigmatica:sulfur_dust"}],
  "result": [
    {"item": "emendatusenigmatica:sulfur_gem"}
  ]
}).id('emendatusenigmatica:thermal_crystallizer_sulfur')

// Nether Quartz
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:rosin"},
    {"item": "emendatusenigmatica:quartz_dust"}],
  "result": [
    {"item": "minecraft:quartz"}
  ]
}).id('minecraft:thermal_crystallizer_quartz')

// Cinnabar
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:rosin"},
    {"item": "emendatusenigmatica:cinnabar_dust"}],
  "result": [
    {"item": "emendatusenigmatica:cinnabar_gem"}
  ]
}).id('emendatusenigmatica:thermal_crystallizer_cinnabar')

// Emerald
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:rosin"},
    {"item": "thermal:emerald_dust"}],
  "result": [
    {"item": "minecraft:emerald"}
  ]
}).id('minecraft:thermal_crystallizer_emerald')

// Amethyst
  event.custom({
  "type": "thermal:crystallizer",
  "ingredients": [
    {"fluid": "minecraft:water",
      "amount": 500},
    {"item": "thermal:tar"},
    {"item": "minecraft:amethyst_shard"}],
  "result": [
    {"item": "minecraft:amethyst_cluster"}
  ]
}).id('minecraft:thermal_crystallizer_amethyst')

// Alfsteel Ingot
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "botania:dragonstone",
      "count": 1
    },
    {
      "item": "botania:elementium_ingot",
      "count": 1
    },
    {
      "item": "botania:terrasteel_ingot",
      "count": 2
    }
  ],
  "result": [
    {
      "item": "mythicbotany:alfsteel_ingot",
      "chance": 0.4,
      "count": 1
    },
    {
      "item": "mythicbotany:alfsteel_ingot",
      "chance": 0.2,
      "count": 1
    }
  ],
  "energy": 12000
}).id('mythicbotany:thermal_smelter_alfsteel_ingot')

// Andesite Alloy
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "minecraft:andesite",
      "count": 1
    },
    {
      "item": "emendatusenigmatica:zinc_dust",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "create:andesite_alloy",
      "chance": 0.8,
      "count": 2
    },
    {
      "item": "create:andesite_alloy",
      "chance": 0.2,
      "count": 1
    }
  ],
  "energy": 12000
}).id('create:andesite_alloy_induction_smelter')

// Terrasteel Ingot
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "botania:mana_diamond",
      "count": 1
    },
    {
      "item": "botania:mana_pearl",
      "count": 1
    },
    {
      "item": "botania:manasteel_ingot",
      "count": 2
    }
  ],
  "result": [
    {
      "item": "botania:terrasteel_ingot",
      "chance": 0.6,
      "count": 1
    },
    {
      "item": "botania:terrasteel_ingot",
      "chance": 0.3,
      "count": 1
    }
  ],
  "energy": 12000
}).id('botania:thermal_smelter_terrasteel_ingot')

// Tyrian Steel
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "emendatusenigmatica:steel_ingot",
      "count": 4
    },
    {
      "item": "silentgear:crimson_steel_ingot",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "silentgear:tyrian_steel_ingot",
      "chance": 0.7,
      "count": 1
    },
    {
      "item": "silentgear:tyrian_steel_ingot",
      "chance": 0.3,
      "count": 1
    }
  ],
  "energy": 12000
}).id('silentgear:thermal_smelter_tyrian_steel_ingot')

// Azure Silver
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "emendatusenigmatica:silver_ingot",
      "count": 2
    },
    {
      "item": "minecraft:lapis_lazuli",
      "count": 2
    }
  ],
  "result": [
    {
      "item": "silentgear:azure_silver_ingot",
      "chance": 0.7,
      "count": 1
    },
    {
      "item": "silentgear:azure_silver_ingot",
      "chance": 0.3,
      "count": 1
    }
  ],
  "energy": 12000
}).id('silentgear:thermal_smelter_azure_silver_ingot')

// Brass Ingot
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "minecraft:copper_ingot",
      "count": 1
    },
    {
      "item": "emendatusenigmatica:zinc_ingot",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:brass_ingot",
      "chance": 0.8,
      "count": 1
    },
    {
      "item": "emendatusenigmatica:brass_ingot",
      "chance": 0.4,
      "count": 1
    },
    {
      "item": "emendatusenigmatica:brass_ingot",
      "chance": 0.2,
      "count": 1
    }
  ],
  "energy": 12000
}).id('emendatusenigmatica:thermal_smelter_brass_ingot')

// Cured Rubber
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "emendatusenigmatica:sulfur_gem",
      "count": 2
    },
    {
      "item": "industrialforegoing:dryrubber",
      "count": 2
    }
  ],
  "result": [
    {
      "item": "thermal:cured_rubber",
      "count": 4
    }
  ],
  "energy": 12000
}).id('thermal:thermal_smelter_cured_rubber')

// Better Leather
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "tag": "forge:slag",
      "count": 3
    },
    {
      "item": "silentgear:leather_scrap",
      "count": 2
    },
    {
      "item": "thermal:rosin",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "minecraft:leather",
      "count": 1
    }
  ],
  "energy": 12000
}).id('thermal:thermal_smelter_leather')

// Better Durable Leather
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "tag": "forge:slag",
      "count": 3
    },
    {
      "item": "silentgear:leather_scrap",
      "count": 2
    },
    {
      "item": "thermal:tar",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "totemic:buffalo_hide",
      "count": 1
    }
  ],
  "energy": 12000
}).id('thermal:thermal_smelter_buffalo_hide')

// Plasteel Ingot
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "pneumaticcraft:plastic",
      "count": 1
    },
    {
      "item": "emendatusenigmatica:steel_ingot",
      "count": 1
    },
    {
      "item": "thermal:tar",
      "count": 2
    }
  ],
  "result": [
    {
      "item": "silentcompat:plasteel_ingot",
      "count": 1
    }
  ],
  "energy": 12000
}).id('silentcompat:thermal_smelter_plasteel_ingot')

// Voidmetal Ingot
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "ae2:fluix_crystal",
      "count": 1
    },
    {
      "item": "ars_nouveau:water_essence",
      "count": 1
    },
    {
      "item": "thermal:rosin",
      "count": 2
    }
  ],
  "result": [
    {
      "item": "silentcompat:voidmetal_ingot",
      "count": 1
    }
  ],
  "energy": 12000
}).id('silentcompat:thermal_smelter_voidmetal_ingot')

// Copper Wire
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/copper",
      "count": 1
    },
    {
      "item": "immersiveengineering:mold_wire"
    }
  ],
  "result": [
    {
      "item": "immersiveengineering:wire_copper",
      "count": 2
    }
  ]
}).id('immersiveengineering:thermal_press_wire_copper')

// Electrum Wire
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/electrum",
      "count": 1
    },
    {
      "item": "immersiveengineering:mold_wire"
    }
  ],
  "result": [
    {
      "item": "immersiveengineering:wire_electrum",
      "count": 2
    }
  ]
}).id('immersiveengineering:thermal_press_wire_electrum')

// Aluminum Wire
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/aluminum",
      "count": 1
    },
    {
      "item": "immersiveengineering:mold_wire"
    }
  ],
  "result": [
    {
      "item": "immersiveengineering:wire_aluminum",
      "count": 2
    }
  ]
}).id('immersiveengineering:thermal_press_wire_aluminum')

// Steel Wire
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/steel",
      "count": 1
    },
    {
      "item": "immersiveengineering:mold_wire"
    }
  ],
  "result": [
    {
      "item": "immersiveengineering:wire_steel",
      "count": 2
    }
  ]
}).id('immersiveengineering:thermal_press_wire_steel')

// Lead Wire
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/lead",
      "count": 1
    },
    {
      "item": "immersiveengineering:mold_wire"
    }
  ],
  "result": [
    {
      "item": "immersiveengineering:wire_lead",
      "count": 2
    }
  ]
}).id('immersiveengineering:thermal_press_wire_lead')

// Brass Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/brass",
      "count": 1
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:brass_rod",
      "count": 3
    }
  ]
}).id('emendatusenigmatica:thermal_press_brass_rod')

// Plasteel Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/plasteel",
      "count": 1
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:plasteel_rod",
      "count": 3
    }
  ]
}).id('emendatusenigmatica:thermal_press_plasteel_rod')

// Steel Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/steel",
      "count": 1
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:steel_rod",
      "count": 3
    }
  ]
}).id('emendatusenigmatica:thermal_press_steel_rod')

// Gold Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/gold",
      "count": 1
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:gold_rod",
      "count": 3
    }
  ]
}).id('emendatusenigmatica:thermal_press_gold_rod')

// Copper Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/copper",
      "count": 1
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:copper_rod",
      "count": 3
    }
  ]
}).id('emendatusenigmatica:thermal_press_copper_rod')

// Iron Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/iron",
      "count": 1
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:iron_rod",
      "count": 3
    }
  ]
}).id('emendatusenigmatica:thermal_press_iron_rod')

// Aluminum Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/aluminum",
      "count": 1
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:aluminum_rod",
      "count": 3
    }
  ]
}).id('emendatusenigmatica:thermal_press_aluminum_rod')

// HDPE Rod
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "mekanism:hdpe_sheet",
      "count": 2
    },
    {
      "item": "thermal:chiller_rod_cast"
    }
  ],
  "result": [
    {
      "item": "mekanism:hdpe_rod",
      "count": 1
    }
  ]
}).id('mekanism:thermal_press_hdpe_rod')

// Plastic
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "industrialforegoing:dryrubber",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "industrialforegoing:plastic",
      "count": 2
    }
  ]
}).id('industrialforegoing:thermal_press_plastic')

// Plasteel Plate
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "silentcompat:plasteel_ingot",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:plasteel_plate",
      "count": 1
    }
  ]
}).id('thermal:plasteel_plate_press')

// Brass Plate
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "emendatusenigmatica:brass_ingot",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:brass_plate",
      "count": 1
    }
  ]
}).id('thermal:brass_plate_press')

// Plasteel Gear
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:ingots/plasteel",
      "count": 4
    },
    {
      "item": "thermal:press_gear_die"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:plasteel_gear",
      "count": 1
    }
  ]
}).id('emendatusenigmatica:thermal_press_plasteel_gear')

// Diamond Gear
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "tag": "forge:gems/diamond",
      "count": 4
    },
    {
      "item": "thermal:press_gear_die"
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:diamond_gear",
      "count": 1
    }
  ]
}).id('emendatusenigmatica:thermal_press_diamond_gear')

// Steel Plate
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "emendatusenigmatica:steel_ingot",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:steel_plate",
      "count": 1
    }
  ]
}).id('thermal:steel_plate_press')

// Voidmetal Plate
  event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "silentcompat:voidmetal_ingot",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "emendatusenigmatica:voidmetal_plate",
      "count": 1
    }
  ]
}).id('thermal:voidmetal_plate_press')

// Lumium Gear
  event.shaped('emendatusenigmatica:lumium_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:lumium_ingot',
    2: 'create:super_glue'}).id('thermal:parts/lumium_gear')

// Signalum Gear
  event.shaped('emendatusenigmatica:signalum_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:signalum_ingot',
    2: 'create:super_glue'}).id('thermal:parts/signalum_gear')

// Tin Gear
  event.shaped('emendatusenigmatica:tin_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:tin_ingot',
    2: 'create:super_glue'}).id('thermal:parts/tin_gear')

// Copper Gear
  event.shaped('emendatusenigmatica:copper_gear',
    [' 1 ','121',' 1 '], {
    1: 'minecraft:copper_ingot',
    2: 'create:super_glue'}).id('emendatusenigmatica:gear/from_ingot/copper')

// Invar Gear
  event.shaped('emendatusenigmatica:invar_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:invar_ingot',
    2: 'create:super_glue'}).id('thermal:parts/invar_gear')

// Nickel Gear
  event.shaped('emendatusenigmatica:nickel_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:nickel_ingot',
    2: 'create:super_glue'}).id('thermal:parts/nickel_gear')

// Constantan Gear
  event.shaped('emendatusenigmatica:constantan_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:constantan_ingot',
    2: 'create:super_glue'}).id('thermal:parts/constantan_gear')

// Lead Gear
  event.shaped('emendatusenigmatica:lead_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:lead_ingot',
    2: 'create:super_glue'}).id('thermal:parts/lead_gear')

// Bronze Gear
  event.shaped('emendatusenigmatica:bronze_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:bronze_ingot',
    2: 'create:super_glue'}).id('thermal:parts/bronze_gear')

// Silver Gear
  event.shaped('emendatusenigmatica:silver_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:silver_ingot',
    2: 'create:super_glue'}).id('thermal:parts/silver_gear')

// Lapis Gear
  event.shaped('thermal:lapis_gear',
    [' 1 ','121',' 1 '], {
    1: 'minecraft:lapis_lazuli',
    2: 'create:super_glue'}).id('thermal:parts/lapis_gear')

// Enderium Gear
  event.shaped('thermal:enderium_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:enderium_ingot',
    2: 'create:super_glue'}).id('thermal:parts/enderium_gear')

// Electrum Gear
  event.shaped('thermal:electrum_gear',
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:electrum_ingot',
    2: 'create:super_glue'}).id('thermal:parts/electrum_gear')

// Replace Thermal Machine Frame w/ Industrial Foregoing
event.replaceInput({ input: 'thermal:machine_frame' },'thermal:machine_frame','industrialforegoing:machine_frame_advanced')

// Replace Thermal Rubber w/ Industrial Foregoing Dry Rubber
event.replaceInput({}, 'thermal:rubber', 'industrialforegoing:dryrubber')   

// Rubber From block 
  event.shapeless(Item.of('4x industrialforegoing:dryrubber'), ['thermal:rubber_block']).id('thermal:storage/rubber_from_block')

// Crystallizer Test (ty Lexxie!)
// event.custom({
//   type: 'thermal:crystallizer',
//   ingredients: [
//     Fluid.of('water', 2000).toJson(),
//     Item.of('dirt').toJson(),
//     Item.of('coal').toJson()
//   ],
//   result: [
//     Item.of('diamond').toJson()
//   ]
// })

//    
})
//
