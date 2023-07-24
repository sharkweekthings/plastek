////
// resonant integral components sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'thermal:augments/upgrade_augment_3'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "thermal:upgrade_augment_2",},
     results: [{
      item: "thermal:upgrade_augment_3",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "thermal:upgrade_augment_2",},[{ // incomplete item
      item: "create:precision_mechanism",},],], // item to deploy
     results: [{
      item: "thermal:upgrade_augment_2",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "thermal:upgrade_augment_2",},[{ // incomplete item
      item: "thermal:enderium_gear",},],], // item to deploy
     results: [{
      item: "thermal:upgrade_augment_2",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "thermal:upgrade_augment_2",},[{ // incomplete item
      item: "emendatusenigmatica:enderium_ingot",},],], // item to deploy
     results: [{
      item: "thermal:upgrade_augment_2",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "thermal:upgrade_augment_2",},],
     results: [{
      item: "thermal:upgrade_augment_2",},],
},
],
    transitionalItem: {
      item: "thermal:upgrade_augment_2",
    },
  });

//
})
//