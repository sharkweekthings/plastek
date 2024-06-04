////
// misc.
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'minecraft:warden_ingot_smithing'})
  event.remove({id: 'angelring:energetic_angel_ring'})
  event.remove({id: 'angelring:leadstone_angel_ring'})
  event.remove({id: 'angelring:hardened_angel_ring'})
  event.remove({id: 'angelring:reinforced_angel_ring'})
  event.remove({id: 'angelring:resonant_angel_ring'})
  event.remove({id: 'angelring:diamond_ring'})
  event.remove({id: 'angelring:angel_ring'})
  event.remove({id: 'buildinggadgets:gadget_building'})
  event.remove({id: 'buildinggadgets:gadget_exchanging'})
  event.remove({id: 'buildinggadgets:gadget_copy_paste'})
  event.remove([{ type: 'minecraft:crafting_shaped', output: '#cfm:storage' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: '#cfm:storage' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: '#farmersdelight:cabinets' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: '#farmersdelight:cabinets' }])
  event.remove({id: 'compactmachines:personal_shrinking_device'})
  event.remove({id: 'constructionwand:stone_wand'})
  event.remove({id: 'constructionwand:iron_wand'})
  event.remove({id: 'constructionwand:diamond_wand'})
  event.remove({id: 'constructionwand:infinity_wand'})
  event.remove({id: 'deeperdarker:reinforced_echo_shard'})
  event.remove({id: 'enderstorage:ender_chest'})
  event.remove({id: 'enderstorage:ender_tank'})
  event.remove({id: 'enderstorage:ender_pouch'})
  event.remove({id: 'energeticsheep:energetic_shears'})
  event.remove({id: 'extendedcrafting:pedestal'})
  event.remove({id: 'extendedcrafting:basic_table'})
  event.remove({id: 'extendedcrafting:advanced_table'})
  event.remove({id: 'extendedcrafting:elite_table'})
  event.remove({id: 'extendedcrafting:ultimate_table'})
  event.remove({id: 'extendedcrafting:basic_auto_table'})
  event.remove({id: 'extendedcrafting:elite_auto_table'})
  event.remove({id: 'extendedcrafting:ultimate_auto_table'})
  event.remove({id: 'extendedcrafting:handheld_table'})
  event.remove({id: 'extendedcrafting:advanced_auto_table'})
  event.remove({id: 'extendedcrafting:compressor'})
  event.remove({id: 'cookingforblockheads:no_filter_edition'})
  event.remove({id: 'cookingforblockheads:recipe_book_smelting_from_nofilter'})
  event.remove({id: 'cookingforblockheads:recipe_book_smelting'})
  event.remove({id: 'cookingforblockheads:crafting_book'})
  event.remove({id: 'farmingforblockheads:feeding_trough'})
  event.remove({id: 'hostilenetworks:sim_chamber'})
  event.remove({id: 'hostilenetworks:loot_fabricator'})
  event.remove({id: 'hostilenetworks:living_matter/overworldian/iron_ingot'})
  event.remove({id: 'hostilenetworks:living_matter/hellish/ghast_tear'})
  event.remove({id: 'hostilenetworks:living_matter/hellish/gold_ingot'})
  event.remove({id: 'hostilenetworks:living_matter/hellish/blaze_rod'})
  event.remove({id: 'hostilenetworks:living_matter/hellish/blaze_powder'})
  event.remove({id: 'hostilenetworks:living_matter/extraterrestrial/nether_star'})
  event.remove({ mod: 'inventorypets' })
  event.remove({id: 'mythicbotany:mythicbotany_rune_rituals/kvasir_blood'})
  event.remove({id: 'mythicbotany:alfsteel_helmet_smithing'})
  event.remove({id: 'mythicbotany:alfsteel_chestplate_smithing'})
  event.remove({id: 'mythicbotany:alfsteel_leggings_smithing'})
  event.remove({id: 'mythicbotany:alfsteel_boots_smithing'})
  event.remove({id: 'natprog:crafting/saws/flint_saw'})
  event.remove({id: 'powah:crafting/reactor_starter'})
  event.remove({id: 'quark:tweaks/crafting/utility/misc/dispenser_bow'})
  event.remove({id: 'quark:tweaks/crafting/utility/misc/dispenser_no_bow'})
  event.remove({id: 'rangedpumps:pump'})
  event.remove({id: 'rftoolsbase:machine_frame'})
  event.remove({id: 'scannable:scanner'})
  event.remove({id: 'scannable:blank_module'})
  event.remove({id: 'shrink:shrinking_device'})
  event.remove({id: 'sophisticatedbackpacks:backpack'})
  event.remove({id: 'sophisticatedbackpacks:iron_backpack_from_copper'})
  event.remove({id: 'sophisticatedbackpacks:compacting_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:advanced_compacting_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:battery_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:inception_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:smelting_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:auto_smelting_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:smoking_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:auto_smoking_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:blasting_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:auto_blasting_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:upgrade_base'})
  event.remove({id: 'sophisticatedbackpacks:pump_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:tank_upgrade'})
  event.remove({id: 'sophisticatedbackpacks:advanced_pump_upgrade'})
  event.remove({id: 'storagenetwork:inventory'})
  event.remove({id: 'storagenetwork:exchange'})
  event.remove({id: 'storagenetwork:collector'})
  event.remove({id: 'storagenetwork:stock_upgrade'})
  event.remove({id: 'storagenetwork:operation_upgrade'})
  event.remove({id: 'storagenetwork:crafting_remote'})
  event.remove({id: 'storagenetwork:picker_remote'})
  event.remove({id: 'storagenetwork:collector_remote'})
  event.remove({id: 'storagenetwork:builder_remote'})
  event.remove({id: 'storagenetwork:master'})
  event.remove({id: 'supplementaries:soap/globe'})
  event.remove({id: 'supplementaries:globe_sepia'})
  event.remove({id: 'tempad:tempad'})
  event.remove({id: 'totemic:tipi_from_wool'})
  event.remove({id: 'totemic:leather_from_hide'})
  event.remove({id: 'twilightforest:wood/twilight_oak_chest'})
  event.remove({id: 'twilightforest:wood/canopy_chest'})
  event.remove({id: 'twilightforest:wood/mangrove_chest'})
  event.remove({id: 'twilightforest:wood/darkwood_chest'})
  event.remove({id: 'twilightforest:wood/time_chest'})
  event.remove({id: 'twilightforest:wood/transformation_chest'})
  event.remove({id: 'twilightforest:wood/mining_chest'})
  event.remove({id: 'twilightforest:wood/sorting_chest'})
  event.remove({id: 'waystones:warp_stone'})
  event.remove({id: 'waystones:warp_dust'})
  event.remove({id: 'waystones:return_scroll'})
  event.remove({id: 'waystones:bound_scroll'})
  event.remove({id: 'waystones:warp_scroll'})
  event.remove({id: 'waystones:warp_plate'})
  event.remove({id: 'waystones:portstone'})
  event.remove({id: 'apotheosis:enchanting/ender_library'})
  event.remove({id: 'apotheosis:simple_reforging_table'})
  event.remove({id: 'apotheosis:reforging_table'})
  event.remove({id: 'apotheosis:salvaging_table'})
  event.remove({id: 'apotheosis:gem_cutting_table'})
  event.remove({id: 'apotheosis:hellshelf'})
  event.remove({id: 'minecraft:flower_pot'})
  event.remove({id: 'botanypots:terracotta_botany_pot'})
  event.remove({id: 'supplementaries:soap_clean_botanypots_terracotta_hopper_botany_pot'})
  // event.remove({ output: "#botanypots:essences"})
  event.remove({id: 'botanypots:botanypots/crafting/terracotta_botany_pot'})
  event.remove({id: 'botanypots:botanypots/crafting/terracotta_compact_hopper_botany_pot'})
  event.remove({id: 'sleep_tight:dreamer_essence'})
  event.remove({id: 'compactmachines:machine_tiny'})
  event.remove({id: 'compactmachines:machine_small'})
  event.remove({id: 'compactmachines:machine_normal'})
  event.remove({id: 'compactmachines:machine_large'})
  event.remove({id: 'compactmachines:machine_giant'})
  event.remove({id: 'compactmachines:machine_maximum'})
  event.remove({id: 'compactmachines:wall'})
  event.remove({id: 'twilightforest:uncrafting_table'})
  event.remove({id: 'totemic:medicine_bag'})
  event.remove({id: 'hostilenetworks:empty_prediction'})
  event.remove({id: 'powah:crafting/cable_starter'})
  event.remove({id: 'powah:crafting/cable_basic_2'})
  event.remove({id: 'powah:crafting/energizing_rod_starter'})
  event.remove({id: 'powah:crafting/energizing_orb'})
  event.remove({id: 'powah:crafting/player_tranmitter_starter'})
  event.remove({id: 'powah:crafting/ender_gate_starter'})
  event.remove({id: 'hostilenetworks:matrix'})
  event.remove({id: 'rootsclassic:growth_powder'})
  event.remove({id: 'cookingforblockheads:cooking_table'})
  event.remove({id: 'cookingforblockheads:oven'})
  event.remove({id: 'cookingforblockheads:fridge'})
  event.remove({id: 'cookingforblockheads:sink'})
  event.remove({id: 'cookingforblockheads:kitchen_counter'})
  event.remove({id: 'cookingforblockheads:kitchen_cabinet'})
  event.remove({id: 'cookingforblockheads:kitchen_corner'})
  event.remove({id: 'cookingforblockheads:hanging_corner'})
  event.remove({id: 'simplehats:hatdisplay'})
  event.remove({id: 'simplehats:hatbag_common'})
  event.remove({id: 'simplehats:hatbag_uncommon'})
  event.remove({id: 'simplehats:hatbag_rare'})
  event.remove({id: 'simplehats:hatbag_epic'})
  event.remove({id: 'simplehats:hatbag_easter'})
  event.remove({id: 'simplehats:hatbag_summer'})
  event.remove({id: 'simplehats:hatbag_halloween'})
  event.remove({id: 'simplehats:hatbag_festive'})
  event.remove({id: 'relics:researching_table'})
  event.remove({id: 'alexsmobs:kangaroo_hide_to_leather'})
  event.remove({id: 'rootsclassic:pestle'})
  event.remove({id: 'constructionwands:misc/infinity_wand'})
  event.remove({id: 'create:crushing/dense_construction_block'})
  event.remove({id: 'create:milling/dense_construction_block'})
  event.remove({id: 'botanytrees:twilightforest/miners_tree'})
  event.remove({id: 'twilightforest:botanypots/trees/mining'})
  event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
  event.remove({id: 'deeperdarker:warden_sword_smithing'})
  event.remove({id: 'alexsmobs:bonemeal_from_fish_bones'})
  event.remove({id: 'tiab:time_in_a_bottle'})
  event.remove({id: 'pamhc2crops:slimeball_aloe'})
  event.remove({id: 'quark:tweaks/crafting/utility/bent/bread'})
  event.remove({id: 'minecraft:bread'})
  event.remove({id: 'pamhc2crops:bread_grain'})
  event.remove({id: 'farmersdelight:wheat_dough_from_water'})
  event.remove({id: 'farmersdelight:wheat_dough_from_eggs'})
  event.remove({id: 'pamhc2foodcore:doughitem_x2'})
  event.remove({id: 'powah:crafting/dielectric_paste_2'})
  event.remove({id: 'farmersdelight:organic_compost_from_tree_bark'})
  event.remove([{ type: 'minecraft:smelting', output: '#forge:ingots' }, { type: 'minecraft:blasting', output: '#forge:ingots' }])
  // event.remove({type: 'minecraft:smelting', output: /^minecraft:.*/})
