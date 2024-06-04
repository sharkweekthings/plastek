////
// exploit fixes
//// renik

BlockEvents.placed(event => {
    // List of fluid block IDs to disable
    const disabledFluids = [
        'mob_grinding_utils:fluid_xp'
    ];

    // Check if the block being placed is in the list of disabled fluids
    if (disabledFluids.includes(event.block.id)) {
        // Cancel the event to prevent the fluid from being placed
        event.cancel();
    }
});

ItemEvents.rightClicked(event => {
    // Check if the item used is the specific bucket to disable
    if (event.item.id === 'mob_grinding_utils:fluid_xp_bucket') {
        // Cancel the event to prevent the fluid from being placed
        event.cancel();
    }
});

ItemEvents.rightClicked(event => {
    // Check if the item used is the specific fluid reservoir with the desired fluid
    if (event.item.id === 'thermal:fluid_reservoir' && event.item.nbt && event.item.nbt.Fluid && event.item.nbt.Fluid.FluidName === 'mob_grinding_utils:fluid_xp') {
        // Cancel the event to prevent the fluid from being placed
        event.cancel();
    }
});