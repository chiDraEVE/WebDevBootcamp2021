const currentTask = process.env.npm_lifecycle_event
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const WebpackManifestPlugin = require("webpack-manifest-plugin")

const config = {
	entry: "./index.js",
	output: {
		filename: "main.[hash].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [new HtmlWebpackPlugin({ template: "./app/index.html" })],
	mode: "development",
	devtool: "eval-cheap-source-map",
	devServer: {
		before: function(app, server) {
			server._watch(["./**/*.html"])
		},
		port: 3000,
		contentBase: path.resolve(__dirname),
		hot: true,
		public: "http://localhost:3000",
		publicPath: "http://localhost:3000/",
		disableHostCheck: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},
	module: {
		rules: [
			{
				test: /\.(sc|sa|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], "@babel/preset-react"]
					}
				}
			}
		]
	}
}

if (currentTask == "build") {
	config.mode = "production"
	config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
	config.plugins.push(new MiniCssExtractPlugin({ filename: "main.[hash].css" }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config
