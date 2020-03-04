const homieTypography = function({ addBase, theme }) {
  addBase({
    '*': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
    },
    html: {
      color: theme('textColor.darkGrey.medium'),
      fontFamily: 'Usual, sans-serif',
      fontStyle: 'normal',
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.appBase'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
      '@media (min-width: 520px)': {
        fontSize: theme('fontSize.appMd')
      },
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.appLg')
      },
      '@media (min-width: 1280px)': {
        fontSize: theme('fontSize.appXl')
      }
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      color: theme('textColor.darkGrey.default'),
      marginBottom: theme('spacing.3')
    },
    'a, button': {
      cursor: 'pointer'
    },
    p: {
      fontSize: theme('fontSize.base'),
      letterSpacing: theme('letterSpacing.normal'),
      lineHeight: theme('lineHeight.relaxed'),
      marginBottom: theme('spacing.3')
    },
    h1: {
      fontSize: theme('fontSize.4xl')
    },
    h2: {
      fontSize: theme('fontSize.3xl')
    },
    h3: {
      fontSize: theme('fontSize.2xl')
    },
    h4: {
      fontSize: theme('fontSize.xl')
    },
    h5: {
      fontSize: theme('fontSize.lg')
    },
    h6: {
      fontSize: theme('fontSize.base')
    }
  })
}

module.exports = homieTypography
