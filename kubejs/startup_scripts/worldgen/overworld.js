////
// custom oregen for overworld
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// MOUNTAIN LEVEL

  // Copper
  event.addOre(ore => {
    ore.id = 'kubejs:in_mtn_copper_ore_gen_ow'
    ore.biomes = '#kubejs:ow_mountain_gen'
    ore.addTarget('#forge:stone', 'minecraft:copper_ore')
    ore.count([7, 30])
      .squared()
      .triangleHeight(
        anchors.absolute(78),
        anchors.absolute(202)
      )
    ore.size = 7
  }) 

  // Zinc
  event.addOre(ore => {
    ore.id = 'kubejs:in_mtn_zinc_ore_gen_ow'
    ore.biomes = '#kubejs:ow_mountain_gen'
    ore.addTarget('#forge:stone', 'create:zinc_ore')
    ore.count([6, 21])
      .squared()
      .triangleHeight(
        anchors.absolute(78),
        anchors.absolute(208)
      )
    ore.size = 8
  }) 

  // Poor Uraninite
    event.addOre(ore => {
      ore.id = 'kubejs:in_mtn_uraninite_ore_gen_ow'
      ore.biomes = '#kubejs:ow_mountain_gen'
      ore.addTarget('#forge:stone', 'powah:uraninite_ore_poor')
      ore.count([6, 21])
        .squared()
        .triangleHeight(
          anchors.absolute(74),
          anchors.absolute(216)
        )
      ore.size = 4
    })

  // Lapis
  event.addOre(ore => {
    ore.id = 'kubejs:in_mtn_lapis_ore_gen_ow'
    ore.biomes = '#kubejs:ow_mountain_gen'
    ore.addTarget('#forge:stone', 'minecraft:lapis_ore')
    ore.count([4, 12])
      .squared()
      .triangleHeight(
        anchors.absolute(78),
        anchors.absolute(206)
      )
    ore.size = 4
  }) 

  // Emerald
  event.addOre(ore => {
    ore.id = 'kubejs:in_mtn_emerald_ore_gen_ow'
    ore.biomes = '#kubejs:ow_mountain_gen'
    ore.addTarget('#forge:stone', 'minecraft:emerald_ore')
    ore.count([3, 12])
      .squared()
      .triangleHeight(
        anchors.absolute(124),
        anchors.absolute(222)
      )
    ore.size = 3
  }) 

  // Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:in_mtn_diamond_ore_gen_ow'
    ore.biomes = '#kubejs:ow_mountain_gen'
    ore.addTarget('#forge:stone', 'minecraft:diamond_ore')
    ore.count([3, 12])
      .squared()
      .triangleHeight(
        anchors.absolute(116),
        anchors.absolute(214)
      )
    ore.size = 3
  }) 

// MID LEVEL

  // Coal
  event.addOre(ore => {
    ore.id = 'kubejs:coal_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'minecraft:coal_ore')
    ore.count([13, 40])
      .squared()
      .triangleHeight(
        anchors.absolute(8),
        anchors.absolute(216)
      )
    ore.size = 12
  })

  // Copper
  event.addOre(ore => {
    ore.id = 'kubejs:copper_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'minecraft:copper_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-6),
        anchors.absolute(64)
      )
    ore.size = 12
  })

  // Copper Extra
  event.addOre(ore => {
    ore.id = 'kubejs:copper_extra_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'minecraft:copper_ore')
    ore.count([5, 30])
      .squared()
      .triangleHeight(
        anchors.absolute(50),
        anchors.absolute(15)
      )
    ore.size = 8
  })

  // Tin
  event.addOre(ore => {
    ore.id = 'kubejs:tin_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'thermal:tin_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(6),
        anchors.absolute(34)
      )
    ore.size = 11
  })

  // Silver
  event.addOre(ore => {
    ore.id = 'kubejs:silver_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'thermal:silver_ore')
    ore.count([8, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-18),
        anchors.absolute(16)
      )
    ore.size = 4
  })

  // Zinc
  event.addOre(ore => {
    ore.id = 'kubejs:zinc_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'create:zinc_ore')
    ore.count([7, 21])
      .squared()
      .triangleHeight(
        anchors.absolute(20),
        anchors.absolute(86)
      )
    ore.size = 12
  })

  // Lapis
  event.addOre(ore => {
    ore.id = 'kubejs:lapis_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'minecraft:lapis_ore')
    ore.count([6, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(10),
        anchors.absolute(68)
      )
    ore.size = 7
  })

  // Aluminum
  event.addOre(ore => {
    ore.id = 'kubejs:aluminum_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'immersiveengineering:ore_aluminum')
    ore.count([4, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(44),
        anchors.absolute(78)
      )
    ore.size = 9
  })

  // Bort
  event.addOre(ore => {
    ore.id = 'kubejs:bort_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'silentgear:bort_ore')
    ore.count([6, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-40),
        anchors.absolute(-8)
      )
    ore.size = 10
  })

  // Bituminous Sand
  event.addOre(ore => {
    ore.id = 'kubejs:bituminous_sand_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:sand', 'thermal:oil_sand')
    ore.count([5, 16])
      .squared()
      .triangleHeight(
        anchors.absolute(52),
        anchors.absolute(92)
      )
    ore.size = 4
  })

  // Bituminous Red Sand
  event.addOre(ore => {
    ore.id = 'kubejs:bituminous_red_sand_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:red_sand', 'thermal:oil_red_sand')
    ore.count([5, 16])
      .squared()
      .triangleHeight(
        anchors.absolute(52),
        anchors.absolute(92)
      )
    ore.size = 6
  })

  // Poor Uraninite
  event.addOre(ore => {
    ore.id = 'kubejs:poor_uraninite_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('#forge:stone', 'powah:uraninite_ore_poor')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-4),
        anchors.absolute(48)
      )
    ore.size = 3
  })

// DEEPSLATE

  // Deepslate Copper
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_copper_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_copper_ore')
    ore.count([8, 35])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-6)
      )
    ore.size = 8
  })

  // Deepslate Coal
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_coal_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_coal_ore')
    ore.count([8, 28])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-2)
      )
    ore.size = 12
  })

  // Deepslate Tin
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_tin_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_tin_ore')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(26)
      )
    ore.size = 9
  })

  // Deepslate Zinc
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_zinc_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'create:deepslate_zinc_ore')
    ore.count([8, 21])
      .squared()
      .triangleHeight(
        anchors.absolute(-34),
        anchors.absolute(6)
      )
    ore.size = 11
  })

  // Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:in_deepslate_diamond_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'minecraft:diamond_ore')
    ore.count([3, 11])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-36)
      )
    ore.size = 3
  })

  // Deepslate Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:in_deepslate_ds_diamond_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_diamond_ore')
    ore.count([1, 5])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-40)
      )
    ore.size = 3
  })

  // Redstone
  event.addOre(ore => {
    ore.id = 'kubejs:redstone_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'minecraft:redstone_ore')
    ore.count([7, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-42)
      )
    ore.size = 4
  })

  // Deepslate Nickel
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_nickel_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_nickel_ore')
    ore.count([6, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-40)
      )
    ore.size = 6
  })

  // Poor Deepslate Uraninite
  event.addOre(ore => {
    ore.id = 'kubejs:poor_deepslate_uraninite_ore_gen_ow'
    ore.biomes = '#kubejs:ow_gen'
    ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore_poor')
    ore.count([8, 20])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-38)
      )
    ore.size = 4
  })

//  
})
//