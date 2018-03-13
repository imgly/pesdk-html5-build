const sourceModule = './js/PhotoEditorSDK'

function moduleIsAvailable (path) {
  try {
    require.resolve(path)
    return true
  } catch (e) {
    return false
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports = moduleIsAvailable(sourceModule + '.min') ? require(sourceModule + '.min') : require(sourceModule)
} else {
  module.exports = moduleIsAvailable(sourceModule) ? require(sourceModule) : require(sourceModule + '.min')
}
