////
// cogwheel sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "industrialforegoing:tinydryrubber"
  },
  "loops": 1,
  "results": [
    {
      "item": "industrialforegoing:plastic"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "industrialforegoing:tinydryrubber"
        },
        {
          "amount": 100,
          "fluid": "minecraft:water",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "industrialforegoing:tinydryrubber"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "industrialforegoing:tinydryrubber"
        }
      ],
      "results": [
        {
          "item": "industrialforegoing:tinydryrubber"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "industrialforegoing:tinydryrubber"
        }
      ],
      "results": [
        {
          "item": "industrialforegoing:tinydryrubber"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "industrialforegoing:tinydryrubber"
  }
}).id('create:sequenced_assembly/tiny_dry_to_plastic_xp')

//
});
//