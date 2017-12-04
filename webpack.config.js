const webpack = require('webpack');

let config = {
	entry: './index.js',
	output: {
		filename: './build/main.js'
	},
	module: {
		rules: [{
			test: /\.js/,
			exclude: /node_modules/,
			loader: 'babel-loader'

		}]
	}
}

module.exports = config;