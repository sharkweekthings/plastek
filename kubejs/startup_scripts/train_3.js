////
//Grabs the event, and allows it to be used in other scripts.
//// renik
// Author: aaronhowser1

ForgeEvents.onEvent(
	'net.minecraftforge.event.entity.EntityMountEvent',
	(event) => {
		if (global['net.minecraftforge.event.entity.EntityMountEvent'])
			global['net.minecraftforge.event.entity.EntityMountEvent'](event)
	}
)