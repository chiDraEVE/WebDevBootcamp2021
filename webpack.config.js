const path = require('path')

module.exports = {
	entry: "./index.js",
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname)
	},
	watch: true,
	devServer: {
		before: function(app, server) {
			server._watch(["./**/*.html"])
		},
		port: 3000,
		contentBase: path.join(__dirname),
		hot: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	}
}