////
// hardened integral components sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'thermal:augments/upgrade_augment_1'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "pneumaticcraft:plastic",},
     results: [{
      item: "thermal:upgrade_augment_1",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "pneumaticcraft:plastic",},[{ // incomplete item
      item: "create:precision_mechanism",},],], // item to deploy
     results: [{
      item: "pneumaticcraft:plastic",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "pneumaticcraft:plastic",},[{ // incomplete item
      item: "emendatusenigmatica:invar_gear",},],], // item to deploy
     results: [{
      item: "pneumaticcraft:plastic",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "pneumaticcraft:plastic",},[{ // incomplete item
      item: "emendatusenigmatica:invar_ingot",},],], // item to deploy
     results: [{
      item: "pneumaticcraft:plastic",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "pneumaticcraft:plastic",},],
     results: [{
      item: "pneumaticcraft:plastic",},],
},
],
    transitionalItem: {
      item: "pneumaticcraft:plastic",
    },
  });

//
})
//