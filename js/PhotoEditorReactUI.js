(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("photoeditorsdk"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["photoeditorsdk", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["PhotoEditorReactUI"] = factory(require("photoeditorsdk"), require("react"), require("react-dom"));
	else
		root["PhotoEditorReactUI"] = factory(root["PhotoEditorSDK"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_263__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 264);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageFormat = exports.ColorMatrix = exports.now = exports.Log = exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.SDK = exports.EXIF = exports.ReactDOM = exports.UniformType = exports.OptionType = exports.RenderType = exports.Base64 = exports.Color = exports.SharedState = exports.Constants = exports.EventEmitter = exports.SDKUtils = exports.Vector2 = exports.ReactBEM = exports.BaseComponent = exports.Classnames = exports.BEM = exports.React = exports.Utils = exports.Promise = undefined;

var _photoeditorsdk = __webpack_require__(36);

var _photoeditorsdk2 = _interopRequireDefault(_photoeditorsdk);

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(263);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(77);

var _classnames2 = _interopRequireDefault(_classnames);

var _bem = __webpack_require__(67);

var _bem2 = _interopRequireDefault(_bem);

var _reactBem = __webpack_require__(71);

var _reactBem2 = _interopRequireDefault(_reactBem);

var _baseComponent = __webpack_require__(97);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _utils = __webpack_require__(201);

var _utils2 = _interopRequireDefault(_utils);

var _constants = __webpack_require__(176);

var _constants2 = _interopRequireDefault(_constants);

var _sharedState = __webpack_require__(200);

var _sharedState2 = _interopRequireDefault(_sharedState);

var _animationFrame = __webpack_require__(203);

var _log = __webpack_require__(74);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Base64 = _photoeditorsdk2.default.Base64;
var Color = _photoeditorsdk2.default.Color;
var ColorMatrix = _photoeditorsdk2.default.Math.ColorMatrix;
var EventEmitter = _photoeditorsdk2.default.EventEmitter;
var EXIF = _photoeditorsdk2.default.EXIF;
var OptionType = _photoeditorsdk2.default.OptionType;
var Promise = _photoeditorsdk2.default.Promise;
var SDKUtils = _photoeditorsdk2.default.Utils;
var RenderType = _photoeditorsdk2.default.RenderType;
var ImageFormat = _photoeditorsdk2.default.ImageFormat;
var SDK = _photoeditorsdk2.default;
var UniformType = _photoeditorsdk2.default.UniformType;
var Vector2 = _photoeditorsdk2.default.Math.Vector2;

var now = typeof window !== 'undefined' && window.performance && window.performance.now ? window.performance.now.bind(window.performance) : __webpack_require__(89);

exports.Promise = Promise;
exports.Utils = _utils2.default;
exports.React = _react2.default;
exports.BEM = _bem2.default;
exports.Classnames = _classnames2.default;
exports.BaseComponent = _baseComponent2.default;
exports.ReactBEM = _reactBem2.default;
exports.Vector2 = Vector2;
exports.SDKUtils = SDKUtils;
exports.EventEmitter = EventEmitter;
exports.Constants = _constants2.default;
exports.SharedState = _sharedState2.default;
exports.Color = Color;
exports.Base64 = Base64;
exports.RenderType = RenderType;
exports.OptionType = OptionType;
exports.UniformType = UniformType;
exports.ReactDOM = _reactDom2.default;
exports.EXIF = EXIF;
exports.SDK = SDK;
exports.requestAnimationFrame = _animationFrame.requestAnimationFrame;
exports.cancelAnimationFrame = _animationFrame.cancelAnimationFrame;
exports.Log = _log2.default;
exports.now = now;
exports.ColorMatrix = ColorMatrix;
exports.ImageFormat = ImageFormat;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(209);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(208);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(32);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _typeof2 = __webpack_require__(32);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(75);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _backButtonComponent = __webpack_require__(96);

var _backButtonComponent2 = _interopRequireDefault(_backButtonComponent);

var _doneButtonComponent = __webpack_require__(150);

var _doneButtonComponent2 = _interopRequireDefault(_doneButtonComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlsComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ControlsComponent, _BaseComponent);

  function ControlsComponent() {
    (0, _classCallCheck3.default)(this, ControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._hasBackButton = true;
    _this._hasDoneButton = false;
    _this._backButtonClicked = false;

    _this._bindAll('_onBackClick', '_onDoneClick');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  ControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    this._backButtonClicked = true;
    this.props.onSwitchControls('back');
  };

  /**
   * Gets called when the user clicks the done button
   * @param {Event} e
   * @private
   */


  ControlsComponent.prototype._onDoneClick = function _onDoneClick(e) {
    this.props.onSwitchControls('home');
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  ControlsComponent.prototype.renderControls = function renderControls() {
    return null;
  };

  /**
   * Renders the overlay controls of this component
   * @return {ReactBEM.Element}
   */


  ControlsComponent.prototype.renderOverlayControls = function renderOverlayControls() {
    return null;
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ControlsComponent.prototype.renderWithBEM = function renderWithBEM() {
    var forcedControl = this.props.options && this.props.options.forcedControl;
    var backButton = this._hasBackButton && !forcedControl ? _globals.ReactBEM.createElement(_backButtonComponent2.default, { onClick: this._onBackClick }) : null;

    var doneButton = this._hasDoneButton || forcedControl ? _globals.ReactBEM.createElement(_doneButtonComponent2.default, { onClick: this._onDoneClick }) : null;

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:controls', ref: 'root' },
      this.renderOverlayControls(),
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:table' },
        backButton,
        this.renderControls(),
        doneButton
      )
    );
  };

  return ControlsComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = ControlsComponent;


ControlsComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

/**
 * The base class for all controls
 * @class
 * @memberof PhotoEditorSDK.UI.ReactUI
 */
var Control = function () {
  function Control() {
    (0, _classCallCheck3.default)(this, Control);
  }

  /**
   * Returns the initial shared state for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @param  {Object} additionalState = {}
   * @return {Object}
   * @override
   */
  Control.prototype.getInitialSharedState = function getInitialSharedState() {
    return {};
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @override
   */


  Control.prototype.isAvailable = function isAvailable(editor) {
    return false;
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {String[]}
   */


  Control.getPreloadAssets = function getPreloadAssets() {
    return [];
  };

  return Control;
}();

/**
 * This control's top bar component. Used for the upper part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.TopBarControlsComponent}
 */


Control.topBarControlsComponent = null;

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 */
Control.controlsComponent = null;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 */
Control.canvasControlsComponent = null;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
Control.identifier = null;

/**
 * This control's icon path
 * @type {String}
 */
Control.iconPath = null;

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 */
Control.languageKey = null;

/**
 * The default options for this control
 * @type {Object}
 */
Control.defaultOptions = {};

exports.default = Control;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass2 = __webpack_require__(76);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_EventEmitter) {
  (0, _inherits3.default)(Modal, _EventEmitter);

  function Modal(type, title, text) {
    var overlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this.type = type;
    _this.title = title;
    _this.text = text;
    _this.overlay = overlay;
    _this.data = null;
    return _this;
  }

  /**
   * Sets the data to the given one
   * @param {Object} data
   */


  Modal.prototype.setData = function setData(data) {
    this.data = data;
    this.emit('update');
  };

  /**
   * Closes this modal
   */


  Modal.prototype.close = function close() {
    this.emit('close');
  };

  return Modal;
}(_globals.EventEmitter); /*
                           * This file is part of PhotoEditorSDK.
                           *
                           * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                           * All rights reserved.
                           *
                           * Redistribution and use in source and binary forms, without
                           * modification, are permitted provided that the following license agreement
                           * is approved and a legal/financial contract was signed by the user.
                           * The license agreement can be found under following link:
                           *
                           * https://www.photoeditorsdk.com/LICENSE.txt
                           */

var ModalManager = function (_EventEmitter2) {
  (0, _inherits3.default)(ModalManager, _EventEmitter2);

  function ModalManager() {
    (0, _classCallCheck3.default)(this, ModalManager);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _EventEmitter2.call(this));

    _this2._modals = [];
    return _this2;
  }

  /**
   * Creates a loading modal
   * @param  {String} text
   * @return {Modal}
   */


  ModalManager.prototype.displayLoading = function displayLoading(text) {
    var modal = new Modal('loading', null, text);
    this.addModal(modal);
    return modal;
  };

  /**
   * Creates a progress modal
   * @param  {String} text
   * @return {Modal}
   */


  ModalManager.prototype.displayProgress = function displayProgress(text) {
    var progress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var modal = new Modal('progress', null, text);
    modal.setData({ progress: progress });
    this.addModal(modal);
    return modal;
  };

  /**
   * Creats a warning modal
   * @param  {String} title
   * @param  {String} text
   * @return {Modal}
   */


  ModalManager.prototype.displayWarning = function displayWarning(title, text) {
    var modal = new Modal('warning', title, text);
    this.addModal(modal);
    return modal;
  };

  /**
   * Creates an error modal
   * @param  {String} title
   * @param  {String} text
   * @param  {Boolean} overlay = true
   * @return {Modal}
   */


  ModalManager.prototype.displayError = function displayError(title, text) {
    var overlay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var modal = new Modal('error', title, text, overlay);
    this.addModal(modal);
    return modal;
  };

  /**
   * Adds the given modal to the list of modals
   * @param {Modal} modal
   */


  ModalManager.prototype.addModal = function addModal(modal) {
    var _this3 = this;

    this._modals.push(modal);
    modal.on('close', function () {
      _this3.removeModal(modal);
    });
    modal.on('update', function () {
      _this3.emit('update');
    });
    this.emit('update');
  };

  /**
   * Removes the given modal from the list of modals
   * @param  {Modal} modal
   */


  ModalManager.prototype.removeModal = function removeModal(modal) {
    var index = this._modals.indexOf(modal);
    this._modals.splice(index, 1);
    this.emit('update');
  };

  /**
   * Returns the modals
   * @return {Array.<Modal>}
   */


  ModalManager.prototype.getModals = function getModals() {
    return this._modals;
  };

  /**
   * Returns the one and only instance of this class
   * @return {ModalManager}
   */


  (0, _createClass3.default)(ModalManager, null, [{
    key: 'instance',
    get: function get() {
      if (!this._instance) {
        this._instance = new ModalManager();
      }
      return this._instance;
    }
  }]);
  return ModalManager;
}(_globals.EventEmitter);

exports.default = ModalManager;

/***/ },
/* 8 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(52)('wks')
  , uid        = __webpack_require__(34)
  , Symbol     = __webpack_require__(12).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var NATIVE_SCROLLBAR_WIDTH = 25;
var SCROLLBAR_WIDTH = 12;

var ScrollbarComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ScrollbarComponent, _BaseComponent);

  function ScrollbarComponent() {
    (0, _classCallCheck3.default)(this, ScrollbarComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call(this));

    _this._needsStyleFixes = true;
    _this._isDragging = false;
    _this._bindAll('_onButtonDragStart', '_onButtonDrag', '_onButtonDragStop', '_onBarDragStart', '_onBarDrag', '_onBarDragStop', '_onListScroll');
    _this.state = {
      buttonSize: 0,
      buttonPosition: 0,
      buttonVisible: false
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */


  ScrollbarComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this.update();
  };

  ScrollbarComponent.prototype.fixStyles = function fixStyles() {
    if (!_globals.Utils.isMobile()) {
      this._updateListSize();
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user scrolls the list
   * @private
   */


  ScrollbarComponent.prototype._onListScroll = function _onListScroll() {
    if (this._isDragging) return;

    var direction = this._getDirection();

    var listScrollSize = void 0,
        listScrollPosition = void 0,
        backgroundScrollSize = void 0;
    if (direction === ScrollbarComponent.HORIZONTAL) {
      listScrollSize = this._list.scrollWidth - this._list.offsetWidth;
      listScrollPosition = this._list.scrollLeft;
      backgroundScrollSize = this._node.offsetWidth - this.state.buttonSize;
    } else if (direction === ScrollbarComponent.VERTICAL) {
      listScrollSize = this._list.scrollHeight - this._list.offsetHeight;
      listScrollPosition = this._list.scrollTop;
      backgroundScrollSize = this._node.offsetHeight - this.state.buttonSize;
    }

    var progress = listScrollPosition / listScrollSize;
    this.setState({
      buttonPosition: backgroundScrollSize * progress
    });
  };

  /**
   * Gets called when the user presses a mouse button on the bar
   * @private
   */


  ScrollbarComponent.prototype._onButtonDragStart = function _onButtonDragStart(e) {
    this._isDragging = true;
    this._initialButtonPosition = this.state.buttonPosition || 0;
  };

  /**
   * Gets called while the user drags the button
   * @param {Vector2} diff
   * @private
   */


  ScrollbarComponent.prototype._onButtonDrag = function _onButtonDrag(diff) {
    var direction = this._getDirection();

    var buttonPosition = void 0;
    if (direction === ScrollbarComponent.HORIZONTAL) {
      buttonPosition = this._initialButtonPosition + diff.x;
    } else if (direction === ScrollbarComponent.VERTICAL) {
      buttonPosition = this._initialButtonPosition + diff.y;
    }
    this._setButtonPosition(buttonPosition);
  };

  /**
   * Gets called when the user releases the button
   * @private
   */


  ScrollbarComponent.prototype._onButtonDragStop = function _onButtonDragStop() {
    this._isDragging = false;
  };

  /**
   * Gets called when the user starts dragging the bar
   * @param  {Event} e
   * @private
   */


  ScrollbarComponent.prototype._onBarDragStart = function _onBarDragStart(e) {
    var mousePosition = _globals.Utils.getEventPosition(e);
    this._initialPosition = mousePosition.clone();
    var boundingRect = this._node.getBoundingClientRect();
    var elementOffset = new _globals.Vector2(boundingRect.left, boundingRect.top);

    var relativePosition = mousePosition.clone().subtract(elementOffset);

    var direction = this._getDirection();
    if (direction === ScrollbarComponent.HORIZONTAL) {
      this._setButtonPosition(relativePosition.x - this.state.buttonSize / 2);
    } else if (direction === ScrollbarComponent.VERTICAL) {
      this._setButtonPosition(relativePosition.y - this.state.buttonSize / 2);
    }

    document.addEventListener('mousemove', this._onBarDrag);
    document.addEventListener('touchmove', this._onBarDrag);
    document.addEventListener('mouseup', this._onBarDragStop);
    document.addEventListener('touchend', this._onBarDragStop);
  };

  /**
   * Gets called while the user drags the bar
   * @param  {Event} e
   * @private
   */


  ScrollbarComponent.prototype._onBarDrag = function _onBarDrag(e) {
    var mousePosition = _globals.Utils.getEventPosition(e);

    var boundingRect = this._node.getBoundingClientRect();
    var elementOffset = new _globals.Vector2(boundingRect.left, boundingRect.top);

    var relativePosition = mousePosition.clone().subtract(elementOffset);
    var direction = this._getDirection();
    if (direction === ScrollbarComponent.HORIZONTAL) {
      this._setButtonPosition(relativePosition.x - this.state.buttonSize / 2);
    } else if (direction === ScrollbarComponent.VERTICAL) {
      this._setButtonPosition(relativePosition.y - this.state.buttonSize / 2);
    }
  };

  /**
   * Gets called when the user releases the bar
   * @private
   */


  ScrollbarComponent.prototype._onBarDragStop = function _onBarDragStop() {
    document.removeEventListener('mousemove', this._onBarDrag);
    document.removeEventListener('touchmove', this._onBarDrag);
    document.removeEventListener('mouseup', this._onBarDragStop);
    document.removeEventListener('touchend', this._onBarDragStop);
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Sets the button position to the given value
   * @param {Number} buttonPosition
   * @private
   */


  ScrollbarComponent.prototype._setButtonPosition = function _setButtonPosition(buttonPosition) {
    var direction = this._getDirection();

    var scrollableButtonSize = void 0,
        scrollableListSize = void 0;
    if (direction === ScrollbarComponent.HORIZONTAL) {
      scrollableButtonSize = this._node.offsetWidth - this.state.buttonSize;
      scrollableListSize = this._list.scrollWidth - this._list.offsetWidth;
    } else if (direction === ScrollbarComponent.VERTICAL) {
      scrollableButtonSize = this._node.offsetHeight - this.state.buttonSize;
      scrollableListSize = this._list.scrollHeight - this._list.offsetHeight;
    }

    // Clamp button position
    buttonPosition = Math.max(0, buttonPosition);
    buttonPosition = Math.min(buttonPosition, scrollableButtonSize);

    // Set button position
    this.setState({ buttonPosition: buttonPosition });

    // Update list scroll position
    var progress = buttonPosition / scrollableButtonSize;
    var scrollPosition = scrollableListSize * progress;

    if (direction === ScrollbarComponent.HORIZONTAL) {
      this._list.scrollLeft = scrollPosition;
    } else if (direction === ScrollbarComponent.VERTICAL) {
      this._list.scrollTop = scrollPosition;
    }
  };

  /**
   * Updates the button position and size
   * @param {Function} cb
   * @private
   */


  ScrollbarComponent.prototype._updateButtonSize = function _updateButtonSize(cb) {
    var buttonSize = 0;
    var buttonVisible = false;
    var parentSize = void 0,
        parentScrollSize = void 0;

    var direction = this._getDirection();
    if (direction === ScrollbarComponent.HORIZONTAL) {
      parentSize = this._list.clientWidth;
      parentScrollSize = this._list.scrollWidth;
    } else if (direction === ScrollbarComponent.VERTICAL) {
      parentSize = this._list.offsetHeight;
      parentScrollSize = this._list.scrollHeight;
    }

    buttonSize = parentSize / parentScrollSize * parentSize;
    buttonVisible = parentScrollSize > parentSize;

    this.setState({ buttonSize: buttonSize, buttonVisible: buttonVisible }, cb);
  };

  /**
   * Updates the list size
   * @private
   */


  ScrollbarComponent.prototype._updateListSize = function _updateListSize() {
    if (!this._list) return;

    var direction = this._getDirection();
    if (direction === ScrollbarComponent.HORIZONTAL) {
      this._list.style.height = '';
      var fullDimensions = this._getFullListDimensions();
      this._listSize = fullDimensions.y;
    } else if (direction === ScrollbarComponent.VERTICAL) {
      this._list.style.width = '';
      var _fullDimensions = this._getFullListDimensions();
      this._listSize = _fullDimensions.x;
    }
  };

  /**
   * In order to get the absolute width and height of the list, including the scrollbar,
   * we need to make use of `getBoundingClientRect`
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  ScrollbarComponent.prototype._getFullListDimensions = function _getFullListDimensions() {
    var rect = this._list.getBoundingClientRect();
    return new _globals.Vector2(rect.width, rect.height);
  };

  // -------------------------------------------------------------------------- PUBLIC API

  /**
   * Updates the dimensions and stuff
   */


  ScrollbarComponent.prototype.update = function update() {
    var _this2 = this;

    if (_globals.Utils.isMobile()) {
      return;
    }

    var _refs = this.refs,
        root = _refs.root,
        list = _refs.list;

    this._node = root;
    this._list = list;

    var direction = this._getDirection();
    this._updateButtonSize(function () {
      if (!_this2._listSize) {
        _this2._updateListSize();
      }

      var newListSize = _this2._listSize;
      if (_this2.state.buttonVisible) {
        newListSize += NATIVE_SCROLLBAR_WIDTH * 2;
      }

      if (direction === ScrollbarComponent.HORIZONTAL) {
        _this2._list.style.height = newListSize + 'px';
        _this2._node.style.top = _this2._listSize - SCROLLBAR_WIDTH + 'px';
        _this2._node.style.width = _this2._list.offsetWidth + 'px';
      } else if (direction === ScrollbarComponent.VERTICAL) {
        _this2._list.style.width = newListSize + 'px';
        _this2._node.style.left = _this2._listSize - SCROLLBAR_WIDTH + 'px';
        _this2._node.style.height = _this2._list.offsetHeight + 'px';
      }
    });

    this._list.addEventListener('scroll', this._onListScroll);
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Returns this scrollbar's direction
   * @return {String}
   * @private
   */


  ScrollbarComponent.prototype._getDirection = function _getDirection() {
    return this.props.direction || 'horizontal';
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the button's style object
   * @return {Object}
   * @private
   */


  ScrollbarComponent.prototype._getButtonStyle = function _getButtonStyle() {
    var direction = this._getDirection();
    if (direction === 'horizontal') {
      return {
        left: this.state.buttonPosition,
        width: this.state.buttonSize
      };
    } else {
      return {
        top: this.state.buttonPosition,
        height: this.state.buttonSize
      };
    }
  };

  // -------------------------------------------------------------------------- GETTERS

  ScrollbarComponent.prototype.getList = function getList() {
    return this.refs.list;
  };

  ScrollbarComponent.prototype.getRoot = function getRoot() {
    return this.refs.root;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ScrollbarComponent.prototype.renderWithBEM = function renderWithBEM() {
    if (_globals.Utils.isMobile()) {
      return this.props.children;
    }

    var buttonStyle = this._getButtonStyle();
    var scrollbarStyle = {
      display: this.state.buttonVisible ? 'block' : 'none'
    };

    var child = _globals.React.cloneElement(this.props.children, {
      ref: 'list'
    });

    return _globals.ReactBEM.createElement(
      'div',
      null,
      child,
      _globals.ReactBEM.createElement(
        'div',
        {
          bem: '$b:scrollbar m:' + (this.props.direction || 'horizontal') + ' m:' + (this.state.buttonVisible ? 'visible' : 'invisible'),
          ref: 'root',
          style: scrollbarStyle,
          onMouseDown: this._onBarDragStart,
          onTouchStart: this._onBarDragStart },
        _globals.ReactBEM.createElement(
          _draggableComponent2.default,
          {
            onStart: this._onButtonDragStart,
            onDrag: this._onButtonDrag,
            onStop: this._onButtonDragStop },
          _globals.ReactBEM.createElement('div', {
            bem: 'e:bar',
            style: buttonStyle,
            onMouseDown: this._onButtonDown })
        )
      )
    );
  };

  return ScrollbarComponent;
}(_globals.BaseComponent);

exports.default = ScrollbarComponent;


ScrollbarComponent.HORIZONTAL = 'horizontal';
ScrollbarComponent.VERTICAL = 'vertical';

ScrollbarComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DraggableComponent = function (_BaseComponent) {
  (0, _inherits3.default)(DraggableComponent, _BaseComponent);

  function DraggableComponent() {
    (0, _classCallCheck3.default)(this, DraggableComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onDragStart', '_onDragMove', '_onDragEnd');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user stars dragging the child
   * @param {Event} e
   * @private
   */


  DraggableComponent.prototype._onDragStart = function _onDragStart(e) {
    if (this.props.disabled) return;

    e.preventDefault();
    e.stopPropagation();

    this._initialMousePosition = _globals.Utils.getEventPosition(e);

    document.addEventListener('mousemove', this._onDragMove);
    document.addEventListener('touchmove', this._onDragMove);
    document.addEventListener('mouseup', this._onDragEnd);
    document.addEventListener('touchend', this._onDragEnd);

    var element = this.refs.element;

    var boundingRect = element.getBoundingClientRect();
    var elementOffset = new _globals.Vector2(boundingRect.left, boundingRect.top);

    var relativePosition = this._initialMousePosition.clone().subtract(elementOffset);
    this.props.onStart && this.props.onStart(relativePosition, e);
  };

  /**
   * Gets called while the user drags the child
   * @param {Event} e
   * @private
   */


  DraggableComponent.prototype._onDragMove = function _onDragMove(e) {
    e.preventDefault();
    e.stopPropagation();

    var mousePosition = _globals.Utils.getEventPosition(e);
    if (!mousePosition) return;
    var mouseDiff = mousePosition.clone().subtract(this._initialMousePosition);

    this.props.onDrag && this.props.onDrag(mouseDiff, e);
  };

  /**
   * Gets called when the user stops dragging the child
   * @param {Event} e
   * @private
   */


  DraggableComponent.prototype._onDragEnd = function _onDragEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    this._onDragMove(e);

    document.removeEventListener('mousemove', this._onDragMove);
    document.removeEventListener('touchmove', this._onDragMove);
    document.removeEventListener('mouseup', this._onDragEnd);
    document.removeEventListener('touchend', this._onDragEnd);

    this.props.onStop && this.props.onStop(e);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  DraggableComponent.prototype.render = function render() {
    if (!this.props.children || this.props.children instanceof Array) {
      throw new Error('DraggableComponent expects exactly one child.');
    }

    return _globals.React.cloneElement(this.props.children, {
      onMouseDown: this._onDragStart,
      onTouchStart: this._onDragStart,
      ref: 'element'
    });
  };

  return DraggableComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


exports.default = DraggableComponent;


DraggableComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 12 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(15)
  , IE8_DOM_DEFINE = __webpack_require__(80)
  , toPrimitive    = __webpack_require__(55)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */
var SliderComponent = function (_BaseComponent) {
  (0, _inherits3.default)(SliderComponent, _BaseComponent);

  function SliderComponent() {
    (0, _classCallCheck3.default)(this, SliderComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onKnobDragStart', '_onKnobDrag', '_onKnobDragStop', '_onBarDragStart', '_onBarDrag', '_onBarDragStop', '_onMiddleDotClick');

    _this.state = {
      value: _this.props.value || 0,
      sliderPosition: 0,
      foregroundLeft: 0,
      foregroundWidth: 0
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */


  SliderComponent.prototype.componentDidMount = function componentDidMount() {
    // Trigger a re-render to position the knob
    this._setValue(this.state.value, false);
  };

  /**
   * Gets called when this component receives new props
   * @param  {Object} props
   */


  SliderComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.value !== this.state.value) {
      this._setValue(props.value, false);
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user presses a mouse button on the middle dot
   * @private
   */


  SliderComponent.prototype._onMiddleDotClick = function _onMiddleDotClick() {
    this._previousValue = this.state.value;
    var newValue = this.props.minValue + (this.props.maxValue - this.props.minValue) / 2;
    this._setValue(newValue, true, true);
  };

  /**
   * Gets called when the user starts dragging the knob
   * @param  {Vector2} position
   * @private
   */


  SliderComponent.prototype._onKnobDragStart = function _onKnobDragStart(position) {
    this._previousValue = this.state.value;
    this._initialSliderPosition = this.state.sliderPosition;
    this._initialPosition = position;
  };

  /**
   * Gets called while the user drags the knob
   * @param  {Vector2} diff
   * @private
   */


  SliderComponent.prototype._onKnobDrag = function _onKnobDrag(diff) {
    var bar = this.refs.bar;

    var barWidth = bar.offsetWidth;

    var newSliderPosition = this._initialSliderPosition + diff.x;
    newSliderPosition = Math.max(0, Math.min(newSliderPosition, barWidth));
    var progress = newSliderPosition / barWidth;
    var newValue = this.props.minValue + (this.props.maxValue - this.props.minValue) * progress;

    this._setValue(newValue);
  };

  /**
   * Gets called when the user stops dragging the knob
   * @private
   */


  SliderComponent.prototype._onKnobDragStop = function _onKnobDragStop() {
    this._setValue(this.state.value, true, true);
  };

  /**
   * Gets called when the user starts dragging the bar
   * @param  {Vector2} position
   * @private
   */


  SliderComponent.prototype._onBarDragStart = function _onBarDragStart(position) {
    this._previousValue = this.state.value;
    this._initialPosition = position.clone();

    var bar = this.refs.bar;

    var barWidth = bar.offsetWidth;
    var progress = position.x / barWidth;
    var newValue = this.props.minValue + (this.props.maxValue - this.props.minValue) * progress;
    this._setValue(newValue);
  };

  /**
   * Gets called while the user drags the bar
   * @param  {Vector2} diff
   * @private
   */


  SliderComponent.prototype._onBarDrag = function _onBarDrag(diff) {
    var position = this._initialPosition.clone().add(diff);

    var bar = this.refs.bar;

    var barWidth = bar.offsetWidth;
    var progress = position.x / barWidth;
    var newValue = this.props.minValue + (this.props.maxValue - this.props.minValue) * progress;
    newValue = Math.max(this.props.minValue, Math.min(this.props.maxValue, newValue));
    this._setValue(newValue);
  };

  /**
   * Gets called when the user stops dragging the bar
   * @private
   */


  SliderComponent.prototype._onBarDragStop = function _onBarDragStop() {
    this._setValue(this.state.value, true, true);
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the style for the knob (position)
   * @return {Object}
   * @private
   */


  SliderComponent.prototype._getKnobStyle = function _getKnobStyle() {
    return { left: this.state.sliderPosition };
  };

  /**
   * Returns the style for the foreground bar
   * @return {Object}
   * @private
   */


  SliderComponent.prototype._getForegroundStyle = function _getForegroundStyle() {
    return {
      left: this.state.foregroundLeft,
      width: this.state.foregroundWidth
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Decides whether or not this slider should have a middle dot on the bar
   * @private
   */


  SliderComponent.prototype._displayMiddleDot = function _displayMiddleDot() {
    return this.props.middleDot !== false;
  };

  /**
   * Sets the value to the given value, updates the slider position
   * @param {Number} value
   * @param {Boolean} emitChange = true
   * @param {Boolean} emitRelease = false
   * @private
   */


  SliderComponent.prototype._setValue = function _setValue(value) {
    var emitChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var emitRelease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    value = Math.round(value);
    var _props = this.props,
        minValue = _props.minValue,
        maxValue = _props.maxValue;

    var progress = (value - minValue) / (maxValue - minValue);

    // Calculate slider position
    var bar = this.refs.bar;

    var barWidth = bar.offsetWidth;
    var sliderPosition = barWidth * progress;

    // Calculate foreground position and width
    var foregroundWidth = progress * barWidth;
    var foregroundLeft = 0;
    if (this._displayMiddleDot()) {
      foregroundWidth = Math.abs(progress - 0.5) * barWidth;
      foregroundLeft = progress < 0.5 ? barWidth * 0.5 - foregroundWidth : '50%';
    }

    this.setState({ value: value, sliderPosition: sliderPosition, foregroundWidth: foregroundWidth, foregroundLeft: foregroundLeft });

    if (emitChange) {
      this.props.onChange && this.props.onChange(value, this._previousValue, emitRelease);
    }
  };

  /**
   * Builds a display value from the given props
   * @param {Number} value
   * @return {String}
   * @private
   */


  SliderComponent.prototype._buildValue = function _buildValue(value) {
    // Limit decimals to two digits, if present
    if (value % 1 !== 0) {
      value = value.toFixed(2);
    }

    // Add positive value prefix (+) if value is > 0
    if (this.props.positiveValuePrefix && value >= 0) {
      value = '' + this.props.positiveValuePrefix + value;
    }

    // Add unit if present
    if (this.props.valueUnit) {
      value += this.props.valueUnit;
    }

    return value;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  SliderComponent.prototype.renderWithBEM = function renderWithBEM() {
    var middleDot = null;
    if (this._displayMiddleDot()) {
      middleDot = _globals.ReactBEM.createElement('div', { bem: 'e:middleDot', onClick: this._onMiddleDotClick });
    }

    var foregroundProps = {
      style: this._getForegroundStyle()
    };

    var componentBem = '$b:slider' + (this.props.style ? ' m:' + this.props.style : '');
    return _globals.ReactBEM.createElement(
      'div',
      { bem: componentBem },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:bar', ref: 'bar' },
        _globals.ReactBEM.createElement(
          _draggableComponent2.default,
          {
            onStart: this._onBarDragStart,
            onDrag: this._onBarDrag,
            onStop: this._onBarDragStop },
          _globals.ReactBEM.createElement(
            'div',
            null,
            _globals.ReactBEM.createElement('div', { bem: '$e:background' }),
            _globals.ReactBEM.createElement('div', (0, _extends3.default)({ bem: '$e:foreground' }, foregroundProps)),
            _globals.ReactBEM.createElement(
              _draggableComponent2.default,
              {
                onStart: this._onKnobDragStart,
                onDrag: this._onKnobDrag,
                onStop: this._onKnobDragStop },
              _globals.ReactBEM.createElement('div', { bem: 'e:knob b:knob m:slider', style: this._getKnobStyle() })
            )
          )
        ),
        middleDot
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:labels' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label m:lowerBoundary' },
          this._buildValue(this.props.minValue)
        ),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label m:value' },
          this.props.label,
          ' ',
          this._buildValue(this.state.value)
        ),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label m:upperBoundary' },
          this._buildValue(this.props.maxValue)
        )
      )
    );
  };

  return SliderComponent;
}(_globals.BaseComponent);

exports.default = SliderComponent;


SliderComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(27);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(26)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(12)
  , core      = __webpack_require__(8)
  , ctx       = __webpack_require__(44)
  , hide      = __webpack_require__(22)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 18 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(81)
  , defined = __webpack_require__(45);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _sliderComponent = __webpack_require__(14);

var _sliderComponent2 = _interopRequireDefault(_sliderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var SliderOverlayComponent = function (_BaseComponent) {
  (0, _inherits3.default)(SliderOverlayComponent, _BaseComponent);

  function SliderOverlayComponent() {
    (0, _classCallCheck3.default)(this, SliderOverlayComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onSliderValueChange');

    _this.state = { value: _this.props.value };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component receives new props
   * @param  {Object} props
   */


  SliderOverlayComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.value !== this.state.value) {
      this.state.value = props.value;
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the slider value has changed
   * @param  {Number} value
   * @private
   */


  SliderOverlayComponent.prototype._onSliderValueChange = function _onSliderValueChange(value) {
    this.props.onChange && this.props.onChange(value);
    this.setState({ value: value });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the SliderComponent
   * @return {SliderComponent}
   * @private
   */


  SliderOverlayComponent.prototype._renderSlider = function _renderSlider() {
    var props = _globals.SDKUtils.defaults(this.props, {
      style: '',
      middleDot: false,
      minValue: 1,
      maxValue: 100,
      label: 'Label',
      onChange: this._onSliderValueChange,
      value: this.state.value
    });
    return _globals.ReactBEM.createElement(_sliderComponent2.default, props);
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  SliderOverlayComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:controls e:overlay m:large m:dark' },
      this._renderSlider()
    );
  };

  return SliderOverlayComponent;
}(_globals.BaseComponent);

exports.default = SliderOverlayComponent;


SliderOverlayComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _headerComponent = __webpack_require__(151);

var _headerComponent2 = _interopRequireDefault(_headerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var ScreenComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ScreenComponent, _BaseComponent);

  function ScreenComponent() {
    (0, _classCallCheck3.default)(this, ScreenComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders the header (if enabled)
   * @return {ReactBEM.Element}
   * @private
   */
  ScreenComponent.prototype._renderHeader = function _renderHeader() {
    if (!this.context.options.showHeader) {
      return null;
    }
    return _globals.ReactBEM.createElement(_headerComponent2.default, null);
  };

  /**
   * Renders this screen
   * @return {ReactBEM.Element}
   * @private
   */


  ScreenComponent.prototype._renderScreen = function _renderScreen() {
    return _globals.ReactBEM.createElement('div', null);
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ScreenComponent.prototype.renderWithBEM = function renderWithBEM() {
    var screenBEMSpecifier = 'b:screen';
    if (!this.context.options.showHeader) {
      screenBEMSpecifier += ' m:noHeader';
    }

    return _globals.ReactBEM.createElement(
      'div',
      { bem: screenBEMSpecifier, className: !this.props.visible ? 'is-hidden' : null },
      this._renderHeader(),
      this._renderScreen()
    );
  };

  return ScreenComponent;
}(_globals.BaseComponent);

exports.default = ScreenComponent;


ScreenComponent.propTypes = {
  editor: _globals.React.PropTypes.any
};

ScreenComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(13)
  , createDesc = __webpack_require__(29);
module.exports = __webpack_require__(16) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CanvasControlsComponent = function (_BaseComponent) {
  (0, _inherits3.default)(CanvasControlsComponent, _BaseComponent);

  function CanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, CanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onCanvasZoomDone');
    return _this;
  }

  // -------------------------------------------------------------------------- HIT TEST

  /**
   * Checks if any other control reacts to a click at the given position
   * @param  {Vector2} clickPosition
   * @private
   */


  CanvasControlsComponent.prototype._performHitTest = function _performHitTest(clickPosition) {
    var container = this.refs.container;

    var containerRect = container.getBoundingClientRect();
    var containerPosition = new _globals.Vector2(containerRect.left, containerRect.top);

    var positionOnCanvas = clickPosition.subtract(containerPosition);

    var editor = this.context.editor;

    var controls = editor.controls.getAvailable();

    // Check if any of the controls responds to a click
    // at the given position
    for (var identifier in controls) {
      var control = controls[identifier];
      var clickResponse = control.clickAtPosition && control.clickAtPosition(positionOnCanvas, editor);

      if (clickResponse) {
        // Don't re-select an already selected item
        if (clickResponse.selectedSprite === this.getSharedState('selectedSprite')) {
          return true;
        }

        // Responds to click, switch to the controls
        this.props.onSwitchControls(control, clickResponse);
        return true;
      }
    }

    return false;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called after the canvas has been zoomed in or out
   * @private
   */


  CanvasControlsComponent.prototype._onCanvasZoomDone = function _onCanvasZoomDone() {
    this.forceUpdate();
  };

  /**
   * Binds the events in _events
   * @protected
   */


  CanvasControlsComponent.prototype._bindEvents = function _bindEvents() {
    _BaseComponent.prototype._bindEvents.call(this);
    this.context.mediator.on(_globals.Constants.EVENTS.ZOOM_DONE, this._onCanvasZoomDone);
  };

  /**
   * Unbinds the events in _events
   * @protected
   */


  CanvasControlsComponent.prototype._unbindEvents = function _unbindEvents() {
    _BaseComponent.prototype._unbindEvents.call(this);
    this.context.mediator.off(_globals.Constants.EVENTS.ZOOM_DONE, this._onCanvasZoomDone);
  };

  return CanvasControlsComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = CanvasControlsComponent;


CanvasControlsComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _assign = __webpack_require__(207);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(85)
  , enumBugKeys = __webpack_require__(46);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _textItemComponent = __webpack_require__(139);

var _textItemComponent2 = _interopRequireDefault(_textItemComponent);

var _stickerItemComponent = __webpack_require__(138);

var _stickerItemComponent2 = _interopRequireDefault(_stickerItemComponent);

var _brushItemComponent = __webpack_require__(137);

var _brushItemComponent2 = _interopRequireDefault(_brushItemComponent);

var _canvasControlsComponent = __webpack_require__(24);

var _canvasControlsComponent2 = _interopRequireDefault(_canvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _SDK$Operations$Sprit = _globals.SDK.Operations.SpriteOperation,
    Sticker = _SDK$Operations$Sprit.Sticker,
    Text = _SDK$Operations$Sprit.Text,
    Brush = _SDK$Operations$Sprit.Brush; /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var SpritesCanvasControlsComponent = function (_CanvasControlsCompon) {
  (0, _inherits3.default)(SpritesCanvasControlsComponent, _CanvasControlsCompon);

  function SpritesCanvasControlsComponent() {
    var _this$_events;

    (0, _classCallCheck3.default)(this, SpritesCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onCanvasClick', '_onSpriteDragStart', '_onSpriteDragStop', '_onOperationUpdated', '_onOperationRemoved', '_onSpriteFlip', '_onSpriteTakeToFront', '_onSpriteRemove');

    _this._canvasClickDisabled = false;

    _this._events = (_this$_events = {}, (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.OPERATION_REMOVED, _this._onOperationRemoved), _this$_events);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation has been removed
   * @param  {Operation} operation
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    var selectedSprite = this.getSharedState('selectedSprite');
    if (operation !== this.getSharedState('operation') || !selectedSprite) return;

    // Operation can be removed by the undo button. We need
    // to make sure we re-create the operation for the lifetime
    // of this control
    var editor = this.context.editor;

    var newOperation = editor.operations.getOrCreate('sprite', {
      sprites: [selectedSprite],
      enabled: false
    });
    this.setSharedState({
      operation: newOperation,
      operationExistedBefore: false,
      initialOptions: {}
    });
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    var selectedSprite = this.getSharedState('selectedSprite');
    if (operation !== this.getSharedState('operation') || !selectedSprite) return;

    // If the currently selected sprite is no longer existent,
    // re-add it
    var sprites = operation.getSprites();
    if (sprites.indexOf(selectedSprite) === -1) {
      sprites.push(selectedSprite);
    }

    this.forceUpdate();
  };

  /**
   * Gets called when the selected item is deselected
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onItemBlur = function _onItemBlur() {};

  /**
   * Gets called when the user clicks somewhere on the canvas
   * @param  {Event} e
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onCanvasClick = function _onCanvasClick(e) {
    if (this._canvasClickDisabled) return;

    var hitTest = this._performHitTest(_globals.Utils.getEventPosition(e));
    if (!hitTest) {
      if (this.getSharedState('selectedSprite')) {
        this._onItemBlur();
      }
      this.props.onSwitchControls('home');
    }
  };

  /**
   * Gets called when the user flips the selected sprite
   * @param  {String} direction
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteFlip = function _onSpriteFlip(direction) {
    var selectedSprite = this.getSharedState('selectedSprite');
    switch (direction) {
      case 'h':
        selectedSprite.setFlipHorizontally(!selectedSprite.getFlipHorizontally());
        break;
      case 'v':
        selectedSprite.setFlipVertically(!selectedSprite.getFlipVertically());
        break;
    }
  };

  /**
   * Gets called when the user takes the selected sprite to front
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteTakeToFront = function _onSpriteTakeToFront(direction) {
    var operation = this.getSharedState('operation');
    operation.takeSpriteToFront(this.getSharedState('selectedSprite'));
    this.forceSharedUpdate();
  };

  /**
   * Gets called when the user removes the selected sprite
   * @param  {String} direction
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteRemove = function _onSpriteRemove() {
    var operation = this.getSharedState('operation');
    var selectedSprite = this.getSharedState('selectedSprite');
    operation.removeSprite(selectedSprite);
    selectedSprite.dispose();

    this.setSharedState({
      selectedSprite: null
    });
  };

  // -------------------------------------------------------------------------- DRAGGING

  /**
   * Gets called when a sprite has received a dragging event. Blocks the `_onCanvasClick`
   * handler until `_onSpriteDragStop`
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteDragStart = function _onSpriteDragStart() {
    this._canvasClickDisabled = true;
  };

  /**
   * Since `_onCanvasClick` is triggered right after the drag end event for knobs is triggered,
   * we need to wait a short amount of time until we re-enabale the canvas click
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteDragStop = function _onSpriteDragStop() {
    var _this2 = this;

    setTimeout(function () {
      _this2._canvasClickDisabled = false;
    }, 100);
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the container style
   * @return {Object}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._getContainerStyle = function _getContainerStyle() {
    var editor = this.context.editor;

    var canvasDimensions = editor.getCanvasDimensions();
    var outputDimensions = editor.getOutputDimensions();

    var _canvasDimensions$clo = canvasDimensions.clone().divide(2).subtract(outputDimensions.clone().divide(2)),
        x = _canvasDimensions$clo.x,
        y = _canvasDimensions$clo.y;

    return {
      left: x,
      top: y,
      width: outputDimensions.x,
      height: outputDimensions.y
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Returns the properties for the outer container
   * @return {Object}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._getContainerProps = function _getContainerProps() {
    return {};
  };

  /**
   * Returns the properties for the canvas container
   * @return {Object}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._getInnerContainerProps = function _getInnerContainerProps() {
    return {
      style: this._getContainerStyle(),
      onClick: this._onCanvasClick
    };
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the sprite items
   * @return {Array.<SpriteItemComponent>}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._renderSpriteItems = function _renderSpriteItems() {
    var _this3 = this;

    var operation = this.getSharedState('operation');
    var sprites = operation.getSprites();
    var selectedSprite = this.getSharedState('selectedSprite');

    return sprites.map(function (s) {
      var isSelected = s === selectedSprite;
      var ComponentClass = null;
      if (s instanceof Text) {
        ComponentClass = _textItemComponent2.default;
      } else if (s instanceof Sticker) {
        ComponentClass = _stickerItemComponent2.default;
      } else if (s instanceof Brush) {
        ComponentClass = _brushItemComponent2.default;
      }

      return _globals.ReactBEM.createElement(ComponentClass, {
        operation: operation,
        sharedState: _this3.props.sharedState,
        sprite: s,
        selected: isSelected,
        onDragStart: _this3._onSpriteDragStart,
        onDragStop: _this3._onSpriteDragStop,
        onRemove: _this3._onSpriteRemove.bind(_this3, s),
        options: _this3.props.options,
        ref: 'sprite-' + s.getId() });
    });
  };

  /**
   * This renders controls on top of the sprites
   * @return {ReactBEM.Element}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    return null;
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  SpritesCanvasControlsComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      (0, _extends3.default)({
        bem: '$b:canvasControls e:container m:full',
        ref: 'container'
      }, this._getContainerProps()),
      _globals.ReactBEM.createElement(
        'div',
        (0, _extends3.default)({
          bem: 'b:canvasControls e:innerContainer',
          ref: 'innerContainer'
        }, this._getInnerContainerProps()),
        _globals.ReactBEM.createElement(
          'div',
          {
            bem: '$b:spritesCanvasControls',
            ref: 'container' },
          this._renderSpriteItems(),
          this._renderOverlayControls()
        )
      )
    );
  };

  return SpritesCanvasControlsComponent;
}(_canvasControlsComponent2.default);

exports.default = SpritesCanvasControlsComponent;


SpritesCanvasControlsComponent.contextTypes = _canvasControlsComponent2.default.contextTypes;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBarComponent = function (_BaseComponent) {
  (0, _inherits3.default)(TopBarComponent, _BaseComponent);

  function TopBarComponent() {
    (0, _classCallCheck3.default)(this, TopBarComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders the content of this TopBarComponent
   * @return {ReactBEM.Element}
   */
  TopBarComponent.prototype.renderContent = function renderContent() {
    return this.props.children;
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  TopBarComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:topBar e:row' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell' },
        this.renderContent()
      )
    );
  };

  return TopBarComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = TopBarComponent;


TopBarComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _iterator = __webpack_require__(211);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(210);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 33 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 34 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(242)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(82)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _overlayComponent = __webpack_require__(102);

var _overlayComponent2 = _interopRequireDefault(_overlayComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var ColorPickerComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ColorPickerComponent, _BaseComponent);

  function ColorPickerComponent() {
    (0, _classCallCheck3.default)(this, ColorPickerComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._value = _this.props.initialValue.clone();
    _this._bindAll('_onButtonClick', '_onValueChange', '_onColorPickerOpen', '_onColorPickerClose');

    _this._events = (0, _defineProperty3.default)({}, _globals.Constants.EVENTS.COLORPICKER_OPEN, _this._onColorPickerOpen);

    _this.state = {
      overlayVisible: false
    };

    _this._transparentPatternCanvas = _globals.Utils.createTransparentPatternCanvas();
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  ColorPickerComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this._renderColor();
  };

  /**
   * Gets called after this component has been updated
   */


  ColorPickerComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderColor();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when a colorpicker has been opened. If it is not the same
   * color picker as this, this one gets closed. This makes sure that there
   * is only one color picker open at a time
   * @param  {ColorPickerComponent} colorPicker
   * @private
   */


  ColorPickerComponent.prototype._onColorPickerOpen = function _onColorPickerOpen(colorPicker) {
    if (colorPicker === this) return;
    this.setState({ overlayVisible: false });
  };

  /**
   * Gets called when the color picker overlay tries to close itself
   * @private
   */


  ColorPickerComponent.prototype._onColorPickerClose = function _onColorPickerClose() {
    this.setState({ overlayVisible: false });
  };

  /**
   * Gets called when the color picker button has been clicked
   * @param  {Event} e
   * @private
   */


  ColorPickerComponent.prototype._onButtonClick = function _onButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.state.overlayVisible) {
      this._emitEvent(_globals.Constants.EVENTS.COLORPICKER_OPEN, this);
    }

    this.setState({ overlayVisible: !this.state.overlayVisible });
  };

  /**
   * Gets called when the value changes
   * @param  {Color} value
   * @private
   */


  ColorPickerComponent.prototype._onValueChange = function _onValueChange(value) {
    this._value = value;
    this._renderColor();
    this.forceUpdate();

    this.props.onChange && this.props.onChange(value);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the current color on the preview canvas
   * @private
   */


  ColorPickerComponent.prototype._renderColor = function _renderColor() {
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var pattern = context.createPattern(this._transparentPatternCanvas, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = this._value.toRGBA();
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ColorPickerComponent.prototype.renderWithBEM = function renderWithBEM() {
    var Overlay = null;
    if (this.state.overlayVisible) {
      Overlay = _globals.ReactBEM.createElement(_overlayComponent2.default, {
        initialValue: this._value,
        onChange: this._onValueChange,
        onClose: this._onColorPickerClose,
        alpha: this.props.alpha });
    }

    var className = this.state.overlayVisible ? 'is-active' : null;

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:controls' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:colorPicker', className: className, onClick: this._onButtonClick },
        _globals.ReactBEM.createElement('canvas', { bem: 'e:preview', ref: 'canvas' }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label' },
          this.props.label || this._t('generic.color')
        ),
        Overlay
      )
    );
  };

  return ColorPickerComponent;
}(_globals.BaseComponent);

exports.default = ColorPickerComponent;


ColorPickerComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ItemComponent, _BaseComponent);

  function ItemComponent() {
    (0, _classCallCheck3.default)(this, ItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onItemDragStart', '_onItemDragStop', '_onItemDrag', '_onSpriteUpdate');
    return _this;
  }

  // -------------------------------------------------------------------------- CALCULATIONS

  /**
   * Returns the absolute position of the sprite
   * @return {Vector2}
   * @private
   */


  ItemComponent.prototype._getAbsoluteSpritePosition = function _getAbsoluteSpritePosition() {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    return this.props.sprite.getPosition().clone().multiply(outputDimensions);
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  ItemComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this.props.sprite.on('update', this._onSpriteUpdate);
  };

  /**
   * Gets called when this component is about to be unmounted
   */


  ItemComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _BaseComponent.prototype.componentWillUnmount.call(this);
    this.props.sprite.off('update', this._onSpriteUpdate);
  };

  /**
   * Gets called when this component will receive new props
   * @param  {Object} nextProps
   */


  ItemComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.props.sprite.off('update', this._onSpriteUpdate);
    nextProps.sprite.on('update', this._onSpriteUpdate);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when this component's sprite has been updated
   * @private
   */


  ItemComponent.prototype._onSpriteUpdate = function _onSpriteUpdate() {
    this.forceUpdate();
  };

  /**
   * Gets called when the user starts dragging this item
   * @private
   */


  ItemComponent.prototype._onItemDragStart = function _onItemDragStart() {
    var sprite = this.props.sprite;

    this._initialPosition = sprite.getPosition();

    this.props.onDragStart && this.props.onDragStart();
  };

  /**
   * Gets called while the user drags this item
   * @param  {Vector2} offset
   * @private
   */


  ItemComponent.prototype._onItemDrag = function _onItemDrag(offset) {
    var sprite = this.props.sprite;
    var editor = this.context.editor;


    var outputDimensions = editor.getOutputDimensions();
    var newPosition = this._initialPosition.clone().add(offset.divide(outputDimensions));

    sprite.setPosition(newPosition);
  };

  /**
   * Gets called when the user stops dragging this item
   * @private
   */


  ItemComponent.prototype._onItemDragStop = function _onItemDragStop() {
    this.props.onDragStop && this.props.onDragStop();
  };

  return ItemComponent;
}(_globals.BaseComponent); /*
                            * This file is part of PhotoEditorSDK.
                            *
                            * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, without
                            * modification, are permitted provided that the following license agreement
                            * is approved and a legal/financial contract was signed by the user.
                            * The license agreement can be found under following link:
                            *
                            * https://www.photoeditorsdk.com/LICENSE.txt
                            */

exports.default = ItemComponent;


ItemComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowComponent = function (_BaseComponent) {
  (0, _inherits3.default)(RowComponent, _BaseComponent);

  function RowComponent() {
    (0, _classCallCheck3.default)(this, RowComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onClick');
    return _this;
  }
  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the button
   * @param  {Event} e
   * @private
   */


  RowComponent.prototype._onClick = function _onClick(e) {
    this.props.onClick && this.props.onClick();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this row's content
   * @return {ReactBEM.Element}
   * @private
   */


  RowComponent.prototype._renderContent = function _renderContent() {
    return null;
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  RowComponent.prototype.renderWithBEM = function renderWithBEM() {
    var rowBEM = '$e:row m:' + this._modifier;
    if (this.props.totalRows) {
      rowBEM += ' m:row-' + this.props.totalRows;
    }

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:splashScreen' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: rowBEM },
        this._renderContent()
      )
    );
  };

  return RowComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = RowComponent;


RowComponent.propTypes = {
  onClick: _globals.React.PropTypes.func
};

RowComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _fileLoader = __webpack_require__(184);

var _fileLoader2 = _interopRequireDefault(_fileLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var InvisibleUploadComponent = function (_BaseComponent) {
  (0, _inherits3.default)(InvisibleUploadComponent, _BaseComponent);

  function InvisibleUploadComponent() {
    (0, _classCallCheck3.default)(this, InvisibleUploadComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onNewFile');
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  InvisibleUploadComponent.prototype.componentDidMount = function componentDidMount() {
    this._fileLoader = new _fileLoader2.default(this.refs.fileInput);
    this._fileLoader.on('file', this._onNewFile);
  };

  /**
   * Gets called when this component is about to be unmounted
   */


  InvisibleUploadComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this._fileLoader.off('file', this._onNewFile);
    this._fileLoader.dispose();
    this._fileLoader = null;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the FileLoader emits a new file
   * @param  {File} file
   * @private
   */


  InvisibleUploadComponent.prototype._onNewFile = function _onNewFile(file) {
    this.props.onNewFile && this.props.onNewFile(file);
  };

  // -------------------------------------------------------------------------- PUBLIC API

  /**
   * Public method for opening the file loader
   */


  InvisibleUploadComponent.prototype.open = function open() {
    this._fileLoader.open();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  InvisibleUploadComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement('input', { type: 'file', bem: 'b:hiddenFileInput', ref: 'fileInput' });
  };

  return InvisibleUploadComponent;
}(_globals.BaseComponent);

exports.default = InvisibleUploadComponent;


InvisibleUploadComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBarButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(TopBarButtonComponent, _BaseComponent);

  function TopBarButtonComponent() {
    (0, _classCallCheck3.default)(this, TopBarButtonComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  TopBarButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    // Build BEM specifier
    var bem = '$e:button';
    if (this.props.style) {
      bem += ' m:' + this.props.style;
    }
    if (this.props.icon) {
      bem += ' m:withIcon';
    }

    // Build icon
    var icon = null;
    if (this.props.icon) {
      icon = _globals.ReactBEM.createElement('img', {
        bem: 'e:icon',
        src: this._getAssetPath(this.props.icon, true) });
    }

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:topBar' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: bem, onClick: this.props.onClick },
        icon,
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label' },
          this.props.label || 'Button'
        )
      )
    );
  };

  return TopBarButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = TopBarButtonComponent;


TopBarButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterManager = function () {
  function FilterManager(options) {
    (0, _classCallCheck3.default)(this, FilterManager);

    this._options = options;
    this._categoriesById = {};
    this._categories = [{
      name: 'retro',
      filters: [_globals.SDK.Filters.CelsiusFilter, _globals.SDK.Filters.ChestFilter, _globals.SDK.Filters.FixieFilter, _globals.SDK.Filters.LeninFilter, _globals.SDK.Filters.PolaFilter, _globals.SDK.Filters.Pola669Filter, _globals.SDK.Filters.K1Filter, _globals.SDK.Filters.K2Filter, _globals.SDK.Filters.K6Filter, _globals.SDK.Filters.KDynamicFilter]
    }, {
      name: 'bw',
      filters: [_globals.SDK.Filters.BWFilter, _globals.SDK.Filters.BWHardFilter, _globals.SDK.Filters.X400Filter]
    }, {
      name: 'summer',
      filters: [_globals.SDK.Filters.FrontFilter, _globals.SDK.Filters.MellowFilter, _globals.SDK.Filters.SemiredFilter, _globals.SDK.Filters.SunnyFilter, _globals.SDK.Filters.TexasFilter]
    }, {
      name: 'winter',
      filters: [_globals.SDK.Filters.MetalFilter, _globals.SDK.Filters.A15Filter, _globals.SDK.Filters.BreezeFilter, _globals.SDK.Filters.FridgeFilter, _globals.SDK.Filters.OrchidFilter, _globals.SDK.Filters.QuoziFilter]
    }, {
      name: 'special',
      filters: [_globals.SDK.Filters.FoodFilter, _globals.SDK.Filters.GlamFilter, _globals.SDK.Filters.LomoFilter, _globals.SDK.Filters.GobblinFilter]
    }];

    this._initCategories();
  }

  /**
   * Initializes the categories
   * @private
   */


  FilterManager.prototype._initCategories = function _initCategories() {
    var _this = this;

    // Should the categories passed in by the user replace the existing ones?
    if (this._options.categories) {
      if (this._options.replaceCategories) {
        this._categories = this._options.categories;
      } else {
        this._categories = _globals.Utils.mergeCategories(this._categories, this._options.categories, 'filters');
      }
    }

    // Remove filters that should not be selectable
    if (this._options.selectableFilters) {
      (function () {
        var newCategories = [];
        _this._categories.forEach(function (category) {
          var filters = category.filters.filter(function (f) {
            return _this._options.selectableFilters.indexOf(f.identifier) !== -1;
          });
          if (filters.length > 0) {
            newCategories.push({
              name: category.name,
              filters: filters
            });
          }
        });
        _this._categories = newCategories;
      })();
    }

    var allCategory = {
      name: 'all',
      filters: this._categories.map(function (c) {
        return c.filters;
      }).reduce(function (a, b) {
        return a.concat(b);
      })
    };
    this._categories.unshift(allCategory);
    this._categories.forEach(function (c) {
      _this._categoriesById[c.name] = c;
    });
  };

  /**
   * Returns the filters for the category with the given name
   * @param  {String} categoryName
   * @return {Object[]}
   */


  FilterManager.prototype.getFiltersForCategory = function getFiltersForCategory(categoryName) {
    if (!this._categoriesById[categoryName]) {
      throw new Error('Unknown filter category \'' + categoryName + '\'');
    }
    return this._categoriesById[categoryName].filters;
  };

  /**
   * Returns the categories
   * @return {Object[]}
   */


  FilterManager.prototype.getCategories = function getCategories() {
    return this._categories;
  };

  return FilterManager;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = FilterManager;

/***/ },
/* 43 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(223);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 45 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 46 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(15)
  , dPs         = __webpack_require__(238)
  , enumBugKeys = __webpack_require__(46)
  , IE_PROTO    = __webpack_require__(51)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(79)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(228).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 49 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f
  , has = __webpack_require__(18)
  , TAG = __webpack_require__(9)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(52)('keys')
  , uid    = __webpack_require__(34);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(12)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 53 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(45);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(27);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(12)
  , core           = __webpack_require__(8)
  , LIBRARY        = __webpack_require__(47)
  , wksExt         = __webpack_require__(57)
  , defineProperty = __webpack_require__(13).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(247);
var global        = __webpack_require__(12)
  , hide          = __webpack_require__(22)
  , Iterators     = __webpack_require__(23)
  , TO_STRING_TAG = __webpack_require__(9)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _adjustments = __webpack_require__(105);

Object.defineProperty(exports, 'adjustments', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_adjustments).default;
  }
});

var _crop = __webpack_require__(115);

Object.defineProperty(exports, 'crop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_crop).default;
  }
});

var _filter = __webpack_require__(117);

Object.defineProperty(exports, 'filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_filter).default;
  }
});

var _focus = __webpack_require__(119);

Object.defineProperty(exports, 'focus', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_focus).default;
  }
});

var _border = __webpack_require__(107);

Object.defineProperty(exports, 'border', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_border).default;
  }
});

var _sticker = __webpack_require__(140);

Object.defineProperty(exports, 'sticker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sticker).default;
  }
});

var _text = __webpack_require__(146);

Object.defineProperty(exports, 'text', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_text).default;
  }
});

var _brush = __webpack_require__(110);

Object.defineProperty(exports, 'brush', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brush).default;
  }
});

var _selectiveBlur = __webpack_require__(134);

Object.defineProperty(exports, 'selectiveBlur', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectiveBlur).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _photoeditorsdk = __webpack_require__(36);

var _photoeditorsdk2 = _interopRequireDefault(_photoeditorsdk);

var _url = __webpack_require__(260);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global XMLHttpRequest */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var TIMEOUT = 5000;
var Promise = _photoeditorsdk2.default.Promise;

var JSONLoader = function () {
  function JSONLoader(url) {
    (0, _classCallCheck3.default)(this, JSONLoader);

    this._url = url;
    this._parsedUrl = _url2.default.parse(this._url, true);
  }

  /**
   * Checks if this request is a JSONP request
   * @return {Boolean}
   */


  JSONLoader.prototype._isJSONPRequest = function _isJSONPRequest() {
    var query = this._parsedUrl.query;

    for (var key in query) {
      var value = query[key];
      if (value === '?') {
        return true;
      }
    }
    return false;
  };

  /**
   * Loads the JSON(P) from the given URL
   * @return {Promise}
   */


  JSONLoader.prototype.load = function load() {
    if (this._isJSONPRequest()) {
      return this._loadJSONP();
    } else {
      return this._loadJSON();
    }
  };

  /**
   * Loads the URL as JSON
   * @return {Promise}
   */


  JSONLoader.prototype._loadJSON = function _loadJSON() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var xhr = void 0;
      if (window.XDomainRequest) {
        xhr = new window.XDomainRequest();

        xhr.onload = function () {
          var json = JSON.parse(xhr.responseText);
          resolve(json);
        };
        xhr.onerror = function (e) {
          reject(e);
        };
      } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (oEvent) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var json = JSON.parse(xhr.responseText);
              resolve(json);
            } else {
              reject(new Error('HTTP Status ' + xhr.status));
            }
          }
        };
      }

      xhr.open('GET', _this._url, true);
      xhr.send();
    });
  };

  /**
   * Loads the URL as JSONP
   * @return {Promise}
   */


  JSONLoader.prototype._loadJSONP = function _loadJSONP() {
    var _this2 = this;

    var failed = false;
    var succeeded = false;

    var fnName = 'pesdk' + Math.round(Math.random() * 99999999999999);
    return new Promise(function (resolve, reject) {
      var node = _this2._createJSONPNode(fnName);
      window[fnName] = function (result) {
        _this2._removeJSONPNode(node);
        if (!failed) {
          succeeded = true;
          resolve(result);
        }
      };

      window.setTimeout(function () {
        if (!succeeded) {
          _this2._removeJSONPNode(node);
          failed = true;
          reject(new Error('Timeout of 5 seconds exceeded.'));
        }
      }, TIMEOUT);
    });
  };

  /**
   * Creates a JSONP <script> node inside the <head> element
   * @param  {String} fnName
   * @return {DOMElement}
   * @private
   */


  JSONLoader.prototype._createJSONPNode = function _createJSONPNode(fnName) {
    var JSONPUrl = this._buildJSONPUrl(fnName);
    var headNode = document.querySelector('head');
    var scriptNode = document.createElement('script');
    scriptNode.src = JSONPUrl;
    headNode.appendChild(scriptNode);
    return scriptNode;
  };

  /**
   * Removes the JSONP <script> node from the <head> element
   * @param  {DOMElement} node
   * @private
   */


  JSONLoader.prototype._removeJSONPNode = function _removeJSONPNode(node) {
    node.parentNode.removeChild(node);
  };

  /**
   * Builds a JSONP url for the given function name
   * @param  {String} fnName
   * @return {String}
   */


  JSONLoader.prototype._buildJSONPUrl = function _buildJSONPUrl(fnName) {
    // Find JSONP parameter
    var query = this._parsedUrl.query;

    var parameter = null;
    for (var param in query) {
      if (query[param] === '?') {
        parameter = param;
        break;
      }
    }

    delete this._parsedUrl.search;
    query[parameter] = fnName;

    return _url2.default.format(this._parsedUrl);
  };

  return JSONLoader;
}();

exports.default = JSONLoader;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _overlayComponent = __webpack_require__(99);

var _overlayComponent2 = _interopRequireDefault(_overlayComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var CategoryDropdownComponent = function (_BaseComponent) {
  (0, _inherits3.default)(CategoryDropdownComponent, _BaseComponent);

  function CategoryDropdownComponent() {
    (0, _classCallCheck3.default)(this, CategoryDropdownComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call(this));

    _this._bindAll('_onButtonClick');

    _this.state = {
      overlayVisible: false
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the color picker button has been clicked
   * @param  {Event} e
   * @private
   */


  CategoryDropdownComponent.prototype._onButtonClick = function _onButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ overlayVisible: !this.state.overlayVisible });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  CategoryDropdownComponent.prototype.renderWithBEM = function renderWithBEM() {
    var Overlay = null;

    if (this.state.overlayVisible) {
      Overlay = _globals.ReactBEM.createElement(_overlayComponent2.default, {
        items: this.props.items,
        selectedItem: this.props.selectedItem,
        onChange: this.props.onChange });
    }

    var className = this.state.overlayVisible ? 'is-active' : null;

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:controls' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:categoryDropdown', className: className, onClick: this._onButtonClick },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this.props.selectedItem.icon }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label' },
          this.props.selectedItem.label
        ),
        Overlay
      )
    );
  };

  return CategoryDropdownComponent;
}(_globals.BaseComponent);

exports.default = CategoryDropdownComponent;


CategoryDropdownComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverviewControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(OverviewControlsComponent, _ControlsComponent);

  function OverviewControlsComponent() {
    (0, _classCallCheck3.default)(this, OverviewControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._hasBackButton = false;
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an item has been clicked
   * @param  {Event} e
   * @private
   */


  OverviewControlsComponent.prototype._onItemClick = function _onItemClick(controls) {
    this.props.onSwitchControls(controls);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items for this control
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  OverviewControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this2 = this;

    var editor = this.context.editor;


    var items = [];
    var makeItem = function makeItem(identifier) {
      var control = editor.controls.get(identifier);
      return _globals.ReactBEM.createElement(
        'li',
        {
          bem: 'e:item',
          key: control.identifier,
          'data-identifier': control.identifier,
          onClick: _this2._onItemClick.bind(_this2, control) },
        _globals.ReactBEM.createElement(
          'bem',
          { specifier: '$b:controls' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: '$e:button m:withLabel' },
            _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: _this2._getAssetPath(control.iconPath, true) }),
            _globals.ReactBEM.createElement(
              'div',
              { bem: 'e:label' },
              _this2._t(control.languageKey)
            )
          )
        )
      );
    };

    var controlsOrder = this.context.options.editor.controlsOrder;

    controlsOrder.forEach(function (groupOrIdentifier) {
      if (Array.isArray(groupOrIdentifier)) {
        (function () {
          var group = groupOrIdentifier;

          var groupItems = [];
          group.forEach(function (identifier) {
            if (!editor.controls.isEnabled(identifier)) return;
            groupItems.push(makeItem(identifier));
          });

          if (groupItems.length) {
            items.push(groupItems);
          }
        })();
      } else {
        var identifier = groupOrIdentifier;
        if (!editor.controls.isEnabled(identifier)) return;
        items.push(makeItem(identifier));
      }
    });

    var finalItems = [];
    items.forEach(function (itemOrGroup) {
      finalItems = finalItems.concat(itemOrGroup);
      if (itemOrGroup !== items[items.length - 1]) {
        finalItems.push(_globals.ReactBEM.createElement('li', { bem: 'e:separator' }));
      }
    });

    return finalItems;
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  OverviewControlsComponent.prototype.renderControls = function renderControls() {
    var listItems = this._renderListItems();

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:list' },
      _globals.ReactBEM.createElement(
        _scrollbarComponent2.default,
        null,
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:list' },
          listItems
        )
      )
    );
  };

  return OverviewControlsComponent;
}(_controlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = OverviewControlsComponent;


OverviewControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontPreviewComponent = function (_BaseComponent) {
  (0, _inherits3.default)(FontPreviewComponent, _BaseComponent);

  function FontPreviewComponent() {
    (0, _classCallCheck3.default)(this, FontPreviewComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */
  FontPreviewComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this._renderCanvas();
  };

  /**
   * Gets called after this component has been updated
   */


  FontPreviewComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderCanvas();
  };

  // -------------------------------------------------------------------------- CANVAS RENDERING

  /**
   * Renders the current font family onto the canvas
   * @private
   */


  FontPreviewComponent.prototype._renderCanvas = function _renderCanvas() {
    var canvas = this.refs.canvas;
    var editor = this.context.editor;

    var sdk = editor.getSDK();

    var pixelRatio = sdk.getPixelRatio();
    canvas.width = canvas.offsetWidth * pixelRatio;
    canvas.height = canvas.offsetHeight * pixelRatio;

    canvas.style.width = canvas.offsetWidth + 'px';
    canvas.style.height = canvas.offsetHeight + 'px';

    var context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = (this.props.fontStyle || '') + ' ' + (this.props.fontWeight || '') + ' ' + 24 * pixelRatio + 'px ' + this.props.fontFamily;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = 'white';

    context.fillText('Abc', canvas.width / 2, canvas.height / 2);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  FontPreviewComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement('canvas', { bem: 'b:fontFamily e:canvas', ref: 'canvas' });
  };

  return FontPreviewComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = FontPreviewComponent;


FontPreviewComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchSuggestionComponent = function (_BaseComponent) {
  (0, _inherits3.default)(SearchSuggestionComponent, _BaseComponent);

  function SearchSuggestionComponent() {
    (0, _classCallCheck3.default)(this, SearchSuggestionComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onClick');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the search suggestion
   * @private
   */


  SearchSuggestionComponent.prototype._onClick = function _onClick() {
    this.props.onClick && this.props.onClick(this.props.searchSuggestion);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  SearchSuggestionComponent.prototype.renderWithBEM = function renderWithBEM() {
    var searchSuggestion = this.props.searchSuggestion;

    var style = {
      backgroundImage: 'url(' + searchSuggestion.coverImage + ')'
    };

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:photoRoll e:libraryList' },
      _globals.ReactBEM.createElement(
        'li',
        { bem: 'e:item', style: style, onClick: this._onClick },
        _globals.ReactBEM.createElement('div', { bem: 'e:overlay' }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:name' },
          searchSuggestion.query
        )
      )
    );
  };

  return SearchSuggestionComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = SearchSuggestionComponent;


SearchSuggestionComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

var _photoComponent = __webpack_require__(161);

var _photoComponent2 = _interopRequireDefault(_photoComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */
var COLUMN_WIDTH = 240;

var PhotoListComponent = function (_BaseComponent) {
  (0, _inherits3.default)(PhotoListComponent, _BaseComponent);

  function PhotoListComponent() {
    (0, _classCallCheck3.default)(this, PhotoListComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._needsStyleFixes = true;
    _this._totalPhotosHeight = 0;
    _this.state = {
      loading: false,
      photos: []
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  PhotoListComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);

    this._loadPhotos();
  };

  /**
   * Gets called when this component has been updated
   */


  PhotoListComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.refs.scrollbar) {
      this.refs.scrollbar.update();
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks on a photo
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo} photo
   * @private
   */


  PhotoListComponent.prototype._onPhotoClicked = function _onPhotoClicked(photo) {
    this.props.onPhotoClicked && this.props.onPhotoClicked(photo);
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Returns the headline for this view
   * @return {String}
   * @private
   */


  PhotoListComponent.prototype._getHeadline = function _getHeadline() {
    return this.props.library.name;
  };

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   */


  PhotoListComponent.prototype.fixStyles = function fixStyles() {
    if (_globals.Utils.Browser.isIElte(11)) {
      var cell = this.refs.cell;

      var list = this.refs.scrollbar.getList();
      if (!(cell && list)) {
        return;
      }
      var cellHeight = cell.offsetHeight;
      list.style.height = cellHeight + 'px';
    }

    if (this.refs.scrollbar) {
      this.refs.scrollbar.update();
    }
  };

  // -------------------------------------------------------------------------- LOADING

  PhotoListComponent.prototype._renderColumns = function _renderColumns() {
    var _this2 = this;

    var photos = this.state.photos;

    var columnCount = 3;
    var columnHeights = [];

    var columns = [];
    for (var i = 0; i < columnCount; i++) {
      columns.push([]);
      columnHeights.push(0);
    }

    photos.forEach(function (photo) {
      var dimensions = photo.dimensions;

      // Find shortest column

      var shortestColumnIndex = null;
      var shortestColumnHeight = Infinity;
      for (var _i = 0; _i < columnCount; _i++) {
        if (columnHeights[_i] < shortestColumnHeight) {
          shortestColumnIndex = _i;
          shortestColumnHeight = columnHeights[_i];
        }
      }

      columns[shortestColumnIndex].push(_globals.ReactBEM.createElement(_photoComponent2.default, {
        photo: photo.obj,
        onClick: _this2._onPhotoClicked.bind(_this2, photo.obj) }));
      columnHeights[shortestColumnIndex] += dimensions.y;
    });

    return columns;
  };

  /**
   * Renders the content for this component
   * @return {ReactBEM.Element}
   * @private
   */


  PhotoListComponent.prototype._renderPhotos = function _renderPhotos() {
    var columns = this._renderColumns();
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:photoRoll e:row m:fullHeight' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell', ref: 'cell' },
        _globals.ReactBEM.createElement(
          _scrollbarComponent2.default,
          { direction: 'vertical', ref: 'scrollbar' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:container', ref: 'container' },
            _globals.ReactBEM.createElement(
              'div',
              { bem: 'e:innerContainer' },
              _globals.ReactBEM.createElement(
                'div',
                { bem: 'e:headline' },
                this._getHeadline()
              ),
              _globals.ReactBEM.createElement(
                'bem',
                { specifier: 'e:photoList' },
                columns.map(function (column) {
                  return _globals.ReactBEM.createElement(
                    'ul',
                    { bem: '$e:list' },
                    column
                  );
                })
              )
            )
          )
        )
      )
    );
  };

  /**
   * Loads the photos
   * @private
   */


  PhotoListComponent.prototype._loadPhotos = function _loadPhotos() {
    var _this3 = this;

    this._totalPhotosHeight = 0;

    var modal = _modalManager2.default.instance.displayProgress(this._t('loading.loading'));
    var PhotoRollProvider = this.context.options.photoRoll.provider;
    var provider = new PhotoRollProvider();

    provider.getPhotosForLibrary(this.props.library).then(function (photos) {
      return _this3._preloadPhotos(photos, modal);
    }).then(function (photos) {
      _this3.setState({ photos: photos, loading: false });
      modal.close();
    }).catch(function (e) {
      console.log(e);
      modal.close();
      _modalManager2.default.instance.displayError(_this3._t('errors.photoRollLoadFail.title'), _this3._t('errors.photoRollLoadFail.text', { error: e.message }));
    });
  };

  /**
   * Preloads the photos
   * @param {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo[]} photos
   * @param {Modal} modal
   * @return {Promise}
   * @private
   */


  PhotoListComponent.prototype._preloadPhotos = function _preloadPhotos(photos, modal) {
    var _this4 = this;

    var totalPhotos = photos.length;
    var loadedPhotos = 0;
    return Promise.all(photos.map(function (photo) {
      return _this4._preloadPhoto(photo).then(function (image) {
        var photoDimensions = new _globals.Vector2(image.width, image.height);
        photoDimensions.multiply(COLUMN_WIDTH / image.width);
        _this4._totalPhotosHeight += photoDimensions.y;

        loadedPhotos++;
        modal.setData({ progress: loadedPhotos / totalPhotos });

        return {
          obj: photo,
          dimensions: photoDimensions
        };
      });
    }));
  };

  /**
   * Preloads the given photo
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo} photo
   * @return {Promise}
   * @private
   */


  PhotoListComponent.prototype._preloadPhoto = function _preloadPhoto(photo) {
    return new Promise(function (resolve, reject) {
      var image = new window.Image();
      image.addEventListener('load', function () {
        resolve(image);
      });
      image.addEventListener('error', function () {
        resolve(image);
      });
      image.src = photo.urls.thumb;
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  PhotoListComponent.prototype.renderWithBEM = function renderWithBEM() {
    if (!this.state.loading) {
      return this._renderPhotos();
    } else {
      return _globals.ReactBEM.createElement('div', null);
    }
  };

  return PhotoListComponent;
}(_globals.BaseComponent);

exports.default = PhotoListComponent;


PhotoListComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(76);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var elementSeparator = '__';
var modifierSeparator = '--';
var blockPrefix = 'pesdk-react-';

var BEMObject = function () {
  function BEMObject(parent, type, name) {
    (0, _classCallCheck3.default)(this, BEMObject);

    this._parent = parent;
    this._type = type;
    this._name = name;
  }

  /**
   * Creates a BEMObject of type "element" that has this element as parent
   * @param  {String} name
   * @return {BEMObject}
   */


  BEMObject.prototype.element = function element(name) {
    return new BEMObject(this, 'element', name);
  };

  /**
   * Creates a BEMObject of type "modifier" that has this element as parent
   * @param  {String} name
   * @return {BEMObject}
   */


  BEMObject.prototype.modifier = function modifier(name) {
    return new BEMObject(this, 'modifier', name);
  };

  /**
   * Builds the class name for this BEMObject
   * @return {String}
   */


  (0, _createClass3.default)(BEMObject, [{
    key: 'str',
    get: function get() {
      var response = this._parent ? this._parent.str : '';
      switch (this._type) {
        case 'block':
          response += '' + blockPrefix + this._name;
          break;
        case 'element':
          response += '' + elementSeparator + this._name;
          break;
        case 'modifier':
          response += '' + modifierSeparator + this._name;
          break;
      }
      return response;
    }
  }]);
  return BEMObject;
}();

exports.default = {
  /**
   * Creates a BEMObject of type "block" that has this element as parent
   * @param  {String} name
   * @return {BEMObject}
   */
  block: function block(name) {
    return new BEMObject(null, 'block', name);
  }
};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _exporter = __webpack_require__(182);

var _exporter2 = _interopRequireDefault(_exporter);

var _imageResizer = __webpack_require__(189);

var _imageResizer2 = _interopRequireDefault(_imageResizer);

var _operations = __webpack_require__(180);

var _operations2 = _interopRequireDefault(_operations);

var _controls = __webpack_require__(177);

var _controls2 = _interopRequireDefault(_controls);

var _features = __webpack_require__(178);

var _features2 = _interopRequireDefault(_features);

var _zoom = __webpack_require__(181);

var _zoom2 = _interopRequireDefault(_zoom);

var _history = __webpack_require__(179);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Editor class is an interface to the SDK, managing operations, rendering,
 * history, zoom etc.
 * @class
 * @memberof PhotoEditorSDK.UI.ReactUI
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Editor = function (_EventEmitter) {
  (0, _inherits3.default)(Editor, _EventEmitter);

  function Editor(ui, options, mediator) {
    var shallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    (0, _classCallCheck3.default)(this, Editor);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._ui = ui;
    _this._options = options;
    _this._mediator = mediator;
    _this._ready = false;
    _this._padding = [0, 0, 0, 0];

    if (!shallow) {
      _this._initSDK();

      _this._onZoom = _this._onZoom.bind(_this);
      _this._onUndo = _this._onUndo.bind(_this);
      _this.operations = new _operations2.default(_this, _this._sdk, _this._mediator);

      _this.history = new _history2.default(_this, _this._sdk, _this._mediator);
      _this.history.on('undo', _this._onUndo);
      _this.zoom = new _zoom2.default(_this, _this._sdk, _this._mediator);
      _this.zoom.on('set', _this._onZoom);

      _this._initSerializers();
    }

    _this.controls = new _controls2.default(_this, _this._sdk, _this._mediator);
    _this.features = new _features2.default(_this, _this._sdk, _this._mediator);

    // Rendering
    _this._running = false;
    _this._renderRequested = true;
    _this._renderCallbacks = [];
    _this._animationFrameRequest = null;

    _this.render = _this.render.bind(_this);
    _this._tick = _this._tick.bind(_this);
    return _this;
  }

  // -------------------------------------------------------------------------- INITIALIZATION

  /**
   * Sets the given image to be rendered. If the image needs to be resized to fit into a
   * WebGL texture or to match the `maxMegaPixels` option, resizing is done before setting
   * the image.
   * @param {Image} image
   * @param {Boolean} resetEditor [description]
   */


  Editor.prototype.setImage = function setImage() {
    var _this2 = this;

    var image = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._options.editor.image;
    var resetEditor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var renderer = this._sdk.getRenderer();
    var initialDimensions = new _globals.Vector2(image.width, image.height);
    var maxPixels = this.getMaxMegapixels() * 1000000;
    var maxDimensions = renderer.getMaxDimensions();

    if (resetEditor) {
      this.reset();
    }

    var imageResizer = new _imageResizer2.default(image, maxPixels, maxDimensions);
    var exif = null;

    var done = function done(image) {
      var dimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialDimensions;
      var resizeReason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _this2._setImage(image, exif, dimensions);

      _this2._initWatermark();

      _this2._ready = true;
      _this2.emit('ready');
    };

    if (!imageResizer.needsResize()) {
      done(image);
    } else {
      this.emit('resize');
      exif = this._sdk.parseExif(image);
      imageResizer.resize().then(function (_ref) {
        var canvas = _ref.canvas,
            dimensions = _ref.dimensions,
            reason = _ref.reason;

        // Flag canvas as JPEG so that export will recognize that
        // it needs to restore EXIF data
        canvas.src = 'data:image/jpeg;base64,';

        _this2.emit('resized', { dimensions: dimensions, reason: reason });
        done(canvas, dimensions, reason);
      });
    }
  };

  /**
   * Initializes the watermark operation
   * @private
   */


  Editor.prototype._initWatermark = function _initWatermark() {
    if (this._options.editor.watermarkImage) {
      this._watermarkOperation = this.operations.getOrCreate('watermark', {
        image: this._options.editor.watermarkImage
      });
    }
  };

  /**
   * Initializes the SDK
   * @private
   */


  Editor.prototype._initSDK = function _initSDK() {
    var _options = this._options,
        logLevel = _options.logLevel,
        displayWelcomeMessage = _options.displayWelcomeMessage,
        debug = _options.debug;
    var _options$editor = this._options.editor,
        smoothDownscaling = _options$editor.smoothDownscaling,
        smoothUpscaling = _options$editor.smoothUpscaling,
        preferredRenderer = _options$editor.preferredRenderer,
        pixelRatio = _options$editor.pixelRatio;

    var rendererOptions = {
      logLevel: logLevel,
      debug: debug,
      displayWelcomeMessage: displayWelcomeMessage,
      pixelRatio: pixelRatio,
      smoothDownscaling: smoothDownscaling,
      smoothUpscaling: smoothUpscaling,
      transparent: true
    };
    this._sdk = new _globals.SDK(preferredRenderer, rendererOptions);
  };

  // -------------------------------------------------------------------------- ZOOMING

  /**
   * Gets called after a new zoom level has been set. Re-renders the editor.
   * @param  {Number} zoom
   * @param  {Function} [callback]
   * @private
   */


  Editor.prototype._onZoom = function _onZoom(zoom) {
    var _this3 = this;

    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    this.fixOffset();
    this.render(function () {
      _this3._mediator.emit(_globals.Constants.EVENTS.ZOOM_DONE);
      callback && callback();
    });
  };

  /**
   * Gets called after an undo happened
   * @private
   */


  Editor.prototype._onUndo = function _onUndo() {
    this.render();
  };

  /**
   * Returns the current rotation
   * @return {Number}
   */


  Editor.prototype.getRotation = function getRotation() {
    return this._sdk.getRotation();
  };

  /**
   * Sets the rotation to the given value
   * @param {Number} rotation
   */


  Editor.prototype.setRotation = function setRotation(rotation) {
    this._sdk.setRotation(rotation);
  };

  /**
   * Returns the current sprite scale
   * @return {Number}
   */


  Editor.prototype.getSpriteScale = function getSpriteScale() {
    return this._sdk.getSpriteScale();
  };

  /**
   * Sets the sprite scale to the given value
   * @param {Number} spriteScale
   */


  Editor.prototype.setSpriteScale = function setSpriteScale(spriteScale) {
    this._sdk.setSpriteScale(spriteScale);
  };

  // -------------------------------------------------------------------------- MISC PRIVATE API

  /**
   * Checks if the control with the tool identifier is enabled
   * @param  {String}  identifier
   * @return {Boolean}
   */


  Editor.prototype.isToolEnabled = function isToolEnabled(identifier) {
    return this._options.editor.tools.indexOf(identifier) !== -1;
  };

  /**
   * Returns the maximum mega pixels
   * @return {Number}
   * @private
   */


  Editor.prototype.getMaxMegapixels = function getMaxMegapixels() {
    var maxMegaPixels = this._options.editor.maxMegaPixels;

    return _globals.Utils.isMobile() ? maxMegaPixels.mobile : maxMegaPixels.desktop;
  };

  // -------------------------------------------------------------------------- MISC PUBLIC API

  /**
   * Returns the output sprite's current dimensions
   * @param {Boolean} incorporateSpriteScale = false
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Editor.prototype.getOutputDimensions = function getOutputDimensions() {
    var incorporateSpriteScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return this._sdk.getOutputDimensions(incorporateSpriteScale);
  };

  /**
   * Returns the output texture's current dimensions
   * @param  {Boolean} incorporateSpriteScale = false
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Editor.prototype.getOutputTextureDimensions = function getOutputTextureDimensions() {
    var incorporateSpriteScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return this._sdk.getOutputTextureDimensions(incorporateSpriteScale);
  };

  /**
   * Returns the final dimensions that the input image would have
   * after all existing operations have been applied
   * @param {Boolean} incorporateSpriteScale = false
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Editor.prototype.getFinalDimensions = function getFinalDimensions() {
    var incorporateSpriteScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return this._sdk.getFinalDimensions(incorporateSpriteScale);
  };

  /**
   * Returns the canvas dimensions
   * @param  {Boolean} subtractPadding = true
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Editor.prototype.getCanvasDimensions = function getCanvasDimensions() {
    var subtractPadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var canvas = this._sdk.getCanvas();
    var dimensions = new _globals.Vector2(canvas.offsetWidth, canvas.offsetHeight);
    if (subtractPadding) {
      dimensions.subtract(this._padding[1] + this._padding[3], this._padding[0] + this._padding[2]);
    }
    return dimensions;
  };

  /**
   * Sets the given image
   * @param {Image} image
   * @param {PhotoEditorSDK.EXIF} [exif]
   * @param {PhotoEditorSDK.Math.Vector2} [dimensions]
   * @private
   */


  Editor.prototype._setImage = function _setImage() {
    var image = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._options.editor.image;
    var exif = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var dimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    // Invalidate caches
    this._sdk.setAllOperationsToDirty();

    this._options.editor.image = image;
    this._sdk.setImage(image, exif, dimensions);

    this.zoom.set('auto');

    this.emit('new-image');
  };

  /**
   * Exports an image
   * @param {Boolean} download = false
   * @return {Promise}
   */


  Editor.prototype.export = function _export() {
    var _this4 = this;

    var download = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (this._watermarkOperation) {
      this._watermarkOperation.setEnabled(false);
    }

    // Invalidate caches
    this._sdk.setAllOperationsToDirty();

    var options = this._options.editor.export;
    var exporter = new _exporter2.default(this._sdk, options, download);
    return exporter.export().then(function (output) {
      _this4.emit('export', output);
      _this4._mediator.emit(_globals.Constants.EVENTS.EXPORT, output, _this4);

      if (_this4._watermarkOperation) {
        _this4._watermarkOperation.setEnabled(true);
        _this4._sdk.render();
      }

      // Invalidate caches
      _this4._sdk.setAllOperationsToDirty();

      return output;
    });
  };

  // -------------------------------------------------------------------------- SERIALIZATION

  /**
   * Initializes the serializers and deserializers
   * @private
   */


  Editor.prototype._initSerializers = function _initSerializers() {
    this._serializers = {
      '1.0.0': __webpack_require__(196).default,
      '1.0.1': __webpack_require__(198).default
    };
  };

  /**
   * Serializes the editor state for the given version
   * @param  {Object} options = {}
   * @param  {String} version = '1.0.1'
   * @return {Promise}
   */


  Editor.prototype.serialize = function serialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1.0.1';

    var Serializer = this._serializers[version];
    if (!Serializer) {
      return _globals.Promise.reject(new Error('No serializer for version ' + version + ' found.'));
    }
    var serializer = new Serializer(this);
    return serializer.serialize(options);
  };

  /**
   * Deserializes the given data
   * @param  {Object} data
   * @return {Promise}
   */


  Editor.prototype.deserialize = function deserialize(data) {
    var Serializer = this._serializers[data.version];
    if (!Serializer) {
      return _globals.Promise.reject(new Error('No serializer for version ' + data.version + ' found.'));
    }
    var serializer = new Serializer(this);
    return serializer.deserialize(data);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Applies the rendering offset
   * @private
   */


  Editor.prototype._applyOffset = function _applyOffset() {
    var offset = this._offset.clone();

    offset.x -= this._padding[1] / 2;
    offset.x += this._padding[3] / 2;

    offset.y -= this._padding[2] / 2;
    offset.y += this._padding[0] / 2;

    this._sdk.setOffset(offset);
  };

  /**
   * Starts the render loop
   */


  Editor.prototype.start = function start() {
    this.zoom.set('auto');
    this._animationFrameRequest = (0, _globals.requestAnimationFrame)(this._tick);
  };

  /**
   * Stops the render loop
   */


  Editor.prototype.stop = function stop() {
    this._running = false;
    if (this._animationFrameRequest) {
      (0, _globals.cancelAnimationFrame)(this._animationFrameRequest);
      this._renderCallbacks = [];
    }
  };

  /**
   * Requests a render, adds `callback` to the render callbacks
   * @param  {Function} [callback]
   */


  Editor.prototype.render = function render(callback) {
    this._renderRequested = true;
    if (callback) {
      this._renderCallbacks.push(callback);
    }
  };

  /**
   * Sets the offset to the given one
   * @param {PhotoEditorSDK.Math.Vector2} offset
   */


  Editor.prototype.setOffset = function setOffset(offset) {
    this._offset = this._clampOffset(offset);
  };

  /**
   * Returns the current offset
   * @returns {PhotoEditorSDK.Math.Vector2}
   */


  Editor.prototype.getOffset = function getOffset() {
    return this._offset;
  };

  /**
   * Makes sure the image stays inside the viewport
   */


  Editor.prototype.fixOffset = function fixOffset() {
    this.setOffset(this._sdk.getOffset());
  };

  /**
   * Fixes the given offset to make sure the image stays inside the viewport
   * @private
   */


  Editor.prototype._clampOffset = function _clampOffset(offset) {
    var renderer = this._sdk.getRenderer();
    var rendererDimensions = new _globals.Vector2(renderer.getWidth(), renderer.getHeight());
    var outputDimensions = this._sdk.getOutputDimensions(false);

    var minOffset = rendererDimensions.clone().subtract(outputDimensions).divide(2).clamp(null, new _globals.Vector2(0, 0));

    var maxOffset = outputDimensions.clone().subtract(rendererDimensions).divide(2).clamp(new _globals.Vector2(0, 0), null);

    var newOffset = offset.clone().clamp(minOffset, maxOffset).round();

    return newOffset;
  };

  /**
   * Gets called when an animation frame is being processed. Renders the
   * canvas if necessary, requests another animation frame callbacks
   * @private
   */


  Editor.prototype._tick = function _tick() {
    var _this5 = this;

    if (this._renderRequested) {
      (function () {
        var callbacks = _this5._renderCallbacks.slice(0);
        _this5._renderCallbacks = [];

        _this5._render().then(function () {
          callbacks.forEach(function (r) {
            return r();
          });
          _this5._animationFrameRequest = (0, _globals.requestAnimationFrame)(_this5._tick);
        }).catch(function (e) {
          _globals.Log.printError(e);
        });
        _this5._renderRequested = false;
      })();
    } else {
      this._animationFrameRequest = (0, _globals.requestAnimationFrame)(this._tick);
    }
  };

  /**
   * Triggers a render
   * @private
   */


  Editor.prototype._render = function _render() {
    var _this6 = this;

    if (!this._ready) return _globals.Promise.resolve();

    this._applyOffset();

    return this._sdk.render().then(function () {
      _this6._lastOutputBounds = _this6._sdk.getSprite().getBounds();
    }).catch(function (e) {
      _this6.emit('render-error', e);
    });
  };

  /**
   * Resets everything
   */


  Editor.prototype.reset = function reset() {
    this._sdk.reset();

    this.history.reset();
    this.operations.reset();
  };

  // -------------------------------------------------------------------------- DISPOSAL

  /**
   * Cleans this instance up
   */


  Editor.prototype.dispose = function dispose() {
    this.stop();

    this._sdk.dispose();
  };

  // -------------------------------------------------------------------------- GETTERS / SETTERS

  /**
   * Checks if the Editor is ready to render
   * @return {Boolean}
   */


  Editor.prototype.isReady = function isReady() {
    return this._ready;
  };

  /**
   * Returns the renderer
   * @return {PhotoEditorSDK.Engine.BaseRenderer}
   */


  Editor.prototype.getRenderer = function getRenderer() {
    return this._sdk.getRenderer();
  };

  /**
   * Returns the SDK
   * @return {PhotoEditorSDK}
   */


  Editor.prototype.getSDK = function getSDK() {
    return this._sdk;
  };

  /**
   * Returns the input image dimensions
   * @return {PhotoEditorSDK.Math.Vector2}s
   */


  Editor.prototype.getInputDimensions = function getInputDimensions() {
    return this._sdk.getInputDimensions();
  };

  /**
   * Returns the padding values
   * @return {Number[]}
   */


  Editor.prototype.getPadding = function getPadding() {
    return this._padding;
  };

  /**
   * Sets the padding (top, right, bottom, left)
   * @param {Number[]} padding
   */


  Editor.prototype.setPadding = function setPadding(padding) {
    if (!padding) {
      this._padding = [0, 0, 0, 0];
    } else {
      this._padding = padding;
    }
  };

  /**
   * Returns the image
   * @return {Image}
   */


  Editor.prototype.getImage = function getImage() {
    return this._options.editor.image;
  };

  /**
   * Returns the options
   * @return {Object}
   */


  Editor.prototype.getOptions = function getOptions() {
    return this._options;
  };

  /**
   * Returns the UI
   * @return {PhotoEditorSDK.UI.ReactUI}
   */


  Editor.prototype.getUI = function getUI() {
    return this._ui;
  };

  /**
   * Broadcasts a crop to all operations that need to be changed
   * @param  {PhotoEditorSDK.Operations.CropOperation} cropOperation
   * @param  {Object} options
   */


  Editor.prototype.broadcastCrop = function broadcastCrop(cropOperation, options) {
    var _this7 = this;

    var croppableOperations = ['sprite', 'selective-blur'];
    croppableOperations.forEach(function (identifier) {
      var operation = _this7.operations.get(identifier);
      if (!operation) {
        return;
      }
      operation.crop(cropOperation, options);
    });
  };

  /**
   * Broadcasts a flip to all operations that need to be changed
   * @param  {String} direction
   */


  Editor.prototype.broadcastFlip = function broadcastFlip(direction) {
    var _this8 = this;

    var flippableOperations = ['linear-focus', 'radial-focus', 'sprite', 'selective-blur'];
    flippableOperations.forEach(function (identifier) {
      var operation = _this8.operations.get(identifier);
      if (!operation) {
        return;
      }
      operation.flip(direction);
    });
  };

  /**
   * Broadcasts a rotation to all operations that need to be changed
   * @param  {Number} degrees
   */


  Editor.prototype.broadcastRotate = function broadcastRotate(degrees) {
    var _this9 = this;

    var flippableOperations = ['crop', 'linear-focus', 'radial-focus', 'sprite', 'selective-blur'];
    flippableOperations.forEach(function (identifier) {
      var operation = _this9.operations.get(identifier);
      if (!operation) {
        return;
      }
      operation.rotate(degrees);
    });
  };

  return Editor;
}(_globals.EventEmitter);

exports.default = Editor;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.SDK.OptionType; /*
                                           * This file is part of PhotoEditorSDK.
                                           *
                                           * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                                           * All rights reserved.
                                           *
                                           * Redistribution and use in source and binary forms, without
                                           * modification, are permitted provided that the following license agreement
                                           * is approved and a legal/financial contract was signed by the user.
                                           * The license agreement can be found under following link:
                                           *
                                           * https://www.photoeditorsdk.com/LICENSE.txt
                                           */

var Font = function (_SDK$Configurable) {
  (0, _inherits3.default)(Font, _SDK$Configurable);

  function Font() {
    (0, _classCallCheck3.default)(this, Font);
    return (0, _possibleConstructorReturn3.default)(this, _SDK$Configurable.apply(this, arguments));
  }

  return Font;
}(_globals.SDK.Configurable);

/**
 * Specifies the available options for the Font class
 * @type {Object}
 * @ignore
 */


exports.default = Font;
Font.prototype.availableOptions = {
  name: { type: OptionType.STRING, required: true },
  fontWeight: { type: OptionType.ALL, default: 400 },
  fontFamily: { type: OptionType.STRING, required: true },
  fontStyle: { type: OptionType.STRING, default: 'normal' },
  provider: { type: OptionType.STRING, available: ['google'] },
  default: { type: OptionType.BOOLEAN, default: false }
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickerManager = function () {
  function StickerManager(options) {
    (0, _classCallCheck3.default)(this, StickerManager);

    this._options = options;
    this._categoriesById = {};
    this._categories = [];

    this._initCategories();
  }

  /**
   * Initializes the categories
   * @private
   */


  StickerManager.prototype._initCategories = function _initCategories() {
    var _this = this;

    var _options = this._options,
        replaceCategories = _options.replaceCategories,
        categories = _options.categories;

    var defaultCategories = _globals.Constants.DEFAULTS.STICKER_CATEGORIES;

    if (!categories) {
      this._categories = defaultCategories.slice(0);
    } else {
      if (replaceCategories) {
        this._categories = categories.slice(0);
      } else {
        this._categories = _globals.Utils.mergeCategories(defaultCategories, categories, 'stickers');
      }
    }

    var allCategory = {
      name: 'all',
      stickers: this._categories.map(function (c) {
        return c.stickers;
      }).reduce(function (a, b) {
        return a.concat(b);
      })
    };
    this._categories.unshift(allCategory);

    // Build cat id => category hash
    this._categoriesById = {};
    this._categories.forEach(function (c) {
      _this._categoriesById[c.name] = c;
    });
  };

  /**
   * Returns the stickers for the category with the given name
   * @param  {String} categoryName
   * @return {Object[]}
   */


  StickerManager.prototype.getStickersForCategory = function getStickersForCategory(categoryName) {
    if (!this._categoriesById[categoryName]) {
      throw new Error('Unknown sticker category \'' + categoryName + '\'');
    }
    return this._categoriesById[categoryName].stickers;
  };

  /**
   * Returns the categories
   * @return {Object[]}
   */


  StickerManager.prototype.getCategories = function getCategories() {
    return this._categories;
  };

  return StickerManager;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = StickerManager;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(213);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(32);

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(77);

var _classnames2 = _interopRequireDefault(_classnames);

var _bem = __webpack_require__(67);

var _bem2 = _interopRequireDefault(_bem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
} /*
   * This file is part of PhotoEditorSDK.
   *
   * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, without
   * modification, are permitted provided that the following license agreement
   * is approved and a legal/financial contract was signed by the user.
   * The license agreement can be found under following link:
   *
   * https://www.photoeditorsdk.com/LICENSE.txt
   */

var BEM_TYPES = {
  b: 'block',
  e: 'element',
  m: 'modifier'
};
var ReactBEM = {
  /**
   * Parses the given ReactBEM specifier and returns an array of
   * BEM information (type, name, pass)
   * @param  {string} specifier
   * @return {Array.<Object>}
   * @private
   */
  _parseBemSpecifier: function _parseBemSpecifier(specifier) {
    if (!specifier) return [];

    var parts = specifier.split(' ');
    var data = parts.map(function (part) {
      var match = part.match(/^(\$)?([bem]):(.*)$/i);
      if (!match) {
        throw new Error('Invalid BEM specifier: ' + part);
      }

      var pass = typeof match[1] !== 'undefined';
      var type = BEM_TYPES[match[2]];
      var name = match[3];
      return { type: type, name: name, pass: pass };
    });
    return data;
  },


  /**
   * Returns the BEM info for the given node
   * @param  {Object} node
   * @return {Object}
   * @private
   */
  _getBemInfoForNode: function _getBemInfoForNode(node) {
    var isBemNode = node.type === 'bem';
    var specifier = isBemNode ? node.props.specifier : node.props.bem;

    if (isBemNode && !specifier) {
      throw new Error('<bem> elements should always have a `specifier` property');
    }

    var data = this._parseBemSpecifier(specifier);

    // <bem> nodes pass all bem information to the children
    if (isBemNode) {
      data.forEach(function (obj) {
        obj.pass = true;
      });
    }

    return { data: data, isBemNode: isBemNode };
  },


  /**
   * Used in React.Component's `render` method
   *
   * @param  {String} type
   * @param  {Object} props
   * @param  {Array.<Object>} [...children]
   * @return {Object}
   */
  createElement: function createElement(type, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    props = props || {};
    children = children.filter(function (child) {
      return child !== null && typeof child !== 'undefined';
    });
    return { type: type, props: props, children: children };
  },


  /**
   * Checks whether we can apply a bem class to the given node
   * @param  {?}  node
   * @return {Boolean}
   * @private
   */
  _isNodeBEMable: function _isNodeBEMable(node) {
    return node !== null && (typeof node === 'undefined' ? 'undefined' : (0, _typeof3.default)(node)) === 'object' && !_react2.default.isValidElement(node);
  },


  /**
   * Sets the BEM class for the given node. Iterates through its
   * children and sets their BEM class as well
   * @param  {Object} node
   * @return {Object}
   * @private
   */
  _applyBEMClasses: function _applyBEMClasses(node) {
    var _this = this;

    if (!this._isNodeBEMable(node)) return node;

    var classNames = node.props.className ? [node.props.className] : [];

    // Prepare BEM objects
    var bemInfo = this._getBemInfoForNode(node);
    var ownBemObject = node.props.__bemObject;
    var childrenBemObject = node.props.__bemObject;
    bemInfo.data.forEach(function (obj) {
      if (obj.type === 'block') {
        ownBemObject = _bem2.default.block(obj.name);
        if (obj.pass) {
          childrenBemObject = _bem2.default.block(obj.name);
        }
        classNames.push(ownBemObject.str);
      } else if (obj.type === 'element') {
        if (!ownBemObject) {
          throw new Error('Tried to create an element, but no parent block has been found.');
        }

        ownBemObject = ownBemObject.element(obj.name);
        if (obj.pass) {
          childrenBemObject = childrenBemObject.element(obj.name);
        }
        classNames.push(ownBemObject.str);
      } else if (obj.type === 'modifier') {
        if (!ownBemObject) {
          throw new Error('Tried to create a modifier, but no parent block has been found.');
        }

        if (obj.pass) {
          childrenBemObject = childrenBemObject.modifier(obj.name);
        }
        classNames.push(ownBemObject.modifier(obj.name).str);
      }
    });

    // Apply classname (if necessary)
    var className = (0, _classnames2.default)(classNames);
    if (className) {
      node.props.className = className;
    }

    node.children = flatten(node.children);

    // Pass `childrenBemObject` to child nodes
    node.children.forEach(function (child) {
      if (!_this._isNodeBEMable(child)) return;
      child.props.__bemObject = childrenBemObject;
    });

    // Apply BEM objects to children
    node.children = node.children.map(function (child) {
      return _this._applyBEMClasses(child);
    });

    node.children = flatten(node.children);

    // Remove unnecessary props
    delete node.props.__bemObject;
    delete node.props.bem;

    if (bemInfo.isBemNode) {
      if (node.children instanceof Array && node.children.length === 1) {
        node = node.children[0];
      } else {
        node = node.children;
      }
    }

    return node;
  },


  /**
   * Transforms the given ReactBEM element and its children into
   * actual ReactJS elements
   * @param  {Object} node
   * @return {React.Element}
   */
  _transformToReact: function _transformToReact(node) {
    var _this2 = this;

    if (!this._isNodeBEMable(node)) return node;

    node.children = node.children.map(function (child) {
      return _this2._transformToReact(child);
    });

    return _react2.default.createElement.apply(_react2.default, [node.type, node.props].concat((0, _toConsumableArray3.default)(node.children)));
  },


  /**
   * Transforms the given ReactBEM object and its children
   * @param  {Object} root
   * @return {React.Element}
   */
  transform: function transform(root) {
    root = this._applyBEMClasses(root);

    // Root node should be a single node, not an array. Returning the array
    // here will cause React to throw an error saying that this is a no-go
    /* istanbul ignore next */
    if (root instanceof Array) {
      return root;
    }

    root = this._transformToReact(root);
    return root;
  }
};

exports.default = ReactBEM;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

var _filterManager = __webpack_require__(42);

var _filterManager2 = _interopRequireDefault(_filterManager);

var _stickerManager = __webpack_require__(70);

var _stickerManager2 = _interopRequireDefault(_stickerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Deserializer = function () {
  function Deserializer(editor, data) {
    (0, _classCallCheck3.default)(this, Deserializer);

    this._editor = editor;
    this._data = data;

    this._filterManager = new _filterManager2.default(this._editor._options);
    this._stickerManager = new _stickerManager2.default(this._editor._options);
  }

  /**
   * Deserializes the given data
   * @return {Promise}
   */


  Deserializer.prototype.deserialize = function deserialize() {
    var _this = this;

    return this._validateVersion().then(function () {
      return _this._deserializeInputImage();
    }).then(function () {
      return _this._deserializeOperations();
    }).then(function () {
      return _this._editor.zoom.set('auto');
    });
  };

  /**
   * Validates the version
   * @return {Promise}
   */


  Deserializer.prototype._validateVersion = function _validateVersion() {
    if (this._data.version !== '1.0.0') {
      return Promise.reject(new Error('Invalid version ' + this._data.version + ', expected 1.0.0'));
    }
    return Promise.resolve();
  };

  /**
   * Deserializes the input image (if present)
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeInputImage = function _deserializeInputImage() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var _data$inputImage = _this2._data.inputImage,
          data = _data$inputImage.data,
          type = _data$inputImage.type;

      if (data && type) {
        (function () {
          var image = new window.Image();
          image.addEventListener('load', function () {
            _this2._editor.setImage(image);
            resolve();
          });
          image.src = 'data:' + type + ';base64,' + data;
        })();
      } else {
        resolve();
      }
    });
  };

  /**
   * Deserializes the operations
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeOperations = function _deserializeOperations() {
    var _this3 = this;

    var promises = this._data.operations.map(function (operation) {
      switch (operation.type) {
        case 'crop':
          return _this3._deserializeCropOperation(operation);
        case 'orientation':
          return _this3._deserializeOrientationOperation(operation);
        case 'filter':
          return _this3._deserializeFilterOperation(operation);
        case 'adjustments':
          return _this3._deserializeAdjustmentsOperation(operation);
        case 'sprite':
          return _this3._deserializeSpriteOperation(operation);
        case 'focus':
          return _this3._deserializeFocusOperation(operation);
        case 'border':
          return _this3._deserializeBorderOperation(operation);
      }
    });

    return Promise.all(promises);
  };

  /**
   * Deserializes the given crop operation
   * @param  {Object} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeCropOperation = function _deserializeCropOperation(operation) {
    var options = operation.options;
    var scale = options.scale,
        rotation = options.rotation;

    var start = _globals.Vector2.fromObject(options.start);
    var end = _globals.Vector2.fromObject(options.end);

    // Normalize rotation
    if (rotation > Math.PI) {
      rotation -= Math.PI * 2;
    }

    this._editor.operations.getOrCreate('crop', {
      start: start, end: end, scale: scale, rotation: rotation
    });
    return Promise.resolve();
  };

  /**
   * Deserializes the given orientation operation
   * @param  {Object} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeOrientationOperation = function _deserializeOrientationOperation(operation) {
    var options = operation.options;

    this._editor.operations.getOrCreate('orientation', options);
  };

  /**
   * Deserializes the given filter operation
   * @param  {Object} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeFilterOperation = function _deserializeFilterOperation(operation) {
    var options = operation.options;


    var filters = this._filterManager.getFiltersForCategory('all');
    var FilterClass = void 0;
    for (var i = 0; i < filters.length; i++) {
      var Filter = filters[i];
      if (Filter.identifier === options.name) {
        FilterClass = Filter;
        break;
      }
    }

    if (!FilterClass) {
      throw new Error('Unknown filter \'' + options.name + '\'');
    }

    this._editor.operations.getOrCreate('filter', {
      filter: new FilterClass(),
      intensity: options.intensity
    });
  };

  /**
   * Deserializes the given adjustments operation
   * @param  {Object} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeAdjustmentsOperation = function _deserializeAdjustmentsOperation(operation) {
    var AdjustmentsOperation = _globals.SDK.Operations.AdjustmentsOperation;
    var options = operation.options;

    var operationOptions = {};

    for (var key in options) {
      var value = options[key];
      var defaultValue = AdjustmentsOperation.prototype.availableOptions[key].default;
      operationOptions[key] = value + defaultValue;
    }

    this._editor.operations.getOrCreate('adjustments', operationOptions);
  };

  /**
   * Deserializes the given sprite operation
   * @param  {Object} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeSpriteOperation = function _deserializeSpriteOperation(operation) {
    var _this4 = this;

    var options = operation.options;

    var spriteOperation = this._editor.operations.getOrCreate('sprite');
    var promises = options.sprites.map(function (sprite) {
      switch (sprite.type) {
        case 'sticker':
          return _this4._deserializeSticker(spriteOperation, sprite);
        case 'text':
          return _this4._deserializeText(spriteOperation, sprite);
        case 'brush':
          return _this4._deserializeBrush(spriteOperation, sprite);
      }
    }).filter(function (s) {
      return !!s;
    });
    return Promise.all(promises).then(function (sprites) {
      spriteOperation.setSprites(sprites);
    });
  };

  /**
   * Deserializes the given sticker for the given operation
   * @param  {PhotoEditorSDK.Operations.SpriteOperation} operation
   * @param  {Object} sprite
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Sticker}
   * @private
   */


  Deserializer.prototype._deserializeSticker = function _deserializeSticker(operation, sprite) {
    var _this5 = this;

    var SpriteOperation = _globals.SDK.Operations.SpriteOperation;
    var options = sprite.options;

    var stickers = this._stickerManager.getStickersForCategory('all');

    var sticker = void 0;
    for (var i = 0; i < stickers.length; i++) {
      if (stickers[i].name === options.name) {
        sticker = stickers[i];
        continue;
      }
    }

    if (!sticker) {
      throw new Error('Unknown sticker \'' + options.name + '\'');
    }
    return new Promise(function (resolve, reject) {
      var image = new window.Image();
      image.addEventListener('load', function () {
        var adjustments = SpriteOperation.Sticker.prototype.availableOptions.adjustments.structure;
        var rotation = options.rotation,
            flipHorizontally = options.flipHorizontally,
            flipVertically = options.flipVertically;

        resolve(operation.createSticker({
          image: image,
          position: _globals.Vector2.fromObject(options.position),
          dimensions: _globals.Vector2.fromObject(options.dimensions),
          rotation: rotation,
          flipHorizontally: flipHorizontally,
          flipVertically: flipVertically,
          adjustments: {
            brightness: options.adjustments.brightness + adjustments.brightness.default,
            saturation: options.adjustments.saturation + adjustments.saturation.default,
            contrast: options.adjustments.contrast + adjustments.contrast.default
          }
        }));
      });
      image.src = _this5._editor.getUI().getAssetPath(sticker.images.mediaBase.uri);
    });
  };

  /**
   * Deserializes the given text for the given operation
   * @param  {PhotoEditorSDK.Operations.SpriteOperation} operation
   * @param  {Object} text
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Text}
   * @private
   */


  Deserializer.prototype._deserializeText = function _deserializeText(operation, text) {
    var options = text.options;
    var fontSize = options.fontSize,
        lineHeight = options.lineHeight,
        fontFamily = options.fontFamily,
        fontWeight = options.fontWeight,
        alignment = options.alignment,
        rotation = options.rotation,
        maxWidth = options.maxWidth,
        color = options.color,
        backgroundColor = options.backgroundColor;

    return Promise.resolve(operation.createText({
      fontSize: fontSize,
      lineHeight: lineHeight,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      alignment: alignment,
      rotation: rotation,
      maxWidth: maxWidth,
      text: options.text,
      color: _globals.Color.fromArray(color),
      backgroundColor: _globals.Color.fromArray(backgroundColor),
      position: _globals.Vector2.fromObject(options.position)
    }));
  };

  /**
   * Deserializes the given brush for the given operation
   * @param  {PhotoEditorSDK.Operations.SpriteOperation} operation
   * @param  {Object} brush
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Brush}
   * @private
   */


  Deserializer.prototype._deserializeBrush = function _deserializeBrush(operation, brush) {
    var options = brush.options;
    var paths = options.paths;


    var brushObject = operation.createBrush();
    paths.forEach(function (path) {
      var color = path.color,
          size = path.size,
          points = path.points;

      var colorObject = new _globals.Color(color[0], color[1], color[2], color[3]);
      var pathObject = brushObject.createPath(size, 1, colorObject);
      points.forEach(function (point) {
        pathObject.addControlPoint(_globals.Vector2.fromObject(point));
      });
    });
    return Promise.resolve(brushObject);
  };

  /**
   * Deserializes the given focus operation
   * @param  {Object} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeFocusOperation = function _deserializeFocusOperation(operation) {
    var options = operation.options.options;

    switch (operation.options.type) {
      case 'radial':
        {
          var position = options.position,
              radius = options.radius,
              gradientRadius = options.gradientRadius,
              blurRadius = options.blurRadius;

          this._editor.operations.getOrCreate('radial-focus', {
            position: _globals.Vector2.fromObject(position),
            radius: radius,
            gradientRadius: gradientRadius,
            blurRadius: blurRadius
          });
        }
        break;
      case 'linear':
        {
          var start = options.start,
              end = options.end,
              size = options.size,
              gradientSize = options.gradientSize,
              _blurRadius = options.blurRadius;

          this._editor.operations.getOrCreate('linear-focus', {
            start: _globals.Vector2.fromObject(start),
            end: _globals.Vector2.fromObject(end),
            size: size,
            gradientSize: gradientSize,
            blurRadius: _blurRadius
          });
        }
        break;
    }
  };

  /**
   * Deserializes the given border operation
   * @param  {Object} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeBorderOperation = function _deserializeBorderOperation(operation) {
    var _operation$options = operation.options,
        color = _operation$options.color,
        size = _operation$options.size;

    this._editor.operations.getOrCreate('border', {
      color: _globals.Color.fromArray(color),
      thickness: size
    });
  };

  /**
   * Returns the input dimensions for the given operation
   * @param  {PhotoEditorSDK.Operation} operation
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  Deserializer.prototype._getInputDimensionsForOperation = function _getInputDimensionsForOperation(operation) {
    var operationFound = false;
    var inputDimensions = this._editor.getInputDimensions();

    this._editor.operations.getStack().forEach(function (op) {
      if (op === operation) operationFound = true;
      if (operationFound) return;
      inputDimensions = op.getNewDimensions(inputDimensions);
    });

    return inputDimensions;
  };

  return Deserializer;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = Deserializer;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TWICE_PI = Math.PI * 2; /*
                             * This file is part of PhotoEditorSDK.
                             *
                             * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                             * All rights reserved.
                             *
                             * Redistribution and use in source and binary forms, without
                             * modification, are permitted provided that the following license agreement
                             * is approved and a legal/financial contract was signed by the user.
                             * The license agreement can be found under following link:
                             *
                             * https://www.photoeditorsdk.com/LICENSE.txt
                             */

var Serializer = function () {
  function Serializer(editor) {
    (0, _classCallCheck3.default)(this, Serializer);

    this._editor = editor;

    this._serializeOperations = this._serializeOperations.bind(this);
  }

  // -------------------------------------------------------------------------- SERIALIZATION

  /**
   * Serializes the editor state
   * @param {Object} options = {}
   * @return {Promise}
   */


  Serializer.prototype.serialize = function serialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._options = _globals.SDKUtils.defaults(options, {
      image: true
    });

    var data = {
      version: '1.0.0'
    };

    return this._serializeInputImage(data).then(this._serializeOperations);
  };

  /**
   * Serializes the input image as base64 and attaches it to `data`
   * @param  {Object} data
   * @return {Promise}
   * @private
   */


  Serializer.prototype._serializeInputImage = function _serializeInputImage(data) {
    var image = this._editor.getImage();

    if (!this._options.image) {
      data.inputImage = {
        width: image.width,
        height: image.height
      };
      return Promise.resolve(data);
    }

    var sdk = new _globals.SDK('webgl', { image: image });

    return sdk.export(_globals.RenderType.DATA_URL, _globals.ImageFormat.PNG).then(function (dataUrl) {
      var width = image.width,
          height = image.height;

      data.inputImage = {
        type: _globals.ImageFormat.PNG,
        data: dataUrl.replace(/^data:image\/(.*?);base64,/, ''),
        width: width,
        height: height
      };
      return data;
    });
  };

  /**
   * Serializes the operations and attaches them to `data`
   * @param  {Object} data
   * @return {Promise}
   * @private
   */


  Serializer.prototype._serializeOperations = function _serializeOperations(data) {
    var _this = this;

    var operations = [];
    var stack = this._editor.operations.getStack();
    stack.forEach(function (operation) {
      operations.push(_this._serializeOperation(operation));
    });
    data.operations = operations;
    return Promise.resolve(data);
  };

  /**
   * Serializes the given operation
   * @param  {PhotoEditorSDK.Operation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeOperation = function _serializeOperation(operation) {
    switch (operation.constructor.identifier) {
      case 'crop':
        return this._serializeCropOperation(operation);
      case 'orientation':
        return this._serializeOrientationOperation(operation);
      case 'filter':
        return this._serializeFilterOperation(operation);
      case 'adjustments':
        return this._serializeAdjustmentsOperation(operation);
      case 'sprite':
        return this._serializeSpriteOperation(operation);
      case 'radial-focus':
        return this._serializeRadialFocusOperation(operation);
      case 'linear-focus':
        return this._serializeLinearFocusOperation(operation);
      case 'border':
        return this._serializeBorderOperation(operation);
      default:
        throw new Error('Unable to serialize operation of type ' + operation.constructor.identifier);
    }
  };

  /**
   * Serializes the given crop operation
   * @param  {PhotoEditorSDK.Operation.CropOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeCropOperation = function _serializeCropOperation(operation) {
    var options = operation.serializeOptions(['start', 'end', 'rotation', 'scale'], true);
    options.rotation = (options.rotation + TWICE_PI) % TWICE_PI;
    return {
      type: 'crop',
      options: options
    };
  };

  /**
   * Serializes the given orientation operation
   * @param  {PhotoEditorSDK.Operation.OrientationOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeOrientationOperation = function _serializeOrientationOperation(operation) {
    return {
      type: 'orientation',
      options: operation.serializeOptions(['flipVertically', 'flipHorizontally', 'rotation'], true)
    };
  };

  /**
   * Serializes the given filter operation
   * @param  {PhotoEditorSDK.Operations.FilterOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeFilterOperation = function _serializeFilterOperation(operation) {
    return {
      type: 'filter',
      options: {
        intensity: operation.getIntensity(),
        name: operation.getFilter().constructor.identifier
      }
    };
  };

  /**
   * Serializes the given adjustments operation
   * @param  {PhotoEditorSDK.Operations.AdjustmentsOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeAdjustmentsOperation = function _serializeAdjustmentsOperation(operation) {
    var availableOptions = operation.availableOptions;

    var options = {};
    for (var optionName in availableOptions) {
      var option = availableOptions[optionName];
      var value = operation.getOption(optionName);
      if (value !== option.default) {
        options[optionName] = value - option.default; // scale to -1...1
      }
    }
    return {
      type: 'adjustments',
      options: options
    };
  };

  /**
   * Serializes the given sprite operation
   * @return {PhotoEditorSDK.Operations.SpriteOperation} operation
   * @private
   */


  Serializer.prototype._serializeSpriteOperation = function _serializeSpriteOperation(operation) {
    var _this2 = this;

    var sprites = operation.getSprites().map(function (sprite) {
      if (sprite instanceof operation.constructor.Sticker) {
        return _this2._serializeSticker(operation, sprite);
      } else if (sprite instanceof operation.constructor.Text) {
        return _this2._serializeText(operation, sprite);
      } else if (sprite instanceof operation.constructor.Brush) {
        return _this2._serializeBrush(operation, sprite);
      }
    });

    return {
      type: 'sprite',
      options: {
        sprites: sprites
      }
    };
  };

  /**
   * Serializes the given sticker
   * @param  {PhotoEditorSDK.Operation} operation
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Sticker} sprite
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeSticker = function _serializeSticker(operation, sprite) {
    var adjustments = sprite.getAdjustments();

    var options = sprite.serializeOptions(['name', 'position', 'dimensions', 'flipVertically', 'flipHorizontally', 'rotation'], true);
    options.rotation = (options.rotation + TWICE_PI) % TWICE_PI;

    var adjustmentsOptions = adjustments.availableOptions;
    options.adjustments = {
      brightness: adjustments.getBrightness() - adjustmentsOptions.brightness.default,
      saturation: adjustments.getSaturation() - adjustmentsOptions.saturation.default,
      contrast: adjustments.getContrast() - adjustmentsOptions.contrast.default
    };

    return {
      type: 'sticker',
      options: options
    };
  };

  /**
   * Serializes the given text sprite
   * @param  {PhotoEditorSDK.Operation} operation
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Text} sprite
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeText = function _serializeText(operation, sprite) {
    var options = sprite.serializeOptions(['fontSize', 'lineHeight', 'fontFamily', 'fontWeight', 'alignment', 'color', 'backgroundColor', 'position', 'rotation', 'text', 'maxWidth'], true);
    options.rotation = (options.rotation + TWICE_PI) % TWICE_PI;

    return {
      type: 'text',
      options: options
    };
  };

  /**
   * Serializes the given brush sprite
   * @param  {PhotoEditorSDK.Operation} operation
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Brush} sprite
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeBrush = function _serializeBrush(operation, sprite) {
    var _this3 = this;

    return {
      type: 'brush',
      options: {
        paths: sprite.getPaths().map(function (path) {
          return _this3._serializePath(path);
        })
      }
    };
  };

  /**
   * Serializes the given path
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Brush.Path} path
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializePath = function _serializePath(path) {
    var options = path.serializeOptions(['color', 'thickness'], true);

    options.size = options.thickness;
    delete options.thickness;

    options.points = path.getControlPoints().map(function (point) {
      return point.getPosition().toObject();
    });
    return options;
  };

  /**
   * Serializes the given radial focus operation
   * @param  {PhotoEditorSDK.Operations.RadialFocusOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeRadialFocusOperation = function _serializeRadialFocusOperation(operation) {
    return {
      type: 'focus',
      options: {
        type: 'radial',
        options: operation.serializeOptions(['position', 'radius', 'gradientRadius', 'blurRadius'], true)
      }
    };
  };

  /**
   * Serializes the given linear focus operation
   * @param  {PhotoEditorSDK.Operations.LinearFocusOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeLinearFocusOperation = function _serializeLinearFocusOperation(operation) {
    return {
      type: 'focus',
      options: {
        type: 'linear',
        options: operation.serializeOptions(['start', 'end', 'blurRadius', 'size', 'gradientSize'], true)
      }
    };
  };

  /**
   * Serializes the given border operation
   * @param  {PhotoEditorSDK.Operations.BorderOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeBorderOperation = function _serializeBorderOperation(operation) {
    var options = operation.serializeOptions(['color', 'thickness'], true);

    // `thickness` is called `size` in schema
    options.size = options.thickness;
    delete options.thickness;

    return {
      type: 'border',
      options: options
    };
  };

  /**
   * Returns the input dimensions for the given operation
   * @param  {PhotoEditorSDK.Operation} operation
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  Serializer.prototype._getInputDimensionsForOperation = function _getInputDimensionsForOperation(operation) {
    var operationFound = false;
    var inputDimensions = this._editor.getInputDimensions();

    this._editor.operations.getStack().forEach(function (op) {
      if (op === operation) operationFound = true;
      if (operationFound) return;
      inputDimensions = op.getNewDimensions(inputDimensions);
    });

    return inputDimensions;
  };

  return Serializer;
}();

exports.default = Serializer;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var maxLogLevel = 'warn';

var LEVELS = [{ type: 'trace', background: '#EEEEEE', color: '#AAAAAA' }, { type: 'info', background: '#BDE5F8', color: '#00529B' }, { type: 'warn', background: '#FEEFB3', color: '#9F6000' }, { type: 'error', background: '#FFBABA', color: '#D8000C' }, { type: 'log', background: '#EEEEEE', color: '#1f4f6b' }];
var LEVEL_TYPES = LEVELS.map(function (l) {
  return l.type;
});

var Log = {};

Log.setLevel = function (_level) {
  maxLogLevel = _level;
};
Log.canLog = function (type) {
  if (maxLogLevel === null) return false;
  var currentLevelIndex = LEVEL_TYPES.indexOf(type);
  var maxLevelIndex = LEVEL_TYPES.indexOf(maxLogLevel);
  if (currentLevelIndex < maxLevelIndex) return false;
  return true;
};
Log.hasColorfulOutput = function () {
  return (!process || process && process.browser) && typeof navigator !== 'undefined' && navigator.userAgent.match(/Gecko|WebKit/i) && !navigator.userAgent.match(/Trident/);
};

Log.printError = function (e) {
  var lines = e.stack.split('\n');
  lines.forEach(function (line) {
    Log.error('Error', line);
  });
};

LEVELS.forEach(function (level) {
  var type = level.type,
      background = level.background,
      color = level.color;

  Log[type] = function (tag) {
    if (!Log.canLog(type)) return;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var output = args.map(function (a) {
      return typeof a === 'string' ? a : a.toString();
    }).join(' ');
    if (!Log.hasColorfulOutput()) {
      return console.log('PhotoEditorSDK | ' + tag + ' | ' + output);
    }
    console.log('%c  %c PhotoEditorSDK %c  %c ' + tag + ' %c  ' + output + '  %c  ', 'background: #43ADEB; padding: 5px 0', 'background: #2B2B2B; color: white; padding: 5px 0', 'background: #43ADEB; padding: 5px 0', 'background: ' + background + '; color: ' + color + '; padding: 5px 0; font-weight: bold', 'background: #2B2B2B; color: white; padding: 5px 0', 'background: #43ADEB; padding: 5px 0');
  };
});

exports.default = Log;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(219), __esModule: true };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(75);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(43)
  , TAG = __webpack_require__(9)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(27)
  , document = __webpack_require__(12).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(26)(function(){
  return Object.defineProperty(__webpack_require__(79)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(47)
  , $export        = __webpack_require__(17)
  , redefine       = __webpack_require__(86)
  , hide           = __webpack_require__(22)
  , has            = __webpack_require__(18)
  , Iterators      = __webpack_require__(23)
  , $iterCreate    = __webpack_require__(232)
  , setToStringTag = __webpack_require__(50)
  , getPrototypeOf = __webpack_require__(240)
  , ITERATOR       = __webpack_require__(9)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(33)
  , createDesc     = __webpack_require__(29)
  , toIObject      = __webpack_require__(19)
  , toPrimitive    = __webpack_require__(55)
  , has            = __webpack_require__(18)
  , IE8_DOM_DEFINE = __webpack_require__(80)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(85)
  , hiddenKeys = __webpack_require__(46).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(18)
  , toIObject    = __webpack_require__(19)
  , arrayIndexOf = __webpack_require__(225)(false)
  , IE_PROTO     = __webpack_require__(51)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(53)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(78)
  , ITERATOR  = __webpack_require__(9)('iterator')
  , Iterators = __webpack_require__(23);
module.exports = __webpack_require__(8).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ },
/* 90 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 91 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _loadingScreenComponent = __webpack_require__(159);

var _loadingScreenComponent2 = _interopRequireDefault(_loadingScreenComponent);

var _splashScreenComponent = __webpack_require__(170);

var _splashScreenComponent2 = _interopRequireDefault(_splashScreenComponent);

var _photoRollScreenComponent = __webpack_require__(164);

var _photoRollScreenComponent2 = _interopRequireDefault(_photoRollScreenComponent);

var _webcamScreenComponent = __webpack_require__(174);

var _webcamScreenComponent2 = _interopRequireDefault(_webcamScreenComponent);

var _editorScreenComponent = __webpack_require__(158);

var _editorScreenComponent2 = _interopRequireDefault(_editorScreenComponent);

var _screenComponent = __webpack_require__(21);

var _screenComponent2 = _interopRequireDefault(_screenComponent);

var _modalContainerComponent = __webpack_require__(152);

var _modalContainerComponent2 = _interopRequireDefault(_modalContainerComponent);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppComponent = function (_React$Component) {
  (0, _inherits3.default)(AppComponent, _React$Component);

  function AppComponent() {
    (0, _classCallCheck3.default)(this, AppComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this._screens = {
      loading: _loadingScreenComponent2.default,
      splash: _splashScreenComponent2.default,
      photoRoll: _photoRollScreenComponent2.default,
      webcam: _webcamScreenComponent2.default,
      editor: _editorScreenComponent2.default,
      empty: _screenComponent2.default
    };

    var initialScreen = void 0;
    if (_this.props.options.preloader) {
      initialScreen = 'loading';
    }

    _this._screenAfterLoading;
    if (_this.props.options.editor.image) {
      _this._screenAfterLoading = 'editor';
    } else {
      _this._screenAfterLoading = 'splash';
    }

    if (!initialScreen) {
      initialScreen = _this._screenAfterLoading;
    }

    _this._previousScreensStack = [];
    _this.state = {
      activeScreen: _this._screens[initialScreen],
      activeScreenName: initialScreen,
      screens: (0, _defineProperty3.default)({}, initialScreen, _this._screens[initialScreen])
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Checks if the app has a previous screen on the stack
   * @return {Boolean}
   */


  AppComponent.prototype.hasPreviousScreen = function hasPreviousScreen() {
    return !!this._previousScreensStack.length;
  };

  /**
   * Returns the previous screen
   * @return {Screen}
   */


  AppComponent.prototype.getPreviousScreen = function getPreviousScreen() {
    var stack = this._previousScreensStack;
    return stack[stack.length - 1];
  };

  /**
   * Switches to the screen with the given name
   * @param  {String} name
   */


  AppComponent.prototype.switchToScreen = function switchToScreen(name) {
    var _this2 = this;

    var Screen = null;
    if (name === 'back') {
      Screen = this._previousScreensStack.pop();
      if (!Screen) {
        throw new Error('Unable to switch to previous screen - no previous screen found.');
      }
    } else {
      if (name === 'post-loading') name = this._screenAfterLoading;

      Screen = this._screens[name];
      if (!Screen) {
        throw new Error('Unknown screen `' + name + '`');
      }

      this._previousScreensStack.push(this.state.activeScreen);
    }

    if (!this.state.screens[name]) {
      this.state.screens[name] = Screen;
    }

    // Retain editor component
    if (this.state.activeScreenName !== 'editor') {
      delete this.state.screens[this.state.activeScreenName];
    }

    return new _globals.Promise(function (resolve) {
      _this2.setState({ activeScreen: Screen, activeScreenName: name }, function () {
        resolve();
      });
    });
  };

  /**
   * Gets called when an image is ready for editing
   * @param {Image} image
   * @param {Boolean} resetEditor
   */


  AppComponent.prototype.setImage = function setImage(image, resetEditor) {
    var _this3 = this;

    var options = this.props.options;

    options.editor.image = image;

    var firstEditorLaunch = !this.refs.editorScreen;
    this.switchToScreen('editor').then(function () {
      if (!firstEditorLaunch) {
        _this3.refs.editorScreen.setImage(image, resetEditor);
      }
    });
  };

  /**
   * Exports an image
   * @param {Boolean} download = false
   * @return {Promise}
   */


  AppComponent.prototype.export = function _export() {
    if (this.state.activeScreen !== this._screens.editor) {
      return _globals.Promise.reject(new Error('Unable to export: Active screen is not the editor screen.'));
    }

    if (this.state.screens.editor) {
      var _refs$editorScreen;

      return (_refs$editorScreen = this.refs.editorScreen).export.apply(_refs$editorScreen, arguments);
    }
  };

  /**
   * Returns the editor
   * @return {PhotoEditorSDK.UI.ReactUI.Editor}
   */


  AppComponent.prototype.getEditor = function getEditor() {
    if (this.state.activeScreen !== this._screens.editor) {
      return _globals.Promise.reject(new Error('Unable to get editor: Active screen is not the editor screen.'));
    }

    if (this.state.screens.editor) {
      return this.refs.editorScreen.getEditor();
    }
  };

  /**
   * Serializes the editor state
   * @return {Promise}
   */


  AppComponent.prototype.serialize = function serialize() {
    var _refs$editorScreen2;

    if (!this.state.screens.editor) {
      return _globals.Promise.reject(new Error('Editor screen unavailable'));
    }
    return (_refs$editorScreen2 = this.refs.editorScreen).serialize.apply(_refs$editorScreen2, arguments);
  };

  /**
   * Deserializes the given data
   * @param  {Object} data
   * @return {Promise}
   */


  AppComponent.prototype.deserialize = function deserialize(data) {
    if (!this.state.screens.editor) {
      return _globals.Promise.reject(new Error('Editor screen unavailable'));
    }
    return this.refs.editorScreen.deserialize(data);
  };

  /**
   * Returns the context passed to all children
   * @return {Object}
   */


  AppComponent.prototype.getChildContext = function getChildContext() {
    return {
      ui: this.props.ui,
      options: this.props.options,
      mediator: this.props.mediator
    };
  };

  /**
   * Renders the existing screens
   * @return {ScreenComponent[]}
   * @private
   */


  AppComponent.prototype._renderScreens = function _renderScreens() {
    var renderedScreens = [];

    for (var name in this.state.screens) {
      var Screen = this.state.screens[name];
      var visible = this.state.activeScreen === Screen;
      renderedScreens.push(_globals.ReactBEM.createElement(Screen, { ref: name + 'Screen', app: this, visible: visible }));
    }

    return renderedScreens;
  };

  /**
   * Renders this component
   * @return {React.Component}
   */


  AppComponent.prototype.render = function render() {
    return _globals.ReactBEM.transform(_globals.ReactBEM.createElement(
      'div',
      { bem: 'b:editor' },
      _globals.ReactBEM.createElement(_modalContainerComponent2.default, {
        modalManager: _modalManager2.default.instance }),
      this._renderScreens()
    ));
  };

  return AppComponent;
}(_globals.React.Component); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = AppComponent;


AppComponent.childContextTypes = {
  ui: _globals.React.PropTypes.object.isRequired,
  mediator: _globals.React.PropTypes.object.isRequired,
  options: _globals.React.PropTypes.object.isRequired
};

AppComponent.propTypes = {
  ui: _globals.React.PropTypes.object.isRequired,
  mediator: _globals.React.PropTypes.object.isRequired,
  options: _globals.React.PropTypes.object.isRequired
};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _provider = __webpack_require__(193);

Object.defineProperty(exports, 'Provider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_provider).default;
  }
});

var _library = __webpack_require__(191);

Object.defineProperty(exports, 'Library', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_library).default;
  }
});

var _searchSuggestion = __webpack_require__(194);

Object.defineProperty(exports, 'SearchSuggestion', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchSuggestion).default;
  }
});

var _photo = __webpack_require__(192);

Object.defineProperty(exports, 'Photo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_photo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = {
	"controls": {
		"overview": {
			"filters": "Filter",
			"adjustments": "Korrekturen",
			"crop": "Zuschneiden",
			"blur": "Weichzeichnen",
			"border": "Rahmen",
			"sticker": "Sticker",
			"text": "Text",
			"brush": "Malen",
			"selective-blur": "Sel. Unschärfe"
		},
		"border": {
			"color": "Farbe",
			"thickness": "Dicke"
		},
		"text": {
			"foreground": "Vordergrund",
			"background": "Hintergrund",
			"size": "Größe",
			"font": "Schriftart",
			"alignment": "Ausrichtung",
			"takeToFront": "Nach oben"
		},
		"adjustments": {
			"brightness": "Helligkeit",
			"contrast": "Kontrast",
			"saturation": "Sättigung",
			"gamma": "Gamma",
			"exposure": "Belichtung",
			"shadows": "Schatten",
			"highlights": "Lichter",
			"clarity": "Klarheit"
		},
		"crop": {
			"custom": "Manuell",
			"square": "Quadratisch",
			"4-3": "4:3",
			"16-9": "16:9",
			"rotation": "Drehung"
		},
		"focus": {
			"radial": "Kreisförmig",
			"linear": "Linear",
			"blurRadius": "Radius"
		},
		"selectiveBlur": {
			"blurRadius": "Radius",
			"thickness": "Dicke"
		},
		"filters": {
			"intensity": "Intensität",
			"categories": {
				"all": "Alle",
				"retro": "Retro",
				"bw": "Schwarz & Weiß",
				"summer": "Sommer",
				"winter": "Winter",
				"special": "Spezial"
			}
		},
		"sticker": {
			"brightness": "Helligkeit",
			"contrast": "Kontrast",
			"saturation": "Sättigung",
			"blur": "Weichzeichnen",
			"flip": "Spiegeln",
			"flip-v": "Spiegeln (V)",
			"flip-h": "Spiegeln (H)",
			"takeToFront": "Nach oben",
			"categories": {
				"all": "Alle",
				"glasses": "Brillen",
				"hats": "Hüte",
				"beards": "Bärte",
				"misc": "Gemischt"
			}
		},
		"brush": {
			"thickness": "Dicke",
			"color": "Farbe"
		}
	},
	"webcam": {
		"headline": "Mache ein Foto!"
	},
	"editor": {
		"headline": "Foto editieren",
		"new": "Neu",
		"backgroundImage": "Hintergrundbild",
		"undo": "Rückgängig",
		"export": "Speichern"
	},
	"splash": {
		"upload": {
			"button": "Lade ein Foto hoch",
			"description": "Klicke hier, um ein Foto von deinem Rechner hochzuladen oder lade es per Drag-and-Drop hoch"
		},
		"webcam": {
			"headline": "Webcam",
			"description": "Klicke hier, um ein Foto mit deiner Webcam zu machen"
		},
		"photoRoll": {
			"headline": "Kostenloses Bildmaterial",
			"description": "Suche dir eines von tausenden Stock Photos aus."
		}
	},
	"photoRoll": {
		"search": {
			"placeholder": "Nach Fotos suchen",
			"noSearchResults": "Entschuldigung, aber wir konnten für <strong>\"${query}\"</strong> leider keine Ergebnisse finden.",
			"results": {
				"headline": "Suchergebnisse für \"${query}\""
			}
		}
	},
	"generic": {
		"back": "Zurück",
		"cancel": "Abbrechen",
		"color": "Farbe"
	},
	"loading": {
		"resizing": "Bild wird bearbeitet...",
		"exporting": "Exportiere...",
		"loading": "Lade..."
	},
	"warnings": {
		"imageResized_maxMegaPixels": {
			"title": "Bild verkleinert",
			"text": "Da dein Bild die maximale Größe von ${maxMegaPixels} Megapixeln überschreitet, wurde es auf ${width}x${height} Pixel verkleinert."
		},
		"imageResized_maxDimensions": {
			"title": "Bild verkleinert",
			"text": "Aufgrund von Hardware-Beschränkungen wurde das Bild auf ${width}x${height} Pixel verkleinert."
		}
	},
	"errors": {
		"imageLoadFail": {
			"title": "Bild konnte nicht geladen werden",
			"text": "Beim Laden des Bildes unter ${path} ist ein Fehler aufgetreten."
		},
		"webcamUnavailable": {
			"title": "Webcam nicht verfügbar",
			"text": "Webcam-Bild kann nicht dargestellt werden. (Fehler: ${error})"
		},
		"webcamNotSupported": {
			"title": "Webcam nicht unterstützt",
			"text": "Dein Browser unterstützt das Webcam-Feature leider noch nicht."
		},
		"renderingError": {
			"title": "Rendering-Fehler",
			"text": "Beim Rendern des Bildes ist ein Fehler aufgetreten."
		},
		"context_lost": {
			"title": "Es ist ein Fehler aufgetreten",
			"text": "Dein Browser hat zu lange gebraucht, um das Bild zu generieren. Bitte versuche es noch einmal."
		},
		"context_lost_limit": {
			"title": "Es ist ein Fehler aufgetreten",
			"text": "Bild-Generierung ist mehrmals fehlgeschlagen."
		},
		"loadingStickersFailed": {
			"title": "Laden der Sticker fehlgeschlagen"
		},
		"photoRollLoadFail": {
			"title": "Laden der Photo Roll fehlgeschlagen",
			"text": "Die Photo Roll konnte nicht geladen werden: ${error}"
		}
	}
};

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports = {
	"controls": {
		"overview": {
			"filters": "Filters",
			"adjustments": "Adjust",
			"crop": "Crop",
			"focus": "Focus",
			"border": "Border",
			"sticker": "Sticker",
			"text": "Text",
			"brush": "Brush",
			"selective-blur": "Selective Blur"
		},
		"border": {
			"color": "Color",
			"thickness": "Thickness"
		},
		"text": {
			"foreground": "Foreground",
			"background": "Background",
			"size": "Size",
			"font": "Font",
			"alignment": "Alignment",
			"takeToFront": "To Front"
		},
		"adjustments": {
			"brightness": "Brightness",
			"contrast": "Contrast",
			"saturation": "Saturation",
			"exposure": "Exposure",
			"gamma": "Gamma",
			"shadows": "Shadows",
			"highlights": "Highlights",
			"clarity": "Clarity"
		},
		"crop": {
			"custom": "Custom",
			"square": "Square",
			"4-3": "4:3",
			"16-9": "16:9",
			"rotation": "Rotation"
		},
		"focus": {
			"radial": "Radial",
			"linear": "Linear",
			"blurRadius": "Blur radius"
		},
		"selectiveBlur": {
			"blurRadius": "Blur radius",
			"thickness": "Thickness"
		},
		"filters": {
			"intensity": "Intensity",
			"categories": {
				"all": "All",
				"retro": "Retro",
				"bw": "Black & White",
				"summer": "Summer",
				"winter": "Winter",
				"special": "Special"
			}
		},
		"sticker": {
			"brightness": "Brightness",
			"contrast": "Contrast",
			"saturation": "Saturation",
			"blur": "Blur",
			"flip": "Flip",
			"flip-v": "Flip (V)",
			"flip-h": "Flip (H)",
			"takeToFront": "To Front",
			"categories": {
				"all": "All",
				"glasses": "Glasses",
				"hats": "Hats",
				"beards": "Beards",
				"misc": "Misc"
			}
		},
		"brush": {
			"thickness": "Thickness",
			"color": "Color"
		}
	},
	"webcam": {
		"headline": "Take a photo!"
	},
	"editor": {
		"headline": "Edit Photo",
		"new": "New",
		"backgroundImage": "Background Image",
		"undo": "Undo",
		"export": "Export"
	},
	"splash": {
		"upload": {
			"button": "Upload your image",
			"description": "Upload a picture from your library or just drag and drop"
		},
		"webcam": {
			"headline": "Webcam",
			"description": "Take a picture with your webcam or phone"
		},
		"photoRoll": {
			"headline": "Free stock footage",
			"description": "Select from thousands of Free Stock Photos"
		}
	},
	"photoRoll": {
		"search": {
			"placeholder": "Search for photos",
			"noSearchResults": "Sorry, but we couldn't find any photos for <strong>\"${query}\"</strong>.",
			"results": {
				"headline": "Search results for \"${query}\""
			}
		}
	},
	"generic": {
		"back": "Back",
		"cancel": "Cancel",
		"color": "Color"
	},
	"loading": {
		"resizing": "Resizing...",
		"exporting": "Exporting...",
		"loading": "Loading..."
	},
	"warnings": {
		"imageResized_maxMegaPixels": {
			"title": "Image resized",
			"text": "Your image exceeds the maximum size of ${maxMegaPixels} megapixels and has therefore been resized to ${width}x${height} pixels."
		},
		"imageResized_maxDimensions": {
			"title": "Image resized",
			"text": "Due to hardware limitations your image has been resized to ${width}x${height} pixels."
		}
	},
	"errors": {
		"imageLoadFail": {
			"title": "Failed to load image",
			"text": "Failed to load the image at ${path}"
		},
		"webcamUnavailable": {
			"title": "Webcam unavailable",
			"text": "Unable to display webcam image (Error: ${error})"
		},
		"webcamNotSupported": {
			"title": "Webcam not supported",
			"text": "The webcam feature is not supported by your browser."
		},
		"renderingError": {
			"title": "Error while rendering",
			"text": "An error has occurred while rendering the image."
		},
		"context_lost": {
			"title": "An error has occurred",
			"text": "Your browser took too long to render the image. Please try applying less operations."
		},
		"context_lost_limit": {
			"title": "An error has occurred",
			"text": "Your browser failed multiple times while rendering the image."
		},
		"loadingStickersFailed": {
			"title": "Failed to load stickers"
		},
		"photoRollLoadFail": {
			"title": "Failed to load Photo Roll",
			"text": "Failed to load photos for the photo roll: ${error}"
		}
	}
};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(BackButtonComponent, _BaseComponent);

  function BackButtonComponent() {
    (0, _classCallCheck3.default)(this, BackButtonComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  BackButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:controls' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell m:largeButton' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: '$e:largeButton', onClick: this.props.onClick },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/back.png', true) })
        )
      )
    );
  };

  return BackButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = BackButtonComponent;


BackButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactBem = __webpack_require__(71);

var _reactBem2 = _interopRequireDefault(_reactBem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BaseComponent = function (_React$Component) {
  (0, _inherits3.default)(BaseComponent, _React$Component);

  function BaseComponent() {
    (0, _classCallCheck3.default)(this, BaseComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this._events = {};
    _this._needsStyleFixes = false;

    _this._bindAll('_onSharedStateUpdate', 'fixStyles');
    return _this;
  }

  // -------------------------------------------------------------------------- WORKAROUNDS

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   */


  BaseComponent.prototype.fixStyles = function fixStyles() {};

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  BaseComponent.prototype.componentDidMount = function componentDidMount() {
    this._bindEvents();
    if (this.props.sharedState) {
      this.props.sharedState.on('update', this._onSharedStateUpdate);
    }

    if (this._needsStyleFixes) {
      this.fixStyles();
      if (this.context.options.responsive) {
        window.addEventListener('resize', this.fixStyles);
      }
    }
  };

  /**
   * Gets called before this component is unmounted
   */


  BaseComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this._unbindEvents();

    if (this.props.sharedState) {
      this.props.sharedState.off('update', this._onSharedStateUpdate);
    }

    if (this.context.options.responsive && this._needsStyleFixes) {
      window.removeEventListener('resize', this.fixStyles);
    }
  };

  /**
   * Gets called when this component is about to receive new properties
   * @param  {Object} nextProps
   */


  BaseComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.sharedState) {
      if (this.props.sharedState) {
        this.props.sharedState.off('update', this._onSharedStateUpdate);
      }
      nextProps.sharedState.on('update', this._onSharedStateUpdate);
    }
  };

  // -------------------------------------------------------------------------- HELPER FUNCTIONS

  /**
   * Binds the instance methods with the given names
   * to the class context
   * @param  {Array.<String>} ...fnNames
   * @protected
   */


  BaseComponent.prototype._bindAll = function _bindAll() {
    var _this2 = this;

    for (var _len2 = arguments.length, fnNames = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fnNames[_key2] = arguments[_key2];
    }

    fnNames.forEach(function (name) {
      if (typeof _this2[name] !== 'function') {
        throw new Error('_bindAll: ' + _this2.constructor.name + '.' + name + ' is not a function.');
      }
      _this2[name] = _this2[name].bind(_this2);
    });
  };

  /**
   * Returns the translation for `key`
   * @param  {String} key
   * @param  {Object} [interpolationOptions]
   * @return {String}
   */


  BaseComponent.prototype._t = function _t(key, interpolationOptions) {
    return this.context.ui.translate(key, interpolationOptions);
  };

  /**
   * A helper method for UI.helpers.assetPath
   * @param {?} ...args
   * @protected
   */


  BaseComponent.prototype._getAssetPath = function _getAssetPath() {
    var _context$ui;

    return (_context$ui = this.context.ui).getAssetPath.apply(_context$ui, arguments);
  };

  // -------------------------------------------------------------------------- SHARED STATE

  /**
   * Gets called when the shared state did change
   * @param  {Object} oldState
   * @param  {Object} newState
   * @private
   */


  BaseComponent.prototype._onSharedStateUpdate = function _onSharedStateUpdate(oldState, newState) {
    this.sharedStateDidChange(newState);

    if (this.shouldSharedComponentUpdate(oldState, newState)) {
      this.forceUpdate();
    }
  };

  /**
   * Checks if the component should change from the given state
   * @param  {Object} oldState
   * @param  {Object} newState
   * @return {Boolean}
   */


  BaseComponent.prototype.shouldSharedComponentUpdate = function shouldSharedComponentUpdate(oldState, newState) {
    return true;
  };

  /**
   * Gets called when the shared state did change
   * @param {Object} newState
   */


  BaseComponent.prototype.sharedStateDidChange = function sharedStateDidChange(newState) {};

  /**
   * Sets the given state on the shared state
   * @param {Object} state
   * @param {Boolean} update
   */


  BaseComponent.prototype.setSharedState = function setSharedState(state, update) {
    this.props.sharedState.set(state, update);
  };

  /**
   * Returns the shared state value for the given property
   * @param {String} prop
   * @return {*}
   */


  BaseComponent.prototype.getSharedState = function getSharedState(prop) {
    return this.props.sharedState.get(prop);
  };

  /**
   * Forces an update of the shared state
   */


  BaseComponent.prototype.forceSharedUpdate = function forceSharedUpdate() {
    this.props.sharedState.broadcastUpdate();
  };

  // -------------------------------------------------------------------------- EVENT HANDLING

  /**
   * Binds the events in _events
   * @protected
   */


  BaseComponent.prototype._bindEvents = function _bindEvents() {
    for (var eventName in this._events) {
      var handler = this._events[eventName];
      this.context.mediator.on(eventName, handler);
    }
  };

  /**
   * Unbinds the events in _events
   * @protected
   */


  BaseComponent.prototype._unbindEvents = function _unbindEvents() {
    for (var eventName in this._events) {
      var handler = this._events[eventName];
      this.context.mediator.off(eventName, handler);
    }
  };

  /**
   * Emits an event with the given event name and arguments through
   * the mediator
   * @param  {String} eventName
   * @param  {Array.<*>} ...args
   * @protected
   */


  BaseComponent.prototype._emitEvent = function _emitEvent(eventName) {
    var _context$mediator;

    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    (_context$mediator = this.context.mediator).emit.apply(_context$mediator, [eventName].concat(args));
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this element
   * @return {ReactBEM.element}
   */


  BaseComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _reactBem2.default.createElement('div');
  };

  /**
   * Transforms the ReactBEM.element returned by `renderWithBEM` into
   * React.Element objects with proper class names
   * @return {React.Element}
   */


  BaseComponent.prototype.render = function render() {
    return _reactBem2.default.transform(this.renderWithBEM());
  };

  return BaseComponent;
}(_react2.default.Component);

exports.default = BaseComponent;


BaseComponent.contextTypes = {
  editor: _react2.default.PropTypes.object,
  ui: _react2.default.PropTypes.object,
  options: _react2.default.PropTypes.object,
  mediator: _react2.default.PropTypes.object,
  editorScreen: _react2.default.PropTypes.object
};

BaseComponent.propTypes = {
  sharedState: _react2.default.PropTypes.any
};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ButtonComponent, _BaseComponent);

  function ButtonComponent() {
    (0, _classCallCheck3.default)(this, ButtonComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  ButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    var bemSpecifier = 'b:button';
    if (this.props.uppercase) {
      bemSpecifier += ' m:uppercase';
    }

    return _globals.ReactBEM.createElement(
      'button',
      { bem: bemSpecifier, className: this.props.className, onClick: this.props.onClick },
      this.props.children
    );
  };

  return ButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = ButtonComponent;


ButtonComponent.propTypes = {
  onClick: _globals.React.PropTypes.func,
  children: _globals.React.PropTypes.any.isRequired,
  className: _globals.React.PropTypes.string
};

ButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryDropdownOverlayComponent = function (_BaseComponent) {
  (0, _inherits3.default)(CategoryDropdownOverlayComponent, _BaseComponent);

  function CategoryDropdownOverlayComponent() {
    (0, _classCallCheck3.default)(this, CategoryDropdownOverlayComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks on an item
   * @param  {Object} item
   * @private
   */
  CategoryDropdownOverlayComponent.prototype._onItemClick = function _onItemClick(item) {
    this.props.onChange && this.props.onChange(item);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items
   * @return {Array.<React.Element>}
   * @private
   */


  CategoryDropdownOverlayComponent.prototype._renderListItems = function _renderListItems() {
    var _this2 = this;

    return this.props.items.map(function (item) {
      var active = item.name === _this2.props.selectedItem.name;
      return _globals.ReactBEM.createElement(
        'li',
        {
          bem: '$e:item',
          className: active ? ' is-active' : '',
          onClick: _this2._onItemClick.bind(_this2, item) },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: item.icon }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label' },
          item.label
        )
      );
    });
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  CategoryDropdownOverlayComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:categoryDropdown $e:overlay' },
      _globals.ReactBEM.createElement(
        'ul',
        { bem: '$e:list' },
        this._renderListItems()
      )
    );
  };

  return CategoryDropdownOverlayComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = CategoryDropdownOverlayComponent;


CategoryDropdownOverlayComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var AlphaComponent = function (_BaseComponent) {
  (0, _inherits3.default)(AlphaComponent, _BaseComponent);

  function AlphaComponent() {
    (0, _classCallCheck3.default)(this, AlphaComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onKnobDrag', '_onKnobDragStart');

    _this._value = _this.props.initialValue.clone();
    _this._transparentPatternCanvas = _globals.Utils.createTransparentPatternCanvas();
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after this component has been mounted
   */


  AlphaComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this._renderCanvas();
  };

  /**
   * Gets called when this component receives new props or state
   * @param  {Object} newProps
   * @return {Boolean}
   */


  AlphaComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(newProps) {
    var initialValue = newProps.initialValue;

    if (initialValue !== this._value) {
      this._value = initialValue.clone();
      this._renderCanvas();
      return true;
    }
    return false;
  };

  // -------------------------------------------------------------------------- DRAG EVENTS

  /**
   * Gets called when the user starts dragging the knob
   * @param  {Vector2} position
   * @param  {Event} e
   * @private
   */


  AlphaComponent.prototype._onKnobDragStart = function _onKnobDragStart(position, e) {
    if (e.target === this.refs.knob) {
      this._initialAlpha = this._value.a;
    } else {
      this._setAlphaFromPosition(position);
    }
  };

  /**
   * Gets called while the user drags the knob
   * @param  {Vector2} offset
   * @param  {Event} e
   * @private
   */


  AlphaComponent.prototype._onKnobDrag = function _onKnobDrag(offset, e) {
    var canvas = this.refs.canvas;
    var canvasWidth = canvas.offsetWidth;

    var alphaChange = offset.x / canvasWidth;
    this._setAlpha(this._initialAlpha + alphaChange);
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the style object for the knob
   * @return {Object}
   * @private
   */


  AlphaComponent.prototype._getKnobStyle = function _getKnobStyle() {
    return {
      left: (this._value.a * 100).toFixed(2) + '%',
      top: '50%'
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Sets the alpha value of the color to the given one
   * @param {Number} a
   * @private
   */


  AlphaComponent.prototype._setAlpha = function _setAlpha(a) {
    this._value.a = a;
    this._value.a = Math.min(1, Math.max(0, this._value.a));
    this.forceUpdate();
    this.props.onChange && this.props.onChange(this._value);
  };

  /**
   * Sets the alpha from the given cursor position
   * @param {Vector2} position
   * @private
   */


  AlphaComponent.prototype._setAlphaFromPosition = function _setAlphaFromPosition(position) {
    var canvas = this.refs.canvas;
    this._initialAlpha = position.x / canvas.offsetWidth;
    this._setAlpha(this._initialAlpha);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the canvas with the current color
   * @private
   */


  AlphaComponent.prototype._renderCanvas = function _renderCanvas() {
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Fill with pattern
    var pattern = context.createPattern(this._transparentPatternCanvas, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Create gradient
    var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    var color = this._value.clone();
    color.a = 0;
    gradient.addColorStop(0, color.toRGBA());
    gradient.addColorStop(1, this._value.toHex());

    // Draw gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  AlphaComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:colorPicker $e:alpha' },
      _globals.ReactBEM.createElement(
        _draggableComponent2.default,
        {
          onStart: this._onKnobDragStart,
          onDrag: this._onKnobDrag },
        _globals.ReactBEM.createElement(
          'div',
          null,
          _globals.ReactBEM.createElement('canvas', { bem: 'e:canvas', ref: 'canvas' }),
          _globals.ReactBEM.createElement('div', {
            bem: 'e:knob $b:knob m:transparent',
            ref: 'knob',
            style: this._getKnobStyle() })
        )
      )
    );
  };

  return AlphaComponent;
}(_globals.BaseComponent);

exports.default = AlphaComponent;


AlphaComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var HueComponent = function (_BaseComponent) {
  (0, _inherits3.default)(HueComponent, _BaseComponent);

  function HueComponent() {
    (0, _classCallCheck3.default)(this, HueComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onKnobDrag', '_onKnobDragStart');

    _this._value = _this.props.initialValue.clone();
    var hsvArr = _this._value.toHSV();
    var h = hsvArr[0];
    var s = hsvArr[1];
    var v = hsvArr[2];
    _this._hsvColor = { h: h, s: s, v: v };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after this component has been mounted
   */


  HueComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this._renderCanvas();
  };

  /**
   * Gets called when this component receives new props or state
   * @param  {Object} newProps
   * @return {Boolean}
   */


  HueComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(newProps) {
    var initialValue = newProps.initialValue;

    if (initialValue !== this._value) {
      this._value = initialValue.clone();
      var hsvArr = this._value.toHSV();
      var h = hsvArr[0];
      var s = hsvArr[1];
      var v = hsvArr[2];
      this._hsvColor = { h: h, s: s, v: v };
      this._renderCanvas();
      return true;
    }
    return false;
  };

  // -------------------------------------------------------------------------- DRAG EVENTS

  /**
   * Gets called when the user starts dragging the knob
   * @param  {Vector2} position
   * @param  {Event} e
   * @private
   */


  HueComponent.prototype._onKnobDragStart = function _onKnobDragStart(position, e) {
    if (e.target === this.refs.knob) {
      this._initialHue = this._hsvColor.h;
    } else {
      this._setValueFromPosition(position);
    }
  };

  /**
   * Gets called while the user drags the knob
   * @param  {Vector2} offset
   * @param  {Event} e
   * @private
   */


  HueComponent.prototype._onKnobDrag = function _onKnobDrag(offset, e) {
    var canvas = this.refs.canvas;

    var canvasHeight = canvas.offsetHeight;

    var hueChange = offset.y / canvasHeight;
    this._setHue(this._initialHue + hueChange);
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the style object for the knob
   * @return {Object}
   * @private
   */


  HueComponent.prototype._getKnobStyle = function _getKnobStyle() {
    return {
      left: '50%',
      top: (this._hsvColor.h * 100).toFixed(2) + '%'
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Sets the hue value of the color to the given one
   * @param {Number} h
   * @private
   */


  HueComponent.prototype._setHue = function _setHue(h) {
    var _hsvColor = this._hsvColor,
        s = _hsvColor.s,
        v = _hsvColor.v;

    h = Math.min(1, Math.max(0, h));
    s = Math.max(0.01, Math.min(s, 0.99));
    v = Math.max(0.01, Math.min(v, 0.99));

    this._value = _globals.Color.fromHSV(h, s, v, this._value.a);
    this._hsvColor = { h: h, s: s, v: v };
    this.forceUpdate();
    this.props.onChange && this.props.onChange(this._value);
  };

  /**
   * Sets the value from the given cursor position
   * @param {Vector2} position
   * @private
   */


  HueComponent.prototype._setValueFromPosition = function _setValueFromPosition(position) {
    var canvas = this.refs.canvas;

    this._initialHue = position.y / canvas.offsetHeight;
    this._setHue(this._initialHue);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the hue colors to the canvas
   * @private
   */


  HueComponent.prototype._renderCanvas = function _renderCanvas() {
    var canvas = this.refs.canvas;

    var context = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    for (var y = 0; y < canvas.height; y++) {
      var ratio = y / canvas.height;
      var color = _globals.Color.fromHSV(ratio, 1, 1);

      context.strokeStyle = color.toRGBA();
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.stroke();
    }
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  HueComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:colorPicker $e:hue' },
      _globals.ReactBEM.createElement(
        _draggableComponent2.default,
        {
          onStart: this._onKnobDragStart,
          onDrag: this._onKnobDrag },
        _globals.ReactBEM.createElement(
          'div',
          null,
          _globals.ReactBEM.createElement('canvas', { bem: 'e:canvas', ref: 'canvas' }),
          _globals.ReactBEM.createElement('div', {
            bem: 'e:knob $b:knob m:transparent',
            ref: 'knob',
            style: this._getKnobStyle() })
        )
      )
    );
  };

  return HueComponent;
}(_globals.BaseComponent);

exports.default = HueComponent;


HueComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _alphaComponent = __webpack_require__(100);

var _alphaComponent2 = _interopRequireDefault(_alphaComponent);

var _saturationComponent = __webpack_require__(103);

var _saturationComponent2 = _interopRequireDefault(_saturationComponent);

var _hueComponent = __webpack_require__(101);

var _hueComponent2 = _interopRequireDefault(_hueComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var ColorPickerOverlayComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ColorPickerOverlayComponent, _BaseComponent);

  function ColorPickerOverlayComponent() {
    (0, _classCallCheck3.default)(this, ColorPickerOverlayComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._value = _this.props.initialValue.clone();
    var hsvArr = _this._value.toHSV();
    var h = hsvArr[0];
    var s = hsvArr[1];
    var v = hsvArr[2];
    _this._hsv = { h: h, s: s, v: v };

    _this._bindAll('_onElementClick', '_onColorChange', '_onDocumentClick');
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  ColorPickerOverlayComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);

    document.addEventListener('click', this._onDocumentClick);
  };

  /**
   * Gets called when this component is about to be unmounted
   */


  ColorPickerOverlayComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _BaseComponent.prototype.componentWillUnmount.call(this);

    document.removeEventListener('click', this._onDocumentClick);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks anywhere on the screen. If the click is outside
   * of the color picker and the color picker is visible, we hide this color picker.
   * @param  {Event} e
   * @private
   */


  ColorPickerOverlayComponent.prototype._onDocumentClick = function _onDocumentClick(e) {
    for (var element = e.target; element; element = element.parentNode) {
      if (element === this.refs.root) {
        return;
      }
    }
    this.props.onClose && this.props.onClose();
  };

  /**
   * Catches clicks on the element and makes sure that no click event is triggered
   * on the parent element
   * @param  {Event} e
   * @private
   */


  ColorPickerOverlayComponent.prototype._onElementClick = function _onElementClick(e) {
    e.stopPropagation();
  };

  /**
   * Gets called when the color changes
   * @param  {Color} color
   * @private
   */


  ColorPickerOverlayComponent.prototype._onColorChange = function _onColorChange(color) {
    this._value = color;
    this.props.onChange && this.props.onChange(color);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ColorPickerOverlayComponent.prototype.renderWithBEM = function renderWithBEM() {
    var alphaComponent = void 0;
    if (this.props.alpha !== false) {
      alphaComponent = _globals.ReactBEM.createElement(_alphaComponent2.default, {
        initialValue: this._value,
        onChange: this._onColorChange
      });
    }

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:colorPicker $e:overlay', onClick: this._onElementClick, ref: 'root' },
      alphaComponent,
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:bottom' },
        _globals.ReactBEM.createElement(_saturationComponent2.default, {
          initialValue: this._value,
          onChange: this._onColorChange
        }),
        _globals.ReactBEM.createElement(_hueComponent2.default, {
          initialValue: this._value,
          onChange: this._onColorChange
        })
      )
    );
  };

  return ColorPickerOverlayComponent;
}(_globals.BaseComponent);

exports.default = ColorPickerOverlayComponent;


ColorPickerOverlayComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var SaturationComponent = function (_BaseComponent) {
  (0, _inherits3.default)(SaturationComponent, _BaseComponent);

  function SaturationComponent() {
    (0, _classCallCheck3.default)(this, SaturationComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onKnobDrag', '_onKnobDragStart');

    _this._value = _this.props.initialValue.clone();
    var hsvArr = _this._value.toHSV();
    var h = hsvArr[0];
    var s = hsvArr[1];
    var v = hsvArr[2];
    _this._hsvColor = { h: h, s: s, v: v };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after this component has been mounted
   */


  SaturationComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this._renderCanvas();
  };

  /**
   * Gets called when this component receives new props or state
   * @param  {Object} newProps
   * @return {Boolean}
   */


  SaturationComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(newProps) {
    var initialValue = newProps.initialValue;

    if (initialValue !== this._value) {
      this._value = initialValue.clone();
      var hsvArr = this._value.toHSV();
      var h = hsvArr[0];
      var s = hsvArr[1];
      var v = hsvArr[2];
      this._hsvColor = { h: h, s: s, v: v };
      this._renderCanvas();
      return true;
    }
    return false;
  };

  // -------------------------------------------------------------------------- DRAG EVENTS

  /**
   * Gets called when the user starts dragging the knob
   * @param  {Vector} position
   * @param  {Event} e
   * @private
   */


  SaturationComponent.prototype._onKnobDragStart = function _onKnobDragStart(position, e) {
    if (e.target === this.refs.knob) {
      this._initialValue = this._hsvColor.v;
      this._initialSaturation = this._hsvColor.s;
    } else {
      this._setValuesFromPosition(position);
    }
  };

  /**
   * Gets called while the user drags the knob
   * @param  {Vector2} offset
   * @param  {Event} e
   * @private
   */


  SaturationComponent.prototype._onKnobDrag = function _onKnobDrag(offset, e) {
    var canvas = this.refs.canvas;

    var canvasWidth = canvas.offsetWidth;
    var canvasHeight = canvas.offsetHeight;

    var saturationChange = offset.x / canvasWidth;
    var valueChange = offset.y / canvasHeight * -1;

    var h = this._hsvColor.h;

    this._setHSV(h, this._initialSaturation + saturationChange, this._initialValue + valueChange);
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the style object for the knob
   * @return {Object}
   * @private
   */


  SaturationComponent.prototype._getKnobStyle = function _getKnobStyle() {
    var _hsvColor = this._hsvColor,
        s = _hsvColor.s,
        v = _hsvColor.v;


    return {
      left: (s * 100).toFixed(2) + '%',
      top: ((1 - v) * 100).toFixed(2) + '%'
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Sets the HSV values of the color to the given values
   * @param {Number} h
   * @param {Number} s
   * @param {Number} v
   * @private
   */


  SaturationComponent.prototype._setHSV = function _setHSV(h, s, v) {
    s = Math.max(0.01, Math.min(s, 0.99));
    v = Math.max(0.01, Math.min(v, 0.99));
    this._value = _globals.Color.fromHSV(h, s, v, this._value.a);
    this._hsvColor = { h: h, s: s, v: v };

    this.forceUpdate();
    this.props.onChange && this.props.onChange(this._value);
  };

  /**
   * Sets the values from the given cursor position
   * @param {Vector2} position
   * @private
   */


  SaturationComponent.prototype._setValuesFromPosition = function _setValuesFromPosition(position) {
    var canvas = this.refs.canvas;

    this._initialSaturation = position.x / canvas.offsetWidth;
    this._initialValue = 1 - position.y / canvas.offsetHeight;

    var h = this._hsvColor.h;

    this._setHSV(h, this._initialSaturation, this._initialValue);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the current color to the canvas
   * @private
   */


  SaturationComponent.prototype._renderCanvas = function _renderCanvas() {
    var canvas = this.refs.canvas;

    var context = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    for (var y = 0; y < canvas.height; y++) {
      var value = (canvas.height - y) / canvas.height;
      for (var x = 0; x < canvas.width; x++) {
        var saturation = x / canvas.width;
        var color = _globals.Color.fromHSV(this._hsvColor.h, saturation, value);
        var r = color.r,
            g = color.g,
            b = color.b,
            a = color.a;


        var index = (y * canvas.width + x) * 4;

        imageData.data[index] = r * 255;
        imageData.data[index + 1] = g * 255;
        imageData.data[index + 2] = b * 255;
        imageData.data[index + 3] = a * 255;
      }
    }

    context.putImageData(imageData, 0, 0);
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  SaturationComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:colorPicker $e:saturation' },
      _globals.ReactBEM.createElement(
        _draggableComponent2.default,
        {
          onStart: this._onKnobDragStart,
          onDrag: this._onKnobDrag },
        _globals.ReactBEM.createElement(
          'div',
          null,
          _globals.ReactBEM.createElement('canvas', { bem: 'e:canvas', ref: 'canvas' }),
          _globals.ReactBEM.createElement('div', {
            bem: 'e:knob $b:knob m:transparent',
            ref: 'knob',
            style: this._getKnobStyle() })
        )
      )
    );
  };

  return SaturationComponent;
}(_globals.BaseComponent);

exports.default = SaturationComponent;


SaturationComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _sliderOverlayComponent = __webpack_require__(20);

var _sliderOverlayComponent2 = _interopRequireDefault(_sliderOverlayComponent);

var _miniSliderComponent = __webpack_require__(126);

var _miniSliderComponent2 = _interopRequireDefault(_miniSliderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEMS = [{
  identifier: 'brightness',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('brightness');
  },
  defaultValue: 0,
  valueMultiplier: 100,
  valueOffset: 0
}, {
  identifier: 'saturation',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('saturation');
  },
  defaultValue: 1,
  valueMultiplier: 100,
  valueOffset: -100
}, {
  identifier: 'contrast',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('contrast');
  },
  defaultValue: 1,
  valueMultiplier: 100,
  valueOffset: -100
}, {
  identifier: 'gamma',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('gamma');
  },
  defaultValue: 1,
  valueMultiplier: 100,
  valueOffset: -100
}, {
  identifier: 'clarity',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('clarity');
  },
  defaultValue: 0,
  valueMultiplier: 100,
  valueOffset: 0
}, {
  identifier: 'exposure',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('exposure');
  },
  defaultValue: 0,
  valueMultiplier: 100,
  valueOffset: 0
}, {
  identifier: 'shadows',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('shadows');
  },
  defaultValue: 1,
  valueMultiplier: 100,
  valueOffset: -100
}, {
  identifier: 'highlights',
  isAvailable: function isAvailable(editor) {
    return editor.isToolEnabled('highlights');
  },
  defaultValue: 1,
  valueMultiplier: 100,
  valueOffset: 0
}]; /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var AdjustmentsControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(AdjustmentsControlsComponent, _ControlsComponent);

  function AdjustmentsControlsComponent() {
    (0, _classCallCheck3.default)(this, AdjustmentsControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onSliderValueChange');

    var editor = _this.context.editor;

    _this._operation = editor.operations.getOrCreate('adjustments');

    _this.state = { selectedControls: null };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  AdjustmentsControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    var editor = this.context.editor;

    var operationExistedBefore = this.getSharedState('operationExistedBefore');
    var initialOptions = this.getSharedState('initialOptions');

    if (!this._operation.optionsEqual(initialOptions)) {
      editor.history.add(this._operation, initialOptions, operationExistedBefore);
    }

    var defaultOptions = this._operation.getDefaultOptions();
    if (this._operation.optionsEqual(defaultOptions)) {
      editor.operations.remove(this._operation);
    }

    _ControlsComponent.prototype._onBackClick.call(this, e);
  };

  /**
   * Gets called when the user changes the slider value
   * @param  {Number} value
   * @private
   */


  AdjustmentsControlsComponent.prototype._onSliderValueChange = function _onSliderValueChange(value) {
    var selectedControls = this.state.selectedControls;
    var identifier = selectedControls.identifier,
        valueMultiplier = selectedControls.valueMultiplier,
        valueOffset = selectedControls.valueOffset;

    value = (value - valueOffset) / valueMultiplier;
    this._operation.setOption(identifier, value);

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Gets called when the user clicks one of the three buttons
   * @param {Object} controlsItem
   * @param {Event} e
   * @private
   */


  AdjustmentsControlsComponent.prototype._onButtonClick = function _onButtonClick(controlsItem, e) {
    this.setState({ selectedControls: controlsItem });
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Builds the props hash passed to the sliders
   * @return {Object}
   */


  AdjustmentsControlsComponent.prototype._buildSliderProps = function _buildSliderProps(controls) {
    var identifier = controls.identifier,
        defaultValue = controls.defaultValue,
        valueMultiplier = controls.valueMultiplier,
        valueOffset = controls.valueOffset;


    var minValue = -1 * valueMultiplier;
    var maxValue = 1 * valueMultiplier;
    var value = this._operation ? this._operation.getOption(identifier) : defaultValue;

    value *= valueMultiplier;
    value += valueOffset;

    return {
      minValue: minValue,
      maxValue: maxValue,
      value: value,
      valueUnit: '%',
      positiveValuePrefix: '+',
      label: this._t('controls.adjustments.' + identifier),
      middleDot: true,
      onChange: this._onSliderValueChange
    };
  };

  // -------------------------------------------------------------------------- RENDERING

  AdjustmentsControlsComponent.prototype.renderOverlayControls = function renderOverlayControls() {
    var selectedControls = this.state.selectedControls;

    if (!selectedControls) return;

    var sliderProps = this._buildSliderProps(selectedControls);
    return _globals.ReactBEM.createElement(_sliderOverlayComponent2.default, sliderProps);
  };

  /**
   * Renders the list items
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  AdjustmentsControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this2 = this;

    return ITEMS.filter(function (item) {
      return item.isAvailable(_this2.context.editor);
    }).map(function (item) {
      var isSelected = _this2.state.selectedControls === item;
      var className = isSelected ? 'is-active' : null;

      var miniSlider = void 0;
      /* eslint-disable no-constant-condition */
      if (!isSelected && false) {
        // Mini sliders temporarily disabled
        var sliderProps = _this2._buildSliderProps(item);
        miniSlider = _globals.ReactBEM.createElement(
          'bem',
          { specifier: 'b:adjustmentsControls' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:miniSlider' },
            _globals.ReactBEM.createElement(_miniSliderComponent2.default, sliderProps)
          )
        );
      }
      /* eslint-enable no-constant-condition */

      return _globals.ReactBEM.createElement(
        'li',
        {
          bem: 'e:item',
          key: item.identifier,
          'data-identifier': item.identifier },
        _globals.ReactBEM.createElement(
          'bem',
          { specifier: '$b:controls' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: '$e:button m:withLabel', onClick: _this2._onButtonClick.bind(_this2, item), className: className },
            _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: _this2._getAssetPath('controls/adjustments/' + item.identifier + '.png', true) }),
            _globals.ReactBEM.createElement(
              'div',
              { bem: 'e:label' },
              _this2._t('controls.adjustments.' + item.identifier)
            ),
            miniSlider
          )
        )
      );
    });
  };

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  AdjustmentsControlsComponent.prototype.renderControls = function renderControls() {
    var listItems = this._renderListItems();

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:list' },
      _globals.ReactBEM.createElement(
        _scrollbarComponent2.default,
        null,
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:list' },
          listItems
        )
      )
    );
  };

  return AdjustmentsControlsComponent;
}(_controlsComponent2.default);

exports.default = AdjustmentsControlsComponent;


AdjustmentsControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _adjustmentsControlsComponent = __webpack_require__(104);

var _adjustmentsControlsComponent2 = _interopRequireDefault(_adjustmentsControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var TOOLS = ['brightness', 'clarity', 'contrast', 'exposure', 'highlights', 'saturation', 'shadows', 'gamma'];

/**
 * The adjustments controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */

var AdjustmentsControls = function (_Controls) {
  (0, _inherits3.default)(AdjustmentsControls, _Controls);

  function AdjustmentsControls() {
    (0, _classCallCheck3.default)(this, AdjustmentsControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user enters these controls
   * @this {AdjustmentsControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */
  AdjustmentsControls.onEnter = function onEnter(sharedState) {
    var editor = this.context.editor;

    var operationExistedBefore = editor.operations.exists('adjustments');
    var operation = editor.operations.getOrCreate('adjustments');
    var initialOptions = operation.serializeOptions();

    this.setSharedState({ operation: operation, operationExistedBefore: operationExistedBefore, initialOptions: initialOptions });
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @override
   * @ignore
   */


  AdjustmentsControls.isAvailable = function isAvailable(editor) {
    return TOOLS.filter(function (tool) {
      return editor.isToolEnabled(tool);
    }).length > 0;
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {String[]}
   */


  AdjustmentsControls.getPreloadAssets = function getPreloadAssets(editor) {
    return TOOLS.filter(function (tool) {
      return editor.isToolEnabled(tool);
    }).map(function (tool) {
      return 'controls/adjustments/' + tool + '.png';
    });
  };

  return AdjustmentsControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


AdjustmentsControls.controlsComponent = _adjustmentsControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
AdjustmentsControls.identifier = 'adjustments';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
AdjustmentsControls.iconPath = 'controls/overview/adjustments.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
AdjustmentsControls.languageKey = 'controls.overview.adjustments';

/**
 * The default options for this control
 * @type {Object}
 */
AdjustmentsControls.defaultOptions = {};

exports.default = AdjustmentsControls;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _sliderComponent = __webpack_require__(14);

var _sliderComponent2 = _interopRequireDefault(_sliderComponent);

var _colorPickerComponent = __webpack_require__(37);

var _colorPickerComponent2 = _interopRequireDefault(_colorPickerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BorderControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(BorderControlsComponent, _ControlsComponent);

  function BorderControlsComponent() {
    (0, _classCallCheck3.default)(this, BorderControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._hasDoneButton = true;
    _this._operation = _this.getSharedState('operation');
    _this._bindAll('_onThicknessUpdate', '_onColorUpdate');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the thickness has been updated
   * @param  {Number} thickness
   * @private
   */


  BorderControlsComponent.prototype._onThicknessUpdate = function _onThicknessUpdate(thickness) {
    var editor = this.context.editor;


    var inputDimensions = this.getSharedState('inputDimensions');
    this._operation.setThickness(thickness / inputDimensions.min());

    editor.render();
  };

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  BorderControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    var editor = this.context.editor;

    if (!this.getSharedState('operationExistedBefore')) {
      editor.operations.remove(this._operation);
    } else {
      this._operation.set(this.getSharedState('initialOptions'));
    }

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');
    editor.render();

    _ControlsComponent.prototype._onBackClick.call(this, e);
  };

  /**
   * Gets called when the color has changed
   * @param  {Color} color
   * @private
   */


  BorderControlsComponent.prototype._onColorUpdate = function _onColorUpdate(color) {
    this._operation.setColor(color);

    var editor = this.context.editor;

    editor.render();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  BorderControlsComponent.prototype.renderControls = function renderControls() {
    var inputDimensions = this.getSharedState('inputDimensions');

    var minThickness = 0;
    var maxThickness = 0.5 * inputDimensions.min();
    var currentWidth = this._operation.getThickness() * inputDimensions.min();

    return [_globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:slider' },
      _globals.ReactBEM.createElement(_sliderComponent2.default, {
        style: 'large',
        minValue: minThickness,
        maxValue: maxThickness,
        valueUnit: 'px',
        middleDot: false,
        label: this._t('controls.border.thickness'),
        onChange: this._onThicknessUpdate,
        value: currentWidth })
    ), _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:colorPicker' },
      _globals.ReactBEM.createElement(_colorPickerComponent2.default, {
        initialValue: this._operation.getColor().clone(),
        onChange: this._onColorUpdate })
    )];
  };

  return BorderControlsComponent;
}(_controlsComponent2.default);

exports.default = BorderControlsComponent;


BorderControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _borderControlsComponent = __webpack_require__(106);

var _borderControlsComponent2 = _interopRequireDefault(_borderControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The border controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BorderControls = function (_Controls) {
  (0, _inherits3.default)(BorderControls, _Controls);

  function BorderControls() {
    (0, _classCallCheck3.default)(this, BorderControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user enters these controls
   * @this {BorderControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */
  BorderControls.onEnter = function onEnter(sharedState) {
    var editor = this.context.editor;


    var operationExistedBefore = editor.operations.exists('border');
    var operation = editor.operations.getOrCreate('border', {
      thickness: 0.05
    });
    var initialOptions = operation.serializeOptions(['color', 'thickness']);

    this.setSharedState({
      operation: operation,
      operationExistedBefore: operationExistedBefore,
      initialOptions: initialOptions,
      inputDimensions: operation.getInputDimensions()
    });

    editor.zoom.set('auto', function () {
      editor.features.disable('zoom', 'drag');
    });
  };

  /**
   * Gets called when the user leaves these controls
   * @this {StickersControlsComponent}
   * @override
   * @ignore
   */


  BorderControls.onExit = function onExit() {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    editor.history.add(operation, this.getSharedState('initialOptions'), this.getSharedState('operationExistedBefore'));

    operation.setEnabled(true);

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @ignore
   */


  BorderControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('border');
  };

  return BorderControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


BorderControls.controlsComponent = _borderControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
BorderControls.identifier = 'border';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
BorderControls.iconPath = 'controls/overview/border.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
BorderControls.languageKey = 'controls.overview.border';

/**
 * The default options for this control
 * @type {Object}
 */
BorderControls.defaultOptions = {};

exports.default = BorderControls;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _spritesCanvasControlsComponent = __webpack_require__(30);

var _spritesCanvasControlsComponent2 = _interopRequireDefault(_spritesCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BrushCanvasControlsComponent = function (_SpritesCanvasControl) {
  (0, _inherits3.default)(BrushCanvasControlsComponent, _SpritesCanvasControl);

  function BrushCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, BrushCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _SpritesCanvasControl.call.apply(_SpritesCanvasControl, [this].concat(args)));

    _this._windowResized = false;
    _this._drawing = false;
    _this._bindAll('_onMouseEnter', '_onMouseLeave', '_onMouseDown', '_onMouseMove', '_onMouseUp', '_onMouseMoveOnCanvas', '_onWindowResize');

    _this._lastDrawPosition = null;

    _this._events = _globals.SDKUtils.extend(_this._events, (0, _defineProperty3.default)({}, _globals.Constants.EVENTS.WINDOW_RESIZE, _this._onWindowResize));

    _this.state = {
      cursorVisible: false,
      cursorPosition: new _globals.Vector2()
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  BrushCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _SpritesCanvasControl.prototype.componentDidMount.call(this);
    this._updateContainerRect();
  };

  /**
   * Gets called when this component has been updated
   */


  BrushCanvasControlsComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this._windowResized) {
      this._updateContainerRect();
      this._windowResized = false;
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the window has been resized
   * @private
   */


  BrushCanvasControlsComponent.prototype._onWindowResize = function _onWindowResize() {
    this._windowResized = true;
  };

  /**
   * Gets called when an operation has been removed
   * @param  {Operation} operation
   * @private
   */


  BrushCanvasControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    void 0;
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  BrushCanvasControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    if (operation === this.getSharedState('operation')) {
      this.forceUpdate();
    }
  };

  /**
   * Gets called when the user presses a mouse button
   * @param  {Event} e
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseDown = function _onMouseDown(e) {
    e.preventDefault();

    this._optionsBeforeDraw = this.getSharedState('operation').serializeOptions();
    delete this._optionsBeforeDraw.enabled;

    this._operationExistedBeforeDraw = this.getSharedState('operationExistedBefore');
    this.setSharedState({ operationExistedBefore: true }, false);

    var outputDimensions = this.context.editor.getOutputDimensions();
    var cursorPosition = this._getCursorPosition(e);

    var brush = this.getSharedState('brush');
    var thickness = this.getSharedState('thickness') / outputDimensions.min();
    var color = this.getSharedState('color');
    var hardness = this.getSharedState('hardness');
    this._drawing = true;
    this._currentPath = brush.createPath(thickness, hardness, color);
    this._currentPath.addControlPoint(cursorPosition.clone().divide(outputDimensions));

    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('touchmove', this._onMouseMove);
    document.addEventListener('mouseup', this._onMouseUp);
    document.addEventListener('touchend', this._onMouseUp);
  };

  /**
   * Gets called when the user releases a mouse button
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseUp = function _onMouseUp() {
    this._currentPath.setClosed(true);

    var editor = this.context.editor;

    var outputTextureDimensions = editor.getOutputTextureDimensions();
    this.getSharedState('brush').render(outputTextureDimensions);

    this._currentPath = null;
    this._drawing = false;

    editor.history.add(this.getSharedState('operation'), this._optionsBeforeDraw, this._operationExistedBeforeDraw);

    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('touchmove', this._onMouseMove);
    document.removeEventListener('mouseup', this._onMouseUp);
    document.removeEventListener('touchend', this._onMouseUp);
  };

  /**
   * Gets called when the user enters the canvas
   * @param {Event} event
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseEnter = function _onMouseEnter(e) {
    var cursorPosition = this._getCursorPosition(e);
    this.setState({
      cursorVisible: true,
      cursorPosition: cursorPosition
    });
    this._onMouseMove(e);
  };

  /**
   * Gets called when the user leaves the canvas
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseLeave = function _onMouseLeave() {
    this.setState({
      cursorVisible: false
    });
  };

  /**
   * Gets called while the user moves the mouse
   * @param {Event} e
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseMove = function _onMouseMove(e) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();
    var outputTextureDimensions = editor.getOutputTextureDimensions();

    var zoom = editor.zoom.get();
    var cursorPosition = this._getCursorPosition(e);
    this.setState({ cursorPosition: cursorPosition });

    var shouldDraw = void 0;
    if (!this._lastDrawPosition) {
      shouldDraw = true;
    } else {
      var brushSize = this.getSharedState('thickness');
      var distance = this._lastDrawPosition.clone().subtract(cursorPosition).abs().len() / zoom;
      shouldDraw = distance >= brushSize / 10;
    }

    if (this._drawing && shouldDraw) {
      this._currentPath.addControlPoint(cursorPosition.clone().divide(outputDimensions));

      this.getSharedState('brush').render(outputTextureDimensions);

      this._lastDrawPosition = cursorPosition.clone();
    }
  };

  /**
   * Gets called while the user moves the mouse on top of the canvas. Updates
   * the cursor cursor position
   * @param  {Event} e
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseMoveOnCanvas = function _onMouseMoveOnCanvas(e) {
    var cursorPosition = this._getCursorPosition(e);
    this.setState({ cursorPosition: cursorPosition });
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the cursor's style object
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getCursorStyle = function _getCursorStyle() {
    var thickness = this.getSharedState('thickness');
    var color = this.getSharedState('color');

    var cursorPosition = this.state.cursorPosition;

    return {
      left: cursorPosition.x,
      top: cursorPosition.y,
      width: thickness,
      height: thickness,
      background: color.toRGBA(),
      marginLeft: thickness * -0.5,
      marginTop: thickness * -0.5
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Updates the container bounding rect
   * @private
   */


  BrushCanvasControlsComponent.prototype._updateContainerRect = function _updateContainerRect() {
    this._containerBoundingRect = this.refs.innerContainer.getBoundingClientRect();
  };

  /**
   * Returns the cursor position for the given event
   * @param  {Event} event
   * @private
   */


  BrushCanvasControlsComponent.prototype._getCursorPosition = function _getCursorPosition(event) {
    var position = _globals.Utils.getEventPosition(event);
    var boundingRect = this._containerBoundingRect;
    return position.subtract(boundingRect.left, boundingRect.top);
  };

  /**
   * Returns the properties for the outer container
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getContainerProps = function _getContainerProps() {
    var props = _SpritesCanvasControl.prototype._getContainerProps.call(this);

    props.onMouseDown = props.onTouchStart = this._onMouseDown;
    return props;
  };

  /**
   * Returns the properties for the canvas container
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getInnerContainerProps = function _getInnerContainerProps() {
    var props = _SpritesCanvasControl.prototype._getInnerContainerProps.call(this);

    // This disables the hit testing for this sub control
    delete props.onClick;

    props.onMouseEnter = this._onMouseEnter;
    props.onMouseLeave = this._onMouseLeave;
    props.onMouseMove = this._onMouseMoveOnCanvas;
    return props;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * This renders controls on top of the sprites
   * @return {ReactBEM.Element}
   * @private
   */


  BrushCanvasControlsComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    var cursorClass = this.state.cursorVisible ? 'is-visible' : null;
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:brushCanvasControls' },
      _globals.ReactBEM.createElement('div', { bem: 'e:cursor', className: cursorClass, style: this._getCursorStyle() })
    );
  };

  return BrushCanvasControlsComponent;
}(_spritesCanvasControlsComponent2.default);

exports.default = BrushCanvasControlsComponent;


BrushCanvasControlsComponent.contextTypes = _spritesCanvasControlsComponent2.default.contextTypes;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _sliderComponent = __webpack_require__(14);

var _sliderComponent2 = _interopRequireDefault(_sliderComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _colorPickerComponent = __webpack_require__(37);

var _colorPickerComponent2 = _interopRequireDefault(_colorPickerComponent);

var _presetPreviewItemComponent = __webpack_require__(111);

var _presetPreviewItemComponent2 = _interopRequireDefault(_presetPreviewItemComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BrushControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(BrushControlsComponent, _ControlsComponent);

  function BrushControlsComponent() {
    var _this$_events;

    (0, _classCallCheck3.default)(this, BrushControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._hasDoneButton = false;
    _this._brushOptions = {
      thickness: _this.getSharedState('thickness'),
      color: _this.getSharedState('color').clone()
    };

    _this._hasPresets = _this.props.options.thicknessPresets && _this.props.options.thicknessPresets.length > 0;
    _this._hasSlider = !_this._hasPresets;

    _this._bindAll('_onThicknessUpdated', '_onColorUpdated', '_onOperationUpdated', '_onOperationRemoved');

    _this.state = {
      thicknessControlsEnabled: false
    };

    _this._events = (_this$_events = {}, (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.OPERATION_REMOVED, _this._onOperationRemoved), _this$_events);
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  BrushControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _ControlsComponent.prototype.componentDidMount.call(this);

    var editor = this.context.editor;

    editor.zoom.set('auto');
    editor.features.disable('zoom', 'drag');
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks a thickness preset
   * @param  {Number} thickness
   * @private
   */


  BrushControlsComponent.prototype._onThicknessClick = function _onThicknessClick(thickness) {
    this._onThicknessUpdated(thickness);
    this.forceUpdate();
  };

  /**
   * Gets called when an operation has been removed
   * @param  {Operation} operation
   * @private
   */


  BrushControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    if (operation !== this.getSharedState('operation')) return;
    if (this._backButtonClicked) return;

    // Operation can be removed by the undo button. We need
    // to make sure we re-create the operation for the lifetime
    // of this control
    var editor = this.context.editor;

    var newOperation = editor.operations.getOrCreate('sprite');

    var brush = newOperation.createBrush();
    newOperation.addSprite(brush);

    this.setSharedState({
      operation: newOperation,
      brush: brush,
      operationExistedBefore: false,
      initialOptions: {}
    });

    editor.render();
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  BrushControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    var _this2 = this;

    if (operation === this.getSharedState('operation')) {
      (function () {
        // SpriteOperation re-creates all sprites when they're mass-assigned,
        // so we need to find the new instance by matching against the previous ID
        var previousBrush = _this2.getSharedState('brush');
        if (previousBrush) {
          var brush = operation.getSprites().filter(function (s) {
            return s.getId() === previousBrush.getId();
          })[0];
          _this2.setSharedState({ brush: brush });
        }

        // Trigger brush canvas rendering
        operation.setEnabled(true);
        _this2.context.editor.render(function () {
          operation.setEnabled(false);
          _this2.context.editor.render();
        });
      })();
    }
  };

  /**
   * Gets called when the thickness has been updated
   * @param {Number} thickness
   * @private
   */


  BrushControlsComponent.prototype._onThicknessUpdated = function _onThicknessUpdated(thickness) {
    this.setSharedState({ thickness: thickness });
    this._brushOptions.thickness = thickness;
  };

  /**
   * Gets called when the color has been updated
   * @param  {Color} color
   * @private
   */


  BrushControlsComponent.prototype._onColorUpdated = function _onColorUpdated(color) {
    this.setSharedState({ color: color });
    this._brushOptions.color = color.clone();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the thickness list items
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  BrushControlsComponent.prototype._renderThicknessItems = function _renderThicknessItems() {
    var _this3 = this;

    var thicknessPresets = this.props.options.thicknessPresets;

    var maxThickness = Math.max.apply(null, thicknessPresets);
    return thicknessPresets.map(function (thickness) {
      var isActive = _this3.getSharedState('thickness') === thickness;
      return _globals.ReactBEM.createElement(_presetPreviewItemComponent2.default, {
        thickness: thickness,
        maxThickness: maxThickness,
        active: isActive,
        key: thickness,
        onClick: _this3._onThicknessClick.bind(_this3, thickness) });
    });
  };

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  BrushControlsComponent.prototype.renderControls = function renderControls() {
    var editor = this.context.editor;

    var zoom = editor.zoom.get();
    var items = [];

    if (this._hasSlider) {
      var finalDimensions = editor.getFinalDimensions();
      var minThickness = 1;
      var maxThickness = Math.round(finalDimensions.clone().multiply(zoom).min() / 2);
      var currentWidth = this._brushOptions.thickness;

      items.push(_globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell m:slider' },
        _globals.ReactBEM.createElement(_sliderComponent2.default, {
          style: 'large',
          minValue: minThickness,
          maxValue: maxThickness,
          valueUnit: 'px',
          middleDot: false,
          label: this._t('controls.brush.thickness'),
          onChange: this._onThicknessUpdated,
          value: currentWidth })
      ));
    } else if (this._hasPresets) {
      items.push(_globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell m:list' },
        _globals.ReactBEM.createElement(
          _scrollbarComponent2.default,
          null,
          _globals.ReactBEM.createElement(
            'ul',
            { bem: '$e:list' },
            this._renderThicknessItems()
          )
        )
      ));
    }

    items.push(_globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:colorPicker' },
      _globals.ReactBEM.createElement(_colorPickerComponent2.default, {
        initialValue: this._brushOptions.color.clone(),
        onChange: this._onColorUpdated })
    ));

    return items;
  };

  return BrushControlsComponent;
}(_controlsComponent2.default);

exports.default = BrushControlsComponent;


BrushControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _brushControlsComponent = __webpack_require__(109);

var _brushControlsComponent2 = _interopRequireDefault(_brushControlsComponent);

var _brushCanvasControlsComponent = __webpack_require__(108);

var _brushCanvasControlsComponent2 = _interopRequireDefault(_brushCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The brush controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BrushControls = function (_Controls) {
  (0, _inherits3.default)(BrushControls, _Controls);

  function BrushControls() {
    (0, _classCallCheck3.default)(this, BrushControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user leaves these controls
   * @this {StickersControlsComponent}
   * @override
   * @ignore
   */
  BrushControls.onExit = function onExit() {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    operation.setEnabled(true);

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Gets called when the user enters these controls
   * @this {BrushControlsComponent}
   * @param {SharedState} sharedState
   * @param {Object} options
   * @override
   * @ignore
   */


  BrushControls.onEnter = function onEnter(sharedState, options) {
    var editor = this.context.editor;


    editor.zoom.set('auto', function () {
      operation.setEnabled(false);
      editor.render();
    });

    var outputDimensions = editor.getOutputDimensions();
    var operationExistedBefore = editor.operations.exists('sprite');
    var operation = editor.operations.getOrCreate('sprite');
    var brush = operation.createBrush();
    var initialOptions = operation.serializeOptions();
    operation.addSprite(brush);

    var thickness = outputDimensions.min() * 0.05;
    if (options.thicknessPresets && options.thicknessPresets.length > 0) {
      thickness = options.thicknessPresets[0];
    }

    var color = new _globals.Color(1, 0, 0, 1);
    var hardness = 1;

    this.setSharedState({
      operationExistedBefore: operationExistedBefore, operation: operation, brush: brush, initialOptions: initialOptions, thickness: thickness, color: color, hardness: hardness
    });
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @override
   * @ignore
   */


  BrushControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('brush');
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {String[]}
   */


  BrushControls.getPreloadAssets = function getPreloadAssets() {
    return ['controls/brush/thickness.png'];
  };

  return BrushControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


BrushControls.controlsComponent = _brushControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
BrushControls.canvasControlsComponent = _brushCanvasControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
BrushControls.identifier = 'brush';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
BrushControls.iconPath = 'controls/overview/brush.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
BrushControls.languageKey = 'controls.overview.brush';

/**
 * The default options for this control
 * @type {Object}
 */
BrushControls.defaultOptions = {
  thicknessPresets: []
};

exports.default = BrushControls;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PresetPreviewItemComponent = function (_BaseComponent) {
  (0, _inherits3.default)(PresetPreviewItemComponent, _BaseComponent);

  function PresetPreviewItemComponent() {
    (0, _classCallCheck3.default)(this, PresetPreviewItemComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */
  PresetPreviewItemComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this._renderCanvas();
  };

  /**
   * Gets called after this component has been updated
   */


  PresetPreviewItemComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderCanvas();
  };

  // -------------------------------------------------------------------------- CANVAS RENDERING

  /**
   * Renders the current font family onto the canvas
   * @private
   */


  PresetPreviewItemComponent.prototype._renderCanvas = function _renderCanvas() {
    var canvas = this.refs.canvas;

    var context = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var _props = this.props,
        maxThickness = _props.maxThickness,
        thickness = _props.thickness;

    var diameter = canvas.width * (thickness / maxThickness);
    var radius = diameter / 2;

    context.fillStyle = 'white';
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    context.fill();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  PresetPreviewItemComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:controls $e:list' },
      _globals.ReactBEM.createElement(
        'li',
        {
          bem: 'e:item',
          onClick: this.props.onClick },
        _globals.ReactBEM.createElement(
          'bem',
          { specifier: '$b:controls' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: '$e:button m:withLabel', className: this.props.active ? 'is-active' : null },
            _globals.ReactBEM.createElement('canvas', { bem: 'e:canvas', ref: 'canvas' }),
            _globals.ReactBEM.createElement(
              'div',
              { bem: 'e:label' },
              this.props.thickness
            )
          )
        )
      )
    );
  };

  return PresetPreviewItemComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = PresetPreviewItemComponent;


PresetPreviewItemComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

var _canvasControlsComponent = __webpack_require__(24);

var _canvasControlsComponent2 = _interopRequireDefault(_canvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_DIMENSIONS = new _globals.Vector2(50, 50); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var StraightenCanvasControlsComponent = function (_CanvasControlsCompon) {
  (0, _inherits3.default)(StraightenCanvasControlsComponent, _CanvasControlsCompon);

  function StraightenCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, StraightenCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._needsStyleFixes = true;
    _this._bindAll('_onCenterDragStart', '_onCenterDrag');

    _this.state = {
      dimensions: _this.getSharedState('initialDimensions')
    };
    return _this;
  }

  /**
   * Fixes styles in IE
   */


  StraightenCanvasControlsComponent.prototype.fixStyles = function fixStyles() {
    if (_globals.Utils.Browser.isIElte(11)) {
      var editor = this.context.editor;
      var container = this.refs.container;


      var canvasDimensions = editor.getCanvasDimensions(false);
      var cellHeight = canvasDimensions.y;
      container.style.height = cellHeight + 'px';
    }
  };

  /**
   * Gets called when the shared state did change
   * @param {Object} newState
   */


  StraightenCanvasControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(newState) {
    if (newState !== this.getSharedState('ratio')) {
      this._updateDimensions();
    }
  };

  /**
   * Updates the dimensions display
   * @private
   */


  StraightenCanvasControlsComponent.prototype._updateDimensions = function _updateDimensions() {
    var operation = this.getSharedState('operation');
    var ratio = this.getSharedState('ratio') || { ratio: '*' };

    var dimensions = void 0;
    if (ratio.dimensions) {
      dimensions = ratio.dimensions.clone();
    } else {
      var inputDimensions = operation.getInputDimensions();
      var start = this.getSharedState('start');
      var end = this.getSharedState('end');
      var cropSize = end.clone().subtract(start);
      dimensions = cropSize.multiply(inputDimensions).floor();
    }

    this.setState({ dimensions: dimensions });
  };

  // -------------------------------------------------------------------------- CENTER DRAGGING

  /**
   * Gets called when the user stars dragging the center
   * @private
   */


  StraightenCanvasControlsComponent.prototype._onCenterDragStart = function _onCenterDragStart() {
    var start = this.getSharedState('start');
    var end = this.getSharedState('end');

    this._initialValues = {
      start: start.clone(),
      end: end.clone(),
      size: end.clone().subtract(start)
    };
  };

  /**
   * Gets called while the user drags the center
   * @param {Vector2} offset
   * @private
   */


  StraightenCanvasControlsComponent.prototype._onCenterDrag = function _onCenterDrag(offset) {
    var editor = this.context.editor;
    var _initialValues = this._initialValues,
        start = _initialValues.start,
        size = _initialValues.size;

    var outputDimensions = editor.getOutputDimensions();
    var cropDifference = offset.clone().divide(outputDimensions);

    var minStart = new _globals.Vector2(0, 0);
    var maxStart = new _globals.Vector2(1, 1).subtract(size);

    var newStart = start.clone().add(cropDifference).clamp(minStart, maxStart);
    var newEnd = newStart.clone().add(size);

    this.setSharedState({ start: newStart, end: newEnd });
  };

  // -------------------------------------------------------------------------- KNOB DRAGGING

  /**
   * Gets called when the user starts dragging a knob
   * @param {String} optionName
   * @private
   */


  StraightenCanvasControlsComponent.prototype._onKnobDragStart = function _onKnobDragStart(optionName) {
    this._currentDragOption = optionName;

    this._initialValues = {
      start: this.getSharedState('start').clone(),
      end: this.getSharedState('end').clone()
    };
  };

  /**
   * Gets called while the user drags a knob
   * @param {String} optionName
   * @param {Vector2} offset
   * @private
   */


  StraightenCanvasControlsComponent.prototype._onKnobDrag = function _onKnobDrag(optionName, offset) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var _ref = this.getSharedState('ratio') || { ratio: '*' },
        ratio = _ref.ratio;

    var newSize = this._initialValues.end.clone().subtract(this._initialValues.start).multiply(outputDimensions);

    // Calculate max size and new size
    var maxSize = void 0;
    if (optionName === 'start') {
      newSize.subtract(offset);
      maxSize = this._initialValues.end.clone().multiply(outputDimensions);
    } else if (optionName === 'end') {
      newSize.add(offset);
      maxSize = new _globals.Vector2(1, 1).subtract(this._initialValues.start).multiply(outputDimensions);
    }

    newSize.x = Math.min(Math.max(MIN_DIMENSIONS.x, newSize.x), maxSize.x);
    if (ratio !== '*') {
      newSize.y = newSize.x / ratio;
    }
    newSize.y = Math.min(Math.max(MIN_DIMENSIONS.y, newSize.y), maxSize.y);
    if (ratio !== '*') {
      newSize.x = newSize.y * ratio;
    }

    if (optionName === 'start') {
      var newStart = this._initialValues.end.clone().subtract(newSize.clone().divide(outputDimensions));
      this.setSharedState({ start: newStart }, false);
      this._updateDimensions();
    } else if (optionName === 'end') {
      var newEnd = this._initialValues.start.clone().add(newSize.clone().divide(outputDimensions));
      this.setSharedState({ end: newEnd }, false);
      this._updateDimensions();
    }
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Returns the dimensions according to the current crop dimensions
   * @private
   */


  StraightenCanvasControlsComponent.prototype._calculateDimensions = function _calculateDimensions() {
    var editor = this.context.editor;

    var start = this.getSharedState('start');
    var end = this.getSharedState('end');

    return end.clone().subtract(start).multiply(editor.getInputDimensions()).round();
  };

  // -------------------------------------------------------------------------- RESIZING / STYLING

  /**
   * Returns the styles (width / height) for the crop areas that define the
   * crop size
   * @return {Object}
   * @private
   */


  StraightenCanvasControlsComponent.prototype._getAreaStyles = function _getAreaStyles() {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();
    var canvasDimensions = editor.getCanvasDimensions();

    var start = this.getSharedState('start').clone().multiply(outputDimensions).floor();
    var end = this.getSharedState('end').clone().multiply(outputDimensions).ceil();
    var size = end.clone().subtract(start);

    var offset = canvasDimensions.clone().subtract(outputDimensions).divide(2).floor();

    var padding = editor.getPadding();
    start.add(offset).add(0, padding[0]);

    return {
      topLeft: this._getDimensionsStyles(start.x, start.y),
      topCenter: this._getDimensionsStyles(size.x, start.y),
      centerLeft: this._getDimensionsStyles(start.x, size.y),
      center: this._getDimensionsStyles(size.x, size.y)
    };
  };

  /**
   * Returns the dimensions style (width / height) for the given dimensions
   * @param {Number} x
   * @param {Number} y
   * @return {Object}
   * @private
   */


  StraightenCanvasControlsComponent.prototype._getDimensionsStyles = function _getDimensionsStyles(x, y) {
    // Table cells and rows can't have a width / height of 0
    return {
      width: Math.max(1, x),
      height: Math.max(1, y)
    };
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  StraightenCanvasControlsComponent.prototype.renderWithBEM = function renderWithBEM() {
    var dimensions = this.state.dimensions;

    var areaStyles = this._getAreaStyles();
    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'b:canvasControls e:container m:full', ref: 'container' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:cropCanvasControls' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:row' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:dark', style: areaStyles.topLeft },
            '\xA0'
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:dark', style: areaStyles.topCenter },
            '\xA0'
          ),
          _globals.ReactBEM.createElement('div', { bem: 'e:cell m:dark' })
        ),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:row' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:dark', style: areaStyles.centerLeft },
            '\xA0'
          ),
          _globals.ReactBEM.createElement(
            _draggableComponent2.default,
            {
              onStart: this._onCenterDragStart,
              onDrag: this._onCenterDrag },
            _globals.ReactBEM.createElement(
              'div',
              { bem: 'e:cell m:bordered', style: areaStyles.center },
              _globals.ReactBEM.createElement(
                _draggableComponent2.default,
                {
                  onStart: this._onKnobDragStart.bind(this, 'start'),
                  onDrag: this._onKnobDrag.bind(this, 'start') },
                _globals.ReactBEM.createElement(
                  'div',
                  { bem: 'e:knob m:topLeft $b:knob' },
                  _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/knobs/resize-diagonal-down.png', true) })
                )
              ),
              _globals.ReactBEM.createElement(
                'div',
                { bem: 'e:dimensions' },
                dimensions.x + 'x' + dimensions.y
              ),
              _globals.ReactBEM.createElement(
                _draggableComponent2.default,
                {
                  onStart: this._onKnobDragStart.bind(this, 'end'),
                  onDrag: this._onKnobDrag.bind(this, 'end') },
                _globals.ReactBEM.createElement(
                  'div',
                  { bem: 'e:knob m:bottomRight $b:knob' },
                  _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/knobs/resize-diagonal-down.png', true) })
                )
              )
            )
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:dark' },
            '\xA0'
          )
        ),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:row' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:dark' },
            '\xA0'
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:dark' },
            '\xA0'
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:dark' },
            '\xA0'
          )
        )
      )
    );
  };

  return StraightenCanvasControlsComponent;
}(_canvasControlsComponent2.default);

exports.default = StraightenCanvasControlsComponent;


StraightenCanvasControlsComponent.contextTypes = _canvasControlsComponent2.default.contextTypes;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _sliderOverlayComponent = __webpack_require__(20);

var _sliderOverlayComponent2 = _interopRequireDefault(_sliderOverlayComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var StraightenControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(StraightenControlsComponent, _ControlsComponent);

  function StraightenControlsComponent() {
    (0, _classCallCheck3.default)(this, StraightenControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._hasDoneButton = true;
    _this._bindAll('_selectRatio', '_onRotationChange');

    _this.state = { ratio: null };
    _this._ratios = _this.constructor.getRatios(_this.props.options);

    _this._selectInitialRatio(!_this.getSharedState('cropOperationExistedBefore'));
    return _this;
  }

  // -------------------------------------------------------------------------- INITIALIZATION

  /**
   * Initializes the available ratios
   * @param {Object} options
   * @return {Object[]}
   */


  StraightenControlsComponent.getRatios = function getRatios(options) {
    var ratios = options.ratios,
        replaceRatios = options.replaceRatios,
        selectableRatios = options.selectableRatios;

    ratios = ratios || [];

    var availableRatios = void 0;
    availableRatios = _globals.Constants.DEFAULTS.CROP_RATIOS;
    if (replaceRatios) {
      availableRatios = ratios;
    } else {
      availableRatios = availableRatios.concat(ratios);
    }

    if (selectableRatios && selectableRatios.length) {
      availableRatios = _globals.Utils.select(availableRatios, selectableRatios, function (r) {
        return r.name;
      });
    }

    return availableRatios;
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Checks if the component should change from the given state
   * @param  {Object} oldState
   * @param  {Object} newState
   * @return {Boolean}
   */


  StraightenControlsComponent.prototype.shouldSharedComponentUpdate = function shouldSharedComponentUpdate(oldState, newState) {
    return oldState.ratio !== newState.ratio;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the rotation has been chagned (by using the slider)
   * @param  {Number} rotation
   * @private
   */


  StraightenControlsComponent.prototype._onRotationChange = function _onRotationChange(rotation) {
    var editor = this.context.editor;

    rotation = rotation * Math.PI / 180;
    editor.setRotation(rotation);

    // Update sprite scale
    this._updateSpriteScale();

    editor.render();
    this.setSharedState({ rotation: rotation });
  };

  /**
   * Updates the sprite scale so that the cropped area fits
   * inside the sprite
   * @private
   */


  StraightenControlsComponent.prototype._updateSpriteScale = function _updateSpriteScale() {
    var editor = this.context.editor;

    var rotatedSpriteDimensions = this._getRotatedSpriteDimensions();
    var dimensions = editor.getOutputDimensions(false);

    var distanceToCorner = dimensions.clone().multiply(0.5);
    distanceToCorner.subtract(rotatedSpriteDimensions.clone().divide(2));
    distanceToCorner.abs();

    var scale = 1;
    if (distanceToCorner.y > distanceToCorner.x) {
      scale = distanceToCorner.y * 2 / dimensions.y + 1;
    } else {
      scale = distanceToCorner.x * 2 / dimensions.x + 1;
    }
    editor.setSpriteScale(scale);
  };

  /**
   * Gets the outer bounding dimensions of the rotated sprite
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  StraightenControlsComponent.prototype._getRotatedSpriteDimensions = function _getRotatedSpriteDimensions() {
    var editor = this.context.editor;

    var rotation = editor.getRotation();

    var outputDimensions = editor.getOutputDimensions(false);

    return new _globals.Vector2(Math.abs(outputDimensions.x * Math.cos(rotation)) + Math.abs(outputDimensions.y * Math.sin(rotation)), Math.abs(outputDimensions.x * Math.sin(rotation)) + Math.abs(outputDimensions.y * Math.cos(rotation)));
  };

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  StraightenControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    var editor = this.context.editor;


    var operation = this.getSharedState('operation');
    if (this.getSharedState('cropOperationExistedBefore')) {
      operation.set(this.getSharedState('initialCropOptions'));
      operation.setEnabled(true, false);
    } else {
      editor.operations.remove(operation);
    }

    editor.setPadding(false);
    editor.setRotation(0);
    editor.setSpriteScale(1);

    // Enable zoom and drag again
    editor.features.enable('zoom', 'drag');

    editor.zoom.undo();

    _ControlsComponent.prototype._onBackClick.call(this, e);
  };

  /**
   * Gets called when the user clicks the done button
   * @param {Event} e
   * @private
   */


  StraightenControlsComponent.prototype._onDoneClick = function _onDoneClick(e) {
    var editor = this.context.editor;


    var ratio = this.getSharedState('ratio');
    var start = this.getSharedState('start').clone();
    var end = this.getSharedState('end').clone();
    var options = {
      rotation: editor.getRotation(),
      scale: editor.getSpriteScale(),
      start: start,
      end: end,
      dimensions: ratio.dimensions || null,
      enabled: true
    };

    var cropOperation = editor.operations.get('crop');
    var orientationOperation = editor.operations.get('orientation');

    editor.broadcastCrop(cropOperation, options);

    cropOperation.set(options);

    editor.setPadding(false);
    editor.setRotation(0);
    editor.setSpriteScale(1);

    var historyItems = [];

    var initialCropOptions = this.getSharedState('initialCropOptions');
    var cropOperationExistedBefore = this.getSharedState('cropOperationExistedBefore');
    if (!cropOperation.optionsEqual(initialCropOptions)) {
      historyItems.push({
        operation: cropOperation,
        options: initialCropOptions,
        existent: cropOperationExistedBefore,
        undo: function undo(operation, newOptions) {
          editor.broadcastCrop(operation, newOptions);
        }
      });
    } else if (!cropOperationExistedBefore) {
      editor.operations.remove(cropOperation);
    }

    var initialOrientationOptions = this.getSharedState('initialOrientationOptions');
    var orientationOperationExistedBefore = this.getSharedState('orientationOperationExistedBefore');
    if (!orientationOperation.optionsEqual(initialOrientationOptions)) {
      historyItems.push({
        operation: orientationOperation,
        options: initialOrientationOptions,
        existent: orientationOperationExistedBefore,
        undo: function undo(operation, newOptions) {
          if (operation.getRotation() !== newOptions.rotation) {
            editor.broadcastRotate(newOptions.rotation - operation.getRotation());
          }

          var rotation = newOptions.rotation;
          var inverseFlip = rotation === 90 || rotation === 270;
          if (operation.getFlipVertically() !== newOptions.flipVertically) {
            editor.broadcastFlip(inverseFlip ? 'horizontal' : 'vertical');
          } else if (operation.getFlipHorizontally() !== newOptions.flipHorizontally) {
            editor.broadcastFlip(inverseFlip ? 'vertical' : 'horizontal');
          }
        }
      });
    } else if (!orientationOperationExistedBefore) {
      editor.operations.remove(orientationOperation);
    }

    if (historyItems.length) {
      editor.history.add(historyItems);
    }

    // Enable zoom and drag again
    editor.features.enable('zoom', 'drag');

    // Zoom to auto again
    editor.zoom.set('auto');

    _ControlsComponent.prototype._onDoneClick.call(this, e);
  };

  // -------------------------------------------------------------------------- RATIO HANDLING

  /**
   * Selects the initial ratio
   * @param {Boolean} setDefaultOptions = true
   * @private
   */


  StraightenControlsComponent.prototype._selectInitialRatio = function _selectInitialRatio() {
    var setDefaultOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var operation = this.getSharedState('operation');
    var selectedRatio = null;

    // 1. Selected ratio stored in operation
    var operationRatio = operation._ratio;
    if (operationRatio) {
      var matchingRatios = this._ratios.filter(function (ratio) {
        return ratio === operationRatio;
      });
      selectedRatio = matchingRatios[0];
    }

    // 2. First ratio with `selected` flag
    if (!selectedRatio) {
      var selectedRatios = this._ratios.filter(function (ratio) {
        return ratio.selected;
      });
      selectedRatio = selectedRatios.pop();
    }

    // 3. First ratio
    if (!selectedRatio) {
      selectedRatio = this._ratios[0];
    }

    return this._selectRatio(selectedRatio, setDefaultOptions, false);
  };

  /**
   * Selects the given ratio
   * @param {String} ratio
   * @param {Boolean} setDefaultOptions = true
   * @param {Boolean} update = true
   * @private
   */


  StraightenControlsComponent.prototype._selectRatio = function _selectRatio(ratio) {
    var setDefaultOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var operation = this.getSharedState('operation');
    if (setDefaultOptions) {
      this._setDefaultOptionsForRatio(ratio, update);
    }
    operation._ratio = ratio;
    this.setSharedState({ ratio: ratio }, update);
  };

  /**
   * Sets the default options (start / end) for the given ratio
   * @param {Object} ratio
   * @param {Boolean} update = false
   * @private
   */


  StraightenControlsComponent.prototype._setDefaultOptionsForRatio = function _setDefaultOptionsForRatio(_ref) {
    var ratio = _ref.ratio,
        name = _ref.name;
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var editor = this.context.editor;

    var start = new _globals.Vector2();
    var end = new _globals.Vector2();

    if (ratio === '*') {
      start = new _globals.Vector2(0, 0);
      end = new _globals.Vector2(1, 1);
    } else {
      var outputDimensions = editor.getOutputDimensions();
      var canvasRatio = outputDimensions.x / outputDimensions.y;
      if (canvasRatio <= ratio) {
        var height = 1 / outputDimensions.y * (outputDimensions.x / ratio);
        start.set(0, (1.0 - height) / 2);
        end.set(1.0, 1 - start.y);
      } else {
        var width = 1 / outputDimensions.x * (ratio * outputDimensions.y);
        start.set((1 - width) / 2, 0);
        end.set(1 - start.x, 1.0);
      }
    }

    this.setSharedState({ start: start, end: end }, update);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the overlay controls of this component
   * @return {ReactBEM.Element}
   */


  StraightenControlsComponent.prototype.renderOverlayControls = function renderOverlayControls() {
    var rotation = this.getSharedState('rotation') * 180 / Math.PI;
    return _globals.ReactBEM.createElement(_sliderOverlayComponent2.default, {
      value: rotation,
      minValue: -45,
      middleDot: true,
      maxValue: 45,
      valueUnit: '\xB0',
      label: this._t('controls.crop.rotation'),
      onChange: this._onRotationChange });
  };

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  StraightenControlsComponent.prototype.renderControls = function renderControls() {
    var _this2 = this;

    var listItems = this._ratios.map(function (ratio) {
      return _globals.ReactBEM.createElement(
        'li',
        {
          bem: 'e:item',
          key: ratio.name },
        _globals.ReactBEM.createElement(
          'bem',
          { specifier: '$b:controls' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: '$e:button m:withLabel',
              className: _this2.getSharedState('ratio') === ratio ? 'is-active' : null,
              onClick: _this2._selectRatio.bind(_this2, ratio) },
            _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: _this2._getAssetPath('controls/crop/' + ratio.name + '.png', true) }),
            _globals.ReactBEM.createElement(
              'div',
              { bem: 'e:label' },
              _this2._t('controls.crop.' + ratio.name)
            )
          )
        )
      );
    });

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:list' },
      _globals.ReactBEM.createElement(
        _scrollbarComponent2.default,
        null,
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:list' },
          listItems
        )
      )
    );
  };

  return StraightenControlsComponent;
}(_controlsComponent2.default);

exports.default = StraightenControlsComponent;


StraightenControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _topBarComponent = __webpack_require__(31);

var _topBarComponent2 = _interopRequireDefault(_topBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var CropTopBarComponent = function (_TopBarComponent) {
  (0, _inherits3.default)(CropTopBarComponent, _TopBarComponent);

  function CropTopBarComponent() {
    (0, _classCallCheck3.default)(this, CropTopBarComponent);
    return (0, _possibleConstructorReturn3.default)(this, _TopBarComponent.apply(this, arguments));
  }

  /**
   * Gets called when the user clicks one of the rotate buttons
   * @param  {String} direction
   * @private
   */
  CropTopBarComponent.prototype._onRotateClick = function _onRotateClick(direction) {
    var degrees = void 0;
    if (direction === 'cw') {
      degrees = 90;
    } else if (direction === 'ccw') {
      degrees = -90;
    }

    var editor = this.context.editor;

    var operation = this.getSharedState('orientationOperation');
    var newRotation = (operation.getRotation() + degrees) % 360;

    var start = this.getSharedState('start');
    var end = this.getSharedState('end');
    var tempStart = start.clone();
    if (direction === 'cw') {
      start.set(1.0 - end.y, tempStart.x);
      end.set(1.0 - tempStart.y, end.x);
    } else if (direction === 'ccw') {
      start.set(tempStart.y, 1.0 - end.x);
      end.set(end.y, 1.0 - tempStart.x);
    }
    operation.set({ rotation: newRotation });

    this.setSharedState({
      orientationRotation: newRotation,
      start: start,
      end: end
    });

    editor.broadcastRotate(degrees);
    editor.zoom.set('auto');
  };

  /**
   * Gets called when the user clicks one of the flip buttons
   * @private
   */


  CropTopBarComponent.prototype._onFlipClick = function _onFlipClick(direction) {
    var _setSharedState;

    var editor = this.context.editor;

    var operation = this.getSharedState('orientationOperation');

    var newFlip = !this.getSharedState('flip' + direction);
    var newRotation = this.getSharedState('rotation') * -1;
    this.setSharedState((_setSharedState = {}, (0, _defineProperty3.default)(_setSharedState, 'flip' + direction, newFlip), (0, _defineProperty3.default)(_setSharedState, 'rotation', newRotation), _setSharedState));
    editor.setRotation(newRotation);
    operation.flip(direction);

    var start = this.getSharedState('start');
    var end = this.getSharedState('end');
    var tmpStart = start.clone();
    if (direction === 'horizontal') {
      start.set(1.0 - end.x, start.y);
      end.set(1.0 - tmpStart.x, end.y);
    } else if (direction === 'vertical') {
      start.set(start.x, 1.0 - end.y);
      end.set(end.x, 1.0 - tmpStart.y);
    }

    this.setSharedState({ start: start, end: end });

    editor.broadcastFlip(direction);
    editor.render();
  };

  /**
   * Checks if the component should change from the given state
   * @param  {Object} oldState
   * @param  {Object} newState
   * @return {Boolean}
   */


  CropTopBarComponent.prototype.shouldSharedComponentUpdate = function shouldSharedComponentUpdate(oldState, newState) {
    return false;
  };

  /**
   * Renders the content of this OverviewTopBarComponent
   * @return {ReactBEM.Element}
   */


  CropTopBarComponent.prototype.renderContent = function renderContent() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:topBar' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:iconButton', onClick: this._onFlipClick.bind(this, 'vertical') },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/crop/flip-v.png', true) })
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:iconButton', onClick: this._onFlipClick.bind(this, 'horizontal') },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/crop/flip-h.png', true) })
      ),
      _globals.ReactBEM.createElement('div', { bem: 'e:space' }),
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:iconButton', onClick: this._onRotateClick.bind(this, 'ccw') },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/crop/rotate-ccw.png', true) })
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:iconButton', onClick: this._onRotateClick.bind(this, 'cw') },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/crop/rotate-cw.png', true) })
      )
    );
  };

  return CropTopBarComponent;
}(_topBarComponent2.default);

exports.default = CropTopBarComponent;


CropTopBarComponent.contextTypes = _topBarComponent2.default.contextTypes;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _cropControlsComponent = __webpack_require__(113);

var _cropControlsComponent2 = _interopRequireDefault(_cropControlsComponent);

var _cropCanvasControlsComponent = __webpack_require__(112);

var _cropCanvasControlsComponent2 = _interopRequireDefault(_cropCanvasControlsComponent);

var _cropTopBarComponent = __webpack_require__(114);

var _cropTopBarComponent2 = _interopRequireDefault(_cropTopBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The crop controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
var CropControls = function (_Controls) {
  (0, _inherits3.default)(CropControls, _Controls);

  function CropControls() {
    (0, _classCallCheck3.default)(this, CropControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user enters these controls
   * @this {CropControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */
  CropControls.onEnter = function onEnter(sharedState) {
    var editor = this.context.editor;


    var cropOperationExistedBefore = editor.operations.exists('crop');
    var cropOperation = editor.operations.getOrCreate('crop');
    cropOperation.setEnabled(false, false);

    var orientationOperationExistedBefore = editor.operations.exists('orientation');
    var orientationOperation = editor.operations.getOrCreate('orientation');

    var defaultOptions = {
      end: new _globals.Vector2(1, 1),
      rotation: 0,
      start: new _globals.Vector2(0, 0),
      scale: 1
    };

    var inputDimensions = cropOperation.getInputDimensions();
    var initialDimensions = cropOperation.getNewDimensions(inputDimensions);

    var initialCropOptions = defaultOptions;
    if (cropOperationExistedBefore) {
      initialCropOptions = cropOperation.serializeOptions();
      delete initialCropOptions.enabled;
    }

    editor.broadcastCrop(cropOperation, defaultOptions);

    // Reset start and end so that SpriteOperation gets an update and repositions
    // the stickers
    cropOperation.set(defaultOptions, cropOperationExistedBefore);

    var initialOrientationOptions = orientationOperation.serializeOptions();
    delete initialOrientationOptions.enabled;

    editor.setSpriteScale(initialCropOptions.scale);
    editor.setRotation(initialCropOptions.rotation);
    editor.setPadding([10, 0, 58 + 10, 0]);
    editor.zoom.set('auto', function () {
      // Disable zoom and drag while we're cropping
      editor.features.disable('zoom', 'drag');
    }, false);

    this.setSharedState({
      initialCropOptions: initialCropOptions,
      initialOrientationOptions: initialOrientationOptions,
      operation: cropOperation,
      orientationOperation: orientationOperation,
      orientationOperationExistedBefore: orientationOperationExistedBefore,
      cropOperationExistedBefore: cropOperationExistedBefore,
      start: _globals.Vector2.fromObject(initialCropOptions.start),
      end: _globals.Vector2.fromObject(initialCropOptions.end),
      rotation: initialCropOptions.rotation,
      orientationRotation: orientationOperation.getRotation(),
      flipVertically: orientationOperation.getFlipVertically(),
      flipHorizontally: orientationOperation.getFlipHorizontally(),
      initialDimensions: initialDimensions
    });
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @ignore
   */


  CropControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('crop');
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {String[]}
   */


  CropControls.getPreloadAssets = function getPreloadAssets(editor) {
    var options = editor.getOptions();
    var cropOptions = _globals.SDKUtils.defaults(options.editor.controlsOptions.crop, this.defaultOptions);

    var assets = ['controls/crop/rotate-ccw.png', 'controls/crop/rotate-cw.png', 'controls/crop/flip-h.png', 'controls/crop/flip-v.png'];

    // Add ratios
    var ratios = _cropControlsComponent2.default.getRatios(cropOptions);
    ratios.forEach(function (_ref) {
      var name = _ref.name;

      assets.push('controls/crop/' + name + '.png');
    });

    return assets;
  };

  return CropControls;
}(_controls2.default);

/**
 * This control's top bar component. Used for the upper part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.TopBarControlsComponent}
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

CropControls.topBarControlsComponent = _cropTopBarComponent2.default;

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
CropControls.controlsComponent = _cropControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
CropControls.canvasControlsComponent = _cropCanvasControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
CropControls.identifier = 'crop';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
CropControls.iconPath = 'controls/overview/crop.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
CropControls.languageKey = 'controls.overview.crop';

/**
 * The default options for this control
 * @type {Object}
 * @property {Object[]} [ratios = []]
 * @property {Boolean} [replaceRatios = false]
 * @property {String[]} [availableRatios = null]
 */
CropControls.defaultOptions = {};

exports.default = CropControls;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _categoryDropdownComponent = __webpack_require__(62);

var _categoryDropdownComponent2 = _interopRequireDefault(_categoryDropdownComponent);

var _sliderOverlayComponent = __webpack_require__(20);

var _sliderOverlayComponent2 = _interopRequireDefault(_sliderOverlayComponent);

var _filterManager = __webpack_require__(42);

var _filterManager2 = _interopRequireDefault(_filterManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var FilterControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(FilterControlsComponent, _ControlsComponent);

  function FilterControlsComponent() {
    (0, _classCallCheck3.default)(this, FilterControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onItemClick', '_onOperationUpdated', '_onSliderValueChange', '_onCategoryChange');
    _this._operation = _this.getSharedState('operation');

    _this._events = (0, _defineProperty3.default)({}, _globals.Constants.EVENTS.OPERATION_UPDATED, _this._onOperationUpdated);

    _this._initFilterManager();

    _this.state = {
      category: 'all'
    };
    return _this;
  }

  // -------------------------------------------------------------------------- INITIALIZATION

  /**
   * Initializes the filter manager
   * @private
   */


  FilterControlsComponent.prototype._initFilterManager = function _initFilterManager() {
    this._filterManager = new _filterManager2.default(this.props.options);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the slider value has been changed
   * @param {Number} value
   * @private
   */


  FilterControlsComponent.prototype._onSliderValueChange = function _onSliderValueChange(value) {
    this._operation.setIntensity(value / 100);

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Gets called when the user switches the category
   * @param  {Object} category
   * @private
   */


  FilterControlsComponent.prototype._onCategoryChange = function _onCategoryChange(category) {
    var _this2 = this;

    this.setState({ category: category.name }, function () {
      _this2.refs.scrollbar.update();
    });
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  FilterControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    // The undo button might change this operation's selected filter or intensity.
    // Update the component to reflect the change
    if (operation === this._operation) {
      this.forceUpdate();
    }
  };

  /**
   * Gets called when the user clicks an item
   * @param {Class} Filter
   * @param {Event} e
   * @private
   */


  FilterControlsComponent.prototype._onItemClick = function _onItemClick(Filter, e) {
    this._operation.set({
      filter: new Filter({ intensity: 1 }),
      intensity: 1
    });

    var editor = this.context.editor;

    editor.render();
    this.forceUpdate();
  };

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  FilterControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    var initialOptions = this.getSharedState('initialOptions');
    var filter = this._operation.getFilter();
    var intensity = this._operation.getIntensity();
    if (filter.constructor !== initialOptions.filter.constructor || intensity !== initialOptions.intensity) {
      var editor = this.context.editor;

      editor.history.add(this._operation, initialOptions, this.getSharedState('operationExistedBefore'));
    }

    if (filter.constructor.isIdentity) {
      var _editor = this.context.editor;

      _editor.operations.remove(this._operation);
    }

    _ControlsComponent.prototype._onBackClick.call(this, e);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the overlay controls of this component
   * @return {ReactBEM.Element}
   */


  FilterControlsComponent.prototype.renderOverlayControls = function renderOverlayControls() {
    var currentFilter = this._operation.getFilter();
    if (currentFilter.isIdentity) return null;

    var intensity = this._operation.getIntensity();
    return _globals.ReactBEM.createElement(_sliderOverlayComponent2.default, {
      minValue: 0,
      maxValue: 100,
      value: intensity * 100,
      valueUnit: '%',
      positiveValuePrefix: '+',
      label: this._t('controls.filters.intensity'),
      onChange: this._onSliderValueChange });
  };

  /**
   * Renders the list items for this control
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  FilterControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this3 = this;

    var currentFilter = this._operation.getFilter();

    var filters = this._filterManager.getFiltersForCategory(this.state.category);
    return [_globals.SDK.Filters.IdentityFilter].concat(filters).map(function (filter) {
      var identifier = filter.identifier;
      return _globals.ReactBEM.createElement(
        'li',
        {
          bem: 'e:item',
          key: identifier,
          onClick: _this3._onItemClick.bind(_this3, filter) },
        _globals.ReactBEM.createElement(
          'bem',
          { specifier: '$b:controls' },
          _globals.ReactBEM.createElement(
            'div',
            {
              bem: '$e:button m:withInlineLabel' },
            _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: _this3._getAssetPath('controls/filters/' + identifier + '.png', true) }),
            _globals.ReactBEM.createElement(
              'div',
              { bem: '$e:inlineLabel', className: currentFilter instanceof filter ? 'is-active' : null },
              _globals.ReactBEM.createElement(
                'div',
                { bem: 'e:label' },
                filter.displayName
              )
            )
          )
        )
      );
    });
  };

  /**
   * Renders the category dropdown (if present)
   * @return {ReactBEM.Element}
   * @private
   */


  FilterControlsComponent.prototype._renderCategoryDropdown = function _renderCategoryDropdown() {
    var _this4 = this;

    var categories = this._filterManager.getCategories();
    var categoryDropdownVisible = !this.props.options.hideCategories && categories.length > 1;
    if (!categoryDropdownVisible) {
      return null;
    }

    var categoryItems = categories.map(function (c) {
      return {
        name: c.name,
        label: _this4._t('controls.filters.categories.' + c.name),
        icon: _this4._getAssetPath('controls/filters/categories/' + c.name + '.png', true)
      };
    });
    var selectedCategory = {
      name: this.state.category,
      label: this._t('controls.filters.categories.' + this.state.category),
      icon: this._getAssetPath('controls/filters/categories/' + this.state.category + '.png', true)
    };

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:categoryDropdown' },
      _globals.ReactBEM.createElement(_categoryDropdownComponent2.default, {
        items: categoryItems,
        selectedItem: selectedCategory,
        onChange: this._onCategoryChange })
    );
  };

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  FilterControlsComponent.prototype.renderControls = function renderControls() {
    var listItems = this._renderListItems();
    var categoryDropdown = this._renderCategoryDropdown();

    return [categoryDropdown, _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:list' },
      _globals.ReactBEM.createElement(
        _scrollbarComponent2.default,
        { ref: 'scrollbar' },
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:list' },
          listItems
        )
      )
    )];
  };

  return FilterControlsComponent;
}(_controlsComponent2.default);

exports.default = FilterControlsComponent;


FilterControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _filterControlsComponent = __webpack_require__(116);

var _filterControlsComponent2 = _interopRequireDefault(_filterControlsComponent);

var _filterManager = __webpack_require__(42);

var _filterManager2 = _interopRequireDefault(_filterManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The filters controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var FiltersControls = function (_Controls) {
  (0, _inherits3.default)(FiltersControls, _Controls);

  function FiltersControls() {
    (0, _classCallCheck3.default)(this, FiltersControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user enters these controls
   * @this {FiltersControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */
  FiltersControls.onEnter = function onEnter(sharedState) {
    var editor = this.context.editor;

    var operationExistedBefore = editor.operations.exists('filter');
    var operation = editor.operations.getOrCreate('filter');
    var initialOptions = operation.serializeOptions(['filter', 'intensity']);

    this.setSharedState({ operation: operation, operationExistedBefore: operationExistedBefore, initialOptions: initialOptions });
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @override
   */


  FiltersControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled(this.identifier);
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {String[]}
   */


  FiltersControls.getPreloadAssets = function getPreloadAssets(editor) {
    var options = editor.getOptions();
    var filterOptions = _globals.SDKUtils.defaults(options.editor.controlsOptions.filter, this.defaultOptions);
    var filterManager = new _filterManager2.default(filterOptions);

    var assets = [];
    var categories = filterManager.getCategories();
    categories.forEach(function (category) {
      assets.push('controls/filters/categories/' + category.name + '.png');
      var filters = filterManager.getFiltersForCategory(category.name);
      filters.forEach(function (filter) {
        assets.push('controls/filters/' + filter.identifier + '.png');
      });
    });

    return assets;
  };

  return FiltersControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


FiltersControls.controlsComponent = _filterControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
FiltersControls.identifier = 'filter';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
FiltersControls.iconPath = 'controls/overview/filters.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
FiltersControls.languageKey = 'controls.overview.filters';

/**
 * The default options for this control
 * @type {Object}
 * @property {PhotoEditorSDK.Filter[]} [categories = []]
 * @property {Boolean} [replaceCategories = false]
 * @property {String[]} [selectableFilters = null]
 */
FiltersControls.defaultOptions = {
  categories: [],
  replaceCategories: false,
  selectableFilters: null,
  hideCategories: false
};

exports.default = FiltersControls;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _radialFocus = __webpack_require__(123);

var _radialFocus2 = _interopRequireDefault(_radialFocus);

var _linearFocus = __webpack_require__(120);

var _linearFocus2 = _interopRequireDefault(_linearFocus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEMS = [_radialFocus2.default, _linearFocus2.default]; /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var FocusControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(FocusControlsComponent, _ControlsComponent);

  function FocusControlsComponent() {
    (0, _classCallCheck3.default)(this, FocusControlsComponent);
    return (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks one of the three buttons
   * @param {Object} controlsItem
   * @param {Event} e
   * @private
   */
  FocusControlsComponent.prototype._onButtonClick = function _onButtonClick(controlsItem, e) {
    this.context.editorScreen.switchToControls(controlsItem);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items for this control
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  FocusControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this2 = this;

    return ITEMS.filter(function (item) {
      return item.isAvailable(_this2.context.editor);
    }).map(function (item) {
      return _globals.ReactBEM.createElement(
        'li',
        {
          bem: 'e:item',
          key: item.identifier },
        _globals.ReactBEM.createElement(
          'bem',
          { specifier: '$b:controls' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: '$e:button m:withLabel', onClick: _this2._onButtonClick.bind(_this2, item) },
            _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: _this2._getAssetPath(item.iconPath, true) }),
            _globals.ReactBEM.createElement(
              'div',
              { bem: 'e:label' },
              _this2._t(item.languageKey)
            )
          )
        )
      );
    });
  };

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  FocusControlsComponent.prototype.renderControls = function renderControls() {
    var listItems = this._renderListItems();

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:list' },
      _globals.ReactBEM.createElement(
        _scrollbarComponent2.default,
        null,
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:list' },
          listItems
        )
      )
    );
  };

  return FocusControlsComponent;
}(_controlsComponent2.default);

exports.default = FocusControlsComponent;


FocusControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _focusControlsComponent = __webpack_require__(118);

var _focusControlsComponent2 = _interopRequireDefault(_focusControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The focus controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var FocusControls = function (_Controls) {
  (0, _inherits3.default)(FocusControls, _Controls);

  function FocusControls() {
    (0, _classCallCheck3.default)(this, FocusControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Checks if this control is available to the user
   * @param  {Editor} editor
   * @return {Boolean}
   * @ignore
   */
  FocusControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('radial-focus') || editor.isToolEnabled('linear-focus');
  };

  /**
   * Gets called when the user leaves these controls
   * @this {StickersControlsComponent}
   * @override
   * @ignore
   */


  FocusControls.onExit = function onExit() {
    var editor = this.context.editor;

    editor.features.enable('zoom', 'drag');
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {String[]}
   */


  FocusControls.getPreloadAssets = function getPreloadAssets(editor) {
    var assets = [];
    if (editor.isToolEnabled('radial-focus')) {
      assets.push('controls/focus/radial.png');
    }
    if (editor.isToolEnabled('linear-focus')) {
      assets.push('controls/focus/linear.png');
    }

    return assets;
  };

  return FocusControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


FocusControls.controlsComponent = _focusControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
FocusControls.identifier = 'focus';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
FocusControls.iconPath = 'controls/overview/focus.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
FocusControls.languageKey = 'controls.overview.focus';

/**
 * The default options for this control
 * @type {Object}
 */
FocusControls.defaultOptions = {};

exports.default = FocusControls;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _linearFocusControlsComponent = __webpack_require__(122);

var _linearFocusControlsComponent2 = _interopRequireDefault(_linearFocusControlsComponent);

var _linearFocusCanvasControlsComponent = __webpack_require__(121);

var _linearFocusCanvasControlsComponent2 = _interopRequireDefault(_linearFocusCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The radial blur controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var LinearFocusControls = function (_Controls) {
  (0, _inherits3.default)(LinearFocusControls, _Controls);

  function LinearFocusControls() {
    (0, _classCallCheck3.default)(this, LinearFocusControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user enters these controls
   * @this {BorderControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */
  LinearFocusControls.onEnter = function onEnter(sharedState) {
    var editor = this.context.editor;

    var operationExistedBefore = editor.operations.exists('linear-focus');

    var defaultStart = new _globals.Vector2(0.49, 0.5);
    var defaultEnd = new _globals.Vector2(0.51, 0.5);

    var operation = editor.operations.getOrCreate('linear-focus', {
      start: defaultStart,
      end: defaultEnd
    });

    var inputDimensions = operation.getInputDimensions();
    var initialOptions = operation.serializeOptions(['start', 'end', 'size', 'gradientSize', 'blurRadius']);

    this.setSharedState({
      operation: operation,
      operationExistedBefore: operationExistedBefore,
      initialOptions: initialOptions,
      inputDimensions: inputDimensions
    });
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @ignore
   */


  LinearFocusControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('linear-focus');
  };

  return LinearFocusControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


LinearFocusControls.controlsComponent = _linearFocusControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
LinearFocusControls.canvasControlsComponent = _linearFocusCanvasControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
LinearFocusControls.identifier = 'linear-focus';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
LinearFocusControls.iconPath = 'controls/focus/linear.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
LinearFocusControls.languageKey = 'controls.focus.linear';

/**
 * The default options for this control
 * @type {Object}
 */
LinearFocusControls.defaultOptions = {};

exports.default = LinearFocusControls;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

var _canvasControlsComponent = __webpack_require__(24);

var _canvasControlsComponent2 = _interopRequireDefault(_canvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinearFocusCanvasControlsComponent = function (_CanvasControlsCompon) {
  (0, _inherits3.default)(LinearFocusCanvasControlsComponent, _CanvasControlsCompon);

  function LinearFocusCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, LinearFocusCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onCenterDragStart', '_onCenterDrag', '_onKnobDragStart', '_onKnobDrag');

    _this.state = {
      areaPosition: new _globals.Vector2(),
      areaDimensions: new _globals.Vector2(),
      knobPosition: new _globals.Vector2()
    };
    _this._operation = _this.getSharedState('operation');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called after the canvas has been zoomed in or out
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onCanvasZoomDone = function _onCanvasZoomDone() {
    this._setStylesFromOptions();
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when the shared state did change
   * @param {Object} newState
   */


  LinearFocusCanvasControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(newState) {
    if (newState.operation) {
      this._operation = newState.operation;
    }
    this._setStylesFromOptions();
  };

  /**
   * Gets called when this component has been mounted
   */


  LinearFocusCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _CanvasControlsCompon.prototype.componentDidMount.call(this);

    var editor = this.context.editor;

    editor.zoom.set('auto', function () {
      editor.features.disable('zoom', 'drag');
      _this2._setStylesFromOptions();
    });
  };

  // -------------------------------------------------------------------------- CENTER DRAGGING

  /**
   * Gets called when the user stars dragging the center
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onCenterDragStart = function _onCenterDragStart() {
    this._initialStart = this._operation.getStart();
    this._initialEnd = this._operation.getEnd();
    this._initialDist = this._initialEnd.clone().subtract(this._initialStart);
  };

  /**
   * Gets called while the user drags the center
   * @param {Vector2} offset
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onCenterDrag = function _onCenterDrag(offset) {
    var editor = this.context.editor;


    var outputDimensions = editor.getOutputDimensions();
    var relativeOffset = offset.clone().divide(outputDimensions);

    var newStart = this._initialStart.clone().add(relativeOffset).clamp(new _globals.Vector2(0, 0), new _globals.Vector2(1, 1).subtract(this._initialDist));
    var newEnd = newStart.clone().add(this._initialDist);

    this._operation.set({
      start: newStart,
      end: newEnd
    });

    editor.render();
    this._setStylesFromOptions();
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- GRADIENT KNOB DRAG

  /**
   * Gets called when the user stars dragging the gradient knob
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onKnobDragStart = function _onKnobDragStart(e) {
    this._initialKnobPosition = this.state.knobPosition.clone();
  };

  /**
   * Gets called while the user drags the gradient knob
   * @param {Vector2} offset
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onKnobDrag = function _onKnobDrag(offset) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var newKnobPosition = this._initialKnobPosition.clone().add(offset).clamp(new _globals.Vector2(0, 0), outputDimensions);

    var distanceFromCenter = newKnobPosition.clone().subtract(this.state.areaPosition);

    var start = this.state.areaPosition.clone().add(-distanceFromCenter.y, distanceFromCenter.x).divide(outputDimensions);
    var end = this.state.areaPosition.clone().add(distanceFromCenter.y, -distanceFromCenter.x).divide(outputDimensions);
    var size = distanceFromCenter.len() * 2;

    this._operation.set({
      start: start,
      end: end,
      size: size / outputDimensions.min(),
      gradientSize: size / outputDimensions.min()
    });
    this.setState({
      knobPosition: newKnobPosition,
      areaDimensions: new _globals.Vector2(this.state.areaDimensions.x, size)
    });
    editor.render();
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the CSS styles for the area div
   * @return {Object}
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._getAreaStyle = function _getAreaStyle() {
    var dist = this.state.knobPosition.clone().subtract(this.state.areaPosition);
    var degrees = Math.atan2(dist.x, dist.y) * (180 / Math.PI);
    var transform = 'rotate(' + (-degrees).toFixed(2) + 'deg)';

    return {
      width: this.state.areaDimensions.x,
      height: this.state.areaDimensions.y,
      left: this.state.areaPosition.x,
      top: this.state.areaPosition.y,
      marginLeft: this.state.areaDimensions.x * -0.5,
      marginTop: this.state.areaDimensions.y * -0.5,
      transform: transform,
      MozTransform: transform,
      msTransform: transform,
      WebkitTransform: transform
    };
  };

  /**
   * Returns the CSS styles for the knob
   * @return {Object}
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._getKnobStyle = function _getKnobStyle() {
    return {
      left: this.state.knobPosition.x,
      top: this.state.knobPosition.y
    };
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Sets the dimensions and position values from the current operation options
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._setStylesFromOptions = function _setStylesFromOptions() {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var start = this._operation.getStart().clone().multiply(outputDimensions);
    var end = this._operation.getEnd().clone().multiply(outputDimensions);
    var size = this._operation.getSize() * outputDimensions.min();

    var dist = end.clone().subtract(start);
    var middle = start.clone().add(dist.clone().divide(2));

    var areaSize = new _globals.Vector2(outputDimensions.len() * 2, size);

    var totalDist = dist.len();
    var factor = dist.clone().divide(totalDist).divide(2);

    this.setState({
      areaDimensions: areaSize,
      areaPosition: middle.clone(),
      knobPosition: middle.clone().add(-size * factor.y, size * factor.x)
    });
  };

  /**
   * Returns the container style
   * @return {Object}
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._getContainerStyle = function _getContainerStyle() {
    var _context$editor$getSD = this.context.editor.getSDK().getSprite().getBounds(),
        x = _context$editor$getSD.x,
        y = _context$editor$getSD.y,
        width = _context$editor$getSD.width,
        height = _context$editor$getSD.height;

    return {
      left: x,
      top: y,
      width: width,
      height: height
    };
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  LinearFocusCanvasControlsComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'b:canvasControls e:container m:full', ref: 'container', style: this._getContainerStyle() },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:linearFocusCanvasControls' },
        _globals.ReactBEM.createElement(
          _draggableComponent2.default,
          {
            onStart: this._onCenterDragStart,
            onDrag: this._onCenterDrag },
          _globals.ReactBEM.createElement('div', { bem: 'e:area', style: this._getAreaStyle() })
        ),
        _globals.ReactBEM.createElement(
          _draggableComponent2.default,
          {
            onStart: this._onKnobDragStart,
            onDrag: this._onKnobDrag },
          _globals.ReactBEM.createElement('div', { bem: 'e:knob $b:knob', style: this._getKnobStyle() })
        )
      )
    );
  };

  return LinearFocusCanvasControlsComponent;
}(_canvasControlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = LinearFocusCanvasControlsComponent;


LinearFocusCanvasControlsComponent.contextTypes = _canvasControlsComponent2.default.contextTypes;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _sliderComponent = __webpack_require__(14);

var _sliderComponent2 = _interopRequireDefault(_sliderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinearFocusControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(LinearFocusControlsComponent, _ControlsComponent);

  function LinearFocusControlsComponent() {
    (0, _classCallCheck3.default)(this, LinearFocusControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._hasDoneButton = true;
    _this._operation = _this.getSharedState('operation');
    _this._bindAll('_onBackClick', '_onDoneClick', '_onBlurRadiusChange', '_onOperationRemoved');

    _this._events = (0, _defineProperty3.default)({}, _globals.Constants.EVENTS.OPERATION_REMOVED, _this._onOperationRemoved);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation is removed
   * @return {Operation} operation
   * @private
   */


  LinearFocusControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    if (operation !== this._operation) return;
    if (this._backButtonClicked) return;

    // Operation can be removed by the undo button. We need
    // to make sure we re-create the operation for the lifetime
    // of this control
    var editor = this.context.editor;

    var newOperation = editor.operations.getOrCreate('linear-focus');
    this._operation = newOperation;
    this.setSharedState({
      operation: newOperation,
      operationExistedBefore: false,
      initialOptions: {}
    });
  };

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  LinearFocusControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    this._backButtonClicked = true;

    var editor = this.context.editor;

    if (!this.getSharedState('operationExistedBefore')) {
      editor.operations.remove(this._operation);
    } else {
      this._operation.set(this.getSharedState('initialOptions'));
    }

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');

    _ControlsComponent.prototype._onBackClick.call(this, e);
  };

  /**
   * Gets called when the user clicks the done button
   * @param  {Event} e
   * @private
   */


  LinearFocusControlsComponent.prototype._onDoneClick = function _onDoneClick(e) {
    var editor = this.context.editor;

    var operationExistedBefore = this.getSharedState('operationExistedBefore');
    var initialOptions = this.getSharedState('initialOptions');
    var optionsChanged = !this._operation.optionsEqual(initialOptions);

    if (optionsChanged || !operationExistedBefore) {
      editor.history.add(this._operation, this.getSharedState('initialOptions'), this.getSharedState('operationExistedBefore'));
    }

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');

    _ControlsComponent.prototype._onDoneClick.call(this, e);
  };

  /**
   * Gets called when the slider value has changed
   * @param {Number} value
   * @private
   */


  LinearFocusControlsComponent.prototype._onBlurRadiusChange = function _onBlurRadiusChange(value) {
    var inputDimensions = this.getSharedState('inputDimensions');
    this._operation.setBlurRadius(value / inputDimensions.min());

    var editor = this.context.editor;

    editor.render();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  LinearFocusControlsComponent.prototype.renderControls = function renderControls() {
    var inputDimensions = this.getSharedState('inputDimensions');
    var shortestSide = inputDimensions.min();
    var value = this._operation.getBlurRadius() * shortestSide;

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:slider' },
      _globals.ReactBEM.createElement(_sliderComponent2.default, {
        style: 'large',
        minValue: 0,
        maxValue: Math.min(180, Math.round(shortestSide * 0.1)),
        valueUnit: 'px',
        middleDot: false,
        label: this._t('controls.focus.blurRadius'),
        onChange: this._onBlurRadiusChange,
        value: value })
    );
  };

  return LinearFocusControlsComponent;
}(_controlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = LinearFocusControlsComponent;


LinearFocusControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _radialFocusControlsComponent = __webpack_require__(125);

var _radialFocusControlsComponent2 = _interopRequireDefault(_radialFocusControlsComponent);

var _radialFocusCanvasControlsComponent = __webpack_require__(124);

var _radialFocusCanvasControlsComponent2 = _interopRequireDefault(_radialFocusCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The radial focus controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
var RadialFocusControls = function (_Controls) {
  (0, _inherits3.default)(RadialFocusControls, _Controls);

  function RadialFocusControls() {
    (0, _classCallCheck3.default)(this, RadialFocusControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user enters these controls
   * @this {RadialFocusControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */
  RadialFocusControls.onEnter = function onEnter(sharedState) {
    var editor = this.context.editor;


    var operationExistedBefore = editor.operations.exists('radial-focus');
    var operation = editor.operations.getOrCreate('radial-focus');
    var initialOptions = operation.serializeOptions(['position', 'radius', 'gradientRadius', 'blurRadius']);
    var inputDimensions = operation.getInputDimensions();

    this.setSharedState({
      operation: operation,
      operationExistedBefore: operationExistedBefore,
      initialOptions: initialOptions,
      inputDimensions: inputDimensions
    });
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @ignore
   */


  RadialFocusControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('radial-focus');
  };

  return RadialFocusControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

RadialFocusControls.controlsComponent = _radialFocusControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
RadialFocusControls.canvasControlsComponent = _radialFocusCanvasControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
RadialFocusControls.identifier = 'radial-focus';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
RadialFocusControls.iconPath = 'controls/focus/radial.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
RadialFocusControls.languageKey = 'controls.focus.radial';

/**
 * The default options for this control
 * @type {Object}
 */
RadialFocusControls.defaultOptions = {};

exports.default = RadialFocusControls;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

var _canvasControlsComponent = __webpack_require__(24);

var _canvasControlsComponent2 = _interopRequireDefault(_canvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadialFocusCanvasControlsComponent = function (_CanvasControlsCompon) {
  (0, _inherits3.default)(RadialFocusCanvasControlsComponent, _CanvasControlsCompon);

  function RadialFocusCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, RadialFocusCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onCenterDragStart', '_onCenterDrag', '_onKnobDragStart', '_onKnobDrag');

    _this.state = {
      areaPosition: new _globals.Vector2(),
      areaDimensions: new _globals.Vector2(),
      knobPosition: new _globals.Vector2()
    };
    _this._knobChangedManually = false;
    _this._operation = _this.getSharedState('operation');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called after the canvas has been zoomed in or out
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onCanvasZoomDone = function _onCanvasZoomDone() {
    this._setStylesFromOptions();
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when the shared state did change
   * @param {Object} newState
   */


  RadialFocusCanvasControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(newState) {
    if (newState.operation) {
      this._operation = newState.operation;
    }
    this._setStylesFromOptions();
  };

  /**
   * Gets called when this component has been mounted
   */


  RadialFocusCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _CanvasControlsCompon.prototype.componentDidMount.call(this);
    var editor = this.context.editor;

    editor.zoom.set('auto', function () {
      editor.features.disable('zoom', 'drag');
      _this2._setStylesFromOptions();
    });
  };

  // -------------------------------------------------------------------------- CENTER DRAGGING

  /**
   * Gets called when the user stars dragging the center
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onCenterDragStart = function _onCenterDragStart() {
    this._initialPosition = this._operation.getPosition();
    this._initialKnobPosition = this.state.knobPosition.clone();
  };

  /**
   * Gets called while the user drags the center
   * @param {Vector2} offset
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onCenterDrag = function _onCenterDrag(offset) {
    var editor = this.context.editor;


    var outputDimensions = editor.getOutputDimensions();
    var relativeOffset = offset.clone().divide(outputDimensions);
    var newPosition = this._initialPosition.clone().add(relativeOffset);

    var newKnobPosition = this._initialKnobPosition.clone().add(offset);

    this._operation.set({
      position: newPosition
    });

    this.state.knobPosition = newKnobPosition;

    editor.render();
    this._setStylesFromOptions();
  };

  // -------------------------------------------------------------------------- GRADIENT KNOB DRAG

  /**
   * Gets called when the user stars dragging the gradient knob
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onKnobDragStart = function _onKnobDragStart(e) {
    this._knobChangedManually = true;
    this._initialKnobPosition = this.state.knobPosition.clone();
  };

  /**
   * Gets called while the user drags the gradient knob
   * @param {Vector2} offset
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onKnobDrag = function _onKnobDrag(offset) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var newKnobPosition = this._initialKnobPosition.clone().add(offset).clamp(new _globals.Vector2(0, 0), outputDimensions);

    var position = this._operation.getPosition().clone().multiply(outputDimensions);

    var radius = newKnobPosition.clone().subtract(position).abs().len();
    var gradientRadius = radius / 2;

    this.setState({
      knobPosition: newKnobPosition,
      areaDimensions: new _globals.Vector2(radius * 2, radius * 2)
    });
    this._operation.set({
      radius: radius / outputDimensions.min(),
      gradientRadius: gradientRadius / outputDimensions.min()
    });

    editor.render();
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the CSS styles for the area div
   * @return {Object}
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._getAreaStyle = function _getAreaStyle() {
    return {
      width: this.state.areaDimensions.x,
      height: this.state.areaDimensions.y,
      left: this.state.areaPosition.x,
      top: this.state.areaPosition.y,
      marginLeft: this.state.areaDimensions.x * -0.5,
      marginTop: this.state.areaDimensions.y * -0.5
    };
  };

  /**
   * Returns the CSS styles for the knob
   * @return {Object}
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._getKnobStyle = function _getKnobStyle() {
    return {
      left: this.state.knobPosition.x,
      top: this.state.knobPosition.y
    };
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Sets the dimensions and position values from the current operation options
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._setStylesFromOptions = function _setStylesFromOptions() {
    var editor = this.context.editor;


    var outputDimensions = editor.getOutputDimensions();
    var position = this._operation.getPosition().clone().multiply(outputDimensions);

    var radius = this._operation.getRadius() * outputDimensions.min();
    var diameter = radius * 2;
    var areaSize = new _globals.Vector2(diameter, diameter);

    var newState = {
      areaDimensions: areaSize,
      areaPosition: position
    };

    if (!this._knobChangedManually) {
      newState.knobPosition = position.clone().add(radius, 0);
    }

    this.setState(newState);
  };

  /**
   * Returns the container style
   * @return {Object}
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._getContainerStyle = function _getContainerStyle() {
    var editor = this.context.editor;

    var _editor$getSDK$getSpr = editor.getSDK().getSprite().getBounds(),
        x = _editor$getSDK$getSpr.x,
        y = _editor$getSDK$getSpr.y,
        width = _editor$getSDK$getSpr.width,
        height = _editor$getSDK$getSpr.height;

    return {
      left: x,
      top: y,
      width: width,
      height: height
    };
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  RadialFocusCanvasControlsComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'b:canvasControls e:container m:full', ref: 'container', style: this._getContainerStyle() },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:radialFocusCanvasControls' },
        _globals.ReactBEM.createElement(
          _draggableComponent2.default,
          {
            onStart: this._onCenterDragStart,
            onDrag: this._onCenterDrag },
          _globals.ReactBEM.createElement('div', { bem: 'e:area', style: this._getAreaStyle() })
        ),
        _globals.ReactBEM.createElement(
          _draggableComponent2.default,
          {
            onStart: this._onKnobDragStart,
            onDrag: this._onKnobDrag },
          _globals.ReactBEM.createElement('div', { bem: 'e:knob $b:knob', style: this._getKnobStyle() })
        )
      )
    );
  };

  return RadialFocusCanvasControlsComponent;
}(_canvasControlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = RadialFocusCanvasControlsComponent;


RadialFocusCanvasControlsComponent.contextTypes = _canvasControlsComponent2.default.contextTypes;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _sliderComponent = __webpack_require__(14);

var _sliderComponent2 = _interopRequireDefault(_sliderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadialFocusControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(RadialFocusControlsComponent, _ControlsComponent);

  function RadialFocusControlsComponent() {
    (0, _classCallCheck3.default)(this, RadialFocusControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._hasDoneButton = true;
    _this._operation = _this.getSharedState('operation');
    _this._bindAll('_onBackClick', '_onDoneClick', '_onBlurRadiusChange', '_onOperationRemoved');

    _this._events = (0, _defineProperty3.default)({}, _globals.Constants.EVENTS.OPERATION_REMOVED, _this._onOperationRemoved);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation is removed
   * @return {Operation} operation
   * @private
   */


  RadialFocusControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    if (operation !== this._operation) return;
    if (this._backButtonClicked) return;

    // Operation can be removed by the undo button. We need
    // to make sure we re-create the operation for the lifetime
    // of this control
    var editor = this.context.editor;

    var newOperation = editor.operations.getOrCreate('radial-focus');
    this._operation = newOperation;
    this.setSharedState({
      operation: newOperation,
      operationExistedBefore: false,
      initialOptions: {}
    });
  };

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  RadialFocusControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    this._backButtonClicked = true;

    var editor = this.context.editor;

    if (!this.getSharedState('operationExistedBefore')) {
      editor.operations.remove(this._operation);
    } else {
      this._operation.set(this.getSharedState('initialOptions'));
    }

    editor.render();
    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');

    _ControlsComponent.prototype._onBackClick.call(this, e);
  };

  /**
   * Gets called when the user clicks the done button
   * @param  {Event} e
   * @private
   */


  RadialFocusControlsComponent.prototype._onDoneClick = function _onDoneClick(e) {
    var editor = this.context.editor;

    var operationExistedBefore = this.getSharedState('operationExistedBefore');
    var initialOptions = this.getSharedState('initialOptions');
    var optionsChanged = !this._operation.optionsEqual(initialOptions);

    if (optionsChanged || !operationExistedBefore) {
      editor.history.add(this._operation, this.getSharedState('initialOptions'), this.getSharedState('operationExistedBefore'));
    }

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');

    _ControlsComponent.prototype._onDoneClick.call(this, e);
  };

  /**
   * Gets called when the slider value has changed
   * @param {Number} value
   * @private
   */


  RadialFocusControlsComponent.prototype._onBlurRadiusChange = function _onBlurRadiusChange(value) {
    var inputDimensions = this.getSharedState('inputDimensions');
    this._operation.setBlurRadius(value / inputDimensions.min());

    var editor = this.context.editor;

    editor.render();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  RadialFocusControlsComponent.prototype.renderControls = function renderControls() {
    var inputDimensions = this.getSharedState('inputDimensions');
    var shortestSide = inputDimensions.min();
    var value = this._operation.getBlurRadius() * shortestSide;

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:slider' },
      _globals.ReactBEM.createElement(_sliderComponent2.default, {
        style: 'large',
        minValue: 0,
        maxValue: Math.min(180, Math.round(shortestSide * 0.1)),
        valueUnit: 'px',
        middleDot: false,
        label: this._t('controls.focus.blurRadius'),
        onChange: this._onBlurRadiusChange,
        value: value })
    );
  };

  return RadialFocusControlsComponent;
}(_controlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = RadialFocusControlsComponent;


RadialFocusControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniSliderComponent = function (_BaseComponent) {
  (0, _inherits3.default)(MiniSliderComponent, _BaseComponent);

  function MiniSliderComponent() {
    (0, _classCallCheck3.default)(this, MiniSliderComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this.state = {
      value: _this.props.value || 0,
      sliderPosition: 0,
      foregroundLeft: 0,
      foregroundWidth: 0
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */


  MiniSliderComponent.prototype.componentDidMount = function componentDidMount() {
    // Trigger a re-render to position the knob
    this._setValue(this.state.value, false);
  };

  /**
   * Gets called when this component receives new props
   * @param  {Object} props
   */


  MiniSliderComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.value !== this.state.value) {
      this._setValue(props.value, false);
    }
  };

  /**
   * Returns the style for the knob (position)
   * @return {Object}
   * @private
   */


  MiniSliderComponent.prototype._getKnobStyle = function _getKnobStyle() {
    return { left: this.state.sliderPosition };
  };

  /**
   * Returns the style for the foreground bar
   * @return {Object}
   * @private
   */


  MiniSliderComponent.prototype._getForegroundStyle = function _getForegroundStyle() {
    return {
      left: this.state.foregroundLeft,
      width: this.state.foregroundWidth
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Decides whether or not this slider should have a middle dot on the bar
   * @private
   */


  MiniSliderComponent.prototype._displayMiddleDot = function _displayMiddleDot() {
    return this.props.middleDot !== false;
  };

  /**
   * Sets the value to the given value, updates the slider position
   * @param {Number} value
   * @param {Boolean} emitChange = true
   * @private
   */


  MiniSliderComponent.prototype._setValue = function _setValue(value) {
    var emitChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    value = Math.round(value);
    var _props = this.props,
        minValue = _props.minValue,
        maxValue = _props.maxValue;

    var progress = (value - minValue) / (maxValue - minValue);

    // Calculate slider position
    var bar = this.refs.bar;

    var barWidth = bar.offsetWidth;
    var sliderPosition = barWidth * progress;

    // Calculate foreground position and width
    var foregroundWidth = progress * barWidth;
    var foregroundLeft = 0;
    if (this._displayMiddleDot()) {
      foregroundWidth = Math.abs(progress - 0.5) * barWidth;
      foregroundLeft = progress < 0.5 ? barWidth * 0.5 - foregroundWidth : '50%';
    }

    this.setState({ value: value, sliderPosition: sliderPosition, foregroundWidth: foregroundWidth, foregroundLeft: foregroundLeft });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  MiniSliderComponent.prototype.renderWithBEM = function renderWithBEM() {
    var foregroundProps = {
      style: this._getForegroundStyle()
    };

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:miniSlider' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:bar', ref: 'bar' },
        _globals.ReactBEM.createElement('div', { bem: '$e:background' }),
        _globals.ReactBEM.createElement('div', (0, _extends3.default)({ bem: '$e:foreground' }, foregroundProps)),
        _globals.ReactBEM.createElement('div', { bem: 'e:knob', style: this._getKnobStyle() })
      )
    );
  };

  return MiniSliderComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


exports.default = MiniSliderComponent;


MiniSliderComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _topBarComponent = __webpack_require__(131);

var _topBarComponent2 = _interopRequireDefault(_topBarComponent);

var _overviewControlsComponent = __webpack_require__(63);

var _overviewControlsComponent2 = _interopRequireDefault(_overviewControlsComponent);

var _overviewCanvasControlsComponent = __webpack_require__(128);

var _overviewCanvasControlsComponent2 = _interopRequireDefault(_overviewCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var OverviewControls = function (_Controls) {
  (0, _inherits3.default)(OverviewControls, _Controls);

  function OverviewControls() {
    (0, _classCallCheck3.default)(this, OverviewControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  return OverviewControls;
}(_controls2.default);

/**
 * This control's top bar controls component. Used for the sub-header part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


OverviewControls.topBarControlsComponent = _topBarComponent2.default;

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
OverviewControls.controlsComponent = _overviewControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
OverviewControls.canvasControlsComponent = _overviewCanvasControlsComponent2.default;

exports.default = OverviewControls;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _canvasControlsComponent = __webpack_require__(24);

var _canvasControlsComponent2 = _interopRequireDefault(_canvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var OverviewCanvasControlsComponent = function (_CanvasControlsCompon) {
  (0, _inherits3.default)(OverviewCanvasControlsComponent, _CanvasControlsCompon);

  function OverviewCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, OverviewCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onClick');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks somewhere on the canvas
   * @param  {Event} e
   * @private
   */


  OverviewCanvasControlsComponent.prototype._onClick = function _onClick(e) {
    this._performHitTest(_globals.Utils.getEventPosition(e));
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the container style
   * @return {Object}
   * @private
   */


  OverviewCanvasControlsComponent.prototype._getContainerStyle = function _getContainerStyle() {
    if (!this.context.editor.isReady()) {
      return { left: 0, top: 0, width: 1, height: 1 };
    }

    var _context$editor$getSD = this.context.editor.getSDK().getSprite().getBounds(),
        x = _context$editor$getSD.x,
        y = _context$editor$getSD.y,
        width = _context$editor$getSD.width,
        height = _context$editor$getSD.height;

    return {
      left: x,
      top: y,
      width: width,
      height: height
    };
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  OverviewCanvasControlsComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      {
        bem: '$b:canvasControls e:container m:full',
        ref: 'container' },
      _globals.ReactBEM.createElement('div', {
        bem: '$b:canvasControls e:innerContainer',
        ref: 'innerContainer',
        style: this._getContainerStyle(),
        onClick: this._onClick,
        onTouchStart: this._onClick })
    );
  };

  return OverviewCanvasControlsComponent;
}(_canvasControlsComponent2.default);

exports.default = OverviewCanvasControlsComponent;


OverviewCanvasControlsComponent.contextTypes = _canvasControlsComponent2.default.contextTypes;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

var _buttonComponent = __webpack_require__(41);

var _buttonComponent2 = _interopRequireDefault(_buttonComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExportButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ExportButtonComponent, _BaseComponent);

  function ExportButtonComponent() {
    (0, _classCallCheck3.default)(this, ExportButtonComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onButtonClick');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the button has been clicked
   * @private
   */


  ExportButtonComponent.prototype._onButtonClick = function _onButtonClick() {
    var _this2 = this;

    var _context = this.context,
        options = _context.options,
        editor = _context.editor,
        editorScreen = _context.editorScreen;

    var exportOptions = options.editor.export;

    editorScreen.switchToControls('home', null, function () {
      var loadingModal = _modalManager2.default.instance.displayLoading(_this2._t('loading.exporting'));

      // Give it some time to display the loading modal
      setTimeout(function () {
        editor.export(exportOptions.download).then(function () {
          loadingModal.close();
        });
      }, 100);
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ExportButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    var options = this.context.options;

    if (!options.editor.export.showButton) return null;

    return _globals.ReactBEM.createElement(_buttonComponent2.default, {
      style: 'blue',
      label: this._t('editor.export'),
      icon: 'editor/export.png',
      onClick: this._onButtonClick });
  };

  return ExportButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = ExportButtonComponent;


ExportButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _buttonComponent = __webpack_require__(41);

var _buttonComponent2 = _interopRequireDefault(_buttonComponent);

var _invisibleUploadComponent = __webpack_require__(40);

var _invisibleUploadComponent2 = _interopRequireDefault(_invisibleUploadComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewFileButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(NewFileButtonComponent, _BaseComponent);

  function NewFileButtonComponent() {
    (0, _classCallCheck3.default)(this, NewFileButtonComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onNewFile', '_onButtonClick');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user has selected a new file
   * @param {Image} image
   */


  NewFileButtonComponent.prototype._onNewFile = function _onNewFile(image) {
    var editor = this.context.editor;

    editor.reset();
    editor.setImage(image);
    editor.zoom.set('auto');
  };

  /**
   * Gets called when the button has been clicked
   * @private
   */


  NewFileButtonComponent.prototype._onButtonClick = function _onButtonClick() {
    var options = this.context.options;

    var webcamEnabled = options.enableWebcam === false || _globals.Utils.isMobile();
    var photoRollEnabled = !!options.photoRoll.provider;
    if (webcamEnabled && !photoRollEnabled) {
      this.refs.upload.open();
    } else if (photoRollEnabled) {
      this.props.app.switchToScreen('photoRoll');
    } else {
      this.props.app.switchToScreen('splash');
    }
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  NewFileButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    var options = this.context.options;


    var buttonLabel = null;
    if (options.photoRoll.provider) {
      buttonLabel = this._t('editor.backgroundImage');
    } else {
      buttonLabel = this._t('editor.new');
    }

    return _globals.ReactBEM.createElement(
      'div',
      null,
      _globals.ReactBEM.createElement(_invisibleUploadComponent2.default, { onNewFile: this._onNewFile, ref: 'upload' }),
      _globals.ReactBEM.createElement(_buttonComponent2.default, {
        label: buttonLabel,
        icon: 'editor/new.png',
        onClick: this._onButtonClick })
    );
  };

  return NewFileButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = NewFileButtonComponent;


NewFileButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _topBarComponent = __webpack_require__(31);

var _topBarComponent2 = _interopRequireDefault(_topBarComponent);

var _newFileButtonComponent = __webpack_require__(130);

var _newFileButtonComponent2 = _interopRequireDefault(_newFileButtonComponent);

var _exportButtonComponent = __webpack_require__(129);

var _exportButtonComponent2 = _interopRequireDefault(_exportButtonComponent);

var _undoButtonComponent = __webpack_require__(132);

var _undoButtonComponent2 = _interopRequireDefault(_undoButtonComponent);

var _zoomComponent = __webpack_require__(133);

var _zoomComponent2 = _interopRequireDefault(_zoomComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var OverviewTopBarComponent = function (_TopBarComponent) {
  (0, _inherits3.default)(OverviewTopBarComponent, _TopBarComponent);

  function OverviewTopBarComponent() {
    (0, _classCallCheck3.default)(this, OverviewTopBarComponent);
    return (0, _possibleConstructorReturn3.default)(this, _TopBarComponent.apply(this, arguments));
  }

  /**
   * Renders the content of this OverviewTopBarComponent
   * @return {ReactBEM.Element}
   */
  OverviewTopBarComponent.prototype.renderContent = function renderContent() {
    var newFileButton = null;
    if (this.context.options.enableUpload) {
      newFileButton = _globals.ReactBEM.createElement(_newFileButtonComponent2.default, { app: this.props.app });
    }

    var zoomComponent = null;
    if (this.context.options.editor.enableZoom) {
      zoomComponent = _globals.ReactBEM.createElement(_zoomComponent2.default, null);
    }

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:topBar' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:left' },
        newFileButton
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:right' },
        _globals.ReactBEM.createElement(_undoButtonComponent2.default, null),
        _globals.ReactBEM.createElement(_exportButtonComponent2.default, null)
      ),
      zoomComponent
    );
  };

  return OverviewTopBarComponent;
}(_topBarComponent2.default);

exports.default = OverviewTopBarComponent;


OverviewTopBarComponent.contextTypes = _topBarComponent2.default.contextTypes;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _buttonComponent = __webpack_require__(41);

var _buttonComponent2 = _interopRequireDefault(_buttonComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var UndoButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(UndoButtonComponent, _BaseComponent);

  function UndoButtonComponent() {
    var _this$_events;

    (0, _classCallCheck3.default)(this, UndoButtonComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onButtonClick', '_onHistoryUpdated', '_onFeaturesUpdated');

    _this._events = (_this$_events = {}, (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.HISTORY_UPDATED, _this._onHistoryUpdated), (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.FEATURES_UPDATED, _this._onFeaturesUpdated), _this$_events);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the features have been enabled or disabled
   * @private
   */


  UndoButtonComponent.prototype._onFeaturesUpdated = function _onFeaturesUpdated() {
    this.forceUpdate();
  };

  /**
   * Gets called when the history has been updated
   * @private
   */


  UndoButtonComponent.prototype._onHistoryUpdated = function _onHistoryUpdated() {
    this.forceUpdate();
  };

  /**
   * Gets called when the button has been clicked
   * @private
   */


  UndoButtonComponent.prototype._onButtonClick = function _onButtonClick() {
    var editor = this.context.editor;

    editor.history.undo();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  UndoButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    var editor = this.context.editor;

    if (!editor.history.isAvailable()) return null;

    return _globals.ReactBEM.createElement(_buttonComponent2.default, {
      label: this._t('editor.undo'),
      icon: 'editor/undo.png',
      onClick: this._onButtonClick });
  };

  return UndoButtonComponent;
}(_globals.BaseComponent);

exports.default = UndoButtonComponent;


UndoButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZoomComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ZoomComponent, _BaseComponent);

  function ZoomComponent() {
    var _this$_events;

    (0, _classCallCheck3.default)(this, ZoomComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onZoomOutClick', '_onZoomInClick', '_onZoomDone', '_onFeaturesUpdated');

    _this._events = (_this$_events = {}, (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.ZOOM_DONE, _this._onZoomDone), (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.FEATURES_UPDATED, _this._onFeaturesUpdated), _this$_events);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the features have been updated
   * @private
   */


  ZoomComponent.prototype._onFeaturesUpdated = function _onFeaturesUpdated() {
    this.forceUpdate();
  };

  /**
   * Gets called when the new zoom level has been applied
   * @private
   */


  ZoomComponent.prototype._onZoomDone = function _onZoomDone() {
    this.forceUpdate();
  };

  /**
   * Gets called when the user clicks the "zoom out" button
   * @param {Event} e
   * @private
   */


  ZoomComponent.prototype._onZoomOutClick = function _onZoomOutClick(e) {
    var editor = this.context.editor;

    if (!editor.features.isEnabled('zoom')) return;

    editor.zoom.zoomOut();
  };

  /**
   * Gets called when the user clicks the "zoom in" button
   * @param {Event} e
   * @private
   */


  ZoomComponent.prototype._onZoomInClick = function _onZoomInClick(e) {
    var editor = this.context.editor;

    if (!editor.features.isEnabled('zoom')) return;

    editor.zoom.zoomIn();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ZoomComponent.prototype.renderWithBEM = function renderWithBEM() {
    var editor = this.context.editor;

    var zoom = editor.zoom.get();
    var enabled = editor.features.isEnabled('zoom');

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:editorScreen' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:zoom' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: '$e:button m:zoomOut',
            onClick: this._onZoomOutClick,
            className: enabled ? null : 'is-disabled' },
          _globals.ReactBEM.createElement('img', { bem: 'e:image', src: this._getAssetPath('controls/minus.png', true) })
        ),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label' },
          'Zoom',
          _globals.ReactBEM.createElement('br', null),
          Math.round(zoom * 100),
          '%'
        ),
        _globals.ReactBEM.createElement(
          'div',
          {
            bem: '$e:button m:zoomIn',
            onClick: this._onZoomInClick,
            className: enabled ? null : 'is-disabled' },
          _globals.ReactBEM.createElement('img', { bem: 'e:image', src: this._getAssetPath('controls/plus.png', true) })
        )
      )
    );
  };

  return ZoomComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = ZoomComponent;


ZoomComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _selectiveBlurControlsComponent = __webpack_require__(136);

var _selectiveBlurControlsComponent2 = _interopRequireDefault(_selectiveBlurControlsComponent);

var _selectiveBlurCanvasControlsComponent = __webpack_require__(135);

var _selectiveBlurCanvasControlsComponent2 = _interopRequireDefault(_selectiveBlurCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The selective blur controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
var SelectiveBlurControls = function (_Controls) {
  (0, _inherits3.default)(SelectiveBlurControls, _Controls);

  function SelectiveBlurControls() {
    (0, _classCallCheck3.default)(this, SelectiveBlurControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user leaves these controls
   * @this {SelectiveBlurControlsComponent}
   * @override
   * @ignore
   */
  SelectiveBlurControls.onExit = function onExit() {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    if (operation.getPaths().length === 0) {
      editor.operations.remove(operation);
    }

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Gets called when the user enters these controls
   * @this {SelectiveBlurControlsComponent}
   * @param {SharedState} sharedState
   * @param {Object} options
   * @override
   * @ignore
   */


  SelectiveBlurControls.onEnter = function onEnter(sharedState, options) {
    var editor = this.context.editor;


    editor.zoom.set('auto', function () {
      editor.render();
    });

    var outputDimensions = editor.getOutputDimensions();
    var operationExistedBefore = editor.operations.exists('selective-blur');
    var operation = editor.operations.getOrCreate('selective-blur');
    var initialOptions = operation.serializeOptions();
    var brush = operation.getBrush();

    var thickness = outputDimensions.min() * 0.1;
    var hardness = 1;

    var inputDimensions = operation.getInputDimensions();

    this.setSharedState({
      operationExistedBefore: operationExistedBefore, operation: operation, brush: brush, initialOptions: initialOptions, thickness: thickness, hardness: hardness, inputDimensions: inputDimensions
    });
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @override
   * @ignore
   */


  SelectiveBlurControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('selective-blur');
  };

  return SelectiveBlurControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

SelectiveBlurControls.controlsComponent = _selectiveBlurControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
SelectiveBlurControls.canvasControlsComponent = _selectiveBlurCanvasControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
SelectiveBlurControls.identifier = 'selective-blur';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
SelectiveBlurControls.iconPath = 'controls/overview/selective-blur.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
SelectiveBlurControls.languageKey = 'controls.overview.selective-blur';

/**
 * The default options for this control
 * @type {Object}
 */
SelectiveBlurControls.defaultOptions = {};

exports.default = SelectiveBlurControls;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _spritesCanvasControlsComponent = __webpack_require__(30);

var _spritesCanvasControlsComponent2 = _interopRequireDefault(_spritesCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BrushCanvasControlsComponent = function (_SpritesCanvasControl) {
  (0, _inherits3.default)(BrushCanvasControlsComponent, _SpritesCanvasControl);

  function BrushCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, BrushCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _SpritesCanvasControl.call.apply(_SpritesCanvasControl, [this].concat(args)));

    _this._windowResized = false;
    _this._drawing = false;
    _this._bindAll('_onMouseEnter', '_onMouseLeave', '_onMouseDown', '_onMouseMove', '_onMouseUp', '_onMouseMoveOnCanvas', '_onWindowResize');

    _this._lastDrawPosition = null;

    _this._events = _globals.SDKUtils.extend(_this._events, (0, _defineProperty3.default)({}, _globals.Constants.EVENTS.WINDOW_RESIZE, _this._onWindowResize));

    _this.state = {
      cursorVisible: false,
      cursorPosition: new _globals.Vector2()
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  BrushCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _SpritesCanvasControl.prototype.componentDidMount.call(this);
    this._updateContainerRect();
  };

  /**
   * Gets called when this component has been updated
   */


  BrushCanvasControlsComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this._windowResized) {
      this._updateContainerRect();
      this._windowResized = false;
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the window has been resized
   * @private
   */


  BrushCanvasControlsComponent.prototype._onWindowResize = function _onWindowResize() {
    this._windowResized = true;
  };

  /**
   * Gets called when an operation has been removed
   * @param  {Operation} operation
   * @private
   */


  BrushCanvasControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {};

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  BrushCanvasControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    if (operation === this.getSharedState('operation')) {
      this.forceUpdate();
    }
  };

  /**
   * Gets called when the user presses a mouse button
   * @param  {Event} e
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseDown = function _onMouseDown(e) {
    e.preventDefault();

    var operation = this.getSharedState('operation');
    this._optionsBeforeDraw = operation.serializeOptions();
    delete this._optionsBeforeDraw.enabled;

    this._operationExistedBeforeDraw = this.getSharedState('operationExistedBefore');
    this.setSharedState({ operationExistedBefore: true }, false);

    var outputDimensions = this.context.editor.getOutputDimensions();
    var cursorPosition = this._getCursorPosition(e);

    var thickness = this.getSharedState('thickness') / outputDimensions.min();
    var hardness = this.getSharedState('hardness');
    this._drawing = true;
    this._currentPath = operation.createPath(thickness, hardness);
    this._currentPath.addControlPoint(cursorPosition.clone().divide(outputDimensions));

    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('touchmove', this._onMouseMove);
    document.addEventListener('mouseup', this._onMouseUp);
    document.addEventListener('touchend', this._onMouseUp);
  };

  /**
   * Gets called when the user releases a mouse button
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseUp = function _onMouseUp() {
    this._currentPath.setClosed(true);

    var editor = this.context.editor;

    editor.render();

    this._currentPath = null;
    this._drawing = false;

    editor.history.add(this.getSharedState('operation'), this._optionsBeforeDraw, this._operationExistedBeforeDraw);

    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('touchmove', this._onMouseMove);
    document.removeEventListener('mouseup', this._onMouseUp);
    document.removeEventListener('touchend', this._onMouseUp);
  };

  /**
   * Gets called when the user enters the canvas
   * @param {Event} event
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseEnter = function _onMouseEnter(e) {
    var cursorPosition = this._getCursorPosition(e);
    this.setState({
      cursorVisible: true,
      cursorPosition: cursorPosition
    });
    this._onMouseMove(e);
  };

  /**
   * Gets called when the user leaves the canvas
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseLeave = function _onMouseLeave() {
    this.setState({
      cursorVisible: false
    });
  };

  /**
   * Gets called while the user moves the mouse
   * @param {Event} e
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseMove = function _onMouseMove(e) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var zoom = editor.zoom.get();
    var cursorPosition = this._getCursorPosition(e);
    this.setState({ cursorPosition: cursorPosition });

    var shouldDraw = void 0;
    if (!this._lastDrawPosition) {
      shouldDraw = true;
    } else {
      var brushSize = this.getSharedState('thickness');
      var distance = this._lastDrawPosition.clone().subtract(cursorPosition).abs().len() / zoom;
      shouldDraw = distance >= brushSize / 10;
    }

    if (this._drawing && shouldDraw) {
      this._currentPath.addControlPoint(cursorPosition.clone().divide(outputDimensions));
      this._lastDrawPosition = cursorPosition.clone();

      editor.render();
    }
  };

  /**
   * Gets called while the user moves the mouse on top of the canvas. Updates
   * the cursor cursor position
   * @param  {Event} e
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseMoveOnCanvas = function _onMouseMoveOnCanvas(e) {
    var cursorPosition = this._getCursorPosition(e);
    this.setState({ cursorPosition: cursorPosition });
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the cursor's style object
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getCursorStyle = function _getCursorStyle() {
    var thickness = this.getSharedState('thickness');

    var cursorPosition = this.state.cursorPosition;

    return {
      left: cursorPosition.x,
      top: cursorPosition.y,
      width: thickness,
      height: thickness,
      marginLeft: thickness * -0.5,
      marginTop: thickness * -0.5
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Updates the container bounding rect
   * @private
   */


  BrushCanvasControlsComponent.prototype._updateContainerRect = function _updateContainerRect() {
    this._containerBoundingRect = this.refs.innerContainer.getBoundingClientRect();
  };

  /**
   * Returns the cursor position for the given event
   * @param  {Event} event
   * @private
   */


  BrushCanvasControlsComponent.prototype._getCursorPosition = function _getCursorPosition(event) {
    var position = _globals.Utils.getEventPosition(event);
    var boundingRect = this._containerBoundingRect;
    return position.subtract(boundingRect.left, boundingRect.top);
  };

  /**
   * Returns the properties for the outer container
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getContainerProps = function _getContainerProps() {
    var props = _SpritesCanvasControl.prototype._getContainerProps.call(this);

    props.onMouseDown = props.onTouchStart = this._onMouseDown;
    return props;
  };

  /**
   * Returns the properties for the canvas container
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getInnerContainerProps = function _getInnerContainerProps() {
    var props = _SpritesCanvasControl.prototype._getInnerContainerProps.call(this);

    // This disables the hit testing for this sub control
    delete props.onClick;

    props.onMouseEnter = this._onMouseEnter;
    props.onMouseLeave = this._onMouseLeave;
    props.onMouseMove = this._onMouseMoveOnCanvas;
    return props;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the sprite items
   * @return {Array.<SpriteItemComponent>}
   * @private
   */


  BrushCanvasControlsComponent.prototype._renderSpriteItems = function _renderSpriteItems() {
    return null;
  };

  /**
   * This renders controls on top of the sprites
   * @return {ReactBEM.Element}
   * @private
   */


  BrushCanvasControlsComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    var cursorClass = this.state.cursorVisible ? 'is-visible' : null;
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:selectiveBlurCanvasControls' },
      _globals.ReactBEM.createElement('div', { bem: 'e:cursor', className: cursorClass, style: this._getCursorStyle() })
    );
  };

  return BrushCanvasControlsComponent;
}(_spritesCanvasControlsComponent2.default);

exports.default = BrushCanvasControlsComponent;


BrushCanvasControlsComponent.contextTypes = _spritesCanvasControlsComponent2.default.contextTypes;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _sliderComponent = __webpack_require__(14);

var _sliderComponent2 = _interopRequireDefault(_sliderComponent);

var _sliderOverlayComponent = __webpack_require__(20);

var _sliderOverlayComponent2 = _interopRequireDefault(_sliderOverlayComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BrushControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(BrushControlsComponent, _ControlsComponent);

  function BrushControlsComponent() {
    var _this$_events;

    (0, _classCallCheck3.default)(this, BrushControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._hasDoneButton = false;
    _this._brushThickness = _this.getSharedState('thickness');

    _this._bindAll('_onOperationUpdated', '_onOperationRemoved', '_onThicknessUpdated', '_onBlurRadiusChange');

    _this.state = {
      thicknessControlsEnabled: false
    };

    _this._events = (_this$_events = {}, (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.OPERATION_REMOVED, _this._onOperationRemoved), _this$_events);
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  BrushControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _ControlsComponent.prototype.componentDidMount.call(this);

    var editor = this.context.editor;

    editor.zoom.set('auto');
    editor.features.disable('zoom', 'drag');
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation has been removed
   * @param  {Operation} operation
   * @private
   */


  BrushControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    if (operation !== this.getSharedState('operation')) return;
    if (this._backButtonClicked) return;

    // Operation can be removed by the undo button. We need
    // to make sure we re-create the operation for the lifetime
    // of this control
    var editor = this.context.editor;

    var newOperation = editor.operations.getOrCreate('selective-blur');
    var brush = newOperation.getBrush();

    this.setSharedState({
      operation: newOperation,
      brush: brush,
      operationExistedBefore: false,
      initialOptions: {}
    });

    editor.render();
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  BrushControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    if (operation === this.getSharedState('operation')) {
      var editor = this.context.editor;

      editor.render();
      this.forceUpdate();
    }
  };

  /**
   * Gets called when the thickness has been updated
   * @param {Number} thickness
   * @private
   */


  BrushControlsComponent.prototype._onThicknessUpdated = function _onThicknessUpdated(thickness) {
    this.setSharedState({ thickness: thickness });
    this._brushThickness = thickness;
  };

  /**
   * Gets called when the slider value has changed
   * @param {Number} value
   * @param {Number} previousValue
   * @param {Boolean} released
   * @private
   */


  BrushControlsComponent.prototype._onBlurRadiusChange = function _onBlurRadiusChange(value, previousValue) {
    var released = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var inputDimensions = this.getSharedState('inputDimensions');
    this.getSharedState('operation').setBlurRadius(value / inputDimensions.min());

    var editor = this.context.editor;

    editor.render();

    if (released) {
      editor.history.add(this.getSharedState('operation'), { blurRadius: previousValue / inputDimensions.min() }, true);
    }
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the overlay controls of this component
   * @return {ReactBEM.Element}
   */


  BrushControlsComponent.prototype.renderOverlayControls = function renderOverlayControls() {
    var inputDimensions = this.getSharedState('inputDimensions');
    var shortestSide = inputDimensions.min();
    var value = this.getSharedState('operation').getBlurRadius() * shortestSide;

    return _globals.ReactBEM.createElement(_sliderOverlayComponent2.default, {
      minValue: 0,
      maxValue: Math.min(180, Math.round(shortestSide * 0.1)),
      value: value,
      valueUnit: 'px',
      label: this._t('controls.selectiveBlur.blurRadius'),
      onChange: this._onBlurRadiusChange });
  };

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  BrushControlsComponent.prototype.renderControls = function renderControls() {
    var editor = this.context.editor;

    var zoom = editor.zoom.get();
    var items = [];

    var finalDimensions = editor.getFinalDimensions();
    var minThickness = 1;
    var maxThickness = Math.round(finalDimensions.clone().multiply(zoom).min() / 2);
    var currentWidth = this._brushThickness;

    items.push(_globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:slider' },
      _globals.ReactBEM.createElement(_sliderComponent2.default, {
        style: 'large',
        minValue: minThickness,
        maxValue: maxThickness,
        valueUnit: 'px',
        middleDot: false,
        label: this._t('controls.brush.thickness'),
        onChange: this._onThicknessUpdated,
        value: currentWidth })
    ));

    return items;
  };

  return BrushControlsComponent;
}(_controlsComponent2.default);

exports.default = BrushControlsComponent;


BrushControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _itemComponent = __webpack_require__(38);

var _itemComponent2 = _interopRequireDefault(_itemComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var BrushItemComponent = function (_ItemComponent) {
  (0, _inherits3.default)(BrushItemComponent, _ItemComponent);

  function BrushItemComponent() {
    (0, _classCallCheck3.default)(this, BrushItemComponent);
    return (0, _possibleConstructorReturn3.default)(this, _ItemComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */
  BrushItemComponent.prototype.componentDidMount = function componentDidMount() {
    _ItemComponent.prototype.componentDidMount.call(this);

    var canvas = this.props.sprite.getCanvas();
    this._appendCanvas(canvas);
  };

  /**
   * Gets called when this component is about to receive new properties
   * @param  {Object} nextProps
   */


  BrushItemComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.sprite !== this.props.sprite) {
      var canvas = this.props.sprite.getCanvas();
      canvas.parentNode.removeChild(canvas);
      var newCanvas = nextProps.sprite.getCanvas();
      this._appendCanvas(newCanvas);
    }
  };

  /**
   * Appends and styles the given canvas
   * @param  {HTMLCanvasElement} canvas
   * @private
   */


  BrushItemComponent.prototype._appendCanvas = function _appendCanvas(canvas) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();
    canvas.style.width = outputDimensions.x + 'px';
    canvas.style.height = outputDimensions.y + 'px';
    this.refs.brush.appendChild(canvas);
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Checks if this item is currently selected
   * @return {Boolean}
   */


  BrushItemComponent.prototype._isSelected = function _isSelected() {
    return this.getSharedState('brush') === this.props.sprite;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  BrushItemComponent.prototype.renderWithBEM = function renderWithBEM() {
    var brushClassName = this._isSelected() ? 'is-selected' : null;
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:spritesCanvasControls' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:item e:container m:full', ref: 'container' },
        _globals.ReactBEM.createElement('div', {
          bem: '$e:brush',
          className: brushClassName,
          ref: 'brush' })
      )
    );
  };

  return BrushItemComponent;
}(_itemComponent2.default);

exports.default = BrushItemComponent;


BrushItemComponent.contextTypes = _itemComponent2.default.contextTypes;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

var _itemComponent = __webpack_require__(38);

var _itemComponent2 = _interopRequireDefault(_itemComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickerItemComponent = function (_ItemComponent) {
  (0, _inherits3.default)(StickerItemComponent, _ItemComponent);

  function StickerItemComponent() {
    (0, _classCallCheck3.default)(this, StickerItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ItemComponent.call.apply(_ItemComponent, [this].concat(args)));

    _this._bindAll('_onRotateKnobDragStart', '_onRotateKnobDrag', '_onRotateKnobDragStop');
    _this._id = _globals.SDKUtils.getUUID();
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user starts dragging a knob
   * @param  {String} side
   * @param  {Vector2} position
   * @param  {Event} e
   * @private
   */


  StickerItemComponent.prototype._onKnobDragStart = function _onKnobDragStart(side, position, e) {
    var sprite = this.props.sprite;

    switch (side) {
      case 'bottom':
        this._initialPosition = this._getBottomDragKnobPosition();
        break;
      case 'top':
        this._initialPosition = this._getTopDragKnobPosition();
        break;
    }

    this._initialDimensions = sprite.getDimensions().clone();

    this.props.onDragStart && this.props.onDragStart();
  };

  /**
   * Gets called while the user drags a sticker
   * @param  {String} side
   * @param  {Vector2} offset
   * @param  {Event} e
   * @private
   */


  StickerItemComponent.prototype._onKnobDrag = function _onKnobDrag(side, offset, e) {
    var sprite = this.props.sprite;

    var stickerPosition = this._getAbsoluteSpritePosition();
    var newKnobPosition = this._initialPosition.clone().add(offset);

    // Calculate new rotation and dimensions from new knob position
    var knobDistanceFromCenter = newKnobPosition.clone().subtract(stickerPosition);

    var initialKnobDistanceFromCenter = this._initialPosition.clone().subtract(stickerPosition);

    if (this.props.options.fixedRatio) {
      var halfDimensions = this._getStickerDimensions().divide(2).abs();

      var initialDistanceFromCenter = this._initialPosition.clone().subtract(stickerPosition);

      var radians = void 0;

      switch (side) {
        case 'bottom':
          radians = Math.atan2(knobDistanceFromCenter.y, knobDistanceFromCenter.x) - Math.atan2(halfDimensions.y, halfDimensions.x);
          break;
        case 'top':
          radians = Math.atan2(knobDistanceFromCenter.y, knobDistanceFromCenter.x) - Math.atan2(-halfDimensions.y, -halfDimensions.x);
          break;
      }

      var newDimensions = this._initialDimensions.clone().multiply(knobDistanceFromCenter.len() / initialDistanceFromCenter.len());

      sprite.set({
        dimensions: newDimensions,
        rotation: radians
      });
    } else {
      var zoom = this.context.editor.zoom.get();
      var rotation = sprite.getRotation();
      var cos = Math.cos(rotation * -1);
      var sin = Math.sin(rotation * -1);

      var localDistanceToCenter = new _globals.Vector2(knobDistanceFromCenter.x * cos - knobDistanceFromCenter.y * sin, knobDistanceFromCenter.x * sin + knobDistanceFromCenter.y * cos);

      var previousLocalDistanceToCenter = new _globals.Vector2(initialKnobDistanceFromCenter.x * cos - initialKnobDistanceFromCenter.y * sin, initialKnobDistanceFromCenter.x * sin + initialKnobDistanceFromCenter.y * cos);

      var distanceToCenterDiff = void 0;

      switch (side) {
        case 'bottom':
          distanceToCenterDiff = localDistanceToCenter.clone().subtract(previousLocalDistanceToCenter);
          break;
        case 'top':
          distanceToCenterDiff = previousLocalDistanceToCenter.clone().subtract(localDistanceToCenter);
          break;
      }

      var _newDimensions = this._initialDimensions.clone().add(distanceToCenterDiff.clone().divide(zoom).multiply(2));

      sprite.set({
        dimensions: _newDimensions
      });
    }
  };

  /**
   * Gets called when the user stops dragging a knob
   * @private
   */


  StickerItemComponent.prototype._onKnobDragStop = function _onKnobDragStop() {
    this.props.onDragStop && this.props.onDragStop();
  };

  /**
   * Gets called when the user starts dragging the rotate knob
   * @param  {Vector2} position
   * @param  {Event} e
   * @private
   */


  StickerItemComponent.prototype._onRotateKnobDragStart = function _onRotateKnobDragStart(position, e) {
    this._initialPosition = this._getRotateKnobPosition();
    this.props.onDragStart && this.props.onDragStart();
  };

  /**
   * Gets called when the user stops dragging the rotate knob
   * @private
   */


  StickerItemComponent.prototype._onRotateKnobDragStop = function _onRotateKnobDragStop() {
    this.props.onDragStop && this.props.onDragStop();
  };

  /**
   * Gets called while the user drags a sticker
   * @param  {Vector2} offset
   * @param  {Event} e
   * @private
   */


  StickerItemComponent.prototype._onRotateKnobDrag = function _onRotateKnobDrag(offset, e) {
    var sprite = this.props.sprite;

    var stickerPosition = this._getAbsoluteSpritePosition();
    var newKnobPosition = this._initialPosition.clone().add(offset);

    var halfDimensions = this._getStickerDimensions().divide(2);

    // Calculate new rotation and dimensions from new knob position
    var knobDistanceFromCenter = newKnobPosition.clone().subtract(stickerPosition);

    var radians = void 0;
    radians = Math.atan2(knobDistanceFromCenter.y, knobDistanceFromCenter.x) - Math.atan2(-halfDimensions.y, halfDimensions.x);

    sprite.set({
      rotation: radians
    });
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the style object for the bottom right drag knob
   * @return {Object}
   * @private
   */


  StickerItemComponent.prototype._getBottomDragKnobStyle = function _getBottomDragKnobStyle() {
    var knobPosition = this._getBottomDragKnobPosition();

    return {
      left: knobPosition.x,
      top: knobPosition.y
    };
  };

  /**
   * Returns the style object for the top right drag knob
   * @return {Object}
   * @private
   */


  StickerItemComponent.prototype._getTopDragKnobStyle = function _getTopDragKnobStyle() {
    var knobPosition = this._getTopDragKnobPosition();

    return {
      left: knobPosition.x,
      top: knobPosition.y
    };
  };

  /**
   * Returns the style object for the rotate knob
   * @return {Object}
   * @private
   */


  StickerItemComponent.prototype._getRotateKnobStyle = function _getRotateKnobStyle() {
    var knobPosition = this._getRotateKnobPosition();

    return {
      left: knobPosition.x,
      top: knobPosition.y
    };
  };

  /**
   * Builds the style object for this sticker
   * @return {Object}
   * @private
   */


  StickerItemComponent.prototype._getStickerStyle = function _getStickerStyle() {
    var sprite = this.props.sprite;


    var processedDimensions = this._getStickerDimensions().abs();
    var spritePosition = this._getAbsoluteSpritePosition().subtract(processedDimensions.clone().divide(2));

    var degrees = sprite.getRotation() * 180 / Math.PI;
    var transform = 'rotate(' + degrees.toFixed(2) + 'deg)';

    var spriteDimensions = sprite.getDimensions();

    var flipVertically = sprite.getFlipVertically();
    if (spriteDimensions.y < 0) flipVertically = !flipVertically;
    if (flipVertically) {
      transform += ' scaleY(-1)';
    }

    var flipHorizontally = sprite.getFlipHorizontally();
    if (spriteDimensions.x < 0) flipHorizontally = !flipHorizontally;
    if (flipHorizontally) {
      transform += ' scaleX(-1)';
    }

    return {
      top: spritePosition.y,
      left: spritePosition.x,
      width: processedDimensions.x,
      height: processedDimensions.y,
      WebkitTransform: transform,
      msTransform: transform,
      MozTransform: transform,
      OTransform: transform
    };
  };

  // -------------------------------------------------------------------------- CALCULATIONS

  /**
   * Calculates the sticker dimensions
   * @param  {Object} sticker
   * @return {Vector2}
   * @private
   */


  StickerItemComponent.prototype._getStickerDimensions = function _getStickerDimensions() {
    var sprite = this.props.sprite;
    var editor = this.context.editor;


    return sprite.getDimensions().clone().multiply(editor.zoom.get());
  };

  /**
   * Calculates the rotate button knob's position
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  StickerItemComponent.prototype._getRotateKnobPosition = function _getRotateKnobPosition() {
    var sprite = this.props.sprite;

    var stickerPosition = this._getAbsoluteSpritePosition();
    var stickerRotation = sprite.getRotation();

    // Calculate sin and cos for rotation
    var sin = Math.sin(stickerRotation || 0);
    var cos = Math.cos(stickerRotation || 0);

    // Calculate sticker dimensions
    var halfDimensions = this._getStickerDimensions().divide(2);

    // Calculate knob position
    return stickerPosition.clone().add(halfDimensions.x * cos + halfDimensions.y * sin, halfDimensions.x * sin - halfDimensions.y * cos);
  };

  /**
   * Calculates the drag bottom right knob's position
   * @return {Vector2}
   * @private
   */


  StickerItemComponent.prototype._getBottomDragKnobPosition = function _getBottomDragKnobPosition() {
    var sprite = this.props.sprite;

    var stickerPosition = this._getAbsoluteSpritePosition();
    var stickerRotation = sprite.getRotation();

    // Calculate sin and cos for rotation
    var sin = Math.sin(stickerRotation || 0);
    var cos = Math.cos(stickerRotation || 0);

    // Calculate sticker dimensions
    var halfDimensions = this._getStickerDimensions().divide(2);

    // Calculate knob position
    return stickerPosition.clone().add(halfDimensions.x * cos - halfDimensions.y * sin, halfDimensions.x * sin + halfDimensions.y * cos);
  };

  /**
   * Calculates the drag top right knob's position
   * @return {Vector2}
   * @private
   */


  StickerItemComponent.prototype._getTopDragKnobPosition = function _getTopDragKnobPosition() {
    var sprite = this.props.sprite;

    var stickerPosition = this._getAbsoluteSpritePosition();
    var stickerRotation = sprite.getRotation();

    // Calculate sin and cos for rotation
    var sin = Math.sin(stickerRotation || 0);
    var cos = Math.cos(stickerRotation || 0);

    // Calculate sticker dimensions
    var halfDimensions = this._getStickerDimensions(sprite).divide(2);

    // Calculate knob position
    return stickerPosition.clone().subtract(halfDimensions.x * cos - halfDimensions.y * sin, halfDimensions.x * sin + halfDimensions.y * cos);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the knobs for this item
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  StickerItemComponent.prototype._renderKnobs = function _renderKnobs() {
    var knobs = [];
    if (this.props.selected) {
      knobs = [_globals.ReactBEM.createElement(
        _draggableComponent2.default,
        {
          onStart: this._onKnobDragStart.bind(this, 'bottom'),
          onStop: this._onKnobDragStop.bind(this, 'bottom'),
          onDrag: this._onKnobDrag.bind(this, 'bottom') },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:knob $b:knob', style: this._getBottomDragKnobStyle() },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/knobs/resize-diagonal-down.png', true) })
        )
      ), _globals.ReactBEM.createElement(
        _draggableComponent2.default,
        {
          onStart: this._onKnobDragStart.bind(this, 'top'),
          onStop: this._onKnobDragStop.bind(this, 'top'),
          onDrag: this._onKnobDrag.bind(this, 'top') },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:knob $b:knob', style: this._getTopDragKnobStyle() },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/knobs/resize-diagonal-down.png', true) })
        )
      )];

      if (!this.props.options.fixedRatio) {
        knobs.push(_globals.ReactBEM.createElement(
          _draggableComponent2.default,
          {
            onStart: this._onRotateKnobDragStart,
            onStop: this._onRotateKnobDragStop,
            onDrag: this._onRotateKnobDrag },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:knob $b:knob', style: this._getRotateKnobStyle() },
            _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/knobs/rotate.png', true) })
          )
        ));
      }
    }
    return knobs;
  };

  /**
   * Renders the SVG filters
   * @return {ReactBEM.Element}
   * @private
   */


  StickerItemComponent.prototype._renderSVGFilter = function _renderSVGFilter() {
    var sprite = this.props.sprite;

    var adjustments = sprite.getAdjustments();
    var brightness = adjustments.getBrightness();
    var saturation = adjustments.getSaturation();
    var contrast = adjustments.getContrast();

    var filtersSVG = '<filter id=\'pesdk-sticker-' + this._id + '-filter\'>\n        <feComponentTransfer>\n          <feFuncR type=\'linear\' intercept=\'' + brightness + '\' />\n          <feFuncG type=\'linear\' intercept=\'' + brightness + '\' />\n          <feFuncB type=\'linear\' intercept=\'' + brightness + '\' />\n        </feComponentTransfer>\n        <feColorMatrix type=\'saturate\' values=\'' + saturation + '\' />\n        <feComponentTransfer>\n          <feFuncR type=\'linear\' slope=\'' + contrast + '\' intercept=\'' + (-(0.5 * contrast) + 0.5) + '\' />\n          <feFuncG type=\'linear\' slope=\'' + contrast + '\' intercept=\'' + (-(0.5 * contrast) + 0.5) + '\' />\n          <feFuncB type=\'linear\' slope=\'' + contrast + '\' intercept=\'' + (-(0.5 * contrast) + 0.5) + '\' />\n        </feComponentTransfer>\n      </filter>';

    // We added `key: Math.random()` because in Safari, dangerouslySetInnerHTML
    // would not update without that...
    // https://github.com/facebook/react/issues/2863
    return _globals.ReactBEM.createElement(
      'svg',
      { width: '0', height: '0', 'color-interpolation-filters': 'sRGB', is: 'svg' },
      _globals.ReactBEM.createElement('defs', {
        key: Math.random(),
        dangerouslySetInnerHTML: {
          __html: filtersSVG
        }
      })
    );
  };

  /**
   * Renders the draggable item
   * @return {ReactBEM.Element}
   * @private
   */


  StickerItemComponent.prototype._renderItem = function _renderItem() {
    var sprite = this.props.sprite;

    var stickerStyle = this._getStickerStyle();
    var className = this.props.selected ? 'is-selected' : null;
    var stickerImageStyle = { filter: 'url("#pesdk-sticker-' + this._id + '-filter")' };

    return _globals.ReactBEM.createElement(
      _draggableComponent2.default,
      {
        onStart: this._onItemDragStart,
        onStop: this._onItemDragStop,
        onDrag: this._onItemDrag,
        disabled: !this.props.selected },
      _globals.ReactBEM.createElement(
        'div',
        {
          bem: '$e:sticker',
          style: stickerStyle,
          className: className },
        _globals.ReactBEM.createElement(
          'svg',
          { width: stickerStyle.width, height: stickerStyle.height, 'color-interpolation-filters': 'sRGB', is: 'svg' },
          _globals.ReactBEM.createElement('image', {
            xlinkHref: sprite.getImage().src,
            width: stickerStyle.width,
            height: stickerStyle.height,
            style: stickerImageStyle
          })
        )
      )
    );
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  StickerItemComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:spritesCanvasControls' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:item e:container' },
        this._renderSVGFilter(),
        this._renderItem(),
        this._renderKnobs()
      )
    );
  };

  return StickerItemComponent;
}(_itemComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = StickerItemComponent;


StickerItemComponent.contextTypes = _itemComponent2.default.contextTypes;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _draggableComponent = __webpack_require__(11);

var _draggableComponent2 = _interopRequireDefault(_draggableComponent);

var _itemComponent = __webpack_require__(38);

var _itemComponent2 = _interopRequireDefault(_itemComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextItemComponent = function (_ItemComponent) {
  (0, _inherits3.default)(TextItemComponent, _ItemComponent);

  function TextItemComponent() {
    (0, _classCallCheck3.default)(this, TextItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ItemComponent.call.apply(_ItemComponent, [this].concat(args)));

    _this._bindAll('_onTextChange', '_onItemDoubleClick', '_onItemTouchStart', '_onItemTouchEnd', '_onResizeKnobDragStart', '_onResizeKnobDrag', '_onResizeKnobDragStop', '_onRotationKnobDragStart', '_onRotationKnobDrag', '_onRotationKnobDragStop');

    _this.state = {
      editMode: false
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user has changed the text
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onTextChange = function _onTextChange(e) {
    var sprite = this.props.sprite;

    sprite.setText(e.target.value);
  };

  /**
   * Gets called when the user double clicks the text. Turns the sprite into
   * editing mode.
   * @private
   */


  TextItemComponent.prototype._onItemDoubleClick = function _onItemDoubleClick() {
    this.enterEditMode();
  };

  /**
   * Enters the edit mode
   */


  TextItemComponent.prototype.enterEditMode = function enterEditMode() {
    var _this2 = this;

    var sprite = this.props.sprite;

    if (!sprite._edited) {
      sprite.setText('');
      this.refs.textarea.value = '';
      sprite._edited = true;
      this.forceUpdate();
    }
    this.setState({ editMode: true }, function () {
      _this2.refs.textarea.focus();
      _this2.refs.textarea.select();
    });
  };

  /**
   * Gets called when the user starts touching the item
   * @param {Event} e
   * @private
   */


  TextItemComponent.prototype._onItemTouchStart = function _onItemTouchStart(e) {
    this._initialTouchPosition = _globals.Utils.getEventPosition(e);
    this._tapStartAt = (0, _globals.now)();
  };

  /**
   * Gets called when the user stops touching the item
   * @private
   */


  TextItemComponent.prototype._onItemTouchEnd = function _onItemTouchEnd() {
    // Recognize double tap
    if ((0, _globals.now)() - this._tapStartAt <= 100) {
      // Touch didn't last longer than 100ms => recognized as tap
      if (typeof this._lastTapAt !== 'undefined' && (0, _globals.now)() - this._lastTapAt <= 300) {
        // Last tap was no longer than 300ms ago => recognized as double tap
        this._onItemDoubleClick();
      }
      this._lastTapAt = (0, _globals.now)();
    }
  };

  // -------------------------------------------------------------------------- ROTATION DRAGGING

  /**
   * Gets called when the user starts dragging the resize knob
   * @param  {Vector2} position
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onRotationKnobDragStart = function _onRotationKnobDragStart(position, e) {
    this._dragging = true;
    this._initialPosition = this._getRotationKnobPosition();

    this.props.onDragStart && this.props.onDragStart();
  };

  /**
   * Gets called while the user rotates the text
   * @param  {Vector2} offset
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onRotationKnobDrag = function _onRotationKnobDrag(offset, e) {
    var sprite = this.props.sprite;
    var editor = this.context.editor;


    var spritePosition = this._getAbsoluteSpritePosition();
    var newKnobPosition = this._initialPosition.clone().add(offset);

    // Calculate new rotation and scale from new knob position
    var knobDistanceFromCenter = newKnobPosition.clone().subtract(spritePosition);

    var boundingBox = sprite.getBoundingBox(editor.getSDK(), editor.getOutputDimensions());
    var radians = Math.atan2(knobDistanceFromCenter.y, knobDistanceFromCenter.x) - Math.atan2(boundingBox.y, boundingBox.x / 2);

    sprite.setRotation(radians);
  };

  /**
   * Gets called when the user stops rotating the text
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onRotationKnobDragStop = function _onRotationKnobDragStop(e) {
    this.props.onDragStop && this.props.onDragStop();
  };

  // -------------------------------------------------------------------------- RESIZE DRAGGING

  /**
   * Gets called when the user starts resizing the text
   * @param  {Vector2} position
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onResizeKnobDragStart = function _onResizeKnobDragStart(position, e) {
    this._initialPosition = this._getResizeKnobPosition();

    this.props.onDragStart && this.props.onDragStart();
  };

  /**
   * Gets called while the user resizes the text
   * @param  {Vector2} offset
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onResizeKnobDrag = function _onResizeKnobDrag(offset, e) {
    var sprite = this.props.sprite;

    var textRotation = sprite.getRotation();

    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var cos = Math.cos(textRotation);
    var sin = Math.sin(textRotation);

    var newKnobPosition = this._initialPosition.clone().add(offset);
    var position = this._getAbsoluteSpritePosition();
    var distanceToPosition = newKnobPosition.clone().subtract(position);

    var newMaxWidth = Math.max((distanceToPosition.x * cos + distanceToPosition.y * sin) / outputDimensions.x * 2, 0.1);
    sprite.setMaxWidth(newMaxWidth);
  };

  /**
   * Gets called when the user stops resizing the text
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onResizeKnobDragStop = function _onResizeKnobDragStop(e) {
    this.props.onDragStop && this.props.onDragStop();
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the style object for the rotation knob
   * @return {Object}
   * @private
   */


  TextItemComponent.prototype._getRotationKnobStyle = function _getRotationKnobStyle() {
    var position = this._getRotationKnobPosition();
    return {
      left: position.x,
      top: position.y
    };
  };

  /**
   * Returns the style object for the resize knob
   * @return {Object}
   * @private
   */


  TextItemComponent.prototype._getResizeKnobStyle = function _getResizeKnobStyle() {
    var position = this._getResizeKnobPosition();
    return {
      left: position.x,
      top: position.y
    };
  };

  /**
   * Returns the style object for the given text object
   * @return {Object}
   * @private
   */


  TextItemComponent.prototype._getTextStyle = function _getTextStyle() {
    var editor = this.context.editor;
    var sprite = this.props.sprite;

    var sdk = editor.getSDK();
    var outputDimensions = editor.getOutputDimensions();
    var style = sprite.getDOMStyle(sdk, outputDimensions);

    var spritePosition = this._getAbsoluteSpritePosition();
    var boundingBox = sprite.getBoundingBox(sdk, outputDimensions);
    style.height = Math.min(boundingBox.y, outputDimensions.y - spritePosition.y);

    return style;
  };

  /**
   * Returns the style object for the item container
   * @return {Object}
   * @private
   */


  TextItemComponent.prototype._getItemContainerStyle = function _getItemContainerStyle() {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var sprite = this.props.sprite;

    var textPosition = sprite.getPosition().clone().multiply(outputDimensions);

    var degrees = sprite.getRotation() * 180 / Math.PI;
    var transform = 'rotateZ(' + degrees.toFixed(2) + 'deg)';
    var transformOrigin = '50% 0';

    var maxWidth = sprite.getMaxWidth() * outputDimensions.x;
    return {
      width: maxWidth,
      left: textPosition.x,
      top: textPosition.y,
      marginLeft: maxWidth * -0.5,
      transform: transform,
      MozTransform: transform,
      msTransform: transform,
      WebkitTransform: transform,
      transformOrigin: transformOrigin,
      MozTransformOrigin: transformOrigin,
      msTransformOrigin: transformOrigin,
      WebkitTransformOrigin: transformOrigin
    };
  };

  // -------------------------------------------------------------------------- CALCULATIONS

  /**
   * Returns the position of the rotation knob
   * @return {Vector2}
   * @private
   */


  TextItemComponent.prototype._getRotationKnobPosition = function _getRotationKnobPosition() {
    var sprite = this.props.sprite;
    var editor = this.context.editor;


    var sin = Math.sin(sprite.getRotation());
    var cos = Math.cos(sprite.getRotation());

    var outputDimensions = editor.getOutputDimensions();
    var boundingBox = sprite.getBoundingBox(editor.getSDK(), outputDimensions);
    var halfDimensions = boundingBox.clone().divide(2);
    var position = sprite.getPosition().clone().multiply(outputDimensions).add(halfDimensions.x * cos - boundingBox.y * sin, halfDimensions.x * sin + boundingBox.y * cos);
    return position;
  };

  /**
   * Returns the position of the resize knob
   * @return {Vector2}
   * @private
   */


  TextItemComponent.prototype._getResizeKnobPosition = function _getResizeKnobPosition() {
    var sprite = this.props.sprite;
    var editor = this.context.editor;


    var sin = Math.sin(sprite.getRotation());
    var cos = Math.cos(sprite.getRotation());

    var outputDimensions = editor.getOutputDimensions();
    var boundingBox = sprite.getBoundingBox(editor.getSDK(), outputDimensions);
    var halfDimensions = boundingBox.clone().divide(2);
    var position = sprite.getPosition().clone().multiply(outputDimensions).add(halfDimensions.x * cos, halfDimensions.x * sin);
    return position;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the knobs for this item
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  TextItemComponent.prototype._renderKnobs = function _renderKnobs() {
    var knobs = [];
    if (this.props.selected && !this.state.editMode) {
      knobs = [_globals.ReactBEM.createElement(
        _draggableComponent2.default,
        {
          onStart: this._onRotationKnobDragStart,
          onDrag: this._onRotationKnobDrag,
          onStop: this._onRotationKnobDragStop },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:knob m:rotate $b:knob', style: this._getRotationKnobStyle() },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon m:larger', src: this._getAssetPath('controls/knobs/rotate.png', true) })
        )
      ), _globals.ReactBEM.createElement(
        _draggableComponent2.default,
        {
          onStart: this._onResizeKnobDragStart,
          onDrag: this._onResizeKnobDrag,
          onStop: this._onResizeKnobDragStop },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:knob m:resize $b:knob', style: this._getResizeKnobStyle() },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/knobs/resize-diagonal-up.png', true) })
        )
      )];
    }
    return knobs;
  };

  /**
   * Renders the draggable item
   * @return {ReactBEM.Element}
   * @private
   */


  TextItemComponent.prototype._renderItem = function _renderItem() {
    var sprite = this.props.sprite;


    var content = [];
    content = [_globals.ReactBEM.createElement('textarea', {
      bem: 'e:content',
      ref: 'textarea',
      style: this._getTextStyle(),
      defaultValue: sprite.getText(),
      disabled: !this.state.editMode,
      onChange: this._onTextChange })];

    if (!this.state.editMode) {
      content.push(_globals.ReactBEM.createElement('div', {
        bem: 'e:disabledOverlay',
        onDoubleClick: this._onItemDoubleClick,
        onTouchStart: this._onItemTouchStart,
        onTouchEnd: this._onItemTouchEnd }));
    }

    return _globals.ReactBEM.createElement(
      _draggableComponent2.default,
      {
        onStart: this._onItemDragStart,
        onStop: this._onItemDragStop,
        onDrag: this._onItemDrag,
        disabled: !this.props.selected || this.props.selected && this.state.editMode },
      _globals.ReactBEM.createElement(
        'div',
        {
          bem: '$e:text',
          style: this._getItemContainerStyle(),
          className: this.props.selected ? 'is-selected' : null },
        content
      )
    );
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  TextItemComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:spritesCanvasControls' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:item e:container' },
        this._renderItem(),
        this._renderKnobs()
      )
    );
  };

  return TextItemComponent;
}(_itemComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = TextItemComponent;


TextItemComponent.contextTypes = _itemComponent2.default.contextTypes;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _stickerControlsComponent = __webpack_require__(142);

var _stickerControlsComponent2 = _interopRequireDefault(_stickerControlsComponent);

var _stickerCanvasControlsComponent = __webpack_require__(141);

var _stickerCanvasControlsComponent2 = _interopRequireDefault(_stickerCanvasControlsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sticker = _globals.SDK.Operations.SpriteOperation.Sticker; /*
                                                                * This file is part of PhotoEditorSDK.
                                                                *
                                                                * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                                                                * All rights reserved.
                                                                *
                                                                * Redistribution and use in source and binary forms, without
                                                                * modification, are permitted provided that the following license agreement
                                                                * is approved and a legal/financial contract was signed by the user.
                                                                * The license agreement can be found under following link:
                                                                *
                                                                * https://www.photoeditorsdk.com/LICENSE.txt
                                                                */

/**
 * The sticker controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
var StickerControls = function (_Controls) {
  (0, _inherits3.default)(StickerControls, _Controls);

  function StickerControls() {
    (0, _classCallCheck3.default)(this, StickerControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user leaves these controls
   * @this {StickerControlsComponent}
   * @override
   * @ignore
   */
  StickerControls.onExit = function onExit() {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    editor.history.add(operation, this.getSharedState('initialOptions'), this.getSharedState('operationExistedBefore'));

    operation.setEnabled(true);

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Gets called when the user enters these controls
   * @this {StickerControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */


  StickerControls.onEnter = function onEnter(sharedState) {
    var editor = this.context.editor;

    var operationExistedBefore = editor.operations.exists('sprite');
    var operation = editor.operations.getOrCreate('sprite');
    var sprites = operation.getSprites();
    var stickers = operation.getSpritesOfType(Sticker);
    var initialOptions = operation.serializeOptions();

    operation.setEnabled(false);
    editor.zoom.set('auto');

    this.setSharedState({
      operationExistedBefore: operationExistedBefore, operation: operation, sprites: sprites, stickers: stickers, initialOptions: initialOptions
    });
  };

  /**
   * Checks if there is something at the given position that
   * would cause the UI to switch to this control on click
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {*}
   * @override
   * @ignore
   */


  StickerControls.clickAtPosition = function clickAtPosition(position, editor) {
    if (!editor.operations.exists('sprite')) return false;

    var operation = editor.operations.getOrCreate('sprite');
    var sprites = operation.getSpritesAtPosition(position, editor.getOutputTextureDimensions()).filter(function (s) {
      return s instanceof Sticker;
    });

    if (sprites.length) {
      return { selectedSprite: sprites[0] };
    } else {
      return false;
    }
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @override
   * @ignore
   */


  StickerControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('sticker');
  };

  return StickerControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


StickerControls.controlsComponent = _stickerControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
StickerControls.canvasControlsComponent = _stickerCanvasControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
StickerControls.identifier = 'sticker';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
StickerControls.iconPath = 'controls/overview/sticker.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
StickerControls.languageKey = 'controls.overview.sticker';

/**
 * The default options for this control
 * @type {Object}
 * @property {Object[]} [categories = []]
 * @property {Boolean} [replaceCategories = false]
 * @property {String[]} [selectableStickers = null]
 * @property {Boolean} [tooltips = false]
 */
StickerControls.defaultOptions = {
  categories: [],
  replaceCategories: false,
  selectableStickers: null,
  tooltips: false,
  hideCategories: false,
  fixedRatio: true,
  smoothDownscaling: false
};

exports.default = StickerControls;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _spritesCanvasControlsComponent = __webpack_require__(30);

var _spritesCanvasControlsComponent2 = _interopRequireDefault(_spritesCanvasControlsComponent);

var _stickerControlsOverlayComponent = __webpack_require__(143);

var _stickerControlsOverlayComponent2 = _interopRequireDefault(_stickerControlsOverlayComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickerCanvasControlsComponent = function (_SpritesCanvasControl) {
  (0, _inherits3.default)(StickerCanvasControlsComponent, _SpritesCanvasControl);

  function StickerCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, StickerCanvasControlsComponent);
    return (0, _possibleConstructorReturn3.default)(this, _SpritesCanvasControl.apply(this, arguments));
  }

  /**
   * This renders controls on top of the sprites
   * @return {ReactBEM.Element}
   * @private
   */
  StickerCanvasControlsComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    if (!this.getSharedState('selectedSprite')) return;

    return _globals.ReactBEM.createElement(_stickerControlsOverlayComponent2.default, {
      onFlip: this._onSpriteFlip,
      onTakeToFront: this._onSpriteTakeToFront,
      onRemove: this._onSpriteRemove });
  };

  return StickerCanvasControlsComponent;
}(_spritesCanvasControlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


exports.default = StickerCanvasControlsComponent;


StickerCanvasControlsComponent.contextTypes = _spritesCanvasControlsComponent2.default.contextTypes;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _categoryDropdownComponent = __webpack_require__(62);

var _categoryDropdownComponent2 = _interopRequireDefault(_categoryDropdownComponent);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

var _stickerManager = __webpack_require__(70);

var _stickerManager2 = _interopRequireDefault(_stickerManager);

var _stickerItemComponent = __webpack_require__(144);

var _stickerItemComponent2 = _interopRequireDefault(_stickerItemComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickerOverviewControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(StickerOverviewControlsComponent, _ControlsComponent);

  function StickerOverviewControlsComponent() {
    (0, _classCallCheck3.default)(this, StickerOverviewControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onStickerMouseLeave', '_renderTooltipCanvas', '_onCategoryChange');

    _this._operation = _this.getSharedState('operation');
    _this._sprites = _this.getSharedState('sprites');
    _this._stickers = _this.getSharedState('stickers');

    _this._initStickerManager();

    _this.state = {
      category: 'all'
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user switches the category
   * @param  {Object} category
   * @private
   */


  StickerOverviewControlsComponent.prototype._onCategoryChange = function _onCategoryChange(category) {
    var _this2 = this;

    this.setState({ category: category.name }, function () {
      _this2.refs.scrollbar.update();
    });
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component is mounted
   */


  StickerOverviewControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _ControlsComponent.prototype.componentDidMount.call(this);

    if (this.props.options.stickersJSONPath) {
      this._loadExternalStickers();
    }

    var editor = this.context.editor;

    editor.zoom.set('auto', function () {
      editor.features.disable('zoom', 'drag');
    });
  };

  // -------------------------------------------------------------------------- EXTERNAL STICKER LOADING

  /**
   * Loads the stickers from an external JSON source
   * @private
   */


  StickerOverviewControlsComponent.prototype._loadExternalStickers = function _loadExternalStickers() {
    var _this3 = this;

    // Display loading modal after 100ms
    var loadingModal = null;
    var loadTimeout = setTimeout(function () {
      loadingModal = _modalManager2.default.instance.displayLoading(_this3._t('loading.loading'));
    }, 100);

    // Called when loading is done. Cancels the loading timeout
    // or closes the loadingModal in case it has been opened
    var doneLoading = function doneLoading() {
      if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
      }
      if (loadingModal) loadingModal.close();
    };

    // Make sure not to show any stickers
    this._availableStickers = [];
    this.forceUpdate();

    var url = this.props.options.stickersJSONPath;
    _globals.Utils.getJSONP(url).then(function (result) {
      doneLoading();

      if (result.version === '1.0') {
        // Backwards compatibility for stickers.json version 1.0
        _this3._initStickers([{
          name: 'all',
          label: 'All',
          stickers: result.stickers
        }]);
      } else if (result.version === '1.1') {
        _this3._initStickers(result.categories);
      }

      _this3.forceUpdate(function () {
        _this3.refs.scrollbar.update();
      });
    }).catch(function (e) {
      doneLoading();

      var errorModal = _modalManager2.default.instance.displayError(_this3._t('errors.loadingStickersFailed.title'), e.message);
      errorModal.on('close', function () {
        _this3.props.onBack();
      });
    });
  };

  // -------------------------------------------------------------------------- STICKER RENDERING

  /**
   * Renders the sticker on the tooltip canvas
   * @private
   */


  StickerOverviewControlsComponent.prototype._renderTooltipCanvas = function _renderTooltipCanvas() {
    var _this4 = this;

    var hoveredSticker = this.state.hoveredSticker;

    var image = new window.Image();
    image.addEventListener('load', function () {
      if (!_this4.state.tooltipVisible || _this4.state.hoveredSticker !== hoveredSticker) {
        return;
      }

      var canvas = _this4.refs.tooltipCanvas;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      var context = canvas.getContext('2d');
      var scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      var drawSize = new _globals.Vector2(image.width, image.height).multiply(scale);
      var drawPosition = new _globals.Vector2(canvas.width, canvas.height).divide(2).subtract(drawSize.clone().divide(2));

      context.drawImage(image, 0, 0, image.width, image.height, drawPosition.x, drawPosition.y, drawSize.x, drawSize.y);
    });

    var resolvedStickerPath = this._getAssetPath((hoveredSticker.images.mediaMedium || hoveredSticker.images.mediaBase).uri);
    image.src = resolvedStickerPath;
  };

  // -------------------------------------------------------------------------- STICKERS

  /**
   * Initializes the sticker manager
   * @private
   */


  StickerOverviewControlsComponent.prototype._initStickerManager = function _initStickerManager() {
    this._stickerManager = new _stickerManager2.default(this.props.options);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  StickerOverviewControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    this._backButtonClicked = true;
    this.props.onSwitchControls('home');
  };

  /**
   * Gets called when a sticker has been clicked
   * @param  {Object} sticker
   * @private
   */


  StickerOverviewControlsComponent.prototype._onStickerClick = function _onStickerClick(sticker) {
    var _this5 = this;

    var resolvedStickerPath = this._getAssetPath(sticker.images.mediaBase.uri);
    var image = new window.Image();

    var loadingModal = void 0;
    var loadTimeout = setTimeout(function () {
      loadingModal = _modalManager2.default.instance.displayLoading(_this5._t('loading.loading'));
    }, 100);

    image.addEventListener('load', function () {
      if (loadingModal) loadingModal.close();
      if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
      }

      var editor = _this5.context.editor;


      var scale = _this5._calculateInitialStickerScale(sticker, image);
      var sprite = _this5._operation.createSticker({
        name: sticker.name,
        image: image,
        position: new _globals.Vector2(0.5, 0.5),
        dimensions: new _globals.Vector2(image.width, image.height).multiply(scale),
        rotation: 0,
        smoothDownscaling: _this5.props.options.smoothDownscaling
      });
      _this5._operation.addSprite(sprite);
      _this5._stickers.push(sprite);

      editor.render(function () {
        // Broadcast new state
        _this5.setSharedState({
          selectedSprite: sprite,
          sprites: _this5._sprites,
          stickers: _this5._stickers
        });
      });
    });

    image.addEventListener('error', function () {
      if (loadingModal) loadingModal.close();
      if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
      }

      _modalManager2.default.instance.displayError(_this5._t('errors.imageLoadFail.title'), _this5._t('errors.imageLoadFail.text', { path: image.src }));
    });

    image.crossOrigin = 'Anonymous';
    image.src = resolvedStickerPath;
  };

  /**
   * Calculates the initial sticker scale
   * @param  {Object} sticker
   * @param  {Image} image
   * @return {Number}
   * @private
   */


  StickerOverviewControlsComponent.prototype._calculateInitialStickerScale = function _calculateInitialStickerScale(sticker, image) {
    var operation = this.getSharedState('operation');
    var inputDimensions = operation.getInputDimensions().multiply(0.9);
    var imageDimensions = new _globals.Vector2(image.width, image.height);

    var overlap = imageDimensions.clone().subtract(inputDimensions);

    if (overlap.x <= 0 && overlap.y <= 0) return 1;

    if (overlap.x > overlap.y) {
      return inputDimensions.x / imageDimensions.x;
    } else {
      return inputDimensions.y / imageDimensions.y;
    }
  };

  /**
   * Gets called when the user starts hovering a sticker
   * @param  {String} stickerPath
   * @param  {Event} e
   * @private
   */


  StickerOverviewControlsComponent.prototype._onStickerMouseEnter = function _onStickerMouseEnter(stickerPath, e) {
    var _this6 = this;

    this.setState({
      tooltipVisible: true,
      hoveredSticker: stickerPath,
      hoveredStickerElement: e.currentTarget
    }, function () {
      _this6._renderTooltipCanvas();
      _this6._updateTooltipPosition();
    });
  };

  /**
   * Updates the tooltip position to match the currently hovered
   * sticker's position
   * @private
   */


  StickerOverviewControlsComponent.prototype._updateTooltipPosition = function _updateTooltipPosition() {
    var el = this.state.hoveredStickerElement;
    var parent = this.refs.root;
    var boundingRect = el.getBoundingClientRect();
    var parentBoundingRect = parent.getBoundingClientRect();

    this.setState({
      tooltipPosition: boundingRect.left - parentBoundingRect.left
    });
  };

  /**
   * Gets called when the user does no longer hover a sticker
   * @private
   */


  StickerOverviewControlsComponent.prototype._onStickerMouseLeave = function _onStickerMouseLeave() {
    this.setState({
      tooltipVisible: false,
      hoveredSticker: null
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items for this control
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  StickerOverviewControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this7 = this;

    var stickers = this._stickerManager.getStickersForCategory(this.state.category);
    return stickers.map(function (sticker, i) {
      var options = _this7.props.options;


      var itemEvents = options.tooltips ? {
        onMouseEnter: _this7._onStickerMouseEnter.bind(_this7, sticker),
        onMouseLeave: _this7._onStickerMouseLeave
      } : null;

      return _globals.ReactBEM.createElement(_stickerItemComponent2.default, (0, _extends3.default)({
        sticker: sticker,
        onClick: _this7._onStickerClick.bind(_this7, sticker)
      }, itemEvents));
    });
  };

  /**
   * Renders the tooltip (if present)
   * @return {ReactBEM.Element}
   * @private
   */


  StickerOverviewControlsComponent.prototype._renderTooltip = function _renderTooltip() {
    var tooltipVisible = this.props.options.tooltips && this.state.tooltipVisible;

    var style = {
      left: this.state.tooltipPosition
    };

    return tooltipVisible ? _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:empty' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:stickersControls $e:tooltip',
          style: style },
        _globals.ReactBEM.createElement('canvas', { bem: 'e:canvas', ref: 'tooltipCanvas' })
      )
    ) : null;
  };

  /**
   * Renders the category dropdown (if present)
   * @return {ReactBEM.Element}
   * @private
   */


  StickerOverviewControlsComponent.prototype._renderCategoryDropdown = function _renderCategoryDropdown() {
    var _this8 = this;

    var categories = this._stickerManager.getCategories();
    var categoryDropdownVisible = !this.props.options.hideCategories && categories.length > 1;
    if (!categoryDropdownVisible) {
      return null;
    }

    var categoryItems = categories.map(function (c) {
      return {
        name: c.name,
        label: _this8._t('controls.sticker.categories.' + c.name),
        icon: _this8._getAssetPath('controls/stickers/categories/' + c.name + '.png', true)
      };
    });
    var selectedCategory = {
      name: this.state.category,
      label: this._t('controls.sticker.categories.' + this.state.category),
      icon: this._getAssetPath('controls/stickers/categories/' + this.state.category + '.png', true)
    };

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:categoryDropdown' },
      _globals.ReactBEM.createElement(_categoryDropdownComponent2.default, {
        items: categoryItems,
        selectedItem: selectedCategory,
        onChange: this._onCategoryChange })
    );
  };

  /**
   * Renders the controls of this component
   * @return {ReactBEM.Element}
   */


  StickerOverviewControlsComponent.prototype.renderControls = function renderControls() {
    var listItems = this._renderListItems();
    var tooltip = this._renderTooltip();
    var categoryDropdown = this._renderCategoryDropdown();

    return [tooltip, categoryDropdown, _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:list' },
      _globals.ReactBEM.createElement(
        _scrollbarComponent2.default,
        { ref: 'scrollbar' },
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:list' },
          listItems
        )
      )
    )];
  };

  return StickerOverviewControlsComponent;
}(_controlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = StickerOverviewControlsComponent;


StickerOverviewControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickerControlsOverlayComponent = function (_BaseComponent) {
  (0, _inherits3.default)(StickerControlsOverlayComponent, _BaseComponent);

  function StickerControlsOverlayComponent() {
    (0, _classCallCheck3.default)(this, StickerControlsOverlayComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks one of the flip items
   * @param  {String} direction
   * @param  {Event} e
   * @private
   */
  StickerControlsOverlayComponent.prototype._onFlipClick = function _onFlipClick(direction, e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onFlip && this.props.onFlip(direction);
  };

  /**
   * Gets called when the user clicks the `take to front` item
   * @param  {Event} e
   * @private
   */


  StickerControlsOverlayComponent.prototype._onTakeToFrontClick = function _onTakeToFrontClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onTakeToFront && this.props.onTakeToFront();
  };

  /**
   * Gets called when the user clicks the `remove` item
   * @param  {Event} e
   * @private
   */


  StickerControlsOverlayComponent.prototype._onRemoveClick = function _onRemoveClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onRemove && this.props.onRemove();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the items of this component
   * @return {Array.<ReactBEM.Element>}
   */


  StickerControlsOverlayComponent.prototype._renderItems = function _renderItems() {
    return [_globals.ReactBEM.createElement(
      'div',
      { bem: '$e:item', onClick: this._onFlipClick.bind(this, 'h') },
      _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/flip-h.png', true) })
    ), _globals.ReactBEM.createElement(
      'div',
      { bem: '$e:item', onClick: this._onFlipClick.bind(this, 'v') },
      _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/flip-v.png', true) })
    ), _globals.ReactBEM.createElement(
      'div',
      { bem: '$e:item', onClick: this._onTakeToFrontClick.bind(this) },
      _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/take-to-front.png', true) })
    ), _globals.ReactBEM.createElement('div', { bem: '$e:separator' }), _globals.ReactBEM.createElement(
      'div',
      { bem: '$e:item', onClick: this._onRemoveClick.bind(this) },
      _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/remove.png', true) })
    )];
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  StickerControlsOverlayComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      {
        bem: '$b:spritesControlsOverlay' },
      this._renderItems()
    );
  };

  return StickerControlsOverlayComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = StickerControlsOverlayComponent;


StickerControlsOverlayComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickerOverviewControlsComponent = function (_BaseComponent) {
  (0, _inherits3.default)(StickerOverviewControlsComponent, _BaseComponent);

  function StickerOverviewControlsComponent() {
    (0, _classCallCheck3.default)(this, StickerOverviewControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this.state = {
      sticker: _this.props.sticker
    };
    return _this;
  }

  /**
   * Gets called when this component has been mounted
   */


  StickerOverviewControlsComponent.prototype.componentDidMount = function componentDidMount() {
    this._renderSticker();
  };

  /**
   * Gets called when this component is about to receive new properties
   * @param  {Object} nextProps
   */


  StickerOverviewControlsComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (this.props.sticker !== nextProps.sticker) {
      this.setState({ sticker: nextProps.sticker }, function () {
        _this2._renderSticker();
      });
    }
  };

  /**
   * Renders the sticker onto the canvas
   * @private
   */


  StickerOverviewControlsComponent.prototype._renderSticker = function _renderSticker() {
    var editor = this.context.editor;

    var sdk = editor.getSDK();

    var sticker = this.props.sticker;


    var resolvedStickerPath = this._getAssetPath(sticker.images.mediaThumb.uri);
    var canvas = this.refs['canvas-' + sticker.name];

    var pixelRatio = sdk.getPixelRatio();
    canvas.width = canvas.offsetWidth * pixelRatio;
    canvas.height = canvas.offsetHeight * pixelRatio;

    canvas.style.width = canvas.offsetWidth + 'px';
    canvas.style.height = canvas.offsetHeight + 'px';

    var context = canvas.getContext('2d');

    var image = new window.Image();
    image.addEventListener('load', function () {
      var scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      var drawSize = new _globals.Vector2(image.width, image.height).multiply(scale);
      var drawPosition = new _globals.Vector2(canvas.width, canvas.height).divide(2).subtract(drawSize.clone().divide(2));

      context.drawImage(image, 0, 0, image.width, image.height, drawPosition.x, drawPosition.y, drawSize.x, drawSize.y);
    });
    image.src = resolvedStickerPath;
  };

  /**
   * Renders this element
   * @return {ReactBEM.element}
   */


  StickerOverviewControlsComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'li',
      {
        bem: '$b:stickersControls $e:item',
        key: this.props.sticker.name,
        onClick: this.props.onClick,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave },
      _globals.ReactBEM.createElement('canvas', { bem: 'e:canvas', ref: 'canvas-' + this.props.sticker.name })
    );
  };

  return StickerOverviewControlsComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = StickerOverviewControlsComponent;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _fontPreviewComponent = __webpack_require__(64);

var _fontPreviewComponent2 = _interopRequireDefault(_fontPreviewComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var FontComponent = function (_BaseComponent) {
  (0, _inherits3.default)(FontComponent, _BaseComponent);

  function FontComponent() {
    (0, _classCallCheck3.default)(this, FontComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks one one of the list items
   * @param  {Object} font
   * @param  {Event} e
   * @private
   */
  FontComponent.prototype._onListItemClick = function _onListItemClick(font, e) {
    this.props.onChange && this.props.onChange(font);
  };

  // -------------------------------------------------------------------------- LIST ITEMS

  /**
   * Renders the list items
   * @return {Array.<ReactBEM.Element>}
   * @private
   */


  FontComponent.prototype._renderListItems = function _renderListItems() {
    var _this2 = this;

    var fonts = this.props.fonts;


    return fonts.map(function (font, i) {
      var _props = _this2.props,
          fontFamily = _props.fontFamily,
          fontWeight = _props.fontWeight,
          fontStyle = _props.fontStyle;

      var isSelected = font.optionsEqual({ fontFamily: fontFamily, fontWeight: fontWeight, fontStyle: fontStyle });
      var className = isSelected ? 'is-active' : null;

      return _globals.ReactBEM.createElement(
        'li',
        {
          bem: 'e:item',
          key: i,
          className: className,
          onClick: _this2._onListItemClick.bind(_this2, font) },
        _globals.ReactBEM.createElement(_fontPreviewComponent2.default, {
          fontFamily: font.getFontFamily(),
          fontWeight: font.getFontWeight(),
          fontStyle: font.getFontStyle() }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label' },
          font.getFontFamily()
        )
      );
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  FontComponent.prototype.renderWithBEM = function renderWithBEM() {
    var listItems = this._renderListItems();

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:controls e:overlay m:dark' },
      _globals.ReactBEM.createElement(
        'ul',
        { bem: '$b:fontFamily e:list' },
        listItems
      )
    );
  };

  return FontComponent;
}(_globals.BaseComponent);

exports.default = FontComponent;


FontComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _textCanvasControlsComponent = __webpack_require__(147);

var _textCanvasControlsComponent2 = _interopRequireDefault(_textCanvasControlsComponent);

var _textControlsComponent = __webpack_require__(148);

var _textControlsComponent2 = _interopRequireDefault(_textControlsComponent);

var _fontManager = __webpack_require__(190);

var _fontManager2 = _interopRequireDefault(_fontManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = _globals.SDK.Operations.SpriteOperation.Text; /*
                                                          * This file is part of PhotoEditorSDK.
                                                          *
                                                          * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                                                          * All rights reserved.
                                                          *
                                                          * Redistribution and use in source and binary forms, without
                                                          * modification, are permitted provided that the following license agreement
                                                          * is approved and a legal/financial contract was signed by the user.
                                                          * The license agreement can be found under following link:
                                                          *
                                                          * https://www.photoeditorsdk.com/LICENSE.txt
                                                          */

/**
 * The text controls
 * @class
 * @extends PhotoEditorSDK.UI.ReactUI.Control
 * @memberof PhotoEditorSDK.UI.ReactUI.Controls
 */
var TextControls = function (_Controls) {
  (0, _inherits3.default)(TextControls, _Controls);

  function TextControls() {
    (0, _classCallCheck3.default)(this, TextControls);
    return (0, _possibleConstructorReturn3.default)(this, _Controls.apply(this, arguments));
  }

  /**
   * Gets called when the user leaves these controls
   * @this {StickersControlsComponent}
   * @ignore
   */
  TextControls.onExit = function onExit() {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    editor.history.add(operation, this.getSharedState('initialOptions'), this.getSharedState('operationExistedBefore'));

    operation.setEnabled(true);

    editor.zoom.undo();
    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Gets called when the user enters these controls
   * @this {StickerControlsComponent}
   * @param {SharedState} sharedState
   * @override
   * @ignore
   */


  TextControls.onEnter = function onEnter(sharedState, options) {
    var editor = this.context.editor;

    var operationExistedBefore = editor.operations.exists('sprite');
    var operation = editor.operations.getOrCreate('sprite');
    var sprites = operation.getSprites();
    var initialOptions = operation.serializeOptions();

    var fontManager = new _fontManager2.default(options);
    var defaultFont = fontManager.getDefaultFont();

    this.setSharedState({
      operationExistedBefore: operationExistedBefore,
      operation: operation,
      sprites: sprites,
      initialOptions: initialOptions,
      fontManager: fontManager,
      defaultFont: defaultFont,
      fonts: fontManager.getFonts()
    });

    operation.setEnabled(false);
    editor.render();
  };

  /**
   * Checks if there is something at the given position that
   * would cause the UI to switch to this control on click
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {*}
   * @ignore
   */


  TextControls.clickAtPosition = function clickAtPosition(position, editor) {
    if (!editor.operations.exists('sprite')) return false;

    var operation = editor.operations.getOrCreate('sprite');
    var sprites = operation.getSpritesAtPosition(position, editor.getOutputTextureDimensions()).filter(function (s) {
      return s instanceof Text;
    });

    if (sprites.length) {
      return { selectedSprite: sprites[0] };
    } else {
      return false;
    }
  };

  /**
   * Checks if this control is available to the user
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {Boolean}
   * @ignore
   */


  TextControls.isAvailable = function isAvailable(editor) {
    return editor.isToolEnabled('text');
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.ReactUI.Editor} editor
   * @return {String[]}
   */


  TextControls.getPreloadAssets = function getPreloadAssets(editor) {
    return ['controls/text/align_left.png', 'controls/text/align_right.png', 'controls/text/align_center.png', 'controls/text/minus.png', 'controls/text/plus.png'];
  };

  return TextControls;
}(_controls2.default);

/**
 * This control's controls component. Used for the lower controls part of the editor.
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */


TextControls.controlsComponent = _textControlsComponent2.default;

/**
 * This control's canvas component. Used for the upper controls part of the editor (on
 * top of the canvas)
 * @type {PhotoEditorSDK.UI.ReactUI.ControlsComponent}
 * @ignore
 */
TextControls.canvasControlsComponent = _textCanvasControlsComponent2.default;

/**
 * This control's identifier
 * @type {String}
 * @default
 */
TextControls.identifier = 'text';

/**
 * This control's icon path
 * @type {String}
 * @ignore
 */
TextControls.iconPath = 'controls/overview/text.png';

/**
 * The language key that should be used when displaying this filter
 * @type {String}
 * @ignore
 */
TextControls.languageKey = 'controls.overview.text';

/**
 * The default options for this control
 * @type {Object}
 * @property {Object[]} [additionalFonts = []]
 * @property {Boolean} [replaceFonts = false]
 * @property {String[]} [selectableFonts = null]
 */
TextControls.defaultOptions = {
  additionalFonts: [],
  replaceFonts: false,
  selectableFonts: null,
  defaultText: null
};

exports.default = TextControls;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _spritesCanvasControlsComponent = __webpack_require__(30);

var _spritesCanvasControlsComponent2 = _interopRequireDefault(_spritesCanvasControlsComponent);

var _textControlsOverlayComponent = __webpack_require__(149);

var _textControlsOverlayComponent2 = _interopRequireDefault(_textControlsOverlayComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextCanvasControlsComponent = function (_SpritesCanvasControl) {
  (0, _inherits3.default)(TextCanvasControlsComponent, _SpritesCanvasControl);

  function TextCanvasControlsComponent() {
    (0, _classCallCheck3.default)(this, TextCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _SpritesCanvasControl.call.apply(_SpritesCanvasControl, [this].concat(args)));

    _this._bindAll('_onTextEdit');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the selected item is deselected
   * @private
   */


  TextCanvasControlsComponent.prototype._onItemBlur = function _onItemBlur() {
    var sprite = this.getSharedState('selectedSprite');
    if (sprite && sprite.getText() === '') {
      sprite.setText(_globals.Constants.DEFAULTS.TEXT);
      sprite._edited = false;
    }
  };

  /**
   * Gets called when the user removes the selected sprite
   * @private
   */


  TextCanvasControlsComponent.prototype._onSpriteRemove = function _onSpriteRemove() {
    _SpritesCanvasControl.prototype._onSpriteRemove.call(this);
    this.props.onSwitchControls('home');
  };

  /**
   * Gets called when the clicks the edit button
   * @private
   */


  TextCanvasControlsComponent.prototype._onTextEdit = function _onTextEdit() {
    var sprite = this.getSharedState('selectedSprite');
    this.refs['sprite-' + sprite.getId()].enterEditMode();
  };

  /**
   * This renders controls on top of the sprites
   * @return {ReactBEM.Element}
   * @private
   */


  TextCanvasControlsComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    if (!this.getSharedState('selectedSprite')) return;

    return _globals.ReactBEM.createElement(_textControlsOverlayComponent2.default, {
      onTakeToFront: this._onSpriteTakeToFront,
      onRemove: this._onSpriteRemove,
      onEdit: this._onTextEdit });
  };

  return TextCanvasControlsComponent;
}(_spritesCanvasControlsComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


exports.default = TextCanvasControlsComponent;


TextCanvasControlsComponent.contextTypes = _spritesCanvasControlsComponent2.default.contextTypes;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _colorPickerComponent = __webpack_require__(37);

var _colorPickerComponent2 = _interopRequireDefault(_colorPickerComponent);

var _sliderOverlayComponent = __webpack_require__(20);

var _sliderOverlayComponent2 = _interopRequireDefault(_sliderOverlayComponent);

var _fontPreviewComponent = __webpack_require__(64);

var _fontPreviewComponent2 = _interopRequireDefault(_fontPreviewComponent);

var _fontComponent = __webpack_require__(145);

var _fontComponent2 = _interopRequireDefault(_fontComponent);

var _fontLoader = __webpack_require__(185);

var _fontLoader2 = _interopRequireDefault(_fontLoader);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var ALIGNMENTS = ['left', 'center', 'right'];

var TextControlsComponent = function (_ControlsComponent) {
  (0, _inherits3.default)(TextControlsComponent, _ControlsComponent);

  function TextControlsComponent() {
    (0, _classCallCheck3.default)(this, TextControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onFontSizeChange', '_onFontChange', '_onAlignmentClick', '_onTakeToFrontClick', '_onForegroundColorChange', '_onBackgroundColorChange');
    _this._operation = _this.getSharedState('operation');
    _this._fontLoader = new _fontLoader2.default(_this.getSharedState('fonts'));

    _this.state = { mode: null, loading: true };

    var editor = _this.context.editor;

    editor.render();

    _this._fonts = _this.getSharedState('fonts');
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  TextControlsComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _ControlsComponent.prototype.componentDidMount.call(this);

    var editor = this.context.editor;

    editor.zoom.set('auto', function () {
      editor.features.disable('zoom', 'drag');
    });

    var fontsLoaded = function fontsLoaded() {
      _this2._createText();
      _this2.setState({ loading: false });
    };

    if (this._fontLoader.needsToLoad()) {
      this._loadFonts().then(fontsLoaded.bind(this));
    } else {
      fontsLoaded();
    }
  };

  /**
   * Loads the fonts
   * @return {Promise}
   * @private
   */


  TextControlsComponent.prototype._loadFonts = function _loadFonts() {
    var loadingModal = _modalManager2.default.instance.displayLoading(this._t('loading.loading'));
    return this._fontLoader.load().then(function () {
      loadingModal.close();
    });
  };

  /**
   * Creates a new text object
   * @private
   */


  TextControlsComponent.prototype._createText = function _createText() {
    var editor = this.context.editor;

    var selectedSprite = this.getSharedState('selectedSprite');
    var operation = this.getSharedState('operation');
    var defaultFont = this.getSharedState('defaultFont');
    var options = this.props.options;


    var outputDimensions = editor.getOutputDimensions();
    if (!selectedSprite) {
      var sdk = editor.getSDK();
      var renderer = sdk.getRenderer();

      var maxTextureSize = renderer.getMaxTextureSize();
      var text = operation.createText({
        text: options.defaultText || _globals.Constants.DEFAULTS.TEXT,
        position: new _globals.Vector2(0.5, 0.5),
        maxWidth: 0.5,
        maxHeight: maxTextureSize ? maxTextureSize / outputDimensions.y : 3,
        fontSize: 0.08,
        fontFamily: defaultFont.getFontFamily(),
        fontWeight: defaultFont.getFontWeight(),
        fontStyle: defaultFont.getFontStyle(),
        alignment: 'center'
      });
      operation.addSprite(text);
      this.setSharedState({ selectedSprite: text });
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the back button
   * @param {Event} e
   * @private
   */


  TextControlsComponent.prototype._onBackClick = function _onBackClick(e) {
    var editor = this.context.editor;

    editor.render();
    this._backButtonClicked = true;
    this.props.onSwitchControls('home');
  };

  /**
   * Gets called when the shared state has changed
   * @param  {Object} newState
   */


  TextControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(newState) {
    if ('selectedSprite' in newState) {
      this.forceUpdate();
    }
  };

  /**
   * Gets called when the font size has been changed
   * @param  {Number} fontSize
   * @private
   */


  TextControlsComponent.prototype._onFontSizeChange = function _onFontSizeChange(fontSize) {
    var outputDimensions = this.context.editor.getOutputDimensions();
    var selectedText = this.getSharedState('selectedSprite');
    selectedText.setFontSize(fontSize / outputDimensions.y);
    this.forceUpdate();
  };

  /**
   * Gets called when the font family or weight has been changed
   * @param  {Object} font
   * @private
   */


  TextControlsComponent.prototype._onFontChange = function _onFontChange(font) {
    var selectedText = this.getSharedState('selectedSprite');
    selectedText.setFontFamily(font.getFontFamily());
    selectedText.setFontWeight(font.getFontWeight());
    selectedText.setFontStyle(font.getFontStyle());
    this.forceUpdate();
  };

  /**
   * Gets called when the user clicks the alignment button
   * @param  {Event} e
   * @private
   */


  TextControlsComponent.prototype._onAlignmentClick = function _onAlignmentClick(e) {
    var selectedText = this.getSharedState('selectedSprite');
    var alignment = selectedText.getAlignment();

    var currentIndex = ALIGNMENTS.indexOf(alignment);
    var nextIndex = (currentIndex + 1) % ALIGNMENTS.length;
    var newAlignment = ALIGNMENTS[nextIndex];

    selectedText.setAlignment(newAlignment);
    this.forceSharedUpdate();
  };

  /**
   * Gets called when the user clicks the "take to front" button
   * @param  {Event} e
   * @private
   */


  TextControlsComponent.prototype._onTakeToFrontClick = function _onTakeToFrontClick(e) {
    var operation = this.getSharedState('operation');
    operation.takeSpriteToFront(this.getSharedState('selectedSprite'));
    this.forceSharedUpdate();
  };

  /**
   * Gets called when the user changes the foreground color
   * @param  {Color} color
   * @private
   */


  TextControlsComponent.prototype._onForegroundColorChange = function _onForegroundColorChange(color) {
    var selectedText = this.getSharedState('selectedSprite');
    selectedText.setColor(color);
  };

  /**
   * Gets called when the user changes the background color
   * @param  {Color} color
   * @private
   */


  TextControlsComponent.prototype._onBackgroundColorChange = function _onBackgroundColorChange(color) {
    var selectedText = this.getSharedState('selectedSprite');
    selectedText.setBackgroundColor(color);
  };

  // -------------------------------------------------------------------------- MODES

  /**
   * Switches to the given mode
   * @param  {String} mode
   * @private
   */


  TextControlsComponent.prototype._switchToMode = function _switchToMode(mode) {
    if (mode === this.state.mode) mode = null;

    this.setState({ mode: mode });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the overlay controls of this component
   * @return {ReactBEM.Element}
   */


  TextControlsComponent.prototype.renderOverlayControls = function renderOverlayControls() {
    switch (this.state.mode) {
      case 'size':
        return this._renderFontSizeOverlayControl();
      case 'font':
        return this._renderFontFamilyOverlayControl();
      default:
        return null;
    }
  };

  // -------------------------------------------------------------------------- FONT SIZE

  /**
   * Renders the font size overlay control (slider)
   * @return {ReactBEM.Element}
   * @private
   */


  TextControlsComponent.prototype._renderFontSizeOverlayControl = function _renderFontSizeOverlayControl() {
    var selectedText = this.getSharedState('selectedSprite');
    if (!selectedText) return;

    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var maxFontSize = Math.round(outputDimensions.y);
    var fontSize = Math.round(selectedText.getFontSize() * outputDimensions.y);
    return _globals.ReactBEM.createElement(_sliderOverlayComponent2.default, {
      value: fontSize,
      maxValue: maxFontSize,
      label: this._t('controls.text.size'),
      onChange: this._onFontSizeChange });
  };

  /**
   * Renders the font size list item
   * @return {Component}
   * @private
   */


  TextControlsComponent.prototype._renderSizeItem = function _renderSizeItem() {
    var selectedText = this.getSharedState('selectedSprite');
    if (!selectedText) return;

    var outputDimensions = this.context.editor.getOutputDimensions();

    var fontSize = selectedText.getFontSize();
    var className = this.state.mode === 'size' ? 'is-active' : null;

    return _globals.ReactBEM.createElement(
      'li',
      {
        bem: 'e:item',
        key: 'size' },
      _globals.ReactBEM.createElement(
        'bem',
        { specifier: '$b:controls' },
        _globals.ReactBEM.createElement(
          'div',
          {
            bem: '$e:button m:withLabel',
            className: className,
            'data-identifier': 'fontSize',
            onClick: this._switchToMode.bind(this, 'size') },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'b:fontSize e:text' },
            Math.round(fontSize * outputDimensions.y)
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:label' },
            this._t('controls.text.size')
          )
        )
      )
    );
  };

  // -------------------------------------------------------------------------- FONT FAMILY

  /**
   * Renders the font family overlay control
   * @return {ReactBEM.Element}
   * @private
   */


  TextControlsComponent.prototype._renderFontFamilyOverlayControl = function _renderFontFamilyOverlayControl() {
    var selectedText = this.getSharedState('selectedSprite');
    if (!selectedText) return;

    return _globals.ReactBEM.createElement(_fontComponent2.default, {
      fontFamily: selectedText.getFontFamily(),
      fontWeight: selectedText.getFontWeight(),
      fontStyle: selectedText.getFontStyle(),
      fonts: this._fonts,
      onChange: this._onFontChange });
  };

  /**
   * Renders the font list item
   * @return {Component}
   * @private
   */


  TextControlsComponent.prototype._renderFontItem = function _renderFontItem() {
    var selectedText = this.getSharedState('selectedSprite');
    if (!selectedText) return;

    var className = this.state.mode === 'font' ? 'is-active' : null;
    return _globals.ReactBEM.createElement(
      'li',
      {
        bem: 'e:item',
        key: 'font' },
      _globals.ReactBEM.createElement(
        'bem',
        { specifier: '$b:controls' },
        _globals.ReactBEM.createElement(
          'div',
          {
            bem: '$e:button m:withLabel',
            className: className,
            'data-identifier': 'font',
            onClick: this._switchToMode.bind(this, 'font') },
          _globals.ReactBEM.createElement(_fontPreviewComponent2.default, {
            fontFamily: selectedText.getFontFamily(),
            fontWeight: selectedText.getFontWeight(),
            fontStyle: selectedText.getFontStyle() }),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:label' },
            this._t('controls.text.font')
          )
        )
      )
    );
  };

  // -------------------------------------------------------------------------- ALIGNMENT

  /**
   * Renders the text alignment list item
   * @return {Component}
   * @private
   */


  TextControlsComponent.prototype._renderAlignmentItem = function _renderAlignmentItem() {
    var selectedText = this.getSharedState('selectedSprite');
    if (!selectedText) return;

    var alignment = selectedText.getAlignment();

    return _globals.ReactBEM.createElement(
      'li',
      {
        bem: 'e:item',
        key: 'alignment' },
      _globals.ReactBEM.createElement(
        'bem',
        { specifier: '$b:controls' },
        _globals.ReactBEM.createElement(
          'div',
          {
            bem: '$e:button m:withLabel',
            onClick: this._onAlignmentClick,
            'data-identifier': 'alignment' },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/text/align_' + alignment + '.png', true) }),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:label' },
            this._t('controls.text.alignment')
          )
        )
      )
    );
  };

  /**
   * Renders the "take to front" list item
   * @return {Component}
   * @private
   */


  TextControlsComponent.prototype._renderTakeToFrontItem = function _renderTakeToFrontItem() {
    return _globals.ReactBEM.createElement(
      'li',
      {
        bem: 'e:item',
        key: 'takeToFront' },
      _globals.ReactBEM.createElement(
        'bem',
        { specifier: '$b:controls' },
        _globals.ReactBEM.createElement(
          'div',
          {
            bem: '$e:button m:withLabel',
            onClick: this._onTakeToFrontClick },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/take_to_front.png', true) }),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:label' },
            this._t('controls.text.takeToFront')
          )
        )
      )
    );
  };

  /**
   * Renders this component
   * @return {Array.<ReactBEM.Element>}
   */


  TextControlsComponent.prototype.renderControls = function renderControls() {
    if (this.state.loading) return _globals.ReactBEM.createElement('div', null);

    var listItems = [this._renderSizeItem(), this._renderFontItem(), this._renderAlignmentItem()];

    var selectedText = this.getSharedState('selectedSprite');

    var foregroundColor = selectedText.getColor().clone();
    var backgroundColor = selectedText.getBackgroundColor().clone();

    return [_globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:list' },
      _globals.ReactBEM.createElement(
        _scrollbarComponent2.default,
        { ref: 'scrollbar' },
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:list' },
          listItems
        )
      )
    ), _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:colorPicker' },
      _globals.ReactBEM.createElement(_colorPickerComponent2.default, {
        initialValue: foregroundColor,
        label: this._t('controls.text.foreground'),
        onChange: this._onForegroundColorChange })
    ), _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:cell m:colorPicker' },
      _globals.ReactBEM.createElement(_colorPickerComponent2.default, {
        initialValue: backgroundColor,
        label: this._t('controls.text.background'),
        onChange: this._onBackgroundColorChange })
    )];
  };

  return TextControlsComponent;
}(_controlsComponent2.default);

exports.default = TextControlsComponent;


TextControlsComponent.contextTypes = _controlsComponent2.default.contextTypes;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextControlsOverlayComponent = function (_BaseComponent) {
  (0, _inherits3.default)(TextControlsOverlayComponent, _BaseComponent);

  function TextControlsOverlayComponent() {
    (0, _classCallCheck3.default)(this, TextControlsOverlayComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the `edit` item
   * @param  {Event} e
   * @private
   */
  TextControlsOverlayComponent.prototype._onEditClick = function _onEditClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onEdit && this.props.onEdit();
  };

  /**
   * Gets called when the user clicks the `take to front` item
   * @param  {Event} e
   * @private
   */


  TextControlsOverlayComponent.prototype._onTakeToFrontClick = function _onTakeToFrontClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onTakeToFront && this.props.onTakeToFront();
  };

  /**
   * Gets called when the user clicks the `remove` item
   * @param  {Event} e
   * @private
   */


  TextControlsOverlayComponent.prototype._onRemoveClick = function _onRemoveClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onRemove && this.props.onRemove();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the items of this component
   * @return {Array.<ReactBEM.Element>}
   */


  TextControlsOverlayComponent.prototype._renderItems = function _renderItems() {
    var items = [_globals.ReactBEM.createElement(
      'div',
      { bem: '$e:item', onClick: this._onTakeToFrontClick.bind(this) },
      _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/take-to-front.png', true) })
    )];

    if (_globals.Utils.isMobile()) {
      items = items.concat([_globals.ReactBEM.createElement('div', { bem: '$e:separator' }), _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:item', onClick: this._onEditClick.bind(this) },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/edit.png', true) })
      )]);
    }

    items = items.concat([_globals.ReactBEM.createElement('div', { bem: '$e:separator' }), _globals.ReactBEM.createElement(
      'div',
      { bem: '$e:item', onClick: this._onRemoveClick.bind(this) },
      _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/sprites/remove.png', true) })
    )]);

    return items;
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  TextControlsOverlayComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      {
        bem: '$b:spritesControlsOverlay' },
      this._renderItems()
    );
  };

  return TextControlsOverlayComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = TextControlsOverlayComponent;


TextControlsOverlayComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoneButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(DoneButtonComponent, _BaseComponent);

  function DoneButtonComponent() {
    (0, _classCallCheck3.default)(this, DoneButtonComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  DoneButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:controls' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell m:largeButton' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: '$e:largeButton', onClick: this.props.onClick },
          _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/tick.png', true) })
        )
      )
    );
  };

  return DoneButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = DoneButtonComponent;


DoneButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderComponent = function (_BaseComponent) {
  (0, _inherits3.default)(HeaderComponent, _BaseComponent);

  function HeaderComponent() {
    (0, _classCallCheck3.default)(this, HeaderComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onCloseClick');
    return _this;
  }

  /**
   * Gets called when the user clicks the close button
   * @private
   */


  HeaderComponent.prototype._onCloseClick = function _onCloseClick() {
    this.context.mediator.emit(_globals.Constants.EVENTS.CLOSE);
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  HeaderComponent.prototype.renderWithBEM = function renderWithBEM() {
    var closeButton = void 0;
    if (this.context.options.showCloseButton) {
      closeButton = _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:close', onClick: this._onCloseClick },
        _globals.ReactBEM.createElement('img', { bem: 'e:image', src: this._getAssetPath('close.png', true) })
      );
    }

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:header' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:label' },
        this.context.options.title
      ),
      closeButton
    );
  };

  return HeaderComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


exports.default = HeaderComponent;


HeaderComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _loadingModalComponent = __webpack_require__(154);

var _loadingModalComponent2 = _interopRequireDefault(_loadingModalComponent);

var _warningModalComponent = __webpack_require__(156);

var _warningModalComponent2 = _interopRequireDefault(_warningModalComponent);

var _errorModalComponent = __webpack_require__(153);

var _errorModalComponent2 = _interopRequireDefault(_errorModalComponent);

var _progressModalComponent = __webpack_require__(155);

var _progressModalComponent2 = _interopRequireDefault(_progressModalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainerComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ModalContainerComponent, _BaseComponent);

  function ModalContainerComponent() {
    (0, _classCallCheck3.default)(this, ModalContainerComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._modalManager = _this.props.modalManager;
    _this._bindAll('_onModalManagerUpdate');
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  ModalContainerComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);

    this._modalManager.on('update', this._onModalManagerUpdate);
  };

  /**
   * Gets called when this component is about to be unmounted
   */


  ModalContainerComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _BaseComponent.prototype.componentWillUnmount.call(this);

    this._modalManager.off('update', this._onModalManagerUpdate);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the modal manager updates
   * @private
   */


  ModalContainerComponent.prototype._onModalManagerUpdate = function _onModalManagerUpdate() {
    this.forceUpdate();
  };

  /**
   * Gets called when a modal is closed. Removes it from the manager.
   * @param  {Modal} modal
   * @private
   */


  ModalContainerComponent.prototype._onModalClosed = function _onModalClosed(modal) {
    this._modalManager.removeModal(modal);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the modals
   * @return {Array.<React.Component>}
   */


  ModalContainerComponent.prototype._renderModals = function _renderModals() {
    var _this2 = this;

    var modals = this._modalManager.getModals();
    return modals.map(function (modal) {
      var ModalComponent = void 0;

      switch (modal.type) {
        case 'loading':
          ModalComponent = _loadingModalComponent2.default;
          break;
        case 'warning':
          ModalComponent = _warningModalComponent2.default;
          break;
        case 'error':
          ModalComponent = _errorModalComponent2.default;
          break;
        case 'progress':
          ModalComponent = _progressModalComponent2.default;
          break;
      }

      return _globals.ReactBEM.createElement(ModalComponent, {
        modal: modal,
        onClose: _this2._onModalClosed.bind(_this2, modal) });
    });
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ModalContainerComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      null,
      this._renderModals()
    );
  };

  return ModalContainerComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = ModalContainerComponent;


ModalContainerComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorModalComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ErrorModalComponent, _BaseComponent);

  function ErrorModalComponent() {
    (0, _classCallCheck3.default)(this, ErrorModalComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onClose');
    return _this;
  }

  /**
   * Gets called when the user clicks the close button
   * @private
   */


  ErrorModalComponent.prototype._onClose = function _onClose() {
    this.props.modal.close();
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  ErrorModalComponent.prototype.renderWithBEM = function renderWithBEM() {
    var modal = this.props.modal;

    var modalElement = _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:modal m:error' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:title' },
        modal.title
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:text' },
        modal.text
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:button b:button m:inline', onClick: this._onClose },
        'OK'
      )
    );

    var content = modal.overlay ? _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:overlay' },
      modalElement
    ) : modalElement;

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:modals' },
      content
    );
  };

  return ErrorModalComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = ErrorModalComponent;


ErrorModalComponent.propTypes = {
  modal: _globals.React.PropTypes.object
};

ErrorModalComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingModalComponent = function (_BaseComponent) {
  (0, _inherits3.default)(LoadingModalComponent, _BaseComponent);

  function LoadingModalComponent() {
    (0, _classCallCheck3.default)(this, LoadingModalComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  LoadingModalComponent.prototype.renderWithBEM = function renderWithBEM() {
    var modal = this.props.modal;
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:modals' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:overlay' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:modal m:loading' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:text' },
            modal.text
          )
        )
      )
    );
  };

  return LoadingModalComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = LoadingModalComponent;


LoadingModalComponent.propTypes = {
  modal: _globals.React.PropTypes.object
};

LoadingModalComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressModalComponent = function (_BaseComponent) {
  (0, _inherits3.default)(ProgressModalComponent, _BaseComponent);

  function ProgressModalComponent() {
    (0, _classCallCheck3.default)(this, ProgressModalComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  ProgressModalComponent.prototype.renderWithBEM = function renderWithBEM() {
    var modal = this.props.modal;
    var progress = modal.data.progress;

    var progressStyle = {
      width: ((progress || 0) * 100).toFixed(2) + '%'
    };
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:modals' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:overlay' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:modal m:loading' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:text' },
            modal.text
          ),
          _globals.ReactBEM.createElement(
            'bem',
            { specifier: 'b:loadingModal' },
            _globals.ReactBEM.createElement(
              'div',
              { bem: '$e:progressBar' },
              _globals.ReactBEM.createElement('div', { bem: 'e:progress', style: progressStyle })
            )
          )
        )
      )
    );
  };

  return ProgressModalComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = ProgressModalComponent;


ProgressModalComponent.propTypes = {
  modal: _globals.React.PropTypes.object
};

ProgressModalComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WarningModalComponent = function (_BaseComponent) {
  (0, _inherits3.default)(WarningModalComponent, _BaseComponent);

  function WarningModalComponent() {
    (0, _classCallCheck3.default)(this, WarningModalComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  WarningModalComponent.prototype.renderWithBEM = function renderWithBEM() {
    var modal = this.props.modal;
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:modals' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:modal m:warning' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:title' },
          modal.title
        ),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:text' },
          modal.text
        ),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:button b:button m:inline', onClick: this.props.onClose },
          'OK'
        )
      )
    );
  };

  return WarningModalComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = WarningModalComponent;


WarningModalComponent.propTypes = {
  modal: _globals.React.PropTypes.object
};

WarningModalComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CanvasComponent = function (_BaseComponent) {
  (0, _inherits3.default)(CanvasComponent, _BaseComponent);

  function CanvasComponent() {
    var _this$_events;

    (0, _classCallCheck3.default)(this, CanvasComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onDragStart', '_onDragMove', '_onDragEnd', '_onWindowResize', '_onFeaturesUpdated', '_onZoomChange');

    _this._events = (_this$_events = {}, (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.WINDOW_RESIZE, _this._onWindowResize), (0, _defineProperty3.default)(_this$_events, _globals.Constants.EVENTS.FEATURES_UPDATED, _this._onFeaturesUpdated), _this$_events);

    _this._initialRenderDone = false;

    _this.state = {
      canvasPosition: new _globals.Vector2(),
      canvasOffset: new _globals.Vector2()
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called after the window has been resized
   * @private
   */


  CanvasComponent.prototype._onWindowResize = function _onWindowResize() {
    var editor = this.context.editor;

    var sdk = editor.getSDK();
    sdk.resizeTo(this._getContainerDimensions());
    editor.zoom.set('auto');
  };

  /**
   * Gets called when features (e.g. drag) are updated
   * @param {String[]} identifiers
   * @private
   */


  CanvasComponent.prototype._onFeaturesUpdated = function _onFeaturesUpdated(identifiers) {
    if (identifiers.indexOf('drag') !== -1) {
      this.forceUpdate();
    }
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after this component has been mounted
   */


  CanvasComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);

    var editor = this.context.editor;

    var renderer = editor.getRenderer();

    var _refs = this.refs,
        canvasCell = _refs.canvasCell,
        canvas = _refs.canvas;

    var width = canvasCell.offsetWidth;
    var height = canvasCell.offsetHeight;
    renderer.setCanvas(canvas);
    renderer.resizeTo(new _globals.Vector2(width, height), true);

    editor.zoom.on('set', this._onZoomChange);
  };

  /**
   * Gets called when this component is about to be unmounted
   */


  CanvasComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    var editor = this.context.editor;

    editor.zoom.off('set', this._onZoomChange);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the zoom has changed
   * @private
   */


  CanvasComponent.prototype._onZoomChange = function _onZoomChange() {
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- DRAGGING

  /**
   * Gets called when the user starts dragging the canvas
   * @param {React.SyntheticEvent} e
   * @private
   */


  CanvasComponent.prototype._onDragStart = function _onDragStart(e) {
    var editor = this.context.editor;

    if (!editor.features.isEnabled('drag')) return;

    e.preventDefault();

    this._dragStartPosition = _globals.Utils.getEventPosition(e.nativeEvent);
    this._dragInitialOffset = editor.getOffset().clone();
    document.addEventListener('mousemove', this._onDragMove);
    document.addEventListener('touchmove', this._onDragMove);
    document.addEventListener('mouseup', this._onDragEnd);
    document.addEventListener('touchend', this._onDragEnd);
  };

  /**
   * Gets called while the user drags the canvas
   * @param {DOMEvent} e
   * @private
   */


  CanvasComponent.prototype._onDragMove = function _onDragMove(e) {
    var eventPosition = _globals.Utils.getEventPosition(e);
    var diffFromStart = eventPosition.clone().subtract(this._dragStartPosition);

    var newOffset = this._dragInitialOffset.clone().add(diffFromStart);

    var editor = this.context.editor;

    var lastOffset = editor.getOffset().clone();
    editor.setOffset(newOffset);
    if (!editor.getOffset().equals(lastOffset)) {
      editor.render();
    }
  };

  /**
   * Gets called when the user stops dragging the canvas
   * @param {DOMEvent} e
   * @private
   */


  CanvasComponent.prototype._onDragEnd = function _onDragEnd(e) {
    document.removeEventListener('mousemove', this._onDragMove);
    document.removeEventListener('touchmove', this._onDragMove);
    document.removeEventListener('mouseup', this._onDragEnd);
    document.removeEventListener('touchend', this._onDragEnd);
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Returns the container's dimensions
   * @return {Vector2}
   * @private
   */


  CanvasComponent.prototype._getContainerDimensions = function _getContainerDimensions() {
    var canvasCell = this.refs.canvasCell;

    return new _globals.Vector2(canvasCell.offsetWidth, canvasCell.offsetHeight);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the style properties for the draggable canvas area
   * @private
   */


  CanvasComponent.prototype._getDraggableStyle = function _getDraggableStyle() {
    return {
      top: this.state.canvasPosition.y + this.state.canvasOffset.y,
      left: this.state.canvasPosition.x + this.state.canvasOffset.x
    };
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  CanvasComponent.prototype.renderWithBEM = function renderWithBEM() {
    var canvasContent = null;
    var containerContent = null;
    if (this.props.largeControls) {
      containerContent = this.props.children;
    } else {
      canvasContent = this.props.children;
    }

    var editor = this.context.editor;

    var zoomAllowsDrag = editor.isReady() && editor.zoom.get() > editor.zoom.getDefault();
    var dragEnabled = editor.features.isEnabled('drag') && zoomAllowsDrag;

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:canvas e:container e:row' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:container e:cell', ref: 'canvasCell' },
        _globals.ReactBEM.createElement(
          'div',
          {
            bem: 'e:innerContainer',
            className: dragEnabled ? 'is-draggable' : null,
            onTouchStart: this._onDragStart,
            onMouseDown: this._onDragStart,
            style: this._getDraggableStyle() },
          _globals.ReactBEM.createElement('canvas', {
            bem: 'e:canvas',
            ref: 'canvas' }),
          canvasContent
        ),
        containerContent
      )
    );
  };

  return CanvasComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = CanvasComponent;


CanvasComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _overviewControlsComponent = __webpack_require__(63);

var _overviewControlsComponent2 = _interopRequireDefault(_overviewControlsComponent);

var _screenComponent = __webpack_require__(21);

var _screenComponent2 = _interopRequireDefault(_screenComponent);

var _canvasComponent = __webpack_require__(157);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

var _overview = __webpack_require__(127);

var _overview2 = _interopRequireDefault(_overview);

var _editor3 = __webpack_require__(68);

var _editor4 = _interopRequireDefault(_editor3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */
var WINDOW_RESIZE_DELAY = 500;

var EditorScreenComponent = function (_ScreenComponent) {
  (0, _inherits3.default)(EditorScreenComponent, _ScreenComponent);

  function EditorScreenComponent() {
    (0, _classCallCheck3.default)(this, EditorScreenComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ScreenComponent.call.apply(_ScreenComponent, [this].concat(args)));

    _this._overviewControls = _overviewControlsComponent2.default;

    _this._bindAll('switchToControls', '_startEditor', '_onWindowResize', '_onWindowResizeDone', '_onImageResize', '_onNewImage', '_onRenderError');

    _this._previousControlsStack = [];
    _this.state = {
      zoom: null,
      controls: _overview2.default,
      dragEnabled: true,
      sharedState: new _globals.SharedState()
    };

    _this._editor = new _editor4.default(_this.context.ui, _this.context.options, _this.context.mediator);
    _this._editor.on('new-image', _this._onNewImage);
    _this._editor.on('ready', _this._startEditor);
    _this._editor.on('resize', _this._onImageResize);
    _this._editor.on('render-error', _this._onRenderError);

    _this._forceControls = _this.context.options.editor.forceControls;
    _this._forceControlIndex = 0;
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after this component has been mounted
   */


  EditorScreenComponent.prototype.componentDidMount = function componentDidMount() {
    _ScreenComponent.prototype.componentDidMount.call(this);

    var image = this.context.options.editor.image;

    this.setImage(image);
    this._editor.render();

    this._switchToNextForceControl();

    var options = this.context.options;

    if (options.responsive) {
      window.addEventListener('resize', this._onWindowResize);
    }
  };

  /**
   * Gets called before this component is unmounted
   */


  EditorScreenComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _ScreenComponent.prototype.componentWillUnmount.call(this);

    this._editor.dispose();
    var options = this.context.options;

    if (options.responsive) {
      window.removeEventListener('resize', this._onWindowResize);
    }
  };

  /**
   * Sets the zoom level and starts the editor rendering
   * @private
   */


  EditorScreenComponent.prototype._startEditor = function _startEditor() {
    this._editor.start();
  };

  // -------------------------------------------------------------------------- FORCE CONTROLS

  /**
   * Switches to the next forced control
   * @private
   */


  EditorScreenComponent.prototype._switchToNextForceControl = function _switchToNextForceControl() {
    if (this._forceControlIndex < this._forceControls.length) {
      var _forceControls$_force = this._forceControls[this._forceControlIndex],
          control = _forceControls$_force.control,
          options = _forceControls$_force.options;

      var availableControls = this._editor.controls.getAvailable();
      var controlObject = availableControls[control];

      var fixedOptions = _globals.SDKUtils.defaults({
        forcedControl: true
      }, options);

      if (!controlObject) {
        throw new Error('Force controls: Could not find control with identifier `' + control + '`');
      }

      this.switchToControls(controlObject, {}, null, fixedOptions);
      this._forceControlIndex++;
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an error occurred while rendering
   * @param  {Event} e
   * @private
   */


  EditorScreenComponent.prototype._onRenderError = function _onRenderError(e) {
    _modalManager2.default.instance.displayError(this._t('errors.renderingError.title'), this._t('errors.renderingError.text'), true);
    _globals.Log.error(this.constructor.name, 'An error occurred while rendering: ' + e.message);
    _globals.Log.printError(e);
  };

  /**
   * Gets called when the image has been changed
   * @private
   */


  EditorScreenComponent.prototype._onNewImage = function _onNewImage() {
    this.switchToControls(_overview2.default);
  };

  /**
   * Gets called when the editor starts resizing an image
   * @private
   */


  EditorScreenComponent.prototype._onImageResize = function _onImageResize() {
    var _this2 = this;

    var loadingModal = _modalManager2.default.instance.displayLoading(this._t('loading.resizing'));
    this._editor.once('resized', function (_ref) {
      var dimensions = _ref.dimensions,
          reason = _ref.reason;

      loadingModal.close();

      if (_this2.context.options.editor.displayResizeMessage) {
        _modalManager2.default.instance.displayWarning(_this2._t('warnings.imageResized_' + reason + '.title'), _this2._t('warnings.imageResized_' + reason + '.text', {
          maxMegaPixels: _this2._editor.getMaxMegapixels(),
          width: dimensions.x,
          height: dimensions.y
        }));
      }
    });
  };

  /**
   * Gets called on window resize
   * @private
   */


  EditorScreenComponent.prototype._onWindowResize = function _onWindowResize() {
    if (this._resizeTimeout) {
      window.clearTimeout(this._resizeTimeout);
      this._resizeTimeout = null;
    }
    this._resizeTimeout = window.setTimeout(this._onWindowResizeDone, WINDOW_RESIZE_DELAY);
  };

  /**
   * Gets called `WINDOW_RESIZE_DELAY` ms after the last resize event has been called
   * @private
   */


  EditorScreenComponent.prototype._onWindowResizeDone = function _onWindowResizeDone() {
    this._emitEvent(_globals.Constants.EVENTS.WINDOW_RESIZE);
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Switches to the given controls
   * @param  {Component} controls
   * @param  {Object} [initialState] = {}
   * @param  {Function} [callback]
   * @param  {Object} [controlOptions]
   */


  EditorScreenComponent.prototype.switchToControls = function switchToControls(controls) {
    var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var controlOptions = arguments[3];

    var newControls = null;
    if (controls === 'back') {
      newControls = this._previousControlsStack.pop();
    } else if (controls === 'home') {
      // When a control switches to `home`, override this action
      // with switching to the next force control (if present)
      if (this._forceControlIndex < this._forceControls.length) {
        return this._switchToNextForceControl();
      }

      newControls = _overview2.default;
      this._previousControlsStack = [];
    } else {
      newControls = controls;
      this._previousControlsStack.push(this.state.controls);
    }

    var controlsChanged = this.state.controls !== newControls;

    // If the previous controls have an `onExit` method, call it
    // with the controls as `this`
    if (this.state.controls.onExit) {
      this.state.controls.onExit.call(this.refs.controls);
    }

    this.state.sharedState.clear();
    this.state.sharedState.set(initialState, false);

    var controlsOptions = _globals.SDKUtils.defaults(controlOptions || this.context.options.editor.controlsOptions[newControls.identifier], newControls.defaultOptions);

    // If the new controls have an `onEnter` method, call it
    if (newControls.onEnter) {
      newControls.onEnter.call(this.refs.controls, this.state.sharedState, controlsOptions);
    }

    if (controlsChanged) {
      this.setState({
        controls: newControls,
        controlsOptions: controlsOptions
      }, callback);
    } else {
      // No need to re-set the state. Call callback immediately
      return callback && callback();
    }
  };

  /**
   * Returns the zoom level
   * @return {Number}
   */


  EditorScreenComponent.prototype.getZoom = function getZoom() {
    return this.state.zoom;
  };

  /**
   * Exports an image
   * @param {Boolean} download = false
   * @return {Promise}
   */


  EditorScreenComponent.prototype.export = function _export() {
    var _this3 = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new Promise(function (resolve, reject) {
      _this3.switchToControls('home', {}, function () {
        var _editor;

        (_editor = _this3._editor).export.apply(_editor, args).then(resolve).catch(reject);
      });
    });
  };

  /**
   * Returns the editor
   * @return {PhotoEditorSDK.UI.ReactUI.Editor}
   */


  EditorScreenComponent.prototype.getEditor = function getEditor() {
    return this._editor;
  };

  /**
   * Serializes the editor state
   * @return {Promise}
   */


  EditorScreenComponent.prototype.serialize = function serialize() {
    var _editor2;

    return (_editor2 = this._editor).serialize.apply(_editor2, arguments);
  };

  /**
   * Deserializes the given data
   * @param  {Object} data
   * @return {Promise}
   */


  EditorScreenComponent.prototype.deserialize = function deserialize(data) {
    return this._editor.deserialize(data);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Decides whether the undo button should be displayed
   * @return {Boolean}
   * @private
   */


  EditorScreenComponent.prototype._showUndoButton = function _showUndoButton() {
    return this._editor.history.isAvailable();
  };

  /**
   * Returns the context passed to all children
   * @return {Object}
   */


  EditorScreenComponent.prototype.getChildContext = function getChildContext() {
    return {
      editor: this._editor,
      ui: this.context.ui,
      options: this.context.options,
      editorScreen: this,
      mediator: this.context.mediator
    };
  };

  /**
   * Sets the image to the given one
   * @param {Image} image
   * @param {Boolean} resetEditor
   */


  EditorScreenComponent.prototype.setImage = function setImage(image, resetEditor) {
    this._editor.setImage(image, resetEditor);
  };

  /**
   * Renders this screen
   * @return {ReactBEM.Element}
   * @private
   */


  EditorScreenComponent.prototype._renderScreen = function _renderScreen() {
    var ControlsComponent = this.state.controls.controlsComponent;
    var CanvasControlsComponent = this.state.controls.canvasControlsComponent;
    if (!CanvasControlsComponent) {
      CanvasControlsComponent = _overview2.default.canvasControlsComponent;
    }
    var TopBarControlsComponent = this.state.controls.topBarControlsComponent;
    if (!TopBarControlsComponent) {
      TopBarControlsComponent = _overview2.default.topBarControlsComponent;
    }

    var controls = void 0,
        canvasControls = void 0,
        topBarControls = void 0;

    if (TopBarControlsComponent && this.context.options.showTopBar) {
      topBarControls = _globals.ReactBEM.createElement(TopBarControlsComponent, {
        sharedState: this.state.sharedState,
        options: this.state.controlsOptions,
        app: this.props.app,
        ref: 'topBarControls' });
    }

    if (ControlsComponent) {
      controls = _globals.ReactBEM.createElement(ControlsComponent, {
        onSwitchControls: this.switchToControls,
        sharedState: this.state.sharedState,
        options: this.state.controlsOptions,
        app: this.props.app,
        key: this.state.controls.identifier + '-controls',
        ref: 'controls' });
    }

    if (CanvasControlsComponent) {
      canvasControls = _globals.ReactBEM.createElement(CanvasControlsComponent, {
        onSwitchControls: this.switchToControls,
        sharedState: this.state.sharedState,
        options: this.state.controlsOptions,
        app: this.props.app,
        key: this.state.controls.identifier + '-canvasControls',
        ref: 'canvasControls' });
    }

    var bemSpecifier = '$b:editorScreen';
    if (!this.context.options.showHeader) {
      bemSpecifier += ' m:noHeader';
    }

    return _globals.ReactBEM.createElement(
      'div',
      { bem: bemSpecifier },
      topBarControls,
      _globals.ReactBEM.createElement(
        _canvasComponent2.default,
        {
          ref: 'canvas',
          largeControls: this.state.controls.largeCanvasControls },
        canvasControls
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:controls $e:container e:row' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:cell' },
          controls
        )
      )
    );
  };

  return EditorScreenComponent;
}(_screenComponent2.default);

exports.default = EditorScreenComponent;


EditorScreenComponent.childContextTypes = {
  ui: _globals.React.PropTypes.object.isRequired,
  editor: _globals.React.PropTypes.object.isRequired,
  mediator: _globals.React.PropTypes.object.isRequired,
  options: _globals.React.PropTypes.object.isRequired,
  editorScreen: _globals.React.PropTypes.object.isRequired
};

EditorScreenComponent.contextTypes = _screenComponent2.default.contextTypes;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _preloader = __webpack_require__(195);

var _preloader2 = _interopRequireDefault(_preloader);

var _screenComponent = __webpack_require__(21);

var _screenComponent2 = _interopRequireDefault(_screenComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingScreenComponent = function (_ScreenComponent) {
  (0, _inherits3.default)(LoadingScreenComponent, _ScreenComponent);

  function LoadingScreenComponent() {
    (0, _classCallCheck3.default)(this, LoadingScreenComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ScreenComponent.call.apply(_ScreenComponent, [this].concat(args)));

    _this.state = { progress: 0 };

    _this._preloader = new _preloader2.default(_this.context.ui, _this.context.options, _this.context.mediator);
    _this._preloader.on('progress', function (progress) {
      _this.state.progress = progress;
    });
    _this._preloader.on('done', function () {
      _this.props.app.switchToScreen('post-loading');
    });
    return _this;
  }

  /**
   * Gets called when this component has been mounted
   */


  LoadingScreenComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _ScreenComponent.prototype.componentDidMount.call(this);
    var _window = window,
        devicePixelRatio = _window.devicePixelRatio;

    this._canvas = this.refs.canvas;
    this._canvas.width = this._canvas.offsetWidth * devicePixelRatio;
    this._canvas.height = this._canvas.offsetHeight * devicePixelRatio;
    this._context = this._canvas.getContext('2d');

    this._preloaderImage = new window.Image();
    this._preloaderImage.addEventListener('load', function () {
      _this2._preloader.load();
      (0, _globals.requestAnimationFrame)(_this2._tick);
    });
    this._preloaderImage.src = this.context.ui.getAssetPath('preloader.png', true);

    this._running = true;
    this._tick = this._tick.bind(this);
  };

  /**
   * Gets called when this component is about to be unmounted
   */


  LoadingScreenComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _ScreenComponent.prototype.componentWillUnmount.call(this);
    this._running = false;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * @private
   */


  LoadingScreenComponent.prototype._tick = function _tick() {
    this._renderLoadingIndicator();
    if (this._running) {
      (0, _globals.requestAnimationFrame)(this._tick);
    }
  };

  /**
   * (Re-)Renders the loading indicator
   * @private
   */


  LoadingScreenComponent.prototype._renderLoadingIndicator = function _renderLoadingIndicator() {
    var _canvas = this._canvas,
        width = _canvas.width,
        height = _canvas.height;

    var ctx = this._context;
    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.arc(width / 2, height / 2, width / 2, -Math.PI * 0.5, Math.PI * 2 * this.state.progress - Math.PI * 0.5, false);
    ctx.lineTo(width / 2, height / 2);
    ctx.clip();
    ctx.drawImage(this._preloaderImage, 0, 0, this._preloaderImage.width, this._preloaderImage.height, 0, 0, width, height);
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.05;
    ctx.drawImage(this._preloaderImage, 0, 0, this._preloaderImage.width, this._preloaderImage.height, 0, 0, width, height);
    ctx.restore();
  };

  /**
   * Renders this screen
   * @return {ReactBEM.Element}
   * @private
   */


  LoadingScreenComponent.prototype._renderScreen = function _renderScreen() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:loadingScreen' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:container' },
        _globals.ReactBEM.createElement('canvas', { bem: 'e:canvas', ref: 'canvas' })
      )
    );
  };

  return LoadingScreenComponent;
}(_screenComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


exports.default = LoadingScreenComponent;


LoadingScreenComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LibraryComponent = function (_BaseComponent) {
  (0, _inherits3.default)(LibraryComponent, _BaseComponent);

  function LibraryComponent() {
    (0, _classCallCheck3.default)(this, LibraryComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onClick');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the library
   * @private
   */


  LibraryComponent.prototype._onClick = function _onClick() {
    this.props.onClick && this.props.onClick(this.props.library);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  LibraryComponent.prototype.renderWithBEM = function renderWithBEM() {
    var library = this.props.library;

    var style = {
      backgroundImage: 'url(' + library.coverImage + ')'
    };

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:photoRoll e:libraryList' },
      _globals.ReactBEM.createElement(
        'li',
        { bem: 'e:item', style: style, onClick: this._onClick },
        _globals.ReactBEM.createElement('div', { bem: 'e:overlay' }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:name' },
          library.name
        )
      )
    );
  };

  return LibraryComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = LibraryComponent;


LibraryComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoComponent = function (_BaseComponent) {
  (0, _inherits3.default)(PhotoComponent, _BaseComponent);

  function PhotoComponent() {
    (0, _classCallCheck3.default)(this, PhotoComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  PhotoComponent.prototype.renderWithBEM = function renderWithBEM() {
    var photo = this.props.photo;

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: 'b:photoRoll e:photoList' },
      _globals.ReactBEM.createElement(
        'li',
        { bem: '$e:item', onClick: this.props.onClick },
        _globals.ReactBEM.createElement('div', { bem: 'e:overlay' }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:title' },
          photo.title
        ),
        _globals.ReactBEM.createElement('img', { bem: 'e:image', src: photo.urls.thumb })
      )
    );
  };

  return PhotoComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = PhotoComponent;


PhotoComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _searchSuggestionComponent = __webpack_require__(65);

var _searchSuggestionComponent2 = _interopRequireDefault(_searchSuggestionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var NoSearchResultsComponent = function (_BaseComponent) {
  (0, _inherits3.default)(NoSearchResultsComponent, _BaseComponent);

  function NoSearchResultsComponent() {
    (0, _classCallCheck3.default)(this, NoSearchResultsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onSearchSuggestionClick');

    var PhotoRollProvider = _this.context.options.photoRoll.provider;
    _this._provider = new PhotoRollProvider();

    _this.state = {
      searchSuggestions: []
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when a search suggestion was clicked
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.SearchSuggestion} searchSuggestion
   * @private
   */


  NoSearchResultsComponent.prototype._onSearchSuggestionClick = function _onSearchSuggestionClick(searchSuggestion) {
    this.props.onSearchSuggestionClicked && this.props.onSearchSuggestionClicked(searchSuggestion);
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  NoSearchResultsComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _BaseComponent.prototype.componentDidMount.call(this);

    this._provider.getSearchSuggestions().then(function (searchSuggestions) {
      _this2.setState({
        searchSuggestions: searchSuggestions
      });
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the message (which can include html)
   * @return {Object}
   * @private
   */


  NoSearchResultsComponent.prototype._renderMessage = function _renderMessage() {
    return { __html: this._t('photoRoll.search.noSearchResults', {
        query: this.props.query
      }) };
  };

  /**
   * Renders the search suggestions
   * @return {ReactBEM.Element}
   * @private
   */


  NoSearchResultsComponent.prototype._renderSearchSuggestions = function _renderSearchSuggestions() {
    var _this3 = this;

    if (!this.state.searchSuggestions.length) return null;

    var items = this.state.searchSuggestions.map(function (searchSuggestion) {
      return _globals.ReactBEM.createElement(_searchSuggestionComponent2.default, {
        onClick: _this3._onSearchSuggestionClick,
        searchSuggestion: searchSuggestion });
    });

    return _globals.ReactBEM.createElement(
      'div',
      null,
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:headline' },
        'Search suggestions'
      ),
      _globals.ReactBEM.createElement(
        'ul',
        { bem: '$e:libraryList' },
        items
      )
    );
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  NoSearchResultsComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:photoRoll e:row m:fullHeight' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:container' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:innerContainer' },
            _globals.ReactBEM.createElement('div', { bem: 'e:noSearchResults', dangerouslySetInnerHTML: this._renderMessage() }),
            this._renderSearchSuggestions()
          )
        )
      )
    );
  };

  return NoSearchResultsComponent;
}(_globals.BaseComponent);

exports.default = NoSearchResultsComponent;


NoSearchResultsComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(212);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

var _libraryComponent = __webpack_require__(160);

var _libraryComponent2 = _interopRequireDefault(_libraryComponent);

var _searchSuggestionComponent = __webpack_require__(65);

var _searchSuggestionComponent2 = _interopRequireDefault(_searchSuggestionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var OverviewComponent = function (_BaseComponent) {
  (0, _inherits3.default)(OverviewComponent, _BaseComponent);

  function OverviewComponent() {
    (0, _classCallCheck3.default)(this, OverviewComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._needsStyleFixes = true;
    _this.state = {
      loading: true,
      libraries: [],
      searchSuggestions: []
    };

    _this._bindAll('_onLibraryClick', '_onSearchSuggestionClick');

    var PhotoRollProvider = _this.context.options.photoRoll.provider;
    _this._provider = new PhotoRollProvider();
    return _this;
  }

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   */


  OverviewComponent.prototype.fixStyles = function fixStyles() {
    if (_globals.Utils.Browser.isIElte(11)) {
      var _refs = this.refs,
          cell = _refs.cell,
          container = _refs.container;

      if (!(cell && container)) {
        return;
      }
      var cellHeight = cell.offsetHeight;
      container.style.height = cellHeight + 'px';
    }
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  OverviewComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _BaseComponent.prototype.componentDidMount.call(this);

    var modal = _modalManager2.default.instance.displayLoading(this._t('loading.loading'));
    this._load().then(function (_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
          libraries = _ref2[0],
          searchSuggestions = _ref2[1];

      modal.close();
      if (libraries.length === 1) {
        _this2._onLibraryClick(libraries[0], true);
      } else {
        _this2.setState({
          loading: false,
          libraries: libraries,
          searchSuggestions: searchSuggestions
        });
      }
    });
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when a library was clicked
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library} library
   * @param  {Boolean} automatically = false
   * @private
   */


  OverviewComponent.prototype._onLibraryClick = function _onLibraryClick(library) {
    var automatically = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this.props.onLibraryClicked && this.props.onLibraryClicked(library, automatically);
  };

  /**
   * Gets called when a search suggestion was clicked
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.SearchSuggestion} searchSuggestion
   * @private
   */


  OverviewComponent.prototype._onSearchSuggestionClick = function _onSearchSuggestionClick(searchSuggestion) {
    this.props.onSearchSuggestionClicked && this.props.onSearchSuggestionClicked(searchSuggestion);
  };

  // -------------------------------------------------------------------------- LOADING

  /**
   * Loads the libraries and search suggestions (if present)
   * @return {Promise}
   * @private
   */


  OverviewComponent.prototype._load = function _load() {
    var promises = [this._provider.getLibraries(), this._provider.getSearchSuggestions()];
    return _globals.Promise.all(promises);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the library items
   * @return {React.Component}
   * @private
   */


  OverviewComponent.prototype._renderLibraries = function _renderLibraries() {
    var _this3 = this;

    var items = this.state.libraries.map(function (library) {
      return _globals.ReactBEM.createElement(_libraryComponent2.default, {
        onClick: _this3._onLibraryClick,
        library: library });
    });
    return _globals.ReactBEM.createElement(
      'li',
      { bem: 'e:item' },
      _globals.ReactBEM.createElement(
        'bem',
        { specifier: 'b:photoRoll' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:headline' },
          'Browse libraries'
        ),
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:libraryList' },
          items
        )
      )
    );
  };

  /**
   * Rnders the search suggestion items
   * @return {React.Component}
   * @private
   */


  OverviewComponent.prototype._renderSearchSuggestions = function _renderSearchSuggestions() {
    var _this4 = this;

    if (!this.state.searchSuggestions.length) return null;

    var items = this.state.searchSuggestions.map(function (searchSuggestion) {
      return _globals.ReactBEM.createElement(_searchSuggestionComponent2.default, {
        onClick: _this4._onSearchSuggestionClick,
        searchSuggestion: searchSuggestion });
    });

    return _globals.ReactBEM.createElement(
      'li',
      { bem: 'e:item' },
      _globals.ReactBEM.createElement(
        'bem',
        { specifier: 'b:photoRoll' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:headline' },
          'Search suggestions'
        ),
        _globals.ReactBEM.createElement(
          'ul',
          { bem: '$e:libraryList' },
          items
        )
      )
    );
  };

  /**
   * Renders the content for this component
   * @return {ReactBEM.Element}
   * @private
   */


  OverviewComponent.prototype._renderContent = function _renderContent() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:photoRoll e:row m:fullHeight' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell', ref: 'cell' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:container', ref: 'container' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:innerContainer' },
            _globals.ReactBEM.createElement(
              'ul',
              { bem: '$e:groupList' },
              this._renderLibraries(),
              this._renderSearchSuggestions()
            )
          )
        )
      )
    );
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  OverviewComponent.prototype.renderWithBEM = function renderWithBEM() {
    if (!this.state.loading) {
      return this._renderContent();
    } else {
      return _globals.ReactBEM.createElement('div', null);
    }
  };

  return OverviewComponent;
}(_globals.BaseComponent);

exports.default = OverviewComponent;


OverviewComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _screenComponent = __webpack_require__(21);

var _screenComponent2 = _interopRequireDefault(_screenComponent);

var _topBarComponent = __webpack_require__(167);

var _topBarComponent2 = _interopRequireDefault(_topBarComponent);

var _overviewComponent = __webpack_require__(163);

var _overviewComponent2 = _interopRequireDefault(_overviewComponent);

var _photoListComponent = __webpack_require__(66);

var _photoListComponent2 = _interopRequireDefault(_photoListComponent);

var _searchResultsComponent = __webpack_require__(165);

var _searchResultsComponent2 = _interopRequireDefault(_searchResultsComponent);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoRollScreenComponent = function (_ScreenComponent) {
  (0, _inherits3.default)(PhotoRollScreenComponent, _ScreenComponent);

  function PhotoRollScreenComponent() {
    (0, _classCallCheck3.default)(this, PhotoRollScreenComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ScreenComponent.call.apply(_ScreenComponent, [this].concat(args)));

    _this.state = {
      section: 'overview',
      sectionsHistory: []
    };

    _this._bindAll('_onLibraryClicked', '_onSearchSuggestionClicked', '_onPhotoClicked', '_onFileUpload', '_onWebcamClick', '_onBackClicked', '_onSearch');
    return _this;
  }

  // -------------------------------------------------------------------------- SECTIONS

  /**
   * Checks if the photo roll screen has a previous section
   * @return {Boolean} [description]
   */


  PhotoRollScreenComponent.prototype.hasPreviousSection = function hasPreviousSection() {
    return !!this.state.sectionsHistory.length;
  };

  /**
   * Switches to the given section
   * @param  {String} section
   * @param  {Boolean} allowScreenSwitch = true
   * @param  {Boolean} addToStack = true
   */


  PhotoRollScreenComponent.prototype.switchToSection = function switchToSection(section) {
    var allowScreenSwitch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var addToStack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (section === 'back') {
      if (!this.hasPreviousSection()) {
        if (allowScreenSwitch) {
          return this.props.app.switchToScreen('back');
        } else {
          return this.switchToSection('overview');
        }
      }
      section = this.state.sectionsHistory.pop();
    } else if (this.state.section !== section && addToStack) {
      this.state.sectionsHistory.push(this.state.section);
    }

    this.setState({ section: section });
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when a library has been clicked
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library} library
   * @param {Boolean} automatically = false
   * @private
   */


  PhotoRollScreenComponent.prototype._onLibraryClicked = function _onLibraryClicked(library) {
    var automatically = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this.state.library = library;
    this.switchToSection('library', true, !automatically);
  };

  /**
   * Gets called when a search suggestion has been clicked
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.SearchSuggestion} searchSuggestion
   * @private
   */


  PhotoRollScreenComponent.prototype._onSearchSuggestionClicked = function _onSearchSuggestionClicked(searchSuggestion) {
    this.state.searchQuery = searchSuggestion.query;
    this.switchToSection('search');
  };

  /**
   * Gets called when the user has clicked and the PhotoRoll has loaded a photo
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo} photo
   * @private
   */


  PhotoRollScreenComponent.prototype._onPhotoClicked = function _onPhotoClicked(photo) {
    var _this2 = this;

    var loadingModal = _modalManager2.default.instance.displayLoading(this._t('loading.loading'));

    var image = new window.Image();
    image.addEventListener('load', function () {
      loadingModal.close();
      _this2.props.app.setImage(image, true);
    });
    image.addEventListener('error', function () {
      loadingModal.close();
      _modalManager2.default.instance.displayError(_this2._t('errors.imageLoadFail.title'), _this2._t('errors.imageLoadFail.text', { path: image.src }));
    });
    image.crossOrigin = 'Anonymous';
    image.src = photo.urls.raw;
  };

  /**
   * Gets called when the user clicks the back button
   * @private
   */


  PhotoRollScreenComponent.prototype._onBackClicked = function _onBackClicked() {
    this.switchToSection('back');
  };

  /**
   * Gets called when a search is triggered
   * @param  {String} query
   * @private
   */


  PhotoRollScreenComponent.prototype._onSearch = function _onSearch(query) {
    if (!query.trim().length) {
      this.state.searchQuery = null;
      return this.switchToSection('back', false);
    }

    this.state.searchQuery = query;
    this.switchToSection('search');
  };

  /**
   * Gets called when the user clicks the webcam button. Switches to the
   * webcam screen
   * @private
   */


  PhotoRollScreenComponent.prototype._onWebcamClick = function _onWebcamClick() {
    this.props.app.switchToScreen('webcam');
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user has selected a new file
   * @param {Image} image
   */


  PhotoRollScreenComponent.prototype._onFileUpload = function _onFileUpload(image) {
    this.props.app.setImage(image);
  };

  // -------------------------------------------------------------------------- BACK BUTTON

  /**
   * Checks if the back button should be visible
   * @return {Boolean}
   * @private
   */


  PhotoRollScreenComponent.prototype._isBackButtonVisible = function _isBackButtonVisible() {
    return this.state.sectionsHistory.length !== 0 || this.props.app.hasPreviousScreen();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the content component for this screen
   * @return {ReactBEM.Element}
   * @private
   */


  PhotoRollScreenComponent.prototype._renderContent = function _renderContent() {
    switch (this.state.section) {
      case 'search':
        return _globals.ReactBEM.createElement(_searchResultsComponent2.default, {
          query: this.state.searchQuery,
          onPhotoClicked: this._onPhotoClicked,
          onSearchSuggestionClicked: this._onSearchSuggestionClicked });
      case 'library':
        return _globals.ReactBEM.createElement(_photoListComponent2.default, {
          library: this.state.library,
          onPhotoClicked: this._onPhotoClicked });
      case 'overview':
        return _globals.ReactBEM.createElement(_overviewComponent2.default, {
          onLibraryClicked: this._onLibraryClicked,
          onSearchSuggestionClicked: this._onSearchSuggestionClicked
        });
    }
  };

  /**
   * Renders this screen
   * @return {ReactBEM.Element}
   * @private
   */


  PhotoRollScreenComponent.prototype._renderScreen = function _renderScreen() {
    var contentComponent = this._renderContent();

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:photoRollScreen' },
      _globals.ReactBEM.createElement(_topBarComponent2.default, {
        onBackClicked: this._onBackClicked,
        onSearch: this._onSearch,
        searchQuery: this.state.searchQuery,
        onFileUpload: this._onFileUpload,
        onWebcamClick: this._onWebcamClick,
        backButton: this._isBackButtonVisible(),
        backButtonLabel: this._t('generic.back'),
        ref: 'topBarControls' }),
      contentComponent
    );
  };

  return PhotoRollScreenComponent;
}(_screenComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = PhotoRollScreenComponent;


PhotoRollScreenComponent.childContextTypes = {
  ui: _globals.React.PropTypes.object.isRequired,
  editor: _globals.React.PropTypes.object.isRequired,
  mediator: _globals.React.PropTypes.object.isRequired,
  options: _globals.React.PropTypes.object.isRequired,
  editorScreen: _globals.React.PropTypes.object.isRequired
};

PhotoRollScreenComponent.contextTypes = _screenComponent2.default.contextTypes;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _photoListComponent = __webpack_require__(66);

var _photoListComponent2 = _interopRequireDefault(_photoListComponent);

var _noSearchResultsComponent = __webpack_require__(162);

var _noSearchResultsComponent2 = _interopRequireDefault(_noSearchResultsComponent);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var SearchResultsComponent = function (_PhotoListComponent) {
  (0, _inherits3.default)(SearchResultsComponent, _PhotoListComponent);

  function SearchResultsComponent() {
    (0, _classCallCheck3.default)(this, SearchResultsComponent);
    return (0, _possibleConstructorReturn3.default)(this, _PhotoListComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component receives new props
   * @param  {Object} props
   */
  SearchResultsComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.query !== this.props.query) {
      this._loadPhotos(props.query);
    }
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Returns the headline for this view
   * @return {String}
   * @private
   */


  SearchResultsComponent.prototype._getHeadline = function _getHeadline() {
    return this._t('photoRoll.search.results.headline', {
      query: this.props.query
    });
  };

  /**
   * Loads the photos
   * @param {String} query
   * @private
   */


  SearchResultsComponent.prototype._loadPhotos = function _loadPhotos() {
    var _this2 = this;

    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.query;

    this._totalPhotosHeight = 0;
    var modal = _modalManager2.default.instance.displayProgress(this._t('loading.loading'));
    var PhotoRollProvider = this.context.options.photoRoll.provider;
    var provider = new PhotoRollProvider();

    provider.searchPhotos(query).then(function (photos) {
      return _this2._preloadPhotos(photos, modal);
    }).then(function (photos) {
      _this2.setState({ photos: photos, loading: false });
      modal.close();
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the 'no results found' screen
   * @return {ReactBEM.Element}
   * @private
   */


  SearchResultsComponent.prototype._renderNotFound = function _renderNotFound() {
    return _globals.ReactBEM.createElement(_noSearchResultsComponent2.default, {
      query: this.props.query,
      onSearchSuggestionClicked: this.props.onSearchSuggestionClicked });
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  SearchResultsComponent.prototype.renderWithBEM = function renderWithBEM() {
    if (!this.state.loading) {
      if (this.state.photos.length === 0) {
        return this._renderNotFound();
      } else {
        return this._renderPhotos();
      }
    } else {
      return _globals.ReactBEM.createElement('div', null);
    }
  };

  return SearchResultsComponent;
}(_photoListComponent2.default);

exports.default = SearchResultsComponent;


SearchResultsComponent.contextTypes = _photoListComponent2.default.contextTypes;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBarButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(TopBarButtonComponent, _BaseComponent);

  function TopBarButtonComponent() {
    (0, _classCallCheck3.default)(this, TopBarButtonComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  TopBarButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:topBar' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:iconButton', onClick: this.props.onClick },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this.props.icon })
      )
    );
  };

  return TopBarButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = TopBarButtonComponent;


TopBarButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _topBarComponent = __webpack_require__(31);

var _topBarComponent2 = _interopRequireDefault(_topBarComponent);

var _topBarButtonComponent = __webpack_require__(166);

var _topBarButtonComponent2 = _interopRequireDefault(_topBarButtonComponent);

var _invisibleUploadComponent = __webpack_require__(40);

var _invisibleUploadComponent2 = _interopRequireDefault(_invisibleUploadComponent);

var _topBarSearchComponent = __webpack_require__(168);

var _topBarSearchComponent2 = _interopRequireDefault(_topBarSearchComponent);

var _backButtonComponent = __webpack_require__(175);

var _backButtonComponent2 = _interopRequireDefault(_backButtonComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var PhotoRollTopBarComponent = function (_TopBarComponent) {
  (0, _inherits3.default)(PhotoRollTopBarComponent, _TopBarComponent);

  function PhotoRollTopBarComponent() {
    (0, _classCallCheck3.default)(this, PhotoRollTopBarComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _TopBarComponent.call.apply(_TopBarComponent, [this].concat(args)));

    _this._bindAll('_onUploadButtonClicked', '_onWebcamButtonClicked', '_onBackClicked', '_onSearchValueChange', '_onNewFile');

    _this._onSearchValueChange = _globals.Utils.debounce(_this._onSearchValueChange, 250);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the back button
   * @private
   */


  PhotoRollTopBarComponent.prototype._onBackClicked = function _onBackClicked() {
    this.props.onBackClicked && this.props.onBackClicked();
  };

  /**
   * Gets called when the search value has changed (this method is debounced)
   * @param {String} value
   * @private
   */


  PhotoRollTopBarComponent.prototype._onSearchValueChange = function _onSearchValueChange(value) {
    this.props.onSearch && this.props.onSearch(value);
  };

  /**
   * Gets called when the user clicks the upload button
   * @private
   */


  PhotoRollTopBarComponent.prototype._onUploadButtonClicked = function _onUploadButtonClicked() {
    this.refs.upload.open();
  };

  /**
   * Gets called when the user clicks the webcam button
   * @private
   */


  PhotoRollTopBarComponent.prototype._onWebcamButtonClicked = function _onWebcamButtonClicked() {
    this.props.onWebcamClick && this.props.onWebcamClick();
  };

  /**
   * Gets called when a new file has been selected
   * @param  {File} file
   * @private
   */


  PhotoRollTopBarComponent.prototype._onNewFile = function _onNewFile(file) {
    this.props.onFileUpload && this.props.onFileUpload(file);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Checks if the webcam is available
   * @return {Boolean}
   * @private
   */


  PhotoRollTopBarComponent.prototype._isWebcamAvailable = function _isWebcamAvailable() {
    return !_globals.Utils.isMobile() && this.context.options.enableWebcam !== false;
  };

  /**
   * Renders the buttons on the right
   * @return {Array.<React.Component>}
   * @private
   */


  PhotoRollTopBarComponent.prototype._renderRightButtons = function _renderRightButtons() {
    var options = this.context.options;

    var buttons = [];

    if (options.enableUpload) {
      buttons.push(_globals.ReactBEM.createElement(_topBarButtonComponent2.default, {
        icon: this._getAssetPath('photo-roll/upload.png', true),
        onClick: this._onUploadButtonClicked
      }));
    }

    if (this._isWebcamAvailable()) {
      buttons.push(_globals.ReactBEM.createElement(_topBarButtonComponent2.default, {
        icon: this._getAssetPath('photo-roll/webcam.png', true),
        onClick: this._onWebcamButtonClicked
      }));
    }

    return buttons;
  };

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  PhotoRollTopBarComponent.prototype.renderWithBEM = function renderWithBEM() {
    var backButton = void 0;
    if (this.props.backButton) {
      backButton = _globals.ReactBEM.createElement(_backButtonComponent2.default, {
        label: this.props.backButtonLabel,
        onClick: this._onBackClicked });
    }
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:topBar e:row' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:cell' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:table' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:left' },
            backButton
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:fullWidth' },
            _globals.ReactBEM.createElement(_topBarSearchComponent2.default, {
              searchQuery: this.props.searchQuery,
              onChange: this._onSearchValueChange }),
            _globals.ReactBEM.createElement(_invisibleUploadComponent2.default, { onNewFile: this._onNewFile, ref: 'upload' })
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cell m:right' },
            this._renderRightButtons()
          )
        )
      )
    );
  };

  return PhotoRollTopBarComponent;
}(_topBarComponent2.default);

exports.default = PhotoRollTopBarComponent;


PhotoRollTopBarComponent.contextTypes = _topBarComponent2.default.contextTypes;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBarSearchComponent = function (_BaseComponent) {
  (0, _inherits3.default)(TopBarSearchComponent, _BaseComponent);

  function TopBarSearchComponent() {
    (0, _classCallCheck3.default)(this, TopBarSearchComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onFocus', '_onBlur', '_onChange', '_onBarClick');

    _this.state = {
      active: false,
      placeholder: _this._t('photoRoll.search.placeholder'),
      value: _this.props.searchQuery || ''
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component is about to receive new properties
   * @param  {Object} nextProps
   */


  TopBarSearchComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.searchQuery || this.state.value) {
      this.state.active = true;
    } else {
      this.state.active = false;
    }

    this.setState({
      value: nextProps.searchQuery || ''
    });
  };

  TopBarSearchComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    this.refs.input.value = this.state.value;
  };

  /**
   * Gets called when this component has been mounted
   */


  TopBarSearchComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _BaseComponent.prototype.componentDidMount.call(this);
    this._hiddenInputDummy = document.createElement('div');

    var styleObject = _globals.Utils.getStyleObject(this.refs.input);
    var overrideKeys = ['font', 'lineHeight', 'textAlign', 'textIndent', 'textTransform', 'textDecoration', 'textRendering', 'textShadow', 'textOverflow', 'wordSpacing', 'letterSpacing', 'whiteSpace'];
    overrideKeys.forEach(function (key) {
      _this2._hiddenInputDummy.style[key] = styleObject[key];
    });

    this._hiddenInputDummy.style.position = 'absolute';
    this._hiddenInputDummy.style.top = '-9999px';
    this._hiddenInputDummy.style.left = '-9999px';

    this.refs.root.appendChild(this._hiddenInputDummy);

    this._updateInputWidth();
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Updates the input width to fit the text width
   * @private
   */


  TopBarSearchComponent.prototype._updateInputWidth = function _updateInputWidth() {
    var _this3 = this;

    this._hiddenInputDummy.innerHTML = this.state.value || this.state.placeholder;
    setTimeout(function () {
      _this3.setState({
        inputWidth: _this3._hiddenInputDummy.offsetWidth + 5
      });
    }, 0);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the search bar has been clicked
   * @private
   */


  TopBarSearchComponent.prototype._onBarClick = function _onBarClick() {
    this.refs.input.focus();
  };

  /**
   * Gets called when the input fields is focused
   * @private
   */


  TopBarSearchComponent.prototype._onFocus = function _onFocus() {
    this.setState({ active: true });
  };

  /**
   * Gets called when the input field loses focus
   * @private
   */


  TopBarSearchComponent.prototype._onBlur = function _onBlur() {
    if (this.state.value === '' && !this.props.searchQuery) {
      this.setState({ active: false });
    }
  };

  /**
   * Gets called when the input value has changed
   * @param  {Event} e
   * @private
   */


  TopBarSearchComponent.prototype._onChange = function _onChange(e) {
    this.state.value = e.target.value;
    this.forceUpdate();

    this.props.onChange && this.props.onChange(this.state.value);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  TopBarSearchComponent.prototype.renderWithBEM = function renderWithBEM() {
    var searchBarBEM = '$e:searchBar';
    var iconPath = 'photo-roll/search-light.png';
    if (this.state.active) {
      searchBarBEM += ' m:active';
      iconPath = 'photo-roll/search-dark.png';
    }
    iconPath = this._getAssetPath(iconPath, true);

    var inputStyle = {
      width: this.state.inputWidth + 'px'
    };

    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:photoRollScreen' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: searchBarBEM, ref: 'root', onClick: this._onBarClick },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:content' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: '$e:icon' },
            _globals.ReactBEM.createElement('img', { src: iconPath, bem: 'e:image' })
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:inputContainer' },
            _globals.ReactBEM.createElement('input', {
              bem: 'e:input',
              ref: 'input',
              placeholder: this.state.placeholder,
              onBlur: this._onBlur,
              onFocus: this._onFocus,
              onChange: this._onChange,
              defaultValue: this.state.value,
              style: inputStyle })
          )
        )
      )
    );
  };

  return TopBarSearchComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = TopBarSearchComponent;


TopBarSearchComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _rowComponent = __webpack_require__(39);

var _rowComponent2 = _interopRequireDefault(_rowComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var PhotoRollComponent = function (_RowComponent) {
  (0, _inherits3.default)(PhotoRollComponent, _RowComponent);

  function PhotoRollComponent() {
    (0, _classCallCheck3.default)(this, PhotoRollComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _RowComponent.call.apply(_RowComponent, [this].concat(args)));

    _this._needsStyleFixes = true;
    _this._modifier = 'photoRoll';
    return _this;
  }

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   */


  PhotoRollComponent.prototype.fixStyles = function fixStyles() {
    if (_globals.Utils.Browser.isIElte(11)) {
      var _refs = this.refs,
          cell = _refs.cell,
          overlay = _refs.overlay;

      var cellHeight = cell.offsetHeight;
      overlay.style.height = cellHeight + 'px';
    }
  };

  /**
   * Renders this row's content
   * @return {ReactBEM.Element}
   * @private
   */


  PhotoRollComponent.prototype._renderContent = function _renderContent() {
    var style = {
      backgroundImage: 'url(' + this._getAssetPath('splash/photo-roll.png', true, true) + ')'
    };

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:contentWrapper' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:contentRow' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:contentCell', onClick: this._onClick, style: style, ref: 'cell' },
          _globals.ReactBEM.createElement('div', { bem: 'e:overlay', ref: 'overlay' }),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:headline' },
            this._t('splash.photoRoll.headline')
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:description' },
            this._t('splash.photoRoll.description')
          )
        )
      )
    );
  };

  return PhotoRollComponent;
}(_rowComponent2.default);

exports.default = PhotoRollComponent;


PhotoRollComponent.contextTypes = _rowComponent2.default.contextTypes;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _screenComponent = __webpack_require__(21);

var _screenComponent2 = _interopRequireDefault(_screenComponent);

var _uploadComponent = __webpack_require__(171);

var _uploadComponent2 = _interopRequireDefault(_uploadComponent);

var _webcamComponent = __webpack_require__(172);

var _webcamComponent2 = _interopRequireDefault(_webcamComponent);

var _photoRollComponent = __webpack_require__(169);

var _photoRollComponent2 = _interopRequireDefault(_photoRollComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SplashScreenComponent = function (_ScreenComponent) {
  (0, _inherits3.default)(SplashScreenComponent, _ScreenComponent);

  function SplashScreenComponent() {
    (0, _classCallCheck3.default)(this, SplashScreenComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ScreenComponent.call(this));

    _this._bindAll('_onWebcamClick', '_onPhotoRollClick', '_onImage');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the PhotoRollComponent has received a click
   * @private
   */


  SplashScreenComponent.prototype._onPhotoRollClick = function _onPhotoRollClick() {
    this.props.app.switchToScreen('photoRoll');
  };

  /**
   * Gets called when the WebcamComponent has received a click
   * @private
   */


  SplashScreenComponent.prototype._onWebcamClick = function _onWebcamClick() {
    this.props.app.switchToScreen('webcam');
  };

  /**
   * Gets called when the UploadComponent has received an image file
   * @param  {image} image
   * @private
   */


  SplashScreenComponent.prototype._onImage = function _onImage(image) {
    this.props.app.setImage(image);
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Checks if the webcam is available for the given device
   * @return {Boolean}
   * @private
   */


  SplashScreenComponent.prototype._isWebcamAvailable = function _isWebcamAvailable() {
    return !_globals.Utils.isMobile() && this.context.options.enableWebcam !== false;
  };

  /**
   * Checks if the photo roll is available
   * @return {Boolean}
   * @private
   */


  SplashScreenComponent.prototype._isPhotoRollAvailable = function _isPhotoRollAvailable() {
    return !!this.context.options.photoRoll.provider;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this screen
   * @return {ReactBEM.Element}
   * @private
   */


  SplashScreenComponent.prototype._renderScreen = function _renderScreen() {
    var items = [];
    var totalRows = 0;

    var uploadAvailable = this.context.options.enableUpload;
    if (uploadAvailable) totalRows++;

    var webcamAvailable = this._isWebcamAvailable();
    if (webcamAvailable) totalRows++;

    var photoRollAvailable = this._isPhotoRollAvailable();
    if (photoRollAvailable) totalRows++;

    if (uploadAvailable) {
      items.push(_globals.ReactBEM.createElement(_uploadComponent2.default, {
        onImage: this._onImage,
        totalRows: totalRows }));
    }

    if (webcamAvailable) {
      items.push(_globals.ReactBEM.createElement(_webcamComponent2.default, {
        onClick: this._onWebcamClick,
        totalRows: totalRows }));
    }

    if (photoRollAvailable) {
      items.push(_globals.ReactBEM.createElement(_photoRollComponent2.default, {
        onClick: this._onPhotoRollClick,
        totalRows: totalRows }));
    }

    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:splashScreen' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:container' },
        items
      )
    );
  };

  return SplashScreenComponent;
}(_screenComponent2.default); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


exports.default = SplashScreenComponent;


SplashScreenComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _rowComponent = __webpack_require__(39);

var _rowComponent2 = _interopRequireDefault(_rowComponent);

var _buttonComponent = __webpack_require__(98);

var _buttonComponent2 = _interopRequireDefault(_buttonComponent);

var _invisibleUploadComponent = __webpack_require__(40);

var _invisibleUploadComponent2 = _interopRequireDefault(_invisibleUploadComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var UploadComponent = function (_RowComponent) {
  (0, _inherits3.default)(UploadComponent, _RowComponent);

  function UploadComponent() {
    (0, _classCallCheck3.default)(this, UploadComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, _RowComponent.call(this));

    _this._modifier = 'upload';

    _this._bindAll('_onImage', '_onDragEnter', '_onDragOver', '_onDragLeave', '_onDrop');

    _this._dragCounter = 0;
    _this.state = { dragAreaHovered: false };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the cell emits a `dragEnter` event. Highlights
   * the cell
   * @param {Event} e
   * @private
   */


  UploadComponent.prototype._onDragEnter = function _onDragEnter(e) {
    e.preventDefault();

    this._dragCounter++;
    this.setState({ dragAreaHovered: true });
  };

  /**
   * Gets called when the cell emits a `dragOver` event. We need to
   * override the default behavior to get a drop event.
   * @param  {Event} e
   * @private
   */


  UploadComponent.prototype._onDragOver = function _onDragOver(e) {
    e.preventDefault();
  };

  /**
   * Gets called when the cell emits a `dragLeave` event
   * @param  {Event} e
   * @private
   */


  UploadComponent.prototype._onDragLeave = function _onDragLeave(e) {
    e.preventDefault();

    this._dragCounter--;
    if (this._dragCounter === 0) {
      this.setState({ dragAreaHovered: false });
    }
  };

  /**
   * Gets called when the cell emits a `drop` Event
   * @param  {Event} e
   * @private
   */


  UploadComponent.prototype._onDrop = function _onDrop(e) {
    var _this2 = this;

    e.stopPropagation();
    e.preventDefault();
    e = e.nativeEvent;
    e.returnValue = false;

    this.setState({ dragAreaHovered: false }, function () {
      if (!e.dataTransfer) return;

      _this2._handleFile(e.dataTransfer.files[0]);
    });
  };

  /**
   * Gets called when the user clicks the button
   * @param  {Event} e
   * @private
   */


  UploadComponent.prototype._onClick = function _onClick(e) {
    this.refs.upload.open();
  };

  /**
   * Creates an image from the given file and passes it to the UI
   * @param  {File} file
   * @private
   */


  UploadComponent.prototype._handleFile = function _handleFile(file) {
    var _this3 = this;

    var reader = new window.FileReader();
    reader.onload = function () {
      return function (e) {
        var data = e.target.result;
        var image = new window.Image();

        image.addEventListener('load', function () {
          _this3._onImage(image);
        });

        image.src = data;
      };
    }(file);
    reader.readAsDataURL(file);
  };

  /**
   * Gets called when the image has been changed
   * @param  {Image} image
   * @private
   */


  UploadComponent.prototype._onImage = function _onImage(image) {
    this.props.onImage && this.props.onImage(image);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this row's content
   * @return {ReactBEM.Element}
   * @private
   */


  UploadComponent.prototype._renderContent = function _renderContent() {
    var cellProps = {
      onDragEnter: this._onDragEnter,
      onDragOver: this._onDragOver,
      onDragLeave: this._onDragLeave,
      onDrop: this._onDrop
    };

    if (this.state.dragAreaHovered) {
      cellProps.className = 'is-hovered';
    }

    var contentCellBEM = 'e:contentCell';
    // @TODO We need some class that implements webcamEnabled() and photoRollEnabled()
    if (this.context.options.enableWebcam !== false || this.context.options.photoRoll.provider !== null) {
      contentCellBEM += ' m:withBorder';
    }

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:contentWrapper' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:contentRow' },
        _globals.ReactBEM.createElement(
          'div',
          (0, _extends3.default)({ bem: contentCellBEM, onClick: this._onClick }, cellProps),
          _globals.ReactBEM.createElement(_invisibleUploadComponent2.default, { ref: 'upload', onNewFile: this._onImage }),
          _globals.ReactBEM.createElement(
            _buttonComponent2.default,
            { bem: 'e:button', uppercase: true },
            this._t('splash.upload.button')
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:description' },
            this._t('splash.upload.description')
          )
        )
      )
    );
  };

  return UploadComponent;
}(_rowComponent2.default);

exports.default = UploadComponent;


UploadComponent.propTypes = {
  onImage: _globals.React.PropTypes.func.isRequired
};

UploadComponent.contextTypes = _rowComponent2.default.contextTypes;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _rowComponent = __webpack_require__(39);

var _rowComponent2 = _interopRequireDefault(_rowComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var WebcamComponent = function (_RowComponent) {
  (0, _inherits3.default)(WebcamComponent, _RowComponent);

  function WebcamComponent() {
    (0, _classCallCheck3.default)(this, WebcamComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _RowComponent.call.apply(_RowComponent, [this].concat(args)));

    _this._needsStyleFixes = true;
    _this._modifier = 'webcam';
    return _this;
  }

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   */


  WebcamComponent.prototype.fixStyles = function fixStyles() {
    if (_globals.Utils.Browser.isIElte(11)) {
      var _refs = this.refs,
          cell = _refs.cell,
          overlay = _refs.overlay;

      var cellHeight = cell.offsetHeight;
      overlay.style.height = cellHeight + 'px';
    }
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this row's content
   * @return {ReactBEM.Element}
   * @private
   */


  WebcamComponent.prototype._renderContent = function _renderContent() {
    var style = {
      backgroundImage: 'url(' + this._getAssetPath('splash/webcam.png', true, true) + ')'
    };

    return _globals.ReactBEM.createElement(
      'div',
      { bem: 'e:contentWrapper' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: 'e:contentRow' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:contentCell', onClick: this._onClick, style: style, ref: 'cell' },
          _globals.ReactBEM.createElement('div', { bem: 'e:overlay', ref: 'overlay' }),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:headline' },
            this._t('splash.webcam.headline')
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:description' },
            this._t('splash.webcam.description')
          )
        )
      )
    );
  };

  return WebcamComponent;
}(_rowComponent2.default);

exports.default = WebcamComponent;


WebcamComponent.contextTypes = _rowComponent2.default.contextTypes;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var WebcamComponent = function (_BaseComponent) {
  (0, _inherits3.default)(WebcamComponent, _BaseComponent);

  function WebcamComponent() {
    (0, _classCallCheck3.default)(this, WebcamComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseComponent.call(this));

    _this._bindAll('_onWebcamReady');

    _this.state = { webcamReady: false };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Checks whether this component needs an update
   * @param {Object} nextProps
   * @param {Object} nextState
   */


  WebcamComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // This component never updates
    return false;
  };

  /**
   * Gets called when the component is about to unmount. Stops the video
   * stream and kills the video
   */


  WebcamComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _BaseComponent.prototype.componentWillUnmount.call(this);

    var video = this.refs.video;

    if (this._stream) {
      var track = this._stream.getTracks()[0];
      track && track.stop();
      this._stream.stop && this._stream.stop();
    }
    video.pause();
  };

  /**
   * Gets called after the component has been mounted
   */


  WebcamComponent.prototype.componentDidMount = function componentDidMount() {
    this._resizeVideo();
    this._initVideoStream();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the webcam is ready to serve a video
   * @private
   */


  WebcamComponent.prototype._onWebcamReady = function _onWebcamReady() {
    this.props.onReady && this.props.onReady();
    this.setState({ webcamReady: true });
  };

  /**
   * Public method that makes a photo from the current video stream
   * @return {Promise}
   */


  WebcamComponent.prototype.makePhoto = function makePhoto() {
    if (!this.state.webcamReady) {
      return _globals.Promise.reject(new Error('UserMedia stream not ready'));
    }

    var video = this.refs.video;


    return new _globals.Promise(function (resolve, reject) {
      var canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      var context = canvas.getContext('2d');
      context.drawImage(video, 0, 0);

      var image = new window.Image();
      image.addEventListener('load', function () {
        resolve(image);
      });
      image.src = canvas.toDataURL('image/png');
    });
  };

  /**
   * Resizes the video to fit the container
   * @private
   */


  WebcamComponent.prototype._resizeVideo = function _resizeVideo() {
    var _refs = this.refs,
        video = _refs.video,
        container = _refs.container;

    var innerDimensions = _globals.Utils.getInnerDimensionsForElement(container);

    video.width = innerDimensions.x;
    video.height = innerDimensions.y;
  };

  /**
   * Initializes the video stream
   * @private
   */


  WebcamComponent.prototype._initVideoStream = function _initVideoStream() {
    var _this2 = this;

    var video = this.refs.video;

    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (!getUserMedia) {
      var errorModal = _modalManager2.default.instance.displayError(this._t('errors.webcamNotSupported.title'), this._t('errors.webcamNotSupported.text'));
      errorModal.on('close', function () {
        return _this2.props.onBack();
      });
      return;
    }

    getUserMedia.call(navigator, { video: true }, function (stream) {
      _this2._stream = stream;
      video.onloadedmetadata = _this2._onWebcamReady;
      video.src = window.URL.createObjectURL(stream);
    }, function (err) {
      console.error && console.error(err);

      var errorModal = _modalManager2.default.instance.displayError(_this2._t('errors.webcamUnavailable.title'), _this2._t('errors.webcamUnavailable.text', { error: err.name }), true);

      errorModal.on('close', function () {
        return _this2.props.onBack();
      });
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */


  WebcamComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:webcam', ref: 'container' },
      _globals.ReactBEM.createElement('video', { bem: 'e:video', ref: 'video', autoPlay: true })
    );
  };

  return WebcamComponent;
}(_globals.BaseComponent);

exports.default = WebcamComponent;


WebcamComponent.propTypes = {
  onReady: _globals.React.PropTypes.func
};

WebcamComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _screenComponent = __webpack_require__(21);

var _screenComponent2 = _interopRequireDefault(_screenComponent);

var _topBarComponent = __webpack_require__(31);

var _topBarComponent2 = _interopRequireDefault(_topBarComponent);

var _webcamComponent = __webpack_require__(173);

var _webcamComponent2 = _interopRequireDefault(_webcamComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */
var WebcamScreenComponent = function (_ScreenComponent) {
  (0, _inherits3.default)(WebcamScreenComponent, _ScreenComponent);

  function WebcamScreenComponent() {
    (0, _classCallCheck3.default)(this, WebcamScreenComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ScreenComponent.call(this));

    _this._bindAll('_onCancel', '_onWebcamReady', '_onShutterClicked');
    _this.state = { webcamReady: false };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the webcam is ready
   * @private
   */


  WebcamScreenComponent.prototype._onWebcamReady = function _onWebcamReady() {
    this.setState({ webcamReady: true });
  };

  /**
   * Gets called when the user clicks the cancel button in the top bar
   * @private
   */


  WebcamScreenComponent.prototype._onCancel = function _onCancel() {
    this.props.app.switchToScreen('back');
  };

  /**
   * Gets called when the shutter button has been clicked
   * @private
   */


  WebcamScreenComponent.prototype._onShutterClicked = function _onShutterClicked() {
    var _this2 = this;

    var webcam = this.refs.webcam;
    webcam.makePhoto().then(function (image) {
      _this2.props.app.setImage(image);
    }).catch(function (e) {
      console.error && console.error(e);
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this screen
   * @return {ReactBEM.Element}
   * @private
   */


  WebcamScreenComponent.prototype._renderScreen = function _renderScreen() {
    return _globals.ReactBEM.createElement(
      'div',
      { bem: '$b:webcamScreen' },
      _globals.ReactBEM.createElement(
        _topBarComponent2.default,
        {
          label: this._t('webcam.headline') },
        _globals.ReactBEM.createElement(
          'bem',
          { specifier: '$b:topBar' },
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:cancelButton', onClick: this._onCancel },
            this._t('generic.cancel')
          ),
          _globals.ReactBEM.createElement(
            'div',
            { bem: 'e:label' },
            this._t('webcam.headline')
          )
        )
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:canvas e:container e:row' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:container e:cell' },
          _globals.ReactBEM.createElement(_webcamComponent2.default, {
            ref: 'webcam',
            onReady: this._onWebcamReady,
            onBack: this._onCancel })
        )
      ),
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$b:controls $e:container e:row' },
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:cell' },
          _globals.ReactBEM.createElement(
            'bem',
            { specifier: 'b:webcamScreen' },
            _globals.ReactBEM.createElement(
              'div',
              {
                bem: '$e:shutterButton',
                onClick: this._onShutterClicked,
                className: this.state.webcamReady ? 'is-active' : false },
              _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('controls/webcam/shutter.png', true) })
            )
          )
        )
      )
    );
  };

  return WebcamScreenComponent;
}(_screenComponent2.default);

exports.default = WebcamScreenComponent;


WebcamScreenComponent.contextTypes = _screenComponent2.default.contextTypes;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBarBackButtonComponent = function (_BaseComponent) {
  (0, _inherits3.default)(TopBarBackButtonComponent, _BaseComponent);

  function TopBarBackButtonComponent() {
    (0, _classCallCheck3.default)(this, TopBarBackButtonComponent);
    return (0, _possibleConstructorReturn3.default)(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  TopBarBackButtonComponent.prototype.renderWithBEM = function renderWithBEM() {
    return _globals.ReactBEM.createElement(
      'bem',
      { specifier: '$b:topBar' },
      _globals.ReactBEM.createElement(
        'div',
        { bem: '$e:backButton', onClick: this.props.onClick },
        _globals.ReactBEM.createElement('img', { bem: 'e:icon', src: this._getAssetPath('top-bar/back.png', true) }),
        _globals.ReactBEM.createElement(
          'div',
          { bem: 'e:label' },
          this.props.label
        )
      )
    );
  };

  return TopBarBackButtonComponent;
}(_globals.BaseComponent); /** @jsx ReactBEM.createElement **/
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = TopBarBackButtonComponent;


TopBarBackButtonComponent.contextTypes = _globals.BaseComponent.contextTypes;

/***/ },
/* 176 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = {
  EVENTS: {
    RENDER: 'render',
    EXPORT: 'export',
    CLOSE: 'close',
    ZOOM_DONE: 'zoom:done',
    OPERATION_CREATED: 'operation:created',
    OPERATION_UPDATED: 'operation:updated',
    OPERATION_REMOVED: 'operation:removed',
    FEATURES_DISABLED: 'editor:features:disabled',
    FEATURES_ENABLED: 'editor:features:enabled',
    FEATURES_UPDATED: 'editor:features:updated',
    COLORPICKER_OPEN: 'colorpicker:open',
    HISTORY_UPDATED: 'history:update',
    HISTORY_UNDO: 'history:undo',
    WINDOW_RESIZE: 'window:resize',
    CONTROLS_SWITCHED: 'controls:switched'
  },
  DEFAULTS: {
    TEXT: 'Double-click to edit',
    CROP_RATIOS: [{ name: 'custom', ratio: '*', selected: true }, { name: 'square', ratio: 1 }, { name: '4-3', ratio: 1.33 }, { name: '16-9', ratio: 1.77 }],
    FONTS: [{ name: 'helvetica', fontFamily: 'Helvetica', fontWeight: 'normal' }, { name: 'verdana', fontFamily: 'Verdana', fontWeight: 'normal' }, { name: 'timesnewroman', fontFamily: 'Times New Roman', fontWeight: 'normal' }, { name: 'impact', fontFamily: 'Impact', fontWeight: 'normal', default: true }],
    STICKER_CATEGORIES: [{
      'name': 'glasses',
      'label': 'Glasses',
      'stickers': [{
        'name': 'glasses-nerd',
        'label': 'Nerd glasses',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/glasses-nerd.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/glasses-nerd.png',
            'width': 221,
            'height': 91
          }
        }
      }, {
        'name': 'glasses-normal',
        'label': 'Normal glasses',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/glasses-normal.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/glasses-normal.png',
            'width': 249,
            'height': 87
          }
        }
      }, {
        'name': 'glasses-shutter-green',
        'label': 'Green shutter glasses',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/glasses-shutter-green.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/glasses-shutter-green.png',
            'width': 235,
            'height': 89
          }
        }
      }, {
        'name': 'glasses-shutter-yellow',
        'label': 'Yellow shutter glasses',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/glasses-shutter-yellow.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/glasses-shutter-yellow.png',
            'width': 236,
            'height': 89
          }
        }
      }, {
        'name': 'glasses-sun',
        'label': 'Sun glasses',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/glasses-sun.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/glasses-sun.png',
            'width': 250,
            'height': 87
          }
        }
      }]
    }, {
      'name': 'hats',
      'label': 'Hats',
      'stickers': [{
        'name': 'hat-cap',
        'label': 'Cap',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/hat-cap.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/hat-cap.png',
            'width': 237,
            'height': 189
          }
        }
      }, {
        'name': 'hat-cylinder',
        'label': 'Cylinder',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/hat-cylinder.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/hat-cylinder.png',
            'width': 225,
            'height': 176
          }
        }
      }, {
        'name': 'hat-party',
        'label': 'Party hat',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/hat-party.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/hat-party.png',
            'width': 140,
            'height': 226
          }
        }
      }, {
        'name': 'hat-sheriff',
        'label': 'Sheriff hat',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/hat-sheriff.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/hat-sheriff.png',
            'width': 251,
            'height': 129
          }
        }
      }]
    }, {
      'name': 'beards',
      'label': 'Beards',
      'stickers': [{
        'name': 'mustache-long',
        'label': 'Long mustache',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/mustache-long.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/mustache-long.png',
            'width': 199,
            'height': 182
          }
        }
      }, {
        'name': 'mustache1',
        'label': 'Brown mustache',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/mustache1.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/mustache1.png',
            'width': 238,
            'height': 106
          }
        }
      }, {
        'name': 'mustache2',
        'label': 'Black mustache',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/mustache2.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/mustache2.png',
            'width': 250,
            'height': 82
          }
        }
      }, {
        'name': 'mustache3',
        'label': 'Brown mustache',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/mustache3.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/mustache3.png',
            'width': 250,
            'height': 94
          }
        }
      }]
    }, {
      'name': 'misc',
      'label': 'Misc',
      'stickers': [{
        'name': 'heart',
        'label': 'Heart',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/heart.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/heart.png',
            'width': 185,
            'height': 174
          }
        }
      }, {
        'name': 'pipe',
        'label': 'Pipe',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/pipe.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/pipe.png',
            'width': 240,
            'height': 112
          }
        }
      }, {
        'name': 'snowflake',
        'label': 'Snow flake',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/snowflake.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/snowflake.png',
            'width': 204,
            'height': 171
          }
        }
      }, {
        'name': 'star',
        'label': 'Star',
        'images': {
          'mediaThumb': {
            'uri': 'stickers/thumb/star.png',
            'width': 100,
            'height': 100
          },
          'mediaBase': {
            'uri': 'stickers/base/star.png',
            'width': 201,
            'height': 191
          }
        }
      }]
    }]
  }
};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _controls = __webpack_require__(60);

var Controls = _interopRequireWildcard(_controls);

var _globals = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var EditorControls = function () {
  function EditorControls(editor, sdk, mediator) {
    (0, _classCallCheck3.default)(this, EditorControls);

    this._editor = editor;
    this._sdk = sdk;
    this._mediator = mediator;

    this._options = this._editor.getOptions();
    this._available = _globals.SDKUtils.extend({}, Controls, this._options.extensions.controls);
  }

  /**
   * Checks if the control with the given identifier is selectable
   * @param  {String}  identifier
   * @return {Boolean}
   */


  EditorControls.prototype.isEnabled = function isEnabled(identifier) {
    var control = this.get(identifier);

    if (!control) {
      _globals.Log.info('EditorControls#isEnabled: Unknown control: ' + identifier);
      return false;
    }

    return control.isAvailable && control.isAvailable(this._editor);
  };

  /**
   * Returns the control with the given identifier
   * @param  {String} identifier
   * @return {Control}
   */


  EditorControls.prototype.get = function get(identifier) {
    return this._available[identifier];
  };

  /**
   * Returns the available controls
   * @return {Object}
   */


  EditorControls.prototype.getAvailable = function getAvailable() {
    return this._available;
  };

  return EditorControls;
}();

exports.default = EditorControls;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorFeatures = function () {
  function EditorFeatures(editor, sdk, mediator) {
    (0, _classCallCheck3.default)(this, EditorFeatures);

    this._editor = editor;
    this._sdk = sdk;
    this._mediator = mediator;

    this._options = this._editor.getOptions();

    this._features = {
      drag: this._options.editor.enableDrag,
      zoom: this._options.editor.enableZoom
    };
  }

  /**
   * Checks if the feature with the given identifier is enabled
   * @param  {String}  identifier
   * @return {Boolean}
   */


  EditorFeatures.prototype.isEnabled = function isEnabled(identifier) {
    var capitalizedIdentifier = identifier.charAt(0).toUpperCase() + identifier.slice(1);
    var optionEnabled = this._options.editor['enable' + capitalizedIdentifier];
    return this._features[identifier] && optionEnabled;
  };

  /**
   * Enables the features with the given identifiers
   * @param  {String[]} identifiers
   */


  EditorFeatures.prototype.enable = function enable() {
    var _this = this;

    for (var _len = arguments.length, identifiers = Array(_len), _key = 0; _key < _len; _key++) {
      identifiers[_key] = arguments[_key];
    }

    identifiers.forEach(function (identifier) {
      _this._features[identifier] = true;
    });
    this._mediator.emit(_globals.Constants.EVENTS.FEATURES_ENABLED, identifiers);
    this._mediator.emit(_globals.Constants.EVENTS.FEATURES_UPDATED, identifiers);
  };

  /**
   * Disables the features with the given identifiers
   * @param  {String[]} identifiers
   */


  EditorFeatures.prototype.disable = function disable() {
    var _this2 = this;

    for (var _len2 = arguments.length, identifiers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      identifiers[_key2] = arguments[_key2];
    }

    identifiers.forEach(function (identifier) {
      _this2._features[identifier] = false;
    });
    this._mediator.emit(_globals.Constants.EVENTS.FEATURES_DISABLED, identifiers);
    this._mediator.emit(_globals.Constants.EVENTS.FEATURES_UPDATED, identifiers);
  };

  return EditorFeatures;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = EditorFeatures;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorHistory = function (_EventEmitter) {
  (0, _inherits3.default)(EditorHistory, _EventEmitter);

  function EditorHistory(editor, sdk, mediator) {
    (0, _classCallCheck3.default)(this, EditorHistory);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._editor = editor;
    _this._sdk = sdk;
    _this._mediator = mediator;

    _this._history = [];
    return _this;
  }

  /**
   * Checks if there are any history items available
   * @return {Boolean}
   */


  EditorHistory.prototype.isAvailable = function isAvailable() {
    return this._history.length !== 0;
  };

  /**
   * Adds the given data to the history
   * @param {PhotoEditorSDK.Operation} operation
   * @param {Object} options
   * @param {Boolean} existent
   * @param {Function} [undo]
   * @return {Object}
   */


  EditorHistory.prototype.add = function add(operation, options, existent) {
    var _this2 = this;

    var undo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var historyItem = void 0;
    if (operation instanceof Array) {
      var items = operation;
      this._history.push(items);
      items.forEach(function (item) {
        _this2._mediator.emit(_globals.Constants.EVENTS.HISTORY_UPDATED, item.operation);
      });

      historyItem = items;
    } else {
      historyItem = {
        operation: operation, options: options, existent: existent, undo: undo
      };
      this._history.push(historyItem);
      this._mediator.emit(_globals.Constants.EVENTS.HISTORY_UPDATED, operation);
    }
    return historyItem;
  };

  /**
   * Reverts the last change
   */


  EditorHistory.prototype.undo = function undo() {
    var _this3 = this;

    var operations = this._editor.operations;

    var lastItem = this._history.pop();
    if (lastItem) {
      var items = [].concat(lastItem);

      items.forEach(function (_ref) {
        var operation = _ref.operation,
            existent = _ref.existent,
            options = _ref.options,
            undo = _ref.undo;

        if (!existent) {
          operations.remove(operation);
        } else {
          operation = operations.getOrCreate(operation.constructor.identifier);
          operation.set(options);
          _this3._mediator.emit(_globals.Constants.EVENTS.OPERATION_UPDATED, operation);
        }

        if (typeof undo === 'function') {
          undo(operation, options);
        }

        _this3._mediator.emit(_globals.Constants.EVENTS.HISTORY_UPDATED, operation);
        _this3._mediator.emit(_globals.Constants.EVENTS.HISTORY_UNDO, operation);
      });

      this.emit('undo');
    }
  };

  /**
   * Resets the history
   */


  EditorHistory.prototype.reset = function reset() {
    this._history = [];
  };

  return EditorHistory;
}(_globals.EventEmitter); /*
                           * This file is part of PhotoEditorSDK.
                           *
                           * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                           * All rights reserved.
                           *
                           * Redistribution and use in source and binary forms, without
                           * modification, are permitted provided that the following license agreement
                           * is approved and a legal/financial contract was signed by the user.
                           * The license agreement can be found under following link:
                           *
                           * https://www.photoeditorsdk.com/LICENSE.txt
                           */

exports.default = EditorHistory;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorOperations = function () {
  function EditorOperations(editor, sdk, mediator) {
    (0, _classCallCheck3.default)(this, EditorOperations);

    this._editor = editor;
    this._sdk = sdk;
    this._mediator = mediator;

    this._available = this._sdk.getOperations();
    this._map = {};
    this._stack = this._sdk.getOperationsStack();
    this._preferredOrder = this._editor.getOptions().editor.operationsOrder;

    this._fixStack();
  }

  /**
   * Checks whether an operation with the given identifier exists
   * @param {String} identifier
   * @return {Boolean}
   */


  EditorOperations.prototype.exists = function exists(identifier) {
    return !!this._map[identifier];
  };

  /**
   * Adds the given operation to the stack
   * @param {PhotoEditorSDK.Operation} operation
   */


  EditorOperations.prototype.add = function add(operation) {
    var _this = this;

    var identifier = operation.constructor.identifier;
    operation.on('updated', function () {
      _this._mediator.emit(_globals.Constants.EVENTS.OPERATION_UPDATED, operation);
    });
    var index = this._preferredOrder.indexOf(identifier);
    if (index === -1) {
      throw new Error('EditorOperations#add: `' + identifier + '` does not appear in `preferredOperationOrder`');
    }
    this._stack.set(index, operation);
    this._map[identifier] = operation;

    this._mediator.emit(_globals.Constants.EVENTS.OPERATION_CREATED, operation);
  };

  /**
   * Removes the given operation from the stack
   * @param  {PhotoEditorSDK.Operation} operation
   */


  EditorOperations.prototype.remove = function remove(operation) {
    var identifier = operation.constructor.identifier;
    var stack = this._stack.getStack();

    // Remove operation from map
    if (this._map[identifier] === operation) {
      delete this._map[identifier];
    }

    // Remove operation from stack
    var index = stack.indexOf(operation);
    if (index !== -1) {
      this._stack.removeAt(index);

      // Set all following operations to dirty, since they might
      // have cached stuff drawn by the removed operation
      for (var i = index + 1; i < stack.length; i++) {
        var _operation = stack[i];
        if (!_operation) continue;
        _operation.setDirty(true);
      }

      this._mediator.emit(_globals.Constants.EVENTS.OPERATION_REMOVED, operation);
    }
  };

  /**
   * Returns the operation with the given identifier
   * @param  {String} identifier
   * @return {PhotoEditorSDK.Operation}
   */


  EditorOperations.prototype.get = function get(identifier) {
    return this._map[identifier];
  };

  /**
   * If the operation with the given identifier already exists, it returns
   * the existing operation. Otherwise, it creates and returns a new one.
   * @param  {String} identifier
   * @param  {Object} options
   * @return {PhotoEditorSDK.Operation}
   */


  EditorOperations.prototype.getOrCreate = function getOrCreate(identifier) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this._map[identifier]) {
      var operation = this._map[identifier];
      return operation;
    } else {
      var Operation = this._available[identifier];
      var _operation2 = new Operation(this._sdk, options);
      this.add(_operation2);
      return _operation2;
    }
  };

  /**
   * Returns the operations stack
   * @return {PhotoEditorSDK.OperationsStack}
   */


  EditorOperations.prototype.getStack = function getStack() {
    return this._stack;
  };

  /**
   * Resets the operations
   */


  EditorOperations.prototype.reset = function reset() {
    this._map = {};
  };

  /**
   * Since the SDK might create some operations upfront (e.g. to fix the EXIF orientation),
   * we might have operations at array positions where they should not be. This method
   * moves them to their appropriate position
   * @private
   */


  EditorOperations.prototype._fixStack = function _fixStack() {
    var _this2 = this;

    var stack = this._stack.getStack().slice();
    this._stack.clear();

    stack.forEach(function (s) {
      _this2.add(s);
    });
  };

  return EditorOperations;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = EditorOperations;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_ZOOM_DIMENSIONS = 300; /*
                                * This file is part of PhotoEditorSDK.
                                *
                                * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                                * All rights reserved.
                                *
                                * Redistribution and use in source and binary forms, without
                                * modification, are permitted provided that the following license agreement
                                * is approved and a legal/financial contract was signed by the user.
                                * The license agreement can be found under following link:
                                *
                                * https://www.photoeditorsdk.com/LICENSE.txt
                                */

var EditorZoom = function (_EventEmitter) {
  (0, _inherits3.default)(EditorZoom, _EventEmitter);

  function EditorZoom(editor, sdk, mediator) {
    (0, _classCallCheck3.default)(this, EditorZoom);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._editor = editor;
    _this._sdk = sdk;
    _this._mediator = mediator;

    _this._isDefaultZoom = false;
    _this._zoom = _this._sdk.getZoom();
    _this._options = _this._editor.getOptions();

    _this._zoomLevels = [1, 2, 3, 4, 5, 6.25, 8.33, 12.5, 16.66, 25, 33.33, 50, 66.66, 100, 200, 300, 400, 500, 600, 700, 800, 1200, 1600, 3200].map(function (z) {
      return z / 100;
    });
    return _this;
  }

  /**
   * Zooms in the editor
   */


  EditorZoom.prototype.zoomIn = function zoomIn() {
    var newZoom = this._getClosestZoomLevel(this._zoom + 0.001, +1);
    if (!newZoom) return this._zoomLevels[this._zoomLevels.length - 1];
    this.set(newZoom);
  };

  /**
   * Zooms out the editor
   */


  EditorZoom.prototype.zoomOut = function zoomOut() {
    var newZoom = this._getClosestZoomLevel(this._zoom - 0.001, -1);
    if (!newZoom) return this._zoomLevels[0];
    this.set(newZoom);
  };

  /**
   * Returns the closest zoom level to the given one
   * @param  {Number} zoomLevel
   * @param  {Number} direction
   * @return {Number}
   * @private
   */


  EditorZoom.prototype._getClosestZoomLevel = function _getClosestZoomLevel(zoomLevel, direction) {
    if (direction === -1) {
      return this._zoomLevels.filter(function (l) {
        return l < zoomLevel;
      }).pop();
    } else if (direction === 1) {
      return this._zoomLevels.filter(function (l) {
        return l > zoomLevel;
      })[0];
    }
  };

  /**
   * Switches to the previous zoom
   */


  EditorZoom.prototype.undo = function undo() {
    if (!this._previousZoom) return;
    this.set(this._previousZoom);
    this._previousZoom = null;
  };

  /**
   * Sets the zoom to the given one
   * @param {Number} zoom
   * @param {Function} [callback]
   * @param {Boolean} [considerMinimum = true]
   */


  EditorZoom.prototype.set = function set(zoom, callback) {
    var considerMinimum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!this._editor.isReady()) {
      return;
    }
    this._previousZoom = this._zoom;

    var newZoom = zoom;
    var defaultZoom = this.getDefault();
    if (zoom === 'auto' || newZoom === defaultZoom) {
      newZoom = defaultZoom;
      zoom = 'auto';

      this._isDefaultZoom = true;
    } else {
      this._isDefaultZoom = false;
    }

    var maxZoom = Math.max(1, defaultZoom * 2);
    var minZoom = considerMinimum ? this.getMinimum() : 0;
    newZoom = Math.max(minZoom, Math.min(maxZoom, newZoom));

    this._zoom = newZoom;
    this._sdk.setZoom(this._zoom);
    this._sdk.setTextureQuality(Math.min(this._zoom, 1));
    this.emit('set', this._zoom, callback);
  };

  /**
   * Returns the default zoom level
   * @return {Number}
   */


  EditorZoom.prototype.getDefault = function getDefault() {
    var finalDimensions = this._editor.getFinalDimensions(false);
    var canvasDimensions = this._editor.getCanvasDimensions();
    var defaultDimensions = _globals.SDKUtils.resizeVectorToFit(finalDimensions, canvasDimensions);

    return defaultDimensions.divide(finalDimensions).x;
  };

  /**
   * Returns the minimum zoom level
   * @return {Number}
   */


  EditorZoom.prototype.getMinimum = function getMinimum() {
    var finalDimensions = this._editor.getFinalDimensions();
    var minimumDimensions = _globals.SDKUtils.resizeVectorToFit(finalDimensions, new _globals.Vector2(MIN_ZOOM_DIMENSIONS, MIN_ZOOM_DIMENSIONS));

    return minimumDimensions.divide(finalDimensions).x;
  };

  /**
   * Checks if the editor is at the default zoom level
   * @return {Boolean}
   */


  EditorZoom.prototype.isDefault = function isDefault() {
    return this._isDefaultZoom;
  };

  /**
   * Returns the current zoom level
   * @return {Number}
   */


  EditorZoom.prototype.get = function get() {
    return this._zoom;
  };

  return EditorZoom;
}(_globals.EventEmitter);

exports.default = EditorZoom;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

var _fileDownloader = __webpack_require__(183);

var _fileDownloader2 = _interopRequireDefault(_fileDownloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Exporter = function () {
  function Exporter(sdk, options, download) {
    (0, _classCallCheck3.default)(this, Exporter);

    this._sdk = sdk;
    this._options = options;
    this._download = download;
  }

  /**
   * Exports the image / data url
   * @return {Promise}
   */


  Exporter.prototype.export = function _export() {
    var _this = this;

    var renderType = this._getRenderType();

    return this._sdk.export(renderType, this._options.format, this._options.quality).then(function (data) {
      if (_this._download) {
        _this._downloadData(renderType, data);
      }
      return data;
    });
  };

  /**
   * Downloads the data using the given render type
   * @param  {RenderType} renderType
   * @param  {String} data
   * @private
   */


  Exporter.prototype._downloadData = function _downloadData(renderType, data) {
    switch (renderType) {
      case _globals.RenderType.DATAURL:
        _fileDownloader2.default.downloadDataURL(data, this._options.fileBasename);
        break;
      case _globals.RenderType.MSBLOB:
        _fileDownloader2.default.downloadMSBlob(data, this._options.fileBasename);
        break;
    }
  };

  /**
   * Returns the render type for this export
   * @return {RenderType}
   * @private
   */


  Exporter.prototype._getRenderType = function _getRenderType() {
    var options = this._options;
    if (options.type !== _globals.RenderType.IMAGE || !this._download) {
      return options.type;
    } else {
      if (_globals.Utils.supportsMSBlob()) {
        return _globals.RenderType.MSBLOB;
      } else {
        return _globals.RenderType.DATAURL;
      }
    }
  };

  return Exporter;
}();

exports.default = Exporter;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileDownloader = function () {
  function FileDownloader() {
    (0, _classCallCheck3.default)(this, FileDownloader);
  }

  /**
   * Exports the given data url
   * @param  {String} data
   * @param  {String} baseName = 'photoeditorsdk-export'
   */
  FileDownloader.downloadDataURL = function downloadDataURL(data) {
    var baseName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'photoeditorsdk-export';

    var url = this.createBlobURLFromDataURL(data);
    var extension = this.getExtensionFromDataURL(data);

    var link = document.createElement('a');
    link.download = baseName + '.' + extension;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /**
   * Exports the given data url using msBlob
   * @param  {String} data
   * @param  {String} baseName = 'photoeditorsdk-export'
   */


  FileDownloader.downloadMSBlob = function downloadMSBlob(data) {
    var baseName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'photoeditorsdk-export';

    navigator.msSaveBlob(data, baseName + '.png');
  };

  /**
   * Returns the file extension by reading the given data url
   * @param  {String} data
   * @return {String}
   */


  FileDownloader.getExtensionFromDataURL = function getExtensionFromDataURL(data) {
    var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
    return mimeString.split('/').pop();
  };

  /**
   * Creates a Blob URI from the given Data URI
   * @param {String} data
   */


  FileDownloader.createBlobURLFromDataURL = function createBlobURLFromDataURL(data) {
    if (!window.Blob || !window.URL || !ArrayBuffer || !Uint8Array) {
      return data;
    }

    var rawData = _globals.Base64.decode(data.split(',')[1]);
    var mimeString = data.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(rawData.length);
    var intArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < rawData.length; i++) {
      intArray[i] = rawData[i];
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new window.Blob([arrayBuffer], {
      type: mimeString
    });
    return window.URL.createObjectURL(blob);
  };

  return FileDownloader;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = FileDownloader;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileLoader = function (_EventEmitter) {
  (0, _inherits3.default)(FileLoader, _EventEmitter);

  function FileLoader(input) {
    (0, _classCallCheck3.default)(this, FileLoader);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._input = input;
    _this._onFileChange = _this._onFileChange.bind(_this);
    _this._input.addEventListener('change', _this._onFileChange);
    return _this;
  }

  /**
   * Opens the file dialog
   */


  FileLoader.prototype.open = function open() {
    this._input.value = null;
    this._input.click();
  };

  /**
   * Loads the file into an image
   * @param  {File} file
   * @private
   */


  FileLoader.prototype._handleFile = function _handleFile(file) {
    var _this2 = this;

    var reader = new window.FileReader();
    reader.onload = function () {
      return function (e) {
        var data = e.target.result;
        var image = new window.Image();

        image.addEventListener('load', function () {
          _this2.emit('file', image);
        });

        image.src = data;
      };
    }(file);
    reader.readAsDataURL(file);
  };

  /**
   * Gets called when the file input value changes
   * @private
   */


  FileLoader.prototype._onFileChange = function _onFileChange() {
    var files = this._input.files;

    if (!files.length) return;

    this._handleFile(files[0]);
  };

  /**
   * Disposes all listeners
   */


  FileLoader.prototype.dispose = function dispose() {
    this._input.removeEventListener('change', this._onFileChange);
  };

  return FileLoader;
}(_globals.EventEmitter); /*
                           * This file is part of PhotoEditorSDK.
                           *
                           * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                           * All rights reserved.
                           *
                           * Redistribution and use in source and binary forms, without
                           * modification, are permitted provided that the following license agreement
                           * is approved and a legal/financial contract was signed by the user.
                           * The license agreement can be found under following link:
                           *
                           * https://www.photoeditorsdk.com/LICENSE.txt
                           */

exports.default = FileLoader;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _google = __webpack_require__(187);

var _google2 = _interopRequireDefault(_google);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontLoader = function () {
  function FontLoader(fonts) {
    (0, _classCallCheck3.default)(this, FontLoader);

    this._fonts = fonts;
  }

  /**
   * Checks if the font loader needs to load something
   * @return {Boolean}
   */


  FontLoader.prototype.needsToLoad = function needsToLoad() {
    for (var i = 0; i < this._fonts.length; i++) {
      var provider = this._fonts[i].getProvider();
      if (!provider) continue;
      return true;
    }
  };

  /**
   * Loads the given fonts
   * @param  {Object[]} fonts
   */


  FontLoader.prototype.load = function load() {
    var loaders = {
      google: new _google2.default()
    };

    this._fonts.forEach(function (font) {
      var provider = font.getProvider();
      if (!provider) return;

      var loader = loaders[provider];
      loader.add(font);
    });

    var promises = [];
    for (var name in loaders) {
      promises.push(loaders[name].load());
    }
    return Promise.all(promises);
  };

  return FontLoader;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */


exports.default = FontLoader;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var FontsLoader = function () {
  function FontsLoader() {
    (0, _classCallCheck3.default)(this, FontsLoader);

    this._fonts = [];
  }

  /**
   * Adds the given font to the list of fonts to load
   * @param {Object} font
   */


  FontsLoader.prototype.add = function add(font) {
    this._fonts.push(font);
  };

  /**
   * Loads the fonts
   */


  FontsLoader.prototype.load = function load() {};

  return FontsLoader;
}();

exports.default = FontsLoader;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _fontsLoader = __webpack_require__(186);

var _fontsLoader2 = _interopRequireDefault(_fontsLoader);

var _fontRuler = __webpack_require__(188);

var _fontRuler2 = _interopRequireDefault(_fontRuler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var now = typeof window !== 'undefined' && window.performance && window.performance.now ? window.performance.now.bind(window.performance) : __webpack_require__(89);

var FONT_STYLES = {
  italic: 'i'
};

var GoogleFontsLoader = function (_FontsLoader) {
  (0, _inherits3.default)(GoogleFontsLoader, _FontsLoader);

  function GoogleFontsLoader() {
    (0, _classCallCheck3.default)(this, GoogleFontsLoader);
    return (0, _possibleConstructorReturn3.default)(this, _FontsLoader.apply(this, arguments));
  }

  /**
   * Loads the fonts
   */
  GoogleFontsLoader.prototype.load = function load() {
    if (this._fonts.length === 0) {
      return Promise.resolve();
    }

    this._defaultFontRuler = new _fontRuler2.default();
    this._customFontRuler = new _fontRuler2.default();

    this._addStylesheetTag();
    this._customFontRuler.setFont(this._fonts[0]);

    return this._waitForLoadPromise();
  };

  /**
   * Checks for changed widths every 50ms, after 5 seconds it times out
   * @return {Promise}
   * @private
   */


  GoogleFontsLoader.prototype._waitForLoadPromise = function _waitForLoadPromise(promise) {
    var _this2 = this;

    this._startedAt = now();
    return new Promise(function (resolve, reject) {
      _this2._waitForLoad(function (err) {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  /**
   * Checks for changed widths every 50ms, after 5 seconds it times out
   * @param  {Function} callback
   * @private
   */


  GoogleFontsLoader.prototype._waitForLoad = function _waitForLoad(callback) {
    var _this3 = this;

    var fn = function fn() {
      var changed = _this3._checkWidthChanged();

      if (changed) {
        _this3.dispose();
        return callback();
      } else {
        if (now() - _this3._startedAt >= 5000) {
          _this3.dispose();
          return callback(new Error('Font loading timed out.'));
        }
      }

      setTimeout(fn, 50);
    };
    fn();
  };

  /**
   * Checks if the width has changed
   * @return {Boolean}
   * @private
   */


  GoogleFontsLoader.prototype._checkWidthChanged = function _checkWidthChanged() {
    return this._defaultFontRuler.getWidth() !== this._customFontRuler.getWidth();
  };

  /**
   * Appends the <link> tag to the head
   * @private
   */


  GoogleFontsLoader.prototype._addStylesheetTag = function _addStylesheetTag() {
    var families = this._getFamiliesString();
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=' + families;

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
  };

  /**
   * Returns the string representation of all Google Fonts families that
   * should be loaded
   * @return {String}
   * @private
   */


  GoogleFontsLoader.prototype._getFamiliesString = function _getFamiliesString() {
    var families = {};
    this._fonts.forEach(function (font) {
      var fontFamily = font.getFontFamily();
      var fontStyle = font.getFontStyle();
      var fontWeight = font.getFontWeight();
      families[fontFamily] = families[fontFamily] || [];
      if (typeof fontWeight !== 'undefined') {
        families[fontFamily].push('' + fontWeight + (FONT_STYLES[fontStyle] || ''));
      } else {
        families[fontFamily].push(400); // default weight
      }
    });

    var familyStrings = [];
    for (var name in families) {
      var variants = families[name];
      var variantsString = variants.length ? ':' + variants.join(',') : '';
      var nameString = name.replace(' ', '+') + variantsString;
      familyStrings.push(nameString);
    }

    return familyStrings.join('|');
  };

  /**
   * Disposes the font rulers
   */


  GoogleFontsLoader.prototype.dispose = function dispose() {
    if (this._defaultFontRuler) this._defaultFontRuler.dispose();
    if (this._customFontRuler) this._customFontRuler.dispose();
  };

  return GoogleFontsLoader;
}(_fontsLoader2.default);

exports.default = GoogleFontsLoader;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _font = __webpack_require__(69);

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FONT_SIZE = 30; /*
                     * This file is part of PhotoEditorSDK.
                     *
                     * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                     * All rights reserved.
                     *
                     * Redistribution and use in source and binary forms, without
                     * modification, are permitted provided that the following license agreement
                     * is approved and a legal/financial contract was signed by the user.
                     * The license agreement can be found under following link:
                     *
                     * https://www.photoeditorsdk.com/LICENSE.txt
                     */

var CHARACTERS = 'abcdefghijklmnopqrstuvwxzy';

var FontRuler = function () {
  function FontRuler() {
    (0, _classCallCheck3.default)(this, FontRuler);

    this._font = new _font2.default({
      fontFamily: 'Times New Roman',
      fontWeight: 'normal',
      fontStyle: 'normal'
    });

    this._createRuler();
  }

  /**
   * Creates the ruler and attaches it to the DOM
   * @private
   */


  FontRuler.prototype._createRuler = function _createRuler() {
    this._ruler = document.createElement('div');
    this._ruler.innerText = CHARACTERS;
    document.body.appendChild(this._ruler);
    this._setRulerStyle();
  };

  /**
   * Styles the ruler
   * @private
   */


  FontRuler.prototype._setRulerStyle = function _setRulerStyle() {
    this._ruler.style.cssText = '\n      position: absolute;\n      top: -9999;\n      left: -9999;\n      display: inline-block;\n      font: ' + this._font.getFontStyle() + ' ' + this._font.getFontWeight() + ' ' + FONT_SIZE + 'px ' + this._font.getFontFamily() + ';\n    ';
  };

  /**
   * Sets the font to the given one
   * @param {PhotoEditorSDK.UI.ReactUI.Font} font
   */


  FontRuler.prototype.setFont = function setFont(font) {
    this._font = font;
    this._setRulerStyle();
  };

  /**
   * Returns the width of this ruler
   * @return {Number}
   */


  FontRuler.prototype.getWidth = function getWidth() {
    return this._ruler.offsetWidth;
  };

  /**
   * Removes this ruler from the DOM
   */


  FontRuler.prototype.dispose = function dispose() {
    this._ruler.parentNode.removeChild(this._ruler);
  };

  return FontRuler;
}();

exports.default = FontRuler;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageResizer = function () {
  function ImageResizer(image, maxPixels, maxDimensions) {
    (0, _classCallCheck3.default)(this, ImageResizer);

    this._image = image;
    this._maxPixels = maxPixels;
    this._maxDimensions = maxDimensions;
  }

  /**
   * Checks if the image needs to be resized
   * @return {Boolean}
   */


  ImageResizer.prototype.needsResize = function needsResize() {
    var dimensions = new _globals.Vector2(this._image.width, this._image.height);
    var pixels = dimensions.x * dimensions.y;
    var exceedsMaxPixels = pixels > this._maxPixels;
    var exceedsMaxDimensions = this._maxDimensions !== null && (dimensions.x > this._maxDimensions || dimensions.y > this._maxDimensions);

    return exceedsMaxPixels || exceedsMaxDimensions;
  };

  /**
   * Resizes the image to match the maximum amount of pixels
   * @return {Promise}
   */


  ImageResizer.prototype.resize = function resize() {
    var _this = this;

    var reason = null;
    var canvas = null;
    var maxDimensions = this._maxDimensions;

    return new _globals.Promise(function (resolve, reject) {
      window.setTimeout(function () {
        var initialDimensions = new _globals.Vector2(_this._image.width, _this._image.height);
        var dimensions = initialDimensions.clone();

        // If max pixels is exceeded, resize to fit the max pixels
        if (dimensions.x * dimensions.y > _this._maxPixels) {
          dimensions.copy(_this._getDimensionsByMaxPixels());
          reason = 'maxMegaPixels';
        }

        // If max dimensions (maximum texture size) is exceeded,
        // make sure the shorter side equals the maximum texture
        // size
        if (maxDimensions !== null && (dimensions.x > maxDimensions || dimensions.y > maxDimensions)) {
          var scale = Math.min(maxDimensions / dimensions.x, maxDimensions / dimensions.y);
          dimensions.multiply(scale);
          reason = 'maxDimensions';
        }

        dimensions.floor();
        canvas = _this._createResizedImageCanvas(dimensions);

        resolve({ canvas: canvas, dimensions: dimensions, reason: reason });
      }, 1000);
    });
  };

  /**
   * Creates a resized canvas with the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} [imageDimensions] = dimensions
   * @return {Canvas}
   * @private
   */


  ImageResizer.prototype._createResizedImageCanvas = function _createResizedImageCanvas(dimensions) {
    var imageDimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dimensions;

    var image = this._image;

    var canvas = document.createElement('canvas');
    canvas.width = dimensions.x;
    canvas.height = dimensions.y;

    var offset = dimensions.clone().subtract(imageDimensions).divide(2);

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height, offset.x, offset.y, imageDimensions.x, imageDimensions.y);
    return canvas;
  };

  /**
   * Returns the dimensions that match the max pixel count
   * @return {Vector2}
   * @private
   */


  ImageResizer.prototype._getDimensionsByMaxPixels = function _getDimensionsByMaxPixels() {
    var image = this._image;
    var maxPixels = this._maxPixels;

    var ratioHV = image.width / image.height;
    var ratioVH = image.height / image.width;

    return new _globals.Vector2(Math.sqrt(maxPixels * ratioHV), Math.sqrt(maxPixels * ratioVH)).floor();
  };

  return ImageResizer;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = ImageResizer;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

var _font = __webpack_require__(69);

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var FontsManager = function () {
  function FontsManager(options) {
    (0, _classCallCheck3.default)(this, FontsManager);

    this._options = options;
    this._fonts = [];

    this._initFonts();
  }

  /**
   * Initializes the fonts
   * @private
   */


  FontsManager.prototype._initFonts = function _initFonts() {
    var _options = this._options,
        additionalFonts = _options.additionalFonts,
        replaceFonts = _options.replaceFonts,
        selectableFonts = _options.selectableFonts;

    additionalFonts = additionalFonts || [];

    // Replace or append fonts
    var fonts = _globals.Constants.DEFAULTS.FONTS;
    if (replaceFonts) {
      fonts = additionalFonts;
    } else {
      fonts = fonts.concat(additionalFonts);
    }

    // Pick specific fonts using `selectableFonts` option
    if (selectableFonts && selectableFonts.length) {
      fonts = _globals.Utils.select(fonts, selectableFonts, function (r) {
        return r.name;
      });
    }

    // Turn fonts into actual Font objects
    fonts = fonts.map(function (font) {
      return new _font2.default(font);
    });

    // Font default font
    var defaultFont = null;
    fonts.forEach(function (font) {
      if (!defaultFont && font.default) {
        defaultFont = font;
      }
    });

    if (!defaultFont) {
      defaultFont = fonts[0];
    }

    this._defaultFont = defaultFont;
    this._fonts = fonts;
  };

  /**
   * Returns the default font
   * @return {PhotoEditorSDK.UI.ReactUI.Font[]}
   */


  FontsManager.prototype.getFonts = function getFonts() {
    return this._fonts;
  };

  /**
   * Returns the default font
   * @return {PhotoEditorSDK.UI.ReactUI.Font}
   */


  FontsManager.prototype.getDefaultFont = function getDefaultFont() {
    return this._defaultFont;
  };

  return FontsManager;
}();

exports.default = FontsManager;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Library = function Library(data) {
  (0, _classCallCheck3.default)(this, Library);

  this.name = data.name;
  this.coverImage = data.coverImage;
};

exports.default = Library;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Photo = function Photo(library, data) {
  (0, _classCallCheck3.default)(this, Photo);

  this.library = library;
  this.title = data.title;
  this.urls = data.urls;
};

exports.default = Photo;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = function () {
  function Provider() {
    (0, _classCallCheck3.default)(this, Provider);
  }

  /**
   * Returns the libraries
   * @return {Promise}
   * @abstract
   */
  Provider.prototype.getLibraries = function getLibraries() {
    _globals.Log.warn(this.constructor.name, '`getLibraries` is abstract and not implemented.');
    return _globals.Promise.resolve([]);
  };

  /**
   * Returns search suggestions shown on the overview and "no results" page
   * @return {Promise}
   * @abstract
   */


  Provider.prototype.getSearchSuggestions = function getSearchSuggestions() {
    _globals.Log.warn(this.constructor.name, '`getSearchSuggestions` is abstract and not implemented.');
    return _globals.Promise.resolve([]);
  };

  /**
   * Returns the photos for the given library
   * @param {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library} library
   * @return {Promise}
   * @abstract
   */


  Provider.prototype.getPhotosForLibrary = function getPhotosForLibrary(library) {
    _globals.Log.warn(this.constructor.name, '`getPhotosForLibrary` is abstract and not implemented.');
    return _globals.Promise.resolve([]);
  };

  /**
   * Searches for photos with the given query
   * @param {String} query
   * @return {Promise}
   */


  Provider.prototype.searchPhotos = function searchPhotos(query) {
    _globals.Log.warn(this.constructor.name, '`searchPhotos` is abstract and not implemented.');
    return _globals.Promise.resolve([]);
  };

  return Provider;
}(); /*
      * This file is part of PhotoEditorSDK.
      *
      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, without
      * modification, are permitted provided that the following license agreement
      * is approved and a legal/financial contract was signed by the user.
      * The license agreement can be found under following link:
      *
      * https://www.photoeditorsdk.com/LICENSE.txt
      */

exports.default = Provider;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var SearchSuggestion = function SearchSuggestion(data) {
  (0, _classCallCheck3.default)(this, SearchSuggestion);

  this.query = data.query;
  this.name = this.query;
  this.coverImage = data.coverImage;
};

exports.default = SearchSuggestion;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _editor = __webpack_require__(68);

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var LOAD_TIMEOUT = 5000;

var Preloader = function (_EventEmitter) {
  (0, _inherits3.default)(Preloader, _EventEmitter);

  function Preloader(ui, options, mediator) {
    (0, _classCallCheck3.default)(this, Preloader);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._ui = ui;
    _this._options = options;
    _this._mediator = mediator;

    // A shallow Editor instance that is only there to check for features etc.
    _this._editor = new _editor2.default(ui, options, mediator, true);

    // Generic assets that are pretty much always required
    _this._assets = ['controls/back.png', 'controls/minus.png', 'controls/plus.png', 'controls/tick.png', 'controls/webcam/shutter.png', 'controls/knobs/remove.png', 'controls/knobs/resize-diagonal-down.png', 'controls/knobs/resize-diagonal-up.png', 'controls/knobs/rotate.png', 'editor/export.png', 'editor/new.png', 'editor/undo.png', 'splash/photo-roll.png', 'splash/webcam.png', 'top-bar/back.png', 'close.png'];
    _this._appendControlsAssets();
    return _this;
  }

  /**
   * Adds the control-specific assets if necessary
   * @private
   */


  Preloader.prototype._appendControlsAssets = function _appendControlsAssets() {
    var controls = this._editor.controls.getAvailable();
    for (var key in controls) {
      var Control = controls[key];
      if (this._editor.controls.isEnabled(key)) {
        this._assets = this._assets.concat(Control.getPreloadAssets(this._editor));
        this._assets.push(Control.iconPath);
      }
    }
  };

  /**
   * Loads the assets, emits progress events
   */


  Preloader.prototype.load = function load() {
    var _this2 = this;

    var assets = this._assets.slice();
    var assetsCount = assets.length;
    var assetsLoaded = 0;

    /**
     * Called when an asset has been loaded. Increases the asset counter and emits a progress
     * event
     */
    var assetLoaded = function assetLoaded() {
      assetsLoaded++;
      _this2.emit('progress', assetsLoaded / assetsCount);
      if (assetsLoaded === assetsCount) {
        _this2.emit('done');
      }
    };

    /**
     * Logs a warning message that the given asset failed to load for the given reason
     * @param  {String} path
     * @param  {String} reason
     */
    var assetLoadFailed = function assetLoadFailed(path) {
      var reason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'timed out';

      _globals.Log.warn('Preloader', path + ' ' + reason + '.');
      assetLoaded();
    };

    /**
     * Creates a timeout for the given asset path. Assumes an asset failed to load when timeout
     * runs out
     * @param  {String} path
     * @return {Number}
     */
    var loadTimeout = function loadTimeout(path) {
      return window.setTimeout(function () {
        assetLoadFailed(path);
      }, LOAD_TIMEOUT);
    };

    assets.forEach(function (asset) {
      var assetPath = _this2._ui.getAssetPath(asset, true);
      var image = new window.Image();
      var timeout = loadTimeout(assetPath);
      image.addEventListener('load', function () {
        window.clearTimeout(timeout);
        assetLoaded();
      });
      image.addEventListener('error', function () {
        window.clearTimeout(timeout);
        assetLoadFailed(assetPath, 'was not found');
      });
      image.src = assetPath;
    });
  };

  return Preloader;
}(_globals.EventEmitter);

exports.default = Preloader;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _serializer = __webpack_require__(73);

var _serializer2 = _interopRequireDefault(_serializer);

var _deserializer = __webpack_require__(72);

var _deserializer2 = _interopRequireDefault(_deserializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Serialization = function () {
  function Serialization(editor) {
    (0, _classCallCheck3.default)(this, Serialization);

    this._editor = editor;
  }

  /**
   * Serializes the editor state
   * @return {Promise}
   */


  Serialization.prototype.serialize = function serialize() {
    var serializer = new _serializer2.default(this._editor);
    return serializer.serialize.apply(serializer, arguments);
  };

  /**
   * Deserializes the given data
   * @param  {Object} data
   * @return {Promise}
   */


  Serialization.prototype.deserialize = function deserialize(data) {
    var deserializer = new _deserializer2.default(this._editor, data);
    return deserializer.deserialize();
  };

  return Serialization;
}();

exports.default = Serialization;


Serialization.version = '1.0.0';

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _deserializer = __webpack_require__(72);

var _deserializer2 = _interopRequireDefault(_deserializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Deserializer = function (_BaseDeserializer) {
  (0, _inherits3.default)(Deserializer, _BaseDeserializer);

  function Deserializer() {
    (0, _classCallCheck3.default)(this, Deserializer);
    return (0, _possibleConstructorReturn3.default)(this, _BaseDeserializer.apply(this, arguments));
  }

  /**
   * Validates the version
   * @return {Promise}
   */
  Deserializer.prototype._validateVersion = function _validateVersion() {
    if (this._data.version !== '1.0.1') {
      return Promise.reject(new Error('Invalid version ' + this._data.version + ', expected 1.0.1'));
    }
    return Promise.resolve();
  };

  /**
   * Deserializes the operations
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeOperations = function _deserializeOperations() {
    var _this2 = this;

    // New in 1.0.1: `SelectiveBlurOperation`
    var promises = this._data.operations.map(function (operation) {
      switch (operation.type) {
        case 'crop':
          return _this2._deserializeCropOperation(operation);
        case 'orientation':
          return _this2._deserializeOrientationOperation(operation);
        case 'filter':
          return _this2._deserializeFilterOperation(operation);
        case 'adjustments':
          return _this2._deserializeAdjustmentsOperation(operation);
        case 'sprite':
          return _this2._deserializeSpriteOperation(operation);
        case 'focus':
          return _this2._deserializeFocusOperation(operation);
        case 'border':
          return _this2._deserializeBorderOperation(operation);
        case 'selective-blur':
          return _this2._deserializeSelectiveBlurOperation(operation);
      }
    });

    return Promise.all(promises);
  };

  /**
   * Deserializes the selective blur operation
   * @param {PhotoEditorSDK.Operation} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeSelectiveBlurOperation = function _deserializeSelectiveBlurOperation(operation) {
    var options = operation.options;
    var blurRadius = options.blurRadius,
        paths = options.paths;


    var selectiveBlurOperation = this._editor.operations.getOrCreate('selective-blur', { blurRadius: blurRadius });
    paths.forEach(function (path) {
      var size = path.size,
          points = path.points;

      var pathObject = selectiveBlurOperation.createPath(size);
      points.forEach(function (point) {
        pathObject.addControlPoint(_globals.Vector2.fromObject(point));
      });
    });

    return Promise.resolve();
  };

  /**
   * Deserializes the given crop operation
   * @param  {PhotoEditorSDK.Operation} operation
   * @return {Promise}
   * @private
   */


  Deserializer.prototype._deserializeCropOperation = function _deserializeCropOperation(operation) {
    // New in 1.0.1: `dimensions` option
    var options = operation.options;
    var scale = options.scale,
        rotation = options.rotation;

    var start = _globals.Vector2.fromObject(options.start);
    var end = _globals.Vector2.fromObject(options.end);
    var dimensions = options.dimensions ? _globals.Vector2.fromObject(options.dimensions) : null;

    // Normalize rotation
    if (rotation > Math.PI) {
      rotation -= Math.PI * 2;
    }

    this._editor.operations.getOrCreate('crop', {
      start: start, end: end, scale: scale, rotation: rotation, dimensions: dimensions
    });
    return Promise.resolve();
  };

  return Deserializer;
}(_deserializer2.default);

exports.default = Deserializer;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _serializer = __webpack_require__(199);

var _serializer2 = _interopRequireDefault(_serializer);

var _deserializer = __webpack_require__(197);

var _deserializer2 = _interopRequireDefault(_deserializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var Serialization = function () {
  function Serialization(editor) {
    (0, _classCallCheck3.default)(this, Serialization);

    this._editor = editor;
  }

  /**
   * Serializes the editor state
   * @return {Promise}
   */


  Serialization.prototype.serialize = function serialize() {
    var serializer = new _serializer2.default(this._editor);
    return serializer.serialize.apply(serializer, arguments);
  };

  /**
   * Deserializes the given data
   * @param  {Object} data
   * @return {Promise}
   */


  Serialization.prototype.deserialize = function deserialize(data) {
    var deserializer = new _deserializer2.default(this._editor, data);
    return deserializer.deserialize();
  };

  return Serialization;
}();

exports.default = Serialization;


Serialization.version = '1.0.1';

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _serializer = __webpack_require__(73);

var _serializer2 = _interopRequireDefault(_serializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

var TWICE_PI = Math.PI * 2;

var Serializer = function (_BaseSerializer) {
  (0, _inherits3.default)(Serializer, _BaseSerializer);

  function Serializer() {
    (0, _classCallCheck3.default)(this, Serializer);
    return (0, _possibleConstructorReturn3.default)(this, _BaseSerializer.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- SERIALIZATION

  /**
   * Serializes the editor state
   * @param {Object} options = {}
   * @return {Promise}
   */
  Serializer.prototype.serialize = function serialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._options = _globals.SDKUtils.defaults(options, {
      image: true
    });

    var data = {
      version: '1.0.1'
    };

    return this._serializeInputImage(data).then(this._serializeOperations);
  };

  /**
   * Serializes the given operation
   * @param  {PhotoEditorSDK.Operation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeOperation = function _serializeOperation(operation) {
    switch (operation.constructor.identifier) {
      case 'crop':
        return this._serializeCropOperation(operation);
      case 'orientation':
        return this._serializeOrientationOperation(operation);
      case 'filter':
        return this._serializeFilterOperation(operation);
      case 'adjustments':
        return this._serializeAdjustmentsOperation(operation);
      case 'sprite':
        return this._serializeSpriteOperation(operation);
      case 'radial-focus':
        return this._serializeRadialFocusOperation(operation);
      case 'linear-focus':
        return this._serializeLinearFocusOperation(operation);
      case 'border':
        return this._serializeBorderOperation(operation);
      case 'selective-blur':
        return this._serializeSelectiveBlurOperation(operation);
      default:
        throw new Error('Unable to serialize operation of type ' + operation.constructor.identifier);
    }
  };

  /**
   * Serializes the given crop operation
   * @param  {PhotoEditorSDK.Operation.CropOperation} operation
   * @return {Object}
   * @private
   */


  Serializer.prototype._serializeCropOperation = function _serializeCropOperation(operation) {
    var options = operation.serializeOptions(['start', 'end', 'rotation', 'scale', 'dimensions'], true);
    options.rotation = (options.rotation + TWICE_PI) % TWICE_PI;
    if (options.dimensions === null) {
      delete options.dimensions;
    }
    return {
      type: 'crop',
      options: options
    };
  };

  /**
   * Serializes the given selective blur operation
   * @return {PhotoEditorSDK.Operations.SelectiveBlurOperation} operation
   * @private
   */


  Serializer.prototype._serializeSelectiveBlurOperation = function _serializeSelectiveBlurOperation(operation) {
    var _this2 = this;

    var paths = operation.getPaths().map(function (path) {
      return _this2._serializePath(path);
    });

    var blurRadius = operation.getBlurRadius();

    return {
      type: 'selective-blur',
      options: {
        paths: paths,
        blurRadius: blurRadius
      }
    };
  };

  return Serializer;
}(_serializer2.default);

exports.default = Serializer;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(32);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _photoeditorsdk = __webpack_require__(36);

var _photoeditorsdk2 = _interopRequireDefault(_photoeditorsdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _photoeditorsdk2.default.EventEmitter,
    Utils = _photoeditorsdk2.default.Utils; /*
                                             * This file is part of PhotoEditorSDK.
                                             *
                                             * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                                             * All rights reserved.
                                             *
                                             * Redistribution and use in source and binary forms, without
                                             * modification, are permitted provided that the following license agreement
                                             * is approved and a legal/financial contract was signed by the user.
                                             * The license agreement can be found under following link:
                                             *
                                             * https://www.photoeditorsdk.com/LICENSE.txt
                                             */

var SharedState = function (_EventEmitter) {
  (0, _inherits3.default)(SharedState, _EventEmitter);

  function SharedState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, SharedState);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._state = state;
    return _this;
  }

  /**
   * Sets the given state
   * @param {Object} newState
   * @param {Boolean} update = true
   */


  SharedState.prototype.set = function set() {
    var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if ((typeof newState === 'undefined' ? 'undefined' : (0, _typeof3.default)(newState)) !== 'object') {
      console && console.trace('SharedState#set expects an object as first parameter');
    }

    var oldState = Utils.extend({}, this._state);
    this._state = Utils.extend(this._state, newState);

    if (update) {
      this.broadcastUpdate(oldState, this._state);
    }
  };

  /**
   * Returns the state for the given property
   * @param {String} prop
   */


  SharedState.prototype.get = function get(prop) {
    return this._state[prop];
  };

  /**
   * Broadcasts an update
   * @param {Object} oldState
   * @param {Object} newState
   */


  SharedState.prototype.broadcastUpdate = function broadcastUpdate(oldState) {
    var newState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.emit('update', oldState, newState);
  };

  /**
   * Clears the state
   */


  SharedState.prototype.clear = function clear() {
    this._state = {};
  };

  return SharedState;
}(EventEmitter);

exports.default = SharedState;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _photoeditorsdk = __webpack_require__(36);

var _photoeditorsdk2 = _interopRequireDefault(_photoeditorsdk);

var _log = __webpack_require__(74);

var _log2 = _interopRequireDefault(_log);

var _browser = __webpack_require__(202);

var _browser2 = _interopRequireDefault(_browser);

var _jsonLoader = __webpack_require__(61);

var _jsonLoader2 = _interopRequireDefault(_jsonLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vector2 = _photoeditorsdk2.default.Math.Vector2; /*
                                                      * This file is part of PhotoEditorSDK.
                                                      *
                                                      * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
                                                      * All rights reserved.
                                                      *
                                                      * Redistribution and use in source and binary forms, without
                                                      * modification, are permitted provided that the following license agreement
                                                      * is approved and a legal/financial contract was signed by the user.
                                                      * The license agreement can be found under following link:
                                                      *
                                                      * https://www.photoeditorsdk.com/LICENSE.txt
                                                      */

var UIUtils = {
  /**
   * Returns the inner dimensions (size - padding) of the given
   * DOM element
   * @param  {DOMElement} element
   * @return {Vector2}
   */
  getInnerDimensionsForElement: function getInnerDimensionsForElement(element) {
    var size = new Vector2(element.offsetWidth, element.offsetHeight);
    var computedStyle = window.getComputedStyle(element, null);
    size.x -= parseInt(computedStyle.getPropertyValue('padding-left'), 10);
    size.x -= parseInt(computedStyle.getPropertyValue('padding-right'), 10);
    size.y -= parseInt(computedStyle.getPropertyValue('padding-top'), 10);
    size.y -= parseInt(computedStyle.getPropertyValue('padding-bottom'), 10);
    return size;
  },


  /**
   * Gets the x and y position for the given event.
   * @param {Event} e
   * @return {Vector2}
   */
  getEventPosition: function getEventPosition(e) {
    var x = e.clientX;
    var y = e.clientY;
    if (e.type.indexOf('touch') !== -1) {
      if (!e.touches.length) return;

      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    }
    return new Vector2(x, y);
  },


  /**
   * Creates a canvas with a transparency pattern
   * @return {Canvas}
   */
  createTransparentPatternCanvas: function createTransparentPatternCanvas() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    canvas.width = 10;
    canvas.height = 10;

    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#cccccc';
    context.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
    context.fillRect(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height);

    return canvas;
  },


  /**
   * Checks if the browser supports canvas.msToBlob
   * @return {Boolean}
   */
  supportsMSBlob: function supportsMSBlob() {
    var canvas = document.createElement('canvas');
    return typeof canvas.msToBlob !== 'undefined';
  },


  /**
   * Translates the given key using the given options
   * @param  {Object} phrases
   * @param  {String} key
   * @param  {Object} interpolationOptions = {}
   * @return {String}
   */
  translate: function translate(phrases, key) {
    var interpolationOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var response = this.fetch(phrases, key);
    if (!response) {
      _log2.default.warn('Utils#translate', 'Unable to translate `' + key + '`');
      return key;
    }
    for (var _key in interpolationOptions) {
      response = response.replace('${' + _key + '}', interpolationOptions[_key]);
    }
    return response;
  },


  /**
   * Gets the property value at `path` of `object`
   * @param  {Object} object
   * @param  {String} path
   * @param  {?} [defaultValue]
   * @return {?}
   */
  fetch: function fetch(object, path, defaultValue) {
    // Replace indexes with property accessors
    path = path.replace(/\[(\w+)\]/g, '.$1');
    // Strip leading dot (when path begins with [0] for example)
    path = path.replace(/^\./, '');

    var pathSegments = path.split('.');
    for (var i = 0; i < pathSegments.length; i++) {
      var segment = pathSegments[i];
      object = object[segment];
      if (!object) {
        break;
      }
    }

    if (typeof object === 'undefined') {
      return false;
    }

    return object;
  },


  /**
   * Checks whether the user agent represents a mobile device
   * @return {Boolean}
   */
  isMobile: function isMobile() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    /* eslint-disable */
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    );
    /* eslint-enable */
  },


  /**
   * Selects the `selectedItems` from `items`. `selector` is called for every item, return value
   * is matched against `selectedItems`
   * @param  {Array} items
   * @param  {Array} selectedItems
   * @param  {Function} [selector = null]
   * @return {Array}
   */
  select: function select(items, selectedItems) {
    var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (!selector) selector = function selector(i) {
      return i;
    };

    var newItems = [];
    selectedItems.forEach(function (selectedItem) {
      items.forEach(function (item) {
        var itemIdentifier = selector(item);
        if (itemIdentifier === selectedItem) {
          newItems.push(item);
        }
      });
    });
    return newItems;
  },


  /**
   * Gets the given URL using JSON(P)
   * @param  {String} url
   * @return {Promise}
   */
  getJSONP: function getJSONP(url) {
    var loader = new _jsonLoader2.default(url);
    return loader.load();
  },


  /**
   * Merges the given `newCategories` into the given `categories`
   * @param  {Array.<Object>} categories
   * @param  {Array.<Object>} newCategories
   * @param  {String} itemsProperty
   * @private
   */
  mergeCategories: function mergeCategories(categories, newCategories, itemsProperty) {
    categories = categories.slice(0);

    var existingCategory = null;
    newCategories.forEach(function (newCategory) {
      categories.forEach(function (category) {
        if (newCategory.name === category.name) {
          existingCategory = category;
        }
      });

      if (!existingCategory) {
        categories.push(newCategory);
      } else {
        existingCategory[itemsProperty] = existingCategory[itemsProperty].concat(newCategory[itemsProperty]);
      }
    });

    return categories;
  },


  /**
   * Returns a camelized style object for the given DOMElement
   * @param  {DOMElement} el
   * @return {Object}
   */
  getStyleObject: function getStyleObject(el) {
    var styleProperties = window.getComputedStyle(el);
    var styleObject = {};
    for (var property in styleProperties) {
      var value = styleProperties.getPropertyValue(property);
      var camelizedAttr = property.replace(/\-([a-z])/g, function (a, b) {
        return b.toUpperCase();
      });
      if (value !== '') {
        styleObject[camelizedAttr] = value;
      }
    }
    return styleObject;
  },


  /**
   * Debounces the given function to trigger only every so often
   * @param  {Function} fn
   * @param  {Number}   wait
   * @param  {Boolean}
   * @return {Function}
   */
  debounce: function debounce(fn, wait, immediate) {
    var timeout;
    return function () {
      var _this = this;

      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) fn.apply(_this, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) fn.apply(this, args);
    };
  },


  Browser: _browser2.default
};

exports.default = UIUtils;

/***/ },
/* 202 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

exports.default = {
  getIEVersion: function getIEVersion() {
    var _navigator = navigator,
        userAgent = _navigator.userAgent,
        appVersion = _navigator.appVersion;

    if (appVersion.indexOf('MSIE') !== -1) {
      return appVersion.match(/MSIE\s+?([0-9]+)/i)[1];
    } else if (userAgent.indexOf('Trident') !== -1) {
      return userAgent.match(/rv:([0-9]+)/i)[1];
    } else {
      return false;
    }
  },
  isIE10: function isIE10() {
    var version = this.getIEVersion();
    return version !== false && version === 10;
  },
  isIE11: function isIE11() {
    var version = this.getIEVersion();
    return version !== false && version === 11;
  },
  isIElte: function isIElte(version) {
    var browserVersion = this.getIEVersion();
    if (browserVersion === false) return false;
    return browserVersion <= version;
  }
};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*!
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * MIT license
 */
var root = typeof window === 'undefined' ? global : window;
var rAF = root.requestAnimationFrame;
var cAF = root.cancelAnimationFrame;

var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for (var x = 0; x < vendors.length && !rAF; ++x) {
  exports.requestAnimationFrame = rAF = root[vendors[x] + 'RequestAnimationFrame'];
  exports.cancelAnimationFrame = cAF = root[vendors[x] + 'CancelAnimationFrame'] || root[vendors[x] + 'CancelRequestAnimationFrame'];
}

/* istanbul ignore next */
if (!rAF) {
  exports.requestAnimationFrame = rAF = function rAF(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

/* istanbul ignore next */
if (!cAF) {
  exports.cancelAnimationFrame = cAF = function cAF(id) {
    clearTimeout(id);
  };
}

exports.requestAnimationFrame = rAF;
exports.cancelAnimationFrame = cAF;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(214), __esModule: true };

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(215), __esModule: true };

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(216), __esModule: true };

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(217), __esModule: true };

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(218), __esModule: true };

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(220), __esModule: true };

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(221), __esModule: true };

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(222), __esModule: true };

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _isIterable2 = __webpack_require__(206);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(205);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _from = __webpack_require__(204);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(246);
module.exports = __webpack_require__(8).Array.from;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(35);
module.exports = __webpack_require__(244);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(35);
module.exports = __webpack_require__(245);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(248);
module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(249);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(250);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(251);
module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(253);
__webpack_require__(252);
__webpack_require__(254);
__webpack_require__(255);
module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(58);
module.exports = __webpack_require__(57).f('iterator');

/***/ },
/* 223 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 224 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19)
  , toLength  = __webpack_require__(87)
  , toIndex   = __webpack_require__(243);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $defineProperty = __webpack_require__(13)
  , createDesc      = __webpack_require__(29);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(28)
  , gOPS    = __webpack_require__(49)
  , pIE     = __webpack_require__(33);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(23)
  , ITERATOR   = __webpack_require__(9)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(43);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(15);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(48)
  , descriptor     = __webpack_require__(29)
  , setToStringTag = __webpack_require__(50)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(22)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(9)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ },
/* 234 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(28)
  , toIObject = __webpack_require__(19);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(34)('meta')
  , isObject = __webpack_require__(27)
  , has      = __webpack_require__(18)
  , setDesc  = __webpack_require__(13).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(26)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(28)
  , gOPS     = __webpack_require__(49)
  , pIE      = __webpack_require__(33)
  , toObject = __webpack_require__(54)
  , IObject  = __webpack_require__(81)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(26)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(13)
  , anObject = __webpack_require__(15)
  , getKeys  = __webpack_require__(28);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19)
  , gOPN      = __webpack_require__(84).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(18)
  , toObject    = __webpack_require__(54)
  , IE_PROTO    = __webpack_require__(51)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(27)
  , anObject = __webpack_require__(15);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(44)(Function.call, __webpack_require__(83).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53)
  , defined   = __webpack_require__(45);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15)
  , get      = __webpack_require__(88);
module.exports = __webpack_require__(8).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(78)
  , ITERATOR  = __webpack_require__(9)('iterator')
  , Iterators = __webpack_require__(23);
module.exports = __webpack_require__(8).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var ctx            = __webpack_require__(44)
  , $export        = __webpack_require__(17)
  , toObject       = __webpack_require__(54)
  , call           = __webpack_require__(231)
  , isArrayIter    = __webpack_require__(229)
  , toLength       = __webpack_require__(87)
  , createProperty = __webpack_require__(226)
  , getIterFn      = __webpack_require__(88);

$export($export.S + $export.F * !__webpack_require__(233)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(224)
  , step             = __webpack_require__(234)
  , Iterators        = __webpack_require__(23)
  , toIObject        = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(82)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(17);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(237)});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(48)});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(17);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(241).set});

/***/ },
/* 252 */
/***/ function(module, exports) {



/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// ECMAScript 6 symbols shim
var global         = __webpack_require__(12)
  , has            = __webpack_require__(18)
  , DESCRIPTORS    = __webpack_require__(16)
  , $export        = __webpack_require__(17)
  , redefine       = __webpack_require__(86)
  , META           = __webpack_require__(236).KEY
  , $fails         = __webpack_require__(26)
  , shared         = __webpack_require__(52)
  , setToStringTag = __webpack_require__(50)
  , uid            = __webpack_require__(34)
  , wks            = __webpack_require__(9)
  , wksExt         = __webpack_require__(57)
  , wksDefine      = __webpack_require__(56)
  , keyOf          = __webpack_require__(235)
  , enumKeys       = __webpack_require__(227)
  , isArray        = __webpack_require__(230)
  , anObject       = __webpack_require__(15)
  , toIObject      = __webpack_require__(19)
  , toPrimitive    = __webpack_require__(55)
  , createDesc     = __webpack_require__(29)
  , _create        = __webpack_require__(48)
  , gOPNExt        = __webpack_require__(239)
  , $GOPD          = __webpack_require__(83)
  , $DP            = __webpack_require__(13)
  , $keys          = __webpack_require__(28)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(84).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(33).f  = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(47)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(56)('asyncIterator');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(56)('observable');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(262)(module), __webpack_require__(91)))

/***/ },
/* 257 */
/***/ function(module, exports) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ },
/* 258 */
/***/ function(module, exports) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.decode = exports.parse = __webpack_require__(257);
exports.encode = exports.stringify = __webpack_require__(258);


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = __webpack_require__(256);
var util = __webpack_require__(261);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(259);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ },
/* 261 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ },
/* 262 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 263 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_263__;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(1);

var _appComponent = __webpack_require__(92);

var _appComponent2 = _interopRequireDefault(_appComponent);

var _scrollbarComponent = __webpack_require__(10);

var _scrollbarComponent2 = _interopRequireDefault(_scrollbarComponent);

var _controlsComponent = __webpack_require__(5);

var _controlsComponent2 = _interopRequireDefault(_controlsComponent);

var _modalManager = __webpack_require__(7);

var _modalManager2 = _interopRequireDefault(_modalManager);

var _jsonLoader = __webpack_require__(61);

var _jsonLoader2 = _interopRequireDefault(_jsonLoader);

var _photoRoll = __webpack_require__(93);

var PhotoRoll = _interopRequireWildcard(_photoRoll);

var _controls = __webpack_require__(6);

var _controls2 = _interopRequireDefault(_controls);

var _controls3 = __webpack_require__(60);

var Controls = _interopRequireWildcard(_controls3);

var _sliderComponent = __webpack_require__(14);

var _sliderComponent2 = _interopRequireDefault(_sliderComponent);

var _sliderOverlayComponent = __webpack_require__(20);

var _sliderOverlayComponent2 = _interopRequireDefault(_sliderOverlayComponent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The React UI
 * @class
 * @alias ReactUI
 * @extends PhotoEditorSDK.EventEmitter
 * @memberof PhotoEditorSDK.UI
 */
var ReactUI = function (_EventEmitter) {
  (0, _inherits3.default)(ReactUI, _EventEmitter);

  /**
   * Creates an UI instance
   * @param  {Object} [options = {}]
   * @param  {DOMElement} [options.container] - The container that the UI should be rendered to
   * @param  {String} [options.title = 'PhotoEditor SDK'] - Only available for licensees
   * @param  {String} [options.language = 'en'] - Currently `en` and `de` are supported
   * @param  {String} [options.logLevel] - `trace`, `info`, `warn`, `error` or `log`
   *
   * @param  {Boolean} [options.enableUpload = true] - Should the user be able to upload their own photos?
   * @param  {Boolean} [options.enableWebcam = true] - Enables webcam support. Disabled on mobile devices.
   *
   * @param  {Boolean} [options.showCloseButton = false] - Should the close button be displayed?
   * @param  {Boolean} [options.showHeader = true] - Should the header (with title text) be displayed?
   *                                                 Should only be set to `false` by licensees.
   * @param  {Boolean} [options.showTopBar = true] - Should the top bar (new / zoom / undo / export) be displayed?
   *
   * @param  {Object} [options.photoRoll]
   * @param  {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Provider} provider - The class providing all data
   *                                                                 for the photo roll
   *
   * @param  {Boolean} [options.preloader = true] - Enables the preloader
   * @param  {Object} [options.editor]
   * @param  {Image} [options.editor.image] - The image that the user can edit
   * @param  {Image} [options.editor.watermarkImage] - An image that should be placed on top as a watermark
   * @param  {String} [options.editor.preferredRenderer = 'webgl'] - `webgl` or `canvas`
   * @param  {Number} [options.editor.pixelRatio = 1] - If none is given, PhotoEditorSDK automatically
   *   detects the current device's pixel ratio
   * @param  {Boolean} [options.editor.responsive = false] - Should the editor re-render on window resize?
   * @param  {Boolean} [options.editor.enableDrag = true] - Should dragging the canvas be enabled?
   * @param  {Boolean} [options.editor.enableZoom = true] - Should zooming be enabled?
   * @param  {Boolean} [options.editor.smoothDownscaling = false] - Toggles smooth downscaling
   * @param  {Boolean} [options.editor.smoothUpscaling = false] - Toggles smooth upscaling
   * @param  {Boolean} [options.editor.displayResizeMessage = true] - Should a message be displayed
   *                                                       when the image has been scaled down
   *                                                       for performance?
   * @param  {String[]} [options.editor.tools] - The enabled tools. Available are: `crop`, `rotation`,
   *                                    `flip`, `filter`, `brightness`, `saturation`, `gamma`, `contrast`,
   *                                    `clarity`, `exposure`, `shadows`, `highlights`, `text`,
   *                                    `sticker`, `brush`, `selective-blur`, `radial-focus`,
   *                                    `linear-focus` and `border`
   * @param  {(String[]|Array[])} [options.editor.controlsOrder] - The order in which the controls are displayed.
   *                                           Available are `crop`, `filter`,
   *                                           `adjustments`, `text`, `sticker`, `brush`, `focus`,
   *                                           `border`. Can be grouped in arrays which will be
   *                                           displayed with separators.
   * @param  {String[]} [options.editor.operationsOrder] - The order in which operations are added to
   *                                              the stack. Changing this may affect the
   *                                              performance.
   * @param  {Object} [options.editor.controlsOptions] - Options that are passed to specific controls. See
   *                                            the documentation for each control to learn more
   *                                            about available values.
   * @param {Object[]} [options.editor.forceControls] - An array of objects specifying the controls
   *                                                  the user needs to use before being able to
   *                                                  use the actual editor.
   *
   * @param  {Object} [options.editor.maxMegaPixels] - Maximum amount of megapixels per device type
   * @param  {Number} [options.editor.maxMegaPixels.desktop = 10]
   * @param  {Number} [options.editor.maxMegaPixels.mobile = 5]
   *
   * @param  {Object} [options.editor.export]
   * @param  {Boolean} [options.editor.export.showButton = true] - Should the `export` button be displayed?
   * @param  {String} [options.editor.export.format = 'image/png'] - The export format. Available formats
   * @param  {PhotoEditorSDK.RenderType} [options.editor.export.type] - The export type (image or data url)
   * @param  {Boolean} [options.editor.export.download] - Should the result be presented as a download?
   * @param  {String} [options.editor.export.fileBasename = 'photoeditorsdk-export'] - The basename
   *                                                      of the exported file (file extension will
   *                                                      be added automatically)
   * @param {Number} [options.editor.export.quality = 0.8] - The export quality (0...1, only supported
   *                                                for JPG images)
   *
   * @param  {Object} [options.assets]
   * @param  {String} [options.assets.baseUrl = '/assets'] - Path that is prepended to all asset paths
   * @param  {Function} [options.assets.resolver] - A function resolving a path to another path.
   */
  function ReactUI() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, ReactUI);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._mediator = new _globals.EventEmitter();
    _this._options = options;
    _this._initOptions();
    _this._initLanguage();
    _this._initEvents();
    _this._disposed = false;

    _globals.Log.setLevel(_this._options.logLevel);

    _this.run();
    return _this;
  }

  /**
   * Main entry point for the UI
   * @private
   */


  ReactUI.prototype.run = function run() {
    this._registerWebFonts();

    // Container has to be position: relative
    this._options.container.style.position = 'relative';
    this._render();
  };

  /**
   * Renders the UI
   * @private
   */


  ReactUI.prototype._render = function _render() {
    var component = _globals.React.createElement(_appComponent2.default, {
      ui: this,
      mediator: this._mediator,
      options: this._options });

    if (this._options.renderReturnsComponent) {
      return component;
    } else {
      this._component = _globals.ReactDOM.render(component, this._options.container);
    }
  };

  /**
   * Exports an image
   * @param {Boolean} download = false
   * @return {Promise}
   */


  ReactUI.prototype.export = function _export() {
    var _component;

    return (_component = this._component).export.apply(_component, arguments);
  };

  /**
   * Serializes the editor state
   * @return {Promise}
   */


  ReactUI.prototype.serialize = function serialize() {
    var _component2;

    return (_component2 = this._component).serialize.apply(_component2, arguments);
  };

  /**
   * Deserializes the given data
   * @param  {Object} data
   * @return {Promise}
   */


  ReactUI.prototype.deserialize = function deserialize(data) {
    return this._component.deserialize(data);
  };

  /**
   * Returns the editor
   * @return {PhotoEditorSDK.UI.ReactUI.Editor}
   */


  ReactUI.prototype.getEditor = function getEditor() {
    return this._component.getEditor();
  };

  // -------------------------------------------------------------------------- INITIALIZATION

  /**
   * Initializes the default options
   * @private
   */


  ReactUI.prototype._initOptions = function _initOptions() {
    this._options = _globals.SDKUtils.defaults(this._options, {
      language: 'en',
      title: 'PhotoEditor SDK',
      logLevel: 'warn',

      preloader: true,

      editor: {},
      assets: {},
      photoRoll: {},

      enableUpload: true,
      enableWebcam: true,

      showCloseButton: false,
      showHeader: true,
      showTopBar: true,
      responsive: false
    });

    this._options.editor = _globals.SDKUtils.defaults(this._options.editor || {}, {
      pixelRatio: typeof window !== 'undefined' && window.devicePixelRatio || 1,
      preferredRenderer: 'webgl',
      enableZoom: true,
      enableDrag: true,
      smoothDownscaling: false,
      smoothUpscaling: false,
      displayResizeMessage: true,
      maxMegaPixels: {},
      forceControls: [],
      watermarkImage: null,
      tools: ['crop', 'filter', 'brightness', 'saturation', 'contrast', 'clarity', 'exposure', 'shadows', 'highlights', 'text', 'sticker', 'brush', 'radial-focus', 'linear-focus', 'border'],
      controlsOrder: ['crop', ['filter', 'adjustments'], ['text', 'sticker', 'brush'], ['selectiveBlur', 'focus', 'border']],
      operationsOrder: [
      // First, all operations that affect the image dimensions
      'exif-orientation', // Automatically created by SDK
      'orientation', 'crop',

      // Then color operations (first filter, then fine-tuning)
      'filter', 'adjustments',

      // Then post-processing
      'radial-focus', 'linear-focus', 'selective-blur', 'sprite', 'border', 'watermark'],
      controlsOptions: {}
    });

    this._options.editor.maxMegaPixels = _globals.SDKUtils.defaults(this._options.editor.maxMegaPixels, {
      mobile: 5,
      desktop: 10
    });

    this._options.editor.export = _globals.SDKUtils.defaults(this._options.editor.export || {}, {
      showButton: true,
      format: 'image/png',
      type: _globals.RenderType.IMAGE,
      download: true,
      fileBasename: 'photoeditorsdk-export',
      quality: 0.8
    });

    this._options.photoRoll = _globals.SDKUtils.defaults(this._options.photoRoll || {}, {
      provider: null
    });

    this._options.extensions = _globals.SDKUtils.defaults(this._options.extensions || {}, {
      languages: {},
      operations: [],
      controls: []
    });

    this._options.assets = _globals.SDKUtils.defaults(this._options.assets || {}, {
      baseUrl: 'assets',
      resolver: null
    });
  };

  /**
   * Creates a <style> block in <head> that specifies the web fonts
   * that we use in this UI. We're doing this in JS because the assets
   * path is dynamic.
   * @private
   */


  ReactUI.prototype._registerWebFonts = function _registerWebFonts() {
    var regularFontPath = this.getAssetPath('fonts/montserrat-regular.woff', true, true);
    var lightFontPath = this.getAssetPath('fonts/montserrat-light.woff', true, true);

    var css = '\n      // Injected by PhotoEditorSDK\n      @font-face {\n        font-family: "__pesdk_Montserrat";\n        src: url(\'' + regularFontPath + '\') format(\'woff\');\n        font-weight: normal;\n        font-style: normal;\n      }\n\n      @font-face {\n        font-family: "__pesdk_Montserrat";\n        src: url(\'' + lightFontPath + '\') format(\'woff\');\n        font-weight: 100;\n        font-style: normal;\n      }\n    ';

    this._webFontsStyle = document.createElement('style');
    this._webFontsStyle.innerHTML = css;

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(this._webFontsStyle);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Catches mediator events and emits them here
   * @private
   */


  ReactUI.prototype._initEvents = function _initEvents() {
    this._mediator.pipeEvents(this);
  };

  /**
   * Unpipes the vents
   * @private
   */


  ReactUI.prototype._disposeEvents = function _disposeEvents() {
    this._mediator.unpipeEvents(this);
  };

  // -------------------------------------------------------------------------- I18N

  /**
   * Initializes the internationalization
   * @private
   */


  ReactUI.prototype._initLanguage = function _initLanguage() {
    this._languages = _globals.SDKUtils.deepDefaults(this._options.extensions.languages, {
      de: __webpack_require__(94),
      en: __webpack_require__(95)
    });
    this._language = this._languages[this._options.language];
    if (!this._language) {
      _globals.Log.error(this.constructor.name, 'Language `' + this._options.language + '` not found!');
    }
  };

  /**
   * Returns the translation for `key`
   * @param  {String} key
   * @param  {Object} [interpolationOptions]
   * @return {String}
   */


  ReactUI.prototype.translate = function translate(key, interpolationOptions) {
    return _globals.Utils.translate(this._language, key, interpolationOptions);
  };

  /**
   * Sets the image to the given one
   * @param {Image} image
   */


  ReactUI.prototype.setImage = function setImage(image) {
    if (!this._component) return;
    this._component.setImage(image);
  };

  /**
   * Returns the resolved asset path for the given asset name
   * @param  {String} asset
   * @param  {Boolean} uiAsset = false
   * @param  {Boolean} disableRetina = false
   * @return {String}
   */


  ReactUI.prototype.getAssetPath = function getAssetPath(asset) {
    var uiAsset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var disableRetina = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _options$assets = this._options.assets,
        baseUrl = _options$assets.baseUrl,
        resolver = _options$assets.resolver;

    var path = baseUrl + '/' + asset;

    if (uiAsset) {
      if (!disableRetina) {
        // Append @2x if device's pixel ratio > 1
        var pixelRatio = typeof window !== 'undefined' && window.devicePixelRatio || 1;
        if (pixelRatio > 1) {
          var regex = /\.[\w\?=]+$/;
          asset = asset.replace(regex, function (match) {
            return '@2x' + match;
          });
        }
      }

      path = baseUrl + '/ui/react/' + asset;
    }

    if (typeof resolver !== 'undefined' && resolver !== null) {
      path = resolver(path);
    }

    return path;
  };

  /**
   * Disposes the UI
   */


  ReactUI.prototype.dispose = function dispose() {
    if (this._disposed) {
      throw new Error('This instance of PhotoEditorSDK is already disposed.');
    }
    this._disposed = true;

    // Remove web fonts style
    this._webFontsStyle.parentNode.removeChild(this._webFontsStyle);

    // Unmount AppComponent
    _globals.ReactDOM.unmountComponentAtNode(this._options.container);

    this._disposeEvents();
  };

  return ReactUI;
}(_globals.EventEmitter);

/**
 * Export event
 *
 * @event PhotoEditorSDK.UI.ReactUI#export
 * @type {Image|String|Blob}
 */

/**
 * Operation created event
 *
 * @event PhotoEditorSDK.UI.ReactUI#operation:created
 * @type {PhotoEditorSDK.Operation}
 */

/**
 * Operation removed event
 *
 * @event PhotoEditorSDK.UI.ReactUI#operation:removed
 * @type {PhotoEditorSDK.Operation}
 */

/**
 * History undo event
 *
 * @event PhotoEditorSDK.UI.ReactUI#history:undo
 */

/**
 * Controls switched event
 *
 * @event PhotoEditorSDK.UI.ReactUI#controls:switched
 * @type {PhotoEditorSDK.UI.ReactUI.Controls}
 */

/**
 * A unique string that represents this UI
 * @type {String}
 */
/*!
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


ReactUI.prototype.identifier = 'react';

// Export extendable stuff
ReactUI.BaseComponent = _globals.BaseComponent;
ReactUI.BaseControls = _controls2.default;
ReactUI.ControlsComponent = _controlsComponent2.default;
ReactUI.React = _globals.React;
ReactUI.ReactBEM = _globals.ReactBEM;
ReactUI.SharedState = _globals.SharedState;
ReactUI.Constants = _globals.Constants;
ReactUI.Utils = _globals.Utils;
ReactUI.ScrollbarComponent = _scrollbarComponent2.default;
ReactUI.ModalManager = _modalManager2.default;
ReactUI.JSONLoader = _jsonLoader2.default;
ReactUI.PhotoRoll = PhotoRoll;
ReactUI.Controls = Controls;
ReactUI.SliderComponent = _sliderComponent2.default;
ReactUI.SliderOverlayComponent = _sliderOverlayComponent2.default;

/**
 * The PhotoEditorSDK UI can also be integrated as a React.js component
 * @class
 * @extends React.Component
 * @memberof PhotoEditorSDK.UI.ReactUI
 */

var ReactComponent = function (_React$Component) {
  (0, _inherits3.default)(ReactComponent, _React$Component);

  function ReactComponent() {
    (0, _classCallCheck3.default)(this, ReactComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this2._ui = new ReactUI(_this2.props);
    return _this2;
  }

  /**
   * Renders this component
   * @return {React.Element}
   */


  ReactComponent.prototype.render = function render() {
    return this._ui.render();
  };

  return ReactComponent;
}(_globals.React.Component);

ReactUI.ReactComponent = ReactComponent;

// Extend PhotoEditorSDK object
_globals.SDK.UI = _globals.SDK.UI || {};
_globals.SDK.UI.ReactUI = ReactUI;

module.exports = ReactUI;

/***/ }
/******/ ])
});
;