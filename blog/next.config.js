const withLess = require('@zeit/next-less');
const WithCss = require('@zeit/next-css');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {};
}

module.exports = withLess(
    WithCss({
        lessLoaderOptions: {
            modifyVars: {
                'primary-color': '#1DA57A'
            },
            javascriptEnabled: true
        },
            webpack(config, options) {
                config.module.rules.push({
                    test:  [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                esModule: false, // 这里设置为false
                                limit: 100000,
                                fallback: 'file-loader',
                                name: '[path][name].[ext]',
                                publicPath: `${config.assetPrefix || '/_next/static/images/'}`,
                                outputPath: `${options.isServer ? "../" : ""}static/images/`,
                            }
                        }
                    ]
                })

                return config
            }
    }
    )
);

