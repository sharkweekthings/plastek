////
// create
//// renik



//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({output: 'create:shaft'})
  event.remove({output: 'createaddition:rolling_mill'})
  event.remove({output: 'create:windmill_bearing'})
  event.remove({output: 'create:sail_frame'})
  event.remove({output: 'create:white_sail'})
  event.remove({output: 'create:water_wheel'})
  event.remove({output: 'create:large_cogwheel'})
  event.remove({output: 'create:cogwheel'})
  event.remove({output: 'create:hand_crank'})
  event.remove({output: 'create:mechanical_press'})
  event.remove({output: 'create:mechanical_mixer'})
  event.remove({output: 'create:whisk'})
  event.remove({output: 'create:andesite_casing'})
  event.remove({output: 'create:depot'})
  event.remove({output: 'create:millstone'})
  event.remove({output: 'create:basin'})
  event.remove({id: 'create:milling/bone'})
  event.remove({id: 'create:milling/saddle'})
  event.remove({id: 'create:crafting/materials/andesite_alloy'})
  event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
  event.remove({id: 'create:mixing/andesite_alloy'})
  event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
  event.remove({id: 'create:crafting/kinetics/propeller'})
  event.remove({id: 'create:haunting/blackstone'})
  event.remove({id: 'create:crafting/kinetics/wrench'})
  event.remove({id: 'create:crafting/kinetics/fluid_tank'})
  event.remove({id: 'create:crafting/kinetics/fluid_pipe_vertical'})
  event.remove({id: 'create:crafting/kinetics/fluid_pipe'})
  event.remove({id: 'create:crafting/kinetics/steam_engine'})
  event.remove({id: 'create:crafting/kinetics/mechanical_pump'})
  event.remove({id: 'create:mixing/brass_ingot'})
  event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
  event.remove({id: 'create:crafting/kinetics/deployer'})
  event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
  event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
  event.remove({id: 'create:item_application/brass_casing_from_log'})
  event.remove({id: 'create:item_application/brass_casing_from_wood'})
  event.remove({id: 'create:item_application/copper_casing_from_log'})
  event.remove({id: 'create:item_application/copper_casing_from_wood'})
  event.remove({id: 'create:item_application/railway_casing'})
  event.remove({id: 'create:crafting/kinetics/spout'})
  event.remove({id: 'create:crushing/raw_aluminum_ore'})
  event.remove({id: 'create:crushing/aluminum_ore'})
  event.remove({id: 'create:crafting/logistics/andesite_funnel'})
  event.remove({id: 'create:crafting/logistics/brass_funnel'})
  event.remove({id: 'create:crafting/kinetics/large_water_wheel'})
  event.remove({id: 'create:crafting/kinetics/belt_connector'})
  event.remove({id: 'create:mechanical_roller'})
  event.remove({id: 'sliceanddice:mixing/fertilizer/from_compost'})
  event.remove({id: 'sliceanddice:mixing/fertilizer/from_tree_fertilizer'})
  event.remove({id: 'sliceanddice:sprinkler'})
  event.remove({id: 'sliceanddice:slicer'})
  event.remove({id: 'create:crafting/logistics/andesite_tunnel'})
  event.remove({id: 'create:crafting/logistics/brass_tunnel'})
  event.remove({id: 'create:crafting/kinetics/mechanical_roller'})
  event.remove({id: 'create:crafting/appliances/crafting_blueprint'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Crafting Blueprint
  event.shaped('create:crafting_blueprint', 
    ['111','121','131'], {
    1: 'silentgear:blueprint_paper',
    2: 'immersiveengineering:craftingtable',
    3: 'create:precision_mechanism'})

// Mechanical Roller
  event.shaped('create:mechanical_roller', 
    ['424',' 1 ','333'], {
    1: 'create:andesite_casing',
    2: 'create:electron_tube',
    3: 'create:crushing_wheel',
    4: 'create:andesite_alloy'})

// Andesite Tunnel
  event.shaped('create:andesite_tunnel', 
    ['333','121','121'], {
    1: 'create:andesite_alloy',
    2: 'create:belt_connector',
    3: 'emendatusenigmatica:iron_plate'})

// Brass Tunnel
  event.shaped('create:brass_tunnel', 
    ['343','121','121'], {
    1: 'create:brass_ingot',
    2: 'create:belt_connector',
    3: 'emendatusenigmatica:brass_plate',
    4: 'create:electron_tube'})

// Brass Funnel
  event.shaped('create:brass_funnel', 
    ['212','232','232'], {
    1: 'create:electron_tube', 
    2: 'emendatusenigmatica:brass_plate',
    3: 'create:belt_connector'})

// Andesite Funnel
  event.shaped('create:andesite_funnel', 
    ['121','232','232'], {
    1: 'emendatusenigmatica:iron_plate', 
    2: 'create:andesite_alloy',
    3: 'create:belt_connector'})

// Propeller
  event.shaped('create:propeller', 
    [' 1 ','121',' 1 '], {
    1: 'emendatusenigmatica:iron_plate', 
    2: 'create:andesite_alloy'})

// Slicer
  event.shaped('sliceanddice:slicer', 
    [' 4 ','121',' 3 '], {
    1: 'create:cogwheel', 
    2: 'create:brass_casing',
    3: 'thermal:saw_blade',
    4: 'farmersdelight:cutting_board'})

// Sprinkler
  event.shaped('sliceanddice:sprinkler', 
    ['141','121','131'], {
    1: 'emendatusenigmatica:brass_plate', 
    2: 'create:fluid_pipe',
    3: 'quark:grate',
    4: 'create:cogwheel'})

// Shaft
  event.shaped('create:shaft', 
    [' 2 ',' 1 ',' 2 '], {
    1: 'emendatusenigmatica:iron_rod', 
    2: 'create:andesite_alloy'})

// Water Wheel
  event.shaped('create:water_wheel', 
    ['111','121','111'], {
    1: 'create:large_cogwheel', 
    2: 'create:shaft'})

// Large Water Wheel
  event.shaped('create:large_water_wheel', 
    ['121','212','121'], {
    1: 'create:water_wheel', 
    2: 'create:shaft'})

// Cogwheel
  event.shaped('create:cogwheel', 
    [' 1 ','121',' 1 '], {
    1: '#minecraft:slabs', 
    2: 'create:shaft'})

// Large Cogwheel
  event.shaped('create:large_cogwheel', 
    [' 1 ','121',' 1 '], {
    1: '#minecraft:planks', 
    2: 'create:shaft'})

// Spout
  event.shapeless(Item.of('create:spout'), ['create:copper_casing', 'supplementaries:faucet'])    

// Mechanical Press   
  event.shaped('create:mechanical_press', 
    [' 1 ',' 2 ',' 3 '], {
    1: 'emendatusenigmatica:sterling_silver_rod',
    2: 'create:andesite_casing',
    3: 'compressium:copper_3' })

// Whisk
  event.shaped('create:whisk', 
    [' 1 ','212','222'], {
    1: 'create:andesite_alloy', 
    2: 'emendatusenigmatica:sterling_silver_plate'})

// Depot
  event.shaped('create:depot', 
    ['   ','111',' 2 '], {
    1: 'create:andesite_alloy', 
    2: 'create:andesite_casing'})

// Andesite Casing
  event.shaped('create:andesite_casing', 
    ['111','121','131'], {
    1: 'create:andesite_alloy', 
    2: '#forge:stripped_logs',
    3: 'compressium:andesite_2'})

// Train Casing
  event.shaped('create:railway_casing', 
    ['111','121','111'], {
    1: 'emendatusenigmatica:gold_plate', 
    2: 'create:andesite_casing'})

// Copper Casing
  event.shaped('create:copper_casing', 
    ['111','121','111'], {
    1: 'emendatusenigmatica:copper_plate', 
    2: 'create:andesite_casing'})

// Copper Casing
  event.shaped('create:brass_casing', 
    ['111','121','111'], {
    1: 'emendatusenigmatica:brass_plate', 
    2: 'create:copper_casing'})

// Hand Crank
  event.shaped('create:hand_crank', 
    ['   ','232','  1'], {
    1: 'create:andesite_alloy', 
    2: 'compressium:stone_2',
    3: 'emendatusenigmatica:sterling_silver_rod'})

// Mechanical Mixer
  event.shaped('create:mechanical_mixer', 
    ['323',' 4 ',' 1 '], {
    1: 'create:whisk', 
    2: 'create:andesite_casing',
    3: '#minecraft:slabs',
    4: 'emendatusenigmatica:iron_rod'})

// Millstone
  event.shaped('create:millstone', 
    [' 1 ','424','333'], {
    1: 'minecraft:oak_slab', 
    2: 'create:andesite_casing',
    3: 'minecraft:stone_slab',
    4: 'create:whisk'})

// Basin
  event.shaped('create:basin', 
    ['2 2','1 1','111'], {
    1: 'compressium:stone_2', 
    2: 'create:andesite_alloy'})

// Wrench
  event.shaped('create:wrench', 
    ['11 ','12 ',' 3 '], {
    1: 'emendatusenigmatica:gold_plate', 
    2: 'create:cogwheel',
    3: 'immersiveengineering:stick_treated'})

// Fluid Tank
  event.shaped('create:fluid_tank', 
    ['111','232','111'], {
    1: 'emendatusenigmatica:brass_plate', 
    2: 'create:fluid_pipe',
    3: 'minecraft:barrel'})

// Fluid Pipe
  event.shaped('2x create:fluid_pipe', 
    ['   ','121','   '], {
    1: 'emendatusenigmatica:brass_plate', 
    2: 'minecraft:copper_ingot'})

// Steam Engine
  event.shaped('create:steam_engine', 
    [' 3 ',' 2 ',' 1 '], {
    1: 'emendatusenigmatica:brass_block', 
    2: 'create:shaft',
    3: 'create:cogwheel'})

// Mechanical Pump
  event.shaped('create:mechanical_pump', 
    [' 2 ','131',' 2 '], {
    1: 'emendatusenigmatica:brass_plate', 
    2: 'create:cogwheel',
    3: 'create:fluid_pipe'})

// Empty Blaze Burner
  event.shaped('create:empty_blaze_burner', 
    ['121','121','333'], {
    1: 'minecraft:iron_bars', 
    2: 'emendatusenigmatica:iron_plate',
    3: 'industrialforegoing:plastic'})

// Deployer
  event.shaped('create:deployer', 
    ['111',' 3 ',' 2 '], {
    1: 'industrialforegoing:plastic', 
    2: 'create:brass_hand',
    3: 'create:andesite_casing'})

// Mechanical Saw
  event.shaped('create:mechanical_saw', 
    ['   ','323','313'], {
    1: 'create:andesite_casing', 
    2: 'thermal:saw_blade',
    3: '#forge:treated_wood'})

// Mechanical Saw
  event.shaped('create:mechanical_drill', 
    ['   ','323','313'], {
    1: 'create:andesite_casing', 
    2: 'thermal:drill_head',
    3: '#forge:treated_wood'})
    

// Andesite Alloy Kiln
  event.custom({"type":"immersiveengineering:alloy","conditions":[{"type":"forge:not","value":
  {"type":"forge:tag_empty","tag":"forge:ingots/brass"}},
  {"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:ingots/zinc"}}],
  "input0":{"item":"minecraft:andesite"},
  "input1":{"tag":"forge:ingots/zinc"},
  "result":{"base_ingredient":{"tag":"forge:ingots/andesite_alloy"},"count":2},"time":200}
)


// Bone Meal Operations
  event.custom({
    "type": "create:milling",
    "ingredients": [
        {
            "item": 'minecraft:bone_block'
        }
    ],
    "processingTime": 50,
    "results": [
        {
            "count": 7,
            "item": 'minecraft:bone_meal'
        },
        {
            "chance": 0.35,
            "count": 2,
            "item": 'minecraft:bone_meal'
        }
    ]
})

  event.custom({
    "type": "create:milling",
    "ingredients": [
        {
            "item": 'minecraft:bone'
        }
    ],
    "processingTime": 50,
    "results": [
        {
            "count": 1,
            "item": 'minecraft:bone_meal'
        }
    ]
})

// ZPM Housing Unit
  event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "key": {
    "A": {
      "item": "mekanism:hdpe_sheet"
    },
    "P": {
      "item": "pneumaticcraft:plastic"
    },
    "G": {
      "item": "create:super_glue"
    },
    "S": {
      "item": "kubejs:damaged_zpm_housing_unit"
    }
  },
  "pattern": [
    "GAAAG",
    "AAPAA",
    "APSPA",
    "AAPAA",
    "GAAAG"
  ],
  "result": {
    "count": 1,
    "item": "kubejs:repaired_zpm_housing_unit"
  }
})

