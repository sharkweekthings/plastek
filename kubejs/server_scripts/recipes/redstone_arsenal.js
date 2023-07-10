////
// redstone arsenal
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'redstone_arsenal:materials/flux_gem'})
  event.remove({id: 'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'})
  event.remove({id: 'redstone_arsenal:smelting/flux_ingot_from_dust_blasting'})
  event.remove({id: 'redstone_arsenal:smelting/flux_ingot_from_dust_smelting'})
  event.remove({id: 'redstone_arsenal:materials/flux_dust'})
  event.remove({id: 'redstone_arsenal:materials/flux_gear'})
  event.remove({id: 'redstone_arsenal:materials/obsidian_rod'})
  event.remove({id: 'redstone_arsenal:flux_helmet'})
  event.remove({id: 'redstone_arsenal:flux_chestplate'})
  event.remove({id: 'redstone_arsenal:flux_leggings'})
  event.remove({id: 'redstone_arsenal:flux_boots'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Flux Gem
  event.shaped('redstone_arsenal:flux_gem',
    ['121','111','343'], {
    1: 'minecraft:diamond',
    2: 'minecraft:redstone',
    3: 'emendatusenigmatica:cinnabar_dust',
    4: 'emendatusenigmatica:steel_dust'})

// Flux-Infused Dust
  event.shaped('redstone_arsenal:flux_dust',
    ['222','111','343'], {
    1: 'emendatusenigmatica:electrum_dust',
    2: 'minecraft:redstone',
    3: 'emendatusenigmatica:cinnabar_dust',
    4: 'emendatusenigmatica:steel_dust'})

// Flux-Infused Gear
  event.shaped('redstone_arsenal:flux_gear',
    [' 1 ','121',' 1 '], {
    1: 'redstone_arsenal:flux_ingot',
    2: 'create:shaft'})

// Obsidian Rod
  event.shaped('redstone_arsenal:obsidian_rod',
    ['  1',' 2 ','1  '], {
    1: 'minecraft:obsidian',
    2: 'emendatusenigmatica:steel_rod'})

// Flux Infused Helmet
  event.shaped('redstone_arsenal:flux_helmet',
    [' 2 ','232','414'], {
  1: 'thermal:hazmat_helmet',
  2: 'redstone_arsenal:flux_gem',
	3: 'redstone_arsenal:flux_obsidian_rod',
  4: 'redstone_arsenal:flux_plating'})

// Flux Infused Chestplate
  event.shaped('redstone_arsenal:flux_chestplate',
    ['343','212','444'], {
  1: 'thermal:hazmat_chestplate',
  2: 'redstone_arsenal:flux_gem',
	3: 'redstone_arsenal:flux_obsidian_rod',
  4: 'redstone_arsenal:flux_plating'})

// Flux Infused Leggings
  event.shaped('redstone_arsenal:flux_leggings',
    ['424','414','3 3'], {
  1: 'thermal:hazmat_leggings',
  2: 'redstone_arsenal:flux_gem',
	3: 'redstone_arsenal:flux_obsidian_rod',
  4: 'redstone_arsenal:flux_plating'})

// Flux Infused Boots
  event.shaped('redstone_arsenal:flux_boots',
    [' 2 ','434','414'], {
  1: 'thermal:hazmat_boots',
  2: 'redstone_arsenal:flux_gem',
	3: 'redstone_arsenal:flux_obsidian_rod',
  4: 'redstone_arsenal:flux_plating'})

// Flux Ingot
  event.custom({"type":"immersiveengineering:arc_furnace",
"additives":[{"item":"minecraft:redstone"}],
"energy":51200,
"input":{"item":"redstone_arsenal:flux_dust"},
"results":[{"base_ingredient":{"item":"redstone_arsenal:flux_ingot"},"count":1}],"time":100})

// Flux Ingot
  event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "minecraft:redstone",
      "count": 1
    },
    {
      "item": "redstone_arsenal:flux_dust",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "redstone_arsenal:flux_ingot",
      "count": 2
    }
  ],
  "energy": 12000
})

//    
})
//