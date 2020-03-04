const homieDocument = function({ addBase, theme }) {
  addBase({
    'html, body': {
      height: theme('height.full')
    },
    html: {
      overflow: 'hidden'
    },
    body: {
      'overflow-y': 'scroll'
    }
  })
}

module.exports = homieDocument
