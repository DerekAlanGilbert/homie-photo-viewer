const {
	// => Base Override Styles
	colors,
	screens,
	fontWeight,
	// =>  Extended Base Styles
	fontSize,
	spacing,
	height,
	minHeight,
	minWidth,
	zIndex,
	boxShadow,
	// Plugins
	homieDocument,
	homieTypography,
	homieForms,
	textShadowUtility,
	buttonComponents,
	disabledVariants
} = require('./homie-tailwind/index.js')

module.exports = {
	theme: {
		colors,
		screens,
		fontWeight,
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			fontSize,
			spacing,
			height,
			minHeight,
			minWidth,
			zIndex,
			boxShadow
		}
	},
	variants: {
		display: ['responsive', 'hover', 'group-hover', 'first', 'last'],
		borderWidth: ['first, last', 'responsive, hover, focus'],
		boxShadow: ['responsive', 'hover', 'focus']
	},
	plugins: [
		homieForms,
		homieDocument,
		homieTypography,
		textShadowUtility,
		buttonComponents,
		disabledVariants
	]
}
