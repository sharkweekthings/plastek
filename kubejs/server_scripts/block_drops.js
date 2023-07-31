////
// ores and gems loot table
//// renik
// base script by: Quentin765 / KubeJS Discord

ServerEvents.blockLootTables(event => {	
// onEvent('block.loot_tables', event => {
	let oreLoot = (fullOre, rawOre,rolls) => {
		event.addBlock(fullOre, table => {
			table.addPool(pool => {//silk touch
				pool.addItem(fullOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:silk_touch',
								levels: { min: 1 }
							}
						]
					}
				})
			})
			table.addPool(pool => {//non-silk touch or explosion
				pool.survivesExplosion()
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:inverted',
					term: {
						condition: 'minecraft:match_tool',
						predicate: {
							enchantments: [
								{
									enchantment: 'minecraft:silk_touch',
									levels: { min: 1 }
								}
							]
						}
					}
				})
			})
			table.addPool(pool => {//fortune 1 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 1 }
							}
						]
					}
				})
				pool.randomChance(0.05)
			})
			table.addPool(pool => {//fortune 2 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 2 }
							}
						]
					}
				})
				pool.randomChance(0.08)
			})
			table.addPool(pool => {//fortune 3 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 3 }
							}
						]
					}
				})
				pool.randomChance(0.10)
			})
			table.addPool(pool => {//fortune 4 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 4 }
							}
						]
					}
				})
				pool.randomChance(0.13)
			})
			table.addPool(pool => {//fortune 5 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 5 }
							}
						]
					}
				})
				pool.randomChance(0.15)
			})
			table.addPool(pool => {//fortune 6 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 6 }
							}
						]
					}
				})
				pool.randomChance(0.18)
			})
			table.addPool(pool => {//fortune 7 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 7 }
							}
						]
					}
				})
				pool.randomChance(0.20)
			})
			table.addPool(pool => {//fortune 8 or higher
				pool.rolls = rolls
				pool.addItem(rawOre)
				pool.addCondition({
					condition: 'minecraft:match_tool',
					predicate: {
						enchantments: [
							{
								enchantment: 'minecraft:fortune',
								levels: { min: 8 }
							}
						]
					}
				})
				pool.randomChance(0.25)
			})
		})
	}

// Overworld
	oreLoot('minecraft:coal_ore', 'minecraft:coal', {min:1,max:2})
	oreLoot('minecraft:emerald_ore', 'inventorypets:nugget_emerald', {min:1,max:1})
	oreLoot('thermal:silver_ore', 'emendatusenigmatica:silver_crystal', {min:1,max:2})
	oreLoot('minecraft:lapis_ore', 'inventorypets:nugget_lapis', {min:1,max:2})
	oreLoot('thermal:deepslate_nickel_ore', 'emendatusenigmatica:nickel_crystal', {min:2,max:3})
	oreLoot('immersiveengineering:ore_aluminum', 'emendatusenigmatica:aluminum_crystal', {min:1,max:2})
	oreLoot('minecraft:diamond_ore', 'inventorypets:nugget_diamond', {min:1,max:3})
	oreLoot('minecraft:redstone_ore', 'minecraft:redstone', {min:1,max:2})
	oreLoot('create:zinc_ore', 'emendatusenigmatica:zinc_crystal', {min:1,max:2})
	oreLoot('thermal:tin_ore', 'emendatusenigmatica:tin_crystal', {min:1,max:2})
	oreLoot('thermal:oil_red_sand', 'thermal:bitumen', {min:1,max:2})
	oreLoot('thermal:oil_sand', 'thermal:bitumen', {min:1,max:2})
	oreLoot('minecraft:deepslate_coal_ore', 'minecraft:coal', {min:2,max:4})
	oreLoot('minecraft:deepslate_copper_ore', 'emendatusenigmatica:copper_crystal', {min:2,max:4})
	oreLoot('powah:deepslate_uraninite_ore_poor', 'powah:uraninite_raw', {min:2,max:4})
	oreLoot('minecraft:copper_ore', 'emendatusenigmatica:copper_crystal', {min:1,max:3})
	oreLoot('create:deepslate_zinc_ore', 'emendatusenigmatica:zinc_crystal', {min:2,max:4})
	oreLoot('thermal:deepslate_tin_ore', 'emendatusenigmatica:tin_crystal', {min:2,max:4})

