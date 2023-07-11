////
// mekanism
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'mekanism:factory/basic/smelting'})
  event.remove({id: 'mekanism:factory/basic/enriching'})
  event.remove({id: 'mekanism:factory/basic/crushing'})
  event.remove({id: 'mekanism:factory/basic/compressing'})
  event.remove({id: 'mekanism:factory/basic/combining'})
  event.remove({id: 'mekanism:factory/basic/purifying'})
  event.remove({id: 'mekanism:factory/basic/injecting'})
  event.remove({id: 'mekanism:factory/basic/infusing'})
  event.remove({id: 'mekanism:factory/basic/sawing'})
  event.remove({id: 'mekanism:factory/advanced/smelting'})
  event.remove({id: 'mekanism:factory/advanced/enriching'})
  event.remove({id: 'mekanism:factory/advanced/crushing'})
  event.remove({id: 'mekanism:factory/advanced/compressing'})
  event.remove({id: 'mekanism:factory/advanced/combining'})
  event.remove({id: 'mekanism:factory/advanced/purifying'})
  event.remove({id: 'mekanism:factory/advanced/injecting'})
  event.remove({id: 'mekanism:factory/advanced/infusing'})
  event.remove({id: 'mekanism:factory/advanced/sawing'})
  event.remove({id: 'mekanism:factory/elite/smelting'})
  event.remove({id: 'mekanism:factory/elite/enriching'})
  event.remove({id: 'mekanism:factory/elite/crushing'})
  event.remove({id: 'mekanism:factory/elite/compressing'})
  event.remove({id: 'mekanism:factory/elite/combining'})
  event.remove({id: 'mekanism:factory/elite/purifying'})
  event.remove({id: 'mekanism:factory/elite/injecting'})
  event.remove({id: 'mekanism:factory/elite/infusing'})
  event.remove({id: 'mekanism:factory/elite/sawing'})
  event.remove({id: 'mekanism:factory/ultimate/smelting'})
  event.remove({id: 'mekanism:factory/ultimate/enriching'})
  event.remove({id: 'mekanism:factory/ultimate/crushing'})
  event.remove({id: 'mekanism:factory/ultimate/compressing'})
  event.remove({id: 'mekanism:factory/ultimate/combining'})
  event.remove({id: 'mekanism:factory/ultimate/purifying'})
  event.remove({id: 'mekanism:factory/ultimate/injecting'})
  event.remove({id: 'mekanism:factory/ultimate/infusing'})
  event.remove({id: 'mekanism:factory/ultimate/sawing'})
  event.remove({id: 'mekanism:reaction/substrate/water_ethene'})
  event.remove({id: 'mekanism:hdpe_sheet'})
  event.remove({id: 'mekanism:hdpe_rod'})
  event.remove({id: 'mekanism:enrichment_chamber'})
  event.remove({id: 'mekanism:osmium_compressor'})
  event.remove({id: 'mekanism:combiner'})
  event.remove({id: 'mekanism:crusher'})
  event.remove({id: 'mekanism:metallurgic_infuser'})
  event.remove({id: 'mekanism:purification_chamber'})
  event.remove({id: 'mekanism:energized_smelter'})
  event.remove({id: 'mekanism:rotary_condensentrator'})
  event.remove({id: 'mekanism:chemical_oxidizer'})
  event.remove({id: 'mekanism:chemical_infuser'})
  event.remove({id: 'mekanism:chemical_injection_chamber'})
  event.remove({id: 'mekanism:electrolytic_separator'})
  event.remove({id: 'mekanism:precision_sawmill'})
  event.remove({id: 'mekanism:chemical_dissolution_chamber'})
  event.remove({id: 'mekanism:chemical_washer'})
  event.remove({id: 'mekanism:chemical_crystallizer'})
  event.remove({id: 'mekanism:pressurized_reaction_chamber'})
  event.remove({id: 'mekanism:isotopic_centrifuge'})
  event.remove({id: 'mekanism:fluid_tank/basic'})
  event.remove({id: 'mekanism:energy_cube/basic'})
  event.remove({id: 'mekanism:transmitter/universal_cable/basic'})
  event.remove({id: 'mekanism:transmitter/mechanical_pipe/basic'})
  event.remove({id: 'mekanism:transmitter/pressurized_tube/basic'})
  event.remove({id: 'mekanism:transmitter/logistical_transporter/basic'})
  event.remove({id: 'mekanism:transmitter/thermodynamic_conductor/basic'})
  event.remove({id: 'mekanism:chemical_tank/basic'})
  event.remove({id: 'mekanism:tier_installer/basic'})
  event.remove({id: 'mekanism:tier_installer/advanced'})
  event.remove({id: 'mekanism:tier_installer/elite'})
  event.remove({id: 'mekanism:tier_installer/ultimate'})
  event.remove({id: 'mekanism:mekasuit_helmet'})
  event.remove({id: 'mekanism:mekasuit_bodyarmor'})
  event.remove({id: 'mekanism:mekasuit_pants'})
  event.remove({id: 'mekanism:mekasuit_boots'})
  event.remove({id: 'mekanism:hazmat_mask'})
  event.remove({id: 'mekanism:hazmat_gown'})
  event.remove({id: 'mekanism:hazmat_pants'})
  event.remove({id: 'mekanism:hazmat_boots'})
  event.remove({id: 'mekanism:digital_miner'})
  event.remove({id: 'mekanism:cardboard_box'})
  event.remove({output: 'mekanism:bio_fuel'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Cardboard Box
  event.shaped('mekanism:cardboard_box',
    ['121','131','111'], {
  1: '#forge:sawdust',
  2: 'create:super_glue',
	3: 'pneumaticcraft:printed_circuit_board'})

// Metallurgic Infuser
  event.shaped('mekanism:metallurgic_infuser',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_pity',
	4: 'minecraft:redstone_block',
  5: 'emendatusenigmatica:plasteel_plate'})

// Energized Smelter
  event.shaped('mekanism:energized_smelter',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'mekanism:basic_control_circuit',
  5: 'emendatusenigmatica:plasteel_plate'})

