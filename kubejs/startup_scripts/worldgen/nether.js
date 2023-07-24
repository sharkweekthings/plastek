////
// custom oregen for nether
//// renik

//
  WorldgenEvents.add(event => {
    const { anchors } = event
//

// TOP

  // Cinnabar
    event.addOre(ore => {
      ore.id = 'kubejs:cinnabar_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'thermal:cinnabar_ore') 
      ore.count([7, 13])
        .squared()
        .triangleHeight(
          anchors.absolute(172),
          anchors.absolute(186)
        )
      ore.size = 8
    })

  // Deepslate Coal
    event.addOre(ore => {
      ore.id = 'kubejs:deepslate_coal_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'minecraft:deepslate_coal_ore') 
      ore.count([6, 10])
        .squared()
        .triangleHeight(
          anchors.absolute(166),
          anchors.absolute(182)
        )
      ore.size = 10
    })

  // Inferium Top
    event.addOre(ore => {
      ore.id = 'kubejs:inferium_ore_top_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'mysticalagradditions:nether_inferium_ore') 
      ore.count([5, 12])
        .squared()
        .triangleHeight(
          anchors.absolute(142),
          anchors.absolute(185)
        )
      ore.size = 8
    })

  // Nether Gold Top
    event.addOre(ore => {
      ore.id = 'kubejs:nether_gold_top_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'minecraft:nether_gold_ore') 
      ore.count([20, 45])
        .squared()
        .triangleHeight(
          anchors.absolute(32),
          anchors.absolute(186)
        )
      ore.size = 12
    })

  // Dimensional Shard Top
    event.addOre(ore => {
      ore.id = 'kubejs:dimensional_top_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'rftoolsbase:dimensionalshard_nether') 
      ore.count([20, 55])
        .squared()
        .triangleHeight(
          anchors.absolute(18),
          anchors.absolute(168)
        )
      ore.size = 8
    })

  // Crimson Iron Ore
    event.addOre(ore => {
      ore.id = 'kubejs:crimson_iron_top_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'silentgear:crimson_iron_ore') 
      ore.count([23, 54])
        .squared()
        .triangleHeight(
          anchors.absolute(18),
          anchors.absolute(154)
        )
      ore.size = 11
    })

  // Solar Metal Ore
    event.addOre(ore => {
      ore.id = 'kubejs:solarmetal_ore_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'silentcompat:solarmetal_ore') 
      ore.count([23, 54])
        .squared()
        .triangleHeight(
          anchors.absolute(18),
          anchors.absolute(154)
        )
      ore.size = 11
    })

  // Soulium
    event.addOre(ore => {
      ore.id = 'kubejs:soulium_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:soul_sand', 'mysticalagriculture:soulium_ore') 
      ore.count([15, 50])
        .squared()
        .triangleHeight(
          anchors.absolute(4),
          anchors.absolute(184)
        )
      ore.size = 6
    })

// BOT

  // Ancient Debris
    event.addOre(ore => {
      ore.id = 'kubejs:ancient_debris_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'minecraft:ancient_debris') 
      ore.count([3, 6])
        .squared()
        .triangleHeight(
          anchors.absolute(6),
          anchors.absolute(56)
        )
      ore.size = 5
    })

  // Nether Quartz Bot
    event.addOre(ore => {
      ore.id = 'kubejs:nether_quartz_bot_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'minecraft:nether_quartz_ore') 
      ore.count([25, 52])
        .squared()
        .triangleHeight(
          anchors.absolute(8),
          anchors.absolute(184)
        )
      ore.size = 8
    })

  // Deepslate Inferium
    event.addOre(ore => {
      ore.id = 'kubejs:deepslate_inferium_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'mysticalagriculture:deepslate_inferium_ore') 
      ore.count([8, 25])
        .squared()
        .triangleHeight(
          anchors.absolute(4),
          anchors.absolute(38)
        )
      ore.size = 8
    })

  // Iesnium
    event.addOre(ore => {
      ore.id = 'kubejs:iesnium_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'occultism:iesnium_ore_natural[uncovered=false]')
      ore.count([2, 10])
        .squared()
        .triangleHeight(
          anchors.absolute(4),
          anchors.absolute(78)
        )
      ore.size = 4
    })

  // Deepslate Copper
    event.addOre(ore => {
      ore.id = 'kubejs:deepslate_copper_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'minecraft:deepslate_copper_ore')
      ore.count([8, 25])
        .squared()
        .triangleHeight(
          anchors.absolute(6),
          anchors.absolute(22)
        )
      ore.size = 10
    })

  // Deepslate Redstone
    event.addOre(ore => {
      ore.id = 'kubejs:deepslate_redstone_ore_gen_nth'
      ore.biomes = '#kubejs:nether_gen'
      ore.addTarget('minecraft:netherrack', 'minecraft:deepslate_redstone_ore') 
      ore.count([8, 22])
        .squared()
        .triangleHeight(
          anchors.absolute(10),
          anchors.absolute(28)
        )
      ore.size = 5
    })

//  
})
//