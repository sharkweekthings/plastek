////
// Train Track Sequenced Assembly
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
      item: "kubejs:green_board",},
     results: [{
      item: "pneumaticcraft:empty_pcb",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:green_board",},[{ // incomplete item
      item: "pneumaticcraft:plastic",},],], // item to deploy
     results: [{
      item: "kubejs:green_board",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:green_board",},[{ // incomplete item
      item: "emendatusenigmatica:copper_plate",},],], // item to deploy
     results: [{
      item: "kubejs:green_board",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:green_board",},[{ // incomplete item
      item: "pneumaticcraft:plastic",},],], // item to deploy
     results: [{
      item: "kubejs:green_board",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "kubejs:green_board",},],
     results: [{
      item: "kubejs:green_board",},],
},
],
    transitionalItem: {
      item: "kubejs:green_board",
    },
  });

//
})
//