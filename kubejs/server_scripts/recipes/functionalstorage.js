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
  event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
  event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
  event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})

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
    4: 'minecraft:hopper'}).id('functionalstorage:collector_upgrade')

// Copper Upgrade
  event.shaped('functionalstorage:copper_upgrade',
    ['323','414','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:copper_block',
    3: 'emendatusenigmatica:copper_plate',
    4: 'minecraft:copper_ingot'}).id('functionalstorage:copper_upgrade')

// Gold Upgrade
  event.shaped('functionalstorage:gold_upgrade',
    ['323','414','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:gold_block',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:gold_ingot'}).id('functionalstorage:gold_upgrade')

// Diamond Upgrade
  event.shaped('functionalstorage:diamond_upgrade',
    ['323','212','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:diamond_block',
    3: 'minecraft:diamond'}).id('functionalstorage:diamond_upgrade')

// Netherite Upgrade
  event.shaped('functionalstorage:netherite_upgrade',
    ['323','414','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:netherite_block',
    3: 'minecraft:netherite_ingot',
    4: 'thermal:netherite_plate'}).id('functionalstorage:netherite_upgrade')

// Iron Downgrade
  event.shaped('functionalstorage:iron_downgrade',
    ['222','212','222'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:iron_ingot'}).id('functionalstorage:iron_downgrade')

// Puller Upgrade
  event.shaped('functionalstorage:puller_upgrade',
    ['242','212','232'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'compressium:stone_1',
    3: 'minecraft:redstone',
    4: 'minecraft:hopper'}).id('functionalstorage:puller_upgrade')

// Pusher Upgrade
  event.shaped('functionalstorage:pusher_upgrade',
    ['232','212','242'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'compressium:stone_1',
    3: 'minecraft:redstone',
    4: 'minecraft:hopper'}).id('functionalstorage:pusher_upgrade')

// Void Upgrade
  event.shaped('functionalstorage:void_upgrade',
    ['222','212','222'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:obsidian'}).id('functionalstorage:void_upgrade')

// Redstone Upgrade
  event.shaped('functionalstorage:redstone_upgrade',
    ['323','212','323'], {
    1: 'sophisticatedbackpacks:upgrade_base', 
    2: 'minecraft:redstone', 
    3: 'minecraft:redstone_block'}).id('functionalstorage:redstone_upgrade')

//    
})
//