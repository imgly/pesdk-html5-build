/* global PhotoEditorSDK, Image */
window.addEventListener('load', function () {
  /**
   * Load initial image, initialize UI
   */
  var myImage = new Image()
  myImage.addEventListener('load', function () {
    var DesktopUI = PhotoEditorSDK.UI.DesktopUI
    window.editor = window.editor = new DesktopUI({
      container: document.querySelector('#container'),
      license: '{"owner":"Imgly Inc.","version":"2.1","enterprise_license":true,"available_actions":["magic","filter","transform","sticker","text","adjustments","brush","focus","frames","camera"],"features":["adjustment","filter","focus","overlay","transform","text","sticker","frame","brush","camera"],"platform":"HTML5","app_identifiers":["photoeditorsdk.com","*.photoeditorsdk.com","localhost","127.0.0.1"],"api_token":"1xGBv1RhFBWENvLqYY-wlw","domains":["https://api.photoeditorsdk.com"],"issued_at":1498486036,"expires_at":null,"signature":"E80kO7c0z5cDRAZqBrOY71IZOyfs2Z099yPeVg+sefHxNsWr4KHAQEbkvXbUrz+BFRZoBBL1rwMpLITaUUXaQXk9Az/y+xWBVF+V0LsdcDknY6SHdMSJt3jQFR7tmY0lBqX7GlrMZQa57Z08D4b6xEbO9+WawUmQWR4segqRJDlVyVABegtgw/5TfjAFApW7QEB/J9SexOHO7J3KU3jQ5YWk3JB364dB/rqDs2JKoMU1yTcSQ0XWVbEmT0v6FzTZd8mQ0cUBhsSst7tEsjokmKcjYcQ1WgQepItcv8I/M10EzhvG/V4H54GCShAnS60tigwj7ZqnUQUCGd3BwKrppKQwrWDA2EMx1NlEbZ+AMdBEGaj27JbNznxVB80vKGKsKOBl0U8+H1zYdERhQ71OQ1dYbFKP8Gr9W6HAI3xWNynrFjcWOVMSw+7qBGbc7ptwbyi2mgjc3cV/NKwl002i92N6FGvRpTfIT1bt6UH+ZZvcrLTYXYmiaww6urSThRfYijCe7xHjP/6ZNeS4BbBya+2b6ws9MtWD3jnkXgfKiu1Lukbe6yE8LC16ag9z/Qvld79/QDniMJn2feIAQh3nP2QKzEfHysRff5lDEhBX1sFlb8sgdq8DUQkAqciVezG/6PUKDjAFWw9I68IRHJ3h5Q3YmCWt8kZiCgincOr9eoM="}', // Please add your license here (in string format)
      editor: {
        image: myImage,
        preferredRenderer: 'webgl'
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
})
