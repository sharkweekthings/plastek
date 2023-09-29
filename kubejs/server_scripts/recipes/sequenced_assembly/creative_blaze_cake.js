////
// light engineering block sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'immersiveengineering:crafting/light_engineering'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "create:blaze_burner",},
     results: [{
      item: "create:creative_blaze_cake",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "create:blaze_burner",},[{ // incomplete item
      item: "pneumaticcraft:creative_compressed_iron_block",},],], // item to deploy
     results: [{
      item: "create:blaze_burner",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:blaze_burner",},[{ // incomplete item
      item: "pneumaticcraft:wheat_flour",},],], // item to deploy
     results: [{
      item: "create:blaze_burner",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "create:blaze_burner",},[{ // incomplete item
      item: "mysticalagradditions:creative_essence",},],], // item to deploy
     results: [{
      item: "create:blaze_burner",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "create:blaze_burner",},{
      fluid: "sliceanddice:fertilizer",
      amount: 500,},],
     results: [{
      item: "create:blaze_burner",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "create:blaze_burner",},],
     results: [{
      item: "create:blaze_burner",},],
},
],
    transitionalItem: {
      item: "create:blaze_burner",
    },
  });

//
})
//