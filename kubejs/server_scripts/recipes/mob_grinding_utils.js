////
// mob grinding utils
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'mob_grinding_utils:recipe_fan_upgrade_width'})
  event.remove({id: 'mob_grinding_utils:recipe_fan_upgrade_height'})
  event.remove({id: 'mob_grinding_utils:recipe_fan_upgrade_speed'})
  event.remove({id: 'mob_grinding_utils:spawner_upgrade_width'})
  event.remove({id: 'mob_grinding_utils:spawner_upgrade_height'})
  event.remove({id: 'mob_grinding_utils:recipe_fan'})
  event.remove({id: 'mob_grinding_utils:recipe_entity_conveyor'})
  event.remove({id: 'mob_grinding_utils:recipe_entity_spawner'})
  event.remove({id: 'mob_grinding_utils:recipe_mob_swab'})
  event.remove({id: 'mob_grinding_utils:recipe_spikes'})
  event.remove({id: 'mob_grinding_utils:recipe_solidifier'})
  event.remove({id: 'mob_grinding_utils:recipe_mould_reset'})
  event.remove({id: 'mob_grinding_utils:recipe_mould_blank'})
  event.remove({id: 'mob_grinding_utils:recipe_absorbtion_hopper'})
  event.remove({id: 'mob_grinding_utils:recipe_saw'})
  event.remove({id: 'mob_grinding_utils:recipe_xp_tap'})
  event.remove({id: 'mob_grinding_utils:recipe_mould_baby_upgrade'})
  event.remove({id: 'mob_grinding_utils:recipe_absorbtion_upgrade'})
  event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_arthropod'})
  event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_beheading'})
  event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_fire'})
  event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_looting'})
  event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness'})
  event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_smite'})
  event.remove({id: 'mob_grinding_utils:recipe_xpsolidifier_upgrade'})
  event.remove({id: 'mob_grinding_utils:gm_chicken_feed'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Iron Spikes
  event.shaped('mob_grinding_utils:spikes',
    ['323','212','333'], {
    1: 'minecraft:iron_block',
    2: 'minecraft:iron_sword',
    3: 'emendatusenigmatica:iron_plate'}).id('mob_grinding_utils:recipe_spikes')

// XP Solidifier
  event.shaped('mob_grinding_utils:xpsolidifier',
    ['444','434','121'], {
    1: 'minecraft:piston',
    2: 'mob_grinding_utils:tank',
    3: 'minecraft:hopper',
    4: 'emendatusenigmatica:iron_plate'}).id('mob_grinding_utils:recipe_solidifier')

// XP Mould Blank
  event.shaped('mob_grinding_utils:solid_xp_mould_blank',
    ['323','212','323'], {
    1: 'mob_grinding_utils:fluid_xp_bucket',
    2: 'emendatusenigmatica:gold_plate',
    3: 'emendatusenigmatica:copper_plate'}).id('mob_grinding_utils:recipe_mould_blank')

// Absorption Hopper
  event.shaped('mob_grinding_utils:absorption_hopper',
    ['222','232','111'], {
    1: 'minecraft:hopper',
    2: 'emendatusenigmatica:iron_plate',
    3: 'minecraft:diamond_block'}).id('mob_grinding_utils:recipe_absorbtion_hopper')

// Mob Masher
  event.shaped('mob_grinding_utils:saw',
    ['434','212','323'], {
    1: 'minecraft:diamond_block',
    2: 'mob_grinding_utils:spikes',
    3: 'create:shaft',
    4: 'minecraft:diamond'}).id('mob_grinding_utils:recipe_saw')

// XP Tap
  event.shaped('mob_grinding_utils:xp_tap',
    ['34 ','21 ','2  '], {
    1: 'minecraft:emerald',
    2: 'emendatusenigmatica:iron_plate',
    3: 'minecraft:diamond_block',
    4: 'create:cogwheel'}).id('mob_grinding_utils:recipe_xp_tap')

// Absorbtion Upgrade
  event.shaped('mob_grinding_utils:absorption_upgrade',
    ['444','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:ender_pearl',
    5: 'minecraft:hopper'}).id('mob_grinding_utils:recipe_absorbtion_upgrade')

// Arthropod Upgrade
  event.shaped('mob_grinding_utils:saw_upgrade_arthropod',
    ['333','212','434'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:spider_eye'}).id('mob_grinding_utils:recipe_saw_upgrade_arthropod')

// Beheading Upgrade
  event.shaped('mob_grinding_utils:saw_upgrade_beheading',
    ['444','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:iron_helmet',
    5: 'minecraft:diamond_helmet'}).id('mob_grinding_utils:recipe_saw_upgrade_beheading')

// Fire Upgrade
  event.shaped('mob_grinding_utils:saw_upgrade_fire',
    ['444','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:flint_and_steel',
    5: 'minecraft:redstone_block'}).id('mob_grinding_utils:recipe_saw_upgrade_fire')

// Looting Upgrade
  event.shaped('mob_grinding_utils:saw_upgrade_looting',
    ['444','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:chest',
    5: 'functionalstorage:oak_1'}).id('mob_grinding_utils:recipe_saw_upgrade_looting')

// Sharpness Upgrade
  event.shaped('mob_grinding_utils:saw_upgrade_sharpness',
    ['444','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:iron_sword',
    5: 'minecraft:diamond_sword'}).id('mob_grinding_utils:recipe_saw_upgrade_sharpness')

// Smite Upgrade
  event.shaped('mob_grinding_utils:saw_upgrade_smite',
    ['444','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:netherite_sword',
    5: 'minecraft:diamond_sword'}).id('mob_grinding_utils:recipe_saw_upgrade_smite')

// Solidifier Upgrade
  event.shaped('mob_grinding_utils:xp_solidifier_upgrade',
    ['444','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'minecraft:sugar',
    5: 'minecraft:blaze_powder'}).id('mob_grinding_utils:recipe_xpsolidifier_upgrade')

// Fan Upgrade Speed Upgrade
  event.shaped('mob_grinding_utils:fan_upgrade_speed',
    ['545','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'minecraft:blaze_powder'}).id('mob_grinding_utils:recipe_fan_upgrade_speed')

// Fan Upgrade Height Upgrade
  event.shaped('mob_grinding_utils:fan_upgrade_height',
    ['545','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'immersiveengineering:treated_fence'}).id('mob_grinding_utils:recipe_fan_upgrade_height')

// Fan Upgrade Width Upgrade
  event.shaped('mob_grinding_utils:fan_upgrade_width',
    ['545','212','535'], {
    1: 'mob_grinding_utils:solid_xp_mould_blank',
    2: 'minecraft:diamond',
    3: 'emendatusenigmatica:gold_plate',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'pamhc2foodextended:frosteddonutitem'}).id('mob_grinding_utils:recipe_fan_upgrade_width')

// GM Chicken Feed
  event.shaped('mob_grinding_utils:gm_chicken_feed',
    ['222','121','222'], {
    1: 'mob_grinding_utils:fluid_xp_bucket',
    2: '#forge:seeds'}).id('mob_grinding_utils:gm_chicken_feed')

// Mob Fan
  event.shaped('mob_grinding_utils:fan',
    ['333','313','323'], {
    1: 'industrialforegoing:machine_frame_supreme',
    2: 'ad_astra:engine_fan',
    3: 'mekanism:hdpe_sheet'}).id('mob_grinding_utils:recipe_fan')


// XP Mould Baby
  event.custom({
    "type": "create:pressing", "ingredients": [{"item": "mob_grinding_utils:solid_xp_mould_blank","count": 1}],
      "results": [{"item": "mob_grinding_utils:solid_xp_mould_baby"}]
  }).id('mob_grinding_utils:solid_xp_mould_baby')

//    
})
//