////
// light engineering block sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'immersiveengineering:crafting/light_engineering'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "emendatusenigmatica:brass_block",},
     results: [{
      item: "immersiveengineering:light_engineering",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},[{ // incomplete item
      item: "create:precision_mechanism",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},[{ // incomplete item
      item: "immersiveengineering:sheetmetal_iron",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},[{ // incomplete item
      item: "immersiveengineering:component_iron",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},{
      fluid: "pneumaticcraft:plastic",
      amount: 500,},],
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},],
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
],
    transitionalItem: {
      item: "emendatusenigmatica:brass_block",
    },
  });

//
})
//