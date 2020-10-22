'use strict';

window.addEventListener('load', function () {
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  /* global PhotoEditorSDK */
  var ReactUI = PhotoEditorSDK.UI.ReactUI;
  var PhotoRoll = ReactUI.PhotoRoll;

  var ContentProvider = function (_PhotoRoll$Provider) {
    _inherits(ContentProvider, _PhotoRoll$Provider);

    function ContentProvider() {
      var _ref;

      _classCallCheck(this, ContentProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ContentProvider.__proto__ || Object.getPrototypeOf(ContentProvider)).call.apply(_ref, [this].concat(args)));

      _this._data = null;
      _this._libraries = null;
      _this._librariesPhotosMap = {};
      return _this;
    }

    /**
     * Loads the data for this provider
     * @return {Promise}
     * @private
     */


    _createClass(ContentProvider, [{
      key: '_loadData',
      value: function _loadData() {
        var _this2 = this;

        if (this._data) return Promise.resolve(this._data);

        var loader = new ReactUI.JSONLoader('//static.photoeditorsdk.com/photorolls/example/metadata.json');
        return loader.load().then(function (data) {
          _this2._data = data;
          _this2._libraries = data.map(function (d) {
            var library = new PhotoRoll.Library(d);
            _this2._librariesPhotosMap[library.name] = d.photos.map(function (p) {
              return new PhotoRoll.Photo(library, p);
            });
            return library;
          });
        });
      }

      /**
       * Returns the libraries
       * @return {Promise}
       * @abstract
       */

    }, {
      key: 'getLibraries',
      value: function getLibraries() {
        var _this3 = this;

        return this._loadData().then(function () {
          return _this3._libraries;
        });
      }

      /**
       * Returns search suggestions shown on the overview and "no results" page
       * @return {Promise}
       * @abstract
       */

    }, {
      key: 'getSearchSuggestions',
      value: function getSearchSuggestions() {
        return Promise.resolve([new PhotoRoll.SearchSuggestion({
          query: 'Nature',
          name: 'Nature',
          coverImage: '//static.photoeditorsdk.com/unsplash/thumb/9njCyLeVrwY.jpg'
        }), new PhotoRoll.SearchSuggestion({
          query: 'People',
          name: 'People',
          coverImage: '//static.photoeditorsdk.com/unsplash/thumb/Q12JPPvF7eQ.jpg'
        }), new PhotoRoll.SearchSuggestion({
          query: 'Buildings',
          name: 'Buildings',
          coverImage: '//static.photoeditorsdk.com/unsplash/thumb/8OPIIY4Jzps.jpg'
        })]);
      }

      /**
       * Returns the photos for the given library
       * @param {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library} library
       * @return {Promise}
       * @abstract
       */

    }, {
      key: 'getPhotosForLibrary',
      value: function getPhotosForLibrary(library) {
        var _this4 = this;

        return this._loadData().then(function () {
          return _this4._librariesPhotosMap[library.name];
        });
      }

      /**
       * Searches for photos with the given query
       * @param {String} query
       * @return {Promise}
       */

    }, {
      key: 'searchPhotos',
      value: function searchPhotos(query) {
        var _this5 = this;

        if (query === null || query.length === 0) {
          return Promise.resolve([]);
        }

        /**
         * Default behavior: Call `getPhotos` and find all photos whose name
         * matches all query words.
         */
        var words = query.split(/\s+/);
        return this._loadData().then(function () {
          return _this5.getPhotosForLibrary(_this5._libraries[2]).then(function (photos) {
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
        });
      }
    }]);

    return ContentProvider;
  }(PhotoRoll.Provider);

  window.PhotoRollProvider = ContentProvider
})
