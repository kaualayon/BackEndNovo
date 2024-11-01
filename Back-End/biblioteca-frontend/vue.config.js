const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel-loader')
      .loader('babel-loader')
      .options({

      });
  }
};

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-vue' // Se você estiver usando Vue
  ]
};
