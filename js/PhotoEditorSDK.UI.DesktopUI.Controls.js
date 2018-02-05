(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("photoeditorsdk/PhotoEditorSDK.UI.DesktopUI.Core"), require("photoeditorsdk"));
	else if(typeof define === 'function' && define.amd)
		define([["PhotoEditorSDK","UI","DesktopUI"], "photoeditorsdk"], factory);
	else if(typeof exports === 'object')
		exports["_unexposedPESDK"] = factory(require("photoeditorsdk/PhotoEditorSDK.UI.DesktopUI.Core"), require("photoeditorsdk"));
	else
		root["_unexposedPESDK"] = factory(root["PhotoEditorSDK"]["UI"]["DesktopUI"], root["PhotoEditorSDK"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rAF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cAF; });
/*
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * MIT license
 * @license
 */

/* eslint-disable standard/no-callback-literal */

var root = typeof window === 'undefined' ? global : window;
var rAF = root.requestAnimationFrame;
var cAF = root.cancelAnimationFrame;

var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for (var x = 0; x < vendors.length && !rAF; ++x) {
  rAF = root[vendors[x] + 'RequestAnimationFrame'];
  cAF = root[vendors[x] + 'CancelAnimationFrame'] || root[vendors[x] + 'CancelRequestAnimationFrame'];
}

/* Bind to root is necessary as the context must be valid */
if (rAF) {
  rAF = rAF.bind(root);
}
if (cAF) {
  cAF = cAF.bind(root);
}

/* istanbul ignore next */
if (!rAF) {
  rAF = function rAF(callback, element) {
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
  cAF = function cAF(id) {
    clearTimeout(id);
  };
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var TextSprite = void 0;
if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation) {
  TextSprite = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.TextSprite;
}

var test = ("production") === 'test';

var ItemComponent = function (_BaseComponent) {
  _inherits(ItemComponent, _BaseComponent);

  function ItemComponent() {
    _classCallCheck(this, ItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onDragStart', '_onDrag', '_onDragStop', '_onRotateDragStart', '_onRotateDrag', '_onRotateDragStop', '_onCornerDrag', '_onCornerDragStop', '_onSpriteUpdate', '_onTakeToFront', '_onFlipHorizontally', '_onDuplicate', '_onDelete');
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked immediately after a component is mounted
   */


  ItemComponent.prototype.componentDidMount = function componentDidMount() {
    this.props.sprite.on('update', this._onSpriteUpdate);
  };

  /**
   * Invoked immediately before a component is unmounted and destroyed
   */


  ItemComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.sprite.off('update', this._onSpriteUpdate);
  };

  /**
   * Invoked before a mounted component receives new props
   * @param  {Object} nextProps
   */


  ItemComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.props.sprite.off('update', this._onSpriteUpdate);
    nextProps.sprite.on('update', this._onSpriteUpdate);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the sprite has been updated
   * @private
   */


  ItemComponent.prototype._onSpriteUpdate = function _onSpriteUpdate() {
    this.forceUpdate();
  };

  /**
   * Invoked when the user clicks the `take to front` button
   * @param {Event} event
   * @private
   */


  ItemComponent.prototype._onTakeToFront = function _onTakeToFront(event) {
    event.stopPropagation();
    this.props.onTakeToFront && this.props.onTakeToFront(event);
  };

  /**
   * Invoked when the user clicks the `flip horizontally` button
   * @param {Event} event
   * @private
   */


  ItemComponent.prototype._onFlipHorizontally = function _onFlipHorizontally(event) {
    event.stopPropagation();
    this.props.onFlipHorizontally && this.props.onFlipHorizontally(event);
  };

  /**
   * Invoked when the user clicks the `delete` button
   * @param {Event} event
   * @private
   */


  ItemComponent.prototype._onDelete = function _onDelete(event) {
    event.stopPropagation();
    this.props.onDelete && this.props.onDelete(event);
  };

  /**
   * Invoked when the user clicks the `duplicate` button
   * @param {Event} event
   * @private
   */


  ItemComponent.prototype._onDuplicate = function _onDuplicate(event) {
    event.stopPropagation();
    this.props.onDuplicate && this.props.onDuplicate(event);
  };

  // -------------------------------------------------------------------------- SCALING

  /**
   * Invoked when the user starts scaling the item
   * @abstract
   * @private
   */


  ItemComponent.prototype._onBeforeScale = function _onBeforeScale() {};

  /**
   * Invoked while the user is scaling the item
   * @param {Number} scale
   * @abstract
   * @private
   */


  ItemComponent.prototype._onScale = function _onScale(scale) {};

  // -------------------------------------------------------------------------- ROTATION KNOB DRAGGING

  /**
   * Invoked when the user starts dragging the rotate knob
   * @private
   */


  ItemComponent.prototype._onRotateDragStart = function _onRotateDragStart() {
    this._imageBoundingBox = this.props.canvasControls.getImageBoundingRect();
    this._containerOffset = this.props.canvasControls.getContainerOffset();

    this.props.onBeforeChange && this.props.onBeforeChange();

    this.props.onCanvasClickDisabled && this.props.onCanvasClickDisabled();
  };

  /**
   * Invoked while the user is dragging the rotate knob
   * @param  {PhotoEditorSDK.Math.Vector2} distance
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @private
   */


  ItemComponent.prototype._onRotateDrag = function _onRotateDrag(distance, position) {
    var editor = this.context.editor;
    var sprite = this.props.sprite;


    var spritePosition = this._getAbsoluteSpritePosition().add(this._imageBoundingBox.x, this._imageBoundingBox.y);
    var spritePivotPosition = spritePosition.clone();

    var mouseDistanceFromPivot = position.clone().subtract(this._containerOffset).subtract(spritePivotPosition);

    var radians = Math.atan2(mouseDistanceFromPivot.y, mouseDistanceFromPivot.x) - Math.PI / 2;

    var _props = this.props,
        snapRotation = _props.snapRotation,
        snapRotationTolerance = _props.snapRotationTolerance;

    var degrees = Math.round(radians * 180 / Math.PI);
    var nextSnap = Math.round(degrees / snapRotation) * snapRotation;
    var remainder = degrees - nextSnap;
    if (Math.abs(remainder) < snapRotationTolerance) {
      radians = nextSnap * Math.PI / 180;
    }

    sprite.setRotation(radians);
    editor.render();

    this.forceUpdate();
  };

  /**
   * Invoked when the user stops dragging the rotate knob
   * @private
   */


  ItemComponent.prototype._onRotateDragStop = function _onRotateDragStop() {
    this.props.onAfterChange && this.props.onAfterChange();

    this.props.onCanvasClickEnabled && this.props.onCanvasClickEnabled();
  };

  // -------------------------------------------------------------------------- CORNER DRAGGING

  /**
   * Invoked when the user starts dragging a corner
   * @private
   */


  ItemComponent.prototype._onCornerDragStart = function _onCornerDragStart(verticalSide, horizontalSide, relativePosition, absolutePosition) {
    var editor = this.context.editor;
    var sprite = this.props.sprite;

    var _sprite$getDimensions = sprite.getDimensions(editor.getSDK(), editor.getOutputDimensions()),
        x = _sprite$getDimensions.x;

    this._imageBoundingBox = this.props.canvasControls.getImageBoundingRect();
    this._containerOffset = this.props.canvasControls.getContainerOffset();

    var pivot = sprite.getPivot();
    var anchor = sprite.getAnchor();

    var spritePosition = this._getAbsoluteSpritePosition().add(this._imageBoundingBox.x, this._imageBoundingBox.y);
    var spriteBoundingBox = sprite.getDimensions(editor.getSDK(), editor.getOutputDimensions());
    var spriteDimensions = new Vector2(spriteBoundingBox.width, spriteBoundingBox.height);

    var spritePivotPosition = spritePosition.clone().subtract(spriteDimensions.clone().multiply(anchor)).add(spriteDimensions.clone().multiply(pivot)).round();

    var mouseDistanceFromPivot = absolutePosition.clone().subtract(this._containerOffset).subtract(spritePivotPosition);

    this._initialScaleSettings = {
      width: x,
      mouseDistanceFromPivot: mouseDistanceFromPivot
    };

    this._onBeforeScale();

    this.props.onBeforeChange && this.props.onBeforeChange();

    this.props.onCanvasClickDisabled && this.props.onCanvasClickDisabled();
  };

  /**
   * Invoked while the user is dragging a corner
   * @param  {PhotoEditorSDK.Math.Vector2} distance
   * @private
   */


  ItemComponent.prototype._onCornerDrag = function _onCornerDrag(distance) {
    var editor = this.context.editor;
    var sprite = this.props.sprite;

    var textRotation = sprite.getRotation();
    var _initialScaleSettings = this._initialScaleSettings,
        width = _initialScaleSettings.width,
        mouseDistanceFromPivot = _initialScaleSettings.mouseDistanceFromPivot;

    var newMouseDistanceFromPivot = mouseDistanceFromPivot.clone().add(distance);

    var cos = Math.cos(textRotation);
    var sin = Math.sin(textRotation);

    var newWidth = Math.max(Math.abs((newMouseDistanceFromPivot.x * cos + newMouseDistanceFromPivot.y * sin) * 2), this.constructor.MIN_WIDTH);
    var newScale = newWidth / width;

    editor.render();

    this._onScale(newScale);
  };

  /**
   * Invoked when the user stops dragging a corner
   * @private
   */


  ItemComponent.prototype._onCornerDragStop = function _onCornerDragStop() {
    this.props.onAfterChange && this.props.onAfterChange();

    this.props.onCanvasClickEnabled && this.props.onCanvasClickEnabled();
  };

  // -------------------------------------------------------------------------- ITEM DRAGGING

  /**
   * Checks if this item is draggable or not
   * @return {Boolean}
   * @private
   */


  ItemComponent.prototype._isDraggingDisabled = function _isDraggingDisabled() {
    var selected = this.props.selected;

    return !selected;
  };

  /**
   * Gets called when the user starts dragging this item
   * @private
   */


  ItemComponent.prototype._onDragStart = function _onDragStart() {
    var sprite = this.props.sprite;

    this._initialPosition = sprite.getPosition();

    this.props.onBeforeChange && this.props.onBeforeChange();
  };

  /**
   * Gets called while the user drags this item
   * @param  {Vector2} distance
   * @private
   */


  ItemComponent.prototype._onDrag = function _onDrag(distance) {
    var sprite = this.props.sprite;
    var editor = this.context.editor;


    var outputDimensions = editor.getOutputDimensions();
    var newPosition = this._initialPosition.clone().add(distance.divide(outputDimensions));

    sprite.setPosition(newPosition);

    editor.render();

    this.forceUpdate();
  };

  /**
   * Gets called when the user stops dragging this item
   * @private
   */


  ItemComponent.prototype._onDragStop = function _onDragStop() {
    this.props.onAfterChange && this.props.onAfterChange();
  };

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

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the style object for the item container
   * @return {Object}
   * @private
   */


  ItemComponent.prototype._getContainerStyle = function _getContainerStyle() {
    return {};
  };

  /**
   * Renders the corner knobs
   * @return {React.Element[]}
   * @private
   */


  ItemComponent.prototype._renderKnobs = function _renderKnobs() {
    var _this2 = this;

    var knobs = [];
    ['top', 'bottom'].forEach(function (vertical) {
      ['left', 'right'].forEach(function (horizontal) {
        var key = vertical + '-' + horizontal;
        var knobProps = _defineProperty({}, key, true);
        knobs.push(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
          {
            key: key,
            onStart: _this2._onCornerDragStart.bind(_this2, vertical, horizontal),
            onDrag: _this2._onCornerDrag,
            onStop: _this2._onCornerDragStop },
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(CornerKnob, knobProps)
        ));
      });
    });
    return knobs;
  };

  /**
   * Returns the sprite dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  ItemComponent.prototype._getSpriteDimensions = function _getSpriteDimensions() {
    var editor = this.context.editor;
    var sprite = this.props.sprite;

    var outputDimensions = editor.getOutputDimensions();
    return sprite.getDimensions(editor.getSDK(), outputDimensions);
  };

  /**
   * Returns the position for the canvas overlay
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  ItemComponent.prototype._getOverlayPosition = function _getOverlayPosition() {
    var editor = this.context.editor;
    var sprite = this.props.sprite;


    var outputDimensions = editor.getOutputDimensions();
    var spriteBoundingBox = this._getSpriteDimensions();
    var spritePosition = sprite.getPosition().clone().multiply(outputDimensions);

    var rotation = sprite.getRotation();
    var sinRotation = Math.sin(rotation);
    var cosRotation = Math.cos(rotation);

    var bounds = new Vector2(Math.abs(spriteBoundingBox.x * cosRotation) + Math.abs(spriteBoundingBox.y * sinRotation), Math.abs(spriteBoundingBox.x * sinRotation) + Math.abs(spriteBoundingBox.y * cosRotation));

    return new Vector2(spritePosition.x, spritePosition.y - bounds.y / 2 - 70).clamp(new Vector2(80, 20), outputDimensions.clone().subtract(80, 70));
  };

  /**
   * Renders the overlay controls
   * @return {React.Component}
   * @private
   */


  ItemComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    if (!this.props.selected) return;

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["CanvasOverlayControlsComponent"], {
      takeToFront: true,
      flipHorizontally: !(this.props.sprite instanceof TextSprite),
      duplicate: true,
      'delete': true,
      position: this._getOverlayPosition(),
      onTakeToFront: this._onTakeToFront,
      onFlipHorizontally: this._onFlipHorizontally,
      onDuplicate: this._onDuplicate,
      onDelete: this._onDelete
    });
  };

  ItemComponent.prototype._getItemControlsProps = function _getItemControlsProps() {
    return {};
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  ItemComponent.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        selected = _props2.selected,
        sprite = _props2.sprite;
    var editing = this.state.editing;

    var controlsAsOverlay = !editing;

    var controlsContent = [this._renderKnobs(), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      RotateControl,
      { key: 'rotateControls' },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
        {
          onStart: this._onRotateDragStart,
          onDrag: this._onRotateDrag,
          onStop: this._onRotateDragStop },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(RotateKnob, null)
      )
    )];
    var itemControlsProps = this._getItemControlsProps();
    var itemControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      ItemControls,
      _extends({
        style: this._getContainerStyle()
      }, itemControlsProps),
      controlsContent
    );

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
      {
        onStart: this._onDragStart,
        onStop: this._onDragStop,
        onDrag: this._onDrag,
        disabled: this._isDraggingDisabled() },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        OuterContainer,
        {
          onClick: this.props.onClick,
          'data-type': sprite.constructor.type,
          'data-selected': selected,
          className: test ? 'js-spriteItem' : undefined },
        this._renderOverlayControls(),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          Container,
          {
            style: this._getContainerStyle(),
            editing: selected && editing,
            innerRef: function innerRef(el) {
              _this3._container = el;
            },
            className: test ? 'js-container' : undefined },
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            Content,
            null,
            this._renderContent()
          ),
          selected && !controlsAsOverlay && controlsContent
        ),
        selected && controlsAsOverlay && itemControls
      )
    );
  };

  return ItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseComponent"]);

ItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
ItemComponent.MIN_WIDTH = 1;
ItemComponent.defaultProps = {
  snapRotation: 90,
  snapRotationTolerance: 5
};
/* harmony default export */ __webpack_exports__["a"] = (ItemComponent);


var OuterContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('120drhm', 'OuterContainer');

var Container = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('bkf7u8', {
  editing: '64zghi'
}, 'Container');

var ItemControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('36haff', 'ItemControls');

var Content = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('120drhm', 'Content');

var RotateControl = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('77tiy3', 'RotateControl');

var Knob = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('mznefm', 'Knob');

var RotateKnob = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(Knob)('1en5760', 'RotateKnob');

var CornerKnob = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(Knob)('bdmepn', {
  'top-left': '1dtvxe8',
  'top-right': '1tu191k',
  'bottom-left': '1we5ut6',
  'bottom-right': 'f2wva1'
}, 'CornerKnob');

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

/* eslint-disable brace-style */

/* harmony default export */ __webpack_exports__["a"] = ({
  load: function load(url) {
    var _this = this;

    var loadPromise = function loadPromise() {
      if (url.substr(0, 5) === 'data:' || "boolean" !== 'undefined') {
        return Promise.resolve([url, url]);
      }
    };

    return loadPromise().then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          originalSrc = _ref2[0],
          src = _ref2[1];

      return _this._createAndLoadImage(originalSrc, src);
    });
  },
  _createAndLoadImage: function _createAndLoadImage(originalSrc, src) {
    if (true) {
      return new Promise(function (resolve, reject) {
        var image = new window.Image();
        image.addEventListener('load', function () {
          resolve(image);
        });
        image.addEventListener('error', function () {
          reject(new Error('Failed to load image at ' + src));
        });
        image.crossOrigin = 'Anonymous';
        image.src = src;
      });
    }
  },
  loadXHR: function loadXHR(url, mime) {
    return new Promise(function (resolve, reject) {
      var xhr = void 0;
      if (window.XDomainRequest) {
        xhr = new window.XDomainRequest();
        if (mime) xhr.overrideMimeType(mime);

        xhr.onload = function () {
          resolve(xhr);
        };
        xhr.onerror = function (e) {
          reject(e);
        };
      } else if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
        if (mime) xhr.overrideMimeType(mime);

        xhr.onreadystatechange = function (oEvent) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr);
            } else {
              reject(new Error('HTTP Status ' + xhr.status));
            }
          }
        };
      }

      xhr.open('GET', url, true);
      xhr.send();
    });
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprites_sticker_item_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprites_text_item_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprites_brush_item_component__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */







var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var test = ("production") === 'test';

var SpritesCanvasControlsComponent = function (_CanvasControlsCompon) {
  _inherits(SpritesCanvasControlsComponent, _CanvasControlsCompon);

  function SpritesCanvasControlsComponent() {
    var _this$_events;

    _classCallCheck(this, SpritesCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onZoomDone', '_onWindowResize', '_onHistoryUndo', '_onBeforeTransform');

    _this._events = (_this$_events = {}, _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.ZOOM_DONE, _this._onZoomDone), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.WINDOW_RESIZE, _this._onWindowResize), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.HISTORY_UNDO, _this._onHistoryUndo), _this$_events);

    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, {
      visible: false,
      canvasClickDisabled: false
    });
    return _this;
  }

  /**
   * Invoked immediately after a component is mounted
   */


  SpritesCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _CanvasControlsCompon.prototype.componentDidMount.call(this);
    // We need to re-render initially
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Creates a history item with the current operation state
   * @param {PhotoEditorSDK.Operations.SpriteOperation.Sprite} sprite
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onBeforeTransform = function _onBeforeTransform(sprite) {
    this.props.controls.registerLocalHistoryChange('sprite-transform-' + sprite.getId(), true);
  };

  /**
   * Invoked when the given undo items are applied
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onHistoryUndo = function _onHistoryUndo(items) {
    var update = false;
    items.forEach(function (item) {
      var operation = item.getOperation();
      if (operation === 'sprite') {
        update = true;
      }
    });

    if (update) {
      var operation = this.getSharedState('operation');

      // A history undo could have already destroyed the operation
      if (!operation) return;

      // If the currently selected sprite is no longer available, select the next one
      var selectedSprite = this.getSharedState('selectedSprite');
      var sprites = operation.getSprites();
      if (sprites.indexOf(selectedSprite) === -1) {
        this._selectNextSprite();
      }
    }
  };

  /**
   * Invoked when the window has been resized
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onWindowResize = function _onWindowResize() {
    var _this2 = this;

    var editor = this.context.editor;

    editor.once('rendered', function () {
      _this2.forceUpdate();
    });
  };

  /**
   * Gets called after a zoom has been done
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onZoomDone = function _onZoomDone() {
    var editor = this.context.editor;

    editor.render();

    this.setState({ visible: true });
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
    if (this.state.canvasClickDisabled) return;

    var hitTest = this._performHitTest(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].getEventPosition(e));
    if (!hitTest) {
      if (this.getSharedState('selectedSprite')) {
        this._onItemBlur();
      }
      this.context.screen.switchToControls('default');
    }
  };

  /**
   * Invoked when the user deletes a sprite
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Sprite} sprite
   * @param  {Event} event
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteDelete = function _onSpriteDelete(sprite) {
    this.props.controls.registerLocalHistoryChange('sprite-deletion', false);

    var operation = this.getSharedState('operation');
    operation.removeSprite(sprite);
    sprite.dispose();

    this._selectNextSprite();

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the user takes a sprite to front
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Sprite} sprite
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteTakeToFront = function _onSpriteTakeToFront(sprite) {
    this.props.controls.registerLocalHistoryChange('sprite-order', false);

    var operation = this.getSharedState('operation');
    operation.takeSpriteToFront(sprite);
    this.forceUpdate();

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the user flips a sprite horizontally
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Sprite} sprite
   * @param  {Event} event
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteFlipHorizontally = function _onSpriteFlipHorizontally(sprite, event) {
    event.stopPropagation();
    this.props.controls.registerLocalHistoryChange('sprite-order', false);

    sprite.setFlipHorizontally(!sprite.getFlipHorizontally());
    this.forceUpdate();

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the user duplicates a sprite
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Sprite} sprite
   * @param  {Event} event
   * @private
   */


  SpritesCanvasControlsComponent.prototype._onSpriteDuplicate = function _onSpriteDuplicate(sprite, event) {
    event.stopPropagation();
    this.props.controls.registerLocalHistoryChange('sprite-creation', false);

    var operation = this.getSharedState('operation');

    var options = sprite.serializeOptions();
    delete options.id;
    delete options.type;

    // `serializeOptions()` serializes the image into a URL, but we need to re-use the actual
    // image object here.
    if (sprite.hasOption('image')) {
      options.image = sprite.getImage();
    }

    var inputDimensions = operation.getInputDimensions();
    options.position.add(new Vector2(10, 10).divide(inputDimensions));

    var newSprite = this._createSprite(options);
    operation.addSprite(newSprite);
    this.setSharedState({
      selectedSprite: newSprite
    });

    var editor = this.context.editor;

    editor.render();
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Selects the next sprite
   * @private
   */


  SpritesCanvasControlsComponent.prototype._selectNextSprite = function _selectNextSprite() {
    var operation = this.getSharedState('operation');
    var sprites = operation.getSprites();
    var nextSprite = sprites[sprites.length - 1];
    if (!nextSprite) {
      this.props.controls.skipHistory = true;
      this.context.screen.switchToControls('default');
    } else {
      this.setSharedState({ selectedSprite: nextSprite });
    }
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the component class for the given sprite
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.Sprite} sprite
   * @return {React.Component}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._getComponentTypeForSprite = function _getComponentTypeForSprite(sprite) {
    var SpriteOperation = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation;

    switch (sprite.constructor) {
      case SpriteOperation.StickerSprite:
        return __WEBPACK_IMPORTED_MODULE_2__sprites_sticker_item_component__["a" /* default */];
      case SpriteOperation.TextSprite:
        return __WEBPACK_IMPORTED_MODULE_3__sprites_text_item_component__["a" /* default */];
      case SpriteOperation.BrushSprite:
        return __WEBPACK_IMPORTED_MODULE_4__sprites_brush_item_component__["a" /* default */];
    }
  };

  /**
   * Returns the props that are passed to the item component of the given sprite
   * @param  {Sprite} sprite
   * @return {Object}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._getPropsForSprite = function _getPropsForSprite(sprite) {
    var props = {};
    props.hideContent = true;
    return props;
  };

  /**
   * Renders the sprite items
   * @param {Sprite[]} sprites
   * @return {React.Component[]}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._renderSpriteItems = function _renderSpriteItems(sprites) {
    var _this3 = this;

    var selectedSprite = this.getSharedState('selectedSprite');
    return sprites.map(function (sprite) {
      var SpriteComponent = _this3._getComponentTypeForSprite(sprite);
      var spriteProps = _this3._getPropsForSprite(sprite);
      var selected = selectedSprite === sprite;
      return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(SpriteComponent, _extends({
        sprite: sprite,
        selected: selected,
        onClick: _this3._onCanvasClick,
        onBeforeChange: _this3._onBeforeTransform.bind(_this3, sprite),
        onCanvasClickDisabled: _this3._onCanvasClickDisabled,
        onCanvasClickEnabled: _this3._onCanvasClickEnabled,
        onDelete: _this3._onSpriteDelete.bind(_this3, sprite),
        onTakeToFront: _this3._onSpriteTakeToFront.bind(_this3, sprite),
        onFlipHorizontally: _this3._onSpriteFlipHorizontally.bind(_this3, sprite),
        onDuplicate: _this3._onSpriteDuplicate.bind(_this3, sprite),
        snapRotation: _this3.props.options.snapRotation,
        snapRotationTolerance: _this3.props.options.snapRotationTolerance,
        canvasControls: _this3,
        key: sprite.getId()
      }, spriteProps));
    });
  };

  /**
   * Renders the overlay controls
   * @return {React.Element}
   * @private
   */


  SpritesCanvasControlsComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    return null;
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  SpritesCanvasControlsComponent.prototype._renderControls = function _renderControls() {
    var _this4 = this;

    if (!this.state.visible) return;

    var operation = this.getSharedState('operation');
    var sprites = operation.getSprites();

    var containerStyle = this._container && this._getContainerStyle();
    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      CanvasControls,
      { className: test ? 'js-spritesCanvasControls' : undefined },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        Container,
        {
          innerRef: function innerRef(el) {
            _this4._innerContainer = el;
          },
          style: containerStyle,
          className: test ? 'js-container' : undefined },
        !this.state.canvasClickDisabled && __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(ClickHandlerForInternetExplorer, { onClick: this._onCanvasClick }),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          'div',
          null,
          this._renderSpriteItems(sprites),
          this._renderOverlayControls()
        )
      )
    );
  };

  return SpritesCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["CanvasControlsComponent"]);

// -------------------------------------------------------------------------- STYLES

SpritesCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["CanvasControlsComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (SpritesCanvasControlsComponent);
var CanvasControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('120drhm', 'CanvasControls');

var Container = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1anj0of', 'Container');

// http://stackoverflow.com/questions/14172630/ie10-is-not-handling-click-events-help-using-mspointer
var ClickHandlerForInternetExplorer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('o35414', 'ClickHandlerForInternetExplorer');

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_loaders_image_loader__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var StickerItemComponent = function (_ItemComponent) {
  _inherits(StickerItemComponent, _ItemComponent);

  function StickerItemComponent() {
    _classCallCheck(this, StickerItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ItemComponent.call.apply(_ItemComponent, [this].concat(args)));

    _this.state = {
      renderAsSVG: false,
      svgAttributes: {}
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked immediately after a component is mounted
   */


  StickerItemComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _ItemComponent.prototype.componentDidMount.call(this);

    if (this.props.hideContent) return null;

    var sprite = this.props.sprite;

    if (sprite.getImage().src.match(/\w+\.svg(?=\?|$)/i) && sprite.getTintMode() !== 'none') {
      __WEBPACK_IMPORTED_MODULE_2_shared_loaders_image_loader__["a" /* default */].loadXHR(sprite.getImage().src, 'image/svg+xml').then(function (xhr) {
        var svgAttributes = xhr.responseXML.documentElement.attributes;
        var attributesObject = {};
        for (var i = 0; i < svgAttributes.length; i++) {
          var _svgAttributes$i = svgAttributes[i],
              name = _svgAttributes$i.name,
              value = _svgAttributes$i.value;

          if (name === 'xmlns:xlink') name = 'xmlnsXlink';
          attributesObject[name] = value;
        }

        var svgContent = xhr.responseText.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/im)[1];
        svgContent = svgContent.replace(/\s+?fill=["'].*?["']/ig, ''); // Make SVGs tintable

        _this2.setState({
          renderAsSVG: true,
          svgContent: svgContent,
          svgAttributes: attributesObject
        });
      });
    }
  };

  // -------------------------------------------------------------------------- SCALING

  /**
   * Invoked when the user starts scaling the item
   * @private
   */


  StickerItemComponent.prototype._onBeforeScale = function _onBeforeScale() {
    var sprite = this.props.sprite;

    this._initialOptions = {
      dimensions: sprite.getDimensions().clone()
    };
  };

  /**
   * Invoked while the user is scaling the item
   * @param {Number} scale
   * @private
   */


  StickerItemComponent.prototype._onScale = function _onScale(scale) {
    var editor = this.context.editor;
    var dimensions = this._initialOptions.dimensions;
    var sprite = this.props.sprite;

    sprite.set({
      dimensions: dimensions.clone().multiply(scale / editor.zoom.level)
    });

    this.forceUpdate();
    editor.render();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the sprite dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  StickerItemComponent.prototype._getSpriteDimensions = function _getSpriteDimensions() {
    var editor = this.context.editor;
    var sprite = this.props.sprite;

    return sprite.getDimensions().clone().multiply(editor.zoom.level);
  };

  /**
   * Returns the style object for the item container
   * @return {Object}
   * @private
   */


  StickerItemComponent.prototype._getContainerStyle = function _getContainerStyle() {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var sprite = this.props.sprite;

    var stickerPosition = sprite.getPosition().clone().multiply(outputDimensions);

    var degrees = sprite.getRotation() * 180 / Math.PI;
    var transform = 'rotateZ(' + degrees.toFixed(2) + 'deg)';
    var transformOrigin = '50% 50%';

    var dimensions = sprite.getDimensions().clone().multiply(editor.zoom.level);
    return {
      width: dimensions.x,
      height: dimensions.y,
      left: stickerPosition.x,
      top: stickerPosition.y,
      marginLeft: dimensions.x * -0.5,
      marginTop: dimensions.y * -0.5,
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

  /**
   * Returns the style object for the content element
   * @return {Object}
   * @private
   */


  StickerItemComponent.prototype._getContentStyle = function _getContentStyle() {
    var sprite = this.props.sprite;

    var transform = 'rotateY(' + (sprite.getFlipHorizontally() ? 180 : 0) + 'deg) rotateX(' + (sprite.getFlipVertically() ? 180 : 0) + 'deg)';
    var style = {
      opacity: sprite.getAlpha(),
      transform: transform,
      MozTransform: transform,
      msTransform: transform,
      WebkitTransform: transform
    };

    if (this.state.renderAsSVG) {
      style.fill = sprite.getTintColor().toRGBA();
    }
    return style;
  };

  /**
   * Renders this item's content
   * @return {React.Element}
   */


  StickerItemComponent.prototype._renderContent = function _renderContent() {
    if (this.props.hideContent) return null;

    var sprite = this.props.sprite;
    var svgAttributes = this.state.svgAttributes;

    return this.state.renderAsSVG ? React.createElement(SVGImage, _extends({ style: this._getContentStyle(), dangerouslySetInnerHTML: { __html: this.state.svgContent } }, svgAttributes)) : React.createElement(Image, { src: sprite.getImage().src, style: this._getContentStyle() });
  };

  return StickerItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_component__["a" /* default */]);

StickerItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1__item_component__["a" /* default */].contextTypes;
StickerItemComponent.MIN_WIDTH = __WEBPACK_IMPORTED_MODULE_1__item_component__["a" /* default */].MIN_WIDTH;
/* harmony default export */ __webpack_exports__["a"] = (StickerItemComponent);


var Image = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].img('1ssoezr', 'Image');

var SVGImage = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].svg('1ssoezr', 'SVGImage');

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_component__ = __webpack_require__(3);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var test = ("production") === 'test';

var TextItemComponent = function (_ItemComponent) {
  _inherits(TextItemComponent, _ItemComponent);

  function TextItemComponent() {
    _classCallCheck(this, TextItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ItemComponent.call.apply(_ItemComponent, [this].concat(args)));

    _this._bindAll('_onTextChange', '_onBlur', '_onItemDoubleClick', '_onWidthDrag', '_onWidthDragStop');

    _this.state = {
      editing: false,
      updateBecauseIESucks: false
    };
    return _this;
  }

  // -------------------------------------------------------------------------- ITEM DRAGGING

  /**
   * Checks if this item is draggable or not
   * @return {Boolean}
   * @private
   */


  TextItemComponent.prototype._isDraggingDisabled = function _isDraggingDisabled() {
    return _ItemComponent.prototype._isDraggingDisabled.call(this) || this.state.editing;
  };

  // -------------------------------------------------------------------------- PUBLIC API

  /**
   * Enters the edit mode
   */


  TextItemComponent.prototype.enterEditMode = function enterEditMode() {
    var _this2 = this;

    var editor = this.context.editor;
    var sprite = this.props.sprite;

    sprite.setVisible(false);
    editor.render();

    this.setState({ editing: true }, function () {
      if (!sprite._edited) {
        sprite.setText('');
        _this2._textField.value = '';
        sprite._edited = true;
        _this2.forceUpdate();
      }

      _this2._textField.focus();
      _this2._textField.select();
    });
  };

  TextItemComponent.prototype.leaveEditMode = function leaveEditMode() {
    var editor = this.context.editor;
    var sprite = this.props.sprite;

    sprite.setVisible(true);
    editor.render();

    this.setState({ editing: false });
  };

  // -------------------------------------------------------------------------- EVENTS

  TextItemComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return true;
  };

  /**
   * Invoked when the user clicks the `take to front` button
   * @param {Event} event
   * @private
   */


  TextItemComponent.prototype._onTakeToFront = function _onTakeToFront() {
    var _ItemComponent$protot;

    this.leaveEditMode();

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (_ItemComponent$protot = _ItemComponent.prototype._onTakeToFront).call.apply(_ItemComponent$protot, [this].concat(args));
  };

  /**
   * Invoked when the user clicks the `flip horizontally` button
   * @param {Event} event
   * @private
   */


  TextItemComponent.prototype._onFlipHorizontally = function _onFlipHorizontally() {
    var _ItemComponent$protot2;

    this.leaveEditMode();

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    (_ItemComponent$protot2 = _ItemComponent.prototype._onFlipHorizontally).call.apply(_ItemComponent$protot2, [this].concat(args));
  };

  /**
   * Invoked when the user clicks the `duplicate` button
   * @param {Event} event
   * @private
   */


  TextItemComponent.prototype._onDuplicate = function _onDuplicate() {
    var _ItemComponent$protot3;

    this.leaveEditMode();

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    (_ItemComponent$protot3 = _ItemComponent.prototype._onDuplicate).call.apply(_ItemComponent$protot3, [this].concat(args));
  };

  /**
   * Invoked when the sprite has been updated
   * @param {PhotoEditorSDK.Operations.SpriteOperation.TextSprite} text
   * @param {Object} options
   * @private
   */


  TextItemComponent.prototype._onSpriteUpdate = function _onSpriteUpdate(text, options) {
    var _this3 = this;

    if (__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10) && options.alignment && text.getAlignment() !== options.alignment) {
      this.setState({
        updateBecauseIESucks: true
      }, function () {
        Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["requestAnimationFrame"])(function () {
          _this3.setState({
            updateBecauseIESucks: false
          });
        });
      });
    }

    _ItemComponent.prototype._onSpriteUpdate.call(this);
  };

  // -------------------------------------------------------------------------- WIDTH RESIZING

  /**
   * Invoked when the user starts dragging one of the width controls
   * @param  {String} side
   * @param  {PhotoEditorSDK.Math.Vector2} relativePosition
   * @param  {PhotoEditorSDK.Math.Vector2} absolutePosition
   * @private
   */


  TextItemComponent.prototype._onWidthDragStart = function _onWidthDragStart(side, relativePosition, absolutePosition) {
    var editor = this.context.editor;
    var sprite = this.props.sprite;


    var anchor = sprite.getAnchor();

    this._imageBoundingBox = this.props.canvasControls.getImageBoundingRect();
    this._containerOffset = this.props.canvasControls.getContainerOffset();

    var spritePosition = this._getAbsoluteSpritePosition().add(this._imageBoundingBox.x, this._imageBoundingBox.y);
    var spriteBoundingBox = sprite.getDimensions(editor.getSDK(), editor.getOutputDimensions());
    var spriteDimensions = new Vector2(spriteBoundingBox.width, spriteBoundingBox.height);

    var spriteCenterPosition = spritePosition.clone().subtract(spriteDimensions.clone().multiply(anchor)).add(spriteDimensions.clone().multiply(0.5)).round();

    var mouseDistanceFromCenter = absolutePosition.clone().subtract(this._containerOffset).subtract(spriteCenterPosition);

    this._initialScaleSettings = {
      maxWidth: sprite.getMaxWidth(),
      mouseDistanceFromCenter: mouseDistanceFromCenter
    };

    this.props.onBeforeChange && this.props.onBeforeChange();

    this.props.onCanvasClickDisabled && this.props.onCanvasClickDisabled();
  };

  /**
   * Invoked while the user is dragging one of the width controls
   * @param {PhotoEditorSDK.Math.Vector2} distance
   * @private
   */


  TextItemComponent.prototype._onWidthDrag = function _onWidthDrag(distance) {
    var sprite = this.props.sprite;

    var textRotation = sprite.getRotation();
    var mouseDistanceFromCenter = this._initialScaleSettings.mouseDistanceFromCenter;

    var newMouseDistanceFromCenter = mouseDistanceFromCenter.clone().add(distance);

    var cos = Math.cos(textRotation);
    var sin = Math.sin(textRotation);

    var newMaxWidth = Math.max(Math.abs((newMouseDistanceFromCenter.x * cos + newMouseDistanceFromCenter.y * sin) * 2), 50) / this._imageBoundingBox.width;
    sprite.setMaxWidth(newMaxWidth);

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the user stops dragging the width controls
   * @private
   */


  TextItemComponent.prototype._onWidthDragStop = function _onWidthDragStop() {
    this.props.onAfterChange && this.props.onAfterChange();

    this.props.onCanvasClickEnabled && this.props.onCanvasClickEnabled();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the text area loses focus
   * @private
   */


  TextItemComponent.prototype._onBlur = function _onBlur() {
    this.leaveEditMode();

    var sprite = this.props.sprite;

    if (sprite && sprite.getText() === '') {
      sprite.setText(this._t('editor.controls.text.defaultText'));
      sprite._edited = false;
    }
  };

  /**
   * Invoked when the user has changed the text
   * @param  {Event} e
   * @private
   */


  TextItemComponent.prototype._onTextChange = function _onTextChange(e) {
    var sprite = this.props.sprite;

    sprite.setText(e.target.value);

    this.forceUpdate();
  };

  /**
   * Invoked when the user has double-clicked the item
   * @private
   */


  TextItemComponent.prototype._onItemDoubleClick = function _onItemDoubleClick() {
    if (!this.props.selected) return;

    this.enterEditMode();
  };

  // -------------------------------------------------------------------------- SCALING

  /**
   * Invoked when the user starts scaling the item
   * @private
   */


  TextItemComponent.prototype._onBeforeScale = function _onBeforeScale() {
    var sprite = this.props.sprite;

    this._initialOptions = {
      maxWidth: sprite.getMaxWidth(),
      fontSize: sprite.getFontSize()
    };
  };

  /**
   * Invoked while the user is scaling the item
   * @param {Number} scale
   * @private
   */


  TextItemComponent.prototype._onScale = function _onScale(scale) {
    var _initialOptions = this._initialOptions,
        maxWidth = _initialOptions.maxWidth,
        fontSize = _initialOptions.fontSize;
    var sprite = this.props.sprite;

    sprite.set({
      maxWidth: maxWidth * scale,
      fontSize: fontSize * scale
    });

    var mediator = this.context.mediator;

    mediator.emit(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TEXT_SCALED, sprite);

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the style object for the item container
   * @return {Object}
   * @private
   */


  TextItemComponent.prototype._getContainerStyle = function _getContainerStyle() {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var sprite = this.props.sprite;

    var textPosition = sprite.getPosition().clone().multiply(outputDimensions);

    var degrees = sprite.getRotation() * 180 / Math.PI;
    var transform = 'rotateZ(' + degrees.toFixed(2) + 'deg)';
    var transformOrigin = '50% 50%';

    var maxWidth = sprite.getMaxWidth() * outputDimensions.x;
    var height = sprite.getDimensions(editor.getSDK(), outputDimensions).y;
    return {
      width: maxWidth,
      height: height,
      left: textPosition.x,
      top: textPosition.y,
      marginLeft: maxWidth * -0.5,
      marginTop: height * -0.5,
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

  /**
   * Returns the style object for this sprite
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
    var dimensions = sprite.getDimensions(sdk, outputDimensions);
    style.height = Math.min(dimensions.y, outputDimensions.y - spritePosition.y + dimensions.y / 2);

    return style;
  };

  /**
   * Renders the corner knobs
   * @return {React.Element[]}
   * @private
   */


  TextItemComponent.prototype._renderKnobs = function _renderKnobs() {
    var _this4 = this;

    var knobs = _ItemComponent.prototype._renderKnobs.call(this);

    // Additionally render width controls
    ['left', 'right'].forEach(function (side) {
      var key = 'width-' + side;
      var controlProps = _defineProperty({}, side, true);
      knobs.push(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
        {
          key: key,
          onStart: _this4._onWidthDragStart.bind(_this4, side),
          onDrag: _this4._onWidthDrag,
          onStop: _this4._onWidthDragStop },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(WidthControl, controlProps)
      ));
    });

    return knobs;
  };

  TextItemComponent.prototype._getItemControlsProps = function _getItemControlsProps() {
    return {
      onDoubleClick: this._onItemDoubleClick,
      onTouchStart: this._onItemTouchStart,
      onTouchEnd: this._onItemTouchEnd
    };
  };

  /**
   * Renders this item's content
   * @return {React.Element}
   */


  TextItemComponent.prototype._renderContent = function _renderContent() {
    var _this5 = this;

    var _props = this.props,
        sprite = _props.sprite,
        selected = _props.selected;
    var _state = this.state,
        editing = _state.editing,
        updateBecauseIESucks = _state.updateBecauseIESucks;

    var content = [];

    if (!(this.props.hideContent && !this.state.editing)) {
      content.push(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(TextField, {
        key: 'text-field',
        editing: editing,
        innerRef: function innerRef(el) {
          _this5._textField = el;
        },
        style: this._getTextStyle(),
        defaultValue: sprite.getText(),
        onBlur: this._onBlur,
        onChange: this._onTextChange,
        updateBecauseIESucks: updateBecauseIESucks }));
    }

    if (!this.state.editing) {
      content.push(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DisabledOverlay, {
        key: 'disabled-overlay',
        className: test ? 'js-disabledOverlay' : undefined,
        selected: selected }));
    }
    return content;
  };

  return TextItemComponent;
}(__WEBPACK_IMPORTED_MODULE_2__item_component__["a" /* default */]);

TextItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_2__item_component__["a" /* default */].contextTypes;
TextItemComponent.MIN_WIDTH = 100;
/* harmony default export */ __webpack_exports__["a"] = (TextItemComponent);


var TextField = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].textarea('12u5t8c', {
  // http://stackoverflow.com/questions/16170034/dynamic-alignment-for-textbox-in-ie10-is-not-working
  updateBecauseIESucks: 'ckktkq',
  editing: '15kzu1c'
}, 'TextField');

var DisabledOverlay = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('8gacw5', 'DisabledOverlay');

var WidthControl = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('jqmmm4', {
  left: 'tr97e1',
  right: '1llojum'
}, 'WidthControl');

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_component__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
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
  _inherits(BrushItemComponent, _ItemComponent);

  function BrushItemComponent() {
    _classCallCheck(this, BrushItemComponent);

    return _possibleConstructorReturn(this, _ItemComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */
  BrushItemComponent.prototype.componentDidMount = function componentDidMount() {
    _ItemComponent.prototype.componentDidMount.call(this);

    var canvas = this.props.sprite.getCanvas();
    if (this._brush) {
      this._appendCanvas(canvas);
    }
  };

  /**
   * Gets called when this component is about to receive new properties
   * @param  {Object} nextProps
   */


  BrushItemComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.sprite !== this.props.sprite) {
      var canvas = this.props.sprite.getCanvas();
      canvas.parentNode.removeChild(canvas);

      if (this._brush) {
        var newCanvas = nextProps.sprite.getCanvas();
        this._appendCanvas(newCanvas);
      }
    }
  };

  /**
   * Appends and styles the given canvas
   * @param  {HTMLCanvasElement} canvas
   * @private
   */


  BrushItemComponent.prototype._appendCanvas = function _appendCanvas(canvas) {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    this._brush.appendChild(canvas);
  };

  /**
   * Renders the overlay controls
   * @return {React.Component}
   * @private
   */


  BrushItemComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    return null;
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  BrushItemComponent.prototype.render = function render() {
    var _this2 = this;

    if (this.props.hideContent) return null;
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(BrushItem, { innerRef: function innerRef(el) {
        _this2._brush = el;
      } });
  };

  return BrushItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_component__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (BrushItemComponent);


var BrushItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('8gacw5', 'BrushItem');

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_frame_js__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PromiseQueue = function () {
  function PromiseQueue() {
    var maxConcurrency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
    var maxQueueLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    var minDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, PromiseQueue);

    this._queue = [];
    this._pendingPromises = 0;
    this._maxConcurrency = maxConcurrency;
    this._maxQueueLength = maxQueueLength;
    this._minDelay = minDelay;
    this._tick = this._tick.bind(this);
    this._lastPromiseDone = Date.now();
    this._running = true;
    this._animationFrameRequest = null;

    Object(__WEBPACK_IMPORTED_MODULE_0__animation_frame_js__["b" /* requestAnimationFrame */])(this._tick);
  }

  PromiseQueue.prototype._tick = function _tick() {
    if (!this._running) return;

    var now = Date.now();
    if (now - this._lastPromiseDone > this._minDelay && this._pendingPromises < this._maxConcurrency && this._queue.length) {
      this._dequeue();
    }
    this._animationFrameRequest = Object(__WEBPACK_IMPORTED_MODULE_0__animation_frame_js__["b" /* requestAnimationFrame */])(this._tick);
  };

  PromiseQueue.prototype.add = function add(fn) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (_this._queue.length >= _this._maxQueueLength) {
        return reject(new Error('Max queue length reached'));
      }

      _this._queue.push({
        fn: fn, resolve: resolve, reject: reject
      });
    });
  };

  PromiseQueue.prototype._promisify = function _promisify(result) {
    if (typeof result !== 'undefined' && typeof result.then === 'function') {
      return result;
    }
    return Promise.resolve(result);
  };

  PromiseQueue.prototype._dequeue = function _dequeue() {
    var _this2 = this;

    var item = this._queue.shift();
    var now = Date.now();
    this._pendingPromises++;
    try {
      this._promisify(item.fn()).then(function (value) {
        _this2._lastPromiseDone = now;
        _this2._pendingPromises--;
        item.resolve(value);
      }).catch(function (e) {
        _this2._lastPromiseDone = now;
        _this2._pendingPromises--;
        item.reject(e);
      });
    } catch (e) {
      this._lastPromiseDone = now;
      this._pendingPromises--;
      item.reject(e);
    }

    return true;
  };

  PromiseQueue.prototype.dispose = function dispose() {
    this._running = false;
    if (this._animationFrameRequest) {
      Object(__WEBPACK_IMPORTED_MODULE_0__animation_frame_js__["a" /* cancelAnimationFrame */])(this._animationFrameRequest);
    }
  };

  return PromiseQueue;
}();

/* harmony default export */ __webpack_exports__["a"] = (PromiseQueue);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var PlainControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItem,
    PlainControlItemBackground = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItemBackground;


var test = ("production") === 'test';

var LibraryUploadComponent = function (_BaseComponent) {
  _inherits(LibraryUploadComponent, _BaseComponent);

  function LibraryUploadComponent() {
    _classCallCheck(this, LibraryUploadComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onWebcamClick', '_onDropZoneClick', '_onDropZoneDragEnter', '_onDropZoneDragLeave', '_onDropZoneDragOver', '_onDropZoneDrop', '_onImage');

    _this._dragCounter = 0;
    _this.state = {
      dropZoneHovered: false
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks the webcam button
   * @private
   */


  LibraryUploadComponent.prototype._onWebcamClick = function _onWebcamClick() {
    this.props.onWebcamActivated && this.props.onWebcamActivated();
  };

  /**
   * Invoked when the user has selected an image from the file input
   * @param  {Image} image
   * @private
   */


  LibraryUploadComponent.prototype._onImage = function _onImage(image) {
    this.props.onImage && this.props.onImage(image);
  };

  /**
   * Invoked when the user clicks the drop zone
   * @private
   */


  LibraryUploadComponent.prototype._onDropZoneClick = function _onDropZoneClick() {
    this.refs.upload.open();
  };

  /**
   * Invoked when the user enters the drop zone with a file
   * @param  {Event} e
   * @private
   */


  LibraryUploadComponent.prototype._onDropZoneDragEnter = function _onDropZoneDragEnter(e) {
    e.preventDefault();

    this._dragCounter++;
    this.setState({ dropZoneHovered: true });
  };

  /**
   * Invoked when the user leaves the drop zone with a file
   * @param  {Event} e
   * @private
   */


  LibraryUploadComponent.prototype._onDropZoneDragLeave = function _onDropZoneDragLeave(e) {
    e.preventDefault();

    this._dragCounter--;
    if (this._dragCounter === 0) {
      this.setState({ dropZoneHovered: false });
    }
  };

  /**
   * Invoked when the user drags an item over the drop zone - enables dropping
   * @param  {Event} e
   * @private
   */


  LibraryUploadComponent.prototype._onDropZoneDragOver = function _onDropZoneDragOver(e) {
    e.preventDefault();
  };

  /**
   * Invoked when the user drops a file on the drop zone
   * @param  {Event} e
   * @private
   */


  LibraryUploadComponent.prototype._onDropZoneDrop = function _onDropZoneDrop(e) {
    var _this2 = this;

    e.stopPropagation();
    e.preventDefault();
    e = e.nativeEvent;
    e.returnValue = false;

    this.setState({ dropZoneHovered: false }, function () {
      if (!(e.target || e.dataTransfer)) {
        return;
      }

      var files = e.target.files || e.dataTransfer.files;

      if (!files || files.length <= 0) {
        return;
      }

      if (!files[0].type.match(/^image\//i)) {
        return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayError(_this2._t('errors.title'), _this2._t('errors.invalidFileType.text', { fileType: files[0].type }));
      }
      _this2._handleFile(files[0]);
    });
  };

  /**
   * Handles the file upload for the given file and turns it into an image
   * @param  {File} file
   * @private
   */


  LibraryUploadComponent.prototype._handleFile = function _handleFile(file) {
    var _this3 = this;

    var reader = new window.FileReader();
    reader.onload = function () {
      return function (e) {
        var data = e.target.result;
        var image = new window.Image();

        image.addEventListener('load', function () {
          _this3._onImage(image);
        });

        image.addEventListener('error', function (e) {
          return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayError(_this3._t('errors.title'), _this3._t('errors.imageLoadingError.text'));
        });

        image.src = data;
      };
    }(file);
    reader.readAsDataURL(file);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  LibraryUploadComponent.prototype.render = function render() {
    var webcamButtonStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/library/webcam.png', true) + '\')'
    };
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Container,
      null,
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["InvisibleUploadComponent"], {
        ref: 'upload',
        onNewFile: this._onImage }),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Background,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          DropZone,
          {
            onClick: this._onDropZoneClick,
            onDragEnter: this._onDropZoneDragEnter,
            onDragOver: this._onDropZoneDragOver,
            onDragLeave: this._onDropZoneDragLeave,
            onDrop: this._onDropZoneDrop,
            hovered: this.state.dropZoneHovered },
          this.state.dropZoneHovered ? this._t('editor.controls.library.fileDropZoneHovered') : this._t('editor.controls.library.fileDropZone')
        ),
        !this.state.dropZoneHovered && this.props.webcamEnabled && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(WebcamButton, {
          style: webcamButtonStyle,
          className: test ? 'js-webcamButton' : undefined,
          onClick: this._onWebcamClick })
      )
    );
  };

  return LibraryUploadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (LibraryUploadComponent);


var Container = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItem).li('fujban', 'Container');

var Background = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItemBackground).div('17hsmc4', 'Background');

var DropZone = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('yw0i2r', {
  hovered: '1xndhux'
}, 'DropZone');

var WebcamButton = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1y2fyfw', 'WebcamButton');

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var PlainControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItem;

var test = ("production") === 'test';

var StickerListComponent = function (_SharedStateComponent) {
  _inherits(StickerListComponent, _SharedStateComponent);

  function StickerListComponent() {
    _classCallCheck(this, StickerListComponent);

    return _possibleConstructorReturn(this, _SharedStateComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks a sticker
   * @param  {Object} sticker
   * @private
   */
  StickerListComponent.prototype._onStickerClick = function _onStickerClick(sticker) {
    this.props.onStickerClick && this.props.onStickerClick(sticker);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders an arbitray number of sticker items.
   * @private
   */


  StickerListComponent.prototype._renderListItems = function _renderListItems() {
    var _this2 = this;

    var stickers = this.props.stickers;


    var currentStickerIdentifier = void 0;
    var selectedSprite = this.getSharedState('selectedSprite');
    if (selectedSprite) {
      currentStickerIdentifier = selectedSprite.getIdentifier();
    }

    return stickers.map(function (sticker) {
      var url = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["StickerManager"].getURLForSticker(sticker, 'thumb');
      var thumbURL = _this2._getAssetPath(url);
      var itemStyle = {
        background: 'url(\'' + thumbURL + '\') no-repeat center center',
        backgroundSize: 'contain'
      };
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        StickerListItem,
        {
          selected: sticker.identifier === currentStickerIdentifier,
          key: sticker.identifier,
          onClick: _this2._onStickerClick.bind(_this2, sticker),
          className: test ? 'js-sticker' : undefined,
          threeColumns: true },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(StickerImage, { style: itemStyle })
      );
    });
  };

  /**
   * Renders this component.
   * @return {React.Element}
   */


  StickerListComponent.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      StickerList,
      null,
      this._renderListItems()
    );
  };

  return StickerListComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

StickerListComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (StickerListComponent);


var StickerList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('18qztam', 'StickerList');

var StickerListItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItem).li('m4lnou', 'StickerListItem');

var StickerImage = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('7r0ke8', 'StickerImage');

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var OverlayFilter = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Engine"].Filters.OverlayFilter;


/* harmony default export */ __webpack_exports__["a"] = ({
  normal: OverlayFilter.BLEND_MODES.NORMAL,
  overlay: OverlayFilter.BLEND_MODES.OVERLAY,
  hardLight: OverlayFilter.BLEND_MODES.HARD_LIGHT,
  softLight: OverlayFilter.BLEND_MODES.SOFT_LIGHT,
  multiply: OverlayFilter.BLEND_MODES.MULTIPLY,
  darken: OverlayFilter.BLEND_MODES.DARKEN,
  lighten: OverlayFilter.BLEND_MODES.LIGHTEN,
  screen: OverlayFilter.BLEND_MODES.SCREEN,
  colorBurn: OverlayFilter.BLEND_MODES.COLOR_BURN
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_controls_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_canvas_controls_component__ = __webpack_require__(21);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var LibraryControls = function (_BaseControls) {
  _inherits(LibraryControls, _BaseControls);

  function LibraryControls() {
    _classCallCheck(this, LibraryControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Checks if changes should be kept by asking the user. Remembers the user's choice
   * @return {Promise}
   */
  LibraryControls.prototype.shouldKeepChanges = function shouldKeepChanges() {
    var _this2 = this;

    var _context = this.context,
        editor = _context.editor,
        ui = _context.ui;


    var promise = void 0;
    if (typeof this.keepChanges === 'undefined' && !editor.isShallow && editor.history.isAvailable()) {
      promise = new Promise(function (resolve, reject) {
        var modal = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayWarning(ui.translate('warnings.discardChanges.title'), ui.translate('warnings.discardChanges.text'), [ui.translate('warnings.discardChanges.buttons.keep'), ui.translate('warnings.discardChanges.buttons.discard')], true);
        modal.on('button', function (buttonIndex) {
          var keepChanges = buttonIndex === 0;
          _this2.keepChanges = keepChanges;
          resolve(keepChanges);
        });
      });
    } else {
      promise = Promise.resolve(this.keepChanges);
    }

    return promise;
  };

  LibraryControls.prototype.onImage = function onImage(image) {
    var _this3 = this;

    this.shouldKeepChanges().then(function (keepChanges) {
      if (_this3._options.switchScreenOnImage) {
        _this3.context.options.editor.image = image;
        _this3.context.appComponent.switchToScreen('editor');
      } else {
        var editor = _this3.context.editor;

        editor.setImage(image, !keepChanges);
      }

      if (_this3.sharedState.get('webcamEnabled')) {
        _this3.sharedState.set({ webcamEnabled: false });
        _this3.context.screen.switchToControls('default');
      }
    });
  };

  /**
   * A unique identifier for these controls
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Boolean} [enableWebcam = false]
   */


  /**
   * Is called when a control is entered
   */
  LibraryControls.prototype._onEnter = function _onEnter() {
    this.sharedState.set({
      webcamEnabled: false
    });
  };

  /**
   * Checks if a library provider is defined
   * @param {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {Boolean}
   */


  LibraryControls.hasLibraryProvider = function hasLibraryProvider(editor) {
    var controlsOptions = editor.getOptions().editor.controlsOptions;

    if (typeof controlsOptions.library === 'undefined') return true;

    var libraryOptions = controlsOptions.library;
    if (libraryOptions.provider || libraryOptions.enableWebcam || libraryOptions.enableUpload) return true;
    return false;
  };

  /**
   * Checks if this control is enabled
   * @param {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {Boolean}
   */


  LibraryControls.isEnabled = function isEnabled(editor) {
    return LibraryControls.hasLibraryProvider(editor) && editor.isToolEnabled('library');
  };

  return LibraryControls;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"]);

LibraryControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
LibraryControls.getPreloadAssets = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].getPreloadAssets;
LibraryControls.identifier = 'library';
LibraryControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_1__library_controls_component__["a" /* default */];
LibraryControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_2__library_canvas_controls_component__["a" /* default */];
LibraryControls.iconPath = 'editor/controls/library/icon.png';
LibraryControls.activeIconPath = 'editor/controls/library/icon-active.png';
LibraryControls.defaultOptions = {
  enableWebcam: true,
  enableUpload: true,
  displayUploadInCanvas: false,
  switchScreenOnImage: false };
/* harmony default export */ __webpack_exports__["default"] = (LibraryControls);


__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default.a.Controls.LibraryControls = LibraryControls;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_root_panel_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_search_panel_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_search_header_component__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var PanelEnum = {
  ROOT: 0,
  SEARCH: 1
};
var test = ("production") === 'test';

var LibraryControlsComponent = function (_ControlsComponent) {
  _inherits(LibraryControlsComponent, _ControlsComponent);

  function LibraryControlsComponent() {
    _classCallCheck(this, LibraryControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    var Provider = _this.props.options.provider;

    if (Provider) {
      _this._library = new Provider();
    }

    _this._bindAll('_onCategorySelect', '_onImageSelect', '_onSearchQueryChange', '_onWebcamActivated');

    _this.state.currentPanel = PanelEnum.ROOT;
    _this.state.searchQuery = '';
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks the back button
   * @private
   */


  LibraryControlsComponent.prototype._onBackButtonClick = function _onBackButtonClick() {
    this.setState({
      currentPanel: PanelEnum.ROOT,
      searchQuery: '',
      backButton: false
    });
  };

  /**
   * Invoked when the user has selected a category
   * @param  {PhotoEditorSDK.UI.DesktopUI.Library.Category} category
   * @private
   */


  LibraryControlsComponent.prototype._onCategorySelect = function _onCategorySelect(category) {
    this.setState({
      currentPanel: PanelEnum.SEARCH,
      searchQuery: category.getName(),
      backButton: true
    });
  };

  /**
   * Invoked when the user selected an image
   * @param  {PhotoEditorSDK.UI.DesktopUI.Library.Image} image
   * @Private
   */


  LibraryControlsComponent.prototype._onImageSelect = function _onImageSelect(image) {
    var _this2 = this;

    // Disable webcam in case it is open
    this.setSharedState({ webcamEnabled: false });
    var newImage = new window.Image();

    var loadingModal = void 0;
    var loadTimeout = setTimeout(function () {
      loadingModal = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayLoading(_this2._t('loading.loading'));
    }, 200);

    newImage.addEventListener('load', function () {
      if (loadingModal) loadingModal.close();
      if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
      }

      _this2.props.controls.onImage(newImage);
    });

    newImage.addEventListener('error', function () {
      if (loadingModal) loadingModal.close();
      if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
      }

      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayError(_this2._t('errors.title'), _this2._t('errors.imageLoadingError.text'));
    });

    newImage.crossOrigin = 'Anonymous';
    newImage.src = image.getRawUrl();
  };

  /**
   * Invoked when the user changes the search query text input
   * @param  {Event} event
   * @private
   */


  LibraryControlsComponent.prototype._onSearchQueryChange = function _onSearchQueryChange(value) {
    this.setState({
      searchQuery: value,
      currentPanel: PanelEnum.SEARCH
    });
  };

  /**
   * Invoked when the user opens the webcam
   * @param  {String} value
   * @private
   */


  LibraryControlsComponent.prototype._onWebcamActivated = function _onWebcamActivated(value) {
    this.setSharedState({
      webcamEnabled: true
    });
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * @return {Promise}
   */


  LibraryControlsComponent.prototype.fixStyles = function fixStyles() {
    var _this3 = this;

    if (!this._list) return;

    this._list.style.height = '100%';
    return _ControlsComponent.prototype.fixStyles.call(this).then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        var containerHeight = _this3._container.offsetHeight;
        _this3._list.style.height = containerHeight + 'px';
      }

      return _this3.refs.panel.fixStyles();
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the current panel
   * @return {React.Element}
   * @private
   */


  LibraryControlsComponent.prototype._renderCurrentPanel = function _renderCurrentPanel() {
    var _this4 = this;

    switch (this.state.currentPanel) {
      case PanelEnum.ROOT:
        return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__library_root_panel_component__["a" /* default */], {
          controls: this.props.controls,
          innerRef: function innerRef(el) {
            _this4._list = el;
          },
          library: this._library,
          onCategorySelect: this._onCategorySelect,
          onWebcamActivated: this._onWebcamActivated,
          options: this.props.options,
          key: 'panel',
          ref: 'panel' });
      case PanelEnum.SEARCH:
        return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__library_search_panel_component__["a" /* default */], {
          innerRef: function innerRef(el) {
            _this4._list = el;
          },
          library: this._library,
          onImageSelect: this._onImageSelect,
          searchQuery: this.state.searchQuery,
          key: 'panel',
          ref: 'panel' });
    }
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  LibraryControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-libraryControls' : undefined,
      withBorderTop: false
    };
  };

  /**
   * Renders this control's content
   * @return {React.Element}
   */


  LibraryControlsComponent.prototype._renderContent = function _renderContent() {
    var items = [];
    if (this._library) {
      items.push(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_3__library_search_header_component__["a" /* default */], {
        key: 'searchHeader',
        onChange: this._onSearchQueryChange,
        searchQuery: this.state.searchQuery }));
    }
    items.push(this._renderCurrentPanel());
    return items;
  };

  return LibraryControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"]);

LibraryControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
LibraryControlsComponent.propTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].propTypes;
LibraryControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (LibraryControlsComponent);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_list_item_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_upload_component__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var test = ("production") === 'test';

var LibraryRootPanelComponent = function (_BaseComponent) {
  _inherits(LibraryRootPanelComponent, _BaseComponent);

  function LibraryRootPanelComponent() {
    _classCallCheck(this, LibraryRootPanelComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onImage');

    _this.state = {
      loading: true,
      categories: []
    };
    return _this;
  }

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * This method is called from the StickerControlsComponent due to timing issues.
   * @return {Promise}
   */


  LibraryRootPanelComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["requestAnimationFrame"])(function () {
          _this2._scrollbar.update();
        });
      } else {
        _this2._scrollbar.update();
      }
    });
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  LibraryRootPanelComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);

    this._loadCategories();
  };

  /**
   * Invoked immediately before a component is unmounted and destroyed
   */


  LibraryRootPanelComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _BaseComponent.prototype.componentWillUnmount.call(this);

    if (this._loadCoverImagesQueue) {
      this._loadCoverImagesQueue.dispose();
    }

    this._disposed = true;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks a category
   * @param  {PhotoEditorSDK.UI.DesktopUI.Library.Category} category
   * @private
   */


  LibraryRootPanelComponent.prototype._onCategoryClick = function _onCategoryClick(category) {
    this.props.onCategorySelect && this.props.onCategorySelect(category);
  };

  LibraryRootPanelComponent.prototype._onImage = function _onImage(image) {
    this.props.controls.onImage(image);
  };

  // -------------------------------------------------------------------------- LOADING

  /**
   * Loads the thumbnails
   * @param  {PhotoEditorSDK.UI.DesktopUI.Library.Category[]} categories
   * @private
   */


  LibraryRootPanelComponent.prototype._loadCoverImages = function _loadCoverImages(categories) {
    var _this3 = this;

    var theme = this.context.theme;

    var jobs = categories.map(function (i) {
      return {
        fn: function fn() {
          return i.loadCoverImage();
        },
        index: i
      };
    });
    this._loadCoverImagesQueue = new __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["DelayedJobQueue"](jobs, {
      minDelay: theme.listItemSlideInDelay
    });
    this._loadCoverImagesQueue.on('job-done', function (job) {
      if (_this3._disposed) return;

      _this3.forceUpdate();
      _this3._scrollbar.update();
    });
    this._loadCoverImagesQueue.start();
  };

  /**
   * Loads the library's categories
   * @return {Promise}
   * @private
   */


  LibraryRootPanelComponent.prototype._loadCategories = function _loadCategories() {
    var _this4 = this;

    if (!this.props.library) {
      this.setState({
        loading: false,
        categories: []
      });
      return Promise.resolve();
    }

    return this.props.library.getCategories().then(function (categories) {
      _this4._loadCoverImages(categories);
      _this4.setState({
        loading: false,
        categories: categories
      });
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items
   * @return {React.Element[]}
   * @private
   */


  LibraryRootPanelComponent.prototype._renderListItems = function _renderListItems() {
    var _this5 = this;

    return this.state.categories.map(function (category) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__category_list_item_component__["a" /* default */], {
        key: category.getName(),
        category: category,
        visible: category.isCoverImageLoaded(),
        onClick: _this5._onCategoryClick.bind(_this5, category) });
    });
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  LibraryRootPanelComponent.prototype.render = function render() {
    var _this6 = this;

    if (this.state.loading) return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["LoadingIndicatorComponent"], null);

    var _props$options = this.props.options,
        enableUpload = _props$options.enableUpload,
        displayUploadInCanvas = _props$options.displayUploadInCanvas;
    var _innerRef = this.props.innerRef;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      RootPanelWrapper,
      {
        innerRef: function innerRef(el) {
          _innerRef && _innerRef(el);_this6._wrapper = el;
        },
        className: test ? 'js-rootPanel' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
        {
          direction: 'vertical',
          innerRef: function innerRef(el) {
            _this6._scrollbar = el;
          } },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          CategoryList,
          null,
          enableUpload && !displayUploadInCanvas && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__library_upload_component__["a" /* default */], {
            controls: this.props.controls,
            onImage: this._onImage,
            webcamEnabled: this.props.options.enableWebcam,
            onWebcamActivated: this.props.onWebcamActivated }),
          this._renderListItems()
        )
      )
    );
  };

  return LibraryRootPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (LibraryRootPanelComponent);


var RootPanelWrapper = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('rfecls', 'RootPanelWrapper');

var CategoryList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('5jg0ou', 'CategoryList');

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var ControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItem,
    ControlItemTitle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle;


var test = ("production") === 'test';

var CategoryListItemComponent = function (_BaseComponent) {
  _inherits(CategoryListItemComponent, _BaseComponent);

  function CategoryListItemComponent() {
    _classCallCheck(this, CategoryListItemComponent);

    return _possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
  }

  CategoryListItemComponent.prototype.render = function render() {
    var _props = this.props,
        category = _props.category,
        onClick = _props.onClick,
        visible = _props.visible;

    var listItemStyle = {
      backgroundImage: 'url(\'' + category.getCoverImage() + '\')'
    };

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      ListItem,
      {
        animated: true,
        style: listItemStyle,
        visible: visible,
        className: test ? 'js-categoryListItem' : undefined,
        onClick: onClick },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        ListItemTitle,
        null,
        category.getName()
      )
    );
  };

  return CategoryListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (CategoryListItemComponent);


var ListItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItem).li('prcvvt', 'ListItem');

var ListItemTitle = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).div('1ler8h7', 'ListItemTitle');

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_list_item_component__ = __webpack_require__(19);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var test = ("production") === 'test';

var LibrarySearchPanelComponent = function (_BaseComponent) {
  _inherits(LibrarySearchPanelComponent, _BaseComponent);

  function LibrarySearchPanelComponent() {
    _classCallCheck(this, LibrarySearchPanelComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this.state = {
      loading: true,
      images: []
    };
    return _this;
  }

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * This method is called from the StickerControlsComponent due to timing issues.
   * @return {Promise}
   */


  LibrarySearchPanelComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["requestAnimationFrame"])(function () {
          _this2._scrollbar.update();
        });
      } else {
        _this2._scrollbar.update();
      }
    });
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  LibrarySearchPanelComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);

    this._loadImages(this.props.searchQuery);
  };

  /**
   * Invoked before a mounted component receives new props
   * @param  {Object} nextProps
   */


  LibrarySearchPanelComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.searchQuery !== nextProps.searchQuery) {
      this._loadImages(nextProps.searchQuery);
    }
  };

  /**
   * Gets called when this component is about to be unmounted
   */


  LibrarySearchPanelComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _BaseComponent.prototype.componentWillUnmount.call(this);

    this._loadThumbsQueue.stop();
    this._loadThumbsQueue.dispose();
    this._disposed = true;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when use clicks an image
   * @param  {Image} image
   * @private
   */


  LibrarySearchPanelComponent.prototype._onImageClick = function _onImageClick(image) {
    this.props.onImageSelect && this.props.onImageSelect(image);
  };

  // -------------------------------------------------------------------------- LOADING

  /**
   * Loads the thumbnails
   * @param  {PhotoEditorSDK.UI.DesktopUI.Library.Image[]} images
   * @private
   */


  LibrarySearchPanelComponent.prototype._loadThumbs = function _loadThumbs(images) {
    var _this3 = this;

    var theme = this.context.theme;

    var jobs = images.map(function (i) {
      return {
        fn: function fn() {
          return i.loadThumb();
        },
        index: i
      };
    });
    this._loadThumbsQueue = new __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["DelayedJobQueue"](jobs, {
      minDelay: theme.listItemSlideInDelay
    });
    this._loadThumbsQueue.on('job-done', function (job) {
      if (_this3._disposed) return;

      _this3.forceUpdate();
      _this3._scrollbar.update();
    });
    this._loadThumbsQueue.start();
  };

  /**
   * Loads the images
   * @param {String} searchQuery
   * @return {Promise}
   * @private
   */


  LibrarySearchPanelComponent.prototype._loadImages = function _loadImages(searchQuery) {
    var _this4 = this;

    if (!searchQuery.trim()) {
      this.setState({
        loading: false,
        images: []
      }, function () {
        return _this4._scrollbar.update();
      });
    }

    this.setState({ loading: true });
    return this.props.library.searchImages(searchQuery).then(function (images) {
      _this4._loadThumbs(images);
      _this4.setState({
        loading: false,
        images: images
      }, function () {
        return _this4._scrollbar.update();
      });
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items
   * @return {React.Element[]}
   * @private
   */


  LibrarySearchPanelComponent.prototype._renderListItems = function _renderListItems() {
    var _this5 = this;

    var editor = this.context.editor;

    var editorImage = editor.getImage();

    if (this.state.images.length === 0) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        NoResultsText,
        null,
        this._t('editor.controls.library.noResults')
      );
    }

    return this.state.images.map(function (image) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__image_list_item_component__["a" /* default */], {
        key: image.getThumbUrl(),
        image: image,
        selected: image.getRawUrl() === (editorImage && editorImage.src),
        visible: image.isThumbLoaded(),
        onClick: _this5._onImageClick.bind(_this5, image) });
    });
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  LibrarySearchPanelComponent.prototype.render = function render() {
    var _this6 = this;

    if (this.state.loading) return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["LoadingIndicatorComponent"], null);

    var _innerRef = this.props.innerRef;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      RootPanelWrapper,
      {
        innerRef: function innerRef(el) {
          _innerRef && _innerRef(el);_this6._wrapper = el;
        },
        className: test ? 'js-searchPanel' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
        {
          direction: 'vertical',
          innerRef: function innerRef(el) {
            _this6._scrollbar = el;
          } },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          ImageList,
          null,
          this._renderListItems()
        )
      )
    );
  };

  return LibrarySearchPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (LibrarySearchPanelComponent);


var RootPanelWrapper = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('rfecls', 'RootPanelWrapper');

var ImageList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('5jg0ou', 'ImageList');

var NoResultsText = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('6kl290', 'NoResultsText');

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var ControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItem,
    ControlItemActiveOverlay = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemActiveOverlay;


var test = ("production") === 'test';

var ImageListItemComponent = function (_BaseComponent) {
  _inherits(ImageListItemComponent, _BaseComponent);

  function ImageListItemComponent() {
    _classCallCheck(this, ImageListItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this.state = {
      isPortrait: false,
      hovered: false
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked before a mounted component receives new props
   * @param  {Object} nextProps
   */


  ImageListItemComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      var image = this.props.image.getThumbImage();
      if (image.height > image.width) {
        this.setState({
          isPortrait: true
        });
      }
    }
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  ImageListItemComponent.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        image = _props.image,
        onClick = _props.onClick,
        selected = _props.selected,
        visible = _props.visible;

    var listItemStyle = {
      backgroundImage: 'url(\'' + image.getThumbUrl() + '\')'
    };

    var authorAvatar = image.getAuthorAvatar();
    var transitionDuration = this.context.theme.transitionDuration;


    var classNames = [test ? 'js-imageListItem' : undefined, selected && 'is-selected'].filter(function (c) {
      return c;
    });
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      ListItem,
      {
        animated: true,
        style: listItemStyle,
        selected: selected,
        visible: visible,
        className: classNames.join(' '),
        onClick: onClick,
        portrait: this.state.isPortrait,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ hovered: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ hovered: false });
        } },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: this.state.hovered,
          enterProp: 'rendered',
          enterDuration: transitionDuration * 1000,
          appearProp: 'visible',
          appearDuration: transitionDuration * 1000,
          leaveDuration: transitionDuration * 1000 },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          Author,
          { selected: selected },
          authorAvatar && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(AuthorAvatar, { src: authorAvatar }),
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            AuthorName,
            null,
            image.getAuthorName()
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: selected,
          enterProp: 'rendered',
          enterDuration: transitionDuration * 1000,
          appearProp: 'visible',
          appearDuration: transitionDuration * 1000,
          leaveDuration: transitionDuration * 1000 },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ListItemOverlay, { selected: true })
      )
    );
  };

  return ImageListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (ImageListItemComponent);


var ListItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItem).li('1a5mxw5', {
  portrait: 'otbyv0'
}, 'ListItem');

var ListItemOverlay = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemActiveOverlay).div('120drhm', 'ListItemOverlay');

var AuthorAvatar = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].img('1owxkzt', 'AuthorAvatar');

var AuthorName = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1jylqsv', 'AuthorName');

var Author = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('mchu36', {
  rendered: '2jlos',
  visible: '1fmxelx'
}, 'Author');

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var SEARCH_QUERY_DEBOUNCE_TIME = 250;
var test = ("production") === 'test';

var LibrarySearchHeaderComponent = function (_BaseComponent) {
  _inherits(LibrarySearchHeaderComponent, _BaseComponent);

  function LibrarySearchHeaderComponent() {
    _classCallCheck(this, LibrarySearchHeaderComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onInputChange');

    _this._onDebouncedInputChange = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].debounce(_this._onDebouncedInputChange, SEARCH_QUERY_DEBOUNCE_TIME);

    _this.state = {
      searchQueryInputValue: ''
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked before a mounted component receives new props
   * @param  {Object} nextProps
   */


  LibrarySearchHeaderComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.searchQuery !== nextProps.searchQuery) {
      this.setState({ searchQueryInputValue: nextProps.searchQuery });
    }
  };

  /**
   * Invoked immediately before a component is unmounted and destroyed
   */


  LibrarySearchHeaderComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this._disposed = true;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the input value has not changed for 250ms
   * @param  {String} value
   * @private
   */


  LibrarySearchHeaderComponent.prototype._onDebouncedInputChange = function _onDebouncedInputChange(value) {
    if (this._disposed) return;

    this.props.onChange && this.props.onChange(value);
  };

  /**
   * Invoked when the input value has been changed
   * @param  {Event} event
   * @private
   */


  LibrarySearchHeaderComponent.prototype._onInputChange = function _onInputChange(event) {
    var value = event.target.value;

    this.setState({ searchQueryInputValue: value });
    this._onDebouncedInputChange(value);
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  LibrarySearchHeaderComponent.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Header,
      { key: 'header' },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        InputContainer,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(TextInput, {
          placeholder: this._t('editor.controls.library.search'),
          onLiveChange: this._onInputChange,
          className: test ? 'js-searchInput' : undefined,
          value: this.state.searchQueryInputValue })
      )
    );
  };

  return LibrarySearchHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (LibrarySearchHeaderComponent);


var Header = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1tkmkv6', 'Header');

var InputContainer = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('mz0a5q', 'InputContainer');

var TextInput = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["TextInputComponent"])('py3uvl', 'TextInput');

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webcam_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__large_library_upload_component__ = __webpack_require__(23);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var LibraryCanvasControlsComponent = function (_CanvasControlsCompon) {
  _inherits(LibraryCanvasControlsComponent, _CanvasControlsCompon);

  function LibraryCanvasControlsComponent() {
    _classCallCheck(this, LibraryCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onImage', '_onWebcamBack', '_onWebcamActivated');

    _this.state.displayHeader = false;
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user has shot an image
   * @param  {Image} image
   * @private
   */


  LibraryCanvasControlsComponent.prototype._onImage = function _onImage(image) {
    this.props.controls.onImage(image);
  };

  /**
   * Invoked when the webcam disables due to an error
   * @private
   */


  LibraryCanvasControlsComponent.prototype._onWebcamBack = function _onWebcamBack() {
    this.setSharedState({
      webcamEnabled: false
    });
  };

  /**
   * Invoked when the user opens the webcam
   * @param  {String} value
   * @private
   */


  LibraryCanvasControlsComponent.prototype._onWebcamActivated = function _onWebcamActivated(value) {
    this.setSharedState({
      webcamEnabled: true
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders all controls onto the canvas.
   * @return React.Element
   */


  LibraryCanvasControlsComponent.prototype._renderControls = function _renderControls() {
    var webcamEnabled = this.getSharedState('webcamEnabled');
    var displayUploadInCanvas = this.props.options.displayUploadInCanvas;


    if (webcamEnabled) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__webcam_component__["a" /* default */], {
        onImage: this._onImage,
        onBack: this._onWebcamBack });
    } else if (displayUploadInCanvas) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        LibraryUploadContainer,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__large_library_upload_component__["a" /* default */], {
          large: true,
          controls: this.props.controls,
          webcamEnabled: this.props.options.enableWebcam,
          onWebcamActivated: this._onWebcamActivated,
          onImage: this._onImage })
      );
    }
  };

  return LibraryCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["CanvasControlsComponent"]);

LibraryCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["CanvasControlsComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (LibraryCanvasControlsComponent);


var LibraryUploadContainer = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1up9ikz', 'LibraryUploadContainer');

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
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
  _inherits(WebcamComponent, _BaseComponent);

  function WebcamComponent() {
    _classCallCheck(this, WebcamComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onWebcamReady', '_onButtonClick', '_onCancelClick');

    _this.state = {
      webcamReady: false,
      videoWidth: 1,
      videoHeight: 1
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the webcam is ready to serve a video
   * @private
   */


  WebcamComponent.prototype._onWebcamReady = function _onWebcamReady() {
    this.props.onReady && this.props.onReady();

    var videoSize = new __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2(this._video.videoWidth, this._video.videoHeight);
    var containerSize = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].getInnerDimensionsForElement(this._videoContainer);
    var newVideoDimensions = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].resizeVectorToFit(videoSize, containerSize);

    this.setState({
      webcamReady: true,
      videoWidth: newVideoDimensions.x,
      videoHeight: newVideoDimensions.y
    });
  };

  /**
   * Invoked when the user clicks the shutter button
   * @param  {Event} e
   * @private
   */


  WebcamComponent.prototype._onButtonClick = function _onButtonClick(e) {
    e.preventDefault();
    this._takePhoto();
  };

  /**
   * Invoked when the user clicks the cancel button
   * @param  {Event} e
   * @private
   */


  WebcamComponent.prototype._onCancelClick = function _onCancelClick(e) {
    e.preventDefault();
    this.props.onBack && this.props.onBack();
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */


  WebcamComponent.prototype.componentDidMount = function componentDidMount() {
    this._initVideoStream();
  };

  /**
  * Gets called when the component is about to unmount. Stops the video
  * stream and kills the video
  */


  WebcamComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _BaseComponent.prototype.componentWillUnmount.call(this);

    if (this._stream) {
      var track = this._stream.getTracks()[0];
      track && track.stop();
      this._stream.stop && this._stream.stop();
    }
    this._video.pause();
  };

  // -------------------------------------------------------------------------- CAMERA

  /**
   * Initializes the video stream
   * @private
   */


  WebcamComponent.prototype._initVideoStream = function _initVideoStream() {
    var _this2 = this;

    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (!getUserMedia) {
      var errorModal = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayError(this._t('errors.title'), this._t('errors.webcamNotSupported.text'));
      errorModal.on('close', function () {
        return _this2.props.onBack();
      });
      return;
    }

    getUserMedia.call(navigator, { video: true }, function (stream) {
      _this2._stream = stream;
      _this2._video.onloadedmetadata = _this2._onWebcamReady;
      _this2._video.src = window.URL.createObjectURL(stream);
    }, function (err) {
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Log"].error(err);

      var errorModal = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayError(_this2._t('errors.title'), _this2._t('errors.webcamUnavailable.text', { error: err.name }), true);

      errorModal.on('close', function () {
        return _this2.props.onBack();
      });
    });
  };

  /**
   * Takes a photo
   * @private
   */


  WebcamComponent.prototype._takePhoto = function _takePhoto() {
    var _this3 = this;

    if (!this.state.webcamReady) {
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.width = this._video.videoWidth;
    canvas.height = this._video.videoHeight;

    var context = canvas.getContext('2d');
    context.drawImage(this._video, 0, 0);

    var image = new window.Image();
    image.addEventListener('load', function () {
      _this3.props.onImage && _this3.props.onImage(image);
    });
    image.src = canvas.toDataURL('image/png');
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component.
   * @return {React.Element}
   */


  WebcamComponent.prototype.render = function render() {
    var _this4 = this;

    var videoStyle = {
      width: this.state.videoWidth,
      height: this.state.videoHeight
    };
    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      Container,
      null,
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        Gradient,
        null,
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          CancelButton,
          {
            onClick: this._onCancelClick },
          this._t('editor.cancel')
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        OuterVideoContainer,
        null,
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          VideoContainer,
          { innerRef: function innerRef(el) {
              _this4._videoContainer = el;
            } },
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Video, {
            autoPlay: true,
            visible: this.state.webcamReady,
            style: videoStyle,
            innerRef: function innerRef(el) {
              _this4._video = el;
            } }),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Button, {
            onClick: this._onButtonClick })
        )
      )
    );
  };

  return WebcamComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (WebcamComponent);


var Container = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('dehn6v', 'Container');

var Gradient = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('4d756t', 'Gradient');

var CancelButton = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1p4kwwq', 'CancelButton');

var OuterVideoContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1j41msh', 'OuterVideoContainer');

var VideoContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1g72uw9', 'VideoContainer');

var Video = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].video('1btv3tg', {
  visible: 'jsuk9w'
}, 'Video');

var Button = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1fkab7z', 'Button');

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_upload_component__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var PlainControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItem,
    PlainControlItemBackground = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItemBackground;



var test = ("production") === 'test';

var LargeLibraryUploadComponent = function (_LibraryUploadCompone) {
  _inherits(LargeLibraryUploadComponent, _LibraryUploadCompone);

  function LargeLibraryUploadComponent() {
    _classCallCheck(this, LargeLibraryUploadComponent);

    return _possibleConstructorReturn(this, _LibraryUploadCompone.apply(this, arguments));
  }

  /**
   * Renders this component
   * @return {React.Element}
   */
  LargeLibraryUploadComponent.prototype.render = function render() {
    var webcamButtonStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/library/webcam.png', true) + '\')'
    };
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Container,
      null,
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Background,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          Row,
          null,
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            DropZone,
            {
              onClick: this._onDropZoneClick,
              onDragEnter: this._onDropZoneDragEnter,
              onDragOver: this._onDropZoneDragOver,
              onDragLeave: this._onDropZoneDragLeave,
              onDrop: this._onDropZoneDrop,
              hovered: this.state.dropZoneHovered },
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["InvisibleUploadComponent"], {
              ref: 'upload',
              onNewFile: this._onNewFile }),
            this.state.dropZoneHovered ? this._t('editor.controls.library.fileDropZoneHovered') : this._t('editor.controls.library.fileDropZone')
          )
        ),
        !this.state.dropZoneHovered && this.props.webcamEnabled && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          Row,
          null,
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(WebcamButton, {
            style: webcamButtonStyle,
            className: test ? 'js-webcamButton' : undefined,
            onClick: this._onWebcamClick })
        )
      )
    );
  };

  return LargeLibraryUploadComponent;
}(__WEBPACK_IMPORTED_MODULE_1__library_upload_component__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (LargeLibraryUploadComponent);


var Container = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItem).div('1xesje3', 'Container');

var Background = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItemBackground).div('z914p5', 'Background');

var DropZone = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('yw0i2r', {
  hovered: '1xndhux'
}, 'DropZone');

var WebcamButton = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1jg5y1q', 'WebcamButton');

var Row = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('15u7gri', 'Row');

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adjustments_controls_component__ = __webpack_require__(25);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var AdjustmentsControls = function (_BaseControls) {
  _inherits(AdjustmentsControls, _BaseControls);

  function AdjustmentsControls() {
    _classCallCheck(this, AdjustmentsControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Is called when a control is entered
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  AdjustmentsControls.prototype._onEnter = function _onEnter() {
    var editor = this.context.editor;

    var operationExistedBeforeEntering = editor.operations.exists('adjustments');
    var operation = editor.operations.getOrCreate('adjustments');
    var initialOptions = operation.serializeOptions();

    this.sharedState.set({
      operation: operation,
      operationExistedBeforeEntering: operationExistedBeforeEntering,
      operationExistedBeforeLastHistoryItem: operationExistedBeforeEntering,
      initialOptions: initialOptions });
  };

  /**
   * Is called when a control is left
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {String[]} [availableAdjustments = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */


  /**
   * A unique identifier for these controls
   * @type {String}
   */


  AdjustmentsControls.prototype._onLeave = function _onLeave() {
    var editor = this.context.editor;

    var operation = this.sharedState.get('operation');
    var operationExistedBeforeEntering = this.sharedState.get('operationExistedBeforeEntering');
    var initialOptions = this.sharedState.get('initialOptions');

    if (!operation.optionsEqual(initialOptions)) {
      this.addHistoryItem(editor.history.createItem({
        type: 'global',
        operation: operation.constructor.identifier,
        options: initialOptions,
        existent: operationExistedBeforeEntering
      }));
    }

    var defaultOptions = operation.getDefaultOptions();
    if (operation.optionsEqual(defaultOptions)) {
      editor.operations.remove(operation);
    }
  };

  /**
   * Gets called when an operation has been removed. If it is the same operation that
   * this control belongs to, it switches back to the overview, leaving this control
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  AdjustmentsControls.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    var currentOperation = this.sharedState.get('operation');
    if (operation === currentOperation) {
      this._onEnter();
    }
  };

  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */


  AdjustmentsControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('adjustment') && editor.isToolEnabled('adjustments');
  };

  return AdjustmentsControls;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"]);

AdjustmentsControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
AdjustmentsControls.getPreloadAssets = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].getPreloadAssets;
AdjustmentsControls.identifier = 'adjustments';
AdjustmentsControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_1__adjustments_controls_component__["a" /* default */];
AdjustmentsControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].canvasControlsComponent;
AdjustmentsControls.iconPath = 'editor/controls/adjustments/icon.png';
AdjustmentsControls.activeIconPath = 'editor/controls/adjustments/icon-active.png';
AdjustmentsControls.requiredOperations = ['adjustments'];
AdjustmentsControls.defaultOptions = {
  availableAdjustments: null };
/* harmony default export */ __webpack_exports__["default"] = (AdjustmentsControls);


__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default.a.Controls.AdjustmentsControls = AdjustmentsControls;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adjustments_list_item_component__ = __webpack_require__(26);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var ControlGroupList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["GroupedControlsStyles"].ControlGroupList;

var test = ("production") === 'test';

var SECTIONS = [{
  identifier: 'basics',
  items: ['brightness', 'saturation', 'contrast', 'gamma']
}, {
  identifier: 'refinements',
  items: ['clarity', 'exposure', 'shadows', 'highlights']
}];

var AdjustmentsControlsComponent = function (_ControlsComponent) {
  _inherits(AdjustmentsControlsComponent, _ControlsComponent);

  function AdjustmentsControlsComponent() {
    _classCallCheck(this, AdjustmentsControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onOperationUpdated', '_onTabSwitch', '_onResetDefaultClick');

    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated);

    _this._lastLocalHistoryItem = null;
    return _this;
  }

  /**
   * Checks if the given adjustment is available
   * @param  {Strin}  item
   * @return {Boolean}
   * @private
   */


  AdjustmentsControlsComponent.prototype._isAdjustmentAvailable = function _isAdjustmentAvailable(item) {
    var availableAdjustments = this.props.options.availableAdjustments;

    if (availableAdjustments === null) return true;
    return availableAdjustments.indexOf(item) !== -1;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  AdjustmentsControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    // The undo button might change this operation's selected filter or intensity.
    // Update the component to reflect the change
    if (operation === this.getSharedState('operation')) {
      this.forceUpdate();
    }
  };

  /**
   * Invoked when the user selects a different tab
   * @private
   */


  AdjustmentsControlsComponent.prototype._onTabSwitch = function _onTabSwitch() {
    this._scrollbar.update();
  };

  /**
   * Called when the user clicks the 'reset default' button; resets
   * all adjustment settings to the default ones
   * @private
   */


  AdjustmentsControlsComponent.prototype._onResetDefaultClick = function _onResetDefaultClick() {
    var operation = this.getSharedState('operation');

    operation.resetOptions();

    var editor = this.context.editor;

    editor.render();

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- HISTORY

  /**
   * Registers a new local history change
   * @param  {String} identifier
   * @private
   */


  AdjustmentsControlsComponent.prototype._registerLocalHistoryChange = function _registerLocalHistoryChange(identifier) {
    this.props.controls.registerLocalHistoryChange(identifier, true);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the adjustments sections and their items.
   * @private
   */


  AdjustmentsControlsComponent.prototype._renderAdjustmentsControls = function _renderAdjustmentsControls() {
    var _this2 = this;

    var makeSection = function makeSection(section) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["CollapseSectionComponent"],
        {
          key: section.identifier,
          title: _this2._t('editor.controls.adjustments.sections.' + section.identifier),
          alwaysExpanded: true },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          SectionItemList,
          {
            className: (test ? 'js-sectionItemList-' : undefined) + section.identifier },
          makeItems(section.items)
        )
      );
    };

    var makeItems = function makeItems(items) {
      return items.filter(function (item) {
        return _this2._isAdjustmentAvailable(item);
      }).map(function (item) {
        return _this2._makeItem(item);
      });
    };

    return SECTIONS.filter(function (section) {
      return section.items.filter(function (item) {
        return _this2._isAdjustmentAvailable(item);
      }).length > 0;
    }).map(makeSection);
  };

  /**
   * Creates an adjustments item
   * @param  {Object} item
   * @return {SliderControlComponent}
   * @private
   */


  AdjustmentsControlsComponent.prototype._makeItem = function _makeItem(item) {
    var operation = this.getSharedState('operation');
    var value = operation.getOption(item);
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__adjustments_list_item_component__["a" /* default */], {
      item: item,
      value: value,
      onBeforeValueChange: this._registerLocalHistoryChange.bind(this, item),
      className: test ? 'js-sliderControl' : undefined,
      key: item });
  };

  /**
   * Renders the scene selection controls.
   * @return {React.Element[]}
   * @private
   */
  // _renderScenesControls () {
  //   const scenes = [
  //     { title: 'First' },
  //     { title: 'Second' }
  //   ]
  //
  //   const makeItem = (item) => {
  //     return <AdjustmentsScenesListItemComponent
  //       key={item.title}
  //       title={item.title} />
  //   }
  //
  //   let elements = []
  //   scenes.forEach((item) => {
  //     elements.push(makeItem(item))
  //   })
  //
  //   return elements
  // }

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  AdjustmentsControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-adjustmentsControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this control's content
   * @return {React.Element}
   */


  AdjustmentsControlsComponent.prototype._renderContent = function _renderContent() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
      {
        direction: 'vertical',
        innerListRef: function innerListRef(el) {
          _this3._list = el;
        },
        innerRef: function innerRef(el) {
          _this3._scrollbar = el;
        } },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        SectionList,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          BottomSection,
          null,
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ButtonComponent"], {
            title: this._t('editor.controls.adjustments.reset'),
            className: test ? 'js-adjustmentsResetDefault' : undefined,
            onClick: this._onResetDefaultClick })
        ),
        this._renderAdjustmentsControls()
      )
    );
    // return (<Wrapper innerRef={(el) => { this._wrapper = el }}>
    //   <TabsComponent labels={['Adjust', 'Scenes']} onSwitch={this._onTabSwitch}>
    //     <Tab>Adjust</Tab>
    //     <TabContent>

    //     </TabContent>

    //     <Tab>Scenes</Tab>
    //     <TabContent>
    //       <ScrollbarComponent direction='vertical' ref='scrollbar' style={scrollbarStyle}>
    //         <ScenesList>
    //           {this._renderScenesControls()}
    //         </ScenesList>
    //       </ScrollbarComponent>
    //     </TabContent>
    //   </TabsComponent>
    // </Wrapper>)
  };

  return AdjustmentsControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"]);

// -------------------------------------------------------------------------- STYLES

AdjustmentsControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
AdjustmentsControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (AdjustmentsControlsComponent);
var SectionList = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlGroupList).ul('x32ss4', 'SectionList');

var SectionItemList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('gz4y54', 'SectionItemList');

var BottomSection = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('7abnmv', 'BottomSection');

// const ScenesList = adonis(ControlGroupList).ul({
//   padding: '25px'
// })

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var AdjustmentsOperation = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default.a.Operations.AdjustmentsOperation;

var AdjustmentsListItemComponent = function (_SharedStateComponent) {
  _inherits(AdjustmentsListItemComponent, _SharedStateComponent);

  function AdjustmentsListItemComponent() {
    _classCallCheck(this, AdjustmentsListItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this._bindAll('_onValueChange');

    _this._option = AdjustmentsOperation.prototype.availableOptions[_this.props.item];

    var operation = _this.getSharedState('operation');
    _this.state = {
      value: operation ? operation.getOption(_this.props.item) : _this._option.default
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked before rendering when new props or state are being received
   * @param {Object} nextProps
   * @param {Object} nextState
   * @return {Boolean}
   */


  AdjustmentsListItemComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value || nextProps.value !== this.state.value;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the value is changed by either the input or the slider
   * @param  {Number} value
   * @private
   */


  AdjustmentsListItemComponent.prototype._onValueChange = function _onValueChange(value) {
    this.props.onBeforeValueChange && this.props.onBeforeValueChange(value);

    var operation = this.getSharedState('operation');
    var _option = this._option,
        minValue = _option.minValue,
        midValue = _option.midValue,
        maxValue = _option.maxValue;


    value = value < 0 ? midValue + (midValue - minValue) * value / 100 : midValue + (maxValue - midValue) * value / 100;

    operation.setOption(this.props.item, value);

    var editor = this.context.editor;

    editor.render();

    this.setState({ value: value });

    this.props.onValueChange && this.props.onValueChange(value);

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component.
   * @private
   */


  AdjustmentsListItemComponent.prototype.render = function render() {
    var operation = this.getSharedState('operation');
    var _option2 = this._option,
        minValue = _option2.minValue,
        midValue = _option2.midValue,
        maxValue = _option2.maxValue;


    var value = operation ? operation.getOption(this.props.item) : midValue;

    var sliderValue = (value <= midValue ? (value - minValue) / (midValue - minValue) - 1 : (value - midValue) / (maxValue - midValue)) * 100;

    if (value === minValue) sliderValue = -100; // Poor man's 'division by zero' handling

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SliderControlComponent"], {
      key: this.props.item,
      label: this._t('editor.controls.adjustments.items.' + this.props.item),
      minValue: -100,
      maxValue: 100,
      value: parseInt(sliderValue),
      onSliderValueChange: this._onValueChange,
      onValueChange: this._onValueChange,
      className: this.props.className,
      middleDot: true });
  };

  return AdjustmentsListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

AdjustmentsListItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (AdjustmentsListItemComponent);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brush_controls_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brush_canvas_controls_component__ = __webpack_require__(30);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var BrushControls = function (_BaseControls) {
  _inherits(BrushControls, _BaseControls);

  function BrushControls() {
    _classCallCheck(this, BrushControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Is called when a control is entered
   * @private
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  BrushControls.prototype._onEnter = function _onEnter() {
    var _this2 = this;

    var editor = this.context.editor;

    var operationExistedBeforeEntering = editor.operations.exists('sprite');
    var operation = editor.operations.getOrCreate('sprite');
    var initialOptions = operation.serializeOptions();
    var brushSprite = operation.createBrush();
    operation.addSprite(brushSprite);

    editor.zoom.auto(false, false, function () {
      editor.features.disable('zoom', 'drag');

      var outputDimensions = editor.getOutputDimensions();
      var brushSize = Math.max(outputDimensions.min() * 0.05, 1);
      if (_this2._options.widthPresets && _this2._options.widthPresets.length > 0) {
        brushSize = _this2._options.sizePresets[0];
      }

      _this2.sharedState.set({
        brushSize: Math.round(brushSize)
      });
    });

    this.sharedState.set({
      operationExistedBeforeEntering: operationExistedBeforeEntering,
      operation: operation,
      initialOptions: initialOptions,
      brushSprite: brushSprite,
      brushColor: __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Color"].WHITE,
      brushSize: 0.1,
      brushHardness: 50
    });
  };

  /**
   * Invoked when the user leaves this control
   * @private
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Object[]} [brushes = []]
   * @property {Boolean} [replaceBrushes = false]
   * @property {String[]} [availableBrushes = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas controls component for these controls
   * @type {React.Component}
   */


  /**
   * A unique identifier for these controls
   * @type {String}
   */


  BrushControls.prototype._onLeave = function _onLeave() {
    var editor = this.context.editor;

    var _sharedState$getState = this.sharedState.getState(),
        initialOptions = _sharedState$getState.initialOptions,
        operation = _sharedState$getState.operation,
        operationExistedBeforeEntering = _sharedState$getState.operationExistedBeforeEntering;

    if (!operation.optionsEqual(initialOptions)) {
      this.addHistoryItem({
        type: 'global',
        operation: 'sprite',
        options: initialOptions,
        existent: operationExistedBeforeEntering
      });
    }

    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Gets called when an operation has been removed. If it is the same operation that
   * this control belongs to, it switches back to the overview, leaving this control
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  BrushControls.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    var currentOperation = this.sharedState.get('operation');
    if (operation === currentOperation) {
      // This control needs an existent operation at all times, so re-create it
      var _operation = this.context.editor.operations.getOrCreate('sprite');
      var brushSprite = _operation.createBrush();
      _operation.addSprite(brushSprite);

      this.sharedState.set({
        operation: _operation,
        brushSprite: brushSprite
      });
    }
  };

  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */


  BrushControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('brush') && editor.isToolEnabled('brush');
  };

  return BrushControls;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"]);

BrushControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
BrushControls.getPreloadAssets = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"].getPreloadAssets;
BrushControls.identifier = 'brush';
BrushControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_2__brush_controls_component__["a" /* default */];
BrushControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_3__brush_canvas_controls_component__["a" /* default */];
BrushControls.iconPath = 'editor/controls/brush/icon.png';
BrushControls.activeIconPath = 'editor/controls/brush/icon-active.png';
BrushControls.requiredOperations = ['sprite'];
BrushControls.defaultOptions = {
  brushes: [],
  replaceBrushes: false,
  availableBrushes: null };
/* harmony default export */ __webpack_exports__["default"] = (BrushControls);


__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default.a.Controls.BrushControls = BrushControls;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brush_list_item_component__ = __webpack_require__(29);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var SpriteOperation = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation;

var Brush = void 0;
if (SpriteOperation) {
  Brush = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.BrushSprite.Brush;
}
var ControlGroupTitle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["GroupedControlsStyles"].ControlGroupTitle,
    ControlGroup = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["GroupedControlsStyles"].ControlGroup;


var test = ("production") === 'test';

var BrushControlsComponent = function (_ControlsComponent) {
  _inherits(BrushControlsComponent, _ControlsComponent);

  function BrushControlsComponent() {
    _classCallCheck(this, BrushControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onBrushColorChanged', '_onBrushHardnessChanged', '_onBrushWidthChanged', '_onOperationUpdated');

    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated);

    _this._initBrushManager();
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked immediately after a component is mounted
   */


  BrushControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _ControlsComponent.prototype.componentDidMount.call(this);
    this._onBrushSelect(this._brushManager.getBrushes()[0]);
  };

  // -------------------------------------------------------------------------- BRUSHES

  /**
   * Initializes the brush manager
   * @private
   */


  BrushControlsComponent.prototype._initBrushManager = function _initBrushManager() {
    this._brushManager = new __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BrushManager"](this.context.ui, this.props.options);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user changes the color
   * @param  {PhotoEditorSDK.Color} color
   * @private
   */


  BrushControlsComponent.prototype._onBrushColorChanged = function _onBrushColorChanged(color) {
    var brushInstance = this.getSharedState('brushInstance').clone();
    brushInstance.setColor(color.clone());

    this.setSharedState({
      brushInstance: brushInstance
    });
  };

  /**
   * Invoked when the user changes the brush hardness
   * @param  {Number} hardness
   * @private
   */


  BrushControlsComponent.prototype._onBrushHardnessChanged = function _onBrushHardnessChanged(hardness) {
    var brushInstance = this.getSharedState('brushInstance').clone();
    brushInstance.setHardness(hardness / 100);

    this.setSharedState({
      brushInstance: brushInstance,
      brushHardness: Math.round(hardness)
    });
  };

  /**
   * Gets called when the shared state did change
   * @param {Object} oldState
   * @param {Object} newState
   */


  BrushControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(oldState, newState) {
    if (oldState.brushSize !== newState.brushSize) {
      this._onBrushWidthChanged(newState.brushSize);
    }
  };

  /**
   * Invoked when the user changes the brush width
   * @param  {Number} width
   * @private
   */


  BrushControlsComponent.prototype._onBrushWidthChanged = function _onBrushWidthChanged(width) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var brushInstance = this.getSharedState('brushInstance').clone();
    brushInstance.setSize(width / outputDimensions.min());

    this.setSharedState({
      brushInstance: brushInstance,
      brushSize: Math.round(width)
    });
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  BrushControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    var editor = this.context.editor;

    if (operation === this.getSharedState('operation')) {
      // SpriteOperation re-creates all sprites when they're mass-assigned,
      // so we need to find the new instance by matching against the previous ID
      var previousBrushSprite = this.getSharedState('brushSprite');
      if (previousBrushSprite) {
        var brushSprite = operation.getSprites().filter(function (s) {
          return s.getId() === previousBrushSprite.getId();
        })[0];
        this.setSharedState({ brushSprite: brushSprite });
      }

      // Trigger brush canvas rendering
      editor.render();
    }
  };

  /**
   * Invoked when the user selects a brush
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.BrushSprite.Brush[]|Object[]} brush
   * @private
   */


  BrushControlsComponent.prototype._onBrushSelect = function _onBrushSelect(brush) {
    var _this3 = this;

    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();

    var size = this.getSharedState('brushSize') / outputDimensions.min();
    var hardness = this.getSharedState('brushHardness') / 100;
    var color = this.getSharedState('brushColor');

    var options = {
      size: size, color: color
    };

    var brushInstance = void 0;
    if (brush.prototype && brush.prototype instanceof Brush) {
      // Custom Brush instance, used for special brushes such as radial brush, which has
      // an additional hardness option
      var BrushClass = brush;
      brushInstance = new BrushClass(options);
    } else {
      var _brush = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend({}, brush);
      delete _brush.image;

      var _BrushClass = function (_Brush) {
        _inherits(_BrushClass, _Brush);

        function _BrushClass() {
          _classCallCheck(this, _BrushClass);

          return _possibleConstructorReturn(this, _Brush.apply(this, arguments));
        }

        return _BrushClass;
      }(Brush);

      _BrushClass.identifier = brush.identifier;

      // Plain JS object, used for simple image brushes
      brushInstance = new _BrushClass(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend({}, _brush, options));
    }

    if (brushInstance.hasOption('hardness')) {
      brushInstance.setHardness(hardness);
    }

    this._loadBrush(brush, brushInstance).then(function () {
      _this3.setSharedState({ brushInstance: brushInstance, brush: brush });
    });
  };

  /**
   * Loads the brush image for the given brush class and instance
   * @param  {Function} brush
   * @param  {PhotoEditorSDK.Operations.SpriteOperation.BrushSprite.Brush} brushInstance
   * @return {Promise}
   * @private
   */


  BrushControlsComponent.prototype._loadBrush = function _loadBrush(brush, brushInstance) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      if (brush.constructor === Object) {
        var image = new window.Image();
        image.addEventListener('load', function () {
          brushInstance.setImage(image);
          resolve();
        });
        image.addEventListener('error', function () {
          reject(new Error('Failed to load image at ' + image.src));
        });
        image.src = _this4._getAssetPath(brush.image);
        image.crossOrigin = 'Anonymous';
      } else {
        resolve();
      }
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  BrushControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-brushControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders the brush items
   * @return {React.Element[]}
   * @private
   */


  BrushControlsComponent.prototype._renderBrushItems = function _renderBrushItems() {
    var _this5 = this;

    var brushes = this._brushManager.getBrushes();
    if (brushes.length <= 1) {
      return null;
    }
    return brushes.map(function (brush) {
      return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__brush_list_item_component__["a" /* default */], {
        key: brush.identifier,
        brush: brush,
        selected: _this5.getSharedState('brush') === brush,
        onClick: _this5._onBrushSelect.bind(_this5, brush) });
    });
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  BrushControlsComponent.prototype._renderContent = function _renderContent() {
    var _this6 = this;

    var brushInstance = this.getSharedState('brushInstance');

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
      {
        direction: 'vertical',
        innerListRef: function innerListRef(el) {
          _this6._list = el;
        },
        innerRef: function innerRef(el) {
          _this6._scrollbar = el;
        } },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        Settings,
        null,
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          SettingsTitle,
          null,
          this._t('editor.controls.brush.settings')
        ),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          ColorSelection,
          null,
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ColorSelectionComponent"], {
            value: this.getSharedState('brushColor'),
            onChange: this._onBrushColorChanged })
        ),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(SliderControl, {
          label: this._t('editor.controls.brush.width'),
          minValue: 1,
          maxValue: 100,
          value: this.getSharedState('brushSize'),
          onSliderValueChange: this._onBrushWidthChanged,
          onValueChange: this._onBrushWidthChanged,
          className: test ? 'js-widthControl' : undefined
        }),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(SliderControl, {
          label: this._t('editor.controls.brush.hardness'),
          minValue: 0,
          maxValue: 100,
          disabled: !(brushInstance && brushInstance.hasOption('hardness')),
          value: this.getSharedState('brushHardness'),
          onSliderValueChange: this._onBrushHardnessChanged,
          onValueChange: this._onBrushHardnessChanged
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        Brushes,
        null,
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ScrollbarComponent"],
          { direction: 'vertical' },
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            BrushList,
            null,
            this._renderBrushItems()
          )
        )
      )
    );
  };

  return BrushControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"]);

BrushControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
BrushControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (BrushControlsComponent);


var SliderControl = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SliderControlComponent"])('6vpx1b', 'SliderControl');

var Settings = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(ControlGroup).div('r92vc7', 'Settings');

var SettingsTitle = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(ControlGroupTitle).div('120drhm', 'SettingsTitle');

var ColorSelection = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('yzsuxp', 'ColorSelection');

var Brushes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('16dil83', 'Brushes');

var BrushList = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].ul('1lb1mg4', 'BrushList');

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var PlainControlItemBackground = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItemBackground;
var SpriteOperation = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation;

var Brush = void 0,
    Path = void 0;
if (SpriteOperation) {
  Brush = SpriteOperation.BrushSprite.Brush;
  Path = SpriteOperation.BrushSprite.Path;
}
var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;


var test = ("production") === 'test';

var BrushListItemComponent = function (_BaseComponent) {
  _inherits(BrushListItemComponent, _BaseComponent);

  function BrushListItemComponent() {
    _classCallCheck(this, BrushListItemComponent);

    return _possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- BRUSHES

  /**
   * Loads the brush image for the given brush
   * @param  {Function|Object} brush
   * @return {Promise}
   * @private
   */
  BrushListItemComponent.prototype._loadBrush = function _loadBrush() {
    var _this2 = this;

    var brush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.brush;

    return new Promise(function (resolve, reject) {
      if (brush.constructor === Object) {
        var image = new window.Image();
        image.addEventListener('load', function () {
          _this2._brush.setImage(image);
          resolve();
        });
        image.addEventListener('error', function () {
          reject(new Error('Failed to load image at ' + image.src));
        });
        image.src = _this2._getAssetPath(brush.image);
        image.crossOrigin = 'Anonymous';
      } else {
        resolve();
      }
    });
  };

  /**
   * Draws the brush preview onto the preview canvas
   * @private
   */


  BrushListItemComponent.prototype._drawBrush = function _drawBrush() {
    var path = new Path(null, { brush: this._brush }, this._canvas);
    path.addControlPoint(new Vector2(0.1, 0.5));
    path.addControlPoint(new Vector2(0.9, 0.5));
    path.render(new Vector2(this._canvas.width, this._canvas.height));
  };

  /**
   * Instantiates the given brush with the default options
   * @param  {Function|Object} brush
   * @private
   */


  BrushListItemComponent.prototype._instantiateBrush = function _instantiateBrush() {
    var brush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.brush;

    var defaultOptions = {
      color: __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Color"].WHITE,
      size: 0.25
    };

    if (brush.prototype && brush.prototype instanceof Brush) {
      // Custom Brush instance, used for special brushes such as radial brush, which has
      // an additional hardness option
      var BrushClass = brush;
      this._brush = new BrushClass(defaultOptions);
    } else {
      /**
       * When passing a string to a `Configurable`'s image option, it tries to create an image
       * instance from it. Since we do that manually afterwards (due to prepending the asset path)
       * we simply delete that option
       */
      var _brush = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend({}, brush);
      delete _brush.image;

      var _BrushClass = function (_Brush) {
        _inherits(_BrushClass, _Brush);

        function _BrushClass() {
          _classCallCheck(this, _BrushClass);

          return _possibleConstructorReturn(this, _Brush.apply(this, arguments));
        }

        return _BrushClass;
      }(Brush);

      _BrushClass.identifier = brush.identifier;

      // Plain JS object, used for simple image brushes
      this._brush = new _BrushClass(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend({}, _brush, defaultOptions));
    }
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked immediately after a component is mounted
   */


  BrushListItemComponent.prototype.componentDidMount = function componentDidMount() {
    var _this4 = this;

    _BaseComponent.prototype.componentDidMount.call(this);

    this._instantiateBrush();

    var _canvas = this._canvas,
        width = _canvas.offsetWidth,
        height = _canvas.offsetHeight;


    this._canvas.width = width;
    this._canvas.height = height;

    this._loadBrush().then(function (image) {
      _this4._drawBrush();
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  BrushListItemComponent.prototype.render = function render() {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      BrushListItem,
      {
        onClick: this.props.onClick,
        selected: this.props.selected,
        className: test ? 'js-brushListItem' : undefined,
        'data-selected': this.props.selected },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Canvas, { innerRef: function innerRef(el) {
          _this5._canvas = el;
        } })
    );
  };

  return BrushListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (BrushListItemComponent);


var BrushListItem = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItemBackground).li('8908c2', {
  selected: '120drhm'
}, 'BrushListItem');

var Canvas = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].canvas('1ssoezr', 'Canvas');

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sprites_sprites_canvas_controls_component__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var _ref = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation ? __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation : {},
    BrushSprite = _ref.BrushSprite;

var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var test = ("production") === 'test';

var BrushCanvasControlsComponent = function (_SpritesCanvasControl) {
  _inherits(BrushCanvasControlsComponent, _SpritesCanvasControl);

  function BrushCanvasControlsComponent() {
    _classCallCheck(this, BrushCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SpritesCanvasControl.call.apply(_SpritesCanvasControl, [this].concat(args)));

    _this._bindAll('_onMouseEnter', '_onMouseLeave', '_onMouseMove', '_onDrawStart', '_onDraw', '_onDrawStop');

    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, {
      cursorPosition: new Vector2(0, 0),
      canvasClickDisabled: true
    });
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user starts drawing
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @private
   */


  BrushCanvasControlsComponent.prototype._onDrawStart = function _onDrawStart(position) {
    this.props.controls.registerLocalHistoryChange('brush');

    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();
    this._initialDrawPosition = position.clone();

    var brushSprite = this.getSharedState('brushSprite');
    var brushInstance = this.getSharedState('brushInstance');

    this._currentPath = brushSprite.createPath(brushInstance);
    this._currentPath.addControlPoint(position.clone().divide(outputDimensions));

    this._lastDrawPosition = this._initialDrawPosition.clone();
    this._lastCursorPosition = this._initialDrawPosition.clone();
  };

  /**
   * Invoked while the user is drawing
   * @param  {PhotoEditorSDK.Math.Vector2} totalDistance
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @param  {PhotoEditorSDK.Math.Vector2} distance
   * @private
   */


  BrushCanvasControlsComponent.prototype._onDraw = function _onDraw(totalDistance, position, distance) {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();
    var outputTextureDimensions = editor.getOutputTextureDimensions();
    var cursorPosition = this._lastCursorPosition.clone().add(distance);

    var zoom = editor.zoom.level;

    var brushSize = this.getSharedState('brushSize');
    var distanceToLastDraw = cursorPosition.clone().subtract(this._lastDrawPosition).abs().len();
    if (distanceToLastDraw / zoom >= brushSize / 10) {
      this._currentPath.addControlPoint(cursorPosition.clone().divide(outputDimensions));

      this.getSharedState('brushSprite').render(outputTextureDimensions);

      this._lastDrawPosition.copy(cursorPosition);
    }
    this._lastCursorPosition.copy(cursorPosition);
  };

  /**
   * Invoked whilewhen the user stops drawing
   * @param  {PhotoEditorSDK.Math.Vector2} distance
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @private
   */


  BrushCanvasControlsComponent.prototype._onDrawStop = function _onDrawStop() {
    this._currentPath.setClosed(true);

    var editor = this.context.editor;

    var outputTextureDimensions = editor.getOutputTextureDimensions();
    this.getSharedState('brushSprite').render(outputTextureDimensions);

    this._currentPath = null;
  };

  /**
   * Invoked when the mouse enters the canvas
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseEnter = function _onMouseEnter() {
    this.setState({
      cursorVisible: true
    });
  };

  /**
   * Invoked when the mouse leaves the canvas
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseLeave = function _onMouseLeave() {
    this.setState({
      cursorVisible: false
    });
  };

  /**
   * Invoked while the user drags the mouse over the canvas
   * @param {Event} e
   * @private
   */


  BrushCanvasControlsComponent.prototype._onMouseMove = function _onMouseMove(e) {
    var cursorPosition = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].getEventPosition(e);
    var containerBounds = this._innerContainer.getBoundingClientRect();
    cursorPosition.subtract(containerBounds.left, containerBounds.top);

    this.setState({
      cursorPosition: cursorPosition
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the props that are passed to the item component of the given sprite
   * @param  {Sprite} sprite
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getPropsForSprite = function _getPropsForSprite(sprite) {
    var props = _SpritesCanvasControl.prototype._getPropsForSprite.call(this, sprite);
    if (sprite instanceof BrushSprite) {
      props.hideContent = false;
    }
    return props;
  };

  /**
   * Returns the stle object for the cursor
   * @return {Object}
   * @private
   */


  BrushCanvasControlsComponent.prototype._getCursorStyle = function _getCursorStyle() {
    return {
      width: this.getSharedState('brushSize') + 8,
      height: this.getSharedState('brushSize') + 8,
      left: this.state.cursorPosition.x,
      top: this.state.cursorPosition.y,
      marginLeft: (this.getSharedState('brushSize') + 8) * -0.5,
      marginTop: (this.getSharedState('brushSize') + 8) * -0.5
    };
  };

  /**
   * Renders the overlay controls
   * @return {React.Element}
   * @private
   */


  BrushCanvasControlsComponent.prototype._renderOverlayControls = function _renderOverlayControls() {
    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
      {
        onStart: this._onDrawStart,
        onDrag: this._onDraw,
        onStop: this._onDrawStop },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        BrushCanvasControls,
        {
          onMouseEnter: this._onMouseEnter,
          onMouseLeave: this._onMouseLeave,
          onMouseMove: this._onMouseMove,
          className: test ? 'js-brushCanvasControls' : undefined },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Cursor, {
          style: this._getCursorStyle(),
          visible: this.state.cursorVisible })
      )
    );
  };

  return BrushCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_sprites_sprites_canvas_controls_component__["a" /* default */]);

BrushCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_2__shared_sprites_sprites_canvas_controls_component__["a" /* default */].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (BrushCanvasControlsComponent);


var BrushCanvasControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1sc5z35', 'BrushCanvasControls');

var Cursor = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('y4v90o', {
  visible: '2jlos'
}, 'Cursor');

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_controls_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_canvas_controls_component__ = __webpack_require__(36);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;


var TextSprite = void 0,
    BrushSprite = void 0;
if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation) {
  TextSprite = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.TextSprite;
  BrushSprite = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.BrushSprite;
}

var TextControls = function (_BaseControls) {
  _inherits(TextControls, _BaseControls);

  function TextControls() {
    _classCallCheck(this, TextControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Creates a new text sprite
   * @private
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  TextControls.prototype.createText = function createText() {
    var editor = this.context.editor;


    var operation = this.sharedState.get('operation');
    var fontManager = this.sharedState.get('fontManager');
    var defaultFontVariation = fontManager.getDefaultVariation();

    var outputDimensions = editor.getOutputDimensions();
    var sdk = editor.getSDK();
    var renderer = sdk.getRenderer();
    var maxTextureSize = renderer.getMaxTextureSize();

    this.addHistorySnapshot('local');

    var text = operation.createText({
      text: this.context.ui.translate('editor.controls.text.defaultText'),
      position: new Vector2(0.5, 0.5),
      maxWidth: 0.5,
      maxHeight: maxTextureSize ? maxTextureSize / outputDimensions.y : 3,
      textMetrics: defaultFontVariation.getTextMetrics(),
      fontIdentifier: defaultFontVariation.getIdentifier(),
      fontSize: 0.08,
      fontFamily: defaultFontVariation.getFontFamily(),
      fontWeight: defaultFontVariation.getFontWeight(),
      fontStyle: defaultFontVariation.getFontStyle(),
      color: __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Color"].WHITE,
      alignment: 'center'
    });
    operation.addSprite(text);

    this.sharedState.set({ selectedSprite: text });

    return text;
  };

  /**
   * Is called when a control is entered
   * @private
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Object[]} [fonts = []]
   * @property {Boolean} [replaceFonts = false]
   * @property {String[]} [availableVariations = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */

  /**
   * A unique identifier for these controls
   * @type {String}
   */


  TextControls.prototype._onEnter = function _onEnter() {
    this._globalHistoryItem = this.createHistoryItem('global', 'sprite');

    var editor = this.context.editor;

    var operationExistedBeforeEntering = editor.operations.exists('sprite');
    var operation = editor.operations.getOrCreate('sprite');
    var initialOptions = operation.serializeOptions();

    var _options = this._options,
        fonts = _options.fonts,
        replaceFonts = _options.replaceFonts,
        availableVariations = _options.availableVariations;

    var fontManager = new __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["FontManager"](this.context.ui, { fonts: fonts, replaceFonts: replaceFonts, availableVariations: availableVariations });

    this.sharedState.set({
      operation: operation,
      fontManager: fontManager
    });

    editor.features.disable('zoom', 'drag');
    editor.zoom.auto();

    var selectedSprite = this.sharedState.get('selectedSprite');
    if (!selectedSprite) {
      this.createText();
    }

    this.sharedState.set({
      operationExistedBeforeEntering: operationExistedBeforeEntering, operation: operation, initialOptions: initialOptions
    });
    editor.render();
  };

  /**
   * Invoked when the user leaves this control
   * @private
   */


  TextControls.prototype._onLeave = function _onLeave() {
    var editor = this.context.editor;

    // Only add a global history item, if any notable changes have been made (which would
    // result in local history items being created)

    if (this._localHistoryItems.length && !this.skipHistory) {
      this.addHistoryItem(this._globalHistoryItem);
    }

    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Checks if this control reacts to a click at the given (relative to canvas) position. If it
   * does, it returns an object with a prepared shared state (e.g. selected sprite) that is passed
   * to this control on creation
   * @param  {PhotoEditorSDK.Math.Vector2} clickPosition
   * @param  {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {Object}
   */


  TextControls.clickAtPosition = function clickAtPosition(clickPosition, editor) {
    if (!editor.operations.exists('sprite')) return false;

    var operation = editor.operations.getOrCreate('sprite');
    var sprites = operation.getSpritesAtPosition(clickPosition, editor.getOutputTextureDimensions()).filter(function (s) {
      return !(s instanceof BrushSprite);
    });

    if (sprites.length && sprites[0] instanceof TextSprite) {
      return { selectedSprite: sprites[0] };
    } else {
      return false;
    }
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {String[]}
   */


  TextControls.getPreloadAssets = function getPreloadAssets(editor) {
    return ['editor/controls/shared/canvas-overlay-controls/to-front.png', 'editor/controls/shared/canvas-overlay-controls/duplicate.png', 'editor/controls/shared/canvas-overlay-controls/delete.png'];
  };

  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */


  TextControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('text') && editor.isToolEnabled('text');
  };

  return TextControls;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"]);

TextControls.identifier = 'text';
TextControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_2__text_controls_component__["a" /* default */];
TextControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_3__text_canvas_controls_component__["a" /* default */];
TextControls.iconPath = 'editor/controls/text/icon.png';
TextControls.activeIconPath = 'editor/controls/text/icon-active.png';
TextControls.requiredOperations = ['sprite'];
TextControls.defaultOptions = {
  fonts: [],
  replaceFonts: false,
  availableVariations: null,
  snapRotation: 90,
  snapRotationTolerance: 5 };
/* harmony default export */ __webpack_exports__["default"] = (TextControls);


__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default.a.Controls.TextControls = TextControls;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__font_family_and_size_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_controls_styling_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_legibility_preset_item_component__ = __webpack_require__(35);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */







var ControlGroupList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["GroupedControlsStyles"].ControlGroupList;

var test = ("production") === 'test';
var MAX_FONT_LOADING_TIME = 200;

var TextControlsComponent = function (_ControlsComponent) {
  _inherits(TextControlsComponent, _ControlsComponent);

  function TextControlsComponent() {
    _classCallCheck(this, TextControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onNewTextClick', '_onFontChanged', '_onFontSizeChanged', '_onCharacterSpacingChanged', '_onLineSpacingChanged', '_onColorChanged', '_onBackgroundColorChanged', '_onSelectedSpriteUpdate', '_onAlignmentChanged', '_onVariationChanged', '_onTextScaled');

    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TEXT_SCALED, _this._onTextScaled);
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  TextControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _ControlsComponent.prototype.componentDidMount.call(this);
    this._loadFonts();
  };

  /**
   * Gets called when the shared state did change
   * @param {Object} oldState
   * @param {Object} newState
   */


  TextControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(oldState, newState) {
    if (oldState.selectedSprite !== newState.selectedSprite) {
      this._lastLocalHistoryItem = null;

      oldState.selectedSprite.off('update', this._onSelectedSpriteUpdate);
      if (newState.selectedSprite) {
        newState.selectedSprite.on('update', this._onSelectedSpriteUpdate);
      }
    }
  };

  // -------------------------------------------------------------------------- FONT LOADING

  TextControlsComponent.prototype._loadFonts = function _loadFonts() {
    var _this2 = this;

    var fontManager = this.getSharedState('fontManager');
    var fontLoader = this.context.ui.getFontLoader();
    fontLoader.setFonts(fontManager.getFonts());

    var loadingModal = void 0;
    var loadingTimeout = window.setTimeout(function () {
      loadingModal = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayLoading(_this2._t('loading.fonts'), true);
    }, MAX_FONT_LOADING_TIME);

    var selectedSprite = this.getSharedState('selectedSprite');

    return fontLoader.load().then(function () {
      window.clearTimeout(loadingTimeout);
      if (loadingModal) loadingModal.close();

      // Force font update after loading
      selectedSprite.emit('update');
      var editor = _this2.context.editor;

      editor.render();
    }).catch(function (e) {
      window.clearTimeout(loadingTimeout);
      if (loadingModal) loadingModal.close();

      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayError(_this2._t('errors.fontLoadingError.text', { fontFamily: e.font.getFontFamily() }));
    });
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the selected sprite is being updated
   * @param  {Sprite} sprite
   * @param  {Object} options
   * @private
   */


  TextControlsComponent.prototype._onSelectedSpriteUpdate = function _onSelectedSpriteUpdate(sprite, options) {
    if (!options) {
      return;
    }

    if (options.fontSize) {
      this.forceUpdate();
    }
  };

  /**
   * Invoked when the 'New Text' button has been clicked
   * @private
   */


  TextControlsComponent.prototype._onNewTextClick = function _onNewTextClick() {
    this.props.controls.createText();

    var editor = this.context.editor;

    editor.render();

    this.forceUpdate();
  };

  /**
   * Invoked when the text alignment has been changed
   * @param  {String} alignment
   * @private
   */


  TextControlsComponent.prototype._onAlignmentChanged = function _onAlignmentChanged(alignment) {
    this.props.controls.registerLocalHistoryChange('text-alignment', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setAlignment(alignment);

    this.forceUpdate();

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when a different font variation has been selected
   * @param  {String} variation
   * @private
   */


  TextControlsComponent.prototype._onVariationChanged = function _onVariationChanged(variation) {
    var editor = this.context.editor;


    this.props.controls.registerLocalHistoryChange('font-variation', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setFontIdentifier(variation.getIdentifier());
    selectedSprite.setFontFamily(variation.getFontFamily());
    selectedSprite.setFontWeight(variation.getFontWeight());
    selectedSprite.setFontStyle(variation.getFontStyle());
    selectedSprite.setTextMetrics(variation.getTextMetrics());

    this.forceUpdate();

    editor.render();
  };

  /**
   * Invoked when the font family has been changed
   * @param  {Font} font
   * @private
   */


  TextControlsComponent.prototype._onFontChanged = function _onFontChanged(font) {
    this.props.controls.registerLocalHistoryChange('font-family', true);

    var firstVariation = font.getVariations()[0];
    this._onVariationChanged(firstVariation);

    this.forceUpdate();

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the font size has been changed
   * @param  {Number} fontSize
   * @private
   */


  TextControlsComponent.prototype._onFontSizeChanged = function _onFontSizeChanged(fontSize) {
    this.props.controls.registerLocalHistoryChange('font-size');

    var selectedSprite = this.getSharedState('selectedSprite');
    var operation = this.getSharedState('operation');
    var inputDimensions = operation.getInputDimensions();
    selectedSprite.setFontSize(fontSize / inputDimensions.min());

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the color has been changed
   * @param  {PhotoEditorSDK.Color} color
   * @private
   */


  TextControlsComponent.prototype._onColorChanged = function _onColorChanged(color) {
    this.props.controls.registerLocalHistoryChange('color', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setColor(color.clone());

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the background color has been changed
   * @param {PhotoEditorSDK.Color} color
   * @private
   */


  TextControlsComponent.prototype._onBackgroundColorChanged = function _onBackgroundColorChanged(color) {
    this.props.controls.registerLocalHistoryChange('backgroundColor', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setBackgroundColor(color.clone());

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Called when the character spacing is changed.
   * @param  {Number} value
   * @return @private
   */


  TextControlsComponent.prototype._onCharacterSpacingChanged = function _onCharacterSpacingChanged(value) {
    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setCharacterSpacing(value);

    this.forceUpdate();

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Called when the line spacing is changed.
   * @param  {Number} lineSpacing
   * @return @private
   */


  TextControlsComponent.prototype._onLineSpacingChanged = function _onLineSpacingChanged(lineSpacing) {
    this.props.controls.registerLocalHistoryChange('line-spacing', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setLineHeight(lineSpacing);

    this.forceUpdate();

    var editor = this.context.editor;

    editor.render();
  };

  /**
   * Invoked when the user scales the sprite (we need to update this component
   * because the font size has changed)
   * @private
   */


  TextControlsComponent.prototype._onTextScaled = function _onTextScaled() {
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the different legibility presets.
   * @return {React.Element[]}
   * @private
   */


  TextControlsComponent.prototype._renderLegibilityPresets = function _renderLegibilityPresets() {
    var presets = [{
      title: 'text shadow'
    }, {
      title: 'bg overlay'
    }, {
      title: 'bg blur'
    }];

    return presets.map(function (preset) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_3__text_legibility_preset_item_component__["a" /* default */], {
        key: preset.title,
        title: preset.title });
    });
  };

  /**
   * Renders the font family and font size component
   * @return {React.Component}
   * @private
   */


  TextControlsComponent.prototype._renderFontFamilyAndSizeComponent = function _renderFontFamilyAndSizeComponent() {
    var selectedSprite = this.getSharedState('selectedSprite');
    var fontManager = this.getSharedState('fontManager');

    var operation = this.getSharedState('operation');
    var inputDimensions = operation.getInputDimensions();
    var fontSize = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].toFixed(selectedSprite.getFontSize() * inputDimensions.min(), 1);
    var maxFontSize = Math.round(inputDimensions.y);

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__font_family_and_size_component__["a" /* default */], {
      onValueChange: this._onFontSizeChanged,
      onFontChange: this._onFontChanged,
      fonts: fontManager.getFonts(),
      dropdownValue: selectedSprite.getFontFamily(),
      label: this._t('editor.controls.text.font'),
      inputLabel: this._t('editor.controls.text.size'),
      className: test ? 'js-fontFamilyAndSize' : undefined,
      value: fontSize,
      minValue: 10,
      maxValue: maxFontSize });
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  TextControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-textControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this control's content
   * @return {React.Element}
   */


  TextControlsComponent.prototype._renderContent = function _renderContent() {
    var _this3 = this;

    var selectedSprite = this.getSharedState('selectedSprite');
    if (!selectedSprite) return null;
    /*
      <CollapseSection key='legibility' title='legibility' alwaysExpanded>
        {this._renderLegibilityPresets()}
      </CollapseSection>
    */

    var fontManager = this.getSharedState('fontManager');
    var font = fontManager.getFontByFontFamily(selectedSprite.getFontFamily());
    var fontVariation = fontManager.getVariationByIdentifier(selectedSprite.getFontIdentifier());

    var color = selectedSprite.getColor().clone();
    var backgroundColor = selectedSprite.getBackgroundColor().clone();

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
      {
        direction: 'vertical',
        innerListRef: function innerListRef(el) {
          _this3._list = el;
        },
        innerRef: function innerRef(el) {
          _this3._scrollbar = el;
        } },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        TopSection,
        { className: test ? 'fixed-text-controls' : undefined },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ButtonComponent"], {
          title: this._t('editor.controls.text.new'),
          onClick: this._onNewTextClick,
          className: test ? 'js-newTextButton' : undefined }),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          Details,
          null,
          this._renderFontFamilyAndSizeComponent(),
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__text_controls_styling_component__["a" /* default */], {
            alignment: selectedSprite.getAlignment(),
            variations: font.getVariations(),
            selectedVariation: fontVariation,
            onAlignmentChange: this._onAlignmentChanged,
            onVariationChange: this._onVariationChanged })
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ColorSelectionComponent"], {
          value: color,
          onColorPickerToggle: this.fixStyles,
          onChange: this._onColorChanged })
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        SectionList,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["CollapseSectionComponent"],
          { key: 'background', title: this._t('editor.controls.text.background'), alwaysExpanded: true, className: test ? 'js-bgColorCollapse' : undefined },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ColorSelectionComponent"], {
            value: backgroundColor,
            onColorPickerToggle: this.fixStyles,
            onChange: this._onBackgroundColorChanged })
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["CollapseSectionComponent"],
          { key: 'spacing', title: this._t('editor.controls.text.spacing'), alwaysExpanded: true },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderControlComponent"], {
            label: this._t('editor.controls.text.line'),
            minValue: 0.5,
            maxValue: 3,
            className: test ? 'js-lineSpacing' : undefined,
            value: __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].toFixed(selectedSprite.getLineHeight(), 1),
            onSliderValueChange: this._onLineSpacingChanged,
            onValueChange: this._onLineSpacingChanged })
        )
      )
    );
  };

  return TextControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"]);

// -------------------------------------------------------------------------- STYLING


TextControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
TextControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (TextControlsComponent);
var TopSection = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1vnvjau', 'TopSection');

var SectionList = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlGroupList).ul('mgrj1m', 'SectionList');

var Details = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('tymb4t', 'Details');

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var test = ("production") === 'test';

var FontFamilyAndSizeComponent = function (_ValueSelectionCompon) {
  _inherits(FontFamilyAndSizeComponent, _ValueSelectionCompon);

  function FontFamilyAndSizeComponent() {
    _classCallCheck(this, FontFamilyAndSizeComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ValueSelectionCompon.call.apply(_ValueSelectionCompon, [this].concat(args)));

    _this._updateFontsMap();
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked before a mounted component receives new props
   * @param  {Object} nextProps
   */


  FontFamilyAndSizeComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    _ValueSelectionCompon.prototype.componentWillReceiveProps.call(this, nextProps);
    if (nextProps.fonts !== this.props.fonts) {
      this._updateFontsMap();
    }
  };

  /**
   * Updates the fonts map (<FontFamily, Font>)
   * @private
   */


  FontFamilyAndSizeComponent.prototype._updateFontsMap = function _updateFontsMap() {
    var _this2 = this;

    this._fontsMap = {};
    this.props.fonts.forEach(function (font) {
      _this2._fontsMap[font.getFontFamily()] = font;
    });
  };

  /**
   * Renders the left part of this ValueSelectionComponent
   * @return {React.Element}
   * @private
   */


  FontFamilyAndSizeComponent.prototype._renderLeftPart = function _renderLeftPart() {
    var selectedSprite = this.getSharedState('selectedSprite');
    var fontFamily = selectedSprite.getFontFamily();
    var font = this._fontsMap[fontFamily];
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      'div',
      { ref: 'root', className: test ? 'js-fontDropdown' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["DropdownComponent"],
        {
          value: font,
          style: { fontFamily: fontFamily },
          className: test ? 'js-fontDropdown' : undefined,
          onChange: this.props.onFontChange },
        this.props.fonts.map(function (font) {
          return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["DropdownComponent"].Item,
            {
              value: font,
              key: font.getFontFamily(),
              style: { fontFamily: font.getFontFamily() } },
            font.getFontFamily()
          );
        })
      )
    );
  };

  return FontFamilyAndSizeComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ValueSelectionComponent"]);

FontFamilyAndSizeComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ValueSelectionComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (FontFamilyAndSizeComponent);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var test = ("production") === 'test';

var TextControlsStylingComponent = function (_BaseComponent) {
  _inherits(TextControlsStylingComponent, _BaseComponent);

  function TextControlsStylingComponent() {
    _classCallCheck(this, TextControlsStylingComponent);

    return _possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks an alignment item
   * @param  {Object} item
   * @private
   */
  TextControlsStylingComponent.prototype._onAlignmentItemClick = function _onAlignmentItemClick(item) {
    this.props.onAlignmentChange && this.props.onAlignmentChange(item.title);
  };

  /**
   * Invoked when the user clicks a style item
   * @param  {Object} item
   * @private
   */


  TextControlsStylingComponent.prototype._onStyleItemClick = function _onStyleItemClick(item) {
    switch (item.title) {
      case 'bold':
        this.props.onStyleChange && this.props.onStyleChange('fontWeight', this.props.bold ? 'normal' : 'bold');
        break;
      case 'italic':
        this.props.onStyleChange && this.props.onStyleChange('fontStyle', this.props.italic ? 'normal' : 'italic');
        break;
    }
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the alignment items
   * @return {React.Element[]}
   * @private
   */


  TextControlsStylingComponent.prototype._renderAligmentItems = function _renderAligmentItems() {
    var _this2 = this;

    var alignment = this.props.alignment;

    var items = [{
      title: 'left',
      selected: alignment === 'left',
      iconPath: 'editor/controls/text/align-left.png',
      selectedIconPath: 'editor/controls/text/align-left-selected.png'
    }, {
      title: 'center',
      selected: alignment === 'center',
      iconPath: 'editor/controls/text/align-center.png',
      selectedIconPath: 'editor/controls/text/align-center-selected.png'
    }, {
      title: 'right',
      selected: alignment === 'right',
      iconPath: 'editor/controls/text/align-right.png',
      selectedIconPath: 'editor/controls/text/align-right-selected.png'
    }];

    return items.map(function (item) {
      var iconPath = _this2._getAssetPath(item.iconPath, true);
      var selectedIconPath = _this2._getAssetPath(item.selectedIconPath, true);
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        ItemContainer,
        {
          key: item.title,
          className: test ? 'js-textAlignment' : undefined,
          'data-alignment': item.title,
          'data-selected': item.selected,
          onClick: _this2._onAlignmentItemClick.bind(_this2, item) },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ItemImage, {
          visible: true,
          src: iconPath }),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ItemImage, {
          visible: item.selected,
          src: selectedIconPath })
      );
    }, this);
  };

  /**
   * Renders the styles dropdown
   * @return {React.Element}
   * @private
   */


  TextControlsStylingComponent.prototype._renderStylesDropdown = function _renderStylesDropdown() {
    var _props = this.props,
        variations = _props.variations,
        selectedVariation = _props.selectedVariation;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["DropdownComponent"],
      {
        value: selectedVariation,
        onChange: this.props.onVariationChange,
        className: test ? 'js-styleDropdown' : undefined,
        enableMenu: variations.length > 1
      },
      variations.map(function (variation) {
        return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["DropdownComponent"].Item,
          {
            value: variation,
            key: variation.getIdentifier(),
            style: {
              fontFamily: variation.getFontFamily(),
              fontStyle: variation.getFontStyle(),
              fontWeight: variation.getFontWeight()
            } },
          variation.getLabel()
        );
      })
    );
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  TextControlsStylingComponent.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      TextControlsStyling,
      {
        className: test ? 'js-textStylingControls' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Group,
        null,
        this._renderStylesDropdown()
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Group,
        { right: true },
        this._renderAligmentItems()
      )
    );
  };

  return TextControlsStylingComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

TextControlsStylingComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (TextControlsStylingComponent);


var TextControlsStyling = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1hzgwcr', 'TextControlsStyling');

var Group = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('64aub5', {
  right: '9ygmmm'
}, 'Group');

var ItemContainer = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('tgbgl1', {
  selected: 'zgbg08'
}, 'ItemContainer');

var ItemImage = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].img('7ni881', {
  visible: 'zgbg08'
}, 'ItemImage');

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var ControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItem,
    ControlItemTitle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle;

var LegibilityPresetItemComponent = function (_BaseComponent) {
  _inherits(LegibilityPresetItemComponent, _BaseComponent);

  function LegibilityPresetItemComponent() {
    _classCallCheck(this, LegibilityPresetItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onClick', '_onMouseEnter', '_onMouseLeave', '_onIntensityChanged');

    _this.state = {
      selected: false,
      hovering: false,
      intensity: 50
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the user clicks the item.
   * @private
   */


  LegibilityPresetItemComponent.prototype._onClick = function _onClick() {
    this.setState({
      selected: true
    });
  };

  /**
   * Gets called when the mouse enters the navigation bar.
   * @private
   */


  LegibilityPresetItemComponent.prototype._onMouseEnter = function _onMouseEnter() {
    this.setState({
      hovering: true
    });
  };

  /**
   * Gets called when the mouse leaves the navigation bar.
   * @private
   */


  LegibilityPresetItemComponent.prototype._onMouseLeave = function _onMouseLeave() {
    this.setState({
      hovering: false
    });
  };

  /**
   * Called when the intensity changes.
   * @param  {Number} value The new intensity
   * @private
   */


  LegibilityPresetItemComponent.prototype._onIntensityChanged = function _onIntensityChanged(value) {
    this.setState({
      intensity: value
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  LegibilityPresetItemComponent.prototype.render = function render() {
    var _state = this.state,
        selected = _state.selected,
        hovering = _state.hovering,
        intensity = _state.intensity;


    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      LegibilityPresetItem,
      {
        onMouseEnter: this._onMouseEnter,
        onMouseLeave: this._onMouseLeave,
        onClick: this._onClick,
        selected: selected },
      !(selected && hovering) && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Title,
        { selected: selected },
        this.props.title
      ),
      selected && hovering && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Slider,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderComponent"], {
          minValue: 0,
          maxValue: 100,
          valueUnit: '',
          middleDot: false,
          value: intensity,
          onChange: this._onIntensityChanged })
      )
    );
  };

  return LegibilityPresetItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

// -------------------------------------------------------------------------- STYLING

LegibilityPresetItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (LegibilityPresetItemComponent);
var LegibilityPresetItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItem).div('nasu8t', {
  selected: '120drhm'
}, 'LegibilityPresetItem');

var Title = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).div('1hd9n2f', {
  selected: '186qcx6'
}, 'Title');

var Slider = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('8ekz81', 'Slider');

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sprites_sprites_canvas_controls_component__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var TextSprite = void 0;
if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation) {
  TextSprite = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.TextSprite;
}

var TextCanvasControlsComponent = function (_SpritesCanvasControl) {
  _inherits(TextCanvasControlsComponent, _SpritesCanvasControl);

  function TextCanvasControlsComponent() {
    _classCallCheck(this, TextCanvasControlsComponent);

    return _possibleConstructorReturn(this, _SpritesCanvasControl.apply(this, arguments));
  }

  /**
   * Selects the next sprite
   * @private
   */
  TextCanvasControlsComponent.prototype._selectNextSprite = function _selectNextSprite() {
    var operation = this.getSharedState('operation');
    var sprites = operation.getSprites().slice(0).reverse();

    var sprite = void 0,
        nextSprite = void 0;
    for (var i = 0; i < sprites.length; i++) {
      sprite = sprites[i];
      if (sprite instanceof TextSprite) {
        nextSprite = sprite;
        break;
      }
    }

    if (!nextSprite) {
      this.props.controls.skipHistory = true;
      this.context.screen.switchToControls('default');
    }
    this.setSharedState({ selectedSprite: nextSprite });
  };

  /**
   * Creates a new sprite with the given options
   * @param  {Object} options
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Sprite}
   * @private
   */


  TextCanvasControlsComponent.prototype._createSprite = function _createSprite(options) {
    var operation = this.getSharedState('operation');
    return operation.createText(options);
  };

  return TextCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_sprites_sprites_canvas_controls_component__["a" /* default */]);

TextCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1__shared_sprites_sprites_canvas_controls_component__["a" /* default */].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (TextCanvasControlsComponent);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticker_controls_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sticker_canvas_controls_component__ = __webpack_require__(43);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var StickerSprite = void 0,
    BrushSprite = void 0;
if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation) {
  StickerSprite = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.StickerSprite;
  BrushSprite = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.BrushSprite;
}

var StickerControls = function (_BaseControls) {
  _inherits(StickerControls, _BaseControls);

  function StickerControls() {
    _classCallCheck(this, StickerControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Is called when a control is entered
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  StickerControls.prototype._onEnter = function _onEnter() {
    var editor = this.context.editor;

    var operationExistedBeforeEntering = editor.operations.exists('sprite');
    var operation = editor.operations.getOrCreate('sprite');
    var initialOptions = operation.serializeOptions();

    editor.zoom.auto();
    editor.features.disable('zoom', 'drag');

    this.sharedState.set({
      operationExistedBeforeEntering: operationExistedBeforeEntering, operation: operation, initialOptions: initialOptions
    });
  };

  /**
   * Invoked when the user leaves this control
   * @private
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Object[]} [categories = []]
   * @property {Boolean} [replaceCategories = false]
   * @property {String[]} [availableStickers = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */

  /**
   * A unique identifier for these controls
   * @type {String}
   */


  StickerControls.prototype._onLeave = function _onLeave() {
    var _sharedState$getState = this.sharedState.getState(),
        initialOptions = _sharedState$getState.initialOptions,
        operation = _sharedState$getState.operation,
        operationExistedBeforeEntering = _sharedState$getState.operationExistedBeforeEntering;

    if (!operation.optionsEqual(initialOptions)) {
      this.addHistoryItem({
        type: 'global',
        operation: 'sprite',
        options: initialOptions,
        existent: operationExistedBeforeEntering
      });
    }

    var editor = this.context.editor;

    editor.features.enable('zoom', 'drag');
    editor.render();
  };

  /**
   * Checks if this control reacts to a click at the given (relative to canvas) position. If it
   * does, it returns an object with a prepared shared state (e.g. selected sprite) that is passed
   * to this control on creation
   * @param  {PhotoEditorSDK.Math.Vector2} clickPosition
   * @param  {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {Object}
   */


  StickerControls.clickAtPosition = function clickAtPosition(clickPosition, editor) {
    if (!editor.operations.exists('sprite')) return false;

    var operation = editor.operations.getOrCreate('sprite');
    var sprites = operation.getSpritesAtPosition(clickPosition, editor.getOutputTextureDimensions()).filter(function (s) {
      return !(s instanceof BrushSprite);
    });

    if (sprites.length && sprites[0] instanceof StickerSprite) {
      return { selectedSprite: sprites[0] };
    } else {
      return false;
    }
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {String[]}
   */


  StickerControls.getPreloadAssets = function getPreloadAssets(editor) {
    return ['editor/controls/shared/canvas-overlay-controls/to-front.png', 'editor/controls/shared/canvas-overlay-controls/duplicate.png', 'editor/controls/shared/canvas-overlay-controls/delete.png'];
  };

  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */


  StickerControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('sticker') && editor.isToolEnabled('sticker');
  };

  return StickerControls;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"]);

StickerControls.identifier = 'sticker';
StickerControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_2__sticker_controls_component__["a" /* default */];
StickerControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_3__sticker_canvas_controls_component__["a" /* default */];
StickerControls.iconPath = 'editor/controls/sticker/icon.png';
StickerControls.activeIconPath = 'editor/controls/sticker/icon-active.png';
StickerControls.requiredOperations = ['sprite'];
StickerControls.defaultOptions = {
  categories: [],
  replaceCategories: false,
  availableStickers: null,
  snapRotation: 90,
  snapRotationTolerance: 5 };
/* harmony default export */ __webpack_exports__["default"] = (StickerControls);


__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default.a.Controls.StickerControls = StickerControls;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticker_root_panel_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sticker_category_panel_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sticker_options_panel_component__ = __webpack_require__(42);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */







var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var test = ("production") === 'test';

var PanelEnum = {
  ROOT: 1,
  CATEGORY: 2,
  OPTIONS: 3
};

var StickerControlsComponent = function (_ControlsComponent) {
  _inherits(StickerControlsComponent, _ControlsComponent);

  function StickerControlsComponent() {
    _classCallCheck(this, StickerControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onCategoryClick', '_onStickerClick', '_onBackClick', '_onNewStickerClick', '_onReplaceClick');

    _this._initStickerManager();
    _this._needsStyleFixes = true;

    var currentPanel = PanelEnum.ROOT;
    if (_this.getSharedState('selectedSprite')) {
      currentPanel = PanelEnum.OPTIONS;
    }
    _this.state.currentPanel = currentPanel;
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * @return {Promise}
   */


  StickerControlsComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    this._list.style.height = '100%';
    return _ControlsComponent.prototype.fixStyles.call(this).then(function () {
      if (__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        var containerHeight = _this2._container.offsetHeight;
        _this2._list.style.height = containerHeight + 'px';
      }

      return _this2.refs.panel.fixStyles();
    });
  };

  /**
   * Gets called when the shared state did change
   * @param {Object} oldState
   * @param {Object} newState
   */


  StickerControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(oldState, newState) {
    if (oldState.selectedSprite !== newState.selectedSprite && newState.selectedSprite) {
      this.setState({
        currentPanel: PanelEnum.OPTIONS
      });
    }
  };

  /**
   * Invoked immediately after updating occurs
   */


  StickerControlsComponent.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPanel !== prevState.currentPanel) {
      this.fixStyles();
    }
  };

  // -------------------------------------------------------------------------- STICKER MANAGER

  /**
   * Initializes the sticker manager
   * @private
   */


  StickerControlsComponent.prototype._initStickerManager = function _initStickerManager() {
    var _props$options = this.props.options,
        categories = _props$options.categories,
        replaceCategories = _props$options.replaceCategories,
        availableStickers = _props$options.availableStickers;

    this._stickerManager = new __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["StickerManager"](this.context.ui, { categories: categories, replaceCategories: replaceCategories, availableStickers: availableStickers });
  };

  /**
   * Loads and returns the image for the given sticker
   * @param  {Object} sticker
   * @return {Promise}
   * @private
   */


  StickerControlsComponent.prototype._loadStickerImage = function _loadStickerImage(sticker) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var mediaBase = sticker.images.mediaBase;

      var url = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["StickerManager"].getURLForSticker(sticker, 'base');
      var resolvedStickerPath = _this3._getAssetPath(url);
      var image = new window.Image();

      var loadingModal = void 0;
      var loadTimeout = setTimeout(function () {
        loadingModal = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayLoading(_this3._t('loading.loading'));
      }, 100);

      image.addEventListener('load', function () {
        if (loadingModal) loadingModal.close();
        if (loadTimeout) {
          clearTimeout(loadTimeout);
          loadTimeout = null;
        }

        if (typeof mediaBase.width !== 'undefined' && typeof mediaBase.height !== 'undefined') {
          image.width = mediaBase.width;
          image.height = mediaBase.height;
        }

        resolve(image);
      });

      image.addEventListener('error', function () {
        if (loadingModal) loadingModal.close();
        if (loadTimeout) {
          clearTimeout(loadTimeout);
          loadTimeout = null;
        }

        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayError(_this3._t('errors.title'), _this3._t('errors.stickerLoadingError.text', { path: image.src }));

        reject(new Error('Loading sticker failed'));
      });

      image.crossOrigin = 'Anonymous';
      image.src = resolvedStickerPath;
    });
  };

  /**
   * Creates a sticker object from the given sticker data
   * @param  {Object} sticker
   * @return {Promise}
   * @private
   */


  StickerControlsComponent.prototype._createSticker = function _createSticker(sticker) {
    var _this4 = this;

    return this._loadStickerImage(sticker).then(function (image) {
      var editor = _this4.context.editor;


      _this4.props.controls.registerLocalHistoryChange('sticker-creation', true);

      var operation = _this4.getSharedState('operation');
      var inputDimensions = operation.getInputDimensions(false);
      var imageDimensions = new Vector2(image.width, image.height);
      var maxDimensions = new Vector2(inputDimensions.min() * 0.5, inputDimensions.min() * 0.5);

      var sprite = operation.createSticker({
        identifier: sticker.identifier,
        image: image,
        position: new Vector2(0.5, 0.5),
        dimensions: __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].resizeVectorToFit(imageDimensions, maxDimensions),
        rotation: 0,
        smoothDownscaling: _this4.props.options.smoothDownscaling
      });
      operation.addSprite(sprite);

      editor.render(function () {
        // Broadcast new state
        _this4.setSharedState({
          selectedSprite: sprite
        });
      });

      return sprite;
    });
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked hwen the `Replace` button has been clicked
   * @privte
   */


  StickerControlsComponent.prototype._onReplaceClick = function _onReplaceClick() {
    this.setState({
      currentPanel: PanelEnum.ROOT
    });
  };

  /**
   * Invoked when the `New Sticker` button has been clicked
   * @private
   */


  StickerControlsComponent.prototype._onNewStickerClick = function _onNewStickerClick() {
    this.state.currentPanel = PanelEnum.ROOT;
    this.setSharedState({
      selectedSprite: null
    });
  };

  /**
   * Called when the user clicks a category item.
   * @param  {Category} category
   * @private
   */


  StickerControlsComponent.prototype._onCategoryClick = function _onCategoryClick(category) {
    this.setState({
      currentPanel: PanelEnum.CATEGORY,
      category: category
    });
  };

  /**
   * Called when the user clicks the back button
   * in a category panel.
   * @private
   */


  StickerControlsComponent.prototype._onBackClick = function _onBackClick() {
    this.setState({
      currentPanel: PanelEnum.ROOT
    });
  };

  /**
   * Called when the user clicks a sticker.
   * @param {Object} sticker
   * @private
   */


  StickerControlsComponent.prototype._onStickerClick = function _onStickerClick(sticker) {
    var _this5 = this;

    var selectedSprite = this.getSharedState('selectedSprite');

    var switchToOptions = function switchToOptions() {
      _this5.setState({
        currentPanel: PanelEnum.OPTIONS
      });
    };

    var editor = this.context.editor;

    if (!selectedSprite) {
      this._createSticker(sticker).then(function (selectedSprite) {
        _this5.setSharedState({
          selectedSprite: selectedSprite
        });
        switchToOptions();
      });
    } else {
      this.props.controls.registerLocalHistoryChange('sticker-image', true);

      this._loadStickerImage(sticker).then(function (image) {
        var dimensions = selectedSprite.getDimensions().clone();
        var longestSide = dimensions.max();
        var boundingRectangle = new Vector2(longestSide, longestSide);
        var imageDimensions = new Vector2(image.width, image.height);

        var stickerOptions = {
          image: image,
          identifier: sticker.identifier,
          dimensions: __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].resizeVectorToFit(imageDimensions, boundingRectangle)
        };

        if (selectedSprite.getTintMode() !== 'none') {
          selectedSprite.setTintMode(sticker.tintMode || 'none');
        }

        selectedSprite.set(stickerOptions);
        selectedSprite.setImage(image);
        editor.render();

        switchToOptions();
      });
    }
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the current panel according to
   * the components state.
   * @return {React.Element} The panel component
   */


  StickerControlsComponent.prototype._renderCurrentPanel = function _renderCurrentPanel() {
    var _this6 = this;

    var controls = this.props.controls;


    switch (this.state.currentPanel) {
      case PanelEnum.ROOT:
        return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__sticker_root_panel_component__["a" /* default */], {
          innerRef: function innerRef(el) {
            _this6._list = el;
          },
          stickerManager: this._stickerManager,
          onCategoryClick: this._onCategoryClick,
          onStickerClick: this._onStickerClick,
          controls: controls,
          ref: 'panel'
        });
      case PanelEnum.CATEGORY:
        return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_3__sticker_category_panel_component__["a" /* default */], {
          innerRef: function innerRef(el) {
            _this6._list = el;
          },
          category: this.state.category,
          stickerManager: this._stickerManager,
          onBackClick: this._onBackClick,
          onStickerClick: this._onStickerClick,
          controls: controls,
          ref: 'panel'
        });
      case PanelEnum.OPTIONS:
        return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_4__sticker_options_panel_component__["a" /* default */], {
          innerRef: function innerRef(el) {
            _this6._list = el;
          },
          stickerManager: this._stickerManager,
          onReplaceClick: this._onReplaceClick,
          onNewStickerClick: this._onNewStickerClick,
          controls: controls,
          ref: 'panel'
        });
    }
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  StickerControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-stickerControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this component's content
   * @return {React.Element}
   * @private
   */


  StickerControlsComponent.prototype._renderContent = function _renderContent() {
    return this._renderCurrentPanel();
  };

  return StickerControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"]);

StickerControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
StickerControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (StickerControlsComponent);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sticker_category_item_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticker_list_component__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var test = ("production") === 'test';

var StickerRootPanelComponent = function (_BaseComponent) {
  _inherits(StickerRootPanelComponent, _BaseComponent);

  function StickerRootPanelComponent() {
    _classCallCheck(this, StickerRootPanelComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this.state = {
      category: 'all'
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks a category
   * @param  {Object} category
   * @param  {Event} e
   * @private
   */


  StickerRootPanelComponent.prototype._onCategoryClick = function _onCategoryClick(category, e) {
    this.props.onCategoryClick && this.props.onCategoryClick(category);
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * This method is called from the StickerControlsComponent due to timing issues.
   * @return {Promise}
   */


  StickerRootPanelComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["requestAnimationFrame"])(function () {
          _this2._scrollbar.update();
        });
      } else {
        _this2._scrollbar.update();
      }
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders an item for each category
   * @return {React.Element[]} An array of items.
   * @private
   */


  StickerRootPanelComponent.prototype._renderListItems = function _renderListItems() {
    var _this3 = this;

    var stickerManager = this.props.stickerManager;

    var categories = stickerManager.getCategories();

    return categories.map(function (category) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__sticker_category_item_component__["a" /* default */], {
        key: category.identifier,
        category: category,
        onClick: _this3._onCategoryClick.bind(_this3, category)
      });
    });
  };

  /**
   * Renders this component.
   * @return {React.Element}
   */


  StickerRootPanelComponent.prototype.render = function render() {
    var _this4 = this;

    var _props = this.props,
        stickerManager = _props.stickerManager,
        _innerRef = _props.innerRef;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Wrapper,
      {
        innerRef: function innerRef(el) {
          _innerRef && _innerRef(el);_this4._wrapper = el;
        },
        className: test ? 'js-rootPanel' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
        {
          direction: 'vertical',
          innerRef: function innerRef(el) {
            _this4._scrollbar = el;
          } },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          CategoryList,
          null,
          this._renderListItems()
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__sticker_list_component__["a" /* default */], {
          stickers: stickerManager.getStickersForCategory('all'),
          onStickerClick: this.props.onStickerClick })
      )
    );
  };

  return StickerRootPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

StickerRootPanelComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (StickerRootPanelComponent);


var Wrapper = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('rfecls', 'Wrapper');

var CategoryList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('5jg0ou', 'CategoryList');

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var ControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItem,
    ControlItemTitle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle;

var test = ("production") === 'test';

var StickerCategoryItemComponent = function (_BaseComponent) {
  _inherits(StickerCategoryItemComponent, _BaseComponent);

  function StickerCategoryItemComponent() {
    _classCallCheck(this, StickerCategoryItemComponent);

    return _possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
  }

  /**
   * Renders this component.
   * @return {React.Element}
   */
  StickerCategoryItemComponent.prototype.render = function render() {
    var category = this.props.category;

    var backgroundImagePath = this._getAssetPath(category.metaData.backgroundImage);

    var itemStyle = {
      backgroundImage: 'url(\'' + backgroundImagePath + '\')'
    };
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      StickerCategoryItem,
      {
        onClick: this.props.onClick,
        style: itemStyle,
        className: test ? 'js-category' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Title,
        null,
        this._t('editor.controls.sticker.stickerCategories.' + category.identifier) || category.defaultName
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Gradient, null)
    );
  };

  return StickerCategoryItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

StickerCategoryItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (StickerCategoryItemComponent);


var StickerCategoryItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItem).li('1dc04zg', 'StickerCategoryItem');

var Gradient = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1fxaw8w', 'Gradient');

var Title = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).div('120drhm', 'Title');

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sticker_list_component__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var ControlItemTextStyles = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTextStyles;

var test = ("production") === 'test';

var StickerCategoryPanelComponent = function (_BaseComponent) {
  _inherits(StickerCategoryPanelComponent, _BaseComponent);

  function StickerCategoryPanelComponent() {
    _classCallCheck(this, StickerCategoryPanelComponent);

    return _possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * This method is called from the StickerControlsComponent due to timing issues.
   * @return {Promise}
   */
  StickerCategoryPanelComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["requestAnimationFrame"])(function () {
          _this2._scrollbar.update();
        });
      } else {
        _this2._scrollbar.update();
      }
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component.
   * @return {React.Element}
   */


  StickerCategoryPanelComponent.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        stickerManager = _props.stickerManager,
        category = _props.category,
        onBackClick = _props.onBackClick,
        onStickerClick = _props.onStickerClick,
        _innerRef = _props.innerRef;


    var backgroundImagePath = this._getAssetPath(category.metaData.backgroundImage);
    var headerStyle = {
      backgroundImage: 'url(\'' + backgroundImagePath + '\')',
      backgroundSize: 'cover'
    };
    var backButtonStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/shared/back.png', true) + '\')'
    };

    var stickers = stickerManager.getStickersForCategory(category.identifier);
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      StickerCategoryPanel,
      {
        innerRef: function innerRef(el) {
          return _innerRef && _innerRef(el);
        },
        className: test ? 'js-categoryPanel' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Header,
        { style: headerStyle },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          HeaderContent,
          null,
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            Title,
            null,
            this._t('editor.controls.sticker.stickerCategories.' + category.identifier) || category.defaultName
          ),
          category.metaData.author && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            Subtitle,
            null,
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
              'span',
              null,
              'by '
            ),
            category.metaData.author
          ),
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(BackButton, {
            style: backButtonStyle,
            onClick: onBackClick.bind(this),
            className: test ? 'js-backButton' : undefined })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Content,
        { innerRef: function innerRef(el) {
            _this3._wrapper = el;
          } },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
          {
            direction: 'vertical',
            innerRef: function innerRef(el) {
              _this3._scrollbar = el;
            } },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__sticker_list_component__["a" /* default */], {
            stickers: stickers,
            onStickerClick: onStickerClick })
        )
      )
    );
  };

  return StickerCategoryPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

// -------------------------------------------------------------------------- STYLES

StickerCategoryPanelComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (StickerCategoryPanelComponent);
var StickerCategoryPanel = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('iauaz2', 'StickerCategoryPanel');

var Header = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('2j8ygm', 'Header');

var HeaderContent = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('3wd3qf', 'HeaderContent');

var Content = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('zb78lb', 'Content');

var Title = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTextStyles).div('kswtk0', 'Title');

var Subtitle = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTextStyles).div('1qn5s6u', 'Subtitle');

var BackButton = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].button('1t2nim8', 'BackButton');

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var PlainControlItemBackground = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItemBackground;

var test = ("production") === 'test';

var StickerOptionsPanelComponent = function (_SharedStateComponent) {
  _inherits(StickerOptionsPanelComponent, _SharedStateComponent);

  function StickerOptionsPanelComponent() {
    _classCallCheck(this, StickerOptionsPanelComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this._bindAll('_onTintToggle', '_onTintColorChange', '_onOpacityChange');
    return _this;
  }

  /**
   * Returns the sticker object
   * @return {Object}
   * @private
   */


  StickerOptionsPanelComponent.prototype._getStickerObject = function _getStickerObject() {
    var stickerManager = this.props.stickerManager;

    var selectedSprite = this.getSharedState('selectedSprite');
    var identifier = selectedSprite.getIdentifier();
    return stickerManager.getStickerByIdentifier(identifier);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the opacity has been changed
   * @param  {Number} opacity
   * @private
   */


  StickerOptionsPanelComponent.prototype._onOpacityChange = function _onOpacityChange(opacity) {
    this.props.controls.registerLocalHistoryChange('sticker-opacity', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setAlpha(opacity / 100);

    var editor = this.context.editor;

    editor.render();

    this.forceUpdate();
  };

  /**
   * Invoked when the tint has been turned on or off
   * @param  {Boolean} enabled
   * @private
   */


  StickerOptionsPanelComponent.prototype._onTintToggle = function _onTintToggle(enabled) {
    this.props.controls.registerLocalHistoryChange('sticker-tint', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    var sticker = this._getStickerObject();
    selectedSprite.setTintMode(enabled ? sticker.tintMode : 'none');

    var editor = this.context.editor;

    editor.render();

    this.forceUpdate();
  };

  /**
   * Invoked when the tint color has been changed
   * @param  {PhotoEditorSDK.Color} color
   * @private
   */


  StickerOptionsPanelComponent.prototype._onTintColorChange = function _onTintColorChange(color) {
    this.props.controls.registerLocalHistoryChange('sticker-tint', true);

    var selectedSprite = this.getSharedState('selectedSprite');
    selectedSprite.setTintColor(color.clone());

    var editor = this.context.editor;

    editor.render();

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * This method is called from the StickerControlsComponent due to timing issues.
   * @return {Promise}
   */


  StickerOptionsPanelComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["requestAnimationFrame"])(function () {
          _this2._scrollbar.update();
        });
      } else {
        _this2._scrollbar.update();
      }
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component.
   * @return {React.Element}
   */


  StickerOptionsPanelComponent.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        _innerRef = _props.innerRef,
        onNewStickerClick = _props.onNewStickerClick,
        onReplaceClick = _props.onReplaceClick;

    var selectedSprite = this.getSharedState('selectedSprite');
    if (!selectedSprite) return null;

    var sticker = this._getStickerObject();

    var thumbnailStyle = {
      background: 'url(\'' + selectedSprite.getImage().src + '\') center center / contain no-repeat'
    };

    var tintable = !!sticker.tintMode && sticker.tintMode !== 'none';

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Wrapper,
      {
        innerRef: function innerRef(el) {
          _innerRef && _innerRef(el);_this3._wrapper = el;
        },
        className: test ? 'js-optionsPanel' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
        {
          direction: 'vertical',
          innerRef: function innerRef(el) {
            _this3._scrollbar = el;
          } },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            TopSection,
            null,
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ButtonComponent"], {
              title: this._t('editor.controls.sticker.new'),
              className: test ? 'js-newStickerButton' : undefined,
              onClick: onNewStickerClick }),
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
              Details,
              null,
              __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                Thumbnail,
                null,
                __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ThumbnailImage, {
                  onClick: onReplaceClick,
                  style: thumbnailStyle })
              ),
              __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                DetailsContainer,
                null,
                __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                  Title,
                  null,
                  this._t('editor.controls.sticker.stickers.' + sticker.identifier) || sticker.defaultName
                ),
                __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                  ReplaceButton,
                  {
                    onClick: onReplaceClick,
                    className: test ? 'js-replaceButton' : undefined },
                  this._t('editor.controls.sticker.replace')
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderControlComponent"], {
              minValue: 0,
              value: Math.round(selectedSprite.getAlpha() * 100),
              maxValue: 100,
              label: this._t('editor.controls.sticker.opacity'),
              onSliderValueChange: this._onOpacityChange,
              onValueChange: this._onOpacityChange,
              middleDot: false,
              className: test ? 'js-opacityControl' : undefined })
          ),
          tintable && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["CollapseSectionComponent"],
            {
              toggleable: true,
              title: this._t('editor.controls.sticker.fill'),
              expanded: selectedSprite.getTintMode() !== 'none',
              className: test ? 'js-fillControl' : undefined,
              onToggle: this._onTintToggle },
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ColorSelection, {
              value: selectedSprite.getTintColor(),
              onColorPickerToggle: this.fixStyles,
              onChange: this._onTintColorChange })
          )
        )
      )
    );
  };

  return StickerOptionsPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

// -------------------------------------------------------------------------- STYLES

StickerOptionsPanelComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (StickerOptionsPanelComponent);
var Wrapper = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('rfecls', 'Wrapper');

var TopSection = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1vnvjau', 'TopSection');

var Details = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('aqfteq', 'Details');

var Thumbnail = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItemBackground).div('6u8g0p', 'Thumbnail');

var ThumbnailImage = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('7r0ke8', 'ThumbnailImage');

var DetailsContainer = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1trlo6v', 'DetailsContainer');

var Title = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('w9mc0y', 'Title');

var ReplaceButton = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1rhky7p', 'ReplaceButton');

var ColorSelection = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ColorSelectionComponent"])('1ouwzwk', 'ColorSelection');

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sprites_sprites_canvas_controls_component__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var SpriteOperation = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation;

var StickerSprite = void 0;
if (SpriteOperation) {
  StickerSprite = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].SpriteOperation.StickerSprite;
}

var StickerCanvasControlsComponent = function (_SpritesCanvasControl) {
  _inherits(StickerCanvasControlsComponent, _SpritesCanvasControl);

  function StickerCanvasControlsComponent() {
    _classCallCheck(this, StickerCanvasControlsComponent);

    return _possibleConstructorReturn(this, _SpritesCanvasControl.apply(this, arguments));
  }

  /**
   * Renders the sprite items
   * @param {Sprite[]} sprites
   * @return {React.Component[]}
   * @private
   */
  StickerCanvasControlsComponent.prototype._renderSpriteItems = function _renderSpriteItems(sprites) {
    // Only render sticker items
    return _SpritesCanvasControl.prototype._renderSpriteItems.call(this, sprites.filter(function (s) {
      return s instanceof StickerSprite;
    }));
  };

  /**
   * Selects the next sprite
   * @private
   */


  StickerCanvasControlsComponent.prototype._selectNextSprite = function _selectNextSprite() {
    var operation = this.getSharedState('operation');
    var sprites = operation.getSprites().slice(0).reverse();

    var sprite = void 0,
        nextSprite = void 0;
    for (var i = 0; i < sprites.length; i++) {
      sprite = sprites[i];
      if (sprite instanceof StickerSprite) {
        nextSprite = sprite;
        break;
      }
    }

    if (!nextSprite) {
      this.props.controls.skipHistory = true;
      this.context.screen.switchToControls('default');
    }
    this.setSharedState({ selectedSprite: nextSprite });
  };

  /**
   * Creates a new sprite with the given options
   * @param  {Object} options
   * @return {PhotoEditorSDK.Operations.SpriteOperation.Sprite}
   * @private
   */


  StickerCanvasControlsComponent.prototype._createSprite = function _createSprite(options) {
    var operation = this.getSharedState('operation');
    return operation.createSticker(options);
  };

  return StickerCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_sprites_sprites_canvas_controls_component__["a" /* default */]);

StickerCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1__shared_sprites_sprites_canvas_controls_component__["a" /* default */].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (StickerCanvasControlsComponent);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_controls_component__ = __webpack_require__(45);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var Filters = void 0;
if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].FilterOperation) {
  Filters = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].FilterOperation.Filters;
}

var FilterControls = function (_BaseControls) {
  _inherits(FilterControls, _BaseControls);

  function FilterControls() {
    _classCallCheck(this, FilterControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Gets called when an operation has been removed. If it is the same operation that
   * this control belongs to, it switches back to the overview, leaving this control
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  FilterControls.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    var currentOperation = this.sharedState.get('operation');
    if (operation === currentOperation) {
      this._onEnter();
    }
  };

  /**
   * Is called when a control is entered
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Object[]} [categories = []]
   * @property {Boolean} [replaceCategories = false]
   * @property {String[]} [availableFilters = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */


  /**
   * A unique identifier for these controls
   * @type {String}
   */


  FilterControls.prototype._onEnter = function _onEnter() {
    var editor = this.context.editor;

    var operationExistedBeforeEntering = editor.operations.exists('filter');
    var operation = editor.operations.getOrCreate('filter');
    var initialOptions = operation.serializeOptions();
    this.sharedState.set({
      operation: operation, initialOptions: initialOptions, operationExistedBeforeEntering: operationExistedBeforeEntering
    });
  };

  /**
   * Is called when a control is left
   */


  FilterControls.prototype._onLeave = function _onLeave() {
    var editor = this.context.editor;
    var _sharedState$state = this.sharedState.state,
        operation = _sharedState$state.operation,
        initialOptions = _sharedState$state.initialOptions,
        operationExistedBeforeEntering = _sharedState$state.operationExistedBeforeEntering;

    var optionsChanged = initialOptions.intensity !== operation.getIntensity() || initialOptions.identifier !== operation.getIdentifier();

    // No filter selected? We don't need the operation then.
    if (operation.getFilter().constructor === Filters.IdentityFilter) {
      editor.operations.remove(operation, false);
    }

    // Nothing changed? Then we're done here.
    if (!optionsChanged) {
      return;
    }

    var InitialFilterConstructor = initialOptions.filter.constructor;
    var lutImage = void 0;
    if (InitialFilterConstructor.identifier === '3d-lut') {
      lutImage = initialOptions.filter.getImage();
    }
    this.addHistoryItem({
      type: 'global',
      operation: operation.constructor.identifier,
      options: {
        identifier: initialOptions.identifier,
        intensity: initialOptions.intensity
      },
      undo: function undo() {
        var operation = editor.operations.getOrCreate('filter');
        if (InitialFilterConstructor.identifier === '3d-lut') {
          operation.setFilter(new InitialFilterConstructor({
            image: lutImage,
            resolution: initialOptions.filter.getResolution(),
            horizontalTileCount: initialOptions.filter.getHorizontalTileCount(),
            verticalTileCount: initialOptions.filter.getVerticalTileCount()
          }));
        } else {
          operation.setFilter(new InitialFilterConstructor());
        }
      },
      existent: operationExistedBeforeEntering
    });
  };

  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */


  FilterControls.isEnabled = function isEnabled(editor) {
    return editor.isToolEnabled('filter') && editor.isToolAllowed('filter');
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {String[]}
   */


  FilterControls.getPreloadAssets = function getPreloadAssets(editor) {
    var assets = [];

    var options = editor.getOptions();
    var filterOptions = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].defaults(options.editor.controlsOptions.filter, this.defaultOptions);

    // Add ratios
    var filterManager = new __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["FilterManager"](editor.getUI(), filterOptions);
    var allFilters = filterManager.getFiltersForCategory('all');

    allFilters.forEach(function (filter) {
      if (typeof filter.lutImage !== 'undefined') {
        assets.push([filter.lutImage, false]);
      }
    });

    return assets;
  };

  return FilterControls;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"]);

FilterControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
FilterControls.identifier = 'filter';
FilterControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_2__filter_controls_component__["a" /* default */];
FilterControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"].canvasControlsComponent;
FilterControls.iconPath = 'editor/controls/filter/icon.png';
FilterControls.activeIconPath = 'editor/controls/filter/icon-active.png';
FilterControls.requiredOperations = ['filter', 'transform'];
FilterControls.defaultOptions = {
  categories: [],
  replaceCategories: false,
  availableFilters: null };
/* harmony default export */ __webpack_exports__["default"] = (FilterControls);


__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default.a.Controls.FilterControls = FilterControls;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_async_promise_queue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_async_animation_frame__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_list_item_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_preview_renderer__ = __webpack_require__(47);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */








var IdentityFilter = void 0;
if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].FilterOperation) {
  IdentityFilter = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Operations"].FilterOperation.Filters.IdentityFilter;
}
var test = ("production") === 'test';

var FilterControlsComponent = function (_ControlsComponent) {
  _inherits(FilterControlsComponent, _ControlsComponent);

  function FilterControlsComponent() {
    _classCallCheck(this, FilterControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onIntensityChanged', '_onListScroll', '_onOperationUpdated');

    var _this$context = _this.context,
        ui = _this$context.ui,
        editor = _this$context.editor,
        theme = _this$context.theme;


    _this._loadedFilters = [];
    _this._filterPreviewRenderer = new __WEBPACK_IMPORTED_MODULE_5__filter_preview_renderer__["a" /* default */](editor);
    _this._renderQueue = new __WEBPACK_IMPORTED_MODULE_2_shared_async_promise_queue__["a" /* default */](1, Infinity, theme.listItemSlideInDelay);
    _this._filterManager = new __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["FilterManager"](ui, _this.props.options);
    _this._filterPreviewQueue = [];

    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated);

    var operation = _this.getSharedState('operation');
    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, {
      intensity: operation.getIntensity() * 100,
      category: 'all',
      filterPreviews: []
    });
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * @return {Promise}
   */


  FilterControlsComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return _ControlsComponent.prototype.fixStyles.call(this).then(function () {
      _this2._onListScroll();
    });
  };

  /**
   * Gets called when this component has been mounted
   */


  FilterControlsComponent.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    _ControlsComponent.prototype.componentDidMount.call(this);
    this._filterPreviewRenderer.init();

    this._renderPreviewsAnimationFrame = Object(__WEBPACK_IMPORTED_MODULE_3_shared_async_animation_frame__["b" /* requestAnimationFrame */])(function () {
      _this3._renderPreviews();
    });
  };

  /**
   * Gets called before this component is unmounted
   */


  FilterControlsComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _ControlsComponent.prototype.componentWillUnmount.call(this);
    if (this._renderPreviewsAnimationFrame) {
      Object(__WEBPACK_IMPORTED_MODULE_3_shared_async_animation_frame__["a" /* cancelAnimationFrame */])(this._renderPreviewsAnimationFrame);
    }

    this._renderQueue.dispose();
    this._filterPreviewRenderer.dispose();
    this._disposed = true;
    window.clearInterval(this._interval);
  };

  /**
   * Invoked before rendering when new props or state are being received
   * @param {Object} nextProps
   * @param {Object} nextState
   * @return {Boolean}
   */


  FilterControlsComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return this.state.intensity !== nextState.intensity;
  };

  // -------------------------------------------------------------------------- PREVIEW RENDERING

  /**
   * Renders all filter previews
   * @private
   */


  FilterControlsComponent.prototype._renderPreviews = function _renderPreviews() {
    var _this4 = this;

    var editor = this.context.editor;

    var renderer = editor.getSDK().getRenderer();

    var filters = this._getVisibleFilters().filter(function (filter) {
      return _this4._loadedFilters.indexOf(filter) === -1;
    });

    if (renderer.isOfType(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default.a.RendererType.WEBGL)) {
      filters.forEach(function (filter) {
        _this4._loadedFilters.push(filter);
        _this4._renderQueue.add(function () {
          return _this4._filterManager.instantiateFilterWithIdentifier(filter.identifier).then(function (filterInstance) {
            if (_this4._disposed) return;

            return _this4._filterPreviewRenderer.render(filterInstance).then(function (previewUrl) {
              _this4.state.filterPreviews[filter.identifier] = previewUrl;
              _this4.forceUpdate();
            });
          });
        });
      });
    } else {
      this._loadedFilters = this._loadedFilters.concat(filters);
      filters.forEach(function (filter) {
        _this4._renderQueue.add(function () {
          return new Promise(function (resolve) {
            _this4.state.filterPreviews[filter.identifier] = _this4._getAssetPath('editor/controls/filter/filters/' + filter.identifier + '.png', true);
            _this4.forceUpdate();
            resolve();
          });
        });
      });
    }
  };

  /**
   * Returns the filters that are currently being rendered on screen
   * @return {PhotoEditorSDK.Filter[]}
   * @private
   */


  FilterControlsComponent.prototype._getVisibleFilters = function _getVisibleFilters() {
    var filters = [IdentityFilter].concat(this._filterManager.getFiltersForCategory(this.state.category));
    var visibleFilters = [];
    var containerRect = this._container.getBoundingClientRect();
    for (var i = 0, l = filters.length; i < l; i++) {
      var filter = filters[i];
      var element = this.refs['filter-' + filter.identifier].container;
      var elementRect = element.getBoundingClientRect();
      var visible = !(elementRect.top > containerRect.bottom + containerRect.height || elementRect.bottom < containerRect.top);
      if (visible) {
        visibleFilters.push(filter);
      } else if (visibleFilters.length) {
        break;
      }
    }
    return visibleFilters;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  FilterControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    // The undo button might change this operation's selected filter or intensity.
    // Update the component to reflect the change
    if (operation === this.getSharedState('operation')) {
      this.forceUpdate();
    }
  };

  /**
   * Gets called when the list is scrolling
   * @param  {Number} position
   * @private
   */


  FilterControlsComponent.prototype._onListScroll = function _onListScroll(position) {
    this._renderPreviews();
  };

  /**
   * Gets called when a filter item is clicked
   * @param {Object} identifier
   * @private
   */


  FilterControlsComponent.prototype._onItemClick = function _onItemClick(identifier) {
    var _this5 = this;

    var operation = this.getSharedState('operation');

    if (operation.getIdentifier() === identifier) {
      return;
    }

    this._filterManager.instantiateFilterWithIdentifier(identifier).then(function (filter) {
      operation.set({
        filter: filter,
        identifier: identifier,
        intensity: 1
      });

      var editor = _this5.context.editor;

      editor.render();
      _this5.forceUpdate();
      _this5.setState({
        intensity: 100
      });
    });
  };

  /**
   * Gets called when the filter intensity has been changed
   * @param  {Number} value
   * @private
   */


  FilterControlsComponent.prototype._onIntensityChanged = function _onIntensityChanged(value) {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');
    operation.setIntensity(value / 100);
    editor.render();

    this.setState({ intensity: value });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items
   * @return {React.Element[]}
   * @private
   */


  FilterControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this6 = this;

    var filters = this._filterManager.getFiltersForCategory(this.state.category);

    var operation = this.getSharedState('operation');
    var currentFilterIdentifier = operation.getIdentifier();

    var filterPreviews = this.state.filterPreviews;

    return [IdentityFilter].concat(filters).map(function (filter, index) {
      var identifier = filter.identifier;

      var loading = !filterPreviews[identifier] && index === _this6._loadedFilters.length;
      var selected = identifier === currentFilterIdentifier;

      return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        ListItemContainer,
        {
          key: identifier,
          'data-selected': selected,
          'data-identifier': identifier,
          className: test ? 'js-filterListItem' : undefined },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_4__filter_list_item_component__["a" /* default */], {
          ref: 'filter-' + identifier,
          filter: filter,
          identifier: identifier,
          lastChild: filter === filters[filters.length - 1],
          onClick: _this6._onItemClick.bind(_this6, identifier),
          selected: selected,
          intensity: _this6.state.intensity,
          displaySlider: filter !== IdentityFilter,
          onIntensityChanged: _this6._onIntensityChanged,
          visible: !!filterPreviews[identifier],
          previewUrl: filterPreviews[identifier] }),
        loading && __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(LoadingIndicator, null)
      );
    });
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  FilterControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-filterControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this control's content
   * @return {React.Element}
   */


  FilterControlsComponent.prototype._renderContent = function _renderContent() {
    var _this7 = this;

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
      {
        direction: 'vertical',
        onScroll: this._onListScroll,
        innerRef: function innerRef(el) {
          _this7._scrollbar = el;
        } },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        List,
        null,
        this._renderListItems()
      )
    );
  };

  return FilterControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"]);

FilterControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
FilterControlsComponent.propTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].propTypes;
FilterControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (FilterControlsComponent);


var List = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].ul('9uviv9', 'List');

var ListItemContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].li('13hv8io', 'ListItemContainer');

var LoadingIndicator = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["LoadingIndicatorComponent"])('11ztmqh', 'LoadingIndicator');

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var ControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItem,
    ControlItemActiveOverlay = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemActiveOverlay,
    ControlItemTitle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle;

var FilterListItemComponent = function (_BaseComponent) {
  _inherits(FilterListItemComponent, _BaseComponent);

  function FilterListItemComponent() {
    _classCallCheck(this, FilterListItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this.state = {
      hovered: false
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked before rendering when new props or state are being received
   * @param {Object} nextProps
   * @param {Object} nextState
   * @return {Boolean}
   */


  FilterListItemComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.previewUrl !== nextProps.previewUrl || this.props.selected !== nextProps.selected || this.props.visible !== nextProps.visible || this.state.hovered !== nextState.hovered || this.props.filter !== nextProps.filter) {
      return true;
    }

    if (this.props.intensity !== nextProps.intensity) {
      if (nextProps.selected) {
        return true;
      }
    }

    return false;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  FilterListItemComponent.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        lastChild = _props.lastChild,
        onClick = _props.onClick,
        onIntensityChanged = _props.onIntensityChanged,
        selected = _props.selected,
        intensity = _props.intensity,
        displaySlider = _props.displaySlider,
        visible = _props.visible,
        filter = _props.filter;

    var image = null;
    if (this.props.previewUrl) {
      image = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Preview, { src: this.props.previewUrl });
    }

    var transitionDuration = this.context.theme.transitionDuration;


    var itemProps = { lastChild: lastChild, onClick: onClick, visible: visible };
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Item,
      _extends({}, itemProps, {
        animated: true,
        innerRef: function innerRef(el) {
          _this2._container = el;
        },
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ hovered: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ hovered: false });
        } }),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        ItemContainer,
        {
          selected: selected },
        image,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
          {
            active: selected && displaySlider,
            enterProp: 'rendered',
            enterDuration: transitionDuration * 1000,
            appearProp: 'visible',
            appearDuration: transitionDuration * 1000,
            leaveDuration: transitionDuration * 1000 },
          selected && displaySlider && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            Slider,
            null,
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderComponent"], {
              minValue: 0,
              maxValue: 100,
              valueUnit: '',
              middleDot: false,
              value: intensity,
              onChange: onIntensityChanged })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          ItemTitle,
          { hovered: this.state.hovered },
          this._t('editor.controls.filter.filters.' + filter.identifier) || filter.defaultName
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
          {
            active: selected,
            enterProp: 'rendered',
            enterDuration: transitionDuration * 1000,
            appearProp: 'visible',
            appearDuration: transitionDuration * 1000,
            leaveDuration: transitionDuration * 1000 },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Overlay, { selected: selected })
        )
      )
    );
  };

  /**
   * Returns this component's container
   * @return {React.Element}
   */


  _createClass(FilterListItemComponent, [{
    key: 'container',
    get: function get() {
      return this._container;
    }
  }]);

  return FilterListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

FilterListItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (FilterListItemComponent);


var Item = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItem).div('120drhm', {
  lastChild: '229bd5'
}, 'Item');

var Slider = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('19g9ike', {
  visible: 'zgbg08',
  rendered: '2jlos'
}, 'Slider');

var ItemContainer = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('rf12k1', 'ItemContainer');

var ItemTitle = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).span('hpn4lp', 'ItemTitle');

var Preview = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].img('3x5zfy', 'Preview');

var Overlay = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemActiveOverlay).div('120drhm', 'Overlay');

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var PREVIEW_DIMENSIONS = new Vector2(180, 80);

var FilterPreviewRenderer = function () {
  function FilterPreviewRenderer(editor) {
    _classCallCheck(this, FilterPreviewRenderer);

    this._editor = editor;
    this._disposed = false;
  }

  /**
   * Initializes the filter preview renderer
   */


  FilterPreviewRenderer.prototype.init = function init() {
    this._initSDK();
  };

  /**
   * Renders and returns a preview for the given filter
   * @param  {PhotoEditorSDK.Filter} filter
   * @return {Promise}
   * @private
   */


  FilterPreviewRenderer.prototype.render = function render(filter) {
    var _this = this;

    this._filterOperation.setFilter(filter);
    return this._sdk.render().then(function () {
      var canvas = _this._sdk.getCanvas();
      return canvas.toDataURL('image/png');
    });
  };

  /**
   * Initializes the SDK
   * @private
   */


  FilterPreviewRenderer.prototype._initSDK = function _initSDK() {
    var options = this._editor.getOptions();
    var logLevel = options.logLevel,
        debug = options.debug,
        license = options.license;
    var _options$editor = options.editor,
        smoothDownscaling = _options$editor.smoothDownscaling,
        smoothUpscaling = _options$editor.smoothUpscaling,
        preferredRenderer = _options$editor.preferredRenderer;

    var rendererOptions = {
      logLevel: logLevel,
      debug: debug,
      pixelRatio: 1,
      smoothDownscaling: smoothDownscaling,
      smoothUpscaling: smoothUpscaling,
      transparent: true,
      license: license,
      image: this._editor.getSDK().getImage(),
      renderMode: 'export',
      versionCheck: false,
      displayWelcomeMessage: false
    };
    this._sdk = new __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default.a(preferredRenderer, rendererOptions);
    this._sdk.resizeTo(PREVIEW_DIMENSIONS);
    this._filterOperation = this._sdk.createOperation('filter');

    this._transformOperation = this._sdk.createOperation('transform');

    var _calculateTransformOp = this._calculateTransformOptions(),
        start = _calculateTransformOp.start,
        end = _calculateTransformOp.end,
        textureScale = _calculateTransformOp.textureScale;

    this._transformOperation.set({ start: start, end: end, textureScale: textureScale });

    this._sdk.render();
  };

  /**
   * Calculates the options for our transform operation
   * @return {Object}
   * @private
   */


  FilterPreviewRenderer.prototype._calculateTransformOptions = function _calculateTransformOptions() {
    var inputDimensions = this._transformOperation.getInputDimensions();
    var ratio = inputDimensions.x / inputDimensions.y;

    var start = new Vector2();
    var end = new Vector2();

    var outputRatio = PREVIEW_DIMENSIONS.x / PREVIEW_DIMENSIONS.y;
    if (ratio <= outputRatio) {
      var height = 1 / inputDimensions.y * (inputDimensions.x / outputRatio);
      start.set(0, (1.0 - height) / 2);
      end.set(1.0, 1 - start.y);
    } else {
      var width = 1 / inputDimensions.x * (outputRatio * inputDimensions.y);
      start.set((1 - width) / 2, 0);
      end.set(1 - start.x, 1.0);
    }

    var size = end.clone().subtract(start);
    var transformedDimensions = inputDimensions.clone().multiply(size);
    var textureScale = PREVIEW_DIMENSIONS.x / transformedDimensions.x;
    return { dimensions: PREVIEW_DIMENSIONS, start: start, end: end, textureScale: textureScale };
  };

  /**
   * Disposes this renderer
   */


  FilterPreviewRenderer.prototype.dispose = function dispose() {
    if (this._sdk) {
      this._sdk.dispose();
    }
  };

  /**
   * Checks if the renderer is disposed
   * @return {Boolean}
   */


  FilterPreviewRenderer.prototype.isDisposed = function isDisposed() {
    return this._disposed;
  };

  return FilterPreviewRenderer;
}();

/* harmony default export */ __webpack_exports__["a"] = (FilterPreviewRenderer);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__focus_controls_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__focus_canvas_controls_component__ = __webpack_require__(51);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var FocusControls = function (_BaseControls) {
  _inherits(FocusControls, _BaseControls);

  function FocusControls() {
    _classCallCheck(this, FocusControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Returns a focus operation, if existent
   * @return {PhotoEditorSDK.Operation}
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  FocusControls.prototype.getOperation = function getOperation() {
    var editor = this.context.editor;

    return this.constructor.FOCUS_OPERATIONS.map(function (identifier) {
      return editor.operations.get(identifier);
    }).reduce(function (prev, cur) {
      return prev || cur;
    });
  };

  /**
   * Checks if the given operation is a valid focus operation
   * @param  {PhotoEditorSDK.Operation}  operation
   * @return {Boolean}
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {String[]} [availableModes = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */


  /**
   * A unique identifier for these controls
   * @type {String}
   */


  FocusControls.prototype.isFocusOperation = function isFocusOperation(operation) {
    var identifier = (typeof operation === 'undefined' ? 'undefined' : _typeof(operation)) === 'object' ? operation.constructor.identifier : operation;
    return this.constructor.FOCUS_OPERATIONS.indexOf(identifier) !== -1;
  };

  /**
   * Is called when a control is entered
   */


  FocusControls.prototype._onEnter = function _onEnter() {
    var editor = this.context.editor;

    var operation = this.getOperation();

    var initialOptions = {};
    if (operation) {
      initialOptions = operation.serializeOptions();
      delete initialOptions.enabled;
    }

    var inputDimensions = operation && operation.getInputDimensions(false);
    this.sharedState.set({
      selectedFocus: 'none',
      initialOperation: operation,
      operationExistedBeforeEntering: !!operation,
      initialOptions: initialOptions,
      operation: operation,
      inputDimensions: inputDimensions
    });

    editor.zoom.auto(true, false, function () {
      // Disable zoom and drag while we're transforming
      editor.features.disable('zoom', 'drag');
    }, false);
  };

  /**
   * Is called when a control is left
   */


  FocusControls.prototype._onLeave = function _onLeave() {
    var editor = this.context.editor;

    editor.features.enable('zoom', 'drag');

    var initialOptions = this.sharedState.get('initialOptions');
    var initialOperation = this.sharedState.get('initialOperation');
    var operation = this.sharedState.get('operation');

    if (!operation && initialOperation || operation && initialOperation && operation.constructor === initialOperation.constructor) {
      this.addHistoryItem({
        type: 'global',
        operation: initialOperation.constructor.identifier,
        options: initialOperation,
        existent: true
      });
    }

    if (operation && !initialOperation) {
      this.addHistoryItem({
        type: 'global',
        operation: operation.constructor.identifier,
        existent: false
      });
    }

    if (operation && initialOperation && operation.constructor !== initialOperation.constructor) {
      this.addHistoryItems([{
        type: 'global',
        operation: initialOperation.constructor.identifier,
        options: initialOptions,
        existent: true
      }, {
        type: 'global',
        operation: operation.constructor.identifier,
        options: {},
        existent: false
      }]);
    }
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {String[]}
   */


  FocusControls.getPreloadAssets = function getPreloadAssets(editor) {
    var assets = [];
    this.ITEMS.forEach(function (item) {
      assets.push(item.backgroundImagePath);
      assets.push(item.activeBackgroundImagePath);
    });
    return assets;
  };

  /**
   * Gets called when an operation has been removed. If it is the same operation that
   * this control belongs to, it switches back to the overview, leaving this control
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  FocusControls.prototype._onOperationRemoved = function _onOperationRemoved(operation) {}
  // void


  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */
  ;

  FocusControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('focus') && editor.isToolEnabled('focus');
  };

  return FocusControls;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"]);

FocusControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
FocusControls.ITEMS = [{
  identifier: 'none',
  operationIdentifier: null,
  backgroundImagePath: 'editor/controls/focus/none.png',
  activeBackgroundImagePath: 'editor/controls/focus/none-active.png'
}, {
  identifier: 'radial',
  operationIdentifier: 'radial-focus',
  backgroundImagePath: 'editor/controls/focus/radial.png',
  activeBackgroundImagePath: 'editor/controls/focus/radial-active.png'
}, {
  identifier: 'mirrored',
  operationIdentifier: 'mirrored-focus',
  backgroundImagePath: 'editor/controls/focus/mirrored.png',
  activeBackgroundImagePath: 'editor/controls/focus/mirrored-active.png'
}, {
  identifier: 'linear',
  operationIdentifier: 'linear-focus',
  backgroundImagePath: 'editor/controls/focus/linear.png',
  activeBackgroundImagePath: 'editor/controls/focus/linear-active.png'
}, {
  identifier: 'gaussian',
  operationIdentifier: 'blur',
  backgroundImagePath: 'editor/controls/focus/gaussian.png',
  activeBackgroundImagePath: 'editor/controls/focus/gaussian-active.png'
}];
FocusControls.FOCUS_OPERATIONS = FocusControls.ITEMS.map(function (i) {
  return i.operationIdentifier;
}).filter(function (i) {
  return i;
});
FocusControls.identifier = 'focus';
FocusControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_1__focus_controls_component__["a" /* default */];
FocusControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_2__focus_canvas_controls_component__["a" /* default */];
FocusControls.iconPath = 'editor/controls/focus/icon.png';
FocusControls.activeIconPath = 'editor/controls/focus/icon-active.png';
FocusControls.requiredOperations = FocusControls.ITEMS.map(function (i) {
  return i.operationIdentifier;
}).filter(function (i) {
  return i;
});
FocusControls.defaultOptions = {
  availableModes: null };
/* harmony default export */ __webpack_exports__["default"] = (FocusControls);


__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default.a.Controls.FocusControls = FocusControls;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__focus_list_item_component__ = __webpack_require__(50);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var test = ("production") === 'test';

var FocusControlsComponent = function (_ControlsComponent) {
  _inherits(FocusControlsComponent, _ControlsComponent);

  function FocusControlsComponent() {
    _classCallCheck(this, FocusControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onBlurRadiusChanged', '_onHistoryUndo');

    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Constants"].EVENTS.HISTORY_UNDO, _this._onHistoryUndo);

    _this.state.selectedItem = 'none';
    _this.state.intensity = 50;

    _this._autoSelectItem(true);
    return _this;
  }

  // -------------------------------------------------------------------------- ITEM SELECTION

  /**
   * Checks if the given focus mode is available
   * @param  {String}  identifier
   * @return {Boolean}
   * @private
   */


  FocusControlsComponent.prototype._isModeAvailable = function _isModeAvailable(identifier) {
    var availableModes = this.props.options.availableModes;

    if (identifier === 'none' || availableModes === null) return true;

    return availableModes.indexOf(identifier) !== -1;
  };

  /**
   * Automatically selects an item from the given operation (or, if no operation is given, from
   * an existing focus operation)
   * @param  {Boolean} initial
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  FocusControlsComponent.prototype._autoSelectItem = function _autoSelectItem(initial, operation) {
    var _this2 = this;

    var controls = this.props.controls;
    var ITEMS = controls.constructor.ITEMS;

    operation = operation || controls.getOperation();

    if (operation) {
      ITEMS.forEach(function (item) {
        if (item.operationIdentifier === operation.constructor.identifier) {
          _this2._onItemClick(item, false, initial);
        }
      });
      if (!initial) {
        this.setSharedState({ operation: operation });
      }
    } else {
      this._onItemClick(ITEMS[0], false, initial);
    }
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an item has been clicked
   * @param  {Object} item
   * @param  {Boolean} createOperation = true
   * @param  {Boolean} initial = false
   * @private
   */


  FocusControlsComponent.prototype._onItemClick = function _onItemClick(item) {
    var createOperation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    if (this.getSharedState('selectedFocus') === item.identifier) return;

    var newSharedState = { selectedFocus: item.identifier };

    if (createOperation) {
      if (operation) {
        editor.operations.remove(operation, false);
      }
      if (item.operationIdentifier) {
        operation = editor.operations.getOrCreate(item.operationIdentifier);
        newSharedState.operation = operation;
        newSharedState.inputDimensions = operation.getInputDimensions(false);
      }
    }

    editor.render();

    this.setSharedState(newSharedState, !initial);
  };

  /**
   * Gets called when the filter intensity has been changed
   * @param  {Number} value
   * @private
   */


  FocusControlsComponent.prototype._onBlurRadiusChanged = function _onBlurRadiusChanged(value) {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    operation.setBlurRadius(value);
    editor.render();
  };

  /**
   * Invoked when a history item has been undone
   * @param  {Object[]} items
   * @private
   */


  FocusControlsComponent.prototype._onHistoryUndo = function _onHistoryUndo(items) {
    var controls = this.props.controls;
    var operations = this.context.editor.operations;


    var undoAffectsFocus = items.some(function (item) {
      return controls.isFocusOperation(item.getOperation());
    });
    if (!undoAffectsFocus) return;

    operations.remove(this.getSharedState('operation'));
    this._autoSelectItem(false);
    this.setSharedState({ initialOperation: null });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items
   * @return {React.Element[]}
   * @private
   */


  FocusControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this3 = this;

    var controls = this.props.controls;

    var operation = this.getSharedState('operation');
    var selectedFocus = this.getSharedState('selectedFocus');
    return controls.constructor.ITEMS.filter(function (item) {
      return _this3._isModeAvailable(item.identifier);
    }).map(function (item) {
      var backgroundImagePath = _this3._getAssetPath(item.backgroundImagePath, true);
      var activeBackgroundImagePath = _this3._getAssetPath(item.activeBackgroundImagePath, true);
      var selected = item.identifier === selectedFocus;
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__focus_list_item_component__["a" /* default */], {
        key: item.identifier,
        title: _this3._t('editor.controls.focus.items.' + item.identifier),
        selected: selected,
        showSlider: !!item.operationIdentifier,
        blurRadius: operation && operation.getBlurRadius(),
        onBlurRadiusChanged: _this3._onBlurRadiusChanged,
        backgroundImagePath: backgroundImagePath,
        activeBackgroundImagePath: activeBackgroundImagePath,
        onClick: _this3._onItemClick.bind(_this3, item, true, false) });
    }, this);
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  FocusControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-focusControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this control's content
   * @return {React.Element}
   */


  FocusControlsComponent.prototype._renderContent = function _renderContent() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
      {
        direction: 'vertical',
        innerListRef: function innerListRef(el) {
          _this4._list = el;
        },
        innerRef: function innerRef(el) {
          _this4._scrollbar = el;
        } },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        List,
        null,
        this._renderListItems()
      )
    );
  };

  return FocusControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"]);

// -------------------------------------------------------------------------- STYLES

FocusControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
FocusControlsComponent.propTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].propTypes;
FocusControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (FocusControlsComponent);
var List = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('1snluvd', 'List');

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */


var ControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItem,
    ControlItemTitle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle,
    ControlItemActiveOverlay = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemActiveOverlay;


var test = ("production") === 'test';

var FocusListItemComponent = function (_SharedStateComponent) {
  _inherits(FocusListItemComponent, _SharedStateComponent);

  function FocusListItemComponent() {
    _classCallCheck(this, FocusListItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this._bindAll('_onSliderValueChanged');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when the slider value has been changed
   * @param  {Number} value
   * @private
   */


  FocusListItemComponent.prototype._onSliderValueChanged = function _onSliderValueChanged(value) {
    var onBlurRadiusChanged = this.props.onBlurRadiusChanged;

    var inputDimensions = this.getSharedState('inputDimensions');
    var shortestSide = inputDimensions.min();
    onBlurRadiusChanged && onBlurRadiusChanged(value / shortestSide);
  };

  /**
   * Renders the slider if necessary
   * @return {React.Component}
   * @private
   */


  FocusListItemComponent.prototype._renderSlider = function _renderSlider() {
    var _props = this.props,
        selected = _props.selected,
        showSlider = _props.showSlider,
        blurRadius = _props.blurRadius;

    if (!(selected && showSlider)) return null;

    var operation = this.getSharedState('operation');
    var maxBlurRadius = Math.min(180, Math.round(operation.getInputDimensions(false).min() * 0.1));

    var inputDimensions = this.getSharedState('inputDimensions');
    var shortestSide = inputDimensions.min();

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderComponent"], {
      minValue: 0,
      maxValue: maxBlurRadius,
      valueUnit: '',
      middleDot: false,
      value: blurRadius * shortestSide,
      onChange: this._onSliderValueChanged });
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  FocusListItemComponent.prototype.render = function render() {
    var _props2 = this.props,
        title = _props2.title,
        backgroundImagePath = _props2.backgroundImagePath,
        activeBackgroundImagePath = _props2.activeBackgroundImagePath,
        selected = _props2.selected,
        onClick = _props2.onClick,
        showSlider = _props2.showSlider;

    var listItemStyle = {
      backgroundImage: 'url(\'' + (selected ? activeBackgroundImagePath : backgroundImagePath) + '\')'
    };

    var transitionDuration = this.context.theme.transitionDuration;


    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      ListItem,
      {
        selected: selected,
        'data-selected': selected,
        className: test ? 'js-focusListItem' : undefined,
        onClick: onClick,
        style: listItemStyle },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        ListItemTitle,
        { selected: selected, withSlider: selected && showSlider },
        title
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Slider,
        { visible: selected && showSlider },
        this._renderSlider()
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: selected,
          enterProp: 'rendered',
          enterDuration: transitionDuration * 1000,
          appearProp: 'visible',
          appearDuration: transitionDuration * 1000,
          leaveDuration: transitionDuration * 1000 },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ListItemOverlay, { selected: true })
      )
    );
  };

  return FocusListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

FocusListItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (FocusListItemComponent);


var ListItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItem).li('19qom6j', 'ListItem');

var ListItemTitle = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).div('1cwztpc', {
  selected: '2znik8',
  withSlider: 'fsvvyb'
}, 'ListItemTitle');

var ListItemOverlay = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemActiveOverlay).div('rctda3', 'ListItemOverlay');

var Slider = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('chwlso', {
  visible: 'vpr3tu'
}, 'Slider');

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radial_focus_canvas_controls_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linear_focus_canvas_controls_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mirrored_focus_canvas_controls_component__ = __webpack_require__(54);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */







var FocusCanvasControlsComponent = function (_CanvasControlsCompon) {
  _inherits(FocusCanvasControlsComponent, _CanvasControlsCompon);

  function FocusCanvasControlsComponent() {
    _classCallCheck(this, FocusCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onZoomDone');
    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.ZOOM_DONE, _this._onZoomDone);

    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, { zoomDone: false });
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the editor has done zooming
   * @private
   */


  FocusCanvasControlsComponent.prototype._onZoomDone = function _onZoomDone() {
    this.setState({ zoomDone: true });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the controls
   * @return {React.Element}
   * @private
   */


  FocusCanvasControlsComponent.prototype._renderControls = function _renderControls() {
    var selectedFocus = this.getSharedState('selectedFocus');

    var CanvasControls = void 0;
    switch (selectedFocus) {
      case 'radial':
        CanvasControls = __WEBPACK_IMPORTED_MODULE_2__radial_focus_canvas_controls_component__["a" /* default */];
        break;
      case 'linear':
        CanvasControls = __WEBPACK_IMPORTED_MODULE_3__linear_focus_canvas_controls_component__["a" /* default */];
        break;
      case 'mirrored':
        CanvasControls = __WEBPACK_IMPORTED_MODULE_4__mirrored_focus_canvas_controls_component__["a" /* default */];
        break;
      default:
        return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement('div', null);
    }

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(CanvasControls, { zoomDone: this.state.zoomDone });
  };

  return FocusCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["CanvasControlsComponent"]);

FocusCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["CanvasControlsComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (FocusCanvasControlsComponent);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var KnobStyle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].Knob,
    FullContainerStyle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].FullContainer;
var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2,
    Rectangle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Rectangle;


var test = ("production") === 'test';

var RadialFocusCanvasControlsComponent = function (_SharedStateComponent) {
  _inherits(RadialFocusCanvasControlsComponent, _SharedStateComponent);

  function RadialFocusCanvasControlsComponent() {
    var _this$_events;

    _classCallCheck(this, RadialFocusCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this._bindAll('_onCircleDragStart', '_onCircleDrag', '_onKnobDragStart', '_onKnobDrag', '_onOperationUpdated', '_onZoomDone');

    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, {
      circlePosition: new Vector2(),
      circleDimensions: new Vector2(),
      knobPosition: new Vector2(),
      visible: false
    });
    _this._knobChangedManually = false;
    _this._operation = _this.getSharedState('operation');

    _this._events = (_this$_events = {}, _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.ZOOM_DONE, _this._onZoomDone), _this$_events);

    if (_this.props.zoomDone) {
      Object(__WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__["b" /* requestAnimationFrame */])(function () {
        _this._onZoomDone();
      });
    }
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */


  RadialFocusCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _SharedStateComponent.prototype.componentDidMount.call(this);

    this._updateOnCanvasControls();
    this._updatePositionsAndDimensions();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called after a zoom has been done
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onZoomDone = function _onZoomDone() {
    if (!this.state.visible) {
      this.state.visible = true;
    }
    this._updateOnCanvasControls();
    this._updatePositionsAndDimensions();
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    if (operation !== this.getSharedState('operation')) return;
    this._knobChangedManually = false;
    this._updatePositionsAndDimensions();
  };

  // -------------------------------------------------------------------------- CENTER DRAGGING

  /**
   * Gets called when the user stars dragging the circle
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onCircleDragStart = function _onCircleDragStart() {
    this._initialPosition = this._operation.getPosition();
    this._initialKnobPosition = this.state.knobPosition.clone();
  };

  /**
   * Gets called while the user drags the circle
   * @param {Vector2} offset
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._onCircleDrag = function _onCircleDrag(offset) {
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
    this._updatePositionsAndDimensions();
  };

  // -------------------------------------------------------------------------- KNOB DRAG

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

    var newKnobPosition = this._initialKnobPosition.clone().add(offset).clamp(new Vector2(0, 0), outputDimensions);

    var position = this._operation.getPosition().clone().multiply(outputDimensions);

    var radius = newKnobPosition.clone().subtract(position).abs().len();
    var gradientRadius = radius / 2;

    this.setState({
      knobPosition: newKnobPosition,
      circleDimensions: new Vector2(radius * 2, radius * 2)
    });
    this._operation.set({
      radius: radius / outputDimensions.min(),
      gradientRadius: gradientRadius / outputDimensions.min()
    });

    editor.render();
  };

  // -------------------------------------------------------------------------- CALCULATION

  /**
   * Sets the dimensions and position values from the current operation options
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._updatePositionsAndDimensions = function _updatePositionsAndDimensions() {
    var editor = this.context.editor;


    var outputDimensions = editor.getOutputDimensions();
    var position = this._operation.getPosition().clone().multiply(outputDimensions);

    var radius = this._operation.getRadius() * outputDimensions.min();
    var diameter = radius * 2;
    var areaSize = new Vector2(diameter, diameter);

    var newState = {
      circleDimensions: areaSize,
      circlePosition: position
    };

    if (!this._knobChangedManually) {
      newState.knobPosition = position.clone().add(radius, 0);
    }

    this.setState(newState);
  };

  /**
   * Updates the styles for the canvas controls
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._updateOnCanvasControls = function _updateOnCanvasControls() {
    var editor = this.context.editor;

    var imageBounds = editor.getSDK().getSprite().getBounds();
    var containerBounds = this._container.getBoundingClientRect();
    var editorBounds = this.context.appComponent.getBounds();

    var onCanvasControlsRect = new Rectangle(Math.floor(imageBounds.x - (containerBounds.left - editorBounds.left)), Math.floor(imageBounds.y - (containerBounds.top - editorBounds.top)), Math.ceil(imageBounds.width) + 1, Math.ceil(imageBounds.height) + 1);

    __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].styleElement(this._onCanvasControls, {
      left: onCanvasControlsRect.x + 'px',
      top: onCanvasControlsRect.y + 'px',
      width: onCanvasControlsRect.width + 'px',
      height: onCanvasControlsRect.height + 'px'
    });

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Returns the styles object for the circle div
   * @return {Object}
   * @private
   */


  RadialFocusCanvasControlsComponent.prototype._getCircleStyles = function _getCircleStyles() {
    return {
      width: this.state.circleDimensions.x,
      height: this.state.circleDimensions.y,
      left: this.state.circlePosition.x,
      top: this.state.circlePosition.y,
      marginLeft: this.state.circleDimensions.x * -0.5,
      marginTop: this.state.circleDimensions.y * -0.5
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
   * Renders this component
   * @return {React.Element}
   */


  RadialFocusCanvasControlsComponent.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      CanvasControls,
      { innerRef: function innerRef(el) {
          _this2._container = el;
        } },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: this.state.visible,
          enterProp: 'rendered',
          enterDuration: this.context.theme.transitionDuration * 1000,
          appearProp: 'visible',
          appearDuration: this.context.theme.transitionDuration * 1000,
          leaveDuration: this.context.theme.transitionDuration * 1000 },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          OnCanvasControls,
          { innerRef: function innerRef(el) {
              _this2._onCanvasControls = el;
            } },
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
            {
              onStart: this._onCircleDragStart,
              onDrag: this._onCircleDrag },
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Circle, {
              className: test ? 'js-radialFocusDraggableCircle' : undefined,
              style: this._getCircleStyles() })
          ),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
            {
              onStart: this._onKnobDragStart,
              onDrag: this._onKnobDrag },
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Knob, {
              className: test ? 'js-radialFocusDraggableKnob' : undefined,
              style: this._getKnobStyle() })
          )
        )
      )
    );
  };

  return RadialFocusCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

RadialFocusCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (RadialFocusCanvasControlsComponent);


var CanvasControls = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(FullContainerStyle).div('1rineb', 'CanvasControls');

var OnCanvasControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('12e79nm', {
  rendered: '2jlos',
  visible: 'zgbg08'
}, 'OnCanvasControls');

var Knob = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(KnobStyle).div('120drhm', 'Knob');

var Circle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('kgwi8g', 'Circle');

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var KnobStyle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].Knob,
    FullContainerStyle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].FullContainer;
var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2,
    Rectangle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Rectangle;


var test = ("production") === 'test';

var LinearFocusCanvasControlsComponent = function (_SharedStateComponent) {
  _inherits(LinearFocusCanvasControlsComponent, _SharedStateComponent);

  function LinearFocusCanvasControlsComponent() {
    var _this$_events;

    _classCallCheck(this, LinearFocusCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this._bindAll('_onKnobDragStart', '_onKnobDrag', '_onOperationUpdated', '_onZoomDone');

    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, {
      visible: false
    });
    _this._operation = _this.getSharedState('operation');

    _this._events = (_this$_events = {}, _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.ZOOM_DONE, _this._onZoomDone), _this$_events);

    if (_this.props.zoomDone) {
      Object(__WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__["b" /* requestAnimationFrame */])(function () {
        _this._onZoomDone();
      });
    }
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */


  LinearFocusCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _SharedStateComponent.prototype.componentDidMount.call(this);

    this._updateOnCanvasControls();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called after a zoom has been done
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onZoomDone = function _onZoomDone() {
    if (!this.state.visible) {
      this.state.visible = true;
    }
    this._updateOnCanvasControls();
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    if (operation !== this.getSharedState('operation')) return;
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- KNOB DRAG

  /**
   * Gets called when the user stars dragging the gradient knob
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onKnobDragStart = function _onKnobDragStart(index, e) {
    var operation = this.getSharedState('operation');
    this._initialPosition = operation.getOption('controlPoint' + index);
  };

  /**
   * Gets called while the user drags the gradient knob
   * @param {Number} index
   * @param {Vector2} offset
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._onKnobDrag = function _onKnobDrag(index, offset) {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    var imageBounds = editor.getSDK().getSprite().getBounds();
    var containerBounds = this._container.getBoundingClientRect();
    var editorBounds = this.context.appComponent.getBounds();

    var initialAbsolutePosition = this._initialPosition.clone().multiply(imageBounds.width, imageBounds.height);
    var absolutePosition = initialAbsolutePosition.add(offset).clamp(new Vector2(containerBounds.left - editorBounds.left - imageBounds.x, containerBounds.top - editorBounds.top - imageBounds.y), new Vector2(containerBounds.width - (imageBounds.x - (containerBounds.left - editorBounds.left)), containerBounds.height - (imageBounds.y - (containerBounds.top - editorBounds.top))));

    var newPosition = absolutePosition.divide(imageBounds.width, imageBounds.height);
    operation.setOption('controlPoint' + index, newPosition);
    editor.render();
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- CALCULATION

  /**
   * Updates the styles for the canvas controls
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._updateOnCanvasControls = function _updateOnCanvasControls() {
    var editor = this.context.editor;

    var imageBounds = editor.getSDK().getSprite().getBounds();
    var containerBounds = this._container.getBoundingClientRect();
    var editorBounds = this.context.appComponent.getBounds();

    var onCanvasControlsRect = new Rectangle(Math.floor(imageBounds.x - (containerBounds.left - editorBounds.left)), Math.floor(imageBounds.y - (containerBounds.top - editorBounds.top)), Math.ceil(imageBounds.width) + 1, Math.ceil(imageBounds.height) + 1);

    __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].styleElement(this._onCanvasControls, {
      left: onCanvasControlsRect.x + 'px',
      top: onCanvasControlsRect.y + 'px',
      width: onCanvasControlsRect.width + 'px',
      height: onCanvasControlsRect.height + 'px'
    });

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- STYLING\

  /**
   * Returns the CSS styles for the knob with the given index
   * @param {Number} index
   * @return {Object}
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._getKnobStyle = function _getKnobStyle(index) {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');
    var position = operation.getOption('controlPoint' + index);
    var imageBounds = editor.getSDK().getSprite().getBounds();

    var absolutePosition = position.clone().multiply(imageBounds.width, imageBounds.height);
    return {
      left: absolutePosition.x,
      top: absolutePosition.y
    };
  };

  /**
   * Returns the CSS styles for the line
   * @return {Object}
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._getLineStyle = function _getLineStyle() {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');
    var imageBounds = editor.getSDK().getSprite().getBounds();

    var controlPointPositions = {
      1: operation.getControlPoint1().clone().multiply(imageBounds.width, imageBounds.height),
      2: operation.getControlPoint2().clone().multiply(imageBounds.width, imageBounds.height)
    };

    var distance = controlPointPositions[2].clone().subtract(controlPointPositions[1]);
    var distanceLength = distance.len();

    var rotation = Math.atan2(distance.y, distance.x);
    return {
      width: distanceLength + 'px',
      left: controlPointPositions[1].x + 'px',
      top: controlPointPositions[1].y + 'px',
      transform: 'rotate(' + rotation + 'rad) translateY(-50%)'
    };
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the knobs
   * @return {React.Element[]}
   * @private
   */


  LinearFocusCanvasControlsComponent.prototype._renderKnobs = function _renderKnobs() {
    var knobs = [];
    for (var i = 1; i <= 2; i++) {
      knobs.push(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
        {
          onStart: this._onKnobDragStart.bind(this, i),
          onDrag: this._onKnobDrag.bind(this, i),
          key: i },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Knob, {
          style: this._getKnobStyle(i),
          className: test ? i === 1 ? 'js-firstLinearFocusDraggableKnob' : 'js-secondLinearFocusDraggableKnob' : undefined })
      ));
    }
    return knobs;
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  LinearFocusCanvasControlsComponent.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      CanvasControls,
      { innerRef: function innerRef(el) {
          _this2._container = el;
        } },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: this.state.visible,
          enterProp: 'rendered',
          enterDuration: this.context.theme.transitionDuration * 1000,
          appearProp: 'visible',
          appearDuration: this.context.theme.transitionDuration * 1000,
          leaveDuration: this.context.theme.transitionDuration * 1000 },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          OnCanvasControls,
          { innerRef: function innerRef(el) {
              _this2._onCanvasControls = el;
            } },
          this._renderKnobs(),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Line, { style: this._getLineStyle() })
        )
      )
    );
  };

  return LinearFocusCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

LinearFocusCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (LinearFocusCanvasControlsComponent);


var CanvasControls = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(FullContainerStyle).div('1rineb', 'CanvasControls');

var OnCanvasControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('12e79nm', {
  rendered: '2jlos',
  visible: 'zgbg08'
}, 'OnCanvasControls');

var Knob = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(KnobStyle).div('120drhm', 'Knob');

var Line = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1rrhaqy', 'Line');

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var KnobStyle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].Knob,
    FullContainerStyle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].FullContainer;
var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2,
    Rectangle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Rectangle;


var test = ("production") === 'test';

var MirroredFocusCanvasControlsComponent = function (_SharedStateComponent) {
  _inherits(MirroredFocusCanvasControlsComponent, _SharedStateComponent);

  function MirroredFocusCanvasControlsComponent() {
    var _this$_events;

    _classCallCheck(this, MirroredFocusCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this._bindAll('_onCenterDragStart', '_onCenterDrag', '_onKnobDragStart', '_onKnobDrag', '_onOperationUpdated', '_onZoomDone');

    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, {
      areaPosition: new Vector2(),
      areaDimensions: new Vector2(),
      knobPosition: new Vector2(),
      visible: false
    });

    _this._events = (_this$_events = {}, _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.ZOOM_DONE, _this._onZoomDone), _this$_events);

    // We're keeping a local reference to the operation, because the
    // operation referenced in the shared state might have already
    // changed when the `OPERATION_UPDATED` event is fired.
    _this._operation = _this.getSharedState('operation');

    if (_this.props.zoomDone) {
      Object(__WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__["b" /* requestAnimationFrame */])(function () {
        _this._onZoomDone();
      });
    }
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called after the component has been mounted
   */


  MirroredFocusCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _SharedStateComponent.prototype.componentDidMount.call(this);

    this._updateOnCanvasControls();
    this._updatePositionsAndDimensions();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called after a zoom has been done
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._onZoomDone = function _onZoomDone() {
    if (!this.state.visible) {
      this.state.visible = true;
    }
    this._updateOnCanvasControls();
    this._updatePositionsAndDimensions();
  };

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    if (operation !== this._operation) return;
    this.forceUpdate();
    this._updatePositionsAndDimensions();
  };

  /**
   * Gets called when the user stars dragging the center
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._onCenterDragStart = function _onCenterDragStart() {
    var operation = this._operation;
    this._initialStart = operation.getStart();
    this._initialEnd = operation.getEnd();
    this._initialDist = this._initialEnd.clone().subtract(this._initialStart);
  };

  /**
   * Gets called while the user drags the center
   * @param {Vector2} offset
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._onCenterDrag = function _onCenterDrag(offset) {
    var editor = this.context.editor;

    var operation = this._operation;

    var outputDimensions = editor.getOutputDimensions();
    var relativeOffset = offset.clone().divide(outputDimensions);

    var newStart = this._initialStart.clone().add(relativeOffset).clamp(new Vector2(0, 0), new Vector2(1, 1).subtract(this._initialDist));
    var newEnd = newStart.clone().add(this._initialDist);

    operation.set({
      start: newStart,
      end: newEnd
    });

    editor.render();
    this._updatePositionsAndDimensions();
    this.forceUpdate();
  };

  /**
   * Gets called when the user stars dragging the gradient knob
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._onKnobDragStart = function _onKnobDragStart(e) {
    this._initialKnobPosition = this.state.knobPosition.clone();
  };

  /**
   * Gets called while the user drags the gradient knob
   * @param {Vector2} offset
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._onKnobDrag = function _onKnobDrag(offset) {
    var editor = this.context.editor;

    var operation = this._operation;
    var outputDimensions = editor.getOutputDimensions();

    var newKnobPosition = this._initialKnobPosition.clone().add(offset).clamp(new Vector2(0, 0), outputDimensions);

    var distanceFromCenter = newKnobPosition.clone().subtract(this.state.areaPosition);

    var start = this.state.areaPosition.clone().add(-distanceFromCenter.y, distanceFromCenter.x).divide(outputDimensions);
    var end = this.state.areaPosition.clone().add(distanceFromCenter.y, -distanceFromCenter.x).divide(outputDimensions);
    var size = distanceFromCenter.len() * 2;

    operation.set({
      start: start,
      end: end,
      size: size / outputDimensions.min(),
      gradientSize: size / outputDimensions.min()
    });
    this.setState({
      knobPosition: newKnobPosition,
      areaDimensions: new Vector2(this.state.areaDimensions.x, size)
    });
    editor.render();
  };

  // -------------------------------------------------------------------------- STYLING

  MirroredFocusCanvasControlsComponent.prototype._getAreaStyle = function _getAreaStyle() {
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
   * Returns the positioning styles for the knob
   * @return {Object}
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._getKnobStyle = function _getKnobStyle() {
    return {
      left: this.state.knobPosition.x,
      top: this.state.knobPosition.y
    };
  };

  // -------------------------------------------------------------------------- CALCULATION

  /**
   * Sets the dimensions and position values from the current operation options
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._updatePositionsAndDimensions = function _updatePositionsAndDimensions() {
    var editor = this.context.editor;

    var outputDimensions = editor.getOutputDimensions();
    var operation = this._operation;

    var start = operation.getStart().clone().multiply(outputDimensions);
    var end = operation.getEnd().clone().multiply(outputDimensions);
    var size = operation.getSize() * outputDimensions.min();

    var dist = end.clone().subtract(start);
    var middle = start.clone().add(dist.clone().divide(2));

    var areaSize = new Vector2(outputDimensions.len() * 2, size);

    var totalDist = dist.len();
    var factor = dist.clone().divide(totalDist).divide(2);
    this.setState({
      areaDimensions: areaSize,
      areaPosition: middle.clone(),
      knobPosition: middle.clone().add(-size * factor.y, size * factor.x)
    });
  };

  /**
   * Updates the styles for the canvas controls
   * @private
   */


  MirroredFocusCanvasControlsComponent.prototype._updateOnCanvasControls = function _updateOnCanvasControls() {
    var editor = this.context.editor;

    var imageBounds = editor.getSDK().getSprite().getBounds();
    var containerBounds = this._container.getBoundingClientRect();
    var editorBounds = this.context.appComponent.getBounds();

    var onCanvasControlsRect = new Rectangle(Math.floor(imageBounds.x - (containerBounds.left - editorBounds.left)), Math.floor(imageBounds.y - (containerBounds.top - editorBounds.top)), Math.ceil(imageBounds.width) + 1, Math.ceil(imageBounds.height) + 1);

    __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].styleElement(this._onCanvasControls, {
      left: onCanvasControlsRect.x + 'px',
      top: onCanvasControlsRect.y + 'px',
      width: onCanvasControlsRect.width + 'px',
      height: onCanvasControlsRect.height + 'px'
    });

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  MirroredFocusCanvasControlsComponent.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      CanvasControls,
      { innerRef: function innerRef(el) {
          _this2._container = el;
        } },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: this.state.visible,
          enterProp: 'rendered',
          enterDuration: this.context.theme.transitionDuration * 1000,
          appearProp: 'visible',
          appearDuration: this.context.theme.transitionDuration * 1000,
          leaveDuration: this.context.theme.transitionDuration * 1000 },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          OnCanvasControls,
          { innerRef: function innerRef(el) {
              _this2._onCanvasControls = el;
            } },
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
            {
              onStart: this._onCenterDragStart,
              onDrag: this._onCenterDrag },
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Area, {
              className: test ? 'js-mirroredFocusDraggableArea' : undefined,
              style: this._getAreaStyle() })
          ),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
            {
              onStart: this._onKnobDragStart,
              onDrag: this._onKnobDrag },
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Knob, {
              className: test ? 'js-mirroredFocusDraggableKnob' : undefined,
              style: this._getKnobStyle() })
          )
        )
      )
    );
  };

  return MirroredFocusCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

MirroredFocusCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (MirroredFocusCanvasControlsComponent);


var CanvasControls = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(FullContainerStyle).div('1rineb', 'CanvasControls');

var OnCanvasControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('aovk7s', {
  rendered: '2jlos',
  visible: 'zgbg08'
}, 'OnCanvasControls');

var Knob = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(KnobStyle).div('120drhm', 'Knob');

var Area = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('36haff', 'Area');

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frame_controls_component__ = __webpack_require__(56);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var FrameControls = function (_BaseControls) {
  _inherits(FrameControls, _BaseControls);

  function FrameControls() {
    _classCallCheck(this, FrameControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Is called when a control is entered
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  FrameControls.prototype._onEnter = function _onEnter() {
    var editor = this.context.editor;

    var operationExistedBeforeEntering = editor.operations.exists('frame');
    var operation = editor.operations.get('frame');
    var initialOptions = operation && operation.serializeOptions();
    this.sharedState.set({
      operation: operation, initialOptions: initialOptions, operationExistedBeforeEntering: operationExistedBeforeEntering
    });
  };

  /**
   * Is called when a control is left
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Object[]} [categories = []]
   * @property {Boolean} [replaceCategories = false]
   * @property {String[]} [availableFrames = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */


  /**
   * A unique identifier for these controls
   * @type {String}
   */


  FrameControls.prototype._onLeave = function _onLeave() {
    var initialOptions = this.sharedState.get('initialOptions');
    var operationExistedBeforeEntering = this.sharedState.get('operationExistedBeforeEntering');
    var historyItem = {
      type: 'global',
      operation: 'frame',
      options: initialOptions,
      existent: operationExistedBeforeEntering
    };
    this.addHistoryItem(historyItem);
  };

  /**
   * Gets called when an operation has been removed. If it is the same operation that
   * this control belongs to, it switches back to the overview, leaving this control
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  FrameControls.prototype._onOperationRemoved = function _onOperationRemoved(operation) {}
  // void


  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */
  ;

  FrameControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('frame') && editor.isToolEnabled('frame');
  };

  return FrameControls;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"]);

FrameControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
FrameControls.getPreloadAssets = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].getPreloadAssets;
FrameControls.identifier = 'frame';
FrameControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_1__frame_controls_component__["a" /* default */];
FrameControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].canvasControlsComponent;
FrameControls.iconPath = 'editor/controls/frame/icon.png';
FrameControls.activeIconPath = 'editor/controls/frame/icon-active.png';
FrameControls.requiredOperations = ['frame'];
FrameControls.defaultOptions = {
  categories: [],
  replaceCategories: false,
  availableFrames: null };
/* harmony default export */ __webpack_exports__["default"] = (FrameControls);


__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default.a.Controls.FrameControls = FrameControls;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frame_root_panel_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frame_options_panel_component__ = __webpack_require__(59);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var test = ("production") === 'test';

var PanelEnum = {
  ROOT: 1,
  CATEGORY: 2,
  OPTIONS: 3
};

var FrameControlsComponent = function (_ControlsComponent) {
  _inherits(FrameControlsComponent, _ControlsComponent);

  function FrameControlsComponent() {
    var _this$_events;

    _classCallCheck(this, FrameControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onFrameClick', '_onReplaceClick', '_onHistoryUndo', '_onOperationUpdated');

    _this._initFrameManager();
    _this._needsStyleFixes = true;

    var currentPanel = PanelEnum.ROOT;
    var operation = _this.getSharedState('operation');
    if (operation && operation.getFrame()) {
      currentPanel = PanelEnum.OPTIONS;
    }
    _this.state = {
      currentPanel: currentPanel
    };

    _this._events = (_this$_events = {}, _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Constants"].EVENTS.HISTORY_UNDO, _this._onHistoryUndo), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), _this$_events);
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * @return {Promise}
   */


  FrameControlsComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    this._list.style.height = '100%';
    return _ControlsComponent.prototype.fixStyles.call(this).then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        var containerHeight = _this2._container.offsetHeight;
        _this2._list.style.height = containerHeight + 'px';
      }

      return _this2.refs.panel.fixStyles();
    });
  };

  /**
   * Invoked immediately after updating occurs
   */


  FrameControlsComponent.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPanel !== prevState.currentPanel) {
      this.fixStyles();
    }
  };

  // -------------------------------------------------------------------------- FRAME MANAGER

  /**
   * Initializes the frame manager
   * @private
   */


  FrameControlsComponent.prototype._initFrameManager = function _initFrameManager() {
    this._frameManager = new __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["FrameManager"](this.context.ui, this.props.options);
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  FrameControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    // The undo button might change this operation's selected filter or intensity.
    // Update the component to reflect the change
    if (operation === this.getSharedState('operation')) {
      this.forceUpdate();
    }
  };

  /**
   * Invoked when the history has been undone
   * @private
   */


  FrameControlsComponent.prototype._onHistoryUndo = function _onHistoryUndo() {
    var editor = this.context.editor;


    var operation = editor.operations.get('frame');
    if (!operation || operation && !operation.getFrame()) {
      return this.setState({ currentPanel: PanelEnum.ROOT });
    }
  };

  /**
   * Invoked hwen the `Replace` button has been clicked
   * @privte
   */


  FrameControlsComponent.prototype._onReplaceClick = function _onReplaceClick() {
    this.setState({
      currentPanel: PanelEnum.ROOT
    });
  };

  /**
   * Called when the user clicks a category item.
   * @param  {Category} category
   * @private
   */


  FrameControlsComponent.prototype._onCategoryClick = function _onCategoryClick(category) {
    this.setState({
      currentPanel: PanelEnum.CATEGORY,
      category: category
    });
  };

  /**
   * Called when the user clicks a frame.
   * @param {Object} frameData
   * @private
   */


  FrameControlsComponent.prototype._onFrameClick = function _onFrameClick(frameData) {
    var _this3 = this;

    var editor = this.context.editor;


    this.props.controls.registerLocalHistoryChange('frame-image', false, 'frame');

    if (!frameData) {
      var _operation = this.getSharedState('operation');
      if (_operation) {
        editor.operations.remove(_operation);
        this.setSharedState({ operation: null });
        editor.render();
      }
      return;
    }

    var frame = new __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Frame"](this.context.ui, frameData);
    var operation = editor.operations.getOrCreate('frame');

    var loadingModal = void 0;
    var loadTimeout = setTimeout(function () {
      loadingModal = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayLoading(_this3._t('loading.loading'));
    }, 100);

    frame.load().then(function () {
      if (loadingModal) loadingModal.close();
      if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
      }

      operation.setFrame(frame.getFrame());
      editor.render();

      _this3.setSharedState({ operation: operation }, false);
      _this3.setState({
        currentPanel: PanelEnum.OPTIONS
      });
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the current panel according to
   * the components state.
   * @return {React.Element} The panel component
   */


  FrameControlsComponent.prototype._renderCurrentPanel = function _renderCurrentPanel() {
    var _this4 = this;

    var controls = this.props.controls;


    switch (this.state.currentPanel) {
      case PanelEnum.ROOT:
        return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1__frame_root_panel_component__["a" /* default */], {
          innerRef: function innerRef(el) {
            _this4._list = el;
          },
          frameManager: this._frameManager,
          onFrameClick: this._onFrameClick,
          controls: controls,
          ref: 'panel'
        });
      case PanelEnum.OPTIONS:
        return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__frame_options_panel_component__["a" /* default */], {
          innerRef: function innerRef(el) {
            _this4._list = el;
          },
          frameManager: this._frameManager,
          onReplaceClick: this._onReplaceClick,
          onNewFrameClick: this._onNewFrameClick,
          controls: controls,
          ref: 'panel'
        });
    }
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  FrameControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-frameControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this component's content
   * @return {React.Element}
   * @private
   */


  FrameControlsComponent.prototype._renderContent = function _renderContent() {
    return this._renderCurrentPanel();
  };

  return FrameControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"]);

FrameControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
FrameControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (FrameControlsComponent);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_async_animation_frame__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frame_list_component__ = __webpack_require__(58);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var test = ("production") === 'test';

var FrameRootPanelComponent = function (_BaseComponent) {
  _inherits(FrameRootPanelComponent, _BaseComponent);

  function FrameRootPanelComponent() {
    _classCallCheck(this, FrameRootPanelComponent);

    return _possibleConstructorReturn(this, _BaseComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * This method is called from the FrameControlsComponent due to timing issues.
   * @return {Promise}
   */
  FrameRootPanelComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        Object(__WEBPACK_IMPORTED_MODULE_1_shared_async_animation_frame__["b" /* requestAnimationFrame */])(function () {
          _this2._scrollbar.update();
        });
      } else {
        _this2._scrollbar.update();
      }
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component.
   * @return {React.Element}
   */


  FrameRootPanelComponent.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        frameManager = _props.frameManager,
        _innerRef = _props.innerRef;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Wrapper,
      {
        innerRef: function innerRef(el) {
          _innerRef && _innerRef(el);_this3._wrapper = el;
        },
        className: test ? 'js-rootPanel' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
        {
          direction: 'vertical',
          innerRef: function innerRef(el) {
            _this3._scrollbar = el;
          } },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__frame_list_component__["a" /* default */], {
          frames: frameManager.getFramesForCategory('all'),
          onFrameClick: this.props.onFrameClick })
      )
    );
  };

  return FrameRootPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

FrameRootPanelComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (FrameRootPanelComponent);


var Wrapper = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('rfecls', 'Wrapper');

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:/**
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var PlainControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItem;

var test = ("production") === 'test';

var FrameListComponent = function (_SharedStateComponent) {
  _inherits(FrameListComponent, _SharedStateComponent);

  function FrameListComponent() {
    _classCallCheck(this, FrameListComponent);

    return _possibleConstructorReturn(this, _SharedStateComponent.apply(this, arguments));
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks a frame
   * @param  {Object} frame
   * @private
   */
  FrameListComponent.prototype._onFrameClick = function _onFrameClick(frame) {
    this.props.onFrameClick && this.props.onFrameClick(frame);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders an arbitray number of frame items.
   * @private
   */


  FrameListComponent.prototype._renderListItems = function _renderListItems() {
    var _this2 = this;

    var frames = this.props.frames;


    var currentFrameIdentifier = void 0;
    var operation = this.getSharedState('operation');
    if (operation && operation.getFrame()) {
      currentFrameIdentifier = operation.getFrame().identifier;
    }

    var selectedSprite = this.getSharedState('selectedSprite');
    if (selectedSprite) {
      currentFrameIdentifier = selectedSprite.getIdentifier();
    }

    return frames.map(function (frame) {
      var thumbURL = _this2._getAssetPath(frame.thumbnail);
      var itemStyle = {
        background: 'url(\'' + thumbURL + '\') no-repeat center center',
        backgroundSize: 'contain'
      };
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        FrameListItem,
        {
          selected: frame.identifier === currentFrameIdentifier,
          key: frame.identifier,
          onClick: _this2._onFrameClick.bind(_this2, frame),
          className: test ? 'js-frame' : undefined,
          twoColumns: true },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(FrameImage, { style: itemStyle })
      );
    });
  };

  /**
   * Renders this component.
   * @return {React.Element}
   */


  FrameListComponent.prototype.render = function render() {
    var operation = this.getSharedState('operation');
    var frame = operation && operation.getFrame();
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      FrameList,
      null,
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        FrameListItem,
        {
          selected: !frame,
          onClick: this._onFrameClick.bind(this, null),
          className: test ? 'js-frame' : undefined,
          withText: true,
          twoColumns: true },
        'None'
      ),
      this._renderListItems()
    );
  };

  return FrameListComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

FrameListComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (FrameListComponent);


var FrameList = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('18qztam', 'FrameList');

var FrameListItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItem).li('u8nfgk', 'FrameListItem');

var FrameImage = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('7r0ke8', 'FrameImage');

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_async_animation_frame__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var PlainControlItemBackground = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItemBackground;


var test = ("production") === 'test';

var FrameOptionsPanelComponent = function (_SharedStateComponent) {
  _inherits(FrameOptionsPanelComponent, _SharedStateComponent);

  function FrameOptionsPanelComponent() {
    _classCallCheck(this, FrameOptionsPanelComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this._bindAll('_onTintToggle', '_onTintColorChange', '_onOpacityChange', '_onWidthChange', '_onHistoryUndo');

    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Constants"].EVENTS.HISTORY_UNDO, _this._onHistoryUndo);

    var operation = _this.getSharedState('operation');
    _this.state = {
      tintEnabled: operation.getTintColor().a > 0,
      tintColor: operation.getTintColor()
    };
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the tint has been turned on or off
   * @param  {Boolean} enabled
   * @private
   */


  FrameOptionsPanelComponent.prototype._onTintToggle = function _onTintToggle(enabled) {
    this.props.controls.registerLocalHistoryChange('frame-tint-enabled');

    var operation = this.getSharedState('operation');
    var tintEnabled = this.state.tintEnabled;


    var tintColor = operation.getTintColor().clone();
    tintColor.a = tintEnabled ? 0 : 1;
    operation.setTintColor(tintColor);

    var editor = this.context.editor;

    editor.render();

    this.setState({
      tintEnabled: !tintEnabled
    });
  };

  /**
   * Invoked when the tint color has been changed
   * @param  {PhotoEditorSDK.Color} color
   * @private
   */


  FrameOptionsPanelComponent.prototype._onTintColorChange = function _onTintColorChange(color) {
    this.props.controls.registerLocalHistoryChange('frame-tint-color', true);

    var operation = this.getSharedState('operation');
    operation.setTintColor(color.clone());

    var editor = this.context.editor;

    editor.render();

    this.forceUpdate();
  };

  /**
   * Invoked when the history has been undone
   * @private
   */


  FrameOptionsPanelComponent.prototype._onHistoryUndo = function _onHistoryUndo() {
    var editor = this.context.editor;

    if (!editor.operations.exists('frame')) {
      return;
    }

    var operation = this.getSharedState('operation');
    if (!operation.getFrame()) {
      return;
    }

    this.setState({
      tintEnabled: operation.getTintColor().a > 0,
      tintColor: operation.getTintColor().clone()
    });
  };

  /**
   * Invoked when the opacity has been changed
   * @param  {Number} opacity
   * @private
   */


  FrameOptionsPanelComponent.prototype._onOpacityChange = function _onOpacityChange(opacity) {
    this.props.controls.registerLocalHistoryChange('frame-opacity', true);

    var operation = this.getSharedState('operation');
    operation.setAlpha(opacity / 100);

    var editor = this.context.editor;

    editor.render();

    this.forceUpdate();
  };

  /**
   * Invoked when the width has been changed
   * @param  {Number} width
   * @private
   */


  FrameOptionsPanelComponent.prototype._onWidthChange = function _onWidthChange(width) {
    this.props.controls.registerLocalHistoryChange('frame-width', true);

    var editor = this.context.editor;

    var operation = this.getSharedState('operation');
    var shortestSide = operation.getInputDimensions().min();
    operation.setScale(width / shortestSide);
    editor.render();

    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * A method that is called whenever styles need to be fixed by the JavaScript.
   * This needs to be done thanks to older Internet Explorer browsers which have
   * a bunch of CSS bugs.
   * This method is called from the FrameControlsComponent due to timing issues.
   * @return {Promise}
   */


  FrameOptionsPanelComponent.prototype.fixStyles = function fixStyles() {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Utils"].Browser.isIElte(10)) {
        Object(__WEBPACK_IMPORTED_MODULE_1_shared_async_animation_frame__["b" /* requestAnimationFrame */])(function () {
          _this2._scrollbar.update();
        });
      } else {
        _this2._scrollbar.update();
      }
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component.
   * @return {React.Element}
   */


  FrameOptionsPanelComponent.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        _innerRef = _props.innerRef,
        onReplaceClick = _props.onReplaceClick;

    var operation = this.getSharedState('operation');
    var frame = operation.getFrame();
    var inputDimensions = operation.getInputDimensions();
    var shortestSide = inputDimensions.min();
    var tintable = frame.tintable;

    var thumbnailStyle = {
      background: 'url(\'' + this._getAssetPath(frame.thumbnail, false) + '\') center center / contain no-repeat'
    };

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Wrapper,
      {
        innerRef: function innerRef(el) {
          _innerRef && _innerRef(el);_this3._wrapper = el;
        },
        className: test ? 'js-optionsPanel' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
        {
          direction: 'vertical',
          innerRef: function innerRef(el) {
            _this3._scrollbar = el;
          } },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            TopSection,
            null,
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
              Details,
              null,
              __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                Thumbnail,
                null,
                __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ThumbnailImage, {
                  style: thumbnailStyle,
                  onClick: onReplaceClick })
              ),
              __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                DetailsContainer,
                null,
                __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                  Title,
                  null,
                  this._t('editor.controls.frame.frames.' + frame.identifier) || frame.defaultName
                ),
                __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
                  ReplaceButton,
                  {
                    onClick: onReplaceClick,
                    className: test ? 'js-replaceButton' : undefined },
                  this._t('editor.controls.frame.replace')
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderControlComponent"], {
              minValue: 0,
              value: Math.round(operation.getAlpha() * 100),
              maxValue: 100,
              label: this._t('editor.controls.frame.opacity'),
              onSliderValueChange: this._onOpacityChange,
              onValueChange: this._onOpacityChange,
              middleDot: false,
              className: test ? 'js-opacityControl' : undefined }),
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderControlComponent"], {
              minValue: shortestSide * 0.05,
              value: Math.round(operation.getScale() * shortestSide),
              maxValue: shortestSide * 0.3,
              label: this._t('editor.controls.frame.width'),
              onSliderValueChange: this._onWidthChange,
              onValueChange: this._onWidthChange,
              middleDot: false,
              className: test ? 'js-widthControl' : undefined })
          ),
          tintable && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["CollapseSectionComponent"],
            {
              toggleable: true,
              title: this._t('editor.controls.frame.fill'),
              expanded: this.state.tintEnabled,
              className: test ? 'js-fillControl' : undefined,
              onToggle: this._onTintToggle },
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(ColorSelection, {
              value: this.state.tintColor,
              onColorPickerToggle: this.fixStyles,
              onChange: this._onTintColorChange })
          )
        )
      )
    );
  };

  return FrameOptionsPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

// -------------------------------------------------------------------------- STYLES

FrameOptionsPanelComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (FrameOptionsPanelComponent);
var Wrapper = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('rfecls', 'Wrapper');

var TopSection = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1vnvjau', 'TopSection');

var Details = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('16woy02', 'Details');

var Thumbnail = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItemBackground).div('6u8g0p', 'Thumbnail');

var ThumbnailImage = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('7r0ke8', 'ThumbnailImage');

var DetailsContainer = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1trlo6v', 'DetailsContainer');

var Title = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('w9mc0y', 'Title');

var ReplaceButton = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1rhky7p', 'ReplaceButton');

var ColorSelection = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ColorSelectionComponent"])('1ouwzwk', 'ColorSelection');

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_controls_component__ = __webpack_require__(61);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var OverlayControls = function (_BaseControls) {
  _inherits(OverlayControls, _BaseControls);

  function OverlayControls() {
    _classCallCheck(this, OverlayControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Gets called when an operation has been removed. If it is the same operation that
   * this control belongs to, it switches back to the overview, leaving this control
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  OverlayControls.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    var currentOperation = this.sharedState.get('operation');
    if (operation === currentOperation) {
      this._onEnter();
    }
  };

  /**
   * Is called when a control is entered
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Object[]} [overlays = []]
   * @property {Boolean} [replaceOverlays = false]
   * @property {String[]} [availableOverlays = null]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */


  /**
   * A unique identifier for these controls
   * @type {String}
   */


  OverlayControls.prototype._onEnter = function _onEnter() {
    var editor = this.context.editor;

    var operationExistedBeforeEntering = editor.operations.exists('overlay');
    var operation = editor.operations.getOrCreate('overlay');
    var initialOptions = operation.serializeOptions();
    delete initialOptions.enabled;

    this.sharedState.set({
      operation: operation, initialOptions: initialOptions, operationExistedBeforeEntering: operationExistedBeforeEntering
    });
  };

  /**
   * Is called when a control is left
   */


  OverlayControls.prototype._onLeave = function _onLeave() {
    var editor = this.context.editor;
    var _sharedState$state = this.sharedState.state,
        operation = _sharedState$state.operation,
        initialOptions = _sharedState$state.initialOptions,
        operationExistedBeforeEntering = _sharedState$state.operationExistedBeforeEntering;

    var optionsChanged = !operation.optionsEqual(initialOptions);

    // Nothing changed? Then we're done here.
    if (!optionsChanged) {
      return;
    }

    this.addHistoryItem({
      type: 'global',
      operation: operation.constructor.identifier,
      options: initialOptions,
      existent: operationExistedBeforeEntering,
      undo: function undo() {
        if (!operationExistedBeforeEntering) return;
        var operation = editor.operations.getOrCreate('overlay');
        operation.setImage(initialOptions.image);
      }
    });
  };

  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */


  OverlayControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('overlay') && editor.isToolEnabled('overlay');
  };

  return OverlayControls;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"]);

OverlayControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
OverlayControls.getPreloadAssets = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].getPreloadAssets;
OverlayControls.identifier = 'overlay';
OverlayControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_1__overlay_controls_component__["a" /* default */];
OverlayControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseControls"].canvasControlsComponent;
OverlayControls.iconPath = 'editor/controls/overlay/icon.png';
OverlayControls.activeIconPath = 'editor/controls/overlay/icon-active.png';
OverlayControls.requiredOperations = ['overlay'];
OverlayControls.defaultOptions = {
  overlays: [],
  replaceOverlays: false,
  availableOverlays: null };
/* harmony default export */ __webpack_exports__["default"] = (OverlayControls);


__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default.a.Controls.OverlayControls = OverlayControls;

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_loaders_image_loader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_async_promise_queue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_list_item_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blend_modes__ = __webpack_require__(13);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var PlainControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItem,
    PlainControlItemBackground = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItemBackground,
    ControlItemTitle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle;


var test = ("production") === 'test';

var OverlayControlsComponent = function (_ControlsComponent) {
  _inherits(OverlayControlsComponent, _ControlsComponent);

  function OverlayControlsComponent() {
    _classCallCheck(this, OverlayControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_onOperationUpdated');

    var _this$context = _this.context,
        ui = _this$context.ui,
        theme = _this$context.theme;


    _this._thumbnailLoadQueue = new __WEBPACK_IMPORTED_MODULE_2_shared_async_promise_queue__["a" /* default */](1, Infinity, theme.listItemSlideInDelay);
    _this._thumbnailsLoaded = {};
    _this._overlayManager = new __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["OverlayManager"](ui, _this.props.options);

    _this._events = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated);

    _this.state = {};
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked immediately after a component is mounted
   */


  OverlayControlsComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    _ControlsComponent.prototype.componentDidMount.call(this);
    var overlays = this._overlayManager.getOverlays();
    overlays.forEach(function (overlay) {
      _this2._thumbnailLoadQueue.add(function () {
        return __WEBPACK_IMPORTED_MODULE_1_shared_loaders_image_loader__["a" /* default */].load(_this2._getAssetPath(overlay.thumbnail)).then(function (image) {
          _this2._thumbnailsLoaded[overlay.identifier] = image;
          _this2.forceUpdate();
        });
      });
    });
  };

  /**
   * Gets called before this component is unmounted
   */


  OverlayControlsComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _ControlsComponent.prototype.componentWillUnmount.call(this);
    this._thumbnailLoadQueue.dispose();
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Gets called when an operation has been updated
   * @param  {Operation} operation
   * @private
   */


  OverlayControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    // The undo button might change this operation's selected filter or intensity.
    // Update the component to reflect the change
    if (operation === this.getSharedState('operation')) {
      this.forceUpdate();
    }
  };

  OverlayControlsComponent.prototype._onBeforeBlendModeChange = function _onBeforeBlendModeChange() {
    this.props.controls.registerLocalHistoryChange('overlay-blendmode', false);
  };

  /**
   * Gets called when a filter item is clicked
   * @param {Object} overlay
   * @private
   */


  OverlayControlsComponent.prototype._onItemClick = function _onItemClick(overlay) {
    var _this3 = this;

    this.props.controls.registerLocalHistoryChange('overlay-image', false);

    var editor = this.context.editor;

    var operation = this.getSharedState('operation');

    if (!overlay) {
      operation.set({
        image: null,
        identifier: null,
        alpha: 1
      });
      editor.render();
      return this.forceUpdate();
    }

    if (overlay.identifier === operation.getIdentifier()) return;

    var imagePath = this._getAssetPath(overlay.image);
    var blendMode = __WEBPACK_IMPORTED_MODULE_4__blend_modes__["a" /* default */][overlay.blendMode];

    var loadingModal = void 0;
    var loadTimeout = setTimeout(function () {
      loadingModal = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayLoading(_this3._t('loading.loading'));
    }, 100);

    __WEBPACK_IMPORTED_MODULE_1_shared_loaders_image_loader__["a" /* default */].load(imagePath).then(function (image) {
      if (loadingModal) loadingModal.close();
      if (loadTimeout) {
        clearTimeout(loadTimeout);
        loadTimeout = null;
      }

      operation.set({
        identifier: overlay.identifier,
        image: image,
        blendMode: blendMode,
        alpha: typeof overlay.intensity === 'undefined' ? 1 : overlay.intensity
      });
      editor.render();
      _this3.forceUpdate();
    });
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the list items
   * @return {React.Element[]}
   * @private
   */


  OverlayControlsComponent.prototype._renderListItems = function _renderListItems() {
    var _this4 = this;

    var operation = this.getSharedState('operation');
    var overlays = this._overlayManager.getOverlays();
    return overlays.map(function (overlay) {
      return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_3__overlay_list_item_component__["a" /* default */], {
        key: overlay.identifier,
        overlay: overlay,
        selected: operation.getIdentifier() === overlay.identifier,
        visible: !!_this4._thumbnailsLoaded[overlay.identifier],
        onClick: _this4._onItemClick.bind(_this4, overlay),
        onBeforeBlendModeChange: _this4._onBeforeBlendModeChange.bind(_this4, overlay) });
    });
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  OverlayControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-overlayControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this control's content
   * @return {React.Element}
   */


  OverlayControlsComponent.prototype._renderContent = function _renderContent() {
    var _this5 = this;

    var operation = this.getSharedState('operation');
    var noneItemActive = !operation.getIdentifier();

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
      {
        direction: 'vertical',
        innerRef: function innerRef(el) {
          _this5._scrollbar = el;
        } },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        List,
        null,
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          NoneItem,
          { onClick: this._onItemClick.bind(this, null) },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            NoneItemBackground,
            { selected: noneItemActive },
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
              ItemTitle,
              null,
              this._t('editor.controls.overlay.overlays.none')
            )
          )
        ),
        this._renderListItems()
      )
    );
  };

  return OverlayControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"]);

OverlayControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
OverlayControlsComponent.propTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].propTypes;
OverlayControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (OverlayControlsComponent);


var List = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].ul('9uviv9', 'List');

var NoneItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItem).div('1sgdmny', 'NoneItem');

var NoneItemBackground = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItemBackground).div('yogtp1', 'NoneItemBackground');

var ItemTitle = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).span('5krmrh', 'ItemTitle');

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_blending_control_component__ = __webpack_require__(63);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var ControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItem,
    ControlItemActiveOverlay = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemActiveOverlay,
    ControlItemTitle = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle;

var test = ("production") === 'test';

var OverlayListItemComponent = function (_SharedStateComponent) {
  _inherits(OverlayListItemComponent, _SharedStateComponent);

  function OverlayListItemComponent() {
    _classCallCheck(this, OverlayListItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    _this.state = {
      hovered: false
    };

    _this._bindAll('_onBlendModeChange', '_onAlphaChange');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  OverlayListItemComponent.prototype._onBlendModeChange = function _onBlendModeChange(newBlendMode) {
    this.props.onBeforeBlendModeChange && this.props.onBeforeBlendModeChange();

    var editor = this.context.editor;

    var operation = this.getSharedState('operation');
    operation.setBlendMode(newBlendMode);
    editor.render();
    this.forceUpdate();
  };

  OverlayListItemComponent.prototype._onAlphaChange = function _onAlphaChange(alpha) {
    var editor = this.context.editor;

    var operation = this.getSharedState('operation');
    operation.setAlpha(alpha);
    editor.render();
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Invoked before rendering when new props or state are being received
   * @param {Object} nextProps
   * @param {Object} nextState
   * @return {Boolean}
   */


  OverlayListItemComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.selected !== nextProps.selected || this.props.visible !== nextProps.visible || this.state.hovered !== nextState.hovered || this.props.overlay !== nextProps.overlay) {
      return true;
    }

    if (this.props.intensity !== nextProps.intensity) {
      if (nextProps.selected) {
        return true;
      }
    }

    return false;
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  OverlayListItemComponent.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        lastChild = _props.lastChild,
        onClick = _props.onClick,
        selected = _props.selected,
        visible = _props.visible,
        overlay = _props.overlay;

    var operation = this.getSharedState('operation');
    var alpha = operation.getAlpha();

    var itemProps = { lastChild: lastChild, onClick: onClick, visible: visible };
    itemProps.style = {
      backgroundImage: 'url(\'' + this._getAssetPath(overlay.thumbnail) + '\')'
    };
    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      Item,
      _extends({}, itemProps, {
        className: test ? 'js-overlay' : undefined,
        animated: true,
        innerRef: function innerRef(el) {
          _this2._container = el;
        },
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ hovered: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ hovered: false });
        } }),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        ItemContainer,
        {
          selected: selected },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
          { active: !selected },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            ItemContent,
            null,
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
              ItemTitle,
              { hovered: this.state.hovered },
              this._t('editor.controls.overlay.overlays.' + overlay.identifier) || overlay.defaultName
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
          { active: selected },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
            ItemContent,
            null,
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
              BlendingLabel,
              null,
              'Blending'
            ),
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(BlendingControl, {
              value: operation.getBlendMode(),
              onChange: this._onBlendModeChange }),
            selected && __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
              Slider,
              null,
              __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SliderComponent"], {
                minValue: 0,
                maxValue: 1,
                valueUnit: '',
                middleDot: false,
                value: alpha,
                onChange: this._onAlphaChange })
            ),
            __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Overlay, { rendered: true, visible: true })
          )
        )
      )
    );
  };

  /**
   * Returns this component's container
   * @return {React.Element}
   */


  _createClass(OverlayListItemComponent, [{
    key: 'container',
    get: function get() {
      return this._container;
    }
  }]);

  return OverlayListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

OverlayListItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (OverlayListItemComponent);


var Item = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItem).div('193vjnw', {
  lastChild: '229bd5'
}, 'Item');

var Slider = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('12dmntm', 'Slider');

var ItemContainer = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('1m161zg', 'ItemContainer');

var ItemTitle = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).span('120drhm', 'ItemTitle');

var BlendingLabel = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ItemTitle)('1kbikta', 'BlendingLabel');

var ItemContent = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('tj7k39', {
  rendered: 'cuo4v2',
  visible: '82svov'
}, 'ItemContent');

var Overlay = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(ControlItemActiveOverlay).div('120drhm', 'Overlay');
var BlendingControl = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(__WEBPACK_IMPORTED_MODULE_1__overlay_blending_control_component__["a" /* default */])('ii685b', 'BlendingControl');

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blend_modes__ = __webpack_require__(13);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */





var ControlItemTitle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsStyles"].ControlItemTitle;

var BlendModeById = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].flipObject(__WEBPACK_IMPORTED_MODULE_2__blend_modes__["a" /* default */]);

var OverlayBlendingControlComponent = function (_BaseComponent) {
  _inherits(OverlayBlendingControlComponent, _BaseComponent);

  function OverlayBlendingControlComponent() {
    _classCallCheck(this, OverlayBlendingControlComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onPreviousClick', '_onNextClick');
    return _this;
  }

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks the left arrow
   * @param {Event} e
   * @private
   */


  OverlayBlendingControlComponent.prototype._onPreviousClick = function _onPreviousClick(e) {
    e.preventDefault();
    e.stopPropagation();

    var blendModes = Object.keys(BlendModeById);
    var index = blendModes.indexOf(this.props.value.toString());
    var newIndex = (index + blendModes.length - 1) % blendModes.length;
    var newBlendMode = parseInt(blendModes[newIndex], 10);
    this.props.onChange && this.props.onChange(newBlendMode);
  };

  /**
   * Invoked when the user clicks the right arrow
   * @param {Event} e
   * @private
   */


  OverlayBlendingControlComponent.prototype._onNextClick = function _onNextClick(e) {
    e.preventDefault();
    e.stopPropagation();

    var blendModes = Object.keys(BlendModeById);
    var index = blendModes.indexOf(this.props.value.toString());
    var newIndex = (index + blendModes.length + 1) % blendModes.length;
    var newBlendMode = parseInt(blendModes[newIndex], 10);
    this.props.onChange && this.props.onChange(newBlendMode);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  OverlayBlendingControlComponent.prototype.render = function render() {
    var leftArrowStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/overlay/arrow-left.png', true) + '\')'
    };
    var rightArrowStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/overlay/arrow-right.png', true) + '\')'
    };

    var blendMode = this.props.value;
    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      BlendingControlContainer,
      { styles: this.props.styles },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Arrow, { onClick: this._onPreviousClick, style: leftArrowStyle }),
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        Label,
        null,
        this._t('editor.controls.overlay.blendModes.' + BlendModeById[blendMode])
      ),
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Arrow, { onClick: this._onNextClick, style: rightArrowStyle })
    );
  };

  return OverlayBlendingControlComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseComponent"]);

OverlayBlendingControlComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (OverlayBlendingControlComponent);


var BlendingControlContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('15zte1z', 'BlendingControlContainer');
OverlayBlendingControlComponent.RootElement = BlendingControlContainer;

var Label = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(ControlItemTitle).div('1v7ogyl', 'Label');

var Arrow = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1v32l0l', 'Arrow');

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_canvas_controls_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transform_controls_component__ = __webpack_require__(67);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var MIN_DIMENSIONS = new Vector2(50, 50);

var TransformControls = function (_BaseControls) {
  _inherits(TransformControls, _BaseControls);

  function TransformControls() {
    _classCallCheck(this, TransformControls);

    return _possibleConstructorReturn(this, _BaseControls.apply(this, arguments));
  }

  /**
   * Is called when a control is entered
   */


  /**
   * The operations required for this control to work properly
   * @type {Array}
   */


  /**
   * The icon path of this control
   * @type {String}
   */


  /**
   * The controls component for these controls
   * @type {React.Component}
   */
  TransformControls.prototype._onEnter = function _onEnter() {
    var editor = this.context.editor;


    var transformOperationExistedBeforeEntering = editor.operations.exists('transform');
    var transformOperation = editor.operations.getOrCreate('transform');
    transformOperation.setEnabled(false, false);

    var orientationOperationExistedBeforeEntering = editor.operations.exists('orientation');
    var orientationOperation = editor.operations.getOrCreate('orientation');

    var defaultOptions = {
      end: new Vector2(1, 1),
      rotation: 0,
      start: new Vector2(0, 0),
      textureScale: 1
    };

    var inputDimensions = transformOperation.getInputDimensions(false);
    var initialDimensions = transformOperation.getNewDimensions(inputDimensions);

    var initialTransformOptions = defaultOptions;
    var _initialTransformOpti = initialTransformOptions,
        start = _initialTransformOpti.start,
        end = _initialTransformOpti.end,
        textureScale = _initialTransformOpti.textureScale,
        rotation = _initialTransformOpti.rotation;

    if (transformOperationExistedBeforeEntering) {
      initialTransformOptions = transformOperation.serializeOptions();
      start = initialTransformOptions.start;
      end = initialTransformOptions.end;
      rotation = initialTransformOptions.rotation;
      textureScale = initialTransformOptions.textureScale;

      delete initialTransformOptions.enabled;

      // Convert operation options to our UI options
      var finalScale = transformOperation.calculateScale(rotation);
      var _inputDimensions = transformOperation.getInputDimensions(false);
      var cos = Math.cos(rotation);
      var sin = Math.sin(rotation);

      var halfRelativeSize = end.clone().subtract(start).divide(2);
      var middleInPixels = start.clone().add(halfRelativeSize).multiply(_inputDimensions);

      var middleDistanceFromCenter = middleInPixels.subtract(_inputDimensions.clone().multiply(0.5));

      // Rotate and scale the middle back
      var newMiddleDistanceFromCenter = new Vector2(middleDistanceFromCenter.x * cos - middleDistanceFromCenter.y * sin, middleDistanceFromCenter.x * sin + middleDistanceFromCenter.y * cos).multiply(finalScale);

      var newMiddleInPixels = _inputDimensions.clone().multiply(0.5).add(newMiddleDistanceFromCenter);

      var newRelativeMiddle = newMiddleInPixels.clone().divide(_inputDimensions);

      var newStart = newRelativeMiddle.clone().subtract(halfRelativeSize.clone().multiply(finalScale));
      var newEnd = newRelativeMiddle.clone().add(halfRelativeSize.clone().multiply(finalScale));

      start = newStart;
      end = newEnd;
    }

    // This makes sure that all operations listening for a transform are notified
    editor.broadcastTransform(transformOperation, defaultOptions);

    // Update editor rotation and scale
    var initialOrientationOptions = orientationOperation.serializeOptions();
    editor.setSpriteScale(transformOperation.calculateScale());
    editor.setRotation(rotation);

    // Show the whole image
    transformOperation.set(defaultOptions, transformOperationExistedBeforeEntering);

    var exportEnabled = editor.features.isEnabledByOptions('export');
    editor.zoom.auto(true, false, function () {
      // Disable zoom and drag while we're transformping
      editor.features.disable('zoom', 'drag', 'export');
    }, false);

    this.sharedState.set({
      transformOperation: transformOperation,
      initialTransformOptions: initialTransformOptions,
      newTransformOptions: {
        start: start, end: end, rotation: rotation, textureScale: textureScale
      },
      transformOperationExistedBeforeEntering: transformOperationExistedBeforeEntering,
      exportEnabled: exportEnabled,

      orientationOperation: orientationOperation,
      initialOrientationOptions: initialOrientationOptions,
      newOrientationOptions: __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].cloneOptions(initialOrientationOptions),
      orientationOperationExistedBeforeEntering: orientationOperationExistedBeforeEntering,

      start: Vector2.fromObject(start),
      end: Vector2.fromObject(end),
      rotation: rotation,
      orientationRotation: orientationOperation.getRotation(),
      flipVertically: orientationOperation.getFlipVertically(),
      flipHorizontally: orientationOperation.getFlipHorizontally(),
      initialDimensions: initialDimensions,
      initialRatio: transformOperation._ratio || null
    });
  };

  /**
   * Invoked before a control is left. Can control whether or not the control is left.
   * @return {Promise.<Boolean>}
   */


  /**
   * The default options for this control
   * @type {Object}
   * @property {Object[]} [ratios = []]
   * @property {Boolean} [replaceRatios = false]
   * @property {String[]} [availableRatios = null]
   * @property {Boolean} [enableRotation = true]
   * @property {Boolean} [enableStraighten = true]
   * @property {Boolean} [enableFlip = true]
   */


  /**
   * The active icon path of this control
   * @type {String}
   */


  /**
   * The canvas component for these controls
   * @type {React.Component}
   */


  /**
   * A unique identifier for these controlsComponent
   * @type {String}
   */


  TransformControls.prototype._onBeforeLeave = function _onBeforeLeave() {
    var _this2 = this;

    var t = this.context.ui.translate.bind(this.context.ui);
    return new Promise(function (resolve, reject) {
      var changesDone = _this2.sharedState.get('changesDone');
      var changesAccepted = _this2.sharedState.get('changesAccepted');

      if (changesDone && !changesAccepted) {
        var warningModal = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ModalManager"].instance.displayWarning(t('warnings.discardChanges.title'), t('warnings.discardChanges.text'), [t('warnings.discardChanges.buttons.cancel'), t('warnings.discardChanges.buttons.discard')]);

        warningModal.on('button', function (buttonIndex) {
          if (buttonIndex === 0) return resolve({ leave: false });
          if (buttonIndex === 1) {
            return resolve({
              leave: true,
              data: {
                discard: true
              }
            });
          }
        });
        return;
      }

      resolve({ leave: true });
    });
  };

  /**
   * Is called when a control is left
   */


  TransformControls.prototype._onLeave = function _onLeave(_ref) {
    var discard = _ref.discard;
    var editor = this.context.editor;

    var transformOperation = this.sharedState.get('transformOperation');
    var orientationOperation = this.sharedState.get('orientationOperation');

    if (discard) {
      // Discard all changes by setting transform and orientation options to the same
      // values their initial values
      var initialOrientationOptions = this.sharedState.get('initialOrientationOptions');
      orientationOperation.set(initialOrientationOptions);

      var initialTransformOptions = this.sharedState.get('initialTransformOptions');
      editor.broadcastTransform(transformOperation, initialTransformOptions);
      transformOperation.set(initialTransformOptions);
      transformOperation.setTextureScale(this._calculateTextureScale());
      transformOperation.setEnabled(true);
    } else {
      // Remove orientation operation if it's redundant
      var defaultOptions = {
        rotation: 0,
        flipVertically: false,
        flipHorizontally: false
      };
      if (orientationOperation.optionsEqual(defaultOptions)) {
        editor.operations.remove(orientationOperation, false);
      }

      var newTransformOptions = this.sharedState.get('newTransformOptions');
      var start = newTransformOptions.start,
          end = newTransformOptions.end,
          textureScale = newTransformOptions.textureScale,
          rotation = newTransformOptions.rotation;

      textureScale = this._calculateTextureScale();
      start = start.clone();
      end = end.clone();

      var finalScale = transformOperation.calculateScale(rotation);
      var inputDimensions = transformOperation.getInputDimensions(false);
      var cos = Math.cos(-rotation);
      var sin = Math.sin(-rotation);

      var halfRelativeSize = end.clone().subtract(start).divide(2);
      var middleInPixels = start.clone().add(halfRelativeSize).multiply(inputDimensions);

      var middleDistanceFromCenter = middleInPixels.subtract(inputDimensions.clone().multiply(0.5));

      // Rotate and scale the middle back
      var newMiddleDistanceFromCenter = new Vector2(middleDistanceFromCenter.x * cos - middleDistanceFromCenter.y * sin, middleDistanceFromCenter.x * sin + middleDistanceFromCenter.y * cos).divide(finalScale);

      var newMiddleInPixels = inputDimensions.clone().multiply(0.5).add(newMiddleDistanceFromCenter);

      var newRelativeMiddle = newMiddleInPixels.clone().divide(inputDimensions);

      var newStart = newRelativeMiddle.clone().subtract(halfRelativeSize.clone().divide(finalScale));
      var newEnd = newRelativeMiddle.clone().add(halfRelativeSize.clone().divide(finalScale));

      var defaultTransformOptions = {
        start: new Vector2(0, 0),
        end: new Vector2(1, 1),
        rotation: 0,
        textureScale: 1
      };

      var newOptions = {
        start: newStart, end: newEnd, textureScale: textureScale, rotation: rotation
      };

      if (newOptions.start.equals(defaultTransformOptions.start) && newOptions.end.equals(defaultTransformOptions.end) && newOptions.rotation === defaultTransformOptions.rotation && newOptions.textureScale === defaultTransformOptions.textureScale) {
        editor.operations.remove(transformOperation, false);
      } else {
        editor.broadcastTransform(transformOperation, newOptions);
        transformOperation.set(newOptions);
        transformOperation.setTextureScale(this._calculateTextureScale());
        transformOperation.setEnabled(true);
      }

      // Add history items for both orientation and transform
      var historyItems = this._getHistoryItems();
      if (historyItems.length) {
        // Make sure we reset to default zoom after undo
        var lastHistoryItem = historyItems[historyItems.length - 1];
        var originalUndo = lastHistoryItem.undo;
        lastHistoryItem.undo = function () {
          if (originalUndo) originalUndo.apply(undefined, arguments);
          editor.zoom.auto(true, true);
        };
        this.addHistoryItems(historyItems);
      }
    }

    // Reset editor
    editor.setRotation(0);
    editor.setSpriteScale(1);
    editor.features.enable('zoom', 'drag', 'export');
    if (this.sharedState.get('exportEnabled')) {
      editor.features.enable('export');
    }
    editor.zoom.auto(true);
  };

  /**
   * Gets called when an operation has been removed. If it is the same operation that
   * this control belongs to, it switches back to the overview, leaving this control
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  TransformControls.prototype._onOperationRemoved = function _onOperationRemoved(operation) {}
  // void


  /**
   * Calculates the texture scale using the current settings
   * @return {Number}
   * @private
   */
  ;

  TransformControls.prototype._calculateTextureScale = function _calculateTextureScale() {
    var transformOperation = this.sharedState.get('transformOperation');
    var ratio = this.sharedState.get('ratio');
    if (!ratio || !ratio.dimensions) {
      return 1;
    }

    var start = this.sharedState.get('start');
    var end = this.sharedState.get('end');

    var size = end.clone().subtract(start);
    var transformDimensions = transformOperation.getInputDimensions(false).multiply(size);
    return ratio.dimensions.x / transformDimensions.x;
  };

  /**
   * Returns the history items that should be pushed on the history stack
   * @return {Object[]}
   * @private
   */


  TransformControls.prototype._getHistoryItems = function _getHistoryItems() {
    var historyItems = [];

    var transformHistoryItem = this._getTransformHistoryItem();
    if (transformHistoryItem) {
      historyItems.push(transformHistoryItem);
    }

    var orientationHistoryItem = this._getOrientationHistoryItem();
    if (orientationHistoryItem) {
      historyItems.push(orientationHistoryItem);
    }

    return historyItems;
  };

  /**
   * Returns the history item for the transform operation
   * @return {Object}
   * @private
   */


  TransformControls.prototype._getTransformHistoryItem = function _getTransformHistoryItem() {
    // @FIXME Only add history item if necessary.
    // Necessary means: If initial options do not equal newTransformOptions
    var editor = this.context.editor;

    var newTransformOptions = this.sharedState.get('newTransformOptions');
    var transformOperation = this.sharedState.get('transformOperation');
    var initialTransformOptions = this.sharedState.get('initialTransformOptions');
    var transformOperationExistedBeforeEntering = this.sharedState.get('transformOperationExistedBeforeEntering');

    var optionsChanged = !initialTransformOptions.start.equals(newTransformOptions.start) || !initialTransformOptions.end.equals(newTransformOptions.end) || initialTransformOptions.rotation !== newTransformOptions.rotation || initialTransformOptions.textureScale !== newTransformOptions.textureScale;
    if (optionsChanged) {
      return {
        type: 'global',
        operation: transformOperation.constructor.identifier,
        options: initialTransformOptions,
        existent: transformOperationExistedBeforeEntering,
        data: {
          ratio: this.sharedState.get('initialRatio')
        },
        undoBefore: function undoBefore(operation, newOptions) {
          editor.broadcastTransform(operation, newOptions);
        }
      };
    }
  };

  /**
   * Returns the history item for the orientation operation
   * @return {Object}
   * @private
   */


  TransformControls.prototype._getOrientationHistoryItem = function _getOrientationHistoryItem() {
    var editor = this.context.editor;

    var orientationOperation = this.sharedState.get('orientationOperation');
    var initialOrientationOptions = this.sharedState.get('initialOrientationOptions');
    var orientationOperationExistedBeforeEntering = this.sharedState.get('orientationOperationExistedBeforeEntering');
    if (!orientationOperation.optionsEqual(initialOrientationOptions)) {
      return {
        type: 'global',
        operation: orientationOperation.constructor.identifier,
        options: initialOrientationOptions,
        existent: orientationOperationExistedBeforeEntering,
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
      };
    }
  };

  /**
   * Fixes the given start and end coordinates to represent a valid transform. The `horizontalSide`
   * and `verticalSide` flags indicate which corner has been dragged.
   * @param  {PhotoEditorSDK.Math.Vector2} start
   * @param  {PhotoEditorSDK.Math.Vector2} end
   * @param  {String} horizontalSide
   * @param  {String} verticalSide
   */


  TransformControls.prototype.fixTransform = function fixTransform(start, end, horizontalSide, verticalSide) {
    var editor = this.context.editor;

    var transformOperation = this.sharedState.get('transformOperation');
    var imageDimensions = transformOperation.getInputDimensions(false);

    var _sharedState$get = this.sharedState.get('ratio'),
        ratio = _sharedState$get.ratio,
        dimensions = _sharedState$get.dimensions;

    if (dimensions && !ratio) {
      ratio = dimensions.x / dimensions.y;
    }

    var ratioFraction = void 0;
    if (ratio !== '*') {
      ratioFraction = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].findIntegerFraction(ratio);
    }

    // Maximum transform size (relative)
    var maxTransformSize = new Vector2();
    maxTransformSize.x = horizontalSide === 'left' ? end.x : 1.0 - start.x;
    maxTransformSize.y = verticalSide === 'top' ? end.y : 1.0 - start.y;

    // Maximum transform size (absolute)
    var maxSize = imageDimensions.clone().multiply(maxTransformSize);

    // Current transform size (relative)
    var transformSize = end.clone().subtract(start);

    // Current transform size (absolute)
    var size = transformSize.clone().multiply(imageDimensions);

    // The minimum dimensions
    var minUIDimensions = MIN_DIMENSIONS.clone().divide(editor.zoom.targetLevel);
    var minDimensions = new Vector2(Math.min(minUIDimensions.x, imageDimensions.x * 0.1), Math.min(minUIDimensions.y, imageDimensions.y * 0.1));
    if (ratio !== '*') {
      minDimensions.divide(ratioFraction).round().multiply(ratioFraction);
    }

    // Clamp width
    size.x = Math.min(Math.max(minDimensions.x, size.x), maxSize.x);
    if (ratio !== '*') {
      // This makes sure we snap to a size that exactly fits our ratio
      var maxMultiplier = Math.floor(imageDimensions.x / ratioFraction.x);
      size.x = Math.max(1, Math.min(maxMultiplier, Math.round(size.x / ratioFraction.x))) * ratioFraction.x;

      // Calculate new height by width
      size.y = size.x / ratio;
    }

    // Clamp height
    size.y = Math.min(Math.max(minDimensions.y, size.y), maxSize.y);
    if (ratio !== '*') {
      // Calculate new width by height
      size.x = size.y * ratio;
    }

    // Recalculate start and end using new size
    var relativeSize = size.divide(imageDimensions);
    if (verticalSide === 'top') {
      start.y = end.y - relativeSize.y;
    } else {
      end.y = start.y + relativeSize.y;
    }
    if (horizontalSide === 'left') {
      start.x = end.x - relativeSize.x;
    } else {
      end.x = start.x + relativeSize.x;
    }

    // Snap to full pixels (for free ratio)
    if (ratio === '*') {
      start.multiply(imageDimensions).round().divide(imageDimensions);
      end.multiply(imageDimensions).round().divide(imageDimensions);
    }

    return { start: start, end: end };
  };

  /**
   * Returns the assets that should be preloaded for this control
   * @param  {PhotoEditorSDK.UI.DesktopUI.Editor} editor
   * @return {String[]}
   */


  TransformControls.getPreloadAssets = function getPreloadAssets(editor) {
    var options = editor.getOptions();
    var transformOptions = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].defaults(options.editor.controlsOptions.transform, this.defaultOptions);

    var assets = ['editor/controls/transform/dimensions-cross.png', 'editor/controls/transform/degree-slider.png', 'editor/controls/transform/flip.png', 'editor/controls/transform/lock.png', 'editor/controls/transform/rotate.png'];

    // Add ratios
    var ratioManager = new __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["TransformRatioManager"](transformOptions);
    var categories = ratioManager.getCategories();
    categories.forEach(function (_ref2) {
      var ratios = _ref2.ratios;

      ratios.forEach(function (_ref3) {
        var identifier = _ref3.identifier;

        assets.push('editor/controls/transform/ratios/' + identifier + '-default.png', 'editor/controls/transform/ratios/' + identifier + '-hover.png', 'editor/controls/transform/ratios/' + identifier + '-active.png');
      });
    });

    return assets;
  };

  /**
   * Checks if this control is enabled
   * @return {Boolean}
   */


  TransformControls.isEnabled = function isEnabled(editor) {
    return editor.isToolAllowed('transform') && editor.isToolEnabled('transform');
  };

  return TransformControls;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"]);

TransformControls.clickAtPosition = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["BaseControls"].clickAtPosition;
TransformControls.identifier = 'transform';
TransformControls.controlsComponent = __WEBPACK_IMPORTED_MODULE_3__transform_controls_component__["a" /* default */];
TransformControls.canvasControlsComponent = __WEBPACK_IMPORTED_MODULE_2__transform_canvas_controls_component__["a" /* default */];
TransformControls.iconPath = 'editor/controls/transform/icon.png';
TransformControls.activeIconPath = 'editor/controls/transform/icon-active.png';
TransformControls.requiredOperations = ['transform', 'orientation'];
TransformControls.defaultOptions = {
  categories: [],
  replaceCategories: false,
  availableRatios: null,
  enableRotation: true,
  enableStraighten: true,
  enableFlip: true };
/* harmony default export */ __webpack_exports__["default"] = (TransformControls);


__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default.a.Controls.TransformControls = TransformControls;

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transform_rotation_slider_component__ = __webpack_require__(66);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var test = ("production") === 'test';

var TransformCanvasControlsComponent = function (_CanvasControlsCompon) {
  _inherits(TransformCanvasControlsComponent, _CanvasControlsCompon);

  function TransformCanvasControlsComponent() {
    var _this$_events;

    _classCallCheck(this, TransformCanvasControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _CanvasControlsCompon.call.apply(_CanvasControlsCompon, [this].concat(args)));

    _this._bindAll('_onZoomDone', '_onCornerDrag', '_onCenterDragStart', '_onCenterDrag', '_onRotationChange', '_onOperationUpdated', '_onOperationRemoved', '_onAcceptClick', '_onAcceptMouseDown');

    _this._events = (_this$_events = {}, _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_REMOVED, _this._onOperationRemoved), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.ZOOM_DONE, _this._onZoomDone), _this$_events);

    _this.state = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].extend(_this.state, {
      visible: false
    });
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Checks if the component should change from the given state
   * @param  {Object} oldState
   * @param  {Object} newState
   * @return {Boolean}
   */


  TransformCanvasControlsComponent.prototype.shouldSharedComponentUpdate = function shouldSharedComponentUpdate(oldState, newState) {
    return !oldState.start.equals(newState.start) || !oldState.end.equals(newState.end) || oldState.orientationRotation !== newState.orientationRotation || oldState.ratio !== newState.ratio || oldState.changesDone !== newState.changesDone;
  };

  /**
   * Gets called when the shared state did change
   * @param {Object} oldState
   * @param {Object} newState
   */


  TransformCanvasControlsComponent.prototype.sharedStateDidChange = function sharedStateDidChange(oldState, newState) {
    var oldRatio = oldState.ratio && oldState.ratio.ratio;
    var newRatio = newState.ratio && newState.ratio.ratio;
    if (oldRatio !== newRatio) {
      this._calculateRatioFraction();
    }
  };

  TransformCanvasControlsComponent.prototype.sharedComponentWillUpdate = function sharedComponentWillUpdate(oldState, newState) {
    if (oldState.orientationRotation !== newState.orientationRotation) {
      this._updateTransformAreaStyles();
    }
  };

  /**
   * Gets called after the component has been mounted
   */


  TransformCanvasControlsComponent.prototype.componentDidMount = function componentDidMount() {
    _CanvasControlsCompon.prototype.componentDidMount.call(this);

    this._updateTransformAreaStyles();
    this._calculateRatioFraction();

    this.forceUpdate();
  };

  /**
   * Invoked immediately before rendering when new props or state are being received
   */


  TransformCanvasControlsComponent.prototype.componentWillUpdate = function componentWillUpdate() {
    this._updateTransformAreaStyles();
  };

  /**
   * Invoked immediately after updating occurs
   */


  TransformCanvasControlsComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    if (!this._transformContainerRect && this.getSharedState('ratio')) {
      this._updateTransformAreaStyles();
      this.forceUpdate();
    }
  };

  /**
   * Invoked when the component is about to be unmounted
   */


  TransformCanvasControlsComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _CanvasControlsCompon.prototype.componentWillUnmount.call(this);

    if (this._zoomAFRequest) {
      Object(__WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__["a" /* cancelAnimationFrame */])(this._zoomAFRequest);
      this._zoomAFRequest = null;
    }
  };

  // -------------------------------------------------------------------------- CALCULATION

  /**
   * Calculates the closest ratio fraction for the current ratio
   * @private
   */


  TransformCanvasControlsComponent.prototype._calculateRatioFraction = function _calculateRatioFraction() {
    var ratio = this.getSharedState('ratio');
    if (!ratio || ratio.ratio === '*') return;

    this._ratioFraction = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].findIntegerFraction(ratio.ratio);
  };

  // -------------------------------------------------------------------------- CENTER DRAGGING

  /**
   * Gets called when the user start dragging the center
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @private
   */


  TransformCanvasControlsComponent.prototype._onCenterDragStart = function _onCenterDragStart(position) {
    var operation = this.getSharedState('transformOperation');
    this._dragOptions = {
      initialStart: this.getSharedState('start').clone(),
      initialEnd: this.getSharedState('end').clone(),
      areaDimensions: this._transformContainerRect.getSize(),
      imageDimensions: operation.getInputDimensions(false)
    };
  };

  /**
   * Gets called while the user drags the center
   * @param  {PhotoEditorSDK.Math.Vector2} offset
   * @private
   */


  TransformCanvasControlsComponent.prototype._onCenterDrag = function _onCenterDrag(offset) {
    var _dragOptions = this._dragOptions,
        initialStart = _dragOptions.initialStart,
        initialEnd = _dragOptions.initialEnd,
        areaDimensions = _dragOptions.areaDimensions,
        imageDimensions = _dragOptions.imageDimensions;

    var relativeOffset = offset.clone().divide(areaDimensions);
    var size = initialEnd.clone().subtract(initialStart);

    var minStart = new Vector2(0, 0);
    var maxStart = new Vector2(1, 1).subtract(size);

    var newStart = initialStart.clone().add(relativeOffset).clamp(minStart, maxStart);
    var newEnd = newStart.clone().add(size);

    newStart.multiply(imageDimensions).floor().divide(imageDimensions);
    newEnd.multiply(imageDimensions).floor().divide(imageDimensions);

    this.props.controls.fixTransform(newStart, newEnd, 'right', 'bottom');

    var newTransformOptions = this.getSharedState('newTransformOptions');
    newTransformOptions.start = newStart;
    newTransformOptions.end = newEnd;

    this.setSharedState({
      start: newStart,
      end: newEnd,
      changesDone: this.getSharedState('changesDone') || !(initialStart.equals(newStart) && initialEnd.equals(newEnd))
    });
  };

  // -------------------------------------------------------------------------- CORNER DRAGGING

  /**
   * Gets called when the user starts dragging a corner
   * @param  {String} verticalSide
   * @param  {String} horizontalSide
   * @param  {PhotoEditorSDK.Math.Vector2} position
   * @private
   */


  TransformCanvasControlsComponent.prototype._onCornerDragStart = function _onCornerDragStart(verticalSide, horizontalSide, position) {
    var operation = this.getSharedState('transformOperation');
    this._dragOptions = {
      initialStart: this.getSharedState('start').clone(),
      initialEnd: this.getSharedState('end').clone(),
      verticalSide: verticalSide,
      horizontalSide: horizontalSide,
      areaDimensions: this._transformContainerRect.getSize(),
      imageDimensions: operation.getInputDimensions(false)
    };

    this._currentCorner = {
      vertical: verticalSide,
      horizontal: horizontalSide
    };
  };

  /**
   * Gets called while the user drags a corner
   * @param  {PhotoEditorSDK.Math.Vector2} offset
   * @private
   */


  TransformCanvasControlsComponent.prototype._onCornerDrag = function _onCornerDrag(offset) {
    var _dragOptions2 = this._dragOptions,
        initialStart = _dragOptions2.initialStart,
        initialEnd = _dragOptions2.initialEnd,
        verticalSide = _dragOptions2.verticalSide,
        horizontalSide = _dragOptions2.horizontalSide,
        areaDimensions = _dragOptions2.areaDimensions;


    var relativeOffset = offset.clone().divide(areaDimensions);

    var start = initialStart.clone();
    var end = initialEnd.clone();

    // Update start and end positions depending on dragged corner
    (verticalSide === 'top' ? start : end).y += relativeOffset.y;
    (horizontalSide === 'left' ? start : end).x += relativeOffset.x;

    this.props.controls.fixTransform(start, end, horizontalSide, verticalSide);

    var newTransformOptions = this.getSharedState('newTransformOptions');
    newTransformOptions.start = start;
    newTransformOptions.end = end;

    this.setSharedState({
      start: start,
      end: end,
      changesDone: true
    });
    this._emitEvent(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TRANSFORM_RESIZE);
  };

  // -------------------------------------------------------------------------- ROTATION

  /**
   * Gets called when the user changes the rotation (straighten)
   * @param  {Number} rotation
   * @private
   */


  TransformCanvasControlsComponent.prototype._onRotationChange = function _onRotationChange(rotation) {
    var transformOperation = this.getSharedState('transformOperation');
    var editor = this.context.editor;

    editor.setRotation(rotation);
    editor.setSpriteScale(transformOperation.calculateScale(rotation));

    var newTransformOptions = this.getSharedState('newTransformOptions');
    newTransformOptions.rotation = rotation;

    editor.render();
    this.setSharedState({
      rotation: rotation,
      changesDone: true
    });
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the user clicks the accept button
   * @param  {Event} e
   * @private
   */


  TransformCanvasControlsComponent.prototype._onAcceptClick = function _onAcceptClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.getSharedState('changesDone')) {
      return;
    }

    this.setSharedState({ changesAccepted: true });
    this.context.screen.switchToControls('default');
  };

  /**
   * Invoked when the user presses a mouse button on the accept button. We need to make sure that
   * the center drag event is not triggered
   * @param  {Event} e
   * @private
   */


  TransformCanvasControlsComponent.prototype._onAcceptMouseDown = function _onAcceptMouseDown(e) {
    e.stopPropagation();
  };

  /**
   * Gets called after a zoom has been done
   * @private
   */


  TransformCanvasControlsComponent.prototype._onZoomDone = function _onZoomDone() {
    var _this2 = this;

    this._zoomAFRequest = Object(__WEBPACK_IMPORTED_MODULE_2_shared_async_animation_frame__["b" /* requestAnimationFrame */])(function () {
      _this2._updateTransformAreaStyles();
      _this2.state.visible = true;
      _this2.forceUpdate();
      _this2._zoomAFRequest = null;
    });
  };

  /**
   * Invoked after an operation has been updated
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  TransformCanvasControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    var transformOperation = this.getSharedState('transformOperation');
    if (operation !== transformOperation) return;

    var editor = this.context.editor;

    var sdk = editor.getSDK();
    sdk.setRotation(operation.getRotation());
    sdk.setSpriteScale(operation.calculateScale());

    editor.render();
    this.setSharedState({
      rotation: operation.getRotation()
    });

    // Since we're not automatically re-rendering when the rotation changes, we need to force
    // this component to do solid
    this.forceUpdate();
  };

  /**
   * Invoked after an operation has been removed
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  TransformCanvasControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    // We can't compare against the transform operation in the shared state because this might have
    // already changed to a new instance
    if (operation.constructor.identifier === 'transform' || operation.constructor.identifier === 'orientation') {
      this.forceUpdate();
    }
  };

  /**
   * Gets called when the user taps the flip icon.
   * @param {String} direction
   * @private
   */


  TransformCanvasControlsComponent.prototype._onFlipClick = function _onFlipClick(direction) {
    var editor = this.context.editor;

    var operation = this.getSharedState('orientationOperation');

    var capitalizedDirection = direction.charAt(0).toUpperCase() + direction.slice(1) + 'ly';

    var newFlip = !this.getSharedState('flip' + capitalizedDirection);
    this.setSharedState(_defineProperty({}, 'flip' + capitalizedDirection, newFlip));
    operation.flip(direction);

    var newTransformOptions = this.getSharedState('newTransformOptions');
    var newRotation = this.getSharedState('rotation') * -1;
    editor.setRotation(newRotation);

    var start = this.getSharedState('start').clone();
    var end = this.getSharedState('end').clone();
    var tmpStart = start.clone();
    if (direction === 'horizontal') {
      start.set(1.0 - end.x, start.y);
      end.set(1.0 - tmpStart.x, end.y);
    } else if (direction === 'vertical') {
      start.set(start.x, 1.0 - end.y);
      end.set(end.x, 1.0 - tmpStart.y);
    }

    newTransformOptions.start = start;
    newTransformOptions.end = end;
    newTransformOptions.rotation = newRotation;

    this.setSharedState({
      start: start,
      end: end,
      rotation: newRotation,
      changesDone: true,
      newTransformOptions: newTransformOptions
    });

    this.forceUpdate();

    editor.broadcastFlip(direction);
    editor.render();
  };

  /**
   * Gets called when the user taps the rotate icon.
   * @private
   */


  TransformCanvasControlsComponent.prototype._onRotateClick = function _onRotateClick(direction) {
    var _this3 = this;

    var degrees = direction === 'cw' ? 90 : -90;

    var editor = this.context.editor;

    var operation = this.getSharedState('orientationOperation');
    var newRotation = (operation.getRotation() + degrees) % 360;

    operation.set({ rotation: newRotation });

    var newState = {
      orientationRotation: newRotation
    };

    var newTransformOptions = this.getSharedState('newTransformOptions');
    var ratio = this.getSharedState('ratio');
    if (ratio) {
      if (!ratio.dimensions && ratio.ratio === '*') {
        var start = this.getSharedState('start').clone();
        var end = this.getSharedState('end').clone();
        var tempStart = start.clone();
        if (direction === 'cw') {
          start.set(1.0 - end.y, tempStart.x);
          end.set(1.0 - tempStart.y, end.x);
        } else if (direction === 'ccw') {
          start.set(tempStart.y, 1.0 - end.x);
          end.set(end.y, 1.0 - tempStart.x);
        }
        newState.start = start;
        newState.end = end;

        newTransformOptions.start = start;
        newTransformOptions.end = end;

        // if (!Number.isNaN(parseInt(ratio.ratio, 10))) {
        //   ratio.ratio = 1 / ratio.ratio
        // }
      } else {
        this._emitEvent(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TRANSFORM_REAPPLY_RATIO);
        this._emitEvent(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TRANSFORM_RESIZE);
      }
    }

    this.setSharedState({
      changesDone: true,
      newTransformOptions: newTransformOptions
    });

    editor.broadcastRotate(degrees);
    editor.zoom.auto(true, true, function () {
      _this3.setSharedState(newState);
    });
  };

  // -------------------------------------------------------------------------- STYLING

  /**
   * Updates the styles for the transform area
   * @private
   */


  TransformCanvasControlsComponent.prototype._updateTransformAreaStyles = function _updateTransformAreaStyles() {
    this._transformContainerRect = this.getImageBoundingRect();
    if (this._imageContainer) {
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].styleElement(this._imageContainer, {
        left: this._transformContainerRect.x + 'px',
        top: this._transformContainerRect.y + 'px',
        width: this._transformContainerRect.width + 'px',
        height: this._transformContainerRect.height + 'px'
      });
    }
  };

  /**
   * Returns the dimension styles for the dark areas
   * @return {Object}
   * @private
   */


  TransformCanvasControlsComponent.prototype._getAreaStyles = function _getAreaStyles() {
    var imageDimensions = void 0,
        start = void 0,
        end = void 0,
        size = void 0,
        offset = void 0;
    if (this._transformContainer) {
      imageDimensions = this._transformContainerRect.getSize();
      offset = this._transformContainerRect.getPosition();
      start = this.getSharedState('start').clone().multiply(imageDimensions);
      end = this.getSharedState('end').clone().multiply(imageDimensions);
      size = end.clone().subtract(start);
    } else {
      imageDimensions = new Vector2(0, 0);
      start = new Vector2(0, 0);
      size = new Vector2(0, 0);
      offset = new Vector2(0, 0);
    }

    var center = this._getDimensionsStyles(size.x, size.y);
    return {
      topLeft: this._getDimensionsStyles(start.x + offset.x, start.y + offset.y),
      topCenter: this._getDimensionsStyles(size.x, start.y + offset.y),
      centerLeft: this._getDimensionsStyles(start.x + offset.x, size.y),
      center: { width: center.width },
      innerTransformContainer: center
    };
  };

  // -------------------------------------------------------------------------- MISC

  /**
   * Returns the dimensions style (width / height) for the given dimensions
   * @param {Number} x
   * @param {Number} y
   * @return {Object}
   * @private
   */


  TransformCanvasControlsComponent.prototype._getDimensionsStyles = function _getDimensionsStyles(x, y) {
    // Table cells and rows can't have a width / height of 0
    return {
      width: Math.max(1, x),
      height: Math.max(1, y)
    };
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component's on-canvas controls
   * @return {React.Element}
   */


  TransformCanvasControlsComponent.prototype._renderOnCanvasControls = function _renderOnCanvasControls() {
    var _this4 = this;

    var areaStyles = this._getAreaStyles();
    var disabled = !this.getSharedState('ratio');

    var acceptButtonStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/transform/accept.png', true) + '\')'
    };
    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      OnCanvasControls,
      { innerRef: function innerRef(el) {
          _this4._container = el;
        } },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        ImageContainer,
        {
          className: 'js-imageContainer', innerRef: function innerRef(el) {
            _this4._imageContainer = el;
          } },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(AcceptButton, {
          className: test ? 'js-acceptButton' : undefined,
          enabled: this.getSharedState('changesDone'),
          onClick: this._onAcceptClick,
          onMouseDown: this._onAcceptMouseDown,
          style: acceptButtonStyle })
      ),
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        OuterTransformContainer,
        {
          visible: this.state.visible,
          innerRef: function innerRef(el) {
            _this4._transformContainer = el;
          } },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          TransformRow,
          null,
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, { style: areaStyles.topLeft }),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, { style: areaStyles.topCenter }),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, null)
        ),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          TransformRow,
          null,
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, { style: areaStyles.centerLeft }),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
            {
              onStart: this._onCenterDragStart,
              onDrag: this._onCenterDrag,
              disabled: disabled },
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
              CenterTransformCell,
              { style: areaStyles.center, className: test ? 'js-transformCenterCell' : undefined, undraggable: disabled },
              !disabled && [__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
                {
                  onStart: this._onCornerDragStart.bind(this, 'top', 'left'),
                  onDrag: this._onCornerDrag,
                  key: 'topLeft' },
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Dragger, { top: true, left: true, className: test ? 'js-transformTopLeftCorner' : undefined })
              ), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
                {
                  onStart: this._onCornerDragStart.bind(this, 'top', 'right'),
                  onDrag: this._onCornerDrag,
                  key: 'topRight' },
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Dragger, { top: true, right: true, className: test ? 'js-transformTopRightCorner' : undefined })
              ), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
                {
                  onStart: this._onCornerDragStart.bind(this, 'bottom', 'left'),
                  onDrag: this._onCornerDrag,
                  key: 'bottomLeft' },
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Dragger, { bottom: true, left: true, className: test ? 'js-transformBottomLeftCorner' : undefined })
              ), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["DraggableComponent"],
                {
                  onStart: this._onCornerDragStart.bind(this, 'bottom', 'right'),
                  onDrag: this._onCornerDrag,
                  key: 'bottomRight' },
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Dragger, { bottom: true, right: true, className: test ? 'js-transformBottomRightCorner' : undefined })
              ), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                InnerTransformContainer,
                { style: areaStyles.innerTransformContainer, className: test ? 'js-innerTransformContainer' : undefined, key: 'inner' },
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                  TransformRow,
                  null,
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { right: true, bottom: true }),
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { right: true, bottom: true }),
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { bottom: true })
                ),
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                  TransformRow,
                  null,
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { right: true, bottom: true }),
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { right: true, bottom: true }),
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { bottom: true })
                ),
                __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
                  TransformRow,
                  null,
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { right: true }),
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, { right: true }),
                  __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(BorderedTransformCell, null)
                )
              )]
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, null)
        ),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          TransformRow,
          null,
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, null),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, null),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DarkTransformCell, null)
        )
      )
    );
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  TransformCanvasControlsComponent.prototype._renderControls = function _renderControls() {
    var flipIconStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/transform/flip.png', true) + '\')'
    };
    var rotateIconStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/transform/rotate.png', true) + '\')'
    };

    var _props$options = this.props.options,
        enableRotation = _props$options.enableRotation,
        enableFlip = _props$options.enableFlip,
        enableStraighten = _props$options.enableStraighten;

    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      CanvasControls,
      { className: test ? 'js-transformCanvasControls' : undefined },
      this._renderOnCanvasControls(),
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        BottomControlsContainer,
        null,
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          BottomControls,
          { className: test ? 'js-transformBottomCanvasControls' : undefined },
          enableFlip && [__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(FlipButton, {
            style: flipIconStyle,
            key: 'flip-h',
            onClick: this._onFlipClick.bind(this, 'horizontal'),
            className: test ? 'js-flipHorizontallyButton' : undefined }), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(FlipButton, {
            vertical: true,
            style: flipIconStyle,
            key: 'flip-v',
            onClick: this._onFlipClick.bind(this, 'vertical'),
            className: test ? 'js-flipVerticallyButton' : undefined })],
          enableStraighten && __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_3__transform_rotation_slider_component__["a" /* default */], {
            value: this.getSharedState('rotation'),
            onChange: this._onRotationChange }),
          enableRotation && [__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(RotateButton, {
            style: rotateIconStyle,
            key: 'rotate-ccw',
            onClick: this._onRotateClick.bind(this, 'ccw'),
            className: test ? 'js-rotateCounterClockwiseButton' : undefined }), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(RotateButton, {
            clockwise: true,
            style: rotateIconStyle,
            key: 'rotate-cw',
            onClick: this._onRotateClick.bind(this, 'cw'),
            className: test ? 'js-rotateClockwiseButton' : undefined })]
        )
      )
    );
  };

  return TransformCanvasControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["CanvasControlsComponent"]);

// -------------------------------------------------------------------------- STYLES

TransformCanvasControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["CanvasControlsComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (TransformCanvasControlsComponent);
var CanvasControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('120drhm', 'CanvasControls');

var OnCanvasControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('8gacw5', {
  draggable: 'ovipzq'
}, 'OnCanvasControls');

var BottomControlsContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('nmw377', 'BottomControlsContainer');

var BottomControls = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1gk061a', 'BottomControls');

var TransformContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1v9hd4r', 'TransformContainer');

var ImageContainer = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('15kzu1c', 'ImageContainer');

var OuterTransformContainer = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(TransformContainer)('1kjfwvf', {
  visible: 'zgbg08'
}, 'OuterTransformContainer');

var InnerTransformContainer = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(TransformContainer)('120drhm', 'InnerTransformContainer');

var TransformRow = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('15u7gri', 'TransformRow');

var TransformCell = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1q481v0', 'TransformCell');

var BorderedTransformCell = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(TransformCell)('1qh9j3j', {
  top: '1mup05p',
  right: '12l7t8k',
  bottom: '1ebuiz6',
  left: 'txqhsl'
}, 'BorderedTransformCell');

var CenterTransformCell = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(TransformCell)('52h18o', {
  undraggable: '16s6vgr'
}, 'CenterTransformCell');

var DarkTransformCell = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(TransformCell)('17b4s67', 'DarkTransformCell');

var Dragger = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1tai30v', {
  top: '1stnln8',
  right: '1wj5vxi',
  bottom: '17bojqc',
  left: '1a9ompl'
}, 'Dragger');

var Button = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].button('127b6wl', 'Button');

var FlipButton = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(Button)('120drhm', {
  vertical: '12fqiy2'
}, 'FlipButton');

var RotateButton = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(Button)('120drhm', {
  clockwise: 'o7ss47'
}, 'RotateButton');

var AcceptButton = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('sbdqjz', {
  enabled: 'ro0g1e'
}, 'AcceptButton');

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var SLIDER_WIDTH = 217;
var MAX_ROTATION = 45;
var test = ("production") === 'test';

var TransformRotationSliderComponent = function (_BaseComponent) {
  _inherits(TransformRotationSliderComponent, _BaseComponent);

  function TransformRotationSliderComponent() {
    _classCallCheck(this, TransformRotationSliderComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this._bindAll('_onDragStart', '_onDrag');

    _this._width = 0;
    _this.state = {
      value: _this.props.value || 0
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Gets called when this component has been mounted
   */


  TransformRotationSliderComponent.prototype.componentDidMount = function componentDidMount() {
    _BaseComponent.prototype.componentDidMount.call(this);
    this._degreesPerPixel = MAX_ROTATION * 2 / SLIDER_WIDTH;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked before a mounted component receives new props
   * @param  {Object} nextProps
   */


  TransformRotationSliderComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  };

  /**
   * Invoked when the user starts dragging the rotation slider
   * @private
   */


  TransformRotationSliderComponent.prototype._onDragStart = function _onDragStart() {
    this._initialDegrees = this.state.value * 180 / Math.PI;
  };

  /**
   * Invoked while the user is dragging the rotation slider
   * @private
   */


  TransformRotationSliderComponent.prototype._onDrag = function _onDrag(distance) {
    var degrees = this._initialDegrees + distance.x * this._degreesPerPixel;
    degrees = Math.min(MAX_ROTATION, Math.max(degrees, MAX_ROTATION * -1));

    var value = degrees * Math.PI / 180;
    this.setState({ value: value });
    this.props.onChange && this.props.onChange(value);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Returns the label value
   * @return {String}
   * @private
   */


  TransformRotationSliderComponent.prototype._getValue = function _getValue() {
    return Math.round(this.state.value * 180 / Math.PI) + '\xB0';
  };

  /**
   * Returns the indicator position
   * @return {Number}
   * @private
   */


  TransformRotationSliderComponent.prototype._getIndicatorPosition = function _getIndicatorPosition() {
    var valueRange = MAX_ROTATION * Math.PI / 180;
    return this._width / 2 + this.state.value / valueRange * (this._width / 2);
  };

  TransformRotationSliderComponent.prototype._getIndicatorStyles = function _getIndicatorStyles() {
    var valueRange = MAX_ROTATION * Math.PI / 180;
    return {
      left: { left: SLIDER_WIDTH / 2 + this.state.value / valueRange * (SLIDER_WIDTH / 2) },
      right: { right: SLIDER_WIDTH / 2 - this.state.value / valueRange * (SLIDER_WIDTH / 2) }
    };
  };

  /**
   * Renders this component
   * @return {React.Element}
   */


  TransformRotationSliderComponent.prototype.render = function render() {
    var indicatorStyles = this._getIndicatorStyles();
    var leftSliderStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/transform/degree-slider.png', true) + '\')',
      backgroundPosition: indicatorStyles.left.left - 4
    };
    var rightSliderStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath('editor/controls/transform/degree-slider.png', true) + '\')',
      backgroundPosition: indicatorStyles.left.left + 35
    };

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["DraggableComponent"],
      {
        onStart: this._onDragStart,
        onDrag: this._onDrag },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Wrapper,
        { className: test ? 'js-transformRotationSlider' : undefined },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          RotationSlider,
          { style: leftSliderStyle },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Indicator, { style: indicatorStyles.left })
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          Value,
          { className: test ? 'js-transformRotationValue' : undefined },
          this._getValue()
        ),
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
          RotationSlider,
          { style: rightSliderStyle },
          __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Indicator, { style: indicatorStyles.right })
        )
      )
    );
  };

  return TransformRotationSliderComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

TransformRotationSliderComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (TransformRotationSliderComponent);


var Wrapper = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('tix0xu', 'Wrapper');

var RotationSlider = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('6mdana', 'RotationSlider');

var Indicator = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('nxjpo', 'Indicator');

var Value = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('d97kws', 'Value');

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_list_item_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transform_dimensions_component__ = __webpack_require__(69);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement */
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */






var ControlGroupList = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["GroupedControlsStyles"].ControlGroupList,
    ControlGroup = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["GroupedControlsStyles"].ControlGroup,
    ControlGroupTitle = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["GroupedControlsStyles"].ControlGroupTitle;
var Vector2 = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Math"].Vector2;

var test = ("production") === 'test';

var TransformControlsComponent = function (_ControlsComponent) {
  _inherits(TransformControlsComponent, _ControlsComponent);

  function TransformControlsComponent() {
    var _this$_events;

    _classCallCheck(this, TransformControlsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _ControlsComponent.call.apply(_ControlsComponent, [this].concat(args)));

    _this._bindAll('_reapplyRatio', '_onHistoryUndo', '_onResetDefaultClick', '_onOperationRemoved', '_onOperationUpdated');

    _this._events = (_this$_events = {}, _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TRANSFORM_REAPPLY_RATIO, _this._reapplyRatio), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_REMOVED, _this._onOperationRemoved), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.OPERATION_UPDATED, _this._onOperationUpdated), _defineProperty(_this$_events, __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.HISTORY_UNDO, _this._onHistoryUndo), _this$_events);

    _this._transformRatioManager = new __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["TransformRatioManager"](_this.props.options);

    _this.state.ratio = null;
    _this._selectInitialRatio(!_this.getSharedState('transformOperationExistedBeforeEntering'));
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Checks if the component should change from the given state
   * @param  {Object} oldState
   * @param  {Object} newState
   * @return {Boolean}
   */


  TransformControlsComponent.prototype.shouldSharedComponentUpdate = function shouldSharedComponentUpdate(oldState, newState) {
    return oldState.ratio !== newState.ratio;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the given undo items are applied
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  TransformControlsComponent.prototype._onHistoryUndo = function _onHistoryUndo(items) {
    var _this2 = this;

    var editor = this.context.editor;

    items.forEach(function (item) {
      var operationIdentifier = item.getOperation();
      var data = item.getData();
      if (operationIdentifier === 'transform') {
        var newSharedState = {};
        if (data.ratio) {
          newSharedState.ratio = data.ratio;
        }

        var operation = editor.operations.get(operationIdentifier);
        var newTransformOptions = _this2.getSharedState('newTransformOptions');
        newTransformOptions.start = operation.getStart();
        newTransformOptions.end = operation.getEnd();
        newTransformOptions.rotation = operation.getRotation();
        newTransformOptions.textureScale = operation.getTextureScale();
        newSharedState.newTransformOptions = newTransformOptions;

        _this2.setSharedState(newSharedState);
      }
    });
  };

  /**
   * Invoked when an operation has been updated
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  TransformControlsComponent.prototype._onOperationUpdated = function _onOperationUpdated(operation) {
    var currentTransformOperation = this.getSharedState('transformOperation');
    if (currentTransformOperation !== operation) return;

    this.setSharedState({
      rotation: currentTransformOperation.getRotation(),
      start: currentTransformOperation.getStart().clone(),
      end: currentTransformOperation.getEnd().clone()
    });
  };

  /**
   * Gets called when an operation has been removed
   * @param  {PhotoEditorSDK.Operation} operation
   * @private
   */


  TransformControlsComponent.prototype._onOperationRemoved = function _onOperationRemoved(operation) {
    var editor = this.context.editor;


    var currentTransformOperation = this.getSharedState('transformOperation');
    if (currentTransformOperation === operation) {
      var transformOperation = editor.operations.getOrCreate('transform', {
        enabled: false
      });

      var sdk = editor.getSDK();
      sdk.setRotation(0);
      sdk.setSpriteScale(1);

      this.setSharedState({
        transformOperation: transformOperation,
        rotation: 0,
        initialTransformOptions: transformOperation.serializeOptions(),
        transformOperationExistedBeforeEntering: false
      });

      transformOperation._ratio = null;
      this._selectInitialRatio(true, true);
    }

    var currentOrientationOperation = this.getSharedState('orientationOperation');
    if (currentOrientationOperation === operation) {
      var orientationOperation = editor.operations.getOrCreate('orientation');

      this.setSharedState({
        orientationOperation: orientationOperation,
        rotation: 0,
        flipVertically: false,
        flipHorizontally: false
      });
    }
  };

  /**
   * Called when the user clicked the reset default button.
   * @private
   */


  TransformControlsComponent.prototype._onResetDefaultClick = function _onResetDefaultClick() {
    var editor = this.context.editor;


    var orientationOperation = this.getSharedState('orientationOperation');
    var rotation = orientationOperation.getRotation();
    orientationOperation.set({
      flipHorizontally: false,
      flipVertically: false,
      rotation: 0
    });

    editor.broadcastRotate(-rotation);

    var newTransformOptions = this.getSharedState('newTransformOptions');
    newTransformOptions.start = new Vector2(0, 0);
    newTransformOptions.end = new Vector2(1, 1);
    newTransformOptions.rotation = 0;

    this.setSharedState({
      ratio: null,
      start: new Vector2(0, 0),
      end: new Vector2(1, 1),
      orientationRotation: 0,
      rotation: 0,
      flipVertically: false,
      flipHorizontally: false,
      changesDone: true
    });

    this._emitEvent(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TRANSFORM_RESIZE);

    editor.setRotation(0);
    editor.setSpriteScale(1);
    editor.zoom.auto(true, true);
  };

  // -------------------------------------------------------------------------- RATIO HANDLING

  /**
   * Re-applies the current ratio
   * @private
   */


  TransformControlsComponent.prototype._reapplyRatio = function _reapplyRatio() {
    var ratio = this.getSharedState('ratio');
    this._selectRatio(ratio);
  };

  /**
   * Selects the given ratio
   * @param {String} ratio
   * @param {Boolean} setDefaultOptions = true
   * @param {Boolean} update = true
   * @private
   */


  TransformControlsComponent.prototype._selectRatio = function _selectRatio(ratio) {
    var setDefaultOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var operation = this.getSharedState('transformOperation');
    if (setDefaultOptions && ratio) {
      this._setDefaultOptionsForRatio(ratio, update);
    }
    operation._ratio = ratio;
    this.setSharedState({ ratio: ratio }, update);
    if (update) {
      this.setSharedState({ changesDone: true });
    }
    this._emitEvent(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TRANSFORM_RESIZE);
  };

  /**
   * Sets the default options (start / end) for the given ratio
   * @param {Object} ratioObject
   * @param {Boolean} update = false
   * @private
   */


  TransformControlsComponent.prototype._setDefaultOptionsForRatio = function _setDefaultOptionsForRatio(ratioObject) {
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _ref = ratioObject || {},
        ratio = _ref.ratio,
        dimensions = _ref.dimensions;

    var start = new Vector2();
    var end = new Vector2();

    if (dimensions && !ratio) {
      ratio = dimensions.x / dimensions.y;
    }

    var ratioFraction = ratio && __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].findIntegerFraction(ratio);

    if (!ratio || ratio === '*') {
      start = new Vector2(0, 0);
      end = new Vector2(1, 1);
    } else {
      var operation = this.getSharedState('transformOperation');
      var inputDimensions = operation.getInputDimensions(false);
      var outputRatio = inputDimensions.x / inputDimensions.y;
      var width = void 0,
          height = void 0;
      if (outputRatio <= ratio) {
        var maxHeight = Math.floor(inputDimensions.x / ratioFraction.x) * ratioFraction.y;
        height = Math.floor(Math.min(maxHeight, inputDimensions.y) / ratioFraction.y) * ratioFraction.y;
        width = height * ratio;
        start.set((inputDimensions.x - width) / 2, (inputDimensions.y - height) / 2).floor();
      } else {
        var maxWidth = Math.floor(inputDimensions.y / ratioFraction.y) * ratioFraction.x;
        width = Math.floor(Math.min(maxWidth, inputDimensions.x) / ratioFraction.x) * ratioFraction.x;
        height = width / ratio;
        start.set((inputDimensions.x - width) / 2, (inputDimensions.y - height) / 2).floor();
      }

      end.copy(start).add(width, height);
      start.divide(inputDimensions);
      end.divide(inputDimensions);
    }

    var newTransformOptions = this.getSharedState('newTransformOptions');
    newTransformOptions.start = start;
    newTransformOptions.end = end;

    this.setSharedState({ start: start, end: end }, update);
  };

  /**
   * Selects the initial ratio
   * @param {Boolean} setDefaultOptions = true
   * @param {Boolean} update = false
   * @private
   */


  TransformControlsComponent.prototype._selectInitialRatio = function _selectInitialRatio() {
    var setDefaultOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var transformOperation = this.getSharedState('transformOperation');
    var selectedRatio = null;
    var categories = this._transformRatioManager.getCategories();
    var ratios = categories.map(function (c) {
      return c.ratios;
    }).reduce(function (a, b) {
      return a.concat(b);
    });

    // 1. Selected ratio stored in operation
    var operationRatio = transformOperation._ratio;
    if (operationRatio) {
      var matchingRatios = ratios.filter(function (ratio) {
        return ratio === operationRatio;
      });
      selectedRatio = matchingRatios[0];
    }

    // 2. First ratio with `selected` flag
    if (!selectedRatio) {
      var selectedRatios = ratios.filter(function (ratio) {
        return ratio.selected;
      });
      selectedRatio = selectedRatios.pop();
    }

    // 3. First ratio
    if (!selectedRatio) {
      selectedRatio = ratios[0];
    }

    return this._selectRatio(selectedRatio, setDefaultOptions, update);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders the sections and their items.
   * @private
   */


  TransformControlsComponent.prototype._renderSections = function _renderSections() {
    var _this3 = this;

    var makeSection = function makeSection(category) {
      return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        Section,
        { key: category.identifier },
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          SectionTitle,
          null,
          _this3._t('editor.controls.transform.ratios.' + category.identifier + '.name') || category.defaultName
        ),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          SectionGrid,
          null,
          makeItems(category)
        )
      );
    };

    var makeItems = function makeItems(category) {
      return _this3._transformRatioManager.getRatiosForCategory(category).map(function (ratio) {
        var isSelected = _this3.getSharedState('ratio') === ratio;
        return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_2__transform_list_item_component__["a" /* default */], {
          key: ratio.identifier,
          defaultIconPath: 'editor/controls/transform/ratios/' + ratio.identifier + '-default.png',
          hoverIconPath: 'editor/controls/transform/ratios/' + ratio.identifier + '-hover.png',
          activeIconPath: 'editor/controls/transform/ratios/' + ratio.identifier + '-active.png',
          onClick: _this3._selectRatio.bind(_this3, ratio),
          title: _this3._t('editor.controls.transform.ratios.' + category.identifier + '.ratios.' + ratio.identifier) || ratio.defaultName,
          identifier: ratio.identifier,
          selected: isSelected });
      });
    };

    var categories = this._transformRatioManager.getCategories();
    return categories.map(function (category) {
      return makeSection(category);
    });
  };

  /**
   * Returns the properties for the root element
   * @return {Object}
   * @private
   */


  TransformControlsComponent.prototype._getRootProps = function _getRootProps() {
    return {
      className: test ? 'js-transformControls' : undefined,
      withBorderTop: true
    };
  };

  /**
   * Renders this control's content
   * @return {React.Element}
   */


  TransformControlsComponent.prototype._renderContent = function _renderContent() {
    var _this4 = this;

    var ratio = this.getSharedState('ratio');
    return [__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ScrollableListComponent"],
      {
        key: 'list',
        direction: 'vertical',
        innerRef: function innerRef(el) {
          _this4._scrollbar = el;
        } },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        SectionList,
        null,
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          SectionListHeader,
          null,
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ButtonComponent"], {
            title: this._t('editor.controls.transform.reset'),
            className: test ? 'js-transformResetButton' : undefined,
            onClick: this._onResetDefaultClick })
        ),
        this._renderSections()
      )
    ), __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(__WEBPACK_IMPORTED_MODULE_3__transform_dimensions_component__["a" /* default */], {
      key: 'transformDimensions',
      controls: this.props.controls,
      disabled: !ratio || !!ratio.dimensions })];
  };

  return TransformControlsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"]);

// -------------------------------------------------------------------------- STYLES

TransformControlsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].contextTypes;
TransformControlsComponent.RootElement = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["ControlsComponent"].RootElement;
/* harmony default export */ __webpack_exports__["a"] = (TransformControlsComponent);
var SectionListHeader = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].li('7abnmv', 'SectionListHeader');

var SectionList = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(ControlGroupList).ul('x32ss4', 'SectionList');

var Section = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(ControlGroup).li('ber9o0', 'Section');

var SectionTitle = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(ControlGroupTitle).div('15ebqhq', 'SectionTitle');

var SectionGrid = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].ul('1klgjyq', 'SectionGrid');

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */



var PlainControlItem = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["ControlsStyles"].PlainControlItem;

var test = ("production") === 'test';

var TransformListItemComponent = function (_BaseComponent) {
  _inherits(TransformListItemComponent, _BaseComponent);

  function TransformListItemComponent() {
    _classCallCheck(this, TransformListItemComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _BaseComponent.call.apply(_BaseComponent, [this].concat(args)));

    _this.state = {
      hovered: false
    };
    return _this;
  }

  /**
   * Renders this component
   * @return {React.Element}
   */


  TransformListItemComponent.prototype.render = function render() {
    var _this2 = this;

    // @todo: Handle active icon
    var defaultIconStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath(this.props.defaultIconPath, true) + '\')'
    };
    var hoverIconStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath(this.props.hoverIconPath, true) + '\')'
    };
    var activeIconStyle = {
      backgroundImage: 'url(\'' + this._getAssetPath(this.props.activeIconPath, true) + '\')'
    };
    var _props = this.props,
        selected = _props.selected,
        onClick = _props.onClick,
        identifier = _props.identifier,
        title = _props.title;
    var hovered = this.state.hovered;

    return __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
      TransformListItem,
      {
        selected: selected,
        onClick: onClick,
        'data-identifier': identifier,
        'data-selected': selected,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ hovered: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ hovered: false });
        },
        className: test ? 'js-transformListItem' : undefined },
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: !selected },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Icon, { style: defaultIconStyle })
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: !selected && hovered },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Icon, { style: hoverIconStyle })
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["Transition"],
        {
          active: selected },
        __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(Icon, { style: activeIconStyle })
      ),
      __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["React"].createElement(
        Title,
        { selected: selected },
        title
      )
    );
  };

  return TransformListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"]);

TransformListItemComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["BaseComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (TransformListItemComponent);


var TransformListItem = Object(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"])(PlainControlItem).li('71xi0n', 'TransformListItem');

var Icon = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('u0ryhr', {
  rendered: '2jlos',
  visible: '82svov'
}, 'Icon');

var Title = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__["adonis"].div('jpjwq7', {
  selected: 'zgbg08'
}, 'Title');

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx React.createElement **/
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */




var test = ("production") === 'test';

var TransformDimensionsComponent = function (_SharedStateComponent) {
  _inherits(TransformDimensionsComponent, _SharedStateComponent);

  function TransformDimensionsComponent() {
    _classCallCheck(this, TransformDimensionsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _SharedStateComponent.call.apply(_SharedStateComponent, [this].concat(args)));

    var dimensions = _this._getTransformDimensions();
    _this.state = {
      dimensions: dimensions,
      x: dimensions.x,
      y: dimensions.y
    };
    return _this;
  }

  // -------------------------------------------------------------------------- LIFECYCLE

  /**
   * Checks if the component should change from the given state
   * @param  {Object} oldState
   * @param  {Object} newState
   * @return {Boolean}
   */


  TransformDimensionsComponent.prototype.shouldSharedComponentUpdate = function shouldSharedComponentUpdate(oldState, newState) {
    return !oldState.start.equals(newState.start) || !oldState.end.equals(newState.end) || oldState.ratio !== newState.ratio;
  };

  /**
   * Invoked before the shared state component is re-rendered due to a
   * state change
   * @param  {Object} oldState
   * @param  {Object} newState
   */


  TransformDimensionsComponent.prototype.sharedComponentWillUpdate = function sharedComponentWillUpdate(oldState, newState) {
    if (!newState.transformOperation) return;

    var dimensions = this._getTransformDimensions();
    var x = dimensions.x,
        y = dimensions.y;


    this.state.dimensions = dimensions;
    this.state.x = x;
    this.state.y = y;
  };

  // -------------------------------------------------------------------------- EVENTS

  /**
   * Invoked when the value of an input is changed
   * @param  {String} prop
   * @param  {Event} event
   * @private
   */


  TransformDimensionsComponent.prototype._onInputLiveChange = function _onInputLiveChange(prop, event) {
    var value = event.target.value;

    if (value.length && !value.match(/\d+?/i)) return;

    this.state[prop] = value && parseInt(value, 10) || '';
    this.forceUpdate();
  };

  /**
   * Invoked when the new value of an input is accepted (input loses focus)
   * @param  {String} prop
   * @param  {Event} event
   * @private
   */


  TransformDimensionsComponent.prototype._onInputChange = function _onInputChange(prop, event) {
    var value = this.state[prop] || 0;
    var operation = this.getSharedState('transformOperation');
    var inputDimensions = operation.getInputDimensions(false);

    var _getSharedState = this.getSharedState('ratio'),
        ratio = _getSharedState.ratio;

    var start = this.getSharedState('start');
    var end = this.getSharedState('end');
    var size = end.clone().subtract(start);

    var requestedDimensions = size.clone().multiply(inputDimensions);
    requestedDimensions[prop] = Math.min(inputDimensions[prop], value);
    if (ratio !== '*') {
      var ratioFraction = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Utils"].findIntegerFraction(ratio);
      requestedDimensions[prop] = Math.max(1, Math.round(requestedDimensions[prop] / ratioFraction[prop])) * ratioFraction[prop];

      if (prop === 'x') {
        requestedDimensions.y = requestedDimensions.x / ratio;
      } else {
        requestedDimensions.x = requestedDimensions.y * ratio;
      }
    }

    var finalDimensions = requestedDimensions.clone();
    if (requestedDimensions.x > inputDimensions.x || requestedDimensions.y > inputDimensions.y) {
      finalDimensions = __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk__["Utils"].resizeVectorToFit(requestedDimensions, inputDimensions);
    }

    var dimensions = this._getTransformDimensions();
    var x = dimensions.x,
        y = dimensions.y;


    this.state.dimensions = dimensions;
    this.state.x = x;
    this.state.y = y;

    this._resizeTransformTo(finalDimensions);
    this.forceUpdate();
  };

  // -------------------------------------------------------------------------- RESIZING

  /**
   * Returns the current transform dimensions
   * @return {PhotoEditorSDK.Math.Vector2}
   * @private
   */


  TransformDimensionsComponent.prototype._getTransformDimensions = function _getTransformDimensions() {
    var operation = this.getSharedState('transformOperation');
    var ratio = this.getSharedState('ratio') || { ratio: '*' };

    var dimensions = void 0;
    if (ratio.dimensions) {
      dimensions = ratio.dimensions.clone();
    } else {
      var inputDimensions = operation.getInputDimensions(false);
      var start = this.getSharedState('start');
      var end = this.getSharedState('end');
      var transformSize = end.clone().subtract(start);
      dimensions = transformSize.multiply(inputDimensions).round();
    }

    return dimensions;
  };

  /**
   * Changes `start` and `end` positions according to the given dimensions
   * @param  {PhotoEditorSDK.Math.Vector2} dimensions
   * @private
   */


  TransformDimensionsComponent.prototype._resizeTransformTo = function _resizeTransformTo(dimensions) {
    var operation = this.getSharedState('transformOperation');
    var inputDimensions = operation.getInputDimensions(false);

    var start = this.getSharedState('start').clone();
    var end = this.getSharedState('end').clone();
    var newSize = dimensions.divide(inputDimensions);

    end.copy(start).add(newSize);
    if (end.x > 1) {
      start.x -= end.x - 1;
      end.x = 1;
    }
    if (end.y > 1) {
      start.y -= end.y - 1;
      end.y = 1;
    }

    var controls = this.props.controls;

    var _controls$fixTransfor = controls.fixTransform(start, end, 'right', 'bottom'),
        fixedStart = _controls$fixTransfor.start,
        fixedEnd = _controls$fixTransfor.end;

    var newTransformOptions = this.getSharedState('newTransformOptions');

    newTransformOptions.start = fixedStart;
    newTransformOptions.end = fixedEnd;

    this.setSharedState({
      start: fixedStart,
      end: fixedEnd
    });
    this._emitEvent(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Constants"].EVENTS.TRANSFORM_RESIZE);
  };

  // -------------------------------------------------------------------------- RENDERING

  /**
   * Renders this component
   * @return {React.Element}
   */


  TransformDimensionsComponent.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
      TransformDimensions,
      { className: test ? 'js-transformDimensions' : undefined },
      __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
        TransformDimensionsWrapper,
        null,
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          Table,
          null,
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            Cell,
            null,
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DimensionInput, {
              suffix: this._t('editor.controls.transform.dimensions.width'),
              name: 'width',
              disabled: this.props.disabled,
              value: this.state.x,
              onLiveChange: this._onInputLiveChange.bind(this, 'x'),
              onChange: this._onInputChange.bind(this, 'x') })
          ),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            CrossCell,
            null,
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Cross, { src: this._getAssetPath('editor/controls/transform/dimensions-cross.png', true) })
          ),
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            Cell,
            null,
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(DimensionInput, {
              suffix: this._t('editor.controls.transform.dimensions.height'),
              name: 'height',
              disabled: this.props.disabled,
              value: this.state.y,
              onLiveChange: this._onInputLiveChange.bind(this, 'y'),
              onChange: this._onInputChange.bind(this, 'y') })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["Transition"],
          {
            active: this.props.disabled,
            enterProp: 'rendered',
            enterDuration: 300,
            appearProp: 'visible',
            appearDuration: 300,
            leaveDuration: 300 },
          __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(
            LockOverlay,
            { className: test ? 'js-transformDimensionsLockOverlay' : undefined },
            __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["React"].createElement(Lock, { src: this._getAssetPath('editor/controls/transform/lock.png', true) })
          )
        )
      )
    );
  };

  return TransformDimensionsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"]);

TransformDimensionsComponent.contextTypes = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SharedStateComponent"].contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (TransformDimensionsComponent);


var DimensionInput = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["SuffixedTextInputComponent"])('2jlos', 'DimensionInput');

var Cross = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].img('1dew3s1', 'Cross');

var TransformDimensions = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1yz821h', 'TransformDimensions');

var TransformDimensionsWrapper = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1dg9k0o', 'TransformDimensionsWrapper');

var Table = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('wlk9p6', 'Table');

var Cell = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('1q481v0', 'Cell');

var CrossCell = Object(__WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"])(Cell)('13lk3i9', 'CrossCell');

var LockOverlay = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].div('943mx5', {
  rendered: '2jlos',
  visible: 'rval4i'
}, 'LockOverlay');

var Lock = __WEBPACK_IMPORTED_MODULE_1_photoeditorsdk_desktop_ui__["adonis"].img('1hp46pm', 'Lock');

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adjustments__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brush__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__focus__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__frame__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__overlay__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sticker__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__text__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transform__ = __webpack_require__(64);
/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */













var AllControls = [__WEBPACK_IMPORTED_MODULE_1__library__["default"], __WEBPACK_IMPORTED_MODULE_2__adjustments__["default"], __WEBPACK_IMPORTED_MODULE_3__brush__["default"], __WEBPACK_IMPORTED_MODULE_4__filter__["default"], __WEBPACK_IMPORTED_MODULE_5__focus__["default"], __WEBPACK_IMPORTED_MODULE_6__frame__["default"], __WEBPACK_IMPORTED_MODULE_7__overlay__["default"], __WEBPACK_IMPORTED_MODULE_8__sticker__["default"], __WEBPACK_IMPORTED_MODULE_9__text__["default"], __WEBPACK_IMPORTED_MODULE_10__transform__["default"]];

__WEBPACK_IMPORTED_MODULE_0_photoeditorsdk_desktop_ui___default.a.AllControls = AllControls;

/* harmony default export */ __webpack_exports__["default"] = (AllControls);

/***/ })
/******/ ])["default"];
});