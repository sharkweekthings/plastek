////
// train track sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "emendatusenigmatica:iron_rod",},
     results: [{
      item: "create:shaft",
      count: 3,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:iron_rod",},[{ // incomplete item
      item: "pneumaticcraft:ingot_iron_compressed",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:iron_rod",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:iron_rod",},[{ // incomplete item
      item: "create:andesite_alloy",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:iron_rod",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:iron_rod",},[{ // incomplete item
      item: "pneumaticcraft:ingot_iron_compressed",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:iron_rod",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "emendatusenigmatica:iron_rod",},],
     results: [{
      item: "emendatusenigmatica:iron_rod",},],
},
],
    transitionalItem: {
      item: "emendatusenigmatica:iron_rod",
    },
  });

//
})
//