const textShadowUtility = function({ addUtilities }) {
  const newUtilities = {
    '.text-shadow': {
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)'
    },
    '.text-shadow-md': {
      textShadow: '0 4px 7px rgba(0, 0, 0, 0.5)'
    },
    '.text-shadow-lg': {
      textShadow: '0 6px 9px rgba(0, 0, 0, 0.5)'
    },
    '.text-shadow-none': {
      textShadow: 'none'
    }
  }
  addUtilities(newUtilities, ['responsive', 'hover'])
}

module.exports = textShadowUtility
