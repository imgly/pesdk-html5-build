if (process.env.NODE_ENV === 'production') {
  module.exports = require('./js/PhotoEditorSDK.UI.ReactUI.min')
} else {
  module.exports = require('./js/PhotoEditorSDK.UI.ReactUI')
}
