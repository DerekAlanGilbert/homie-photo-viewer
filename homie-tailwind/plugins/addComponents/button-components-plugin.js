const buttonComponents = function({ addComponents, theme }) {
  const buttons = {
    '.btn': {
      borderRadius: theme('borderRadius.default'),
      fontWeight: theme('fontWeight.bold'),
      fontSize: theme('fontSize.sm'),
      paddingTop: '.20rem',
      paddingBottom: '.20rem',
      paddingLeft: theme('spacing.5'),
      paddingRight: theme('spacing.5'),
      marginTop: theme('spacing.4'),
      borderBottom: '2.5px inset rgba(0,0,0,.08)',
      width: 'fit-content',
      '&:active, &:focus': {
        appearance: 'none',
        outline: 'none'
      },
      '&.disabled': {
        cursor: 'not-allowed',
        opacity: theme('opacity.50')
      },
      '&.hollow': {
        backgroundColor: theme('backgroundColor.transparent'),
        border: '2px dashed'
      }
    },
    '.btn-teal': {
      backgroundColor: theme('backgroundColor.teal.default'),
      color: theme('backgroundColor.white'),
      '&:hover': {
        backgroundColor: theme('backgroundColor.teal.hover')
      },
      '&.hollow': {
        borderColor: theme('backgroundColor.teal.default'),
        color: theme('backgroundColor.teal.default'),
        '&:hover': {
          backgroundColor: theme('backgroundColor.transparent'),
          borderStyle: 'solid'
        }
      }
    },
    '.btn-brown': {
      backgroundColor: theme('backgroundColor.brown.default'),
      color: theme('backgroundColor.white'),
      '&:hover': {
        backgroundColor: theme('backgroundColor.brown.hover')
      },
      '&.hollow': {
        borderColor: theme('backgroundColor.brown.default'),
        color: theme('backgroundColor.brown.default'),
        '&:hover': {
          backgroundColor: theme('backgroundColor.transparent'),
          borderStyle: 'solid'
        }
      }
    },
    '.btn-grey': {
      backgroundColor: theme('backgroundColor.lightGrey.medium'),
      color: theme('backgroundColor.darkGrey.default'),
      '&:hover': {
        backgroundColor: theme('backgroundColor.lightGrey.default')
      },
      '&.hollow': {
        borderColor: theme('backgroundColor.lightGrey.default'),
        color: theme('backgroundColor.lightGrey.default'),
        '&:hover': {
          backgroundColor: theme('backgroundColor.transparent'),
          borderStyle: 'solid'
        }
      }
    },
    '.btn-red': {
      backgroundColor: theme('backgroundColor.red.default'),
      color: theme('backgroundColor.white'),
      '&:hover': {
        backgroundColor: theme('backgroundColor.red.hover')
      },
      '&.hollow': {
        borderColor: theme('backgroundColor.red.default'),
        color: theme('backgroundColor.red.default'),
        '&:hover': {
          backgroundColor: theme('backgroundColor.transparent'),
          borderStyle: 'solid'
        }
      }
    },
    '.btn-pinterest': {
      fontSize: theme('fontSize.xs'),
      backgroundColor: '#bd081c',
      color: theme('backgroundColor.white'),
      paddingLeft: theme('spacing.3'),
      paddingRight: theme('spacing.3'),
      '&:hover': {
        backgroundColor: '#970616'
      }
    },
    '.btn-facebook': {
      fontSize: theme('fontSize.xs'),
      backgroundColor: '#3b5998',
      color: theme('backgroundColor.white'),
      paddingLeft: theme('spacing.3'),
      paddingRight: theme('spacing.3'),
      '&:hover': {
        backgroundColor: '#2f477a'
      }
    },
    '.btn-twitter': {
      fontSize: theme('fontSize.xs'),
      backgroundColor: '#1da1f2',
      color: theme('backgroundColor.white'),
      paddingLeft: theme('spacing.3'),
      paddingRight: theme('spacing.3'),
      '&:hover': {
        backgroundColor: '#0c84cd'
      }
    }
  }
  addComponents(buttons)
}

module.exports = buttonComponents
