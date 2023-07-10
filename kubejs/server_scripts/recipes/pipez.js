////
// pipez 
//// renik

//
ServerEvents.recipes(event => {
//

  //REMOVE
  event.remove({id: 'pipez:item_pipe'})
  event.remove({id: 'pipez:fluid_pipe'})
  event.remove({id: 'pipez:energy_pipe'})
  event.remove({id: 'pipez:gas_pipe'})
  event.remove({id: 'pipez:universal_pipe'})
  event.remove({id: 'pipez:basic_upgrade'})

//
})
//


//
ServerEvents.recipes(event => {
//

  //ADD

// Item Pipe
  event.shaped('4x pipez:item_pipe',
    [' 2 ','111',' 2 '], {
    1: 'prettypipes:pipe',
    2: 'minecraft:chest'})

// Fluid Pipe
  event.shaped('4x pipez:fluid_pipe',
    [' 2 ','111',' 2 '], {
    1: 'prettypipes:pipe',
    2: 'minecraft:bucket'})

// Energy Pipe
  event.shaped('4x pipez:energy_pipe',
    [' 2 ','111',' 2 '], {
    1: 'prettypipes:pipe',
    2: '#energeticsheep:wool_energetic'})

// Gas Pipe
  event.shaped('4x pipez:gas_pipe',
    [' 2 ','111',' 2 '], {
    1: 'prettypipes:pipe',
    2: 'mekanism:basic_chemical_tank'})

// Basic Upgrade Pipe
  event.shaped('pipez:basic_upgrade',
    ['222','212','222'], {
    1: 'prettypipes:blank_module',
    2: 'pneumaticcraft:plastic'})

// Universal Pipe
  event.shaped('8x pipez:universal_pipe',
    ['234','111','234'], {
    1: 'prettypipes:pipe',
    2: 'pipez:item_pipe',
    3: 'pipez:fluid_pipe',
    4: 'pipez:energy_pipe'})

//    
})
//