////
// Cogwheel Sequences Assembly
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
      count: 4,},],
      loops: 2,
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
  });

//
});
//






  // event.custom({
  //   type: "create:sequenced_assembly",
  //    ingredient: {
  //     tag: "#minecraft:wooden_slabs",},
  //    results: [{
  //     item: "create:cogwheel",},],
  //    loops: 1,

  //   sequence: [{
  //     type: "create:pressing",
  //      ingredients: [{
  //       item: "thermal:cured_rubber",},],
  //      results: [{
  //       item: "thermal:cured_rubber",},],
  //     },

  //     {
  //     type: "create:deploying",
  //      ingredients: [{
  //       item: "thermal:cured_rubber",},[{
  //       item: "thermal:cured_rubber",},],],
  //      results: [{
  //       item: "thermal:cured_rubber",},],
  //     },

  //     {
  //     type: "create:pressing",
  //      ingredients: [{
  //       item: "thermal:cured_rubber",},],
  //       results: [{
  //       item: "thermal:cured_rubber",},],},],

  //   transitionalItem: {
  //     item: "thermal:cured_rubber",
  //   },
  // });