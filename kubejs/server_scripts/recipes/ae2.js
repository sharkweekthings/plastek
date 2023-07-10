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
  7: 'ae2:fluix_crystal'})
  
// Charger
  event.shaped('ae2:charger',
    ['545','637','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_pity',
	4: '#energeticsheep:wool_energetic',
	5: 'pneumaticcraft:plastic',
  6: 'ae2:fluix_crystal',
  7: 'prettypipes:blank_module'})
  
// ME Controller
  event.shaped('ae2:controller',
    ['212','131','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_supreme'})
  
// ME Drive
  event.shaped('ae2:drive',
    ['242','536','212'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'emendatusenigmatica:steel_plate',
	3: 'industrialforegoing:machine_frame_simple',
  4: 'pneumaticcraft:plastic',
  5: 'ae2:certus_quartz_crystal',
  6: 'ae2:fluix_crystal'})
  
// Blank Pattern
  event.shaped('ae2:blank_pattern',
    ['222','132','222'], {
  1: 'ae2:charged_certus_quartz_crystal',
  2: 'pneumaticcraft:plastic',
	3: 'ae2:quartz_glass'})
  
// Quartz Glass
  event.shaped('ae2:quartz_glass',
    ['212','121','212'], {
  1: '#forge:glass',
  2: 'ae2:certus_quartz_crystal'})


//    
})
//