////
// heavy engineering block seqiemced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "emendatusenigmatica:electrum_block",},
     results: [{
      item: "immersiveengineering:heavy_engineering",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:electrum_block",},[{ // incomplete item
      item: "create:precision_mechanism",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:electrum_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:electrum_block",},[{ // incomplete item
      item: "immersiveengineering:sheetmetal_steel",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:electrum_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:electrum_block",},[{ // incomplete item
      item: "immersiveengineering:component_steel",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:electrum_block",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "emendatusenigmatica:electrum_block",},{
      fluid: "pneumaticcraft:plastic",
      amount: 800,},],
     results: [{
      item: "emendatusenigmatica:electrum_block",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "emendatusenigmatica:electrum_block",},],
     results: [{
      item: "emendatusenigmatica:electrum_block",},],
},
],
    transitionalItem: {
      item: "emendatusenigmatica:electrum_block",
    },
  });

//
})
//