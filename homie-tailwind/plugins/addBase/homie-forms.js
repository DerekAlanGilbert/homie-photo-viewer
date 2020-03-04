// Form base styles

const homieForms = function({ addBase, theme }) {
  addBase({
    label: {
      fontSize: theme('fontSize.base'),
      fontWeight: theme('fontWeight.bold'),
      fontColor: theme('color.darkGrey.medium'),
      display: 'flex',
      alignSelf: 'start',
      '&.label-error': {
        color: theme('textColor.red.default')
      }
    },
    'input:focus, select:focus, textarea:focus': {
      border: '2px solid',
      borderColor: theme('textColor.lightGrey.default'),
      backgroundColor: 'fefefe',
      boxShadow: '0 0 5px #999',
      outline: '0'
    },
    'input, select, textarea': {
      display: 'block',
      fontSize: theme('fontSize.base'),
      paddingLeft: theme('spacing.2'),
      paddingRight: theme('spacing.2'),
      backgroundColor: theme('backgroundColor.white'),
      height: theme('spacing.9'),
      marginTop: theme('spacing.2'),
      width: theme('width.full'),
      borderWidth: '2px',
      borderColor: theme('textColor.lightGrey.medium'),
      borderRadius: theme('borderRadius.default'),
      boxShadow: 'inset 0 1px 2px rgba(10,10,10,0.1)',
      appearance: 'none',
      '&::placeholder': {
        color: theme('textColor.lightGrey.default')
      },
      '&.input-error': {
        borderColor: theme('textColor.red.default'),
        color: theme('textColor.red.default'),
        '&::placeholder': {
          color: theme('textColor.red.default')
        },
        '&:focus': {
          borderColor: theme('textColor.red.default'),
          '&::placeholder': {
            color: theme('textColor.lightGrey.default')
          }
        }
      }
    },
    // SELECT INPUT
    select: {
      backgroundImage:
        'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABQCAYAAABmkUeGAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAWtJREFUaIHtzjtKA1EUh/HvjAFBcEviBqwUFNxGJo1gUAsRo0IaN+AqAhY2Plq3YZcm3RyLm0I0j7kzd7wp/l95H+f8QCmllFJKKaWUUkoppf5m5c3N7k7RewQ/wmw7N2hl7l+OX1+W5YMNb++eME5zm2Jy/KQAP8oNic3cDgtgmhsSnfm0cPw6tyMq9xlVNd56mUw+9l/fehh7uU1rc59VxsFlWb7b/MCGo/srjLPMtOXN0Vf9/jOA/bjYXPwvNPyEhwebh1+Aht/w8HBz8EvQsAgePuTHr0DDMnj4mA+/Bg2r4GHA/+NroGEdPAz6P3xNNNSBh4Hd4yPQUBceBneHj0RDDDwsSI9vgIZYeFiUDt8QDU3gYWF7fAs0NIWHxc3xLdHQBh4A8fgEaGgLD5D6+ERoSAGHeviEaEgFh9X4xGhICYfF+A7QkBo+73w0Oja3Q8ynVNX4YjD47GKPUkoppZRSSimllFKb3zfT5QQy9SFmsAAAAABJRU5ErkJggg==")',
      backgroundOrigin: 'content-box',
      backgroundPosition: 'right -.85rem center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '8px 16px',
      paddingRight: '1.275rem'
    },
    // CHECKBOX INPUT
    'input[type="checkbox"]': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      '-webkit-clip-path': 'inset(50%)',
      'clip-path': 'inset(50%)',
      border: '0',
      transition: 'all .3s ease-in-out'
    },
    // Input + Label
    'input + label': {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-start',
      alignSelf: 'start',
      marginRight: '0',
      whiteSpace: 'normal',
      position: 'relative',
      userSelect: 'none',
      marginBottom: theme('spacing.2'),
      '&:before': {
        backgroundColor: theme('textColor.white'),
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        border: '2px solid',
        borderColor: theme('textColor.lightGrey.default'),
        borderRadius: theme('spacing.1'),
        content: '""',
        display: 'inline-block',
        float: 'left',
        height: theme('spacing.4'),
        width: theme('spacing.4'),
        minHeight: theme('spacing.4'),
        minWidth: theme('spacing.4'),
        marginRight: theme('spacing.1'),
        marginTop: '.15rem'
      },
      span: {
        display: 'block',
        textAlign: 'left',
        float: 'none',
        lineHeight: '1.3',
        margin: '0',
        paddingLeft: '0.1rem',
        overflow: 'hidden',
        width: 'auto',
        fontWeight: 'normal'
      }
    },
    // Checked State Input
    'input:checked + label:before': {
      backgroundColor: theme('textColor.teal.default'),
      borderColor: theme('textColor.teal.hover'),
      transition: 'all .3s ease-in-out'
    },
    // Checked State Label
    'input[type="checkbox"]:checked + label:before': {
      backgroundImage:
        'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTYgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+CiAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgPGRlZnM+PC9kZWZzPgogIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZD0iTTE1LjcwNjY3MzQsMi40MjgxMjE1MiBMMTMuNjA1NDA3NiwwLjU4MDgzMDM4IEMxMy41NDAzOTQ5LDAuNTIzOTE4OTg3IDEzLjQ1NTEyOTEsMC40OTQ1NTE4OTkgMTMuMzcwNDcwOSwwLjUwMDgzMDM4IEMxMy4yODQxOTI0LDAuNTA2NTAxMjY2IDEzLjIwNDE5MjQsMC41NDU5OTQ5MzcgMTMuMTQ4MDkxMSwwLjYxMDE5NzQ2OCBMNS41MjU0MDc1OSw5LjI4NjQ1MDYzIEwyLjgxNDkyNjU4LDUuNjk4ODA1MDYgQzIuNzYyODc1OTUsNS42MzA3NTQ0MyAyLjY4NjExNjQ2LDUuNTg1NTg5ODcgMi42MDE0NTgyMyw1LjU3MzY0MDUxIEMyLjUxNTk4OTg3LDUuNTYxMDgzNTQgMi40Mjk3MTEzOSw1LjU4Mzk2OTYyIDIuMzYwODUwNjMsNS42MzYyMjI3OCBMMC4xMjkxNTQ0Myw3LjMyMjA5NjIgQy0wLjAxNDAzNTQ0Myw3LjQzMDQ1MDYzIC0wLjA0MjU5MjQwNTEsNy42MzM3OTI0MSAwLjA2NTc2MjAyNTMsNy43NzYxNzIxNSBMNS4wODQwOTExNCwxNC40MTg2MDI1IEM1LjE0MjYyMjc4LDE0LjQ5NjE3MjIgNS4yMzM1NTk0OSwxNC41NDM1NjQ2IDUuMzMwNzc0NjgsMTQuNTQ3NjE1MiBMNS4zNDI3MjQwNSwxNC41NDc2MTUyIEM1LjQzNjA5MTE0LDE0LjU0NzYxNTIgNS41MjQ1OTc0NywxNC41MDczMTE0IDUuNTg2MzY5NjIsMTQuNDM2ODMwNCBMMTUuNzM1ODM4LDIuODg1NDM3OTcgQzE1Ljg1NDUyMTUsMi43NTA5NTY5NiAxNS44NDExNTQ0LDIuNTQ1OTk0OTQgMTUuNzA2NjczNCwyLjQyODEyMTUyIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkVGRUZFIj48L3BhdGg+CiAgPC9nPgo8L3N2Zz4K")',
      backgroundSize: '85%'
    },
    // End CHecked Input Styles
    // RADIO INPUT
    'input[type="radio"]': {
      height: theme('spacing.3'),
      width: theme('spacing.3'),
      borderRadius: '100%',
      marginTop: theme('spacing.0'),
      borderWidth: '1px',
      borderColor: theme('textColor.darkGrey-light'),
      transition: '0.2s all linear',
      appearance: 'none'
    },
    'input[type="radio"]:checked': {
      border: '5px solid',
      borderColor: theme('textColor.teal.default')
    },

    // FORM ERROR MESSAGES
    '.error-msg': {
      marginTop: theme('spacing.1'),
      color: theme('textColor.red.default'),
      fontSize: theme('fontSize.xs'),
      display: 'flex',
      justifyContent: 'flex-end'
    }
  })
}

module.exports = homieForms
