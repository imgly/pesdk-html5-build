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

declare class EditorFunctions {
  /**
   * Disposes the PhotoEditor SDK Engine instance
   */
  dispose: () => void

  /**
   * Resets the PhotoEditor SDK
   */
  reset: () => void

  /**
   * Closes the PhotoEditor SDK UI and disposes all Engine instance
   */
  close: () => void

  /**
   * Returns true if there were changes made to the image since it was opened or saved
   */
  hasChanges: () => boolean

  /**
   * Exports an image
   * @param {ExportConfiguration['image']} options
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
  setImage: (image: string | HTMLImageElement) => Promise<void>

  /**
   * Serializes current editor state to the serialization schema
   * @param {Object} options
   * @param {boolean} options.image
   */
  serialize: (options: { image: boolean }) => Promise<SerialisationSchema>

  /**
   * Deserializes serialization schema to editor state
   * @param {SerializationSchema} data
   */
  deserialize: (data: SerialisationSchema) => Promise<void>
}

/**
 * @ignore
 */
// @ts-ignore:2686
export class PhotoEditorSDKUIComponent extends React.Component<ConfigurationProps>, EditorFunctions {
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
export * from './components/advanced/itemCard';
export * from './components/base/buttons';
export * from './components/advanced/toolbarItem';
export * from './components/base/cardLabel';
export * from './components/base/cardAvatar';
export * from './components/base/color/colorItem';
export * from './components/base/color/colorItemComponents';
export * from './components/base/dialog/dialog';
export * from './components/base/dialog/dialogComponents';
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
export * from './configuration/feature/imageMimeType';
export * from './configuration/engine';
export * from './configuration/engine/fontManager';
export * from './configuration/engine/assetProvider';
export * from './configuration/engine/downscaleOptions';
export * from './configuration';
export * from './configuration/props';
export * from './tools/adjustment';
export * from './tools/custom';
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
import { CustomItemCardProps } from './components/advanced/itemCard';
import { CustomDialogProps } from './components/base/dialog/dialog'
import { CustomCardLabelProps } from './components/base/cardLabel'
import { CustomCardAvatarProps } from './components/base/cardAvatar'
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
import {
  DialogBaseProps,
  DialogContainerProps,
  DialogBackdropProps,
  DialogHeaderProps,
  DialogBodyProps,
  DialogFooterProps,
  DialogSpinnerProps,
} from './components/base/dialog/dialogComponents';

import { CustomSearchProps } from './components/base/input/search';

export * from './components/hooks/useSetImage';
export * from './components/hooks/useIsLayoutAdvanced';
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUICategoryCard extends React.Component<CustomCardProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUIItemCard extends React.Component<CustomItemCardProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUIToolbarItem extends React.Component<CustomToolbarItemProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUICardLabel extends React.Component<CustomCardLabelProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class CardAvatar extends React.Component<CustomCardAvatarProps> {}
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
export class TextPrimaryButton extends React.Component<CustomButtonProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class TextSecondaryButton extends React.Component<CustomButtonProps> {}
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

/**
 * @ignore
 */
// @ts-ignore:2686
export class Dialog extends React.Component<CustomDialogProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DialogBase extends React.Component<DialogBaseProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DialogContainer extends React.Component<DialogContainerProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DialogBackdrop extends React.Component<DialogBackdropProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DialogHeader extends React.Component<DialogHeaderProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DialogBody extends React.Component<DialogBodyProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DialogFooter extends React.Component<DialogFooterProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DialogSpinner extends React.Component<DialogSpinnerProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class SearchField extends React.Component<CustomSearchProps> {}
