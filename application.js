/* global PhotoEditorSDK, Image */
window.onload = function () {
  var editor
  function run (preferredRenderer) {
    'use strict';

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var ReactUI = PhotoEditorSDK.UI.ReactUI;
    var _PhotoEditorSDK = PhotoEditorSDK;
    var Promise = _PhotoEditorSDK.Promise;

    var UnsplashProvider = function (_ReactUI$PhotoRoll$Pr) {
      _inherits(UnsplashProvider, _ReactUI$PhotoRoll$Pr);

      function UnsplashProvider() {
        _classCallCheck(this, UnsplashProvider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _ReactUI$PhotoRoll$Pr.call.apply(_ReactUI$PhotoRoll$Pr, [this].concat(args)));

        _this._url = 'http://static.photoeditorsdk.com/unsplash.json';
        return _this;
      }

      /**
       * Returns the libraries
       * @return {Promise}
       * @abstract
       */


      UnsplashProvider.prototype.getLibraries = function getLibraries() {
        return Promise.resolve([new ReactUI.PhotoRoll.Library({
          name: 'Photos',
          coverImage: 'http://static.photoeditorsdk.com/unsplash/thumb/ZsB2MbzSHjI.jpg'
        })]);
      };

      /**
       * Returns search suggestions shown on the overview and "no results" page
       * @return {Promise}
       * @abstract
       */


      UnsplashProvider.prototype.getSearchSuggestions = function getSearchSuggestions() {
        return Promise.resolve([new ReactUI.PhotoRoll.SearchSuggestion({
          query: 'Nature',
          coverImage: 'http://static.photoeditorsdk.com/unsplash/thumb/Z_br8TOcCpE.jpg'
        })]);
      };

      /**
       * Searches for photos with the given query
       * @param {String} query
       * @return {Promise}
       */


      UnsplashProvider.prototype.searchPhotos = function searchPhotos(query) {
        if (query === null || query.length === 0) {
          return Promise.resolve([]);
        }

        /**
         * Default behavior: Call `getPhotos` and find all photos whose name
         * matches all query words.
         */
        var words = query.split(/\s+/);
        return this.getPhotosForLibrary(null).then(function (photos) {
          return photos.filter(function (photo) {
            for (var i = 0; i < words.length; i++) {
              var word = words[i];
              var regexp = new RegExp(word, 'i');
              if (!regexp.test(photo.title)) {
                return false;
              }
            }

            return true;
          });
        });
      };

      /**
       * Returns the photos for the given library
       * @param {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library} library
       * @return {Promise}
       * @abstract
       */


      UnsplashProvider.prototype.getPhotosForLibrary = function getPhotosForLibrary(library) {
        var _this2 = this;

        if (this._photos) return Promise.resolve(this._photos);

        var loader = new ReactUI.JSONLoader(this._url);
        return loader.load().then(this._parseData.bind(this, library)).then(function (photos) {
          _this2._photos = photos;
          return photos;
        });
      };

      /**
       * Parses the data returned from the XHR
       * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library} library
       * @param  {Object} data
       * @return {Promise}
       * @private
       */


      UnsplashProvider.prototype._parseData = function _parseData(library, data) {
        return data.map(function (p) {
          return new ReactUI.PhotoRoll.Photo(library, p);
        });
      };

      return UnsplashProvider;
    }(ReactUI.PhotoRoll.Provider);

    editor = new ReactUI({
      container: document.querySelector('#container'),
      logLevel: 'info',
      editor: {
        // image: myImage,
        preferredRenderer: preferredRenderer || 'webgl'
      },
      photoRoll: {
        provider: UnsplashProvider
      },
      assets: {
        baseUrl: 'assets',
        resolver: function (path) {
          return path
        }
      },
      responsive: true,
      language: 'en'
    })
  }

  /**
   * Load initial image, initialize UI
   */
  var myImage = new Image()
  myImage.addEventListener('load', function () {
    run()
  })
  myImage.src = 'test.jpg'

  /**
   * Handle links
   */
  var webglLink = document.body.querySelector('#webgl')
  var canvasLink = document.body.querySelector('#canvas')
  webglLink.addEventListener('click', function (e) {
    e.preventDefault()
    editor.dispose()
    canvasLink.classList.remove('active')
    webglLink.classList.add('active')
    run('webgl')
  })

  canvasLink.addEventListener('click', function (e) {
    e.preventDefault()
    editor.dispose()
    webglLink.classList.remove('active')
    canvasLink.classList.add('active')
    run('canvas')
  })
}
