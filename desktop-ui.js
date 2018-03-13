const sourceModule = './js/PhotoEditorSDK.UI.DesktopUI'

function moduleIsAvailable (path) {
  try {
    require.resolve(path)
    return true
  } catch (e) {
    return false
  }
}

if (process.env.NODE_ENV === 'production') {
  // try loading minified variant  first on production builds
  module.exports = moduleIsAvailable(sourceModule + '.min') ? require(sourceModule + '.min') : require(sourceModule)
} else {
  // try loading non-minified variant first on production builds
  module.exports = moduleIsAvailable(sourceModule) ? require(sourceModule) : require(sourceModule + '.min')
}
