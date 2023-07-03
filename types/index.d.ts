import React from 'react';

import { Configuration } from './configuration';
import {
  ExportConfiguration,
  ExportData,
} from './configuration/feature/export';
import { ImageMimeType } from './configuration/feature/imageMimeType';
import { ConfigurationProps } from './configuration/props';
import { EventEmitter } from './eventEmitter';
import { UIEvent } from './events';
import type { SerialisationSchema } from './serialization/3.12.0/schema';

export class PhotoEditorSDKUIComponent extends React.Component<
  ConfigurationProps
> {
  ui: EventEmitter<UIEvent>;

  /**
   * Disposes the PhotoEditor SDK Engine instance
   */
  dispose: () => void;

  /**
   * Resets the PhotoEditor SDK
   */
  reset: () => void;

  /**
   * Closes the PhotoEditor SDK UI and disposes all Engine instance
   */
  close: () => void;

  /**
   * Returns true if there were changes made to the image since it was opened or saved
   */
  hasChanges: () => boolean;

  /**
   * Exports an image
   * @param {ExportConfiguration['image']} options
   * @return {Promise}
   */
  export: (
    options?: ExportConfiguration['image'] & {
      preventExportEvent?: boolean;
    },
  ) => Promise<ExportData>;

  /**
   * Dynamically sets the image to the ui
   * @param {Image} image
   */
  setImage: (image: string | HTMLImageElement) => Promise<void>;

  /**
   * Returns the width and height of the output image in pixel
   */
  getImageDimensions: () => { width: number; height: number };

  /**
   * Serializes current editor state to the serialization schema
   * @param {Object} options
   * @param {boolean} options.image
   */
  serialize: (options: { image: boolean }) => Promise<SerialisationSchema>;

  /**
   * Deserializes serialization schema to editor state
   * @param {SerializationSchema} data
   */
  deserialize: (data: SerialisationSchema) => Promise<void>;

  /**
   * Returns the original MIME type of the loaded image
   */
  getImageMimeType: () => ImageMimeType;
}

export interface EditorApi extends EventEmitter<UIEvent> {
  /**
   * Disposes the PhotoEditor SDK Engine instance
   */
  dispose: () => void;

  /**
   * Resets the PhotoEditor SDK
   */
  reset: () => void;

  /**
   * Closes the PhotoEditor SDK UI and disposes all Engine instance
   */
  close: () => void;

  /**
   * Returns true if there were changes made to the image since it was opened or saved
   */
  hasChanges: () => boolean;

  /**
   * Exports an image
   * @param {ExportConfiguration['image']} options
   * @return {Promise}
   */
  export: (
    options?: ExportConfiguration['image'] & {
      preventExportEvent?: boolean;
    },
  ) => Promise<ExportData>;

  /**
   * Dynamically sets the image to the ui
   * @param {Image} image
   */
  setImage: (image: string | HTMLImageElement) => Promise<void>;

  /**
   * Returns the width and height of the output image in pixel
   */
  getImageDimensions: () => { width: number; height: number };

  /**
   * Serializes current editor state to the serialization schema
   * @param {Object} options
   * @param {boolean} options.image
   */
  serialize: (options: { image: boolean }) => Promise<SerialisationSchema>;

  /**
   * Deserializes serialization schema to editor state
   * @param {SerializationSchema} data
   */
  deserialize: (data: SerialisationSchema) => Promise<void>;

  /**
   * Returns the original MIME type of the loaded image
   */
  getImageMimeType: () => ImageMimeType;
}

/**
 * The UI of PhotoEditor SDK
 */
export const PhotoEditorSDKUI: {
  init: (config: Configuration) => Promise<EditorApi>;
};
export * from './common/existingAsset';
export * from './common/canvasAction';
export * from './common/tool';
export * from './common/utils';
export * from './common/float2';
export * from './common/size';
export * from './common/color';
export * from './common/categoryHeaderTypes';
export * from './common/defaultConfig';
export * from './common/deepmergeAll';
export * from './components/advanced/card';
export * from './components/advanced/itemCard';
export * from './components/base/buttons';
export * from './components/advanced/toolbarItem';
export * from './components/advanced/toolbar';
export * from './components/advanced/toolControlBar';
export * from './components/basic/toolbar';
export * from './components/basic/toolControlBar';
export * from './components/basic/toolItemsBar';
export * from './components/base/toolbar';
export * from './components/base/toolControlBar';
export * from './components/base/cardLabel';
export * from './components/base/cardAvatar';
export * from './components/base/color/colorItem';
export * from './components/base/color/colorItemComponents';
export * from './components/base/dialog/dialog';
export * from './components/base/dialog/dialogComponents';
export * from './components/base/dropdown/dropdown';
export * from './components/base/windowContainer';
export * from './components/base/slider/slider';
export * from './components/base/slider/sliderComponents';
export * from './components/base/slider/identifier';
export * from './components/base/checkbox/checkbox';
export * from './components/base/checkbox/checkboxComponents';
export * from './components/base/label';
export * from './configuration/custom';
export * from './configuration/custom/theme';
export * from './configuration/custom/language';
export * from './configuration/custom/measurements';
export * from './configuration/feature/snapping';
export * from './configuration/feature/watermark';
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
export * from './serialization/3.12.0/schema';
export * from './serialization/3.12.0/appSerializableState';
/* eslint-disable max-classes-per-file, react/prefer-stateless-function */

