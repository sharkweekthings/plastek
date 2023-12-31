////
// metal barrels recipes
//// renik

// wood to copper > copper to iron > iron to silver > silver to gold > gold to diamond > diamond to obsidian > obsidian to netherite

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'metalbarrels:upgrades/nested/wood_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/wood_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/copper_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/iron_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/silver_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/gold_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/wood_to_diamond_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/copper_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/iron_to_diamond_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/silver_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/gold_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/wood_to_gold_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/iron_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/wood_to_silver_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/copper_to_gold_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/nested/copper_to_gold_upgrade2'})
  event.remove({id: 'metalbarrels:upgrades/nested/copper_to_diamond_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_obsidian/wood_to_obsidian'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_obsidian/wood_to_obsidian2'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_diamond/wood_to_diamond'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_diamond/wood_to_diamond2'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_diamond/wood_to_diamond5'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_diamond/wood_to_diamond4'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_diamond/wood_to_diamond3'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_gold/wood_to_gold'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_gold/wood_to_gold2'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_gold/wood_to_gold3'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_gold/wood_to_gold4'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_gold/wood_to_gold5'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_gold/wood_to_gold6'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_gold/wood_to_gold7'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_silver/wood_to_silver'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_silver/wood_to_silver2'})
  event.remove({id: 'metalbarrels:upgrades/combine_upgrades/wood_to_silver/wood_to_silver3'})
  event.remove({id: 'metalbarrels:upgrades/silver_to_diamond_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/silver_to_netherite_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/wood_to_netherite_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/wood_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/wood_to_diamond_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/iron_to_gold_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/copper_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/copper_to_silver_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/iron_to_diamond_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/silver_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/copper_to_netherite_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/gold_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/wood_to_gold_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/gold_to_netherite_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/iron_to_obsidian_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/wood_to_silver_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/iron_to_netherite_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/wood_to_iron_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/copper_to_gold_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/upgrades/copper_to_diamond_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/diamond_to_netherite_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/wood_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/copper_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/iron_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/silver_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/gold_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/diamond_to_crystal_upgrade'})
  event.remove({id: 'metalbarrels:upgrades/crystal_barrel'})
  event.remove({id: 'metalbarrels:barrels/wood_to_copper_barrel'})
  event.remove({id: 'metalbarrels:barrels/copper_to_iron_barrel'})
  event.remove({id: 'metalbarrels:barrels/iron_to_silver_barrel'})
  event.remove({id: 'metalbarrels:barrels/silver_to_gold_barrel'})
  event.remove({id: 'metalbarrels:barrels/gold_to_diamond_barrel'})
  event.remove({id: 'metalbarrels:barrels/diamond_to_obsidian_barrel'})
  event.remove({id: 'metalbarrels:barrels/obsidian_to_netherite_barrel'})
  event.remove({id: 'metalbarrels:barrels/wood_to_iron_barrel'})
  event.remove({id: 'metalbarrels:barrels/iron_to_gold_barrel'})
  event.remove({id: 'metalbarrels:barrels/wood_to_gold_barrel'})
  event.remove({id: 'metalbarrels:barrels/silver_to_diamond_barrel'})
  event.remove({id: 'metalbarrels:upgrades/combine/wood_to_iron'})
  event.remove({id: 'metalbarrels:upgrades/combine/copper_to_silver'})
  event.remove({id: 'metalbarrels:upgrades/combine/wood_to_silver'})
  event.remove({id: 'metalbarrels:upgrades/combine/copper_to_gold'})
  event.remove({id: 'metalbarrels:upgrades/combine/wood_to_gold'})
  event.remove({id: 'metalbarrels:upgrades/combine/iron_to_gold'})
  event.remove({id: 'metalbarrels:upgrades/combine/silver_to_diamond'})
  event.remove({id: 'metalbarrels:upgrades/combine/iron_to_diamond'})
  event.remove({id: 'metalbarrels:upgrades/combine/copper_to_diamond'})
  event.remove({id: 'metalbarrels:upgrades/combine/wood_to_diamond'})
  event.remove({id: 'metalbarrels:upgrades/combine/gold_to_obsidian'})
  event.remove({id: 'metalbarrels:upgrades/combine/wood_to_obsidian'})
  event.remove({id: 'metalbarrels:upgrades/combine/copper_to_obsidian'})
  event.remove({id: 'metalbarrels:upgrades/combine/iron_to_obsidian'})
  event.remove({id: 'metalbarrels:upgrades/combine/silver_to_obsidian'})
  event.remove({id: 'metalbarrels:upgrades/combine/gold_to_netherite'})
  event.remove({id: 'metalbarrels:upgrades/combine/wood_to_netherite'})
  event.remove({id: 'metalbarrels:upgrades/combine/copper_to_netherite'})
  event.remove({id: 'metalbarrels:upgrades/combine/iron_to_netherite'})
  event.remove({id: 'metalbarrels:upgrades/combine/silver_to_netherite'})
  event.remove({id: 'metalbarrels:upgrades/combine/diamond_to_netherite'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Copper Barrel
  event.shaped('metalbarrels:copper_barrel',
    ['333','141','323'], {
    1: 'minecraft:copper_ingot',
    2: 'minecraft:copper_block',
    3: 'emendatusenigmatica:copper_plate',
    4: 'minecraft:barrel'}).id('metalbarrels:copper_barrel')

// Iron Barrel
  event.shaped('metalbarrels:iron_barrel',
    ['333','141','323'], {
    1: 'minecraft:iron_ingot',
    2: 'minecraft:iron_block',
    3: 'emendatusenigmatica:iron_plate',
    4: 'metalbarrels:copper_barrel'}).id('metalbarrels:iron_barrel')

// Silver Barrel
  event.shaped('metalbarrels:silver_barrel',
    ['333','141','323'], {
    1: 'emendatusenigmatica:silver_ingot',
    2: 'emendatusenigmatica:silver_block',
    3: 'emendatusenigmatica:silver_plate',
    4: 'metalbarrels:iron_barrel'}).id('metalbarrels:silver_barrel')

// Gold Barrel
  event.shaped('metalbarrels:gold_barrel',
    ['333','141','323'], {
    1: 'minecraft:gold_ingot',
    2: 'minecraft:gold_block',
    3: 'emendatusenigmatica:gold_plate',
    4: 'metalbarrels:silver_barrel'}).id('metalbarrels:gold_barrel')

// Diamond Barrel
  event.shaped('metalbarrels:diamond_barrel',
    ['111','121','131'], {
    1: 'minecraft:diamond',
    2: 'metalbarrels:gold_barrel',
    3: 'minecraft:diamond_block'}).id('metalbarrels:diamond_barrel')

// Obsidian Barrel
  event.shaped('metalbarrels:obsidian_barrel',
    ['111','121','131'], {
    1: 'minecraft:obsidian',
    2: 'metalbarrels:diamond_barrel',
    3: 'compressium:obsidian_1'}).id('metalbarrels:obsidian_barrel')

// Netherite Barrel
  event.shaped('metalbarrels:netherite_barrel',
    ['111','121','131'], {
    1: 'minecraft:netherite_ingot',
    2: 'metalbarrels:obsidian_barrel',
    3: 'minecraft:netherite_block'}).id('metalbarrels:netherite_barrel')

// Wood to Copper Upgrade
  event.shaped('metalbarrels:wood_to_copper',
    ['333','1 1','323'], {
    1: 'minecraft:copper_ingot',
    2: 'minecraft:copper_block',
    3: 'emendatusenigmatica:copper_plate'}).id('metalbarrels:upgrades/wood_to_copper_upgrade')

// Copper to Iron Upgrade
  event.shaped('metalbarrels:copper_to_iron',
    ['333','1 1','323'], {
    1: 'minecraft:iron_ingot',
    2: 'minecraft:iron_block',
    3: 'emendatusenigmatica:iron_plate'}).id('metalbarrels:upgrades/copper_to_iron_upgrade')

// Iron to Silver Upgrade
  event.shaped('metalbarrels:iron_to_silver',
    ['333','1 1','323'], {
    1: 'emendatusenigmatica:silver_ingot',
    2: 'emendatusenigmatica:silver_block',
    3: 'emendatusenigmatica:silver_plate'}).id('metalbarrels:upgrades/iron_to_silver_upgrade')

// Silver to Gold Upgrade
  event.shaped('metalbarrels:silver_to_gold',
    ['333','1 1','323'], {
    1: 'minecraft:gold_ingot',
    2: 'minecraft:gold_block',
    3: 'emendatusenigmatica:gold_plate'}).id('metalbarrels:upgrades/silver_to_gold_upgrade')

// Gold to Diamond Upgrade
  event.shaped('metalbarrels:gold_to_diamond',
    ['111','1 1','121'], {
    1: 'minecraft:diamond',
    2: 'minecraft:diamond_block'}).id('metalbarrels:upgrades/gold_to_diamond_upgrade')

// Diamond to Obsidian Upgrade
  event.shaped('metalbarrels:diamond_to_obsidian',
    ['222','2 2','212'], {
    1: 'compressium:obsidian_1',
    2: 'minecraft:obsidian'}).id('metalbarrels:upgrades/diamond_to_obsidian_upgrade')

// Obsidian to Netherite Upgrade
  event.shaped('metalbarrels:obsidian_to_netherite',
    ['222','2 2','212'], {
    1: 'minecraft:netherite_block',
    2: 'minecraft:netherite_ingot'}).id('metalbarrels:upgrades/obsidian_to_netherite_upgrade')

//    
})
//