//CHECKSUM:f22e246ae45edfee2cca1aa572ffcb0f0cc291bc548d5e9d3a0672bba9597a34
const _ = require('lodash')

const channels = ['api', 'web']
if (event.payload.quick_replies && channels.includes(event.channel)) {
  event.payload = {
    type: 'custom',
    module: 'channel-web',
    component: 'QuickReplies',
    quick_replies: event.payload.quick_replies,
    wrapped: {
      type: 'text',
      ..._.omit(event.payload, 'quick_replies')
    }
  }
  event.type = 'custom'
}
