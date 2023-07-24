////
// custom oregen for mars
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// TOP

  // Niter  
  event.addOre(ore => {
    ore.id = 'kubejs:niter_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1', '#kubejs:mars_gen_2'
    ore.addTarget('ad_astra:mars_stone', 'thermal:niter_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(32),
        anchors.absolute(138)
      )
    ore.size = 11
  })

  // Prosperity  
  event.addOre(ore => {
    ore.id = 'kubejs:prosperity_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1', '#kubejs:mars_gen_2'
    ore.addTarget('ad_astra:mars_stone', 'mysticalagradditions:end_prosperity_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(32),
        anchors.absolute(64)
      )
    ore.size = 11
  })

  // Inferium  
  event.addOre(ore => {
    ore.id = 'kubejs:inferium_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1', '#kubejs:mars_gen_2'
    ore.addTarget('ad_astra:mars_stone', 'mysticalagradditions:end_inferium_ore')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(46),
        anchors.absolute(74)
      )
    ore.size = 11
  })

  // Redstone
  event.addOre(ore => {
    ore.id = 'kubejs:redstone_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'minecraft:redstone_ore')
    ore.count([8, 28])
      .squared()
      .triangleHeight(
        anchors.absolute(36),
        anchors.absolute(124)
      )
    ore.size = 7
  })

// MID - -30 to 60

  // Osmium
  event.addOre(ore => {
    ore.id = 'kubejs:osmium_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1', '#kubejs:mars_gen_2'
    ore.addTarget('ad_astra:mars_stone', 'mekanism:osmium_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-18),
        anchors.absolute(84)
      )
    ore.size = 9
  })

  // Ice Shard
  event.addOre(ore => {
    ore.id = 'kubejs:ice_shard_gen_ms'
    ore.biomes = '#kubejs:mars_gen_2'
    ore.addTarget('ad_astra:mars_stone', 'ad_astra:mars_ice_shard_ore') 
    ore.count([13, 40])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(132)
      )
    ore.size = 13
  })

  // Coal
  event.addOre(ore => {
    ore.id = 'kubejs:coal_gen_ms'
    ore.biomes = '#kubejs:mars_gen_2'
    ore.addTarget('ad_astra:mars_stone', 'ad_astra:venus_coal_ore') 
    ore.count([13, 28])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(132)
      )
    ore.size = 13
  })

// BOTTOM -64 to 0

  // Deepslate Redstone
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_redstone_gen_ms' 
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'minecraft:deepslate_redstone_ore') 
    ore.count([8, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(32)
      )
    ore.size = 8
  })

  // Lead
  event.addOre(ore => {
    ore.id = 'kubejs:lead_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'thermal:lead_ore')
    ore.count([8, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(72)
      )
    ore.size = 9
  })

  // Ostrum
  event.addOre(ore => {
    ore.id = 'kubejs:ostrum_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'ad_astra:mars_ostrum_ore') 
    ore.count([5, 13])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(28)
      )
    ore.size = 6
  })

  // Elementium
  event.addOre(ore => {
    ore.id = 'kubejs:elementium_ore_gen_ah'
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'mythicbotany:elementium_ore')
    ore.count([7, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(22),
        anchors.absolute(64)
      )
    ore.size = 5
  })

// Deepslate Coal
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_coal_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'minecraft:deepslate_coal_ore') 
    ore.count([12, 24])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-28)
      )
    ore.size = 11
  })

// Deepslate Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_diamond_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'minecraft:deepslate_diamond_ore') 
    ore.count([7, 13])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-32)
      )
    ore.size = 6
  })

// Deepslate Cinnabar
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_cinnabar_ore_gen_ms'
    ore.biomes = '#kubejs:mars_gen_1'
    ore.addTarget('ad_astra:mars_stone', 'thermal:deepslate_cinnabar_ore') 
    ore.count([7, 16])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-16)
      )
    ore.size = 7
  })

  // Deepslate Iron
    event.addOre(ore => {
      ore.id = 'kubejs:deepslate_iron_ore_gen_ms'
      ore.biomes = '#kubejs:mars_gen_1'
      ore.addTarget('ad_astra:mars_stone', 'minecraft:deepslate_iron_ore')
      ore.count([12, 22])
        .squared()
        .triangleHeight(
          anchors.absolute(-64),
          anchors.absolute(-48)
        )
      ore.size = 5
    })

//
})
//