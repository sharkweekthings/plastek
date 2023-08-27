////
// fluid cell frame sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:leather",},
     results: [{
      item: "totemic:buffalo_hide",
      count: 1,},],
      loops: 1  ,
     sequence: [
{
      type: "create:cutting",
     ingredients: [{
      item: "minecraft:leather",},],
      results: [{
      item: "minecraft:leather",},], // incomplete item
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:leather",},[{ // incomplete item
      item: "productivebees:wax",},],], // item to deploy
     results: [{
      item: "minecraft:leather",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:leather",},],
     results: [{
      item: "minecraft:leather",},],
},
],
    transitionalItem: {
      item: "minecraft:leather",
    },
  });

//
});
//