// Precision Sawmill
  event.shaped('mekanism:precision_sawmill',
    ['565','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'mekanism:basic_control_circuit',
  5: 'emendatusenigmatica:plasteel_plate',
  6: 'thermal:saw_blade'})

// Rotary Condensentrator
  event.shaped('mekanism:rotary_condensentrator',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'mekanism:basic_control_circuit',
  5: 'mekanism:basic_fluid_tank'})

// Chemical Oxidizer
  event.shaped('mekanism:chemical_oxidizer',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'mekanism:basic_chemical_tank',
  5: 'mekanism:basic_fluid_tank'})

// Chemical Infuser
  event.shaped('mekanism:chemical_infuser',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'mekanism:basic_chemical_tank',
  5: 'mekanism:basic_fluid_tank'})

// Enrichment Chamber
  event.shaped('mekanism:enrichment_chamber',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_plate',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'mekanism:basic_control_circuit',
  5: 'emendatusenigmatica:plasteel_plate'})

// Pressurized Reaction Chamber
  event.shaped('mekanism:pressurized_reaction_chamber',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_plate',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'mekanism:basic_control_circuit',
  5: 'mekanism:dynamic_tank'})

// Purification Chamber
  event.shaped('mekanism:purification_chamber',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'mekanism:alloy_infused',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'mekanism:advanced_control_circuit',
  5: 'emendatusenigmatica:plasteel_plate'})

// Crusher
  event.shaped('mekanism:crusher',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_simple',
	4: 'mekanism:basic_control_circuit',
  5: 'emendatusenigmatica:iron_plate'})

// Osmium Compressor
  event.shaped('mekanism:osmium_compressor',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'mekanism:advanced_control_circuit',
  5: 'mekanism:alloy_infused'})

// Electrolytic Separator
  event.shaped('mekanism:electrolytic_separator',
    ['565','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_advanced',
	4: 'mekanism:advanced_control_circuit',
  5: 'mekanism:alloy_infused',
  6: 'mekanism:electrolytic_core'})

// Combiner
  event.shaped('mekanism:combiner',
    ['555','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_supreme',
	4: 'mekanism:elite_control_circuit',
  5: 'mekanism:alloy_reinforced'})

