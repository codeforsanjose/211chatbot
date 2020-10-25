//CHECKSUM:17d41a3298dc9a6016ad2f433669df89466158c6eb7b2afc35f1a54e8c1a1a05
/**
 *
 * @title Sends serialized data to parent page on channel web
 * @category Channel Web
 * @author Botpress, Inc.
 * @param {string} data - Serialized payload you want to send
 */
const sendPostbackToParent = async data => {
  if (event.channel != 'web') {
    return
  }

  const postbackEvent = bp.IO.Event({
    type: 'data',
    channel: 'web',
    direction: 'outgoing',
    target: event.target,
    botId: event.botId,
    payload: {
      data
    }
  })

  await bp.events.sendEvent(postbackEvent)
}

return sendPostbackToParent(args.data)
