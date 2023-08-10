////
// applied energistics 2
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'ae2:transform/fluix_crystals'})
  event.remove({id: 'ae2:transform/fluix_crystal'})
  event.remove({id: 'ae2:transform/certus_quartz_crystals'})
  event.remove({id: 'create:compat/ae2/mixing/fluix_crystal'})
  event.remove({id: 'ae2:network/blocks/inscribers'})
  event.remove({id: 'ae2:network/blocks/crystal_processing_charger'})
  event.remove({id: 'ae2:network/blocks/controller'})
  event.remove({id: 'ae2:network/blocks/storage_drive'})
  event.remove({id: 'ae2:network/crafting/patterns_blank'})
  event.remove({id: 'ae2:decorative/quartz_glass'})
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_256k_part'})
  event.remove({id: 'megacells:cell_component_1m'})
  event.remove({id: 'megacells:cell_component_4m'})
  event.remove({id: 'megacells:cell_component_16m'})
  event.remove({id: 'megacells:cell_component_64m'})
  event.remove({id: 'megacells:cell_component_256m'})
  event.remove({id: 'ae2:inscriber/calculation_processor_press'})
  event.remove({id: 'ae2:inscriber/engineering_processor_press'})
  event.remove({id: 'ae2:inscriber/logic_processor_press'})
  event.remove({id: 'ae2:inscriber/silicon_press'})
//   event.remove({id: 'ae2:network/blocks/io_condenser'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD
  
// Inscriber
  event.shaped('ae2:inscriber',
    ['545','637','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'prettypipes:blank_module',
	5: 'pneumaticcraft:plastic',
  6: 'ae2:certus_quartz_crystal',
  7: 'ae2:fluix_crystal'}).id('ae2:network/blocks/inscribers')
  
// Charger
  event.shaped('ae2:charger',
    ['545','637','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_pity',
	4: '#energeticsheep:wool_energetic',
	5: 'pneumaticcraft:plastic',
  6: 'ae2:fluix_crystal',
  7: 'prettypipes:blank_module'}).id('ae2:network/blocks/crystal_processing_charger')
  
// ME Controller
  event.shaped('ae2:controller',
    ['212','131','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_supreme'}).id('ae2:network/blocks/controller')
  
// ME Drive
  event.shaped('ae2:drive',
    ['242','536','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_simple',
  4: 'pneumaticcraft:plastic',
  5: 'ae2:certus_quartz_crystal',
  6: 'ae2:fluix_crystal'}).id('ae2:network/blocks/storage_drive')
  
// Blank Pattern
  event.shaped('ae2:blank_pattern',
    ['222','132','222'], {
  1: 'ae2:charged_certus_quartz_crystal',
  2: 'pneumaticcraft:plastic',
	3: 'ae2:quartz_glass'}).id('ae2:network/blocks/patterns_blank')
  
// Quartz Glass
  event.shaped('ae2:quartz_glass',
    ['212','121','212'], {
  1: '#forge:glass',
  2: 'ae2:certus_quartz_crystal'}).id('ae2:decorative/quartz_glass')
  
// Matter Condenser
  event.shaped('ae2:condenser',
    ['121','232','121'], {
  1: 'minecraft:iron_ingot',
  2: '#forge:glass/purple',
  3: 'ars_nouveau:magebloom_fiber'}).id('ae2:network/blocks/io_condenser')

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
	}).id('ae2:inscriber/calculation_processor_press')

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
	}).id('ae2:inscriber/silicon_press')

// Inscriber Engineering Press
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
	}).id('ae2:inscriber/engineering_processor_press')

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
	}).id('ae2:inscriber/logic_processor_press')

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
	}).id('ae2:network/cells/item_storage_components_cell_1k_part')

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
	}).id('ae2:network/cells/item_storage_components_cell_4k_part')

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
	}).id('ae2:network/cells/item_storage_components_cell_16k_part')

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
	}).id('ae2:network/cells/item_storage_components_cell_64k_part')

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
	}).id('ae2:network/cells/item_storage_components_cell_256k_part')

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
	}).id('megacells:cell_component_1m')

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
	}).id('megacells:cell_component_4m')

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
	}).id('megacells:cell_component_16m')

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
	}).id('megacells:cell_component_64m')

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
	}).id('megacells:cell_component_256m')


//    
})
//