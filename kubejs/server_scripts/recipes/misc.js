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
  event.remove({output: 'farmersdelight:basket'})
  event.remove({output: 'farmersdelight:cutting/leather_boots'})
  event.remove({output: 'farmersdelight:cutting/leather_chestplate'})
  event.remove({output: 'farmersdelight:cutting/leather_helmet'})
  event.remove({output: 'farmersdelight:cutting/leather_leggings'})
  event.remove({output: 'farmersdelight:cutting/leather_horse_armor'})
  event.remove({output: 'farmersdelight:cutting/saddle'})
  event.remove([{ type: 'minecraft:crafting_shapeless', output: '#farmersdelight:cabinets' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: '#farmersdelight:cabinets' }])
  event.remove({output: 'cookingforblockheads:no_filter_edition'})
  event.remove({output: 'cookingforblockheads:recipe_book'})
  event.remove({output: 'cookingforblockheads:crafting_book'})
  event.remove({output: 'farmingforblockheads:feeding_trough'})
  event.remove({output: 'farmingforblockheads:market'})
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
  event.remove({id: 'mythicbotany:mythicbotany_infusion/alfsteel_ingot'})
  event.remove({id: 'mythicbotany:alfsteel_helmet_smithing'})
  event.remove({id: 'mythicbotany:alfsteel_chestplate_smithing'})
  event.remove({id: 'mythicbotany:alfsteel_leggings_smithing'})
  event.remove({id: 'mythicbotany:alfsteel_boots_smithing'})
  event.remove({id: 'natprog:crafting/saws/flint_saw'})
  event.remove({id: 'powah:crafting/reactor_starter'})
  event.remove({output: 'quark:iron_rod'})
  event.remove({id: 'rangedpumps:pump'})
  event.remove({id: 'rftoolsbase:machine_frame'})
  event.remove({output: 'rootsclassic:bark_knife'})
  event.remove({output: 'rootsclassic:healing_poultice'})
  event.remove({output: 'rootsclassic:mortar'})
  event.remove({output: 'rootsclassic:pestle'})
  event.remove({output: 'rootsclassic:imbuer'})
  event.remove({id: 'scannable:scanner'})
  event.remove({id: 'scannable:blank_module'})
  event.remove({id: 'shrink:shrinking_device'})
  event.remove({id: 'sophisticatedbackpacks:backpack'})
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
  event.remove({id: 'sophisticatedbackpacks:iron_backpack'})
  event.remove({id: 'sophisticatedbackpacks:gold_backpack'})
  event.remove({id: 'sophisticatedbackpacks:diamond_backpack'})
  event.remove({id: 'sophisticatedbackpacks:netherite_backpack'})
  event.remove({output: 'storagenetwork:inventory'})
  event.remove({output: 'storagenetwork:exchange'})
  event.remove({output: 'storagenetwork:collector'})
  event.remove({output: 'storagenetwork:stock_upgrade'})
  event.remove({output: 'storagenetwork:operation_upgrade'})
  event.remove({output: 'storagenetwork:crafting_remote'})
  event.remove({output: 'storagenetwork:picker_remote'})
  event.remove({output: 'storagenetwork:collector_remote'})
  event.remove({output: 'storagenetwork:builder_remote'})
  event.remove({output: 'storagenetwork:master'})
  event.remove({output: 'storagenetwork:request'})
  event.remove({output: 'storagenetwork:kabel'})
  event.remove({output: 'storagenetwork:inventory_remote'})
  event.remove({output: 'supplementaries:bellows'})
  event.remove({id: 'supplementaries:soap/globe'})
  event.remove({id: 'supplementaries:globe_sepia'})
  event.remove({id: 'tempad:tempad'})
  event.remove({output: 'totemic:totem_whittling_knife'})
  event.remove({id: 'totemic:tipi_from_wool'})
  event.remove({id: 'totemic:leather_from_hide'})
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:twilight_oak_chest' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:canopy_chest' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:mangrove_chest' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:darkwood_chest' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:time_chest' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:transformation_chest' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:mining_chest' }])
  event.remove([{ type: 'minecraft:crafting_shaped', output: 'twilightforest:sorting_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:twilight_oak_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:canopy_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:mangrove_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:darkwood_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:time_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:transformation_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:mining_chest' }])
  event.remove([{ type: 'minecraft:crafting_shapeless', output: 'twilightforest:sorting_chest' }])
  event.remove({id: 'waystones:warp_stone'})
  event.remove({id: 'waystones:warp_dust'})
  event.remove({id: 'waystones:return_scroll'})
  event.remove({id: 'waystones:bound_scroll'})
  event.remove({id: 'waystones:warp_scroll'})
  event.remove({id: 'waystones:warp_plate'})
  event.remove({id: 'waystones:portstone'})
  event.remove({output: 'waystones:attuned_shard'})
  event.remove({id: 'apotheosis:library'})
  event.remove({output: 'apotheosis:library'})
  event.remove({id: 'apotheosis:enchanting/ender_library'})
  event.remove({id: 'apotheosis:simple_reforging_table'})
  event.remove({id: 'apotheosis:reforging_table'})
  event.remove({id: 'apotheosis:salvaging_table'})
  event.remove({id: 'apotheosis:gem_cutting_table'})
  event.remove({id: 'apotheosis:hellshelf'})
  event.remove({id: 'minecraft:flower_pot'})
  event.remove({id: 'botanypots:terracotta_botany_pot'})
  event.remove({id: 'supplementaries:soap_clean_botanypots_terracotta_hopper_botany_pot'})
  event.remove({ output: "#botanypots:essences"})
  event.remove({ output: "#botanypots:all_botany_pots"})
  event.remove({ output: "supplementaries:planter"})
  event.remove({ output: "supplementaries:planter_rich"})
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
  event.remove({ output: "supplementaries:planter_rich"})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Medicine Bag
  event.shaped('totemic:medicine_bag',
    ['343','121','353'], {
    1: 'totemic:buffalo_hide',
    2: 'sophisticatedbackpacks:backpack',
    3: 'rootsclassic:growth_powder',
    4: 'botania:terrasteel_block',
    5: 'botania:mana_diamond'})

