require('dotenv').config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withSourceMaps = require('@zeit/next-source-maps');

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const withOffline = require('next-offline')

function foldLeft(...values) {
  return values.reduceRight((p, c) => c(p));
}

function withTSConfig(value) {
  return {
    ...value,
    webpack(config) {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      if (value.webpack) {
        return value.webpack(config);
      }

      return config;
    },
    // target: "serverless",
  };
}

const initialConfig = {
  distDir: 'build',
  env: {
    /* insert env variables here */
  },
  generateinDevMode: true,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          cacheableResponse: {
            statuses: [0, 200],
          },
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 30,
          },
        }
      },
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          cacheableResponse: {
            statuses: [0, 200],
          },
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources',
          cacheableResponse: {
            statuses: [0, 200],
          },
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          cacheableResponse: {
            statuses: [0, 200],
          },
          expiration: {
            maxEntries: 200
          }
        }
      },
    ],
  },
};

module.exports = foldLeft(
  withBundleAnalyzer,
  withOffline,
  withSourceMaps,
  withTSConfig,
  initialConfig,
);
