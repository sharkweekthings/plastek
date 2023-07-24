////
// custom oregen for mercury
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// TOP

  // Coal
  event.addOre(ore => {
    ore.id = 'kubejs:coal_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'ad_astra:venus_coal_ore')
    ore.count([12, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(-5),
        anchors.absolute(90)
      )
    ore.size = 8
  })

  // Prosperity
  event.addOre(ore => {
    ore.id = 'kubejs:prosperity_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'mysticalagradditions:end_prosperity_ore')
    ore.count([12, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(76),
        anchors.absolute(98)
      )
    ore.size = 8
  })
  
  // Iron
  event.addOre(ore => {
    ore.id = 'kubejs:iron_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'ad_astra:mercury_iron_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(64),
        anchors.absolute(112)
      )
    ore.size = 8
  }) 

// MID

  // Sulfur
  event.addOre(ore => {
    ore.id = 'kubejs:sulfur_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'thermal:sulfur_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(50),
        anchors.absolute(130)
      )
    ore.size = 7
  }) 

  // Inferium
  event.addOre(ore => {
    ore.id = 'kubejs:inferium_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'mysticalagradditions:end_inferium_ore')
    ore.count([8, 26])
      .squared()
      .triangleHeight(
        anchors.absolute(64),
        anchors.absolute(82)
      )
    ore.size = 9
  })

  // Cinnabar
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_cinnabar_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'thermal:deepslate_cinnabar_ore')
    ore.count([9, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(28),
        anchors.absolute(56)
      )
    ore.size = 8
  })  
  
  // Weekonium
  event.addOre(ore => {
    ore.id = 'kubejs:weekonium_ore_gen_vs'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'emendatusenigmatica:weekonium_stone_ore')
    ore.count([7, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-32),
        anchors.absolute(42)
      )
    ore.size = 9
  })

  // Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:diamond_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'minecraft:diamond_ore')
    ore.count([12, 35])
      .squared()
      .triangleHeight(
        anchors.absolute(-34),
        anchors.absolute(72)
      )
    ore.size = 6
  }) 

// LOW

  // Obsidian
  event.addOre(ore => {
    ore.id = 'kubejs:obsidian_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'minecraft:obsidian')
    ore.count([8, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-32),
        anchors.absolute(10)
      )
    ore.size = 7
  })

  // Crying Obsidian
  event.addOre(ore => {
    ore.id = 'kubejs:crying_obsidian_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'minecraft:crying_obsidian')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-48),
        anchors.absolute(-22)
      )
    ore.size = 6
  })

  // Uraninite Ore
  event.addOre(ore => {
    ore.id = 'kubejs:uraninite_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'powah:uraninite_ore')
    ore.count([9, 24])
      .squared()
      .triangleHeight(
        anchors.absolute(-60),
        anchors.absolute(-44)
      )
    ore.size = 4
  })

  // Deepslate Desh
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_desh_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'ad_astra:deepslate_desh_ore')
    ore.count([7, 19])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-26)
      )
    ore.size = 8
  }) 

  // Deepslate Ostrum
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_ostrum_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'ad_astra:deepslate_ostrum_ore')
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-38)
      )
    ore.size = 9
  }) 

  // Deepslate Fluorite
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_fluorite_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'mekanism:deepslate_fluorite_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(-36),
        anchors.absolute(42)
      )
    ore.size = 6
  }) 

  // Deepslate Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_diamond_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'minecraft:deepslate_diamond_ore')
    ore.count([8, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-32)
      )
    ore.size = 8
  }) 

  // Soulium
  event.addOre(ore => {
    ore.id = 'kubejs:soulium_ore_gen_mrc'
    ore.biomes = '#kubejs:mercury_gen'
    ore.addTarget('ad_astra:mercury_stone', 'mysticalagriculture:soulium_ore')
    ore.count([9, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(-56),
        anchors.absolute(-44)
      )
    ore.size = 8
  }) 

//
})
//