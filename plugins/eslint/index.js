'use strict'
const {options} = require('../../pluginMetadata')

exports.metadata = () => ({
	config: options('standardjs', 'airbnb')
})

exports.transform = (api, {config = 'standardjs'}) => {
	api.package('eslint')
	if (config === 'standardjs') {
		api.package('eslint-plugin-standardjs')
	} else {
		api.package('eslint-plugin-airbnb')		
	}

	if (config === 'standardjs') {
		api.file('.eslintrc', '{"extends": "standardjs"}')
	}

	api.npmScript('test', 'eslint', 'eslint')
}