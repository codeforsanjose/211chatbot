//CHECKSUM:dc90fa00ea68567bd2697122ac420f59d9f8f48f047671512dfeb2d21c864ec0
/**
 * Get number of conversations
 * @title Get number of conversations
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} output - The state variable to output the count to
 */
const getNumberOfConversations = async output => {
  const key = bp.kvs.getUserStorageKey(event.target, 'numberOfConversations')
  const value = await bp.kvs.forBot(event.botId).getStorageWithExpiry(key)

  temp[output] = value
}

return getNumberOfConversations(args.output)
