////
// remove ore from worldgen to utilize custom generation. 
//// renik

// VANILLA
WorldgenEvents.remove(event => {
    event.removeOres(ores => {
            ores.blocks = 
        [
  /^minecraft:.*_ore$/,
  '#forge:ores_in_ground/deepslate', 
  'minecraft:coal_ore', 
  'minecraft:deepslate_coal_ore', 
  'minecraft:deepslate_copper_ore', 
  'minecraft:iron_ore', 
  'minecraft:deepslate_iron_ore', 
  'minecraft:gold_ore', 
  'minecraft:deepslate_gold_ore',  
  'minecraft:copper_ore', 
  'minecraft:lapis_ore', 
  'minecraft:deepslate_lapis_ore',  
  'minecraft:diamond_ore', 
  'minecraft:deepslate_diamond_ore',  
  'minecraft:emerald_ore', 
  'minecraft:deepslate_emerald_ore',
  'minecraft:redstone', 
  'minecraft:deepslate_redstone_ore'
        ]
    })
});

// VANILLA - Gen Step 7
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [  
  "minecraft:ore_coal_upper",
  "minecraft:ore_coal_lower",
  "minecraft:ore_copper",
  "minecraft:ore_copper_large",
  "minecraft:ore_iron_upper",
  "minecraft:ore_iron_middle",
  "minecraft:ore_iron_small"
        ]
    );
});

// VANILLA - Gen Step 8
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_decoration', 
        [  
  "minecraft:ore_quartz_deltas",
  "minecraft:ore_quartz_nether",
  "minecraft:ore_ancient_debris_large",
  "minecraft:ore_debris_small",
  "minecraft:ore_gold_nether",  
  "minecraft:ore_gold_deltas"
        ]
    );
});

// AD ASTRA
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'raw_generation', 
        [
  "ad_astra:glacio_ice_shard_ore", 
  "ad_astra:glacio_coal_ore", 
  "ad_astra:glacio_copper_ore",
  "ad_astra:glacio_iron_ore", 
  "ad_astra:glacio_lapis_ore",
  "ad_astra:glacio_deepslate_coal_ore",
  "ad_astra:glacio_deepslate_copper_ore",
  "ad_astra:glacio_deepslate_iron_ore",
  "ad_astra:glacio_deepslate_lapis_ore",
  "ad_astra:venus_coal_ore", 
  "ad_astra:venus_gold_ore",  
  "ad_astra:venus_diamond_ore", 
  "ad_astra:venus_calorite_ore",
  "ad_astra:deepslate_calorite_ore",
  "ad_astra:mercury_iron_ore",
  "ad_astra:mars_iron_ore", 
  "ad_astra:mars_diamond_ore", 
  "ad_astra:mars_ostrum_ore",  
  "ad_astra:deepslate_ostrum_ore", 
  "ad_astra:mars_ice_shard_ore",
  "ad_astra:moon_cheese_ore", 
  "ad_astra:moon_desh_ore",  
  "ad_astra:deepslate_desh_ore", 
  "ad_astra:moon_iron_ore", 
  "ad_astra:moon_ice_shard_ore",
  "ad_astra:deepslate_ice_shard_ore"
        ]
    );
});

// AE2
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'top_layer_modification', 
        [  
  "ae2:flawless_budding_quartz",
  "ae2:flawed_budding_quartz",
  "ae2:chipped_budding_quartz",
  "ae2:damaged_budding_quartz"
        ]
    );
});

// CREATE
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [  
  "create:zinc_ore",
  "create:deepslate_zinc_ore"
        ]
    );
});

// DEEPER DARKER
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [  
  "deeperdarker:sculk_stone_lapis_ore",
  "deeperdarker:sculk_stone_redstone_ore",
  "deeperdarker:sculk_stone_iron_ore",
  "deeperdarker:sculk_stone_diamond_ore",
  "deeperdarker:sculk_stone_emerald_ore",
  "deeperdarker:sculk_stone_coal_ore",
  "deeperdarker:sculk_stone_gold_ore",
  "deeperdarker:sculk_stone_copper_ore"
        ]
    );
});

