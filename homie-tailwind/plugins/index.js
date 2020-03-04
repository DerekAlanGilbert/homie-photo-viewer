// => ADD BASE PLUGINS
const homieTypography = require('./addBase/homie-typography')
const homieForms = require('./addBase/homie-forms')
const homieDocument = require('./addBase/homie-document')

// => ADD UTILITIES PLUGINS
const textShadowUtility = require('./addUtilities/text-shadow-utility')

// => ADD COMPONENTS PLUGINS
const buttonComponents = require('./addComponents/button-components-plugin')

// => ADD VARIANTS PLUGIN
const disabledVariants = require('./addVariants/disabled-variant-plugin')

module.exports = {
  // => PLUGINS
  homieTypography,
  homieForms,
  homieDocument,
  // => UTILITIES
  textShadowUtility,
  // => COMPONENTS
  buttonComponents,
  //  => VARIANTS
  disabledVariants
}
