////
// elevator sequenced assembly
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'elevatorid:elevator_white'})
  event.remove({id: 'elevatorid:elevator_orange'})
  event.remove({id: 'elevatorid:elevator_magenta'})
  event.remove({id: 'elevatorid:elevator_light_blue'})
  event.remove({id: 'elevatorid:elevator_yellow'})
  event.remove({id: 'elevatorid:elevator_lime'})
  event.remove({id: 'elevatorid:elevator_pink'})
  event.remove({id: 'elevatorid:elevator_gray'})
  event.remove({id: 'elevatorid:elevator_light_gray'})
  event.remove({id: 'elevatorid:elevator_cyan'})
  event.remove({id: 'elevatorid:elevator_purple'})
  event.remove({id: 'elevatorid:elevator_blue'})
  event.remove({id: 'elevatorid:elevator_brown'})
  event.remove({id: 'elevatorid:elevator_green'})
  event.remove({id: 'elevatorid:elevator_red'})
  event.remove({id: 'elevatorid:elevator_black'})

//
})
//

//
ServerEvents.recipes((event) => {
//

  event.custom({
    type: "create:sequenced_assembly",
     ingredient: {
      item: "minecraft:white_wool",},
     results: [{
      item: "elevatorid:elevator_white",
      count: 1,},],
      loops: 3,
     sequence: [
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:white_wool",},[{ // incomplete item
      item: "energeticsheep:white_energetic_wool",},],], // item to deploy
     results: [{
      item: "minecraft:white_wool",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:white_wool",},[{ // incomplete item
      item: "pneumaticcraft:plastic",},],], // item to deploy
     results: [{
      item: "minecraft:white_wool",},],
},
{
    type: "create:deploying",
     ingredients: [{
      item: "minecraft:white_wool",},[{ // incomplete item
      item: "energeticsheep:white_energetic_wool",},],], // item to deploy
     results: [{
      item: "minecraft:white_wool",},],
},
{
    type: "create:filling",
     ingredients: [{
      item: "minecraft:white_wool",},{
      fluid: "minecraft:water",
      amount: 400,},],
     results: [{
      item: "minecraft:white_wool",},],
},
{
    type: "create:pressing",
     ingredients: [{
      item: "minecraft:white_wool",},],
     results: [{
      item: "minecraft:white_wool",},],
},
],
    transitionalItem: {
      item: "minecraft:white_wool",
    },
  });

//
})
//