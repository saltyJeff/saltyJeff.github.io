const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
	devtool: "source-map",
	entry: "./src/index.tsx",
	output: {
	  filename: "bundle.js"
	},
	resolve: {
	  	// Add `.ts` and `.tsx` as a resolvable extension.
	  	extensions: [".ts", ".tsx", ".js"]
	},
	module: {
	 	rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: 'ts-loader' },
			{
				test: /\.css$/,
				use: [
					"style-loader",
				  	{
						loader: "css-loader",
						options: {
					  		modules: true,
					  		sourceMap: true,
					  		importLoaders: 1,
					  		localIdentName: "[name]--[local]--[hash:base64:8]"
						}
				  }
				]
			}
	  	]
	},
	plugins: [
		new CheckerPlugin()
	],
	devServer: {
		contentBase: '.'
	}
};