////
// cogwheel sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "create:powdered_obsidian"
  },
  "loops": 1,
  "results": [
    {
      "item": "create:sturdy_sheet"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "create:powdered_obsidian"
        },
        {
          "amount": 100,
          "fluid": "minecraft:lava",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "create:powdered_obsidian"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create:powdered_obsidian"
        }
      ],
      "results": [
        {
          "item": "create:powdered_obsidian"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create:powdered_obsidian"
        }
      ],
      "results": [
        {
          "item": "create:powdered_obsidian"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "create:powdered_obsidian"
  }
}).id('create:sequenced_assembly/sturdy_sheet')

//
});
//