////
// custom oregen for bumblezone
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// TOP

   // Deepslate Lapis
   event.addOre(ore => {
    ore.id = 'kubejs:deepslate_top_lapis_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_1'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:deepslate_lapis_ore')
    ore.count([7, 14])
      .squared()
      .triangleHeight(
        anchors.absolute(218),
        anchors.absolute(248)
      )
    ore.size = 8
   })

  // Deepslate Copper
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_top_copper_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_2'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:deepslate_copper_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(228),
        anchors.absolute(246)
      )
    ore.size = 7
   })

  // Deepslate Top Gold
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_top_gold_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_1'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:deepslate_gold_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(182),
        anchors.absolute(224)
      )
    ore.size = 6
  })

  // Glowstone
  event.addOre(ore => {
    ore.id = 'kubejs:glowstone_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_1'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:glowstone')
    ore.count([12, 30])
      .squared()
      .triangleHeight(
        anchors.absolute(102),
        anchors.absolute(236)
      )
    ore.size = 8
   })

// MID

  // Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:diamond_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_2'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:diamond_ore')
    ore.count([3, 8])
      .squared()
      .triangleHeight(
        anchors.absolute(108),
        anchors.absolute(168)
      )
    ore.size = 7
  })

  // Gold
  event.addOre(ore => {
    ore.id = 'kubejs:gold_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_1'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:gold_ore')
    ore.count([12, 40])
      .squared()
      .triangleHeight(
        anchors.absolute(56),
        anchors.absolute(138)
      )
    ore.size = 7
  })

  // Copper
  event.addOre(ore => {
    ore.id = 'kubejs:copper_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_1'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:copper_ore')
    ore.count([12, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(54),
        anchors.absolute(98)
      )
    ore.size = 8
   })

   // Silver
   event.addOre(ore => {
     ore.id = 'kubejs:silver_ore_gen_bz'
     ore.biomes = '#kubejs:bumblezone_gen_1'
     ore.addTarget('minecraft:honeycomb_block', 'thermal:silver_ore')
     ore.count([9, 17])
       .squared()
       .triangleHeight(
         anchors.absolute(174),
         anchors.absolute(198)
       )
     ore.size = 8
    })

   // Deepslate Lapis
   event.addOre(ore => {
     ore.id = 'kubejs:deepslate_lapis_mid_ore_gen_bz'
     ore.biomes = '#kubejs:bumblezone_gen_1'
     ore.addTarget('minecraft:honeycomb_block', 'minecraft:deepslate_lapis_ore')
     ore.count([12, 22])
       .squared()
       .triangleHeight(
         anchors.absolute(88),
         anchors.absolute(118)
       )
     ore.size = 7
    })

// LOWER

  // Deepslate Copper
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_copper_bot_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_2'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:deepslate_copper_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(6),
        anchors.absolute(82)
      )
    ore.size = 8
   })

// Deepslate Gold
event.addOre(ore => {
  ore.id = 'kubejs:deepslate_gold_bot_ore_gen_bz'
  ore.biomes = '#kubejs:bumblezone_gen_1'
  ore.addTarget('minecraft:honeycomb_block', 'minecraft:deepslate_gold_ore')
  ore.count([8, 20])
    .squared()
    .triangleHeight(
      anchors.absolute(0),
      anchors.absolute(32)
    )
  ore.size = 5
 })

   // Deepslate Lapis
   event.addOre(ore => {
    ore.id = 'kubejs:deepslate_lapis_bot_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_1'
    ore.addTarget('minecraft:honeycomb_block', 'minecraft:deepslate_lapis_ore')
    ore.count([8, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(28),
        anchors.absolute(46)
      )
    ore.size = 8
   })

   // Prosperity
   event.addOre(ore => {
    ore.id = 'kubejs:prosperity_bot_ore_gen_bz'
    ore.biomes = '#kubejs:bumblezone_gen_1'
    ore.addTarget('minecraft:honeycomb_block', 'mysticalagriculture:prosperity_ore')
    ore.count([12, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(8),
        anchors.absolute(20)
      )
    ore.size = 8
   })

//
})
//