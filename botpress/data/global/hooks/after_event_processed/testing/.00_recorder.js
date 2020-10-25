//CHECKSUM:549f8ae724244d4d0af5759a31302755ad59ad681d2658a5e1cb1902a6ba52c7
const axios = require('axios')

async function execute() {
  try {
    const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId, { localUrl: true })
    await axios.post('/mod/testing/processedEvent', event, axiosConfig)
  } catch (err) {
    console.log('Error processing', err.message)
  }
}

return execute()