// Bumblezone
	oreLoot('mysticalagriculture:prosperity_ore', 'mysticalagriculture:prosperity_shard', {min:1,max:2})
	oreLoot('minecraft:gold_ore', 'emendatusenigmatica:gold_crystal', {min:1,max:6})
	oreLoot('minecraft:deepslate_gold_ore', 'emendatusenigmatica:gold_crystal', {min:2,max:7})
	oreLoot('minecraft:deepslate_lapis_ore', 'inventorypets:nugget_lapis', {min:2,max:4})

// Twilight Forest
	oreLoot('thermal:nickel_ore', 'emendatusenigmatica:nickel_crystal', {min:2,max:4})
	oreLoot('minecraft:iron_ore', 'emendatusenigmatica:iron_crystal', {min:3,max:6})
	oreLoot('powah:uraninite_ore_poor', 'powah:uraninite_raw', {min:1,max:2})
	oreLoot('thermal:deepslate_silver_ore', 'emendatusenigmatica:silver_crystal', {min:3,max:6})

// Nether
	oreLoot('minecraft:ancient_debris', 'minecraft:ancient_debris', {min:1,max:3})
	oreLoot('mysticalagriculture:soulium_ore', 'mysticalagriculture:soulium_dust', {min:2,max:4})
	oreLoot('minecraft:nether_gold_ore', 'minecraft:raw_gold', {min:1,max:1})
	oreLoot('minecraft:nether_quartz_ore', 'emendatusenigmatica:quartz_crystal', {min:3,max:6})
	oreLoot('mysticalagradditions:nether_inferium_ore', 'mysticalagriculture:inferium_essence', {min:1,max:1})
	oreLoot('mysticalagriculture:deepslate_inferium_ore', 'mysticalagriculture:inferium_essence', {min:1,max:3})
	// oreLoot('occultism:iesnium_ore_natural', 'occultism:raw_iesnium')
	oreLoot('rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard', {min:1,max:3})
	oreLoot('silentgear:crimson_iron_ore', 'silentgear:raw_crimson_iron', {min:1,max:3})
	oreLoot('silentcompat:solarmetal_ore', 'silentcompat:raw_solarmetal', {min:1,max:3})
	oreLoot('thermal:cinnabar_ore', 'emendatusenigmatica:cinnabar_dust', {min:1,max:3})
	oreLoot('minecraft:deepslate_redstone_ore', 'minecraft:redstone', {min:2,max:5})

// Moon
	oreLoot('thermal:lead_ore', 'emendatusenigmatica:raw_lead', {min:1,max:3})
	oreLoot('ad_astra:moon_cheese_ore', 'ad_astra:cheese', {min:2,max:6})
	oreLoot('ad_astra:moon_desh_ore', 'ad_astra:raw_desh', {min:1,max:3})
	oreLoot('ad_astra:moon_ice_shard_ore', 'ad_astra:ice_shard', {min:1,max:3})
	oreLoot('emendatusenigmatica:apatite_moon_stone_ore', 'emendatusenigmatica:apatite_dust', {min:1,max:3})
	oreLoot('minecraft:deepslate_emerald_ore', 'minecraft:emerald', {min:1,max:2})
	oreLoot('mysticalagriculture:deepslate_prosperity_ore', 'mysticalagriculture:prosperity_shard', {min:2,max:6})
	oreLoot('immersiveengineering:deepslate_ore_aluminum', 'emendatusenigmatica:raw_aluminum', {min:1,max:3})

