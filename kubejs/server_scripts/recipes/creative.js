////
// creative
//// renik

ServerEvents.recipes(event => {
//

  //ADD

// Mekanism Creative Energy Cube
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DDEDD",
    "CFGFC",
    "HIJIH",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_atomic"
    },
    "B": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "C": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "D": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "E": {
      "item": "ae2:singularity"
    },
    "F": {
      "type": "forge:nbt",
      "item": "mekanism:ultimate_energy_cube",
      "count": 1,
      "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"256000000\"}]}}"
    },
    "G": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "H": {
      "item": "emendatusenigmatica:plasteel_gear"
    },
    "I": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "J": {
      "item": "immersiveengineering:wire_electrum"
    }
  },
  "result": {
    "item": "mekanism:creative_energy_cube"
  }
}).id('mekanism:creative/creative_energy_cube')

// Powah Creative Energy Cell
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ADEDA",
    "ACBCA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "C": {
      "item": "immersiveengineering:wire_electrum"
    },
    "D": {
      "item": "thermal:rf_coil_creative_augment"
    },
    "E": {
      "item": "industrialforegoing:machine_frame_supreme"
    }
  },
  "result": {
    "item": "powah:energy_cell_creative"
  }
}).id('powah:creative/energy_cell_creative')

// AE2 Creative Energy Cell
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABCDA",
    "AEFEA",
    "ADCBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "immersiveengineering:wire_electrum"
    },
    "C": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "D": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "E": {
      "item": "thermal:rf_coil_creative_augment"
    },
    "F": {
      "item": "powah:energy_cell_creative"
    }
  },
  "result": {
    "item": "ae2:creative_energy_cell"
  }
}).id('ae2:creative/creative_energy_cell')

// Pneumatic Craft Creative Compressor
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DCECD",
    "CEFEC",
    "GCECH",
    "IJCJI"
  ],
  "key": {
    "A": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "B": {
      "item": "ae2:singularity"
    },
    "C": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "G": {
      "item": "pneumaticcraft:advanced_air_compressor"
    },
    "H": {
      "item": "pneumaticcraft:advanced_liquid_compressor"
    },
    "I": {
      "item": "immersiveengineering:wire_electrum"
    },
    "J": {
      "item": "immersiveengineering:wire_aluminum"
    }
  },
  "result": {
    "item": "pneumaticcraft:creative_compressor"
  }
}).id('pneumaticcraft:creative/creative_compressor')

// Create Creative Motor
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DCECD",
    "CEFEC",
    "GCECG",
    "HICIH"
  ],
  "key": {
    "A": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "B": {
      "item": "ae2:singularity"
    },
    "C": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "G": {
      "item": "create:rotation_speed_controller"
    },
    "H": {
      "item": "immersiveengineering:wire_electrum"
    },
    "I": {
      "item": "immersiveengineering:wire_aluminum"
    }
  },
  "result": {
    "item": "create:creative_motor"
  }
}).id('create:creative/creative_motor')

// Create Creative Fluid Tank
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBA",
    "ACDCA",
    "ADEDA",
    "ACDCA",
    "ABBBA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "C": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "D": {
      "item": "pneumaticcraft:huge_tank"
    },
    "E": {
      "item": "thermal:fluid_tank_creative_augment"
    }
  },
  "result": {
    "item": "create:creative_fluid_tank"
  }
}).id('create:creative/creative_fluid_tank')

// Create Creative Crate
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ACDCA",
    "ABCBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "mekanism:alloy_atomic"
    },
    "C": {
      "item": "metalbarrels:netherite_barrel"
    },
    "D": {
      "item": "functionalstorage:creative_vending_upgrade"
    }
  },
  "result": {
    "item": "create:creative_crate"
  }
}).id('create:creative/creative_crate')

