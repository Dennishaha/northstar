module.exports = {
  // 选项...
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT'
    }
  },
  devServer: {
    port: 8090,
    proxy: {
      '/version': {
        target: 'https://localhost:8080',
        changeOrigin: true,
        ws: true,
        secure: false
      },
      '/northstar': {
        target: 'https://localhost:8080',
        changeOrigin: true,
        ws: true,
        secure: false
      },
      '/redirect*': {
        target: 'https://localhost:8080',
        changeOrigin: true,
        ws: true,
        secure: false
      }
    }
  }
}