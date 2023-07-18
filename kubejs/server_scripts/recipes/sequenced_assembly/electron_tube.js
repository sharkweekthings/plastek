////
// Electron Tube Sequenced Assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'create:crafting/materials/electron_tube'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "create:polished_rose_quartz",},
     results: [{
      item: "create:electron_tube",
      count: 1,},],
      loops: 3,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "create:polished_rose_quartz",},[{ // incomplete item
      item: "industrialforegoing:plastic",},],], // item to deploy
     results: [{
      item: "create:polished_rose_quartz",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:polished_rose_quartz",},[{ // incomplete item
      item: "silentcompat:solarmetal_ingot",},],], // item to deploy
     results: [{
      item: "create:polished_rose_quartz",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:polished_rose_quartz",},[{ // incomplete item
      item: "pneumaticcraft:ingot_iron_compressed",},],], // item to deploy
     results: [{
      item: "create:polished_rose_quartz",},],
},
],
    transitionalItem: {
      item: "create:polished_rose_quartz",
    },
  });

//
})
//