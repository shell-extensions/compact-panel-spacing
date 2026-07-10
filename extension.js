import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const STYLE_CLASS = 'compact-panel-spacing-right';

export default class CompactPanelSpacingExtension extends Extension {
    enable() {
        this._rightBox = Main.panel?._rightBox ?? null;
        if (!this._rightBox)
            return;

        this._rightBox.add_style_class_name(STYLE_CLASS);
    }

    disable() {
        if (this._rightBox)
            this._rightBox.remove_style_class_name(STYLE_CLASS);

        this._rightBox = null;
    }
}
