////
// metal barrels recipes
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({output: 'metalbarrels:wood_to_copper'})
  event.remove({output: 'metalbarrels:copper_to_iron'})
  event.remove({output: 'metalbarrels:iron_to_silver'})
  event.remove({output: 'metalbarrels:silver_to_gold'})
  event.remove({output: 'metalbarrels:gold_to_diamond'})
  event.remove({output: 'metalbarrels:diamond_to_obsidian'})
  event.remove({output: 'metalbarrels:obsidian_to_netherite'})
  event.remove({output: 'metalbarrels:silver_to_diamond'})
  event.remove({output: 'metalbarrels:silver_to_netherite'})
  event.remove({output: 'metalbarrels:wood_to_netherite'})
  event.remove({output: 'metalbarrels:wood_to_obsidian'})
  event.remove({output: 'metalbarrels:wood_to_diamond'})
  event.remove({output: 'metalbarrels:iron_to_gold'})
  event.remove({output: 'metalbarrels:copper_to_obsidian'})
  event.remove({output: 'metalbarrels:copper_to_silver'})
  event.remove({output: 'metalbarrels:iron_to_diamond'})
  event.remove({output: 'metalbarrels:silver_to_obsidian'})
  event.remove({output: 'metalbarrels:copper_to_netherite'})
  event.remove({output: 'metalbarrels:gold_to_obsidian'})
  event.remove({output: 'metalbarrels:wood_to_gold'})
  event.remove({output: 'metalbarrels:gold_to_netherite'})
  event.remove({output: 'metalbarrels:iron_to_obsidian'})
  event.remove({output: 'metalbarrels:wood_to_silver'})
  event.remove({output: 'metalbarrels:iron_to_netherite'})
  event.remove({output: 'metalbarrels:wood_to_iron'})
  event.remove({output: 'metalbarrels:copper_to_gold'})
  event.remove({output: 'metalbarrels:copper_to_diamond'})
  event.remove({output: 'metalbarrels:diamond_to_netherite'})
  event.remove({output: 'metalbarrels:wood_to_crystal'})
  event.remove({output: 'metalbarrels:copper_to_crystal'})
  event.remove({output: 'metalbarrels:iron_to_crystal'})
  event.remove({output: 'metalbarrels:silver_to_crystal'})
  event.remove({output: 'metalbarrels:gold_to_crystal'})
  event.remove({output: 'metalbarrels:diamond_to_crystal'})
  event.remove({output: 'metalbarrels:crystal_barrel'})
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
    4: 'minecraft:barrel'})

// Iron Barrel
  event.shaped('metalbarrels:iron_barrel',
    ['333','141','323'], {
    1: 'minecraft:iron_ingot',
    2: 'minecraft:iron_block',
    3: 'emendatusenigmatica:iron_plate',
    4: 'metalbarrels:copper_barrel'})

// Silver Barrel
  event.shaped('metalbarrels:silver_barrel',
    ['333','141','323'], {
    1: 'emendatusenigmatica:silver_ingot',
    2: 'emendatusenigmatica:silver_block',
    3: 'emendatusenigmatica:silver_plate',
    4: 'metalbarrels:iron_barrel'})

// Gold Barrel
  event.shaped('metalbarrels:gold_barrel',
    ['333','141','323'], {
    1: 'minecraft:gold_ingot',
    2: 'minecraft:gold_block',
    3: 'emendatusenigmatica:gold_plate',
    4: 'metalbarrels:silver_barrel'})

// Diamond Barrel
  event.shaped('metalbarrels:diamond_barrel',
    ['131','323','131'], {
    1: 'compressium:diamond_1',
    2: 'metalbarrels:gold_barrel',
    3: 'minecraft:diamond'})

// Obsidian Barrel
  event.shaped('metalbarrels:obsidian_barrel',
    ['131','323','131'], {
    1: 'compressium:obsidian_1',
    2: 'metalbarrels:diamond_barrel',
    3: 'minecraft:crying_obsidian'})

// Netherite Barrel
  event.shaped('metalbarrels:netherite_barrel',
    ['131','323','131'], {
    1: 'compressium:netherite_1',
    2: 'metalbarrels:obsidian_barrel',
    3: 'minecraft:netherite_ingot'})

// Wood to Copper Upgrade
  event.shaped('metalbarrels:wood_to_copper',
    ['333','1 1','323'], {
    1: 'minecraft:copper_ingot',
    2: 'minecraft:copper_block',
    3: 'emendatusenigmatica:copper_plate'})

// Copper to Iron Upgrade
  event.shaped('metalbarrels:copper_to_iron',
    ['333','1 1','323'], {
    1: 'minecraft:iron_ingot',
    2: 'minecraft:iron_block',
    3: 'emendatusenigmatica:iron_plate'})

// Iron to Silver Upgrade
  event.shaped('metalbarrels:iron_to_silver',
    ['333','1 1','323'], {
    1: 'emendatusenigmatica:silver_ingot',
    2: 'emendatusenigmatica:silver_block',
    3: 'emendatusenigmatica:silver_plate'})

// Silver to Gold Upgrade
  event.shaped('metalbarrels:silver_to_gold',
    ['333','1 1','323'], {
    1: 'minecraft:gold_ingot',
    2: 'minecraft:gold_block',
    3: 'emendatusenigmatica:gold_plate'})

// Gold to Diamond Upgrade
  event.shaped('metalbarrels:gold_to_diamond',
    ['121','2 2','121'], {
    1: 'compressium:diamond_1',
    2: 'minecraft:diamond'})

// Diamond to Obsidian Upgrade
  event.shaped('metalbarrels:diamond_to_obsidian',
    ['121','2 2','121'], {
    1: 'compressium:obsidian_1',
    2: 'minecraft:crying_obsidian'})

// Obsidian to Netherite Upgrade
  event.shaped('metalbarrels:obsidian_to_netherite',
    ['121','2 2','121'], {
    1: 'compressium:netherite_1',
    2: 'minecraft:netherite_ingot'})

//    
})
//