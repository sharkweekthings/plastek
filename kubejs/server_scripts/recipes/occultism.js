////
// occultism/theurgy
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'occultism:crafting/golden_sacrificial_bowl'})
  event.remove({id: 'occultism:crafting/sacrificial_bowl'})
  event.remove({id: 'occultism:crafting/divination_rod'})
  event.remove({id: 'occultism:crafting/butcher_knife'})
  event.remove({id: 'occultism:crafting/goggles'})
  event.remove({id: 'occultism:ritual/summon_afrit_crusher'})
  event.remove({id: 'occultism:ritual/summon_marid_crusher'})
  event.remove({id: 'occultism:crafting/chalk_gold_impure'})
  event.remove({id: 'theurgy:crafting/shaped/divination_rod_t1'})
  event.remove({id: 'theurgy:crafting/shaped/divination_rod_t2'})
  event.remove({id: 'theurgy:crafting/shaped/divination_rod_t3'})
  event.remove({id: 'theurgy:crafting/shaped/divination_rod_t4'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Book of Binding Foliot
  event.shaped('occultism:book_of_binding_foliot',
    ['243','212','343'], {
    1: 'minecraft:writable_book',
    2: 'occultism:purified_ink',
    3: 'mob_grinding_utils:solid_xp_baby',
    4: 'minecraft:white_dye'}).id('occultism:crafting/book_of_binding_foliot')

// Inert Storage Remote
  event.shaped('occultism:storage_remote_inert',
    ['131','212','222'], {
    1: 'emendatusenigmatica:electrum_plate',
    2: 'minecraft:stone_button',
    3: 'storagenetwork:inventory_remote'}).id('occultism:crafting/storage_remote_inert')

// Golden Sacrificial Bowl
  event.shaped('occultism:golden_sacrificial_bowl',
    ['212','131','212'], {
    1: 'emendatusenigmatica:gold_plate',
    2: 'minecraft:gold_ingot',
    3: 'occultism:sacrificial_bowl'}).id('occultism:crafting/golden_sacrificial_bowl')

// Sacrificial Bowl
  event.shaped('occultism:sacrificial_bowl',
    ['   ','1 1','232'], {
    1: 'occultism:otherstone',
    2: 'occultism:otherstone_slab',
    3: 'emendatusenigmatica:silver_plate'}).id('occultism:crafting/sacrificial_bowl')

// Occultism Rod
  event.shaped('occultism:butcher_knife',
    ['213','23 ','3  '], {
    1: 'emendatusenigmatica:iron_plate',
    2: 'emendatusenigmatica:silver_plate',
    3: 'immersiveengineering:stick_treated'}).id('occultism:crafting/butcher_knife')

// Otherworld Goggles
  event.shaped('occultism:otherworld_goggles',
    [' 2 ','131',' 4 '], {
    1: 'minecraft:leather',
    2: 'totemic:buffalo_hide',
    3: 'occultism:infused_lenses',
    4: 'occultism:lens_frame'}).id('occultism:crafting/goggles')

// Book of Binding: Djinni
  event.shaped('occultism:book_of_binding_djinni',
    ['124','232','424'], {
    1: 'occultism:purified_ink',
    2: 'minecraft:green_dye',
    3: 'minecraft:writable_book',
    4: 'botania:dragonstone'}).id('occultism:crafting/book_of_binding_djinni')

// Book of Binding: Afrit
  event.shaped('occultism:book_of_binding_afrit',
    ['124','232','424'], {
    1: 'occultism:purified_ink',
    2: 'minecraft:purple_dye',
    3: 'minecraft:writable_book',
    4: 'ae2:fluix_crystal'}).id('occultism:crafting/book_of_binding_afrit')

// Book of Binding: Marid
  event.shaped('occultism:book_of_binding_marid',
    ['124','232','424'], {
    1: 'occultism:purified_ink',
    2: 'minecraft:red_dye',
    3: 'minecraft:writable_book',
    4: 'powah:steel_energized'}).id('occultism:crafting/book_of_binding_marid')

// T1 Divination Rod
  event.shaped('theurgy:divination_rod_t1',
    ['243',' 31','3 2'], {
    1: '#forge:glass',
    2: 'minecraft:stick',
    3: 'emendatusenigmatica:copper_rod',
    4: 'minecraft:lapis_lazuli'}).id('theurgy:crafting/shaped/divination_rod_t1')

// T2 Divination Rod
  event.shaped('theurgy:divination_rod_t2',
    ['215',' 41','3 2'], {
    1: '#forge:glass',
    2: 'immersiveengineering:stick_treated',
    3: 'theurgy:divination_rod_t1',
    4: 'minecraft:amethyst_shard',
    5: 'emendatusenigmatica:gold_plate'}).id('occultism:crafting/divination_rod_t2')

// T3 Divination Rod
  event.shaped('theurgy:divination_rod_t3',
    ['214',' 41','3 2'], {
    1: '#forge:glass',
    2: 'immersiveengineering:stick_treated',
    3: 'theurgy:divination_rod_t2',
    4: 'minecraft:diamond'}).id('occultism:crafting/divination_rod_t3')

// Occultism Divination Rod
  event.shaped('occultism:divination_rod',
    ['215',' 41','3 2'], {
    1: '#forge:glass',
    2: 'immersiveengineering:stick_treated',
    3: 'theurgy:divination_rod_t3',
    4: 'minecraft:diamond',
    5: 'occultism:infused_lenses'}).id('occultism:crafting/divination_rod')

// Impure Golden Chalk
  event.shapeless(Item.of('occultism:chalk_gold_impure'), ['occultism:chalk_white_impure', 'emendatusenigmatica:gold_dust', 'emendatusenigmatica:gold_dust']).id('occultism:crafting/chalk_gold_impure')


//    
})
//