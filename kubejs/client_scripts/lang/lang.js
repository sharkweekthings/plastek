////
// rename some items to fit the pack
//// renik
// script created by ArugChief, and edited by Lat in the KubeJS Discord.

 ClientEvents.highPriorityAssets(e => {
//
  const rename = (item, newName) => e.addLang(Item.of(item).item.getDescriptionId(), newName)

//
// ClientEvents.lang('en_us', event => {
// // console.log("Lang event fired!")
// //
//   const rename = (item, newName) => {
//     let stack = Item.of(item);
//     event.add(stack.mod, stack.item.descriptionId, newName)
//   }

//   const rename = (item, newName) => {
//     let stack = Item.of(item);
//     event.add(stack.item.descriptionId, newName)
//   }

// AD ASTRA
  	rename('ad_astra:venus_coal_ore', "Rich Coal Ore")
  	rename('ad_astra:mercury_iron_ore', "Rich Iron Ore")

// EMENDATUS ENIGMATICA
  	rename('emendatusenigmatica:apatite_moon_stone_ore', "Apatite Ore")
  	rename('emendatusenigmatica:apatite_glacio_stone_ore', "Rich Apatite Ore")
  	rename('emendatusenigmatica:certus_quartz_blackstone_ore', "Certus Quartz Ore")
  	rename('emendatusenigmatica:charged_certus_quartz_mercury_stone_ore', "Charged Certus Quartz Ore")
  	rename('emendatusenigmatica:fluix_mercury_stone_ore', "Fluix Ore")
  	rename('emendatusenigmatica:sharkinite_deepslate_ore', "Sharkinite Ore")
  	rename('emendatusenigmatica:weekonium_stone_ore', "Weekonium Ore")
  	rename('emendatusenigmatica:source_deepslate_ore', "Source Ore")
  	rename('emendatusenigmatica:plastim_plate', "Plastim Composite Plate")
  	rename('emendatusenigmatica:plastim_ingot', "Plastim Composite Ingot")
  	rename('emendatusenigmatica:plastim_dust', "Plastim Composite Dust")
  	rename('minecraft:deepslate_lapis_ore', "Rich Lapis Ore")
  	rename('emendatusenigmatica:end_inferium_ore', "Rich Inferium Ore")
  	rename('emendatusenigmatica:end_prosperity_ore', "Rich Prosperity Ore")
  	rename('emendatusenigmatica:arcmetal_crystal', "Arcmetal Fragment")
  	rename('emendatusenigmatica:voidmetal_crystal', "Voidmetal Fragment")
  	rename('emendatusenigmatica:tin_crystal', "Tin Fragment")
  	rename('emendatusenigmatica:zinc_crystal', "Zinc Fragment")
  	rename('emendatusenigmatica:sharkinite_crystal', "Sharkinite Fragment")
  	rename('emendatusenigmatica:silver_crystal', "Silver Fragment")
  	rename('emendatusenigmatica:aluminum_crystal', "Aluminum Fragment")
  	rename('emendatusenigmatica:gold_crystal', "Gold Fragment")
  	rename('emendatusenigmatica:copper_crystal', "Copper Fragment")
  	rename('emendatusenigmatica:nickel_crystal', "Nickel Fragment")
  	rename('emendatusenigmatica:osmium_crystal', "Osmium Fragment")
  	rename('emendatusenigmatica:quartz_crystal', "Nether Quartz Fragment")
  	rename('emendatusenigmatica:weekonium_crystal', "Weekonium Fragment")
  	rename('emendatusenigmatica:lead_crystal', "Lead Fragment")
  	rename('emendatusenigmatica:iron_crystal', "Iron Fragment")
  	rename('emendatusenigmatica:alien_gear', "Unidentified Alien Piece")
  	rename('emendatusenigmatica:alien_rod', "Unidentified Alien Part")

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
  	rename('kubejs:energizing_rod_parts', "Energizing Rod Parts")
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
  	rename('farmersdelight:tomato', "Roma Tomato Cabbage")


//   Ingredient.of(/mekanism:.*crystals/).stacks.forEach(item => rename(item, "Test Rename"))
// materials_add.forEach((material) => {
//   Ingredient.of(`#mekanism:${material}_crystal`).stacks.forEach(item => rename(item, '${material}_Fragment'))
// })


//
})
//