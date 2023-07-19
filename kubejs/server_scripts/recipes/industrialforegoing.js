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

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Fluid Extractor
  event.shaped('industrialforegoing:fluid_extractor',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_pity',
	4: 'immersiveengineering:fluid_pump',
	5: 'pneumaticcraft:plastic'})

// Plant Gatherer
  event.shaped('industrialforegoing:plant_gatherer',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:netherite_hoe',
	5: 'pneumaticcraft:plastic'})

// Plant Sower
  event.shaped('industrialforegoing:plant_sower',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:flower_pot',
	5: 'pneumaticcraft:plastic'})

// Plant Fertilizer
  event.shaped('industrialforegoing:plant_fertilizer',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'immersiveengineering:fertilizer',
	5: 'pneumaticcraft:plastic'})

// Marine Fisher
  event.shaped('industrialforegoing:marine_fisher',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'redstone_arsenal:flux_fishing_rod',
	5: 'pneumaticcraft:plastic'})

// Animal Rancher
  event.shaped('industrialforegoing:animal_rancher',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:shears',
	5: 'pneumaticcraft:plastic'})

// Animal Feeder
  event.shaped('industrialforegoing:animal_feeder',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'quark:feeding_trough',
	5: 'pneumaticcraft:plastic'})

// Animal Baby Separator
  event.shaped('industrialforegoing:animal_baby_separator',
    ['545','232','212'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'minecraft:golden_carrot',
	5: 'pneumaticcraft:plastic'})

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
	})

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
				"item": "redstone_arsenal:obsidian_rod"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "minecraft:echo_shard",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:ender\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

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
	})

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
				"item": "minecraft:iron_block"
			},
			{
				"item": "minecraft:iron_block"
			},
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "emendatusenigmatica:gold_gear"
			},
			{
				"item": "emendatusenigmatica:iron_plate"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "industrialforegoing:machine_frame_simple",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

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
				"item": "immersiveengineering:sheetmetal_lead"
			},
			{
				"item": "immersiveengineering:sheetmetal_lead"
			},
			{
				"item": "immersiveengineering:wire_aluminum"
			},
			{
				"item": "minecraft:netherite_scrap"
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
		"inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

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
	})

// Supreme Machine Frame
	event.custom({
		"input": [
			{
				"item": "pneumaticcraft:capacitor"
			},
			{
				"item": "industrialforegoing:machine_frame_advanced"
			},
			{
				"item": "pneumaticcraft:transistor"
			},
			{
				"item": "immersiveengineering:sheetmetal_electrum"
			},
			{
				"item": "immersiveengineering:sheetmetal_electrum"
			},
			{
				"item": "emendatusenigmatica:diamond_gear"
			},
			{
				"item": "immersiveengineering:wire_electrum"
			},
			{
				"item": "emendatusenigmatica:diamond_gear"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "industrialforegoing:machine_frame_supreme",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:redstone\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// Inscriber Calculation Press
	event.custom({
		"input": [
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "prettypipes:blank_module"
			},
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			},
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:calculation_processor_press",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:1500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// Inscriber Silicon Press
	event.custom({
		"input": [
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "prettypipes:blank_module"
			},
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			},
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:silicon_press",
			"count": 1
		},
		"inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:1500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// Inscriber Logic Press
	event.custom({
		"input": [
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "prettypipes:blank_module"
			},
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			},
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:engineering_processor_press",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:redstone\",Amount:1500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// Inscriber Logic Press
	event.custom({
		"input": [
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "prettypipes:blank_module"
			},
			{
				"item": "emendatusenigmatica:iron_plate"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_gear"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			},
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "emendatusenigmatica:iron_rod"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:logic_processor_press",
			"count": 1
		},
		"inputFluid": "{FluidName:\"thermal:ender\",Amount:1500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 1k ME Storage Component
	event.custom({
		"input": [
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "ae2:logic_processor"
			},
			{
				"item": "ae2:logic_processor"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "ae2:engineering_processor"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:cell_component_1k",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 4k ME Storage Component
	event.custom({
		"input": [
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "ae2:cell_component_1k"
			},
			{
				"item": "ae2:cell_component_1k"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "ae2:cell_component_1k"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:cell_component_4k",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 16k ME Storage Component
	event.custom({
		"input": [
			{
				"item": "minecraft:glowstone_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "minecraft:glowstone_dust"
			},
			{
				"item": "ae2:cell_component_4k"
			},
			{
				"item": "ae2:cell_component_4k"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "ae2:cell_component_4k"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:cell_component_16k",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 64k ME Storage Component
	event.custom({
		"input": [
			{
				"item": "minecraft:glowstone_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "minecraft:glowstone_dust"
			},
			{
				"item": "ae2:cell_component_16k"
			},
			{
				"item": "ae2:cell_component_16k"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "ae2:cell_component_16k"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:cell_component_64k",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 256k ME Storage Component
	event.custom({
		"input": [
			{
				"item": "minecraft:glowstone_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "minecraft:glowstone_dust"
			},
			{
				"item": "ae2:cell_component_64k"
			},
			{
				"item": "ae2:cell_component_64k"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "ae2:cell_component_64k"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "ae2:cell_component_256k",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 1M ME Storage Component
	event.custom({
		"input": [
			{
				"item": "ae2:sky_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "ae2:sky_dust"
			},
			{
				"item": "ae2:cell_component_256k"
			},
			{
				"item": "ae2:cell_component_256k"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "ae2:cell_component_256k"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "megacells:cell_component_1m",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 4M ME Storage Component
	event.custom({
		"input": [
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "megacells:cell_component_1m"
			},
			{
				"item": "megacells:cell_component_1m"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "megacells:cell_component_1m"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "megacells:cell_component_4m",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 16M ME Storage Component
	event.custom({
		"input": [
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "megacells:cell_component_4m"
			},
			{
				"item": "megacells:cell_component_4m"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "megacells:cell_component_4m"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "megacells:cell_component_16m",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 64M ME Storage Component
	event.custom({
		"input": [
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "megacells:cell_component_16m"
			},
			{
				"item": "megacells:cell_component_16m"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "megacells:cell_component_16m"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "megacells:cell_component_64m",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})

// 256M ME Storage Component
	event.custom({
		"input": [
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "ae2:calculation_processor"
			},
			{
				"item": "ae2:ender_dust"
			},
			{
				"item": "megacells:cell_component_64m"
			},
			{
				"item": "megacells:cell_component_64m"
			},
			{
				"item": "ae2:quartz_glass"
			},
			{
				"item": "megacells:cell_component_64m"
			},
			{
				"item": "ae2:quartz_glass"
			}
		],
		"processingTime": 300,
		"output": {
			"item": "megacells:cell_component_256m",
			"count": 1
		},
		"inputFluid": "{FluidName:\"pneumaticcraft:plastic\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
	})
	
// Cheap Plastic #2
  event.custom({"type":"immersiveengineering:arc_furnace",
"additives":[{"item":"emendatusenigmatica:cinnabar_dust"}],
"energy":51200,
"input":{"type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {"EntityTag": {
        "type": "productivebees:plastic"}}},
"results":[{"base_ingredient":{"item":"industrialforegoing:plastic"},"count":1}],"time":100})

//    
})
//