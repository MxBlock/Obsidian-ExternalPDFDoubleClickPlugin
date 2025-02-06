"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class ExternalPDFDoubleClickPlugin extends obsidian_1.Plugin {
    onload() {
        console.log("ExternalPDFDoubleClickPlugin loaded");
        // Listen for double-click events on the document.
        this.registerDomEvent(document, 'dblclick', (evt) => {
            // Declare target as HTMLElement | null to accommodate potential null values.
            let target = evt.target;
            // Traverse up the DOM tree to find an element with the "data-path" attribute.
            while (target && target !== document.body) {
                if (target.hasAttribute('data-path')) {
                    const path = target.getAttribute('data-path');
                    if (path) {
                        const file = this.app.vault.getAbstractFileByPath(path);
                        // If the file exists, is a TFile, and is a PDF, open it externally.
                        if (file && file instanceof obsidian_1.TFile && file.extension.toLowerCase() === 'pdf') {
                            // Cast this.app to any to bypass type-checking for openWithDefaultApp.
                            this.app.openWithDefaultApp(file.path);
                            new obsidian_1.Notice("Opening PDF in external default app");
                            evt.preventDefault();
                            evt.stopPropagation();
                            return;
                        }
                    }
                }
                target = target.parentElement;
            }
        });
    }
    onunload() {
        console.log("ExternalPDFDoubleClickPlugin unloaded");
    }
}
exports.default = ExternalPDFDoubleClickPlugin;
//# sourceMappingURL=main.js.map