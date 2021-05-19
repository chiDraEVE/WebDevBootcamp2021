const path = require('path')

module.exports = {
	entry: "./index.js",
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname)
	},
	devServer: {
		before: function(app, server) {
			server._watch(["./**/*.html"])
		},
		contentBase: path.join(__dirname),
		hot: true,
		public: "http://localhost:3000",
		publicPath: "http://localhost:3000/",
		disableHostCheck: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	}
}