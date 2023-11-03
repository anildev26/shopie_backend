// const path = require("path");

// module.exports = {
// 	mode: "production",
// 	entry: {
// 		main: "./index.js",
// 	},
// 	output: {
// 		filename: "[name].js",
// 		path: path.join(__dirname, "prod-build"),
// 		publicPath: "/",
// 		clean: true,
// 	},
// 	target: "node",
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: "babel-loader",
// 			},
// 		],
// 	},

// 	plugins: [
// 		// Ignore 'kerberos' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^kerberos$/,
// 		}),

// 		// Ignore '@mongodb-js/zstd' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^@mongodb-js\/zstd$/,
// 		}),

// 		// Ignore '@aws-sdk/credential-providers' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^@aws-sdk\/credential-providers$/,
// 		}),

// 		// Ignore 'snappy' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^snappy$/,
// 		}),

// 		// Ignore 'aws4' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^aws4$/,
// 		}),

// 		// Ignore 'mongodb-client-encryption' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^mongodb-client-encryption$/,
// 		}),

// 		// Ignore 'express' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^express$/,
// 		}),

// 		// Ignore 'crypto' dependency
// 		new webpack.IgnorePlugin({
// 			resourceRegExp: /^crypto$/,
// 		}),
// 	],
// };

const path = require("path");
const webpack = require("webpack"); // Add this line

module.exports = {
	mode: "production",
	entry: {
		main: "./index.js",
	},
	stats: {
		errorDetails: true,
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "prod-build"),
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

	plugins: [
		new webpack.IgnorePlugin({
			resourceRegExp: /^kerberos$/,
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^@mongodb-js\/zstd$/,
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^@aws-sdk\/credential-providers$/,
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^snappy$/,
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^aws4$/,
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^mongodb-client-encryption$/,
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^express$/,
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^crypto$/,
		}),
	],
};
