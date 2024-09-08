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
      item: "create:andesite_casing",},
     results: [{
      item: "industrialforegoing:machine_frame_pity",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "create:andesite_casing",},[{ // incomplete item
      item: "emendatusenigmatica:steel_gear",},],], // item to deploy
     results: [{
      item: "create:andesite_casing",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:andesite_casing",},[{ // incomplete item
      item: "pneumaticcraft:ingot_iron_compressed",},],], // item to deploy
     results: [{
      item: "create:andesite_casing",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:andesite_casing",},[{ // incomplete item
      item: "pneumaticcraft:ingot_iron_compressed",},],], // item to deploy
     results: [{
      item: "create:andesite_casing",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "create:andesite_casing",},{
      fluid: "pneumaticcraft:plastic",
      amount: 200,},],
     results: [{
      item: "create:andesite_casing",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "create:andesite_casing",},],
     results: [{
      item: "create:andesite_casing",},],
},
],
    transitionalItem: {
      item: "create:andesite_casing",
    },
  });

//
})
//