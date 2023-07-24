////
// custom oregen for glacio
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// TOP LEVEL PERMAFROST

// Coal Ore
  event.addOre(ore => {
    ore.id = 'kubejs:coal_ore_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('ad_astra:permafrost', 'ad_astra:glacio_coal_ore')
    ore.count([10, 30])
      .squared()
      .triangleHeight(
        anchors.absolute(90),
        anchors.absolute(120)
      )
    ore.size = 9
  })

// Sulfur Ore
  event.addOre(ore => {
    ore.id = 'kubejs:sulfur_ore_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('ad_astra:permafrost', 'thermal:deepslate_sulfur_ore')
    ore.count([5, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(90),
        anchors.absolute(120)
      )
    ore.size = 9
  })

// TOP TO BOTTOM  

// Ice Shard
  event.addOre(ore => {
    ore.id = 'kubejs:ice_shard_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('ad_astra:glacio_stone', 'ad_astra:glacio_ice_shard_ore')
    ore.count([20, 50])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(90)
      )
    ore.size = 9
  })

// TOP LEVEL UNDER PERMAFROST

// Iron Ore
  event.addOre(ore => {
    ore.id = 'kubejs:iron_ore_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('ad_astra:glacio_stone', 'ad_astra:glacio_iron_ore')
    ore.count([10, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(0),
        anchors.absolute(90)
      )
    ore.size = 30
  })

// Lapis
  event.addOre(ore => {
    ore.id = 'kubejs:lapis_ore_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('ad_astra:glacio_stone', 'ad_astra:glacio_lapis_ore')
    ore.count([15, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(0),
        anchors.absolute(90)
      )
    ore.size = 25
  })

// Prosperity
  event.addOre(ore => {
    ore.id = 'kubejs:prosperity_ore_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('ad_astra:glacio_stone', 'mysticalagradditions:nether_prosperity_ore')
    ore.count([15, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(0),
        anchors.absolute(90)
      )
    ore.size = 30
  })

// MID LEVEL

// Uraninite Ore
  event.addOre(ore => {
    ore.id = 'kubejs:uraninite_ore_dense_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'powah:uraninite_ore_dense')
    ore.count([10, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-20),
        anchors.absolute(8)
      )
    ore.size = 9
  })

// Dimensional Shard
  event.addOre(ore => {
    ore.id = 'kubejs:dimensional_shard_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'rftoolsbase:dimensionalshard_overworld')
    ore.count([10, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-20),
        anchors.absolute(4)
      )
    ore.size = 9
  })

// Charged Certus Quartz
  event.addOre(ore => {
    ore.id = 'kubejs:charged_certus_quartz_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'emendatusenigmatica:charged_certus_quartz_mercury_stone_ore')
    ore.count([10, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-28),
        anchors.absolute(8)
      )
    ore.size = 9
  })

// Sharkinite
  event.addOre(ore => {
    ore.id = 'kubejs:charged_sharkinite_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'emendatusenigmatica:sharkinite_deepslate_ore')
    ore.count([1, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-42),
        anchors.absolute(6)
      )
    ore.size = 9
  })

// LOW

// Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:diamond_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'ad_astra:mars_diamond_ore')
    ore.count([10, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-38)
      )
    ore.size = 9
  })

// Deepslate Uraninite
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_uraninite_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore_dense')
    ore.count([15, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(-50),
        anchors.absolute(-22)
      )
    ore.size = 9
  })

// Source
  event.addOre(ore => {
    ore.id = 'kubejs:source_deepslate_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'emendatusenigmatica:source_deepslate_ore')
    ore.count([10, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-20)
      )
    ore.size = 9
  })

// Certus Quartz
  event.addOre(ore => {
    ore.id = 'kubejs:certus_quartz_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'emendatusenigmatica:certus_quartz_blackstone_ore')
    ore.count([10, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-48),
        anchors.absolute(-18)
      )
    ore.size = 9
  })

// Deepslate Inferium
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_inferium_gen_gl'
    ore.biomes = '#kubejs:glacio_gen'
    ore.addTarget('minecraft:deepslate', 'mysticalagriculture:deepslate_inferium_ore')
    ore.count([5, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-48)
      )
    ore.size = 9
  })




//
})
//