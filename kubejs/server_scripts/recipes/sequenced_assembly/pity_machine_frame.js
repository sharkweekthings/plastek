////
// pity machine frame sequenced assembly
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
      item: "emendatusenigmatica:brass_block",},
     results: [{
      item: "industrialforegoing:machine_frame_pity",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},[{ // incomplete item
      item: "emendatusenigmatica:iron_rod",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},[{ // incomplete item
      item: "emendatusenigmatica:steel_plate",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},[{ // incomplete item
      item: "emendatusenigmatica:steel_plate",},],], // item to deploy
     results: [{
      item: "emendatusenigmatica:brass_block",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "emendatusenigmatica:brass_block",},{
      fluid: "pneumaticcraft:plastic",
      amount: 300,},],
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
      item: "minecraft:stripped_oak_wood",
    },
  });

//
})
//