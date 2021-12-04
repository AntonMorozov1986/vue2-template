const conf = {
    mode: 'development',
    context: '/home/anton/00_projects/training_projects/vue2-test-app',
    node: {
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    output: {
        path: '/home/anton/00_projects/training_projects/vue2-test-app/dist',
        filename: 'assets/js/[name].js',
        publicPath: '',
        chunkFilename: 'assets/js/[name].js'
    },
    resolve: {
        alias: {
            '@': '/home/anton/00_projects/training_projects/vue2-test-app/src',
            vue$: 'vue/dist/vue.esm.js',
            '@api': '/home/anton/00_projects/training_projects/vue2-test-app/src/api',
            '@assets': '/home/anton/00_projects/training_projects/vue2-test-app/src/assets',
            '@components': '/home/anton/00_projects/training_projects/vue2-test-app/src/components',
            '@global': '/home/anton/00_projects/training_projects/vue2-test-app/src/global',
            '@plugins': '/home/anton/00_projects/training_projects/vue2-test-app/src/plugins',
            '@router': '/home/anton/00_projects/training_projects/vue2-test-app/src/router',
            '@store': '/home/anton/00_projects/training_projects/vue2-test-app/src/store',
            '@styles': '/home/anton/00_projects/training_projects/vue2-test-app/src/styles',
            '@views': '/home/anton/00_projects/training_projects/vue2-test-app/src/views',
            '@client': '/home/anton/00_projects/training_projects/vue2-test-app/src/client',
            '@admin': '/home/anton/00_projects/training_projects/vue2-test-app/src/admin'
        },
        extensions: [
            '.mjs',
            '.js',
            '.jsx',
            '.vue',
            '.json',
            '.wasm',
            '.js',
            '.vue',
            '.json'
        ],
        modules: [
            'node_modules',
            '/home/anton/00_projects/training_projects/vue2-test-app/node_modules',
            '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/@vue/cli-service/node_modules',
            'node_modules'
        ],
        plugins: [
            {
                apply: function nothing() {
                    // ¯\_(ツ)_/¯
                },
                makePlugin: function () { /* omitted long function */ },
                moduleLoader: function () { /* omitted long function */ },
                topLevelLoader: {
                    apply: function nothing() {
                        // ¯\_(ツ)_/¯
                    }
                },
                bind: function () { /* omitted long function */ },
                tsLoaderOptions: function () { /* omitted long function */ },
                forkTsCheckerOptions: function () { /* omitted long function */ }
            }
        ]
    },
    resolveLoader: {
        modules: [
            '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/@vue/cli-plugin-babel/node_modules',
            'node_modules',
            '/home/anton/00_projects/training_projects/vue2-test-app/node_modules',
            '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/@vue/cli-service/node_modules'
        ],
        plugins: [
            {
                apply: function nothing() {
                    // ¯\_(ツ)_/¯
                }
            }
        ]
    },
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [
            /* config.module.rule('vue') */
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/cache-loader/dist/cjs.js',
                        options: {
                            cacheDirectory: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/.cache/vue-loader',
                            cacheIdentifier: '416c8032'
                        }
                    },
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-loader/lib/index.js',
                        options: {
                            compilerOptions: {
                                whitespace: 'condense'
                            },
                            cacheDirectory: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/.cache/vue-loader',
                            cacheIdentifier: '416c8032'
                        }
                    }
                ]
            },
            /* config.module.rule('images') */
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/url-loader/dist/cjs.js',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/file-loader/dist/cjs.js',
                                options: {
                                    name: 'assets/img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            /* config.module.rule('svg') */
            {
                test: /\.(svg)(\?.*)?$/,
                use: [
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/file-loader/dist/cjs.js',
                        options: {
                            name: 'assets/img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            /* config.module.rule('media') */
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/url-loader/dist/cjs.js',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/file-loader/dist/cjs.js',
                                options: {
                                    name: 'assets/media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            /* config.module.rule('fonts') */
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/url-loader/dist/cjs.js',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/file-loader/dist/cjs.js',
                                options: {
                                    name: 'assets/fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            /* config.module.rule('pug') */
            {
                test: /\.pug$/,
                oneOf: [
                    /* config.module.rule('pug').rule('pug-vue') */
                    {
                        resourceQuery: /vue/,
                        use: [
                            {
                                loader: 'pug-plain-loader'
                            }
                        ]
                    },
                    /* config.module.rule('pug').rule('pug-template') */
                    {
                        use: [
                            {
                                loader: 'raw-loader'
                            },
                            {
                                loader: 'pug-plain-loader'
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('css') */
            {
                test: /\.css$/,
                oneOf: [
                    /* config.module.rule('css').rule('vue-modules') */
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    },
                    /* config.module.rule('css').rule('vue') */
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    },
                    /* config.module.rule('css').rule('normal-modules') */
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    },
                    /* config.module.rule('css').rule('normal') */
                    {
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('postcss') */
            {
                test: /\.p(ost)?css$/,
                oneOf: [
                    /* config.module.rule('postcss').rule('vue-modules') */
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    },
                    /* config.module.rule('postcss').rule('vue') */
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    },
                    /* config.module.rule('postcss').rule('normal-modules') */
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    },
                    /* config.module.rule('postcss').rule('normal') */
                    {
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('scss') */
            {
                test: /\.scss$/,
                oneOf: [
                    /* config.module.rule('scss').rule('vue-modules') */
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    /* config.module.rule('scss').rule('vue') */
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    /* config.module.rule('scss').rule('normal-modules') */
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    /* config.module.rule('scss').rule('normal') */
                    {
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('sass') */
            {
                test: /\.sass$/,
                oneOf: [
                    /* config.module.rule('sass').rule('vue-modules') */
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    },
                                    sassOptions: {
                                        indentedSyntax: true
                                    }
                                }
                            }
                        ]
                    },
                    /* config.module.rule('sass').rule('vue') */
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    },
                                    sassOptions: {
                                        indentedSyntax: true
                                    }
                                }
                            }
                        ]
                    },
                    /* config.module.rule('sass').rule('normal-modules') */
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    },
                                    sassOptions: {
                                        indentedSyntax: true
                                    }
                                }
                            }
                        ]
                    },
                    /* config.module.rule('sass').rule('normal') */
                    {
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/sass-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    implementation: {
                                        render: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        renderSync: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        },
                                        info: 'dart-sass\t1.42.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.14.2\t(Dart Compiler)\t[Dart]',
                                        types: {
                                            Boolean: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Color: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            List: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Map: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            Null: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            },
                                            Number: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            String: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                            },
                                            // Error: function Error() { [native code] }
                                        },
                                        NULL: {
                                            toString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                            }
                                        },
                                        TRUE: {
                                            value: true
                                        },
                                        FALSE: {
                                            value: false
                                        },
                                        cli_pkg_main_0_: function () {
                                            return _call(f, Array.prototype.slice.apply(arguments));
                                        }
                                    },
                                    sassOptions: {
                                        indentedSyntax: true
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('less') */
            {
                test: /\.less$/,
                oneOf: [
                    /* config.module.rule('less').rule('vue-modules') */
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    /* config.module.rule('less').rule('vue') */
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    /* config.module.rule('less').rule('normal-modules') */
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    /* config.module.rule('less').rule('normal') */
                    {
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('stylus') */
            {
                test: /\.styl(us)?$/,
                oneOf: [
                    /* config.module.rule('stylus').rule('vue-modules') */
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
                                }
                            }
                        ]
                    },
                    /* config.module.rule('stylus').rule('vue') */
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
                                }
                            }
                        ]
                    },
                    /* config.module.rule('stylus').rule('normal-modules') */
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: {
                                        localIdentName: '[name]_[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
                                }
                            }
                        ]
                    },
                    /* config.module.rule('stylus').rule('normal') */
                    {
                        use: [
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/vue-style-loader/index.js',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/css-loader/dist/cjs.js',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/postcss-loader/src/index.js',
                                options: {
                                    sourceMap: false,
                                    plugins: [
                                        function () { /* omitted long function */ }
                                    ]
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: false,
                                    preferPathResolver: 'webpack'
                                }
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('js') */
            {
                test: /\.m?jsx?$/,
                exclude: [
                    function () { /* omitted long function */ }
                ],
                use: [
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/cache-loader/dist/cjs.js',
                        options: {
                            cacheDirectory: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/.cache/babel-loader',
                            cacheIdentifier: '3da02421'
                        }
                    },
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/babel-loader/lib/index.js'
                    }
                ]
            },
            /* config.module.rule('eslint') */
            {
                enforce: 'pre',
                test: /\.(vue|[jt]sx?)$/,
                exclude: [
                    /node_modules/,
                    '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/@vue/cli-service/lib'
                ],
                use: [
                    {
                        loader: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/eslint-loader/index.js',
                        options: {
                            extensions: [
                                '.js',
                                '.jsx',
                                '.vue'
                            ],
                            cache: true,
                            cacheIdentifier: '56f0021c',
                            emitWarning: true,
                            emitError: false,
                            eslintPath: '/home/anton/00_projects/training_projects/vue2-test-app/node_modules/eslint',
                            formatter: undefined
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            {
                options: {
                    test: /\.m?js(\?.*)?$/i,
                    chunkFilter: () => true,
                    warningsFilter: () => true,
                    extractComments: false,
                    sourceMap: false,
                    cache: true,
                    cacheKeys: defaultCacheKeys => defaultCacheKeys,
                    parallel: true,
                    include: undefined,
                    exclude: undefined,
                    minify: undefined,
                    terserOptions: {
                        output: {
                            comments: /^\**!|@preserve|@license|@cc_on/i
                        },
                        compress: {
                            arrows: false,
                            collapse_vars: false,
                            comparisons: false,
                            computed_props: false,
                            hoist_funs: false,
                            hoist_props: false,
                            hoist_vars: false,
                            inline: false,
                            loops: false,
                            negate_iife: false,
                            properties: false,
                            reduce_funcs: false,
                            reduce_vars: false,
                            switches: false,
                            toplevel: false,
                            typeofs: false,
                            booleans: true,
                            if_return: true,
                            sequences: true,
                            unused: true,
                            conditionals: true,
                            dead_code: true,
                            evaluate: true
                        },
                        mangle: {
                            safari10: true
                        }
                    }
                }
            }
        ]
    },
    plugins: [
        /* config.plugin('vue-loader') */
        new VueLoaderPlugin(),
        /* config.plugin('define') */
        new DefinePlugin(
            {
                'process.env': {
                    NODE_ENV: '"development"',
                    BASE_URL: '""'
                }
            }
        ),
        /* config.plugin('case-sensitive-paths') */
        new CaseSensitivePathsPlugin(),
        /* config.plugin('friendly-errors') */
        new FriendlyErrorsWebpackPlugin(
            {
                additionalTransformers: [
                    function () { /* omitted long function */ }
                ],
                additionalFormatters: [
                    function () { /* omitted long function */ }
                ]
            }
        ),
        /* config.plugin('html') */
        new HtmlWebpackPlugin(
            {
                title: 'vue2-test-app',
                templateParameters: function () { /* omitted long function */ },
                template: '/home/anton/00_projects/training_projects/vue2-test-app/public/index.html'
            }
        ),
        /* config.plugin('preload') */
        new PreloadPlugin(
            {
                rel: 'preload',
                include: 'initial',
                fileBlacklist: [
                    /\.map$/,
                    /hot-update\.js$/
                ]
            }
        ),
        /* config.plugin('prefetch') */
        new PreloadPlugin(
            {
                rel: 'prefetch',
                include: 'asyncChunks'
            }
        ),
        /* config.plugin('copy') */
        new CopyPlugin(
            [
                {
                    from: '/home/anton/00_projects/training_projects/vue2-test-app/public',
                    to: '/home/anton/00_projects/training_projects/vue2-test-app/dist',
                    toType: 'dir',
                    ignore: [
                        '.DS_Store',
                        {
                            glob: 'index.html',
                            matchBase: false
                        }
                    ]
                }
            ]
        ),
        {
            definitions: {
                IS_DEVELOPMENT: true,
                IS_PRODUCTION: false
            }
        },
        {
            definitions: {
                Vue: [
                    'vue',
                    'default'
                ],
                mapGetters: [
                    'vuex',
                    'mapGetters'
                ],
                mapActions: [
                    'vuex',
                    'mapActions'
                ],
                mapMutations: [
                    'vuex',
                    'mapMutations'
                ],
                mapState: [
                    'vuex',
                    'mapState'
                ]
            }
        },
        {
            options: {
                context: null,
                hashFunction: 'md4',
                hashDigest: 'base64',
                hashDigestLength: 4
            }
        },
        {
            options: {
                template: 'public/index.html',
                templateParameters: function () { /* omitted long function */ },
                filename: 'index.html',
                hash: false,
                inject: true,
                compile: true,
                favicon: false,
                minify: false,
                cache: true,
                showErrors: true,
                chunks: 'all',
                excludeChunks: [],
                chunksSortMode: 'auto',
                meta: {},
                title: 'Webpack App',
                xhtml: false
            }
        },
        {
            resourceRegExp: /moment[/\\]locale$/,
            newContentResource: undefined,
            newContentRecursive: undefined,
            newContentRegExp: /ru|en/
        }
    ],
    entry: {
        app: './src/main.js'
    },
    devServer: {
        compress: true,
        hot: true,
        host: 'v2-test.local',
        https: false
    }
}