// Thermal Creative RF Coil Augment
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  A  ",
    " BCB ",
    "DEFED",
    " BCB ",
    "  A  "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wire_electrum"
    },
    "B": {
      "item": "ae2:singularity"
    },
    "C": {
      "item": "mekanism:alloy_atomic"
    },
    "D": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "E": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "F": {
      "item": "thermal:machine_efficiency_creative_augment"
    }
  },
  "result": {
    "item": "thermal:rf_coil_creative_augment"
  }
}).id('thermal:creative/rf_coil_creative_augment')

// Thermal Creative Tank Augment
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " AAA ",
    "ABCBA",
    "ADEDA",
    " AFA ",
    "  A  "
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "mekanism:alloy_atomic"
    },
    "C": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "D": {
      "item": "pneumaticcraft:huge_tank"
    },
    "E": {
      "item": "industrialforegoing:supreme_black_hole_tank"
    },
    "F": {
      "item": "create:creative_blaze_cake"
    }
  },
  "result": {
    "item": "thermal:fluid_tank_creative_augment"
  }
}).id('thermal:creative/fluid_tank_creative_augment')

// Thermal Creative Flux Efficency Augment
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  A  ",
    " BCB ",
    "DEFGD",
    " BCB ",
    "  A  "
  ],
  "key": {
    "A": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "B": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "C": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "pneumaticcraft:creative_compressor"
    },
    "F": {
      "item": "ae2:singularity"
    },
    "G": {
      "item": "create:creative_motor"
    }
  },
  "result": {
    "item": "thermal:machine_efficiency_creative_augment"
  }
}).id('thermal:creative/machine_efficiency_creative_augment')

// Thermal Creative Flux Efficency Augment
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DDEDD",
    "CFGFC",
    "HIJIH",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_atomic"
    },
    "B": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "C": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "D": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "E": {
      "item": "ae2:singularity"
    },
    "F": {
      "item": "mysticalagradditions:creative_essence"
    },
    "G": {
      "item": "pneumaticcraft:upgrade_matrix"
    },
    "H": {
      "item": "emendatusenigmatica:plasteel_gear"
    },
    "I": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "J": {
      "item": "immersiveengineering:wire_electrum"
    }
  },
  "result": {
    "item": "thermal:machine_catalyst_creative_augment"
  }
}).id('thermal:creative/machine_catalyst_creative_augment')

// AE2 Creative Item Cell
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "BDEFB",
    "CEGEC",
    "BFEDB",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "create:creative_crate"
    },
    "B": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "C": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "D": {
      "item": "immersiveengineering:wire_electrum"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "G": {
      "item": "rftoolsutility:creative_screen"
    }
  },
  "result": {
    "item": "ae2:creative_item_cell"
  }
}).id('ae2:creative/creative_item_cell')

// AE2 Creative Fluid Cell
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "BDEFB",
    "CEGEC",
    "BFEDB",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "create:creative_fluid_tank"
    },
    "B": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "C": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "D": {
      "item": "immersiveengineering:wire_electrum"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "G": {
      "item": "rftoolsutility:creative_screen"
    }
  },
  "result": {
    "item": "ae2:creative_fluid_cell"
  }
}).id('ae2:creative/creative_fluid_cell')

// AE2 Creative Chemical Cell
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "BDEFB",
    "CEGEC",
    "BFEDB",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:creative_chemical_tank"
    },
    "B": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "C": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "D": {
      "item": "immersiveengineering:wire_electrum"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "G": {
      "item": "rftoolsutility:creative_screen"
    }
  },
  "result": {
    "item": "appmek:creative_chemical_cell"
  }
}).id('appmek:creative/creative_chemical_cell')

// RF Tools Creative Screen
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABBBA",
    "ACDEA",
    "ABBBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "thermal:enderium_glass"
    },
    "C": {
      "item": "ae2:creative_energy_cell"
    },
    "D": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "E": {
      "item": "create:creative_crate"
    }
  },
  "result": {
    "item": "rftoolsutility:creative_screen"
  }
}).id('rftoolsutility:creative/creative_screen')

