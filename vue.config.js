'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/m' : '/m',
  devServer: {
    port: 9527,
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        changeOrigin: true // needed for virtual hosted sites
      }
    }
  },
  configureWebpack: {
    entry: './src/main.js',
    resolve: {
      extensions: ['.vue', '.ts', '.tsx', '.js', '.json']
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
