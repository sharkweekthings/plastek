////
// green board sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'create:sequenced_assembly/track'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:stick",},
     results: [{
      item: "emendatusenigmatica:brass_rod",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stick",},[{ // incomplete item
      item: "emendatusenigmatica:brass_ingot",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_ingot",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stick",},[{ // incomplete item
      item: "emendatusenigmatica:brass_ingot",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_ingot",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stick",},[{ // incomplete item
      item: "emendatusenigmatica:brass_ingot",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_ingot",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "emendatusenigmatica:brass_ingot",},],
     results: [{
      item: "minecraft:stick",},],
},
],
    transitionalItem: {
      item: "emendatusenigmatica:brass_ingot",
    },
  });

//
})
//