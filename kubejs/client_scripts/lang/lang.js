////
// rename some items to fit the pack
//// renik
// script created by ArugChief in the KubeJS Discord.

//
 ClientEvents.highPriorityAssets(e => {
//
  const rename = (item, newName) => e.addLang(Item.of(item).item.getDescriptionId(), newName)
// AD ASTRA
  	rename('ad_astra:venus_coal_ore', "Rich Coal Ore")
  	rename('ad_astra:mercury_iron_ore', "Rich Iron Ore")

// EMENDATUS ENIGMATICA
  	rename('emendatusenigmatica:apatite_moon_stone_ore', "Rich Apatite Ore")
  	rename('emendatusenigmatica:apatite_glacio_stone_ore', "Apatite Ore")
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

// COMPACT MACHINES
  	rename('compactmachines:personal_shrinking_device', "Personal Compacting Device")

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