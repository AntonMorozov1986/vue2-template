import dotenv from 'dotenv';
import { getWebpackCompiler } from './compiler';

// require('dotenv').config();
// const chalk = require('chalk');

dotenv.config();

console.log('START BUILD');

const webpackCompiler = getWebpackCompiler();

webpackCompiler.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    const info = stats.toString({
        hash: true,
        colors: true,
        env: true,
        logging: 'info',
        modules: false,
    });

    console.log(info);

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
});
