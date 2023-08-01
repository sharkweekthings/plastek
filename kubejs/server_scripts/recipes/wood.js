////
// various wood stuff
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'ars_nouveau:archwood_planks'})
//
})
//


//
ServerEvents.recipes(event => {
//

  // ADD
  event.shapeless(Item.of('ad_astra:stripped_glacian_log'), ['#natprog:saw', 'ad_astra:glacian_log']).id('ad_astra:recipes/stripped_glacian_log')
  event.shapeless(Item.of('ad_astra:glacian_planks', 4), ['#natprog:saw', 'ad_astra:stripped_glacian_log']).id('ad_astra:recipes/glacian_planks')
  
  event.shapeless(Item.of('ars_nouveau:stripped_blue_archwood_log'), ['#natprog:saw', 'ars_nouveau:blue_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_blue_archwood_log'])  
  
  event.shapeless(Item.of('ars_nouveau:stripped_green_archwood_log'), ['#natprog:saw', 'ars_nouveau:green_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_green_archwood_log']) 

  event.shapeless(Item.of('ars_nouveau:stripped_purple_archwood_log'), ['#natprog:saw', 'ars_nouveau:purple_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_purple_archwood_log'])  

  event.shapeless(Item.of('ars_nouveau:stripped_red_archwood_log'), ['#natprog:saw', 'ars_nouveau:red_archwood_log'])
  event.shapeless(Item.of('ars_nouveau:archwood_planks', 4), ['#natprog:saw', 'ars_nouveau:stripped_red_archwood_log'])

  event.shapeless(Item.of('deeperdarker:stripped_echo_log'), ['#natprog:saw', 'deeperdarker:echo_log'])
  event.shapeless(Item.of('deeperdarker:echo_planks', 4), ['#natprog:saw', 'deeperdarker:stripped_echo_log']).id('deeperdarker:echo_planks')

  event.shapeless(Item.of('quark:stripped_ancient_log'), ['#natprog:saw', 'quark:ancient_log'])
  event.shapeless(Item.of('quark:ancient_planks', 4), ['#natprog:saw', 'quark:stripped_ancient_log']).id('quark:world/crafting/woodsets/ancient/planks')

  event.shapeless(Item.of('quark:stripped_azalea_log'), ['#natprog:saw', 'quark:azalea_log'])
  event.shapeless(Item.of('quark:azalea_planks', 4), ['#natprog:saw', 'quark:stripped_azalea_log']).id('quark:world/crafting/woodsets/azalea/planks')

  event.shapeless(Item.of('quark:stripped_blossom_log'), ['#natprog:saw', 'quark:blossom_log'])
  event.shapeless(Item.of('quark:blossom_planks', 4), ['#natprog:saw', 'quark:stripped_blossom_log']).id('quark:world/crafting/woodsets/blossom/planks')

  event.shapeless(Item.of('silentgear:stripped_netherwood_log'), ['#natprog:saw', 'silentgear:netherwood_log'])
  event.shapeless(Item.of('silentgear:netherwood_planks', 4), ['#natprog:saw', 'silentgear:stripped_netherwood_log']).id('silentgear:netherwood_planks')

  event.shapeless(Item.of('twilightforest:stripped_canopy_log'), ['#natprog:saw', 'twilightforest:canopy_log'])
  event.shapeless(Item.of('twilightforest:canopy_planks', 4), ['#natprog:saw', 'twilightforest:stripped_canopy_log']).id('twilightforest:wood/canopy_planks')

  event.shapeless(Item.of('twilightforest:stripped_dark_log'), ['#natprog:saw', 'twilightforest:dark_log'])
  event.shapeless(Item.of('twilightforest:dark_planks', 4), ['#natprog:saw', 'twilightforest:stripped_dark_log']).id('twilightforest:wood/dark_planks')

  event.shapeless(Item.of('twilightforest:stripped_mangrove_log'), ['#natprog:saw', 'twilightforest:mangrove_log'])
  event.shapeless(Item.of('twilightforest:mangrove_planks', 4), ['#natprog:saw', 'twilightforest:stripped_mangrove_log']).id('twilightforest:wood/mangrove_planks')

  event.shapeless(Item.of('twilightforest:stripped_mining_log'), ['#natprog:saw', 'twilightforest:mining_log'])
  event.shapeless(Item.of('twilightforest:mining_planks', 4), ['#natprog:saw', 'twilightforest:stripped_mining_log']).id('twilightforest:wood/mining_planks')

  event.shapeless(Item.of('twilightforest:stripped_sorting_log'), ['#natprog:saw', 'twilightforest:sorting_log'])
  event.shapeless(Item.of('twilightforest:sorting_planks', 4), ['#natprog:saw', 'twilightforest:stripped_sorting_log']).id('twilightforest:wood/sorting_planks')

  event.shapeless(Item.of('twilightforest:stripped_time_log'), ['#natprog:saw', 'twilightforest:time_log'])
  event.shapeless(Item.of('twilightforest:time_planks', 4), ['#natprog:saw', 'twilightforest:stripped_time_log']).id('twilightforest:wood/time_planks')

  event.shapeless(Item.of('twilightforest:stripped_transformation_log'), ['#natprog:saw', 'twilightforest:transformation_log'])
  event.shapeless(Item.of('twilightforest:transformation_planks', 4), ['#natprog:saw', 'twilightforest:stripped_transformation_log']).id('twilightforest:wood/transformation_planks')

  event.shapeless(Item.of('twilightforest:stripped_twilight_oak_log'), ['#natprog:saw', 'twilightforest:twilight_oak_log'])
  event.shapeless(Item.of('twilightforest:twilight_oak_planks', 4), ['#natprog:saw', 'twilightforest:stripped_twilight_oak_log']).id('twilightforest:wood/twilight_oak_planks')

//
});
//