// Compact Machine Wall
  event.shaped('4x compactmachines:wall',
    ['212','121','212'], {
    1: 'compressium:stone_3',
    2: 'minecraft:polished_deepslate'})

// Compact Machines Tiny
  event.shaped('compactmachines:machine_tiny',
    ['313','121','313'], {
    1: 'compactmachines:wall',
    2: 'minecraft:copper_block',
    3: 'pneumaticcraft:plastic'})

// Compact Machines Small
  event.shaped('compactmachines:machine_small',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'minecraft:iron_block',
    3: 'compactmachines:machine_tiny'})

// Compact Machines Normal
  event.shaped('compactmachines:machine_normal',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'thermal:electrum_block',
    3: 'compactmachines:machine_small'})

// Compact Machines Large
  event.shaped('compactmachines:machine_large',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'emendatusenigmatica:steel_block',
    3: 'compactmachines:machine_normal'})

// Compact Machines Giant
  event.shaped('compactmachines:machine_giant',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'minecraft:diamond_block',
    3: 'compactmachines:machine_large'})

// Compact Machines Maximum
  event.shaped('compactmachines:machine_maximum',
    ['212','131','212'], {
    1: 'compactmachines:wall',
    2: 'minecraft:emerald_block',
    3: 'compactmachines:machine_giant'})

