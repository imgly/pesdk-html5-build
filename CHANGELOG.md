## 5.11.7

### Fixed

- Fixed custom sticker category should be the newest uploaded image
- Fixed scrollbar theme options are not used
- Fixed reset adjustment button should not be visible if all adjustment settings are set to default
- Fixed the ColorPicker position for custom ColorItems
- Fixed the brush tool on mobile screens

## 5.11.6

### Fixed

- Fixed the font style dropdown not being scrollable in legacy Edge
- Fixed rotation transform reset issue

## 5.11.5

### Fixed

- Fixed sprites size on deserialization for non-transform tools
- Fixed crop mask controls issue in Vue2

## 5.11.4

### Fixed

- Fixed crash in apps with SSR support
- Fixed issue if `overlayURI` is a data URL
- Fixed inconsistencies in the returned value of `hasChanges`
- Fixed the missing reset button in the adjustment and brush tool due to the history
- Fixed multiple overlay stacking and slow connection asset loading issue

## 5.11.3

### Fixed

- Fixed `colorized` and `solid` sticker if the color has transparency
- Fixed the export in crop tool after a frame was applied
- Fixed loading a transparent image
- Fixed the vertical orientation after the image was replaced
- Fixed pixel inconsistencies with crop ratios
- Fixed unused `thumbnailURI` value for sticker
- Fixed the canvas size after the transform tool was opened in the BasicUI

## 5.11.2

### Fixed

- Fixed editor scaling issue after export on retina devices
- Fixed the frame and overlay opacity after deserialization
- Fixed fonts loading error on slow networks
- Fixed the sprite rotation on flipped and rotated image

## 5.11.1

### Fixed

- Fixed `findDOMNode` error messages in React Strict Mode introduced by a package

## 5.11.0

### Added

- Added `useIsLayoutAdvanced` hook

### Fixed

- Disabled `Move To Front` button for a single asset or if the asset is in front
- Fixed the history for sticker sizes
- Fixed `Move To Front` history
- Fixed Mirrored focus history
- Fixed history for the transform tool
- Fixed the position of the tooltip if a parent node contains a `transform` property
- Fixed the order of custom fonts in the text dropdown
- Fixed React warning on SDK mounting
- Fixed history for the text orientation on the flipped image
- Fixed `findDOMNode` error messages in React Strict Mode

## 5.10.0

### Changed

- Changed default blend mode to Overlay for the Vintage overlay.

### Added

- Added `assetResolver` object in configuration. Includes two properties `item` and `path`

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.9.0

### Added

- Added custom tool API
- Added `useSetImage` hook

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.8.4

### Fixed

- Fixed how external asset urls are resolved

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.8.3

### Fixed

- Fixed cjs bundle output

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.8.2

### Fixed

- Fixed the focus slider value to be between 0 and 100
- Fixed the loading time of live preview thumbnails
- Fixed wording if no license was supplied

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.8.1

### Fixed

- Fixed the incorrect require path in the bundle

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.8.0

### Changed

- The minimal required React version is now `16.8.6`
- Replaced the `simplebar` package with native scrollbars. IE11 and Legacy Edge only support a limited amount of scrollbar styling and will look slightly different compared to other browsers

### Added

- Added the `UIEvent.TOOL_ENTER` event which will return the new active tool
- Added the `UIEvent.STICKER_UPLOAD_ADD` event which will return the custom sticker an user uploaded

### Fixed

- Fixed the sticker opacity if the value is set to 0

## 5.7.2

### Fixed

- Fixed the missing rotate and flip controls in the Basic UI
- Fixed an issue where custom svg sticker were rasterized
- Fixed an issue with the slider in Chrome 87

## 5.7.1

### Changed

- The option `displayResizeWarning` changed to `false` by default

### Fixed

- Fixed an issue while selecting an overlay
- Fixed missing German translation for resized image dialog
- Fixed the missing transform thumbnails in the basic ui
- Fixed small issues in the Basic UI
- Fixed default color option for frame tool
- Fixed the error message while closing the editor
- Fixed a type issue in Angular strict mode

## 5.7.0

### Changed

