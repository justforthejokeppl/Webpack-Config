const dirPath = require('path')

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = (webpackManifest, mode) => {
  const isProd = mode === 'production'

  const {
    projectInfo: {
      logo: { path },
    },
  } = webpackManifest
  return isProd
    ? new FaviconsWebpackPlugin({
        logo: dirPath.resolve(path),
        persistentCache: false,
        prefix: 'images/public/',
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      })
    : () => null
}
