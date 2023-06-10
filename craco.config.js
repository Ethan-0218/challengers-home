const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');

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
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
  bable: {
    plugins: ['@emotion'],
  },
};
