////
// redstone engineering block sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'immersiveengineering:crafting/rs_engineering'})

//
})
//

//
ServerEvents.recipes((event) => {
//



  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:redstone_block",},
     results: [{
      item: "immersiveengineering:rs_engineering",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:redstone_block",},[{ // incomplete item
      item: "create:precision_mechanism",},],], // item to deploy
     results: [{
      item: "minecraft:redstone_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:redstone_block",},[{ // incomplete item
      item: "immersiveengineering:sheetmetal_iron",},],], // item to deploy
     results: [{
      item: "minecraft:redstone_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:redstone_block",},[{ // incomplete item
      item: "minecraft:redstone",},],], // item to deploy
     results: [{
      item: "minecraft:redstone_block",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "minecraft:redstone_block",},{
      fluid: "pneumaticcraft:plastic",
      amount: 50,},],
     results: [{
      item: "minecraft:redstone_block",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:redstone_block",},],
     results: [{
      item: "minecraft:redstone_block",},],
},
],
    transitionalItem: {
      item: "minecraft:redstone_block",
    },
  });

//
})
//