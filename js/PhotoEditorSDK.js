(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PhotoEditorSDK"] = factory();
	else
		root["PhotoEditorSDK"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 240);
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
"use strict";

exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(180);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(179);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(26);

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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GLUtils = exports.Promise = exports.Log = exports.Constants = exports.Color = exports.Configurable = exports.Utils = exports.EventEmitter = exports.Engine = exports.cancelAnimationFrame = exports.requestAnimationFrame = undefined;

var _animationFrame = __webpack_require__(178);

Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _animationFrame.requestAnimationFrame;
  }
});
Object.defineProperty(exports, 'cancelAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _animationFrame.cancelAnimationFrame;
  }
});

var _math = __webpack_require__(63);

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _constants = __webpack_require__(9);

var Constants = _interopRequireWildcard(_constants);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _configurable = __webpack_require__(14);

var _configurable2 = _interopRequireDefault(_configurable);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

var _log = __webpack_require__(25);

var _log2 = _interopRequireDefault(_log);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _glUtils = __webpack_require__(73);

var _glUtils2 = _interopRequireDefault(_glUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Engine = _engine2.default;
exports.EventEmitter = _eventEmitter2.default;
exports.Utils = _utils2.default;
exports.Configurable = _configurable2.default;
exports.Color = _color2.default;
exports.Constants = Constants;
exports.Log = _log2.default;
exports.Promise = _promise2.default;
exports.GLUtils = _glUtils2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _primitivesStack = __webpack_require__(143);

var _primitivesStack2 = _interopRequireDefault(_primitivesStack);

var _configurable = __webpack_require__(14);

var _configurable2 = _interopRequireDefault(_configurable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType; /* jshint unused: false */
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
 * Base class for filters. Extendable via {@link PhotoEditorSDK.Filter#extend}
 * @class
 * @memberof PhotoEditorSDK
 */
var Filter = function (_Configurable) {
  (0, _inherits3.default)(Filter, _Configurable);

  function Filter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Filter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Configurable.call(this, options, {
      intensity: {
        type: OptionType.NUMBER,
        default: 1.0,
        setter: function setter(intensity) {
          this._stack && this._stack.setIntensity(intensity);
          return intensity;
        }
      },
      dirty: {
        type: OptionType.BOOLEAN,
        default: true
      }
    }));

    _this._stack = new _primitivesStack2.default(_this._options.intensity);
    return _this;
  }

  /**
   * Renders the filter
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @param  {PhotoEditorSDK.Engine.RenderTexture} outputTexture
   * @return {Promise}
   */


  Filter.prototype.render = function render(sdk, inputTexture, outputTexture) {
    var _this2 = this;

    return this._stack.render(sdk, inputTexture, outputTexture).then(function (response) {
      _this2.setDirty(false);
      return response;
    });
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   */


  Filter.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer) {
    this._stack.setDirtyForRenderer(dirty, renderer);
  };

  /**
   * Frees the memory
   */


  Filter.prototype.disposeRenderTextures = function disposeRenderTextures() {
    this._stack.disposeRenderTextures();
  };

  /**
   * Cleans this instance up
   */


  Filter.prototype.dispose = function dispose() {
    this._stack.dispose();
  };

  return Filter;
}(_configurable2.default);

/**
 * A unique string that identifies this filter
 * @type {String}
 */


Filter.identifier = null;

/**
 * If `isIdentity` is true, this filter does not do anything and can be seen as
 * the default filter.
 * @type {Boolean}
 */
Filter.isIdentity = false;

/**
 * This string is used by the UI
 * @type {String}
 */
Filter.displayName = null;

// Exposed classes
Filter.PrimitivesStack = _primitivesStack2.default;

exports.default = Filter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brightness = __webpack_require__(144);

Object.defineProperty(exports, 'Brightness', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brightness).default;
  }
});

var _contrast = __webpack_require__(146);

Object.defineProperty(exports, 'Contrast', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contrast).default;
  }
});

var _colorMatrix = __webpack_require__(145);

Object.defineProperty(exports, 'ColorMatrixPrimitive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colorMatrix).default;
  }
});

var _desaturation = __webpack_require__(147);

Object.defineProperty(exports, 'Desaturation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_desaturation).default;
  }
});

var _gamma = __webpack_require__(148);

Object.defineProperty(exports, 'Gamma', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gamma).default;
  }
});

var _glow = __webpack_require__(149);

Object.defineProperty(exports, 'Glow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_glow).default;
  }
});

var _gobblin = __webpack_require__(150);

Object.defineProperty(exports, 'Gobblin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gobblin).default;
  }
});

var _grayscale = __webpack_require__(151);

Object.defineProperty(exports, 'Grayscale', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_grayscale).default;
  }
});

var _lookupTable = __webpack_require__(79);

Object.defineProperty(exports, 'LookupTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lookupTable).default;
  }
});

var _lookupTableImage = __webpack_require__(152);

Object.defineProperty(exports, 'LookupTableImage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lookupTableImage).default;
  }
});

var _saturation = __webpack_require__(153);

Object.defineProperty(exports, 'Saturation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_saturation).default;
  }
});

var _softColorOverlay = __webpack_require__(154);

Object.defineProperty(exports, 'SoftColorOverlay', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_softColorOverlay).default;
  }
});

var _toneCurve = __webpack_require__(155);

Object.defineProperty(exports, 'ToneCurve', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toneCurve).default;
  }
});

var _x = __webpack_require__(156);

Object.defineProperty(exports, 'X400', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_x).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _log = __webpack_require__(25);

var _log2 = _interopRequireDefault(_log);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

var _matrix = __webpack_require__(74);

var _matrix2 = _interopRequireDefault(_matrix);

var _rectangle = __webpack_require__(75);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _vector = __webpack_require__(19);

var _vector2 = _interopRequireDefault(_vector);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _glUtils = __webpack_require__(73);

var _glUtils2 = _interopRequireDefault(_glUtils);

var _constants = __webpack_require__(9);

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BATCH_SIZE = 2000; /*
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

exports.VERTEX_SIZE = 5;
exports.VERTEX_BYTE_SIZE = exports.VERTEX_SIZE * 4;

exports.Color = _color2.default;
exports.Matrix = _matrix2.default;
exports.Vector2 = _vector2.default;
exports.Rectangle = _rectangle2.default;
exports.EventEmitter = _eventEmitter2.default;
exports.Log = _log2.default;
exports.Utils = _utils2.default;
exports.Constants = Constants;
exports.GLUtils = _glUtils2.default;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
/*!
 * Native Promise Only
 * v0.8.0-a (c) Kyle Simpson
 * MIT License: http://getify.mit-license.org
 * @license
 */
/* istanbul ignore next */
(function UMD(name, context, definition) {
  // special form of UMD for polyfilling across evironments
  context[name] = context[name] || definition();
  if (typeof module != "undefined" && module.exports) {
    module.exports = context[name];
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function $AMD$() {
      return context[name];
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})("Promise", typeof global != "undefined" ? global : undefined, function DEF() {
  /*jshint validthis:true */
  "use strict";

  var builtInProp,
      cycle,
      scheduling_queue,
      ToString = Object.prototype.toString,
      timer = typeof setImmediate != "undefined" ? function timer(fn) {
    return setImmediate(fn);
  } : setTimeout;

  // dammit, IE8.
  try {
    Object.defineProperty({}, "x", {});
    builtInProp = function builtInProp(obj, name, val, config) {
      return Object.defineProperty(obj, name, {
        value: val,
        writable: true,
        configurable: config !== false
      });
    };
  } catch (err) {
    builtInProp = function builtInProp(obj, name, val) {
      obj[name] = val;
      return obj;
    };
  }

  // Note: using a queue instead of array for efficiency
  scheduling_queue = function Queue() {
    var first, last, item;

    function Item(fn, self) {
      this.fn = fn;
      this.self = self;
      this.next = void 0;
    }

    return {
      add: function add(fn, self) {
        item = new Item(fn, self);
        if (last) {
          last.next = item;
        } else {
          first = item;
        }
        last = item;
        item = void 0;
      },
      drain: function drain() {
        var f = first;
        first = last = cycle = void 0;

        while (f) {
          f.fn.call(f.self);
          f = f.next;
        }
      }
    };
  }();

  function schedule(fn, self) {
    scheduling_queue.add(fn, self);
    if (!cycle) {
      cycle = timer(scheduling_queue.drain);
    }
  }

  // promise duck typing
  function isThenable(o) {
    var _then,
        o_type = typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o);

    if (o != null && (o_type == "object" || o_type == "function")) {
      _then = o.then;
    }
    return typeof _then == "function" ? _then : false;
  }

  function notify() {
    for (var i = 0; i < this.chain.length; i++) {
      notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
    }
    this.chain.length = 0;
  }

  // NOTE: This is a separate function to isolate
  // the `try..catch` so that other code can be
  // optimized better
  function notifyIsolated(self, cb, chain) {
    var ret, _then;
    try {
      if (cb === false) {
        chain.reject(self.msg);
      } else {
        if (cb === true) {
          ret = self.msg;
        } else {
          ret = cb.call(void 0, self.msg);
        }

        if (ret === chain.promise) {
          chain.reject(TypeError("Promise-chain cycle"));
        } else if (_then = isThenable(ret)) {
          _then.call(ret, chain.resolve, chain.reject);
        } else {
          chain.resolve(ret);
        }
      }
    } catch (err) {
      chain.reject(err);
    }
  }

  function resolve(msg) {
    var _then,
        self = this;

    // already triggered?
    if (self.triggered) {
      return;
    }

    self.triggered = true;

    // unwrap
    if (self.def) {
      self = self.def;
    }

    try {
      if (_then = isThenable(msg)) {
        schedule(function () {
          var def_wrapper = new MakeDefWrapper(self);
          try {
            _then.call(msg, function $resolve$() {
              resolve.apply(def_wrapper, arguments);
            }, function $reject$() {
              reject.apply(def_wrapper, arguments);
            });
          } catch (err) {
            reject.call(def_wrapper, err);
          }
        });
      } else {
        self.msg = msg;
        self.state = 1;
        if (self.chain.length > 0) {
          schedule(notify, self);
        }
      }
    } catch (err) {
      reject.call(new MakeDefWrapper(self), err);
    }
  }

  function reject(msg) {
    var self = this;

    // already triggered?
    if (self.triggered) {
      return;
    }

    self.triggered = true;

    // unwrap
    if (self.def) {
      self = self.def;
    }

    self.msg = msg;
    self.state = 2;
    if (self.chain.length > 0) {
      schedule(notify, self);
    }
  }

  function iteratePromises(Constructor, arr, resolver, rejecter) {
    for (var idx = 0; idx < arr.length; idx++) {
      (function IIFE(idx) {
        Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
          resolver(idx, msg);
        }, rejecter);
      })(idx);
    }
  }

  function MakeDefWrapper(self) {
    this.def = self;
    this.triggered = false;
  }

  function MakeDef(self) {
    this.promise = self;
    this.state = 0;
    this.triggered = false;
    this.chain = [];
    this.msg = void 0;
  }

  function Promise(executor) {
    if (typeof executor != "function") {
      throw TypeError("Not a function");
    }

    if (this.__NPO__ !== 0) {
      throw TypeError("Not a promise");
    }

    // instance shadowing the inherited "brand"
    // to signal an already "initialized" promise
    this.__NPO__ = 1;

    var def = new MakeDef(this);

    this["then"] = function then(success, failure) {
      var o = {
        success: typeof success == "function" ? success : true,
        failure: typeof failure == "function" ? failure : false
      };
      // Note: `then(..)` itself can be borrowed to be used against
      // a different promise constructor for making the chained promise,
      // by substituting a different `this` binding.
      o.promise = new this.constructor(function extractChain(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        o.resolve = resolve;
        o.reject = reject;
      });
      def.chain.push(o);

      if (def.state !== 0) {
        schedule(notify, def);
      }

      return o.promise;
    };
    this["catch"] = function $catch$(failure) {
      return this.then(void 0, failure);
    };

    try {
      executor.call(void 0, function publicResolve(msg) {
        resolve.call(def, msg);
      }, function publicReject(msg) {
        reject.call(def, msg);
      });
    } catch (err) {
      reject.call(def, err);
    }
  }

  var PromisePrototype = builtInProp({}, "constructor", Promise,
  /*configurable=*/false);

  // Note: Android 4 cannot use `Object.defineProperty(..)` here
  Promise.prototype = PromisePrototype;

  // built-in "brand" to signal an "uninitialized" promise
  builtInProp(PromisePrototype, "__NPO__", 0,
  /*configurable=*/false);

  builtInProp(Promise, "resolve", function Promise$resolve(msg) {
    var Constructor = this;

    // spec mandated checks
    // note: best "isPromise" check that's practical for now
    if (msg && (typeof msg === "undefined" ? "undefined" : (0, _typeof3.default)(msg)) == "object" && msg.__NPO__ === 1) {
      return msg;
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      resolve(msg);
    });
  });

  builtInProp(Promise, "reject", function Promise$reject(msg) {
    return new this(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      reject(msg);
    });
  });

  builtInProp(Promise, "all", function Promise$all(arr) {
    var Constructor = this;

    // spec mandated checks
    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }
    if (arr.length === 0) {
      return Constructor.resolve([]);
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      var len = arr.length,
          msgs = Array(len),
          count = 0;

      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        msgs[idx] = msg;
        if (++count === len) {
          resolve(msgs);
        }
      }, reject);
    });
  });

  builtInProp(Promise, "race", function Promise$race(arr) {
    var Constructor = this;

    // spec mandated checks
    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        resolve(msg);
      }, reject);
    });
  });

  return Promise;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94), __webpack_require__(62).setImmediate))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _configurable = __webpack_require__(14);

var _configurable2 = _interopRequireDefault(_configurable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base class for filter primitives.
 * @class
 * @memberof PhotoEditorSDK.FilterPrimitives
 */
var Primitive = function (_Configurable) {
  (0, _inherits3.default)(Primitive, _Configurable);

  function Primitive() {
    (0, _classCallCheck3.default)(this, Primitive);
    return (0, _possibleConstructorReturn3.default)(this, _Configurable.apply(this, arguments));
  }

  /**
   * Gets called before this primitive's filter is being applied
   */
  Primitive.prototype.update = function update() {};

  /**
   * Returns this primitive's filter
   * @return {PhotoEditorSDK.Engine.Filter}
   */


  Primitive.prototype.getFilter = function getFilter() {
    return this._filter;
  };

  /**
   * Cleans up this instance
   */


  Primitive.prototype.dispose = function dispose() {
    if (this._filter) {
      this._filter.dispose();
      this._filter = null;
    }
  };

  return Primitive;
}(_configurable2.default); /* jshint unused: false */
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

exports.default = Primitive;

/***/ },
/* 9 */
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

/**
 * The available render types
 * @enum {String}
 * @alias RenderType
 * @memberof PhotoEditorSDK
 */
var RenderType = exports.RenderType = {
  IMAGE: 'image',
  DATAURL: 'data-url',
  BUFFER: 'buffer',
  BLOB: 'blob',
  MSBLOB: 'ms-blob'
};

/**
 * The available image types
 * @enum {String}
 * @alias ImageFormat
 * @memberof PhotoEditorSDK
 */
var ImageFormat = exports.ImageFormat = {
  PNG: 'image/png',
  JPEG: 'image/jpeg'
};

/**
 * Events used by the UI
 * @enum {String}
 * @alias Events
 * @memberof PhotoEditorSDK
 */
var Events = exports.Events = {
  OPERATION_UPDATED: 'operation:update'
};

/**
 * The available option types for classes inheriting {@link PhotoEditorSDK.Configurable}
 * @enum {String}
 * @alias OptionType
 * @memberof PhotoEditorSDK
 */
var OptionType = exports.OptionType = {
  NUMBER: 'number',
  VECTOR2: 'vector2',
  COLOR_MATRIX: 'color-matrix',
  COLOR: 'color',
  ARRAY: 'array',
  OBJECT: 'object',
  STRING: 'string',
  BOOLEAN: 'boolean',
  CONFIGURABLE: 'configurable',
  IMAGE: 'image',
  ALL: '*'
};

/**
 * The available uniform types for WebGL shaders
 * @enum {String}
 * @alias UniformType
 * @memberof PhotoEditorSDK
 */
var UniformType = exports.UniformType = {
  SAMPLER2D: 'sampler2d',
  INT: 'i',
  INT1: '1i',
  FLOAT: 'f',
  FLOAT1: '1f',
  FLOAT2: '2f',
  FLOAT_VECTOR2: '2fv',
  FLOAT3: '3f',
  FLOAT4: '4f',
  MAT3: 'mat3',
  MAT3FV: 'mat3fv',
  MAT4: 'mat4'
};

/**
 * The available renderer types
 * @enum {String}
 * @alias RendererType
 * @memberOf PhotoEditorSDK
 */
var RendererType = exports.RendererType = {
  WEBGL: 'webgl',
  CANVAS: 'canvas'
};

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _constants = __webpack_require__(9);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _log = __webpack_require__(25);

var _log2 = _interopRequireDefault(_log);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _configurable = __webpack_require__(14);

var _configurable2 = _interopRequireDefault(_configurable);

var _performanceTest = __webpack_require__(76);

var _performanceTest2 = _interopRequireDefault(_performanceTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base class for Operations
 * @class
 * @alias Operation
 * @extends PhotoEditorSDK.Configurable
 * @memberof PhotoEditorSDK
 */
/* jshint unused:false */
/* jshint -W083 */
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

var Operation = function (_Configurable) {
  (0, _inherits3.default)(Operation, _Configurable);

  /**
   * Creates an Operation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   */
  function Operation(sdk) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, Operation);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Configurable.call(this, options, {
      enabled: { type: _constants.OptionType.BOOLEAN, default: true }
    }));

    _this._sdk = sdk;
    _this._cacheEnabled = false;
    _this._dirtiness = {};

    _this._sprite = new _engine2.default.Sprite();
    _this._container = new _engine2.default.Container();
    _this._container.addChild(_this._sprite);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when options have been changed. Sets this operation to dirty.
   * @private
   */


  Operation.prototype._onOptionsChange = function _onOptionsChange() {
    this.setDirty(true);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Applies this operation
   * @param  {PhotoEditorSDK.Engine.RenderTexture} inputTexture
   * @return {Promise}
   * @abstract
   */


  Operation.prototype.render = function render(inputTexture) {
    var _this2 = this;

    if (!this.getEnabled()) {
      _log2.default.info(this.constructor.name, 'Disabled - skipping');
      return _promise2.default.resolve(inputTexture);
    }

    if (!this._renderTexture) {
      var frame = this._sdk.getSprite().getTexture().getFrame();
      this._renderTexture = new _engine2.default.RenderTexture(this._sdk.getRenderer(), frame.width, frame.height);
    }

    var renderer = this._sdk.getRenderer();
    var promise = void 0;
    var perf = void 0;
    if (_log2.default.canLog('info')) {
      perf = new _performanceTest2.default(this.constructor.name, 'Rendering');
    }

    // Handle caching
    if (this.isDirtyForRenderer(renderer)) {
      // Make sure that this Operation's internal sprite has the input texture and that
      // the RenderTexture we're rendering to has the same dimensions
      this._sprite.setTexture(inputTexture);

      var newDimensions = this.getNewDimensions(inputTexture.getDimensions()).floor();
      this._renderTexture.resizeTo(newDimensions);
      this._renderTexture.clear();

      // Let the operation do its work
      promise = this._render(inputTexture).then(function () {
        // Operation has been rendered - not dirty anymore
        _this2.setDirtyForRenderer(false, renderer);
        return _this2._renderTexture;
      });
    } else {
      _log2.default.info(this.constructor.name, 'Rendering from cache');
      promise = _promise2.default.resolve(this._renderTexture);
    }

    return promise.then(function (outputTexture) {
      if (perf) perf.stop();
      return outputTexture;
    });
  };

  /**
   * Renders this operation
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @return {Promise}
   * @private
   */


  Operation.prototype._render = function _render(inputTexture) {
    var renderFn = void 0;
    if (this._sdk.getRenderer().isOfType(_constants.RendererType.WEBGL)) {
      /* istanbul ignore next */
      renderFn = this._renderWebGL.bind(this);
    } else {
      renderFn = this._renderCanvas.bind(this);
    }

    return renderFn(inputTexture);
  };

  /**
   * Applies this operation using WebGL
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @protected
   * @abstract
   */


  Operation.prototype._renderWebGL = function _renderWebGL(inputTexture) {
    throw new Error('Operation#_renderWebGL is abstract and not implemented in inherited class.');
  };

  /**
   * Applies this operation using Canvas2D
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @protected
   * @abstract
   */


  Operation.prototype._renderCanvas = function _renderCanvas(inputTexture) {
    throw new Error('Operation#_renderCanvas is abstract and not implemented in inherited class.');
  };

  /**
   * Returns the dimensions that an image with the given `dimensions`
   * would have after this operation has been applied
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Operation.prototype.getNewDimensions = function getNewDimensions(dimensions) {
    return dimensions.clone();
  };

  /**
   * Resets this operation
   */


  Operation.prototype.reset = function reset() {
    this._dirty = true;
    this._glslPrograms = {};
  };

  // -------------------------------------------------------------------------- DIRTINESS

  /**
   * Checks if this operation is dirty for the given renderer
   * @param  {PhotoEditorSDK.Engine.BaseRenderer}  renderer
   * @return {Boolean}
   */


  Operation.prototype.isDirtyForRenderer = function isDirtyForRenderer(renderer) {
    var dirty = this._dirtiness[renderer.id];
    return typeof dirty === 'undefined' ? true : dirty;
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param {Boolean} dimensionsChanged = false
   */


  Operation.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer) {
    var dimensionsChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    this._dirtiness[renderer.id] = dirty;
  };

  /**
   * Sets the dirtiness for all renderers
   * @param {Boolean} dirty
   * @param {Boolean} dimensionsChanged = false
   */


  Operation.prototype.setDirty = function setDirty(dirty) {
    var dimensionsChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    for (var rendererId in this._dirtiness) {
      this.setDirtyForRenderer(dirty, { id: rendererId }, dimensionsChanged);
    }
  };

  /**
   * Returns the instance of {@link PhotoEditorSDK} that this operation belongs to
   * @return {PhotoEditorSDK}
   */


  Operation.prototype.getSDK = function getSDK() {
    return this._sdk;
  };

  /**
   * Returns the input dimensions for this operation
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Operation.prototype.getInputDimensions = function getInputDimensions() {
    var _this3 = this;

    var dimensions = this._sdk.getInputDimensions();
    var opFound = void 0;
    this._sdk.getOperationsStack().forEach(function (op) {
      if (opFound) return;
      if (op === _this3) {
        opFound = true;
        return;
      }
      dimensions = op.getNewDimensions(dimensions);
    });
    return dimensions.floor();
  };

  /**
   * Disposes the RenderTexture
   */


  Operation.prototype.disposeRenderTextures = function disposeRenderTextures() {
    if (this._renderTexture) {
      this._renderTexture.dispose();
    }
    this._renderTexture = null;
  };

  /**
   * Disposes this operation
   */


  Operation.prototype.dispose = function dispose() {
    this.disposeRenderTextures();
    this._sprite.dispose();
  };

  return Operation;
}(_configurable2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 */


Operation.identifier = null;

exports.default = Operation;

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

var _createClass2 = __webpack_require__(36);

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

/**
 * Represents a color
 * @class
 * @memberof PhotoEditorSDK
 */
var Color = function () {
  /**
   * Creates a color
   * @param  {Number} r
   * @param  {Number} g
   * @param  {Number} b
   * @param  {Number} [a = 1]
   */
  function Color(r, g, b) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
    (0, _classCallCheck3.default)(this, Color);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  /**
   * Returns an rgba() representation of this color
   * @return {String}
   */


  Color.prototype.toRGBA = function toRGBA() {
    var colors = [Math.round(this.r * 255), Math.round(this.g * 255), Math.round(this.b * 255), this.a];
    return 'rgba(' + colors.join(',') + ')';
  };

  /**
   * Returns a hex representation of this color
   * @return {String}
   */


  Color.prototype.toHex = function toHex() {
    var components = [this._componentToHex(Math.round(this.r * 255)), this._componentToHex(Math.round(this.g * 255)), this._componentToHex(Math.round(this.b * 255))];
    return '#' + components.join('');
  };

  /**
   * Returns an array with 4 values (0...1)
   * @return {Number[]}
   */


  Color.prototype.toGLColor = function toGLColor() {
    return [this.r, this.g, this.b, this.a];
  };

  /**
   * Returns an array with 4 values (0...1)
   * @return {Number[]}
   */


  Color.prototype.toArray = function toArray() {
    return this.toGLColor();
  };

  /**
   * Returns an array with 3 values (0...1)
   * @return {Number[]}
   */


  Color.prototype.toRGBGLColor = function toRGBGLColor() {
    return [this.r, this.g, this.b];
  };

  /**
   * Converts the RGB value to HSV
   * @return {Number[]}
   */


  Color.prototype.toHSV = function toHSV() {
    var max = Math.max(this.r, this.g, this.b);
    var min = Math.min(this.r, this.g, this.b);
    var h = void 0;
    var s = void 0;
    var v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case this.r:
          h = (this.g - this.b) / d;
          if (this.g < this.b) {
            h += 6;
          }
          break;
        case this.g:
          h = (this.b - this.r) / d + 2;
          break;
        case this.b:
          h = (this.r - this.g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h, s, v];
  };

  /**
   * Creates an RGBA color from the given HSV and alpha values
   * @param {Number} h
   * @param {Number} s
   * @param {Number} v
   * @param {Number} [a = 1]
   */


  Color.fromHSV = function fromHSV(h, s, v) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var _ref = [],
        r = _ref[0],
        g = _ref[1],
        b = _ref[2];


    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }

    return new Color(r, g, b, a);
  };

  /**
   * Creates a new Color object from the given array of numbers
   * @param  {Number[]} arr
   * @return {PhotoEditorSDK.Color}
   */


  Color.fromArray = function fromArray(arr) {
    return new Color(arr[0], arr[1], arr[2], arr[3]);
  };

  /**
   * Returns a clone of the current color
   * @return {PhotoEditorSDK.Color}
   */


  Color.prototype.clone = function clone() {
    return new Color(this.r, this.g, this.b, this.a);
  };

  /**
   * Checks if this color equals the given one
   * @param  {PhotoEditorSDK.Color} color
   * @return {Boolean}
   */


  Color.prototype.equals = function equals(color) {
    return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
  };

  /**
   * Returns the given number as hex
   * @param  {Number} component
   * @return {String}
   * @private
   */


  Color.prototype._componentToHex = function _componentToHex(component) {
    var hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  /**
   * Returns the string representation of this color
   * @returns {String}
   */


  Color.prototype.toString = function toString() {
    return 'Color(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
  };

  /**
   * @type {PhotoEditorSDK.Color}
   */


  (0, _createClass3.default)(Color, null, [{
    key: 'TRANSPARENT',
    get: function get() {
      return new Color(0, 0, 0, 0);
    }

    /**
     * @type {PhotoEditorSDK.Color}
     */

  }, {
    key: 'WHITE',
    get: function get() {
      return new Color(1, 1, 1, 1);
    }

    /**
     * @type {PhotoEditorSDK.Color}
     */

  }, {
    key: 'BLACK',
    get: function get() {
      return new Color(0, 0, 0, 1);
    }
  }]);
  return Color;
}();

exports.default = Color;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvasRenderer = __webpack_require__(98);

var _canvasRenderer2 = _interopRequireDefault(_canvasRenderer);

var _webglRenderer = __webpack_require__(100);

var _webglRenderer2 = _interopRequireDefault(_webglRenderer);

var _canvasFilterManager = __webpack_require__(44);

var _canvasFilterManager2 = _interopRequireDefault(_canvasFilterManager);

var _webglFilterManager = __webpack_require__(45);

var _webglFilterManager2 = _interopRequireDefault(_webglFilterManager);

var _displayObject = __webpack_require__(43);

var _displayObject2 = _interopRequireDefault(_displayObject);

var _container = __webpack_require__(67);

var _container2 = _interopRequireDefault(_container);

var _baseTexture = __webpack_require__(30);

var _baseTexture2 = _interopRequireDefault(_baseTexture);

var _texture = __webpack_require__(70);

var _texture2 = _interopRequireDefault(_texture);

var _renderTexture = __webpack_require__(103);

var _renderTexture2 = _interopRequireDefault(_renderTexture);

var _webglRenderTarget = __webpack_require__(32);

var _webglRenderTarget2 = _interopRequireDefault(_webglRenderTarget);

var _canvasRenderTarget = __webpack_require__(31);

var _canvasRenderTarget2 = _interopRequireDefault(_canvasRenderTarget);

var _sprite = __webpack_require__(102);

var _sprite2 = _interopRequireDefault(_sprite);

var _shaders = __webpack_require__(101);

var _shaders2 = _interopRequireDefault(_shaders);

var _shader = __webpack_require__(46);

var _shader2 = _interopRequireDefault(_shader);

var _filter = __webpack_require__(97);

var _filter2 = _interopRequireDefault(_filter);

var _pixelArrayImage = __webpack_require__(72);

var _pixelArrayImage2 = _interopRequireDefault(_pixelArrayImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The heart of PhotoEditorSDK. Handles all the rendering in a scene-graph fashion
 * @namespace PhotoEditorSDK.Engine
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

var Engine = {
  WebGLRenderer: _webglRenderer2.default,
  CanvasRenderer: _canvasRenderer2.default,
  WebGLFilterManager: _webglFilterManager2.default,
  CanvasFilterManager: _canvasFilterManager2.default,
  DisplayObject: _displayObject2.default,
  Container: _container2.default,
  BaseTexture: _baseTexture2.default,
  Texture: _texture2.default,
  RenderTexture: _renderTexture2.default,
  WebGLRenderTarget: _webglRenderTarget2.default,
  CanvasRenderTarget: _canvasRenderTarget2.default,
  Sprite: _sprite2.default,
  Shaders: _shaders2.default,
  Shader: _shader2.default,
  Filter: _filter2.default,
  PixelArrayImage: _pixelArrayImage2.default,

  /**
   * If WebGL is supported, this returns a WebGLRenderer and falls back to CanvasRenderer
   * @param  {Number} width
   * @param  {Number} height
   * @param  {Object} [options = {} ]
   * @return {(PhotoEditorSDK.Engine.WebGLRenderer|PhotoEditorSDK.Engine.CanvasRenderer)}
   */
  autoDetectRenderer: function autoDetectRenderer(width, height) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (_webglRenderer2.default.isSupported()) {
      return new _webglRenderer2.default(width, height, options);
    } else {
      return new _canvasRenderer2.default(width, height, options);
    }
  }
};

exports.default = Engine;

/***/ },
/* 13 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(82);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _vector = __webpack_require__(19);

var _vector2 = _interopRequireDefault(_vector);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _colorMatrix = __webpack_require__(33);

var _colorMatrix2 = _interopRequireDefault(_colorMatrix);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = void 0; /* global HTMLImageElement, WEBPACK */
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

if (true) {
  Image = window.Image;
}

/**
 * Adds `set{OptionName}` and `get{OptionName}` methods to an object. Method names
 * are specified via the `availableOptions` object.
 * @class
 * @extends EventEmitter
 * @memberof PhotoEditorSDK
 */

var Configurable = function (_EventEmitter) {
  (0, _inherits3.default)(Configurable, _EventEmitter);

  function Configurable() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var additionalAvailableOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, Configurable);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this.availableOptions = _this.availableOptions || {};
    _this.availableOptions = _utils2.default.extend(_this.availableOptions, additionalAvailableOptions);

    _this._onConfigurableUpdate = _this._onConfigurableUpdate.bind(_this);

    _this._initOptions(options);
    return _this;
  }

  /**
   * Builds an error message from the given string
   * @param  {String} message
   * @return {Error}
   * @private
   */


  Configurable.prototype._buildConfigError = function _buildConfigError(message) {
    var errorMessage = '';
    if (this.constructor.name) {
      errorMessage = this.constructor.name + ': ';
    }
    errorMessage += message;
    return new Error(errorMessage);
  };

  /**
   * Gets called when options have been changed
   * @protected
   */


  Configurable.prototype._onOptionsChange = function _onOptionsChange() {};

  /**
   * Checks whether all required options are specified
   * @return {Promise}
   */


  Configurable.prototype.validateSettings = function validateSettings() {
    var _this2 = this;

    return new _promise2.default(function (resolve, reject) {
      // Check for required options
      for (var optionName in _this2.availableOptions) {
        var optionConfig = _this2.availableOptions[optionName];
        if (optionConfig.required && typeof _this2._options[optionName] === 'undefined') {
          return reject(_this2._buildConfigError('Option `' + optionName + '` is required.'));
        }
      }

      resolve();
    });
  };

  /**
   * Goes through the available options, sets _options defaults
   * @param {Object} userOptions
   * @protected
   */


  Configurable.prototype._initOptions = function _initOptions() {
    var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._options = {};

    // Set defaults, create getters and setters
    var optionName, option, capitalized;
    var self = this;
    for (optionName in this.availableOptions) {
      capitalized = optionName.charAt(0).toUpperCase() + optionName.slice(1);
      option = this.availableOptions[optionName];

      if ([_constants.OptionType.STRING, _constants.OptionType.NUMBER, _constants.OptionType.BOOLEAN, _constants.OptionType.OBJECT, _constants.OptionType.VECTOR2, _constants.OptionType.COLOR, _constants.OptionType.CONFIGURABLE, _constants.OptionType.COLOR_MATRIX, _constants.OptionType.ARRAY, _constants.OptionType.IMAGE, _constants.OptionType.ALL].indexOf(option.type) === -1) {
        throw this._buildConfigError('Unknown option type: `' + option.type + '`');
      }

      // Create setter and getter
      var fn = function fn(optionName, option) {
        self['set' + capitalized] = function (value, update, initial) {
          self.setOption(optionName, value, update, initial);
        };

        // Default getter
        self['get' + capitalized] = function () {
          return self.getOption(optionName);
        };
      };
      fn(optionName, option);

      // Handle configurable initialization
      if (option.type === _constants.OptionType.CONFIGURABLE) {
        this._options[optionName] = new Configurable(undefined, option.structure || {});
        this._options[optionName].on('update', this._onConfigurableUpdate);
      }

      // Set default if available
      if (typeof option.default !== 'undefined' && !(optionName in userOptions)) {
        var defaultValue = option.default;
        if (typeof option.default === 'function') {
          defaultValue = option.default();
        }
        this['set' + capitalized](defaultValue, false, true);
      }
    }

    // Overwrite options with the ones given by user
    for (optionName in userOptions) {
      // Check if option is available
      if (typeof this.availableOptions[optionName] === 'undefined') {
        throw new Error('Invalid option: ' + optionName);
      }

      if (typeof userOptions[optionName] !== 'undefined') {
        // Call setter
        capitalized = optionName.charAt(0).toUpperCase() + optionName.slice(1);
        this['set' + capitalized](userOptions[optionName], false, true);
      }
    }
  };

  /**
   * Sets the given options
   * @param {Object} options
   */


  Configurable.prototype.set = function set(options) {
    var emitUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (emitUpdate) {
      this.emit('update', this, options);
    }

    for (var optionName in options) {
      this.setOption(optionName, options[optionName], false);
    }
    this._onOptionsChange();
  };

  /**
   * Returns the value for the given option
   * @param {String} optionName
   * @return {*}
   */


  Configurable.prototype.getOption = function getOption(optionName) {
    return this._options[optionName];
  };

  /**
   * Returns the default value for the given option
   * @param  {String} optionName
   * @return {*}
   */


  Configurable.prototype.getOptionDefault = function getOptionDefault(optionName) {
    var option = this.availableOptions[optionName];
    if (!option) {
      throw new Error('Invalid option: ' + optionName);
    }
    return option.default;
  };

  /**
   * Returns the options
   * @return {Object}
   */


  Configurable.prototype.getOptions = function getOptions() {
    return this._options;
  };

  /**
   * Returns a hash with the default options
   * @return {Object}
   */


  Configurable.prototype.getDefaultOptions = function getDefaultOptions() {
    var options = {};
    for (var optionName in this.availableOptions) {
      var defaultValue = this.availableOptions[optionName].default;
      if (typeof defaultValue === 'undefined') continue;

      options[optionName] = defaultValue;
    }
    return options;
  };

  /**
   * Check if the current options equal the given ones
   * @param  {Object} options
   * @return {Boolean}
   */


  Configurable.prototype.optionsEqual = function optionsEqual(options) {
    for (var optionName in options) {
      var value = options[optionName];
      if (!this._optionEquals(optionName, value)) {
        return false;
      }
    }
    return true;
  };

  /**
   * Checks if the given option has the given value
   * @param  {String} optionName
   * @param  {*} value
   * @return {Boolean}
   * @private
   */


  Configurable.prototype._optionEquals = function _optionEquals(optionName, value) {
    var option = this.availableOptions[optionName];
    if (typeof option === 'undefined') {
      throw new Error('Invalid option: ' + optionName);
    }

    var optionType = this.availableOptions[optionName].type;
    var currentValue = this._options[optionName];

    if (currentValue === value) return true;

    switch (optionType) {
      case _constants.OptionType.STRING:
      case _constants.OptionType.NUMBER:
      case _constants.OptionType.BOOLEAN:
      case _constants.OptionType.OBJECT:
      case '*':
        return currentValue === value;
      case _constants.OptionType.VECTOR2:
        return currentValue.equals(value);
      case _constants.OptionType.COLOR:
      case _constants.OptionType.COLOR_MATRIX:
        return value.equals(currentValue);
      case _constants.OptionType.CONFIGURABLE:
        return currentValue.optionsEqual(value);
      case _constants.OptionType.ARRAY:
        return this._arrayOptionEquals(optionName, value);
      case _constants.OptionType.IMAGE:
        return currentValue.src === value.src;
    }
  };

  /**
   * Checks if the given option of type `array` matches the given value
   * @param  {String} optionName
   * @param  {Array} arr
   * @return {Boolean}
   * @private
   */


  Configurable.prototype._arrayOptionEquals = function _arrayOptionEquals(optionName, arr) {
    var thisArr = this._options[optionName];
    var equal = true;
    for (var i = 0; i < thisArr.length; i++) {
      var thisValue = thisArr[i];
      var value = arr[i];
      if (thisValue instanceof Configurable) {
        if (typeof value === 'undefined' || !thisValue.optionsEqual(value)) {
          equal = false;
          break;
        }
      } else if (value !== thisValue) {
        equal = false;
        break;
      }
    }
    return equal;
  };

  /**
   * Returns a serialized version of this configurable
   * @param {Boolean} toObject = false
   * @return {Object}
   */


  Configurable.prototype.serializeOptions = function serializeOptions() {
    var _this3 = this;

    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.keys(this._options);
    var toObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var options = {};
    keys.forEach(function (key) {
      options[key] = _this3._serializeOption(key, toObject);
    });
    return options;
  };

  /**
   * Returns a serialized version of the given option
   * @param {String} optionName
   * @param {Boolean} toObject = false
   * @return {*} optionName
   * @protected
   */


  Configurable.prototype._serializeOption = function _serializeOption(optionName) {
    var toObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var optionType = this.availableOptions[optionName].type;
    var value = this._options[optionName];
    if (!value) return value;

    switch (optionType) {
      case _constants.OptionType.STRING:
      case _constants.OptionType.NUMBER:
      case _constants.OptionType.BOOLEAN:
      case _constants.OptionType.OBJECT:
      case _constants.OptionType.ALL:
        return value;
      case _constants.OptionType.VECTOR2:
        return toObject ? value.toObject() : value.clone();
      case _constants.OptionType.COLOR:
      case _constants.OptionType.COLOR_MATRIX:
        return toObject ? value.toArray() : value.clone();
      case _constants.OptionType.CONFIGURABLE:
        return value.serializeOptions(undefined, toObject);
      case _constants.OptionType.ARRAY:
        return value.slice(0);
      case _constants.OptionType.IMAGE:
        return value.src;
    }
  };

  /**
   * Sets the value for the given option, validates it
   * @param {String} optionName
   * @param {*} value
   * @param {Boolean} [update = true] - Should an `update` event be emitted?
   * @param {Boolean} [initial = false] - Is this the first time this option is set?
   */


  Configurable.prototype.setOption = function setOption(optionName, value) {
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var initial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (update) {
      this.emit('update', this, (0, _defineProperty3.default)({}, optionName, value));
    }

    var optionConfig = this.availableOptions[optionName];
    if (!optionConfig) {
      throw new Error('Invalid option: ' + optionName);
    }

    if (typeof optionConfig.setter !== 'undefined') {
      value = optionConfig.setter.call(this, value, initial);
    }

    if (typeof optionConfig.validation !== 'undefined') {
      optionConfig.validation(value);
    }

    if (value === null) {
      if (optionConfig.required) {
        throw this._buildConfigError('Option `' + optionName + '` is required.');
      }
      this._options[optionName] = value;
      return;
    } else {
      switch (optionConfig.type) {
        // String options
        case _constants.OptionType.STRING:
          if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== _constants.OptionType.STRING) {
            throw this._buildConfigError('Option `' + optionName + '` has to be a string.');
          }

          // String value restrictions
          var available = optionConfig.available;
          if (typeof available !== 'undefined' && available.indexOf(value) === -1) {
            throw this._buildConfigError('Invalid value for `' + optionName + '` (valid values are: ' + optionConfig.available.join(', ') + ')');
          }

          this._options[optionName] = value;
          break;

        // Number options
        case _constants.OptionType.NUMBER:
          if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== _constants.OptionType.NUMBER) {
            throw this._buildConfigError('Option `' + optionName + '` has to be a number.');
          }

          this._options[optionName] = value;
          break;

        // Boolean options
        case _constants.OptionType.BOOLEAN:
          if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== _constants.OptionType.BOOLEAN) {
            throw this._buildConfigError('Option `' + optionName + '` has to be a boolean.');
          }

          this._options[optionName] = value;

          break;

        // Vector2 options
        case _constants.OptionType.VECTOR2:
          if (!(value instanceof _vector2.default) && !((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && 'x' in value && 'y' in value)) {
            throw this._buildConfigError('Option `' + optionName + '` has to be an instance of Vector2 or an Object holding x and y values.');
          }

          if (value instanceof _vector2.default) {
            this._options[optionName] = value.clone();
          } else {
            this._options[optionName] = _vector2.default.fromObject(value);
          }

          break;

        // Color options
        case _constants.OptionType.COLOR:
          if (!(value instanceof _color2.default)) {
            throw this._buildConfigError('Option `' + optionName + '` has to be an instance of Color.');
          }

          this._options[optionName] = value;
          break;

        // ColorMatrix options
        case _constants.OptionType.COLOR_MATRIX:
          if (!(value instanceof _colorMatrix2.default)) {
            throw this._buildConfigError('Option `' + optionName + '` has to be an instance of ColorMatrix.');
          }

          this._options[optionName] = value.clone();

          break;

        // Object options
        case _constants.OptionType.OBJECT:
        case '*':
          this._options[optionName] = value;
          break;

        case _constants.OptionType.IMAGE:
          if (typeof value === 'string') {
            var image = new Image();
            image.src = value;
            this._options[optionName] = image;
          } else if (value instanceof Image || typeof HTMLImageElement !== 'undefined' && value instanceof HTMLImageElement) {
            this._options[optionName] = value;
          } else {
            throw this._buildConfigError('Option `' + optionName + '` has to be an Image or String.');
          }
          break;

        // Configurable options
        case _constants.OptionType.CONFIGURABLE:
          this._options[optionName].set(value);
          break;

        // Array options
        case _constants.OptionType.ARRAY:
          if (!(value instanceof Array)) {
            throw this._buildConfigError('Option `' + optionName + '` has to be an Array.');
          }
          this._options[optionName] = value.slice(0);
          break;

        // Unknown option type
        default:
          throw this._buildConfigError('Unknown option type: `' + optionConfig.type + '`');
      }
    }

    if (update) {
      this._onOptionsChange();
      this.emit('update', this, (0, _defineProperty3.default)({}, optionName, value));
    }
  };

  /**
   * Gets called when a `configurable` option has been updated
   * @param  {*} ...args
   * @private
   */


  Configurable.prototype._onConfigurableUpdate = function _onConfigurableUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.emit.apply(this, ['update'].concat(args));
  };

  return Configurable;
}(_eventEmitter2.default);

exports.default = Configurable;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(37)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 16 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(27)
  , IE8_DOM_DEFINE = __webpack_require__(86)
  , toPrimitive    = __webpack_require__(58)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(193)
  , defined = __webpack_require__(48);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(36);

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

/**
 * Represents a 2-dimensional vector while providing math functions to
 * modify / clone the vector. Fully chainable.
 * @class
 * @memberof PhotoEditorSDK.Math
 */
var Vector2 = function () {
  /**
   * Creates a Vector2
   * @param  {Number} x
   * @param  {Number} y
   */
  function Vector2(x, y) {
    (0, _classCallCheck3.default)(this, Vector2);

    this.x = x;
    this.y = y;
    if (typeof this.x === 'undefined') {
      this.x = 0;
    }
    if (typeof this.y === 'undefined') {
      this.y = 0;
    }
  }

  /**
   * Sets the given values
   * @param {Number} x
   * @param {Number} y
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.set = function set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  };

  /**
   * Creates a clone of this vector
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.clone = function clone() {
    return new Vector2(this.x, this.y);
  };

  /**
   * Copies the values of the given vector
   * @param  {PhotoEditorSDK.Math.Vector2} other
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.copy = function copy(other) {
    this.x = other.x;
    this.y = other.y;
    return this;
  };

  /**
   * Clamps this vector with the given Vector2 / Number
   * @param  {(Number|PhotoEditorSDK.Math.Vector2)} minimum
   * @param  {(Number|PhotoEditorSDK.Math.Vector2)} maximum
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.clamp = function clamp(minimum, maximum) {
    var minimumSet = minimum !== null && typeof minimum !== 'undefined';
    var maximumSet = maximum !== null && typeof maximum !== 'undefined';

    /* istanbul ignore else  */
    if (!(minimum instanceof Vector2) && minimumSet) {
      minimum = new Vector2(minimum, minimum);
    }
    /* istanbul ignore else  */
    if (!(maximum instanceof Vector2) && maximumSet) {
      maximum = new Vector2(maximum, maximum);
    }

    if (minimumSet) {
      this.x = Math.max(minimum.x, this.x);
      this.y = Math.max(minimum.y, this.y);
    }

    if (maximumSet) {
      this.x = Math.min(maximum.x, this.x);
      this.y = Math.min(maximum.y, this.y);
    }
    return this;
  };

  /**
   * Divides this vector by the given Vector2 / Number
   * @param  {(Number|PhotoEditorSDK.Math.Vector2)} divisor
   * @param  {Number} [y]
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.divide = function divide(divisor, y) {
    if (divisor instanceof Vector2) {
      this.x /= divisor.x;
      this.y /= divisor.y;
    } else {
      this.x /= divisor;
      this.y /= typeof y === 'undefined' ? divisor : y;
    }
    return this;
  };

  /**
   * Subtracts the given Vector2 / Number from this vector
   * @param  {(Number|PhotoEditorSDK.Math.Vector2)} subtrahend
   * @param  {Number} [y]
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.subtract = function subtract(subtrahend, y) {
    if (subtrahend instanceof Vector2) {
      this.x -= subtrahend.x;
      this.y -= subtrahend.y;
    } else {
      this.x -= subtrahend;
      this.y -= typeof y === 'undefined' ? subtrahend : y;
    }
    return this;
  };

  /**
   * Multiplies the given Vector2 / Number with this vector
   * @param  {(Number|PhotoEditorSDK.Math.Vector2)} subtrahend
   * @param  {Number} [y]
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.multiply = function multiply(factor, y) {
    if (factor instanceof Vector2) {
      this.x *= factor.x;
      this.y *= factor.y;
    } else {
      this.x *= factor;
      this.y *= typeof y === 'undefined' ? factor : y;
    }
    return this;
  };

  /**
   * Adds the given Vector2 / Numbers to this vector
   * @param {(Number|PhotoEditorSDK.Math.Vector2)} addend
   * @param {Number} [y]
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.add = function add(addend, y) {
    if (addend instanceof Vector2) {
      this.x += addend.x;
      this.y += addend.y;
    } else {
      this.x += addend;
      this.y += typeof y === 'undefined' ? addend : y;
    }
    return this;
  };

  /**
   * Checks whether the x and y value are the same as the given ones
   * @param  {(Number|PhotoEditorSDK.Math.Vector2)} vec
   * @param  {Number} y
   * @return {Boolean}
   */


  Vector2.prototype.equals = function equals(vec, y) {
    if (vec instanceof Vector2) {
      return vec.x === this.x && vec.y === this.y;
    } else {
      return vec === this.x && y === this.y;
    }
  };

  /**
   * Flips the x and y values of this vector
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.flip = function flip() {
    var tempX = this.x;
    this.x = this.y;
    this.y = tempX;
    return this;
  };

  /**
   * Rounds the values of this vector
   * @returns {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.round = function round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };

  /**
   * Rounds up the values of this vector
   * @returns {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.ceil = function ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };

  /**
   * Rounds down the values of this vector
   * @returns {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.floor = function floor() {
    this.x = this.x | 0;
    this.y = this.y | 0;
    return this;
  };

  /**
   * Makes both numbers of this vector positive
   * @returns {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.prototype.abs = function abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    return this;
  };

  /**
   * Returns the euclidean length of this vector
   * @return {Number}
   */


  Vector2.prototype.len = function len() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  /**
   * Returns the smallest number in this vector
   * @return {Number}
   */


  Vector2.prototype.min = function min() {
    return Math.min(this.x, this.y);
  };

  /**
   * Returns the largest number in this vector
   * @return {Number}
   */


  Vector2.prototype.max = function max() {
    return Math.max(this.x, this.y);
  };

  /**
   * Returns a POJO of this Vector2
   * @return {Object}
   */


  Vector2.prototype.toObject = function toObject() {
    return { x: this.x, y: this.y };
  };

  /**
   * Returns a string representation of this vector
   * @return {String}
   */


  Vector2.prototype.toString = function toString() {
    return 'Vector2({ x: ' + this.x + ', y: ' + this.y + ' })';
  };

  /**
   * Rounds this vector's values to the given number of decimals
   * @param  {Number} decimals
   * @return {Number}
   */


  Vector2.prototype.roundDecimal = function roundDecimal(decimals) {
    this.x = parseFloat(this.x.toFixed(decimals));
    this.y = parseFloat(this.y.toFixed(decimals));
    return this;
  };

  /**
   * Creates a new Vector2 instance from the given Object
   * @param  {Object} object
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Vector2.fromObject = function fromObject(object) {
    return new Vector2(object.x, object.y);
  };

  /**
   * Returns a null vector
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  (0, _createClass3.default)(Vector2, null, [{
    key: 'NULL',
    get: function get() {
      return new Vector2(0, 0);
    }
  }]);
  return Vector2;
}();

exports.default = Vector2;

/***/ },
/* 20 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(17)
  , createDesc = __webpack_require__(39);
module.exports = __webpack_require__(15) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(56)('wks')
  , uid        = __webpack_require__(40)
  , Symbol     = __webpack_require__(13).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _log = __webpack_require__(25);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_MAX_LISTENERS = 12;

/**
 * Receives and emits events
 * @class
 * @memberof PhotoEditorSDK
 * @ignore
 */
/**
 * EventEmitter (ES6) from:
 * https://gist.github.com/bloodyowl/41b1de3388c626796eca
 */

var EventEmitter = function () {
  /**
   * Creates an EventEmitter
   */
  function EventEmitter() {
    (0, _classCallCheck3.default)(this, EventEmitter);

    this._maxListeners = DEFAULT_MAX_LISTENERS;
    this._events = {};
    this._pipeDestinations = [];
  }

  /**
   * Pipes all events to the given EventEmitter
   * @param  {EventEmitter} destination
   */


  EventEmitter.prototype.pipeEvents = function pipeEvents(destination) {
    this._pipeDestinations.push(destination);
  };

  /**
   * Stops piping events to the given EventEmitter
   * @param  {EventEmitter} destination
   */


  EventEmitter.prototype.unpipeEvents = function unpipeEvents(destination) {
    var i = this._pipeDestinations.indexOf(destination);
    if (i === -1) {
      return;
    }
    this._pipeDestinations.splice(i, 1);
  };

  /**
   * Adds the given listener to the given type of events
   * @param  {String} type
   * @param  {Function} listener
   */


  EventEmitter.prototype.on = function on(type, listener) {
    if (typeof listener !== 'function') {
      throw new TypeError();
    }

    var listeners = this._events[type] || (this._events[type] = []);
    if (listeners.indexOf(listener) !== -1) {
      return this;
    }
    listeners.push(listener);

    if (this._maxListeners && listeners.length > this._maxListeners) {
      _log2.default.warn('EventEmitter', 'Possible memory leak detected, added ' + listeners.length + ' `' + type + '` listeners (current limit is ' + this._maxListeners + ')');
      console.trace();
    }
    return this;
  };

  /**
   * Adds the given listener to the given type of events and removes it
   * once it has been triggered
   * @param  {String} type
   * @param  {Function} listener
   */


  EventEmitter.prototype.once = function once(type, listener) {
    var eventsInstance = this;
    function onceCallback() {
      eventsInstance.off(type, onceCallback);
      listener.apply(null, arguments);
    }
    return this.on(type, onceCallback);
  };

  /**
   * Removes the given listener from the given type of events
   * @param  {String} type
   * @param  {*} ...args
   */


  EventEmitter.prototype.off = function off(type) {
    if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 0) {
      this._events[type] = null;
      return this;
    }

    var listener = arguments.length <= 1 ? undefined : arguments[1];
    if (typeof listener !== 'function') {
      throw new TypeError();
    }

    var listeners = this._events[type];
    if (!listeners || !listeners.length) {
      return this;
    }

    var indexOfListener = listeners.indexOf(listener);
    if (indexOfListener === -1) {
      return this;
    }

    listeners.splice(indexOfListener, 1);
    return this;
  };

  /**
   * Emits an event with the given type and arguments
   * @param  {String} type
   * @param  {*} ...args
   */


  EventEmitter.prototype.emit = function emit(type) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this._pipeDestinations.forEach(function (dest) {
      dest.emit.apply(dest, [type].concat(args));
    });

    var listeners = this._events[type];
    if (!listeners || !listeners.length) {
      return false;
    }

    listeners.forEach(function (fn) {
      return fn.apply(null, args);
    });

    return true;
  };

  /**
   * Sets the maximum amonut of listeners before a warning is printed
   * @param {Number} newMaxListeners
   */


  EventEmitter.prototype.setMaxListeners = function setMaxListeners(newMaxListeners) {
    if (parseInt(newMaxListeners, 10) !== newMaxListeners) {
      throw new TypeError();
    }

    this._maxListeners = newMaxListeners;
  };

  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _base = __webpack_require__(41);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Provides utility functions for internal use
 * @class
 * @memberof PhotoEditorSDK
 * @private
 */
var Utils = function () {
  function Utils() {
    (0, _classCallCheck3.default)(this, Utils);
  }

  /**
   * Checks if the given object is an Array
   * @param  {Object}  object
   * @return {Boolean}
   */
  Utils.isArray = function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
  };

  /**
   * Checks whether the user agent represents a mobile device
   * @return {Boolean}
   */


  Utils.isMobile = function isMobile() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    /* eslint-disable */
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    );
    /* eslint-enable */
  };

  /**
   * Returns the given object's values as an array
   * @param {Object} object
   * @returns {Array<*>}
   */


  Utils.values = function values(object) {
    var values = [];
    for (var key in object) {
      values.push(object[key]);
    }
    return values;
  };

  /**
   * Checks if the given object is a DOM element
   * @param  {Object}  o
   * @return {Boolean}
   */
  /* istanbul ignore next */


  Utils.isDOMElement = function isDOMElement(o) {
    return (typeof HTMLElement === 'undefined' ? 'undefined' : (0, _typeof3.default)(HTMLElement)) === 'object' ? o instanceof HTMLElement : o && (typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string';
  };

  /**
   * Checks if th given event is a touch event
   * @param  {Event}  e
   * @return {Boolean}
   */


  Utils.isTouchEvent = function isTouchEvent(e) {
    return e.type.indexOf('touch') !== -1;
  };

  /**
   * Resizes the given vector to fit inside the given max size while maintaining
   * the aspect ratio
   * @param  {Vector2} vector
   * @param  {Vector2} max
   * @return {Vector2}
   */


  Utils.resizeVectorToFit = function resizeVectorToFit(vector, max) {
    var scale = Math.min(max.x / vector.x, max.y / vector.y);
    var newSize = vector.clone().multiply(scale);
    return newSize;
  };

  /**
   * Checks if this value is extendable / can have keys
   * @param  {*}  val
   * @return {Boolean}
   */


  Utils.isExtendable = function isExtendable(val) {
    return typeof val !== 'undefined' && val !== null && ((typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object' || typeof val === 'function');
  };

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object for all destination properties that resolve to undefined. Once a
   * property is set, additional values of the same property are ignored.
   * @param  {Object} object
   * @param  {Object} ...sources
   * @return {Object}
   */


  Utils.defaults = function defaults(object) {
    // Shallow clone
    var newObject = {};
    for (var key in object) {
      newObject[key] = object[key];
    }

    // Clone sources

    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];
      for (var _key2 in source) {
        if (typeof newObject[_key2] === 'undefined') {
          newObject[_key2] = source[_key2];
        }
      }
    }

    return newObject;
  };

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object for all destination properties and their properties that resolve to
   * undefined. Once a property is set, additional value sof the same property
   * are ignored.
   * @param  {Object} object
   * @param  {Object} ...sources
   * @return {Object}
   */


  Utils.deepDefaults = function deepDefaults(object) {
    // Shallow clone
    var newObject = {};
    for (var key in object) {
      newObject[key] = object[key];
    }

    // Clone sources

    for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
      sources[_key3 - 1] = arguments[_key3];
    }

    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];
      for (var _key4 in source) {
        if (Utils.isExtendable(newObject[_key4]) && Utils.isExtendable(source[_key4])) {
          newObject[_key4] = Utils.deepDefaults(newObject[_key4], source[_key4]);
        } else if (typeof newObject[_key4] === 'undefined') {
          newObject[_key4] = source[_key4];
        }
      }
    }

    return newObject;
  };

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object. Subsequent sources overwrite property assignments of previous
   * sources.
   * @param {Object} object
   * @param {Object} ...sources
   * @return {Object}
   */


  Utils.extend = function extend(object) {
    // Shallow clone
    var newObject = {};
    for (var key in object) {
      newObject[key] = object[key];
    }

    // Extend sources

    for (var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key5 = 1; _key5 < _len3; _key5++) {
      sources[_key5 - 1] = arguments[_key5];
    }

    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];
      for (var _key6 in source) {
        newObject[_key6] = source[_key6];
      }
    }

    return newObject;
  };

  /**
   * Creates a shallow clone of the given object
   * @param {Object} object
   * @returns {Object}
   */


  Utils.clone = function clone(object) {
    return this.extend({}, object);
  };

  /**
   * Creates a Blob URI from the given Data URI
   * @param {String} data
   */


  Utils.createBlobURIFromDataURI = function createBlobURIFromDataURI(data) {
    if (!window.Blob || !window.URL || !ArrayBuffer || !Uint8Array) {
      return data;
    }

    var rawData = _base2.default.decode(data.split(',')[1]);
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

  /**
   * Vendor proxy for requestAnimationFrame
   * @param  {Function} cb
   * @return {Number}
   */


  Utils.requestAnimationFrame = function requestAnimationFrame(cb) {
    var fallback = function fallback(callback) {
      setTimeout(callback, 1000 / 60);
    };

    if (typeof window === 'undefined') {
      return fallback(cb);
    }

    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fallback)(cb);
  };

  /**
   * Generates a UUID
   * @return {String}
   */


  Utils.getUUID = function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };

  /**
   * Flattens the given multidimensional array
   * @return {Array}
   */


  Utils.flatten = function flatten(array) {
    return array.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? Utils.flatten(toFlatten) : toFlatten);
    }, []);
  };

  /**
   * Creates a canvas DOM element (browser) or a node-canvas canvas (node)
   * @return {Canvas}
   */


  Utils.createCanvas = function createCanvas() {
    return document.createElement('canvas');
  };

  /**
   * Checks if the given dimensions are POT
   * @param  {PhotoEditorSDK.Math.Vector2}  dimensions
   * @return {Boolean}
   */


  Utils.isPowerOfTwo = function isPowerOfTwo(dimensions) {
    return (dimensions.x & dimensions.x - 1) === 0 && (dimensions.y & dimensions.y - 1) === 0;
  };

  /**
   * Returns the next lowest power of two of the given number
   * @param  {Number} x
   * @return {Number}
   */


  Utils.nextLowestPOT = function nextLowestPOT(x) {
    for (var i = 1; i < 32; i <<= 1) {
      x = x | x >> i;
    }
    return x - (x >> 1);
  };

  /**
   * Returns the next highest power of two of the given number
   * @param  {Number} x
   * @return {Number}
   */


  Utils.nextHighestPOT = function nextHighestPOT(x) {
    x--;
    for (var i = 1; i < 32; i <<= 1) {
      x = x | x >> i;
    }
    return x + 1;
  };

  /**
   * Moves the array item at `oldIndex` to `newIndex`
   * @param  {Array} arr
   * @param  {Number} oldIndex
   * @param  {Number} newIndex
   */


  Utils.moveArrayItem = function moveArrayItem(arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
      var k = newIndex - arr.length;
      while (k-- + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  };

  /**
   * Makes sure the given canvas has the given dimensions. If not, it does not change the
   * canvas dimensions.
   * @param  {Canvas} canvas
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  Utils.ensureCanvasDimensions = function ensureCanvasDimensions(canvas, dimensions) {
    if (canvas.width !== dimensions.x || canvas.height !== dimensions.y) {
      canvas.width = dimensions.x;
      canvas.height = dimensions.y;
    }
  };

  return Utils;
}(); /* global HTMLElement, WEBPACK */
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

exports.default = Utils;

/***/ },
/* 25 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _iterator = __webpack_require__(182);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(181);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(13)
  , core      = __webpack_require__(20)
  , ctx       = __webpack_require__(84)
  , hide      = __webpack_require__(21)
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
/* 29 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A BaseTexture holds and handles the raw source of a texture
 * @class
 * @extends EventEmitter
 * @memberof PhotoEditorSDK.Engine
 */
var BaseTexture = function (_EventEmitter) {
  (0, _inherits3.default)(BaseTexture, _EventEmitter);

  /**
   * Creates a BaseTexture
   * @param  {*} source
   */
  function BaseTexture(source) {
    (0, _classCallCheck3.default)(this, BaseTexture);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this.id = BaseTexture.id++;
    _this._onSourceLoaded = _this._onSourceLoaded.bind(_this);

    _this._renderers = [];
    _this._glTextures = {};
    _this._source = source;
    _this._dirty = true;

    _this._glUnit = 0;
    _this._mipMapping = false;
    _this._magFilter = BaseTexture.DefaultMagFilter;
    _this._minFilter = BaseTexture.DefaultMinFilter;

    _this._pixelRatio = 1;
    _this._loaded = false;
    _this._frame = new _globals.Rectangle(0, 0, 100, 100);

    if (source) {
      _this._loadSource();
    }
    return _this;
  }

  /**
   * Resizes this BaseTexture to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  BaseTexture.prototype.resizeTo = function resizeTo(dimensions) {
    this._frame.width = dimensions.x;
    this._frame.height = dimensions.y;
  };

  /**
   * Loads the source
   * @private
   */


  BaseTexture.prototype._loadSource = function _loadSource() {
    var source = this._source;

    var sourceLoaded = source.complete;
    var sourceIsCanvas = source.constructor.name === 'Canvas' || source.tagName && source.tagName.toUpperCase() === 'CANVAS';
    if (sourceLoaded || sourceIsCanvas) {
      return this._onSourceLoaded();
    }

    source.addEventListener('load', this._onSourceLoaded);
  };

  /**
   * Gets called when the source of this BaseTexture has been loaded
   * @private
   */


  BaseTexture.prototype._onSourceLoaded = function _onSourceLoaded() {
    this._loaded = true;
    this._updateGLFilters();
    this.emit('loaded');
    this.update();
  };

  /**
   * If mip-mapping is available, update GL filters accordingly
   * @private
   */
  /* istanbul ignore next */


  BaseTexture.prototype._updateGLFilters = function _updateGLFilters() {
    var sourceDimensions = new _globals.Vector2(this._source.width, this._source.height);
    if (_globals.Utils.isPowerOfTwo(sourceDimensions)) {
      _globals.Log.info(this.constructor.name, 'Mip-mapping enabled');
      this._minFilter = BaseTexture.TrilinearFilter;
      this._mipMapping = true;
    }
  };

  /**
   * Updates the cached dimensions of this BaseTexture's source
   */


  BaseTexture.prototype.update = function update() {
    this._frame = new _globals.Rectangle(0, 0, this._source.width, this._source.height);
    this.emit('update');
  };

  /**
   * Returns the filter for the given direction from the given WebGL context
   * @param  {WebGLRenderingContext} gl
   * @param  {String} minOrMag
   * @return {Number}
   */
  /* istanbul ignore next */


  BaseTexture.prototype.getGLFilter = function getGLFilter(gl, minOrMag) {
    switch (minOrMag) {
      case 'min':
        return this.constructor.getGLFilter(gl, this._minFilter);
      case 'mag':
        return this.constructor.getGLFilter(gl, this._magFilter);
    }
  };

  /**
   * Returns the filter for the given enum value from the given WebGL context
   * @param  {WebGLRenderingContext} gl
   * @param  {Number} filterEnum
   * @return {Number}
   */
  /* istanbul ignore next */


  BaseTexture.getGLFilter = function getGLFilter(gl, filterEnum) {
    switch (filterEnum) {
      case BaseTexture.LinearFilter:
        return gl.LINEAR;
      case BaseTexture.NearestFilter:
        return gl.NEAREST;
      case BaseTexture.BilinearFilter:
        return gl.LINEAR_MIPMAP_NEAREST;
      case BaseTexture.TrilinearFilter:
        return gl.LINEAR_MIPMAP_LINEAR;
    }
  };

  /**
   * Checks if this BaseTexture has been loaded
   * @return {Boolean}
   */


  BaseTexture.prototype.isLoaded = function isLoaded() {
    return this._loaded;
  };

  /**
   * Sets the loaded state
   * @param {Boolean} loaded
   */


  BaseTexture.prototype.setLoaded = function setLoaded(loaded) {
    this._loaded = loaded;
  };

  /**
   * Returns the source
   * @return {*} s
   */


  BaseTexture.prototype.getSource = function getSource() {
    return this._source;
  };

  /**
   * Sets the source
   * @param {*} source
   */


  BaseTexture.prototype.setSource = function setSource(source) {
    this._source = source;
  };

  /**
   * Returns the WebGL texture for the given renderer ID
   * @param  {PhotoEditorSDK.Engine.Renderer} renderer
   * @return {WebGLTexture}
   */
  /* istanbul ignore next */


  BaseTexture.prototype.getGLTextureForRenderer = function getGLTextureForRenderer(renderer) {
    return this._glTextures[renderer.id];
  };

  /**
   * Sets the WebGLTexture for the given renderer ID
   * @param {WebGLTexture} texture
   * @param {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   */
  /* istanbul ignore next */


  BaseTexture.prototype.setGLTextureForRenderer = function setGLTextureForRenderer(texture, renderer) {
    this._renderers[renderer.id] = renderer;
    this._glTextures[renderer.id] = texture;
  };

  /**
   * Returns the frame
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  BaseTexture.prototype.getFrame = function getFrame() {
    return this._frame;
  };

  /**
   * Sets the frame
   * @param {PhotoEditorSDK.Math.Rectangle} frame
   */


  BaseTexture.prototype.setFrame = function setFrame(frame) {
    this._frame = frame;
  };

  /**
   * Returns the dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  BaseTexture.prototype.getDimensions = function getDimensions() {
    return new _globals.Vector2(this._frame.width, this._frame.height);
  };

  /**
   * Returns the pixel ratio
   * @return {Number}
   */


  BaseTexture.prototype.getPixelRatio = function getPixelRatio() {
    return this._pixelRatio;
  };

  /**
   * Sets the pixel ratio
   * @param {Number} pixelRatio
   */


  BaseTexture.prototype.setPixelRatio = function setPixelRatio(pixelRatio) {
    this._pixelRatio = pixelRatio;
  };

  /**
   * Returns the WebGL texture unit
   * @return {Number}
   */
  /* istanbul ignore next */


  BaseTexture.prototype.getGLUnit = function getGLUnit() {
    return this._glUnit;
  };

  /**
   * Sets the WebGL texture unit
   * @param {Number} glUnit
   */
  /* istanbul ignore next */


  BaseTexture.prototype.setGLUnit = function setGLUnit(glUnit) {
    this._glUnit = glUnit;
  };

  /**
   * Sets the min filter to the given one
   * @param {Number} minFilter
   */
  /* istanbul ignore next */


  BaseTexture.prototype.setMinFilter = function setMinFilter(minFilter) {
    this._minFilter = minFilter;
  };

  /**
   * Returns this texture's min filter
   * @return {Number}
   */
  /* istanbul ignore next */


  BaseTexture.prototype.getMinFilter = function getMinFilter() {
    return this._minFilter;
  };

  /**
   * Sets the mag filter to the given one
   * @param {Number} magFilter
   */
  /* istanbul ignore next */


  BaseTexture.prototype.setMagFilter = function setMagFilter(magFilter) {
    this._magFilter = magFilter;
  };

  /**
   * Returns this texture's mag filter
   * @return {Number}
   */
  /* istanbul ignore next */


  BaseTexture.prototype.getMagFilter = function getMagFilter() {
    return this._magFilter;
  };

  /**
   * Checks if this base texture needs to be updated
   * @return {Boolean}
   */
  /* istanbul ignore next */


  BaseTexture.prototype.isDirty = function isDirty() {
    return this._dirty;
  };

  /**
   * Sets the dirtiness of this base texture
   * @param {Boolean} dirty
   */
  /* istanbul ignore next */


  BaseTexture.prototype.setDirty = function setDirty(dirty) {
    this._dirty = dirty;
  };

  /**
   * Disposes the WebGL textures for all renderers
   */
  /* istanbul ignore next */


  BaseTexture.prototype.disposeGLTextures = function disposeGLTextures() {
    for (var rendererId in this._renderers) {
      this.disposeGLTexturesForRenderer(this._renderers[rendererId]);
    }
  };

  /**
   * Disposes the WebGL textures for the given renderer
   * @param {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   */
  /* istanbul ignore next */


  BaseTexture.prototype.disposeGLTexturesForRenderer = function disposeGLTexturesForRenderer(renderer) {
    if (!this._glTextures[renderer.id]) return;

    var gl = renderer.getContext();
    gl.deleteTexture(this._glTextures[renderer.id]);
    delete this._glTextures[renderer.id];

    if (!this._renderers[renderer.id]) {
      delete this._renderers[renderer.id];
    }
  };

  /**
   * Checks if mip-mapping is enabled for this texture
   * @return {Boolean}
   */


  BaseTexture.prototype.isMipMappingEnabled = function isMipMappingEnabled() {
    return this._mipMapping;
  };

  /**
   * Cleans up this object
   * @param  {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   */


  BaseTexture.prototype.dispose = function dispose() {
    var renderer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.disposeGLTextures();
  };

  return BaseTexture;
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

BaseTexture.NearestFilter = 0;
BaseTexture.LinearFilter = 1;
BaseTexture.BilinearFilter = 2;
BaseTexture.TrilinearFilter = 3;

BaseTexture.DefaultMagFilter = BaseTexture.NearestFilter;
BaseTexture.DefaultMinFilter = BaseTexture.LinearFilter;
exports.default = BaseTexture;

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

var _globals = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A canvas render target that you can render to.
 * Canvas equivalent of {@link PhotoEditorSDK.Engine.WebGLRenderTarget}
 * @class
 * @memberof PhotoEditorSDK.Engine
 */
var CanvasRenderTarget = function () {
  /**
   * Creates a CanvasRenderTarget
   * @param  {Number} width
   * @param  {Number} height
   * @param  {Number} pixelRatio
   * @param  {HTMLCanvasElement} canvas
   * @param  {CanvasRenderingContext2D} context
   */
  function CanvasRenderTarget(width, height, pixelRatio, canvas, context) {
    (0, _classCallCheck3.default)(this, CanvasRenderTarget);

    this._width = width;
    this._height = height;
    this._pixelRatio = pixelRatio;

    this._canvas = canvas || this._createCanvas();
    this._context = context || this._canvas.getContext('2d');

    this._canvas.width = this._width * this._pixelRatio;
    this._canvas.height = this._height * this._pixelRatio;
    this._filterStack = [{
      renderTarget: this,
      filter: []
    }];
  }

  /**
   * Creates a canvas
   * @return {Canvas}
   * @private
   */


  CanvasRenderTarget.prototype._createCanvas = function _createCanvas() {
    return _globals.Utils.createCanvas();
  };

  /**
   * Clears this CanvasRenderTarget
   */


  CanvasRenderTarget.prototype.clear = function clear() {
    var ctx = this._context;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this._width * this._pixelRatio, this._height * this._pixelRatio);
  };

  /**
   * Resizes this canvas buffer to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  CanvasRenderTarget.prototype.resizeTo = function resizeTo(dimensions) {
    if (this._width !== dimensions.x) {
      this._width = dimensions.x;
      this._canvas.width = this._width * this._pixelRatio;
    }

    if (this._height !== dimensions.y) {
      this._height = dimensions.y;
      this._canvas.height = this._height * this._pixelRatio;
    }
  };

  /**
   * Returns the canvas
   * @return {HTMLCanvasElement}
   */


  CanvasRenderTarget.prototype.getCanvas = function getCanvas() {
    return this._canvas;
  };

  /**
   * Returns the rendering context
   * @return {CanvasRenderingContext2D} [description]
   */


  CanvasRenderTarget.prototype.getContext = function getContext() {
    return this._context;
  };

  /**
   * Returns the filter stack
   * @return {Object[]}
   */


  CanvasRenderTarget.prototype.getFilterStack = function getFilterStack() {
    return this._filterStack;
  };

  /**
   * Returns the width
   * @return {Number}
   */


  CanvasRenderTarget.prototype.getWidth = function getWidth() {
    return this._width;
  };

  /**
   * Returns the height
   * @return {Number}
   */


  CanvasRenderTarget.prototype.getHeight = function getHeight() {
    return this._height;
  };

  /**
   * Returns the pixel ratio
   * @return {Number}
   */


  CanvasRenderTarget.prototype.getPixelRatio = function getPixelRatio() {
    return this._pixelRatio;
  };

  /**
   * Sets the pixel ratio
   * @param {Number} pixelRatio
   */


  CanvasRenderTarget.prototype.setPixelRatio = function setPixelRatio(pixelRatio) {
    this._pixelRatio = pixelRatio;
  };

  /**
   * Returns the dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  CanvasRenderTarget.prototype.getDimensions = function getDimensions() {
    return new _globals.Vector2(this._width, this._height);
  };

  /**
   * Cleans up this canvas buffer
   */


  CanvasRenderTarget.prototype.dispose = function dispose() {
    this._canvas = null;
    this._context = null;
  };

  return CanvasRenderTarget;
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

exports.default = CanvasRenderTarget;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(6);

var _baseTexture = __webpack_require__(30);

var _baseTexture2 = _interopRequireDefault(_baseTexture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An object that you can render to. WebGL equivalent of {@link PhotoEditorSDK.Engine.CanvasRenderTarget}
 * @class
 * @memberof PhotoEditorSDK.Engine
 */
/* istanbul ignore next */
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

var WebGLRenderTarget = function () {
  /**
   * Creates a WebGLRenderTarget
   * @param  {PhotoEditorSDK.Engine.BaseRenderer}  renderer
   * @param  {Number}  width
   * @param  {Number}  height
   * @param  {Number}  pixelRatio
   * @param  {Boolean} [isRoot = false]
   */
  function WebGLRenderTarget(renderer, width, height, pixelRatio) {
    var isRoot = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    (0, _classCallCheck3.default)(this, WebGLRenderTarget);

    this._renderer = renderer;
    this._gl = renderer.getContext();
    this._width = width;
    this._height = height;
    this._frame = null;
    this._pixelRatio = pixelRatio;
    this._projectionMatrix = new _globals.Matrix();
    this._mipMapping = false;

    // `null` means render to canvas directly
    this._framebuffer = null;
    this._isRoot = isRoot;
    this._filterStack = [{
      renderTarget: this,
      filter: []
    }];

    if (!isRoot) {
      this._initFrameBuffer();
    }
  }

  /**
   * Resizes this WebGLRenderTarget to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  WebGLRenderTarget.prototype.resizeTo = function resizeTo(dimensions) {
    this._width = dimensions.x | 0; // rounded
    this._height = dimensions.y | 0; // rounded

    if (!this._isRoot) {
      this._resizeTexture();
    }

    this._calculateProjectionMatrix();
  };

  /**
   * Sets / updates the texture parameters
   * @private
   */


  WebGLRenderTarget.prototype._setTexParameters = function _setTexParameters() {
    var gl = this._gl;
    gl.bindTexture(gl.TEXTURE_2D, this._texture);

    // Set repeat parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    // Set scale parameters
    var minFilter = _baseTexture2.default.DefaultMinFilter;
    var magFilter = _baseTexture2.default.DefaultMagFilter;
    var dimensions = new _globals.Vector2(this._width, this._height);
    if (_globals.Utils.isPowerOfTwo(dimensions)) {
      _globals.Log.info('WebGLRenderTarget', 'Mip-mapping enabled');
      this._mipMapping = true;
      this.updateMipMap();
      minFilter = _baseTexture2.default.BilinearFilter;
    }

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, _baseTexture2.default.getGLFilter(gl, minFilter));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, _baseTexture2.default.getGLFilter(gl, magFilter));
  };

  /**
   * Updates the mip map of this RenderTarget
   */


  WebGLRenderTarget.prototype.updateMipMap = function updateMipMap() {
    if (!this._mipMapping) {
      return false;
    }
    var gl = this._gl;
    gl.bindTexture(gl.TEXTURE_2D, this._texture);
    gl.generateMipmap(gl.TEXTURE_2D);
  };

  /**
   * Resizes the FBO's texture to the current dimensions
   * @private
   */


  WebGLRenderTarget.prototype._resizeTexture = function _resizeTexture() {
    var gl = this._gl;
    gl.bindTexture(gl.TEXTURE_2D, this._texture);

    var realWidth = this._width * this._pixelRatio;
    var realHeight = this._height * this._pixelRatio;
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, realWidth, realHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    this._setTexParameters();
  };

  /**
   * Binds the framebuffer and resizes the viewport
   */


  WebGLRenderTarget.prototype.activate = function activate() {
    var gl = this._gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);

    this._calculateProjectionMatrix();

    gl.viewport(0, 0, this._width * this._pixelRatio, this._height * this._pixelRatio);
    gl.disable(gl.STENCIL_TEST);
  };

  /**
   * Clears the framebuffer
   */


  WebGLRenderTarget.prototype.clear = function clear() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _globals.Color.TRANSPARENT;

    var gl = this._gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);

    _globals.GLUtils.checkFramebufferStatus('WebGLRenderTarget#clear', gl);

    gl.clearColor.apply(gl, color.toGLColor());
    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  /**
   * Calculates the projection matrix for this render target
   * @private
   */


  WebGLRenderTarget.prototype._calculateProjectionMatrix = function _calculateProjectionMatrix() {
    var projectionMatrix = this._projectionMatrix;
    projectionMatrix.reset();

    var frame = this._frame || new _globals.Rectangle(0, 0, this._width, this._height);

    var x = frame.x,
        y = frame.y;

    if (!this._isRoot) {
      projectionMatrix.a = 1 / this._width * 2;
      projectionMatrix.d = 1 / this._height * 2;

      projectionMatrix.tx = -1 - x * projectionMatrix.a;
      projectionMatrix.ty = -1 - y * projectionMatrix.d;
    } else {
      projectionMatrix.a = 1 / this._width * 2;
      projectionMatrix.d = -1 / this._height * 2;

      projectionMatrix.tx = -1 - x * projectionMatrix.a;
      projectionMatrix.ty = 1 - y * projectionMatrix.d;
    }
  };

  /**
   * Initializes the WebGL FBO and Texture for this WebGLRenderTarget
   * @private
   */


  WebGLRenderTarget.prototype._initFrameBuffer = function _initFrameBuffer() {
    var gl = this._gl;

    // Init the FBO
    this._framebuffer = gl.createFramebuffer();

    // Create the texture
    this._texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._texture);

    this._setTexParameters();

    // Bind texture to FBO
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);

    this.resizeTo(new _globals.Vector2(this._width, this._height));

    _globals.GLUtils.checkFramebufferStatus('WebGLRenderTarget#_initFramebuffer', gl);
  };

  /**
   * Returns the projection matrix
   * @return {PhotoEditorSDK.Math.Matrix}
   */


  WebGLRenderTarget.prototype.getProjectionMatrix = function getProjectionMatrix() {
    return this._projectionMatrix;
  };

  /**
   * Returns the texture
   * @return {PhotoEditorSDK.Engine.Texture}
   */


  WebGLRenderTarget.prototype.getTexture = function getTexture() {
    return this._texture;
  };

  /**
   * Returns the frame
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  WebGLRenderTarget.prototype.getFrame = function getFrame() {
    return this._frame;
  };

  /**
   * Sets the frame
   * @param {PhotoEditorSDK.Math.Rectangle} frame
   */


  WebGLRenderTarget.prototype.setFrame = function setFrame(frame) {
    this._frame = frame;
  };

  /**
   * Returns the filter stack
   * @return {Object[]}
   */


  WebGLRenderTarget.prototype.getFilterStack = function getFilterStack() {
    return this._filterStack;
  };

  /**
   * Returns the current pixel ratio
   * @return {Number}
   */


  WebGLRenderTarget.prototype.getPixelRatio = function getPixelRatio() {
    return this._pixelRatio;
  };

  /**
   * Sets the pixel ratio
   * @param {Number} pixelRatio
   */


  WebGLRenderTarget.prototype.setPixelRatio = function setPixelRatio(pixelRatio) {
    this._pixelRatio = pixelRatio;

    if (!this._isRoot) {
      this._resizeTexture();
    }
  };

  /**
   * Disposes this WebGLRenderTarget
   */


  WebGLRenderTarget.prototype.dispose = function dispose() {
    var gl = this._gl;
    gl.deleteTexture(this._texture);
    gl.deleteFramebuffer(this._framebuffer);
  };

  return WebGLRenderTarget;
}();

exports.default = WebGLRenderTarget;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(36);

var _createClass3 = _interopRequireDefault(_createClass2);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * [ a, b, c, d, e,
 *   f, g, h, i, j,
 *   k, l, m, n, o,
 *   p, q, r, s, t ]
 *
 */

/**
 * Represents a 4 by 5 matrix that is used to preform color manipulations.
 * The members are names a, b, c,..,t. The vector formed by e, j, o, t
 * represents the offset.
 * @class
 * @memberof PhotoEditorSDK.Math
 */
var ColorMatrix = function () {

  /**
   * Creates a color matrix, and defaults the values to the identity.
   * @return {PhotoEditorSDK.Math.ColorMatrix}
   */
  function ColorMatrix() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var g = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
    var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var i = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var j = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
    var k = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var l = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
    var m = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 1;
    var n = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
    var o = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
    var p = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 0;
    var q = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : 0;
    var r = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : 0;
    var s = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : 1;
    var t = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : 0;
    (0, _classCallCheck3.default)(this, ColorMatrix);

    this.set(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t);
  }

  /**
   * Sets the values of the color matrix.
   * @param  {number} a
   * @param  {number} b
   * @param  {number} c
   * @param  {number} d
   * @param  {number} e
   * @param  {number} f
   * @param  {number} g
   * @param  {number} h
   * @param  {number} i
   * @param  {number} j
   * @param  {number} k
   * @param  {number} l
   * @param  {number} m
   * @param  {number} n
   * @param  {number} o
   * @param  {number} p
   * @param  {number} q
   * @param  {number} r
   * @param  {number} s
   * @param  {number} t
   * @return {PhotoEditorSDK.Math.ColorMatrix}
   */


  ColorMatrix.prototype.set = function set(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
    this.g = g;
    this.h = h;
    this.i = i;
    this.j = j;
    this.k = k;
    this.l = l;
    this.m = m;
    this.n = n;
    this.o = o;
    this.p = p;
    this.q = q;
    this.r = r;
    this.s = s;
    this.t = t;
  };

  /**
   * Returns an identity color matrix.
   * @return {ColorMatrix}
   */


  ColorMatrix.prototype.reset = function reset() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this.e = 0;

    this.f = 0;
    this.g = 1;
    this.h = 0;
    this.i = 0;
    this.j = 0;

    this.k = 0;
    this.l = 0;
    this.m = 1;
    this.n = 0;
    this.o = 0;

    this.p = 0;
    this.q = 0;
    this.r = 0;
    this.s = 1;
    this.t = 0;
  };

  /**
   * Applies the color matrix to the given color, and returns the resulting color.
   * @param  {Color} color
   * @return {Color}
   */


  ColorMatrix.prototype.apply = function apply(color) {
    // we need to multiply the translation by 255 so we can use the same matrix for canvas and gl.
    var r = this.a * color.r + this.b * color.g + this.c * color.b + this.d * color.a + this.e * 255.0;
    var g = this.f * color.r + this.g * color.g + this.h * color.b + this.i * color.a + this.j * 255.0;
    var b = this.k * color.r + this.l * color.g + this.m * color.b + this.n * color.a + this.o * 255.0;
    var a = this.p * color.r + this.q * color.g + this.r * color.b + this.s * color.a + this.t * 255.0;
    return new _color2.default(r, g, b, a);
  };

  /**
  * Multiplies the given matrix with this matrix.
  * @param  {PhotoEditorSDK.Math.ColorMatrix} matrix
  * @return {PhotoEditorSDK.Math.ColorMatrix}
  */


  ColorMatrix.prototype.multiply = function multiply(matrix) {
    var a = void 0,
        b = void 0,
        c = void 0,
        d = void 0,
        e = void 0,
        f = void 0,
        g = void 0,
        h = void 0,
        i = void 0,
        j = void 0,
        k = void 0,
        l = void 0,
        m = void 0,
        n = void 0,
        o = void 0,
        p = void 0,
        q = void 0,
        r = void 0,
        s = void 0,
        t = void 0;
    // store both factors, so we can swap them easily
    var A = matrix;
    var B = this;

    // transformation
    a = A.a * B.a + A.b * B.f + A.c * B.k + A.d * B.p;
    b = A.a * B.b + A.b * B.g + A.c * B.l + A.d * B.q;
    c = A.a * B.c + A.b * B.h + A.c * B.m + A.d * B.r;
    d = A.a * B.d + A.b * B.i + A.c * B.n + A.d * B.s;

    f = A.f * B.a + A.g * B.f + A.h * B.k + A.i * B.p;
    g = A.f * B.b + A.g * B.g + A.h * B.l + A.i * B.q;
    h = A.f * B.c + A.g * B.h + A.h * B.m + A.i * B.r;
    i = A.f * B.d + A.g * B.i + A.h * B.n + A.i * B.s;

    k = A.k * B.a + A.l * B.f + A.m * B.k + A.n * B.p;
    l = A.k * B.b + A.l * B.g + A.m * B.l + A.n * B.q;
    m = A.k * B.c + A.l * B.h + A.m * B.m + A.n * B.r;
    n = A.k * B.d + A.l * B.i + A.m * B.n + A.n * B.s;

    p = A.p * B.a + A.q * B.f + A.r * B.k + A.s * B.p;
    q = A.p * B.b + A.q * B.g + A.r * B.l + A.s * B.q;
    r = A.p * B.c + A.q * B.h + A.r * B.m + A.s * B.r;
    s = A.p * B.d + A.q * B.i + A.r * B.n + A.s * B.s;

    // translation
    e = A.a * B.e + A.b * B.j + A.c * B.o + A.d * B.t + A.e;
    j = A.f * B.e + A.g * B.j + A.h * B.o + A.i * B.t + A.j;
    o = A.k * B.e + A.l * B.j + A.m * B.o + A.n * B.t + A.o;
    t = A.p * B.e + A.q * B.j + A.r * B.o + A.s * B.t + A.t;

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
    this.g = g;
    this.h = h;
    this.i = i;
    this.j = j;
    this.k = k;
    this.l = l;
    this.m = m;
    this.n = n;
    this.o = o;
    this.p = p;
    this.q = q;
    this.r = r;
    this.s = s;
    this.t = t;

    return this;
  };

  /**
   * Retuns a clone of the current matrix/
   * @return {ColorMatrix}
   */


  ColorMatrix.prototype.clone = function clone() {
    var matrix = new ColorMatrix();
    matrix.set(this.a, this.b, this.c, this.d, this.e, this.f, this.g, this.h, this.i, this.j, this.k, this.l, this.m, this.n, this.o, this.p, this.q, this.r, this.s, this.t);
    return matrix;
  };

  ColorMatrix.prototype.equals = function equals(matrix) {
    return this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d && this.e === matrix.e && this.f === matrix.f && this.g === matrix.g && this.h === matrix.h && this.i === matrix.i && this.j === matrix.j && this.k === matrix.k && this.l === matrix.l && this.m === matrix.m && this.n === matrix.n && this.o === matrix.o && this.p === matrix.p && this.q === matrix.q && this.r === matrix.r && this.s === matrix.s && this.t === matrix.t;
  };

  /**
   * Returns a string representation of this color matrix
   * @return {String}
   */


  ColorMatrix.prototype.toString = function toString() {
    return 'ColorMatrix( ' + this.a + ', ' + this.b + ', ' + this.c + ', ' + this.d + ', ' + this.e + ',\n      ' + this.f + ', ' + this.g + ', ' + this.h + ', ' + this.i + ', ' + this.j + ',\n      ' + this.k + ', ' + this.l + ', ' + this.m + ', ' + this.n + ', ' + this.o + ',\n      ' + this.p + ', ' + this.q + ', ' + this.r + ', ' + this.s + ', ' + this.t + ' )';
  };

  /**
   * Returns an array of numbers
   * @return {Number[]}
   */


  ColorMatrix.prototype.toArray = function toArray() {
    var _this = this;

    return 'abcdefghijklmnopqrst'.split('').map(function (v) {
      return _this[v];
    });
  };

  /**
   * The identity matrix
   * @static
   * @type {PhotoEditorSDK.Math.Matrix}
   */


  /**
   * Returns a color matrix that can be used to change the brightness.
   * @static
   * @param {Number} brightness
   */
  ColorMatrix.createBrightnessMatrix = function createBrightnessMatrix(brightness) {
    var matrix = new ColorMatrix();
    matrix.e = brightness;
    matrix.j = brightness;
    matrix.o = brightness;
    return matrix;
  };

  /**
   * Returns a color matrix that can be used to change the contrast.
   * @static
   * @param {Number} contrast
   */


  ColorMatrix.createContrastMatrix = function createContrastMatrix(contrast) {
    var matrix = new ColorMatrix();
    var t = (1.0 - contrast) / 2.0;
    matrix.a = matrix.g = matrix.m = contrast;
    matrix.e = matrix.j = matrix.o = t;
    return matrix;
  };

  /**
   * Returns a color matrix that can be used to change the saturation.
   * @static
   * @param {Number} saturation
   */


  ColorMatrix.createSaturationMatrix = function createSaturationMatrix() {
    var saturation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;

    var matrix = new ColorMatrix();
    var invSat = 1 - saturation;
    var r = 0.213 * invSat;
    var g = 0.715 * invSat;
    var b = 0.072 * invSat;

    // first row
    matrix.a = r + saturation;
    matrix.b = g;
    matrix.c = b;
    // second row
    matrix.f = r;
    matrix.g = g + saturation;
    matrix.h = b;
    // third row
    matrix.k = r;
    matrix.l = g;
    matrix.m = b + saturation;
    return matrix;
  };

  /**
   * Returns a color matrix that can be used to apply linear changes.
   * @static
   * @param {Number} slope
   * @param {Number} intercept
   */


  ColorMatrix.createLinearMatrix = function createLinearMatrix() {
    var slope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
    var intercept = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;

    var matrix = new ColorMatrix();
    matrix.a = matrix.g = matrix.m = slope;
    matrix.e = matrix.j = matrix.o = intercept;
    return matrix;
  };

  (0, _createClass3.default)(ColorMatrix, null, [{
    key: 'IDENTITY',
    get: function get() {
      return new ColorMatrix();
    }
  }]);
  return ColorMatrix;
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

exports.default = ColorMatrix;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RendererType = _globals.Constants.RendererType; /*
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

var Sprite = function (_Configurable) {
  (0, _inherits3.default)(Sprite, _Configurable);

  function Sprite(operation, options) {
    (0, _classCallCheck3.default)(this, Sprite);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Configurable.call(this, options));

    _this._operation = operation;
    _this._dirtiness = {};
    _this.id = _globals.Utils.getUUID();

    _this._renderTextures = {};
    _this._identitySprite = new _globals.Engine.Sprite();
    _this._sprite = new _globals.Engine.Sprite();
    _this._renderers = [];
    return _this;
  }

  /**
   * Applies a rotation with the given degrees
   * @param  {Number} degrees
   */


  Sprite.prototype.applyRotation = function applyRotation(degrees) {
    var inputDimensions = this._operation.getInputDimensions();

    // Update sprite rotation
    var spriteDegrees = this.getRotation() * 180 / Math.PI;
    spriteDegrees += degrees;
    this.setRotation(spriteDegrees * Math.PI / 180);

    var actualDegrees = (degrees + 360) % 360;
    var radians = actualDegrees * Math.PI / 180;

    var cos = Math.cos(radians);
    var sin = Math.sin(radians);

    var relativePosition = this._options.position.clone().subtract(0.5).multiply(inputDimensions);

    var newRelativePosition = new _globals.Vector2(relativePosition.x * cos - relativePosition.y * sin, relativePosition.x * sin + relativePosition.y * cos).divide(inputDimensions.clone().flip());

    this.setPosition(new _globals.Vector2(0.5, 0.5).add(newRelativePosition));
  };

  /**
   * Applies a flip in the given direction
   * @param  {String} direction
   */


  Sprite.prototype.applyFlip = function applyFlip(direction) {
    var position = this.getPosition().clone();
    switch (direction) {
      case 'horizontal':
        position.x = 1 - this._options.position.x;
        break;
      case 'vertical':
        position.y = 1 - this._options.position.y;
        break;
    }

    this.setPosition(position);
  };

  /**
   * Applies a crop with the given options
   * @param  {PhotoEditorSDK.Operations.CropOperation} cropOperation
   * @param  {Object} options
   */


  Sprite.prototype.applyCrop = function applyCrop(cropOperation, options) {
    var inputDimensions = this._operation.getInputDimensions();
    var rotationDelta = options.rotation - cropOperation.getRotation();

    var oldSize = cropOperation.getEnd().clone().subtract(cropOperation.getStart());
    var newSize = options.end.clone().subtract(options.start);
    var startDiff = cropOperation.getStart().clone().subtract(options.start);

    // Compensate position
    var position = this.getPosition().clone().multiply(oldSize).add(startDiff).divide(newSize);

    // Compensate rotation
    // Rotate sprite
    var inverseCropDegrees = rotationDelta * 180 / Math.PI;
    var spriteDegrees = this.getRotation() * 180 / Math.PI + inverseCropDegrees;

    // Reposition sprite
    // Calculate relative position to image center
    var relativePosition = position.clone().multiply(newSize).add(options.start.clone()).subtract(0.5).multiply(inputDimensions);

    // Rotate relative position around center
    var cos = Math.cos(rotationDelta);
    var sin = Math.sin(rotationDelta);
    var newRelativePosition = new _globals.Vector2(relativePosition.x * cos - relativePosition.y * sin, relativePosition.x * sin + relativePosition.y * cos).divide(inputDimensions);

    // Apply scale change
    newRelativePosition.multiply(options.scale / cropOperation.getScale());

    // position = image center + new relative position
    position.set(0.5, 0.5).add(newRelativePosition).add(new _globals.Vector2(0, 0).subtract(options.start)).divide(newSize);

    // Compensate scale
    if (this._options.dimensions) {
      var dimensions = this.getDimensions().clone().multiply(options.scale / cropOperation.getScale());
      this.set({ dimensions: dimensions }, false);
    }

    this.set({
      rotation: spriteDegrees * Math.PI / 180,
      position: position
    }, false);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Returns the DisplayObject of this Sprite
   * @return {PhotoEditorSDK.Engine.Sprite}
   */


  Sprite.prototype.getDisplayObject = function getDisplayObject() {
    return this._sprite;
  };

  /**
   * Returns the texture for the sprite that should be rendered
   * @return {PhotoEditorSDK.Engine.Texture}
   * @private
   * @abstract
   */


  Sprite.prototype._getTexture = function _getTexture() {
    throw new Error('Sprite#_getTexture is abstract and not implemented in child class.');
  };

  /**
   * Prepares for rendering this sprite to a render texture
   * @param {PhotoEditorSDK} sdk
   * @private
   */


  Sprite.prototype._prepareRenderTexture = function _prepareRenderTexture(sdk) {
    if (!this._renderTexture) {
      var texture = this._getTexture();
      this._renderTextureContainer = new _globals.Engine.Container();
      this._renderTextureSprite = new _globals.Engine.Sprite(texture);
      this._renderTextureContainer.addChild(this._renderTextureSprite);
      this._renderTexture = this._getRenderTexture(sdk.getRenderer(), texture.getDimensions());
    } else {
      this._renderTexture.clear();
    }
  };

  /**
   * Checks if this sprite should be rendered to a render texture
   * @param  {PhotoEditorSDK} sdk
   * @return {Boolean}
   * @private
   */


  Sprite.prototype._rendersToRenderTexture = function _rendersToRenderTexture(sdk) {
    return sdk.getOptions().smoothDownscaling && sdk.getRenderer().isOfType(RendererType.WEBGL);
  };

  /**
   * Updates this sprite
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Promise}
   */


  Sprite.prototype.update = function update(sdk, inputDimensions) {
    if (this._rendersToRenderTexture(sdk)) {
      this._prepareRenderTexture(sdk);
    }

    this._updateSprite(inputDimensions);

    if (this._rendersToRenderTexture(sdk)) {
      this._renderToRenderTexture(sdk);
    }

    return _globals.Promise.resolve();
  };

  /**
   * Updates the sprite's properties according to the options
   * @param {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @private
   */


  Sprite.prototype._updateSprite = function _updateSprite(inputDimensions) {
    this._sprite.setAnchor(this._options.anchor);
    this._sprite.setPosition(this._options.position.clone().multiply(inputDimensions));

    var dimensions = this._options.dimensions;

    if (dimensions) {
      dimensions = dimensions.clone().multiply(this._operation.getSDK().getTextureScale());
      this._sprite.setWidth(dimensions.x);
      this._sprite.setHeight(dimensions.y);
    }
    this._sprite.updateTransform();

    var frame = this._sprite.getTexture().getFrame();
    var spriteDimensions = new _globals.Vector2(frame.width, frame.height);

    this._sprite.setPivot(this._options.pivot.clone().multiply(spriteDimensions));
    this._sprite.setRotation(this._options.rotation);
    this._sprite.updateTransform();
  };

  /**
   * Renders this sprite to the render texture. If power-of-two textures are enforced,
   * it automatically resizes the texture and updates its UV coordinates accordingly.
   * @param  {PhotoEditorSDK} sdk
   * @private
   */


  Sprite.prototype._renderToRenderTexture = function _renderToRenderTexture(sdk) {
    var textureDimensions = this._getTexture().getDimensions();
    var renderTexture = this._getRenderTexture(sdk.getRenderer(), textureDimensions);

    var finalDimensions = textureDimensions.clone();
    if (this._options.smoothDownscaling) {
      finalDimensions.x = _globals.Utils.nextHighestPOT(finalDimensions.x);
      finalDimensions.y = _globals.Utils.nextHighestPOT(finalDimensions.y);
    }

    this._renderTexture.resizeTo(finalDimensions);
    this._renderTexture.render(this._renderTextureContainer);

    if (this._options.smoothDownscaling) {
      var relativeDifference = finalDimensions.clone().subtract(textureDimensions.x, textureDimensions.y).divide(finalDimensions);

      var uvs = renderTexture.getUVs().getUVs();
      uvs[0].x = uvs[3].x = 0;
      uvs[1].x = uvs[2].x = 1 - relativeDifference.x;
      uvs[0].y = uvs[1].y = 0;
      uvs[2].y = uvs[3].y = 1 - relativeDifference.y;
    }

    this._sprite.setTexture(renderTexture);
  };

  /**
   * Checks if this operation is dirty for the given renderer
   * @param  {PhotoEditorSDK.Engine.BaseRenderer}  renderer
   * @return {Boolean}
   */


  Sprite.prototype.isDirtyForRenderer = function isDirtyForRenderer(renderer) {
    if (!(renderer.id in this._dirtiness)) {
      this._dirtiness[renderer.id] = true;
    }
    return this._dirtiness[renderer.id];
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   */


  Sprite.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer) {
    this._renderers[renderer.id] = renderer;
    this._dirtiness[renderer.id] = dirty;
  };

  /**
   * Sets the dirtiness for all renderers
   * @param {Boolean} dirty
   */


  Sprite.prototype.setDirty = function setDirty(dirty) {
    for (var rendererId in this._dirtiness) {
      this.setDirtyForRenderer(dirty, this._renderers[rendererId]);
    }
  };

  /**
   * Creates and/or returns a RenderTexture
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param {PhotoEditorSDK.Math.Vector2} dimensions = new Vector(100, 100)
   * @return {PhotoEditorSDK.Engine.RenderTexture}
   * @private
   */


  Sprite.prototype._getRenderTexture = function _getRenderTexture(renderer) {
    var dimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _globals.Vector2(100, 100);

    if (!this._renderTextures[renderer.id]) {
      this._renderTextures[renderer.id] = new _globals.Engine.RenderTexture(renderer, dimensions.x, dimensions.y, 1);
    }
    return this._renderTextures[renderer.id];
  };

  /**
   * Cleans up this Sprite
   */


  Sprite.prototype.dispose = function dispose() {
    for (var rendererId in this._renderTextures) {
      this._renderTextures[rendererId].dispose();
    }
  };

  return Sprite;
}(_globals.Configurable);

exports.default = Sprite;

/***/ },
/* 35 */
/***/ function(module, exports) {

"use strict";
/* eslint-disable */
"use strict";
/*!

StackBlur - a fast almost Gaussian Blur For Canvas

Version:  0.5
Author:   Mario Klingemann
Contact:  mario@quasimondo.com
Website:  http://www.quasimondo.com/StackBlurForCanvas
Twitter:  @quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr:
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];

var shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

function stackBlurCanvasRGBA(imageData, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }
  radius |= 0;

  var pixels = imageData.data;

  var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;

  var div = radius + radius + 1;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

  var stackStart = new BlurStack();
  var stackEnd;
  var stack = stackStart;
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i == radiusPlus1) stackEnd = stack;
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;

  yw = yi = 0;

  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];

  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[p + 3]) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;

      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++) {
      pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa !== 0) {
        pa = 255 / pa;
        pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;

      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;

      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];
      a_in_sum += stackIn.a = pixels[p + 3];

      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;

      stackIn = stackIn.next;

      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;

      stackOut = stackOut.next;

      yi += 4;
    }
    yw += width;
  }

  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;

      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;

      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa > 0) {
        pa = 255 / pa;
        pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
      }

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;

      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;

      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];
      a_sum += a_in_sum += stackIn.a = pixels[p + 3];

      stackIn = stackIn.next;

      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;

      stackOut = stackOut.next;

      yi += width;
    }
  }
}

function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}

module.exports = {
  stackBlurCanvasRGBA: stackBlurCanvasRGBA
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(81);

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
/* 37 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(91)
  , enumBugKeys = __webpack_require__(49);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 41 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*!
 * Extracted from MinifyJpeg (Copyright (c) 2014 Hiroaki Matoba, MIT License):
 * https://github.com/hMatoba/MinifyJpeg
 */

var KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

/**
 * Provides Base64 encode and decode methods
 * @type {Object}
 * @ignore
 */
/* istanbul ignore next */
var Base64 = {
  /**
   * Encodes the given input into a Base64 string
   * @param  {String} input
   * @return {String}
   */
  encode: function encode(input) {
    var output = '';
    var chr1 = void 0,
        chr2 = void 0,
        chr3 = void 0;
    var enc1 = void 0,
        enc2 = void 0,
        enc3 = void 0,
        enc4 = void 0;
    var i = 0;

    do {
      chr1 = input[i++];
      chr2 = input[i++];
      chr3 = input[i++];

      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + KEY_STR.charAt(enc1) + KEY_STR.charAt(enc2) + KEY_STR.charAt(enc3) + KEY_STR.charAt(enc4);
      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    } while (i < input.length);

    return output;
  },


  /**
   * Decodes the given Base64 string
   * @param  {String} input
   * @return {String}
   */
  decode: function decode(input) {
    var chr1 = void 0,
        chr2 = void 0,
        chr3 = void 0;
    var enc1 = void 0,
        enc2 = void 0,
        enc3 = void 0,
        enc4 = void 0;
    var i = 0;
    var buf = [];

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    var base64test = /[^A-Za-z0-9\+\/=]/g;
    if (base64test.exec(input)) {
      throw new Error('There were invalid base64 characters in the input text.\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\n' + 'Expect errors in decoding.');
    }
    input = input.replace(/[^A-Za-z0-9\+\/=]/g, '');

    do {
      enc1 = KEY_STR.indexOf(input.charAt(i++));
      enc2 = KEY_STR.indexOf(input.charAt(i++));
      enc3 = KEY_STR.indexOf(input.charAt(i++));
      enc4 = KEY_STR.indexOf(input.charAt(i++));

      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;

      buf.push(chr1);

      if (enc3 !== 64) {
        buf.push(chr2);
      }
      if (enc4 !== 64) {
        buf.push(chr3);
      }

      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    } while (i < input.length);

    return buf;
  }
};

exports.default = Base64;

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

var _base = __webpack_require__(41);

var _base2 = _interopRequireDefault(_base);

var _arrayStream = __webpack_require__(107);

var _arrayStream2 = _interopRequireDefault(_arrayStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EXIF_TAGS = {
  0x0100: 'ImageWidth',
  0x0101: 'ImageHeight',
  0x8769: 'ExifIFDPointer',
  0x8825: 'GPSInfoIFDPointer',
  0xA005: 'InteroperabilityIFDPointer',
  0x0102: 'BitsPerSample',
  0x0103: 'Compression',
  0x0106: 'PhotometricInterpretation',
  0x0112: 'Orientation',
  0x0115: 'SamplesPerPixel',
  0x011C: 'PlanarConfiguration',
  0x0212: 'YCbCrSubSampling',
  0x0213: 'YCbCrPositioning',
  0x011A: 'XResolution',
  0x011B: 'YResolution',
  0x0128: 'ResolutionUnit',
  0x0111: 'StripOffsets',
  0x0116: 'RowsPerStrip',
  0x0117: 'StripByteCounts',
  0x0201: 'JPEGInterchangeFormat',
  0x0202: 'JPEGInterchangeFormatLength',
  0x012D: 'TransferFunction',
  0x013E: 'WhitePoint',
  0x013F: 'PrimaryChromaticities',
  0x0211: 'YCbCrCoefficients',
  0x0214: 'ReferenceBlackWhite',
  0x0132: 'DateTime',
  0x010E: 'ImageDescription',
  0x010F: 'Make',
  0x0110: 'Model',
  0x0131: 'Software',
  0x013B: 'Artist',
  0x8298: 'Copyright'
}; /*!
    * Based on https://github.com/exif-js/exif-js by Jacob Seidelin
    * Licensed under MIT
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

var DATA_JPEG_PREFIX = 'data:image/jpeg;base64,';
var JPEG_REGEX = new RegExp('^' + DATA_JPEG_PREFIX, 'i');

/**
 * Reads EXIF tags from the given byte array and restores them
 * @class
 * @memberof PhotoEditorSDK
 * @ignore
 */
var EXIF = function () {
  /**
   * Creates an EXIF object
   * @param  {Array} buf
   */
  function EXIF(buf) {
    (0, _classCallCheck3.default)(this, EXIF);

    this._buf = buf;
    this._stream = new _arrayStream2.default(this._buf);
    this._stream.setHead(0);

    this._segments = this._sliceIntoSegments(this._buf);
    this._exifBuffer = this._getExifBuffer();
    this._exifStream = new _arrayStream2.default(this._exifBuffer);
    this._parseExif();
  }

  /**
   * Restores the exif tags into the given data url
   * @return {String} base64String
   */


  EXIF.prototype.restoreExifTags = function restoreExifTags(base64String) {
    // First, make the given string a data array
    var raw = base64String.replace(DATA_JPEG_PREFIX, '');
    var data = _base2.default.decode(raw);

    var segments = this._sliceIntoSegments(data);
    var segmentStart = segments[1][0];
    var dataBefore = data.slice(0, segmentStart);
    var dataAfter = data.slice(segmentStart);

    var newData = dataBefore.concat(this._exifBuffer);
    newData = newData.concat(dataAfter);

    // Make it a base64 string again
    return DATA_JPEG_PREFIX + _base2.default.encode(newData);
  };

  /**
   * Overwrites the orientation with the given 16 bit integer
   * @param {Number} orientation
   */


  EXIF.prototype.setOrientation = function setOrientation(orientation) {
    if (this._tagData.Orientation) {
      var entryOffset = this._tagData.Orientation.entryOffset;
      // Replace value in buffer

      this._exifStream.setHead(entryOffset + 8);
      this._exifStream.writeInt16(orientation);
    }
  };

  /**
   * Checks whether the given base64 data url is a jpeg image
   * @param  {String}  base64String
   * @return {Boolean}
   */


  EXIF.isJPEG = function isJPEG(base64String) {
    return JPEG_REGEX.test(base64String);
  };

  /**
   * Creates a new instance of Exif from the given base64-encoded
   * string
   * @param  {String} base64String
   * @return {PhotoEditorSDK.Exif}
   */


  EXIF.fromBase64String = function fromBase64String(base64String) {
    var raw = base64String.replace(DATA_JPEG_PREFIX, '');
    var data = _base2.default.decode(raw);
    return new EXIF(data);
  };

  /**
   * Parses the exif tags
   * @return {Object}
   * @private
   */


  EXIF.prototype._parseExif = function _parseExif() {
    this._exifStream.setHead(0);
    // Skip marker
    this._exifStream.readInt16();
    // Skip length
    this._exifStream.readInt16();

    var header = this._exifStream.readString(4);
    if (header !== 'Exif') {
      return;
    }

    // Skip 2 bytes
    this._exifStream.readInt16();

    var tiffOffset = this._exifStream.getHead();

    // Find endian type
    var bigEndian = false;
    var endian = this._exifStream.readInt16();
    if (endian === 0x4949) {
      bigEndian = false;
    } else if (endian === 0x4d4d) {
      bigEndian = true;
    } else {
      throw new Error('Invalid TIFF data: No endian type found');
    }

    if (this._exifStream.readInt16(!bigEndian) !== 0x002A) {
      throw new Error('Invalid TIFF data: No 0x002A');
    }

    var firstIFDOffset = this._exifStream.readInt32(!bigEndian);
    if (firstIFDOffset < 8) {
      throw new Error('Invalid TIFF data: First IFD offset < 8');
    }

    var ifdOffset = tiffOffset + firstIFDOffset;
    var tags = this._readTags(this._exifStream, tiffOffset, ifdOffset, bigEndian);
    this._tags = tags.tags;
    this._tagData = tags.tagData;
  };

  /**
   * Reads the TIFF tags from the stream
   * @param  {ArrayBuffer} stream
   * @param  {Number} tiffStart The position where tiff data starts
   * @param  {Number} ifdStart  The position where the IFD starts
   * @param  {Boolean} bigEndian
   * @return {Object}
   * @private
   */


  EXIF.prototype._readTags = function _readTags(stream, tiffStart, ifdStart, bigEndian) {
    stream.setHead(ifdStart);
    var entriesCount = stream.readInt16(!bigEndian);
    var tags = {};
    var tagData = [];

    for (var i = 0; i < entriesCount; i++) {
      var entryOffset = ifdStart + i * 12 + 2;
      stream.setHead(entryOffset);
      var tag = stream.readInt16(!bigEndian);
      var type = void 0;
      var numValues = void 0;
      var valueOffset = void 0;
      if (EXIF_TAGS[tag]) {
        tag = EXIF_TAGS[tag];
        type = stream.readInt16(!bigEndian);
        numValues = stream.readInt32(!bigEndian);
        valueOffset = stream.readInt32(!bigEndian) + tiffStart;
        var value = null;

        switch (type) {
          case 1: // byte, 8-bit unsigned int
          case 7:
            // undefined, 8-bit byte, value depending on field
            if (numValues === 1) {
              value = stream.readInt8(!bigEndian);
            } else {
              value = [];
              for (var _i = 0; _i < numValues; _i++) {
                value.push(stream.readInt8(!bigEndian));
              }
            }
            break;
          case 2:
            // 8-bit ascii char
            stream.setHead(numValues > 4 ? valueOffset : entryOffset + 8);
            value = stream.readString(numValues);
            break;
          case 3:
            // short
            stream.setHead(numValues > 2 ? valueOffset : entryOffset + 8);
            if (numValues === 1) {
              value = stream.readInt16(!bigEndian);
            } else {
              value = [];
              for (var _i2 = 0; _i2 < numValues; _i2++) {
                value.push(stream.readInt16(!bigEndian));
              }
            }
            break;
          case 4: // long
          case 9:
            // slong
            stream.setHead(numValues > 1 ? valueOffset : entryOffset + 8);
            if (numValues === 1) {
              value = stream.readInt32(!bigEndian);
            } else {
              value = [];
              for (var _i3 = 0; _i3 < numValues; _i3++) {
                value.push(stream.readInt32(!bigEndian));
              }
            }
            break;
          case 5: // rational (two long values, first numerator, second denominator)
          case 10:
            // rational (two slongs)
            stream.setHead(valueOffset);
            if (numValues === 1) {
              var numerator = stream.readInt32(!bigEndian);
              var denominator = stream.readInt32(!bigEndian);
              value = numerator / denominator;
            } else {
              value = [];
              for (var _i4 = 0; _i4 < numValues; _i4++) {
                var _numerator = stream.readInt32(!bigEndian);
                var _denominator = stream.readInt32(!bigEndian);
                var val = _numerator / _denominator;
                value.push(val);
              }
            }
            break;
        }

        tags[tag] = value;
        tagData[tag] = {
          value: value,
          numValues: numValues,
          entryOffset: entryOffset,
          valueOffset: valueOffset,
          type: type
        };
      }
    }

    return { tags: tags, tagData: tagData };
  };

  /**
   * Returns a new buffer containing the Exif segment
   * @return {Array}
   * @private
   */


  EXIF.prototype._getExifBuffer = function _getExifBuffer() {
    var segments = this._segments;
    for (var i = 0; i < segments.length; i++) {
      var offset = segments[i][0];
      var end = segments[i][1];
      this._stream.setHead(offset);
      var marker = this._stream.peekInt16();
      if (marker === 0xffe1) {
        return this._buf.slice(offset, end);
      }
    }
    return false;
  };

  /**
   * Slices the array into segments
   * @param  {Array.<Number>} buf
   * @return {Array}
   * @private
   */


  EXIF.prototype._sliceIntoSegments = function _sliceIntoSegments(buf) {
    var stream = new _arrayStream2.default(buf);
    var segments = [];
    while (stream.getHead() < buf.length) {
      var marker = stream.readInt16();
      if (marker === 0xffd8) {
        continue;
      } // SOI
      if (marker === 0xffda) {
        break;
      } // SOS Marker

      if (marker >= 0xff00 && marker <= 0xffff) {
        // Marker (FF-XX-HL-LL)
        var length = stream.readInt16();
        var end = stream.getHead() + length - 2;
        segments.push([stream.getHead() - 4, end]);
        stream.setHead(end);
      } else {
        throw new Error('Invalid marker: 0x' + marker.toString(16));
      }
    }

    this._stream.setHead(0);

    return segments;
  };

  /**
   * Returns the tags
   * @return {Object}
   */


  EXIF.prototype.getTags = function getTags() {
    return this._tags;
  };

  /**
   * Returns the tag data (key, value, byte position etc.)
   * @return {Object[]}
   */


  EXIF.prototype.getTagData = function getTagData() {
    return this._tagData;
  };

  /**
   * Disposes this EXIF object
   */


  EXIF.prototype.dispose = function dispose() {
    this._buf = [];
    this._exifBuffer = [];
    this._segments = [];
  };

  return EXIF;
}();

exports.default = EXIF;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base class for all objects that can be displayed
 * on the screen
 * @class
 * @memberof PhotoEditorSDK.Engine
 */
var DisplayObject = function () {
  /**
   * Creates a DisplayObject
   */
  function DisplayObject() {
    (0, _classCallCheck3.default)(this, DisplayObject);

    this._position = new _globals.Vector2(0, 0);
    this._scale = new _globals.Vector2(1, 1);
    this._pivot = new _globals.Vector2(0, 0);
    this._rotation = 0;
    this._lastRotation = null;
    this._alpha = 1;
    this._visible = true;
    this._worldTransform = new _globals.Matrix();
    this._parent = null;
    this._shaders = [];
    this._boundsNeedUpdate = true;
    this._bounds = new _globals.Rectangle(0, 0, 1, 1);
    this._localBoundsNeedUpdate = true;
    this._localBounds = new _globals.Rectangle(0, 0, 1, 1);
    this._tint = 0xffffff;
    this._filterRectangle = new _globals.Rectangle(0, 0, 0, 0);
  }

  /**
   * Renders this DisplayObject using the given WebGLRenderer
   * @param  {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   * @abstract
   */


  DisplayObject.prototype.renderWebGL = function renderWebGL(renderer) {
    _globals.Log.warn(this.constructor.name, '`renderWebGL` is abstract and not implemented in inherited class');
  };

  /**
   * Renders this DisplayObject using the given CanvasRenderer
   * @param  {PhotoEditorSDK.Engine.CanvasRenderer} renderer
   * @abstract
   */


  DisplayObject.prototype.renderCanvas = function renderCanvas(renderer) {
    _globals.Log.warn(this.constructor.name, '`renderCanvas` is abstract and not implemented in inherited class');
  };

  /**
   * Updates the world transform for this DisplayObject
   */


  DisplayObject.prototype.updateTransform = function updateTransform() {
    var parentTransform = this._parent ? this._parent.getWorldTransform() : _globals.Matrix.IDENTITY;
    var worldTransform = this._worldTransform;

    // Only build rotation matrix if rotation has changed since last update
    var rotationChanged = this._rotation !== this._lastRotation;
    if (rotationChanged) {
      this._sinRotation = Math.sin(this._rotation);
      this._cosRotation = Math.cos(this._rotation);
      this._lastRotation = this._rotation;
    }

    worldTransform.a = this._cosRotation * this._scale.x;
    worldTransform.b = this._sinRotation * this._scale.x;
    worldTransform.c = -this._sinRotation * this._scale.y;
    worldTransform.d = this._cosRotation * this._scale.y;
    worldTransform.tx = this._position.x;
    worldTransform.ty = this._position.y;

    if (this._pivot.x || this._pivot.y) {
      worldTransform.tx -= this._pivot.x * worldTransform.a + this._pivot.y * worldTransform.c;
      worldTransform.ty -= this._pivot.x * worldTransform.b + this._pivot.y * worldTransform.d;
    }

    // Floor
    worldTransform.tx |= 0;
    worldTransform.ty |= 0;

    worldTransform.multiply(parentTransform);

    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  // -------------------------------------------------------------------------- SHADERS

  /**
   * Pushes the given shader to the list of shaders
   * @param {PhotoEditorSDK.Engine.Shader} shader
   */


  DisplayObject.prototype.addShader = function addShader(shader) {
    this._shaders.push(shader);
  };

  /**
   * Removes the given shader from the list of shaders
   * @param  {PhotoEditorSDK.Engine.Shader} shader
   * @return {Boolean}
   */


  DisplayObject.prototype.removeShader = function removeShader(shader) {
    var index = this._shaders.indexOf(shader);
    if (index !== -1) {
      this._shaders.splice(index, 1);
      return true;
    }
    return false;
  };

  /**
   * Removes the shader at the given index from the list of shaders
   * @param  {Number} index
   * @return {Boolean}
   */


  DisplayObject.prototype.removeShaderAt = function removeShaderAt(index) {
    if (!this._shaders[index]) {
      return false;
    }
    this._shaders.splice(index, 1);
    return true;
  };

  /**
   * Returns the bounds for this DisplayObject
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  DisplayObject.prototype.getBounds = function getBounds() {
    return this._bounds.clone();
  };

  // -------------------------------------------------------------------------- GETTERS / SETTERS

  /**
   * Returns the current position
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  DisplayObject.prototype.getPosition = function getPosition() {
    return this._position;
  };

  /**
   * Sets the position to the given one
   * @param {PhotoEditorSDK.Math.Vector2|Number} x
   * @param {Number} [y]
   */


  DisplayObject.prototype.setPosition = function setPosition(position, y) {
    if (position instanceof _globals.Vector2) {
      this._position.copy(position);
    } else {
      this._position.set(position, y);
    }
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  /**
   * Returns the current scale
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  DisplayObject.prototype.getScale = function getScale() {
    return this._scale;
  };

  /**
   * Sets the scale to the given one
   * @param {PhotoEditorSDK.Math.Vector2|Number} x
   * @param {Number} [y]
   */


  DisplayObject.prototype.setScale = function setScale(scale, y) {
    if (scale instanceof _globals.Vector2) {
      this._scale.copy(scale);
    } else {
      this._scale.set(scale, y);
    }
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  /**
   * Returns the current pivot (The point that this Displayobject rotates around)
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  DisplayObject.prototype.getPivot = function getPivot() {
    return this._pivot;
  };

  /**
   * Sets the pivot (The point that this DisplayObject rotates around)
   * @param {PhotoEditorSDK.Math.Vector2|Number} pivot
   * @param {Number} [y]
   */


  DisplayObject.prototype.setPivot = function setPivot(pivot, y) {
    if (pivot instanceof _globals.Vector2) {
      this._pivot.copy(pivot);
    } else {
      this._pivot.set(pivot, y);
    }
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  /**
   * Returns the current rotation in radians
   * @return {Number}
   */


  DisplayObject.prototype.getRotation = function getRotation() {
    return this._rotation;
  };

  /**
   * Sets this object's rotation (in radians)
   * @param {Number} rotation
   */


  DisplayObject.prototype.setRotation = function setRotation(rotation) {
    this._rotation = rotation;
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  /**
   * Returns the current alpha (0...1)
   * @return {Number}
   */


  DisplayObject.prototype.getAlpha = function getAlpha() {
    return this._alpha;
  };

  /**
   * Sets the alpha (0...1)
   * @param {Number} alpha
   */


  DisplayObject.prototype.setAlpha = function setAlpha(alpha) {
    this._alpha = alpha;
  };

  /**
   * Returns the computed alpha of this DisplayObject
   * @return {Number}
   */


  DisplayObject.prototype.getWorldAlpha = function getWorldAlpha() {
    if (this._parent) {
      return this._parent.getAlpha() * this._alpha;
    } else {
      return this._alpha;
    }
  };

  /**
   * Returns the current world transformation matrix
   * @return {PhotoEditorSDK.Math.Matrix}
   */


  DisplayObject.prototype.getWorldTransform = function getWorldTransform() {
    return this._worldTransform;
  };

  /**
   * Returns the parent object
   * @return {PhotoEditorSDK.Engine.DisplayObject}
   */


  DisplayObject.prototype.getParent = function getParent() {
    return this._parent;
  };

  /**
   * Sets this object's parent object
   * @param {PhotoEditorSDK.Engine.DisplayObject} parent
   */


  DisplayObject.prototype.setParent = function setParent(parent) {
    this._parent = parent;
  };

  /**
   * Returns the filter rectangle
   * @return {PhotoEditorSDK.Math.Rectangle} rectangle
   */


  DisplayObject.prototype.getFilterRectangle = function getFilterRectangle() {
    return this._filterRectangle;
  };

  /**
   * Sets the filter rectangle
   * @param {PhotoEditorSDK.Math.Rectangle} rectangle
   */


  DisplayObject.prototype.setFilterRectangle = function setFilterRectangle(rectangle) {
    this._filterRectangle.copy(rectangle);
  };

  /**
   * Returns the current tint color
   * @return {Number}
   */


  DisplayObject.prototype.getTint = function getTint() {
    return this._tint;
  };

  /**
   * Sets the tint color
   * @param {Number} tint
   */


  DisplayObject.prototype.setTint = function setTint(tint) {
    this._tint = tint;
  };

  /**
   * Checks whether this object is currently visible
   * @return {Boolean} [description]
   */


  DisplayObject.prototype.isVisible = function isVisible() {
    return this._visible;
  };

  /**
   * Sets this object's visibility
   * @param {Boolean} visible
   */


  DisplayObject.prototype.setVisible = function setVisible(visible) {
    this._visible = visible;
  };

  return DisplayObject;
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

exports.default = DisplayObject;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(6);

var _canvasRenderTarget = __webpack_require__(31);

var _canvasRenderTarget2 = _interopRequireDefault(_canvasRenderTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manages the filters for a {@link PhotoEditorSDK.Engine.CanvasRenderer}
 * @class
 * @memberof PhotoEditorSDK.Engine
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

var CanvasFilterManager = function () {
  function CanvasFilterManager(renderer) {
    (0, _classCallCheck3.default)(this, CanvasFilterManager);

    this._renderer = renderer;
    this._filterStack = [{
      renderTarget: renderer.getCurrentRenderTarget(),
      filters: []
    }];

    this._currentFrame = null;
    this._textures = [];
    this._textureFrame = new _globals.Rectangle(0, 0, renderer.getWidth(), renderer.getHeight());
  }

  /**
   * Resizes this FilterManager and its textures to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  CanvasFilterManager.prototype.resizeTo = function resizeTo(dimensions) {
    this._textureFrame.width = dimensions.x;
    this._textureFrame.height = dimensions.y;

    this._textures.forEach(function (texture) {
      return texture.resizeTo(dimensions);
    });
  };

  /**
   * Pushes the given filters to the
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   * @param  {Array.<Filter>} filters
   */


  CanvasFilterManager.prototype.pushFilters = function pushFilters(displayObject, filters) {
    var bounds = displayObject.getBounds();
    this._currentFrame = bounds;

    var renderTarget = this._getOrCreateRenderTarget();
    this._renderer.setRenderTarget(renderTarget);
    this._filterStack.push({ renderTarget: renderTarget, filters: filters });
  };

  /**
   * Removes, applies and returns the last filters from the stack
   * @return {Object}
   */


  CanvasFilterManager.prototype.popFilters = function popFilters() {
    var _filterStack$pop = this._filterStack.pop(),
        filters = _filterStack$pop.filters,
        renderTarget = _filterStack$pop.renderTarget;

    var lastFilter = this._filterStack[this._filterStack.length - 1];

    var inputRenderTarget = renderTarget;
    var outputRenderTarget = lastFilter.renderTarget;

    if (filters.length === 1) {
      filters[0].apply(this._renderer, inputRenderTarget, outputRenderTarget);
      this._textures.push(inputRenderTarget);
    } else {
      this._applyFilters(filters, inputRenderTarget, outputRenderTarget);
    }
    return filters;
  };

  /**
   * Applies the given filters to the given inputRenderTarget and outputs
   * the filtered content to the outputRenderTarget
   * @param  {PhotoEditorSDK.Engine.Filter[]} filters
   * @param  {PhotoEditorSDK.Engine.CanvasRenderTarget} inputRenderTarget
   * @param  {PhotoEditorSDK.Engine.CanvasRenderTarget} outputRenderTarget
   * @private
   */


  CanvasFilterManager.prototype._applyFilters = function _applyFilters(filters, inputRenderTarget, outputRenderTarget) {
    var _this = this;

    var flipRenderTarget = inputRenderTarget;
    var flopRenderTarget = this._getOrCreateRenderTarget(true);

    var lastFilter = filters[filters.length - 1];
    filters.forEach(function (filter, i) {
      var isLastFilter = filter === lastFilter;

      if (!isLastFilter) {
        // Render from flip to flop with filter
        filter.apply(_this._renderer, flipRenderTarget, flopRenderTarget);

        // Flip the render buffers
        var temp = flipRenderTarget;
        flipRenderTarget = flopRenderTarget;
        flopRenderTarget = temp;
      } else {
        // Render to output
        filter.apply(_this._renderer, flipRenderTarget, outputRenderTarget);
      }
    });

    // Push the textures back into the texture pool to use them again later
    this._textures.push(flipRenderTarget);
    this._textures.push(flopRenderTarget);
  };

  /**
   * Returns a render buffer from the pool or creates a new one
   * @param  {Boolean} clear
   * @return {PhotoEditorSDK.Engine.RenderTexture}
   * @private
   */


  CanvasFilterManager.prototype._getOrCreateRenderTarget = function _getOrCreateRenderTarget(clear) {
    var renderTarget = this._textures.pop();
    if (!renderTarget) {
      renderTarget = new _canvasRenderTarget2.default(this._textureFrame.width, this._textureFrame.height, 1);
    }

    if (clear) {
      renderTarget.clear();
    }

    return renderTarget;
  };

  /**
   * Sets the filter stack to the given stack
   * @param {Object[]} filterStack
   */


  CanvasFilterManager.prototype.setFilterStack = function setFilterStack(filterStack) {
    this._filterStack = filterStack;
  };

  /**
   * Disposes this CanvasFilterManager
   */


  CanvasFilterManager.prototype.dispose = function dispose() {};

  return CanvasFilterManager;
}();

exports.default = CanvasFilterManager;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(6);

var _webglRenderTarget = __webpack_require__(32);

var _webglRenderTarget2 = _interopRequireDefault(_webglRenderTarget);

var _quad = __webpack_require__(104);

var _quad2 = _interopRequireDefault(_quad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RendererType = _globals.Constants.RendererType; /*
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
 * Manages the filters for a {@link PhotoEditorSDK.Engine.WebGLRenderer}
 * @class
 * @memberof PhotoEditorSDK.Engine
 */
/* istanbul ignore next */
var WebGLFilterManager = function () {
  function WebGLFilterManager(renderer) {
    (0, _classCallCheck3.default)(this, WebGLFilterManager);

    this._renderer = renderer;
    this._filterStack = [{
      filters: []
    }];

    this._currentFrame = null;
    this._renderTargets = [];
    this._textureFrame = new _globals.Rectangle(0, 0, renderer.getWidth(), renderer.getHeight());

    this._onContextChange = this._onContextChange.bind(this);
    this._renderer.on('context', this._onContextChange);

    // Initial context
    this._onContextChange();
  }

  /**
   * Resizes this FilterManager and its textures to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  WebGLFilterManager.prototype.resizeTo = function resizeTo(dimensions) {
    this._textureFrame.width = dimensions.x;
    this._textureFrame.height = dimensions.y;

    this._renderTargets.forEach(function (texture) {
      return texture.resizeTo(dimensions);
    });
  };

  /**
   * Returns the filter stack
   * @return {Object[]}
   */


  WebGLFilterManager.prototype.getFilterStack = function getFilterStack() {
    return this._filterStack;
  };

  /**
   * Sets the filter stack to the given stack
   * @param {Object[]} filterStack
   */


  WebGLFilterManager.prototype.setFilterStack = function setFilterStack(filterStack) {
    this._filterStack = filterStack;
  };

  /**
   * Returns a render target from the pool or creates a new one
   * @param  {Boolean} clear
   * @return {PhotoEditorSDK.Engine.WebGLRenderTarget}
   * @private
   */


  WebGLFilterManager.prototype._getOrCreateRenderTarget = function _getOrCreateRenderTarget(clear) {
    var renderTarget = this._renderTargets.pop();
    if (!renderTarget) {
      renderTarget = new _webglRenderTarget2.default(this._renderer, this._textureFrame.width, this._textureFrame.height, 1);
    }
    renderTarget.setFrame(this._currentFrame);

    if (clear) {
      renderTarget.clear();
    }

    return renderTarget;
  };

  /**
   * Pushes the given filters to the
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   * @param  {PhotoEditorSDK.Engine.Filter[]} filters
   */


  WebGLFilterManager.prototype.pushFilters = function pushFilters(displayObject, filters) {
    var bounds = displayObject.getBounds();
    this._currentFrame = bounds;

    var filterRectangle = displayObject.getFilterRectangle();
    if (filterRectangle.width > 0 && filterRectangle.height > 0) {
      this._currentFrame = filterRectangle;
    }

    var renderTarget = this._getOrCreateRenderTarget();
    this._renderer.setRenderTarget(renderTarget);
    renderTarget.clear();

    this._filterStack.push({ renderTarget: renderTarget, filters: filters });
  };

  /**
   * Removes, applies and returns the last filters from the stack
   * @return {Object}
   */


  WebGLFilterManager.prototype.popFilters = function popFilters() {
    var _filterStack$pop = this._filterStack.pop(),
        filters = _filterStack$pop.filters,
        renderTarget = _filterStack$pop.renderTarget;

    var lastFilter = this._filterStack[this._filterStack.length - 1];

    var inputRenderTarget = renderTarget;
    var outputRenderTarget = lastFilter.renderTarget;

    // Update the Quad's buffers
    this._quad.map(this._textureFrame, inputRenderTarget.getFrame());

    var shader = filters[0].getShaderForRenderer(this._renderer);
    var vertexBuffer = this._quad.getVertexBuffer();
    var indexBuffer = this._quad.getIndexBuffer();

    var gl = this._renderer.getContext();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    var attributeLocations = shader.getAttributeLocations();
    gl.vertexAttribPointer(attributeLocations.a_position, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(attributeLocations.a_texCoord, 2, gl.FLOAT, false, 0, 2 * 4 * 4);
    gl.vertexAttribPointer(attributeLocations.a_color, 4, gl.FLOAT, false, 0, 4 * 4 * 4);

    if (filters.length === 1) {
      filters[0].apply(this._renderer, inputRenderTarget, outputRenderTarget);
      this._renderTargets.push(inputRenderTarget);
    } else {
      this._applyFilters(filters, inputRenderTarget, outputRenderTarget);
    }

    return filters;
  };

  /**
   * Applies the given filters to the given inputRenderTarget and outputs
   * the filtered content to the outputRenderTarget
   * @param  {PhotoEditorSDK.Engine.Filter[]} filters
   * @param  {PhotoEditorSDK.Engine.WebGLRenderTarget} inputRenderTarget
   * @param  {PhotoEditorSDK.Engine.WebGLRenderTarget} outputRenderTarget
   */


  WebGLFilterManager.prototype._applyFilters = function _applyFilters(filters, inputRenderTarget, outputRenderTarget) {
    var _this = this;

    var flipRenderTarget = inputRenderTarget;
    var flopRenderTarget = this._getOrCreateRenderTarget(true);

    var lastFilter = filters[filters.length - 1];
    filters.forEach(function (filter, i) {
      var isLastFilter = filter === lastFilter;

      if (!isLastFilter) {
        // Render from flip to flop with filter
        filter.apply(_this._renderer, flipRenderTarget, flopRenderTarget);

        // Flip the render targets
        var temp = flipRenderTarget;
        flipRenderTarget = flopRenderTarget;
        flopRenderTarget = temp;
      } else {
        // Render to output
        filter.apply(_this._renderer, flipRenderTarget, outputRenderTarget);
      }
    });

    // Push the textures back into the texture pool to use them again later
    this._renderTargets.push(flipRenderTarget);
    this._renderTargets.push(flopRenderTarget);
  };

  /**
   * Gets called when the WebGL context has been changed
   * @private
   */


  WebGLFilterManager.prototype._onContextChange = function _onContextChange() {
    this._renderTargets.length = 0;
    /* istanbul ignore next */
    if (this._renderer.isOfType(RendererType.WEBGL)) {
      if (this._quad) {
        this._quad.dispose();
      }
      this._quad = new _quad2.default(this._renderer);
    }
  };

  /**
   * Disposes this WebGLFilterManager
   */


  WebGLFilterManager.prototype.dispose = function dispose() {
    this._renderer.off('context', this._onContextChange);
    if (this._quad) {
      this._quad.dispose();
    }
    this._renderTargets.forEach(function (target) {
      target.dispose();
    });
  };

  return WebGLFilterManager;
}();

exports.default = WebGLFilterManager;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(6);

var _globals2 = _interopRequireDefault(_globals);

var _constants = __webpack_require__(9);

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

var Log = _globals2.default.Log,
    Utils = _globals2.default.Utils;

/**
 * Represents a WebGL shader with a vertex shader, a fragment shader, uniforms and attributes
 * @class
 * @memberof PhotoEditorSDK.Engine
 */
/* istanbul ignore next */

var Shader = function () {
  /**
   * Creates a Shader
   * @param  {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param  {String} vertexSource
   * @param  {String} fragmentSource
   * @param  {Object} uniforms
   * @param  {String[]} attributes
   */
  function Shader(renderer, vertexSource, fragmentSource, uniforms, attributes) {
    (0, _classCallCheck3.default)(this, Shader);

    this._renderer = renderer;
    this._vertexSource = vertexSource;
    this._fragmentSource = fragmentSource;
    this._uniforms = uniforms || {};
    this._uniformLocations = {};
    this._attributes = attributes || [];
    this._attributeLocations = {};

    this._onContextChange = this._onContextChange.bind(this);
    this._renderer.on('context', this._onContextChange);

    this._init();
  }

  /**
   * Compiles this shader and caches the uniform locations
   * @private
   */


  Shader.prototype._init = function _init() {
    this._compile();

    var gl = this._renderer.getContext();
    gl.useProgram(this._program);

    this._cacheUniformLocations();
    this._cacheAttributeLocations();
  };

  /**
   * Gets called when the attached Renderer changes its context
   * @private
   */


  Shader.prototype._onContextChange = function _onContextChange() {
    this._init();
  };

  /**
   * Binds the given buffers for this shader
   * @param {WebGLBuffer} vertexBuffer
   * @param {WebGLBuffer} indexBuffer
   */


  Shader.prototype.setupBuffers = function setupBuffers(vertexBuffer, indexBuffer) {
    var gl = this._renderer.getContext();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    gl.vertexAttribPointer(this._attributeLocations.a_position, 2, gl.FLOAT, false, _globals2.default.VERTEX_BYTE_SIZE, 0);
    gl.vertexAttribPointer(this._attributeLocations.a_texCoord, 2, gl.FLOAT, false, _globals2.default.VERTEX_BYTE_SIZE, 2 * 4);
    gl.vertexAttribPointer(this._attributeLocations.a_color, 4, gl.UNSIGNED_BYTE, true, _globals2.default.VERTEX_BYTE_SIZE, 4 * 4);
  };

  /**
   * Synchronizes all uniforms with WebGL
   */


  Shader.prototype.syncUniforms = function syncUniforms() {
    var _this = this;

    Object.keys(this._uniforms).forEach(function (key) {
      _this.syncUniform(key);
    });
  };

  /**
   * Synchronizes the uniform with the given name
   * @param  {String} name
   */


  Shader.prototype.syncUniform = function syncUniform(name) {
    var gl = this._renderer.getContext();
    var uniform = this._uniforms[name];
    var location = this._uniformLocations[name];
    switch (uniform.type) {
      case _constants.UniformType.SAMPLER2D:
      case _constants.UniformType.INT:
      case _constants.UniformType.INT1:
        gl.uniform1i(location, uniform.value);
        break;
      case _constants.UniformType.FLOAT:
      case _constants.UniformType.FLOAT1:
        gl.uniform1f(location, uniform.value);
        break;
      case _constants.UniformType.FLOAT2:
        gl.uniform2f(location, uniform.value[0], uniform.value[1]);
        break;
      case _constants.UniformType.FLOAT3:
        gl.uniform3f(location, uniform.value[0], uniform.value[1], uniform.value[2]);
        break;
      case _constants.UniformType.FLOAT4:
        gl.uniform4f(location, uniform.value[0], uniform.value[1], uniform.value[2], uniform.value[3]);
        break;
      case _constants.UniformType.FLOAT_VECTOR2:
        gl.uniform2fv(location, uniform.value);
        break;
      case _constants.UniformType.MAT3:
      case _constants.UniformType.MAT3FV:
        gl.uniformMatrix3fv(location, false, uniform.value);
        break;
      case _constants.UniformType.MAT4:
        gl.uniformMatrix4fv(location, false, uniform.value);
        break;
      default:
        Log.warn(this.constructor.name, 'Unknown uniform type: ' + uniform.type);
    }
  };

  /**
   * Caches the locations for all attributes
   * @private
   */


  Shader.prototype._cacheAttributeLocations = function _cacheAttributeLocations() {
    var _this2 = this;

    var gl = this._renderer.getContext();
    this._attributes.forEach(function (name) {
      _this2._attributeLocations[name] = gl.getAttribLocation(_this2._program, name);
    });
  };

  /**
   * Caches the locations for all uniforms
   * @private
   */


  Shader.prototype._cacheUniformLocations = function _cacheUniformLocations() {
    var _this3 = this;

    var gl = this._renderer.getContext();
    var keys = Object.keys(this._uniforms);
    keys.forEach(function (key) {
      _this3._uniformLocations[key] = gl.getUniformLocation(_this3._program, key);
    });
  };

  /**
   * Adds the preferred precision for the current device to the given shader source
   * @param  {String} source
   * @return {String}
   */


  Shader.prototype._addPrecisionToSource = function _addPrecisionToSource(source) {
    var maxFloatPrecision = this._renderer.getMaxFloatPrecision();

    var precision = 'mediump';
    if (Utils.isMobile() && maxFloatPrecision === 'highp') {
      precision = 'highp';
    }

    return 'precision ' + precision + ' float;\n' + source;
  };

  /**
   * Compiles the vertex and fragment sources of this shader
   * @private
   */


  Shader.prototype._compile = function _compile() {
    var gl = this._renderer.getContext();

    var vertexShader = this._compileShader(gl.VERTEX_SHADER, this._vertexSource);
    this._vertexShader = vertexShader;

    var fragmentSource = this._addPrecisionToSource(this._fragmentSource);
    var fragmentShader = this._compileShader(gl.FRAGMENT_SHADER, fragmentSource);
    this._fragmentShader = fragmentShader;

    // Create the WebGL program and attach the shaders
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // Link the program
    gl.linkProgram(program);

    // Check linking status
    // Check linking status
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
      var errorMessage = gl.getProgramInfoLog(program);
      if (gl.isContextLost()) errorMessage = 'WebGL context lost';
      gl.deleteProgram(program);
      Log.error(this.constructor.name, 'WebGL program linking error: ' + errorMessage);
    }

    this._program = program;
  };

  /**
   * Creates and compiles a shader with the given type and source
   * @param  {Number} shaderType
   * @param  {String} shaderSource
   * @return {WebGLShader}
   * @private
   */


  Shader.prototype._compileShader = function _compileShader(shaderType, shaderSource) {
    var gl = this._renderer.getContext();

    // Create the shader and compile it
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    // Check compilation status
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      var errorMessage = gl.getShaderInfoLog(shader);
      if (gl.isContextLost()) errorMessage = 'WebGL context lost';
      gl.deleteShader(shader);
      Log.error(this.constructor.name, 'WebGL shader compilation error: ' + errorMessage);
    }

    return shader;
  };

  /**
   * Sets the given uniform to the given value
   * @param {String} name
   * @param {*} value
   * @param {Boolean} sync = false
   */


  Shader.prototype.setUniform = function setUniform(name, value) {
    var sync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    this._uniforms[name].value = value;
    if (sync) {
      this.syncUniform(name);
    }
  };

  /**
   * Sets the given uniforms to their values
   * @param {Object}  uniforms
   * @param {Boolean} sync = false
   */


  Shader.prototype.setUniforms = function setUniforms(uniforms) {
    var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    for (var name in uniforms) {
      this._uniforms[name].value = uniforms[name];
      if (sync) {
        this.syncUniform(name);
      }
    }
  };

  /**
   * Returns the uniforms
   * @return {Object}
   */


  Shader.prototype.getUniforms = function getUniforms() {
    return this._uniforms;
  };

  /**
   * Returns the attributes
   * @return {String[]}
   */


  Shader.prototype.getAttributes = function getAttributes() {
    return this._attributes;
  };

  /**
   * Returns the attribute locations
   * @return {Object}
   */


  Shader.prototype.getAttributeLocations = function getAttributeLocations() {
    return this._attributeLocations;
  };

  /**
   * Returns this shader's WebGL program
   * @return {WebGLProgram}
   */


  Shader.prototype.getProgram = function getProgram() {
    return this._program;
  };

  /**
   * Cleans up this shader
   */


  Shader.prototype.dispose = function dispose() {
    var gl = this._renderer.getContext();
    gl.deleteProgram(this._program);

    gl.deleteShader(this._vertexShader);
    gl.deleteShader(this._fragmentShader);

    this._uniforms = null;
    this._uniformLocations = null;
    this._attributes = null;
    this._attributeLocations = null;

    this._renderer.off('context', this._onContextChange);
  };

  return Shader;
}();

exports.default = Shader;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _shader = __webpack_require__(46);

var _shader2 = _interopRequireDefault(_shader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UniformType = _globals.Constants.UniformType; /*
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
 * The default texture shader
 * @class
 * @extends PhotoEditorSDK.Engine.Shader
 * @memberof PhotoEditorSDK.Engine
 */
/* istanbul ignore next */
var TextureShader = function (_Shader) {
  (0, _inherits3.default)(TextureShader, _Shader);

  /**
   * Creates a TextureShader
   * @param  {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param  {String} vertexSource
   * @param  {String} fragmentSource
   */
  function TextureShader(renderer, vertexSource, fragmentSource) {
    (0, _classCallCheck3.default)(this, TextureShader);

    vertexSource = vertexSource || TextureShader.defaultVertexSource;
    fragmentSource = fragmentSource || TextureShader.defaultFragmentSource;

    return (0, _possibleConstructorReturn3.default)(this, _Shader.call(this, renderer, vertexSource, fragmentSource, TextureShader.defaultUniforms, TextureShader.defaultAttributes));
  }

  return TextureShader;
}(_shader2.default);

/**
 * The default vertex shader source code
 * @type {String}
 */


TextureShader.defaultVertexSource = __webpack_require__(218);

/**
 * The default fragment shader source code
 * @type {String}
 */
TextureShader.defaultFragmentSource = __webpack_require__(217);

var matrix = new _globals.Matrix();

/**
 * The default uniforms
 * @type {Object}
 */
TextureShader.defaultUniforms = {
  u_image: {
    type: UniformType.SAMPLER2D,
    value: 0
  },
  u_projMatrix: {
    type: UniformType.MAT3,
    value: matrix.toArray()
  }
};

/**
 * The default WebGL attributes
 * @type {String[]}
 */
TextureShader.defaultAttributes = ['a_position', 'a_texCoord', 'a_color'];

exports.default = TextureShader;

/***/ },
/* 48 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 49 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(27)
  , dPs         = __webpack_require__(199)
  , enumBugKeys = __webpack_require__(49)
  , IE_PROTO    = __webpack_require__(55)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(85)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(192).appendChild(iframe);
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
/* 53 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f
  , has = __webpack_require__(16)
  , TAG = __webpack_require__(22)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(56)('keys')
  , uid    = __webpack_require__(40);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(13)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 57 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(29);
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(13)
  , core           = __webpack_require__(20)
  , LIBRARY        = __webpack_require__(51)
  , wksExt         = __webpack_require__(60)
  , defineProperty = __webpack_require__(17).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(22);

/***/ },
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(61).nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(62).setImmediate, __webpack_require__(62).clearImmediate))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorMatrix = exports.Matrix = exports.Rectangle = exports.Vector2 = undefined;

var _vector = __webpack_require__(19);

var _vector2 = _interopRequireDefault(_vector);

var _rectangle = __webpack_require__(75);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _matrix = __webpack_require__(74);

var _matrix2 = _interopRequireDefault(_matrix);

var _colorMatrix = __webpack_require__(33);

var _colorMatrix2 = _interopRequireDefault(_colorMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Some classes that help us do the math
 * @namespace PhotoEditorSDK.Math
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

exports.Vector2 = _vector2.default;
exports.Rectangle = _rectangle2.default;
exports.Matrix = _matrix2.default;
exports.ColorMatrix = _colorMatrix2.default;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Holds an array of {@link PhotoEditorSDK.Operation} instances and handles their dirtiness
 * @class
 * @memberof PhotoEditorSDK
 */
var OperationsStack = function (_EventEmitter) {
  (0, _inherits3.default)(OperationsStack, _EventEmitter);

  /**
   * Creates an OperationsStack
   * @param  {PhotoEditorSDK.Operation[]} [operations = []]
   */
  function OperationsStack() {
    var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    (0, _classCallCheck3.default)(this, OperationsStack);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._onOperationUpdate = _this._onOperationUpdate.bind(_this);

    _this._cacheEnabled = true;
    _this._stack = operations;
    _this._stack.forEach(function (operation) {
      operation.on('update', _this._onOperationUpdate);
    });
    return _this;
  }

  /**
   * Clears this operations stack
   */


  OperationsStack.prototype.clear = function clear() {
    var _this2 = this;

    this.forEach(function (operation) {
      return _this2.remove(operation);
    });
    this._stack = [];
  };

  /**
   * Gets called when an operation is about to be updated
   * @param  {PhotoEditorSDK.Operation} operation
   * @param  {Object} options
   * @private
   */


  OperationsStack.prototype._onOperationUpdate = function _onOperationUpdate(operation, options) {
    this.emit(_globals.Constants.Events.OPERATION_UPDATED, operation, options);
  };

  /**
   * Enables the cache on all operations
   */


  OperationsStack.prototype.enableCache = function enableCache() {
    this._cacheEnabled = true;
  };

  /**
   * Disables the cache on all operations
   */


  OperationsStack.prototype.disableCache = function disableCache() {
    this._cacheEnabled = false;
  };

  /**
   * Passes Array#forEach
   * @param  {Function} iterator
   * @return {Array}
   */


  OperationsStack.prototype.forEach = function forEach(iterator) {
    return this._stack.filter(function (op) {
      return !!op;
    }).forEach(iterator);
  };

  /**
   * Renders all operations
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @return {Promise}
   */


  OperationsStack.prototype.render = function render(sdk, inputTexture) {
    var _this3 = this;

    var currentTexture = inputTexture;
    var operations = this._stack.filter(function (op) {
      return !!op;
    }).filter(function (op) {
      return op.getEnabled();
    });

    // Find first operation from end of array that is not dirty
    operations.reverse();
    var firstUndirtyOperation = operations.filter(function (o) {
      return !o.isDirtyForRenderer(sdk.getRenderer());
    })[0];
    var firstUndirtyIndex = operations.indexOf(firstUndirtyOperation);

    operations.reverse();

    // Skip operations that would be overwritten by succeeding operations
    var startIndex = 0;
    if (firstUndirtyIndex !== -1) {
      startIndex = operations.length - firstUndirtyIndex - 1;
    }

    for (var index = 0; index < startIndex; index++) {
      _globals.Log.info(this.constructor.name, 'Skipping ' + operations[index].constructor.name);
    }

    var promise = _promise2.default.resolve(currentTexture);

    var _loop = function _loop(_index) {
      var operation = operations[_index];
      promise = promise.then(function (inputTexture) {
        return operation.render(inputTexture).then(function (operationOutput) {
          // If cache is disabled, flush textures of previous operation
          if (_index > 0 && !_this3._cacheEnabled) {
            operations[_index - 1].disposeRenderTextures();
          }
          return operationOutput;
        });
      });
    };

    for (var _index = startIndex; _index < operations.length; _index++) {
      _loop(_index);
    }

    return promise;
  };

  /**
   * Validates the settings of all operations
   * @return {Promise}
   */


  OperationsStack.prototype.validateSettings = function validateSettings() {
    return _promise2.default.all(this._stack.filter(function (op) {
      return !!op;
    }).map(function (op) {
      return op.validateSettings();
    }));
  };

  /**
   * Sets all operations to dirty
   * @param {Boolean} dimensionsChanged = falses
   */


  OperationsStack.prototype.setAllToDirty = function setAllToDirty() {
    var dimensionsChanged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this.forEach(function (op) {
      return op.setDirty(true, dimensionsChanged);
    });
  };

  /**
   * Finds the first dirty operation and sets all following operations to dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   */


  OperationsStack.prototype.updateDirtinessForRenderer = function updateDirtinessForRenderer(renderer) {
    var dirtyFound = false;
    for (var i = 0; i < this._stack.length; i++) {
      var _operation = this._stack[i];
      if (!_operation) continue;
      if (_operation.isDirtyForRenderer(renderer)) {
        dirtyFound = true;
      }

      if (dirtyFound) {
        _operation.setDirtyForRenderer(true, renderer);
      }
    }
  };

  /**
   * Adds the given operation to this stack
   * @param {PhotoEditorSDK.Operation} operation
   */


  OperationsStack.prototype.push = function push(operation) {
    this._stack.push(operation);
    operation.on('update', this._onOperationUpdate);
  };

  /**
   * Adds the given operation before all existing operations
   * @param  {PhotoEditorSDK.Operation} operation
   */


  OperationsStack.prototype.unshift = function unshift(operation) {
    this._stack.unshift(operation);
    operation.on('update', this._onOperationUpdate);
  };

  /**
   * Returns a cloned instance of this stack
   * @return {PhotoEditorSDK.OperationsStack}
   */


  OperationsStack.prototype.clone = function clone() {
    return new OperationsStack(this._stack.slice(0));
  };

  /**
   * Returns the operation at the given index
   * @param  {Number} index
   * @return {PhotoEditorSDK.Operation}
   */


  OperationsStack.prototype.get = function get(index) {
    return this._stack[index];
  };

  /**
   * Sets the operation at the given index to the given one
   * @param  {Number} index
   * @param  {PhotoEditorSDK.Operation} operation
   */


  OperationsStack.prototype.set = function set(index, operation) {
    if (this._stack[index]) {
      this._stack[index].off('update', this._onOperationUpdate);
      this._stack[index].dispose();
    }
    this._stack[index] = operation;
    operation.on('update', this._onOperationUpdate);
  };

  /**
   * Removes the given operation
   * @param  {PhotoEditorSDK.Operation} operation
   */


  OperationsStack.prototype.remove = function remove(operation) {
    var index = this._stack.indexOf(operation);
    if (index === -1) {
      return;
    }
    if (this._stack[index]) {
      this._stack[index].off('update', this._onOperationUpdate);
      this._stack[index].dispose();
    }
    this._stack.splice(index, 1);
  };

  /**
   * Removes the operation at the given index
   * @param  {Number} index
   */


  OperationsStack.prototype.removeAt = function removeAt(index) {
    if (this._stack[index]) {
      this._stack[index].off('update', this._onOperationUpdate);
      this._stack[index].dispose();
    }
    this._stack[index] = undefined;
  };

  /**
   * Returns the stack
   * @return {PhotoEditorSDK.Operation[]}
   */


  OperationsStack.prototype.getStack = function getStack() {
    return this._stack;
  };

  OperationsStack.prototype.dispose = function dispose() {
    this.forEach(function (operation) {
      operation.dispose();
    });
  };

  return OperationsStack;
}(_eventEmitter2.default); /*
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

exports.default = OperationsStack;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filterOperation = __webpack_require__(117);

Object.defineProperty(exports, 'FilterOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_filterOperation).default;
  }
});

var _cropOperation = __webpack_require__(115);

Object.defineProperty(exports, 'CropOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cropOperation).default;
  }
});

var _orientationOperation = __webpack_require__(165);

Object.defineProperty(exports, 'OrientationOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_orientationOperation).default;
  }
});

var _adjustmentsOperation = __webpack_require__(112);

Object.defineProperty(exports, 'AdjustmentsOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_adjustmentsOperation).default;
  }
});

var _linearFocusOperation = __webpack_require__(164);

Object.defineProperty(exports, 'LinearFocusOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_linearFocusOperation).default;
  }
});

var _radialFocusOperation = __webpack_require__(166);

Object.defineProperty(exports, 'RadialFocusOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_radialFocusOperation).default;
  }
});

var _borderOperation = __webpack_require__(114);

Object.defineProperty(exports, 'BorderOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_borderOperation).default;
  }
});

var _spriteOperation = __webpack_require__(170);

Object.defineProperty(exports, 'SpriteOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_spriteOperation).default;
  }
});

var _watermarkOperation = __webpack_require__(177);

Object.defineProperty(exports, 'WatermarkOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_watermarkOperation).default;
  }
});

var _exifOrientationOperation = __webpack_require__(116);

Object.defineProperty(exports, 'ExifOrientationOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_exifOrientationOperation).default;
  }
});

var _selectiveBlurOperation = __webpack_require__(167);

Object.defineProperty(exports, 'SelectiveBlurOperation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectiveBlurOperation).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = {
	"name": "photoeditorsdk",
	"version": "3.5.3",
	"description": "The most comprehensive photo editor SDK for HTML5",
	"repository": "http://github.com/imgly/pesdk-html5",
	"author": "Photo Editor SDK <contact@photoeditorsdk.com>",
	"license": "SEE LICENSE IN LICENSE.md",
	"scripts": {
		"render-filter-previews": "babel-node scripts/render-filter-previews",
		"release": "ENV=production node_modules/.bin/gulp release",
		"test": "node_modules/.bin/mocha --require test/support/node test/sdk test/ui",
		"test:client": "ENV=test REMOTE=true gulp test:client",
		"test:client:local": "ENV=test node --stack-size=65500 node_modules/.bin/gulp test:client",
		"test:webgl": "node_modules/.bin/mocha test-webgl",
		"coveralls": "npm run coverage && cat ./coverage/lcov.info | node_modules/.bin/coveralls && rm -rf ./coverage",
		"coverage": "NODE_ENV=test node_modules/.bin/istanbul cover node_modules/.bin/_mocha --require test/support/node test/sdk test/ui"
	},
	"devDependencies": {
		"ajv": "^4.4.0",
		"babel-core": "^6.6.4",
		"babel-loader": "^6.2.4",
		"babel-plugin-external-helpers-2": "^6.3.13",
		"babel-plugin-transform-es2015-classes": "^6.6.4",
		"babel-plugin-transform-runtime": "^6.6.0",
		"babel-preset-es2015": "^6.6.0",
		"babel-preset-react": "^6.5.0",
		"babel-register": "^6.6.0",
		"babel-runtime": "^6.6.1",
		"canvas": "^1.3.12",
		"chai": "^3.4.0",
		"chai-as-promised": "^5.1.0",
		"chromedriver": "^2.23.1",
		"classnames": "^2.1.3",
		"compass-mixins": "^0.12.8",
		"coveralls": "^2.11.2",
		"del": "^2.0.0",
		"gl": "^3.0.3",
		"gulp": "^3.8.10",
		"gulp-9e-sass-lint": "0.0.8",
		"gulp-changed": "^1.3.0",
		"gulp-jsdoc3": "^0.2.0",
		"gulp-mocha": "^2.2.0",
		"gulp-notify": "^1.3.1",
		"gulp-rename": "~1.2.0",
		"gulp-sass": "^2.0.4",
		"gulp-sequence": "^0.4.1",
		"gulp-sourcemaps": "^1.5.2",
		"gulp-standard": "^8.0.2",
		"gulp-uglify": "^1.4.2",
		"gulp-util": "~2.2.16",
		"gulp-watch": "^4.3.5",
		"gulp-webserver": "^0.9.1",
		"gulp-yuicompressor": "0.0.3",
		"inquirer": "^0.11.4",
		"inquirer-path": "^1.0.0-alpha5",
		"istanbul": "^1.1.0-alpha.1",
		"jaguarjs-jsdoc": "git://github.com/imgly/jaguarjs-jsdoc.git#master",
		"jsdoc": "git://github.com/jsdoc3/jsdoc.git#master",
		"json-loader": "^0.5.2",
		"mocha": "^2.3.3",
		"mocha-lcov-reporter": "0.0.1",
		"nightwatch": "git://github.com/saschagehlich/nightwatch.git#feature/upload-file",
		"performance-now": "^0.2.0",
		"preprocess-loader": "^0.2.0",
		"pretty-error": "^2.0.0",
		"prompt": "^1.0.0",
		"raw-loader": "^0.5.1",
		"react": "^15.1.0",
		"react-dom": "^15.1.0",
		"rembrandt": "^0.0.8",
		"require-dir": "^0.3.0",
		"run-sequence": "~0.3.6",
		"selenium-server-standalone-jar": "^2.53.1",
		"should": "^4.3.0",
		"sinon": "^1.17.3",
		"sinon-chai": "^2.8.0",
		"stats.js": "^0.16.0",
		"term-img2": "^2.0.1",
		"transform-loader": "^0.2.2",
		"vinyl-source-stream": "0.1.1",
		"webpack": "2.1.0-beta.25",
		"webpack-notifier": "^1.2.1"
	},
	"standard": {
		"globals": [
			"describe",
			"context",
			"before",
			"beforeEach",
			"after",
			"afterEach",
			"it",
			"expect"
		]
	}
};

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _displayObject = __webpack_require__(43);

var _displayObject2 = _interopRequireDefault(_displayObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A container for DisplayObject instances
 * @class
 * @extends PhotoEditorSDK.Engine.DisplayObject
 * @memberof PhotoEditorSDK.Engine
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

var Container = function (_DisplayObject) {
  (0, _inherits3.default)(Container, _DisplayObject);

  /**
   * Creates a Container
   * @override
   */
  function Container() {
    (0, _classCallCheck3.default)(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _DisplayObject.call.apply(_DisplayObject, [this].concat(args)));

    _this._children = [];
    _this._filters = [];
    return _this;
  }

  /**
   * Adds the given filter to the filter stack
   * @param {PhotoEditorSDK.Engine.Filter} filter
   */


  Container.prototype.addFilter = function addFilter(filter) {
    this._filters.push(filter);
  };

  /**
   * Removes the given filter from the filter stack
   * @param  {PhotoEditorSDK.Engine.Filter} filter
   * @return {Boolean} - Whether the filter has been removed
   */


  Container.prototype.removeFilter = function removeFilter(filter) {
    var index = this._filters.indexOf(filter);
    if (index !== -1) {
      this._filters.splice(index, 1);
      return true;
    }
    return false;
  };

  /**
   * Sets the filters
   * @param {Array.<PhotoEditorSDK.Engine.Filter>} filters
   */


  Container.prototype.setFilters = function setFilters(filters) {
    this._filters = filters;
  };

  /**
   * Adds the given DisplayObject to the list of children
   * @param {PhotoEditorSDK.Engine.DisplayObject} child
   */


  Container.prototype.addChild = function addChild(child) {
    // Remove from previous parent
    var originalParent = child.getParent();
    if (originalParent !== null) {
      originalParent.removeChild(child);
    }
    child.setParent(this);

    this._children.push(child);
  };

  /**
   * Prepends the given DisplayObject to the list of children
   * @param  {PhotoEditorSDK.Engine.DisplayObject} child
   */


  Container.prototype.prependChild = function prependChild(child) {
    // Remove from previous parent
    var originalParent = child.getParent();
    if (originalParent !== null) {
      originalParent.removeChild(child);
    }
    child.setParent(this);

    this._children.unshift(child);
  };

  /**
   * Checks whether this container has the given child
   * @param  {PhotoEditorSDK.Engine.DisplayObject}  child
   * @return {Boolean}
   */


  Container.prototype.hasChild = function hasChild(child) {
    var index = this._children.indexOf(child);
    return index !== -1;
  };

  /**
   * Removes the given object from the list of children
   * @param  {PhotoEditorSDK.Engine.DisplayObject} child
   */


  Container.prototype.removeChild = function removeChild(child) {
    var index = this._children.indexOf(child);
    if (index !== -1) {
      this._children.splice(index, 1);
      child.setParent(null);
    } else {
      _globals.Log.info(this.constructor.name, 'Tried to remove a child that does not exist');
    }
  };

  /**
   * Removes all children
   */


  Container.prototype.clearChildren = function clearChildren() {
    this._children = [];
  };

  /**
   * Renders this DisplayObject using the given WebGLRenderer
   * @param  {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   * @override
   */


  Container.prototype.renderWebGL = function renderWebGL(renderer) {
    if (!this._visible) {
      return;
    }

    var filterManager = renderer.getFilterManager();
    if (this._filters && this._filters.length) {
      filterManager.pushFilters(this, this._filters);
    }

    renderer.getCurrentObjectRenderer().start();

    this._renderWebGL(renderer);

    this._children.forEach(function (child) {
      child.renderWebGL(renderer);
    });

    renderer.getCurrentObjectRenderer().flush();

    if (this._filters && this._filters.length) {
      filterManager.popFilters();
    }
    renderer.getCurrentObjectRenderer().start();
  };

  /**
   * Renders the contents of this container
   * @param {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   * @protected
   */


  Container.prototype._renderWebGL = function _renderWebGL(renderer) {};

  /**
   * Renders this DisplayObject using the given CanvasRenderer
   * @param  {PhotoEditorSDK.Engine.CanvasRenderer} renderer
   * @override
   */


  Container.prototype.renderCanvas = function renderCanvas(renderer) {
    if (!this._visible) {
      return;
    }

    var filterManager = renderer.getFilterManager();
    if (this._filters && this._filters.length) {
      filterManager.pushFilters(this, this._filters);
    }

    this._renderCanvas(renderer);
    this._children.forEach(function (child) {
      child.renderCanvas(renderer);
    });

    if (this._filters && this._filters.length) {
      filterManager.popFilters();
    }
  };

  /**
   * Renders the contents of this container
   * @param {PhotoEditorSDK.Engine.CanvasRenderer} renderer
   * @protected
   */


  Container.prototype._renderCanvas = function _renderCanvas(renderer) {};

  /**
   * Updates the world transform for this DisplayObject
   */


  Container.prototype.updateTransform = function updateTransform() {
    _DisplayObject.prototype.updateTransform.call(this);
    this._children.forEach(function (child) {
      child.updateTransform();
    });
  };

  /**
   * Returns the non-global bounds of this DisplayObject
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Container.prototype.getLocalBounds = function getLocalBounds() {
    if (this._localBoundsNeedUpdate) {
      // @TODO Calculate bounds by looking at children
      this._localBoundsNeedUpdate = false;
    }
    return this._localBounds.clone();
  };

  /**
   * Returns the bounds for this DisplayObject
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Container.prototype.getBounds = function getBounds() {
    if (this._boundsNeedUpdate) {
      // @TODO Calculate bounds by looking at children
      this._boundsNeedUpdate = false;
    }
    return this._bounds.clone();
  };

  /**
   * Returns this Container's children
   * @return {PhotoEditorSDK.Engine.DisplayObject[]}
   */


  Container.prototype.getChildren = function getChildren() {
    return this._children;
  };

  /**
   * Returns this Container's filters
   * @return {PhotoEditorSDK.Engine.Filter[]}
   */


  Container.prototype.getFilters = function getFilters() {
    return this._filters;
  };

  /**
   * Disposes this Container
   */


  Container.prototype.dispose = function dispose() {};

  return Container;
}(_displayObject2.default);

exports.default = Container;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _utils = __webpack_require__(106);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base class for all renderers
 * @class
 * @memberof PhotoEditorSDK.Engine
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

var BaseRenderer = function (_EventEmitter) {
  (0, _inherits3.default)(BaseRenderer, _EventEmitter);

  /**
   * Create a BaseRenderer instance
   * @param  {Number} width
   * @param  {Number} height
   * @param  {Object} options = {}
   * @param  {Number} [options.pixelRatio = 1]
   * @param  {PhotoEditorSDK.Color} [options.clearColor = PhotoEditorSDK.Color.TRANSPARENT]
   * @param  {Boolean} [options.debug = false]
   */
  function BaseRenderer(width, height) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, BaseRenderer);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._options = _utils2.default.defaults(options, {
      pixelRatio: 1,
      transparent: false,
      clearColor: _globals.Color.BLACK,
      debug: false
    });

    _this.setMaxListeners(0);
    _this._width = width || 800;
    _this._height = height || 600;
    _this._dimensions = new _globals.Vector2(_this._width, _this._height);
    _this._maxTextureSize = null;
    _this._pixelRatio = _this._options.pixelRatio;
    _this._clearColor = _this._options.transparent ? _globals.Color.TRANSPARENT : _this._options.clearColor || _globals.Color.BLACK;
    return _this;
  }

  /**
   * Sets the canvas to the given one
   * @param {HTMLCanvasElement} canvas
   */


  BaseRenderer.prototype.setCanvas = function setCanvas(canvas) {
    var previousCanvas = this._canvas;
    this._canvas = canvas;

    if (previousCanvas !== canvas) {
      this._createContext();
      this._onBeforeContext();
      this._setupContext();
    }

    this.resizeTo(new _globals.Vector2(this._width, this._height));
  };

  /**
   * Returns the current canvas
   * @return {HTMLCanvasElement}
   */


  BaseRenderer.prototype.getCanvas = function getCanvas() {
    return this._canvas;
  };

  /**
   * Gets called before the context has been set up
   * @protected
   */


  BaseRenderer.prototype._onBeforeContext = function _onBeforeContext() {};

  /**
   * Resizes the context and view to the given size
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   * @param  {Boolean} resizeCanvas = true
   */


  BaseRenderer.prototype.resizeTo = function resizeTo(dimensions) {
    var resizeCanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this._width = dimensions.x * this._pixelRatio;
    this._height = dimensions.y * this._pixelRatio;

    if (resizeCanvas) {
      this._canvas.width = this._width;
      this._canvas.height = this._height;

      if (this._canvas.style) {
        this._canvas.style.width = this._width / this._pixelRatio + 'px';
        this._canvas.style.height = this._height / this._pixelRatio + 'px';
      }
    }

    this._dimensions = dimensions.clone();
  };

  /**
   * Gets the rendering context for this renderer
   * @returns {Object}
   * @protected
   * @abstract
   */
  /* istanbul ignore next */


  BaseRenderer.prototype._createContext = function _createContext() {
    _globals.Log.warn(this.constructor.name, '`_createContext` is abstract and not implemented in inherited class');
  };

  /**
   * Sets up the rendering context for this renderer
   * @protected
   * @abstract
   */
  /* istanbul ignore next */


  BaseRenderer.prototype._setupContext = function _setupContext() {
    _globals.Log.warn(this.constructor.name, '`_setupContext` is abstract and not implemented in inherited class');
  };

  /**
   * Renders the given displayObject
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   * @abstract
   */
  /* istanbul ignore next */


  BaseRenderer.prototype.render = function render(displayObject) {
    _globals.Log.warn(this.constructor.name, '`render` is abstract and not implemented in inherited class');
  };

  /**
   * Returns the maximum dimensions
   * @return {Number}
   */
  /* istanbul ignore next */


  BaseRenderer.prototype.getMaxDimensions = function getMaxDimensions() {
    return null;
  };

  /**
   * Returns the current rendering context
   * @return {RenderingContext}
   */


  BaseRenderer.prototype.getContext = function getContext() {
    return this._context;
  };

  /**
   * Returns the current width
   * @return {Number}
   */


  BaseRenderer.prototype.getWidth = function getWidth() {
    return this._dimensions.x;
  };

  /**
   * Returns the current height
   * @return {Number}
   */


  BaseRenderer.prototype.getHeight = function getHeight() {
    return this._dimensions.y;
  };

  /**
   * Returns the current dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  BaseRenderer.prototype.getDimensions = function getDimensions() {
    return this._dimensions;
  };

  /**
   * Returns the current pixel ratio
   * @return {Number}
   */


  BaseRenderer.prototype.getPixelRatio = function getPixelRatio() {
    return this._pixelRatio;
  };

  /**
   * Sets the pixel ratio
   * @return {Number}
   */


  BaseRenderer.prototype.setPixelRatio = function setPixelRatio(pixelRatio) {
    this._pixelRatio = pixelRatio;
    if (this._defaultRenderTarget) {
      this._defaultRenderTarget.setPixelRatio(pixelRatio);
    }
  };

  /**
   * Returns the maximum texture size
   * @return {Number}
   */


  BaseRenderer.prototype.getMaxTextureSize = function getMaxTextureSize() {
    return this._maxTextureSize;
  };

  /**
   * Returns the current filter manager
   * @return {PhotoEditorSDK.Engine.FilterManager}
   */


  BaseRenderer.prototype.getFilterManager = function getFilterManager() {
    return this._filterManager;
  };

  /**
   * Sets the filter manager
   * @param {PhotoEditorSDK.Engine.FilterManager} filterManager
   */


  BaseRenderer.prototype.setFilterManager = function setFilterManager(filterManager) {
    this._filterManager = filterManager;
  };

  /**
   * Checks if this renderer is supported on the current device and browser
   * @return {Boolean}
   */


  BaseRenderer.isSupported = function isSupported() {
    return true;
  };

  /**
   * Checks if this renderer's type is equal to the given one
   * @param  {String}  type
   * @return {Boolean}
   */


  BaseRenderer.prototype.isOfType = function isOfType(type) {
    return this._type === type;
  };

  /**
   * Disposes this Renderer
   * @abstract
   */
  /* istanbul ignore next */


  BaseRenderer.prototype.dispose = function dispose() {
    _globals.Log.warn(this.constructor.name, '`dispose` is abstract and not implemented in inherited class');
  };

  return BaseRenderer;
}(_globals.EventEmitter);

exports.default = BaseRenderer;

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
 * The base class for all ObjectRenderer classes
 * @class
 * @memberof PhotoEditorSDK.Engine
 */
/* istanbul ignore next */
var ObjectRenderer = function () {
  /**
   * Creates an ObjectRenderer
   * @param  {PhotoEditorSDK.Engine.BaseRenderer} renderer
   */
  function ObjectRenderer(renderer) {
    (0, _classCallCheck3.default)(this, ObjectRenderer);

    this._renderer = renderer;

    this._onContextChange = this._onContextChange.bind(this);
    this._renderer.on('context', this._onContextChange);
  }

  /**
   * Gets called when the rendering context changes
   * @private
   */


  ObjectRenderer.prototype._onContextChange = function _onContextChange() {};

  /**
   * Gets called when this object renderer is activated
   */


  ObjectRenderer.prototype.start = function start() {};

  /**
   * Gets called when this object renderer is deactivated
   */


  ObjectRenderer.prototype.stop = function stop() {
    this.flush();
  };

  /**
   * Renders whatever has been queued
   */


  ObjectRenderer.prototype.flush = function flush() {};

  /**
   * Disposes this ObjectRenderer
   */


  ObjectRenderer.prototype.dispose = function dispose() {
    this._renderer.off('context', this._onContextChange);
    this._renderer = null;
  };

  return ObjectRenderer;
}();

exports.default = ObjectRenderer;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _baseTexture = __webpack_require__(30);

var _baseTexture2 = _interopRequireDefault(_baseTexture);

var _textureUvs = __webpack_require__(105);

var _textureUvs2 = _interopRequireDefault(_textureUvs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A texture that can be applied to a {@link PhotoEditorSDK.Engine.Sprite}
 * @class
 * @extends EventEmitter
 * @memberof PhotoEditorSDK.Engine
 */
var Texture = function (_EventEmitter) {
  (0, _inherits3.default)(Texture, _EventEmitter);

  function Texture(baseTexture, frame) {
    (0, _classCallCheck3.default)(this, Texture);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    if (!(baseTexture instanceof _baseTexture2.default)) {
      throw new Error('`baseTexture` should be an instance of BaseTexture');
    }
    _this._baseTexture = baseTexture;
    _this._uvs = new _textureUvs2.default();
    _this._frame = frame ? frame.clone() : null;
    _this._frameLocked = !!frame;

    // Bind event handlers
    _this._onBaseTextureLoaded = _this._onBaseTextureLoaded.bind(_this);
    _this._onBaseTextureUpdated = _this._onBaseTextureUpdated.bind(_this);

    // A texture NEEDS to have a frame
    if (!_this._frame) {
      _this._frame = new _globals.Rectangle(0, 0, 1, 1);
    }

    if (!_this._baseTexture.isLoaded()) {
      _this._baseTexture.once('loaded', _this._onBaseTextureLoaded);
    } else {
      var _baseTexture$getFrame = baseTexture.getFrame(),
          width = _baseTexture$getFrame.width,
          height = _baseTexture$getFrame.height;

      if (!_this._frameLocked) {
        _this._frame = new _globals.Rectangle(0, 0, width, height);
      }
      _this._onBaseTextureLoaded();
    }
    return _this;
  }

  /**
   * Creates a texture from the given image
   * @param  {Image} image
   */


  Texture.fromImage = function fromImage(image) {
    var baseTexture = new _baseTexture2.default(image);
    return new Texture(baseTexture);
  };

  /**
   * Creates a texture from the given canvas
   * @param  {HTMLCanvasElement} canvas
   */


  Texture.fromCanvas = function fromCanvas(canvas) {
    var baseTexture = new _baseTexture2.default(canvas);
    return new Texture(baseTexture);
  };

  /**
   * Gets called when the base texture has been loaded
   * @private
   */


  Texture.prototype._onBaseTextureLoaded = function _onBaseTextureLoaded() {
    if (!this._frameLocked) {
      var frame = this._baseTexture.getFrame().clone();
      this.setFrame(frame);
    }

    this._baseTexture.on('update', this._onBaseTextureUpdated);
  };

  /**
   * Gets called when the base texture has been updated
   * @private
   */


  Texture.prototype._onBaseTextureUpdated = function _onBaseTextureUpdated() {
    var _baseTexture$getFrame2 = this._baseTexture.getFrame(),
        width = _baseTexture$getFrame2.width,
        height = _baseTexture$getFrame2.height;

    this._frame.width = width;
    this._frame.height = height;
    this.emit('update');
  };

  /**
   * Updates the UV coordinates of this texture
   * @private
   */


  Texture.prototype._updateUVs = function _updateUVs() {
    this._uvs.update(this._frame, this._baseTexture.getFrame());
  };

  /**
   * Returns the base texture
   * @return {PhotoEditorSDK.Engine.BaseTexture}
   */


  Texture.prototype.getBaseTexture = function getBaseTexture() {
    return this._baseTexture;
  };

  /**
   * Sets the base texture
   * @param {PhotoEditorSDK.Engine.BaseTexture} baseTexture
   */


  Texture.prototype.setBaseTexture = function setBaseTexture(baseTexture) {
    this._baseTexture = baseTexture;
  };

  /**
   * Returns the frame
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Texture.prototype.getFrame = function getFrame() {
    return this._frame;
  };

  /**
   * Sets the frame
   * @param {PhotoEditorSDK.Math.Rectangle} frame
   */


  Texture.prototype.setFrame = function setFrame(frame) {
    this._frame = frame;
    this._updateUVs();
  };

  /**
   * Returns the width
   * @return {Number}
   */


  Texture.prototype.getWidth = function getWidth() {
    return this._frame.width;
  };

  /**
   * Returns the height
   * @return {Number}
   */


  Texture.prototype.getHeight = function getHeight() {
    return this._frame.height;
  };

  /**
   * Returns the texture UVs
   * @return {PhotoEditorSDK.Engine.TextureUVs}
   */


  Texture.prototype.getUVs = function getUVs() {
    return this._uvs;
  };

  /**
   * Returns the dimensions of this texture
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Texture.prototype.getDimensions = function getDimensions() {
    return new _globals.Vector2(this._frame.width, this._frame.height);
  };

  return Texture;
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

exports.default = Texture;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var now = typeof window !== 'undefined' && window.performance && window.performance.now ? window.performance.now.bind(window.performance) : __webpack_require__(93);

/**
 * Hooks into a rendering context (WebGLRenderingContext or CanvasRenderingContext2D),
 * mocks its methods and measures the time consumed by the method calls. When `endFrame`
 * is called, it prints a performance report
 * @class
 * @memberof PhotoEditorSDK.Engine
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

var ContextPerformanceHook = function () {
  function ContextPerformanceHook(context) {
    var _this = this;

    (0, _classCallCheck3.default)(this, ContextPerformanceHook);

    this._context = context;
    this._tracking = false;

    var self = this;

    var _loop = function _loop(key) {
      var value = context[key];
      if (typeof value === 'function') {
        _this[key] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var fn = context[key];
          if (!self._tracking) {
            return fn.apply(context, args);
          }

          var start = now();
          var result = fn.apply(context, args);
          var time = now() - start;

          var call = {
            functionName: key,
            arguments: args,
            duration: time
          };
          self._trackedCalls.push(call);

          return result;
        };
      } else {
        _this._makePropertyWrapper(key);
      }
    };

    for (var key in context) {
      _loop(key);
    }
  }

  /**
   * Creates the getter and setter for the given property
   * @param  {String} property
   * @private
   */


  ContextPerformanceHook.prototype._makePropertyWrapper = function _makePropertyWrapper(property) {
    var insecureProperties = ['_context', '_trackedCalls', '_tracking'];
    if (insecureProperties.indexOf(property) !== -1) return;

    var context = this._context;

    this.__defineGetter__(property, function () {
      return context[property];
    });

    this.__defineSetter__(property, function (value) {
      context[property] = value;
    });
  };

  /**
   * Starts tracking a frame
   */


  ContextPerformanceHook.prototype.startFrame = function startFrame() {
    this._tracking = true;
    this._trackedCalls = [];
  };

  /**
   * Stops tracking a frame and prints a performance report
   */


  ContextPerformanceHook.prototype.endFrame = function endFrame() {
    var tag = 'Rendering';
    _globals.Log.log(tag, 'Frame rendering results:');
    _globals.Log.log(tag, 'Context calls: ' + this._trackedCalls.length);

    var groupedCalls = {};
    this._trackedCalls.forEach(function (_ref) {
      var functionName = _ref.functionName,
          duration = _ref.duration;

      groupedCalls[functionName] = groupedCalls[functionName] || {
        totalDuration: 0,
        calls: 0
      };

      groupedCalls[functionName].totalDuration += duration;
      groupedCalls[functionName].calls++;
    });

    var callsArray = [];
    for (var key in groupedCalls) {
      var data = groupedCalls[key];
      data.averageDuration = data.totalDuration / data.calls;

      callsArray.push({ functionName: key, data: data });
    }

    callsArray.sort(function (a, b) {
      return b.data.totalDuration - a.data.totalDuration;
    });
    callsArray = callsArray.slice(0, 3);

    callsArray.forEach(function (item) {
      _globals.Log.log(tag, item.functionName + ': ' + item.data.calls + ' calls, ' + item.data.totalDuration.toFixed(2) + 'ms');
    });
  };

  return ContextPerformanceHook;
}();

exports.default = ContextPerformanceHook;

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
 * This class represents an image in pixel array form.
 */
var PixelArrayImage = function () {
  /**
   * @param  {Number} width
   * @param  {Number} height
   * @param  {UInt8Array} data
   * @constructor
   */
  function PixelArrayImage(width, height, data) {
    (0, _classCallCheck3.default)(this, PixelArrayImage);

    this.width = width;
    this.height = height;
    this.data = data;
  }

  /**
   * Creates a PixelArrayImage from the given `node-canvas` Image object by rendering the image
   * to a canvas and reading the pixel data
   * @param  {Canvas.Image} image
   * @return {PixelArrayImage}
   */


  PixelArrayImage.fromNodeCanvasImage = function fromNodeCanvasImage(image) {
    var canvas = new Canvas(image.width, image.height);
    var context = canvas.getContext('2d');

    context.drawImage(image, 0, 0);
    var imageData = context.getImageData(0, 0, image.width, image.height);
    return new PixelArrayImage(image.width, image.height, imageData.data);
  };

  return PixelArrayImage;
}();

exports.default = PixelArrayImage;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(82);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _log = __webpack_require__(25);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
exports.default = {
  /**
   * Checks if the currently bound framebuffer is complete
   * @param  {String} tag
   * @param  {WebGLRenderingContext} gl
   */
  checkFramebufferStatus: function checkFramebufferStatus(tag, gl) {
    var _possibleStatuses;

    var fboStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

    var possibleStatuses = (_possibleStatuses = {}, (0, _defineProperty3.default)(_possibleStatuses, gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT, 'Incomplete attachment'), (0, _defineProperty3.default)(_possibleStatuses, gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT, 'Missing attachment'), (0, _defineProperty3.default)(_possibleStatuses, gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS, 'Incomplete dimensions'), (0, _defineProperty3.default)(_possibleStatuses, gl.FRAMEBUFFER_UNSUPPORTED, 'Framebuffer unsupported'), _possibleStatuses);

    if (fboStatus !== gl.FRAMEBUFFER_COMPLETE) {
      _log2.default.warn(tag, 'Framebuffer incomplete: ' + possibleStatuses[fboStatus]);
    }
  }
}; /*
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

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(36);

var _createClass3 = _interopRequireDefault(_createClass2);

var _vector = __webpack_require__(19);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Represents a 3-dimensional matrix
 * @class
 * @memberof PhotoEditorSDK.Math
 */
var Matrix = function () {
  /**
   * Creates a Matrix
   */
  function Matrix() {
    (0, _classCallCheck3.default)(this, Matrix);

    this.reset();
  }

  /**
   * Multiplies this matrix with the given one
   * @param  {PhotoEditorSDK.Math.Matrix} matrix
   * @return {PhotoEditorSDK.Math.Matrix}
   */


  Matrix.prototype.multiply = function multiply(matrix) {
    var a = void 0,
        b = void 0,
        c = void 0,
        d = void 0,
        tx = void 0,
        ty = void 0;
    a = this.a * matrix.a + this.b * matrix.c;
    b = this.a * matrix.b + this.b * matrix.d;
    c = this.c * matrix.a + this.d * matrix.c;
    d = this.c * matrix.b + this.d * matrix.d;
    tx = this.tx * matrix.a + this.ty * matrix.c + matrix.tx;
    ty = this.tx * matrix.b + this.ty * matrix.d + matrix.ty;

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  };

  /**
   * Applies this matrix to the given vector
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Matrix.prototype.applyToVector = function applyToVector(position) {
    var _position = position,
        x = _position.x,
        y = _position.y;

    position = position.clone();
    position.x = this.a * x + this.c * y + this.tx;
    position.y = this.b * x + this.d * y + this.tx;
    return position;
  };

  /**
   * Applies the inverse of this matrix to the given vector
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Matrix.prototype.applyInverseToVector = function applyInverseToVector(position) {
    var determinant = 1 / (this.a * this.d + this.c * -this.b);

    var _position2 = position,
        x = _position2.x,
        y = _position2.y;

    position = position.clone();
    position.x = this.d * determinant * x + -this.c * determinant * y + (this.ty * this.c - this.tx * this.d) * determinant;
    position.y = this.a * determinant * y + -this.b * determinant * x + (-this.ty * this.a + this.tx * this.b) * determinant;

    return position;
  };

  /**
   * Turns the given rectangle into vector coordinates by applying this Matrix
   * @param  {PhotoEditorSDK.Math.Rectangle} rectangle
   * @param  {PhotoEditorSDK.Math.Vector2} anchor
   * @return {PhotoEditorSDK.Math.Vector2[]}
   */


  Matrix.prototype.rectangleToCoordinates = function rectangleToCoordinates(rectangle) {
    var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _vector2.default(0, 0);

    // Anchor offsets (w0 = right, w1 = left, h0 = up, h1 = down)
    var w0 = rectangle.width * (1 - anchor.x);
    var w1 = rectangle.width * -anchor.x;
    var h0 = rectangle.height * (1 - anchor.y);
    var h1 = rectangle.height * -anchor.y;

    var positions = [];

    // Bottom Left
    positions.push(new _vector2.default(this.a * w1 + this.c * h1 + this.tx, this.d * h1 + this.b * w1 + this.ty));

    // Bottom Right
    positions.push(new _vector2.default(this.a * w0 + this.c * h1 + this.tx, this.d * h1 + this.b * w0 + this.ty));

    // Top Right
    positions.push(new _vector2.default(this.a * w0 + this.c * h0 + this.tx, this.d * h0 + this.b * w0 + this.ty));

    // Top Left
    positions.push(new _vector2.default(this.a * w1 + this.c * h0 + this.tx, this.d * h0 + this.b * w1 + this.ty));

    return positions;
  };

  /**
   * Resets this matrix to the identity matrix
   */


  Matrix.prototype.reset = function reset() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
  };

  /**
   * Returns an array representation of this matrix
   * @return {Float32Array}
   */


  Matrix.prototype.toArray = function toArray() {
    var arr = [this.a, this.b, 0, this.c, this.d, 0, this.tx, this.ty, 1];
    /* istanbul ignore next */
    if (typeof Float32Array === 'undefined') {
      return arr;
    }
    return new Float32Array(arr);
  };

  /**
   * Returns a string representation of this matrix
   * @return {String}
   */


  Matrix.prototype.toString = function toString() {
    return 'Matrix({ a: ' + this.a + ', b: ' + this.b + ', c: ' + this.c + ', d: ' + this.d + ', tx: ' + this.tx + ', ty: ' + this.ty + ' })';
  };

  /**
   * The identity matrix
   * @static
   * @type {PhotoEditorSDK.Math.Matrix}
   */


  (0, _createClass3.default)(Matrix, null, [{
    key: 'IDENTITY',
    get: function get() {
      return new Matrix();
    }
  }]);
  return Matrix;
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

exports.default = Matrix;

/***/ },
/* 75 */
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
 * Represents a Rectangle
 * @class
 * @memberof PhotoEditorSDK.Math
 */
var Rectangle = function () {
  /**
   * Creartes a Rectangle
   * @param {Number} [x = 0]
   * @param {Number} [y = 0]
   * @param {Number} [width  = 0]
   * @param {Number} [height = 0]
   */
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    (0, _classCallCheck3.default)(this, Rectangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * Sets the given values
   * @param {Number} x
   * @param {Number} y
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Rectangle.prototype.set = function set(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };

  /**
   * Creates a clone of this rectangle
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Rectangle.prototype.clone = function clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };

  /**
   * Copies the values of the given rectangle
   * @param  {PhotoEditorSDK.Math.Rectangle} other
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Rectangle.prototype.copy = function copy(other) {
    this.x = other.x;
    this.y = other.y;
    this.width = other.width;
    this.height = other.height;
    return this;
  };

  /**
   * Checks whether this rectangle's values are the same as the given ones
   * @param  {(Number|PhotoEditorSDK.Math.Rectangle)} rect
   * @param  {Number} y
   * @param  {Number} width
   * @param  {Number} height
   * @return {Boolean}
   */


  Rectangle.prototype.equals = function equals(rect, y, width, height) {
    if (rect instanceof Rectangle) {
      return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
    } else {
      var x = rect;
      return x === this.x && y === this.y && width === this.width && height === this.height;
    }
  };

  /**
   * Rounds this rectangle's values
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Rectangle.prototype.round = function round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };

  /**
   * Returns a string representation of this rectangle
   * @return {String}
   */


  Rectangle.prototype.toString = function toString() {
    return "Rectangle({ x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + " })";
  };

  return Rectangle;
}();

exports.default = Rectangle;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
var now = typeof window !== 'undefined' && window.performance && window.performance.now ? window.performance.now.bind(window.performance) : __webpack_require__(93);

/**
 * A simple class that tracks the time between start and end and renders it as FPS
 * @class
 * @memberof PhotoEditorSDK
 * @ignore
 */
/* istanbul ignore next */
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

var PerformanceTest = function () {
  /**
   * Creates a PerformanceTest
   * @param  {String} tag
   * @param  {String} name
   */
  function PerformanceTest(tag, name) {
    (0, _classCallCheck3.default)(this, PerformanceTest);

    this._tag = tag;
    this._name = name;
    this._start = now();
  }

  /**
   * Stops the performance test and prints the result
   */


  PerformanceTest.prototype.stop = function stop() {
    var end = now();
    var ms = end - this._start;
    var fps = Math.round(1000 / ms);
    _globals.Log.info(this._tag, this._name + ' took ' + ms.toFixed(2) + 'ms (' + fps + ' FPS)');
  };

  return PerformanceTest;
}();

exports.default = PerformanceTest;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UniformType = _globals.Constants.UniformType,
    OptionType = _globals.Constants.OptionType; /*
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

var AdjustmentsFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(AdjustmentsFilter, _Engine$Filter);

  function AdjustmentsFilter() {
    (0, _classCallCheck3.default)(this, AdjustmentsFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(221);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  AdjustmentsFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var _options = this._options,
        brightness = _options.brightness,
        saturation = _options.saturation,
        contrast = _options.contrast,
        gamma = _options.gamma,
        exposure = _options.exposure,
        shadows = _options.shadows,
        highlights = _options.highlights;


    var applyBrightness = brightness !== 0;
    var applySaturation = saturation !== 1;
    var applyContrast = contrast !== 1;
    var applyExposure = exposure !== 0;
    var applyGamma = gamma !== 1;
    var applyShadowsAndHighlights = shadows !== 0 || highlights !== 1;

    var exposureFactor = Math.pow(2.0, exposure);

    brightness = brightness * 255;

    for (var i = 0; i < canvas.width * canvas.height; i++) {
      var index = i * 4;
      var r = imageData.data[index];
      var g = imageData.data[index + 1];
      var b = imageData.data[index + 2];

      // Normalize color
      if (applyExposure || applyShadowsAndHighlights) {
        r /= 255.0;
        g /= 255.0;
        b /= 255.0;
      }

      // Apply Exposure
      if (applyExposure) {
        r *= exposureFactor;
        g *= exposureFactor;
        b *= exposureFactor;
      }

      // Apply shadows and highlights
      if (applyShadowsAndHighlights) {
        var luminance = r * 0.2125 + g * 0.7154 + b * 0.0721;
        var shadow = Math.pow(luminance, 1.0 / (shadows + 1.0)) + -0.76 * Math.pow(luminance, 2.0 / (shadows + 1.0)) - luminance;
        shadow = Math.max(shadow, 0.0);
        shadow = Math.min(shadow, 1.0);
        var highlight = 1.0 - (Math.pow(1.0 - luminance, 1.0 / (2.0 - highlights)) + -0.8 * Math.pow(1.0 - luminance, 2.0 / (2.0 - highlights))) - luminance;
        highlight = Math.max(highlight, -1.0);
        highlight = Math.min(highlight, 0.0);
        var offset = luminance + shadow + highlight;
        r = offset * r / luminance;
        g = offset * g / luminance;
        b = offset * b / luminance;
      }

      // Denormalize color
      if (applyExposure || applyShadowsAndHighlights) {
        r *= 255.0;
        g *= 255.0;
        b *= 255.0;
      }

      // Brightness
      if (applyBrightness) {
        r = r + brightness;
        g = g + brightness;
        b = b + brightness;
      }

      // Saturation
      if (applySaturation) {
        var _luminance = r * 0.2125 + g * 0.7154 + b * 0.0721;
        r = _luminance * (1 - saturation) + r * saturation;
        g = _luminance * (1 - saturation) + g * saturation;
        b = _luminance * (1 - saturation) + b * saturation;
      }

      // Contrast
      if (applyContrast) {
        r = (r - 127) * contrast + 127;
        g = (g - 127) * contrast + 127;
        b = (b - 127) * contrast + 127;
      }

      // Gamma
      if (applyGamma) {
        r = Math.pow(r / 255, gamma) * 255;
        g = Math.pow(g / 255, gamma) * 255;
        b = Math.pow(b / 255, gamma) * 255;
      }

      imageData.data[index] = r;
      imageData.data[index + 1] = g;
      imageData.data[index + 2] = b;
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return AdjustmentsFilter;
}(_globals.Engine.Filter);

AdjustmentsFilter.prototype.availableOptions = {
  brightness: { type: OptionType.NUMBER, default: 0, uniformType: UniformType.FLOAT },
  saturation: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.FLOAT },
  contrast: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.FLOAT },
  gamma: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.FLOAT },
  exposure: { type: OptionType.NUMBER, default: 0, uniformType: UniformType.FLOAT },
  shadows: { type: OptionType.NUMBER, default: 0, uniformType: UniformType.FLOAT },
  highlights: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.FLOAT }
};

exports.default = AdjustmentsFilter;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Identity Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var IdentityFilter = function (_Filter) {
  (0, _inherits3.default)(IdentityFilter, _Filter);

  function IdentityFilter() {
    (0, _classCallCheck3.default)(this, IdentityFilter);
    return (0, _possibleConstructorReturn3.default)(this, _Filter.apply(this, arguments));
  }

  /**
   * Renders the filter
   * @param  {PhotoEditorSDK} sdk
   * @param  {Engine.RenderTexture}
   * @return {Promise}
   */
  IdentityFilter.prototype.render = function render(sdk, renderTexture) {
    return _globals.Promise.resolve();
  };

  return IdentityFilter;
}(_filter2.default);

IdentityFilter.isIdentity = true;
IdentityFilter.displayName = 'Original';

/**
 * This filter's identifier
 * @type {String}
 * @default
 */
IdentityFilter.identifier = 'identity';

exports.default = IdentityFilter;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _constants = __webpack_require__(9);

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

var TEXTURE_GL_UNIT = 3;

var LookupTableFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(LookupTableFilter, _Engine$Filter);

  function LookupTableFilter() {
    (0, _classCallCheck3.default)(this, LookupTableFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(236);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  LookupTableFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var table = this._options.lookupTableData;
    for (var i = 0; i < canvas.width * canvas.height; i++) {
      var index = i * 4;

      var r = imageData.data[index];
      imageData.data[index] = table[r * 4];
      var g = imageData.data[index + 1];
      imageData.data[index + 1] = table[1 + g * 4];
      var b = imageData.data[index + 2];
      imageData.data[index + 2] = table[2 + b * 4];
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return LookupTableFilter;
}(_engine2.default.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


LookupTableFilter.prototype.availableOptions = {
  lookupTable: { type: _constants.OptionType.NUMBER, default: TEXTURE_GL_UNIT, uniformType: _constants.UniformType.INT },
  lookupTableData: { type: _constants.OptionType.ARRAY, default: [] }
};

/**
 * Stores a 256 byte long lookup table in a 2d texture which will be
 * used to look up the corresponding value for each channel.
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var LookupTable = function (_Primitive) {
  (0, _inherits3.default)(LookupTable, _Primitive);

  function LookupTable() {
    (0, _classCallCheck3.default)(this, LookupTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new LookupTableFilter();
    _this2._textures = {};
    _this2._renderers = {};
    return _this2;
  }

  /**
   * Gets called before this primitive's filter is being applied
   * @param {PhotoEditorSDK} sdk
   */


  LookupTable.prototype.update = function update(sdk) {
    var renderer = sdk.getRenderer();
    /* istanbul ignore if */
    if (renderer.isOfType(_constants.RendererType.WEBGL)) {
      this._updateWebGLTexture(sdk);
    } else if (renderer.isOfType(_constants.RendererType.CANVAS)) {
      this._filter.setLookupTableData(this._options.data);
    }
  };

  /**
   * Updates the lookup table texture (WebGL only)
   * @param {PhotoEditorSDK} sdk
   * @private
   */
  /* istanbul ignore next */


  LookupTable.prototype._updateWebGLTexture = function _updateWebGLTexture(sdk) {
    if (typeof this._options.data === 'undefined') {
      throw new Error('LookupTable: No data specified.');
    }

    var data = new Uint8Array(this._options.data);

    var renderer = sdk.getRenderer();
    var id = renderer.id;

    this._renderers[id] = renderer;
    if (!this._textures[id]) {
      this._textures[id] = new _engine2.default.BaseTexture();
    }

    var texture = this._textures[id];
    var pixelArrayImage = new _engine2.default.PixelArrayImage(256, 1, data);
    texture.setSource(pixelArrayImage);
    texture.setGLUnit(TEXTURE_GL_UNIT);

    /* istanbul ignore next */
    if (renderer.isOfType(_constants.RendererType.WEBGL)) {
      renderer.updateTexture(texture);
    }
  };

  /**
   * Cleans up this primitive
   */


  LookupTable.prototype.dispose = function dispose() {
    _Primitive.prototype.dispose.call(this);
    for (var id in this._textures) {
      this._textures[id].dispose();
      delete this._textures[id];
    }
    delete this._options.data;
  };

  return LookupTable;
}(_primitive2.default);

exports.default = LookupTable;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _path = __webpack_require__(172);

var _path2 = _interopRequireDefault(_path);

var _sprite = __webpack_require__(34);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    RendererType = _globals.Constants.RendererType; /*
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
 * A Brush that can be drawn by SpriteOperation. Should only be created via {@link PhotoEditorSDK.Operations.SpriteOperation#createBrush}
 * @class
 * @memberof PhotoEditorSDK.Operations.SpriteOperation
 */
var Brush = function (_Sprite) {
  (0, _inherits3.default)(Brush, _Sprite);

  /**
   * Creates a new Sticker
   * @param  {PhotoEditorSDK.Operations.SpriteOperation} operation
   * @param  {Object} [options]
   */
  function Brush() {
    (0, _classCallCheck3.default)(this, Brush);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Sprite.call.apply(_Sprite, [this].concat(args)));

    _this._persistedPaths = [];
    _this._outputCanvasDirty = true;
    _this._outputCanvas = _globals.Utils.createCanvas();
    _this._outputContext = _this._outputCanvas.getContext('2d');
    _this._persistCanvas = _globals.Utils.createCanvas();
    _this._persistContext = _this._persistCanvas.getContext('2d');
    _this._nextCanvas = _globals.Utils.createCanvas();

    _this._texture = _globals.Engine.Texture.fromCanvas(_this._outputCanvas);
    _this._sprite.setTexture(_this._texture);

    _this._onPathUpdate = _this._onPathUpdate.bind(_this);
    return _this;
  }

  /**
   * Applies a flip in the given direction
   * @param  {String} direction
   */


  Brush.prototype.applyFlip = function applyFlip(direction) {
    this._options.paths.forEach(function (path) {
      path.forEachControlPoint(function (controlPoint) {
        var position = controlPoint.getPosition().clone();
        switch (direction) {
          case 'horizontal':
            position.x = 1 - position.x;
            break;
          case 'vertical':
            position.y = 1 - position.y;
            break;
        }
        controlPoint.setPosition(position);
      });
      path.setDirty(true);
    });

    this._reset();
  };

  /**
   * Applies a rotation with the given degrees
   * @param  {Number} degrees
   */


  Brush.prototype.applyRotation = function applyRotation(degrees) {
    this._options.paths.forEach(function (path) {
      path.forEachControlPoint(function (controlPoint) {
        var position = controlPoint.getPosition().clone();
        if (degrees === 90) {
          position.flip();
          position.x = 1 - position.x;
        } else if (degrees === -90) {
          position.flip();
          position.y = 1 - position.y;
        }
        controlPoint.setPosition(position);
      });

      path.setDirty(true);
    });

    this._reset();
  };

  /**
   * Applies the given crop change
   * @param  {PhotoEditorSDK.Operations.CropOperation} cropOperation
   * @param  {Object} options
   * @private
   */


  Brush.prototype.applyCrop = function applyCrop(cropOperation, options) {
    this._reset();

    var inputDimensions = this._operation.getInputDimensions();
    var rotationDelta = options.rotation - cropOperation.getRotation();

    var oldSize = cropOperation.getEnd().clone().subtract(cropOperation.getStart());
    var newSize = options.end.clone().subtract(options.start);
    var startDiff = cropOperation.getStart().clone().subtract(options.start);
    var scaleRatio = options.scale / cropOperation.getScale();

    this._options.paths.forEach(function (path) {
      path.forEachControlPoint(function (controlPoint) {
        var position = controlPoint.getPosition().clone().multiply(oldSize).add(startDiff).divide(newSize);

        var relativePosition = position.clone().multiply(newSize).add(options.start.clone()).subtract(0.5).multiply(inputDimensions);

        var cos = Math.cos(rotationDelta);
        var sin = Math.sin(rotationDelta);
        var newRelativePosition = new _globals.Vector2(relativePosition.x * cos - relativePosition.y * sin, relativePosition.x * sin + relativePosition.y * cos).divide(inputDimensions);

        newRelativePosition.multiply(scaleRatio);

        position.set(0.5, 0.5).add(newRelativePosition).add(new _globals.Vector2(0, 0).subtract(options.start)).divide(newSize);

        controlPoint.setPosition(position);
      });

      var previousThickness = path.getThickness() * oldSize.min();
      var newRelativeThickness = previousThickness / newSize.min();

      path.setThickness(newRelativeThickness * scaleRatio);
      path.setDirty(true);
    });

    // Update
    this._reset();
  };

  /**
   * Clears the canvas
   */


  Brush.prototype.clearCanvas = function clearCanvas() {
    if (!this._outputCanvas) {
      // `clearCanvas` is called when paths are set in Sprite's constructor. At this
      // point, `this._outputCanvas` does not exist yet.
      return;
    }

    this._outputCanvasDirty = true;

    var _outputCanvas = this._outputCanvas,
        width = _outputCanvas.width,
        height = _outputCanvas.height;

    this._outputContext.clearRect(0, 0, width, height);
  };

  /**
   * Clears the persist canvas
   */


  Brush.prototype.clearPersistCanvas = function clearPersistCanvas() {
    if (!this._persistCanvas) {
      // `clearCanvas` is called when paths are set in Sprite's constructor. At this
      // point, `this._persistCanvas` does not exist yet.
      return;
    }

    var _persistCanvas = this._persistCanvas,
        width = _persistCanvas.width,
        height = _persistCanvas.height;

    this._persistContext.clearRect(0, 0, width, height);
  };

  /**
   * Returns a serialized version of this configurable
   * @param {String[]} keys
   * @param {Boolean} toObject = false
   * @return {Object}
   */


  Brush.prototype.serializeOptions = function serializeOptions(keys) {
    var toObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var options = _Sprite.prototype.serializeOptions.call(this, keys, toObject);
    if (!keys) options.type = 'brush';
    return options;
  };

  /**
   * Creates and adds a new path
   * @param {Number} thickness
   * @param {Number} hardness
   * @param {Color} color
   * @return {PhotoEditorSDK.Operations.BrushOperation.Path}
   */


  Brush.prototype.createPath = function createPath(thickness, hardness, color) {
    var path = new _path2.default(this._operation, { thickness: thickness, hardness: hardness, color: color }, this._nextCanvas);
    path.on('update', this._onPathUpdate);
    this._options.paths.push(path);
    this.setDirty(true);
    return path;
  };

  /**
   * Gets called when a path has been updated
   * @private
   */


  Brush.prototype._onPathUpdate = function _onPathUpdate() {
    this._operation.setDirty(true);
    this.setDirty(true);
  };

  /**
   * Gets called when a path has been closed / persisted
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Brush.Path} path
   * @private
   */


  Brush.prototype._onPathPersist = function _onPathPersist(path) {
    path.renderToCanvas(this._persistCanvas);
    this._nextCanvas = path.getCanvas();

    var context = this._nextCanvas.getContext('2d');
    context.clearRect(0, 0, this._nextCanvas.width, this._nextCanvas.height);

    this._persistedPaths.push(path);
  };

  /**
   * Returns the Texture for the sprite that should be rendered
   * @return {PhotoEditorSDK.Engine.Texture}
   * @private
   * @abstract
   */


  Brush.prototype._getTexture = function _getTexture() {
    return this._texture;
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param {Boolean} dimensionsChanged = false
   */


  Brush.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer) {
    var dimensionsChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _Sprite.prototype.setDirtyForRenderer.call(this, dirty, renderer, dimensionsChanged);
    if (dirty && dimensionsChanged) {
      this._persistedPaths = [];
      this._options.paths.forEach(function (path) {
        path.setDirty(true);
      });
    }
  };

  /**
   * Sets this brush to dirty
   * @param {Boolean} dirty
   * @param {Boolean} dimensionsChanged = false
   */


  Brush.prototype.setDirty = function setDirty(dirty) {
    var dimensionsChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    for (var rendererId in this._dirtiness) {
      this.setDirtyForRenderer(dirty, this._renderers[rendererId], dimensionsChanged);
    }
  };

  /**
   * Renders all paths to the canvas
   * @param {PhotoEditorSDK.Math.Vector2} inputDimensions
   */


  Brush.prototype.render = function render(inputDimensions) {
    var _this2 = this;

    var renderer = this._operation.getSDK().getRenderer();

    if (!this.isDirtyForRenderer(renderer)) {
      return;
    }

    _globals.Utils.ensureCanvasDimensions(this._outputCanvas, inputDimensions);
    _globals.Utils.ensureCanvasDimensions(this._persistCanvas, inputDimensions);

    // Make sure all paths are rendered to their canvases
    this._options.paths.forEach(function (path) {
      path.render(inputDimensions);

      if (path.getClosed() && _this2._persistedPaths.indexOf(path) === -1) {
        _this2._onPathPersist(path);
      }
    });

    // Render persisted paths to output in one go
    this.clearCanvas();
    this._outputContext.drawImage(this._persistCanvas, 0, 0);

    // Render unpersisted paths to output
    this._options.paths.forEach(function (path) {
      if (!path.getClosed()) {
        path.renderToCanvas(_this2._outputCanvas);
      }
    });

    this.setDirtyForRenderer(false, renderer);
  };

  /**
   * Updates this sprite
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Promise}
   */


  Brush.prototype.update = function update(sdk, inputDimensions) {
    if (inputDimensions) {
      _globals.Utils.ensureCanvasDimensions(this._outputCanvas, inputDimensions);
      _globals.Utils.ensureCanvasDimensions(this._persistCanvas, inputDimensions);

      // Update texture dimensions
      this._texture.getBaseTexture().update();
    }

    // Render paths and control points
    this.render(inputDimensions);

    // Upload canvas to texture
    var renderer = sdk.getRenderer();
    /* istanbul ignore next */
    if (renderer.isOfType(RendererType.WEBGL)) {
      renderer.updateTexture(this._texture.getBaseTexture());
    }

    return _Sprite.prototype.update.call(this, sdk, inputDimensions);
  };

  /**
   * Resets this brush so that it can be re-rendered
   * @private
   */


  Brush.prototype._reset = function _reset() {
    this._persistedPaths = [];
    if (this._operation) {
      this._operation.setDirty(true);
    }
    this.setDirty(true);
    this.clearCanvas();
    this.clearPersistCanvas();
  };

  // -------------------------------------------------------------------------- GETTERS / SETTERS

  /**
   * Returns the canvas we're rendering brushes to
   * @return {CanvasElement}
   */


  Brush.prototype.getCanvas = function getCanvas() {
    return this._outputCanvas;
  };

  // -------------------------------------------------------------------------- DISPOSAL

  /**
   * Disposes this Brush
   */


  Brush.prototype.dispose = function dispose() {
    _Sprite.prototype.dispose.call(this);
    this._texture.getBaseTexture().dispose();
  };

  return Brush;
}(_sprite2.default);

Brush.prototype.availableOptions = {
  id: { type: OptionType.STRING, default: function _default() {
      return _globals.Utils.getUUID();
    } },
  position: { type: OptionType.VECTOR2, default: new _globals.Vector2(0, 0) },
  scale: { type: OptionType.VECTOR2, default: new _globals.Vector2(1.0, 1.0) },
  anchor: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.0, 0.0) },
  pivot: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.0, 0.0) },
  rotation: { type: OptionType.NUMBER, default: 0 },
  paths: {
    type: OptionType.ARRAY,
    default: [],
    setter: function setter(paths) {
      paths.forEach(function (path) {
        path.setDirty(true);
      });

      this._reset();
      return paths;
    }
  }
};

exports.default = Brush;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(81);

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
/* 83 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(188);
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29)
  , document = __webpack_require__(13).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(37)(function(){
  return Object.defineProperty(__webpack_require__(85)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(51)
  , $export        = __webpack_require__(28)
  , redefine       = __webpack_require__(92)
  , hide           = __webpack_require__(21)
  , has            = __webpack_require__(16)
  , Iterators      = __webpack_require__(50)
  , $iterCreate    = __webpack_require__(195)
  , setToStringTag = __webpack_require__(54)
  , getPrototypeOf = __webpack_require__(201)
  , ITERATOR       = __webpack_require__(22)('iterator')
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(53)
  , createDesc     = __webpack_require__(39)
  , toIObject      = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(58)
  , has            = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(86)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(91)
  , hiddenKeys = __webpack_require__(49).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 90 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(16)
  , toIObject    = __webpack_require__(18)
  , arrayIndexOf = __webpack_require__(190)(false)
  , IE_PROTO     = __webpack_require__(55)('IE_PROTO');

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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ },
/* 93 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ },
/* 94 */
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identityFilter = __webpack_require__(78);

Object.defineProperty(exports, 'IdentityFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_identityFilter).default;
  }
});

var _a15Filter = __webpack_require__(118);

Object.defineProperty(exports, 'A15Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_a15Filter).default;
  }
});

var _breezeFilter = __webpack_require__(119);

Object.defineProperty(exports, 'BreezeFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_breezeFilter).default;
  }
});

var _bwFilter = __webpack_require__(120);

Object.defineProperty(exports, 'BWFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bwFilter).default;
  }
});

var _bwhardFilter = __webpack_require__(121);

Object.defineProperty(exports, 'BWHardFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bwhardFilter).default;
  }
});

var _celsiusFilter = __webpack_require__(122);

Object.defineProperty(exports, 'CelsiusFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_celsiusFilter).default;
  }
});

var _chestFilter = __webpack_require__(123);

Object.defineProperty(exports, 'ChestFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chestFilter).default;
  }
});

var _fixieFilter = __webpack_require__(124);

Object.defineProperty(exports, 'FixieFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fixieFilter).default;
  }
});

var _foodFilter = __webpack_require__(125);

Object.defineProperty(exports, 'FoodFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_foodFilter).default;
  }
});

var _fridgeFilter = __webpack_require__(126);

Object.defineProperty(exports, 'FridgeFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fridgeFilter).default;
  }
});

var _frontFilter = __webpack_require__(127);

Object.defineProperty(exports, 'FrontFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_frontFilter).default;
  }
});

var _glamFilter = __webpack_require__(128);

Object.defineProperty(exports, 'GlamFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_glamFilter).default;
  }
});

var _gobblinFilter = __webpack_require__(129);

Object.defineProperty(exports, 'GobblinFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gobblinFilter).default;
  }
});

var _k1Filter = __webpack_require__(130);

Object.defineProperty(exports, 'K1Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_k1Filter).default;
  }
});

var _k2Filter = __webpack_require__(131);

Object.defineProperty(exports, 'K2Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_k2Filter).default;
  }
});

var _k6Filter = __webpack_require__(132);

Object.defineProperty(exports, 'K6Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_k6Filter).default;
  }
});

var _kdynamicFilter = __webpack_require__(133);

Object.defineProperty(exports, 'KDynamicFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_kdynamicFilter).default;
  }
});

var _leninFilter = __webpack_require__(134);

Object.defineProperty(exports, 'LeninFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_leninFilter).default;
  }
});

var _lomoFilter = __webpack_require__(135);

Object.defineProperty(exports, 'LomoFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lomoFilter).default;
  }
});

var _mellowFilter = __webpack_require__(137);

Object.defineProperty(exports, 'MellowFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mellowFilter).default;
  }
});

var _metalFilter = __webpack_require__(138);

Object.defineProperty(exports, 'MetalFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_metalFilter).default;
  }
});

var _morningFilter = __webpack_require__(139);

Object.defineProperty(exports, 'MorningFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_morningFilter).default;
  }
});

var _orchidFilter = __webpack_require__(140);

Object.defineProperty(exports, 'OrchidFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_orchidFilter).default;
  }
});

var _polaFilter = __webpack_require__(141);

Object.defineProperty(exports, 'PolaFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_polaFilter).default;
  }
});

var _pola669Filter = __webpack_require__(142);

Object.defineProperty(exports, 'Pola669Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pola669Filter).default;
  }
});

var _quoziFilter = __webpack_require__(157);

Object.defineProperty(exports, 'QuoziFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quoziFilter).default;
  }
});

var _semiredFilter = __webpack_require__(158);

Object.defineProperty(exports, 'SemiredFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_semiredFilter).default;
  }
});

var _sunnyFilter = __webpack_require__(159);

Object.defineProperty(exports, 'SunnyFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sunnyFilter).default;
  }
});

var _texasFilter = __webpack_require__(160);

Object.defineProperty(exports, 'TexasFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_texasFilter).default;
  }
});

var _x400Filter = __webpack_require__(161);

Object.defineProperty(exports, 'X400Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_x400Filter).default;
  }
});

var _lutFilter = __webpack_require__(136);

Object.defineProperty(exports, 'LUTFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lutFilter).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operations = __webpack_require__(65);

var Operations = _interopRequireWildcard(_operations);

var _operationsStack = __webpack_require__(64);

var _operationsStack2 = _interopRequireDefault(_operationsStack);

var _versionChecker = __webpack_require__(111);

var _versionChecker2 = _interopRequireDefault(_versionChecker);

var _exif = __webpack_require__(42);

var _exif2 = _interopRequireDefault(_exif);

var _imageExporter = __webpack_require__(108);

var _imageExporter2 = _interopRequireDefault(_imageExporter);

var _performanceTest = __webpack_require__(76);

var _performanceTest2 = _interopRequireDefault(_performanceTest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderType = _globals.Constants.RenderType,
    ImageFormat = _globals.Constants.ImageFormat,
    Events = _globals.Constants.Events,
    RendererType = _globals.Constants.RendererType;

/**
 * The main SDK class which handles rendering and manages
 * operations.
 * @class
 * @alias PhotoEditorSDK
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

var PhotoEditorSDK = function (_EventEmitter) {
  (0, _inherits3.default)(PhotoEditorSDK, _EventEmitter);

  /**
   * Creates a PhotoEditorSDK instance
   * @param  {String} [preferredRenderer = webgl] - `webgl` or `canvas`
   * @param  {Object} [options = {}]
   * @param  {Image} [options.image] - The image that should be rendered
   * @param  {String} [options.renderMode = dynamic] - `dynamic` or `export`
   * @param  {Boolean} [options.versionCheck = true] - Should a version check be performed?
   * @param  {Boolean} [options.displayWelcomeMessage = true] - Should a welcome message be printed
   *   in the console?
   * @param  {Boolean} [options.transparent = false] - Should the canvas background be transparent?
   * @param  {HTMLCanvasElement} [options.canvas] - The canvas element the SDK should render to
   * @param  {Number} [options.zoom = 1] - The zoom level. Only available in `dynamic` mode
   * @param  {Number} [options.spriteScale = 1] - The output sprite's scale. Only available in `dynamic` mode
   * @param  {String} [options.logLevel = warn] - `trace`, `info`, `warn`, `error` or `log`
   * @param  {Number} [options.pixelRatio = 1] - If none is given, PhotoEditorSDK automatically
   *   detects the current device's pixel ratio
   * @param  {Boolean} [options.smoothDownscaling = false] - Toggles smooth downscaling
   * @param  {Boolean} [options.smoothUpscaling = false] - Toggles smooth upscaling
   */
  function PhotoEditorSDK(preferredRenderer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, PhotoEditorSDK);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this._onOperationUpdate = _this._onOperationUpdate.bind(_this);
    _this._onContextRestored = _this._onContextRestored.bind(_this);

    var _require = __webpack_require__(66),
        version = _require.version;

    _this.version = version;

    _this._preferredRenderer = preferredRenderer;
    _this._options = _globals.Utils.defaults(options, {
      extensions: {},
      renderMode: 'dynamic',
      versionCheck: true,
      displayWelcomeMessage: true,
      image: null,
      canvas: null,
      transparent: false,
      textureQuality: 1,
      zoom: 1,
      spriteScale: 1,
      rotation: 0,
      smoothDownscaling: false,
      smoothUpscaling: false,
      logLevel: 'warn',
      pixelRatio: typeof window !== 'undefined' && window.devicePixelRatio || 1
    });

    if (_this._options.smoothUpscaling) {
      _globals.Engine.BaseTexture.DefaultMagFilter = _globals.Engine.BaseTexture.LinearFilter;
    }

    _this._options.extensions = _globals.Utils.defaults(_this._options.extensions, {
      operations: [],
      controls: [],
      languages: []
    });

    _globals.Log.setLevel(_this._options.logLevel);

    _this._defaultRenderMode = _this._options.renderMode;
    _this._renderMode = _this._options.renderMode;

    _this._textureQuality = _this._options.textureQuality;
    _this._offset = new _globals.Vector2();
    _this._zoom = _this._options.zoom;
    _this._spriteScale = _this._options.spriteScale;
    _this._rotation = _this._options.rotation;
    _this._operations = {};
    _this._operationsStack = null;
    _this.setOperationsStack(new _operationsStack2.default());

    // Engine stuff
    _this._container = new _globals.Engine.Container();
    _this._sprite = new _globals.Engine.Sprite();
    _this._container.addChild(_this._sprite);

    _this.setSmoothDownscaling(_this._options.smoothDownscaling);

    _this._inputBaseTexture = null;
    _this._inputTexture = null;
    _this._currentInputTexture = null;
    _this._currentTexture = null;

    _this._resizedTexture = null;
    _this._resizedContainer = new _globals.Engine.Container();
    _this._resizedSprite = new _globals.Engine.Sprite();
    _this._resizedContainer.addChild(_this._resizedSprite);

    _this._checkForUpdates();
    _this._registerOperations();
    _this._initRenderer();

    var renderer = _this._renderer.constructor.type;
    if (_this._options.displayWelcomeMessage) {
      _globals.Log.log('Yo!', 'Version: ' + _this.version + ' (' + renderer + ') - https://www.photoeditorsdk.com');
    }

    // Async image handling
    if (_this._options.image) {
      _this.setImage(_this._options.image);
    }
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation is updated. Delegates the event.
   * @private
   */


  PhotoEditorSDK.prototype._onOperationUpdate = function _onOperationUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.emit.apply(this, [Events.OPERATION_UPDATED].concat(args));
  };

  /**
   * Gets called when the WebGL context has been restored. Re-triggers a render.
   * @private
   */
  /* istanbul ignore next */


  PhotoEditorSDK.prototype._onContextRestored = function _onContextRestored() {
    _globals.Log.warn(this.constructor.name, 'Trying to re-render after WebGL context has been restored.');
    this.setAllOperationsToDirty();
    this._operationsStack.forEach(function (operation) {
      operation.disposeRenderTextures();
    });
    this.render();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Exports the image with the given options. Result of the Promise is the exported image or data url.
   * @param  {PhotoEditorSDK.RenderType} [renderType=PhotoEditorSDK.RenderType.DATAURL] - The output type
   * @param  {PhotoEditorSDK.ImageFormat} [imageFormat=PhotoEditorSDK.ImageFormat.PNG] - The output image format
   * @param  {Number} [quality=0.8] - The image quality, between 0 and 1
   * @return {Promise}
   */


  PhotoEditorSDK.prototype.export = function _export() {
    var renderType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RenderType.DATAURL;
    var imageFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ImageFormat.PNG;
    var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;

    var imageExporter = new _imageExporter2.default(this, {
      renderType: renderType, imageFormat: imageFormat, quality: quality
    });
    return imageExporter.export();
  };

  /**
   * Renders the current image to the canvas
   * @return {Promise}
   */


  PhotoEditorSDK.prototype.render = function render() {
    var _this2 = this;

    if (!this._image) {
      throw new Error('You need to set an image before calling PhotoEditorSDK#render.');
    }

    var context = this._renderer.getContext();
    if (context.startFrame) {
      context.startFrame();
    }

    var perfTest = void 0;
    if (_globals.Log.canLog('info')) {
      perfTest = new _performanceTest2.default('⚡⚡⚡', 'Frame rendering');
    }
    _globals.Log.info('⚡⚡⚡', 'Rendering starts');

    var stack = this._operationsStack;
    stack.updateDirtinessForRenderer(this._renderer);

    return this._prepareTexture().then(function (texture) {
      if (_this2._renderMode === 'export') {
        texture = _this2._inputTexture;
      }

      _this2._currentTexture = texture;
      _this2._sprite.setTexture(texture);
      _this2._container.updateTransform();
    }).then(function () {
      return stack.validateSettings();
    }).then(function () {
      return stack.render(_this2, _this2._currentTexture);
    }).then(function (outputTexture) {
      // Input texture has been passed through all operations which return
      // a new RenderTexture. Use this texture for the Sprite and render it
      // to the output canvas.
      _this2._currentTexture = outputTexture;
      _this2._sprite.setTexture(_this2._currentTexture);

      switch (_this2._renderMode) {
        case 'dynamic':
          // Always center image, set scale to zoom level
          var center = _this2._renderer.getDimensions().clone().divide(2).add(_this2._offset);

          _this2._container.setScale(_this2._zoom / _this2.getTextureScale(), _this2._zoom / _this2.getTextureScale());
          _this2._container.setPosition(center);
          _this2._sprite.setAnchor(0.5, 0.5);
          _this2._sprite.setScale(_this2._spriteScale, _this2._spriteScale);
          _this2._sprite.setRotation(_this2._rotation);
          break;
        case 'export':
          // Move sprite to upper left hand corner, render at full scale
          _this2._container.setScale(1, 1);
          _this2._container.setPosition(0, 0);
          _this2._sprite.setAnchor(0, 0);
          _this2._sprite.setPosition(0, 0);
          _this2._sprite.setScale(_this2._spriteScale, _this2._spriteScale);
          _this2._sprite.setRotation(0);
          break;
      }

      // This renders to the output
      _this2._renderer.render(_this2._container);

      return outputTexture;
    }).then(function (texture) {
      if (perfTest) {
        perfTest.stop();
      }
      if (context.endFrame) {
        context.endFrame();
      }
      return texture;
    });
  };

  PhotoEditorSDK.prototype.getTextureScale = function getTextureScale() {
    return Math.min(1, this._textureQuality * this._options.pixelRatio);
  };

  /**
   * Prepares the input texture for the current zoom level
   * @private
   */


  PhotoEditorSDK.prototype._prepareTexture = function _prepareTexture() {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var textureScale = _this3.getTextureScale();
      if (_this3._textureQuality === 1) {
        return resolve(_this3._inputTexture);
      }

      var dimensions = _this3.getInputDimensions().multiply(textureScale).floor();

      var needsRerender = void 0;
      if (!_this3._resizedTexture) {
        _this3._resizedTexture = new _globals.Engine.RenderTexture(_this3._renderer, dimensions.x, dimensions.y);
        needsRerender = true;
      } else if (!_this3._resizedTexture.getDimensions().equals(dimensions)) {
        _this3._resizedTexture.resizeTo(dimensions);
        needsRerender = true;
      }

      if (needsRerender) {
        _this3._resizedSprite.setScale(textureScale, textureScale);
        _this3._resizedSprite.setTexture(_this3._inputTexture);
        _this3._resizedTexture.render(_this3._resizedContainer);
      }

      resolve(_this3._resizedTexture);
    });
  };

  // -------------------------------------------------------------------------- OPERATIONS

  /**
   * Registers all default operations
   * @private
   */


  PhotoEditorSDK.prototype._registerOperations = function _registerOperations() {
    this._operations = {};

    for (var operationName in Operations) {
      var operation = Operations[operationName];
      this._operations[operation.identifier] = operation;
    }

    this._operations = _globals.Utils.extend(this._operations, this._options.extensions.operations);
  };

  /**
   * Sets all operations in the stack to dirty
   * @param {Boolean} dimensionsChanged = false
   */


  PhotoEditorSDK.prototype.setAllOperationsToDirty = function setAllOperationsToDirty() {
    var dimensionsChanged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this._operationsStack.setAllToDirty(dimensionsChanged);
  };

  /**
   * Creates an operation with the given identifier
   * @param {String} identifier
   * @param {Object} [options = {}]
   * @param {Boolean} [addToStack = true]
   * @returns {PhotoEditorSDK.Operation}
   */


  PhotoEditorSDK.prototype.createOperation = function createOperation(identifier) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var addToStack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var Operation = this._operations[identifier];
    if (!Operation) {
      throw new Error('No operation with identifier `' + identifier + '` found.');
    }

    var operation = new Operation(this, options);
    if (addToStack) {
      this.addOperation(operation);
    }
    return operation;
  };

  /**
   * Adds the given operation to the operations stack
   * @param {PhotoEditorSDK.Operation} operation
   */


  PhotoEditorSDK.prototype.addOperation = function addOperation(operation) {
    this._operationsStack.push(operation);
  };

  /**
   * Removes the given operation from the operations stack
   * @param  {PhotoEditorSDK.Operation} operation
   */


  PhotoEditorSDK.prototype.removeOperation = function removeOperation(operation) {
    this._operationsStack.remove(operation);
  };

  // -------------------------------------------------------------------------- DIMENSIONS

  /**
   * Returns the initial image dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  PhotoEditorSDK.prototype.getInputDimensions = function getInputDimensions() {
    var frame = this._inputTexture.getFrame();
    return new _globals.Vector2(frame.width, frame.height);
  };

  /**
   * Returns the final dimensions that the input image would have
   * after all existing operations have been applied
   * @param {Boolean} incorporateSpriteScale = false
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  PhotoEditorSDK.prototype.getFinalDimensions = function getFinalDimensions() {
    var incorporateSpriteScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var dimensions = this.getInputDimensions();
    var operationsStack = this._operationsStack;

    operationsStack.forEach(function (operation) {
      if (!operation.getEnabled()) return;
      dimensions = operation.getNewDimensions(dimensions);
    });

    if (incorporateSpriteScale) {
      dimensions.multiply(this._spriteScale);
    }

    return dimensions.floor();
  };

  /**
   * Returns the current sprite dimensions
   * @param {Boolean} incorporateSpriteScale = false
   * @return {Vector2}
   */


  PhotoEditorSDK.prototype.getOutputDimensions = function getOutputDimensions() {
    var incorporateSpriteScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return this.getFinalDimensions(incorporateSpriteScale).clone().multiply(this._zoom).floor();
  };

  /**
   * Returns the dimensions of the output texture
   * @param  {Boolean} incorporateSpriteScale = false
   * @return {Vector2}
   */


  PhotoEditorSDK.prototype.getOutputTextureDimensions = function getOutputTextureDimensions() {
    var incorporateSpriteScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var textureScale = this.getTextureScale();
    var dimensions = this.getInputDimensions().multiply(textureScale).floor();
    this._operationsStack.forEach(function (op) {
      dimensions = op.getNewDimensions(dimensions);
    });
    return dimensions;
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Checks for version updates
   * @private
   */


  PhotoEditorSDK.prototype._checkForUpdates = function _checkForUpdates() {
    if (this._options.versionCheck) {
      this._versionChecker = new _versionChecker2.default(this.version);
    }
  };

  /**
   * Initializes the renderer
   * @private
   */


  PhotoEditorSDK.prototype._initRenderer = function _initRenderer() {
    var rendererOptions = {
      canvas: this._options.canvas,
      pixelRatio: this._options.pixelRatio,
      debug: this._options.debug,
      transparent: this._options.transparent
    };

    var width = void 0,
        height = void 0;
    if (this._renderMode === 'dynamic' && this._options.canvas) {
      var canvas = this._options.canvas;

      width = canvas.width;
      height = canvas.height;
    } else if (this._image) {
      var dimensions = this.getFinalDimensions();
      width = dimensions.x;
      height = dimensions.y;
    }

    switch (this._preferredRenderer) {
      /* istanbul ignore next */
      case RendererType.WEBGL:
        this._renderer = _globals.Engine.autoDetectRenderer(width, height, rendererOptions);
        this._renderer.on('context-restored', this._onContextRestored);
        break;
      case RendererType.CANVAS:
        this._renderer = new _globals.Engine.CanvasRenderer(width, height, rendererOptions);
        this._renderer.on('context-restored', this._onContextRestored);
        break;
      default:
        _globals.Log.warn('PhotoEditorSDK', 'PhotoEditorSDK Error: Renderer `' + this._preferredRenderer + '` not supported. Falling back to automatically detected renderer.');
        this._renderer = _globals.Engine.autoDetectRenderer(width, height, rendererOptions);
    }
  };

  /**
   * Resizes the renderer to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  PhotoEditorSDK.prototype.resizeTo = function resizeTo(dimensions) {
    this._renderer.resizeTo(dimensions, true);
  };

  /**
   * Resets all custom and selected operations
   */


  PhotoEditorSDK.prototype.reset = function reset() {
    this._operationsStack.clear();
  };

  // -------------------------------------------------------------------------- EXIF

  /**
   * Parses the exif data and fixes the orientation if necessary
   * @param {Image} image
   * @private
   * @TODO Move this somewhere else
   */


  PhotoEditorSDK.prototype.parseExif = function parseExif(image) {
    if (!image) {
      return;
    }
    var src = image.src;

    /* istanbul ignore else */

    if (_exif2.default.isJPEG(src)) {
      var exif = null;
      try {
        exif = _exif2.default.fromBase64String(src);
      } catch (e) {}
      if (!exif) {
        return;
      }

      return exif;
    }
  };

  /**
   * Reads the EXIF orientation tag and fixes it with the OrientationOperation
   * @private
   */


  PhotoEditorSDK.prototype._handleExifOrientation = function _handleExifOrientation() {
    var exifTags = this._exif.getTags();

    if (exifTags && exifTags.Orientation) {
      var rotationNeedsChange = exifTags.Orientation !== 1 && exifTags.Orientation !== 2;
      var flipNeedsChange = [2, 4, 5, 7].indexOf(exifTags.Orientation) !== -1;

      if (rotationNeedsChange || flipNeedsChange) {
        if (!this._exifOperation) {
          this._exifOperation = this.createOperation('exif-orientation');
        }
        this._exifOperation.setTags(exifTags);

        // We fixed the orientation, new EXIF orientation is 1
        this._exif.setOrientation(1);
      }
    }
  };

  // -------------------------------------------------------------------------- GETTERS / SETTERS

  /**
   * Checks if an image is provided
   * @return {Boolean} [description]
   */


  PhotoEditorSDK.prototype.hasImage = function hasImage() {
    return this._image !== null && typeof this._image !== 'undefined';
  };

  /**
   * Returns the image
   * @return {Image}
   */


  PhotoEditorSDK.prototype.getImage = function getImage() {
    return this._image;
  };

  /**
   * Sets the image and parses the exif data
   * @param {Image} image
   * @param {PhotoEditorSDK.Exif} [exif = null]
   * @param {PhotoEditorSDK.Math.Vector2} [dimensions]
   */


  PhotoEditorSDK.prototype.setImage = function setImage(image) {
    var exif = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var dimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    // Reset exif orientation compensation
    if (this._exifOperation) {
      this.removeOperation(this._exifOperation);
      this._exifOperation = null;
    }

    this._options.image = image;
    this._image = image;

    this._exif = exif || this.parseExif(image);
    if (this._exif) {
      this._handleExifOrientation();
    }

    var baseTexture = new _globals.Engine.BaseTexture(this._image);
    var frame = new _globals.Rectangle(0, 0, this._image.width, this._image.height);
    if (dimensions) {
      frame.width = dimensions.x;
      frame.height = dimensions.y;
    }

    if (this._resizedTexture) {
      this._resizedTexture.dispose();
    }
    this._resizedTexture = null;

    if (this._inputTexture) {
      this._inputTexture.getBaseTexture().dispose();
    }
    this._inputTexture = new _globals.Engine.Texture(baseTexture, frame);
    this._currentTexture = this._inputTexture;
    this._sprite.setTexture(this._inputTexture);

    this.setAllOperationsToDirty(true);
  };

  /**
   * Returns the canvas
   * @return {HTMLCanvasElement}
   */


  PhotoEditorSDK.prototype.getCanvas = function getCanvas() {
    return this._renderer.getCanvas();
  };

  /**
   * Sets the canvas
   * @param {HTMLCanvasElement} canvas
   */


  PhotoEditorSDK.prototype.setCanvas = function setCanvas(canvas) {
    this._renderer.setCanvas(canvas);
  };

  /**
   * Returns the sprite
   * @return {PhotoEditorSDK.Engine.Sprite}
   */


  PhotoEditorSDK.prototype.getSprite = function getSprite() {
    return this._sprite;
  };

  /**
   * Returns the container
   * @return {PhotoEditorSDK.Engine.Container}
   */


  PhotoEditorSDK.prototype.getContainer = function getContainer() {
    return this._container;
  };

  /**
   * Returns the operation stack
   * @return {PhotoEditorSDK.OperationsStack}
   */


  PhotoEditorSDK.prototype.getOperationsStack = function getOperationsStack() {
    return this._operationsStack;
  };

  /**
   * Sets the operations stack
   * @param {PhotoEditorSDK.OperationsStack} operationsStack
   */


  PhotoEditorSDK.prototype.setOperationsStack = function setOperationsStack(operationsStack) {
    if (this._operationsStack) {
      this._operationsStack.off(Events.OPERATION_UPDATED, this._onOperationUpdate);
    }

    this._operationsStack = operationsStack;
    this._operationsStack.on(Events.OPERATION_UPDATED, this._onOperationUpdate);
  };

  /**
   * Returns the available operations
   * @return {Operation[]}
   */


  PhotoEditorSDK.prototype.getOperations = function getOperations() {
    return this._operations;
  };

  /**
   * Returns the renderer
   * @return {PhotoEditorSDK.Engine.BaseRenderer}
   */


  PhotoEditorSDK.prototype.getRenderer = function getRenderer() {
    return this._renderer;
  };

  /**
   * Returns the rendering offset
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  PhotoEditorSDK.prototype.getOffset = function getOffset() {
    return this._offset;
  };

  /**
   * Sets the rendering offset
   * @param {PhotoEditorSDK.Math.Vector2|Number} offset
   * @param {Number} y
   */


  PhotoEditorSDK.prototype.setOffset = function setOffset(offset, y) {
    if (offset instanceof _globals.Vector2) {
      this._offset.copy(offset);
    } else {
      this._offset.set(offset, y);
    }
  };

  /**
   * Returns the current render mode
   * @return {String}
   */


  PhotoEditorSDK.prototype.getRenderMode = function getRenderMode() {
    return this._renderMode;
  };

  /**
   * Sets the render mode
   * @param {String} renderMode
   */


  PhotoEditorSDK.prototype.setRenderMode = function setRenderMode(renderMode) {
    this._renderMode = renderMode;
  };

  /**
   * Returns the zoom level
   * @return {Number}
   */


  PhotoEditorSDK.prototype.getZoom = function getZoom() {
    return this._zoom;
  };

  /**
   * Sets the zoom level
   * @param {Number} zoom
   */


  PhotoEditorSDK.prototype.setZoom = function setZoom(zoom) {
    this._zoom = zoom;
    this._container.setScale(this._zoom, this._zoom);
    this._container.updateTransform();
  };

  /**
   * Returns the texture quality
   * @return {Number}
   */


  PhotoEditorSDK.prototype.getTextureQuality = function getTextureQuality() {
    if (this._renderMode === 'export') {
      return 1;
    }

    return this._textureQuality;
  };

  /**
   * Sets the texture quality
   * @param {Number} textureQuality
   */


  PhotoEditorSDK.prototype.setTextureQuality = function setTextureQuality(textureQuality) {
    if (textureQuality !== this._textureQuality) {
      this.setAllOperationsToDirty(true);
    }
    this._textureQuality = Math.min(1, textureQuality);

    // Clean up resized texture, not needed right now
    if (this._textureQuality === 1 && this._resizedTexture) {
      this._resizedTexture.dispose();
      this._resizedTexture = null;
    }
  };

  /**
   * Returns the output sprite's scale
   * @return {Number}
   */


  PhotoEditorSDK.prototype.getSpriteScale = function getSpriteScale() {
    return this._spriteScale;
  };

  /**
   * Sets the sprite scale to the given value
   * @param {Number} spriteScale
   */


  PhotoEditorSDK.prototype.setSpriteScale = function setSpriteScale(spriteScale) {
    this._spriteScale = spriteScale;
    this._sprite.setScale(spriteScale, spriteScale);
    this._sprite.updateTransform();
  };

  /**
   * Returns the pixel ratio
   * @return {Number}
   */


  PhotoEditorSDK.prototype.getPixelRatio = function getPixelRatio() {
    return this._options.pixelRatio;
  };

  /**
   * Returns the Exif instance
   * @return {PhotoEditorSDK.Exif} [description]
   */


  PhotoEditorSDK.prototype.getExif = function getExif() {
    return this._exif;
  };

  /**
   * Returns the options
   * @return {Object}
   */


  PhotoEditorSDK.prototype.getOptions = function getOptions() {
    return this._options;
  };

  /**
   * Returns the input texture
   * @return {PhotoEditorSDK.Engine.Texture}
   */


  PhotoEditorSDK.prototype.getInputTexture = function getInputTexture() {
    return this._inputTexture;
  };

  /**
   * Sets the smooth downscaling flag for the output sprite
   * @param {Boolean} smoothDownscaling
   */


  PhotoEditorSDK.prototype.setSmoothDownscaling = function setSmoothDownscaling(smoothDownscaling) {
    this._options.smoothDownscaling = smoothDownscaling;
    this._sprite.setSmoothDownscaling(smoothDownscaling);
  };

  /**
   * Sets the rotation to the given value
   * @param {Number} rotation
   */


  PhotoEditorSDK.prototype.setRotation = function setRotation(rotation) {
    this._rotation = rotation;
  };

  /**
   * Returns the current rotation
   */


  PhotoEditorSDK.prototype.getRotation = function getRotation() {
    return this._rotation;
  };

  // -------------------------------------------------------------------------- DISPOSAL

  /**
   * Disposes the SDK
   */


  PhotoEditorSDK.prototype.dispose = function dispose() {
    this._operationsStack.dispose();
    this._renderer.dispose();
    if (this._exif) {
      this._exif.dispose();
    }
    if (this._resizedTexture) {
      this._resizedTexture.dispose();
    }
  };

  return PhotoEditorSDK;
}(_globals.EventEmitter);

exports.default = PhotoEditorSDK;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _configurable = __webpack_require__(14);

var _configurable2 = _interopRequireDefault(_configurable);

var _shader = __webpack_require__(46);

var _shader2 = _interopRequireDefault(_shader);

var _textureShader = __webpack_require__(47);

var _textureShader2 = _interopRequireDefault(_textureShader);

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

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType,
    RendererType = _globals.Constants.RendererType;

/**
 * A filter can be attached to a DisplayObject and affects the way it is displayed.
 * @class
 * @extends PhotoEditorSDK.Configurable
 * @memberof PhotoEditorSDK.Engine
 */

var Filter = function (_Configurable) {
  (0, _inherits3.default)(Filter, _Configurable);

  function Filter() {
    (0, _classCallCheck3.default)(this, Filter);
    return (0, _possibleConstructorReturn3.default)(this, _Configurable.apply(this, arguments));
  }

  /**
   * Goes through the available options, sets _options defaults
   * @param {Object} userOptions
   * @override
   * @protected
   */
  Filter.prototype._initOptions = function _initOptions() {
    this._shaders = [];
    this._availableUniforms = _textureShader2.default.defaultUniforms;
    this._attributes = _textureShader2.default.defaultAttributes;
    this._vertexSource = _textureShader2.default.defaultVertexSource;
    this._fragmentSource = _textureShader2.default.defaultFragmentSource;

    this._initUniforms();
    _Configurable.prototype._initOptions.call(this);
  };

  /**
   * Initializes the uniforms
   * @private
   */


  Filter.prototype._initUniforms = function _initUniforms() {
    this._uniforms = {};
    for (var name in this._availableUniforms) {
      var uniform = this._availableUniforms[name];
      this._uniforms[name] = {
        type: uniform.type,
        value: uniform.default || null
      };
    }

    // Options are also turned into uniforms
    for (var optionName in this.availableOptions) {
      var optionConfig = this.availableOptions[optionName];

      if (!optionConfig.uniformType) {
        _globals.Log.trace(this.constructor.name, 'Option `' + optionName + '` is missing a `uniformType`!');
      } else {
        this._uniforms['u_' + optionName] = {
          type: optionConfig.uniformType,
          value: optionConfig.default || null
        };
      }
    }
  };

  /**
   * Sets the value for the given option, validates it
   * @param {String} optionName
   * @param {*} value
   * @param {Boolean} update = true
   * @override
   */


  Filter.prototype.setOption = function setOption(optionName, value) {
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _Configurable.prototype.setOption.call(this, optionName, value, update);

    var uniformValue = value;
    var optionConfig = this.availableOptions[optionName];

    if (!optionConfig.uniformType) {
      return;
    }

    var uniformName = 'u_' + optionName;

    switch (optionConfig.type) {
      case OptionType.COLOR:
        if (optionConfig.uniformType === UniformType.FLOAT4) {
          uniformValue = value.toGLColor();
        } else if (optionConfig.uniformType === UniformType.FLOAT3) {
          uniformValue = value.toRGBGLColor();
        }
        break;
      case OptionType.VECTOR2:
        uniformValue = [value.x, value.y];
        break;
      case OptionType.COLOR_MATRIX:
        // a color matrix splits into 4x4 matrix and tranlation vector
        uniformValue = [value.a, value.b, value.c, value.d, value.f, value.g, value.h, value.i, value.k, value.l, value.m, value.n, value.p, value.q, value.r, value.s];
        var vectorValue = [value.e, value.j, value.o, value.t];
        this._uniforms[uniformName + '_vec'] = {
          value: vectorValue,
          type: UniformType.FLOAT4
        };
    }

    this.setUniform(uniformName, uniformValue);
  };

  /**
   * Sets the given uniform to the given value
   * @param {String} name
   * @param {*} value
   * @param {Boolean} sync = false
   */


  Filter.prototype.setUniform = function setUniform(name, value) {
    var sync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    this._uniforms[name].value = value;
  };

  /**
   * Sets the given uniforms to their values
   * @param {Object}  uniforms
   * @param {Boolean} sync = false
   */
  /* istanbul ignore next */


  Filter.prototype.setUniforms = function setUniforms(uniforms) {
    var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    for (var name in uniforms) {
      this._uniforms[name].value = uniforms[name];
      if (sync) {
        this.syncUniform(name);
      }
    }
  };

  /**
   * Synchronizes the uniform with the given name
   * @param  {String} name
   */
  /* istanbul ignore next */


  Filter.prototype.syncUniform = function syncUniform(name) {
    this._shaders.forEach(function (shader) {
      shader.syncUniform(name);
    });
  };

  /**
   * Synchronizes all uniforms with WebGL
   */
  /* istanbul ignore next */


  Filter.prototype.syncUniforms = function syncUniforms() {
    this._shaders.forEach(function (shader) {
      shader.syncUniforms();
    });
  };

  /**
   * Returns the shader for the given renderer
   * @param  {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   * @return {PhotoEditorSDK.Engine.Shader}
   */
  /* istanbul ignore next */


  Filter.prototype.getShaderForRenderer = function getShaderForRenderer(renderer) {
    var gl = renderer.getContext();
    var shader = this._shaders[gl.id];

    if (!shader) {
      shader = new _shader2.default(renderer, this._vertexSource, this._fragmentSource, this._uniforms, this._attributes);

      this._shaders[gl.id] = shader;
    }

    return shader;
  };

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget
   * @param  {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param  {PhotoEditorSDK.Engine.RenderTarget} inputTarget
   * @param  {PhotoEditorSDK.Engine.RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   */


  Filter.prototype.apply = function apply(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    /* istanbul ignore if */
    if (renderer.isOfType(RendererType.WEBGL)) {
      this._applyWebGL(renderer, inputTarget, outputTarget, clear);
    } else if (renderer.isOfType(RendererType.CANVAS)) {
      this._applyCanvas(renderer, inputTarget, outputTarget, clear);
    }
  };

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the WebGLRenderer
   * @param  {PhotoEditorSDK.Engine.WebGLRenderer} renderer
   * @param  {PhotoEditorSDK.Engine.WebGLRenderTarget} inputTarget
   * @param  {PhotoEditorSDK.Engine.WebGLRenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */
  /* istanbul ignore next */


  Filter.prototype._applyWebGL = function _applyWebGL(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var gl = renderer.getContext();
    var shader = this.getShaderForRenderer(renderer);

    renderer.setRenderTarget(outputTarget);
    if (clear) {
      outputTarget.clear();
    }

    renderer.setShader(shader);

    var projectionMatrix = renderer.getCurrentRenderTarget().getProjectionMatrix().toArray();
    shader.setUniform('u_projMatrix', projectionMatrix);
    shader.syncUniforms();

    // Render!
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, inputTarget.getTexture());
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {PhotoEditorSDK.Engine.CanvasRenderer} renderer
   * @param  {PhotoEditorSDK.Engine.RenderTarget} inputTarget
   * @param  {PhotoEditorSDK.Engine.RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  Filter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    _globals.Log.warn(this.constructor.name, '`_applyCanvas` is not implemented. Just copying image data from `inputTarget` to `outputTarget`.');

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);
    outputContext.putImageData(imageData, 0, 0);
  };

  /**
   * Disposes this Filter
   */


  Filter.prototype.dispose = function dispose() {
    this._shaders.forEach(function (shader) {
      return shader.dispose();
    });
    this._shaders = [];
  };

  return Filter;
}(_configurable2.default);

exports.default = Filter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _contextPerformanceHook = __webpack_require__(71);

var _contextPerformanceHook2 = _interopRequireDefault(_contextPerformanceHook);

var _baseRenderer = __webpack_require__(68);

var _baseRenderer2 = _interopRequireDefault(_baseRenderer);

var _canvasRenderTarget = __webpack_require__(31);

var _canvasRenderTarget2 = _interopRequireDefault(_canvasRenderTarget);

var _canvasFilterManager = __webpack_require__(44);

var _canvasFilterManager2 = _interopRequireDefault(_canvasFilterManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RendererType = _globals.Constants.RendererType; /*
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
 * The renderer that is used for Canvas2D rendering
 * @class
 * @extends PhotoEditorSDK.Engine.BaseRenderer
 * @memberof PhotoEditorSDK.Engine
 */
var CanvasRenderer = function (_BaseRenderer) {
  (0, _inherits3.default)(CanvasRenderer, _BaseRenderer);

  /**
   * Creates a CanvasRenderer
   * @override
   */
  function CanvasRenderer() {
    (0, _classCallCheck3.default)(this, CanvasRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseRenderer.call.apply(_BaseRenderer, [this].concat(args)));

    _this._type = RendererType.CANVAS;

    _this.setCanvas(_this._options.canvas || _this._createCanvas());
    return _this;
  }

  /**
   * Creates a canvas element
   * @return {Canvas}
   * @private
   */


  CanvasRenderer.prototype._createCanvas = function _createCanvas() {
    return _globals.Utils.createCanvas();
  };

  /**
   * Gets the rendering context for this renderer
   * @returns {Object}
   * @private
   */


  CanvasRenderer.prototype._createContext = function _createContext() {
    var canvas = this._canvas;
    var ctx = canvas.getContext('2d');

    if (this._options.debug) {
      ctx = new _contextPerformanceHook2.default(ctx);
    }

    this.id = ctx.id = CanvasRenderer.contextId++;
    this._context = ctx;
    ctx.renderer = this;

    this.emit('context', ctx);

    return ctx;
  };

  /**
   * Sets up the rendering context for this renderer
   * @private
   */


  CanvasRenderer.prototype._setupContext = function _setupContext() {
    var ctx = this._context;

    // Enable image smoothing if available
    if (!('imageSmoothingEnabled' in ctx)) {
      ['moz', 'webkit', 'ms'].forEach(function (prop) {
        if (ctx[prop]) {
          ctx[prop] = true;
        }
      });
    } else {
      ctx.imageSmoothingEnabled = true;
    }

    this._defaultRenderTarget = new _canvasRenderTarget2.default(this._width, this._height, this._pixelRatio, this._canvas, this._context);
    this.setRenderTarget(this._defaultRenderTarget);

    this._filterManager = new _canvasFilterManager2.default(this);
  };

  /**
   * Renders the given DisplayObject
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   */


  CanvasRenderer.prototype.render = function render(displayObject) {
    var ctx = this._renderTarget.getContext();

    // Since the given displayObject is the "root" object
    // right now, we need to give it a dummy / fake object
    // as parent with the default world transform and alpha
    var originalParent = displayObject.getParent();
    displayObject.setParent(this._fakeObject);

    // Update transforms and render this object
    displayObject.updateTransform();

    // Reset parent
    displayObject.setParent(originalParent);

    // Reset transform
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Reset alpha
    ctx.globalAlpha = 1;

    // Clear the view
    var _canvas = this._canvas,
        width = _canvas.width,
        height = _canvas.height;

    ctx.clearRect(0, 0, width, height);
    if (this._clearColor.a !== 0) {
      ctx.save();
      ctx.fillStyle = this._clearColor.toRGBA();
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    this.renderDisplayObject(displayObject, this._renderTarget);
  };

  /**
   * Renders the given DisplayObject
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   * @param  {PhotoEditorSDK.Engine.RenderTarget} renderTarget
   */


  CanvasRenderer.prototype.renderDisplayObject = function renderDisplayObject(displayObject, renderTarget) {
    var originalRenderTarget = this._renderTarget;
    this._filterManager.setFilterStack(renderTarget.getFilterStack());
    this.setRenderTarget(renderTarget);
    displayObject.renderCanvas(this);
    this.setRenderTarget(originalRenderTarget);
  };

  /**
   * Returns the current render target
   * @return {PhotoEditorSDK.Engine.RenderTarget}
   */


  CanvasRenderer.prototype.getCurrentRenderTarget = function getCurrentRenderTarget() {
    return this._renderTarget;
  };

  /**
   * Sets the render target
   * @param {PhotoEditorSDK.Engine.RenderTarget} renderTarget
   */


  CanvasRenderer.prototype.setRenderTarget = function setRenderTarget(renderTarget) {
    this._renderTarget = renderTarget;
  };

  /**
   * Returns the current rendering context
   * @return {RenderingContext}
   */


  CanvasRenderer.prototype.getContext = function getContext() {
    return this._renderTarget.getContext();
  };

  /**
   * Disposes this Renderer
   */


  CanvasRenderer.prototype.dispose = function dispose() {
    this._filterManager.dispose();
  };

  return CanvasRenderer;
}(_baseRenderer2.default);

CanvasRenderer.contextId = 0;
CanvasRenderer.type = 'Canvas2D';

exports.default = CanvasRenderer;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _globals2 = _interopRequireDefault(_globals);

var _objectRenderer = __webpack_require__(69);

var _objectRenderer2 = _interopRequireDefault(_objectRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The ObjectRenderer that is responsible for rendering Sprite instances
 * @class
 * @extends PhotoEditorSDK.Engine.ObjectRenderer
 * @memberof PhotoEditorSDK.Engine
 */
/* istanbul ignore next */
/* eslint constructor-super: 0 */
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

var SpriteRenderer = function (_ObjectRenderer) {
  (0, _inherits3.default)(SpriteRenderer, _ObjectRenderer);

  /**
   * Creates a SpriteRenderer
   * @override
   */
  function SpriteRenderer() {
    (0, _classCallCheck3.default)(this, SpriteRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _ObjectRenderer.call.apply(_ObjectRenderer, [this].concat(args)));

    _this._maxBatchSize = _globals2.default.BATCH_SIZE;
    _this._vertices = new ArrayBuffer(_globals2.default.BATCH_SIZE * 4 * _globals2.default.VERTEX_BYTE_SIZE);
    _this._positions = new Float32Array(_this._vertices);
    _this._colors = new Uint32Array(_this._vertices);
    _this._indices = new Uint16Array(_globals2.default.BATCH_SIZE * 6);

    // Fill vertex position indices
    for (var i = 0, j = 0; i < _globals2.default.BATCH_SIZE * 6; i += 6, j += 4) {
      _this._indices[i + 0] = j + 0;
      _this._indices[i + 1] = j + 1;
      _this._indices[i + 2] = j + 2;
      _this._indices[i + 3] = j + 0;
      _this._indices[i + 4] = j + 2;
      _this._indices[i + 5] = j + 3;
    }

    _this._shaders = [];
    _this._sprites = [];

    _this._currentBatchSize = 0;
    _this._currentBaseTexture = null;

    _this._onContextChange();
    return _this;
  }

  /**
   * Adds the given sprite to the batch
   * @param  {PhotoEditorSDK.Engine.Sprite} sprite
   */


  SpriteRenderer.prototype.render = function render(sprite) {
    var texture = sprite.getTexture();
    var textureFrame = texture.getFrame();
    var baseTexture = texture.getBaseTexture();

    // Has the maximum batch size been reached? Flush!
    if (this._currentBatchSize >= this._maxBatchSize) {
      this.flush();
      this._currentBaseTexture = baseTexture;
    }

    // No updated UVs => No rendering
    var uvs = texture.getUVs();
    if (!uvs) {
      return;
    }

    // Fill positions array
    var index = this._currentBatchSize * _globals2.default.VERTEX_BYTE_SIZE;
    this._addVertexCoordinates(sprite, index, textureFrame);
    this._addTextureUVs(sprite, index, uvs);
    this._addColors(sprite, index);

    // Add the sprite to the list of sprites
    this._sprites[this._currentBatchSize] = sprite;
    this._currentBatchSize++;
  };

  /**
   * Adds the color to the positions array for the given sprite
   * @param {PhotoEditorSDK.Engine.Sprite} sprite
   * @param {Number} index
   * @private
   */


  SpriteRenderer.prototype._addColors = function _addColors(sprite, index) {
    var colors = this._colors;
    var tint = sprite.getTint();
    var color = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.getWorldAlpha() * 255 << 24);
    colors[index + 4] = colors[index + 9] = colors[index + 14] = colors[index + 19] = color;
  };

  /**
   * Adds the texture UV coordinates to the positions array for the given sprite
   * @param {PhotoEditorSDK.Engine.Sprite} sprite
   * @param {Number} index
   * @param {PhotoEditorSDK.Engine.TextureUVs} uvs
   * @private
   */


  SpriteRenderer.prototype._addTextureUVs = function _addTextureUVs(sprite, index, uvs) {
    var positions = this._positions;

    // Add UVs
    var uvCoords = uvs.getUVsAt(0);
    positions[index + 2] = uvCoords.x;
    positions[index + 3] = uvCoords.y;

    uvCoords = uvs.getUVsAt(1);
    positions[index + 7] = uvCoords.x;
    positions[index + 8] = uvCoords.y;

    uvCoords = uvs.getUVsAt(2);
    positions[index + 12] = uvCoords.x;
    positions[index + 13] = uvCoords.y;

    uvCoords = uvs.getUVsAt(3);
    positions[index + 17] = uvCoords.x;
    positions[index + 18] = uvCoords.y;
  };

  /**
   * Adds the vertex coordinates to the positions array for the given
   * sprite and texture frame
   * @param {PhotoEditorSDK.Engine.Sprite} sprite
   * @param {Number} index
   * @param {PhotoEditorSDK.Math.Rectangle} textureFrame
   * @private
   */


  SpriteRenderer.prototype._addVertexCoordinates = function _addVertexCoordinates(sprite, index, textureFrame) {
    var positions = this._positions;
    var worldTransform = sprite.getWorldTransform();

    // Transform sprite coords with anchor in mind
    var anchor = sprite.getAnchor();
    var rectPositions = worldTransform.rectangleToCoordinates(textureFrame, anchor);

    var stride = 5;
    for (var i = 0; i < 4; i++) {
      positions[index + i * stride] = rectPositions[i].x;
      positions[index + i * stride + 1] = rectPositions[i].y;
    }
  };

  /**
   * Gets called when the rendering context changes
   * @private
   */


  SpriteRenderer.prototype._onContextChange = function _onContextChange() {
    var gl = this._renderer.getContext();

    this._shader = this._renderer.shaders.default;

    this._vertexBuffer = gl.createBuffer();
    this._indexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.DYNAMIC_DRAW);
  };

  /**
   * Gets called when this object renderer is activated
   */


  SpriteRenderer.prototype.start = function start() {
    this._shader.setupBuffers(this._vertexBuffer, this._indexBuffer);
  };

  /**
   * Renders the queued sprites in batches, every time the base texture has changed,
   * it flushes the current batch to the graphics card
   */


  SpriteRenderer.prototype.flush = function flush() {
    var renderer = this._renderer;
    var gl = renderer.getContext();

    if (this._currentBatchSize === 0) {
      return;
    }

    if (this._currentBatchSize > _globals2.default.BATCH_SIZE * 0.5) {
      // Upload whole ArrayBuffer
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, this._vertices);
    } else {
      // Only upload sub array
      var subArray = this._positions.subarray(0, this._currentBatchSize * _globals2.default.VERTEX_BYTE_SIZE);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, subArray);
    }

    // Init variables
    var currentBatchSize = 0;
    var currentBaseTexture = null;
    var nextBaseTexture = null;
    var currentShader = null;
    var nextShader = null;
    var shaderChanged = false;
    var textureChanged = false;
    var sprite = null;
    var batchStartIndex = 0;

    for (var i = 0, j = this._currentBatchSize; i < j; i++) {
      sprite = this._sprites[i];

      nextBaseTexture = sprite.getTexture().getBaseTexture();
      nextShader = sprite.getShader() || this._shader;
      shaderChanged = currentShader !== nextShader;
      textureChanged = currentBaseTexture !== nextBaseTexture;

      if (textureChanged || shaderChanged) {
        this._renderBatch(currentBaseTexture, currentBatchSize, batchStartIndex);

        batchStartIndex = i;
        currentBatchSize = 0;
        currentBaseTexture = nextBaseTexture;

        // Shader has changed, set it
        if (shaderChanged) {
          currentShader = nextShader;
          renderer.setShader(currentShader);

          var renderTarget = renderer.getCurrentRenderTarget();
          var projectionMatrix = renderTarget.getProjectionMatrix().toArray();
          currentShader.setUniform('u_projMatrix', projectionMatrix);
          currentShader.syncUniforms();

          gl.activeTexture(gl.TEXTURE0);
        }
      }

      currentBatchSize++;
    }

    this._renderBatch(currentBaseTexture, currentBatchSize, batchStartIndex);

    // Reset the batch
    this._currentBatchSize = 0;
    this._sprites = [];
  };

  /**
   * Renders the current batch
   * @param  {PhotoEditorSDK.Engine.BaseTexture} baseTexture
   * @param  {Number} batchSize
   * @param  {Number} batchStartIndex
   * @private
   */


  SpriteRenderer.prototype._renderBatch = function _renderBatch(baseTexture, batchSize, batchStartIndex) {
    if (batchSize === 0) {
      return;
    }

    var renderer = this._renderer;
    var gl = renderer.getContext();

    var glTexture = baseTexture.getGLTextureForRenderer(renderer);
    if (!glTexture) {
      glTexture = renderer.getOrCreateGLTexture(baseTexture);
    }

    if (baseTexture.isDirty()) {
      renderer.updateTexture(baseTexture);
      baseTexture.setDirty(false);
    }

    gl.activeTexture(gl.TEXTURE0 + baseTexture.getGLUnit());
    gl.bindTexture(gl.TEXTURE_2D, glTexture);

    var verticesCount = batchSize * 6;
    var vertexOffset = batchStartIndex * 6 * 2;
    gl.drawElements(gl.TRIANGLES, verticesCount, gl.UNSIGNED_SHORT, vertexOffset);
  };

  /**
   * Disposes this ObjectRenderer
   */


  SpriteRenderer.prototype.dispose = function dispose() {
    var renderer = this._renderer;
    var gl = renderer.getContext();

    gl.deleteBuffer(this._vertexBuffer);
    gl.deleteBuffer(this._indexBuffer);

    this._vertices = null;
    this._positions = null;
    this._colors = null;
    this._indices = null;

    _ObjectRenderer.prototype.dispose.call(this);
  };

  return SpriteRenderer;
}(_objectRenderer2.default);

exports.default = SpriteRenderer;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _baseRenderer = __webpack_require__(68);

var _baseRenderer2 = _interopRequireDefault(_baseRenderer);

var _webglRenderTarget = __webpack_require__(32);

var _webglRenderTarget2 = _interopRequireDefault(_webglRenderTarget);

var _objectRenderer = __webpack_require__(69);

var _objectRenderer2 = _interopRequireDefault(_objectRenderer);

var _spriteRenderer = __webpack_require__(99);

var _spriteRenderer2 = _interopRequireDefault(_spriteRenderer);

var _textureShader = __webpack_require__(47);

var _textureShader2 = _interopRequireDefault(_textureShader);

var _displayObject = __webpack_require__(43);

var _displayObject2 = _interopRequireDefault(_displayObject);

var _webglFilterManager = __webpack_require__(45);

var _webglFilterManager2 = _interopRequireDefault(_webglFilterManager);

var _contextPerformanceHook = __webpack_require__(71);

var _contextPerformanceHook2 = _interopRequireDefault(_contextPerformanceHook);

var _pixelArrayImage = __webpack_require__(72);

var _pixelArrayImage2 = _interopRequireDefault(_pixelArrayImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RendererType = _globals.Constants.RendererType; /* global Image, HTMLImageElement, WEBPACK */
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

// For server-side environments

/**
 * The renderer that is used for WebGL rendering
 * @class
 * @extends PhotoEditorSDK.Engine.BaseRenderer
 * @memberof PhotoEditorSDK.Engine
 */
/* istanbul ignore next */
var WebGLRenderer = function (_BaseRenderer) {
  (0, _inherits3.default)(WebGLRenderer, _BaseRenderer);

  /**
   * Creates a WebGLRenderer
   * @override
   */
  function WebGLRenderer() {
    (0, _classCallCheck3.default)(this, WebGLRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseRenderer.call.apply(_BaseRenderer, [this].concat(args)));

    _this._type = RendererType.WEBGL;

    _this._textures = [];
    _this._fakeObject = new _displayObject2.default();
    _this._onContextLost = _this._onContextLost.bind(_this);
    _this._onContextRestored = _this._onContextRestored.bind(_this);

    _this.setCanvas(_this._options.canvas || _globals.Utils.createCanvas());

    _this.shaders = _this._initShaders();
    _this.renderers = _this._initRenderers();
    return _this;
  }

  // -------------------------------------------------------------------------- CONTEXT LOSS

  /**
   * Gets called when the WebGL context has been lost
   * @param  {Event} e
   * @private
   */


  WebGLRenderer.prototype._onContextLost = function _onContextLost(e) {
    e.preventDefault();
    _globals.Log.warn(this.constructor.name, 'WebGL context has been lost - trying to restore.');
  };

  /**
   * Gets called when the WebGL context could not be created
   * @param  {Object} e
   * @private
   */


  WebGLRenderer.prototype._onContextCreationError = function _onContextCreationError(e) {
    e.preventDefault();
    _globals.Log.warn(this.constructor.name, 'Failed to create WebGL context: ' + (e.statusMessage || 'Unknown error'));
  };

  /**
   * Gets called when the WebGL context has been restored. Cleans up and resets everything.
   * @private
   */


  WebGLRenderer.prototype._onContextRestored = function _onContextRestored() {
    var _this2 = this;

    _globals.Log.warn(this.constructor.name, 'WebGL context has been restored. Clearing all textures.');

    this._textures.forEach(function (texture) {
      texture.disposeGLTexturesForRenderer(_this2);
    });

    this._createContext();
    this._setupContext();
    this.emit('context-restored');
  };

  /**
   * Gets called before the context has been set up
   * @private
   */


  WebGLRenderer.prototype._onBeforeContext = function _onBeforeContext() {
    if (this._filterManager) {
      this._filterManager.dispose();
    }
    this._filterManager = new _webglFilterManager2.default(this);
    this._currentObjectRenderer = new _objectRenderer2.default(this);
  };

  /**
   * Sets the given shader to active
   * @param {PhotoEditorSDK.Engine.Shader} shader
   */


  WebGLRenderer.prototype.setShader = function setShader(shader) {
    this._currentShader = shader;
    this._context.useProgram(shader.getProgram());
    this._setAttributesForShader(shader);
  };

  /**
   * Sets the canvas to the given one
   * @param {HTMLCanvasElement} canvas
   */


  WebGLRenderer.prototype.setCanvas = function setCanvas(canvas) {
    if (this._canvas) {
      this._canvas.removeEventListener('webglcontextlost', this._onContextLost);
      this._canvas.removeEventListener('webglcontextrestored', this._onContextRestored);
      this._canvas.removeEventListener('webglcontextcreationerror', this._onContextCreationError);
    }

    if (canvas.addEventListener) {
      // node-canvas doesn't have events
      canvas.addEventListener('webglcontextlost', this._onContextLost);
      canvas.addEventListener('webglcontextrestored', this._onContextRestored);
      canvas.addEventListener('webglcontextcreationerror', this._onContextCreationError);
    }

    _BaseRenderer.prototype.setCanvas.call(this, canvas);
  };

  /**
   * Uploads the given shader's attributes to the GPU
   * @param {PhotoEditorSDK.Engine.Shader} shader
   */


  WebGLRenderer.prototype._setAttributesForShader = function _setAttributesForShader(shader) {
    var gl = this._context;
    var attributes = shader.getAttributes();
    var attributeLocations = shader.getAttributeLocations();

    attributes.forEach(function (attributeName) {
      var attributeLocation = attributeLocations[attributeName];
      gl.enableVertexAttribArray(attributeLocation);
    });
  };

  /**
   * Initializes the default shaders
   * @return {Object}
   * @private
   */


  WebGLRenderer.prototype._initShaders = function _initShaders() {
    return {
      default: new _textureShader2.default(this)
    };
  };

  /**
   * Initializes the available object renderers
   * @return {Object}
   * @private
   */


  WebGLRenderer.prototype._initRenderers = function _initRenderers() {
    return {
      sprite: new _spriteRenderer2.default(this)
    };
  };

  /**
   * Gets the rendering context for this renderer
   * @returns {Object}
   * @private
   */


  WebGLRenderer.prototype._createContext = function _createContext() {
    var canvas = this._canvas;
    var gl = null;

    var contextOptions = {
      preserveDrawingBuffer: true
    };

    if (true) {
      gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
    }

    // Hook up WebGLDebugUtils if present
    if (typeof window !== 'undefined' && window.WebGLDebugUtils && this._options.debug) {
      var logGL = function logGL(functionName, args) {
        console.error('gl.' + functionName + '(' + window.WebGLDebugUtils.glFunctionArgsToString(functionName, args) + ')');
      };
      gl = window.WebGLDebugUtils.makeDebugContext(gl, null, logGL);
    }

    // Hook up ContextPerformanceHook if debug is enabled
    if (this._options.debug) {
      gl = new _contextPerformanceHook2.default(gl);
    }

    this.id = gl.id = WebGLRenderer.contextId++;
    this._context = gl;
    gl.renderer = this;

    this._maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);

    this.emit('context', gl);

    return gl;
  };

  /**
   * Sets up the rendering context for this renderer
   * @private
   */


  WebGLRenderer.prototype._setupContext = function _setupContext() {
    var gl = this._context;

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    this._defaultRenderTarget = new _webglRenderTarget2.default(this, this._width, this._height, this._pixelRatio, true);
    this.setRenderTarget(this._defaultRenderTarget);
    this._getMaxPrecision();
  };

  /**
   * Finds the maximum int / float precision for this device
   * @private
   */


  WebGLRenderer.prototype._getMaxPrecision = function _getMaxPrecision() {
    var gl = this._context;
    var highFloat = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
    this._maxFloatPrecision = highFloat.precision !== 0 ? 'highp' : 'mediump';

    var highInt = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT);
    this._maxIntPrecision = highInt.rangeMax !== 0 ? 'highp' : 'lowp';
  };

  /**
   * Resizes the context and view to the given size
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   * @param  {Boolean} resizeCanvas = true
   */


  WebGLRenderer.prototype.resizeTo = function resizeTo(dimensions) {
    var resizeCanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _BaseRenderer.prototype.resizeTo.call(this, dimensions, resizeCanvas);

    if (this._currentRenderTarget) {
      this._currentRenderTarget.resizeTo(dimensions);
    }
  };

  /**
   * Sets the current render target to the passed one and activates
   * it for rendering
   * @param {PhotoEditorSDK.Engine.RenderTarget} renderTarget
   */


  WebGLRenderer.prototype.setRenderTarget = function setRenderTarget(renderTarget) {
    this._currentRenderTarget = renderTarget;
    this._currentRenderTarget.activate();
  };

  /**
   * Sets the current object renderer to the given one
   * @param {PhotoEditorSDK.Engine.ObjectRenderer} objectRenderer
   */


  WebGLRenderer.prototype.setObjectRenderer = function setObjectRenderer(objectRenderer) {
    this._currentObjectRenderer.stop();
    this._currentObjectRenderer = objectRenderer;
    this._currentObjectRenderer.start();
  };

  /**
   * Renders the given DisplayObject
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   */


  WebGLRenderer.prototype.render = function render(displayObject) {
    this.setRenderTarget(this._defaultRenderTarget);
    this._defaultRenderTarget.clear(this._clearColor);

    // Since the given displayObject is the "root" object
    // right now, we need to give it a dummy / fake object
    // as parent with the default world transform and alpha
    var originalParent = displayObject.getParent();
    displayObject.setParent(this._fakeObject);

    // Update transforms and render this object
    displayObject.updateTransform();

    // Reset parent
    displayObject.setParent(originalParent);

    this.renderDisplayObject(displayObject, this._defaultRenderTarget);
  };

  /**
   * Renders the given DisplayObject
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   * @param  {PhotoEditorSDK.Engine.RenderTarget} renderTarget
   */


  WebGLRenderer.prototype.renderDisplayObject = function renderDisplayObject(displayObject, renderTarget) {
    this.setRenderTarget(renderTarget);
    this._filterManager.setFilterStack(renderTarget.getFilterStack());
    displayObject.renderWebGL(this);
    this._currentObjectRenderer.flush();
  };

  /**
   * Clears the context
   */


  WebGLRenderer.prototype.clear = function clear() {
    var gl = this._context;

    gl.clearColor.apply(gl, this._clearColor.toGLColor());
    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  /**
   * Saves the renderer state and returns the state object
   * @return {Object}
   */


  WebGLRenderer.prototype.save = function save() {
    return {
      renderTarget: this._currentRenderTarget,
      objectRenderer: this._currentObjectRenderer,
      filterStack: this._filterManager.getFilterStack()
    };
  };

  /**
   * Restores the given renderer state
   * @param  {Object} save
   */


  WebGLRenderer.prototype.restore = function restore(save) {
    this.setRenderTarget(save.renderTarget);
    this._filterManager.setFilterStack(save.filterStack);
    this._currentObjectRenderer = save.objectRenderer;
  };

  /**
   * Returns and/or creates a WebGLTexture for the given BaseTexture object
   * @param  {PhotoEditorSDK.Engine.BaseTexture} texture
   * @return {PhotoEditorSDK.Engine.WebGLTexture}
   */


  WebGLRenderer.prototype.getOrCreateGLTexture = function getOrCreateGLTexture(texture) {
    var gl = this._context;

    var glTexture = texture.getGLTextureForRenderer(this);
    if (!glTexture) {
      glTexture = gl.createTexture();
      texture.setGLTextureForRenderer(glTexture, this);

      // Hold reference to texture for easier disposal
      this._textures.push(texture);
    }

    return glTexture;
  };

  /**
   * Updates the given texture
   * @param  {PhotoEditorSDK.Engine.BaseTexture} texture
   * @param  {Boolean} [upload = true]
   */


  WebGLRenderer.prototype.updateTexture = function updateTexture(texture) {
    var upload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var source = texture.getSource();
    var hasSource = !!source;

    var gl = this._context;
    var glUnit = texture.getGLUnit();
    var glTexture = this.getOrCreateGLTexture(texture);

    gl.activeTexture(gl.TEXTURE0 + glUnit);
    gl.bindTexture(gl.TEXTURE_2D, glTexture);

    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

    if (upload && hasSource) {
      if (typeof Image !== 'undefined' && source instanceof Image || typeof HTMLImageElement !== 'undefined' && source instanceof HTMLImageElement || source.constructor.name === 'Canvas' || source.tagName && source.tagName.toUpperCase() === 'CANVAS' || source.tagName && source.tagName.toUpperCase() === 'IMG') {
        // Default client-side behavior: Upload the `source` image
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      } else {
        // In case we're on the server side, convert a `node-canvas` Image object
        // into a PixelArrayImage
        if (typeof NodeCanvasImage !== 'undefined' && source instanceof NodeCanvasImage) {
          source = _pixelArrayImage2.default.fromNodeCanvasImage(source);
        }

        // Upload the PixelArrayImage's data (a Uint8Array)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, source.width, source.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, source.data);
      }
    }

    if (texture.isMipMappingEnabled()) {
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.getGLFilter(gl, 'min'));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.getGLFilter(gl, 'mag'));
    gl.activeTexture(gl.TEXTURE0);
  };

  /**
   * Returns the maximum dimensions
   * @return {Number}
   */


  WebGLRenderer.prototype.getMaxDimensions = function getMaxDimensions() {
    // node-gl support
    var canvas = _globals.Utils.createCanvas();
    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      return null;
    } else {
      var maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      var loseContextExtension = gl.getExtension('WEBGL_lose_context');
      if (loseContextExtension) {
        loseContextExtension.loseContext();
      }
      return maxTextureSize;
    }
  };

  /**
   * Returns the current render target
   * @return {PhotoEditorSDK.Engine.RenderTarget}
   */


  WebGLRenderer.prototype.getCurrentRenderTarget = function getCurrentRenderTarget() {
    return this._currentRenderTarget;
  };

  /**
   * Returns the current object renderer
   * @return {PhotoEditorSDK.Engine.ObjectRenderer}
   */


  WebGLRenderer.prototype.getCurrentObjectRenderer = function getCurrentObjectRenderer() {
    return this._currentObjectRenderer;
  };

  /**
   * Checks if this renderer is supported on the current device and browser
   * @return {Boolean}
   */


  WebGLRenderer.isSupported = function isSupported() {
    var canvas = _globals.Utils.createCanvas();
    canvas.addEventListener('webglcontextcreationerror', this._onContextCreationError);
    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    canvas.removeEventListener('webglcontextcreationerror', this._onContextCreationError);
    return !!gl;
  };

  /**
   * Returns the maximum float precision for this device (lowp/mediump/highp)
   * @return {String}
   */


  WebGLRenderer.prototype.getMaxFloatPrecision = function getMaxFloatPrecision() {
    return this._maxFloatPrecision;
  };

  /**
   * Returns the maximum int precision for this device (lowp/mediump/highp)
   * @return {String}
   */


  WebGLRenderer.prototype.getMaxIntPrecision = function getMaxIntPrecision() {
    return this._maxIntPrecision;
  };

  /**
   * Disposes this Renderer
   */


  WebGLRenderer.prototype.dispose = function dispose() {
    var _this3 = this;

    this._filterManager.dispose();
    this._currentObjectRenderer.dispose();
    this._defaultRenderTarget.dispose();
    this._textures.forEach(function (texture) {
      texture.disposeGLTexturesForRenderer(_this3);
    });
    for (var shader in this.shaders) {
      this.shaders[shader].dispose();
      delete this.shaders[shader];
    }
  };

  return WebGLRenderer;
}(_baseRenderer2.default);

WebGLRenderer.contextId = 0;
WebGLRenderer.type = 'WebGL';

exports.default = WebGLRenderer;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textureShader = __webpack_require__(47);

var _textureShader2 = _interopRequireDefault(_textureShader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  TextureShader: _textureShader2.default
}; /*
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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _container = __webpack_require__(67);

var _container2 = _interopRequireDefault(_container);

var _potRenderer = __webpack_require__(110);

var _potRenderer2 = _interopRequireDefault(_potRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A drawable rectangle with a texture
 * @class
 * @extends PhotoEditorSDK.Engine.Container
 * @memberof PhotoEditorSDK.Engine
 */
var Sprite = function (_Container) {
  (0, _inherits3.default)(Sprite, _Container);

  /**
   * Creates a Sprite
   * @param  {PhotoEditorSDK.Engine.Texture} texture
   */
  function Sprite(texture) {
    (0, _classCallCheck3.default)(this, Sprite);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Container.call(this));

    _this._onTextureUpdate = _this._onTextureUpdate.bind(_this);

    _this._texture = texture;
    _this._shader = null;

    // Cached dimensions
    _this._width = 0;
    _this._height = 0;

    _this._anchor = new _globals.Vector2(0, 0);

    _this.setTexture(texture);
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when this sprite's texture has been updated
   * @private
   */


  Sprite.prototype._onTextureUpdate = function _onTextureUpdate() {
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the contents of this container
   * @param {WebGLRenderer} renderer
   * @private
   */
  /* istanbul ignore next */


  Sprite.prototype._renderWebGL = function _renderWebGL(renderer) {
    var save = renderer.save();
    if (this._smoothDownscaling) {
      if (!this._potRenderer) {
        this._potRenderer = new _potRenderer2.default();
      }

      this._potRenderer.render(renderer, this, this._texture);
    }
    renderer.restore(save);

    renderer.setObjectRenderer(renderer.renderers.sprite);
    renderer.renderers.sprite.render(this);
  };

  /**
   * Renders the contents of this container
   * @param  {CanvasRenderer} renderer
   * @private
   */


  Sprite.prototype._renderCanvas = function _renderCanvas(renderer) {
    // @TODO Move this to SpriteRenderer
    var transform = this._worldTransform;
    var textureFrame = this._texture.getFrame();

    var width = textureFrame.width,
        height = textureFrame.height;

    var pixelRatio = renderer.getCurrentRenderTarget().getPixelRatio();

    // Apply transform
    var dx = this._anchor.x * -width | 0;
    var dy = this._anchor.y * -height | 0;
    var ctx = renderer.getContext();
    ctx.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx * pixelRatio, transform.ty * pixelRatio);

    ctx.globalAlpha = this.getWorldAlpha();

    var baseTexture = this._texture.getBaseTexture();
    var texturePixelRatio = baseTexture.getPixelRatio();
    var source = baseTexture.getSource();
    ctx.drawImage(this._texture.getBaseTexture().getSource(),

    // Source x, y, width, height
    0, 0, (source.naturalWidth || width) * texturePixelRatio, (source.naturalHeight || height) * texturePixelRatio,

    // Destination x, y, width, height
    dx * pixelRatio, dy * pixelRatio, width * pixelRatio, height * pixelRatio);
  };

  // -------------------------------------------------------------------------- PUBLIC API

  /**
   * Checks if this sprite is located at the given position
   * @param  {PhotoEditorSDK.Math.Vector2}  position
   * @return {Boolean}
   */


  Sprite.prototype.isAtPosition = function isAtPosition(position) {
    var localPosition = this._worldTransform.applyInverseToVector(position);
    var textureFrame = this._texture.getFrame();
    var width = textureFrame.width,
        height = textureFrame.height;


    var upperLeft = new _globals.Vector2(-width, -height);
    upperLeft.multiply(this._anchor);
    var lowerRight = upperLeft.clone().add(width, height);

    if (localPosition.x < upperLeft.x || localPosition.x > lowerRight.x || localPosition.y < upperLeft.y || localPosition.y > lowerRight.y) {
      return false;
    }

    return true;
  };

  /**
   * Returns the non-global bounds of this DisplayObject
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Sprite.prototype.getLocalBounds = function getLocalBounds() {
    if (this._localBoundsNeedUpdate) {
      var bounds = this._localBounds;
      var textureFrame = this._texture.getFrame();

      bounds.x = -textureFrame.width * this._anchor.x;
      bounds.y = -textureFrame.height * this._anchor.y;
      bounds.width = textureFrame.width;
      bounds.height = textureFrame.height;

      this._localBoundsNeedUpdate = false;
    }
    return this._localBounds.clone();
  };

  /**
   * Returns the bounds for this DisplayObject
   * @return {PhotoEditorSDK.Math.Rectangle}
   */


  Sprite.prototype.getBounds = function getBounds() {
    var _this2 = this;

    if (this._boundsNeedUpdate) {
      (function () {
        var bounds = _this2._bounds;
        var textureFrame = _this2._texture.getFrame();

        // @TODO Optimize this (if necessary). We could skip matrix application
        //       when there's no rotation
        var worldTransform = _this2._worldTransform;
        var anchor = _this2._anchor;
        var positions = worldTransform.rectangleToCoordinates(textureFrame, anchor);

        var minX = positions[0].x;
        var minY = positions[0].y;
        var maxX = minX;
        var maxY = minY;

        positions.forEach(function (_ref) {
          var x = _ref.x,
              y = _ref.y;

          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        });

        bounds.x = minX;
        bounds.width = Math.abs(maxX - minX);
        bounds.y = minY;
        bounds.height = Math.abs(maxY - minY);

        _this2._boundsNeedUpdate = false;
      })();
    }
    return this._bounds.clone();
  };

  // -------------------------------------------------------------------------- GETTERS / SETTERS

  /**
   * Returns the current texture
   * @return {PhotoEditorSDK.Engine.Texture} [description]
   */


  Sprite.prototype.getTexture = function getTexture() {
    return this._texture;
  };

  /**
   * Sets the texture
   * @param {PhotoEditorSDK.Engine.Texture} texture
   */


  Sprite.prototype.setTexture = function setTexture(texture) {
    if (!texture) {
      return;
    }

    if (this._texture) {
      this._texture.off('update', this._onTextureUpdate);
    }

    this._texture = texture;
    if (texture.getBaseTexture().isLoaded()) {
      this._onTextureUpdate();
    }
    texture.on('update', this._onTextureUpdate);
  };

  /**
   * Returns the shader
   * @return {PhotoEditorSDK.Engine.Shader}
   */


  Sprite.prototype.getShader = function getShader() {
    return this._shader;
  };

  /**
   * Sets the shader
   * @param {PhotoEditorSDK.Engine.Shader} shader
   */


  Sprite.prototype.setShader = function setShader(shader) {
    this._shader = shader;
  };

  /**
   * Returns the width
   * @return {Number}
   */


  Sprite.prototype.getWidth = function getWidth() {
    return this._width;
  };

  /**
   * Sets the width
   * @param {Number} width
   */


  Sprite.prototype.setWidth = function setWidth(width) {
    this._scale.x = width / this._texture.getFrame().width;
    this._width = width;
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  /**
   * Returns the height
   * @return {Number}
   */


  Sprite.prototype.getHeight = function getHeight() {
    return this._height;
  };

  /**
   * Sets the height
   * @param {Number} height
   */


  Sprite.prototype.setHeight = function setHeight(height) {
    this._scale.y = height / this._texture.getFrame().height;
    this._height = height;
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  /**
   * Returns the anchor
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Sprite.prototype.getAnchor = function getAnchor() {
    return this._anchor;
  };

  /**
   * Sets the anchor
   * @param {PhotoEditorSDK.Math.Vector2} anchor
   */


  Sprite.prototype.setAnchor = function setAnchor(anchor, y) {
    if (anchor instanceof _globals.Vector2) {
      this._anchor.copy(anchor);
    } else {
      this._anchor.set(anchor, y);
    }
    this._boundsNeedUpdate = true;
    this._localBoundsNeedUpdate = true;
  };

  /**
   * Returns whether smooth downscaling is enabled
   * @return {Boolean}
   */


  Sprite.prototype.isSmoothDownscaling = function isSmoothDownscaling() {
    return this._smoothDownscaling;
  };

  /**
   * Sets the smooth downscaling flag
   * @param {Boolean} smoothDownscaling
   */


  Sprite.prototype.setSmoothDownscaling = function setSmoothDownscaling(smoothDownscaling) {
    this._smoothDownscaling = smoothDownscaling;
  };

  /**
   * Disposes this Sprite
   */


  Sprite.prototype.dispose = function dispose() {
    if (this._texture) {
      this._texture.off('update', this._onTextureUpdate);
    }
  };

  return Sprite;
}(_container2.default); /*
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

exports.default = Sprite;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(6);

var _texture = __webpack_require__(70);

var _texture2 = _interopRequireDefault(_texture);

var _baseTexture = __webpack_require__(30);

var _baseTexture2 = _interopRequireDefault(_baseTexture);

var _webglRenderTarget = __webpack_require__(32);

var _webglRenderTarget2 = _interopRequireDefault(_webglRenderTarget);

var _canvasRenderTarget = __webpack_require__(31);

var _canvasRenderTarget2 = _interopRequireDefault(_canvasRenderTarget);

var _webglFilterManager = __webpack_require__(45);

var _webglFilterManager2 = _interopRequireDefault(_webglFilterManager);

var _canvasFilterManager = __webpack_require__(44);

var _canvasFilterManager2 = _interopRequireDefault(_canvasFilterManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RendererType = _globals.Constants.RendererType; /*
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
 * A texture that you can render to
 * @class
 * @extends PhotoEditorSDK.Engine.Texture
 * @memberof PhotoEditorSDK.Engine
 */
var RenderTexture = function (_Texture) {
  (0, _inherits3.default)(RenderTexture, _Texture);

  /**
   * Creates a RenderTexture
   * @param  {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param  {Number} [width = 100]
   * @param  {Number} [height = 100]
   * @param  {Number} [pixelRatio = 1]
   */
  function RenderTexture(renderer) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var pixelRatio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    (0, _classCallCheck3.default)(this, RenderTexture);

    var baseTexture = new _baseTexture2.default();
    var frame = baseTexture.getFrame();
    frame.width = width;
    frame.height = height;
    baseTexture.setPixelRatio(pixelRatio);
    baseTexture.setLoaded(true);

    // RenderTexture is always loaded!
    var _this = (0, _possibleConstructorReturn3.default)(this, _Texture.call(this, baseTexture, new _globals.Rectangle(0, 0, width, height)));

    _this._loaded = true;
    _this._width = width;
    _this._height = height;
    _this._pixelRatio = pixelRatio;
    _this._renderer = renderer;

    _this._setupFilterManager();
    _this._setupBuffer();
    _this._updateUVs();
    return _this;
  }

  /**
   * Sets up the filter manager
   * @private
   */


  RenderTexture.prototype._setupFilterManager = function _setupFilterManager() {
    /* istanbul ignore if */
    if (this._renderer.isOfType(RendererType.WEBGL)) {
      this._filterManager = new _webglFilterManager2.default(this._renderer);
    } else if (this._renderer.isOfType(RendererType.CANVAS)) {
      this._filterManager = new _canvasFilterManager2.default(this._renderer);
    }

    this._filterManager.resizeTo(new _globals.Vector2(this._width, this._height));
  };

  /**
   * Sets up the buffer that we're rendering to
   * @private
   */


  RenderTexture.prototype._setupBuffer = function _setupBuffer() {
    /* istanbul ignore if */
    if (this._renderer.isOfType(RendererType.WEBGL)) {
      this._setupWebGLBuffer();
    } else if (this._renderer.isOfType(RendererType.CANVAS)) {
      this._setupCanvasRenderTarget();
    }
  };

  /**
   * Sets up the WebGLRenderTarget for this RenderTexture
   * @private
   */
  /* istanbul ignore next */


  RenderTexture.prototype._setupWebGLBuffer = function _setupWebGLBuffer() {
    this._renderTarget = new _webglRenderTarget2.default(this._renderer, this._width, this._height, this._pixelRatio);
    this._baseTexture.setGLTextureForRenderer(this._renderTarget.getTexture(), this._renderer);
  };

  /**
   * Sets up the CanvasRenderTarget for this RenderTexture
   * @private
   */


  RenderTexture.prototype._setupCanvasRenderTarget = function _setupCanvasRenderTarget() {
    this._renderTarget = new _canvasRenderTarget2.default(this._width, this._height, this._pixelRatio);
    this._baseTexture.setSource(this._renderTarget.getCanvas());
  };

  /**
   * Clears this texture's render buffer
   * @param {PhotoEditorSDK.Color} color
   */


  RenderTexture.prototype.clear = function clear(color) {
    this._renderTarget.clear(color);
  };

  /**
   * Resizes this RenderTexture to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   */


  RenderTexture.prototype.resizeTo = function resizeTo(dimensions) {
    if (this._width === dimensions.x && this._height === dimensions.y) {
      return;
    }

    this._width = dimensions.x;
    this._height = dimensions.y;
    this._frame.width = dimensions.x;
    this._frame.height = dimensions.y;

    this._baseTexture.resizeTo(dimensions);
    this._renderTarget.resizeTo(dimensions);
    this._filterManager.resizeTo(dimensions);
  };

  /**
   * Renders the given DisplayObject
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   */


  RenderTexture.prototype.render = function render(displayObject) {
    /* istanbul ignore if */
    if (this._renderer.isOfType(RendererType.WEBGL)) {
      this._renderWebGL(displayObject);
    } else if (this._renderer.isOfType(RendererType.CANVAS)) {
      this._renderCanvas(displayObject);
    } else {
      throw new Error('RenderTexture does not support rendering via ' + this._renderer.constructor.name);
    }
  };

  /**
   * Renders the given DisplayObject using WebGL
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   * @private
   */
  /* istanbul ignore next */


  RenderTexture.prototype._renderWebGL = function _renderWebGL(displayObject) {
    this._renderTarget.activate();

    displayObject.getWorldTransform().reset();
    displayObject.getChildren().forEach(function (child) {
      child.updateTransform();
    });

    var tempFilterManager = this._renderer.getFilterManager();
    this._renderer.setFilterManager(this._filterManager);
    this._renderer.renderDisplayObject(displayObject, this._renderTarget);
    this._renderTarget.updateMipMap();
    this._renderer.setFilterManager(tempFilterManager);
  };

  /**
   * Renders the given DisplayObject using Canvas2D
   * @param  {PhotoEditorSDK.Engine.DisplayObject} displayObject
   * @private
   */


  RenderTexture.prototype._renderCanvas = function _renderCanvas(displayObject) {
    displayObject.getWorldTransform().reset();
    displayObject.getChildren().forEach(function (child) {
      child.updateTransform();
    });

    var tempFilterManager = this._renderer.getFilterManager();
    this._renderer.setFilterManager(this._filterManager);
    this._renderer.renderDisplayObject(displayObject, this._renderTarget);
    this._renderer.setFilterManager(tempFilterManager);
  };

  /**
   * Returns the render target
   * @return {PhotoEditorSDK.Engine.WebGLRenderTarget}
   */


  RenderTexture.prototype.getRenderTarget = function getRenderTarget() {
    return this._renderTarget;
  };

  /**
   * Disposes this RenderTexture
   */


  RenderTexture.prototype.dispose = function dispose() {
    this._baseTexture.disposeGLTexturesForRenderer(this._renderer);
    this._renderTarget.dispose();
    this._filterManager.dispose();
  };

  return RenderTexture;
}(_texture2.default);

exports.default = RenderTexture;

/***/ },
/* 104 */
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
 * Represents a rectangle that is rendered using WebGL
 * @class
 * @memberof PhotoEditorSDK.Engine
 * @ignore
 */
/* istanbul ignore next */
var Quad = function () {
  function Quad(renderer) {
    (0, _classCallCheck3.default)(this, Quad);

    this._renderer = renderer;

    this._vertices = new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);

    this._uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);

    this._indices = new Uint16Array([0, 1, 2, 0, 3, 2]);

    this._colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    this._initBuffers();
    this._uploadBuffers();
  }

  /**
   * Maps the given rectangles to the quad
   * @param  {Rectangle} rect1
   * @param  {Rectangle} rect2
   */


  Quad.prototype.map = function map(rect1, rect2) {
    var x = rect2.x,
        y = rect2.y;

    // Update the UVs
    // We don't have any translation, so these four
    // values are all we need

    this._uvs[2] = rect2.width / rect1.width;
    this._uvs[4] = this._uvs[2];
    this._uvs[5] = rect2.height / rect1.height;
    this._uvs[7] = this._uvs[5];

    // Update the vertices
    this._vertices[0] = x;
    this._vertices[1] = y;

    this._vertices[2] = x + rect2.width;
    this._vertices[3] = y;

    this._vertices[4] = this._vertices[2];
    this._vertices[5] = y + rect2.height;

    this._vertices[6] = x;
    this._vertices[7] = this._vertices[5];

    this._uploadBuffers();
  };

  /**
   * Initializes the buffers
   * @private
   */


  Quad.prototype._initBuffers = function _initBuffers() {
    var gl = this._renderer.getContext();

    // Init vertex buffer
    this._vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, (8 + 8 + 16) * 4, gl.DYNAMIC_DRAW);

    this._indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indices, gl.STATIC_DRAW);
  };

  /**
   * Uploads the buffers
   * @private
   */


  Quad.prototype._uploadBuffers = function _uploadBuffers() {
    var gl = this._renderer.getContext();

    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this._vertices);
    gl.bufferSubData(gl.ARRAY_BUFFER, 8 * 4, this._uvs);
    gl.bufferSubData(gl.ARRAY_BUFFER, (8 + 8) * 4, this._colors);
  };

  Quad.prototype.getVertexBuffer = function getVertexBuffer() {
    return this._vertexBuffer;
  };

  Quad.prototype.getIndexBuffer = function getIndexBuffer() {
    return this._indexBuffer;
  };

  /**
   * Cleans up this Quad's buffers
   */


  Quad.prototype.dispose = function dispose() {
    var gl = this._renderer.getContext();
    gl.deleteBuffer(this._vertexBuffer);
    gl.deleteBuffer(this._indexBuffer);
  };

  return Quad;
}();

exports.default = Quad;

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

var _globals = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Represents the UV coordinates of a texture
 * @class
 * @memberof PhotoEditorSDK.Engine
 */
var TextureUVs = function () {
  /**
   * Creates a TextureUVs instance
   */
  function TextureUVs() {
    (0, _classCallCheck3.default)(this, TextureUVs);

    this._uvs = [new _globals.Vector2(0, 0), new _globals.Vector2(1, 0), new _globals.Vector2(1, 1), new _globals.Vector2(0, 1)];
  }

  /**
   * Updates the UVs based on the given baseframe
   * @param  {Rectangle} frame
   * @param  {Rectangle} baseFrame
   */


  TextureUVs.prototype.update = function update(frame, baseFrame) {
    // Upper left
    var uv = this._uvs[0];
    uv.x = frame.x / baseFrame.width;
    uv.y = frame.y / baseFrame.height;

    // Upper right
    uv = this._uvs[1];
    uv.x = (frame.x + frame.width) / baseFrame.width;
    uv.y = frame.y / baseFrame.height;

    // Lower right
    uv = this._uvs[2];
    uv.x = (frame.x + frame.width) / baseFrame.width;
    uv.y = (frame.y + frame.height) / baseFrame.height;

    // Lower left
    uv = this._uvs[3];
    uv.x = frame.x / baseFrame.width;
    uv.y = (frame.y + frame.height) / baseFrame.height;
  };

  /**
   * Returns the UV coordinates for the given index
   * @param  {Number} index
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  TextureUVs.prototype.getUVsAt = function getUVsAt(index) {
    return this._uvs[index];
  };

  /**
   * Returns the UV coordinates
   * @return {Array.<PhotoEditorSDK.Math.Vector2>}
   */


  TextureUVs.prototype.getUVs = function getUVs() {
    return this._uvs;
  };

  return TextureUVs;
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

exports.default = TextureUVs;

/***/ },
/* 106 */
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

/**
 * A couple of utility functions
 * @type {Object}
 */
var Utils = {
  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object for all destination properties that resolve to undefined. Once a
   * property is set, additional values of the same property are ignored.
   * @param  {Object} object
   * @param  {Object} ...sources
   * @return {Object}
   */
  defaults: function defaults(object) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    // Shallow clone
    var newObject = {};
    for (var key in object) {
      newObject[key] = object[key];
    }

    // Clone sources
    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];
      for (var _key2 in source) {
        if (typeof newObject[_key2] === 'undefined') {
          newObject[_key2] = source[_key2];
        }
      }
    }

    return newObject;
  },

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object. Subsequent sources overwrite property assignments of previous
   * sources.
   * @param {Object} object
   * @param {Object} ...sources
   * @return {Object}
   */
  extend: function extend(object) {
    for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
      sources[_key3 - 1] = arguments[_key3];
    }

    // Shallow clone
    var newObject = {};
    for (var key in object) {
      newObject[key] = object[key];
    }

    // Extend sources
    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];
      for (var _key4 in source) {
        newObject[_key4] = source[_key4];
      }
    }

    return newObject;
  }
};

exports.default = Utils;

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
 * An ArrayStream provides methods for working with a byte array
 * @class
 * @memberof PhotoEditorSDK
 * @ignore
 */
/* istanbul ignore next */
var ArrayStream = function () {
  /**
   * Creates an ArrayStream
   * @param  {Array} buf
   */
  function ArrayStream(buf) {
    (0, _classCallCheck3.default)(this, ArrayStream);

    this._head = 0;
    this._buf = buf;
  }

  /**
   * Returns the value of the following 8 bit integer
   * @return {Number}
   */


  ArrayStream.prototype.peekInt8 = function peekInt8() {
    return this._buf[this._head];
  };

  /**
   * Returns the value of the following 16 bit integer
   * @param  {Boolean} [littleEndian = false]
   * @return {Number}
   */


  ArrayStream.prototype.peekInt16 = function peekInt16() {
    var littleEndian = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var a = this._buf[this._head];
    var b = this._buf[this._head + 1];
    if (!littleEndian) {
      return (a << 8) + b;
    } else {
      return (b << 8) + a;
    }
  };

  /**
   * Returns the value of the following 24 bit integer
   * @param  {Boolean} [littleEndian = false]
   * @return {Number}
   */


  ArrayStream.prototype.peekInt24 = function peekInt24() {
    var littleEndian = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var a = this._buf[this._head];
    var b = this._buf[this._head + 1];
    var c = this._buf[this._head + 2];
    if (!littleEndian) {
      return (a << 16) + (b << 8) + c;
    } else {
      return (c << 16) + (b << 8) + a;
    }
  };

  /**
   * Returns the value of the following 32 bit integer
   * @param  {Boolean} [littleEndian = false]
   * @return {Number}
   */


  ArrayStream.prototype.peekInt32 = function peekInt32() {
    var littleEndian = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var a = this._buf[this._head];
    var b = this._buf[this._head + 1];
    var c = this._buf[this._head + 2];
    var d = this._buf[this._head + 3];
    if (!littleEndian) {
      return (a << 32) + (b << 16) + (c << 8) + d;
    } else {
      return (d << 32) + (c << 16) + (b << 8) + a;
    }
  };

  /**
   * Writes the given 16 bit integer at the current head position
   * @param  {Number} num
   */


  ArrayStream.prototype.writeInt16 = function writeInt16(num) {
    this._buf[this._head] = num >> 8; // upper
    this._buf[this._head + 1] = num & 0xff; // lower
  };

  /**
   * Returns the value of the following 8 bit integer and moves the head by 1 byte
   * @return {Number}
   */


  ArrayStream.prototype.readInt8 = function readInt8() {
    var num = this.peekInt8();
    this._head += 1;
    return num;
  };

  /**
   * Returns the value of the following 16 bit integer and moves the head by 2 bytes
   * @param  {Boolean} [littleEndian = false]
   * @return {Number}
   */


  ArrayStream.prototype.readInt16 = function readInt16() {
    var littleEndian = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var num = this.peekInt16(littleEndian);
    this._head += 2;
    return num;
  };

  /**
   * Returns the value of the following 24 bit integer and moves the head by 3 bytes
   * @param  {Boolean} [littleEndian = false]
   * @return {Number}
   */


  ArrayStream.prototype.readInt24 = function readInt24() {
    var littleEndian = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var num = this.peekInt24(littleEndian);
    this._head += 3;
    return num;
  };

  /**
   * Returns the value of the following 32 bit integer and moves the head by 4 bytes
   * @param  {Boolean} [littleEndian = false]
   * @return {Number}
   */


  ArrayStream.prototype.readInt32 = function readInt32() {
    var littleEndian = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var num = this.peekInt32(littleEndian);
    this._head += 4;
    return num;
  };

  /**
   * Reads a string with the given length
   * @param  {Number} length
   * @return {String}
   */


  ArrayStream.prototype.readString = function readString(length) {
    var str = '';
    for (var i = 0; i < length; i++) {
      var character = this.readInt8();
      str += String.fromCharCode(character);
    }
    return str;
  };

  /**
   * Returns the current head position
   * @return {Number}
   */


  ArrayStream.prototype.getHead = function getHead() {
    return this._head;
  };

  /**
   * Sets the head position
   * @param {Number} head
   */


  ArrayStream.prototype.setHead = function setHead(head) {
    this._head = head;
  };

  return ArrayStream;
}();

exports.default = ArrayStream;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _constants = __webpack_require__(9);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _exif = __webpack_require__(42);

var _exif2 = _interopRequireDefault(_exif);

var _nodeGlExporter = __webpack_require__(109);

var _nodeGlExporter2 = _interopRequireDefault(_nodeGlExporter);

var _configurable = __webpack_require__(14);

var _configurable2 = _interopRequireDefault(_configurable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 * @alias PhotoEditorSDK.ImageExporter
 * @private
 */
var ImageExporter = function (_Configurable) {
  (0, _inherits3.default)(ImageExporter, _Configurable);

  function ImageExporter(sdk) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, ImageExporter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Configurable.call(this, options));

    _this._sdk = sdk;
    return _this;
  }

  /**
   * Exports the image from the given canvas with the given options
   * @return {Promise}
   */


  ImageExporter.prototype.export = function _export() {
    var _this2 = this;

    var renderer = this._sdk.getRenderer();
    var _options = this._options,
        renderType = _options.renderType,
        imageFormat = _options.imageFormat,
        quality = _options.quality;


    return this.validateSettings().then(function () {
      return _this2._prepareSDK();
    }).then(function (texture) {
      var canvas = renderer.getCanvas();
      if (renderer.isOfType(_constants.RendererType.WEBGL)) {
        canvas = _this2._createCanvasFromTexture(texture);
      }

      var result = void 0;
      if (renderType === _constants.RenderType.IMAGE || renderType === _constants.RenderType.DATAURL) {
        if (typeof window === 'undefined') {
          // Quality not supported in node environment / node-canvas
          result = canvas.toDataURL(imageFormat);
        } else {
          result = canvas.toDataURL(imageFormat, quality);
        }

        // When image's `src` attribute is a jpeg data url, we can restore
        // the exif information
        var image = _this2._sdk.getImage();
        if (_exif2.default.isJPEG(image.src) && _exif2.default.isJPEG(result)) {
          var exif = _this2._sdk.getExif();
          if (exif) {
            result = exif.restoreExifTags(result);
          }
        }
      }

      if (renderer.isOfType(_constants.RendererType.WEBGL) && typeof Canvas !== 'undefined' && canvas instanceof Canvas) {
        _nodeGlExporter2.default.renderContextToCanvas(renderer.getContext(), canvas);
      }

      if (renderType === _constants.RenderType.IMAGE) {
        var outputImage = void 0;

        if (true) {
          outputImage = new Image();
        }

        outputImage.src = result;
        return outputImage;
      } else if (renderType === _constants.RenderType.DATAURL) {
        return result;
      } else if (renderType === _constants.RenderType.BUFFER) {
        return canvas.toBuffer();
      } else if (renderType === _constants.RenderType.MSBLOB) {
        return canvas.msToBlob();
      } else if (renderType === _constants.RenderType.BLOB) {
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            resolve(blob);
          }, imageFormat, quality);
        });
      }
    }).then(function (result) {
      return _this2._restoreSDK().then(function () {
        return result;
      });
    });
  };

  /**
   * Prepares the SDK for exporting
   * @private
   */


  ImageExporter.prototype._prepareSDK = function _prepareSDK() {
    var renderer = this._sdk.getRenderer();

    this._sdkSettings = {
      dimensions: renderer.getDimensions().clone(),
      textureQuality: this._sdk.getTextureQuality(),
      pixelRatio: this._sdk.getPixelRatio(),
      renderMode: this._sdk.getRenderMode()
    };

    this._sdk.setRenderMode('export');
    this._sdk.setTextureQuality(1);

    var resizeCanvas = renderer.isOfType(_constants.RendererType.CANVAS);
    renderer.setPixelRatio(1);
    renderer.resizeTo(this._sdk.getFinalDimensions(), resizeCanvas);

    this._sdk.setAllOperationsToDirty(true);

    var stack = this._sdk.getOperationsStack();
    stack.forEach(function (operation) {
      operation.disposeRenderTextures();
    });
    stack.disableCache();

    return this._sdk.render();
  };

  /**
   * Restores the previous SDK options
   * @private
   */


  ImageExporter.prototype._restoreSDK = function _restoreSDK() {
    var stack = this._sdk.getOperationsStack();
    stack.enableCache();

    this._sdk.setRenderMode(this._sdkSettings.renderMode);
    var renderer = this._sdk.getRenderer();

    var resizeCanvas = renderer.isOfType(_constants.RendererType.CANVAS);
    renderer.setPixelRatio(this._sdkSettings.pixelRatio);
    renderer.resizeTo(this._sdkSettings.dimensions, resizeCanvas);

    this._sdk.setTextureQuality(this._sdkSettings.pixelRatio);
    this._sdk.setAllOperationsToDirty(true);
    return this._sdk.render();
  };

  /**
   * Creates a canvas from the given Texture by attaching it to an FBO and using
   * gl.readPixels() to read the pixels. It then writes the pixel data to a new
   * 2D (not hardware-accelerated) canvas and calls .toDataURL() on it.
   * @param  {PhotoEditorSDK.Engine.Texture} texture
   * @return {HTMLCanvasElement}
   * @private
   */


  ImageExporter.prototype._createCanvasFromTexture = function _createCanvasFromTexture(texture) {
    var renderer = this._sdk.getRenderer();
    var finalDimensions = this._sdk.getFinalDimensions();

    var gl = this._sdk.getRenderer().getContext();

    // Create temporary framebuffer
    var fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

    // Attach output texture to FBO
    var glTexture = texture.getBaseTexture().getGLTextureForRenderer(renderer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, glTexture, 0);

    // Read pixels from FBO
    var pixels = new Uint8Array(finalDimensions.x * finalDimensions.y * 4);
    gl.readPixels(0, 0, finalDimensions.x, finalDimensions.y, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    // Create canvas with dimensions of output texture
    var canvas = _utils2.default.createCanvas();
    canvas.width = finalDimensions.x;
    canvas.height = finalDimensions.y;

    // Copy pixel data over
    var context = canvas.getContext('2d');
    var imageData = context.createImageData(finalDimensions.x, finalDimensions.y);

    imageData.data.set(pixels);

    // Render to canvas
    context.putImageData(imageData, 0, 0);

    // Delete FBO
    gl.deleteFramebuffer(fbo);

    return canvas;
  };

  return ImageExporter;
}(_configurable2.default); /* global Image, WEBPACK */
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


ImageExporter.prototype.availableOptions = {
  renderType: { type: _constants.OptionType.STRING, available: _utils2.default.values(_constants.RenderType), default: _constants.RenderType.IMAGE },
  imageFormat: { type: _constants.OptionType.STRING, available: _utils2.default.values(_constants.ImageFormat), default: _constants.ImageFormat.PNG },
  quality: { type: _constants.OptionType.NUMBER, default: 0.8 }
};

exports.default = ImageExporter;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

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

/* istanbul ignore next */
var NodeGLExporter = function () {
  function NodeGLExporter() {
    (0, _classCallCheck3.default)(this, NodeGLExporter);
  }

  /**
   * Creates a new `node-canvas` Canvas and renders the image from the `gl` context onto it
   * @param  {WebGLRenderingContext2D} gl
   * @param  {Canvas} canvas
   */
  NodeGLExporter.renderContextToCanvas = function renderContextToCanvas(gl, canvas) {
    var width = canvas.width,
        height = canvas.height;

    var pixels = new Uint8Array(width * height * 4);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    var context = canvas.getContext('2d');
    var imageData = new Canvas.ImageData(width, height);

    var i = 0;
    pixels.forEach(function () {
      imageData.data[i] = pixels[i];
      i++;
    });

    context.putImageData(imageData, 0, 0);
  };

  return NodeGLExporter;
}();

exports.default = NodeGLExporter;

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

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
var POTRenderer = function () {
  function POTRenderer() {
    (0, _classCallCheck3.default)(this, POTRenderer);

    this._container = new _globals.Engine.Container();
    this._sprite = new _globals.Engine.Sprite();
    this._container.addChild(this._sprite);
  }

  /**
   * Renders the given input texture to a POT texture
   * @param  {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param  {PhotoEditorSDK.Engine.Sprite} inputSprite
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   */


  POTRenderer.prototype.render = function render(renderer, inputSprite, inputTexture) {
    if (!this._renderTexture) {
      this._renderTexture = new _globals.Engine.RenderTexture(renderer);
    }

    var textureDimensions = inputTexture.getDimensions();
    this._resizeRenderTexture(textureDimensions);
    var newDimensions = this._renderTexture.getDimensions();
    this._sprite.setTexture(inputTexture);
    this._sprite.updateTransform();
    this._renderTexture.render(this._container);

    this._updateSprite(renderer, inputSprite, textureDimensions, newDimensions);
  };

  /**
   * Sets the input sprite's texture and makes sure only the relevant part of the
   * render texture is rendered
   * @param  {PhotoEditorSDK.Engine.Sprite} inputSprite
   * @param  {PhotoEditorSDK.Math.Vector2} initialDimensions
   * @param  {PhotoEditorSDK.Math.Vector2} newDimensions
   * @private
   */


  POTRenderer.prototype._updateSprite = function _updateSprite(renderer, inputSprite, initialDimensions, newDimensions) {
    inputSprite.setTexture(this._renderTexture);

    this._renderTexture.setFrame(new _globals.Rectangle(0, 0, initialDimensions.x, initialDimensions.y));
  };

  /**
   * Resizes the render texture to the next power of two dimensions of the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   * @private
   */


  POTRenderer.prototype._resizeRenderTexture = function _resizeRenderTexture(dimensions) {
    this._renderTexture.resizeTo(new _globals.Vector2(_globals.Utils.nextHighestPOT(dimensions.x), _globals.Utils.nextHighestPOT(dimensions.y)));
  };

  return POTRenderer;
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

exports.default = POTRenderer;

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

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERSION_CHECK_FN = 'imglySDKVersionCallback'; /*
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

var VERSION_CHECK_URL = 'https://www.photoeditorsdk.com/version.json?sdk=html5&jsoncallback=' + VERSION_CHECK_FN;

/**
 * Checks whether there is a new version of the SDK available
 * @class
 * @memberof PhotoEditorSDK
 * @ignore
 */
/* istanbul ignore next */

var VersionChecker = function () {
  /**
   * Creates a new VersionChecker
   * @param  {String} version
   */
  function VersionChecker(version) {
    (0, _classCallCheck3.default)(this, VersionChecker);

    this._version = version;
    this._check();
  }

  /**
   * Checks if this version of the SDK is outdated
   * @private
   */


  VersionChecker.prototype._check = function _check() {
    var _this = this;

    if (typeof document === 'undefined') {
      return _globals.Log.info(this.constructor.name, 'Not in browser environment. Version check skipped.');
    }

    var self = this;
    window[VERSION_CHECK_FN] = function (response) {
      if (response.outdated) {
        _globals.Log.warn(_this.constructor.name, 'Your Version ' + self._version + ' is outdated. Current version is ' + response.version + '.');
      }
    };

    var script = document.createElement('script');
    script.src = VERSION_CHECK_URL + '&version=' + this._version;
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  return VersionChecker;
}();

exports.default = VersionChecker;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _adjustmentsFilter = __webpack_require__(77);

var _adjustmentsFilter2 = _interopRequireDefault(_adjustmentsFilter);

var _clarityFilter = __webpack_require__(113);

var _clarityFilter2 = _interopRequireDefault(_clarityFilter);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies adjustments (brightness, saturation, contrast) to the image
 * @class
 * @alias Operations.AdjustmentsOperation
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK
 */
var AdjustmentsOperation = function (_Operation) {
  (0, _inherits3.default)(AdjustmentsOperation, _Operation);

  /**
   * Creates a new AdjustmentsOperation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   * @param  {Number} [options.brightness = 0]
   * @param  {Number} [options.saturation = 1]
   * @param  {Number} [options.exposure = 0]
   * @param  {Number} [options.contrast = 1]
   * @param  {Number} [options.shadows = 0]
   * @param  {Number} [options.highlights = 1]
   */
  function AdjustmentsOperation() {
    (0, _classCallCheck3.default)(this, AdjustmentsOperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Operation.call.apply(_Operation, [this].concat(args)));

    _this._clarityFilter = new _clarityFilter2.default();
    _this._filter = new _adjustmentsFilter2.default();
    _this._sprite.setFilters([_this._clarityFilter, _this._filter]);
    return _this;
  }

  /**
   * Applies this operation
   * @param  {PhotoEditorSDK} sdk
   * @return {Promise} renderer
   * @private
   */


  AdjustmentsOperation.prototype._render = function _render(sdk) {
    var dimensions = sdk.getDimensions();
    dimensions.x = 1.0 / dimensions.x;
    dimensions.y = 1.0 / dimensions.y;
    this._clarityFilter.set({
      clarity: this._options.clarity,
      texSize: dimensions
    });

    this._filter.set({
      brightness: this._options.brightness,
      saturation: this._options.saturation,
      contrast: this._options.contrast,
      gamma: this._options.gamma,
      exposure: this._options.exposure,
      shadows: this._options.shadows,
      highlights: this._options.highlights
    });

    if (this._options.clarity !== 0) {
      this._sprite.setFilters([this._clarityFilter, this._filter]);
    } else {
      this._sprite.setFilters([this._filter]);
    }

    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Disposes this operation
   */


  AdjustmentsOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);
    this._filter.dispose();
    this._clarityFilter.dispose();
  };

  return AdjustmentsOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
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

AdjustmentsOperation.identifier = 'adjustments';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
AdjustmentsOperation.prototype.availableOptions = {
  brightness: { type: _constants.OptionType.NUMBER, default: 0 },
  saturation: { type: _constants.OptionType.NUMBER, default: 1.0 },
  contrast: { type: _constants.OptionType.NUMBER, default: 1.0 },
  gamma: { type: _constants.OptionType.NUMBER, default: 1.0 },
  exposure: { type: _constants.OptionType.NUMBER, default: 0.0 },
  shadows: { type: _constants.OptionType.NUMBER, default: 0.0 },
  highlights: { type: _constants.OptionType.NUMBER, default: 1.0 },
  clarity: { type: _constants.OptionType.NUMBER, default: 0.0 }
};

exports.default = AdjustmentsOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _stackBlur = __webpack_require__(35);

var _stackBlur2 = _interopRequireDefault(_stackBlur);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType; /*
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

var ClarityFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(ClarityFilter, _Engine$Filter);

  function ClarityFilter() {
    (0, _classCallCheck3.default)(this, ClarityFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(224);

    _this._lastClarity = null;

    _this._blurredRenderTarget = new _globals.Engine.CanvasRenderTarget(100, 100, 1);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer.
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  ClarityFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var inputDimensions = inputTarget.getDimensions();
    var dimensionsChanged = !this._blurredRenderTarget.getDimensions().equals(inputDimensions);

    this._blurredRenderTarget.setPixelRatio(inputTarget.getPixelRatio());
    this._blurredRenderTarget.resizeTo(inputTarget.getDimensions());

    if (!this._outputRenderTexture) {
      this._outputRenderTexture = new _globals.Engine.RenderTexture(renderer, inputTarget.getWidth(), inputTarget.getHeight(), inputTarget.getPixelRatio());
    }

    if (dimensionsChanged) {
      this._blurImage(inputTarget);
    }

    this._applyClarity(inputTarget, outputTarget);
  };

  /**
   * Creates a blurred copy of the image.
   * @param  {CanvasRenderTarget} inputTarget
   * @return {Canvas}
   * @private
   */


  ClarityFilter.prototype._blurImage = function _blurImage(inputTarget) {
    var inputCanvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();

    var blurryImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    _stackBlur2.default.stackBlurCanvasRGBA(blurryImageData, 0, 0, inputCanvas.width, inputCanvas.height, 1);

    var blurryContext = this._blurredRenderTarget.getContext();
    blurryContext.putImageData(blurryImageData, 0, 0);
  };

  /**
   * Applies the final clarity filter to the input canvas
   * @param {CanvasRenderTarget} inputTarget
   * @param {CanvasRenderTarget} outputTarget
   * @private
   */


  ClarityFilter.prototype._applyClarity = function _applyClarity(inputTarget, outputTarget) {
    var outputContext = outputTarget.getContext();
    var inputCanvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var blurredContext = this._blurredRenderTarget.getContext();
    var clarity = this._options.clarity;
    var inputImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    var pixels = inputImageData.data;
    var blurredPixels = blurredContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height).data;
    // Due to speed we precalculate alot
    var saturation = Math.max(0.2 * this._options.clarity, 0.0);
    var inverseSaturation = 1 - saturation;
    var factor = 1.0 + clarity;
    var inverseFactor = 1 - (1.0 + clarity);
    // Here we calculate the unsharp mask by substracting the blured image from the
    // unblurred, and the stronger the effect is the less saturated the colors will be.
    // That enhances the visual effect.
    for (var i = 0; i < inputCanvas.width * inputCanvas.height * 4; i += 4) {
      var r = blurredPixels[i] * inverseFactor + pixels[i] * factor;
      var g = blurredPixels[i + 1] * inverseFactor + pixels[i + 1] * factor;
      var b = blurredPixels[i + 2] * inverseFactor + pixels[i + 2] * factor;
      var luminance = r * 0.2125 + g * 0.7154 + b * 0.0721;
      var luminanceSaturation = luminance * saturation;
      pixels[i] = r * inverseSaturation + luminanceSaturation;
      pixels[i + 1] = g * inverseSaturation + luminanceSaturation;
      pixels[i + 2] = b * inverseSaturation + luminanceSaturation;
    }

    outputContext.putImageData(inputImageData, 0, 0);
  };

  return ClarityFilter;
}(_globals.Engine.Filter);

ClarityFilter.prototype.availableOptions = {
  clarity: { type: OptionType.NUMBER, default: 0, uniformType: UniformType.FLOAT },
  texSize: { type: OptionType.VECTOR2, default: new _globals.Vector2(100, 100), uniformType: UniformType.FLOAT2 }
};

exports.default = ClarityFilter;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

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

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType;

var BorderFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(BorderFilter, _Engine$Filter);

  function BorderFilter() {
    (0, _classCallCheck3.default)(this, BorderFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(226);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  BorderFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var outputContext = outputTarget.getContext();

    var _options = this._options,
        color = _options.color,
        thickness = _options.thickness;


    outputContext.save();
    outputContext.drawImage(canvas, 0, 0);
    outputContext.beginPath();
    outputContext.lineWidth = thickness * 2 * (canvas.height / this.getTextureSize().y);
    outputContext.strokeStyle = color.toRGBA();
    outputContext.rect(0, 0, canvas.width, canvas.height);
    outputContext.stroke();
    outputContext.restore();
  };

  return BorderFilter;
}(_globals.Engine.Filter);

BorderFilter.prototype.availableOptions = {
  color: { type: OptionType.COLOR, default: _globals.Color.BLACK, uniformType: UniformType.FLOAT4 },
  thickness: { type: OptionType.NUMBER, default: 0, uniformType: UniformType.FLOAT },
  textureSize: { type: OptionType.VECTOR2, default: new _globals.Vector2(0, 0), uniformType: UniformType.FLOAT2 }
};

/**
 * An operation that can draw a border around the canvas
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var BorderOperation = function (_Operation) {
  (0, _inherits3.default)(BorderOperation, _Operation);

  /**
   * Creates a new BorderOperation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   */
  function BorderOperation() {
    (0, _classCallCheck3.default)(this, BorderOperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Operation.call.apply(_Operation, [this].concat(args)));

    _this2._filter = new BorderFilter();
    _this2._sprite.setFilters([_this2._filter]);
    return _this2;
  }

  /**
   * Renders the border operation
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @private
   */


  BorderOperation.prototype._render = function _render(inputTexture) {
    var textureDimensions = inputTexture.getDimensions();
    var _options2 = this._options,
        color = _options2.color,
        thickness = _options2.thickness;

    // Update uniforms

    this._filter.set({
      color: color,
      thickness: thickness * textureDimensions.min(),
      textureSize: textureDimensions
    });

    this._renderTexture.render(this._container);

    return _globals.Promise.resolve();
  };

  /**
   * Disposes this operation
   */


  BorderOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);
    this._filter.dispose();
  };

  return BorderOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


BorderOperation.identifier = 'border';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
BorderOperation.prototype.availableOptions = {
  color: { type: OptionType.COLOR, default: new _globals.Color(0, 0, 0, 1) },
  thickness: { type: OptionType.NUMBER, default: 0.05, minimum: 0, maximum: 0.5 }
};

exports.default = BorderOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can crop out a part of the image
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
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

var CropOperation = function (_Operation) {
  (0, _inherits3.default)(CropOperation, _Operation);

  function CropOperation() {
    (0, _classCallCheck3.default)(this, CropOperation);
    return (0, _possibleConstructorReturn3.default)(this, _Operation.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Crops the image
   * @param {PhotoEditorSDK.Engine.RenderTexture} inputTexture
   * @returns {Promise}
   * @override
   * @private
   */
  CropOperation.prototype._render = function _render(inputTexture) {
    this._sprite.setRotation(0);

    var inputDimensions = inputTexture.getDimensions();
    var _options = this._options,
        end = _options.end,
        start = _options.start,
        rotation = _options.rotation,
        scale = _options.scale,
        dimensions = _options.dimensions;


    var fixedDimensionsScale = 1;
    var cropDimensions = end.clone().subtract(start).multiply(inputDimensions);
    if (dimensions !== null) {
      fixedDimensionsScale = dimensions.x / cropDimensions.x;
    }
    inputDimensions.multiply(fixedDimensionsScale);

    var finalScale = scale * fixedDimensionsScale;

    this._sprite.setAnchor(0.5, 0.5);
    this._sprite.setRotation(rotation);
    this._sprite.setScale(finalScale, finalScale);
    this._sprite.setPosition(inputDimensions.clone().divide(2).subtract(start.clone().multiply(inputDimensions)));

    // Render the container to this Operation's RenderTexture
    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Returns the dimensions the given dimensions will have after this operation
   * has been applied
   * @param {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   * @override
   */


  CropOperation.prototype.getNewDimensions = function getNewDimensions(inputDimensions) {
    var _options2 = this._options,
        start = _options2.start,
        end = _options2.end,
        dimensions = _options2.dimensions;


    if (dimensions) {
      return dimensions.clone();
    }

    return end.clone().multiply(inputDimensions).subtract(start.clone().multiply(inputDimensions)).floor();
  };

  /**
   * Flips this operation into the given direction
   * @param  {String} direction
   */


  CropOperation.prototype.flip = function flip(direction) {
    var _options3 = this._options,
        start = _options3.start,
        end = _options3.end;

    var tmpStart = start.clone();

    if (direction === 'horizontal') {
      start.set(1.0 - end.x, start.y);
      end.set(1.0 - tmpStart.x, end.y);
    } else if (direction === 'vertical') {
      start.set(start.x, 1.0 - end.y);
      end.set(end.x, 1.0 - tmpStart.y);
    }
  };

  /**
   * Rotates this operation with the given degrees
   * @param {Number} degrees
   */


  CropOperation.prototype.rotate = function rotate(degrees) {
    var _options4 = this._options,
        start = _options4.start,
        end = _options4.end;

    var degreesDifference = (degrees + 360) % 360;

    var tempStart = start.clone();
    if (degreesDifference === 90) {
      start.set(1.0 - end.y, tempStart.x);
      end.set(1.0 - tempStart.y, end.x);
    } else if (degreesDifference === 270) {
      start.set(tempStart.y, 1.0 - end.x);
      end.set(end.y, 1.0 - tempStart.x);
    }
  };

  return CropOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


CropOperation.identifier = 'crop';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
CropOperation.prototype.availableOptions = {
  start: { type: OptionType.VECTOR2, default: new _globals.Vector2(0, 0) },
  end: { type: OptionType.VECTOR2, default: new _globals.Vector2(1, 1) },
  scale: { type: OptionType.NUMBER, default: 1 },
  rotation: { type: OptionType.NUMBER, default: 0 },
  dimensions: { type: OptionType.VECTOR2, default: null }
};

exports.default = CropOperation;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _vector = __webpack_require__(19);

var _vector2 = _interopRequireDefault(_vector);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

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

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can rotate and flip an image depending on the given EXIF information
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var ExifOrientationOperation = function (_Operation) {
  (0, _inherits3.default)(ExifOrientationOperation, _Operation);

  function ExifOrientationOperation() {
    (0, _classCallCheck3.default)(this, ExifOrientationOperation);
    return (0, _possibleConstructorReturn3.default)(this, _Operation.apply(this, arguments));
  }

  /**
   * Returns the rotation
   * @return {Number}
   * @private
   */
  ExifOrientationOperation.prototype._getRotation = function _getRotation() {
    var degrees = 0;
    switch (this.getTags().Orientation) {
      case 7:
      case 8:
        degrees = -90;
        break;
      case 3:
      case 4:
        degrees = -180;
        break;
      case 5:
      case 6:
        degrees = 90;
        break;
    }
    return degrees;
  };

  /**
   * Checks if the image needs to be flipped vertically
   * @return {Boolean}
   * @private
   */


  ExifOrientationOperation.prototype._getFlipVertically = function _getFlipVertically() {
    var _getTags = this.getTags(),
        Orientation = _getTags.Orientation;

    return [5, 7].indexOf(Orientation) !== -1;
  };

  /**
   * Checks if the image needs to be flipped horizontally
   * @return {Boolean}
   * @private
   */


  ExifOrientationOperation.prototype._getFlipHorizontally = function _getFlipHorizontally() {
    var _getTags2 = this.getTags(),
        Orientation = _getTags2.Orientation;

    return [2, 4].indexOf(Orientation) !== -1;
  };

  /**
   * Returns the options based on the EXIF orientation
   * @return {Object}
   * @private
   */


  ExifOrientationOperation.prototype._getFinalOptions = function _getFinalOptions() {
    return {
      rotation: this._getRotation(),
      flipVertically: this._getFlipVertically(),
      flipHorizontally: this._getFlipHorizontally()
    };
  };

  /**
   * Rotates and/or flips the image
   * @param  {PhotoEditorSDK} sdk
   * @returns {Promise}
   * @override
   * @private
   */


  ExifOrientationOperation.prototype._render = function _render(sdk) {
    var options = this._getFinalOptions();
    var actualDegrees = options.rotation % 360;
    var radians = actualDegrees * (Math.PI / 180);

    this._sprite.setScale(options.flipHorizontally ? -1 : 1, options.flipVertically ? -1 : 1);
    this._sprite.setRotation(radians);
    this._sprite.setAnchor(0.5, 0.5);
    this._sprite.updateTransform();

    var bounds = this._sprite.getBounds();
    this._renderTexture.resizeTo(new _vector2.default(bounds.width, bounds.height));

    // Make sure we're rendering to top left corner
    this._sprite.setPosition(this._renderTexture.getDimensions().divide(2));

    // Draw
    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Returns the dimensions the given dimensions will have after this operation
   * has been applied
   * @param {PhotoEditorSDK.Math.Vector2} dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   * @override
   */


  ExifOrientationOperation.prototype.getNewDimensions = function getNewDimensions(dimensions) {
    var options = this._getFinalOptions();
    dimensions = dimensions.clone();
    if (options.rotation % 180) {
      dimensions.flip();
    }
    return dimensions;
  };

  return ExifOrientationOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


ExifOrientationOperation.identifier = 'exif-orientation';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
ExifOrientationOperation.prototype.availableOptions = {
  tags: { type: OptionType.OBJECT, default: {} }
};

exports.default = ExifOrientationOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _identityFilter = __webpack_require__(78);

var _identityFilter2 = _interopRequireDefault(_identityFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can apply a selected filter
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
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

var FilterOperation = function (_Operation) {
  (0, _inherits3.default)(FilterOperation, _Operation);

  function FilterOperation() {
    (0, _classCallCheck3.default)(this, FilterOperation);
    return (0, _possibleConstructorReturn3.default)(this, _Operation.apply(this, arguments));
  }

  /**
   * Renders this operation
   * @param {PhotoEditorSDK.Engine.Texture} inputTexture
   * @return {Promise}
   * @private
   */
  FilterOperation.prototype._render = function _render(inputTexture) {
    return this._selectedFilter.render(this._sdk, inputTexture, this._renderTexture);
  };

  /**
   * Applies this operation
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @return {Promise}
   * @override
   */


  FilterOperation.prototype.render = function render(inputTexture) {
    if (this._selectedFilter.getDirty()) {
      this.setDirty(true);
    }

    if (!this.getEnabled() || this._selectedFilter.constructor.isIdentity) {
      return _globals.Promise.resolve(inputTexture);
    }

    return _Operation.prototype.render.call(this, inputTexture);
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @override
   */


  FilterOperation.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer) {
    _Operation.prototype.setDirtyForRenderer.call(this, dirty, renderer);
    this._selectedFilter.setDirtyForRenderer(dirty, renderer);
  };

  /**
   * Frees the memory
   */


  FilterOperation.prototype.disposeRenderTextures = function disposeRenderTextures() {
    _Operation.prototype.disposeRenderTextures.call(this);
    if (this._selectedFilter) {
      this._selectedFilter.disposeRenderTextures();
    }
  };

  /**
   * Disposes this operation
   */


  FilterOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);
    if (this._selectedFilter) {
      this._selectedFilter.dispose();
    }
  };

  return FilterOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


FilterOperation.identifier = 'filter';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
FilterOperation.prototype.availableOptions = {
  intensity: {
    type: OptionType.NUMBER,
    default: 1,
    setter: function setter(intensity) {
      this._selectedFilter && this._selectedFilter.setIntensity(intensity);
      return intensity;
    }
  },
  filter: {
    type: OptionType.OBJECT,
    default: new _identityFilter2.default(),
    setter: function setter(Filter) {
      if (this._selectedFilter) {
        this._selectedFilter.dispose();
        this._selectedFilter = null;
      }

      this._selectedFilter = Filter;
      if (typeof this._options.intensity !== 'undefined') {
        this._selectedFilter.set({
          intensity: this._options.intensity
        });
      }
      return Filter;
    }
  }
};

exports.default = FilterOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A15 Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var A15Filter = function (_Filter) {
  (0, _inherits3.default)(A15Filter, _Filter);

  function A15Filter() {
    (0, _classCallCheck3.default)(this, A15Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Contrast({
      contrast: 0.63
    }));

    _this._stack.push(new FilterPrimitives.Brightness({
      brightness: 0.12
    }));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 38], [94, 94], [148, 142], [175, 187], [255, 255]],
        green: [[0, 0], [77, 53], [171, 190], [255, 255]],
        blue: [[0, 10], [48, 85], [174, 228], [255, 255]]
      }
    }));
    return _this;
  }

  return A15Filter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


A15Filter.identifier = 'a15';

A15Filter.displayName = '15';

exports.default = A15Filter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Breeze Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var BreezeFilter = function (_Filter) {
  (0, _inherits3.default)(BreezeFilter, _Filter);

  function BreezeFilter() {
    (0, _classCallCheck3.default)(this, BreezeFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Desaturation
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Desaturation({
      desaturation: 0.5
    }));

    // Tone curve
    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [170, 170], [212, 219], [234, 242], [255, 255]],
        green: [[0, 0], [170, 168], [234, 231], [255, 255]],
        blue: [[0, 0], [170, 170], [212, 208], [255, 255]]
      }
    }));
    return _this;
  }

  return BreezeFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


BreezeFilter.identifier = 'breeze';

BreezeFilter.displayName = 'Breeze';

exports.default = BreezeFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * BW Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var BWFilter = function (_Filter) {
  (0, _inherits3.default)(BWFilter, _Filter);

  function BWFilter() {
    (0, _classCallCheck3.default)(this, BWFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Grayscale());
    return _this;
  }

  return BWFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


BWFilter.identifier = 'bw';

BWFilter.displayName = 'B&W';

exports.default = BWFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * BWHard Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var BWHardFilter = function (_Filter) {
  (0, _inherits3.default)(BWHardFilter, _Filter);

  function BWHardFilter() {
    (0, _classCallCheck3.default)(this, BWHardFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Grayscale());
    _this._stack.push(new FilterPrimitives.Contrast({
      contrast: 1.5
    }));
    return _this;
  }

  return BWHardFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


BWHardFilter.identifier = 'bwhard';

BWHardFilter.displayName = '1920';

exports.default = BWHardFilter;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Celsius Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var CelsiusFilter = function (_Filter) {
  (0, _inherits3.default)(CelsiusFilter, _Filter);

  function CelsiusFilter() {
    (0, _classCallCheck3.default)(this, CelsiusFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 69], [55, 110], [202, 230], [255, 255]],
        green: [[0, 44], [89, 93], [185, 141], [255, 189]],
        blue: [[0, 76], [39, 82], [218, 138], [255, 171]]
      }
    }));
    return _this;
  }

  return CelsiusFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


CelsiusFilter.identifier = 'celsius';

CelsiusFilter.displayName = 'Celsius';

exports.default = CelsiusFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Chest Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var ChestFilter = function (_Filter) {
  (0, _inherits3.default)(ChestFilter, _Filter);

  function ChestFilter() {
    (0, _classCallCheck3.default)(this, ChestFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [44, 44], [124, 143], [221, 204], [255, 255]],
        green: [[0, 0], [130, 127], [213, 199], [255, 255]],
        blue: [[0, 0], [51, 52], [219, 204], [255, 255]]
      }
    }));
    return _this;
  }

  return ChestFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


ChestFilter.identifier = 'chest';

ChestFilter.displayName = 'Chest';

exports.default = ChestFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fixie Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var FixieFilter = function (_Filter) {
  (0, _inherits3.default)(FixieFilter, _Filter);

  function FixieFilter() {
    (0, _classCallCheck3.default)(this, FixieFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [44, 28], [63, 48], [128, 132], [235, 248], [255, 255]],
        green: [[0, 0], [20, 10], [60, 45], [190, 209], [211, 231], [255, 255]],
        blue: [[0, 31], [41, 62], [150, 142], [234, 212], [255, 224]]
      }
    }));
    return _this;
  }

  return FixieFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


FixieFilter.identifier = 'fixie';

FixieFilter.displayName = 'Fixie';

exports.default = FixieFilter;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Food Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var FoodFilter = function (_Filter) {
  (0, _inherits3.default)(FoodFilter, _Filter);

  function FoodFilter() {
    (0, _classCallCheck3.default)(this, FoodFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Saturation({
      saturation: 1.35
    }));

    _this._stack.push(new FilterPrimitives.Contrast({
      contrast: 1.1
    }));
    return _this;
  }

  return FoodFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


FoodFilter.identifier = 'food';

FoodFilter.displayName = 'Food';

exports.default = FoodFilter;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fridge Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var FridgeFilter = function (_Filter) {
  (0, _inherits3.default)(FridgeFilter, _Filter);

  function FridgeFilter() {
    (0, _classCallCheck3.default)(this, FridgeFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 9], [21, 11], [45, 24], [255, 220]],
        green: [[0, 12], [21, 21], [42, 42], [150, 150], [170, 173], [255, 210]],
        blue: [[0, 28], [43, 72], [128, 185], [255, 220]]
      }
    }));
    return _this;
  }

  return FridgeFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


FridgeFilter.identifier = 'fridge';

FridgeFilter.displayName = 'Fridge';

exports.default = FridgeFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Front Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var FrontFilter = function (_Filter) {
  (0, _inherits3.default)(FrontFilter, _Filter);

  function FrontFilter() {
    (0, _classCallCheck3.default)(this, FrontFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 65], [28, 67], [67, 113], [125, 183], [187, 217], [255, 229]],
        green: [[0, 52], [42, 59], [104, 134], [169, 209], [255, 240]],
        blue: [[0, 52], [65, 68], [93, 104], [150, 153], [255, 198]]
      }
    }));
    return _this;
  }

  return FrontFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


FrontFilter.identifier = 'front';

FrontFilter.displayName = 'Front';

exports.default = FrontFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Glam Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var GlamFilter = function (_Filter) {
  (0, _inherits3.default)(GlamFilter, _Filter);

  function GlamFilter() {
    (0, _classCallCheck3.default)(this, GlamFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Contrast({
      contrast: 1.1
    }));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [94, 74], [181, 205], [255, 255]],
        green: [[0, 0], [127, 127], [255, 255]],
        blue: [[0, 0], [102, 73], [227, 213], [255, 255]]
      }
    }));
    return _this;
  }

  return GlamFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


GlamFilter.identifier = 'glam';

GlamFilter.displayName = 'Glam';

exports.default = GlamFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gobblin Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var GobblinFilter = function (_Filter) {
  (0, _inherits3.default)(GobblinFilter, _Filter);

  function GobblinFilter() {
    (0, _classCallCheck3.default)(this, GobblinFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Gobblin());
    return _this;
  }

  return GobblinFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


GobblinFilter.identifier = 'gobblin';

GobblinFilter.displayName = 'Gobblin';

exports.default = GobblinFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * K1 Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var K1Filter = function (_Filter) {
  (0, _inherits3.default)(K1Filter, _Filter);

  function K1Filter() {
    (0, _classCallCheck3.default)(this, K1Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      controlPoints: [[0, 0], [53, 32], [91, 80], [176, 205], [255, 255]]
    }));

    // Saturation
    _this._stack.push(new FilterPrimitives.Saturation({
      saturation: 0.9
    }));
    return _this;
  }

  return K1Filter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


K1Filter.identifier = 'k1';

K1Filter.displayName = 'K1';

exports.default = K1Filter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * K2 Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
 */
var K2Filter = function (_Filter) {
  (0, _inherits3.default)(K2Filter, _Filter);

  function K2Filter() {
    (0, _classCallCheck3.default)(this, K2Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      controlPoints: [[0, 0], [54, 33], [77, 82], [94, 103], [122, 126], [177, 193], [229, 232], [255, 255]]
    }));

    // Soft color overlay
    _this._stack.push(new FilterPrimitives.SoftColorOverlay({
      color: new _color2.default(40 / 255, 40 / 255, 40 / 255)
    }));
    return _this;
  }

  return K2Filter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
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

K2Filter.identifier = 'k2';

K2Filter.displayName = 'K2';

exports.default = K2Filter;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * K6 Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var K6Filter = function (_Filter) {
  (0, _inherits3.default)(K6Filter, _Filter);

  function K6Filter() {
    (0, _classCallCheck3.default)(this, K6Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Saturation
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Saturation({
      saturation: 0.5
    }));
    return _this;
  }

  return K6Filter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


K6Filter.identifier = 'k6';

K6Filter.displayName = 'K6';

exports.default = K6Filter;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * KDynamic Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var KDynamicFilter = function (_Filter) {
  (0, _inherits3.default)(KDynamicFilter, _Filter);

  function KDynamicFilter() {
    (0, _classCallCheck3.default)(this, KDynamicFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      controlPoints: [[0, 0], [17, 27], [46, 69], [90, 112], [156, 200], [203, 243], [255, 255]]
    }));

    // Saturation
    _this._stack.push(new FilterPrimitives.Saturation({
      saturation: 0.7
    }));
    return _this;
  }

  return KDynamicFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


KDynamicFilter.identifier = 'kdynamic';

KDynamicFilter.displayName = 'KDynamic';

exports.default = KDynamicFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Lenin Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var LeninFilter = function (_Filter) {
  (0, _inherits3.default)(LeninFilter, _Filter);

  function LeninFilter() {
    (0, _classCallCheck3.default)(this, LeninFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Desaturation
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Desaturation({
      desaturation: 0.4
    }));

    // Tone curve
    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 20], [40, 20], [106, 111], [129, 153], [190, 223], [255, 255]],
        green: [[0, 20], [40, 20], [62, 41], [106, 108], [132, 159], [203, 237], [255, 255]],
        blue: [[0, 40], [40, 40], [73, 60], [133, 160], [191, 297], [203, 237], [237, 239], [255, 255]]
      }
    }));
    return _this;
  }

  return LeninFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


LeninFilter.identifier = 'lenin';

LeninFilter.displayName = 'Lenin';

exports.default = LeninFilter;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Lomo Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var LomoFilter = function (_Filter) {
  (0, _inherits3.default)(LomoFilter, _Filter);

  function LomoFilter() {
    (0, _classCallCheck3.default)(this, LomoFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      controlPoints: [[0, 0], [87, 20], [131, 156], [183, 205], [255, 200]]
    }));
    return _this;
  }

  return LomoFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


LomoFilter.identifier = 'lomo';

LomoFilter.displayName = 'Lomo';

exports.default = LomoFilter;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType; /*
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
 * Lomo Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
 */
var LUTFilter = function (_Filter) {
  (0, _inherits3.default)(LUTFilter, _Filter);

  function LUTFilter() {
    (0, _classCallCheck3.default)(this, LUTFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._lutPrimitive = new FilterPrimitives.LookupTableImage({
      image: _this._options.image
    });
    _this._stack.push(_this._lutPrimitive);
    return _this;
  }

  return LUTFilter;
}(_filter2.default);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


LUTFilter.prototype.availableOptions = {
  image: {
    type: OptionType.IMAGE,
    required: true,
    setter: function setter(image) {
      if (this._lutPrimitive) {
        this._lutPrimitive.setImage(image);
      }
      this.setDirty(true);
      return image;
    }
  }
};

/**
 * This filter's identifier
 * @type {String}
 * @default
 */
LUTFilter.identifier = 'lut';

LUTFilter.displayName = 'Lookup Table';

exports.default = LUTFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mellow Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var MellowFilter = function (_Filter) {
  (0, _inherits3.default)(MellowFilter, _Filter);

  function MellowFilter() {
    (0, _classCallCheck3.default)(this, MellowFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [41, 84], [87, 134], [255, 255]],
        green: [[0, 0], [255, 216]],
        blue: [[0, 0], [255, 131]]
      }
    }));
    return _this;
  }

  return MellowFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


MellowFilter.identifier = 'mellow';

MellowFilter.displayName = 'Mellow';

exports.default = MellowFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

var _colorMatrix = __webpack_require__(33);

var _colorMatrix2 = _interopRequireDefault(_colorMatrix);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Metal Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var MetalFilter = function (_Filter) {
  (0, _inherits3.default)(MetalFilter, _Filter);

  function MetalFilter() {
    (0, _classCallCheck3.default)(this, MetalFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    var matrix1 = new _colorMatrix2.default(0.8158218291630716, 0, 0, 0, -0.01779810181190647, 0, 0.8098360655737704, 0, 0, 0.0916393442622953, 0, 0, 0.4596336773932402, 0, 0.12760574782432707, 0, 0, 0, 1, 0);
    _this._stack.push(new FilterPrimitives.ColorMatrixPrimitive({
      colormatrix: matrix1
    }));
    var gammaColor = new _color2.default(0.8, 0.6, 0.9);
    _this._stack.push(new FilterPrimitives.Gamma({
      gamma: gammaColor
    }));
    return _this;
  }

  return MetalFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


MetalFilter.identifier = 'metal';

MetalFilter.displayName = 'Metal';

exports.default = MetalFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Morning Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var MorningFilter = function (_Filter) {
  (0, _inherits3.default)(MorningFilter, _Filter);

  function MorningFilter() {
    (0, _classCallCheck3.default)(this, MorningFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 40], [255, 230]],
        green: [[0, 10], [255, 225]],
        blue: [[0, 20], [255, 181]]
      }
    }));

    _this._stack.push(new FilterPrimitives.Glow());
    return _this;
  }

  return MorningFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


MorningFilter.identifier = 'morning';

MorningFilter.displayName = 'Morning';

exports.default = MorningFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Orchid Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var OrchidFilter = function (_Filter) {
  (0, _inherits3.default)(OrchidFilter, _Filter);

  function OrchidFilter() {
    (0, _classCallCheck3.default)(this, OrchidFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Tone curve
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [115, 130], [195, 215], [255, 255]],
        green: [[0, 0], [148, 153], [172, 215], [255, 255]],
        blue: [[0, 46], [58, 75], [178, 205], [255, 255]]
      }
    }));

    // Tone curve
    _this._stack.push(new FilterPrimitives.ToneCurve({
      controlPoints: [[0, 0], [117, 151], [189, 217], [255, 255]]
    }));

    // Desaturation
    _this._stack.push(new FilterPrimitives.Desaturation({
      desaturation: 0.65
    }));
    return _this;
  }

  return OrchidFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


OrchidFilter.identifier = 'orchid';

OrchidFilter.displayName = 'Orchid';

exports.default = OrchidFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pola Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var PolaFilter = function (_Filter) {
  (0, _inherits3.default)(PolaFilter, _Filter);

  function PolaFilter() {
    (0, _classCallCheck3.default)(this, PolaFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [94, 74], [181, 205], [255, 255]],
        green: [[0, 0], [34, 34], [99, 76], [176, 190], [255, 255]],
        blue: [[0, 0], [102, 73], [227, 213], [255, 255]]
      }
    }));

    _this._stack.push(new FilterPrimitives.Saturation({
      saturation: 0.8
    }));

    _this._stack.push(new FilterPrimitives.Contrast({
      contrast: 1.5
    }));
    return _this;
  }

  return PolaFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


PolaFilter.identifier = 'pola';

PolaFilter.displayName = 'Pola SX';

exports.default = PolaFilter;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pola669 Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var Pola669Filter = function (_Filter) {
  (0, _inherits3.default)(Pola669Filter, _Filter);

  function Pola669Filter() {
    (0, _classCallCheck3.default)(this, Pola669Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [56, 18], [196, 209], [255, 255]],
        green: [[0, 38], [71, 84], [255, 255]],
        blue: [[0, 0], [131, 133], [204, 211], [255, 255]]
      }
    }));

    _this._stack.push(new FilterPrimitives.Saturation({
      saturation: 0.8
    }));

    _this._stack.push(new FilterPrimitives.Contrast({
      contrast: 1.5
    }));
    return _this;
  }

  return Pola669Filter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


Pola669Filter.identifier = 'pola669';

Pola669Filter.displayName = 'Pola 669';

exports.default = Pola669Filter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType,
    RendererType = _globals.Constants.RendererType; /*
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

var BlendFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(BlendFilter, _Engine$Filter);

  function BlendFilter() {
    (0, _classCallCheck3.default)(this, BlendFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(222);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {PhotoEditorSDK.Engine.CanvasRenderer} renderer
   * @param  {PhotoEditorSDK.Engine.RenderTarget} inputTarget
   * @param  {PhotoEditorSDK.Engine.RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  BlendFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var outputContext = outputTarget.getContext();

    var filteredCanvas = this._options.filteredCanvas;


    outputContext.save();
    outputContext.drawImage(canvas, 0, 0);
    outputContext.globalAlpha = this._options.intensity;
    outputContext.drawImage(filteredCanvas, 0, 0);
    outputContext.restore();
  };

  return BlendFilter;
}(_globals.Engine.Filter);

BlendFilter.prototype.availableOptions = {
  filteredImage: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.INT },
  filteredCanvas: { type: OptionType.OBJECT, default: null },
  intensity: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.FLOAT }
};

/**
 * A helper class that can collect {@link Primitive} instances and render
 * the stack
 * @class
 * @memberof PhotoEditorSDK.Filter
 */

var PrimitivesStack = function () {
  function PrimitivesStack() {
    var intensity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    (0, _classCallCheck3.default)(this, PrimitivesStack);

    this._intensity = intensity;

    this._stack = [];
    this._dirtiness = {};
    this._renderTextures = {};
    this._container = new _globals.Engine.Container();
    this._sprite = new _globals.Engine.Sprite();
    this._container.addChild(this._sprite);

    this._blendFilter = new BlendFilter();
  }

  /**
   * Adds the given primitive to the stack
   * @param {PhotoEditorSDK.Filter.Primitive} primitive
   */


  PrimitivesStack.prototype.push = function push(primitive) {
    this._stack.push(primitive);
  };

  /**
   * Clears the stack
   */


  PrimitivesStack.prototype.clear = function clear() {
    this._stack = [];
  };

  /**
   * Renders this stack
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @param  {PhotoEditorSDK.Engine.RenderTexture} outputTexture
   * @return {Promise}
   * @description This takes the output sprite's current texture and renders
   *              it to this stack's internal render texture. It then uses the
   *              internal texture as a uniform for a blend shader and renders
   *              the sprite with the original texture and the blend shader to
   *              the outputTexture
   */


  PrimitivesStack.prototype.render = function render(sdk, inputTexture, outputTexture) {
    if (this._stack.length === 0) {
      return _promise2.default.resolve();
    }
    var renderer = sdk.getRenderer();

    this._sprite.setTexture(inputTexture);

    // Make sure we have a RenderTexture we can render the filtered image to
    var filteredRenderTexture = this._renderTextures[renderer.id];
    if (!filteredRenderTexture) {
      var frame = sdk.getSprite().getTexture().getFrame();
      filteredRenderTexture = new _globals.Engine.RenderTexture(sdk.getRenderer(), frame.width, frame.height);
      this._renderTextures[renderer.id] = filteredRenderTexture;
    }

    // Resize filtered render texture to output texture dimensions
    var textureDimensions = outputTexture.getDimensions();
    filteredRenderTexture.resizeTo(textureDimensions);

    var shouldRender = this.isDirtyForRenderer(renderer);
    if (shouldRender) {
      // Update primitives
      this._stack.forEach(function (p) {
        p.update(sdk);
      });

      // Set filters
      var filters = this._stack.map(function (p) {
        return p.getFilter();
      });
      this._sprite.setFilters(filters);

      // Render to RenderTexture
      filteredRenderTexture.render(this._container);
      this.setDirtyForRenderer(false, renderer);
    }

    // Use filteredRenderTexture as uniform for blend shader, blend the two
    // to achieve intensity
    this._blendFilter.setIntensity(this._intensity);
    if (renderer.isOfType(RendererType.CANVAS)) {
      this._blendFilter.setFilteredCanvas(filteredRenderTexture.getRenderTarget().getCanvas());
    } else if (renderer.isOfType(RendererType.WEBGL)) {
      var baseTexture = filteredRenderTexture.getBaseTexture();
      baseTexture.setGLUnit(this._blendFilter.getFilteredImage());
      renderer.updateTexture(baseTexture, false);
    }
    this._sprite.setFilters([this._blendFilter]);

    outputTexture.clear(_globals.Color.TRANSPARENT);
    outputTexture.render(this._container);

    if (shouldRender) {
      this.disposeRenderTextures();
    }

    return _promise2.default.resolve(outputTexture);
  };

  PrimitivesStack.prototype.setIntensity = function setIntensity(intensity) {
    this._intensity = intensity;
  };

  /**
   * Checks if this operation is dirty for the given renderer
   * @param  {PhotoEditorSDK.Engine.BaseRenderer}  renderer
   * @return {Boolean}
   */


  PrimitivesStack.prototype.isDirtyForRenderer = function isDirtyForRenderer(renderer) {
    if (!(renderer.id in this._dirtiness)) {
      this._dirtiness[renderer.id] = true;
    }
    return this._dirtiness[renderer.id];
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   */


  PrimitivesStack.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer) {
    this._dirtiness[renderer.id] = dirty;
  };

  /**
   * Sets the dirtiness for all renderers
   * @param {Boolean} dirty
   */


  PrimitivesStack.prototype.setDirty = function setDirty(dirty) {
    for (var rendererId in this._dirtiness) {
      this._dirtiness[rendererId] = dirty;
    }
  };

  /**
   * Disposes the render textures, frees some memory
   */


  PrimitivesStack.prototype.disposeRenderTextures = function disposeRenderTextures() {
    for (var rendererId in this._renderTextures) {
      this._renderTextures[rendererId].dispose();
      delete this._renderTextures[rendererId];
    }
  };

  /**
   * Cleans up this instance
   */


  PrimitivesStack.prototype.dispose = function dispose() {
    this.disposeRenderTextures();
    this._stack.forEach(function (primitive) {
      return primitive.dispose();
    });
    this._stack = [];
    this._blendFilter.dispose();

    this._sprite.dispose();
  };

  return PrimitivesStack;
}();

exports.default = PrimitivesStack;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrightnessFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(BrightnessFilter, _Engine$Filter);

  function BrightnessFilter() {
    (0, _classCallCheck3.default)(this, BrightnessFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(227);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  BrightnessFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var brightness = this._options.brightness;


    if (brightness === 0) {
      return;
    }
    brightness = brightness * 255;

    for (var i = 0; i < canvas.width * canvas.height; i++) {
      var index = i * 4;
      imageData.data[index] += brightness;
      imageData.data[index + 1] += brightness;
      imageData.data[index + 2] += brightness;
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return BrightnessFilter;
}(_globals.Engine.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
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

BrightnessFilter.prototype.availableOptions = {
  brightness: { type: _constants.OptionType.NUMBER, default: 0, uniformType: _constants.UniformType.FLOAT }
};

/**
 * Brightness primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var Brightness = function (_Primitive) {
  (0, _inherits3.default)(Brightness, _Primitive);

  function Brightness() {
    (0, _classCallCheck3.default)(this, Brightness);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new BrightnessFilter();
    return _this2;
  }

  /**
   * Updates the filter's uniforms
   */


  Brightness.prototype.update = function update() {
    this._filter.setBrightness(this._options.brightness);
  };

  return Brightness;
}(_primitive2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


Brightness.prototype.availableOptions = BrightnessFilter.prototype.availableOptions;

exports.default = Brightness;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

var _colorMatrix = __webpack_require__(33);

var _colorMatrix2 = _interopRequireDefault(_colorMatrix);

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

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType;

var ColorMatrixFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(ColorMatrixFilter, _Engine$Filter);

  function ColorMatrixFilter() {
    (0, _classCallCheck3.default)(this, ColorMatrixFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(228);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  ColorMatrixFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var colormatrix = this._options.colormatrix;

    var color = new _color2.default(0, 0, 0, 0);

    for (var i = 0; i < canvas.width * canvas.height; i++) {
      var index = i * 4;
      color.r = imageData.data[index];
      color.g = imageData.data[index + 1];
      color.b = imageData.data[index + 2];
      color.a = imageData.data[index + 3];
      color = colormatrix.apply(color);
      imageData.data[index] = color.r;
      imageData.data[index + 1] = color.g;
      imageData.data[index + 2] = color.b;
      imageData.data[index + 3] = color.a;
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return ColorMatrixFilter;
}(_globals.Engine.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


ColorMatrixFilter.prototype.availableOptions = {
  colormatrix: { type: OptionType.COLOR_MATRIX, default: new _colorMatrix2.default(), uniformType: UniformType.MAT4 }
};

/**
 * ColorMatrix primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var ColorMatrixPrimitive = function (_Primitive) {
  (0, _inherits3.default)(ColorMatrixPrimitive, _Primitive);

  function ColorMatrixPrimitive() {
    (0, _classCallCheck3.default)(this, ColorMatrixPrimitive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new ColorMatrixFilter();
    return _this2;
  }

  /**
   * Updates the filter's uniforms
   */


  ColorMatrixPrimitive.prototype.update = function update() {
    this._filter.setColormatrix(this._options.colormatrix);
  };

  return ColorMatrixPrimitive;
}(_primitive2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


ColorMatrixPrimitive.prototype.availableOptions = ColorMatrixFilter.prototype.availableOptions;

exports.default = ColorMatrixPrimitive;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

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

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType;

var ContrastFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(ContrastFilter, _Engine$Filter);

  function ContrastFilter() {
    (0, _classCallCheck3.default)(this, ContrastFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(229);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  ContrastFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var contrast = this._options.contrast;

    if (contrast === 1) {
      return;
    }

    for (var i = 0; i < canvas.width * canvas.height; i++) {
      var index = i * 4;
      imageData.data[index] = (imageData.data[index] - 127) * contrast + 127;
      imageData.data[index + 1] = (imageData.data[index + 1] - 127) * contrast + 127;
      imageData.data[index + 2] = (imageData.data[index + 2] - 127) * contrast + 127;
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return ContrastFilter;
}(_globals.Engine.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


ContrastFilter.prototype.availableOptions = {
  contrast: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.FLOAT }
};

/**
 * Contrast primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var Contrast = function (_Primitive) {
  (0, _inherits3.default)(Contrast, _Primitive);

  function Contrast() {
    (0, _classCallCheck3.default)(this, Contrast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new ContrastFilter();
    return _this2;
  }

  /**
   * Updates the filter's uniforms
   */


  Contrast.prototype.update = function update() {
    this._filter.setContrast(this._options.contrast);
  };

  return Contrast;
}(_primitive2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


Contrast.prototype.availableOptions = ContrastFilter.prototype.availableOptions;

exports.default = Contrast;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DesaturationFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(DesaturationFilter, _Engine$Filter);

  function DesaturationFilter() {
    (0, _classCallCheck3.default)(this, DesaturationFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(230);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  DesaturationFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var desaturation = this._options.desaturation;


    for (var i = 0; i < canvas.width * canvas.height; i++) {
      var index = i * 4;
      var luminance = imageData.data[index] * 0.3 + imageData.data[index + 1] * 0.59 + imageData.data[index + 2] * 0.11;
      imageData.data[index] = luminance * (1 - desaturation) + imageData.data[index] * desaturation;
      imageData.data[index + 1] = luminance * (1 - desaturation) + imageData.data[index + 1] * desaturation;
      imageData.data[index + 2] = luminance * (1 - desaturation) + imageData.data[index + 2] * desaturation;
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return DesaturationFilter;
}(_engine2.default.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
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

DesaturationFilter.prototype.availableOptions = {
  desaturation: { type: _constants.OptionType.NUMBER, default: 1, uniformType: _constants.UniformType.FLOAT }
};

/**
 * Desaturation primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var Desaturation = function (_Primitive) {
  (0, _inherits3.default)(Desaturation, _Primitive);

  function Desaturation() {
    (0, _classCallCheck3.default)(this, Desaturation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new DesaturationFilter();
    return _this2;
  }

  /**
   * Updates the filter's uniforms
   */


  Desaturation.prototype.update = function update() {
    this._filter.setDesaturation(this._options.desaturation);
  };

  return Desaturation;
}(_primitive2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


Desaturation.prototype.availableOptions = DesaturationFilter.prototype.availableOptions;

exports.default = Desaturation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType; /*
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

var GammaFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(GammaFilter, _Engine$Filter);

  function GammaFilter() {
    (0, _classCallCheck3.default)(this, GammaFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(231);
    return _this;
  }

  /**
  * Applies this filter to the given inputTarget and renders it to
  * the given outputTarget using the CanvasRenderer
  * @param  {CanvasRenderer} renderer
  * @param  {RenderTarget} inputTarget
  * @param  {RenderTarget} outputTarget
  * @param  {Boolean} clear = false
  * @private
  */


  GammaFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var gamma = this._options.gamma;
    // pre calculate lookup tables for each channel

    var gammaArrayRed = new Float32Array(256);
    for (var i = 0; i < 256; i++) {
      gammaArrayRed[i] = 255.0 * Math.pow(i / 255.0, gamma.r);
    }

    var gammaArrayGreen = new Float32Array(256);
    for (var _i = 0; _i < 256; _i++) {
      gammaArrayGreen[_i] = 255.0 * Math.pow(_i / 255.0, gamma.g);
    }

    var gammaArrayBlue = new Float32Array(256);
    for (var _i2 = 0; _i2 < 256; _i2++) {
      gammaArrayBlue[_i2] = 255.0 * Math.pow(_i2 / 255.0, gamma.b);
    }

    for (var _i3 = 0; _i3 < canvas.width * canvas.height; _i3++) {
      var index = _i3 * 4;
      imageData.data[index] = gammaArrayRed[imageData.data[index]];
      imageData.data[index + 1] = gammaArrayGreen[imageData.data[index + 1]];
      imageData.data[index + 2] = gammaArrayBlue[imageData.data[index + 2]];
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return GammaFilter;
}(_globals.Engine.Filter);

/**
* Specifies the available options for this filter
* @type {Object}
* @ignore
*/


GammaFilter.prototype.availableOptions = {
  gamma: { type: OptionType.COLOR, default: _color2.default.WHITE, uniformType: UniformType.FLOAT3 }
};

/**
* Gamma primitive
* @class
* @extends PhotoEditorSDK.Filters.Primitive
* @memberof PhotoEditorSDK.FilterPrimitives
*/

var Gamma = function (_Primitive) {
  (0, _inherits3.default)(Gamma, _Primitive);

  function Gamma() {
    (0, _classCallCheck3.default)(this, Gamma);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new GammaFilter();
    return _this2;
  }

  /**
  * Updates the filter's uniforms
  */


  Gamma.prototype.update = function update() {
    this._filter.setGamma(this._options.gamma);
  };

  return Gamma;
}(_primitive2.default);

/**
* Specifies the available options for this primitive
* @type {Object}
* @ignore
*/


Gamma.prototype.availableOptions = GammaFilter.prototype.availableOptions;

exports.default = Gamma;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType; /*
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

var GlowFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(GlowFilter, _Engine$Filter);

  function GlowFilter() {
    (0, _classCallCheck3.default)(this, GlowFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(232);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  GlowFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    var color = this._options.color;


    var d;
    for (var x = 0; x < canvas.width; x++) {
      for (var y = 0; y < canvas.height; y++) {
        var index = (canvas.width * y + x) * 4;

        var x01 = x / canvas.width;
        var y01 = y / canvas.height;

        var nx = (x01 - 0.5) / 0.75;
        var ny = (y01 - 0.5) / 0.75;

        var scalarX = nx * nx;
        var scalarY = ny * ny;
        d = 1 - (scalarX + scalarY);
        d = Math.min(Math.max(d, 0.1), 1.0);

        imageData.data[index] = imageData.data[index] * (d * color.r);
        imageData.data[index + 1] = imageData.data[index + 1] * (d * color.g);
        imageData.data[index + 2] = imageData.data[index + 2] * (d * color.b);
        imageData.data[index + 3] = 255;
      }
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return GlowFilter;
}(_globals.Engine.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


GlowFilter.prototype.availableOptions = {
  color: { type: OptionType.COLOR, default: _color2.default.WHITE, uniformType: UniformType.FLOAT3 }
};

/**
 * Glow primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var Glow = function (_Primitive) {
  (0, _inherits3.default)(Glow, _Primitive);

  function Glow() {
    (0, _classCallCheck3.default)(this, Glow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new GlowFilter();
    return _this2;
  }

  /**
   * Updates the filter's uniforms
   */


  Glow.prototype.update = function update() {
    this._filter.setColor(this._options.color);
  };

  return Glow;
}(_primitive2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


Glow.prototype.availableOptions = GlowFilter.prototype.availableOptions;

exports.default = Glow;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

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

var GobblinFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(GobblinFilter, _Engine$Filter);

  function GobblinFilter() {
    (0, _classCallCheck3.default)(this, GobblinFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(233);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  GobblinFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < canvas.width; x++) {
      for (var y = 0; y < canvas.height; y++) {
        var index = (canvas.width * y + x) * 4;

        imageData.data[index + 2] = imageData.data[index + 1] * 0.33;
        imageData.data[index] = imageData.data[index] * 0.6;
        imageData.data[index + 2] += imageData.data[index] * 0.33;
        imageData.data[index + 1] = imageData.data[index + 1] * 0.7;
        imageData.data[index + 3] = 255;
      }
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return GobblinFilter;
}(_engine2.default.Filter);

/**
 * Gobblin primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */


var Gobblin = function (_Primitive) {
  (0, _inherits3.default)(Gobblin, _Primitive);

  function Gobblin() {
    (0, _classCallCheck3.default)(this, Gobblin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new GobblinFilter();
    return _this2;
  }

  return Gobblin;
}(_primitive2.default);

exports.default = Gobblin;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

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

var GrayscaleFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(GrayscaleFilter, _Engine$Filter);

  function GrayscaleFilter() {
    (0, _classCallCheck3.default)(this, GrayscaleFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(234);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  GrayscaleFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < canvas.width; x++) {
      for (var y = 0; y < canvas.height; y++) {
        var index = (canvas.width * y + x) * 4;

        var luminance = imageData.data[index] * 0.2125 + imageData.data[index + 1] * 0.7154 + imageData.data[index + 2] * 0.0721;

        imageData.data[index] = luminance;
        imageData.data[index + 1] = luminance;
        imageData.data[index + 2] = luminance;
      }
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return GrayscaleFilter;
}(_engine2.default.Filter);

/**
 * Grayscale primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */


var Grayscale = function (_Primitive) {
  (0, _inherits3.default)(Grayscale, _Primitive);

  function Grayscale() {
    (0, _classCallCheck3.default)(this, Grayscale);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new GrayscaleFilter();
    return _this2;
  }

  return Grayscale;
}(_primitive2.default);

exports.default = Grayscale;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _constants = __webpack_require__(9);

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

var TEXTURE_GL_UNIT = 3;

var LookupTableImageFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(LookupTableImageFilter, _Engine$Filter);

  function LookupTableImageFilter() {
    (0, _classCallCheck3.default)(this, LookupTableImageFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._precomputeQuads();
    _this._fragmentSource = __webpack_require__(235);
    return _this;
  }

  /**
   * This function pre-calculates an array that holds quads for each
   * of the 256 possible values of the blue channel
   * @private
   */


  LookupTableImageFilter.prototype._precomputeQuads = function _precomputeQuads() {
    this._quads = [];
    for (var i = 0; i < 256; i++) {
      var blueColor = i / 255 * 63;
      var quad = new _globals.Vector2();

      quad.y = (blueColor | 0) * 0.125 | 0;
      quad.x = (blueColor | 0) - quad.y * 8;
      this._quads.push(quad);
    }
  };

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  LookupTableImageFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var lutImage = this._options.lookupTableImage;
    var lutCanvas = this._createImageCanvas(lutImage);
    var lutContext = lutCanvas.getContext('2d');

    var inputImageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);
    var filterImageData = lutContext.getImageData(0, 0, lutImage.width, lutImage.height);

    var texCoord = new _globals.Vector2();
    for (var index = 0; index < canvas.width * canvas.height * 4; index += 4) {
      var r = inputImageData.data[index];
      var g = inputImageData.data[index + 1];
      var b = inputImageData.data[index + 2];
      var a = inputImageData.data[index + 3] / 255;
      var quad = this._quads[b];

      // 64 since we have 8x8 tiles on a 512x512 texture.
      var tileSideLength = 64;

      // calculate pixel position of the coordinate origin.
      texCoord.x = quad.x * tileSideLength;
      texCoord.y = quad.y * tileSideLength;

      // now lookup the correct color within the tile.
      // the position of the pixel is indicated by the vector,
      // induced by the combination of the red and green vector.
      texCoord.x += Math.floor(r / 4); // r / 256 * 64 = r / 4
      texCoord.y += Math.floor(g / 4); // g / 256 * 64 = r / 4

      var texCoordIndex = (lutImage.width * texCoord.y + texCoord.x) * 4 | 0;
      var newR = filterImageData.data[texCoordIndex];
      newR = r * (1 - a) + newR * a;
      var newG = filterImageData.data[texCoordIndex + 1];
      newG = g * (1 - a) + newG * a;
      var newB = filterImageData.data[texCoordIndex + 2];
      newB = b * (1 - a) + newB * a;
      inputImageData.data[index] = newR;
      inputImageData.data[index + 1] = newG;
      inputImageData.data[index + 2] = newB;
    }
    outputContext.putImageData(inputImageData, 0, 0);
  };

  /**
   * Creates a canvas with the given image
   * @param  {Image} image
   * @return {HTMLCanvasElement}
   * @private
   */


  LookupTableImageFilter.prototype._createImageCanvas = function _createImageCanvas(image) {
    var canvas = _globals.Utils.createCanvas();
    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    return canvas;
  };

  return LookupTableImageFilter;
}(_engine2.default.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


LookupTableImageFilter.prototype.availableOptions = {
  lookupTable: { type: _constants.OptionType.NUMBER, default: TEXTURE_GL_UNIT, uniformType: _constants.UniformType.INT },
  lookupTableImage: { type: _constants.OptionType.IMAGE, uniformType: null }
};

/**
 * Stores a 256 byte long lookup table in a 2d texture which will be
 * used to look up the corresponding value for each channel.
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var LookupTableImage = function (_Primitive) {
  (0, _inherits3.default)(LookupTableImage, _Primitive);

  function LookupTableImage() {
    (0, _classCallCheck3.default)(this, LookupTableImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new LookupTableImageFilter();
    _this2._textures = {};
    return _this2;
  }

  /**
   * Gets called before this primitive's filter is being applied
   * @param {PhotoEditorSDK} sdk
   */


  LookupTableImage.prototype.update = function update(sdk) {
    var renderer = sdk.getRenderer();
    /* istanbul ignore if */
    if (renderer.isOfType(_constants.RendererType.WEBGL)) {
      this._updateWebGLTexture(sdk);
    } else if (renderer.isOfType(_constants.RendererType.CANVAS)) {
      this._filter.setLookupTableImage(this._options.image);
    }
  };

  /**
   * Updates the lookup table texture (WebGL only)
   * @param {PhotoEditorSDK} sdk
   * @private
   */
  /* istanbul ignore next */


  LookupTableImage.prototype._updateWebGLTexture = function _updateWebGLTexture(sdk) {
    var renderer = sdk.getRenderer();
    var id = renderer.id;

    if (!this._textures[id]) {
      this._textures[id] = new _engine2.default.BaseTexture();
    }

    var texture = this._textures[id];
    texture.setSource(this._options.image);
    texture.setGLUnit(TEXTURE_GL_UNIT);

    renderer.updateTexture(texture);
  };

  /**
   * Cleans up this primitive
   */


  LookupTableImage.prototype.dispose = function dispose() {
    _Primitive.prototype.dispose.call(this);
    for (var id in this._textures) {
      delete this._textures[id];
    }
  };

  return LookupTableImage;
}(_primitive2.default);

LookupTableImage.prototype.availableOptions = {
  image: { type: _constants.OptionType.IMAGE }
};

exports.default = LookupTableImage;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _globals = __webpack_require__(3);

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

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType;

var SaturationFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(SaturationFilter, _Engine$Filter);

  function SaturationFilter() {
    (0, _classCallCheck3.default)(this, SaturationFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(237);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  SaturationFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);
    var saturation = this._options.saturation;


    for (var x = 0; x < canvas.width; x++) {
      for (var y = 0; y < canvas.height; y++) {
        var index = (canvas.width * y + x) * 4;

        var luminance = imageData.data[index] * 0.2125 + imageData.data[index + 1] * 0.7154 + imageData.data[index + 2] * 0.0721;
        imageData.data[index] = luminance * (1 - saturation) + imageData.data[index] * saturation;
        imageData.data[index + 1] = luminance * (1 - saturation) + imageData.data[index + 1] * saturation;
        imageData.data[index + 2] = luminance * (1 - saturation) + imageData.data[index + 2] * saturation;
      }
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return SaturationFilter;
}(_globals.Engine.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


SaturationFilter.prototype.availableOptions = {
  saturation: { type: OptionType.NUMBER, default: 0, uniformType: UniformType.FLOAT }
};

/**
 * Saturation primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var Saturation = function (_Primitive) {
  (0, _inherits3.default)(Saturation, _Primitive);

  function Saturation() {
    (0, _classCallCheck3.default)(this, Saturation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new SaturationFilter();
    return _this2;
  }

  /**
   * Updates the filter's uniforms
   */


  Saturation.prototype.update = function update() {
    this._filter.setSaturation(this._options.saturation);
  };

  return Saturation;
}(_primitive2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


Saturation.prototype.availableOptions = SaturationFilter.prototype.availableOptions;

exports.default = Saturation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType; /*
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

var SoftColorOverlayFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(SoftColorOverlayFilter, _Engine$Filter);

  function SoftColorOverlayFilter() {
    (0, _classCallCheck3.default)(this, SoftColorOverlayFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(238);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  SoftColorOverlayFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < canvas.width; x++) {
      for (var y = 0; y < canvas.height; y++) {
        var index = (canvas.width * y + x) * 4;

        imageData.data[index] = Math.max(this._options.color.r * 255, imageData.data[index]);
        imageData.data[index + 1] = Math.max(this._options.color.g * 255, imageData.data[index + 1]);
        imageData.data[index + 2] = Math.max(this._options.color.b * 255, imageData.data[index + 2]);
      }
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return SoftColorOverlayFilter;
}(_globals.Engine.Filter);

/**
 * Specifies the available options for this filter
 * @type {Object}
 * @ignore
 */


SoftColorOverlayFilter.prototype.availableOptions = {
  color: { type: OptionType.COLOR, default: _color2.default.WHITE, uniformType: UniformType.FLOAT3 }
};

/**
 * SoftColorOverlay primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var SoftColorOverlay = function (_Primitive) {
  (0, _inherits3.default)(SoftColorOverlay, _Primitive);

  function SoftColorOverlay() {
    (0, _classCallCheck3.default)(this, SoftColorOverlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new SoftColorOverlayFilter();
    return _this2;
  }

  /**
   * Updates the filter's uniforms
   */


  SoftColorOverlay.prototype.update = function update() {
    this._filter.setColor(this._options.color);
  };

  return SoftColorOverlay;
}(_primitive2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


SoftColorOverlay.prototype.availableOptions = SoftColorOverlayFilter.prototype.availableOptions;

exports.default = SoftColorOverlay;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _lookupTable = __webpack_require__(79);

var _lookupTable2 = _interopRequireDefault(_lookupTable);

var _globals = __webpack_require__(3);

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

var OptionType = _globals.Constants.OptionType;

/**
 * Tone curve primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitives.LookupTable
 * @memberof PhotoEditorSDK.FilterPrimitives
 */

var ToneCurve = function (_LookupTable) {
  (0, _inherits3.default)(ToneCurve, _LookupTable);

  function ToneCurve() {
    (0, _classCallCheck3.default)(this, ToneCurve);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _LookupTable.call.apply(_LookupTable, [this].concat(args)));

    if (!_this._options.rgbControlPoints) {
      _this._options.rgbControlPoints = {
        red: _this._options.controlPoints,
        green: _this._options.controlPoints,
        blue: _this._options.controlPoints
      };
    }

    _this._updateLookupTable();
    return _this;
  }

  /**
   * Calculates the lookup table
   * @private
   */


  ToneCurve.prototype._updateLookupTable = function _updateLookupTable() {
    var r = this._calculateSplineCurve(this._options.rgbControlPoints.red);
    var g = this._calculateSplineCurve(this._options.rgbControlPoints.green);
    var b = this._calculateSplineCurve(this._options.rgbControlPoints.blue);

    this._options.data = this._buildLookupTable(r, g, b);
  };

  /**
   * Builds the lookup table
   * @param  {Array} r
   * @param  {Array} g
   * @param  {Array} b
   * @return {Array}
   * @private
   */


  ToneCurve.prototype._buildLookupTable = function _buildLookupTable(r, g, b) {
    var data = [];

    for (var i = 0; i < 256; i++) {
      data.push(Math.min(Math.max(i + r[i], 0), 255));
      data.push(Math.min(Math.max(i + g[i], 0), 255));
      data.push(Math.min(Math.max(i + b[i], 0), 255));
      data.push(255);
    }

    return data;
  };

  /**
   * Calculates the spline curve data for the given points
   * @param  {Array.<Array.<Number>>} points
   * @return {Array.<Number>}
   */


  ToneCurve.prototype._calculateSplineCurve = function _calculateSplineCurve(points) {
    points = points.sort(function (a, b) {
      return a[0] > b[0];
    });

    var splinePoints = this._getSplineCurve(points);
    var firstSplinePoint = splinePoints[0];
    var i;

    if (firstSplinePoint[0] > 0) {
      for (i = 0; i < firstSplinePoint[0]; i++) {
        splinePoints.unshift([0, 0]);
      }
    }

    var preparedPoints = [];
    for (i = 0; i < splinePoints.length; i++) {
      var newPoint = splinePoints[i];
      var origPoint = [newPoint[0], newPoint[0]];

      var distance = Math.sqrt(Math.pow(origPoint[0] - newPoint[0], 2) + Math.pow(origPoint[1] - newPoint[1], 2));

      if (origPoint[1] > newPoint[1]) {
        distance = -distance;
      }

      preparedPoints.push(distance);
    }

    return preparedPoints;
  };

  ToneCurve.prototype._getSplineCurve = function _getSplineCurve(points) {
    var sdA = this._secondDerivative(points);

    var n = sdA.length;
    var sd = [];
    var i;

    for (i = 0; i < n; i++) {
      sd[i] = sdA[i];
    }

    var output = [];

    for (i = 0; i < n - 1; i++) {
      var cur = points[i];
      var next = points[i + 1];

      for (var x = cur[0]; x < next[0]; x++) {
        var t = (x - cur[0]) / (next[0] - cur[0]);

        var a = 1 - t;
        var b = t;
        var h = next[0] - cur[0];

        var y = a * cur[1] + b * next[1] + h * h / 6 * ((a * a * a - a) * sd[i] + (b * b * b - b) * sd[i + 1]);

        if (y > 255) {
          y = 255;
        } else if (y < 0) {
          y = 0;
        }

        output.push([x, y]);
      }
    }

    if (output.length === 255) {
      output.push(points[points.length - 1]);
    }

    return output;
  };

  ToneCurve.prototype._secondDerivative = function _secondDerivative(points) {
    var n = points.length;
    if (n <= 0 || n === 1) {
      return null;
    }

    var matrix = [];
    var result = [];
    var i, k;

    matrix[0] = [0, 1, 0];

    for (i = 1; i < n - 1; i++) {
      var P1 = points[i - 1];
      var P2 = points[i];
      var P3 = points[i + 1];

      matrix[i] = matrix[i] || [];
      matrix[i][0] = (P2[0] - P1[0]) / 6;
      matrix[i][1] = (P3[0] - P1[0]) / 3;
      matrix[i][2] = (P3[0] - P2[0]) / 6;
      result[i] = (P3[1] - P2[1]) / (P3[0] - P2[0]) - (P2[1] - P1[1]) / (P2[0] - P1[0]);
    }

    result[0] = 0;
    result[n - 1] = 0;

    matrix[n - 1] = [0, 1, 0];

    // Pass 1
    for (i = 1; i < n; i++) {
      k = matrix[1][0] / matrix[i - 1][1];
      matrix[i][1] -= k * matrix[i - 1][2];
      matrix[i][0] = 0;
      result[i] -= k * result[i - 1];
    }

    // Pass 2
    for (i = n - 2; i > 0; i--) {
      k = matrix[i][2] / matrix[i + 1][1];
      matrix[i][1] -= k * matrix[i + 1][0];
      matrix[i][2] = 0;
      result[i] -= k * result[i + 1];
    }

    var y2 = [];
    for (i = 0; i < n; i++) {
      y2[i] = result[i] / matrix[i][1];
    }

    return y2;
  };

  return ToneCurve;
}(_lookupTable2.default);

/**
 * Specifies the available options for this primitive
 * @type {Object}
 * @ignore
 */


ToneCurve.prototype.availableOptions = {
  rgbControlPoints: { type: OptionType.OBJECT },
  controlPoints: { type: OptionType.ARRAY, default: [] }
};

exports.default = ToneCurve;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _primitive = __webpack_require__(8);

var _primitive2 = _interopRequireDefault(_primitive);

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

var X400Filter = function (_Engine$Filter) {
  (0, _inherits3.default)(X400Filter, _Engine$Filter);

  function X400Filter() {
    (0, _classCallCheck3.default)(this, X400Filter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(239);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  X400Filter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var canvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var imageData = inputContext.getImageData(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < canvas.width; x++) {
      for (var y = 0; y < canvas.height; y++) {
        var index = (canvas.width * y + x) * 4;

        var gray = imageData.data[index] / 255 * 0.3 + imageData.data[index + 1] / 255 * 0.3 + imageData.data[index + 2] / 255 * 0.3;
        gray -= 0.2;
        gray = Math.max(0.0, Math.min(1.0, gray));
        gray += 0.15;
        gray *= 1.4;

        gray *= 255;
        imageData.data[index] = gray;
        imageData.data[index + 1] = gray;
        imageData.data[index + 2] = gray;
      }
    }

    outputContext.putImageData(imageData, 0, 0);
  };

  return X400Filter;
}(_engine2.default.Filter);

/**
 * X400 primitive
 * @class
 * @extends PhotoEditorSDK.Filters.Primitive
 * @memberof PhotoEditorSDK.FilterPrimitives
 */


var X400 = function (_Primitive) {
  (0, _inherits3.default)(X400, _Primitive);

  function X400() {
    (0, _classCallCheck3.default)(this, X400);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _Primitive.call.apply(_Primitive, [this].concat(args)));

    _this2._filter = new X400Filter();
    return _this2;
  }

  return X400;
}(_primitive2.default);

exports.default = X400;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Quozi Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var QuoziFilter = function (_Filter) {
  (0, _inherits3.default)(QuoziFilter, _Filter);

  function QuoziFilter() {
    (0, _classCallCheck3.default)(this, QuoziFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Desaturation
    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.Desaturation({
      desaturation: 0.65
    }));

    // Tone curve
    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 50], [40, 78], [118, 170], [181, 211], [255, 255]],
        green: [[0, 27], [28, 45], [109, 157], [157, 195], [179, 208], [206, 212], [255, 240]],
        blue: [[0, 50], [12, 55], [46, 103], [103, 162], [194, 182], [241, 201], [255, 219]]
      }
    }));
    return _this;
  }

  return QuoziFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


QuoziFilter.identifier = 'quozi';

QuoziFilter.displayName = 'Quozi';

exports.default = QuoziFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Semired Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var SemiredFilter = function (_Filter) {
  (0, _inherits3.default)(SemiredFilter, _Filter);

  function SemiredFilter() {
    (0, _classCallCheck3.default)(this, SemiredFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 129], [75, 153], [181, 227], [255, 255]],
        green: [[0, 8], [111, 85], [212, 158], [255, 226]],
        blue: [[0, 5], [75, 22], [193, 90], [255, 229]]
      }
    }));

    _this._stack.push(new FilterPrimitives.Glow());
    return _this;
  }

  return SemiredFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


SemiredFilter.identifier = 'semired';

SemiredFilter.displayName = 'Semired';

exports.default = SemiredFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sunny Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var SunnyFilter = function (_Filter) {
  (0, _inherits3.default)(SunnyFilter, _Filter);

  function SunnyFilter() {
    (0, _classCallCheck3.default)(this, SunnyFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 0], [62, 82], [141, 154], [255, 255]],
        green: [[0, 39], [56, 96], [192, 176], [255, 255]],
        blue: [[0, 0], [174, 99], [255, 235]]
      }
    }));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      controlPoints: [[0, 0], [55, 20], [158, 191], [255, 255]]
    }));
    return _this;
  }

  return SunnyFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


SunnyFilter.identifier = 'sunny';

SunnyFilter.displayName = 'Sunny';

exports.default = SunnyFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Texas Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var TexasFilter = function (_Filter) {
  (0, _inherits3.default)(TexasFilter, _Filter);

  function TexasFilter() {
    (0, _classCallCheck3.default)(this, TexasFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.ToneCurve({
      rgbControlPoints: {
        red: [[0, 72], [89, 99], [176, 212], [255, 237]],
        green: [[0, 49], [255, 192]],
        blue: [[0, 72], [255, 151]]
      }
    }));
    return _this;
  }

  return TexasFilter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


TexasFilter.identifier = 'texas';

TexasFilter.displayName = 'Texas';

exports.default = TexasFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * X400 Filter
 * @class
 * @extends PhotoEditorSDK.Filter
 * @memberof PhotoEditorSDK.Filters
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

var X400Filter = function (_Filter) {
  (0, _inherits3.default)(X400Filter, _Filter);

  function X400Filter() {
    (0, _classCallCheck3.default)(this, X400Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Filter.call.apply(_Filter, [this].concat(args)));

    _this._stack.push(new FilterPrimitives.X400());
    return _this;
  }

  return X400Filter;
}(_filter2.default);

/**
 * This filter's identifier
 * @type {String}
 * @default
 */


X400Filter.identifier = 'x400';

X400Filter.displayName = 'X400';

exports.default = X400Filter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _stackBlur = __webpack_require__(35);

var _stackBlur2 = _interopRequireDefault(_stackBlur);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType; /*
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

var LinearFocusFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(LinearFocusFilter, _Engine$Filter);

  function LinearFocusFilter() {
    (0, _classCallCheck3.default)(this, LinearFocusFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call.apply(_Engine$Filter, [this].concat(args)));

    _this._fragmentSource = __webpack_require__(219);

    _this._lastBlurRadius = null;
    _this._lastGradientRadius = null;
    _this._lastStart = new _globals.Vector2();
    _this._lastEnd = new _globals.Vector2();

    _this._blurredRenderTarget = new _globals.Engine.CanvasRenderTarget(100, 100, 1);

    _this._maskRenderTarget = new _globals.Engine.CanvasRenderTarget(100, 100, 1);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  LinearFocusFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var inputDimensions = inputTarget.getDimensions();
    var dimensionsChanged = !this._blurredRenderTarget.getDimensions().equals(inputDimensions);

    this._blurredRenderTarget.setPixelRatio(inputTarget.getPixelRatio());
    this._blurredRenderTarget.resizeTo(inputTarget.getDimensions());

    this._maskRenderTarget.setPixelRatio(inputTarget.getPixelRatio());
    this._maskRenderTarget.resizeTo(inputTarget.getDimensions());

    if (!this._outputRenderTexture) {
      this._outputRenderTexture = new _globals.Engine.RenderTexture(renderer, inputTarget.getWidth(), inputTarget.getHeight(), inputTarget.getPixelRatio());
    }

    if (!this._lastStart.equals(this._options.start) || !this._lastEnd.equals(this._options.end) || this._lastGradientRadius !== this._options.size || dimensionsChanged) {
      this._renderMask();

      this._lastStart = this._options.start.clone();
      this._lastEnd = this._options.end.clone();
      this._lastGradientRadius = this._options.size;
    }

    if (this._lastBlurRadius !== this._options.blurRadius || dimensionsChanged) {
      this._blurImage(inputTarget);
      this._lastBlurRadius = this._options.blurRadius;
    }

    this._applyMask(inputTarget, outputTarget);
  };

  /**
   * Creates a blurred copy of the image
   * @param  {CanvasRenderTarget} inputTarget
   * @return {Canvas}
   * @private
   */


  LinearFocusFilter.prototype._blurImage = function _blurImage(inputTarget) {
    var inputCanvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();

    var inputDimensions = new _globals.Vector2(inputCanvas.width, inputCanvas.height);
    var blurryImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    _stackBlur2.default.stackBlurCanvasRGBA(blurryImageData, 0, 0, inputCanvas.width, inputCanvas.height, this._options.blurRadius * inputDimensions.min());

    var blurryContext = this._blurredRenderTarget.getContext();
    blurryContext.putImageData(blurryImageData, 0, 0);
  };

  /**
   * Renders the mask canvas
   * @private
   */


  LinearFocusFilter.prototype._renderMask = function _renderMask() {
    var canvas = this._maskRenderTarget.getCanvas();
    var context = this._maskRenderTarget.getContext();
    var pixelRatio = this._maskRenderTarget.getPixelRatio();

    var canvasDimensions = new _globals.Vector2(canvas.width, canvas.height);

    var size = this._options.size * canvasDimensions.min() * pixelRatio;
    var gradientSize = this._options.gradientSize * canvasDimensions.min() * pixelRatio;
    var start = this._options.start.clone().multiply(canvasDimensions);
    var end = this._options.end.clone().multiply(canvasDimensions);
    var dist = end.clone().subtract(start);
    var middle = start.clone().add(dist.clone().divide(2));

    var totalDist = dist.len();
    var factor = dist.clone().divide(totalDist);

    var gradientStart = middle.clone().add((size + gradientSize) * factor.y, -(size + gradientSize) * factor.x);
    var gradientEnd = middle.clone().add(-(size + gradientSize) * factor.y, (size + gradientSize) * factor.x);

    // Build gradient
    var gradient = context.createLinearGradient(gradientStart.x, gradientStart.y, gradientEnd.x, gradientEnd.y);
    var fullGradientSize = gradientEnd.clone().subtract(gradientStart).len();
    gradient.addColorStop(0, '#000000');
    gradient.addColorStop(gradientSize / 2 / fullGradientSize, '#FFFFFF');
    gradient.addColorStop(1.0 - gradientSize / 2 / fullGradientSize, '#FFFFFF');
    gradient.addColorStop(1, '#000000');

    // Draw gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  /**
   * Applies the blur and mask to the input canvas
   * @param {CanvasRenderTarget} inputTarget
   * @param {CanvasRenderTarget} outputTarget
   * @private
   */


  LinearFocusFilter.prototype._applyMask = function _applyMask(inputTarget, outputTarget) {
    var outputContext = outputTarget.getContext();
    var inputCanvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var blurredContext = this._blurredRenderTarget.getContext();
    var maskContext = this._maskRenderTarget.getContext();

    var inputImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    var pixels = inputImageData.data;
    var blurredPixels = blurredContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height).data;
    var maskPixels = maskContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height).data;

    var alpha = void 0;
    for (var i = 0; i < inputCanvas.width * inputCanvas.height * 4; i += 4) {
      alpha = maskPixels[i] / 255;

      pixels[i] = alpha * pixels[i] + (1 - alpha) * blurredPixels[i];
      pixels[i + 1] = alpha * pixels[i + 1] + (1 - alpha) * blurredPixels[i + 1];
      pixels[i + 2] = alpha * pixels[i + 2] + (1 - alpha) * blurredPixels[i + 2];
    }

    outputContext.putImageData(inputImageData, 0, 0);
  };

  return LinearFocusFilter;
}(_globals.Engine.Filter);

LinearFocusFilter.prototype.availableOptions = {
  blurRadius: { type: OptionType.NUMBER, default: 30, uniformType: UniformType.FLOAT },
  size: { type: OptionType.NUMBER, default: 50, uniformType: UniformType.FLOAT },
  gradientSize: { type: OptionType.NUMBER, default: 50, uniformType: UniformType.FLOAT },
  start: { type: OptionType.VECTOR2, default: new _globals.Vector2(0, 0.5), uniformType: UniformType.FLOAT2 },
  end: { type: OptionType.VECTOR2, default: new _globals.Vector2(1, 0.5), uniformType: UniformType.FLOAT2 },
  delta: { type: OptionType.VECTOR2, default: new _globals.Vector2(1, 1), uniformType: UniformType.FLOAT2 },
  texSize: { type: OptionType.VECTOR2, default: new _globals.Vector2(100, 100), uniformType: UniformType.FLOAT2 }
};

exports.default = LinearFocusFilter;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _stackBlur = __webpack_require__(35);

var _stackBlur2 = _interopRequireDefault(_stackBlur);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UniformType = _globals.Constants.UniformType,
    OptionType = _globals.Constants.OptionType; /*
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

var RadialFocusFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(RadialFocusFilter, _Engine$Filter);

  function RadialFocusFilter() {
    (0, _classCallCheck3.default)(this, RadialFocusFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call.apply(_Engine$Filter, [this].concat(args)));

    _this._fragmentSource = __webpack_require__(220);

    _this._lastBlurRadius = null;
    _this._lastGradientRadius = null;
    _this._lastPosition = new _globals.Vector2();

    _this._blurredRenderTarget = new _globals.Engine.CanvasRenderTarget(100, 100, 1);

    _this._maskRenderTarget = new _globals.Engine.CanvasRenderTarget(100, 100, 1);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  RadialFocusFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var inputDimensions = inputTarget.getDimensions();
    var dimensionsChanged = !this._blurredRenderTarget.getDimensions().equals(inputDimensions);

    this._blurredRenderTarget.setPixelRatio(inputTarget.getPixelRatio());
    this._blurredRenderTarget.resizeTo(inputTarget.getDimensions());

    this._maskRenderTarget.setPixelRatio(inputTarget.getPixelRatio());
    this._maskRenderTarget.resizeTo(inputTarget.getDimensions());

    if (!this._outputRenderTexture) {
      this._outputRenderTexture = new _globals.Engine.RenderTexture(renderer, inputTarget.getWidth(), inputTarget.getHeight(), inputTarget.getPixelRatio());
    }

    if (!this._lastPosition.equals(this._options.position) || this._lastGradientRadius !== this._options.gradientRadius || dimensionsChanged) {
      this._renderMask();

      this._lastPosition = this._options.position.clone();
      this._lastGradientRadius = this._options.gradientRadius;
    }

    if (this._lastBlurRadius !== this._options.blurRadius || dimensionsChanged) {
      this._blurImage(inputTarget);
      this._lastBlurRadius = this._options.blurRadius;
    }

    this._applyMask(inputTarget, outputTarget);
  };

  /**
   * Creates a blurred copy of the image
   * @param  {CanvasRenderTarget} inputTarget
   * @return {Canvas}
   * @private
   */


  RadialFocusFilter.prototype._blurImage = function _blurImage(inputTarget) {
    var inputCanvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();

    var inputDimensions = new _globals.Vector2(inputCanvas.width, inputCanvas.height);
    var blurryImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    _stackBlur2.default.stackBlurCanvasRGBA(blurryImageData, 0, 0, inputCanvas.width, inputCanvas.height, this._options.blurRadius * inputDimensions.min());

    var blurryContext = this._blurredRenderTarget.getContext();
    blurryContext.putImageData(blurryImageData, 0, 0);
  };

  /**
   * Renders the mask canvas
   * @private
   */


  RadialFocusFilter.prototype._renderMask = function _renderMask() {
    var canvas = this._maskRenderTarget.getCanvas();
    var context = this._maskRenderTarget.getContext();

    var canvasDimensions = new _globals.Vector2(canvas.width, canvas.height);
    var pixelRatio = this._maskRenderTarget.getPixelRatio();
    var position = this._options.position.clone().multiply(canvasDimensions);

    var _options = this._options,
        radius = _options.radius,
        gradientRadius = _options.gradientRadius;

    radius *= canvas.height;
    gradientRadius *= canvas.height;

    // Build gradient
    var gradient = context.createRadialGradient(position.x, position.y, 0, position.x, position.y, (radius + gradientRadius) * pixelRatio);
    gradient.addColorStop(0, '#FFFFFF');
    gradient.addColorStop(radius / (radius + gradientRadius), '#FFFFFF');
    gradient.addColorStop(1, '#000000');

    // Draw gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvasDimensions.x, canvasDimensions.y);
  };

  /**
   * Applies the blur and mask to the input canvas
   * @param {CanvasRenderTarget} inputTarget
   * @param {CanvasRenderTarget} outputTarget
   * @private
   */


  RadialFocusFilter.prototype._applyMask = function _applyMask(inputTarget, outputTarget) {
    var outputContext = outputTarget.getContext();
    var inputCanvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();
    var blurredContext = this._blurredRenderTarget.getContext();
    var maskContext = this._maskRenderTarget.getContext();

    var inputImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    var pixels = inputImageData.data;
    var blurredPixels = blurredContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height).data;
    var maskPixels = maskContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height).data;

    var alpha = void 0;
    for (var i = 0; i < inputCanvas.width * inputCanvas.height * 4; i += 4) {
      alpha = maskPixels[i] / 255;

      pixels[i] = alpha * pixels[i] + (1 - alpha) * blurredPixels[i];
      pixels[i + 1] = alpha * pixels[i + 1] + (1 - alpha) * blurredPixels[i + 1];
      pixels[i + 2] = alpha * pixels[i + 2] + (1 - alpha) * blurredPixels[i + 2];
    }

    outputContext.putImageData(inputImageData, 0, 0);
  };

  return RadialFocusFilter;
}(_globals.Engine.Filter);

RadialFocusFilter.prototype.availableOptions = {
  blurRadius: { type: OptionType.NUMBER, default: 30, uniformType: UniformType.FLOAT },
  radius: { type: OptionType.NUMBER, default: 50, uniformType: UniformType.FLOAT },
  gradientRadius: { type: OptionType.NUMBER, default: 25, uniformType: UniformType.FLOAT },
  position: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.5, 0.5), uniformType: UniformType.FLOAT2 },
  delta: { type: OptionType.VECTOR2, default: new _globals.Vector2(1, 1), uniformType: UniformType.FLOAT2 },
  texSize: { type: OptionType.VECTOR2, default: new _globals.Vector2(100, 100), uniformType: UniformType.FLOAT2 }
};

exports.default = RadialFocusFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _linearFocusFilter = __webpack_require__(162);

var _linearFocusFilter2 = _interopRequireDefault(_linearFocusFilter);

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

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can draw a linear focus
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var LinearFocusOperation = function (_Operation) {
  (0, _inherits3.default)(LinearFocusOperation, _Operation);

  /**
   * Creates a new LinearFocusOperation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   */
  function LinearFocusOperation() {
    (0, _classCallCheck3.default)(this, LinearFocusOperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Operation.call.apply(_Operation, [this].concat(args)));

    _this._lastBlurRadius = _this._options.blurRadius;
    _this._lastSize = _this._options.size;
    _this._lastGradientSize = _this._options.gradientSize;

    _this._horizontalFilter = new _linearFocusFilter2.default();
    _this._verticalFilter = new _linearFocusFilter2.default();
    _this._sprite.setFilters([_this._horizontalFilter, _this._verticalFilter]);

    _this._horizontalFilter.setDelta(new _globals.Vector2(1, 1));
    _this._verticalFilter.setDelta(new _globals.Vector2(-1, 1));

    _this._filter = new _linearFocusFilter2.default();
    return _this;
  }

  /**
   * Applies the given rotation change
   * @param  {PhotoEditorSDK.Operations.RotationOperation} operation
   * @param  {Number} degrees
   */


  LinearFocusOperation.prototype.rotate = function rotate(degrees) {
    var start = this._options.start;
    var end = this._options.end;

    if (degrees === 90) {
      start.flip();
      start.x = 1 - start.x;
      end.flip();
      end.x = 1 - end.x;
    } else if (degrees === -90) {
      start.flip();
      start.y = 1 - start.y;
      end.flip();
      end.y = 1 - end.y;
    }

    this.set({ start: start, end: end });
  };

  /**
   * Applies a flip with the given direction
   * @param  {String} direction
   */


  LinearFocusOperation.prototype.flip = function flip(direction) {
    var start = this._options.start;
    var end = this._options.end;

    switch (direction) {
      case 'horizontal':
        start.x = 1 - start.x;
        end.x = 1 - end.x;
        break;
      case 'vertical':
        start.y = 1 - start.y;
        end.y = 1 - end.y;
        break;
    }

    this.set({ start: start, end: end });
  };

  /**
   * Crops this image using WebGL
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @override
   * @private
   */
  /* istanbul ignore next */


  LinearFocusOperation.prototype._renderWebGL = function _renderWebGL(inputTexture) {
    var inputDimensions = inputTexture.getDimensions();
    var shortestSide = inputDimensions.min();

    var start = this._options.start.clone();
    var end = this._options.end.clone();

    var _options = this._options,
        blurRadius = _options.blurRadius,
        size = _options.size,
        gradientSize = _options.gradientSize;

    var commonOptions = {
      blurRadius: blurRadius * shortestSide,
      size: size * shortestSide,
      gradientSize: gradientSize * shortestSide,

      start: start.clone().multiply(inputDimensions),
      end: end.clone().multiply(inputDimensions),
      texSize: inputDimensions
    };

    this._horizontalFilter.set(commonOptions);
    this._verticalFilter.set(commonOptions);

    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Renders the radial blur using Canvas2D
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @override
   * @private
   */


  LinearFocusOperation.prototype._renderCanvas = function _renderCanvas(inputTexture) {
    var inputDimensions = inputTexture.getDimensions();

    var _options2 = this._options,
        blurRadius = _options2.blurRadius,
        size = _options2.size,
        gradientSize = _options2.gradientSize,
        start = _options2.start,
        end = _options2.end;

    this._filter.set({
      blurRadius: blurRadius,
      gradientSize: gradientSize,
      size: size,
      start: start.clone(),
      end: end.clone(),
      texSize: inputDimensions
    });

    this._sprite.setFilters([this._filter]);

    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Disposes this operation
   */


  LinearFocusOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);
    this._filter.dispose();
    this._verticalFilter.dispose();
    this._horizontalFilter.dispose();
  };

  return LinearFocusOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


LinearFocusOperation.identifier = 'linear-focus';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
LinearFocusOperation.prototype.availableOptions = {
  start: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.0, 0.5) },
  end: { type: OptionType.VECTOR2, default: new _globals.Vector2(1.0, 0.5) },
  blurRadius: { type: OptionType.NUMBER, default: 0.025 },
  size: { type: OptionType.NUMBER, default: 0.1 },
  gradientSize: { type: OptionType.NUMBER, default: 0.1 }
};

exports.default = LinearFocusOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _vector = __webpack_require__(19);

var _vector2 = _interopRequireDefault(_vector);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

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

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can rotate and flip an image
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var OrientationOperation = function (_Operation) {
  (0, _inherits3.default)(OrientationOperation, _Operation);

  function OrientationOperation() {
    (0, _classCallCheck3.default)(this, OrientationOperation);
    return (0, _possibleConstructorReturn3.default)(this, _Operation.apply(this, arguments));
  }

  /**
   * Rotates and/or flips the image
   * @param  {PhotoEditorSDK} sdk
   * @returns {Promise}
   * @override
   * @private
   */
  OrientationOperation.prototype._render = function _render(sdk) {
    var actualDegrees = this._options.rotation % 360;
    var radians = actualDegrees * (Math.PI / 180);

    this._sprite.setScale(this._options.flipHorizontally ? -1 : 1, this._options.flipVertically ? -1 : 1);
    this._sprite.setRotation(radians);
    this._sprite.setAnchor(0.5, 0.5);
    this._sprite.updateTransform();

    var bounds = this._sprite.getBounds();
    this._renderTexture.resizeTo(new _vector2.default(bounds.width, bounds.height));

    // Make sure we're rendering to top left corner
    this._sprite.setPosition(this._renderTexture.getDimensions().divide(2));

    // Draw
    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Returns the dimensions the given dimensions will have after this operation
   * has been applied
   * @param {PhotoEditorSDK.Math.Vector2} dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   * @override
   */


  OrientationOperation.prototype.getNewDimensions = function getNewDimensions(dimensions) {
    dimensions = dimensions.clone();
    if (this._options.rotation % 180) {
      dimensions.flip();
    }
    return dimensions;
  };

  /**
   * Flips the image while incorporating the current rotation
   * @param {String} direction
   */


  OrientationOperation.prototype.flip = function flip(direction) {
    var rotation = this._options.rotation;

    if (rotation === 90 || rotation === 270) {
      if (direction === 'vertical') {
        direction = 'horizontal';
      } else {
        direction = 'vertical';
      }
    }

    switch (direction) {
      case 'vertical':
        this.setFlipVertically(!this.getFlipVertically());
        break;
      case 'horizontal':
        this.setFlipHorizontally(!this.getFlipHorizontally());
        break;
    }
  };

  return OrientationOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


OrientationOperation.identifier = 'orientation';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
OrientationOperation.prototype.availableOptions = {
  rotation: {
    type: OptionType.NUMBER,
    default: 0,
    validation: function validation(value) {
      if (value % 90 !== 0) {
        throw new Error('OrientationOperation: `rotation` has to be a multiple of 90.');
      }
    },
    setter: function setter(value) {
      return (value + 360) % 360;
    }
  },
  flipVertically: { type: OptionType.BOOLEAN, default: false },
  flipHorizontally: { type: OptionType.BOOLEAN, default: false }
};

exports.default = OrientationOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _radialFocusFilter = __webpack_require__(163);

var _radialFocusFilter2 = _interopRequireDefault(_radialFocusFilter);

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

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can draw a radial focus
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var RadialFocusOperation = function (_Operation) {
  (0, _inherits3.default)(RadialFocusOperation, _Operation);

  /**
   * Creates a new RadialFocusOperation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   */
  function RadialFocusOperation() {
    (0, _classCallCheck3.default)(this, RadialFocusOperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Operation.call.apply(_Operation, [this].concat(args)));

    _this._lastBlurRadius = _this._options.blurRadius;
    _this._lastGradientRadius = _this._options.gradientRadius;

    _this._horizontalFilter = new _radialFocusFilter2.default();
    _this._verticalFilter = new _radialFocusFilter2.default();
    _this._sprite.setFilters([_this._horizontalFilter, _this._verticalFilter]);

    _this._horizontalFilter.setDelta(new _globals.Vector2(1, 1));
    _this._verticalFilter.setDelta(new _globals.Vector2(-1, 1));

    _this._filter = new _radialFocusFilter2.default();
    return _this;
  }

  /**
   * Applies the given rotation change
   * @param  {Number} degrees
   */


  RadialFocusOperation.prototype.rotate = function rotate(degrees) {
    var position = this._options.position;

    if (degrees === 90) {
      position.flip();
      position.x = 1 - position.x;
    } else if (degrees === -90) {
      position.flip();
      position.y = 1 - position.y;
    }

    this.set({ position: position });
  };

  /**
   * Applies a flip with the given direction
   * @param  {String} direction
   */


  RadialFocusOperation.prototype.flip = function flip(direction) {
    var position = this._options.position;

    switch (direction) {
      case 'horizontal':
        position.x = 1 - position.x;
        break;
      case 'vertical':
        position.y = 1 - position.y;
        break;
    }

    this.set({ position: position });
  };

  /**
   * Renders the radial blur using WebGL
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @private
   * @override
   */
  /* istanbul ignore next */


  RadialFocusOperation.prototype._renderWebGL = function _renderWebGL(inputTexture) {
    var inputDimensions = inputTexture.getDimensions();
    var shortestSide = inputDimensions.min();

    var _options = this._options,
        position = _options.position,
        blurRadius = _options.blurRadius,
        radius = _options.radius,
        gradientRadius = _options.gradientRadius;


    var commonOptions = {
      blurRadius: blurRadius * shortestSide,
      radius: radius * shortestSide,
      gradientRadius: gradientRadius * shortestSide,
      position: position.clone().multiply(inputDimensions),
      texSize: inputDimensions
    };

    this._horizontalFilter.set(commonOptions);
    this._verticalFilter.set(commonOptions);

    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Renders the radial blur using Canvas2D
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @private
   * @override
   */


  RadialFocusOperation.prototype._renderCanvas = function _renderCanvas(inputTexture) {
    var _options2 = this._options,
        blurRadius = _options2.blurRadius,
        radius = _options2.radius,
        gradientRadius = _options2.gradientRadius,
        position = _options2.position;

    var inputDimensions = inputTexture.getDimensions();

    this._filter.set({
      blurRadius: blurRadius,
      radius: radius,
      gradientRadius: gradientRadius,
      position: position,
      texSize: inputDimensions
    });

    this._sprite.setFilters([this._filter]);

    this._renderTexture.render(this._container);

    return _promise2.default.resolve();
  };

  /**
   * Disposes this operation
   */


  RadialFocusOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);
    this._filter.dispose();
    this._verticalFilter.dispose();
    this._horizontalFilter.dispose();
  };

  return RadialFocusOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


RadialFocusOperation.identifier = 'radial-focus';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
RadialFocusOperation.prototype.availableOptions = {
  position: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.5, 0.5) },
  radius: { type: OptionType.NUMBER, default: 0.25 },
  gradientRadius: { type: OptionType.NUMBER, default: 0.125 },
  blurRadius: { type: OptionType.NUMBER, default: 0.025 }
};

exports.default = RadialFocusOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _brush = __webpack_require__(80);

var _brush2 = _interopRequireDefault(_brush);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _blurFilter = __webpack_require__(168);

var _blurFilter2 = _interopRequireDefault(_blurFilter);

var _maskFilter = __webpack_require__(169);

var _maskFilter2 = _interopRequireDefault(_maskFilter);

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

var OptionType = _globals.Constants.OptionType,
    RendererType = _globals.Constants.RendererType;

/**
 * An operation that can draw a selective blur using brushes
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var SelectiveBlurOperation = function (_Operation) {
  (0, _inherits3.default)(SelectiveBlurOperation, _Operation);

  /**
   * Creates a new SelectiveBlurOperation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   */
  function SelectiveBlurOperation() {
    (0, _classCallCheck3.default)(this, SelectiveBlurOperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Operation.call.apply(_Operation, [this].concat(args)));

    var renderer = _this._sdk.getRenderer();

    _this._lastBlurRadius = null;
    _this._blurredRenderTexture = new _globals.Engine.RenderTexture(renderer, 100, 100, 1);
    _this._maskRenderTexture = new _globals.Engine.RenderTexture(renderer, 100, 100, 1);

    _this._brush = new _brush2.default(_this);
    _this._brushContainer = new _globals.Engine.Container();
    _this._brushContainer.addChild(_this._brush.getDisplayObject());

    _this._outputSprite = new _globals.Engine.Sprite();
    _this._outputContainer = new _globals.Engine.Container();
    _this._outputContainer.addChild(_this._outputSprite);

    _this._maskFilter = new _maskFilter2.default();
    if (renderer.isOfType(RendererType.WEBGL)) {
      _this._horizontalFilter = new _blurFilter2.default();
      _this._verticalFilter = new _blurFilter2.default();
      _this._sprite.setFilters([_this._horizontalFilter, _this._verticalFilter]);

      _this._horizontalFilter.setDelta(new _globals.Vector2(1, 1));
      _this._verticalFilter.setDelta(new _globals.Vector2(-1, 1));

      var baseTexture = _this._maskRenderTexture.getBaseTexture();
      baseTexture.setGLUnit(_this._maskFilter.getMaskImage());
      renderer.updateTexture(baseTexture, false);

      baseTexture = _this._blurredRenderTexture.getBaseTexture();
      baseTexture.setGLUnit(_this._maskFilter.getFilterImage());
      renderer.updateTexture(baseTexture, false);
    } else if (renderer.isOfType(RendererType.CANVAS)) {
      _this._blurFilter = new _blurFilter2.default();

      _this._sprite.setFilters([_this._blurFilter]);

      _this._maskFilter.setMaskCanvas(_this._maskRenderTexture.getRenderTarget().getCanvas());
      _this._maskFilter.setFilterCanvas(_this._blurredRenderTexture.getRenderTarget().getCanvas());
    }

    _this._outputSprite.setFilters([_this._maskFilter]);
    return _this;
  }

  /**
   * Applies a flip to this operation
   * @param  {String} direction
   */


  SelectiveBlurOperation.prototype.flip = function flip(direction) {
    this._brush.applyFlip(direction);
    this.setDirty(true, true);
    this._lastBlurRadius = null;
  };

  /**
   * Applies a rotation to this operation
   * @param  {Number} degrees
   */


  SelectiveBlurOperation.prototype.rotate = function rotate(degrees) {
    this._brush.applyRotation(degrees);
    this.setDirty(true, true);
    this._lastBlurRadius = null;
  };

  /**
   * Applies a crop to this operation
   * @param  {PhotoEditorSDK.Operation} cropOperation
   * @param  {Object} options
   */


  SelectiveBlurOperation.prototype.crop = function crop(cropOperation, options) {
    this._brush.applyCrop(cropOperation, options);
    this.setDirty(true, true);
    this._lastBlurRadius = null;
  };

  /**
   * Renders this operation
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @override
   * @private
   */


  SelectiveBlurOperation.prototype._render = function _render(inputTexture) {
    this._renderBlur(inputTexture);
    this._renderMask(inputTexture);

    this._outputSprite.setTexture(inputTexture);
    this._renderTexture.render(this._outputContainer);

    return _promise2.default.resolve();
  };

  /**
   * Renders the mask
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @private
   */


  SelectiveBlurOperation.prototype._renderMask = function _renderMask(inputTexture) {
    var inputDimensions = inputTexture.getDimensions();

    var maskDimensions = this._maskRenderTexture.getDimensions();
    if (!maskDimensions.equals(inputDimensions)) {
      this._maskRenderTexture.resizeTo(inputDimensions);
    }

    this._brush.update(this._sdk, inputDimensions);
    this._maskRenderTexture.clear(_globals.Color.BLACK);
    this._maskRenderTexture.render(this._brushContainer);
  };

  /**
   * Blurs the input image
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @private
   */


  SelectiveBlurOperation.prototype._renderBlur = function _renderBlur(inputTexture) {
    var inputDimensions = inputTexture.getDimensions();

    var blurredDimensions = this._blurredRenderTexture.getDimensions();
    if (!blurredDimensions.equals(inputDimensions)) {
      this._blurredRenderTexture.resizeTo(inputDimensions);
    }

    var blurRadius = this._options.blurRadius;

    if (this._lastBlurRadius !== blurRadius || !blurredDimensions.equals(inputDimensions)) {
      var renderer = this._sdk.getRenderer();

      var blurOptions = void 0;
      if (renderer.isOfType(RendererType.WEBGL)) {
        var shortestSide = inputDimensions.min();
        blurOptions = {
          blurRadius: blurRadius * shortestSide,
          texSize: inputDimensions
        };

        this._horizontalFilter.set(blurOptions);
        this._verticalFilter.set(blurOptions);
      } else if (renderer.isOfType(RendererType.CANVAS)) {
        blurOptions = { blurRadius: blurRadius };
        this._blurFilter.set(blurOptions);
      }

      this._blurredRenderTexture.render(this._container);
      this._lastBlurRadius = blurRadius;
    }
  };

  /**
   * Returns this operation's brush
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Brush}
   */


  SelectiveBlurOperation.prototype.getBrush = function getBrush() {
    return this._brush;
  };

  /**
   * Creates and adds a new path
   * @param {Number} thickness
   * @param {Number} hardness = 1
   * @return {PhotoEditorSDK.Operations.BrushOperation.Path}
   */


  SelectiveBlurOperation.prototype.createPath = function createPath(thickness) {
    var hardness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var path = this._brush.createPath(thickness, hardness, _globals.Color.WHITE);
    this._options.paths.push(path);
    this.setDirty(true);
    return path;
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param {Boolean} dimensionsChanged = false
   */


  SelectiveBlurOperation.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer, dimensionsChanged) {
    _Operation.prototype.setDirtyForRenderer.call(this, dirty, renderer, dimensionsChanged);
    this._brush.setDirtyForRenderer(dirty, renderer, dimensionsChanged);
  };

  /**
   * Disposes this operation
   */


  SelectiveBlurOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);

    var renderer = this._sdk.getRenderer();
    if (renderer.isOfType(RendererType.WEBGL)) {
      this._verticalFilter.dispose();
      this._horizontalFilter.dispose();
    } else {
      this._blurFilter.dispose();
    }

    this._brush.dispose();
    this._maskFilter.dispose();
    this._blurredRenderTexture.dispose();
    this._maskRenderTexture.dispose();
  };

  return SelectiveBlurOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


SelectiveBlurOperation.identifier = 'selective-blur';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
SelectiveBlurOperation.prototype.availableOptions = {
  blurRadius: { type: OptionType.NUMBER, default: 0.05 },
  paths: {
    type: OptionType.ARRAY,
    default: [],
    setter: function setter(paths) {
      if (this._brush) {
        this._brush.setPaths(paths);
      }
      return paths;
    }
  }
};

exports.default = SelectiveBlurOperation;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _stackBlur = __webpack_require__(35);

var _stackBlur2 = _interopRequireDefault(_stackBlur);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType; /*
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

var BlurFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(BlurFilter, _Engine$Filter);

  function BlurFilter() {
    (0, _classCallCheck3.default)(this, BlurFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call.apply(_Engine$Filter, [this].concat(args)));

    _this._fragmentSource = __webpack_require__(223);

    _this._lastBlurRadius = null;
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {CanvasRenderer} renderer
   * @param  {RenderTarget} inputTarget
   * @param  {RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  BlurFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var inputDimensions = inputTarget.getDimensions();
    var dimensionsChanged = !outputTarget.getDimensions().equals(inputDimensions);

    outputTarget.setPixelRatio(inputTarget.getPixelRatio());
    outputTarget.resizeTo(inputTarget.getDimensions());

    if (this._lastBlurRadius !== this._options.blurRadius || dimensionsChanged) {
      this._blurImage(inputTarget, outputTarget);
      this._lastBlurRadius = this._options.blurRadius;
    }
  };

  /**
   * Creates a blurred copy of the image
   * @param  {CanvasRenderTarget} inputTarget
   * @param  {CanvasRenderTarget} outputTarget
   * @return {Canvas}
   * @private
   */


  BlurFilter.prototype._blurImage = function _blurImage(inputTarget, outputTarget) {
    var inputCanvas = inputTarget.getCanvas();
    var inputContext = inputTarget.getContext();

    var inputDimensions = new _globals.Vector2(inputCanvas.width, inputCanvas.height);
    var blurryImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    _stackBlur2.default.stackBlurCanvasRGBA(blurryImageData, 0, 0, inputCanvas.width, inputCanvas.height, this._options.blurRadius * inputDimensions.min());

    var outputContext = outputTarget.getContext();
    outputContext.putImageData(blurryImageData, 0, 0);
  };

  return BlurFilter;
}(_globals.Engine.Filter);

BlurFilter.prototype.availableOptions = {
  blurRadius: { type: OptionType.NUMBER, default: 30, uniformType: UniformType.FLOAT },
  delta: { type: OptionType.VECTOR2, default: new _globals.Vector2(1, 1), uniformType: UniformType.FLOAT2 },
  texSize: { type: OptionType.VECTOR2, default: new _globals.Vector2(100, 100), uniformType: UniformType.FLOAT2 }
};

exports.default = BlurFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    UniformType = _globals.Constants.UniformType; /*
                                                   * This file is part of PhotoEditorSDK.
                                                   *
                                                   * Copyright (C) 2016 9elements GbmH <contact@9elements.com>
                                                   * All rights reserved.
                                                   *
                                                   * Redistribution and use in source and binary forms, without
                                                   * modification, are permitted provided that the following license agreement
                                                   * is approved and a legal/financial contract was signed by the user.
                                                   * The license agreement can be found under following link:
                                                   *
                                                   * https://www.photoeditorsdk.com/LICENSE.txt
                                                   */

var MaskFilter = function (_Engine$Filter) {
  (0, _inherits3.default)(MaskFilter, _Engine$Filter);

  function MaskFilter() {
    (0, _classCallCheck3.default)(this, MaskFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine$Filter.call(this));

    _this._fragmentSource = __webpack_require__(225);
    return _this;
  }

  /**
   * Applies this filter to the given inputTarget and renders it to
   * the given outputTarget using the CanvasRenderer
   * @param  {PhotoEditorSDK.Engine.CanvasRenderer} renderer
   * @param  {PhotoEditorSDK.Engine.RenderTarget} inputTarget
   * @param  {PhotoEditorSDK.Engine.RenderTarget} outputTarget
   * @param  {Boolean} clear = false
   * @private
   */


  MaskFilter.prototype._applyCanvas = function _applyCanvas(renderer, inputTarget, outputTarget) {
    var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var inputCanvas = inputTarget.getCanvas();

    var inputContext = inputTarget.getContext();
    var outputContext = outputTarget.getContext();

    var _options = this._options,
        maskCanvas = _options.maskCanvas,
        filterCanvas = _options.filterCanvas;

    var maskContext = maskCanvas.getContext('2d');
    var filterContext = filterCanvas.getContext('2d');

    var maskPixels = maskContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height).data;
    var existingImageData = inputContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
    var existingPixels = existingImageData.data;
    var newPixels = filterContext.getImageData(0, 0, inputCanvas.width, inputCanvas.height).data;

    var alpha = void 0;
    for (var i = 0; i < inputCanvas.width * inputCanvas.height * 4; i += 4) {
      alpha = maskPixels[i] / 255;

      existingPixels[i] = alpha * newPixels[i] + (1 - alpha) * existingPixels[i];
      existingPixels[i + 1] = alpha * newPixels[i + 1] + (1 - alpha) * existingPixels[i + 1];
      existingPixels[i + 2] = alpha * newPixels[i + 2] + (1 - alpha) * existingPixels[i + 2];
    }

    outputContext.putImageData(existingImageData, 0, 0);
  };

  return MaskFilter;
}(_globals.Engine.Filter);

MaskFilter.prototype.availableOptions = {
  maskImage: { type: OptionType.NUMBER, default: 1, uniformType: UniformType.INT },
  maskCanvas: { type: OptionType.OBJECT, default: null },
  filterImage: { type: OptionType.NUMBER, default: 2, uniformType: UniformType.INT },
  filterCanvas: { type: OptionType.OBJECT, default: null }
};

exports.default = MaskFilter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _sprite = __webpack_require__(34);

var _sprite2 = _interopRequireDefault(_sprite);

var _sticker = __webpack_require__(173);

var _sticker2 = _interopRequireDefault(_sticker);

var _text = __webpack_require__(174);

var _text2 = _interopRequireDefault(_text);

var _brush = __webpack_require__(80);

var _brush2 = _interopRequireDefault(_brush);

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

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can draw sprites (text and stickers) on the canvas
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var SpriteOperation = function (_Operation) {
  (0, _inherits3.default)(SpriteOperation, _Operation);

  /**
   * Creates a new SpriteOperation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   */
  function SpriteOperation() {
    (0, _classCallCheck3.default)(this, SpriteOperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Operation.call.apply(_Operation, [this].concat(args)));

    _this._onSpriteUpdate = _this._onSpriteUpdate.bind(_this);

    var sprites = _this._options.sprites.slice();
    sprites.forEach(function (sprite) {
      _this.removeSprite(sprite);
      _this.addSprite(sprite);
    });
    return _this;
  }

  /**
   * Returns the sprites that are instances of the given class
   * @param  {Class} Klass
   * @return {PhotoEditorSDK.Sprite[]}
   */


  SpriteOperation.prototype.getSpritesOfType = function getSpritesOfType(Klass) {
    return this._options.sprites.filter(function (sprite) {
      return sprite instanceof Klass;
    });
  };

  /**
   * Applies a rotation with the given degrees
   * @param  {Number} degrees
   * @private
   */


  SpriteOperation.prototype.rotate = function rotate(degrees) {
    this._options.sprites.forEach(function (sprite) {
      sprite.applyRotation(degrees);
    });
  };

  /**
   * Applies a flip with the given direction
   * @param  {String} direction
   * @private
   */


  SpriteOperation.prototype.flip = function flip(direction) {
    this._options.sprites.forEach(function (sprite) {
      sprite.applyFlip(direction);
    });
  };

  /**
   * Gets called when a sprite is flagged as dirty / its options changed
   * @param  {PhotoEditorSDK.Sprite} sprite
   * @param  {Object} options
   * @private
   */


  SpriteOperation.prototype._onSpriteUpdate = function _onSpriteUpdate(sprite, options) {
    this.setDirty(true);
  };

  /**
   * Applies the given rotation change
   * @param  {PhotoEditorSDK.Operations.RotationOperation} operation
   * @param  {Object} options
   * @private
   */


  SpriteOperation.prototype._applyRotation = function _applyRotation(operation, options) {
    this._options.sprites.forEach(function (sprite) {
      return sprite.applyRotation(operation, options);
    });
  };

  /**
   * Applies the given crop change
   * @param  {PhotoEditorSDK.Operations.CropOperation} operation
   * @param  {Object} options
   * @private
   */


  SpriteOperation.prototype.crop = function crop(operation, options) {
    this._options.sprites.forEach(function (sprite) {
      return sprite.applyCrop(operation, options);
    });
  };

  /**
   * Returns a serialized version of the given option
   * @param {String} optionName
   * @return {*} optionName
   * @private
   * @override
   */


  SpriteOperation.prototype._serializeOption = function _serializeOption(optionName) {
    // Since `sprites` is an array of configurables, we need
    // to serialize them as well
    if (optionName === 'sprites') {
      return this._options.sprites.map(function (sprite) {
        return sprite.serializeOptions();
      });
    }
    return _Operation.prototype._serializeOption.call(this, optionName);
  };

  /**
   * Creates a new sticker object and returns it
   * @param  {Object} options
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Sticker}
   */


  SpriteOperation.prototype.createSticker = function createSticker(options) {
    return new _sticker2.default(this, options);
  };

  /**
   * Creates a new sticker object and returns it
   * @param  {Object} options
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Text}
   */


  SpriteOperation.prototype.createText = function createText(options) {
    return new _text2.default(this, options);
  };

  /**
   * Creates a brush object and returns it
   * @param  {Object} options
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Brush}
   */


  SpriteOperation.prototype.createBrush = function createBrush(options) {
    return new _brush2.default(this, options);
  };

  /**
   * Gets called when a sprite has been added
   * @param {PhotoEditorSDK.Sprite} sprite
   */


  SpriteOperation.prototype.addSprite = function addSprite(sprite) {
    this._options.sprites.push(sprite);
    this._container.addChild(sprite.getDisplayObject());

    // This operation needs to be rerendered
    this.setDirty(true);

    sprite.on('update', this._onSpriteUpdate);
  };

  /**
   * Removes the given sprite from the list of sprites
   * @param  {PhotoEditorSDK.Sprite} sprite
   * @return {Boolean}
   */


  SpriteOperation.prototype.removeSprite = function removeSprite(sprite) {
    var sprites = this._options.sprites;
    var index = sprites.indexOf(sprite);
    if (index !== -1) {
      sprite.off('update', this._onSpriteUpdate);
      this._container.removeChild(sprite.getDisplayObject());
      sprites.splice(index, 1);

      // This operation needs to be rerendered
      this.setDirty(true);

      return true;
    }
    return false;
  };

  /**
   * Renders this operation
   * @param {PhotoEditorSDK.Engine.Texture} inputTexture
   * @returns {Promise}
   * @override
   * @private
   */


  SpriteOperation.prototype._render = function _render(inputTexture) {
    var _this2 = this;

    var container = this._container;
    var sprites = this._options.sprites;

    var inputDimensions = inputTexture.getDimensions().clone().floor();
    return _globals.Promise.all(sprites.map(function (s) {
      return s.validateSettings();
    })).then(function () {
      sprites.forEach(function (sprite) {
        sprite.update(_this2._sdk, inputDimensions);
      });

      _this2._renderTexture.clear();
      _this2._renderTexture.render(container);
    });
  };

  /**
   * Takes the given Sprite to front
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Sprite} sprite
   */


  SpriteOperation.prototype.takeSpriteToFront = function takeSpriteToFront(sprite) {
    var sprites = this._options.sprites;

    var spriteIndex = sprites.indexOf(sprite);
    if (spriteIndex === -1) return;

    _globals.Utils.moveArrayItem(sprites, spriteIndex, sprites.length - 1);

    var displayObject = sprite.getDisplayObject();
    this._container.removeChild(displayObject);
    this._container.addChild(displayObject);

    this.setDirty(true);
  };

  /**
   * Returns the sprites at the given position on the canvas
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {PhotoEditorSDK.Sprite[]}
   */


  SpriteOperation.prototype.getSpritesAtPosition = function getSpritesAtPosition(position, inputDimensions) {
    var _this3 = this;

    var intersectingSprites = [];

    this._options.sprites.forEach(function (s) {
      return s.update(_this3._sdk, inputDimensions);
    });

    // Translate canvas position to relative position on sprite by
    // applying the inverse of our outputSprite's world transform matrix
    var outputSprite = this._sdk.getSprite();
    var actualPosition = outputSprite.getWorldTransform().applyInverseToVector(position);

    // Apply anchor

    var _outputSprite$getText = outputSprite.getTexture().getFrame(),
        width = _outputSprite$getText.width,
        height = _outputSprite$getText.height;

    var anchorOffset = outputSprite.getAnchor().clone().multiply(-width, -height);
    actualPosition.subtract(anchorOffset);

    // Note: `actualPosition` is now the pixel position on the output sprite, NOT
    // on the sticker / text / brush

    // Find intersecting sprite
    var sprites = this._options.sprites.slice(0).reverse();
    for (var i = 0, c = sprites.length; i < c; i++) {
      var sprite = sprites[i];
      if (sprite.getDisplayObject().isAtPosition(actualPosition)) {
        intersectingSprites.push(sprite);
      }
    }

    return intersectingSprites;
  };

  /**
   * Sets the dirtiness for the given renderer
   * @param {Boolean} dirty
   * @param {PhotoEditorSDK.Engine.BaseRenderer} renderer
   * @param {Boolean} dimensionsChanged = false
   */


  SpriteOperation.prototype.setDirtyForRenderer = function setDirtyForRenderer(dirty, renderer, dimensionsChanged) {
    _Operation.prototype.setDirtyForRenderer.call(this, dirty, renderer, dimensionsChanged);
    this._options.sprites.forEach(function (sprite) {
      sprite.setDirtyForRenderer(dirty, renderer, dimensionsChanged);
    });
  };

  /**
   * Disposes this operation
   */


  SpriteOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);
    this._options.sprites.forEach(function (sprite) {
      sprite.dispose();
    });
  };

  return SpriteOperation;
}(_operation2.default);

SpriteOperation.Sticker = _sticker2.default;
SpriteOperation.Text = _text2.default;
SpriteOperation.Brush = _brush2.default;

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */
SpriteOperation.identifier = 'sprite';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
SpriteOperation.prototype.availableOptions = {
  sprites: {
    type: OptionType.ARRAY,
    default: [],
    setter: function setter(sprites, initial) {
      var _this4 = this;

      sprites = sprites.map(function (sprite, i) {
        if (sprite instanceof _sprite2.default) {
          return sprite;
        }

        var type = sprite.type;

        delete sprite.type;

        // Create sprite from the given options
        switch (type) {
          case 'text':
            return new _text2.default(_this4, sprite);
          case 'sticker':
            return new _sticker2.default(_this4, sprite);
          case 'brush':
            return new _brush2.default(_this4, sprite);
          default:
            _globals.Log.error(_this4.constructor.name, 'Invalid sprite type: ' + sprite.type);
        }
      });

      // Remove all sprites
      if (!initial) {
        if (this._options.sprites) {
          var spritesToRemove = this._options.sprites.slice();
          spritesToRemove.forEach(function (sprite) {
            sprite.dispose();
            _this4.removeSprite(sprite);
          });
        }

        // Add all sprites
        sprites.forEach(function (sprite) {
          _this4.addSprite(sprite);
        });
      }

      return sprites;
    }
  }
};

exports.default = SpriteOperation;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _globals = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A ControlPoint is a part of a {@link PhotoEditorSDK.Operations.BrushOperation.Path}, so a Path
 * consists of multiple ControlPoints. Should only be created using {@link PhotoEditorSDK.Operations.BrushOperation.Path#addControlPoint}
 * @class
 * @memberof PhotoEditorSDK.Operations.BrushOperation
 */
var ControlPoint = function () {
  /**
   * Creates a ControlPoint
   * @param  {PhotoEditorSDK.Operations.BrushOperation.Path} path
   * @param  {PhotoEditorSDK.Math.Vector2} position
   */
  function ControlPoint(path, position) {
    (0, _classCallCheck3.default)(this, ControlPoint);

    this._path = path;
    this._drawnCanvases = [];
    this._position = position;
  }

  /**
   * Renders this ControlPoint to the given canvas
   * @param  {HTMLCanvasElement} brush
   * @param  {HTMLCanvasElement} canvas
   * @param  {PhotoEditorSDK.Operations.BrushOperation.ControlPoint} lastControlPoint
   */


  ControlPoint.prototype.renderToCanvas = function renderToCanvas(brush, canvas, lastControlPoint) {
    if (this._drawnCanvases.indexOf(canvas) !== -1) {
      // This control point has already been drawn on this canvas. Ignore.
      return;
    }

    var canvasDimensions = new _globals.Vector2(canvas.width, canvas.height);

    var context = canvas.getContext('2d');
    var position = this._position.clone().multiply(canvasDimensions); // x2
    var lastPosition = lastControlPoint.getPosition().clone().multiply(canvasDimensions); // x1
    var distance = position.clone().subtract(lastPosition).len();
    var step = brush.width / 10;

    var i = 0;
    while (i <= distance) {
      var t = Math.max(0, Math.min(1, i / distance));
      var x = lastPosition.x + (position.x - lastPosition.x) * t;
      var y = lastPosition.y + (position.y - lastPosition.y) * t;

      context.drawImage(brush, x - brush.width / 2, y - brush.height / 2);
      i += step;
    }

    this._drawnCanvases.push(canvas);
  };

  /**
   * Sets the position
   * @param {PhotoEditorSDK.Math.Vector2} position
   */


  ControlPoint.prototype.setPosition = function setPosition(position) {
    this._position = position;
  };

  /**
   * Returns the position
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  ControlPoint.prototype.getPosition = function getPosition() {
    return this._position.clone();
  };

  /**
   * Sets this ControlPoint to dirty
   */


  ControlPoint.prototype.setDirty = function setDirty() {
    this._drawnCanvases = [];
  };

  return ControlPoint;
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

exports.default = ControlPoint;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _controlPoint = __webpack_require__(171);

var _controlPoint2 = _interopRequireDefault(_controlPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType; /*
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
 * A path that can be drawn on a {@link PhotoEditorSDK.Operations.BrushOperation}. Should only be
 * created using {@link PhotoEditorSDK.Operations.BrushOperation#createPath}
 * @class
 * @extends PhotoEditorSDK.EventEmitter
 * @memberof PhotoEditorSDK.Operations.BrushOperation
 */
var Path = function (_Configurable) {
  (0, _inherits3.default)(Path, _Configurable);

  /**
   * Creates a Path
   * @param  {PhotoEditorSDK.Operations.BrushOperation} operation
   * @param  {Object} options
   * @param  {HTMLCanvasElement} canvas
   */
  function Path(operation, options, canvas) {
    (0, _classCallCheck3.default)(this, Path);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Configurable.call(this, options));

    _this._operation = operation;

    _this._canvas = canvas || _globals.Utils.createCanvas();
    _this._context = _this._canvas.getContext('2d');
    return _this;
  }

  /**
   * Draws this path onto its canvas
   * @param {PhotoEditorSDK.Math.Vector2} inputDimensions
   */


  Path.prototype.render = function render(inputDimensions) {
    var _options = this._options,
        controlPoints = _options.controlPoints,
        thickness = _options.thickness;

    if (controlPoints.length < 2) {
      return;
    }

    _globals.Utils.ensureCanvasDimensions(this._canvas, inputDimensions);

    if (!this._brush || this._lastBrushThickness !== thickness || !inputDimensions.equals(this._brushInputDimensions)) {
      this._brush = this._createBrush(inputDimensions);
      this._brushInputDimensions = inputDimensions.clone();
      this._lastBrushThickness = thickness;
    }

    var lastControlPoint = controlPoints[0];
    var controlPoint = lastControlPoint;
    for (var i = 1; i < controlPoints.length; i++) {
      controlPoint = controlPoints[i];
      controlPoint.renderToCanvas(this._brush, this._canvas, lastControlPoint);
      lastControlPoint = controlPoint;
    }
  };

  /**
   * Creates a brush from the given thickness, hardness and color
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {HTMLCanvasElement}
   * @private
   */


  Path.prototype._createBrush = function _createBrush(inputDimensions) {
    var _options2 = this._options,
        thickness = _options2.thickness,
        hardness = _options2.hardness,
        color = _options2.color;

    var canvas = _globals.Utils.createCanvas();
    canvas.width = canvas.height = thickness * inputDimensions.min();

    var context = canvas.getContext('2d');

    // Brush always has 100% opacity
    color = color.clone();
    color.a = 1;

    if (thickness === 1) {
      context.fillStyle = color.toRGBA();
      context.fillRect(0, 0, 1, 1);
    } else {
      var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2 - 1, canvas.width / 2 * hardness), canvas.width / 2, canvas.height / 2, canvas.width / 2);

      gradient.addColorStop(0, color.toRGBA());
      var transparentColor = color.clone();
      transparentColor.a = 0;
      gradient.addColorStop(1, transparentColor.toRGBA());

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }

    return canvas;
  };

  /**
   * Adds a control point at the given position to this path
   * @param {PhotoEditorSDK.Math.Vector2} position
   */


  Path.prototype.addControlPoint = function addControlPoint(position) {
    var controlPoint = new _controlPoint2.default(this, position);
    this._options.controlPoints.push(controlPoint);
    this.emit('update', this);
  };

  /**
   * Returns this path's canvas
   * @return {Canvas}
   */


  Path.prototype.getCanvas = function getCanvas() {
    return this._canvas;
  };

  /**
   * Sets the given canvas
   * @param {HTMLCanvasElement} canvas
   */


  Path.prototype.setCanvas = function setCanvas(canvas) {
    this._canvas = canvas;
    this._context = canvas.getContext('2d');
  };

  /**
   * Sets this path to dirty
   */


  Path.prototype.setDirty = function setDirty() {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    this._options.controlPoints.forEach(function (point) {
      point.setDirty();
    });
  };

  /**
   * Calls `iterator` for each control point
   * @param  {Function} iterator
   */


  Path.prototype.forEachControlPoint = function forEachControlPoint(iterator) {
    this._options.controlPoints.forEach(iterator);
  };

  /**
   * Renders this path to the given canvas with the right opacity
   * @param  {Canvas} canvas
   */


  Path.prototype.renderToCanvas = function renderToCanvas(canvas) {
    var context = canvas.getContext('2d');
    context.save();
    context.globalAlpha = this._options.color.a;
    context.drawImage(this._canvas, 0, 0);
    context.restore();
  };

  /**
   * Returns the canvas dimension for this path
   * @return {PhotoEditorSDK.Math.Vector2}
   */


  Path.prototype.getCanvasDimensions = function getCanvasDimensions() {
    return this._canvasDimensions;
  };

  return Path;
}(_globals.Configurable);

Path.prototype.availableOptions = {
  id: { type: OptionType.STRING, default: function _default() {
      return _globals.Utils.getUUID();
    } },
  color: { type: OptionType.COLOR, default: _globals.Color.RED },
  hardness: { type: OptionType.NUMBER, default: 1 },
  thickness: { type: OptionType.NUMBER, default: 0.05 },
  controlPoints: { type: OptionType.ARRAY, default: [] },
  closed: { type: OptionType.BOOLEAN, default: false }
};

exports.default = Path;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _sprite = __webpack_require__(34);

var _sprite2 = _interopRequireDefault(_sprite);

var _adjustmentsFilter = __webpack_require__(77);

var _adjustmentsFilter2 = _interopRequireDefault(_adjustmentsFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    RendererType = _globals.Constants.RendererType; /*
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
 * A sticker that can be drawn by SpriteOperation. Should only be created via {@link PhotoEditorSDK.Operations.SpriteOperation#createSticker}
 * @class
 * @memberof PhotoEditorSDK.Operations.SpriteOperation
 */
var Sticker = function (_Sprite) {
  (0, _inherits3.default)(Sticker, _Sprite);

  /**
   * Creates a new Sticker
   * @param  {PhotoEditorSDK.Operations.SpriteOperation} operation
   * @param  {Object} [options]
   */
  function Sticker() {
    (0, _classCallCheck3.default)(this, Sticker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Sprite.call.apply(_Sprite, [this].concat(args)));

    if (_this._options.image) {
      _this._onImageUpdate();
    }

    _this._adjustmentsFilter = new _adjustmentsFilter2.default();

    _this._onOptionsChange = _this._onOptionsChange.bind(_this);
    _this._options.adjustments.on('updated', _this._onOptionsChange);
    return _this;
  }

  /**
   * Returns a serialized version of this configurable
   * @param {String[]} keys
   * @param {Boolean} toObject = false
   * @return {Object}
   */


  Sticker.prototype.serializeOptions = function serializeOptions(keys) {
    var toObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var options = _Sprite.prototype.serializeOptions.call(this, keys, toObject);
    if (!keys) options.type = 'sticker';
    return options;
  };

  /**
   * Checks if this sprite should be rendered to a render texture
   * @param  {PhotoEditorSDK} sdk
   * @return {Boolean}
   * @private
   */


  Sticker.prototype._rendersToRenderTexture = function _rendersToRenderTexture(sdk) {
    var smoothDownscaling = this._options.smoothDownscaling && sdk.getRenderer().isOfType(RendererType.WEBGL);
    return smoothDownscaling || this._hasAdjustments();
  };

  /**
   * Returns the texture for the sprite that should be rendered
   * @return {PhotoEditorSDK.Engine.Texture}
   * @private
   * @abstract
   */


  Sticker.prototype._getTexture = function _getTexture() {
    return this._inputTexture;
  };

  /**
   * Updates this sprite
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Promise}
   */


  Sticker.prototype.update = function update(sdk, inputDimensions) {
    var _options = this._options,
        dimensions = _options.dimensions,
        image = _options.image;

    if (dimensions.equals(_globals.Vector2.NULL)) {
      dimensions.set(image.width, image.height);
    }

    if (this._rendersToRenderTexture(sdk)) {
      this._prepareRenderTexture(sdk);
    }

    // Stickers with adjustments are rendered to a render texture that
    // can be re-used
    if (this._hasAdjustments()) {
      // Apply adjustments
      this._renderTextureSprite.setFilters([this._adjustmentsFilter]);

      var adjustments = this._options.adjustments;
      this._adjustmentsFilter.set({
        brightness: adjustments.getBrightness(),
        saturation: adjustments.getSaturation(),
        contrast: adjustments.getContrast()
      });
    }

    this._updateSprite(inputDimensions);

    if (this._rendersToRenderTexture(sdk)) {
      this._renderToRenderTexture(sdk);
    }
    this._applyFlip();

    return _globals.Promise.resolve();
  };

  /**
   * If flip is enabled, this flips the sprite
   * @private
   */


  Sticker.prototype._applyFlip = function _applyFlip() {
    var scale = this._sprite.getScale();
    if (this._options.flipVertically) {
      scale.y *= -1;
    }
    if (this._options.flipHorizontally) {
      scale.x *= -1;
    }
    this._sprite.setScale(scale);
  };

  /**
   * Applies a flip in the given direction
   * @param  {String} direction
   */


  Sticker.prototype.applyFlip = function applyFlip(direction) {
    _Sprite.prototype.applyFlip.call(this, direction);

    var options = {
      rotation: this._options.rotation
    };

    var degrees = options.rotation / Math.PI * 180;
    var newDegrees = degrees * -1;
    options.rotation = newDegrees * Math.PI / 180;

    switch (direction) {
      case 'horizontal':
        options.flipHorizontally = !this._options.flipHorizontally;
        this.set(options);
        break;
      case 'vertical':
        options.flipVertically = !this._options.flipVertically;
        this.set(options);
        break;
    }
  };

  /**
   * Checks if this sticker has any adjustments and a filter is needed
   * @return {Boolean}
   * @private
   */


  Sticker.prototype._hasAdjustments = function _hasAdjustments() {
    var adjustments = this._options.adjustments;
    return adjustments.getBrightness() !== 0 || adjustments.getSaturation() !== 1 || adjustments.getContrast() !== 1;
  };

  /**
   * Gets called when this sticker's image is updated
   * @private
   */


  Sticker.prototype._onImageUpdate = function _onImageUpdate() {
    this._inputTexture = _globals.Engine.Texture.fromImage(this._options.image);
    this._identitySprite.setTexture(this._inputTexture);
    this._sprite.setTexture(this._inputTexture);
    this.setDirty(true);
  };

  /**
   * Sets the value for the given option, validates it
   * @param {String} optionName
   * @param {*} value
   * @param {Boolean} update = true
   * @override
   */


  Sticker.prototype.setOption = function setOption(optionName, value) {
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _Sprite.prototype.setOption.call(this, optionName, value, update);

    if (optionName === 'image' && this._identitySprite) {
      this._onImageUpdate();
    }
  };

  /**
   * Gets called when options have been changed. Sets this operation to dirty.
   * @private
   */


  Sticker.prototype._onOptionsChange = function _onOptionsChange() {
    var dirtiness = this._dirtiness;
    for (var id in dirtiness) {
      dirtiness[id] = true;
    }
  };

  /**
   * Disposes this sprite
   */


  Sticker.prototype.dispose = function dispose() {
    _Sprite.prototype.dispose.call(this);
    this._inputTexture.getBaseTexture().dispose();
    this._inputTexture = null;
    this._options.adjustments.off('updated', this._onOptionsChange);
  };

  return Sticker;
}(_sprite2.default);

Sticker.prototype.availableOptions = {
  id: { type: OptionType.STRING, default: function _default() {
      return _globals.Utils.getUUID();
    } },
  name: { type: OptionType.STRING, default: '' },
  image: { type: OptionType.OBJECT, required: true },
  position: { type: OptionType.VECTOR2, default: _globals.Vector2.NULL },
  dimensions: { type: OptionType.VECTOR2, default: _globals.Vector2.NULL },
  anchor: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.0, 0.0) },
  pivot: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.5, 0.5) },
  rotation: { type: OptionType.NUMBER, default: 0 },
  flipHorizontally: { type: OptionType.BOOLEAN, default: false },
  flipVertically: { type: OptionType.BOOLEAN, default: false },
  smoothDownscaling: { type: OptionType.BOOLEAN, default: false },
  adjustments: {
    type: OptionType.CONFIGURABLE,
    structure: {
      brightness: { type: OptionType.NUMBER, default: 0 },
      saturation: { type: OptionType.NUMBER, default: 1 },
      contrast: { type: OptionType.NUMBER, default: 1 }
    }
  }
};

exports.default = Sticker;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _sprite = __webpack_require__(34);

var _sprite2 = _interopRequireDefault(_sprite);

var _textRenderer = __webpack_require__(175);

var _textRenderer2 = _interopRequireDefault(_textRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionType = _globals.Constants.OptionType,
    RendererType = _globals.Constants.RendererType; /*
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
 * A text that can be drawn by SpriteOperation. Should only be created via {@link PhotoEditorSDK.Operations.SpriteOperation#createText}
 * @class
 * @memberof PhotoEditorSDK.Operations.SpriteOperation
 */
var Text = function (_Sprite) {
  (0, _inherits3.default)(Text, _Sprite);

  /**
   * Creates a new Text
   * @param  {PhotoEditorSDK.Operations.SpriteOperation} operation
   * @param  {Object} [options]
   */
  function Text() {
    (0, _classCallCheck3.default)(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Sprite.call.apply(_Sprite, [this].concat(args)));

    _this._textRenderer = new _textRenderer2.default(_this, _this._operation);
    _this._sprite.setTexture(_this._textRenderer.getTexture());
    return _this;
  }

  /**
   * Returns a serialized version of this configurable
   * @param {String[]} keys
   * @param {Boolean} toObject = false
   * @return {Object}
   */


  Text.prototype.serializeOptions = function serializeOptions(keys) {
    var toObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var options = _Sprite.prototype.serializeOptions.call(this, keys, toObject);
    if (!keys) options.type = 'text';
    return options;
  };

  /**
   * Returns a style object for this text
   * @param {PhotoEditorSDK} SDK
   * @param {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Object}
   */
  /* istanbul ignore next */


  Text.prototype.getDOMStyle = function getDOMStyle(sdk, inputDimensions) {
    var actualFontSize = this.getFontSize() * inputDimensions.y;

    return {
      fontWeight: this._options.fontWeight,
      fontSize: Math.round(actualFontSize) + 'px',
      fontStyle: this._options.fontStyle,
      fontFamily: this._options.fontFamily,
      lineHeight: Math.round(actualFontSize * this.getLineHeight()) + 'px',
      color: this._options.color.toRGBA(),
      backgroundColor: this._options.backgroundColor.toRGBA(),
      textAlign: this._options.alignment
    };
  };

  /**
   * Returns the bounding box for this text
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   */
  /* istanbul ignore next */


  Text.prototype.getBoundingBox = function getBoundingBox(sdk, inputDimensions) {
    return this._textRenderer.getBoundingBox(sdk, inputDimensions);
  };

  /**
   * Applies a flip in the given direction
   * @param  {String} direction
   */


  Text.prototype.applyFlip = function applyFlip(direction) {
    _Sprite.prototype.applyFlip.call(this, direction);

    var rotation = this._options.rotation;
    switch (direction) {
      case 'horizontal':
        rotation += (Math.PI - rotation) * 2;
        this.setRotation(rotation);
        break;
      case 'vertical':
        rotation += (Math.PI / 2 - rotation) * 2;
        this.setRotation(rotation);
        break;
    }
  };

  /**
   * Applies a crop with the given options
   * @param  {PhotoEditorSDK.Operations.CropOperation} cropOperation
   * @param  {Object} options
   */


  Text.prototype.applyCrop = function applyCrop(cropOperation, options) {
    _Sprite.prototype.applyCrop.call(this, cropOperation, options);
    var oldSize = cropOperation.getEnd().clone().subtract(cropOperation.getStart());
    var newSize = options.end.clone().subtract(options.start);

    var factor = newSize.clone().divide(oldSize);
    var scale = options.scale / cropOperation.getScale();
    this.setFontSize(this.getFontSize() / factor.y * scale);
    this.setMaxWidth(this.getMaxWidth() / factor.x * scale);
  };

  /**
   * Applies a rotation with the given degrees
   * @param  {Number} degrees
   */


  Text.prototype.applyRotation = function applyRotation(degrees) {
    _Sprite.prototype.applyRotation.call(this, degrees);

    var inputDimensions = this._operation.getInputDimensions();
    this.setMaxWidth(this.getMaxWidth() / inputDimensions.x * inputDimensions.y);
    this.setFontSize(this.getFontSize() / inputDimensions.y * inputDimensions.x);
  };

  /**
   * Updates this sprite
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Promise}
   */


  Text.prototype.update = function update(sdk, inputDimensions) {
    // Re-render text
    this._textRenderer.update(sdk, inputDimensions);
    var textTexture = this._textRenderer.getTexture();
    var baseTexture = textTexture.getBaseTexture();
    baseTexture.update();

    // Upload texture
    var renderer = sdk.getRenderer();

    /* istanbul ignore next */
    if (renderer.isOfType(RendererType.WEBGL)) {
      renderer.updateTexture(textTexture.getBaseTexture());
    }

    _Sprite.prototype.update.call(this, sdk, inputDimensions);

    return Promise.resolve();
  };

  /**
   * Cleans up this Sprite
   */


  Text.prototype.dispose = function dispose() {
    _Sprite.prototype.dispose.call(this);
    this._textRenderer.dispose();
  };

  return Text;
}(_sprite2.default);

Text.prototype.availableOptions = {
  id: { type: OptionType.STRING, default: function _default() {
      return _globals.Utils.getUUID();
    } },
  fontSize: { type: OptionType.NUMBER, default: 0.1 },
  lineHeight: { type: OptionType.NUMBER, default: 1.1 },
  fontFamily: { type: OptionType.STRING, default: 'Times New Roman' },
  fontWeight: { type: OptionType.ALL, default: 'normal' },
  fontStyle: { type: OptionType.STRING, default: 'normal' },
  outlineWidth: { type: OptionType.NUMBER, default: 0 },
  outlineColor: { type: OptionType.COLOR, default: _globals.Color.BLACK },
  alignment: { type: OptionType.STRING, default: 'left', available: ['left', 'center', 'right'] },
  verticalAlignment: { type: OptionType.STRING, default: 'top', available: ['top', 'center', 'bottom'] },
  color: { type: OptionType.COLOR, default: new _globals.Color(1, 0, 0, 1) },
  backgroundColor: { type: OptionType.COLOR, default: _globals.Color.TRANSPARENT },
  position: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.5, 0.5) },
  anchor: { type: OptionType.VECTOR2, default: new _globals.Vector2(0, 0) },
  pivot: { type: OptionType.VECTOR2, default: new _globals.Vector2(0.5, 0) },
  rotation: { type: OptionType.NUMBER, default: 0 },
  text: { type: OptionType.STRING, required: true },
  maxWidth: { type: OptionType.NUMBER, default: 0.5 },
  maxHeight: { type: OptionType.NUMBER, default: 0 }
};

exports.default = Text;

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

var _globals = __webpack_require__(3);

var _textSplitter = __webpack_require__(176);

var _textSplitter2 = _interopRequireDefault(_textSplitter);

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

var TextRenderer = function () {
  function TextRenderer(text, operation) {
    (0, _classCallCheck3.default)(this, TextRenderer);

    this._text = text;
    this._operation = operation;
    this._textOptions = {};

    this._createCanvas();
    this._createMeasurementCanvas();
    this._createTexture();
  }

  /**
   * Creates the canvas and initializes the text splitter
   * @private
   */


  TextRenderer.prototype._createCanvas = function _createCanvas() {
    this._canvas = _globals.Utils.createCanvas();
    this._context = this._canvas.getContext('2d');
    this._textSplitter = new _textSplitter2.default(this._context);
  };

  /**
   * Creates the canvas that we need for measuring the maximum text height
   * @private
   */


  TextRenderer.prototype._createMeasurementCanvas = function _createMeasurementCanvas() {
    this._measurementCanvas = _globals.Utils.createCanvas();
    this._measurementContext = this._measurementCanvas.getContext('2d');
  };

  /**
   * Creates the texture
   * @private
   */


  TextRenderer.prototype._createTexture = function _createTexture() {
    this._texture = _globals.Engine.Texture.fromCanvas(this._canvas);
  };

  /**
   * Applies the text options on the given context
   * @param  {Object} textOptions
   * @param  {CanvasRenderingContext2D} context
   * @private
   */


  TextRenderer.prototype._applyTextOptions = function _applyTextOptions(textOptions, context) {
    context.font = this._text.getFontWeight() + ' ' + textOptions.fontSize + 'px ' + this._text.getFontFamily();

    context.textBaseline = 'top';
    context.textAlign = this._text.getAlignment();
    context.fillStyle = this._text.getColor().toRGBA();

    context.strokeStyle = this._text.getOutlineColor().toRGBA();
    var outlineWidth = this._text.getOutlineWidth();
    if (outlineWidth > 0) {
      context.lineWidth = outlineWidth;
    }
  };

  /**
   * Iterate over all lines and split them into multiple lines, depending
   * on the width they need
   * @param {Number} maxWidth
   * @return {Array.<string>}
   * @private
   */


  TextRenderer.prototype._buildOutputLines = function _buildOutputLines(maxWidth) {
    this._textSplitter.setText(this._text.getText());
    this._textSplitter.setMaxWidth(maxWidth);
    return this._textSplitter.getLines();
  };

  /**
   * Draws the given line onto context at the given Y position
   * @param  {String} text
   * @param  {Number} y
   * @private
   */


  TextRenderer.prototype._renderTextLine = function _renderTextLine(text, y) {
    var textAlignment = this._text.getAlignment();
    var drawPosition = new _globals.Vector2(0, y); // Left alignment

    switch (textAlignment) {
      case 'center':
        drawPosition.x = this._canvas.width / 2;
        break;
      case 'right':
        drawPosition.x = this._canvas.width;
        break;
    }

    this._context.fillText(text, drawPosition.x, drawPosition.y);
    var outlineWidth = this._text.getOutlineWidth();
    if (outlineWidth > 0) {
      this._context.miterLimit = 2;
      this._context.strokeText(text, drawPosition.x, drawPosition.y);
    }
  };

  /**
   * Renders this sprite
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @returns {Promise}
   */


  TextRenderer.prototype.update = function update(sdk, inputDimensions) {
    var textOptions = this.calculateFontStyles(sdk, inputDimensions);

    var _calculateText2 = this._calculateText(sdk, textOptions, inputDimensions),
        boundingBox = _calculateText2.boundingBox,
        lines = _calculateText2.lines;

    return this._renderText(sdk, boundingBox, lines, textOptions, inputDimensions);
  };

  /**
   * Renders the text
   * @param  {PhotoEditorSDK} sdk
   * @param  {Vector2} boundingBox
   * @param  {Array.<String>} lines
   * @param  {Object} textOptions
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Promise}
   * @private
   */


  TextRenderer.prototype._renderText = function _renderText(sdk, boundingBox, lines, textOptions, inputDimensions) {
    var _this = this;

    return new _globals.Promise(function (resolve, reject) {
      // Resize the canvas
      _this._canvas.width = boundingBox.x;
      _this._canvas.height = boundingBox.y;

      if (_this._text.getMaxHeight()) {
        _this._canvas.height = Math.min(_this._text.getMaxHeight() * inputDimensions.y, _this._canvas.height);
      }

      // Update the context
      _this._context = _this._canvas.getContext('2d');

      // Render background color
      _this._context.fillStyle = _this._text.getBackgroundColor().toRGBA();
      _this._context.fillRect(0, 0, boundingBox.x, boundingBox.y);

      // Apply text options
      _this._applyTextOptions(textOptions, _this._context);

      // Draw lines
      for (var lineNum = 0; lineNum < lines.length; lineNum++) {
        var line = lines[lineNum];
        _this._renderTextLine(line, textOptions.lineHeight * lineNum);
      }

      resolve();
    });
  };

  /**
   * Calculates the actual font size and line height
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   */


  TextRenderer.prototype.calculateFontStyles = function calculateFontStyles(sdk, inputDimensions) {
    var fontSize = Math.round(this._text.getFontSize() * inputDimensions.y);
    var lineHeight = Math.round(this._text.getLineHeight() * fontSize);

    var textOptions = { fontSize: fontSize, lineHeight: lineHeight };
    if (this._textOptions.fontSize !== fontSize || this._textOptions.lineHeight !== lineHeight) {
      this._maxTextHeight = null;
      this._textOptions = textOptions;
    }

    return textOptions;
  };

  /**
   * Calculates the bounding box and new lines according to max width
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} textOptions
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Object}
   * @private
   */


  TextRenderer.prototype._calculateText = function _calculateText(sdk, textOptions, inputDimensions) {
    // Calculate max width
    var maxWidth = this._text.getMaxWidth() * inputDimensions.x;

    // Apply text options
    this._applyTextOptions(textOptions, this._context);

    // Calculate bounding box
    var boundingBox = new _globals.Vector2();
    var lines = this._text.getText().split('\n');
    if (typeof maxWidth !== 'undefined') {
      // Calculate the bounding box
      boundingBox.x = maxWidth;
      lines = this._buildOutputLines(maxWidth);
    } else {
      for (var lineNum = 0; lineNum < lines.length; lineNum++) {
        var line = lines[lineNum];
        boundingBox.x = Math.max(boundingBox.x, this._context.measureText(line).width);
      }
    }

    // Calculate boundingbox height
    var lineHeight = textOptions.lineHeight;

    var maxTextHeight = this._getMaxTextHeight(textOptions, inputDimensions);

    boundingBox.y += lines.length * lineHeight + (maxTextHeight - lineHeight);

    return { boundingBox: boundingBox, lines: lines };
  };

  /**
   * Returns the maximum text height per line
   * @param {Object} textOptions
   * @param {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Number}
   * @private
   */


  TextRenderer.prototype._getMaxTextHeight = function _getMaxTextHeight(textOptions, inputDimensions) {
    if (this._maxTextHeight) return this._maxTextHeight;

    var canvas = this._measurementCanvas;
    var context = this._measurementContext;

    var fontSize = textOptions.fontSize;

    canvas.width = fontSize * 10;
    canvas.height = fontSize * 2;

    this._applyTextOptions(textOptions, this._measurementContext);

    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = 'black';

    context.clearRect(0, 0, canvas.width, canvas.height);
    var chars = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    var charsCount = chars.length;
    var pointer = 0;
    while (pointer < charsCount) {
      var printableString = chars.substr(pointer, 5);
      pointer += 5;
      context.fillText(printableString, canvas.width / 2, canvas.height / 2);
    }

    var _context$getImageData = context.getImageData(0, 0, canvas.width, canvas.height),
        data = _context$getImageData.data;

    var y = void 0;
    // Find start Y
    var startY = null;
    for (y = 0; y < canvas.height; y++) {
      var pixelFound = false;
      for (var x = 0; x < canvas.width; x++) {
        var index = (y * canvas.width + x) * 4;
        var color = data[index] + data[index + 1] + data[index + 2] + data[index + 3];
        if (color > 0) {
          pixelFound = true;
          break;
        }
      }

      if (!pixelFound) {
        startY++;
        continue;
      }
      break;
    }

    // Find end Y
    var endY = canvas.height;
    for (y = canvas.height - 1; y >= 0; y--) {
      var _pixelFound = false;
      for (var _x = 0; _x < canvas.width; _x++) {
        var _index = (y * canvas.width + _x) * 4;
        var _color = data[_index] + data[_index + 1] + data[_index + 2] + data[_index + 3];
        if (_color > 0) {
          _pixelFound = true;
          break;
        }
      }

      if (!_pixelFound) {
        endY--;
        continue;
      }
      break;
    }

    this._maxTextHeight = endY - startY;
    return this._maxTextHeight;
  };

  /**
   * Returns this renderer's texture
   * @return {Engine.Texture}
   */


  TextRenderer.prototype.getTexture = function getTexture() {
    return this._texture;
  };

  /**
   * Returns the bounding box for this text
   * @param  {PhotoEditorSDK} sdk
   * @param  {PhotoEditorSDK.Math.Vector2} inputDimensions
   * @return {Vector2}
   */


  TextRenderer.prototype.getBoundingBox = function getBoundingBox(sdk, inputDimensions) {
    var textOptions = this.calculateFontStyles(sdk, inputDimensions);

    var _calculateText3 = this._calculateText(sdk, textOptions, inputDimensions),
        boundingBox = _calculateText3.boundingBox;

    return boundingBox;
  };

  /**
   * Disposes this text renderer
   */


  TextRenderer.prototype.dispose = function dispose() {
    this._texture.getBaseTexture().dispose();
    this._texture = null;
  };

  return TextRenderer;
}();

exports.default = TextRenderer;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

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

var TextSplitter = function () {
  function TextSplitter(context) {
    (0, _classCallCheck3.default)(this, TextSplitter);

    this._context = context;
    this._lastFontStyle = {};
    this._characterWidthCache = {};
  }

  /**
   * Returns the lines that fit the maxWidth
   * @return {Array.<String>}
   */


  TextSplitter.prototype.getLines = function getLines() {
    if (this._fontStyleChanged()) {
      this._characterWidthCache = {};
    }

    var lines = [];
    var newLineWords = [];

    // Iterate over lines
    var linesCount = this._lines.length;
    for (var l = 0; l < linesCount; l++) {
      var line = this._lines[l];

      // Iterate over words
      var words = this._buildWords(line);
      var wordsCount = words.length;
      for (var w = 0; w < wordsCount; w++) {
        var word = words[w];

        // Check if line is too wide for the maxwidth
        var currentLine = newLineWords.concat(word).join('').replace(/\s+$/i, '');
        var width = this._getWidth(currentLine);
        if (width > this._maxWidth) {
          // If there have been words before this one, start
          // a new line
          if (newLineWords.length > 0) {
            // Line too long -> line ended
            lines.push(newLineWords.join(''));

            // Start a new line with the word
            newLineWords = [word];
          }

          // If the next word is too long (without trailing spaces), split it up
          var _word = word.replace(/\s+$/i, '');
          if (this._getWidth(_word) > this._maxWidth) {
            var splitWord = this._splitWord(word);
            lines = lines.concat(splitWord.lines);
            if (splitWord.rest) {
              newLineWords = [splitWord.rest];
            }
          }
        } else {
          newLineWords.push(word);
        }
      }

      lines.push(newLineWords.join(''));
      newLineWords = [];
    }

    return lines;
  };

  /**
   * Builds an array of words from the given line
   * @param  {String} line
   * @return {Array.<String>}
   * @private
   */


  TextSplitter.prototype._buildWords = function _buildWords(line) {
    var words = [];
    var word = '';

    var len = line.length;
    for (var i = 0; i < len; i++) {
      var char = line[i];
      word += char;
      if (char === ' ' || char === '-' || i === len - 1) {
        words.push(word);
        word = '';
      }
    }

    return words;
  };

  /**
   * Splits up the given word to fit the max width
   * @param  {String} word
   * @return {Object}
   * @private
   */


  TextSplitter.prototype._splitWord = function _splitWord(word) {
    var response = {
      lines: [],
      rest: null
    };

    var wordLength = word.length;
    var chars = [];
    for (var c = 0; c < wordLength; c++) {
      var char = word[c];
      if (this._getWidth(chars.concat(char).join('')) > this._maxWidth) {
        if (chars.length > 0) {
          response.lines.push(chars.join(''));
        }
        chars = [char];
      } else {
        chars.push(char);
      }

      if (c === wordLength - 1 && chars.length > 0) {
        response.rest = chars.join('');
      }
    }

    return response;
  };

  /**
   * Checks if the font style changed from the last call
   * @return {Boolean}
   * @private
   */


  TextSplitter.prototype._fontStyleChanged = function _fontStyleChanged() {
    if (this._context.font !== this._lastFontStyle) {
      this._lastFontStyle = this._context.font;
      return true;
    }
    return false;
  };

  /**
   * Returns the measured width for the given string
   * @param  {String} string
   * @return {Number}
   * @private
   */


  TextSplitter.prototype._getWidth = function _getWidth(string) {
    var width = 0;
    var stringLength = string.length;
    for (var c = 0; c < stringLength; c++) {
      var char = string[c];
      if (!this._characterWidthCache[char]) {
        var charWidth = this._context.measureText(char).width;
        this._characterWidthCache[char] = charWidth;
      }
      width += this._characterWidthCache[char];
    }
    return width;
  };

  /**
   * Sets the text
   * @param {String} text
   */


  TextSplitter.prototype.setText = function setText(text) {
    this._text = text;
    this._lines = text.split('\n');
  };

  /**
   * Sets the max width
   * @param {Number} maxWidth
   */


  TextSplitter.prototype.setMaxWidth = function setMaxWidth(maxWidth) {
    this._maxWidth = maxWidth;
  };

  return TextSplitter;
}();

exports.default = TextSplitter;

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

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1);

var _inherits3 = _interopRequireDefault(_inherits2);

var _globals = __webpack_require__(3);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

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

var OptionType = _globals.Constants.OptionType;

/**
 * An operation that can draw a watermark on top of the image
 * @class
 * @extends PhotoEditorSDK.Operation
 * @memberof PhotoEditorSDK.Operations
 */

var WatermarkOperation = function (_Operation) {
  (0, _inherits3.default)(WatermarkOperation, _Operation);

  /**
   * Creates a new WatermarkOperation
   * @param  {PhotoEditorSDK} sdk
   * @param  {Object} [options]
   */
  function WatermarkOperation() {
    (0, _classCallCheck3.default)(this, WatermarkOperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Operation.call.apply(_Operation, [this].concat(args)));

    _this._watermarkSprite = new _globals.Engine.Sprite();
    _this._watermarkSprite.setAnchor(0.5, 0.5);
    _this._container.addChild(_this._watermarkSprite);
    return _this;
  }

  /**
   * Renders the watermark
   * @param  {PhotoEditorSDK.Engine.Texture} inputTexture
   * @private
   * @override
   */


  WatermarkOperation.prototype._render = function _render(inputTexture) {
    if (!this._watermarkTexture) {
      this._watermarkTexture = _globals.Engine.Texture.fromImage(this._options.image);
      this._watermarkSprite.setTexture(this._watermarkTexture);
    }

    var textureDimensions = inputTexture.getDimensions();

    var _options$image = this._options.image,
        width = _options$image.width,
        height = _options$image.height;

    var dimensions = _globals.Utils.resizeVectorToFit(new _globals.Vector2(width, height), textureDimensions);
    this._watermarkSprite.setPosition(textureDimensions.clone().divide(2));
    this._watermarkSprite.setWidth(dimensions.x);
    this._watermarkSprite.setHeight(dimensions.y);

    this._renderTexture.render(this._container);

    return _globals.Promise.resolve();
  };

  /**
   * Disposes this operation
   */


  WatermarkOperation.prototype.dispose = function dispose() {
    _Operation.prototype.dispose.call(this);
    this._watermarkSprite.dispose();
  };

  return WatermarkOperation;
}(_operation2.default);

/**
 * A unique string that identifies this operation. Can be used to select
 * operations.
 * @type {String}
 * @default
 */


WatermarkOperation.identifier = 'watermark';

/**
 * Specifies the available options for this operation
 * @type {Object}
 * @ignore
 */
WatermarkOperation.prototype.availableOptions = {
  image: { type: OptionType.OBJECT, required: true }
};

exports.default = WatermarkOperation;

/***/ },
/* 178 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)))

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(183), __esModule: true };

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(185), __esModule: true };

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(187), __esModule: true };

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(208);
var $Object = __webpack_require__(20).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(209);
var $Object = __webpack_require__(20).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(210);
module.exports = __webpack_require__(20).Object.setPrototypeOf;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(213);
__webpack_require__(211);
__webpack_require__(214);
__webpack_require__(215);
module.exports = __webpack_require__(20).Symbol;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(212);
__webpack_require__(216);
module.exports = __webpack_require__(60).f('iterator');

/***/ },
/* 188 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 189 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18)
  , toLength  = __webpack_require__(205)
  , toIndex   = __webpack_require__(204);
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(38)
  , gOPS    = __webpack_require__(90)
  , pIE     = __webpack_require__(53);
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
/* 192 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13).document && document.documentElement;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(83);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(83);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(52)
  , descriptor     = __webpack_require__(39)
  , setToStringTag = __webpack_require__(54)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(22)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 196 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(38)
  , toIObject = __webpack_require__(18);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(40)('meta')
  , isObject = __webpack_require__(29)
  , has      = __webpack_require__(16)
  , setDesc  = __webpack_require__(17).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(37)(function(){
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
/* 199 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(17)
  , anObject = __webpack_require__(27)
  , getKeys  = __webpack_require__(38);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18)
  , gOPN      = __webpack_require__(89).f
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
/* 201 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(16)
  , toObject    = __webpack_require__(206)
  , IE_PROTO    = __webpack_require__(55)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(29)
  , anObject = __webpack_require__(27);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(84)(Function.call, __webpack_require__(88).f(Object.prototype, '__proto__').set, 2);
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
/* 203 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57)
  , defined   = __webpack_require__(48);
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
/* 204 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(57)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(48);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(189)
  , step             = __webpack_require__(196)
  , Iterators        = __webpack_require__(50)
  , toIObject        = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(87)(Array, 'Array', function(iterated, kind){
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(28)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(52)});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(28);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(28);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(202).set});

/***/ },
/* 211 */
/***/ function(module, exports) {



/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(203)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(87)(String, 'String', function(iterated){
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
/* 213 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// ECMAScript 6 symbols shim
var global         = __webpack_require__(13)
  , has            = __webpack_require__(16)
  , DESCRIPTORS    = __webpack_require__(15)
  , $export        = __webpack_require__(28)
  , redefine       = __webpack_require__(92)
  , META           = __webpack_require__(198).KEY
  , $fails         = __webpack_require__(37)
  , shared         = __webpack_require__(56)
  , setToStringTag = __webpack_require__(54)
  , uid            = __webpack_require__(40)
  , wks            = __webpack_require__(22)
  , wksExt         = __webpack_require__(60)
  , wksDefine      = __webpack_require__(59)
  , keyOf          = __webpack_require__(197)
  , enumKeys       = __webpack_require__(191)
  , isArray        = __webpack_require__(194)
  , anObject       = __webpack_require__(27)
  , toIObject      = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(58)
  , createDesc     = __webpack_require__(39)
  , _create        = __webpack_require__(52)
  , gOPNExt        = __webpack_require__(200)
  , $GOPD          = __webpack_require__(88)
  , $DP            = __webpack_require__(17)
  , $keys          = __webpack_require__(38)
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
  __webpack_require__(89).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(53).f  = $propertyIsEnumerable;
  __webpack_require__(90).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(51)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(59)('asyncIterator');

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(59)('observable');

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(207);
var global        = __webpack_require__(13)
  , hide          = __webpack_require__(21)
  , Iterators     = __webpack_require__(50)
  , TO_STRING_TAG = __webpack_require__(22)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 217 */
/***/ function(module, exports) {

module.exports = "uniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = texture2D(u_image, v_texCoord) * v_color;\n}\n"

/***/ },
/* 218 */
/***/ function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nuniform mat3 u_projMatrix;\n\nvoid main() {\n  gl_Position = vec4((u_projMatrix * vec3(a_position, 1)).xy, 0, 1);\n  v_texCoord = a_texCoord;\n  v_color = vec4(a_color.rgb * a_color.a, a_color.a);\n}\n"

/***/ },
/* 219 */
/***/ function(module, exports) {

module.exports = "/*!\n * Based on evanw's glfx.js tilt shift shader:\n * https://github.com/evanw/glfx.js/blob/master/src/filters/blur/tiltshift.js\n */\n\nuniform sampler2D u_image;\nuniform float u_blurRadius;\nuniform float u_gradientSize;\nuniform float u_size;\nuniform vec2 u_start;\nuniform vec2 u_end;\nuniform vec2 u_delta;\nuniform vec2 u_texSize;\nvarying vec2 v_texCoord;\n\nfloat random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt = dot(co.xy,vec2(a,b));\n    highp float sn = mod(dt, 3.14);\n    return fract(sin(sn) * c);\n}\n\nvoid main() {\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(gl_FragCoord.xy / u_texSize.xy);\n\n    vec2 normal = normalize(vec2(u_start.y - u_end.y, u_end.x - u_start.x));\n    float radius = smoothstep(0.0, 1.0,\n      (abs(\n        dot(v_texCoord * u_texSize - u_start, normal)\n      ) - u_size) / u_gradientSize\n    ) * u_blurRadius;\n\n    for (float t = -30.0; t <= 30.0; t++) {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(u_image, v_texCoord + u_delta * percent * radius / u_texSize);\n\n        sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n"

/***/ },
/* 220 */
/***/ function(module, exports) {

module.exports = "/*!\n * Based on evanw's glfx.js tilt shift shader:\n * https://github.com/evanw/glfx.js/blob/master/src/filters/blur/tiltshift.js\n */\n\nuniform sampler2D u_image;\nuniform float u_radius;\nuniform float u_blurRadius;\nuniform float u_gradientRadius;\nuniform vec2 u_position;\nuniform vec2 u_delta;\nuniform vec2 u_texSize;\nvarying vec2 v_texCoord;\n\nfloat random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt = dot(co.xy,vec2(a,b));\n    highp float sn = mod(dt, 3.14);\n    return fract(sin(sn) * c);\n}\n\nvoid main() {\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(gl_FragCoord.xy / u_texSize.xy);\n    float radius = smoothstep(\n      0.0, 1.0,\n      (abs(\n        distance(v_texCoord * u_texSize, u_position)\n      ) - u_radius) / (u_gradientRadius * 2.0)\n    ) * u_blurRadius;\n    for (float t = -30.0; t <= 30.0; t++) {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(u_image, v_texCoord + u_delta * percent * radius / u_texSize);\n\n        sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n"

/***/ },
/* 221 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform float u_brightness;\nuniform float u_saturation;\nuniform float u_contrast;\nuniform float u_gamma;\nuniform float u_exposure;\nuniform float u_shadows;\nuniform float u_highlights;\n\nconst vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n\n  vec4 color = texColor;\n  float luminance = dot(color.rgb, luminanceWeighting);\n\n  // apply shadows and highlights\n  float shadow = clamp((pow(luminance, 1.0/(u_shadows+1.0)) + (-0.76)*pow(luminance, 2.0/(u_shadows+1.0))) - luminance, 0.0, 1.0);\n  float highlight = clamp((1.0 - (pow(1.0-luminance, 1.0/(2.0-u_highlights)) + (-0.8)*pow(1.0-luminance, 2.0/(2.0-u_highlights)))) - luminance, -1.0, 0.0);\n  color.rgb = (luminance + shadow + highlight) * (color.rgb / luminance );\n\n  // Apply exposure\n  color.rgb = color.rgb * pow(2.0, u_exposure);\n\n  // Apply brightness\n  color.rgb = (color.rgb + u_brightness);\n\n  // Apply saturation\n  vec3 greyScaleColor = vec3(luminance);\n  color.rgb = mix(greyScaleColor, color.rgb, u_saturation);\n\n  // Apply contrast\n  color.rgb = (color.rgb - 0.5) * u_contrast + 0.5;\n\n  // Apply gamma\n  color.rgb = pow(color.rgb, vec3(u_gamma));\n\n  // Apply alpha\n  color = vec4(color.rgb * texColor.a, texColor.a);\n\n  gl_FragColor = color;\n}\n"

/***/ },
/* 222 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform sampler2D u_filteredImage;\nuniform float u_intensity;\n\nvoid main() {\n  vec4 color0 = texture2D(u_image, v_texCoord);\n  vec4 color1 = texture2D(u_filteredImage, v_texCoord);\n  gl_FragColor = mix(color0, color1, u_intensity);\n}\n"

/***/ },
/* 223 */
/***/ function(module, exports) {

module.exports = "/*!\n * Based on evanw's glfx.js tilt shift shader:\n * https://github.com/evanw/glfx.js/blob/master/src/filters/blur/tiltshift.js\n */\n\nuniform sampler2D u_image;\nuniform float u_blurRadius;\nuniform vec2 u_delta;\nuniform vec2 u_texSize;\nvarying vec2 v_texCoord;\n\nfloat random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt = dot(co.xy,vec2(a,b));\n    highp float sn = mod(dt, 3.14);\n    return fract(sin(sn) * c);\n}\n\nvoid main() {\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(gl_FragCoord.xy / u_texSize.xy);\n\n    float radius = u_blurRadius;\n\n    for (float t = -30.0; t <= 30.0; t++) {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(u_image, v_texCoord + u_delta * percent * radius / u_texSize);\n\n        sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n"

/***/ },
/* 224 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform float u_clarity;\nuniform vec2 u_texSize;\n\nfloat random(vec3 scale, float seed) {\n  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n  vec4 original = texture2D(u_image, v_texCoord);\n\n  vec4 color = texture2D(u_image, v_texCoord);\n  color +=  texture2D(u_image, v_texCoord + vec2(-1.0, 0.0) * u_texSize);\n  color +=  texture2D(u_image, v_texCoord + vec2(1.0, 0.0) * u_texSize);\n\n  color +=  texture2D(u_image, v_texCoord + vec2(0.0, 1.0) * u_texSize);\n  color +=  texture2D(u_image, v_texCoord + vec2(-1.0, 1.0) * u_texSize);\n  color +=  texture2D(u_image, v_texCoord + vec2(1.0, 1.0) * u_texSize);\n\n  color +=  texture2D(u_image, v_texCoord + vec2(0.0, -1.0) * u_texSize);\n  color +=  texture2D(u_image, v_texCoord + vec2(-1.0, -1.0) * u_texSize);\n  color +=  texture2D(u_image, v_texCoord + vec2(1.0, -1.0) * u_texSize);\n\n  // apply unsharp mask\n  vec4 blurred = color / 9.0;\n  color = mix(blurred, original, 1.0 + u_clarity);\n\n  // desaturation, to emphesize the effect\n  vec3 grayXfer = vec3(0.3, 0.59, 0.11);\n  vec3 gray = vec3(dot(grayXfer, color.xyz));\n  float desaturation = clamp(u_clarity * 0.13, 0.0, 1.0);\n  gl_FragColor = vec4(mix(color.xyz, gray, desaturation) * color.a, color.a);\n}\n"

/***/ },
/* 225 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform sampler2D u_filterImage;\nuniform sampler2D u_maskImage;\n\nvoid main() {\n  vec4 color0 = texture2D(u_image, v_texCoord);\n  vec4 color1 = texture2D(u_filterImage, v_texCoord);\n  vec4 mask = texture2D(u_maskImage, v_texCoord);\n  gl_FragColor = mix(color0, color1, mask);\n}\n"

/***/ },
/* 226 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform sampler2D u_frameImage;\nuniform vec4 u_color;\nuniform float u_thickness;\nuniform vec2 u_textureSize;\n\nvoid main() {\n  vec4 fragColor = texture2D(u_image, v_texCoord);\n  float scaledThicknessX = u_thickness / u_textureSize.x;\n  float scaledThicknessY = u_thickness / u_textureSize.y;\n  if (v_texCoord.x < scaledThicknessX ||\n    v_texCoord.x > 1.0 - scaledThicknessX ||\n    v_texCoord.y < scaledThicknessY || v_texCoord.y > 1.0 - scaledThicknessY) {\n      fragColor = mix(fragColor, u_color, u_color.a);\n    }\n\n  gl_FragColor = fragColor;\n}\n"

/***/ },
/* 227 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform float u_brightness;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  gl_FragColor = vec4((texColor.rgb + vec3(u_brightness) * texColor.a), texColor.a);;\n}\n"

/***/ },
/* 228 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform mat4 u_colormatrix;\nuniform vec4 u_colormatrix_vec;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  gl_FragColor = texColor * u_colormatrix + u_colormatrix_vec;\n}\n"

/***/ },
/* 229 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform float u_contrast;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  gl_FragColor = vec4(((texColor.rgb - vec3(0.5)) * u_contrast + vec3(0.5) * texColor.a), texColor.a);\n}\n"

/***/ },
/* 230 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform float u_desaturation;\n\nconst vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  vec3 grayXfer = vec3(0.3, 0.59, 0.11);\n  vec3 gray = vec3(dot(grayXfer, texColor.xyz));\n  gl_FragColor = vec4(mix(texColor.xyz, gray, u_desaturation) * texColor.a, texColor.a);\n}\n"

/***/ },
/* 231 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform vec3 u_gamma;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  vec3 rgb = vec3(texColor.r, texColor.g, texColor.b);\n  rgb = pow(rgb, u_gamma);\n  gl_FragColor = vec4(rgb * texColor.a, texColor.a);;\n}\n"

/***/ },
/* 232 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\n\nuniform vec3 u_color;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n\n  vec2 textureCoord = v_texCoord - vec2(0.5, 0.5);\n  textureCoord /= 0.75;\n\n  float d = 1.0 - dot(textureCoord, textureCoord);\n  d = clamp(d, 0.2, 1.0);\n  vec3 newColor = texColor.rgb * d * u_color.rgb;\n  gl_FragColor = vec4(vec3(newColor) * texColor.a, texColor.a);\n}\n"

/***/ },
/* 233 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  texColor.b = texColor.g * 0.33;\n  texColor.r = texColor.r * 0.6;\n  texColor.b += texColor.r * 0.33;\n  texColor.g = texColor.g * 0.7;\n  gl_FragColor = texColor;\n}\n"

/***/ },
/* 234 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nvec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  float luminance = dot(texColor.rgb, W);\n  gl_FragColor = vec4(vec3(luminance) * texColor.a, texColor.a);\n}\n"

/***/ },
/* 235 */
/***/ function(module, exports) {

module.exports = "/**\n * Based off of GPUImage's LookupFilter:\n * https://github.com/BradLarson/GPUImage/blob/master/framework/Source/GPUImageLookupFilter.m\n */\n\nvarying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform sampler2D u_lookupTable;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  float blueColor = texColor.b * 63.0;\n\n  vec2 quad1;\n  quad1.y = floor(floor(blueColor) / 8.0);\n  quad1.x = floor(blueColor) - (quad1.y * 8.0);\n\n  vec2 quad2;\n  quad2.y = floor(ceil(blueColor) / 8.0);\n  quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n\n  vec2 texCoord1;\n  texCoord1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColor.r);\n  texCoord1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColor.g);\n\n  vec2 texCoord2;\n  texCoord2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColor.r);\n  texCoord2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColor.g);\n\n  vec4 newColor1 = texture2D(u_lookupTable, texCoord1);\n  vec4 newColor2 = texture2D(u_lookupTable, texCoord2);\n\n  vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n  gl_FragColor = mix(texColor, vec4(newColor.rgb, texColor.w), texColor.a);\n}\n"

/***/ },
/* 236 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform sampler2D u_lookupTable;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  float r = texture2D(u_lookupTable, vec2(texColor.r, 0.0)).r;\n  float g = texture2D(u_lookupTable, vec2(texColor.g, 0.0)).g;\n  float b = texture2D(u_lookupTable, vec2(texColor.b, 0.0)).b;\n\n  gl_FragColor = vec4(vec3(r, g, b) * texColor.a, texColor.a);\n}\n"

/***/ },
/* 237 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform float u_saturation;\n\nconst vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  float luminance = dot(texColor.rgb, luminanceWeighting);\n\n  vec3 greyScaleColor = vec3(luminance);\n\n  gl_FragColor = vec4(mix(greyScaleColor, texColor.rgb, u_saturation) * texColor.a, texColor.a);\n}\n"

/***/ },
/* 238 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\nuniform vec3 u_color;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  vec4 overlayVec4 = vec4(u_color, texColor.a);\n  gl_FragColor = max(overlayVec4 * texColor.a, texColor);\n}\n"

/***/ },
/* 239 */
/***/ function(module, exports) {

module.exports = "varying vec2 v_texCoord;\nuniform sampler2D u_image;\n\nvoid main() {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  float gray = texColor.r * 0.3 + texColor.g * 0.3 + texColor.b * 0.3;\n  gray -= 0.2;\n  gray = clamp(gray, 0.0, 1.0);\n  gray += 0.15;\n  gray *= 1.4;\n  gl_FragColor = vec4(vec3(gray) * texColor.a, texColor.a);\n}\n"

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _sdk = __webpack_require__(96);

var _sdk2 = _interopRequireDefault(_sdk);

var _math = __webpack_require__(63);

var Math = _interopRequireWildcard(_math);

var _operations = __webpack_require__(65);

var Operations = _interopRequireWildcard(_operations);

var _filters = __webpack_require__(95);

var Filters = _interopRequireWildcard(_filters);

var _primitives = __webpack_require__(5);

var FilterPrimitives = _interopRequireWildcard(_primitives);

var _engine = __webpack_require__(12);

var _engine2 = _interopRequireDefault(_engine);

var _color = __webpack_require__(11);

var _color2 = _interopRequireDefault(_color);

var _filter = __webpack_require__(4);

var _filter2 = _interopRequireDefault(_filter);

var _operation = __webpack_require__(10);

var _operation2 = _interopRequireDefault(_operation);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _operationsStack = __webpack_require__(64);

var _operationsStack2 = _interopRequireDefault(_operationsStack);

var _exif = __webpack_require__(42);

var _exif2 = _interopRequireDefault(_exif);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _configurable = __webpack_require__(14);

var _configurable2 = _interopRequireDefault(_configurable);

var _constants = __webpack_require__(9);

var _base = __webpack_require__(41);

var _base2 = _interopRequireDefault(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The current version of the SDK
 * @name PhotoEditorSDK.version
 * @internal Keep in sync with package.json
 */
_sdk2.default.version = __webpack_require__(66).version;

// Namespaces
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

_sdk2.default.Math = Math;

_sdk2.default.Operations = Operations;

_sdk2.default.Filters = Filters;

_sdk2.default.FilterPrimitives = FilterPrimitives;

_sdk2.default.Engine = _engine2.default;

// Classes

_sdk2.default.Color = _color2.default;

_sdk2.default.Filter = _filter2.default;

_sdk2.default.Operation = _operation2.default;

_sdk2.default.EventEmitter = _eventEmitter2.default;

_sdk2.default.Utils = _utils2.default;

_sdk2.default.OperationsStack = _operationsStack2.default;

_sdk2.default.EXIF = _exif2.default;

_sdk2.default.Promise = _promise2.default;

_sdk2.default.Configurable = _configurable2.default;

// Constants

_sdk2.default.RenderType = _constants.RenderType;
_sdk2.default.ImageFormat = _constants.ImageFormat;
_sdk2.default.OptionType = _constants.OptionType;

// Libs

_sdk2.default.Base64 = _base2.default;

module.exports = _sdk2.default;

/***/ }
/******/ ])
});
;