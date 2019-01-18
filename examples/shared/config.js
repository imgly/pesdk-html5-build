JSON.flatten = function (data) {
  var result = {}
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) {
        recurse(cur[i], prop ? prop + '.' + i : '' + i)
      }
      if (l === 0) {
        result[prop] = []
      }
    } else {
      var isEmpty = true
      for (var p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty) { result[prop] = {} }
    }
  }
  recurse(data, '')
  return result
}

JSON.unflatten = function (data) {
  if (Object(data) !== data || Array.isArray(data)) {
    return data
  }
  var result = {}
  var cur
  var prop
  var parts
  var idx
  for (var p in data) {
    cur = result
    prop = ''
    parts = p.split('.')
    for (var i = 0; i < parts.length; i++) {
      idx = !isNaN(parseInt(parts[i]))
      cur = cur[prop] || (cur[prop] = (idx ? [] : {}))
      prop = parts[i]
    }
    cur[prop] = data[p]
  }
  return result['']
}

window.editorConfig = JSON.flatten({
  data: {
    imageSrc: '../shared/assets/example.jpg',
    watermarkImageSrc: ''
  },
  ui: {
    type: 'desktopui',
    theme: 'dark',
    layout: 'advanced'
  },
  // sdk configuration
  license: '',
  language: 'en',
  logLevel: 'warn',
  preloader: false,
  crossOrigin: 'anonymous',
  responsive: true,
  assets: {
    baseUrl: '../../assets'
  },
  // editor configuration
  editor: {
    enableZoom: true,
    enableDrag: true,
    enableSave: true,
    enableLoad: true,
    enableExport: true,
    preferredRenderer: 'webgl',
    smoothUpscaling: false,
    smoothDownscaling: false,
    displayWelcomeMessage: true,
    displayResizeMessage: true,
    transparent: false,
    zoom: 1.0,
    renderMode: 'dynamic',
    pixelRatio: '1',
    photoroll: false,
    maxMegaPixels: {
      desktop: 10,
      mobile: 5
    },
    forceCrop: false,
    export: {
      fileBasename: 'pesdk-doc',
      format: 'image/jpeg',
      type: 'data-url',
      download: true
    },
    save: {
      fileBasename: 'pesdk-doc',
      download: true,
      format: 'text/json',
      image: true
    },
    tools: [
      'transform', 'filter', 'adjustments', 'focus', 'text', 'textdesign', 'sticker', 'brush', 'frame', 'overlay', 'library',
      'brightness', 'saturation', 'contrast', 'clarity', 'exposure', 'shadows', 'highlights', 'gamma', 'whites', 'blacks', 'temperature'
    ],
    controlsOrder: [
      ['library'],
      ['transform', 'filter', 'adjustments', 'focus'],
      ['text', 'textdesign', 'sticker', 'brush', 'frame', 'overlay']
    ],
    controlsOptions: {
      transform: {
        // enableAcceptButton: false
      },
      focus: {
        highQualityCanvasBlur: false
      }
    }
  }
})

window.pesdkRelaunch = function () {
  if (window.editor) window.editor.dispose()
  window.runEditor()
}
