import { CustomLanguages } from './language';
import { CustomThemes } from './theme';
import { CustomCard } from './card';
import { CustomAdvancedToolbarItem } from './toolbarItem';
import { CustomLoader } from './loader';
import { CustomButtons } from './buttons';
import { CustomMeasurements } from './measurements';
export interface CustomComponents {
    /**
     * Card will have following props to be taken care of
     * - image: string, path to image
     * - label: string
     * - isActive: boolean
     * - onClick: click handler that already exists in code,
     *  the user will just have to place it on the element you want to react to
     * - tool: the tool a card component will be loaded in
     */
    advancedUICategoryCard: CustomCard;
    advancedUIItemCard: CustomCard;
    /**
     * toolbarItem will have following props to be taken care of
     * - icon: SVGElement, user can use this or replace it with your icon
     * - label: string
     * - isActive: boolean
     * - onClick: click handler that already exists in code,
     *  the user will just have to place it on the element you want to react to
     * - tool: the tool a card component will be loaded in
     */
    advancedUIToolbarItem: CustomAdvancedToolbarItem;
    /**
     * loader will have following props to be taken care of
     * - show: boolean
     */
    loader: CustomLoader;
    /**
     * buttons will have following props to be taken care of
     * - icon: ReactNode, user can use this or replace it with your icon
     * - label: string
     * - isDisabled: boolean
     * - onClick: click handler that already exists in code,
     *  the user will just have to place it on the element you want to react to
     */
    buttons: CustomButtons;
}
export interface CustomConfiguration {
    /**
     * New language locale
     * eg: languages: { es: {...} }
     * In case one wants to override only a certain lables
     * eg: { de: { filter: { controls: { buttonReset: 'Zurücksetzen' } } } }
     */
    languages?: CustomLanguages;
    /**
     * Theming options to change the user interface appearance. This allows to alter predefined existing
     * theme presets or to create new themes which can be enabled when their corresponding key (name)
     * is set as the `Configuration.theme`.
     * New theme
     * eg: theme: { pink: {...} }
     * In case one wants to override only a certain attributes
     * eg: { dark: { toolControlBar: { border: '#FFFFFF' } } }
     */
    themes?: CustomThemes;
    /**
     * Option to change the width or height of certain UI elements. e.g. Toolbar or CanvasBar
     * eg: { advancedToolbar: { width: 64 } }
     */
    measurements?: CustomMeasurements;
    /** Cards and toolbarItem supported only in Advanced UI, loader is supported in both UIs */
    components?: CustomComponents;
}