// Advanced Auto Crafting Table 
  event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_ingot"
    },
    "B": {
      "item": "extendedcrafting:crystaltine_catalyst"
    },
    "C": {
      "item": "extendedcrafting:redstone_component"
    },
    "D": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "E": {
      "item": "mekanism:hdpe_sheet"
    },
    "F": {
      "item": "pneumaticcraft:plastic"
    },
    "G": {
      "item": "ae2:controller"
    }
  },
  "pattern": [
    "AEEEA",
    "FDCDF",
    "FBGBF",
    "FDCDF",
    "AEEEA"
  ],
  "result": {
    "count": 1,
    "item": "extendedcrafting:advanced_auto_table"
  }
})

// Leather Operations
event.custom({
  "type": "create:mixing", "ingredients": [{"item": "kubejs:rawhide","count": 1},
  {"fluidTag": "minecraft:water","amount": 200}],
  "results": [{"item": "kubejs:mallable_hide"}],
  "heatRequirement": "none"
  })

event.custom({
  "type": "create:pressing", "ingredients": [{"item": "kubejs:mallable_hide","count": 1}],
  "results": [{"item": "minecraft:leather"}]
  })

event.custom({
  "type": "create:mixing", "ingredients": [{"item": "kubejs:durable_rawhide","count": 1},
  {"fluidTag": "minecraft:water","amount": 200}],
  "results": [{"item": "kubejs:durable_mallable_hide"}],
  "heatRequirement": "none"
  })

