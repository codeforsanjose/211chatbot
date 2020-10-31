//CHECKSUM:8cfdfc4d2bbc13b821641f3644f4d59d546353410544bf8e3b533257d2a34b4f
const axios = require('axios')

/**
 * Update the session nluContexts for a specific intent
 * @hidden true
 * @param intentName The name of the intent to get contexts from
 */
const updateContexts = async intentName => {
  const botId = event.botId
  const axiosConfig = await bp.http.getAxiosConfigForBot(botId, { localUrl: true })
  const { data } = await axios.get(`/nlu/intents/${intentName}`, axiosConfig)

  const nluContexts = data.contexts.map(context => {
    return {
      context,
      ttl: 1000
    }
  })
  event.state.session.nluContexts = nluContexts
}

return updateContexts(args.intentName)
