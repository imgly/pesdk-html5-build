import { CustomCard } from '../../components/advanced/card';
import { CustomItemCard } from '../../components/advanced/itemCard';
import { CustomAdvancedToolbar } from '../../components/advanced/toolbar';
import { CustomAdvancedToolbarItem } from '../../components/advanced/toolbarItem';
import { CustomAdvancedToolControlBar } from '../../components/advanced/toolControlBar';
import { CustomButtons } from '../../components/base/buttons';
import { CustomCheckbox } from '../../components/base/checkbox/checkbox';
import { CustomColorItem } from '../../components/base/color/colorItem';
import { CustomDialog } from '../../components/base/dialog/dialog';
import { CustomBasicToolbar } from '../../components/basic/toolbar';
import { CustomBasicToolControlBar } from '../../components/basic/toolControlBar';
import { CustomBasicToolItemsBar } from '../../components/basic/toolItemsBar';
import { CustomLanguages } from './language';
import { CustomMeasurements } from './measurements';
import { CustomThemes } from './theme';
export interface CustomComponents {
    /**
     * advancedUICategoryCard will receive CustomCardProps
     */
    advancedUICategoryCard?: CustomCard | null;
    /**
     * advancedUIItemCard will receive CustomCardProps
     */
    advancedUIItemCard?: CustomItemCard | null;
    /**
     * advancedUIToolbar will receive CustomAdvancedToolbarProps
     */
    advancedUIToolbar?: CustomAdvancedToolbar | null;
    /**
     * advancedUIToolControlBar will receive CustomAdvancedControlBarProps
     */
    advancedUIToolControlBar?: CustomAdvancedToolControlBar | null;
    /**
     * advancecUIToolbarItem will receive CustomToolbarItemProps
     */
    advancedUIToolbarItem?: CustomAdvancedToolbarItem | null;
    /**
     * basicUIToolbar will receive CustomBasicToolbarProps
     */
    basicUIToolbar?: CustomBasicToolbar | null;
    /**
     * basicUIToolControlBar will receive CustomBasicToolControlBarProps
     */
    basicUIToolControlBar?: CustomBasicToolControlBar | null;
    /**
     * basicUIToolItemsBar will receive CustomBasicToolItemsBarProps
     */
    basicUIToolItemsBar?: CustomBasicToolItemsBar | null;
    /**
     * dialog will receive CusomDialogProps
     */
    dialog?: CustomDialog | null;
    /**
     * buttons will receive CustomButtonProps
     */
    buttons?: CustomButtons | null;
    /**
     * color item will receive CustomColorItemProps
     */
    colorItem?: CustomColorItem | null;
    /**
     * checkbox will receive CustomCheckboxProps
     */
    checkbox?: CustomCheckbox | null;
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
