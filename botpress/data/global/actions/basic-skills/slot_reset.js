//CHECKSUM:cfef726981038b6bed27a81083f863bf995b7d5b636a075f22bd4900042afc3b
/**
 * Resets the slot from the user's session, allowing a new answer to be stored.
 * @title Reset Slot
 * @category Slot
 * @author Botpress, Inc.
 * @param slotName The name of the slot
 */
const resetSlot = async slotName => {
  event.state.session.slots[slotName] = undefined
}

return resetSlot(args.slotName)
