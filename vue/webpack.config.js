var path=require("path");

module.exports={
    entry:path.resolve("src/index.js"),
    output:{
        path:path.resolve("src/build"),
        filename:"bundle.js"
    },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                }
            ]
        }

}