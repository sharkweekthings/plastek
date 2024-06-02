////
// custom oregen for moon
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// TOP
  // Aluminum
  event.addOre(ore => {
    ore.id = 'kubejs:aluminum_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'immersiveengineering:ore_aluminum') 
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(-30),
        anchors.absolute(88)
      )
    ore.size = 9
  })

  // Prosperity
  event.addOre(ore => {
    ore.id = 'kubejs:prosperity_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'mysticalagriculture:prosperity_ore') 
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(-28),
        anchors.absolute(80)
      )
    ore.size = 9
  })


  // Deepslate Prosperity
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_prosperityore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'mysticalagriculture:deepslate_prosperity_ore') 
    ore.count([9, 19])
      .squared()
      .triangleHeight(
        anchors.absolute(52),
        anchors.absolute(76)
      )
    ore.size = 9
  })

// MID

  // Lead
  event.addOre(ore => {
    ore.id = 'kubejs:lead_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'thermal:lead_ore') 
    ore.count([12, 16])
      .squared()
      .triangleHeight(
        anchors.absolute(34),
        anchors.absolute(82)
      )
    ore.size = 9
  })

  // Moon Cheese
  event.addOre(ore => {
    ore.id = 'kubejs:moon_cheese_gen_mn' 
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'ad_astra:moon_cheese_ore') 
    ore.count([13, 42])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(26)
      )
    ore.size = 11
  })

  // Deepslate Aluminum
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_aluminum_gen_mn' 
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'immersiveengineering:deepslate_ore_aluminum') 
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-52),
        anchors.absolute(8)
      )
    ore.size = 8
  })

  // Ice Shard
  event.addOre(ore => {
    ore.id = 'kubejs:ice_shard_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'ad_astra:moon_ice_shard_ore') 
    ore.count([10, 35])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(90)
      )
    ore.size = 6
  })

  // Emerald
  event.addOre(ore => {
    ore.id = 'kubejs:emerald_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'minecraft:emerald_ore') 
    ore.count([8, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-38),
        anchors.absolute(32)
      )
    ore.size = 9
  })

// BOTTOM

  // Apatite
  event.addOre(ore => {
    ore.id = 'kubejs:apatite_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'emendatusenigmatica:apatite_moon_stone_ore') 
    ore.count([8, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-36),
        anchors.absolute(82)
      )
    ore.size = 9
  })

  // Desh
  event.addOre(ore => {
    ore.id = 'kubejs:desh_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'ad_astra:moon_desh_ore') 
    ore.count([8, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-24),
        anchors.absolute(58)
      )
    ore.size = 9   
  })

  // Deepslate Emerald
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_emerald_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'minecraft:deepslate_emerald_ore') 
    ore.count([8, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-32)
      )
    ore.size = 7
  })

  // Iron
  event.addOre(ore => {
    ore.id = 'kubejs:iron_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'ad_astra:mercury_iron_ore') 
    ore.count([8, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-42)
      )
    ore.size = 8
  })

  // Poor Deepslate Uraninite
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_poor_uraninite_ore_gen_mn'
    ore.biomes = '#kubejs:moon_gen'
    ore.addTarget('ad_astra:moon_stone', 'powah:deepslate_uraninite_ore_poor') 
    ore.count([6, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-28)
      )
    ore.size = 12
  })

//
})
//