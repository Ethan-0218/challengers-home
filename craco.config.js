const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      return {
        ...config,
        entry: {
          main: [
            env === 'development' &&
              require.resolve('react-dev-utils/webpackHotDevClient'),
            paths.appIndexJs,
          ].filter(Boolean),
          content: './src/chromeServices/content.ts',
          background: './src/chromeServices/background.ts',
        },
        output: {
          ...config.output,
          filename: 'static/js/[name].js',
        },
        optimization: {
          ...config.optimization,
          runtimeChunk: false,
        },
      };
    },
    plugins: {
      add: [
        new NodePolyfillPlugin({
          excludeAliases: ['console'],
        }),
      ],
    },
  },
  bable: {
    plugins: ['@emotion'],
  },
};
