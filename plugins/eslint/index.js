'use strict'
//const {options} = require('../../pluginMetadata')

// exports.metadata = () => ({
// 	config: options('standardjs', 'airbnb')
// })

module.exports.transform = (api, {config = 'standardjs'} = {}) => {
	api.npmPackage('eslint')
	if (config === 'standardjs') {
		api.npmPackage('eslint-plugin-standardjs')
	} else {
		api.npmPackage('eslint-plugin-airbnb')		
	}

	if (config === 'standardjs') {
		api.file('.eslintrc', '{"extends": "standardjs"}')
	}

	api.npmScript('test', 'eslint', 'eslint')
}