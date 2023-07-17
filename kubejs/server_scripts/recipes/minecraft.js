
////
// minecraft
//// renik


//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({output: 'minecraft:chest'})
  event.remove({output: 'minecraft:ender_chest'})
  event.remove({output: 'minecraft:barrel'})
  event.remove({output: 'minecraft:furnace'})
  event.remove({output: 'minecraft:shears'})
  event.remove({output: 'minecraft:compass'})
  event.remove({output: 'minecraft:clock'})
  event.remove({id: 'explorerscompass:explorers_compass'})
  event.remove({id: 'naturescompass:natures_compass'})
  event.remove({id: 'minecraft:bone_meal'})
  event.remove({id: 'minecraft:bone_meal_from_bone_block'})
  event.remove({id: 'minecraft:leather'})
  event.remove({id: 'minecraft:leather_helmet'})
  event.remove({id: 'minecraft:leather_chestplate'})
  event.remove({id: 'minecraft:leather_leggings'})
  event.remove({id: 'minecraft:leather_boots'})
  event.remove({id: 'minecraft:hopper'})
  event.remove({id: 'minecraft:dispenser'})
  event.remove({id: 'minecraft:dropper'})
  event.remove({output: 'minecraft:wooden_sword'})
  event.remove({output: 'minecraft:wooden_shovel'})
  event.remove({output: 'minecraft:wooden_pickaxe'})
  event.remove({output: 'minecraft:wooden_axe'})
  event.remove({output: 'minecraft:wooden_hoe'})
  event.remove({output: 'minecraft:stone_sword'})
  event.remove({output: 'minecraft:stone_shovel'})
  event.remove({output: 'minecraft:stone_pickaxe'})
  event.remove({output: 'minecraft:stone_axe'})
  event.remove({output: 'minecraft:stone_hoe'})
  event.remove({id: 'minecraft:green_stained_glass'})
  event.remove({id: 'quark:tweaks/crafting/green_glass'})
  event.remove({id: 'connectedglass:vanilla_green_stained_glass'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Chest
  event.shaped('minecraft:chest',
    ['111','121','111'], {
    1: '#forge:treated_wood', 
    2: '#minecraft:trapdoors'})
    
// Ender Chest
  event.shaped('minecraft:ender_chest',
    ['323','212','323'], {
    1: '#forge:chests', 
    2: 'minecraft:ender_pearl',
    3: 'botania:terrasteel_ingot'})

// Barrel    
  event.shaped('minecraft:barrel', 
    ['121','111','111'], {
    1: '#forge:treated_wood', 
    2: '#minecraft:trapdoors'})

// Furnace     
  event.shaped('minecraft:furnace', 
    ['111','121','111'], {
    1: 'compressium:cobblestone_2',
    2: 'compressium:coal_2'})
   
// Shears   
  event.shaped('minecraft:shears', 
    [' 1 ',' 21','2  '], {
    1: 'minecraft:gold_ingot',
    2: 'minecraft:stick'})
    
// Clock  
  event.shaped('minecraft:clock', 
    ['212','131','212'], {
    1: 'emendatusenigmatica:gold_plate',
    2: 'emendatusenigmatica:gold_dust',
    3: 'emendatusenigmatica:gold_rod'})
    
// Compass    
  event.shaped('minecraft:compass', 
    ['212','131','212'], {
    1: 'emendatusenigmatica:iron_plate',
    2: 'emendatusenigmatica:iron_dust',
    3: 'minecraft:clock'})
   
// Natures Compass (CHANGE)   
  event.shaped('naturescompass:naturescompass', 
    ['212','131','212'], {
    1: 'rootsclassic:verdant_sprig',
    2: '#rootsclassic:barks',
    3: 'minecraft:compass'})
    
// Explorers Compass (CHANGE)  
  event.shaped('explorerscompass:explorerscompass', 
    ['212','131','212'], {
    1: 'compressium:stone_2',
    2: 'minecraft:bone_meal',
    3: 'minecraft:compass'})
   
// Stone Hoe   
  event.shaped('minecraft:stone_hoe', 
    ['11 ',' 2 ',' 2 '], {
    1: '#forge:pebbles',
    2: 'minecraft:stick'})
   
// Leather Helmet  
  event.shaped('minecraft:leather_helmet', 
    ['   ','111','1 1'], {
    1: 'silentgear:leather_scrap'})
    
// Leather Chestplate  
  event.shaped('minecraft:leather_chestplate', 
    ['1 1','111','111'], {
    1: 'silentgear:leather_scrap'})
   
// Leather Leggings   
  event.shaped('minecraft:leather_leggings', 
    ['111','1 1','1 1'], {
    1: 'silentgear:leather_scrap'})
   
// Leather Boots   
  event.shaped('minecraft:leather_boots', 
    ['   ','1 1','1 1'], {
    1: 'silentgear:leather_scrap'})
    
// Hopper  
  event.shaped('minecraft:hopper', 
    ['1 1','121',' 1 '], {
    1: 'minecraft:iron_ingot',
    2: 'woodenhopper:wooden_hopper'})
    
// Dispenser  
  event.shaped('minecraft:dispenser', 
    ['111','121','111'], {
    1: 'compressium:stone_2',
    2: 'minecraft:dropper'})
    
// Dropper  
  event.shaped('minecraft:dropper', 
    ['111','121','111'], {
    1: 'compressium:stone_2',
    2: 'woodenhopper:wooden_hopper'})

// Green Stained Glass
  event.shaped('2x minecraft:green_stained_glass',
    ['323','212','323'], {
    1: 'pneumaticcraft:plastic',
    2: 'immersiveengineering:insulating_glass',
    3: 'minecraft:glass'})

// Leather + Raw Rabbit = Rabbit Hide  
  event.shapeless(Item.of('minecraft:rabbit_hide'), ['minecraft:leather', 'minecraft:rabbit'])

//    
})
//