//
//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Wooden Hopper
  event.shaped('woodenhopper:wooden_hopper',
    ['1 1','121',' 1 '], {
    1: '#forge:treated_wood',
    2: '#forge:chests/wooden'}).id('woodenhopper:wooden_hopper')

// Redstone Ingot
  event.shaped('extendedcrafting:redstone_ingot',
    ['111','121','111'], {
    1: 'mekanism:enriched_redstone',
    2: 'silentgear:azure_electrum_ingot'}).id('extendedcrafting:redstone_ingot')

// Researching Table
  event.shaped('relics:researching_table',
    ['343','212','333'], {
    1: 'immersiveengineering:craftingtable',
    2: 'minecraft:gold_block',
    3: 'minecraft:gold_ingot',
    4: 'minecraft:red_carpet'}).id('relics:researching_table')

// Common Hat Bag
  event.shaped('simplehats:hatbag_common',
    ['222','212','222'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_common'}).id('simplehats:hatbag_common')

// Uncommon Hat Bag
  event.shaped('simplehats:hatbag_uncommon',
    ['222','212','222'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_uncommon'}).id('simplehats:hatbag_uncommon')

// Rare Hat Bag
  event.shaped('simplehats:hatbag_rare',
    ['222','212','222'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_rare'}).id('simplehats:hatbag_rare')

// Epic Hat Bag
  event.shaped('simplehats:hatbag_epic',
    ['232','313','232'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_uncommon',
    3: 'simplehats:hatscraps_rare'}).id('simplehats:hatbag_epic')

// Easter Hat Bag
  event.shaped('simplehats:hatbag_easter',
    ['222','212','222'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_easter'}).id('simplehats:hatbag_easter')

// Summer Hat Bag
  event.shaped('simplehats:hatbag_summer',
    ['222','212','222'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_summer'}).id('simplehats:hatbag_summer')

// Sturdy Stone
  event.shaped('quark:sturdy_stone',
    ['111','121','111'], {
    1: 'minecraft:cobblestone',
    2: 'minecraft:gravel'}).id('quark:building/crafting/sturdy_stone')

// Halloween Hat Bag
  event.shaped('simplehats:hatbag_halloween',
    ['222','212','222'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_halloween'}).id('simplehats:hatbag_halloween')

// Festive Hat Bag
  event.shaped('simplehats:hatbag_festive',
    ['222','212','222'], {
    1: 'supplementaries:sack',
    2: 'simplehats:hatscraps_festive'}).id('simplehats:hatbag_festive')

// Hat Stand
  event.shaped('simplehats:hatdisplay',
    ['2 2','212','2 2'], {
    1: 'supplementaries:pedestal',
    2: '#forge:treated_wood'}).id('simplehats:hatdisplay')


// Cooking Table
  event.shaped('cookingforblockheads:cooking_table',
    ['111','343','222'], {
    1: 'tombstone:white_marble_slab',
    2: 'minecraft:terracotta',
    3: 'industrialforegoing:plastic',
    4: 'cookingforblockheads:crafting_book'}).id('cookingforblockheads:misc/cooking_table')

// Oven
  event.shaped('cookingforblockheads:oven',
    ['121','242','333'], {
    1: 'tombstone:white_marble_slab',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:plastic',
    4: 'minecraft:furnace'}).id('cookingforblockheads:misc/oven')

// Fridge
  event.shaped('cookingforblockheads:fridge',
    ['323','242','313'], {
    1: 'minecraft:iron_door',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:plastic',
    4: 'minecraft:chest'}).id('cookingforblockheads:misc/fridge')

// Sink
  event.shaped('cookingforblockheads:sink',
    ['222','343','111'], {
    1: 'minecraft:terracotta',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:plastic',
    4: 'minecraft:bucket'}).id('cookingforblockheads:misc/sink')

// Counter
  event.shaped('cookingforblockheads:counter',
    ['111','333','424'], {
    1: 'minecraft:smooth_stone_slab',
    2: 'minecraft:chest',
    3: 'industrialforegoing:plastic',
    4: '#forge:treated_wood'}).id('cookingforblockheads:misc/counter')

// Cabinet
  event.shaped('cookingforblockheads:cabinet',
    ['222','222','212'], {
    1: 'minecraft:chest',
    2: '#forge:treated_wood'}).id('cookingforblockheads:misc/cabinet')

// Corner
  event.shaped('cookingforblockheads:corner',
    ['111','222','222'], {
    1: 'minecraft:smooth_stone_slab',
    2: '#forge:treated_wood'}).id('cookingforblockheads:misc/corner')

// Hanging Corner
  event.shaped('cookingforblockheads:hanging_corner',
    ['111','111','1 1'], {
    1: '#forge:treated_wood'}).id('cookingforblockheads:misc/hanging_corner')

// Medicine Bag
  event.shaped('totemic:medicine_bag',
    ['343','121','353'], {
    1: 'totemic:buffalo_hide',
    2: 'sophisticatedbackpacks:backpack',
    3: 'rootsclassic:growth_powder',
    4: 'botania:terrasteel_block',
    5: 'botania:mana_diamond'}).id('totemic:medicine_bag')

// Compact Machine Wall
  event.shaped('4x compactmachines:wall',
    ['212','121','212'], {
    1: 'compressium:stone_2',
    2: 'minecraft:polished_deepslate'}).id('compactmachines:misc/wall_4x')

// Compact Machines Tiny
  event.shaped('compactmachines:machine_tiny',
    ['313','121','313'], {
    1: 'compactmachines:wall',
    2: 'minecraft:copper_block',
    3: 'pneumaticcraft:plastic'}).id('compactmachines:misc/machine_tiny')

// Compact Machines Small
  event.shaped('compactmachines:machine_small',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'minecraft:iron_block',
    3: 'compactmachines:machine_tiny'}).id('compactmachines:misc/machine_small')

// Compact Machines Normal
  event.shaped('compactmachines:machine_normal',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'emendatusenigmatica:electrum_block',
    3: 'compactmachines:machine_small'}).id('compactmachines:misc/machine_normal')

// Compact Machines Large
  event.shaped('compactmachines:machine_large',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'emendatusenigmatica:steel_block',
    3: 'compactmachines:machine_normal'}).id('compactmachines:misc/machine_large')

// Compact Machines Giant
  event.shaped('compactmachines:machine_giant',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'minecraft:diamond_block',
    3: 'compactmachines:machine_large'}).id('compactmachines:misc/machine_giant')

// Compact Machines Maximum
  event.shaped('compactmachines:machine_maximum',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'minecraft:emerald_block',
    3: 'compactmachines:machine_giant'}).id('compactmachines:misc/machine_maximum')

// Building Gadget
  event.shaped('buildinggadgets:gadget_building',
    [' 3 ','313','323'], {
    1: 'constructionwand:diamond_wand',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'}).id('buildinggadgets:misc/gadget_building')

// Destruction Gadget
  event.shaped('buildinggadgets:gadget_destruction',
    ['333','313','323'], {
    1: 'buildinggadgets:gadget_building',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'}).id('buildinggadgets:gadget_destruction')

// Dreamer Essence
  event.shaped('sleep_tight:dreamer_essence',
    ['353','242','313'], {
    1: 'minecraft:blaze_powder',
    2: 'botania:terrasteel_ingot',
    3: 'pneumaticcraft:plastic',
    4: 'quark:seed_pouch',
    5: 'minecraft:purple_dye'}).id('sleep_tight:misc/dreamer_essence')

// Exchanging Gadget
  event.shaped('buildinggadgets:gadget_exchanging',
    ['323','313','3 3'], {
    1: 'constructionwand:diamond_wand',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'}).id('buildinggadgets:misc/gadget_exchanging')

// Copy Paste Gadget
  event.shaped('buildinggadgets:gadget_copy_paste',
    [' 2 ','313','333'], {
    1: 'constructionwand:diamond_wand',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'}).id('buildinggadgets:misc/gadget_copy_paste')

// Personal Shrinking Device
  event.shaped('compactmachines:personal_shrinking_device',
    ['111','121','133'], {
    1: 'pneumaticcraft:plastic',
    2: 'minecraft:ender_eye',
    3: 'occultism:spirit_attuned_gem'}).id('compactmachines:misc/personal_shrinking_device')

// Stone Wand
  event.shaped('constructionwand:stone_wand',
    ['  2',' 1 ','1  '], {
    1: 'immersiveengineering:stick_treated',
    2: 'compressium:stone_2'}).id('constructionwand:misc/stone_wand')

// Iron Wand
  event.shaped('constructionwand:iron_wand',
    ['  2',' 1 ','1  '], {
    1: 'immersiveengineering:stick_treated',
    2: 'compressium:iron_2'}).id('constructionwand:misc/iron_wand')

// Diamond Wand
  event.shaped('constructionwand:diamond_wand',
    ['  2',' 1 ','1  '], {
    1: 'immersiveengineering:stick_treated',
    2: 'compressium:diamond_2'}).id('constructionwand:misc/diamond_wand')

// Ender Chest
  event.shaped('enderstorage:ender_chest',
    ['232','313','232'], {
    1: 'pneumaticcraft:smart_chest',
    2: 'ae2:ender_dust',
    3: 'emendatusenigmatica:enderium_ingot'}).id('enderstorage:misc/ender_chest')

// Ender Tank
  event.shaped('enderstorage:ender_tank',
    ['232','313','232'], {
    1: 'pneumaticcraft:huge_tank',
    2: 'ae2:ender_dust',
    3: 'emendatusenigmatica:enderium_ingot'}).id('enderstorage:misc/ender_tank')

// Ender Pouch
  event.shaped('enderstorage:ender_pouch',
    ['232','313','232'], {
    1: 'sophisticatedbackpacks:netherite_backpack',
    2: 'ae2:ender_dust',
    3: 'emendatusenigmatica:enderium_ingot'}).id('enderstorage:misc/ender_pouch')

// Slightly Evil Basket
  event.shaped('farmersdelight:basket', 
    ['131','232','121'], {
    1: 'minecraft:bamboo', 
    2: 'farmersdelight:canvas',
    3: 'immersiveengineering:hemp_fiber'}).id('farmersdelight:basket')

// Market Block    
  event.shaped('farmingforblockheads:market',
    ['212','4 4','535'], {
    1: 'minecraft:white_carpet', 
    2: 'pneumaticcraft:plastic',
    3: 'minecraft:red_carpet',
    4: 'emendatusenigmatica:iron_rod',
    5: '#minecraft:planks'}).id('farmingforblockheads:market')

// Lapis Lazuli
  event.shaped('minecraft:lapis_lazuli',
    ['111','111','111'], {
    1: 'inventorypets:nugget_lapis'}).id('minecraft:misc/lapis_lazuli')

// Ender Nugget > Pearl
  event.shaped('minecraft:ender_pearl',
    ['111','111','111'], {
    1: 'inventorypets:nugget_ender'}).id('minecraft:misc/ender_pearl')

// Emerald Shard Gets Replaced w/ Emerald Nugget
event.replaceInput({}, 'silentgear:emerald_shard', 'inventorypets:nugget_emerald')

// Diamond Shard Gets Replaced w/ Diamond Nugget
event.replaceInput({}, 'silentgear:diamond_shard', 'inventorypets:nugget_diamond')

// AE2 Ender Dust override
event.replaceOutput({}, 'thermal:ender_pearl_dust', 'ae2:ender_dust')

// Diamond Shard Gets Replaced w/ Diamond Nugget
event.replaceInput({}, 'mekanism:dust_quartz', 'thermal:quartz_dust')

// Emerald Shard Gets Replaced w/ Emerald Nugget
event.replaceInput({}, 'farmersdelight:wheat_dough', 'create:dough')

// Emerald Shard Gets Replaced w/ Emerald Nugget
event.replaceInput({}, 'pamhc2foodcore:doughitem', 'create:dough')

// Crude Ender Pearl
  event.shaped('kubejs:crude_ender_pearl',
    ['232','313','232'], {
    1: 'minecraft:slime_ball',
    2: 'rootsclassic:verdant_sprig',
    3: 'minecraft:brown_dye'}).id('kubejs:misc/crude_ender_pearl')

// Rawhide    
  event.shaped('kubejs:rawhide',
    ['111','1 1','111'], {
    1: 'silentgear:leather_scrap'}).id('kubejs:misc/rawhide')

// Durable Rawhide    
  event.shaped('kubejs:durable_rawhide',
    ['111','121','111'], {
    1: 'silentgear:leather_scrap',
    2: '#rootsclassic:barks'}).id('kubejs:misc/durable_rawhide')

// Cheap Plastic Engine
  event.shaped('kubejs:cheap_plastic_engine',
    ['111','121','131'], {
    1: 'industrialforegoing:plastic',
    2: 'create:large_cogwheel',
    3: 'create:brass_casing'}).id('kubejs:misc/cheap_plastic_engine')

// Cheap Plastic Tank
  event.shaped('kubejs:cheap_plastic_tank',
    ['113','123','113'], {
    1: 'industrialforegoing:plastic',
    2: 'ad_astra:oxygen_tank',
    3: 'emendatusenigmatica:iron_rod'}).id('kubejs:misc/cheap_plastic_tank')

// Cheap Plastic Rocket Fin
  event.shaped('kubejs:cheap_plastic_rocket_fin',
    [' 1 ','222','1 1'], {
    1: 'industrialforegoing:plastic',
    2: 'pneumaticcraft:ingot_iron_compressed'}).id('kubejs:misc/cheap_plastic_rocket_fin')

// Cheap Plastic Rocket Nose Cone
  event.shaped('kubejs:cheap_plastic_rocket_nose_cone',
    [' 2 ',' 1 ','111'], {
    1: 'industrialforegoing:plastic',
    2: 'botania:mana_pearl'}).id('kubejs:misc/cheap_plastic_rocket_nose_cone')

// Mason Jar
  event.shaped('kubejs:mason_jar',
    ['   ','1 1',' 1 '], {
    1: 'pneumaticcraft:pressure_chamber_glass'}).id('kubejs:misc/mason_jar')

// Flint Saw
  event.shaped('natprog:flint_saw',
    ['   ','111','222'], {
    1: '#minecraft:slabs',
    2: 'minecraft:flint'}).id('kubejs:misc/flint_saw')

// Starter Reactor
  event.shaped('powah:reactor_starter',
    ['232','415','232'], {
    1: 'powah:dielectric_casing',
    2: 'powah:uraninite',
    3: 'powah:capacitor_basic_tiny',
    4: 'pneumaticcraft:capacitor',
    5: 'pneumaticcraft:transistor'}).id('powah:misc/reactor_starter')

// Ranged Pump
  event.shaped('rangedpumps:pump',
    ['121','354','121'], {
    1: 'powah:steel_energized',
    2: 'minecraft:diamond_block',
    3: 'minecraft:lava_bucket',
    4: 'minecraft:water_bucket',
    5: 'immersiveengineering:fluid_pump'}).id('rangedpumps:misc/pump')

// Replace RF Tools Machine Frame w/ Industrial Foregoing
event.replaceInput({ input: 'rftoolsbase:machine_frame' },'rftoolsbase:machine_frame','industrialforegoing:machine_frame_advanced')


// Bark Knife
  event.shaped('rootsclassic:bark_knife',
    [' 4 ','121',' 3 '], {
    1: 'emendatusenigmatica:copper_crystal',
    2: 'natprog:bone_knife',
    3: 'minecraft:stick',
    4: 'minecraft:green_dye'}).id('rootsclassic:bark_knife')

// Mortar
  event.shaped('rootsclassic:mortar',
    ['2 2','1 1',' 1 '], {
    1: 'compressium:stone_1',
    2: 'minecraft:stone'}).id('rootsclassic:mortar')

// Pestle
  event.shaped('rootsclassic:pestle',
    ['  1','11 ','22 '], {
    1: 'compressium:diorite_1',
    2: 'minecraft:diorite'}).id('rootsclassic:pestle2')

// Imbuer
  event.shaped('rootsclassic:imbuer',
    ['212','131','212'], {
    1: 'compressium:stone_1',
    2: 'emendatusenigmatica:gold_rod',
    3: 'rootsclassic:verdant_sprig'}).id('rootsclassic:imbuer')

// Scanner
  event.shaped('scannable:scanner',
    ['222','212','232'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'pneumaticcraft:plastic',
    3: '#minecraft:buttons'}).id('scannable:misc/scanner')

// Blank Module
  event.shaped('scannable:blank_module',
    ['333','212','333'], {
    1: 'prettypipes:blank_module',
    2: 'rootsclassic:growth_powder',
    3: 'pneumaticcraft:plastic'}).id('scannable:misc/blank_module')

// Personal Shrinking Device
  event.shaped('shrink:shrinking_device',
    ['111','242','131'], {
    1: 'mekanism:hdpe_sheet',
    2: 'minecraft:black_dye',
    3: 'pneumaticcraft:printed_circuit_board',
    4: 'compactmachines:personal_shrinking_device'}).id('shrink:misc/shrinking_device')

// Basic Backpack
  event.shaped('sophisticatedbackpacks:backpack', 
    ['434','414','232'], {
    1: 'farmersdelight:basket', 
    2: 'minecraft:leather',
    3: 'totemic:buffalo_hide',
    4: 'minecraft:string'}).id('sophisticatedbackpacks:misc/backpack')

// Upgrade Base
  event.shaped('sophisticatedbackpacks:upgrade_base', 
    ['434','121','434'], {
    1: 'totemic:buffalo_hide', 
    2: 'minecraft:leather',
    3: 'minecraft:iron_ingot',
    4: '#forge:string'}).id('sophisticatedbackpacks:misc/upgrade_base')

// Master
  event.shaped('storagenetwork:master',
    ['222','212','222'], {
    1: 'functionalstorage:storage_controller',
    2: 'industrialforegoing:plastic'}).id('storagenetwork:master')

// Request
  event.shaped('storagenetwork:request',
    ['222','212','222'], {
    1: 'minecraft:chest',
    2: 'industrialforegoing:plastic'}).id('storagenetwork:request')

// Network Cable
  event.shaped('4x storagenetwork:kabel',
    ['222','212','222'], {
    1: 'minecraft:iron_ingot',
    2: 'industrialforegoing:plastic'}).id('storagenetwork:kabel')

// Storage Remote
  event.shaped('storagenetwork:inventory_remote',
    ['142','132','142'], {
    1: 'pneumaticcraft:plastic',
    2: 'industrialforegoing:plastic',
    3: 'storagenetwork:master',
    4: '#minecraft:buttons'}).id('storagenetwork:inventory_remote')

// Slightly Evil Basket
  event.shaped('supplementaries:bellows', 
    ['333','121','333'], {
    1: 'minecraft:leather', 
    2: 'totemic:buffalo_hide',
    3: '#minecraft:slabs'}).id('supplementaries:bellows')

// Tempad
  event.shaped('tempad:tempad',
    ['111','121','131'], {
    1: 'mekanism:hdpe_sheet',
    2: 'powah:ender_core',
    3: 'pneumaticcraft:printed_circuit_board'}).id('tempad:tempad')

// Totem Whittling Knife
  event.shaped('totemic:totem_whittling_knife',
    ['  3',' 42','1  '], {
    1: 'minecraft:stick', 
    2: 'minecraft:flint',
    3: 'emendatusenigmatica:iron_plate',
    4: 'rootsclassic:verdant_sprig'}).id('totemic:totem_whittling_knife')
    
// Warp Stone
  event.shaped('waystones:warp_stone',
    ['212','131','212'], {
    1: 'botania:dragonstone',
    2: 'minecraft:ender_pearl',
    3: 'minecraft:amethyst_shard'}).id('waystones:misc/warp_stone')
    
// Library of Alexandria
  event.shaped('apotheosis:ender_library', 
    ['121','232','121'], {
    1: 'mysticalagradditions:insanium_essence',
    2: 'apotheosis:infused_hellshelf',
    3: 'minecraft:enchanting_table'}).id('apotheosis:ender_library')

// Gem Cutting Table
  event.shaped('apotheosis:gem_cutting_table', 
    ['131','323','3 3'], {
    1: 'minecraft:shears',
    2: 'occultism:spirit_attuned_gem',
    3: '#forge:treated_wood'}).id('apotheosis:gem_cutting_table')

// Salvaging Table
  event.shaped('apotheosis:salvaging_table', 
    ['111','343','525'], {
    1: 'minecraft:copper_ingot',
    2: 'apotheosis:gem_dust',
    3: 'minecraft:iron_pickaxe',
    4: 'minecraft:smithing_table',
    5: '#forge:treated_wood'}).id('apotheosis:salvaging_table')
    
// Simple Reforging Table
  event.shaped('apotheosis:simple_reforging_table', 
    ['121','131','141'], {
    1: 'industrialforegoing:plastic',
    2: 'occultism:spirit_attuned_gem',
    3: 'minecraft:enchanting_table',
    4: 'apotheosis:gem_dust'}).id('apotheosis:simple_reforging_table')
    
// Reforging Table
  event.shaped('apotheosis:reforging_table', 
    ['111','232','444'], {
    1: 'minecraft:netherite_ingot',
    2: 'apotheosis:epic_material',
    3: 'apotheosis:simple_reforging_table',
    4: 'minecraft:nether_bricks'}).id('apotheosis:reforging_table')

// Flower Pot
  event.shaped('minecraft:flower_pot',
    ['222','121','212'], {
    1: 'minecraft:brick',
    2: 'minecraft:clay_ball'}).id('minecraft:misc/flower_pot')

// Botany Pot
  event.shaped('botanypots:terracotta_botany_pot',
    ['323','212','323'], {
    1: 'supplementaries:planter',
    2: 'minecraft:terracotta',
    3: 'rootsclassic:growth_powder'}).id('botanypots:misc/terracotta_botany_pot')

// Botany Pot
  event.shaped('botanypots:terracotta_botany_pot',
    ['323','212','323'], {
    1: 'supplementaries:planter_rich',
    2: 'minecraft:terracotta',
    3: 'rootsclassic:growth_powder'}).id('botanypots:botanypots/crafting/terracotta_botany_pot')

// Alfsteel Helmet
  event.shaped('mythicbotany:alfsteel_helmet',
    [' 3 ','222','212'], {
    1: 'botania:terrasteel_helmet',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'}).id('mythicbotany:misc/alfsteel_helmet')

// Alfsteel Chestplate
  event.shaped('mythicbotany:alfsteel_chestplate',
    ['232','212','222'], {
    1: 'botania:terrasteel_chestplate',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'}).id('mythicbotany:misc/alfsteel_chestplate')

// Alfsteel Leggings
  event.shaped('mythicbotany:alfsteel_leggings',
    ['222','212','232'], {
    1: 'botania:terrasteel_leggings',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'}).id('mythicbotany:misc/alfsteel_leggings')

// Alfsteel Boots
  event.shaped('mythicbotany:alfsteel_boots',
    ['   ','232','212'], {
    1: 'botania:terrasteel_boots',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'}).id('mythicbotany:misc/alfsteel_boots')

// Choco Disguise  Helmet
  event.shaped('chococraft:choco_disguise_helmet', 
    ['232','313','232'], {
    1: 'minecraft:leather_helmet',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'}).id('chococraft:misc/choco_disguise_helmet')

// Choco Disguise Chestplate
  event.shaped('chococraft:choco_disguise_chestplate', 
    ['232','313','232'], {
    1: 'minecraft:leather_chestplate',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'}).id('chococraft:misc/choco_disguise_chestplate')

// Choco Disguise  Leggings
  event.shaped('chococraft:choco_disguise_leggings', 
    ['232','313','232'], {
    1: 'minecraft:leather_leggings',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'}).id('chococraft:misc/choco_disguise_leggings')

// Choco Disguise  Boots
  event.shaped('chococraft:choco_disguise_boots', 
    ['232','313','232'], {
    1: 'minecraft:leather_boots',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'}).id('chococraft:misc/choco_disguise_boots')

// Empty Parts Box
  event.shaped('kubejs:empty_parts_box', 
    ['111','121','111'], {
    1: '#forge:sawdust',
    2: 'minecraft:chest'}).id('kubejs:misc/empty_parts_box')

// Time in a Bottle Parts
  event.shaped('kubejs:time_in_a_bottle_parts', 
    ['515','323','646'], {
    1: 'kubejs:empty_parts_box',
    2: 'botania:mana_bottle',
    3: 'botania:dragonstone',
    4: 'pneumaticcraft:printed_circuit_board',
    5: 'pneumaticcraft:plastic',
    6: 'pneumaticcraft:plastic_bucket'}).id('misc/time_in_a_bottle')

// Advanced Pressure Tube Parts
  event.shaped('kubejs:advanced_pressure_tube_parts', 
    ['323','212','323'], {
    1: 'kubejs:empty_parts_box',
    2: 'pneumaticcraft:reinforced_pressure_tube',
    3: 'minecraft:diamond'}).id('kubejs:misc/advanced_pressure_tube_parts')

// Empty PCB Parts
  event.shaped('kubejs:empty_pcb_parts', 
    ['353','212','343'], {
    1: 'kubejs:empty_parts_box',
    2: 'emendatusenigmatica:electrum_plate',
    3: 'emendatusenigmatica:aluminum_plate',
    4: 'pneumaticcraft:empty_pcb',
    5: 'create:electron_tube'}).id('kubejs:misc/empty_pcb_parts')

// Netherite Drill Parts
  event.shaped('kubejs:netherite_drill_bit_parts', 
    ['333','212','333'], {
    1: 'kubejs:empty_parts_box',
    2: 'pneumaticcraft:unassembled_netherite_drill_bit',
    3: 'thermal:netherite_nugget'}).id('kubejs:misc/netherite_drill_bit_parts')

// Pressure Chamber Valve Parts
  event.shaped('kubejs:pressure_chamber_valve_parts', 
    ['424','212','434'], {
    1: 'kubejs:empty_parts_box',
    2: 'pneumaticcraft:plastic',
    3: 'pneumaticcraft:reinforced_pressure_tube',
    4: 'emendatusenigmatica:steel_plate'}).id('kubejs:misc/pressure_chamber_valve_parts')

// Stirling Dynamo Parts
  event.shaped('kubejs:stirling_dynamo_parts',
    ['545','232','216'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:machine_frame_simple',
    4: 'thermal:coal_coke_block',
    5: 'pneumaticcraft:plastic',
    6: 'kubejs:empty_parts_box'}).id('kubejs:misc/stirling_dynamo_parts')

// Gourmand Dynamo Parts
  event.shaped('kubejs:gourmand_dynamo_parts',
    ['545','232','216'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:machine_frame_simple',
    4: 'thermal:potato_block',
    5: 'pneumaticcraft:plastic',
    6: 'kubejs:empty_parts_box'}).id('kubejs:misc/gourmand_dynamo_parts')

// Pneumatic Dynamo Parts
  event.shaped('kubejs:pneumatic_dynamo_parts',
    ['545','232','216'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:machine_frame_simple',
    4: 'pneumaticcraft:advanced_pressure_tube',
    5: 'pneumaticcraft:plastic',
    6: 'kubejs:empty_parts_box'}).id('kubejs:misc/pneumatic_dynamo_parts')

// Compression Dynamo Parts
  event.shaped('kubejs:compression_dynamo_parts',
    ['545','232','216'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:machine_frame_simple',
    4: 'ad_astra:fuel_bucket',
    5: 'pneumaticcraft:plastic',
    6: 'kubejs:empty_parts_box'}).id('kubejs:misc/compression_dynamo_parts')

// Dissolution Chamber Parts
  event.shaped('kubejs:dissolution_chamber_parts',
    ['545','232','216'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'emendatusenigmatica:steel_plate',
    3: 'industrialforegoing:machine_frame_pity',
    4: 'minecraft:bucket',
    5: 'pneumaticcraft:plastic',
    6: 'kubejs:empty_parts_box'}).id('kubejs:misc/dissolution_chamber_parts')

// Fluid Cell Parts
  event.shaped('kubejs:fluid_cell_parts',
    ['343','212','645'], {
    1: 'thermal:fluid_cell_frame',
    2: 'thermal:redstone_servo',
    3: 'emendatusenigmatica:iron_plate',
    4: 'pneumaticcraft:plastic',
    5: 'kubejs:empty_parts_box',
    6: 'pneumaticcraft:printed_circuit_board'}).id('kubejs:misc/fluid_cell_parts')

// Simulation Chamber Parts
  event.shaped('kubejs:simulation_chamber_parts',
    ['353','414','326'], {
    1: 'industrialforegoing:machine_frame_advanced',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic',
    4: 'minecraft:goat_spawn_egg',
    5: 'minecraft:black_dye',
    6: 'kubejs:empty_parts_box'}).id('kubejs:misc/simulation_chamber_parts')

// Loot Fabricator Parts
  event.shaped('kubejs:loot_fabricator_parts',
    ['353','414','326'], {
    1: 'industrialforegoing:machine_frame_advanced',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic',
    4: 'minecraft:donkey_spawn_egg',
    5: 'minecraft:black_dye',
    6: 'kubejs:empty_parts_box'}).id('kubejs:misc/loot_fabricator_parts')

// Digital Miner Parts
  event.shaped('kubejs:digital_miner_parts',
    ['333','262','415'], {
  1: 'pneumaticcraft:printed_circuit_board',
  2: 'thermal:lead_plate',
  3: 'thermal:netherite_plate',
  4: 'pneumaticcraft:plastic',
  5: 'kubejs:empty_parts_box',
  6: 'industrialforegoing:machine_frame_supreme'}).id('kubejs:misc/digital_miner_parts')

// Prediction Matrix Parts
  event.shaped('kubejs:empty_prediction_parts',
    ['434','212','435'], {
  1: 'thermal:enderium_glass',
  2: 'emendatusenigmatica:brass_plate',
  3: 'emendatusenigmatica:steel_plate',
  4: 'pneumaticcraft:plastic',
  5: 'kubejs:empty_parts_box'}).id('kubejs:misc/empty_prediction_parts')

// Energy Cable Starter Parts
  event.shaped('kubejs:energy_cable_starter_parts',
    ['111','232','114'], {
  1: 'powah:dielectric_rod_horizontal',
  2: 'emendatusenigmatica:steel_rod',
  3: 'powah:capacitor_basic_tiny',
  4: 'kubejs:empty_parts_box'}).id('kubejs:misc/energy_cable_starter_parts')

// Energizing Rod Starter Parts
  event.shaped('kubejs:energizing_rod_starter_parts',
    ['242','232','215'], {
  1: 'powah:dielectric_rod',
  2: 'powah:capacitor_basic_tiny',
  3: 'powah:dielectric_casing',
  4: 'ae2:charged_certus_quartz_crystal',
  5: 'kubejs:empty_parts_box'}).id('kubejs:misc/energizing_rod_starter_parts')

// Energizing Orb Parts
  event.shaped('kubejs:energizing_orb_parts',
    ['333','313','224'], {
  1: 'powah:dielectric_casing',
  2: 'powah:dielectric_rod_horizontal',
  3: 'ae2:charged_certus_quartz_crystal',
  4: 'kubejs:empty_parts_box'}).id('kubejs:misc/energizing_orb_parts')

// Ender Gate Starter Parts
  event.shaped('kubejs:ender_gate_starter_parts',
    ['414','121','435'], {
  1: 'powah:energy_cable_starter',
  2: 'powah:ender_core',
  3: 'emendatusenigmatica:plasteel_gear',
  4: 'emendatusenigmatica:plasteel_plate',
  5: 'kubejs:empty_parts_box'}).id('kubejs:misc/ender_gate_starter_parts')

// Player Transmitter Starter Parts
  event.shaped('kubejs:player_transmitter_starter_parts',
    [' 1 ','232','435'], {
  1: 'powah:player_aerial_pearl',
  2: 'powah:capacitor_basic_tiny',
  3: 'powah:dielectric_casing',
  4: 'powah:dielectric_rod',
  5: 'kubejs:empty_parts_box'}).id('kubejs:misc/player_transmitter_starter_parts')

// Green Powder (Growth Powder)
  event.shaped('rootsclassic:growth_powder',
    ['212','373','456'], {
  1: 'rootsclassic:old_root',
  2: '#rootsclassic:barks',
  3: 'rootsclassic:verdant_sprig',
  4: 'minecraft:wheat_seeds',
  5: 'minecraft:grass',
  6: 'rootsclassic:pestle',
  7: '#rootsclassic:berries'}).id('rootsclassic:misc/growth_powder')

  // Healing Poultice
  event.shaped('rootsclassic:healing_poultice',
    ['434','212','525'], {
  1: 'minecraft:paper',
  2: 'rootsclassic:growth_powder',
  3: 'rootsclassic:verdant_sprig',
  4: '#rootsclassic:berries',
  5: 'emendatusenigmatica:gold_plate'}).id('rootsclassic:healing_poultice')

  // Sea Shelf
  event.shaped('apotheosis:seashelf',
    ['313','121','313'], {
  1: 'minecraft:prismarine_bricks',
  2: '#forge:bookshelves',
  3: 'botania:terrasteel_ingot'}).id('apotheosis:seashelf')

  // Hell Shelf
  event.shaped('apotheosis:hellshelf',
    ['313','121','313'], {
  1: 'minecraft:nether_bricks',
  2: '#forge:bookshelves',
  3: 'botania:terrasteel_ingot'}).id('apotheosis:hellshelf')

  // Dormant Deepshelf
  event.shaped('apotheosis:dormant_deepshelf',
    ['313','121','313'], {
  1: 'minecraft:cracked_deepslate_tiles',
  2: '#forge:bookshelves',
  3: 'ars_nouveau:conjuration_essence'}).id('apotheosis:dormant_deepshelf')

  // End Shelf
  event.shaped('apotheosis:endshelf',
    ['313','121','313'], {
  1: 'minecraft:end_stone_bricks',
  2: '#forge:bookshelves',
  3: 'mysticalagriculture:end_essence'}).id('apotheosis:endshelf')

// Natures Compass
  event.shaped('naturescompass:naturescompass', 
    ['212','131','212'], {
    1: 'rootsclassic:verdant_sprig',
    2: '#rootsclassic:barks',
    3: 'minecraft:compass'}).id('naturescompass:misc/naturescompass')
    
// Explorers Compass
  event.shaped('explorerscompass:explorerscompass', 
    ['212','131','212'], {
    1: 'compressium:stone_1',
    2: 'minecraft:bone_meal',
    3: 'minecraft:compass'}).id('explorerscompass:misc/explorerscompass')
    
// Mega Torch
  event.shaped('torchmaster:megatorch', 
    ['333','313','222'], {
    1: 'reliquary:lantern_of_paranoia',
    2: 'occultism:spirit_attuned_gem',
    3: 'minecraft:torch'}).id('torchmaster:megatorch')
    
// Dread Lamp
  event.shaped('torchmaster:dreadlamp', 
    ['222','313','222'], {
    1: 'torchmaster:megatorch',
    2: 'minecraft:obsidian',
    3: '#forge:glass_panes'}).id('torchmaster:dreadlamp')
    
// Feral Flare Lantern
  event.shaped('torchmaster:feral_flare_lantern', 
    ['222','313','222'], {
    1: 'minecraft:sea_lantern',
    2: 'emendatusenigmatica:gold_plate',
    3: '#forge:glass_panes'}).id('torchmaster:feral_flare_lantern')
    
// Item Storage Terminal
  event.shaped('prettypipes:item_terminal', 
    ['123','465','321'], {
    1: 'minecraft:diamond',
    2: 'minecraft:ender_pearl',
    3: 'minecraft:iron_block',
    4: "prettypipes:high_retrieval_module",
    5: "prettypipes:high_extraction_module",
    6: "storagenetwork:master"}).id('prettypipes:item_terminal')
    
// Pretty Pipes Fluid Pipe
  event.shaped('ppfluids:fluid_pipe', 
    ['   ','121','   '], {
    1: 'prettypipes:pipe',
    2: 'create:fluid_pipe'}).id('ppfluids:fluid_pipe')

// Corrupted Blade
  event.shaped('endermanoverhaul:corrupted_blade',
    [' 1 ','313',' 2 '], {
    1: 'endermanoverhaul:enderman_tooth',
    2: 'emendatusenigmatica:plasteel_rod',
    3: 'mekanism:hdpe_sheet'}).id('endermanoverhaul:corrupted_blade')

// Corrupted Shield
  event.shaped('endermanoverhaul:corrupted_shield',
    ['313','121','313'], {
    1: 'endermanoverhaul:enderman_tooth',
    2: 'alexsmobs:shield_of_the_deep',
    3: 'mekanism:hdpe_sheet'}).id('endermanoverhaul:corrupted_shield')

// Ender Gate Basic
  event.shaped('powah:ender_gate_basic',
    ['121','232','121'], {
    1: 'minecraft:obsidian',
    2: 'powah:ender_gate_starter',
    3: 'powah:ender_core'}).id('powah:crafting/ender_gate_basic')

// Warden Sword
  event.shaped('deeperdarker:warden_sword',
    ['562','416','345'], {
    1: 'kubejs:empty_heart_of_the_deep',
    2: 'pneumaticcraft:drill_bit_diamond',
    3: 'emendatusenigmatica:iron_rod',
    4: 'deeperdarker:reinforced_echo_shard',
    5: 'deeperdarker:sculk_tendrils',
    6: 'deeperdarker:sculk_vines'}).id('deeperdarker:warden_sword')

// Feed Bag
  event.shaped('inventorypets:feed_bag',
    ['423','615','272'], {
    1: 'supplementaries:sack',
    2: 'inventorypets:nugget_diamond',
    3: 'inventorypets:nugget_obsidian',
    4: 'inventorypets:nugget_coal',
    5: 'inventorypets:nugget_lapis',
    6: 'inventorypets:nugget_ender',
    7: 'inventorypets:nugget_emerald'}).id('inventorypets:feed_bag')

// Carpenters Table
  event.shaped('chipped:carpenters_table', 
    ['  1','232','542'], {
    1: 'minecraft:iron_ingot',
    2: '#minecraft:logs',
    3: 'minecraft:crafting_table',
    4: '#minecraft:planks',
    5: 'minecraft:iron_axe'}).id('chipped:benches/carpenters_table')

// Bone Helmet
  event.shaped('immersive_armors:bone_helmet', 
    ['   ','111','121'], {
    1: 'minecraft:bone',
    2: 'minecraft:leather_helmet'}).id('immersive_armors:bone_helmet')

// Bone Chestplate
  event.shaped('immersive_armors:bone_chestplate', 
    ['1 1','121','111'], {
    1: 'minecraft:bone',
    2: 'minecraft:leather_chestplate'}).id('immersive_armors:bone_chestplate')

// Bone Leggings>
  event.shaped('immersive_armors:bone_leggings', 
    ['111','121','1 1'], {
    1: 'minecraft:bone',
    2: 'minecraft:leather_leggings'}).id('immersive_armors:bone_leggings')

// Bone Boots
  event.shaped('immersive_armors:bone_boots', 
    ['   ','121','1 1'], {
    1: 'minecraft:bone',
    2: 'minecraft:leather_boots'}).id('immersive_armors:bone_boots')

// Chainmail Helmet
  event.shaped('minecraft:chainmail_helmet', 
    ['   ','111','121'], {
    1: 'minecraft:chain',
    2: 'minecraft:leather_helmet'}).id('minecraft:chainmail_helmet')

// Chainmail Chestplate
  event.shaped('minecraft:chainmail_chestplate', 
    ['1 1','121','111'], {
    1: 'minecraft:chain',
    2: 'minecraft:leather_chestplate'}).id('minecraft:chainmail_chestplate')

// Chainmail Leggings>
  event.shaped('minecraft:chainmail_leggings', 
    ['111','121','1 1'], {
    1: 'minecraft:chain',
    2: 'minecraft:leather_leggings'}).id('minecraft:chainmail_leggings')

// Chainmail Boots
  event.shaped('minecraft:chainmail_boots', 
    ['   ','121','1 1'], {
    1: 'minecraft:chain',
    2: 'minecraft:leather_boots'}).id('minecraft:chainmail_boots')

// Iron Helmet
  event.shaped('minecraft:iron_helmet', 
    ['   ','111','121'], {
    1: 'emendatusenigmatica:iron_plate',
    2: 'minecraft:leather_helmet'}).id('minecraft:iron_helmet')

// Iron Chestplate
  event.shaped('minecraft:iron_chestplate', 
    ['1 1','121','111'], {
    1: 'emendatusenigmatica:iron_plate',
    2: 'minecraft:leather_chestplate'}).id('minecraft:iron_chestplate')

// Iron Leggings>
  event.shaped('minecraft:iron_leggings', 
    ['111','121','1 1'], {
    1: 'emendatusenigmatica:iron_plate',
    2: 'minecraft:leather_leggings'}).id('minecraft:iron_leggings')

// Iron Boots
  event.shaped('minecraft:iron_boots', 
    ['   ','121','1 1'], {
    1: 'emendatusenigmatica:iron_plate',
    2: 'minecraft:leather_boots'}).id('minecraft:iron_boots')

// Diamond Helmet
  event.shaped('minecraft:diamond_helmet', 
    ['   ','111','121'], {
    1: 'minecraft:diamond',
    2: 'minecraft:leather_helmet'}).id('minecraft:diamond_helmet')

// Diamond Chestplate
  event.shaped('minecraft:diamond_chestplate', 
    ['1 1','121','111'], {
    1: 'minecraft:diamond',
    2: 'minecraft:leather_chestplate'}).id('minecraft:diamond_chestplate')

// Diamond Leggings>
  event.shaped('minecraft:diamond_leggings', 
    ['111','121','1 1'], {
    1: 'minecraft:diamond',
    2: 'minecraft:leather_leggings'}).id('minecraft:diamond_leggings')

// Diamond Boots
  event.shaped('minecraft:diamond_boots', 
    ['   ','121','1 1'], {
    1: 'minecraft:diamond',
    2: 'minecraft:leather_boots'}).id('minecraft:diamond_boots')

// Chain
  event.shaped('minecraft:chain', 
    [' 2 ',' 1 ',' 2 '], {
    1: 'minecraft:iron_ingot',
    2: 'emendatusenigmatica:silver_nugget'}).id('minecraft:chain')

// Thermo Generator Starter
  event.shaped('powah:thermo_generator_starter', 
    ['111','232','454'], {
    1: 'powah:dielectric_paste',
    2: 'powah:capacitor_basic_tiny',
    3: 'powah:dielectric_casing',
    4: 'powah:thermoelectric_plate',
    5: 'powah:crystal_nitro',}).id('powah:crafting/thermo_generator_starter')

// Basic Capacitor  
  event.shaped('powah:capacitor_basic',
    [' 31','323','13 '], {
    1: 'powah:dielectric_paste',
    2: 'emendatusenigmatica:signalum_block',
    3: 'emendatusenigmatica:plasteel_plate'}).id('powah:crafting/capacitor_basic')

// Dielectric Paste
  event.shaped('12x powah:dielectric_paste',
    ['111','223','111'], {
    1: 'immersiveengineering:dust_hop_graphite',
    2: 'minecraft:clay_ball',
    3: 'buildinggadgets:construction_paste'}).id('powah:crafting/dielectric_paste')

// Organic Compost
  event.shaped('farmersdelight:organic_compost',
    ['122','334','444'], {
    1: 'minecraft:farmland',
    2: 'minecraft:rotten_flesh',
    3: 'farmersdelight:straw',
    4: 'minecraft:bone_meal'}).id('farmersdelight:organic_compost_from_rotten_flesh')

// Meta Pet
  event.custom({  
  "result": {
    "item": "inventorypets:pet_meta"
  },
  "pattern": [
    "DDD",
    "DFD",
    "DDD"
  ],
  "type": "minecraft:crafting_shaped",
  "key": {
    "D": {
      "tag": "inventorypets:all_pets"
    },
    "F": {
      "item": "minecraft:emerald_block"
    }
  }
}).id('inventorypets:meta_pet')

// Seared Brick
event.smelting('tconstruct:seared_brick', 'tconstruct:grout')

// Bonemeal Fish
event.smelting('minecraft:bone_meal', 'alexsmobs:fish_bones').id('alexsmobs:bonemeal_from_fish_bones')

// Bonemeal Fish
event.smelting('minecraft:bone_meal', '#forge:bones').id('quark:tweaks/smelting/bone_meal_utility')

// White Concrete
  event.shapeless(Item.of('minecraft:white_concrete'), ['immersiveengineering:concrete', 'minecraft:white_dye']).id('minecraft:white_concrete')

// Orange Concrete
  event.shapeless(Item.of('minecraft:orange_concrete'), ['immersiveengineering:concrete', 'minecraft:orange_dye']).id('minecraft:orange_concrete')

// Magenta Concrete
  event.shapeless(Item.of('minecraft:magenta_concrete'), ['immersiveengineering:concrete', 'minecraft:magenta_dye']).id('minecraft:magenta_concrete')

// Light Blue Concrete
  event.shapeless(Item.of('minecraft:light_blue_concrete'), ['immersiveengineering:concrete', 'minecraft:light_blue_dye']).id('minecraft:light_blue_concrete')

// Yellow Concrete
  event.shapeless(Item.of('minecraft:yellow_concrete'), ['immersiveengineering:concrete', 'minecraft:yellow_dye']).id('minecraft:yellow_concrete')

// Lime Concrete
  event.shapeless(Item.of('minecraft:lime_concrete'), ['immersiveengineering:concrete', 'minecraft:lime_dye']).id('minecraft:lime_concrete')

// Pink Concrete
  event.shapeless(Item.of('minecraft:pink_concrete'), ['immersiveengineering:concrete', 'minecraft:pink_dye']).id('minecraft:pink_concrete')

// Gray Concrete
  event.shapeless(Item.of('minecraft:gray_concrete'), ['immersiveengineering:concrete', 'minecraft:gray_dye']).id('minecraft:gray_concrete')

// Light Gray Concrete
  event.shapeless(Item.of('minecraft:light_gray_concrete'), ['immersiveengineering:concrete', 'minecraft:light_gray_dye']).id('minecraft:light_gray_concrete')

// Cyan Concrete
  event.shapeless(Item.of('minecraft:cyan_concrete'), ['immersiveengineering:concrete', 'minecraft:cyan_dye']).id('minecraft:cyan_concrete')

// Purple Concrete
  event.shapeless(Item.of('minecraft:purple_concrete'), ['immersiveengineering:concrete', 'minecraft:purple_dye']).id('minecraft:purple_concrete')

// Blue Concrete
  event.shapeless(Item.of('minecraft:blue_concrete'), ['immersiveengineering:concrete', 'minecraft:blue_dye']).id('minecraft:blue_concrete')

// Brown Concrete
  event.shapeless(Item.of('minecraft:brown_concrete'), ['immersiveengineering:concrete', 'minecraft:brown_dye']).id('minecraft:brown_concrete')

// Green Concrete
  event.shapeless(Item.of('minecraft:green_concrete'), ['immersiveengineering:concrete', 'minecraft:green_dye']).id('minecraft:green_concrete')

// Red Concrete
  event.shapeless(Item.of('minecraft:red_concrete'), ['immersiveengineering:concrete', 'minecraft:red_dye']).id('minecraft:red_concrete')

// Black Concrete
  event.shapeless(Item.of('minecraft:black_concrete'), ['immersiveengineering:concrete', 'minecraft:black_dye']).id('minecraft:black_concrete')

// Planter
  event.shapeless(Item.of('supplementaries:planter'), ['minecraft:flower_pot', 'minecraft:dirt']).id('supplementaries:planter')

// Rich Soil Planter
  event.shapeless(Item.of('supplementaries:planter_rich'), ['minecraft:flower_pot', 'farmersdelight:rich_soil']).id('supplementaries:planter_rich')

// Replace Flower Pot w/ Botany Pot
event.replaceInput({}, 'minecraft:flower_pot', 'botanypots:terracotta_botany_pot')   

// Coal Nug to Coal
  event.shapeless(Item.of('minecraft:coal'), ['inventorypets:nugget_coal', 'inventorypets:nugget_coal', 'inventorypets:nugget_coal', 'inventorypets:nugget_coal', 'inventorypets:nugget_coal', 'inventorypets:nugget_coal', 'inventorypets:nugget_coal', 'inventorypets:nugget_coal', 'inventorypets:nugget_coal']).id('inventorypets:nugget_to_coal')

 event.replaceInput('*', Fluid.of('minecraft:water'), Fluid.of('minecraft:lava'))

 event.replaceInput(
                      { input: 'mob_grinding_utils:fluid_xp' }, // Arg 1: the filter
                      'mob_grinding_utils:fluid_xp',            // Arg 2: the item to replace
                      'pneumaticcraft:memory_essence'         // Arg 3: the item to replace it with
                    )

//    
})
//