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
  event.remove({id: 'silentgear:bronze_ingot'})
  event.remove({id: 'silentgear:azure_silver_dust'})
  event.remove({id: 'silentgear:blaze_gold_dust'})
  event.remove({id: 'silentgear:blazing_dust'})
  event.remove({id: 'silentgear:azure_silver_dust'})
  event.remove({id: 'silentgear:glittery_dust'})
  event.remove({id: 'minecraft:raw_solarmetal_to_ingot_blasting'})
  event.remove({id: 'minecraft:solarmetal_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_solarmetal_to_ingot'})
  event.remove({id: 'minecraft:solarmetal_ore_to_ingot'})
  event.remove({id: 'minecraft:raw_arcmetal_to_ingot_blasting'})
  event.remove({id: 'minecraft:arcmetal_ore_to_ingot_blasting'})
  event.remove({id: 'minecraft:raw_arcmetal_to_ingot'})
  event.remove({id: 'minecraft:arcmetal_ore_to_ingot'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Azure Electrum Ingot
  event.shaped('silentgear:azure_electrum_ingot',
    ['1 1','232','222'], {
    1: 'emendatusenigmatica:electrum_ingot', 
    2: 'silentgear:azure_silver_ingot',
    3: 'minecraft:ender_pearl'}).id('silentgear:azure_electrum_ingot')

// Glowing Dust
  event.shaped('2x silentgear:glowing_dust',
    ['323','212','323'], {
    1: 'thermal:quartz_dust', 
    2: 'minecraft:glowstone_dust',
    3: 'rootsclassic:growth_powder'}).id('silentgear:glowing_dust')

// Blaze Gold Ingot
  event.shaped('2x silentgear:blaze_gold_ingot',
    ['323','212','323'], {
    1: 'minecraft:gold_ingot', 
    2: 'minecraft:blaze_powder',
    3: 'emendatusenigmatica:copper_dust'}).id('silentgear:blaze_gold_ingot')

// Blazing Dust
  event.shaped('4x silentgear:blazing_dust',
    ['323','212','323'], {
    1: 'silentgear:blaze_gold_dust', 
    2: 'minecraft:blaze_powder',
    3: 'minecraft:glowstone_dust'}).id('silentgear:blazing_dust')

// Glittery Dust
  event.shaped('8x silentgear:glittery_dust',
    ['323','212','323'], {
    1: 'silentgear:azure_silver_dust', 
    2: 'silentgear:glowing_dust',
    3: 'minecraft:popped_chorus_fruit'}).id('silentgear:glittery_dust')

// Metal Alloyer (Crude Alloyer)
  event.shaped('silentgear:metal_alloyer',
    ['242','232','212'], {
    1: 'minecraft:furnace', 
    2: 'compressium:andesite_1',
    3: 'minecraft:copper_block',
    4: 'minecraft:gold_block'}).id('silentgear:metal_alloyer')

// Starter Blueprints
  event.shaped('silentgear:blueprint_package',
    ['111','121','111'], {
    1: 'silentgear:blueprint_paper',
    2: 'sophisticatedbackpacks:upgrade_base'}).id('silentgear:blueprint_package')

// Material Grader
  event.shaped('silentgear:material_grader',
    ['121','131','444'], {
    1: 'industrialforegoing:plastic', 
    2: 'occultism:spirit_attuned_gem',
    3: 'occultism:otherstone',
    4: 'emendatusenigmatica:iron_plate'}).id('silentgear:material_grader')

// Crystalline Ingot
  event.shaped('silentcompat:crystalline_alloy',
    [' 3 ','152',' 4 '], {
    1: 'ars_nouveau:earth_essence', 
    2: 'ars_nouveau:air_essence',
    3: 'ars_nouveau:water_essence',
    4: 'ars_nouveau:fire_essence',
    5: 'minecraft:quartz'}).id('silentcompat:crystalline_alloy')

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
}).id('silentcompat:dark_chocolate_ingot')

// Bronze Ingot Alloy Kiln
	event.custom({"type":"immersiveengineering:alloy","conditions":[{"type":"forge:not","value":
  {"type":"forge:tag_empty","tag":"forge:ingots/bronze"}},
  {"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:ingots/crimson_steel"}}],
  "input0":{"base_ingredient":{"item":"emendatusenigmatica:steel_ingot"},"count":4},
  "input1":{"tag":"forge:ingots/crimson_steel"},
  "result":{"base_ingredient":{"item":"silentgear:tyrian_steel_ingot"},"count":1},"time":300}).id('silentgear:tyrian_steel_ingot')

// Arcmetal Ingot
  event.custom({"type":"immersiveengineering:arc_furnace",
"additives":[{"item":"emendatusenigmatica:electrum_ingot"}],
"energy":51200,
"input":{"item":"silentcompat:raw_arcmetal"},
"results":[{"base_ingredient":{"item":"silentcompat:arcmetal_ingot"},"count":1}],"time":300}).id('silentgear:arcmetal_ingot')

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
	}).id('silentcompat:sculk_alloy_ingot')

// Blaze Gold Dust
  event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": "silentgear:blaze_gold_ingot"
    }
  ],
  "processingTime": 100,
  "results": [
    {
      "count": 1,
      "item": "silentgear:blaze_gold_dust"
    }
  ]
}).id('silentgear:blaze_gold_dust')

// Azure Silver Dust
  event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": "silentgear:azure_silver_ingot"
    }
  ],
  "processingTime": 100,
  "results": [
    {
      "count": 1,
      "item": "silentgear:azure_silver_dust"
    }
  ]
}).id('silentgear:azure_silver_dust')




  event.shapeless(Item.of('silentcompat:outback_leather'), ['minecraft:leather', 'pamhc2foodextended:vegemiteitem']).id('silentcompat:outback_leather')
  event.shapeless(Item.of('silentgear:blueprint_paper'), ['minecraft:leather', 'minecraft:blue_dye']).id('silentgear:blueprint_paper_leather')
  event.shapeless(Item.of('silentgear:blueprint_paper'), ['totemic:buffalo_hide', 'minecraft:blue_dye']).id('silentgear:blueprint_paper_buffalo_hide')

//    
})
//