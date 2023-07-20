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
  event.remove({id: 'occultism:crafting/book_of_binding_bound_djinni'})
  event.remove({output: 'occultism:book_of_binding_djinni'})
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
    4: 'botania:dragonstone'}).id('occultism:crafting/book_of_binding_bound_djinni')

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