- The PhotoEditor SDK is now available as a UMD build
- The fonts now include all available subsets. Please replace your old `assets` folder and fonts with the new files from `node_modules/photoeditorsdk/assets` or [here](https://github.com/imgly/pesdk-html5-build/tree/main/assets)
- The next minor release (`v5.8.0`) will require React `16.8.6` or higher.

### Added

- Added a warning if the image was downscaled due to the `downscaleOptions`
- Added an api function to reset the editor
- Added an option to define the default color for each tool
- Added the image author information to the AdvancedUI library items

## Fixed

- Fixed the request of multiple google font families with different variations
- Fixed the empty margin if only one button is displayed in the BasicUI library
- Fixed text is not aligned in center and background color has no padding
- Fixed an issue where simplebar initialised scrollbars outside of the editor
- Fixed the tintMode color for sticker where the size is a multiple of two
- Fixed the color picker position if there is not enough space beneath the component

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.6.1

### Changed

- Updated the Text tool fonts. Please replace your old `assets` folder and fonts with the new files from `node_modules/photoeditorsdk/assets` or [here](https://github.com/imgly/pesdk-html5-build/tree/main/assets)

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.6.0

### Changed

- The custom Loader component was integrated into the new custom Dialog api. Please visit our [docs](https://docs.photoeditorsdk.com/guides/html5/v5_6/customization/component) in order to migrate your existing component.
- All restrictions of the Basic License will now apply correctly.

### Added

- Added `defaultSize` and `defaultHardness` to the brush options
- Added the basic license restrictions
- Added the Dialog to the custom components api

### Fixed

- Fixed the available tools specified by the license
- Fixed an error if the environment used a different version of mobx

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.5.3

### Fixed

- Fixed an issue in the library search if multiple items had the same key
- Fixed editing the width and height input fields in the transform tool

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.5.2

### Fixed

- Fixed the position of the text menu in the basic ui on mobile
- Fixed the crop mask behaviour while Keep Resolution is active
- Fixed the selection of a sprite under the mirrored focus knob
- Fixed an error in the library search if no result was found
- Fixed the carousel slider label position

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.5.1

### Fixed

- Fixed the dialog offset if the order is reverse
- Fixed modal ui issues on small screen width
- Fixed the tooltip position if order is reversed
- Fixed slider dots for minimal size in transform tool
- Fixed the missing toolbar icons in Safari 10
- Fixed the load time for live filter previews

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.5.0

### Added

- Added the font system to the measurements options
- Added the canvas renderer as a fallback if webgl is not supported
- Added the colon in the modal header the language interface

### Fixed

- Fixed an issue where Japanese characters where not allowed in the text field
- Fixed an issue with the basic license and the text design

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.4.2

### Fixed

- Fixed the missing slider padding in the adjust tool
- Fixed the numeric input behaviour on blur
- Fixed the correct endianness of the exif orientation
- Fixed the missing exif information for the first loaded image
- Fixed the native input clear buttons in ie11 and legacy edge
- Fixed the hidden color picker in IE11 and legacy Edge
- Fixed entering letters in the numeric inputs
- Fixed the import of jpeg images in IE11
- Fixed the alignment of sliders and inputs in the basic ui in IE11

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.4.1

### Fixed

- Fixed slider width and style issues in IE11
- Fixed the missing toolbar tooltips in safari
- Fixed the behaviour of the unsaved changes dialog

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.4.0

### Added

- Added additional information to differentiate between the text alignment buttons
- Added the primary and secondary buttons from the ToolOptionsBar to the custom components api
- Added an option to allow text category headers for `library`, `transform`, `filter` and `sticker`
- Added `border` to the toolbar styling options
- Added the `maxCharacterLimit` option to the config of the textdesign tool
- Added an option to define the default colorlist for each tool

### Fixed

- Fixed the vertical scroll on the ToolControlBars
- Fixed tab text position
- Fixed the library config for the basic layout
- Fixed the default crop if `imgly_transform_common_custom` is not present in the config
- Fixed the error when the defaultTool is not in the tools list

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.3.1

### Fixed

- Fixed an issue with angular polyfills by adding the `photoeditorsdk/no-polyfills` entrypoint
- Fixed the error which prevented the editor to run in vuejs
- Fixed the error which is thrown by the close button

### Known Issues

- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.3.0

### Added

- Added option to disable the AdvancedUIToolControlBar title
- Added an numeric restriction to the amount of text
- Added an option to disable the automatic text scaling
- Added an option to change the minimal font size for the automatic text scaling
- Added the border radius of the canvas control styling options to the theme
- Added `preventExportEvent` to the export configuration to prevent the `UIEvent.EXPORT` in the export function
- Added the ColorItem to the custom components api
- Added the Checkbox to the custom components api
- Added the Text Alignment buttons to the custom components api

### Fixed

- Fixed live filter preview
- Fixed loading unused fonts
- Fixed the export for exportType `blob`
- Fixed the sprite actions for ie11 on small screens
- Fixed the export error for jpeg images of type blob or image
- Fixed the custom transform categories on safari
- Fixed the snapping guides colors in the light theme

### Known Issues

- There is an issue where the editor will throw an error in a vue-cli environment
- There is an issue where the editor does not work if an angular environment is configured for IE11
- We had to disable the history (Undo/Redo) in the transform tool because of major issues

### Changed

- Improved the custom components api for a better developer experience

## 5.2.2

### Fixed

- Fixed the crop controls positions on desktop

### Known Issues

- We are currently looking into an issue where the editor will throw an error in a vue-cli environment
- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.2.1

### Changed

- The minimum size for sprites has been reduced by default.

### Fixed

- Fixed the measurements configuration
- Fixed SVG stickers can become pixelated when resized.
- Fixed the image download in iOS Safari
- Fixed the loading of transform configuration options

### Known Issues

- We are currently looking into an issue where the editor will throw an error in a vue-cli environment
- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.2.0

### Fixed

- Fixed the active font and background color for selected text
- Fixed the black canvas after changing the image with an overlay applied
- Fixed rotate image in wrong direction if image is flipped
- Fixed custom transform issues
- Fixed the unsupported serialization version modal
- Fixed the text design color selection
- Fixed the random method for the text design seeds
- Fixed Focus handle state does not matching image state.
- Fixed the text and text design direction if transform is reset
- Fixed TextDesign layout does not change on History change.
- Fixed Sticker flip not updated on history undo redo.
- Fixed TextDesign flip is sometimes not correct.
- Fixed the overlay orientation and position in the operation stack
- Fixed Max crop size in transform tool is not accurate.
- Fixed the category and item labels
- Fixed no restriction for the amount of text entered. too much text leads to display errors
- Fixed IE corner grabbers
- Fixed the responsive behaviour of some buttons and toolbar elements
- Fixed the extended TabBar on mobile devices
- Fixed the rotation of images with an exif orientation in newest browser versions

### Added

- Improved the resize detection for dimension changes of the parent element

### Known Issues

- We are currently looking into an issue where the editor cannot be integrated because the 'asap/raw' module is missing
- We had to disable the history (Undo/Redo) in the transform tool because of major issues

## 5.2.0-rc2

### Added

- Added a guide for custom main action bar
- Added hasChanges to editor api
- Added Listener to the types

### Changed

- Migrated v5 to 3.9 serialization
- Changed the adapter to ensure that the frame behaves the same as in v4
- Removed the unnecessary console logs
- Prohibited emojis from text and text design
- Hide overlay and frame in the transform tool
- Temporarily disabled the history in the transform tool

### Fixed

- Fixed the editor crash after a sticker is selected in IE11
- Fixed sticker resize after window resize
- Fixed the active font and background color for selected text
- Fixed addition of history snapshot after custom configuration or serialization
- Fixed sprite action position on deselect and select a rotated sprite
- Fixed plural for german category titles
- Fixed the black canvas after changing the image with an overlay applied
- Fixed the crop width and height if the cursor leaves the image
- Fixed canvas resize when lockResolution
- Fixed polyfills for IE11
- Fixed crop boundaries
- Fixed history multiple clicking issue
- Fixed colliding bootstrap styles
- Fixed DuoTone mapping
- Fixed transform with straighten, flip, and 90/270 rotation in v4 for 3.9.0 serialization
- Fixed adapter log version
- Fixed transform category thumbnail configuration for basic-ui
- Fixed the sprite actions bar position after resize
- Fixed v5 gamma mapping
- Fixed initial text design seeds to match the icons
- Fixed the export options
- Fixed text rotation serialization
- Fixed flipped sticker serialization issues
- Fixed the original image in serialization
- Fixed carousel slider styles in IE11
- Fixed text design padding resizing
- Fixed history issue
- Fixed initial text design seed
- Fixed crop handles going over topbar
- Fixed open webcam after image capture
- Fixed an issue where overlay and frame where rotated
- Fixed transform flip
- Fixed the editor crash on mobile devices

## 5.1.0

### Added

- Added a configuration option for filter previews
- Added a configuration option for base font path
- Added CSS resets for color, font and line-height

### Fixed

- Fixed modal color for a better contrast
- Fixed library search when no provider is configured
- Fixed the error and warning modal preheading
- Fixed non-sequential loading of sprites
- Fixed svg thumbnails for custom components
- Fixed color picker not closing on outside click
- Fixed asset resolution for absolute urls

## 5.0.1

### Fixed

- Fixed horizontal tooltip position
- Fixed transform thumbnails
- Fixed component prop types
- Fixed updating of Advanced UI on custom sticker upload

## 5.0.0

Release notes - PhotoEditor SDK - Version html5-v5

### Changed

- Changed Export Options
- Removed the thumbnailLightThemeURI from text design metadata

### Added

- Added vertical transforms
- Added crops for more social media platforms
- Added serialization typings
- Added brush deserialization
- Added configuration for main canvas action bar - margin top
- Improved dialogue button design

### Fixed

- Removed default transform serialization, when no transform operation was performed
- Fixed serialization/ deserilization transform rotation
- Fixed mkdirp utils script
- Loaded color picker icons through asset manager
- Fixed serialization of sticker size
- Fixed focus serialization
- Fixed sprite order serialization
- Fixed crop with rotation serialization
- Fixed text design serialization
- Fixed text font-size serialization
- Fixed flip serialization
- Fixed text design disabling of items while changing layout id
- Fixed color deserialization
- Fixed custom sticker serialization

## 5.0.0-rc-3

### Changed

- Changed button API
- Changed PhotoEditor SDK init API

### Added

- Implemented the release candidate in different environments
- Improved the export button in the canvas bar
- Try building Angular and Vue Wrappers
- Updated docs
- Styled category and items without flex
- Added PESDKUI types for api
- Added warning modal before close
- Added the measurements to the configuration
- Added disabled opacity different component

### Fixed

- Fixed crop controls not being touchable
- Fixing Library categories are missing and search function is not working in IE
- Fixing Blend mode label missing in Overlay in IE 11
- Fixed focus tool overlapping toolbar
- Fixed font size label disabled state, when a text is not selected
- Fixed slider width in ie11
- Fixed snapping overlap in basic ui
- Fixed Safari button clicks one after the other
- Fixed sliders don't reach 0 for LUT filter and Overlay
- Fixed tooltip behind cards when category is open in IE-11
- Fixed text size on duplication
- Fixed brush cursor indicator, when cursor moved out of canvas
- Fixed slider input for NAN values
- Removed the background from disabled buttons
- Fixed the focus tool issue on mobile
- Fixed the icon buttons in the toolbar on mobile
- Fixed transform crop mask animation on safari

## 5.0.0-rc-2

- Changed UI configuration
- Improved User Experience
- Added UI Themes
- Added Custom Components

## 4.22.3

### Fixed

- Fixed pesdk server memory leak

## 4.22.2

### Fixed

- Fixed export in MS Edge toBlob

## 4.22.1

### Fixed

- Fixed the Server SDK to correctly pass through EXIF metadata during export
- Fixed the memory leak in the Server SDK

## 4.22.0

### Added

- Added EXIF orientation handling to the custom sticker upload

### Fixed

- Fixed React 15 compatibility with flickering sidebar

## 4.21.5

### Fixed

- Fixed CORS with chrome cache

## 4.21.4

### Fixed

- Fixed image loading to consider CORS configuration

## 4.21.3

### Fixed

- Fixed chrome/safari CORS policy blocking filter preview from loading
- Fixed unsubscribe to events before disposing the editor

## 4.21.2

### Fixed

- Fixed image uploads in the ReactUI

### Added

- Added "Basic License" restrictions to the DesktopUI and ReactUI
- Disabled the custom sticker upload feature in the basic license plan

## 4.21.1

### Fixed

- Fixed Custom Sticker Upload to work with the availableStickers controls option
- Fixed the flickering and disappearing sidebar on Chrome

## 4.21.0

### Added

- Added custom sticker upload for end users

### Fixed

- Fixed the selective blur tool
- Fixed the page reloads that were caused if the editor was embedded in a form

## 4.20.0

### Added

- Added non-uniform scaling to stickers in DesktopUI

### Fixed

- Fixed missing filter category asset errors in ReactUI preloader
- Fixed the rendering of the identity filter with the canvas renderer

## 4.19.1

### Added

- Added defaultCategory sticker controls option

### Fixed

- Fixed crop not rendering correctly after switching to the filter tool
- Fixed deserialized text to not be deleted when double-clicking to edit it

## 4.19.0

### Added

- Added sharpness to the adjustments tool

## 4.18.5

### Bug

- Fixed new Text Design sprites to use the selected layout

## 4.18.4

### Changed

- Added decorative lines to "Summer Feeling" Text Design

### Fixed

- Fixed width of "Sunshine" Text Design

## 4.18.3

### Fixed

- Fixed the editor controls to work correctly for all defaultControl values
- Fixed the Server SDK to render Text Designs correctly
- Fixed linear focus when rotating an image

### Changed

- Moved the "Hard Stuff" filter to the end of the "Black & White" category
- Renamed "Cotton Candy" and "High Contrast" filters for cross-platform consistency

## 4.18.2

### Fixed

- Fixed crashes on IE11 caused by missing 'subscript' function error
- Fixed JPEG quality loss during export on server
- Fixed the memory leak when moving sprites around
- Fixed filters names and order to be consistent across all platforms
- Fixed color selection dots to be centered vertically in the swatch

## 4.18.1

### Fixed

- Added a check to prevent canvas.toBuffer from being called in the browser
- Fixed the possibility to cut off parts of the text when resizing the text
- Fixed the title of the text input modal to be localizable
- Added a catchable error to the deserialization function when crop values would result in negative image dimensions

## 4.18.0

### Added

- Added snapping of sprites to canvas
- Added visual snapping guides for positional and rotational snapping
- Added configuration options for snapping

### Fixed

- Fixed errors after editor reset when the editor was previously in the transform tool

### Changed

- Enhanced sprite rotation snapping
- Enabled watermark when license expired or is otherwise invalid

## 4.17.1

### Fixed

- Fixed focus outlines around sprites in Safari
- Fixed crashes on IE caused by the ColorSelectionComponent

## 4.17.0

### Added

- Added option to configure color palette

### Fixed

- Fixed the "PhotoEditorSDK.Filters" namespace in the api docs to specify the correct namespace "PhotoEditorSDK.Operations.FilterOperation.Filters"
- Fixed inconsistencies in the minimum value for the text size input field
- Fixed sliders to render correctly after setting their value below the allowed minimum.

### Changed

- Removed the Version Checker

## 4.16.1

### Added

- Added local history in the transform tool

## 4.16.0

### Added

- Added DuoTone Filters
- Added Filter Categories to DesktopUI

### Fixed

- Fixed the missing margin in the ReactUI transform tool which made it difficult to grab the handles on narrow screens

## 4.15.2

### Fixed

- Fixed the inverted flipHorizontally and flipVertically values when deserializing with the HTML5 SDK
- IE11 Throws Errors on Arrow Keys Movement of Objects
- Fixed keyboard sprite movement controls in IE 11
- Fixed scrollable list causing zero-height of Text Design library in IE11
- Fixed the orientation-operation to first rotate then flip

## 4.15.1

### Fixed

- Fixed IE11 crashes with "endsWith is not a function"
- Fixed cross platform difference between Radial Focus inner and outer radius

## 4.15.0

### Added

- Added keyboard controls for moving objects
- Added option to EXIF operation to apply its changes to an image

### Fixed

- Fixed differences between WebGL and Canvas renderer when applying multiple adjustments at once
- Fixed the export to MSBlob
- Fixed dimension input fields by adding a minimum value to prevent 0 input

## 4.14.2

### Fixed

- Fixed missing textures when exporting with an overlay operation
- Fixed missing German translations for whites, blacks and temperature adjustments
- Fixed the broken deserialisation on Safari and Firefox
- Fixed the unexpected movement of sprites when changing the transformation options

## 4.14.1

### Fixed

- Fixed the transform/crop to always be applied when calling the export function
- Fixed draggable components to stop dragging when the mouse button is released in IE11
- Fixed the Canvas renderer to handle transparency correctly while blending the rendered filters onto the original image
- Fixed the brush stroke opacity to be directly affected by the brush hardness

## 4.14.0

### Added

- Updated Text Design to allow multiple instances
- Added background padding controls to Text Design

### Fixed

- Fixed the ”equals is not defined“ error when attempting to export without making any transform changes
- Fixed resized images to have correct dimensions when exporting
- Fixed transform controls to select correct ratio after deserialisation

## 4.13.3

### Fixed

- Fixed large images disappearing after some resize operations in the ReactUI
- Fixed the ”equals is not defined“ error when attempting to export without making any changes
- Fixed the export to blob to respect the specified image format

## 4.13.2

### Added

- Added tracking events constants

### Fixed

- Fixed Mojave and WebGL crashes on certain chipsets when framebuffer is resized
- Fixed difference between Canvas and WebGL Renderer for Adjustments Clarity
- Fixed difference between Gaussian Blur Focus between Canvas and WebGL Renderer
- Fixed difference between Linear Blur Focus between Canvas and WebGL Renderer
- Fixed difference between Mirror Blur Focus between Canvas and WebGL Renderer
- Fixed difference between Radial Focus between Canvas and WebGL Renderer
- Fixed leaking of frames on Canvas Renderer
- Fixed Colorpicker z-index issue
- Fixed Black, White and Temperature adjustments
- Fixed missing EXIF data when the image src doesn't already contain the image data
- Fixed bug where the extension of objects lead to a crash in some cases
- Fixed requirement of click on cropping rectangle before it shows the correct aspect ratio

## 4.13.1

### Added

- Added option to transform tool to reenable the accept button

### Fixed

- Fixed wrong EXIF orientation in filter previews
- Fixed JFIF Header Metadata which may not be passed through to the newly generated image under some circumstances
- Fixed the image exporter always outputting JPEG data when encoding to a buffer
- Fixed wrong EXIF rotations and inversion in filter previews
- Fixed issue where a new text does did not take the text size
- Fixed issue where text design tool could crash when dimensions are too small
- Fixed issue where lockDimensions where set by presence of dimensions even if explicitely set by the user
- Fixed focus tool generating error in output with transparency using the webgl renderer

## 4.13.0

### Added

- Added option to specify dimensions in transform tool

### Fixed

- Fixed transparent / black line in exported image

## 4.12.9

### Added

- Enhanced Transform Ratio configuration to allow configuration without SDK internal classes

### Fixed

- Fixed Transparent / Black line in exported image
- Fixed zooming in text design to be coherent with other sprite tools
- Fixed issue when using only transform tool and directly exporting now applying the crop
- Fixed wrong spelling of function name in ImageExporter that caused crash on IE

## 4.12.8

### Fixed

- Fixed 'this.\_encodeAsBlob is not a function' while exporting image
- Fixed Zoom in and Zoom out button doesn't work correctly
- Fixed wrong instructions for running the tests in the source code readme

## 4.12.7

### Fixed

- Fixed Webcam-photo button being not visible on fullscreen in Desktop UI
- Fixed copy option not working for Text & Stickers
- Fixed Textfield Search for photos not recognizable in some browser
- Filter after focus operation not reexecuted in Canvas after filter change
- Fixed TextDesign crash when using smooth up-/down-scaling
- Fixed some overlays not being exported under some conditions
- Fixed mouse icon when rotating elements
- Fixed close button not being displayed when \`displayCloseButton\` option is enabled
- Fixed uploading image, adding sticker or anything else to image raises JFIF data segment error on export
- Added more gpus to the blacklist for chipset issue on OSX Mojave

### Added

- Added ability to postpone execution after initialization and access to internal react component
- Added possibility of rendering TextDesigns with padding.
- Enhanced quality control of image exporter for server sdk

## 4.12.6

### Fixed

- Fixed Photoeditor crash on MacBook Air on macOS Mojave via canvas fallback

### Added

- Added Editing Text Elements via Touch
- Added image and filter caching to LicenseWatermarkOperation

## 4.12.5

### Fixed

- Fixed editor not opening on IE11 unless developer tools is open

## 4.12.4

### Fixed

- Fixed darker-colored line on TextDesignBlocks banderole image
- Fixed default text not deleted when editing text on mobile
- Fixed CORS issue when image url is cached by the browser

## 4.12.3

### Fixed

- Fixed `editor.export` not exporting image correctly while inside some tools
- Fixed text design failing when photoeditor runs in environment where Array.prototype is extented
- Fixed difference between Canvas and WebGL Render for Adjustments Shadows

### Fixed

- Fixed window.React bug that was required when using react in nodejs or webpack build environments
- Fixed missing React import

### Fixed

- Fixed close button not displayed

## 4.12.1

### Fixed

- Fixed close button not displayed

### Changed

- Updated Text Tool to keep settings for new text
- Updated Brush Path interpolation to be on par with Android und iOS Platform
- Updated Brush Tool to keep settings for new paths

## 4.12.0

### Fixed

- Fixed Problem with Text being duplicated when changing properties
- Fixed dragging with touch events triggering scroll bar movement
- Fixed Text layers not being selectable when a sticker is behind
- Fixed issue with non-RGBA Images in Safari

### Changed

- Adopted language file format

### Added

- Added option to run sdk without valid license file
- Added Blacks and Whites Adjustments
- Added Temperature Adjustment
- Added Progress Modal to Advanced UI

## 4.11.2

### Fixed

- Fixed wrong version number

## 4.11.1

### Fixed

- Missing vendor folder in release

## 4.11.0

### Fixed

- Fixed 'normal' blending mode for overlays
- Fixed missing letters and areas after rotation in inverted TextDesign layout

### Changed

- Added ability to export while in transform tool
- Added possibility to export/download image in Library Tool
- Changed Transform Tool to auto-accept changes instead of having to acknowledge them

## 4.10.2

### Fixed

- Fixed CHANGELOG and package version

## 4.10.1

### Fixed

- Fixed crash on deserialization after UI `onReady` method

## 4.10.0

### Fixed

- Fixed frame disappearing when changing to other tool
- Fixed cors issue with frames when assets are not on the same domain
- Fixed wrong EXIF orientation in filter previews
- Color Picker disappears after move outside with the mouse

### Added

- Added `forceCrop` option to ReactUI
- Added `editor:ready` event to be emitted when the editor is ready
-                                                                    - Added `crossOrigin` option to the SDK

## 4.9.0

Fixed

---

- Fixed Transparent / Black line in exported image
- Fixed TextDesignRowMultiline text positioning
- Fixed TextDesignRowMultiline not clearing canvas when reloading layout
- Fixed TextDesignRowMultiline sometimes not using masked text when it should
- Fixed TextDesignControls item list not showing scroll bar
- Fixed TextDesignMaskedSpeechBubleComic image insets wrong
- Fixed add reload icon to selected layout in TextDesignControls
- Fixed TextDesign layout size scaling when applying crop/rotation via transform operation
- Fixed current TextDesign sprite not selected when exiting and returning to TD tool
- Fixed TextDesignSunshine frame size too large in width
- Fixed TextDesignSunshine image rows not correctly aligned
- Fixed TextDesignSunshine image-only rows too small in height, image looks stretched
- Fixed crashing when cancelling TextDesign initial creation/text edit
- Fixed TextDesignRowForm height too small in TextDesignRotated layout
- Fixed TextDesignBlocksLight (summerfeeling) TripleRow out of bounds
- Fixed TextDesignCelebrateSimple and TextDesignSunshine images always white
- Fixed color block background row with gradients on the borders on Server
- Fixed some fonts not loaded properly in the server
- Fixed canvas not clearing when zooming/dragging sprites with transparent PNGs and smoothDownscaling
- Fixed editor throwing error when trying to remove overlay operation
- FIxed wrong text case, fonts and banderole on TextDesignCelebrate
- Fixed Inverted Text Design / Text Disappears in Fat Face
- Fixed TextDesignCelebrateSimple random Font not matching Android/iOS
- Fixed TextDesignEqualWidthFat dimensions different than Android/iOS
- Fixed wrong text color in TextDesignMasked layouts
- Fixed wrong font in TextDesignSunshine
- Fixed jumping background particles when scaling TextDesign sprite
- Fixed TextDesignSunshine text out of bounds in height for short words
- Fixed textScaleFactor not being applied to TextDesignMasked layouts
- Fixed TextDesign rows with less than 3 characters
- Fixed TextDesignWatercolor cutted-off text and wrong frame

Added

---

- Implemented Text Design Tool on HTML5
- Added local undo/redo to TextDesignControls
- Added all TextDesign fonts to server constants
- Implemented Serialization for Text Design on HTML5
- Implemented TextDesignCelebrate Layout
- Implemented TextDesignEqualWidth Layout
- Implemented TextDesignMasked Layout
- Implemented TextDesignMultiline Layout
- Implemented TextDesignParticles Layout
- Implemented TextDesignRotated Layout
- Implemented TextDesignSunshine Layout
- Implemented TextDesignWatercolor Layout

## 4.8.0

### Fixed

- Fixed 'Reset Defaults' button on transform tool unexpected behaviour

### Changed

- Improved logging and debugging

## 4.7.0

### Fixed

- Fixed deserialization of crop + orientation operation
- Fixed ui.\_component null because of ReactDOM.render in some circumstances

### Added

- Documented PESDK Server AWS EC2 Deployment

## 4.6.0

### Fixed

- Fixed loading transparent PNGs from library
- Fixed DesktopUI only cropping exact pixel ratios
- Fixed SVG sticker blurry if resized to be larger than input image
- Fixed smoothDownscaling not being applied to sprites

## 4.5.0

### Fixed

- Fixed tap event firing twice on sprite controls in Android

- Fixed setting availableFilters to an empty array in options throws error

## 4.4.0

### Fixed

- Fixed wrong rotated crop frame after after UNDO

- Fixed selected filter no updated on UI when de-serializing an image

- Fixed editor crashing after focus undo

- Fixed editor crash after text undo and redo

- Fixed text line spacing redo not working

- Fixed undo/redo not available for gaussian blur

- Fixed inconsistent undo/redo when changing the editor image

- Fixed focus controls UI not working when clicking redo button

- Fixed rotation redo while in transform tool

- Fixed text redo unavailable after text deletion

- Fixed redo not available on sticker tool

- Fixed some minor bugs in the adjustments shader which led to some false behvaior
- Fixed bug in SDKUtils.deepDefaults
- Fixed blur canvas/webgl renderer difference with mobile

### Changed

- Increased slider knob bigger touch area

- Made slider more accessible

### Added

- Implemented forceCrop in editorOptions for DesktopUI

- Added ability to load stickers at runtime

## 4.3.1

### Fixed

- Fixed issue with webpack and module resolution

## 4.3.0

### Fixed

- Fixed issue with frame Labels overlapping
- Added webcam support for Internet Explorer
- Fixed error in deserializer when merging with defaults
- Fixed Sprite Canvas Controls not clickable on iOS Safari
- Fixed issue when redo text only worked by clicking into the picture in DesktopUI
- Fixed Brush doesn't paint issue after Redo in DesktopUI
- Fixed error thrown when deleting word in library search on DesktopUI
- Focus Undo Redo lead to not expected operations
- Fixed issue with updated canvas size and zoom levels being incorrect after transform undo or redo
- Fixed 3D Lut Filter Image Canvas Renderer Bug causing divergence from webgl renderer in some cases

### Added

- Added REDO feature in DesktopUI
- Added packages for photoeditorsdk and photoeditorsdk-server
- Added platform specific suffix in webpack for overrides
- Added support for JPEG Buffers for NodeJS Target
- Added ability to launch desktop ui with image that is not completely loaded without crash
- Added possibility to initialize SDK with \`incomplete\` image for the DesktopUI
- Added possibility to load watermarkImage in developer example

## 4.2.3

### Fixed

- Fixed issues that were introduced by changing to the correct `.min.js` fileextension. Non-minified extension is now reintroduced to provide backwards compatiblity for now.

## 4.2.2

### Fixed

- Refactored examples and sized them down
- Added prop-types to static build and not as dependency anymore
- Changed the naming of the JS files in the production build to reflect their status minified status to `*.min.js`

## 4.2.1

### Added

- Added better error when license is not a string
- Added examples for ServerUI/NodeUI
- Added npm compatibility when sdk is installed via npm
- Added 'image.uri' field to serialization and deserializer can use it to fetch remote images

## 4.2.0

### Fixed

- Fixed an issue when editing stickers on iOS Safari in ReactUi
- Fixed an issue where webcam access was broken on Edge
- Fixed an issue when adding a sticker blocked the menu on IE11 in DesktopUi
- Fixed an issue where text was scaled wrong after transform
- Fixed issue where square aspect ratio lead to non identical image width and height in ReactUi
- Fixed an issue where parts of text where missing under certain circumstances in DesktopUi
- Fixed an issue where image output was blank after adding sticker and cropping
- Fixed IndexSizeError when going out of bounds in the canvas sticker toolbar on IE11 in ReactUi
- Fixed an issue where screen was frozen after image export in DesktopUi
- Fixed issue when trying to upload unsupported files in the photoroll in the ReactUi
- Fixed an issue where text controls were cropped at the image boundaries in ReactUi
- Fixed jumping text when going into or leaving text edit mode
- Fixed an issue where text or sticker vanished after changing to brush
- Fixed sprite ordering issue when brush was behind text
- Fixed issue when dragging textfield didn't stop
- Fixed error case when dragging and dropping images from another browser window into library in DesktopUi
- Fixed an issue with duplicate text while color was changed
- Fixed a bug where text appeared twice
- Fixed issue when Text and Sticker disappeared when switching to brush
- Fixed issue when Text is not centered
- Fixed an issue where Brushes were duplicated when Zooming in ReactUi
- Fixed issue where brush moved into in foreground by clicking on text
- Fixed a bug where menu overlay background was not showing on IE in the DesktopUi
- Fixed a bug where transform tool was not accessible
- Fixed a bug where text font is initially set to serif because it was not updated after loading
- Fixed bug where requestAnimationFrame was not bound to window when generating stylesheets
- Fixed issue where editor.deserialize(state) did not return Promise as stated in docs
- Fixed bug where requestAnimationFrame was not bound correctly to window

### Changed

- Changed behaviour of text-dropdown menu when there is only 1 option
- Refactored SDK into packages/modules, such that every tool can be loaded as needed (see docs)

### Added

- Added PNG Fallback for SVG sticker to account for IE11 issues
- Added reset button to adjustment tool in DesktopUi
- Added api documentation for all emumerations
- Added support for React 16.02 and shipping it as default version
- Added Text Background Color Option to DesktopUI
- Added possible to check for changed in the OperationStack (see api docs)
- Added TextMetrics to the SDK thus allowing more accurate Text Rendering (see docs)
- Added option to transfer JFIF header / DPI metadata from original to exported image

## 4.1.5

### Fixed

- Fixed bug when deserialisation in DesktopUI did not return a promise

## 4.1.4

### Fixed

- Fixed bug in RequestAnimationFrame polyfill which cause an `illegal invocation` error

## 4.1.3

### Fixed

- Fixed `selective-blur` feature

## 4.1.2

### Fixed

- Fixed mip-maps not being re-generated when using `smoothDownscaling` and changing input image

## 4.1.1

### Fixed

- DesktopUI: Fixed switch to default control causing an uncaught exception when initial image needs
  to be resized

## 4.1.0

### Fixed

- ReactUI: Fixed default options for force controls feature
- ReactUI / DesktopUI: Fixed some IE9 bugs
- ReactUI / DesktopUI: Fixed text scaling issues in combination with transform tool
- ReactUI: Fixed sticker and text selection
- ReactUI: Fix text edit mode default text
- DesktopUI: Fixed transitions for slow browsers
- DesktopUI: Fixed brush size when zooming

### Changed

- ReactUI / DesktopUI: Pre-rotate text using Canvas2D for more crispy pixels

## 4.0.4

### Fixed

- Fix stickers being drawn over default stickers when loading stickers from external resource
  and setting `replaceCategories` to `true`.

## 4.0.3

### Fixed

- Fixed force controls not working when image is changed
- Fixed text sprite anchor in ReactUI
- Fixed tinted frames not clearing intermediate buffer when using canvas renderer
- Fixed transform controls not working when canceling switching controls
- Fixed sticker categories loaded from external source not taking `replaceCategories` option into
  account
- Fixed default category label for frame categories
- Fixed sticker category label translation
- Fixed stickers not being re-scaled when image with different dimensions is loaded

## 4.0.2

### Fixed

- Fixed deserialization
- Fixed shapes in IE11
- DesktopUI: Invalid HEX color values are handled correctly now

### Changed

- ReactUI: Better initial sticker dimensions
- Changed default names for shape stickers

## 4.0.1

### Fixed

- Transform control works again

## 4.0.0

PhotoEditorSDK for HTML5 v4.0.0 comes with an all-new user interface designed
and optimized for desktop browsers!

This version contains many API changes. Please refer to our documentation for
the new API: Click [here](https://docs.photoeditorsdk.com/guides/html5/v4-ReactUI)
for the ReactUI and [here](https://docs.photoeditorsdk.com/guides/html5/v4-DesktopUI)
for our new DesktopUI.

**Please note:** With version 4.0.0, you will need to pass in your license file
as a string using the `license` option - both to our UIs as well as the SDK
itself (in case you're using the PhotoEditorSDK class manually). You can obtain
your license, please sign in on our [website](https://www.photoeditorsdk.com/login).

### Added

- Our UIs now have the ability to load custom font faces from .woff files
- Added a new `overlay` operation that places an asset onto the image with
  a specific blend mode
- Added two new blur operations: `gaussian` (blurs the whole image) and `linear`
  (linear gradient blur). The previous `linear` blur is now called `mirrored`.
- Added a 3D Lookup Table filter that can apply color filters using a 3D LUT
  image. All our default filters are based on this technology now. This also
  means that you can now use your iOS and Android filters on HTML5 as well.
  Please refer to our [documentation](https://docs.photoeditorsdk.com/guides/html5/v4-DesktopUI/features/filters)
  to learn more about this feature and how to create your own filters.
- Added a new serialization format (3.0.0) which has been designed for cross-
  platform serialization.
- Our new UI adds controls for various new internal features such as sticker
  opacity and sticker tinting.

### Changed

- Replaced our default sticker packs with two new sticker packs: `emoticons`
  and `shapes`
- `linear` focus is now called `mirrored`

### Known bugs

- Serialization definition is not final yet
- SVG Stickers don't work in IE11

## 3.6.17

### Fixed

- Fixed sticker category selection

## 3.6.16

### Fixed

- Fixed mipmap generation when texture dimensions change from POT to non-POT
- Zoom is now reset to previous level when leaving controls
- Added workaround for Safari WebGL bug when using SVG stickers

### Added

- Add translation key for zoom

## 3.6.15

### Fixed

- Fixed stickers not resized correctly when `fixedRatio` is set to `false`

## 3.6.14

### Editor

- Added `snapRotation` and `snapRotationTolerance` to sticker controls. These options allow you
  to specify values for rotation snapping. `snapRotation` defines the rotation interval (in degrees)
  at which the rotation should snap while `snapRotationTolerance` defines the tolerance around the
  `snapRotation` at which it should snap.
- Fixed exposed `ReactComponent`. For an example on how to use it, [click here](https://github.com/imgly/pesdk-react-demo).

## 3.6.13

### Editor

#### Bugfixes

- Fix text and sticker items not draggable when brush has been drawn on top of them

## 3.6.12

### Editor

#### Bugfixes

- Fix cross origin issue when using frames
- Fix crop rotation when no crop ratio is selected

## 3.6.11

### Editor

#### Bugfixes

- Fixed `editor.controlOptions.crop.selectableRatios` option

## 3.6.10

### Editor

#### Bugfixes

- Fixed a bug that caused text items to switch text when being taken to front
- Fixed a bug that caused foreground and background color to not get updated when switching between
  text items

## 3.6.9

### Editor

#### Bugfixes

- Fixed sticker loading from external JSON
- Sticker category labels are not resolved using the language objects anymore. Instead, it's using
  the `label` property of a category
- Base URL is no longer prepended to absolute asset URLs

## 3.6.8

### Editor

#### Bugfixes

- Fix a bug that caused sticker controls to break when switching between stickers
- Fix a bug that caused editor to crash when exiting the crop control after clicking the `original`
  option
- Hide crop straighten control when `original` option is active

## 3.6.7

### Editor

#### Bugfixes

- `smoothDownscaling` option now works propertly again for both the editor and stickers

## 3.6.6

### Editor

#### Bugfixes

- Fix force crop / force controls

## 3.6.5

### Editor

#### Bugfixes

- Fix SVG filters in combination with `<base>` tags

## 3.6.4

### Editor

#### Bugfixes

- Fix rotation not being applied when cropping the whole image

## 3.6.2

### Editor

#### Bugfixes

- Fix text height calculation in Firefox < 45.0

## 3.6.1

### Editor

#### Features

- New frames feature replaces the old border feature
- We got rid of the "apply" button - instead, we introduced "Default" options for all controls
- Only one focus operation is allowed at a time, so we updated the focus controls
- Font list is now scrollable
- Google Fonts are preloaded correctly, making sure the font previews are rendered correctly
- Displaying a warning when font loading fails
- Don't reload fonts every time the text controls are opened

#### Bugfixes

- Crop ratios are now grouped correctly
- Fix crop assets preloading
- Fix text height calculation
- Rotating a crop with fixed pixel values does no longer flip the crop

### SDK

#### Bugfixes

- Fix crop with pixel values
- Fix export of transparent images, un-premultiply alpha
- Fix gamma rendering in combination with brightness and contrast

## 3.6.0

### Editor

:rotating_light: **Please note:** From this version on, you will need an API key to use PhotoEditorSDK
for HTML5. Please [log in to your account](https://www.photoeditorsdk.com) to obtain an API key and
specify it using the `apiKey` option.

#### Features

- Implement licensing check and `apiKey` option

#### Bugfixes

- Fix filter history / undo
- Fix text height calculation (now uses DOM element measuring when available)
- Fix crop and rotation compensation for sprites
- Fix very small brushes
- Fix splash screen assets being preloaded incorrectly

### Engine

#### Bugfixes

- Fix a bug that caused Quads to be disposed incorrectly

### SDK

#### Bugfixes

- Fix selective blur feature in combination with other texture units
- Fix selective blur for canvas

## 3.5.3

- Removed React and ReactDOM dependencies from source code, they now need to be installed manually.

## 3.5.2

### Editor

#### Features

- Add an optional `Selective Blur` feature that allows users to blur parts of the image using a
  brush. Can be enabled using `editor: { tools: ['selective-blur'] }`.
- Add an optional `Gamma correction` feature under `Adjustments`. Can be enabled using
  `editor: { tools: ['gamma'] }`.
- Due to changes to our feature set, our serialization schema has been updated to version `1.0.1`.
  The new `schema.json` can be found [here](http://static.photoeditorsdk.com/serialization/schema-1.0.1.json).
- Decrease brush step, making large brushes look smoother
- Add output dimensions to crop control
- Allow `dimensions` option for crop ratios, causing the resulting image to be exactly of the given
  dimensions (Needs to be a `PhotoEditorSDK.Math.Vector2`)
- Add a preloader (can be disabled using the `editor.preloader` option)

#### Bugfixes

- Fix crop rotation deserialization issues
- Fix `smoothUpscaling` option for intermittent render textures
- Fix knob dragging of linear focus controls

### SDK

#### Features

- Add `dimensions` option (of type `PhotoEditorSDK.Math.Vector2) to`CropOperation`
- Add `gamma` option to `AdjustmentsOperation`

#### Bugfixes

- Fix SDK disposal (`PhotoEditorSDK#dispose` now correctly disposes all textures and shaders)

### Engine

#### Bugfixes

- Only use `highp` shader precision when it's available

## 3.5.1

This version of PhotoEditorSDK for HTML5 contains a _lot_ of memory management improvements, fixing
a lot of exporting issues and slowdowns on slower / older devices.

### Editor

#### Features

- Implement Google Fonts support
- Add `editor.smoothUpscaling` option (default: `false`)

#### Bugfixes

- Fix brush texture dimensions while drawing
- Fix brush size when entering tool after zooming in
- Fix webcam button on photo roll screen
- Fix text cropping
- Fix crop ratio remember function
- Fix rounding issues causing textures to be re-initialized
- Fix text selection bug when zoom is larger than 100%
- FilterOperation was not removed when Original Filter was selected
- Fix a bug that caused brushes to disappear after clicking the canvas on retina devices
- Fix brush thickness after crop
- Don't show drag cursor on canvas if image is not draggable
- Correctly set texture quality on export

### SDK

#### Bugfixes

- Correctly set texture quality on export
- Fix GLSL randomness function on Mobile Safari
- Operation: Fix RenderTexture disposal
- WebGLFilterManager: Fix RenderTexture disposal
- Shader: Correctly dispose vertex and fragment shaders
- LookupTableFilter: Fix texture disposal
- Dispose render textures before exporting
- Fix PrimitivesStack (Filter) disposal
- Disable operation cache during export, free memory after rendering operation
- Fix SpriteOperation leaking textures

#### Features

- Add `editor.smoothUpscaling` option (default: `false`)

#### Improvements

- Re-use path canvases

### Engine

#### Features

- Automatically add float precision to shaders, depending on platform

## 3.5.0

Breaking changes are tagged with :rotating_light:

### Editor

#### Features

- Editor now uses smaller textures while editing which has a **huge** impact on performance when
  using larger images
- Add `editor.forceControls` option. See [the documentation](https://www.photoeditorsdk.com/documentation/html5/editor/force-controls) for more info.
- Add an overlay bar for text elements with delete and edit buttons (Edit button only appears on
  mobile browsers)
- Zoom now has new zoom levels, similar to Photoshop
- Sticker controls: Add `fixedRatio` option (default is `true`)
- :rotating_light: Crop controls: Renamed `additionalRatios` to `ratios`

#### Improvements

- Add brush opacity back in, now behaving correctly
- Improve brush performance
- Photo roll now looks better on mobile browsers

#### Bugfixes

- Stickers and texts are selected on click, not on mousedown
- Fix touch event handling on Android
- Fix a crop display bug in Internet Explorer
- Crop is now correctly repositioned when flipping the image

### SDK

#### Features

- :rotating_light: All operations: All position values are now relative (0...1) instead of pixel
  values. :rotating_light:
- Add `textureQuality` option
- Add `export.fileBasename` option
- Add `export.quality` option (only works with image/jpeg mime type)

#### Bugfixes

- PhotoEditorSDK no longer tries to `require('gl')` and `require('canvas')`, fixing usage in
  Meteor environments
- Fix transparent images getting a white background when filters are applied (WebGL only)

---

## 3.4.2-1

### Editor

#### Bugfixes

- Fix upload and webcam icons in photo roll
- Fix `undefined` value in photo roll search input

---

## 3.4.2

### Editor

#### Features

- New crop UI with smooth rotation
- Implemented serialization and deserialization

#### Bugfixes

- Switch to home screen before exporting (this applies text objects that are being edited while
  clicking the export button)
- Fix brushes disappearing when cropping
- Fix unnecessary re-rendering of some components

### SDK

#### Bugfixes

- Fix `#setSpriteScale`
- Operations no longer listen for other operations to update (e.g. `SpriteOperation` listening for
  `CropOperation` to change, so that sprite positions can be changed accordingly). Instead, the UI
  calls `crop`, `rotate` and `flip` on operations that need to compensate changes of other
  operations.

---

## 3.4.1

### Editor

#### Bugfixes

- PhotoRoll: Fix distribution of photos across columns
- PhotoRoll: Implemented nicer scroll bars
- PhotoRoll: Fix icon dimensions on retina screens
- Fix repositioning of text objects when image is flipped
- Error messages disable the editor while they're open
- Re-added sticker options bar (flipping, take to front, remove)
- Switching back to home screen when text has been removed
- Fix texts not being deleted

---

## 3.4.0

Please note that this release changes the names of quite a few API methods and options. Please
refer to our current documentation in case you experience any issues with this release.

### Editor

#### Features

- New Photo Roll feature that lets your users pick from a variety of photos
- Implemented new splash screen
- Added `showHeader` option
- Added `showTopBar` option
- Added thickness presets for brushes
- Implemented `ReactUI#export` to manually trigger export
- Implemented `ReactUI#setImage` to change the image that's currently being edited
- Color pickers close automatically when clicking outside of a picker
- New text elements automatically clear their contents when edited for the first time (removing
  the default placeholder)
- Re-structured options hash
- EXIF orientation is now handled by a separate `ExifOrientationOperation` so that it doesn't
  interfere with the `OrientationOperation`
- Make K1, K2, K6 and KDynamic filters available via the UI again
- Developers are now allowed to override single localization strings
- Refactored all controls, allowing controls to have their own top-bar controls

#### Bugfixes

- Fixed a retina issue that caused the editor to export images with extremely large dimensions
- Fixed default font selection for text tool
- Fixed file picker not working when selecting the same file twice
- Fixed editor in IE9
- Add sub header for webcam screen back in

### Backend

#### Features

- Added Clarity, Exposure, Shadows and Highlights to adjustments
- Added `LUTFilter` which uses the same filter technology we use in iOS and Android
- Brushes are now part of SpriteOperation, allowing other sprites to be layered on top of brushes
- Brushes can now have a hardness (a value between 0 (blurry) to 1 (hard))
- Reworked brush drawing, allowing to draw brush images other than circles
- Added context creation error reporting
- Added WebGL framebuffer error reporting
- Added a `smoothDownscaling` option that will enable mip-mapping in WebGL and a smooth resizing
  algorithm in Canvas2D
- Implemented `setSpriteScale` which allows the developer to export images at a specific scale.
  The sprite scale is incorporated in export while zoom level is not.
- Many refactorings, e.g. introducing `Constants.OPTION_TYPE`, `Constants.UNIFORM_TYPE` and
  `Constants.RENDERER_TYPE` objects for cleaner code.

#### Bugfixes

- Fixed memory leaks in all operations
- Fixed textures of images where `width` and `height` properties have been changed
- Fixed retina performance issues
