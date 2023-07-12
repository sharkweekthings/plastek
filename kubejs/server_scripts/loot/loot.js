////
// custom chest loot
//// renik

// Waystones
// raw iron/gold/etc
// 336

LootJS.modifiers(event => {
    // event.enableLogging();
    event.addLootTableModifier(/.*/).replaceLoot("minecraft:leather", "silentgear:leather_scrap");
    event.addLootTableModifier(/.*/).replaceLoot("totemic:buffalo_hide", "silentgear:leather_scrap");
    event.addLootTableModifier(/.*/).replaceLoot("deeperdarker:heart_of_the_deep", "kubejs:empty_heart_of_the_deep");

    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:lapis_lazuli", "inventorypets:nugget_lapis");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:diamond", "inventorypets:nugget_diamond");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("sophisticatedbackpacks:diamond_backpack", "inventorypets:nugget_diamond");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:diamond_horse_armor", "inventorypets:nugget_diamond");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("silentgear:blaze_gold_ingot", "3x inventorypets:nugget_diamond");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("sophisticatedbackpacks:netherite_backpack", "minecraft:diamond");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:spruce_sapling", "inventorypets:nugget_diamond");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:diamond_block", "inventorypets:nugget_diamond");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:emerald", "inventorypets:nugget_emerald");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:gun_ammo_incendiary", "inventorypets:nugget_emerald");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:raw_zinc", "inventorypets:nugget_emerald");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("silentgear:crimson_iron_ingot", "3x inventorypets:nugget_emerald");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:ender_pearl", "inventorypets:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:copper_ingot", "inventorypets:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:ingot_iron_compressed", "inventorypets:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:logistics_core", "inventorypets:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:micromissiles", "inventorypets:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:writable_book", "inventorypets:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:quartz", "inventorypets:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("ars_nouveau:source_gem", "ars_nouveau:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_lead", "ars_nouveau:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_nickel", "ars_nouveau:nugget_ender");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:iron_ingot", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:iron_nugget", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:iron_ore", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:iron_block", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("sophisticatedbackpacks:gold_backpack", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:blue_orchid", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:stone", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_copper", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_zinc", "emendatusenigmatica:copper_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:gold_ingot", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:gold_nugget", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:gold_ore", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:gold_block", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("botania:manasteel_ingot", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:rose_bush", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:cobblestone", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_aluminum", "emendatusenigmatica:aluminum_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:sand", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:cactus", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:golden_horse_armor", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:raw_gold", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:raw_copper", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:vortex_cannon", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:gilded_blackstone", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("botania:lexicon", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:spawner_agitator", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:large_cogwheel", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:cogwheel", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_gold", "emendatusenigmatica:gold_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:dirt", "emendatusenigmatica:osmium_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:oak_sapling", "emendatusenigmatica:osmium_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:rose_quartz", "emendatusenigmatica:osmium_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_osmium", "emendatusenigmatica:osmium_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:dead_bush", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("silentgear:netherwood_sapling", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("sophisticatedbackpacks:backpack", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:saddle", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:iron_horse_armor", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:pressure_tube", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:spruce_sapling", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:stone_bricks", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:raw_iron", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("ars_nouveau:wilden_spike", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:bone_block", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("ars_nouveau:wilden_horn", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:capacitor", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:transistor", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:compressed_stone", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:andesite_alloy", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:copper_block", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_iron", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_tin", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:crushed_raw_silver", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:pumpkin_seeds", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("create:powdered_obsidian", "emendatusenigmatica:iron_crystal");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:painting", "immersive_paintings:painting");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("pneumaticcraft:pneumatic_cylinder", "immersive_paintings:painting");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("sophisticatedbackpacks:iron_backpack", "botanypots:terracotta_botany_pot");
});