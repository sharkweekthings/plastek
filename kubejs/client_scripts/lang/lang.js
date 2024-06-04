////
// rename some items to fit the pack
//// renik
// script originally created by ArugChief in the KubeJS Discord.

//
ClientEvents.lang('en_us', event => {
//
  const rename = (item, newName) => {
	event.renameItem(item, newName)}

// ORE
  	rename('ad_astra:venus_coal_ore', "Rich Coal Ore")
  	rename('ad_astra:mercury_iron_ore', "Rich Iron Ore")
  	rename('minecraft:deepslate_lapis_ore', "Rich Lapis Ore")
	rename('mysticalagradditions:end_inferium_ore', "Rich Inferium Ore")
	rename('mysticalagradditions:end_prosperity_ore', "Rich Prosperity Ore")

// KUBEJS
  	rename('kubejs:durable_rawhide', "Durable Rawhide")
  	rename('kubejs:durable_mallable_hide', "Durable Mallable Hide")
  	rename('kubejs:rawhide', "Rawhide")
  	rename('kubejs:mallable_hide', "Mallable Hide")
  	rename('kubejs:crude_ender_pearl', "Crude Ender Pearl")
  	rename('kubejs:nether_stone', "Nether Stone")
  	rename('kubejs:golden_nether_stone', "Golden Nether Stone")
  	rename('kubejs:zpm', "Zero Point Module")
  	rename('kubejs:zpm_housing_unit', "ZPM Housing Unit")
  	rename('kubejs:damaged_zpm_housing_unit', "Damaged ZPM Housing Unit")
  	rename('kubejs:repaired_zpm_housing_unit', "Repaired ZPM Housing Unit")
  	rename('kubejs:charged_zpm_housing_unit', "Charged ZPM Housing Unit")
  	rename('kubejs:depleted_zpm_housing_unit', "Depleted ZPM Housing Unit")
  	rename('kubejs:green_board', "Green Board")
  	rename('kubejs:incomplete_green_board', "Incomplete Green Board")
  	rename('kubejs:empty_parts_box', "Empty Parts Box")
  	rename('kubejs:compression_dynamo_parts', "Compression Dynamo Parts")
  	rename('kubejs:dissolution_chamber_parts', "Dissolution Chamber Parts")
  	rename('kubejs:fluid_cell_parts', "Fluid Cell Parts")
  	rename('kubejs:gourmand_dynamo_parts', "Gourmand Dynamo Parts")
  	rename('kubejs:loot_fabricator_parts', "Loot Fabricator Parts")
  	rename('kubejs:pneumatic_dynamo_parts', "Pneumatic Dynamo Parts")
  	rename('kubejs:simulation_chamber_parts', "Simulation Chamber Parts")
  	rename('kubejs:stirling_dynamo_parts', "Stirling Dynamo Parts")
  	rename('kubejs:digital_miner_parts', "Digital Miner Parts")
  	rename('kubejs:empty_prediction_parts', "Prediction Matrix Parts")
  	rename('kubejs:energy_cable_starter_parts', "Energy Cable Starter Parts")
  	rename('kubejs:energizing_rod_starter_parts', "Energizing Starter Rod Parts")
  	rename('kubejs:energizing_orb_parts', "Energizing Orb Parts")
  	rename('kubejs:ender_gate_starter_parts', "Ender Gate Starter Parts")
  	rename('kubejs:player_transmitter_starter_parts', "Player Transmitter Starter Parts")
  	rename('kubejs:goauld_crystal', "Goa'uld Crystal")
  	rename('kubejs:nether_stone', "Netherstone")
  	rename('kubejs:infused_nether_stone', "Infused Netherstone")

// COMPACT MACHINES
  	rename('compactmachines:personal_shrinking_device', "Personal Compacting Device")

// PNEUMATIC CRAFT
  	rename('kubejs:advanced_pressure_tube_parts', "Advanced Pressure Tube Parts")
  	rename('kubejs:empty_pcb_parts', "Empty PCB Parts")
  	rename('kubejs:netherite_drill_bit_parts', "Netherite Drill Bit Parts")
  	rename('kubejs:pressure_chamber_valve_parts', "Pressure Chamber Valve Parts")

// SUPPLEMENTARIES
  	rename('supplementaries:globe', "Alfheim Globe")
  	rename('supplementaries:globe_sepia', "Otherside Globe")

// SILENT
  	rename('silentgear:metal_alloyer', "Crude Alloyer")
  	rename('silentgear:blueprint_paper', "Blue Leather")

// TOTEMIC
  	rename('totemic:buffalo_hide', "Durable Leather")

// INDUSTRIAL FOREGOING
  	rename('industrialforegoing:plastic', "Cheap Plastic")
	
// ROOTS CLASSIC
  	rename('rootsclassic:growth_powder', "Green Powder")
	
// MEKANISM
  	rename('mekanism:hazmat_mask', "Hazmat Helm Lining")
  	rename('mekanism:hazmat_gown', "Hazmat Chest Lining")
  	rename('mekanism:hazmat_pants', "Hazmat Pants Lining")
  	rename('mekanism:hazmat_boots', "Hazmat Boots Lining")
  	rename('mekanism:cardboard_box', "High Tech Cardboard Box")
	
// FRUITS AND VEGGIES
  	rename('farmersdelight:cabbage_seeds', "Savoy Cabbage Seeds")
  	rename('farmersdelight:cabbage', "Savoy Cabbage")
  	rename('farmersdelight:tomato_seeds', "Roma Tomato Seeds")
  	rename('farmersdelight:tomato', "Roma Tomato")


// ItemEvents.tooltip(tooltip => {
// e.add(["thermal:fluid_reservoir"], Text.green("WARNING: Do NOT Add Fluid XP to this item. You won't be able to get the fluid out, and you'll need to make a new Fluid Reservor."))
// })

ItemEvents.tooltip(tooltip => {
  tooltip.add([
      'thermal:fluid_reservoir', 
  ], Text.gray('WARNING: Do NOT Add Fluid XP to this item'))
})


//   Ingredient.of(/mekanism:.*crystals/).stacks.forEach(item => rename(item, "Test Rename"))
// materials_add.forEach((material) => {
//   Ingredient.of(`#mekanism:${material}_crystal`).stacks.forEach(item => rename(item, '${material}_Fragment'))
// })


//
})
//