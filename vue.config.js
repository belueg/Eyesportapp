module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/sass/_main.scss"; '
      }
    }
  }
}
