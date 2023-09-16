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
      "item": "powah:energy_cell_spirited"
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
    "item": "powah:energy_cell_creative"
  }
}).id('powah:creative/energy_cell_creative')

// AE2 Creative Energy Cell
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
      "item": "ae2:energy_cell"
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
    "item": "ae2:creative_energy_cell"
  }
}).id('ae2:creative/creative_energy_cell')

// Pneumatic Craft Creative Compressor
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
      "item": "pneumaticcraft:advanced_air_compressor"
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
    "item": "pneumaticcraft:creative_compressor"
  }
}).id('pneumaticcraft:creative/creative_compressor')

// Create Creative Motor
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
      "item": "create:rotation_speed_controller"
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
    "item": "create:creative_motor"
  }
}).id('create:creative/creative_motor')

// Create Creative Fluid Tank
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
      "item": "pneumaticcraft:huge_tank"
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
    "item": "create:creative_fluid_tank"
  }
}).id('create:creative/creative_fluid_tank')

// Create Creative Crate
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
      "item": "metalbarrels:netherite_barrel"
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
    "item": "create:creative_crate"
  }

}).id('create:creative/creative_crate')

// Create Creative Blaze Cake
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
      "item": "metalbarrels:netherite_barrel"
    },
    "G": {
      "item": "create:blaze_burner"
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
    "item": "create:creative_blaze_cake"
  }
}).id('create:creative/creative_blaze_cake')

// Thermal Creative RF Coil Augment
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
      "item": "thermal:rf_coil"
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
    "item": "thermal:rf_coil_creative_augment"
  }
}).id('thermal:creative/rf_coil_creative_augment')

// Thermal Creative Tank Augment
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
      "item": "pneumaticcraft:huge_tank"
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
    "item": "thermal:fluid_tank_creative_augment"
  }
}).id('thermal:creative/fluid_tank_creative_augment')

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
      "item": "extendedcrafting:nether_star_block"
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

// // AE2 Creative Item Cell
//   event.custom({
//   "type": "extendedcrafting:shaped_table",
//   "pattern": [
//     "ABCBA",
//     "DDEDD",
//     "CFGFC",
//     "HIJIH",
//     "ABCBA"
//   ],
//   "key": {
//     "A": {
//       "item": "mekanism:alloy_atomic"
//     },
//     "B": {
//       "item": "mekanism:ultimate_control_circuit"
//     },
//     "C": {
//       "item": "pneumaticcraft:printed_circuit_board"
//     },
//     "D": {
//       "item": "emendatusenigmatica:plastim_plate"
//     },
//     "E": {
//       "item": "ae2:singularity"
//     },
//     "F": {
//       "item": "megacells:item_storage_cell_256m"
//     },
//     "G": {
//       "item": "megacells:mega_item_cell_housing"
//     },
//     "H": {
//       "item": "emendatusenigmatica:plasteel_gear"
//     },
//     "I": {
//       "item": "immersiveengineering:wire_aluminum"
//     },
//     "J": {
//       "item": "immersiveengineering:wire_electrum"
//     }
//   },
//   "result": {
//     "item": "ae2:creative_item_cell"
//   }
// }).id('ae2:creative/creative_item_cell')

// AE2 Creative Fluid Cell
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
      "item": "megacells:fluid_storage_cell_256m"
    },
    "G": {
      "item": "megacells:mega_fluid_cell_housing"
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
    "item": "ae2:creative_fluid_cell"
  }
}).id('ae2:creative/creative_fluid_cell')

// AE2 Creative Chemical Cell
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
      "item": "megacells:chemical_storage_cell_256m"
    },
    "G": {
      "item": "megacells:mega_chemical_cell_housing"
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
    "item": "appmek:creative_chemical_cell"
  }
}).id('appmek:creative/creative_chemical_cell')

// Functional Storage Creative Vending Upgrade
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
      "item": "functionalstorage:storage_controller"
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
    "item": "functionalstorage:creative_vending_upgrade"
  }
}).id('functionalstorage:creative/creative_vending_upgrade')

// RF Tools Creative Screen
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
      "item": "rftoolsutility:screen"
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

//    
})
//