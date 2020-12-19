const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  chainWebpack: config => {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Comfortaa' },
          { family: 'Montserrat' }
        ]
      })
    ]
  }
}
