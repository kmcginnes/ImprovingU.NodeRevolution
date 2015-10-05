var path = require('path');

modules.export = {
    entry: path.resolve(__dirname, '../src/client/scripts/client.js'),

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
