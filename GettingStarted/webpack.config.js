const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname,  'dist'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebapckPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}