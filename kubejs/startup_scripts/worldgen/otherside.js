////
// custom oregen for otherside
//// renik

//
WorldgenEvents.add(event => {
  const { anchors } = event
//

// SCULK STONE

  // Certus Quartz
  event.addOre(ore => {
    ore.id = 'kubejs:sculk_stone_certus_en_os'
    ore.biomes = '#kubejs:otherside_gen_1', '#kubejs:otherside_gen_2'
    ore.addTarget('deeperdarker:sculk_stone', 'emendatusenigmatica:certus_quartz_blackstone_ore') 
    ore.count([7, 23])
      .squared()
      .triangleHeight(
        anchors.absolute(4),
        anchors.absolute(32)
      )
    ore.size = 12
  })

  // Ancient Debris
  event.addOre(ore => {
    ore.id = 'kubejs:sculk_stone_ancient_debris_gen_os'
    ore.biomes = '#kubejs:otherside_gen_1', '#kubejs:otherside_gen_2'
    ore.addTarget('deeperdarker:sculk_stone', 'minecraft:ancient_debris') 
    ore.count([7, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(16),
        anchors.absolute(48)
      )
    ore.size = 8
  })

  // Fluix
  event.addOre(ore => {
    ore.id = 'kubejs:sculk_stone_fluix_ore_gen_os'
    ore.biomes = '#kubejs:otherside_gen_1', '#kubejs:otherside_gen_2'
    ore.addTarget('deeperdarker:sculk_stone', 'emendatusenigmatica:fluix_mercury_stone_ore')
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(2),
        anchors.absolute(38)
      )
    ore.size = 7
  })

  // Source
  event.addOre(ore => {
    ore.id = 'kubejs:source_sculk_ore_gen_mn'
    ore.biomes = '#kubejs:otherside_gen_1', '#kubejs:otherside_gen_2'
    ore.addTarget('deeperdarker:sculk_stone', 'emendatusenigmatica:source_deepslate_ore') 
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(7),
        anchors.absolute(48)
      )
    ore.size = 11
  })

// GLOOMSLATE

  // Certus Quartz
  event.addOre(ore => {
    ore.id = 'kubejs:certus_en_os'
    ore.biomes = '#kubejs:otherside_gen_1', '#kubejs:otherside_gen_2'
    ore.addTarget('deeperdarker:gloomslate', 'emendatusenigmatica:certus_quartz_blackstone_ore') 
    ore.count([12, 24])
      .squared()
      .triangleHeight(
        anchors.absolute(4),
        anchors.absolute(32)
      )
    ore.size = 9
  })

  // Source
  event.addOre(ore => {
    ore.id = 'kubejs:source_gloomslate_ore_gen_mn'
    ore.biomes = '#kubejs:otherside_gen_1', '#kubejs:otherside_gen_2'
    ore.addTarget('deeperdarker:gloomslate', 'emendatusenigmatica:source_deepslate_ore') 
    ore.count([8, 18])
      .squared()
      .triangleHeight(
        anchors.absolute(7),
        anchors.absolute(48)
      )
    ore.size = 11
  })

  // Fluix
  event.addOre(ore => {
    ore.id = 'kubejs:fluix_ore_gen_os'
    ore.biomes = '#kubejs:otherside_gen_1', '#kubejs:otherside_gen_2'
    ore.addTarget('deeperdarker:gloomslate', 'emendatusenigmatica:fluix_mercury_stone_ore')
    ore.count([7, 17])
      .squared()
      .triangleHeight(
        anchors.absolute(2),
        anchors.absolute(38)
      )
    ore.size = 7
  })

//  
})
//