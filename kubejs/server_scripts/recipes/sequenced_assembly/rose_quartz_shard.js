////
// cogwheel sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "emendatusenigmatica:cinnabar_dust"
  },
  "loops": 1,
  "results": [
    {
      "item": "biomesoplenty:rose_quartz_shard"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "emendatusenigmatica:cinnabar_dust"
        },
        {
          "amount": 250,
          "fluid": "minecraft:lava",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "emendatusenigmatica:cinnabar_dust"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "emendatusenigmatica:cinnabar_dust"
        }
      ],
      "results": [
        {
          "item": "emendatusenigmatica:cinnabar_dust"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "emendatusenigmatica:cinnabar_dust"
        }
      ],
      "results": [
        {
          "item": "emendatusenigmatica:cinnabar_dust"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "emendatusenigmatica:cinnabar_dust"
  }
}).id('create:crafts/cinnabar_to_rose_quartz_shard')

//
});
//