import { CustomCardProps } from './components/advanced/card';
import { CustomItemCardProps } from './components/advanced/itemCard';
import { CustomAdvancedToolbarProps } from './components/advanced/toolbar';
import { CustomToolbarItemProps } from './components/advanced/toolbarItem';
import {
  CustomAdvancedToolControlBarProps,
  CustomAdvancedToolControlSectionBarProps,
} from './components/advanced/toolControlBar';
import { CustomButtonProps } from './components/base/buttons';
import { CustomCardAvatarProps } from './components/base/cardAvatar';
import { CustomCardLabelProps } from './components/base/cardLabel';
import { CustomCheckboxProps } from './components/base/checkbox/checkbox';
import {
  CheckboxBaseProps,
  CheckboxCheckMarkProps,
  CheckboxInputProps,
} from './components/base/checkbox/checkboxComponents';
import { CustomColorItemProps } from './components/base/color/colorItem';
import {
  ColorItemBaseProps,
  ColorItemBackgroundProps,
  ColorItemTiledBackgroundProps,
  ColorItemActiveOverlayProps,
} from './components/base/color/colorItemComponents';
import { CustomDialogProps } from './components/base/dialog/dialog';
import {
  DialogBaseProps,
  DialogContainerProps,
  DialogBackdropProps,
  DialogHeaderProps,
  DialogBodyProps,
  DialogFooterProps,
  DialogSpinnerProps,
} from './components/base/dialog/dialogComponents';
import { DropdownProps } from './components/base/dropdown/dropdown';
import { CustomSearchProps } from './components/base/input/search';
import { CustomLabelProps } from './components/base/label';
import { CustomSliderProps } from './components/base/slider/slider';
import {
  SliderBaseProps,
  SliderContainerProps,
  SliderInputProps,
  SliderTrackProps,
  SliderLabelProps,
} from './components/base/slider/sliderComponents';
import { CustomWindowContainerProps } from './components/base/windowContainer';
import { CustomBasicToolbarProps } from './components/basic/toolbar';
import { CustomBasicToolControlBarProps } from './components/basic/toolControlBar';
import { CustomBasicToolItemsBarProps } from './components/basic/toolItemsBar';

export * from './components/hooks/useSetImage';
export * from './components/hooks/useGetImage';
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
export class AdvancedUIToolbarItem extends React.Component<
  CustomToolbarItemProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUICardLabel extends React.Component<
  CustomCardLabelProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class CardAvatar extends React.Component<CustomCardAvatarProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class CanvasBarTextSecondaryButton extends React.Component<
  CustomButtonProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ContainedPrimaryButton extends React.Component<
  CustomButtonProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class OutlinedPrimaryButton extends React.Component<CustomButtonProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class OutlinedSecondaryButton extends React.Component<
  CustomButtonProps
> {}
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
export class CheckboxCheckMark extends React.Component<
  CheckboxCheckMarkProps
> {}
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
export class ColorItemBackground extends React.Component<
  ColorItemBackgroundProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ColorItemTiledBackground extends React.Component<
  ColorItemTiledBackgroundProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class ColorItemActiveOverlay extends React.Component<
  ColorItemActiveOverlayProps
> {}

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
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUIToolbar extends React.Component<
  CustomAdvancedToolbarProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUIToolControlBar extends React.Component<
  CustomAdvancedToolControlBarProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class BasicUIToolbar extends React.Component<CustomBasicToolbarProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class BasicUIToolControlBar extends React.Component<
  CustomBasicToolControlBarProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class BasicUIToolItemsBar extends React.Component<
  CustomBasicToolItemsBarProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class Dropdown extends React.Component<DropdownProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class DropdownCaret extends React.Component<DropdownCaretProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class AdvancedUIControlsBarSection extends React.Component<
  CustomAdvancedToolControlSectionBarProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class WindowContainer extends React.Component<
  CustomWindowContainerProps
> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class Slider extends React.Component<CustomSliderProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class SliderContainer extends React.Component<SliderContainerProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class SliderInput extends React.Component<SliderInputProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class SliderTrack extends React.Component<SliderTrackProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class SliderLabel extends React.Component<SliderLabelProps> {}
/**
 * @ignore
 */
// @ts-ignore:2686
export class SliderBase extends React.Component<SliderBaseProps> {}
