////
// zpm housing unit sequenced assembly
//// renik


//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "kubejs:repaired_zpm_housing_unit",},
     results: [{
      item: "kubejs:depleted_zpm_housing_unit",
      count: 1,},],
      loops: 1,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:damaged_zpm_housing_unit",},[{ // incomplete item
      item: "pneumaticcraft:capacitor",},],], // item to deploy
     results: [{
      item: "kubejs:damaged_zpm_housing_unit",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:damaged_zpm_housing_unit",},[{ // incomplete item
      item: "pneumaticcraft:transistor",},],], // item to deploy
     results: [{
      item: "kubejs:damaged_zpm_housing_unit",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "kubejs:damaged_zpm_housing_unit",},[{ // incomplete item
      item: "kubejs:zpm",},],], // item to deploy
     results: [{
      item: "kubejs:damaged_zpm_housing_unit",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "kubejs:damaged_zpm_housing_unit",},{
      fluid: "pneumaticcraft:plastic",
      amount: 1000,},],
     results: [{
      item: "kubejs:damaged_zpm_housing_unit",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "kubejs:damaged_zpm_housing_unit",},],
     results: [{
      item: "kubejs:damaged_zpm_housing_unit",},],
},
],
    transitionalItem: {
      item: "kubejs:damaged_zpm_housing_unit",
    },
  });

//
})
//