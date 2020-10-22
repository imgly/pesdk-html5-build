if (process.env.NODE_ENV === 'production') {
  module.exports = require('./js/PhotoEditorSDK.min')
} else {
  module.exports = require('./js/PhotoEditorSDK')
}