// Mars
	oreLoot('thermal:niter_ore', 'thermal:niter_dust', {min:1,max:1})
	oreLoot('mysticalagradditions:end_inferium_ore', 'mysticalagriculture:inferium_essence', {min:1,max:4})
	oreLoot('mysticalagradditions:end_prosperity_ore', 'mysticalagriculture:prosperity_shard', {min:3,max:7})
	oreLoot('mekanism:osmium_ore', 'emendatusenigmatica:raw_osmium', {min:1,max:4})
	oreLoot('ad_astra:mars_ostrum_ore', 'ad_astra:raw_ostrum', {min:1,max:4})
	oreLoot('ad_astra:venus_coal_ore', 'minecraft:coal', {min:3,max:7})
	oreLoot('ad_astra:mars_ice_shard_ore', 'ad_astra:ice_shard', {min:1,max:4})
	oreLoot('mythicbotany:elementium_ore', 'mythicbotany:raw_elementium', {min:2,max:4})
	oreLoot('minecraft:deepslate_diamond_ore', 'minecraft:diamond', {min:1,max:1})
	oreLoot('thermal:deepslate_cinnabar_ore', 'emendatusenigmatica:cinnabar_dust', {min:2,max:6})
	oreLoot('minecraft:deepslate_iron_ore', 'minecraft:raw_iron', {min:1,max:3})

// Alfheim
	oreLoot('ad_astra:venus_diamond_ore', 'minecraft:diamond', {min:1,max:3})
	oreLoot('mythicbotany:dragonstone_ore', 'botania:dragonstone', {min:1,max:1})
	oreLoot('silentcompat:arcmetal_ore', 'emendatusenigmatica:arcmetal_crystal', {min:2,max:7})

// Otherside
	oreLoot('emendatusenigmatica:fluix_mercury_stone_ore', 'ae2:fluix_dust', {min:2,max:4})
	oreLoot('emendatusenigmatica:source_deepslate_ore', 'ars_nouveau:source_gem', {min:1,max:3})
	oreLoot('emendatusenigmatica:certus_quartz_blackstone_ore', 'emendatusenigmatica:quartz_dust', {min:2,max:4})

// End
	oreLoot('emendatusenigmatica:apatite_glacio_stone_ore', 'emendatusenigmatica:apatite_dust', {min:2,max:7})
	oreLoot('rftoolsbase:dimensionalshard_end', 'rftoolsbase:dimensionalshard', {min:2,max:7})
	oreLoot('silentgear:azure_silver_ore', 'silentgear:raw_azure_silver', {min:1,max:3})
	oreLoot('mekanism:deepslate_osmium_ore', 'emendatusenigmatica:raw_osmium', {min:2,max:6})

// Venus
	oreLoot('powah:uraninite_ore', 'powah:uraninite_raw', {min:2,max:6})
	oreLoot('thermal:sulfur_ore', 'emendatusenigmatica:sulfur_gem', {min:1,max:4})
	oreLoot('ad_astra:venus_calorite_ore', 'ad_astra:raw_calorite', {min:1,max:3})
	oreLoot('immersiveengineering:ore_uranium', 'emendatusenigmatica:raw_uranium', {min:1,max:3})
	oreLoot('mekanism:fluorite_ore', 'emendatusenigmatica:fluorite_dust', {min:1,max:2})
	oreLoot('immersiveengineering:deepslate_ore_uranium', 'emendatusenigmatica:raw_uranium', {min:1,max:3})
	oreLoot('powah:deepslate_uraninite_ore', 'powah:uraninite_raw', {min:3,max:7})

// Mercury
	oreLoot('ad_astra:mercury_iron_ore', 'minecraft:raw_iron', {min:2,max:5})
	oreLoot('emendatusenigmatica:weekonium_stone_ore', 'emendatusenigmatica:weekonium_crystal', {min:1,max:3})
	oreLoot('ad_astra:deepslate_desh_ore', 'ad_astra:raw_desh', {min:2,max:5})
	oreLoot('ad_astra:deepslate_ostrum_ore', 'ad_astra:raw_ostrum', {min:2,max:5})
	oreLoot('mekanism:deepslate_fluorite_ore', 'emendatusenigmatica:fluorite_dust', {min:2,max:5})

