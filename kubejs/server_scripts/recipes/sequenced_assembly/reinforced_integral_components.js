////
// reinforced integral components sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'thermal:augments/upgrade_augment_2'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "thermal:upgrade_augment_1",},
     results: [{
      item: "thermal:upgrade_augment_2",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "thermal:upgrade_augment_1",},[{ // incomplete item
      item: "create:precision_mechanism",},],], // item to deploy
     results: [{
      item: "thermal:upgrade_augment_1",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "thermal:upgrade_augment_1",},[{ // incomplete item
      item: "emendatusenigmatica:signalum_gear",},],], // item to deploy
     results: [{
      item: "thermal:upgrade_augment_1",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "thermal:upgrade_augment_1",},[{ // incomplete item
      item: "emendatusenigmatica:signalum_ingot",},],], // item to deploy
     results: [{
      item: "thermal:upgrade_augment_1",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "thermal:upgrade_augment_1",},],
     results: [{
      item: "thermal:upgrade_augment_1",},],
},
],
    transitionalItem: {
      item: "thermal:upgrade_augment_1",
    },
  });

//
})
//