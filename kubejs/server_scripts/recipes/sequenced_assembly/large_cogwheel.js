////
// large cogwheelsequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:oak_planks",},
     results: [{
      item: "create:large_cogwheel",
      count: 4,},],
      loops: 2,
     sequence: [
{
      type: "create:cutting",
     ingredients: [{
      item: "minecraft:oak_planks",},],
      results: [{
      item: "minecraft:oak_planks",},], // Incomplete Item
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:oak_planks",},[{ // Incomplete Item
      item: "create:shaft",},],], // item to deploy
     results: [{
      item: "minecraft:oak_planks",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:oak_planks",},],
     results: [{
      item: "minecraft:oak_planks",},],
},
],
    transitionalItem: {
      item: "minecraft:oak_planks",
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