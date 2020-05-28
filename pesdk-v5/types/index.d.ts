import React from 'react'
import { Configuration } from './configuration'
import { ConfigurationProps } from './configuration/props'
import { ExportConfiguration } from './configuration/feature/export'
import { EventEmitter } from './eventEmitter'
import { UIEvent } from './events'
import { SerialisationSchema } from './serialization/3.8.0/schema'

export class PhotoEditorSDKUIComponent extends React.Component<ConfigurationProps> {
  public ui: EventEmitter<UIEvent>

  /**
   * Disposes the PhotoEditor SDK Engine instance
   */
  public dispose: () => void

  /**
   * Closes the PhotoEditor SDK UI and disposes all Engine instance
   */
  public close: () => void

  /**
   * Exports an image
   * @param {ExportConfiguration['image']} options = false
   * @return {Promise}
   */
  public export: (options?: ExportConfiguration['image']) => Promise<string>

  /**
   * Dynamically sets the image to the ui
   * @param {Image} image
   */
  public setImage: (image: string | HTMLImageElement) => void

  /**
   * Serializes current editor state to the serialization schema
   * @param {Image} image
   */
  public serialize: ({ image: boolean }) => Promise<SerialisationSchema>

  /**
   * Deserializes serialization schema to editor state
   * @param {Image} image
   */
  public deserialize: (data: SerialisationSchema) => void
}

export class EditorApi extends EventEmitter<UIEvent> {
  /**
   * Disposes the PhotoEditor SDK Engine instance
   */
  public dispose: () => void

  /**
   * Closes the PhotoEditor SDK UI and disposes all Engine instance
   */
  public close: () => void

  /**
   * Exports an image
   * @param {ExportConfiguration['image']} options
   * @return {Promise}
   */
  public export: (options?: ExportConfiguration['image']) => Promise<string>

  /**
   * Dynamically sets the image to the ui
   * @param {Image} image
   */
  public setImage: (image: string | HTMLImageElement) => void

  /**
   * Serializes current editor state to the serialization schema
   * @param {Image} image
   */
  public serialize: ({ image: boolean }) => Promise<SerialisationSchema>

  /**
   * Deserializes serialization schema to editor state
   * @param {Image} image
   */
  public deserialize: (data: SerialisationSchema) => void
}

/**
 * The UI of PhotoEditor SDK
 */
export const PhotoEditorSDKUI: {
  init: (config: Configuration) => Promise<EditorApi>
}

export * from './common/existingAsset';
export * from './common/canvasAction';
export * from './common/tool';
export * from './common/utils';
export * from './common/float2';
export * from './common/size';
export * from './configuration/custom';
export * from './configuration/custom/card';
export * from './configuration/custom/loader';
export * from './configuration/custom/buttons';
export * from './configuration/custom/toolbarItem';
export * from './configuration/custom/theme';
export * from './configuration/custom/language';
export * from './configuration/custom/measurements';
export * from './configuration/feature/snapping';
export * from './configuration/feature/export';
export * from './configuration/feature/exportFormat';
export * from './configuration/feature/imageFormat';
export * from './configuration/engine';
export * from './configuration/engine/fontManager';
export * from './configuration/engine/assetProvider';
export * from './configuration/engine/downscaleOptions';
export * from './configuration';
export * from './configuration/props';
export * from './tools/adjustment';
export * from './tools/filter';
export * from './tools/focus';
export * from './tools/frame';
export * from './tools/library';
export * from './tools/overlay';
export * from './tools/sticker';
export * from './tools/text';
export * from './tools/brush';
export * from './tools/textdesign';
export * from './tools/transform';
export * from './events';
export * from './eventEmitter';
export * from './serialization/3.8.0/schema';
export * from './serialization/3.8.0/appSerializableState';
