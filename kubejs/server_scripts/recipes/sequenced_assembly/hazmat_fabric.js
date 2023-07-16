////
// hazmat fabric seqauenced assembly
//// renik


//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "immersiveengineering:hemp_fabric",},
     results: [{
      item: "thermal:hazmat_fabric",
      count: 1,},],
      loops: 2,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "immersiveengineering:hemp_fabric",},[{ // incomplete item
      item: "minecraft:leather",},],], // item to deploy
     results: [{
      item: "immersiveengineering:hemp_fabric",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "immersiveengineering:hemp_fabric",},[{ // incomplete item
      item: "totemic:buffalo_hide",},],], // item to deploy
     results: [{
      item: "immersiveengineering:hemp_fabric",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "immersiveengineering:hemp_fabric",},[{ // incomplete item
      item: "minecraft:red_dye",},],], // item to deploy
     results: [{
      item: "immersiveengineering:hemp_fabric",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "immersiveengineering:hemp_fabric",},{
      fluid: "minecraft:water",
      amount: 500,},],
     results: [{
      item: "immersiveengineering:hemp_fabric",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "immersiveengineering:hemp_fabric",},],
     results: [{
      item: "immersiveengineering:hemp_fabric",},],
},
],
    transitionalItem: {
      item: "immersiveengineering:hemp_fabric",
    },
  });

//
})
//