////
// functional storage
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'functionalstorage:collector_upgrade'})
  event.remove({id: 'functionalstorage:copper_upgrade'})
  event.remove({id: 'functionalstorage:gold_upgrade'})
  event.remove({id: 'functionalstorage:diamond_upgrade'})
  event.remove({id: 'functionalstorage:netherite_upgrade'})
  event.remove({id: 'functionalstorage:void_upgrade'})
  event.remove({id: 'functionalstorage:iron_downgrade'})
  event.remove({id: 'functionalstorage:puller_upgrade'})
  event.remove({id: 'functionalstorage:pusher_upgrade'})
  event.remove({id: 'functionalstorage:redstone_upgrade'})

//
})
//

//
ServerEvents.recipes(event => {
//

  //ADD

// Collector Upgrade
  event.shaped('functionalstorage:collector_upgrade',
    ['242','313','242'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'compressium:cobblestone_1',
    3: 'minecraft:redstone',
    4: 'minecraft:hopper'})

// Copper Upgrade
  event.shaped('functionalstorage:copper_upgrade',
    ['323','414','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:copper_block',
    3: 'emendatusenigmatica:copper_plate',
    4: 'minecraft:copper_ingot'})

// Gold Upgrade
  event.shaped('functionalstorage:gold_upgrade',
    ['323','414','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:gold_block',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:gold_ingot'})

// Diamond Upgrade
  event.shaped('functionalstorage:diamond_upgrade',
    ['323','212','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:diamond_block',
    3: 'minecraft:diamond'})

// Netherite Upgrade
  event.shaped('functionalstorage:netherite_upgrade',
    ['323','414','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:netherite_block',
    3: 'minecraft:netherite_ingot',
    4: 'thermal:netherite_plate'})

// Iron Downgrade
  event.shaped('functionalstorage:iron_downgrade',
    ['222','212','222'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:iron_ingot'})

// Puller Upgrade
  event.shaped('functionalstorage:puller_upgrade',
    ['242','212','232'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'compressium:stone_1',
    3: 'minecraft:redstone',
    4: 'minecraft:hopper'})

// Pusher Upgrade
  event.shaped('functionalstorage:pusher_upgrade',
    ['232','212','242'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'compressium:stone_1',
    3: 'minecraft:redstone',
    4: 'minecraft:hopper'})

// Void Upgrade
  event.shaped('functionalstorage:void_upgrade',
    ['222','212','222'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:obsidian'})

// Redstone Upgrade
  event.shaped('functionalstorage:redstone_upgrade',
    ['323','212','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:redstone', 
    3: 'minecraft:redstone_block'})

//    
})
//