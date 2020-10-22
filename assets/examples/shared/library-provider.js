/* global PhotoEditorSDK */
const metadata = window.addEventListener('load', function () {
  var DesktopUI = PhotoEditorSDK.UI.DesktopUI
  function LibraryProvider () {
    DesktopUI.Library.Provider.apply(this, arguments)

    this._data = null
  }

  LibraryProvider.prototype = Object.create(DesktopUI.Library.Provider.prototype)
  LibraryProvider.prototype.constructor = DesktopUI.Library.Provider

  LibraryProvider.prototype._loadData = function () {
    if (this._data) { return Promise.resolve(this._data) }

    return this._loadJSON('//static.photoeditorsdk.com/libraries/unsplash/metadata.json')
      .then(function (data) {
        this._data = data
        return data
      })
  }

  LibraryProvider.prototype.getCategories = function () {
    return this._loadData()
      .then(function (data) {
        return data.categories.map(function (categoryData) {
          return new DesktopUI.Library.Category({
            name: categoryData.name,
            coverImage: categoryData.coverImage
          })
        })
      })
  }

  LibraryProvider.prototype.searchImages = function (query) {
    return this._loadData()
      .then(function (data) {
        return data.images.filter(function (image) {
          var words = query.split(/\s+/)
          for (var i = 0; i < words.length; i++) {
            var word = words[i]
            var regexp = new RegExp(word, 'i')
            if (!regexp.test(image.title)) {
              return false
            }
          }

          return true
        }).map(function (imageData) {
          return new DesktopUI.Library.Image(imageData)
        })
      })
  }

  window.LibraryProvider = LibraryProvider
})
