////
// precision mechanism sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'create:sequenced_assembly/precision_mechanism'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "emendatusenigmatica:brass_plate",},
     results: [{
      item: "create:precision_mechanism",
      count: 1,},],
      loops: 3,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_plate",},[{ // incomplete item
      item: "create:shaft",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_plate",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_plate",},[{ // incomplete item
      item: "create:cogwheel",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_plate",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_plate",},[{ // incomplete item
      item: "emendatusenigmatica:copper_gear",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_plate",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_plate",},[{ // incomplete item
      item: "industrialforegoing:plastic",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_plate",},],
},
],
    transitionalItem: {
      item: "emendatusenigmatica:brass_plate",
    },
  });

//
})
//