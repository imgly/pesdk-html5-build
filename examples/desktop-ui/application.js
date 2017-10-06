/* global PhotoEditorSDK, Image */
window.addEventListener('load', function () {
  /**
   * Load initial image, initialize UI
   */
  var myImage = new Image()
  myImage.addEventListener('load', function () {
    var DesktopUI = PhotoEditorSDK.UI.DesktopUI
    window.editor = window.editor = new DesktopUI({
      container: document.querySelector('#container'),
      license: '', // Please add your license here (in string format)
      editor: {
        image: myImage,
        preferredRenderer: 'webgl'
      },
      assets: {
        baseUrl: '../../photoeditorsdk/assets',
        resolver: function (path) {
          return path
        }
      },
      responsive: true
    })
  })
  myImage.src = '../example.jpg'
})
