/* global PhotoEditorSDK, Image */
window.onload = function () {
  /**
   * Load initial image, initialize UI
   */
  var myImage = new Image()
  myImage.addEventListener('load', function () {
    var ReactUI = PhotoEditorSDK.UI.ReactUI
    window.editor = new ReactUI({
      container: document.querySelector('#container'),
      license: '', // Please add your license here (in string format)
      editor: {
        image: myImage
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
}
