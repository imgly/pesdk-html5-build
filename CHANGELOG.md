# 3.5.1

This version of PhotoEditorSDK for HTML5 contains a *lot* of memory management improvements, fixing
a lot of exporting issues and slowdowns on slower / older devices.

## Editor

### Features

* Implement Google Fonts support
* Add `editor.smoothUpscaling` option (default: `false`)

### Bugfixes

* Fix brush texture dimensions while drawing
* Fix brush size when entering tool after zooming in
* Fix webcam button on photo roll screen
* Fix text cropping
* Fix crop ratio remember function
* Fix rounding issues causing textures to be re-initialized
* Fix text selection bug when zoom is larger than 100%
* FilterOperation was not removed when Original Filter was selected
* Fix a bug that caused brushes to disappear after clicking the canvas on retina devices
* Fix brush thickness after crop
* Don't show drag cursor on canvas if image is not draggable
* Correctly set texture quality on export

## SDK

### Bugfixes

* Correctly set texture quality on export
* Fix GLSL randomness function on Mobile Safari
* Operation: Fix RenderTexture disposal
* WebGLFilterManager: Fix RenderTexture disposal
* Shader: Correctly dispose vertex and fragment shaders
* LookupTableFilter: Fix texture disposal
* Dispose render textures before exporting
* Fix PrimitivesStack (Filter) disposal
* Disable operation cache during export, free memory after rendering operation
* Fix SpriteOperation leaking textures

### Features

* Add `editor.smoothUpscaling` option (default: `false`)

### Improvements

* Re-use path canvases

## Engine

### Features

* Automatically add float precision to shaders, depending on platform

# 3.5.0

Breaking changes are tagged with :rotating_light:

## Editor

### Features

* Editor now uses smaller textures while editing which has a **huge** impact on performance when
  using larger images
* Add `editor.forceControls` option. See [the documentation](https://www.photoeditorsdk.com/documentation/html5/editor/force-controls)   for more info.
* Add an overlay bar for text elements with delete and edit buttons (Edit button only appears on
  mobile browsers)
* Zoom now has new zoom levels, similar to Photoshop
* Sticker controls: Add `fixedRatio` option (default is `true`)
* :rotating_light: Crop controls: Renamed `additionalRatios` to `ratios`

### Improvements

* Add brush opacity back in, now behaving correctly
* Improve brush performance
* Photo roll now looks better on mobile browsers

### Bugfixes

* Stickers and texts are selected on click, not on mousedown
* Fix touch event handling on Android
* Fix a crop display bug in Internet Explorer
* Crop is now correctly repositioned when flipping the image

## SDK

### Features

* :rotating_light: All operations: All position values are now relative (0...1) instead of pixel
  values. :rotating_light:
* Add `textureQuality` option
* Add `export.fileBasename` option
* Add `export.quality` option (only works with image/jpeg mime type)

### Bugfixes

* PhotoEditorSDK no longer tries to `require('gl')` and `require('canvas')`, fixing usage in
  Meteor environments
* Fix transparent images getting a white background when filters are applied (WebGL only)

---

# 3.4.2-1

## Editor

### Bugfixes

* Fix upload and webcam icons in photo roll
* Fix `undefined` value in photo roll search input

---

# 3.4.2

## Editor

### Features

* New crop UI with smooth rotation
* Implemented serialization and deserialization

### Bugfixes

* Switch to home screen before exporting (this applies text objects that are being edited while
  clicking the export button)
* Fix brushes disappearing when cropping
* Fix unnecessary re-rendering of some components

## SDK

### Bugfixes

* Fix `#setSpriteScale`
* Operations no longer listen for other operations to update (e.g. `SpriteOperation` listening for
  `CropOperation` to change, so that sprite positions can be changed accordingly). Instead, the UI
  calls `crop`, `rotate` and `flip` on operations that need to compensate changes of other
  operations.

---

# 3.4.1

## Editor

### Bugfixes

* PhotoRoll: Fix distribution of photos across columns
* PhotoRoll: Implemented nicer scroll bars
* PhotoRoll: Fix icon dimensions on retina screens
* Fix repositioning of text objects when image is flipped
* Error messages disable the editor while they're open
* Re-added sticker options bar (flipping, take to front, remove)
* Switching back to home screen when text has been removed
* Fix texts not being deleted

---

# 3.4.0

Please note that this release changes the names of quite a few API methods and options. Please
refer to our current documentation in case you experience any issues with this release.

## Editor

### Features

* New Photo Roll feature that lets your users pick from a variety of photos
* Implemented new splash screen
* Added `showHeader` option
* Added `showTopBar` option
* Added thickness presets for brushes
* Implemented `ReactUI#export` to manually trigger export
* Implemented `ReactUI#setImage` to change the image that's currently being edited
* Color pickers close automatically when clicking outside of a picker
* New text elements automatically clear their contents when edited for the first time (removing
  the default placeholder)
* Re-structured options hash
* EXIF orientation is now handled by a separate `ExifOrientationOperation` so that it doesn't
  interfere with the `OrientationOperation`
* Make K1, K2, K6 and KDynamic filters available via the UI again
* Developers are now allowed to override single localization strings
* Refactored all controls, allowing controls to have their own top-bar controls

### Bugfixes

* Fixed a retina issue that caused the editor to export images with extremely large dimensions
* Fixed default font selection for text tool
* Fixed file picker not working when selecting the same file twice
* Fixed editor in IE9
* Add sub header for webcam screen back in

## Backend

### Features

* Added Clarity, Exposure, Shadows and Highlights to adjustments
* Added `LUTFilter` which uses the same filter technology we use in iOS and Android
* Brushes are now part of SpriteOperation, allowing other sprites to be layered on top of brushes
* Brushes can now have a hardness (a value between 0 (blurry) to 1 (hard))
* Reworked brush drawing, allowing to draw brush images other than circles
* Added context creation error reporting
* Added WebGL framebuffer error reporting
* Added a `smoothDownscaling` option that will enable mip-mapping in WebGL and a smooth resizing
  algorithm in Canvas2D
* Implemented `setSpriteScale` which allows the developer to export images at a specific scale.
  The sprite scale is incorporated in export while zoom level is not.
* Many refactorings, e.g. introducing `Constants.OPTION_TYPE`, `Constants.UNIFORM_TYPE` and
  `Constants.RENDERER_TYPE` objects for cleaner code.

### Bugfixes

* Fixed memory leaks in all operations
* Fixed textures of images where `width` and `height` properties have been changed
* Fixed retina performance issues