// Chemical Injection Chamber
  event.shaped('mekanism:chemical_injection_chamber',
    ['565','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_supreme',
	4: 'mekanism:elite_control_circuit',
  5: 'mekanism:alloy_reinforced',
  6: 'mekanism:basic_chemical_tank'})

// Chemical Dissolution Chamber
  event.shaped('mekanism:chemical_dissolution_chamber',
    ['565','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_supreme',
	4: 'mekanism:ultimate_control_circuit',
  5: 'mekanism:ingot_refined_obsidian',
  6: 'mekanism:basic_chemical_tank'})

// Chemical Washer
  event.shaped('mekanism:chemical_washer',
    ['565','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_supreme',
	4: 'mekanism:ultimate_control_circuit',
  5: 'mekanism:ingot_refined_obsidian',
  6: 'mekanism:basic_fluid_tank'})

// Chemical Crystallizer
  event.shaped('mekanism:chemical_crystallizer',
    ['565','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_supreme',
	4: 'mekanism:ultimate_control_circuit',
  5: 'mekanism:ingot_refined_obsidian',
  6: 'emendatusenigmatica:fluorite_gem'})

// Isotopic Centrifuge
  event.shaped('mekanism:isotopic_centrifuge',
    ['565','232','414'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:plasteel_gear',
	3: 'industrialforegoing:machine_frame_supreme',
	4: 'mekanism:ultimate_control_circuit',
  5: 'mekanism:ingot_refined_obsidian',
  6: 'emendatusenigmatica:lead_ingot'})

// Basic Fluid Tank
  event.shaped('mekanism:basic_fluid_tank',
    ['323','212','323'], {
  1: 'pneumaticcraft:small_tank',
  2: 'minecraft:glass',
	3: 'emendatusenigmatica:iron_plate'})

// Basic Chemical Tank
  event.shaped('mekanism:basic_chemical_tank',
    ['323','212','323'], {
  1: 'pneumaticcraft:small_tank',
  2: 'emendatusenigmatica:steel_plate',
	3: 'emendatusenigmatica:plasteel_plate'})

// Basic Energy Cube
  event.shaped('mekanism:basic_energy_cube',
    ['323','212','323'], {
  1: 'industrialforegoing:machine_frame_advanced',
  2: 'minecraft:redstone',
	3: 'mekanism:energy_tablet'})

// Basic Universal Cable
  event.shaped('3x mekanism:basic_universal_cable',
    ['121','434','121'], {
  1: 'emendatusenigmatica:steel_rod',
  2: 'immersiveengineering:wire_electrum',
  3: 'minecraft:redstone',
  4: 'prettypipes:pipe'})

// Basic Mechanical Pipe
  event.shaped('3x mekanism:basic_mechanical_pipe',
    ['121','434','121'], {
  1: 'emendatusenigmatica:steel_rod',
  2: 'immersiveengineering:wire_electrum',
  3: 'minecraft:bucket',
  4: 'prettypipes:pipe'})

// Basic Pressurized Tube
  event.shaped('3x mekanism:basic_pressurized_tube',
    ['121','434','121'], {
  1: 'emendatusenigmatica:steel_rod',
  2: 'immersiveengineering:wire_electrum',
  3: 'pneumaticcraft:pressure_tube',
  4: 'prettypipes:pipe'})

// Basic Logisitical Transporter
  event.shaped('3x mekanism:basic_logistical_transporter',
    ['121','434','121'], {
  1: 'emendatusenigmatica:steel_rod',
  2: 'immersiveengineering:wire_electrum',
  3: 'mekanism:basic_control_circuit',
  4: 'prettypipes:pipe'})

// Basic Thermodynamic Conductor
  event.shaped('3x mekanism:basic_thermodynamic_conductor',
    ['121','434','121'], {
  1: 'emendatusenigmatica:steel_rod',
  2: 'immersiveengineering:wire_electrum',
  3: 'pneumaticcraft:vortex_tube',
  4: 'prettypipes:pipe'})

// Basic Tier Installer
  event.shaped('mekanism:basic_tier_installer',
    ['323','414','323'], {
  1: 'productivebees:upgrade_base',
  2: 'mekanism:basic_control_circuit',
  3: 'mekanism:alloy_infused',
  4: 'minecraft:diamond'})

