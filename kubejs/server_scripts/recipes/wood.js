////
// various wood stuff
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({output: 'ad_astra:glacian_planks'})
  event.remove({output: 'ars_nouveau:archwood_planks'})
  event.remove({output: 'ars_nouveau:archwood_planks'})
  event.remove({output: 'ars_nouveau:archwood_planks'})
  event.remove({output: 'ars_nouveau:archwood_planks'})
  event.remove({output: 'botania:dreamwood_planks'})
  event.remove({output: 'botania:livingwood_planks'})
  event.remove({output: 'deeperdarker:echo_planks'})
  event.remove({output: 'quark:ancient_planks'})
  event.remove({output: 'quark:azalea_planks'})
  event.remove({output: 'quark:blossom_planks'})
  event.remove({output: 'silentgear:netherwood_planks'})
  event.remove({output: 'twilightforest:canopy_planks'})
  event.remove({output: 'twilightforest:dark_planks'})
  event.remove({output: 'twilightforest:mangrove_planks'})
  event.remove({output: 'twilightforest:mining_planks'})
  event.remove({output: 'twilightforest:sorting_planks'})
  event.remove({output: 'twilightforest:time_planks'})
  event.remove({output: 'twilightforest:transformation_planks'})
  event.remove({output: 'ad_astra:stripped_glacian_log'})
  event.remove({output: 'ars_nouveau:stripped_blue_archwood_log'})
  event.remove({output: 'ars_nouveau:stripped_green_archwood_log'})
  event.remove({output: 'ars_nouveau:stripped_purple_archwood_log'})
  event.remove({output: 'ars_nouveau:stripped_red_archwood_log'})
  event.remove({output: 'deeperdarker:stripped_echo_log'})
  event.remove({output: 'quark:stripped_ancient_log'})
  event.remove({output: 'quark:stripped_azalea_log'})
  event.remove({output: 'quark:stripped_blossom_log'})
  event.remove({output: 'silentgear:stripped_netherwood_log'})
  event.remove({output: 'twilightforest:stripped_canopy_log'})
  event.remove({output: 'twilightforest:stripped_dark_log'})
  event.remove({output: 'twilightforest:stripped_mangrove_log'})
  event.remove({output: 'twilightforest:stripped_mining_log'})
  event.remove({output: 'twilightforest:stripped_sorting_log'})
  event.remove({output: 'twilightforest:stripped_time_log'})
  event.remove({output: 'twilightforest:stripped_transformation_log'})
  event.remove({output: 'twilightforest:stripped_twilight_oak_log'})

//
})
//


//
ServerEvents.recipes(event => {
//

  // ADD
  event.shapeless(Item.of('ad_astra:stripped_glacian_log'), ['#natprog:saw', 'ad_astra:glacian_log'])
  event.shapeless(Item.of('ad_astra:glacian_planks', 4), ['#natprog:saw', 'ad_astra:stripped_glacian_log'])
  
  event.shapeless(Item.of('ars_nouveau:stripped_blue_archwood_log'), ['#natprog:saw', 'ars_nouveau:blue_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_blue_archwood_log'])  
  
  event.shapeless(Item.of('ars_nouveau:stripped_green_archwood_log'), ['#natprog:saw', 'ars_nouveau:green_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_green_archwood_log']) 

  event.shapeless(Item.of('ars_nouveau:stripped_purple_archwood_log'), ['#natprog:saw', 'ars_nouveau:purple_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_purple_archwood_log'])  

  event.shapeless(Item.of('ars_nouveau:stripped_red_archwood_log'), ['#natprog:saw', 'ars_nouveau:red_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_red_archwood_log'])

  event.shapeless(Item.of('deeperdarker:stripped_echo_log'), ['#natprog:saw', 'deeperdarker:echo_log'])
  event.shapeless(Item.of('deeperdarker:echo_planks', 4), ['#natprog:saw', 'deeperdarker:stripped_echo_log'])

  event.shapeless(Item.of('quark:stripped_ancient_log'), ['#natprog:saw', 'quark:ancient_log'])
  event.shapeless(Item.of('quark:ancient_planks', 4), ['#natprog:saw', 'quark:stripped_ancient_log'])

  event.shapeless(Item.of('quark:stripped_azalea_log'), ['#natprog:saw', 'quark:azalea_log'])
  event.shapeless(Item.of('quark:azalea_planks', 4), ['#natprog:saw', 'quark:stripped_azalea_log'])

  event.shapeless(Item.of('quark:stripped_blossom_log'), ['#natprog:saw', 'quark:blossom_log'])
  event.shapeless(Item.of('quark:blossom_planks', 4), ['#natprog:saw', 'quark:stripped_blossom_log'])

  event.shapeless(Item.of('silentgear:stripped_netherwood_log'), ['#natprog:saw', 'silentgear:netherwood_log'])
  event.shapeless(Item.of('silentgear:netherwood_planks', 4), ['#natprog:saw', 'silentgear:stripped_netherwood_log'])

  event.shapeless(Item.of('twilightforest:stripped_canopy_log'), ['#natprog:saw', 'twilightforest:canopy_log'])
  event.shapeless(Item.of('twilightforest:canopy_planks', 4), ['#natprog:saw', 'twilightforest:stripped_canopy_log'])

  event.shapeless(Item.of('twilightforest:stripped_dark_log'), ['#natprog:saw', 'twilightforest:dark_log'])
  event.shapeless(Item.of('twilightforest:dark_planks', 4), ['#natprog:saw', 'twilightforest:stripped_dark_log'])

  event.shapeless(Item.of('twilightforest:stripped_mangrove_log'), ['#natprog:saw', 'twilightforest:mangrove_log'])
  event.shapeless(Item.of('twilightforest:mangrove_planks', 4), ['#natprog:saw', 'twilightforest:stripped_mangrove_log'])

  event.shapeless(Item.of('twilightforest:stripped_mining_log'), ['#natprog:saw', 'twilightforest:mining_log'])
  event.shapeless(Item.of('twilightforest:mining_planks', 4), ['#natprog:saw', 'twilightforest:stripped_mining_log'])

  event.shapeless(Item.of('twilightforest:stripped_sorting_log'), ['#natprog:saw', 'twilightforest:sorting_log'])
  event.shapeless(Item.of('twilightforest:sorting_planks', 4), ['#natprog:saw', 'twilightforest:stripped_sorting_log'])

  event.shapeless(Item.of('twilightforest:stripped_time_log'), ['#natprog:saw', 'twilightforest:time_log'])
  event.shapeless(Item.of('twilightforest:time_planks', 4), ['#natprog:saw', 'twilightforest:stripped_time_log'])

  event.shapeless(Item.of('twilightforest:stripped_transformation_log'), ['#natprog:saw', 'twilightforest:transformation_log'])
  event.shapeless(Item.of('twilightforest:transformation_planks', 4), ['#natprog:saw', 'twilightforest:stripped_transformation_log'])

  event.shapeless(Item.of('twilightforest:stripped_twilight_oak_log'), ['#natprog:saw', 'twilightforest:twilight_oak_log'])
  event.shapeless(Item.of('twilightforest:twilight_oak_planks', 4), ['#natprog:saw', 'twilightforest:stripped_twilight_oak_log'])

//
});
//