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
      item: "minecraft:green_dye",},
     results: [{
      item: "kubejs:green_board",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:incomplete_green_board",},[{ // incomplete item
      item: "pneumaticcraft:plastic",},],], // item to deploy
     results: [{
      item: "kubejs:incomplete_green_board",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:incomplete_green_board",},[{ // incomplete item
      item: "pneumaticcraft:plastic",},],], // item to deploy
     results: [{
      item: "kubejs:incomplete_green_board",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:incomplete_green_board",},[{ // incomplete item
      item: "pneumaticcraft:plastic",},],], // item to deploy
     results: [{
      item: "kubejs:incomplete_green_board",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "kubejs:incomplete_green_board",},],
     results: [{
      item: "kubejs:incomplete_green_board",},],
},
],
    transitionalItem: {
      item: "kubejs:incomplete_green_board",
    },
  });

//
})
//