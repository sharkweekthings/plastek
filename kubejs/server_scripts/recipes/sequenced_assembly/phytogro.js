////
// hazmat fabric seqauenced assembly
//// renik


//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "immersiveengineering:fertilizer",},
     results: [{
      item: "thermal:phytogro",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "immersiveengineering:fertilizer",},[{ // incomplete item
      item: "emendatusenigmatica:apatite_dust",},],], // item to deploy
     results: [{
      item: "immersiveengineering:fertilizer",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "immersiveengineering:fertilizer",},[{ // incomplete item
      item: "immersiveengineering:dust_saltpeter",},],], // item to deploy
     results: [{
      item: "immersiveengineering:fertilizer",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "immersiveengineering:fertilizer",},[{ // incomplete item
      item: "thermal:niter_dust",},],], // item to deploy
     results: [{
      item: "immersiveengineering:fertilizer",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "immersiveengineering:fertilizer",},{
      fluidTag: "forge:experience",
      amount: 500,},],
     results: [{
      item: "immersiveengineering:fertilizer",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "immersiveengineering:fertilizer",},],
     results: [{
      item: "immersiveengineering:fertilizer",},],
},
],
    transitionalItem: {
      item: "immersiveengineering:fertilizer",
    },
  });

//
})
//