////
// train track sequenced assembly
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
      item: "mekanism:creative_bin",},
     results: [{
      item: "functionalstorage:creative_vending_upgrade",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "mekanism:creative_bin",},[{ // incomplete item
      item: "ae2:singularity",},],], // item to deploy
     results: [{
      item: "mekanism:creative_bin",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "mekanism:creative_bin",},[{ // incomplete item
      item: "botania:corporea_spark_creative",},],], // item to deploy
     results: [{
      item: "mekanism:creative_bin",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "mekanism:creative_bin",},[{ // incomplete item
      item: "productivebees:upgrade_base",},],], // item to deploy
     results: [{
      item: "mekanism:creative_bin",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "mekanism:creative_bin",},],
     results: [{
      item: "mekanism:creative_bin",},],
},
],
    transitionalItem: {
      item: "mekanism:creative_bin",
    },
  });

//
})
//