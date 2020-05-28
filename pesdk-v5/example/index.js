import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

PhotoEditorSDKUI.init({
  container: '#editor',
  image: 'example.png',
}).then((editor) => {
  console.log('PhotoEditorSDK for Web is ready!')
  editor.on(UIEvent.CLOSE, () => {
    console.log('closed')
  })
})
