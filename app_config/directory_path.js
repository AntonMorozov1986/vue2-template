const { resolve } = require('path');
const { path: PROJECT_ROOT } = require('app-root-path');

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.WEBPACK_DIR = resolve(PROJECT_ROOT, 'scripts/webpack');
exports.NODE_MODULES_DIR = resolve(PROJECT_ROOT, 'node_modules');
