//CHECKSUM:f90a2889f7a3904e57a73988c1edc7291c377249e1f562cfffd9d05e2479c2fe
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
      type: 'custom',
      module: 'extensions',
      component: 'Dropdown',
      message: data.message,
      buttonText: data.buttonText,
      displayInKeyboard: data.displayInKeyboard,
      options: data.options,
      allowCreation: data.allowCreation,
      allowMultiple: data.allowMultiple,
      width: data.width,
      collectFeedback: data.collectFeedback
    }
  ]
}

function renderSlack(data) {
  return [
    {
      type: 'actions',
      elements: [
        {
          type: 'static_select',
          action_id: 'option_selected',
          placeholder: {
            type: 'plain_text',
            text: data.message
          },
          options: data.options.map(q => ({
            text: {
              type: 'plain_text',
              text: q.label
            },
            value: q.value
          }))
        }
      ]
    }
  ]
}

function renderElement(data, channel) {
  if (channel === 'web' || channel === 'api') {
    return render(data)
  } else if (channel === 'slack') {
    return renderSlack(data)
  } else if (channel === 'smooch') {
    return [data]
  }

  return []
}

module.exports = {
  id: 'dropdown',
  group: 'Extensions',
  title: 'module.extensions.types.dropdown.title',

  jsonSchema: {
    title: 'module.extensions.types.dropdown.desc',
    type: 'object',
    required: ['message'],
    properties: {
      message: {
        type: 'string',
        title: 'Message'
      },
      buttonText: {
        type: 'string',
        title: 'module.extensions.types.dropdown.buttonText',
        description: 'module.extensions.types.dropdown.buttonDesc',
        default: ''
      },
      options: {
        type: 'array',
        title: 'module.extensions.types.dropdown.optionsList',
        items: {
          type: 'object',
          required: ['label'],
          properties: {
            label: {
              description: 'module.extensions.types.dropdown.itemLabel',
              type: 'string',
              title: 'Label'
            },
            value: {
              description: 'module.extensions.types.dropdown.itemValue',
              type: 'string',
              title: 'Value'
            }
          }
        }
      },
      width: {
        type: 'number',
        title: 'module.extensions.types.dropdown.widthTitle',
        description: 'module.extensions.types.dropdown.widthDesc',
        default: 200
      },
      displayInKeyboard: {
        type: 'boolean',
        title: 'module.extensions.types.dropdown.asKeyboardTitle',
        description: 'module.extensions.types.dropdown.asKeyboardDesc',
        default: true
      },
      allowCreation: {
        type: 'boolean',
        title: 'module.extensions.types.dropdown.allowCreate'
      },
      allowMultiple: {
        type: 'boolean',
        title: 'module.extensions.types.dropdown.allowMultiple'
      },
      ...base.typingIndicators
    }
  },
  uiSchema: {
    message: {
      'ui:field': 'i18n_field'
    },
    buttonText: {
      'ui:field': 'i18n_field'
    },
    options: {
      'ui:field': 'i18n_array'
    }
  },
  computePreviewText: formData => formData.message && 'Dropdown: ' + formData.message,
  renderElement
}
