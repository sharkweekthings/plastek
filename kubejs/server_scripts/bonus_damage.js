////
// bonus damage for certain weapons
//// renik
// script author: Footerman / KubeJS Discord (https://discord.com/channels/303440391124942858/1174460002560397424/1174464855810506752)

EntityEvents.hurt('warden', e =>{
    let entity = e.entity
    let player = e.source.player
    if (player.mainHandItem.id == 'deeperdarker:warden_sword') {
        entity.attack(100)
    }
})