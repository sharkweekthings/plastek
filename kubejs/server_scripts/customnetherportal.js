////
// custom nether portal
//// renik
// Author: LadyLexxie


let PORTAL_HEIGHT = 3
let PORTAL_WIDTH = 3
let PORTAL_FRAME_BLOCK = 'kubejs:infused_nether_stone'

let validateAndCreate = (fireBlock) => {
  if (!fireBlock.down.equals(PORTAL_FRAME_BLOCK)) return false
  let corner, dir
  let found = false
  // find bottom corner along N/S
  for (let i = 1; i <= PORTAL_WIDTH; i++) {
    let b = fireBlock.offset(Direction.NORTH, i)
    if (b.id.equals('minecraft:air') && b.down.id.equals(PORTAL_FRAME_BLOCK)) continue
    else if (b.id.equals(PORTAL_FRAME_BLOCK)) {
      corner = b.down
      found = true
      dir = Direction.SOUTH
    }
  }
  if (!found) {
    // find bottom corner along W/E
    for (let i = 1; i <= PORTAL_WIDTH; i++) {
      let b = fireBlock.offset(Direction.EAST, i)
      if (b.id.equals('minecraft:air') && b.down.id.equals(PORTAL_FRAME_BLOCK)) continue
      else if (b.id.equals(PORTAL_FRAME_BLOCK)) {
        corner = b.down
        found = true
        dir = Direction.WEST
      }
    }
  }
  if (!found && dir == undefined) return false

  // validate portal frame and air blocks
  let portalBlocks = []
  for (let i = 0; i <= PORTAL_WIDTH + 1; i++) {
    for (let j = 0; j <= PORTAL_HEIGHT + 1; j++) {
      let b = corner.offset(dir, i).offset(Direction.UP, j)

      // air
      if (i >= 1 && i <= PORTAL_WIDTH && j >= 1 && j <= PORTAL_HEIGHT) {
        if (!b.id.equals('minecraft:air')) return false
        else { portalBlocks.push(b) }
      }

      // obsidian
      else if (
        (i == 0 && (j >= 1 && j <= PORTAL_HEIGHT)) ||
        (i == PORTAL_WIDTH + 1 && (j >= 1 && j <= PORTAL_HEIGHT)) ||
        (j == 0 && (i >= 1 && i <= PORTAL_WIDTH)) ||
        (j == PORTAL_HEIGHT + 1 && (i >= 1 && i <= PORTAL_WIDTH))
      ) { if (!b.id.equals(PORTAL_FRAME_BLOCK)) return false }
    }
  }

  // place portal blocks in the air blocks
  portalBlocks.forEach(b => {
    b.set('minecraft:nether_portal', { axis: dir == Direction.WEST ? 'x' : 'z' })
  })

  return true
}

// onEvent('block.place', e => {
BlockEvents.placed(e => {
  if (e.block.id.equals('minecraft:fire')) {
    PORTAL_HEIGHT = PORTAL_HEIGHT < 1 ? 1 : PORTAL_HEIGHT
    PORTAL_WIDTH = PORTAL_WIDTH < 1 ? 1 : PORTAL_WIDTH

    e.block.set('minecraft:air')

    let valid = validateAndCreate(e.block)

    if (!valid) e.block.set('minecraft:fire')
  }
})
