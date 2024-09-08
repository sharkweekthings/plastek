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
      item: "industrialforegoing:plastic",},
     results: [{
      item: "create:precision_mechanism",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "industrialforegoing:plastic",},[{ // incomplete item
      item: "create:shaft",},],], // item to deploy
     results: [{
      item: "industrialforegoing:plastic",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "industrialforegoing:plastic",},[{ // incomplete item
      item: "create:cogwheel",},],], // item to deploy
     results: [{
      item: "industrialforegoing:plastic",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "industrialforegoing:plastic",},[{ // incomplete item
      item: "emendatusenigmatica:brass_plate",},],], // item to deploy
     results: [{
      item: "industrialforegoing:plastic",},],
},
],
    transitionalItem: {
      item: "industrialforegoing:plastic",
    },
  });

//
})
//