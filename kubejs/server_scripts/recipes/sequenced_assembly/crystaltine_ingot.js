////
// cogwheel sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "silentcompat:crystalline_alloy"
  },
  "loops": 1,
  "results": [
    {
      "item": "extendedcrafting:crystaltine_ingot"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "silentcompat:crystalline_alloy"
        },
        {
          "amount": 800,
          "fluid": "mekanism:oxygen",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "silentcompat:crystalline_alloy"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "silentcompat:crystalline_alloy"
        }
      ],
      "results": [
        {
          "item": "silentcompat:crystalline_alloy"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "silentcompat:crystalline_alloy"
        }
      ],
      "results": [
        {
          "item": "silentcompat:crystalline_alloy"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "silentcompat:crystalline_alloy"
  }
}).id('create:crafts/crystaltine_ingot')

//
});
//