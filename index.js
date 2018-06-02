module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.module.rule('stylus').oneOf('normal')
      .use('stylus-resources-loader')
      .loader('stylus-resources-loader')
      .options({
        resources: projectOptions.pluginOptions['stylus-resources'].resources
      })
  })
}
