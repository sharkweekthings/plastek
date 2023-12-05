////
// immersive engineering
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_iron'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_iron'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_gold'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
  event.remove({id: 'immersiveengineering:crafting/ersatz_leather'})
  event.remove({id: 'immersiveengineering:crafting/cokebrick'})
  event.remove({id: 'immersiveengineering:crafting/blastbrick'})
  event.remove({id: 'immersiveengineering:crafting/alloybrick'})
  event.remove({id: 'immersiveengineering:crafting/workbench'})
  event.remove({id: 'immersiveengineering:crafting/workbench'})
  event.remove({id: 'immersiveengineering:crafting/component_iron'})
  event.remove({id: 'immersiveengineering:crafting/component_steel'})
  event.remove({id: 'create:blasting/ingot_aluminum_compat_immersiveengineering'})
  event.remove({id: 'immersiveengineering:smelting/ingot_aluminum_from_blasting'})
  event.remove({id: 'emendatusenigmatica:ingot/from_dust/blasting/aluminum'})
  event.remove({id: 'emendatusenigmatica:ingot/from_raw/blasting/aluminum'})
  event.remove({id: 'emendatusenigmatica:ingot/from_raw/smelting/aluminum'})
  event.remove({id: 'create:smelting/ingot_aluminum_compat_immersiveengineering'})
  event.remove({id: 'immersiveengineering:smelting/ingot_aluminum'})
  event.remove({id: 'emendatusenigmatica:ingot/from_dust/smelting/aluminum'})
  event.remove({id: 'immersiveengineering:crafting/conveyor_basic'})
  event.remove({id: 'immersiveengineering:crafting/conveyor_vertical'})
  event.remove({id: 'immersiveengineering:crafting/conveyor_splitter'})
  event.remove({id: 'immersiveengineering:crafting/stick_steel'})
  event.remove({id: 'immersiveengineering:arcfurnace/raw_ore_aluminum'})
  event.remove({id: 'immersiveengineering:arcfurnace/ore_aluminum'})
  event.remove({id: 'immersiveengineering:crafting/plate_iron_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_desh_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_calorite_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_silver_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_gold_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_electrum_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_ostrum_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_uranium_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_copper_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_nickel_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_lead_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_constantan_hammering'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_zinc'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_silver'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_nickel'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_copper'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_tin'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_lead'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_uranium'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_aluminum'})
  event.remove({id: 'immersiveengineering:crafting/raw_hammercrushing_osmium'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_zinc'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_osmium'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_nickel'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_lead'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_silver'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_uranium'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_tin'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_copper'})
  event.remove({id: 'immersiveengineering:crafting/wire_aluminum'})
  event.remove({id: 'immersiveengineering:crafting/wire_steel'})
  event.remove({id: 'immersiveengineering:crafting/wire_lead'})
  event.remove({id: 'immersiveengineering:crafting/wire_electrum'})
  event.remove({id: 'immersiveengineering:crafting/electrum_mix'})
  event.remove({id: 'immersiveengineering:crafting/craftingtable'})
  event.remove({id: 'immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum'})
  event.remove({id: 'immersiveengineering:metalpress/gear_plasteel'})
  event.remove({id: 'immersiveengineering:arcfurnace/raw_block_aluminum'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Engineer's Crafting Table 
  event.shaped('immersiveengineering:craftingtable',
    ['313','343','232'], {
    1: '#forge:treated_wood_slab', 
    2: '#forge:rods/treated_wood',
    3: 'emendatusenigmatica:iron_plate',
    4: 'minecraft:crafting_table'}).id('immersiveengineering:crafting/craftingtable')

// Coke Brick
  event.shaped('immersiveengineering:cokebrick',
    ['121','131','121'], {
    1: 'minecraft:clay_ball', 
    2: 'supplementaries:ash_brick',
    3: '#forge:concrete'}).id('immersiveengineering:crafting/cokebrick')

// Blast Brick
  event.shaped('immersiveengineering:blastbrick',
    ['121','434','121'], {
    1: 'minecraft:nether_brick', 
    2: 'supplementaries:ash_brick',
    3: 'ad_astra:desh_plate',
    4: '#forge:concrete'}).id('immersiveengineering:crafting/blastbrick')

// Alloy Brick
  event.shaped('immersiveengineering:alloybrick',
    ['343','212','343'], {
    1: 'emendatusenigmatica:steel_block', 
    2: 'supplementaries:ash_brick',
    3: 'ad_astra:desh_plate',
    4: '#forge:concrete'}).id('immersiveengineering:crafting/alloybrick')

// Engineers Workbench
  event.shaped('immersiveengineering:workbench',
    ['   ','122','453'], {
    1: 'emendatusenigmatica:steel_ingot', 
    2: '#forge:treated_wood_slab',
    3: 'immersiveengineering:treated_fence',
    4: 'immersiveengineering:craftingtable',
    5: 'create:precision_mechanism'}).id('immersiveengineering:crafting/workbench')

// Conveyor Basic
  event.shaped('immersiveengineering:conveyor_basic',
    ['353','323','141'], {
    1: 'create:shaft',
    2: 'ad_astra:ostrum_plate',
	  3: 'emendatusenigmatica:iron_rod',
	  4: 'pneumaticcraft:plastic',
    5: '#forge:leather'}).id('immersiveengineering:crafting/conveyor_basic')

// Thermoelectric Generator
  event.shaped('immersiveengineering:thermoelectric_generator',
    ['343','121','151'], {
    1: 'emendatusenigmatica:steel_plate',
    2: 'immersiveengineering:coil_lv',
	  3: 'emendatusenigmatica:constantan_plate',
	  4: 'pneumaticcraft:plastic',
    5: '#energeticsheep:wool_energetic'}).id('immersiveengineering:crafting/thermoelectric_generator')

// Conveyor Vertical
  event.shaped('immersiveengineering:conveyor_vertical',
    ['1  ','1  ','1  '], {
    1: 'immersiveengineering:conveyor_basic'}).id('immersiveengineering:crafting/conveyor_vertical')

// Conveyor Splitter
  event.shaped('immersiveengineering:conveyor_splitter',
    ['222','121',' 1 '], {
    1: 'immersiveengineering:conveyor_basic',
	  2: 'emendatusenigmatica:iron_plate'}).id('immersiveengineering:crafting/conveyor_splitter')

// Core Sample Drill
  event.shaped('immersiveengineering:sample_drill',
    ['131','434','232'], {
    1: 'immersiveengineering:steel_scaffolding_standard',
	  2: 'immersiveengineering:light_engineering',
    3: 'immersiveengineering:steel_fence',
    4: 'redstone_arsenal:flux_ingot'}).id('immersiveengineering:crafting/sample_drill')



// Components Blueprint
  event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), ['minecraft:copper_ingot', 'emendatusenigmatica:steel_ingot', 'minecraft:iron_ingot', 'minecraft:blue_dye', 'minecraft:blue_dye', 'minecraft:blue_dye', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper'])


// Ersatz Leather
  event.shapeless(Item. of('immersiveengineering:ersatz_leather'), ['minecraft:leather', 'immersiveengineering:hemp_fabric']).id('immersiveengineering:crafting/ersatz_leather').id('immersiveengineering:crafting/blueprint_components')
    

//    
})
//