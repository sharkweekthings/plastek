////
// new items created for the pack
//// renik

const $EnderpearlItem = Java.loadClass('net.minecraft.world.item.EnderpearlItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const CreativeModeTab = Java.loadClass('net.minecraft.world.item.CreativeModeTab')

StartupEvents.registry('item', e => {
  e.createCustom("crude_ender_pearl", () => new $EnderpearlItem(new $IProperties().tab(CreativeModeTab.TAB_MISC)))
  // e.custom("crude_ender_pearl", new $EnderpearlItem(new  $IProperties().tab(CreativeModeTab.TAB_MISC)))
  e.create('durable_rawhide')
  e.create('durable_mallable_hide')
  e.create('rawhide')
  e.create('mallable_hide')
  e.create('cheap_plastic_tank')
  e.create('cheap_plastic_engine')
  e.create('cheap_plastic_rocket_nose_cone')
  e.create('cheap_plastic_rocket_fin')
  e.create('mason_jar')
  e.create('empty_heart_of_the_deep')
  e.create('infused_eye_of_ender')
  e.create('zpm')
  e.create('goauld_crystal')
  e.create('damaged_crystal_housing_unit')
  e.create('crystal_housing_unit')
  e.create('damaged_zpm_housing_unit')
  e.create('repaired_zpm_housing_unit')
  e.create('charged_zpm_housing_unit')
  e.create('depleted_zpm_housing_unit')
  e.create('incomplete_green_board')
  e.create('green_board')
  e.create('advanced_pressure_tube_parts')
  e.create('empty_parts_box')
  e.create('empty_pcb_parts')
  e.create('time_in_a_bottle_parts')
  e.create('netherite_drill_bit_parts')
  e.create('pressure_chamber_valve_parts')
  e.create('compression_dynamo_parts')
  e.create('dissolution_chamber_parts')
  e.create('fluid_cell_parts')
  e.create('gourmand_dynamo_parts')
  e.create('loot_fabricator_parts')
  e.create('pneumatic_dynamo_parts')
  e.create('simulation_chamber_parts')
  e.create('stirling_dynamo_parts')
  e.create('digital_miner_parts')
  e.create('empty_prediction_parts')
  e.create('energy_cable_starter_parts')
  e.create('energizing_rod_starter_parts')
  e.create('energizing_orb_parts')
  e.create('ender_gate_starter_parts')
  e.create('player_transmitter_starter_parts')
  e.create('bee_stinger_amber')
  e.create('empty_alfheim_package')
  e.create('fire_dragonforge_core_package')
  e.create('ice_dragonforge_core_package')
  e.create('lightning_dragonforge_core_package')
  e.create('magical_note')
  e.create('bow_grip_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/bow_grip')
  e.create('bow_limb_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/bow_limb')
  e.create('broad_axe_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/broad_axe_head')
  e.create('broad_blade_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/broad_blade')
  e.create('coin_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/coin')
  e.create('gear_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/gear')
  e.create('gem_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/gem')
  e.create('hammer_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/hammer_head')
  e.create('large_plate_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/large_plate')
  e.create('pick_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/pick_head')
  e.create('repair_kit_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/repair_kit')
  e.create('rod_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/rod')
  e.create('round_plate_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/round_plate')
  e.create('small_axe_head_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/small_axe_head')
  e.create('small_blade_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/small_blade')
  e.create('tool_binding_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/tool_binding')
  e.create('tool_handle_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/tool_handle')
  e.create('chestplate_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/chestplate_plating')
  e.create('helmet_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/helmet_plating')
  e.create('leggings_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/leggings_plating')
  e.create('boots_plating_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/boots_plating')
  e.create('maille_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/maille')
  e.create('tough_tool_handle_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/tough_handle')
  e.create('wire_steel_cast').tag('tconstruct:casts/multi_use').tag('tconstruct:casts/multi_use/wire')
})

StartupEvents.registry('block', e => {

// NO IDEA WHY THIS ONLY WORKS WITH DIAMOND PAXEL OR AXE+
  e.create('nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
  e.create('infused_nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
})