// Creative Supply Upgrade
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DDEDD",
    "CFGFC",
    "HIJIH",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_atomic"
    },
    "B": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "C": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "D": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "E": {
      "item": "ae2:singularity"
    },
    "F": {
      "item": "enderstorage:ender_chest"
    },
    "G": {
      "item": "pneumaticcraft:upgrade_matrix"
    },
    "H": {
      "item": "emendatusenigmatica:plasteel_gear"
    },
    "I": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "J": {
      "item": "immersiveengineering:wire_electrum"
    }
  },
  "result": {
    "item": "pneumaticcraft:creative_upgrade"
  }
}).id('pneumaticcraft:creative/creative_upgrade')

// Creative Ceremony Cheat
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  AAB",
    "  ACA",
    " DEAA",
    "AFD  ",
    "FA   "
  ],
  "key": {
    "A": {
      "item": "mysticalagradditions:creative_essence"
    },
    "B": {
      "item": "ae2:singularity"
    },
    "C": {
      "item": "mysticalagriculture:master_infusion_crystal"
    },
    "D": {
      "item": "mythicbotany:alfsteel_ingot"
    },
    "E": {
      "item": "totemic:totemic_staff"
    },
    "F": {
      "item": "immersiveengineering:stick_treated"
    }
  },
  "result": {
    "item": "totemic:ceremony_cheat"
  }
}).id('totemic:creative/ceremony_cheat')

// Botania Creative Corporea Spark
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABABA",
    "BACAB",
    "DEFGD",
    "BACAB",
    "ABABA"
  ],
  "key": {
    "A": {
      "item": "mysticalagradditions:creative_essence"
    },
    "B": {
      "item": "mythicbotany:alfsteel_ingot"
    },
    "C": {
      "item": "botania:spark"
    },
    "D": {
      "item": "mysticalagriculture:master_infusion_crystal"
    },
    "E": {
      "item": "botania:corporea_spark"
    },
    "F": {
      "item": "ae2:singularity"
    },
    "G": {
      "item": "botania:corporea_spark_master"
    }
  },
  "result": {
    "item": "botania:corporea_spark_creative"
  }
}).id('botania:creative/corporea_spark_creative')

// Ars Nouveau Creative Source Jar
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "BCDCB",
    "BDEDB",
    "BCDCB",
    "AAFAA"
  ],
  "key": {
    "A": {
      "item": "mythicbotany:alfsteel_ingot"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    },
    "C": {
      "item": "mysticalagradditions:creative_essence"
    },
    "D": {
      "item": "ars_nouveau:source_jar"
    },
    "E": {
      "item": "ae2:singularity"
    },
    "F": {
      "item": "mysticalagriculture:master_infusion_crystal"
    }
  },
  "result": {
    "item": "ars_nouveau:creative_source_jar"
  }
}).id('ars_nouveau:creative/creative_source_jar')

// Ars Nouveau Creative Source Jar
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ADEDA",
    "ABCBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "mythicbotany:alfsteel_ingot"
    },
    "B": {
      "item": "mysticalagradditions:creative_essence"
    },
    "C": {
      "item": "mysticalagriculture:master_infusion_crystal"
    },
    "D": {
      "item": "ars_nouveau:archmage_spell_book"
    },
    "E": {
      "item": "ae2:singularity"
    }
  },
  "result": {
    "item": "ars_nouveau:creative_spell_book"
  }
}).id('ars_nouveau:creative/creative_spell_book')

// Creative Soulium Dagger
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  A  ",
    "  B  ",
    " CDC ",
    " EFE ",
    "  F  "
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:master_infusion_crystal"
    },
    "B": {
      "item": "mythicbotany:alfsteel_ingot"
    },
    "C": {
      "type": "forge:nbt",
      "item": "mysticalagriculture:soulium_dagger",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "D": {
      "item": "ae2:singularity"
    },
    "E": {
      "item": "mysticalagradditions:creative_essence"
    },
    "F": {
      "item": "immersiveengineering:stick_treated"
    }
  },
  "result": {
    "item": "mysticalagriculture:creative_soulium_dagger"
  }
}).id('mysticalagriculture:creative/creative_soulium_dagger')

