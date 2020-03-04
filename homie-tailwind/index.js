const {
  colors,
  screens,
  fontWeight,
  fontSize,
  spacing,
  height,
  minHeight,
  minWidth,
  zIndex
} = require('./base/index.js')

const {
  textShadowUtility,
  buttonComponents,
  disabledVariants,
  homieTypography,
  homieForms,
  homieDocument
} = require('./plugins/index.js')

module.exports = {
  // => Base Styles
  colors,
  screens,
  fontWeight,
  // => Extended Base Styles
  fontSize,
  spacing,
  height,
  minHeight,
  minWidth,
  zIndex,
  // => Base plugins
  homieTypography,
  homieForms,
  homieDocument,
  // => Utilities
  textShadowUtility,
  // => Components
  buttonComponents,
  // => Variants
  disabledVariants
}