event.custom({
  "type": "create:pressing", "ingredients": [{"item": "kubejs:durable_mallable_hide","count": 1}],
  "results": [{"item": "totemic:buffalo_hide"}]
  })

// Infused Nether Stone
event.custom({
  "type": "create:mixing", "ingredients": [{"item": "emendatusenigmatica:gold_dust", "count": 1}, {"item": "kubejs:nether_stone","count": 1}, {"tag": "forge:treated_wood","count": 1}, {"item": "mob_grinding_utils:solid_xp_baby","count": 1},
  {"fluidTag": "minecraft:lava","amount": 200}],
  "results": [{"item": "kubejs:infused_nether_stone", "count": 1}],
  "heatRequirement": "none" 
  })

// Brass Ingot Mixing
event.custom({
  "type": "create:mixing", "ingredients": [{"item": "minecraft:copper_ingot", "count": 1}, {"item": "emendatusenigmatica:zinc_ingot","count": 1}],
  "results": [{"item": "emendatusenigmatica:brass_ingot", "count": 1}],
  "heatRequirement": "heated" 
  })


// Tiny Dry Rubber
event.custom({
  "type": "create:mixing", "ingredients": [{"item": "emendatusenigmatica:quartz_dust","count": 1}, {"item": "emendatusenigmatica:cinnabar_dust","count": 1},
  {"fluidTag": "minecraft:water","amount": 200}],
  "results": [{"item": "industrialforegoing:tinydryrubber"}],
  "heatRequirement": "none"
  })

event.custom({
  "type": "create:pressing", "ingredients": [{"item": "industrialforegoing:dryrubber","count": 1}],
  "results": [{"item": "industrialforegoing:plastic"}]
  })

event.custom({
  "type": "create:pressing", "ingredients": [{"item": "silentcompat:plasteel_ingot","count": 1}],
  "results": [{"item": "emendatusenigmatica:plasteel_plate"}]
  })

event.custom({
  "type": "create:pressing", "ingredients": [{"item": "silentcompat:voidmetal_ingot","count": 1}],
  "results": [{"item": "emendatusenigmatica:voidmetal_plate"}]
  })

//    
})
//