// Glacio
	oreLoot('ad_astra:glacio_iron_ore', 'minecraft:raw_iron', {min:3,max:10})
	oreLoot('ad_astra:mars_diamond_ore', 'minecraft:diamond', {min:3,max:10})
	oreLoot('ad_astra:glacio_lapis_ore', 'minecraft:lapis_lazuli', {min:3,max:10})
	oreLoot('mysticalagradditions:nether_prosperity_ore', 'mysticalagriculture:prosperity_shard', {min:5,max:10})
	oreLoot('powah:deepslate_uraninite_ore_dense', 'powah:uraninite_raw', {min:5,max:20})
	oreLoot('powah:uraninite_ore_dense', 'powah:uraninite_raw', {min:10,max:20})
	oreLoot('rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionsalshard', {min:3,max:10})
	oreLoot('thermal:deepslate_sulfur_ore', 'emendatusenigmatica:sulfur_gem', {min:5,max:10})
	oreLoot('ad_astra:glacio_ice_shard_ore', 'ad_astra:ice_shard', {min:5,max:10})
	oreLoot('emendatusenigmatica:charged_certus_quartz_mercury_stone_ore', 'ae2:charged_certus_quartz_crystal', {min:3,max:10})
	oreLoot('ad_astra:glacio_coal_ore', 'minecraft:coal', {min:5,max:15})
	oreLoot('emendatusenigmatica:sharkinite_deepslate_ore', 'emendatusenigmatica:sharkinite_crystal', {min:1,max:3})

// Dirt and Grass
  	event.modifyBlock(/^minecraft:.*dirt/, table => {
		table.addPool(pool => {
		pool.addItem('rootsclassic:verdant_sprig').randomChance(0.01)})
		})

  	event.modifyBlock(/^minecraft:.*leaves/, table => {
		table.addPool(pool => {
		pool.addItem('rootsclassic:verdant_sprig').randomChance(0.02)})
		})

  	event.modifyBlock('minecraft:tall_grass', table => {
		table.addPool(pool => {
		pool.addItem('rootsclassic:old_root').randomChance(0.03)})
		})

  	event.modifyBlock('minecraft:grass', table => {
		table.addPool(pool => {
		pool.addItem('rootsclassic:old_root').randomChance(0.03)})
		})

  	event.modifyBlock('ad_astra:mercury_stone', table => {
		table.addPool(pool => {
		pool.addItem('emendatusenigmatica:alien_gear').randomChance(0.03)})
		})

  	event.modifyBlock('ad_astra:venus_stone', table => {
		table.addPool(pool => {
		pool.addItem('emendatusenigmatica:alien_rod').randomChance(0.03)})
		})
})

// // Put Sulfuric Acid into Chemical Dissolution Chamber
// // Put 3 Raw Ore into Chemical Dissolution Chamber
// // Yields: Dirty Slurry

// // Put fluid (water works) into Chemical Washer
// // Put Dirty Slurry into Chemical Washer
// // Yields: Clean Slurry

// // Put Clean Slurry into Chemical Crystallizer 
// // Yields: Fragment

// // Put Hydrogen Chloride into Chemical Injection Chamber
// // Put Fragment into Chemical Injection Chamber
// // Yields: Shard 

// // Put Oxygen into Purification Chamber
// // Put Shard into Purification Chamber 
// // Yields: clump

// // Put Clump into Crusher
// // Yields: Dirty dust

// // Put Dirty Dust into Enrichment Chamber
// // Yields: normal Dust

// // Put Dust into Smelter
// // Yields: Ingot

// // Chemical Dissolution Chamber (w/  100mb Sulfuric Acid) +  Raw Ore

// // 3 raw = 2000mb dirty (1 raw = 667mb)
// // 1mb dirty = 1mb clean
// // 200mb clean = 1 fragment (handcraft: 9 fragment = 1 raw)
// // 1 fragment = 1 shard
// // 1 shard = 1 clump
// // 1 clump = 1 dirty dust
// // 1 dirty dust = 1 clean dust
// // 1 clean dust = 1 ingot