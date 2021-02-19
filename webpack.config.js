const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: ['ignore-console-log-loader'],
				exclude: '/node_modules/'
			},
		]
	},
	resolveLoader: {
		// 告诉 webpack 自定义 loader 的目录
		modules: ['node_modules', path.resolve(__dirname, 'loaders')]
	},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};