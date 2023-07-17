////
// silent
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'silentgear:leather_from_scraps'})
  event.remove({id: 'silentgear:compounding/metal/crimson_steel_ingot'})
  event.remove({id: 'silentgear:metal_alloyer'})
  event.remove({id: 'silentcompat:outback_leather'})
  event.remove({id: 'silentgear:blueprint_paper'})
  event.remove({id: 'silentgear:material_grader'})
  event.remove({id: 'silentgear:leather_scrap'})
  event.remove({id: 'minecraft:plasteel_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_plasteel_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_plasteel_to_ingot'})
  event.remove({id: 'minecraft:plasteel_ore_to_ingot'})
  event.remove({id: 'thermal:furnace_233757862'})
  event.remove({id: 'thermal:furnace_314118907'})
  event.remove({id: 'minecraft:voidmetal_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_voidmetal_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_voidmetal_to_ingot'})
  event.remove({id: 'minecraft:voidmetal_ore_to_ingot'})
  event.remove({id: 'thermal:furnace_1793595157'})
  event.remove({id: 'thermal:furnace_132719279'})
  event.remove({id: 'silentcompat:crystalline_alloy'})
  event.remove({id: 'silentcompat:dark_chocolate_ingot'})
  event.remove({id: 'silentcompat:capsid_alloy_ingot'})
  event.remove({id: 'silentcompat:sculk_alloy_ingot'})
  event.remove({id: 'silentgear:compounding/metal/blaze_gold_ingot'})
  event.remove({id: 'silentgear:compounding/metal/custom_ingot.high_carbon_steel'})
  event.remove({id: 'silentgear:compounding/metal/tyrian_steel_ingot'})
  event.remove({id: 'silentgear:salvager'})
  event.remove({output: 'silentcompat:solarmetal_ingot'})
  event.remove({output: 'silentcompat:arcmetal_ingot'})
  event.remove({id: 'silentgear:bronze_ingot'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Metal Alloyer (Crude Alloyer)
  event.shaped('silentgear:metal_alloyer',
    ['242','232','212'], {
    1: 'minecraft:furnace', 
    2: 'compressium:andesite_2',
    3: 'minecraft:copper_block',
    4: 'minecraft:gold_block'})

// Starter Blueprints
  event.shaped('silentgear:blueprint_package',
    ['111','121','111'], {
    1: 'silentgear:blueprint_paper',
    2: 'sophisticatedbackpacks:upgrade_base'})

// Material Grader
  event.shaped('silentgear:material_grader',
    ['121','131','444'], {
    1: 'industrialforegoing:plastic', 
    2: 'occultism:spirit_attuned_gem',
    3: 'occultism:otherstone',
    4: 'emendatusenigmatica:iron_plate'})

// Crystalline Ingot
  event.shaped('silentcompat:crystalline_alloy',
    [' 3 ','152',' 4 '], {
    1: 'ars_nouveau:earth_essence', 
    2: 'ars_nouveau:air_essence',
    3: 'ars_nouveau:water_essence',
    4: 'ars_nouveau:fire_essence',
    5: 'minecraft:quartz'})

// Dark Chocolate Ingot
  event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": "emendatusenigmatica:steel_ingot"
    },
    {
      "amount": 250,
      "fluid": "create:chocolate"
    }
  ],
  "results": [
    {
      "item": "silentcompat:dark_chocolate_ingot"
    }
  ]
})

// Bronze Ingot Alloy Kiln
	event.custom({"type":"immersiveengineering:alloy","conditions":[{"type":"forge:not","value":
  {"type":"forge:tag_empty","tag":"forge:ingots/bronze"}},
  {"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:ingots/crimson_steel"}}],
  "input0":{"base_ingredient":{"item":"silentgear:tyrian_steel_ingot"},"count":2},
  "input1":{"tag":"forge:ingots/crimson_steel"},
  "result":{"base_ingredient":{"item":"silentgear:tyrian_steel_ingot"},"count":1},"time":300})

// Arcmetal Ingot
  event.custom({"type":"immersiveengineering:arc_furnace",
"additives":[{"item":"emendatusenigmatica:electrum_ingot"}],
"energy":51200,
"input":{"item":"silentcompat:raw_arcmetal"},
"results":[{"base_ingredient":{"item":"silentcompat:arcmetal_ingot"},"count":1}],"time":300})

// Sculk Alloy
	event.custom({
		"input": [
			{
				"item": "deeperdarker:sculk_stone"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "deeperdarker:sculk_stone"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "deeperdarker:sculk_stone"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "deeperdarker:sculk_stone"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "silentcompat:sculk_alloy_ingot",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:ender\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})



  event.shapeless(Item.of('silentcompat:outback_leather'), ['minecraft:leather', 'pamhc2foodextended:vegemiteitem'])
  event.shapeless(Item.of('silentgear:blueprint_paper'), ['minecraft:leather', 'minecraft:blue_dye'])
  event.shapeless(Item.of('silentgear:blueprint_paper'), ['totemic:buffalo_hide', 'minecraft:blue_dye'])

//    
})
//