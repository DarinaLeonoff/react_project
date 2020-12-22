const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: { //входная точка
        app: './idex.js' //название файла, который будет создан: исходник
    },
    context: path.resolve(__dirname, 'src'), // источник 
    output: { //выходные данные
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'app.js'
    }
};