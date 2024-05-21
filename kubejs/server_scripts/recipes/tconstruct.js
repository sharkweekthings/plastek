////
// tinkers construct
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'tconstruct:small_axe_head_sand_cast'})
  event.remove({id: 'tconstruct:broad_axe_head_red_sand_cast'})
  event.remove({id: 'tconstruct:wire_sand_cast'})
  event.remove({id: 'tconstruct:rod_red_sand_cast'})
  event.remove({id: 'tconstruct:rod_sand_cast'})
  event.remove({id: 'tconstruct:bow_grip_red_sand_cast'})
  event.remove({id: 'tconstruct:round_plate_red_sand_cast'})
  event.remove({id: 'tconstruct:small_axe_head_red_sand_cast'})
  event.remove({id: 'tconstruct:broad_blade_red_sand_cast'})
  event.remove({id: 'tconstruct:large_plate_red_sand_cast'})
  event.remove({id: 'tconstruct:gem_red_sand_cast'})
  event.remove({id: 'tconstruct:coin_red_sand_cast'})
  event.remove({id: 'tconstruct:tool_handle_sand_cast'})
  event.remove({id: 'tconstruct:blank_sand_cast'})
  event.remove({id: 'tconstruct:repair_kit_red_sand_cast'})
  event.remove({id: 'tconstruct:nugget_red_sand_cast'})
  event.remove({id: 'tconstruct:tool_binding_sand_cast'})
  event.remove({id: 'tconstruct:plate_red_sand_cast'})
  event.remove({id: 'tconstruct:bow_grip_sand_cast'})
  event.remove({id: 'tconstruct:tough_handle_sand_cast'})
  event.remove({id: 'tconstruct:hammer_head_sand_cast'})
  event.remove({id: 'tconstruct:round_plate_sand_cast'})
  event.remove({id: 'tconstruct:coin_sand_cast'})
  event.remove({id: 'tconstruct:pick_head_red_sand_cast'})
  event.remove({id: 'tconstruct:blank_red_sand_cast'})
  event.remove({id: 'tconstruct:tool_handle_red_sand_cast'})
  event.remove({id: 'tconstruct:gear_sand_cast'})
  event.remove({id: 'tconstruct:pick_head_sand_cast'})
  event.remove({id: 'tconstruct:bow_limb_sand_cast'})
  event.remove({id: 'tconstruct:bow_limb_red_sand_cast'})
  event.remove({id: 'tconstruct:repair_kit_sand_cast'})
  event.remove({id: 'tconstruct:broad_blade_sand_cast'})
  event.remove({id: 'tconstruct:broad_axe_head_sand_cast'})
  event.remove({id: 'tconstruct:hammer_head_red_sand_cast'})
  event.remove({id: 'tconstruct:tool_binding_red_sand_cast'})
  event.remove({id: 'tconstruct:tough_handle_red_sand_cast'})
  event.remove({id: 'tconstruct:small_blade_red_sand_cast'})
  event.remove({id: 'tconstruct:gem_sand_cast'})
  event.remove({id: 'tconstruct:nugget_sand_cast'})
  event.remove({id: 'tconstruct:gear_red_sand_cast'})
  event.remove({id: 'tconstruct:plate_sand_cast'})
  event.remove({id: 'tconstruct:large_plate_sand_cast'})
  event.remove({id: 'tconstruct:wire_red_sand_cast'})
  event.remove({id: 'tconstruct:small_blade_sand_cast'})
	event.remove({id: 'tconstruct:small_blade_cast'})
	event.remove({id: 'tconstruct:gem_cast'})
	event.remove({id: 'tconstruct:tool_handle_cast'})
	event.remove({id: 'tconstruct:plate_cast'})
	event.remove({id: 'tconstruct:repair_kit_cast'})
	event.remove({id: 'tconstruct:gear_cast'})
	event.remove({id: 'tconstruct:broad_blade_cast'})
	event.remove({id: 'tconstruct:wire_cast'})
	event.remove({id: 'tconstruct:tough_handle_cast'})
	event.remove({id: 'tconstruct:bow_limb_cast'})
	event.remove({id: 'tconstruct:round_plate_cast'})
	event.remove({id: 'tconstruct:rod_cast'})
	event.remove({id: 'tconstruct:large_plate_cast'})
	event.remove({id: 'tconstruct:hammer_head_cast'})
	event.remove({id: 'tconstruct:pick_head_cast'})
	event.remove({id: 'tconstruct:bow_grip_cast'})
	event.remove({id: 'tconstruct:coin_cast'})
	event.remove({id: 'tconstruct:tool_binding_cast'})
	event.remove({id: 'tconstruct:broad_axe_head_cast'})
	event.remove({id: 'tconstruct:small_axe_head_cast'})	
	event.remove({id: 'tconstruct:smeltery/casting/scorched/brick_composite'})	
	event.remove({id: 'tconstruct:smeltery/seared/grout_multiple'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Grout
  event.shaped('2x tconstruct:grout',
    ['232','414','232'], {
    1: 'minecraft:gravel', 
    2: '#minecraft:sand',
    3: 'minecraft:clay_ball',
    4: 'minecraft:bone_meal'}).id('tconstruct:smeltery/seared/grout')

// Nether Grout
  event.shaped('2x tconstruct:nether_grout',
    ['232','414','232'], {
    1: 'tconstruct:grout', 
    2: 'minecraft:soul_sand',
    3: 'minecraft:magma_cream',
    4: 'minecraft:netherrack'}).id('tconstruct:smeltery/scorched/nether_grout')

// Piggy Backpack
  event.shaped('tconstruct:piggy_backpack',
    ['343','121','333'], {
    1: 'tconstruct:slimesteel_ingot', 
    2: 'industrialforegoing:mob_imprisonment_tool',
    3: '#forge:leather',
    4: 'tconstruct:pig_iron_ingot'}).id('tconstruct:gadgets/piggy_backpack')

//    
})
//