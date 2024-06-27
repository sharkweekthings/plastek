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
      item: "create:brass_casing",},
     results: [{
      item: "industrialforegoing:machine_frame_pity",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "create:brass_casing",},[{ // incomplete item
      item: "emendatusenigmatica:steel_gear",},],], // item to deploy
     results: [{
      item: "create:brass_casing",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:brass_casing",},[{ // incomplete item
      item: "pneumaticcraft:ingot_iron_compressed",},],], // item to deploy
     results: [{
      item: "create:brass_casing",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:brass_casing",},[{ // incomplete item
      item: "pneumaticcraft:ingot_iron_compressed",},],], // item to deploy
     results: [{
      item: "create:brass_casing",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "create:brass_casing",},{
      fluid: "pneumaticcraft:plastic",
      amount: 300,},],
     results: [{
      item: "create:brass_casing",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "create:brass_casing",},],
     results: [{
      item: "create:brass_casing",},],
},
],
    transitionalItem: {
      item: "create:brass_casing",
    },
  });

//
})
//