// // IMMERSIVE ENGINEERING - handled via config
// WorldgenEvents.remove(event => {
//     event.removeFeatureById(
//         'underground_ores', 
//         [
//   "immersiveengineering:ore_uranium",
//   "immersiveengineering:deepslate_ore_uranium",
//   "immersiveengineering:ore_silver",
//   "immersiveengineering:deepslate_ore_silver",
//   "immersiveengineering:ore_nickel",
//   "immersiveengineering:deepslate_ore_nickel",
//   "immersiveengineering:ore_aluminum",
//   "immersiveengineering:deepslate_ore_aluminum",
//   "immersiveengineering:ore_lead",
//   "immersiveengineering:deepslate_ore_lead"
//         ]
//     );
// });

// MEKANISM
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [
  "mekanism:osmium_ore",
  "mekanism:deepslate_osmium_ore",
  "mekanism:lead_ore",
  "mekanism:deepslate_lead_ore",
  "mekanism:tin_ore",
  "mekanism:deepslate_tin_ore",
  "mekanism:uranium_ore",
  "mekanism:deepslate_uranium_ore",
  "mekanism:fluorite_ore",
  "mekanism:deepslate_fluorite_ore"
        ]
    );
});

// MYTHIC BOTANY
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [
  "mythicbotany:gold_ore",
  "mythicbotany:dragonstone_ore",
  "mythicbotany:elementium_ore"
        ]
    );
});

// OCCULTISM
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [
  "occultism:silver_ore",
  "occultism:silver_ore_deepslate",
  "occultism:iesnium_ore"
        ]
    );
});

// POWAH
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [
  "powah:deepslate_uraninite_ore_poor",
  "powah:deepslate_uraninite_ore",
  "powah:deepslate_uraninite_ore_dense",
  "powah:uraninite_ore_poor",
  "powah:uraninite_ore",
  "powah:uraninite_ore_dense"
        ]
    );
});

// RF TOOLS
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [
  "rftoolsbase:dimensionalshard_overworld",
  "rftoolsbase:dimensionalshard_nether",
  "rftoolsbase:dimensionalshard_end",
  "rftoolsbase:dimshard_end",
  "rftoolsbase:dimshard_overworld",
  "rftoolsbase:dimshard_nether",
  "rftoolsbase:dimshard_end"
        ]
    );
});

// SILENT
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [
  "silentcompat:plasteel_ore",
  "silentcompat:plasteel_ore_placed",
  "silentcompat:voidmetal_ore",
  "silentcompat:voidmetal_ore_placed",
  "silentcompat:arcmetal_ore",
  "silentcompat:arcmetal_ore_placed",
  "silentcompat:solarmetal_ore",
  "silentcompat:solarmetal_ore_placed",
  "silentgear:bort_ore",
  "silentgear:deepslate_bort_ore",
  "silentgear:crimson_iron_ore",
  "silentgear:blackstone_iron_ore",
  "silentgear:azure_silver_ore"
        ]
    );
});

// THERMAL
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [
  "thermal:lead_ore",
  "thermal:deepslate_lead_ore",
  "thermal:nickel_ore",
  "thermal:deepslate_nickel_ore",
  "thermal:silver_ore",
  "thermal:deepslate_silver_ore",
  "thermal:tin_ore",
  "thermal:deepslate_in_ore",
  "thermal:apatite_ore",
  "thermal:deepslate_apatite_ore",
  "thermal:cinnabar_ore",
  "thermal:deepslate_cinnabar_ore",
  "thermal:niter_ore",
  "thermal:deepslate_niter_ore",
  "thermal:ruby_ore",
  "thermal:deepslate_ruby_ore",
  "thermal:sapphire_ore",
  "thermal:deepslate_sapphire_ore",
  "thermal:sulfur_ore",
  "thermal:deepslate_sulfur_ore",
  "thermal:oil_sand",
  "thermal:oil_red_sand"
        ]
    );
});