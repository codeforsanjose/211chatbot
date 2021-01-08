//CHECKSUM:ba46aecef81625952b56040628ec67a59f3cb6cc727543dabfbd3a331bd25920
if (event.state && event.state.session && event.state.session.nluContexts && event.state.session.nluContexts.length) {
  event.nlu = event.nlu || {}

  Object.assign(event.nlu, {
    includedContexts: event.state.session.nluContexts.map(x => x.context)
  })
}
// Catch the event
if (event.type === 'proactive-trigger') {
  const eventDestination = {
    channel: event.channel,
    target: event.target,
    botId: event.botId,
    threadId: event.threadId
  }

  // Skip event processing
  event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, true)

  // Make the bot respond with custom content instead
  if (eventDestination.botId == "211sonoma") {
	bp.cms.renderElement('builtin_text', { text: "Welcome to the 211 Sonoma bot! \nWhat would you like to know?", typing: true }, eventDestination).then(payloads => {
		bp.events.replyToEvent(event, payloads)
	})
  } else if (eventDestination.botId == "ctv") {
	bp.cms.renderElement('builtin_text', { text: "Welcome to CTV's virtual assistant! \nWhat can I help you with today?", typing: true }, eventDestination).then(payloads => {
    bp.events.replyToEvent(event, payloads)
	})
  }
}
