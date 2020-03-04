const disabledVariant = function({ addVariant, e }) {
  addVariant('disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`disabled${separator}${className}`)}:disabled`
    })
  })
}

module.exports = disabledVariant