// Infinity Wand
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  AAB",
    "  ACA",
    " DEAA",
    "DFD  ",
    "FD   "
  ],
  "key": {
    "A": {
      "item": "mysticalagradditions:creative_essence"
    },
    "B": {
      "item": "ae2:singularity"
    },
    "C": {
      "item": "mysticalagriculture:master_infusion_crystal"
    },
    "D": {
      "item": "mythicbotany:alfsteel_ingot"
    },
    "E": {
      "type": "forge:nbt",
      "item": "constructionwand:diamond_wand",
      "count": 1,
      "nbt": "{Damage:0,wand_options:{}}"
    },
    "F": {
      "item": "immersiveengineering:stick_treated"
    }
  },
  "result": {
    "item": "constructionwand:infinity_wand"
  }
}).id('constructionwand:creative/infinity_wand')

// Creative Pipe Upgrade
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "CCDCC",
    "ADEDA",
    "CCDCC",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "mythicbotany:alfsteel_ingot"
    },
    "C": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "D": {
      "item": "pipez:ultimate_upgrade"
    },
    "E": {
      "item": "ae2:singularity"
    }
  },
  "result": {
    "item": "pipez:infinity_upgrade"
  }
}).id('pipez:creative/infinity_upgrade')

// Creative Essence
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "AGBGA",
    "ACDEA",
    "AGFGA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "mysticalagradditions:insanium_essence"
    },
    "B": {
      "item": "ars_nouveau:earth_essence"
    },
    "C": {
      "item": "ars_nouveau:air_essence"
    },
    "D": {
      "item": "ae2:singularity"
    },
    "E": {
      "item": "ars_nouveau:water_essence"
    },
    "F": {
      "item": "ars_nouveau:fire_essence"
    },
    "G": {
      "item": "emendatusenigmatica:plastim_dust"
    }
  },
  "result": {
    "item": "mysticalagradditions:creative_essence"
  }
}).id('mysticalagradditions:creative/creative_essence')

// Creative Bin
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ABDBA",
    "ABCBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "metalbarrels:netherite_barrel"
    },
    "C": {
      "item": "ae2:singularity"
    },
    "D": {
      "item": "create:creative_fluid_tank"
    }
  },
  "result": {
    "item": "mekanism:creative_bin"
  }
}).id('mekanism:creative_bin')

// Creative Compressed Iron Block
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", 
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 10,
          "item": "pneumaticcraft:compressed_iron_block"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 2,
          "item": "ae2:creative_energy_cell"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "count": 10,
          "item": "mekanism:pellet_polonium"
        },],
          "pressure": 5, 
          "results": [{"item": "pneumaticcraft:creative_compressed_iron_block"}]
  }).id('pneumaticcraft:pressure_chamber_creative_iron_block')

// Creative World Shaper
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABB",
    "ACDEB",
    "FCGDA",
    "HICCA",
    "JHKAA"
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "mekanism:alloy_atomic"
    },
    "C": {
      "item": "emendatusenigmatica:plasteel_gear"
    },
    "D": {
      "item": "thermal:rf_coil_creative_augment"
    },
    "E": {
      "item": "mysticalagriculture:supremium_pickaxe"
    },
    "F": {
      "item": "ae2:creative_item_cell"
    },
    "G": {
      "item": "create:creative_motor"
    },
    "H": {
      "item": "ae2:singularity"
    },
    "I": {
      "item": "appmek:creative_chemical_cell"
    },
    "J": {
      "item": "minecraft:stick"
    },
    "K": {
      "item": "ae2:creative_fluid_cell"
    }
  },
  "result": {
    "item": "create:handheld_worldshaper"
  }
}).id('create:handheld_worldshaper')

// Creative Chemical Tank
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ACDCA",
    "ABCBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "emendatusenigmatica:plastim_plate"
    },
    "B": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "C": {
      "item": "pneumaticcraft:huge_tank"
    },
    "D": {
      "item": "create:creative_fluid_tank"
    }
  },
  "result": {
    "item": "mekanism:creative_chemical_tank"
  }
}).id('mekanism:creative_chemical_tank')

//    
})
//