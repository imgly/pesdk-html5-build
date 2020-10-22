if (process.env.NODE_ENV === 'production') {
  module.exports = require('./js/PhotoEditorSDK.UI.DesktopUI.min')
} else {
  module.exports = require('./js/PhotoEditorSDK.UI.DesktopUI')
}
