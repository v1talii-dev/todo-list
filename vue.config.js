const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_PUBLIC_PATH
      : '/',
  pwa: {
    name: 'Todo list',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
});
