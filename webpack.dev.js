const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: "./index.js",
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dev-build"),
		publicPath: "/",
		clean: true,
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
};
