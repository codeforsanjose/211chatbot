//CHECKSUM:7d37985023dc53e219f8977263f52d38b987a7e8f089498c96b6839498e5a4fb
const base = require('./_base')

function render(data) {
  const events = []

  if (data.typing) {
    events.push({
      type: 'typing',
      value: data.typing
    })
  }

  return [
    ...events,
    {
      type: 'text',
      markdown: data.markdown,
      text: data.text,
      collectFeedback: data.collectFeedback
    }
  ]
}

function renderMessenger(data) {
  const events = []

  if (data.typing) {
    events.push({
      type: 'typing',
      value: data.typing
    })
  }

  return [
    ...events,
    {
      type: 'text',
      text: data.text
    }
  ]
}

function renderTeams(data) {
  const events = []

  if (data.typing) {
    events.push({
      type: 'typing'
    })
  }

  return [
    ...events,
    {
      type: 'message',
      text: data.text
    }
  ]
}

function renderElement(data, channel) {
  if (channel === 'messenger') {
    return renderMessenger(data)
  } else if (channel === 'teams') {
    return renderTeams(data)
  } else {
    return render(data)
  }
}

module.exports = {
  id: 'builtin_text',
  group: 'Built-in Messages',
  title: 'text',

  jsonSchema: {
    description: 'module.builtin.types.text.description',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'module.builtin.types.text.message'
      },
      variations: {
        type: 'array',
        title: 'module.builtin.types.text.alternatives',
        items: {
          type: 'string',
          default: ''
        }
      },
      markdown: {
        type: 'boolean',
        title: 'module.builtin.useMarkdown',
        default: true
      },
      ...base.typingIndicators
    }
  },

  uiSchema: {
    text: {
      'ui:field': 'i18n_field',
      $subtype: 'textarea'
    },
    variations: {
      'ui:options': {
        orderable: false
      }
    }
  },
  computePreviewText: formData => formData.text,

  renderElement: renderElement
}
