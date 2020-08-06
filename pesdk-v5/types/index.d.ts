/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Configuration } from './configuration'
import { ExportConfiguration, ExportData } from './configuration/feature/export'
import { ConfigurationProps } from './configuration/props'
import { EventEmitter } from './eventEmitter'
import { UIEvent } from './events'
import { SerialisationSchema } from './serialization/3.9.0/schema'

interface EditorFunctions {
  /**
   * Disposes the PhotoEditor SDK Engine instance
   */
  dispose: () => void

  /**
   * Closes the PhotoEditor SDK UI and disposes all Engine instance
   */
  close: () => void

  /**
   * returns if editor has some changes
   */
  hasChanges: () => boolean

  /**
   * Exports an image
   * @param {ExportConfiguration['image']} options = false
   * @return {Promise}
   */
  export: (
    options?: ExportConfiguration['image'] & {
      preventExportEvent?: boolean
    }
  ) => Promise<ExportData>

  /**
   * Dynamically sets the image to the ui
   * @param {Image} image
   */
  setImage: (image: string | HTMLImageElement) => void

  /**
   * Serializes current editor state to the serialization schema
   * @param {Image} image
   */
  serialize: ({ image: boolean }) => Promise<SerialisationSchema>

  /**
   * Deserializes serialization schema to editor state
   * @param {Image} image
   */
  deserialize: (data: SerialisationSchema) => Promise<void>
}

/**
 * @ignore
 */
export interface PhotoEditorSDKUIComponent extends React.Component<ConfigurationProps>, EditorFunctions {
  ui: EventEmitter<UIEvent>
}

export interface EditorApi extends EventEmitter<UIEvent>, EditorFunctions {}

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
export * from './common/color';
export * from './common/categoryHeaderTypes';
export * from './components/advanced/card';
export * from './components/base/loader';
export * from './components/base/buttons';
export * from './components/advanced/toolbarItem';
export * from './components/base/cardLabel';
export * from './components/base/color/colorItem';
export * from './components/base/color/colorItemComponents';
export * from './components/base/checkbox/checkbox';
export * from './components/base/checkbox/checkboxComponents';
export * from './components/base/label';
export * from './configuration/custom';
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
export * from './serialization/3.9.0/schema';
export * from './serialization/3.9.0/appSerializableState';
import { CustomCardProps } from './components/advanced/card'
import { CustomToolbarItemProps } from './components/advanced/toolbarItem'
import { CustomLoaderProps } from './components/base/loader'
import { CustomCardLabelProps } from './components/base/cardLabel'
import { CustomButtonProps } from './components/base/buttons'
import {
  ColorItemBaseProps,
  ColorItemBackgroundProps,
  ColorItemTiledBackgroundProps,
  ColorItemActiveOverlayProps,
} from './components/base/color/colorItemComponents'
import { CustomColorItemProps } from './components/base/color/colorItem'
import { CustomLabelProps } from './components/base/label'
import { CustomCheckboxProps } from './components/base/checkbox/checkbox'
import {
  CheckboxBaseProps,
  CheckboxCheckMarkProps,
  CheckboxInputProps,
} from './components/base/checkbox/checkboxComponents'

/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUICategoryCard extends React.Component<CustomCardProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUIItemCard extends React.Component<CustomCardProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUIToolbarItem extends React.Component<CustomToolbarItemProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class Loader extends React.Component<CustomLoaderProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUICardLabel extends React.Component<CustomCardLabelProps> {}

/**
 * @ignore
 */
// @ts-ignore:2686
export class CanvasBarTextSecondaryButton extends React.Component<CustomButtonProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ContainedPrimaryButton extends React.Component<CustomButtonProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class OutlinedPrimaryButton extends React.Component<CustomButtonProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class OutlinedSecondaryButton extends React.Component<CustomButtonProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class SpriteActionButton extends React.Component<CustomButtonProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class IconButton extends React.Component<CustomButtonProps> {}

/**
 * @ignore
 */
// @ts-ignore:2686
export class Label extends React.Component<CustomLabelProps> {}

/**
 * @ignore
 */
// @ts-ignore:2686
export class Checkbox extends React.Component<CustomCheckboxProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class CheckboxBase extends React.Component<CheckboxBaseProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class CheckboxCheckMark extends React.Component<CheckboxCheckMarkProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class CheckboxInput extends React.Component<CheckboxInputProps> {}

/**
 * @ignore
 */
// @ts-ignore:2686
export class ColorItem extends React.Component<CustomColorItemProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ColorItemBase extends React.Component<ColorItemBaseProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ColorItemBackground extends React.Component<ColorItemBackgroundProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ColorItemTiledBackground extends React.Component<ColorItemTiledBackgroundProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ColorItemActiveOverlay extends React.Component<ColorItemActiveOverlayProps> {}
