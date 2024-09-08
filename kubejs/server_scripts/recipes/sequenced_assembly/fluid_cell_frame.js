////
// fluid cell frame sequenced assembly
//// renik

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "immersiveengineering:treated_wood_packaged",},
     results: [{
      item: "thermal:fluid_cell_frame",
      count: 1,},],
      loops: 1,
     sequence: [
{
      type: "create:cutting",
     ingredients: [{
      item: "immersiveengineering:treated_wood_packaged",},],
      results: [{
      item: "immersiveengineering:treated_wood_packaged",},], // incomplete item
},
{
    type: "create:deploying",
     ingredients: [{
      item: "immersiveengineering:treated_wood_packaged",},[{ // incomplete item
      item: "immersiveengineering:sheetmetal_steel",},],], // item to deploy
     results: [{
      item: "immersiveengineering:treated_wood_packaged",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "immersiveengineering:treated_wood_packaged",},],
     results: [{
      item: "immersiveengineering:treated_wood_packaged",},],
},
],
    transitionalItem: {
      item: "immersiveengineering:treated_wood_packaged",
    },
  });

//
});
//