const url = require('path');
module.exports = {
    entry : url.join(__dirname,'main.ts'),
    resolve:{
        extensions : [' .ts','.tsx', '.js']
    },
    output:{
        filename : 'out.js',
        path : url.resolve(__dirname,'dist')
    },
    module: {
        rules : [
            {
                test : /\.tsx?$/,
                loader : 'ts-loader',
                exclude : /node_modules/
            }
        ]
    }
}