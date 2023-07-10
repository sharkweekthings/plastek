////
// custom oregen for venus
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
  //

// TOP (SANDSTONE)

  // Sulfur
  event.addOre(ore => {
    ore.id = 'kubejs:sandstone_sulfur_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_sandstone', 'thermal:sulfur_ore')
    ore.count([12, 24])
      .squared()
      .triangleHeight(
        anchors.absolute(88),
        anchors.absolute(124)
      )
    ore.size = 11
  })

  // Niter
  event.addOre(ore => {
    ore.id = 'kubejs:sandstone_niter_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_sandstone', 'thermal:niter_ore')
    ore.count([12, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(76),
        anchors.absolute(112)
      )
    ore.size = 5
  })

// TOP 89 -18

  // Nickel
  event.addOre(ore => {
    ore.id = 'kubejs:nickel_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'thermal:nickel_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(54),
        anchors.absolute(88)
      )
    ore.size = 10
  })

  // Glowstone
  event.addOre(ore => {
    ore.id = 'kubejs:sandstone_glowstone_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'minecraft:glowstone')
    ore.count([9, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(52),
        anchors.absolute(90)
      )
    ore.size = 6
  })
  
// MID

  // Uranium
  event.addOre(ore => {
    ore.id = 'kubejs:uranium_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'immersiveengineering:ore_uranium')
    ore.count([8, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(-16),
        anchors.absolute(74)
      )
    ore.size = 11
  })

  // Uraninite
  event.addOre(ore => {
    ore.id = 'kubejs:uraninite_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'powah:uraninite_ore')
    ore.count([8, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(-22),
        anchors.absolute(62)
      )
    ore.size = 9
  })

  // Sulfur
  event.addOre(ore => {
    ore.id = 'kubejs:sulfur_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'thermal:sulfur_ore')
    ore.count([12, 24])
      .squared()
      .triangleHeight(
        anchors.absolute(-26),
        anchors.absolute(74)
      )
    ore.size = 6
  })

  // Niter
  event.addOre(ore => {
    ore.id = 'kubejs:niter_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'thermal:niter_ore')
    ore.count([12, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(-32),
        anchors.absolute(80)
      )
    ore.size = 13
  })

  // Deepslate Coal
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_coal_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'minecraft:deepslate_coal_ore')
    ore.count([12, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(-48),
        anchors.absolute(-8)
      )
    ore.size = 13
  })

  // Inferium
  event.addOre(ore => {
    ore.id = 'kubejs:end_inferium_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'mysticalagradditions:end_inferium_ore')
    ore.count([8, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(-52),
        anchors.absolute(20)
      )
    ore.size = 10
  })

  // Lead
  event.addOre(ore => {
    ore.id = 'kubejs:lead_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'thermal:lead_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-28)
      )
    ore.size = 13
  })

  // Fluorite
  event.addOre(ore => {
    ore.id = 'kubejs:fluorite_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'mekanism:fluorite_ore')
    ore.count([8, 26])
      .squared()
      .triangleHeight(
        anchors.absolute(-12),
        anchors.absolute(44)
      )
    ore.size = 12
  })

// LOW

  // Deepslate Uranium
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_uranium_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'immersiveengineering:deepslate_ore_uranium')
    ore.count([8, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-28)
      )
    ore.size = 12
  })

  // Calorite
  event.addOre(ore => {
    ore.id = 'kubejs:calorite_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'ad_astra:venus_calorite_ore')
    ore.count([4, 10])
      .squared()
      .triangleHeight(
        anchors.absolute(-60),
        anchors.absolute(-28)
      )
    ore.size = 3
  })

// Deepslate Osmium
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_osmium_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'mekanism:deepslate_osmium_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-26)
      )
    ore.size = 12
  })

  // Deepslate Uraninite
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_uraninite_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_stone', 'powah:deepslate_uraninite_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-58),
        anchors.absolute(-42)
      )
    ore.size = 7
  })

  // Fluix
  event.addOre(ore => {
    ore.id = 'kubejs:fluix_ore_gen_vs'
    ore.biomes = '#kubejs:venus_gen'
    ore.addTarget('ad_astra:venus_sandstone', 'emendatusenigmatica:fluix_mercury_stone_ore')
    ore.count([8, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-30)
      )
    ore.size = 9
  })

//  
})
//