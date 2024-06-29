////
// industrial foregoing
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'})
  event.remove({id: 'industrialforegoing:mob_slaughter_factory'})
  event.remove({id: 'industrialforegoing:mob_crusher'})
  event.remove({id: 'industrialforegoing:mob_duplicator'})
  event.remove({id: 'industrialforegoing:mob_detector'})
  event.remove({id: 'industrialforegoing:fluid_extractor'})
  event.remove({id: 'industrialforegoing:plant_gatherer'})
  event.remove({id: 'industrialforegoing:plant_sower'})
  event.remove({id: 'industrialforegoing:plant_fertilizer'})
  event.remove({id: 'industrialforegoing:marine_fisher'})
  event.remove({id: 'industrialforegoing:animal_rancher'})
  event.remove({id: 'industrialforegoing:animal_feeder'})
  event.remove({id: 'industrialforegoing:animal_baby_separator'})
  event.remove({id: 'industrialforegoing:dissolution_chamber'})
  event.remove({id: 'industrialforegoing:conveyor_extraction_upgrade'})
  event.remove({id: 'industrialforegoing:conveyor_insertion_upgrade'})
  event.remove({id: 'industrialforegoing:conveyor_detection_upgrade'})
  event.remove({id: 'industrialforegoing:conveyor_bouncing_upgrade'})
  event.remove({id: 'industrialforegoing:conveyor_dropping_upgrade'})
  event.remove({id: 'industrialforegoing:conveyor_blinking_upgrade'})
  event.remove({id: 'industrialforegoing:conveyor_splitting_upgrade'})
  event.remove({id: 'industrialforegoing:conveyor'})
  event.remove({id: 'thermal:furnace_796507198'})
  event.remove({id: 'industrialforegoing:plastic'})
  event.remove({id: 'industrialforegoing:mob_imprisonment_tool'})
  event.remove({id: 'industrialforegoing:iron_gear'})
  event.remove({id: 'industrialforegoing:gold_gear'})
  event.remove({id: 'industrialforegoing:diamond_gear'})
  event.remove({id: 'industrialforegoing:dissolution_chamber/pink_slime_ball'})
  event.remove({id: 'industrialforegoing:sewage_composter'})
  event.remove({id: 'industrialforegoing:fluid_placer'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Mob Imprisonment Tool
  event.shaped('industrialforegoing:mob_imprisonment_tool',
    ['121','232','121'], {
    1: 'industrialforegoing:plastic',
    2: 'pneumaticcraft:ingot_iron_compressed',
	3: 'tconstruct:piggy_backpack'}).id('industrialforegoing:mob_imprisonment_tool')

// Fluid Extractor
  event.shaped('industrialforegoing:fluid_extractor',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_pity',
	4: 'immersiveengineering:fluid_pump',
	5: 'pneumaticcraft:plastic'}).id('industrialforegoing:fluid_extractor')

// Plant Gatherer
  event.shaped('industrialforegoing:plant_gatherer',
    ['545','232','616'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:netherite_hoe',
	5: 'pneumaticcraft:plastic',
	6: 'emendatusenigmatica:plasteel_plate'}).id('industrialforegoing:plant_gatherer')

// Plant Sower
  event.shaped('industrialforegoing:plant_sower',
    ['545','232','616'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:flower_pot',
	5: 'pneumaticcraft:plastic',
	6: 'emendatusenigmatica:plasteel_plate'}).id('industrialforegoing:plant_sower')

// Plant Fertilizer
  event.shaped('industrialforegoing:plant_fertilizer',
    ['545','232','616'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'immersiveengineering:fertilizer',
	5: 'pneumaticcraft:plastic',
	6: 'emendatusenigmatica:plasteel_plate'}).id('industrialforegoing:plant_fertilizer')

// Marine Fisher
  event.shaped('industrialforegoing:marine_fisher',
    ['545','232','616'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'redstone_arsenal:flux_fishing_rod',
	5: 'pneumaticcraft:plastic',
	6: 'emendatusenigmatica:plasteel_plate'}).id('industrialforegoing:marine_fisher')

// Animal Rancher
  event.shaped('industrialforegoing:animal_rancher',
    ['545','232','616'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:shears',
	5: 'pneumaticcraft:plastic',
	6: 'emendatusenigmatica:plasteel_plate'}).id('industrialforegoing:animal_rancher')

// Animal Feeder
  event.shaped('industrialforegoing:animal_feeder',
    ['545','232','616'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'quark:feeding_trough',
	5: 'pneumaticcraft:plastic',
	6: 'emendatusenigmatica:plasteel_plate'}).id('industrialforegoing:animal_feeder')

// Animal Baby Separator
  event.shaped('industrialforegoing:animal_baby_separator',
    ['545','232','616'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:golden_carrot',
	5: 'pneumaticcraft:plastic',
	6: 'emendatusenigmatica:plasteel_plate'}).id('industrialforegoing:animal_baby_separator')

// Heart of the Deep
	event.custom({
		"input": [
			{
				"item": "kubejs:infused_eye_of_ender"
			},
			{
				"item": "kubejs:empty_heart_of_the_deep"
			},
			{
				"item": "kubejs:infused_eye_of_ender"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "occultism:spirit_attuned_gem"
			},
			{
				"item": "botania:spark"
			},
			{
				"item": "occultism:spirit_attuned_gem"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "deeperdarker:heart_of_the_deep",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:ender\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('deeperdarker:heart_of_the_deep')

// Echo Shard
	event.custom({
		"input": [
			{
				"item": "redstone_arsenal:obsidian_rod"
			},
			{
				"item": "minecraft:amethyst_shard"
			},
			{
				"item": "emendatusenigmatica:plasteel_rod"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "minecraft:echo_shard",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:ender\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('minecraft:echo_shard')

// Reinforced Echo Shard
	event.custom({
		"input": [
			{
				"item": "minecraft:phantom_membrane"
			},
			{
				"item": "deeperdarker:warden_carapace"
			},
			{
				"item": "minecraft:phantom_membrane"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "minecraft:echo_shard"
			},
			{
				"item": "minecraft:phantom_membrane"
			},
			{
				"item": "minecraft:echo_shard"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "deeperdarker:reinforced_echo_shard",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:ender\",Amount:600}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('deeperdarker:reinforced_echo_shard')

// Simple Machine Frame
	event.custom({
		"input": [
			{
				"item": "pneumaticcraft:plastic"
			},
			{
				"item": "industrialforegoing:machine_frame_pity"
			},
			{
				"item": "pneumaticcraft:plastic"
			},
			{
				"item": "pneumaticcraft:capacitor"
			},
			{
				"item": "pneumaticcraft:transistor"
			},
			{
				"item": "emendatusenigmatica:steel_plate"
			},
			{
				"item": "emendatusenigmatica:steel_gear"
			},
			{
				"item": "emendatusenigmatica:steel_plate"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "industrialforegoing:machine_frame_simple",
			"count": 1
		},
		"inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('industrialforegoing:machine_frame_simple')

// Advanced Machine Frame
	event.custom({
		"input": [
			{
				"item": "emendatusenigmatica:aluminum_plate"
			},
			{
				"item": "industrialforegoing:machine_frame_simple"
			},
			{
				"item": "emendatusenigmatica:aluminum_plate"
			},
			{
				"item": "pneumaticcraft:capacitor"
			},
			{
				"item": "pneumaticcraft:transistor"
			},
			{
				"item": "immersiveengineering:wire_aluminum"
			},
			{
				"item": "emendatusenigmatica:diamond_gear"
			},
			{
				"item": "immersiveengineering:wire_aluminum"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "industrialforegoing:machine_frame_advanced",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('industrialforegoing:machine_frame_advanced')

// Bandage
	event.custom({
		"input": [
			{
				"item": "immersiveengineering:hemp_fabric"
			},
			{
				"item": "pneumaticcraft:glycerol"
			},
			{
				"item": "immersiveengineering:hemp_fabric"
			},
			{
				"item": "pneumaticcraft:glycerol"
			},
			{
				"item": "pneumaticcraft:glycerol"
			},
			{
				"item": "immersiveengineering:hemp_fabric"
			},
			{
				"item": "pneumaticcraft:glycerol"
			},
			{
				"item": "immersiveengineering:hemp_fabric"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "pneumaticcraft:bandage",
			"count": 2
		},
		"inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('pneumaticcraft:bandage')

// Supreme Machine Frame
	event.custom({
		"input": [
			{
				"item": "emendatusenigmatica:steel_plate"
			},
			{
				"item": "industrialforegoing:machine_frame_advanced"
			},
			{
				"item": "emendatusenigmatica:steel_plate"
			},
			{
				"item": "pneumaticcraft:capacitor"
			},
			{
				"item": "pneumaticcraft:transistor"
			},
			{
				"item": "emendatusenigmatica:plasteel_gear"
			},
			{
				"item": "immersiveengineering:wire_electrum"
			},
			{
				"item": "emendatusenigmatica:plasteel_gear"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "industrialforegoing:machine_frame_supreme",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:redstone\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('industrialforegoing:machine_frame_supreme')

// Dragon Egg Test
	event.custom({
		"input": [
			{
				"tag": "iceandfire:scales/dragon/fire"
			},
			{
				"item": "kubejs:ancient_dragon_egg"
			},
			{
				"tag": "iceandfire:scales/dragon/fire"
			},
			{
				"item": "biomancy:rejuvenation_serum"
			},
			{
				"item": "biomancy:rejuvenation_serum"
			},
			{
				"tag": "iceandfire:scales/dragon/fire"
			},
			{
				"item": "deeperdarker:heart_of_the_deep"
			},
			{
				"tag": "iceandfire:scales/dragon/fire"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "kubejs:glowing_dragon_egg",
			"count": 1
		},
		"inputFluid": "{FluidName:\"tconstruct:blazing_blood\",Amount:8000}",
		"type": "industrialforegoing:dissolution_chamber"
	}).id('kubejs:dragonegg_test')
	
// Cheap Plastic #2
  event.custom({"type":"immersiveengineering:arc_furnace",
"additives":[{"item":"emendatusenigmatica:cinnabar_dust"}],
"energy":51200,
"input":{"type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {"EntityTag": {
        "type": "productivebees:plastic"}}},
"results":[{"base_ingredient":{"item":"industrialforegoing:plastic"},"count":1}],"time":100}).id('industrialforegoing:plastic_2')



// Replace Flower Pot w/ Botany Pot
event.replaceInput({}, 'industrialforegoing:fertilizer', 'immersiveengineering:fertilizer')

// Replace Flower Pot w/ Botany Pot
event.replaceOutput({}, 'industrialforegoing:fertilizer', 'immersiveengineering:fertilizer')

//    
})
//