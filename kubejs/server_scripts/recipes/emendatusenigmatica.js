////
// emendatus enigmatica
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({output: 'emendatusenigmatica:sterling_silver_helmet'})
  event.remove({output: 'emendatusenigmatica:sterling_silver_chestplate'})
  event.remove({output: 'emendatusenigmatica:sterling_silver_leggings'})
  event.remove({output: 'emendatusenigmatica:sterling_silver_boots'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/brass'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/steel'})
  event.remove({id: 'immersiveengineering:crafting/stick_aluminum'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/copper'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/nickel'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/weekonium'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/sharkinite'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/steel'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/weekonium'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/iron'})
  event.remove({id: 'immersiveengineering:crafting/stick_iron'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/iron'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/iron'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/gold'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/gold'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/sterling_silver'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/aluminum'})
  event.remove({id: 'emendatusenigmatica:rod/from_ingot/gold'})
  event.remove({id: 'emendatusenigmatica:ingot/from_dust/blasting/plastim'})
  event.remove({id: 'emendatusenigmatica:ingot/from_dust/smelting/plastim'})
  event.remove({id: 'thermal:furnace_1677340317'})
  event.remove({id: 'emendatusenigmatica:ingot/from_dust_induction/plastim'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/iron'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/signalum'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/sterling_silver'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/copper'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/aluminum'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/plastim'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/sharkinite'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/lumium'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/lead'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/electrum'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/brass'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/steel'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/weekonium'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/constantan'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/bronze'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/gold'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/osmium'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/uranium'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/invar'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/silver'})
  event.remove({id: 'emendatusenigmatica:plate/from_ingot/nickel'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/apatite'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/weekonium'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/coal'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/quartz'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/diamond'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/sharkinite'})
  event.remove({id: 'emendatusenigmatica:dust/from_ore/copper'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/zinc'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/aluminum'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/sharkinite'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/copper'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/uranium'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/tin'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/lead'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/nickel'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/silver'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/osmium'})
  event.remove({id: 'emendatusenigmatica:dust/from_raw/weekonium'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Sterling Silver Helmet
  event.shaped('emendatusenigmatica:sterling_silver_helmet',
    ['313','121','313'], {
    1: 'emendatusenigmatica:sterling_silver_ingot', 
    2: 'minecraft:leather_helmet', 
    3: 'emendatusenigmatica:sterling_silver_plate'})

// Sterling Silver Chestplate
  event.shaped('emendatusenigmatica:sterling_silver_chestplate',
    ['313','121','313'], {
    1: 'emendatusenigmatica:sterling_silver_ingot', 
    2: 'minecraft:leather_chestplate', 
    3: 'emendatusenigmatica:sterling_silver_plate'})

// Sterling Silver Leggings  
  event.shaped('emendatusenigmatica:sterling_silver_leggings',
    ['313','121','313'], {
    1: 'emendatusenigmatica:sterling_silver_ingot', 
    2: 'minecraft:leather_leggings', 
    3: 'emendatusenigmatica:sterling_silver_plate'})

// Sterling Silver Boots    
  event.shaped('emendatusenigmatica:sterling_silver_boots',
    ['313','121','313'], {
    1: 'emendatusenigmatica:sterling_silver_ingot', 
    2: 'minecraft:leather_boots',
    3: 'emendatusenigmatica:sterling_silver_plate'})

// Iron Rod
  event.shaped('emendatusenigmatica:iron_rod',
    [' 1 ',' 1 ',' 1 '], {
    1: 'emendatusenigmatica:iron_plate'})
    
// Gold Rod
  event.shaped('emendatusenigmatica:gold_rod', 
    [' 1 ',' 1 ',' 1 '], {
    1: 'emendatusenigmatica:gold_plate'})

// Steel Rod
  event.shaped('emendatusenigmatica:steel_rod',
    [' 1 ',' 1 ',' 1 '], {
    1: 'emendatusenigmatica:steel_plate'})

// Aluminum Rod
  event.shaped('emendatusenigmatica:aluminum_rod',
    [' 1 ',' 1 ',' 1 '], {
    1: 'emendatusenigmatica:aluminum_plate'})

// Sterling Silver Rod  
  event.shaped('emendatusenigmatica:sterling_silver_rod',
    [' 1 ',' 1 ',' 1 '], {
    1: 'emendatusenigmatica:sterling_silver_ingot'})

// Copper Rod  
  event.shaped('emendatusenigmatica:copper_rod',
    [' 1 ',' 1 ',' 1 '], {
    1: 'emendatusenigmatica:copper_plate'})

// Apatite Dust
  event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": "emendatusenigmatica:apatite_gem"
    }
  ],
  "processingTime": 100,
  "results": [
    {
      "count": 1,
      "item": "emendatusenigmatica:apatite_dust"
    }
  ]
})

// Cinnabar Dust
  event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": "emendatusenigmatica:cinnabar_gem"
    }
  ],
  "processingTime": 100,
  "results": [
    {
      "count": 1,
      "item": "emendatusenigmatica:cinnabar_dust"
    }
  ]
})

// Quartz Dust
  event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": "minecraft:quartz"
    }
  ],
  "processingTime": 100,
  "results": [
    {
      "count": 1,
      "item": "emendatusenigmatica:quartz_dust"
    }
  ]
})

// Gold Dust
  event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": "minecraft:gold_ingot"
    }
  ],
  "processingTime": 100,
  "results": [
    {
      "count": 1,
      "item": "emendatusenigmatica:gold_dust"
    }
  ]
})

//    
})
//