MoreJSEvents.villagerTrades((event) =>{
    event.removeModdedTrades();
    event.removeVanillaTrades(['ae2:fluix_researcher'], [1,5])
});