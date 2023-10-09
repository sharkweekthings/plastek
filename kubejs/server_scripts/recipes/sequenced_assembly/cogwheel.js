////
// cogwheel sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      tag: "forge:treated_wood_slab",},
     results: [{
      item: "create:cogwheel",
      count: 3,},],
      loops: 2,
     sequence: [
{
      type: "create:cutting",
     ingredients: [{
      tag: "forge:treated_wood_slab",},],
      results: [{
      tag: "forge:treated_wood_slab",},], // incomplete item
},
{
    type: "create:deploying",
     ingredients: [{
      tag: "forge:treated_wood_slab",},[{ // incomplete item
      item: "create:shaft",},],], // item to deploy
     results: [{
      tag: "forge:treated_wood_slab",},],
},
{
    type: "create:pressing",
     ingredients: [{
      tag: "forge:treated_wood_slab",},],
     results: [{
      tag: "forge:treated_wood_slab",},],
},
],
    transitionalItem: {
      tag: "forge:treated_wood_slab",
    },
  }).id('create:crafts/seq_cogwheel')

//
});
//