const webpack = require('webpack');
const path = require('path');

const siteTitle = 'Игры на карте';

const assetsPath = path.join(__dirname, 'assets');
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/games-on-map/',
    },
} : {};

module.exports = {
    ...routerBase,
    build: {
        extend(config /* , ctx */) {
            config.resolve.alias['/assets'] = assetsPath;
            if (process.server) {
                // This instructs Webpack to include `vue2-google-maps`'s Vue files
                // for server-side rendering
                config.externals.splice(0, 0, (context, request, callback) => {
                    if (/^vue2-google-maps($|\/)/.test(request)) {
                        callback(null, false);
                    } else {
                        callback();
                    }
                });
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                _: 'lodash',
            }),
        ],
    },
    head: {
        title: siteTitle,
        meta: [
            { charset: 'utf-8' },
            {
                property: 'og:title',
                content: siteTitle,
            },
        ],
    },
    plugins: [
        { src: '@/nuxt_plugins/ElementUI.js' },
        { src: '@/nuxt_plugins/VueJsModal.js' },
        { src: '@/nuxt_plugins/GoogleMaps.js' },
    ],
};
