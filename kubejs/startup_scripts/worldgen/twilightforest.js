////
// custom oregen for twilight forest
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// Iron
  event.addOre(ore => {
    ore.id = 'kubejs:iron_ore_gen_tf'
    ore.biomes = '#kubejs:twilightforest_gen_1'
    ore.addTarget('minecraft:stone', 'minecraft:iron_ore')
    ore.count([8, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-25),
        anchors.absolute(16)
      )
    ore.size = 10
  })

// Coal
  event.addOre(ore => {
    ore.id = 'kubejs:coal_ore_gen_tf'
    ore.biomes = '#kubejs:twilightforest_gen_2'
    ore.addTarget('minecraft:stone', 'minecraft:coal_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-18),
        anchors.absolute(12)
      )
    ore.size = 11
  })

// Nickel
  event.addOre(ore => {
    ore.id = 'kubejs:nickel_ore_gen_tf'
    ore.biomes = '#kubejs:twilightforest_gen_3'
    ore.addTarget('minecraft:stone', 'thermal:nickel_ore')
    ore.count([6, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-20),
        anchors.absolute(8)
      )
    ore.size = 4
  })

  // Poor Uraninite
    event.addOre(ore => {
      ore.id = 'kubejs:poor_uraninite_ore_gen_tf'
      ore.biomes = '#kubejs:twilightforest_gen_3'
      ore.addTarget('minecraft:stone', 'powah:uraninite_ore_poor')
      ore.count([8, 19])
        .squared()
        .triangleHeight(
          anchors.absolute(-26),
          anchors.absolute(-8)
        )
      ore.size = 5
    })

// Deepslate Silver
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_silver_ore_gen_tf'
    ore.biomes = '#kubejs:twilightforest_gen_3'
    ore.addTarget('minecraft:stone', 'thermal:deepslate_silver_ore')
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(-20),
        anchors.absolute(-2)
      )
    ore.size = 8
  })

// Deepslate Gold
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_gold_ore_gen_tf'
    ore.biomes = '#kubejs:twilightforest_gen_1'
    ore.addTarget('minecraft:stone', 'minecraft:deepslate_gold_ore')
    ore.count([6, 14])
      .squared()
      .triangleHeight(
        anchors.absolute(-28),
        anchors.absolute(-18)
      )
    ore.size = 7
  })

  // Rich Copper
  event.addOre(ore => {
    ore.id = 'kubejs:rich_copper_ore_gen_bz'
    ore.biomes = '#kubejs:twilightforest_gen_1'
    ore.addTarget('minecraft:stone', 'ad_astra:glacio_copper_ore')
    ore.count([4, 12])
      .squared()
      .triangleHeight(
        anchors.absolute(-16),
        anchors.absolute(14)
      )
    ore.size = 6
  })

//  
})
//