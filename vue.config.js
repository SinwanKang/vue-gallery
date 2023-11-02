module.exports = {
  devServer: {
    proxy: {
      // api 로 접속시 backend 포트로 우회 접속
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathRewrite: {
          '&/': ''
        }
      }
    }
  }
}
