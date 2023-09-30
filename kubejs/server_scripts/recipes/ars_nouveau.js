////
// ars nouveau
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'ars_nouveau:wing_to_leather'})
  event.remove({id: 'ars_nouveau:horn_to_bonemeal'})
  event.remove({id: 'ars_nouveau:archwood_chest'})
  event.remove({id: 'ars_nouveau:novice_spell_book'})
  event.remove({id: 'ars_nouveau:imbuement_chamber'})
  event.remove({id: 'ars_nouveau:arcane_pedestal'})
  event.remove({id: 'ars_nouveau:source_jar'})
  event.remove({id: 'ars_nouveau:arcane_core'})
  event.remove({id: 'ars_nouveau:enchanting_apparatus'})
  
//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Imbuement Chamber
  event.shaped('ars_nouveau:imbuement_chamber',
    ['212','212','232'], {
  1: 'ars_nouveau:archwood_planks',
  2: 'emendatusenigmatica:gold_plate',
	3: 'mythicbotany:alfsteel_ingot'}).id('ars_nouveau:imbuement_chamber')

// Arcane Pedestal
  event.shaped('ars_nouveau:arcane_pedestal',
    ['121','313','313'], {
  1: 'ars_nouveau:sourcestone',
  2: 'ars_nouveau:source_gem',
	3: 'mythicbotany:alfsteel_nugget'}).id('ars_nouveau:arcane_pedestal')

// Source Jar
  event.shaped('ars_nouveau:source_jar',
    ['232','121','222'], {
  1: '#forge:glass',
  2: 'ars_nouveau:archwood_slab',
	3: 'mythicbotany:alfsteel_nugget'}).id('ars_nouveau:source_jar')

// Arcane Core
  event.shaped('ars_nouveau:arcane_core',
    ['313','121','313'], {
  1: 'ars_nouveau:sourcestone',
  2: 'ars_nouveau:source_gem',
	3: 'mythicbotany:alfsteel_ingot'}).id('ars_nouveau:arcane_core')

// Enchantiing Apparatus
  event.shaped('ars_nouveau:enchanting_apparatus',
    ['212','343','212'], {
  1: 'ars_nouveau:sourcestone',
  2: 'minecraft:gold_ingot',
	3: 'mythicbotany:alfsteel_ingot',
  4: 'minecraft:diamond_block'}).id('ars_nouveau:enchanting_apparatus')

// Archwood Chest
  event.shapeless(Item.of('ars_nouveau:archwood_chest'), ['minecraft:chest', 'ars_nouveau:archwood_planks']).id('ars_nouveau:archwood_chest')
  
// Novice Spellbook
  event.shapeless(Item.of('ars_nouveau:novice_spell_book'), ['minecraft:book', 'ars_nouveau:archwood_slab', 'mythicbotany:alfsteel_nugget']).id('ars_nouveau:novice_spell_book')

  event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": false,
  "output": {
    "item": "kubejs:infused_eye_of_ender"
  },
  "pedestalItems": [
    {
      "item": "ars_nouveau:earth_essence"
    },
    {
      "item": "ars_nouveau:air_essence"
    },
    {
      "item": "ars_nouveau:fire_essence"
    },
    {
      "item": "ars_nouveau:water_essence"
    },
    {
      "item": "ae2:matter_ball"
    },
    {
      "item": "ae2:matter_ball"
    },
Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:enderman"}}').strongNBT(),
Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:enderman"}}').strongNBT()
  ],
  "reagent": [
    {
      "item": "minecraft:ender_eye"
    }
  ],
  "sourceCost": 2000
}).id('kubejs:infused_eye_of_ender')

// Weekonium Ingot
  event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": false,
  "output": {
    "item": "emendatusenigmatica:weekonium_ingot"
  },
  "pedestalItems": [
    {
      "item": "ars_nouveau:earth_essence"
    },
    {
      "item": "ars_nouveau:air_essence"
    },
    {
      "item": "ars_nouveau:fire_essence"
    },
    {
      "item": "ars_nouveau:water_essence"
    },
    {
      "item": "ars_nouveau:earth_essence"
    },
    {
      "item": "ars_nouveau:air_essence"
    },
    {
      "item": "ars_nouveau:fire_essence"
    },
    {
      "item": "ars_nouveau:water_essence"
    }
  ],
  "reagent": [
    {
      "item": "emendatusenigmatica:raw_weekonium"
    }
  ],
  "sourceCost": 9000
}).id('kubejs:weekonium_ingot')

// Weekonium Ingot From Dust
  event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": false,
  "output": {
    "item": "emendatusenigmatica:weekonium_dust"
  },
  "pedestalItems": [
    {
      "item": "ars_nouveau:earth_essence"
    },
    {
      "item": "ars_nouveau:air_essence"
    },
    {
      "item": "ars_nouveau:fire_essence"
    },
    {
      "item": "ars_nouveau:water_essence"
    },
    {
      "item": "ars_nouveau:earth_essence"
    },
    {
      "item": "ars_nouveau:air_essence"
    },
    {
      "item": "ars_nouveau:fire_essence"
    },
    {
      "item": "ars_nouveau:water_essence"
    }
  ],
  "reagent": [
    {
      "item": "emendatusenigmatica:weekonium_dust"
    }
  ],
  "sourceCost": 9000
}).id('kubejs:weekonium_ingot_from_dust')


// //    
})
// //