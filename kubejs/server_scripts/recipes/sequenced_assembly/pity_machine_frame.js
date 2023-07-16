////
// Pity Machine Frame Sequenced Assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'industrialforegoing:machine_frame_pity'})


//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:stripped_oak_wood",},
     results: [{
      item: "industrialforegoing:machine_frame_pity",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stripped_oak_wood",},[{ // incomplete item
      item: "emendatusenigmatica:iron_rod",},],], // item to deploy
     results: [{
      item: "minecraft:stripped_oak_wood",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stripped_oak_wood",},[{ // incomplete item
      item: "emendatusenigmatica:iron_plate",},],], // item to deploy
     results: [{
      item: "minecraft:stripped_oak_wood",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:stripped_oak_wood",},[{ // incomplete item
      item: "emendatusenigmatica:iron_plate",},],], // item to deploy
     results: [{
      item: "minecraft:stripped_oak_wood",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "minecraft:stripped_oak_wood",},{
      fluid: "pneumaticcraft:plastic",
      amount: 300,},],
     results: [{
      item: "minecraft:stripped_oak_wood",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:stripped_oak_wood",},],
     results: [{
      item: "minecraft:stripped_oak_wood",},],
},
],
    transitionalItem: {
      item: "minecraft:stripped_oak_wood",
    },
  });

//
})
//