## Getting Started
### Create a project
- In a directory, where you want to save your project
- run `npm init`
- a package.json file will be created, with minimal information about the project

### Installing peer dependancies
  `npm install --save react@^16.3 react-dom@^16.3 styled-components@^4.4`

### Installing `photoeditorsdk`

#### `package.json`
​
- copy the `photoeditorsdk` folder from `build` to anywhere in your project
- add `"photoeditorsdk": "file: $PATH/photoeditorsdk"` to your `package.json` and replace `$PATH` with the relative path to the folder
  - e.g.:
  ```diff
  {
  ...
  "dependencies": {
+    "photoeditorsdk": "file:./pesdkBuild/photoeditorsdk",
    "styled-components": "^4.4.0",
    "react": "^16.3.0",
    "react-dom": "^16.3.0"
  },
  ...
  }
  ```
- run `npm install`

- create a dist folder
- copy the `assets` from `photoeditorsdk` build folder to `dist`

### `index.html`
- create a `index.html` in the root of the project.
```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  </body>
  </html>
```
create a <div> tag as a container for the editor. The editor will adapt its size according to the dimensions of the container. For the sake of simplicity, specify the dimensions using inline styles.

```diff
<body>
+   <div id="editor" style="width: 100vw; height: 100vh;"></div>
</body>
```

### `index.js`
- Finally, in order to initialize the editor, instantiate the UI using JavaScript create a `index.js` in the root of the project.
```js
PhotoEditorSDKUI.init({
  container: '#editor',
  image: 'example.png', // Image path relative to assets folder
}).then((editor) => {
  console.log('PhotoEditorSDK for Web is ready!')
  editor.on(UIEvent.CLOSE, () => {
    console.log('closed')
  })
})

```

include the `index.js` script in our html file

```diff
<body>
  <div id="editor" style="width: 100vw; height: 100vh;"></div>
+   <script src="index.js"></script>
</body>
```

Now all you have to do is launch a webserver. Let's use parcel for simplicity

- run `npx parcel index.html -p `
- now open http://localhost:1234/ in your browser
