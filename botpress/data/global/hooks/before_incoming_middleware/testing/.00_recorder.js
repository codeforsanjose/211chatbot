//CHECKSUM:a9148384a656e1be1bdc6fadc844cb2a70983e25ed1e80895291c0567255551f
const axios = require('axios')
const _ = require('lodash')

async function processIncoming() {
  try {
    const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId, { localUrl: true })
    const { data } = await axios.post('/mod/testing/incomingEvent', event, axiosConfig)

    if (data) {
      event.state = _.merge(event.state, data)
    }
  } catch (err) {
    console.log('Error processing', err.message)
  }
}

return processIncoming()