// Advanced Tier Installer
  event.shaped('mekanism:advanced_tier_installer',
    ['323','414','323'], {
  1: 'productivebees:upgrade_base',
  2: 'mekanism:advanced_control_circuit',
  3: 'mekanism:alloy_infused',
  4: 'minecraft:diamond'})

// Elite Tier Installer
  event.shaped('mekanism:elite_tier_installer',
    ['323','414','323'], {
  1: 'productivebees:upgrade_base',
  2: 'mekanism:elite_control_circuit',
  3: 'mekanism:alloy_reinforced',
  4: 'minecraft:diamond'})

// Ultimate Tier Installer
  event.shaped('mekanism:ultimate_tier_installer',
    ['323','414','323'], {
  1: 'productivebees:upgrade_base',
  2: 'mekanism:ultimate_control_circuit',
  3: 'mekanism:alloy_atomic',
  4: 'minecraft:diamond'})

// MekaSuit Helmet
  event.shaped('mekanism:mekasuit_helmet',
    ['434','414','525'], {
  1: 'redstone_arsenal:flux_helmet',
  2: 'mekanism:basic_induction_cell',
  3: 'mekanism:ultimate_control_circuit',
  4: 'mekanism:hdpe_sheet',
  5: 'ars_nouveau:magebloom_fiber'})

// MekaSuit Chest
  event.shaped('mekanism:mekasuit_bodyarmor',
    ['434','414','525'], {
  1: 'redstone_arsenal:flux_chestplate',
  2: 'mekanism:basic_induction_cell',
  3: 'mekanism:ultimate_control_circuit',
  4: 'mekanism:hdpe_sheet',
  5: 'ars_nouveau:magebloom_fiber'})

// MekaSuit Legs
  event.shaped('mekanism:mekasuit_pants',
    ['434','414','525'], {
  1: 'redstone_arsenal:flux_leggings',
  2: 'mekanism:basic_induction_cell',
  3: 'mekanism:ultimate_control_circuit',
  4: 'mekanism:hdpe_sheet',
  5: 'ars_nouveau:magebloom_fiber'})

// MekaSuit Feet
  event.shaped('mekanism:mekasuit_boots',
    ['434','414','525'], {
  1: 'redstone_arsenal:flux_boots',
  2: 'mekanism:basic_induction_cell',
  3: 'mekanism:ultimate_control_circuit',
  4: 'mekanism:hdpe_sheet',
  5: 'ars_nouveau:magebloom_fiber'})

// Hazmat Mask
  event.shaped('mekanism:hazmat_mask',
    ['434','212','434'], {
  1: 'minecraft:leather_helmet',
  2: 'thermal:lead_plate',
  3: 'minecraft:orange_dye',
  4: 'totemic:buffalo_hide'})

// Hazmat Chest
  event.shaped('mekanism:hazmat_gown',
    ['434','212','434'], {
  1: 'minecraft:leather_chestplate',
  2: 'thermal:lead_plate',
  3: 'minecraft:orange_dye',
  4: 'totemic:buffalo_hide'})

// Hazmat Legs
  event.shaped('mekanism:hazmat_pants',
    ['434','212','434'], {
  1: 'minecraft:leather_leggings',
  2: 'thermal:lead_plate',
  3: 'minecraft:orange_dye',
  4: 'totemic:buffalo_hide'})

// Hazmat Feet
  event.shaped('mekanism:hazmat_boots',
    ['434','212','434'], {
  1: 'minecraft:leather_boots',
  2: 'thermal:lead_plate',
  3: 'minecraft:orange_dye',
  4: 'totemic:buffalo_hide'})

// Digital Miner
  event.shaped('mekanism:digital_miner',
    ['434','212','434'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'thermal:lead_plate',
  3: 'minecraft:orange_dye',
  4: 'totemic:buffalo_hide'})

// Bio Fuel Hand
  event.shapeless(Item.of('mekanism:bio_fuel'), ['thermal:phytogro', 'thermal:phytogro', 'thermal:phytogro', 'thermal:phytogro'])

// Biofuel Enrich
  event.custom({"type":"mekanism:enriching","input":{
    "amount":2,"ingredient":{"item":
    "thermal:phytogro"}},
    "output":{"count":3,"item":"mekanism:bio_fuel"}})

//    
})
//