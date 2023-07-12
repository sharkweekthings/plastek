////
// new items created for the pack
//// renik

const $EnderpearlItem = Java.loadClass('net.minecraft.world.item.EnderpearlItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const CreativeModeTab = Java.loadClass('net.minecraft.world.item.CreativeModeTab')

StartupEvents.registry('item', e => {
  e.custom("crude_ender_pearl", new $EnderpearlItem(new  $IProperties().tab(CreativeModeTab.TAB_MISC)))
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
  e.create('gouald_crystal')
  e.create('damaged_crystal_housing_unit')
  e.create('crystal_housing_unit')
  e.create('zpm_housing_unit')
  e.create('damaged_zpm_housing_unit')
  e.create('repaired_zpm_housing_unit')
  e.create('incomplete_green_board')
  e.create('green_board')
  e.create('advanced_pressure_tube_parts')
  e.create('empty_parts_box')
  e.create('empty_pcb_parts')
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
})

StartupEvents.registry('block', e => {

// ONLY WORKS WITH PAXEL DIAMOND+ PAXEL?? >_<
  e.create('nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
  e.create('infused_nether_stone').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')


})