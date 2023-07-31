////
// custom oregen for alfheim
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// MOUNTAIN LEVEL

  // Emerald  
  event.addOre(ore => { 
    ore.id = 'kubejs:in_mtn_emerald_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'minecraft:emerald_ore')
    ore.count([5, 16])
      .squared()
      .triangleHeight(
        anchors.absolute(124),
        anchors.absolute(222)
      )
    ore.size = 12
  }) 

  // Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:in_mtn_diamond_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'ad_astra:venus_diamond_ore')
    ore.count([5, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(116),
        anchors.absolute(214)
      )
    ore.size = 12
  }) 

// MID LEVEL

  // Coal
  event.addOre(ore => {
    ore.id = 'kubejs:coal_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'minecraft:coal_ore')
    ore.count([7, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(8),
        anchors.absolute(216)
      )
    ore.size = 12
  })

  // Gold
  event.addOre(ore => {
    ore.id = 'kubejs:gold_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'minecraft:gold_ore')
    ore.count([7, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-12),
        anchors.absolute(30)
      )
    ore.size = 12
  })

  // Nickel
  event.addOre(ore => {
    ore.id = 'kubejs:nickel_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_2'
    ore.addTarget('botania:livingrock', 'thermal:nickel_ore')
    ore.count([8, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(-4),
        anchors.absolute(22)
      )
    ore.size = 6
  })

// Silver
event.addOre(ore => {
  ore.id = 'kubejs:silver_ore_gen_ah'
  ore.biomes = '#kubejs:alfheim_gen_2'
  ore.addTarget('botania:livingrock', 'thermal:silver_ore')
  ore.count([7, 22])
    .squared()
    .triangleHeight(
      anchors.absolute(14),
      anchors.absolute(106)
    )
  ore.size = 13
  })

// Lapis
event.addOre(ore => {
  ore.id = 'kubejs:lapis_ore_gen_ah'
  ore.biomes = '#kubejs:alfheim_gen_1'
  ore.addTarget('botania:livingrock', 'minecraft:lapis_ore')
  ore.count([5, 18])
    .squared()
    .triangleHeight(
      anchors.absolute(12),
      anchors.absolute(116)
    )
  ore.size = 12
  })

// Redstone
event.addOre(ore => {
  ore.id = 'kubejs:redstone_ore_gen_ah'
  ore.biomes = '#kubejs:alfheim_gen_2'
  ore.addTarget('botania:livingrock', 'minecraft:redstone_ore')
  ore.count([8, 22])
    .squared()
    .triangleHeight(
      anchors.absolute(-12),
      anchors.absolute(94)
    )
  ore.size = 9
  })

// BOTTOM LEVEL

  // Deepslate Gold
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_gold_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'minecraft:deepslate_gold_ore')
    ore.count([9, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-34)
      )
    ore.size = 13
  })

  // Deepslate Bort
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_bort_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'silentgear:deepslate_bort_ore')
    ore.count([9, 22])
      .squared()
      .triangleHeight(
        anchors.absolute(-48),
        anchors.absolute(2)
      )
    ore.size = 13
  })

  // Arcmetal Ore
  event.addOre(ore => {
    ore.id = 'kubejs:arcmetal_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'silentcompat:arcmetal_ore')
    ore.count([6, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(0)
      )
    ore.size = 13
  })

  // Deepslate Redstone
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_redstone_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_2'
    ore.addTarget('botania:livingrock', 'minecraft:deepslate_redstone_ore')
    ore.count([9, 16])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(0)
      )
    ore.size = 8
  })

  // Deepslate Coal
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_coal_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_2'
    ore.addTarget('botania:livingrock', 'minecraft:deepslate_coal_ore')
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(0)
      )
    ore.size = 12
  })

  // Deepslate Silver
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_silver_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_2'
    ore.addTarget('botania:livingrock', 'thermal:deepslate_silver_ore')
    ore.count([6, 14])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(0)
      )
    ore.size = 7
  })

  // Deepslate Nickel
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_nickel_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_2'
    ore.addTarget('botania:livingrock', 'thermal:deepslate_nickel_ore')
    ore.count([6, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(-42)
      )
    ore.size = 7
  })

  // Dragonstone
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_dragonstone_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'mythicbotany:dragonstone_ore')
    ore.count([4, 10])
      .squared()
      .triangleHeight(
        anchors.absolute(-64),
        anchors.absolute(0)
      )
    ore.size = 4
  })

  // Diamond
  event.addOre(ore => {
    ore.id = 'kubejs:ds_diamond_ore_gen_ah'
    ore.biomes = '#kubejs:alfheim_gen_1'
    ore.addTarget('botania:livingrock', 'minecraft:deepslate_diamond_ore')
    ore.count([3, 15])
      .squared()
      .triangleHeight(
        anchors.absolute(18),
        anchors.absolute(58)
      )
    ore.size = 5
  }) 

//  
})
//  