// Building Gadget
  event.shaped('buildinggadgets:gadget_building',
    [' 3 ','313','323'], {
    1: 'constructionwand:diamond_wand',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'})

// Dreamer Essence
  event.shaped('sleep_tight:dreamer_essence',
    ['353','242','313'], {
    1: 'minecraft:blaze_powder',
    2: 'botania:terrasteel_ingot',
    3: 'pneumaticcraft:plastic',
    4: 'quark:seed_pouch',
    5: 'minecraft:purple_dye'})

// Exchanging Gadget
  event.shaped('buildinggadgets:gadget_exchanging',
    ['323','313','3 3'], {
    1: 'constructionwand:diamond_wand',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'})

// Copy Paste Gadget
  event.shaped('buildinggadgets:gadget_copy_paste',
    [' 2 ','313','333'], {
    1: 'constructionwand:diamond_wand',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic'})

// Personal Shrinking Device
  event.shaped('compactmachines:personal_shrinking_device',
    ['111','121','133'], {
    1: 'pneumaticcraft:plastic',
    2: 'minecraft:ender_eye',
    3: 'occultism:spirit_attuned_gem'})

// Stone Wand
  event.shaped('constructionwand:stone_wand',
    ['  2',' 1 ','1  '], {
    1: 'immersiveengineering:stick_treated',
    2: 'compressium:stone_5'})

// Iron Wand
  event.shaped('constructionwand:iron_wand',
    ['  2',' 1 ','1  '], {
    1: 'immersiveengineering:stick_treated',
    2: 'compressium:iron_5'})

// Diamond Wand
  event.shaped('constructionwand:diamond_wand',
    ['  2',' 1 ','1  '], {
    1: 'immersiveengineering:stick_treated',
    2: 'compressium:diamond_5'})

// Infinity Wand
  event.shaped('constructionwand:infinity_wand',
    ['  2',' 1 ','1  '], {
    1: 'immersiveengineering:stick_treated',
    2: 'compressium:netherite_5'})

// Ender Chest
  event.shaped('enderstorage:ender_chest',
    ['232','313','232'], {
    1: 'pneumaticcraft:smart_chest',
    2: 'emendatusenigmatica:ender_pearl_dust',
    3: 'emendatusenigmatica:enderium_ingot'})

// Ender Tank
  event.shaped('enderstorage:ender_tank',
    ['232','313','232'], {
    1: 'pneumaticcraft:huge_tank',
    2: 'emendatusenigmatica:ender_pearl_dust',
    3: 'emendatusenigmatica:enderium_ingot'})

// Ender Pouch
  event.shaped('enderstorage:ender_pouch',
    ['232','313','232'], {
    1: 'sophisticatedbackpacks:netherite_backpack',
    2: 'emendatusenigmatica:ender_pearl_dust',
    3: 'emendatusenigmatica:enderium_ingot'})

// Slightly Evil Basket
  event.shaped('farmersdelight:basket', 
    ['131','232','121'], {
    1: 'minecraft:bamboo', 
    2: 'farmersdelight:canvas',
    3: 'immersiveengineering:hemp_fiber'})

// Market Block    
  event.shaped('farmingforblockheads:market',
    ['212','4 4','535'], {
    1: 'minecraft:white_carpet', 
    2: 'pneumaticcraft:plastic',
    3: 'minecraft:red_carpet',
    4: 'emendatusenigmatica:iron_rod',
    5: '#minecraft:planks'})

// Sim Chamber
  event.shaped('hostilenetworks:sim_chamber',
    ['353','414','323'], {
    1: 'industrialforegoing:machine_frame_advanced',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic',
    4: 'minecraft:goat_spawn_egg',
    5: 'minecraft:black_dye'})

// Loot Fabricator
  event.shaped('hostilenetworks:loot_fabricator',
    ['353','414','323'], {
    1: 'industrialforegoing:machine_frame_advanced',
    2: 'pneumaticcraft:printed_circuit_board',
    3: 'pneumaticcraft:plastic',
    4: 'minecraft:donkey_spawn_egg',
    5: 'minecraft:black_dye'})

// Lapis Lazuli
  event.shaped('minecraft:lapis_lazuli',
    ['111','111','111'], {
    1: 'inventorypets:nugget_lapis'})

// Ender Nugget > Pearl
  event.shaped('minecraft:ender_pearl',
    ['111','111','111'], {
    1: 'inventorypets:nugget_ender'})

// Emerald Shard Gets Replaced w/ Emerald Nugget
event.replaceInput({}, 'silentgear:emerald_shard', 'inventorypets:nugget_emerald')

// Diamond Shard Gets Replaced w/ Diamond Nugget
event.replaceInput({}, 'silentgear:diamond_shard', 'inventorypets:nugget_diamond')

// Crude Ender Pearl
  event.shaped('kubejs:crude_ender_pearl',
    ['232','313','232'], {
    1: 'minecraft:slime_ball',
    2: 'rootsclassic:verdant_sprig',
    3: 'minecraft:brown_dye'})

// Rawhide    
  event.shaped('kubejs:rawhide',
    ['111','1 1','111'], {
    1: 'silentgear:leather_scrap'})

// Durable Rawhide    
  event.shaped('kubejs:durable_rawhide',
    ['111','121','111'], {
    1: 'silentgear:leather_scrap',
    2: '#rootsclassic:barks'})

// Cheap Plastic Engine
  event.shaped('kubejs:cheap_plastic_engine',
    ['111','121','131'], {
    1: 'industrialforegoing:plastic',
    2: 'create:large_cogwheel',
    3: 'create:brass_casing'})

// Cheap Plastic Tank
  event.shaped('kubejs:cheap_plastic_tank',
    ['113','123','113'], {
    1: 'industrialforegoing:plastic',
    2: 'ad_astra:oxygen_tank',
    3: 'emendatusenigmatica:iron_rod'})

// Cheap Plastic Rocket Fin
  event.shaped('kubejs:cheap_plastic_rocket_fin',
    [' 1 ','222','1 1'], {
    1: 'industrialforegoing:plastic',
    2: 'pneumaticcraft:ingot_iron_compressed'})

// Cheap Plastic Rocket Nose Cone
  event.shaped('kubejs:cheap_plastic_rocket_nose_cone',
    [' 2 ',' 1 ','111'], {
    1: 'industrialforegoing:plastic',
    2: 'botania:mana_pearl'})

// Mason Jar
  event.shaped('kubejs:mason_jar',
    ['   ','1 1',' 1 '], {
    1: 'pneumaticcraft:pressure_chamber_glass'})

// Flint Saw
  event.shaped('natprog:flint_saw',
    ['   ','111','222'], {
    1: '#minecraft:slabs',
    2: 'minecraft:flint'})

// Starter Reactor
  event.shaped('powah:reactor_starter',
    ['232','415','232'], {
    1: 'powah:dielectric_casing',
    2: 'powah:uraninite',
    3: 'powah:capacitor_basic_tiny',
    4: 'pneumaticcraft:capacitor',
    5: 'pneumaticcraft:transistor'})

// Ranged Pump
  event.shaped('rangedpumps:pump',
    ['121','354','121'], {
    1: 'powah:steel_energized',
    2: 'minecraft:diamond_block',
    3: 'minecraft:lava_bucket',
    4: 'minecraft:water_bucket',
    5: 'immersiveengineering:fluid_pump'})

// Replace RF Tools Machine Frame w/ Industrial Foregoing
event.replaceInput({ input: 'rftoolsbase:machine_frame' },'rftoolsbase:machine_frame','industrialforegoing:machine_frame_advanced')


// Bark Knife
  event.shaped('rootsclassic:bark_knife',
    [' 4 ','121',' 3 '], {
    1: 'emendatusenigmatica:copper_crystal',
    2: 'natprog:bone_knife',
    3: 'minecraft:stick',
    4: 'minecraft:green_dye'})


// Healing Poultice
  event.shapeless(Item.of('rootsclassic:healing_poultice'), ['rootsclassic:growth_powder', 'rootsclassic:verdant_sprig', 'rootsclassic:redcurrant', 'minecraft:gold_ingot'])

// Mortar
  event.shaped('rootsclassic:mortar',
    ['1 1','1 1',' 1 '], {
    1: 'compressium:stone_2'})

// Pestle
  event.shaped('rootsclassic:pestle',
    ['  1','11 ','11 '], {
    1: 'compressium:diorite_1'})

// Imbuer
  event.shaped('rootsclassic:imbuer',
    ['212','131','212'], {
    1: 'compressium:stone_2',
    2: 'emendatusenigmatica:gold_rod',
    3: 'rootsclassic:verdant_sprig'})

// Scanner
  event.shaped('scannable:scanner',
    ['222','212','232'], {
    1: 'pneumaticcraft:printed_circuit_board',
    2: 'pneumaticcraft:plastic',
    3: '#minecraft:buttons'})

// Blank Module
  event.shaped('scannable:blank_module',
    ['333','212','333'], {
    1: 'prettypipes:blank_module',
    2: 'rootsclassic:growth_powder',
    3: 'pneumaticcraft:plastic'})

// Personal Shrinking Device
  event.shaped('shrink:shrinking_device',
    ['111','242','131'], {
    1: 'mekanism:hdpe_sheet',
    2: 'minecraft:black_dye',
    3: 'pneumaticcraft:printed_circuit_board',
    4: 'compactmachines:personal_shrinking_device'})

// Basic Backpack
  event.shaped('sophisticatedbackpacks:backpack', 
    ['434','414','232'], {
    1: 'farmersdelight:basket', 
    2: 'minecraft:leather',
    3: 'totemic:buffalo_hide',
    4: 'minecraft:string'})

// Iron Backpack
  event.shaped('sophisticatedbackpacks:iron_backpack', 
    ['121','232','121'], {
    1: 'minecraft:iron_block', 
    2: 'emendatusenigmatica:iron_plate',
    3: 'sophisticatedbackpacks:backpack'})

// Gold Backpack
  event.shaped('sophisticatedbackpacks:gold_backpack', 
    ['121','232','121'], {
    1: 'minecraft:gold_block', 
    2: 'emendatusenigmatica:gold_plate',
    3: 'sophisticatedbackpacks:iron_backpack'})

// Diamond Backpack
  event.shaped('sophisticatedbackpacks:diamond_backpack', 
    ['121','232','121'], {
    1: 'minecraft:diamond',
    2: 'minecraft:diamond_block',
    3: 'sophisticatedbackpacks:gold_backpack'})

// Netherite Backpack
  event.shaped('sophisticatedbackpacks:netherite_backpack', 
    ['121','232','121'], {
    1: 'minecraft:netherite_block', 
    2: 'create:sturdy_sheet',
    3: 'sophisticatedbackpacks:diamond_backpack'})

// Upgrade Base
  event.shaped('sophisticatedbackpacks:upgrade_base', 
    ['434','121','434'], {
    1: 'totemic:buffalo_hide', 
    2: 'minecraft:leather',
    3: 'minecraft:iron_ingot',
    4: '#forge:string'})

// Master
  event.shaped('storagenetwork:master',
    ['222','212','222'], {
    1: 'functionalstorage:storage_controller',
    2: 'industrialforegoing:plastic'})

// Request
  event.shaped('storagenetwork:request',
    ['222','212','222'], {
    1: 'minecraft:chest',
    2: 'industrialforegoing:plastic'})

// Network Cable
  event.shaped('4x storagenetwork:kabel',
    ['222','212','222'], {
    1: 'minecraft:iron_ingot',
    2: 'industrialforegoing:plastic'})

// Storage Remote
  event.shaped('storagenetwork:inventory_remote',
    ['142','132','142'], {
    1: 'pneumaticcraft:plastic',
    2: 'industrialforegoing:plastic',
    3: 'storagenetwork:master',
    4: '#minecraft:buttons'})

// Slightly Evil Basket
  event.shaped('supplementaries:bellows', 
    ['333','121','333'], {
    1: 'minecraft:leather', 
    2: 'totemic:buffalo_hide',
    3: '#minecraft:slabs'})

// Personal Shrinking Device
  event.shaped('tempad:he_who_remains_tempad',
    ['111','121','131'], {
    1: 'mekanism:hdpe_sheet',
    2: 'powah:ender_core',
    3: 'pneumaticcraft:printed_circuit_board'})

// Totem Whittling Knife
  event.shaped('totemic:totem_whittling_knife',
    ['  3',' 42','1  '], {
    1: 'minecraft:stick', 
    2: 'minecraft:flint',
    3: 'emendatusenigmatica:iron_plate',
    4: 'rootsclassic:verdant_sprig'})   
    
// Warp Stone
  event.shaped('waystones:warp_stone',
    ['212','131','212'], {
    1: 'botania:dragonstone',
    2: 'minecraft:ender_pearl',
    3: 'minecraft:amethyst_shard'})
    
// Library of Alexandria
  event.shaped('apotheosis:ender_library', 
    ['121','232','121'], {
    1: 'mysticalagradditions:insanium_essence',
    2: 'apotheosis:infused_hellshelf',
    3: 'minecraft:enchanting_table'})
    
// Hellshelf
  event.shaped('apotheosis:hellshelf', 
    ['242','313','242'], {
    1: '#forge:bookshelves',
    2: 'minecraft:nether_bricks',
    3: 'minecraft:blaze_rod',
    4: 'minecraft:lava_bucket'}).id('apotheosis:hellshelf')

// Gem Cutting Table
  event.shaped('apotheosis:gem_cutting_table', 
    ['131','323','3 3'], {
    1: 'minecraft:shears',
    2: 'occultism:spirit_attuned_gem',
    3: '#forge:treated_wood'})

// Salvaging Table
  event.shaped('apotheosis:salvaging_table', 
    ['111','343','525'], {
    1: 'minecraft:copper_ingot',
    2: 'apotheosis:gem_dust',
    3: 'minecraft:iron_pickaxe',
    4: 'minecraft:smithing_table',
    5: '#forge:treated_wood'})
    
// Simple Reforging Table
  event.shaped('apotheosis:simple_reforging_table', 
    ['121','131','141'], {
    1: 'industrialforegoing:plastic',
    2: 'occultism:spirit_attuned_gem',
    3: 'minecraft:enchanting_table',
    4: 'apotheosis:gem_dust'})
    
// Reforging Table
  event.shaped('apotheosis:reforging_table', 
    ['111','232','444'], {
    1: 'minecraft:netherite_ingot',
    2: 'apotheosis:epic_material',
    3: 'apotheosis:simple_reforging_table',
    4: 'minecraft:nether_bricks'})

// Flower Pot
  event.shaped('minecraft:flower_pot',
    ['222','121','212'], {
    1: 'minecraft:brick',
    2: 'minecraft:clay_ball'})

// Botany Pot
  event.shaped('botanypots:terracotta_botany_pot',
    ['323','212','323'], {
    1: 'supplementaries:planter',
    2: 'minecraft:terracotta',
    3: 'rootsclassic:growth_powder'})

// Botany Pot
  event.shaped('botanypots:terracotta_botany_pot',
    ['323','212','323'], {
    1: 'supplementaries:planter_rich',
    2: 'minecraft:terracotta',
    3: 'rootsclassic:growth_powder'})

// Alfsteel Helmet
  event.shaped('mythicbotany:alfsteel_helmet',
    [' 3 ','222','212'], {
    1: 'botania:terrasteel_helmet',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'})

// Alfsteel Chestplate
  event.shaped('mythicbotany:alfsteel_chestplate',
    ['232','212','222'], {
    1: 'botania:terrasteel_chestplate',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'})

// Alfsteel Leggings
  event.shaped('mythicbotany:alfsteel_leggings',
    ['222','212','232'], {
    1: 'botania:terrasteel_leggings',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'})

// Alfsteel Boots
  event.shaped('mythicbotany:alfsteel_boots',
    ['   ','232','212'], {
    1: 'botania:terrasteel_boots',
    2: 'mythicbotany:alfsteel_ingot',
    3: 'mythicbotany:alfheim_rune'})

// Choco Disguise  Helmet
  event.shaped('chococraft:choco_disguise_helmet', 
    ['232','313','232'], {
    1: 'minecraft:leather_helmet',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'})

// Choco Disguise Chestplate
  event.shaped('chococraft:choco_disguise_chestplate', 
    ['232','313','232'], {
    1: 'minecraft:leather_chestplate',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'})

// Choco Disguise  Leggings
  event.shaped('chococraft:choco_disguise_leggings', 
    ['232','313','232'], {
    1: 'minecraft:leather_leggings',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'})

// Choco Disguise  Boots
  event.shaped('chococraft:choco_disguise_boots', 
    ['232','313','232'], {
    1: 'minecraft:leather_boots',
    2: 'chococraft:chocobo_drumstick_raw',
    3: 'chococraft:chocobo_feather'})

// Hopper Botany Pot
  event.shapeless(Item.of('botanypots:terracotta_hopper_botany_pot'), ['botanypots:terracotta_botany_pot', 'minecraft:hopper'])

// Planter
  event.shapeless(Item.of('supplementaries:planter'), ['minecraft:flower_pot', 'minecraft:dirt'])

// Rich Soil Planter
  event.shapeless(Item.of('supplementaries:planter_rich'), ['minecraft:flower_pot', 'farmersdelight:rich_soil']) 

//    
})
//