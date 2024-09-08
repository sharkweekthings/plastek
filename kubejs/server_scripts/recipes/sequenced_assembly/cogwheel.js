////
// cogwheel sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:oak_slab",},
     results: [{
      item: "create:cogwheel",
      count: 3,},],
      loops: 1,
     sequence: [
{
      type: "create:cutting",
     ingredients: [{
      item: "minecraft:oak_slab",},],
      results: [{
      item: "minecraft:oak_slab",},], // incomplete item
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:oak_slab",},[{ // incomplete item
      item: "create:shaft",},],], // item to deploy
     results: [{
      item: "minecraft:oak_slab",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:oak_slab",},],
     results: [{
      item: "minecraft:oak_slab",},],
},
],
    transitionalItem: {
      item: "minecraft:oak_slab",
    },
  }).id('create:crafts/seq_cogwheel')

//
});
//