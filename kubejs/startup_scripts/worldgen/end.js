////
// custom oregen for end
//// renik

//
  WorldgenEvents.add(event => {
    const { anchors } = event
//

  // Azure Silver
    event.addOre(ore => {
      ore.id = 'kubejs:azure_silver_ore_gen'
      ore.biomes = '#kubejs:end_gen_2'
      ore.addTarget('minecraft:end_stone', 'silentgear:azure_silver_ore') 
      ore.count([8, 16])
        .squared()
        .triangleHeight(
          anchors.absolute(8),
          anchors.absolute(54)
        )
      ore.size = 8
    })
  
    // Fluix
    event.addOre(ore => {
      ore.id = 'kubejs:fluix_gen_en'
      ore.biomes = '#kubejs:end_gen_3'
      ore.addTarget('minecraft:end_stone', 'emendatusenigmatica:fluix_mercury_stone_ore') 
      ore.count([4, 15])
        .squared()
        .triangleHeight(
          anchors.absolute(12),
          anchors.absolute(68)
        )
      ore.size = 5
    })
  
    // Osmium
    event.addOre(ore => {
      ore.id = 'kubejs:osmium_gen_en'
    ore.biomes = '#kubejs:end_gen_1', '#kubejs:end_gen_2', '#kubejs:end_gen_3'
      ore.addTarget('minecraft:end_stone', 'mekanism:osmium_ore') 
      ore.count([4, 15])
        .squared()
        .triangleHeight(
          anchors.absolute(12),
          anchors.absolute(68)
        )
      ore.size = 5
    })
  
    // Rich Apatite
    event.addOre(ore => {
      ore.id = 'kubejs:apatite_ore_gen_en'
      ore.biomes = '#kubejs:end_gen_1'
      ore.addTarget('minecraft:end_stone', 'emendatusenigmatica:apatite_glacio_stone_ore') 
      ore.count([7, 12])
        .squared()
        .triangleHeight(
          anchors.absolute(14),
          anchors.absolute(72)
        )
      ore.size = 4
    })
  
    // Dimensional Shard
    event.addOre(ore => {
      ore.id = 'kubejs:dimensional_ore_gen_en'
      ore.biomes = '#kubejs:end_gen_2'
      ore.addTarget('minecraft:end_stone', 'rftoolsbase:dimensionalshard_end')
      ore.count([5, 8])
        .squared()
        .triangleHeight(
          anchors.absolute(16),
          anchors.absolute(74)
        )
      ore.size = 6
    })
  
  // Deepslate Osmium
  event.addOre(ore => {
    ore.id = 'kubejs:deepslate_osmium_ore_gen_en'
    ore.biomes = '#kubejs:end_gen_1', '#kubejs:end_gen_2'
    ore.addTarget('minecraft:end_stone', 'mekanism:deepslate_osmium_ore') 
    ore.count([6, 13])
      .squared()
      .triangleHeight(
        anchors.absolute(12),
        anchors.absolute(26)
      )
    ore.size = 6
  })
  
  // Inferium
  event.addOre(ore => {
    ore.id = 'kubejs:inferium_ore_gen_en'
    ore.biomes = '#kubejs:end_gen_1', '#kubejs:end_gen_2'
    ore.addTarget('minecraft:end_stone', 'mysticalagradditions:end_inferium_ore') 
    ore.count([12, 25])
      .squared()
      .triangleHeight(
        anchors.absolute(14),
        anchors.absolute(22)
      )
    ore.size = 6
  })

//  
})
//