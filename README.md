# Obsidian-DoubleClickToOpenDefaultApp

Fully created with AI! I have no idea how to program JS for obsidian and needed this plugin, so usw on own risk.

To usw the Plugin either use the Installation guide below or create a new folder with the plugins name and Insert the main.js an manifest.json. Restart obsidian done (never tested this version).

# Installation
cd {your vault}/.obsidian/plugins

git clone https://github.com/MxBlock/Obsidian-ExternalPDFDoubleClickPlugin

npm install

npm run build


# Folder Structure
ExternalPDFDoubleClickPlugin/

├── src/

│   └── main.ts      // Your plugin source code (the code provided earlier)

├── manifest.json    // Plugin metadata (see below)

├── package.json     // npm configuration file

└── tsconfig.json    // TypeScript configuration file

# Other
Thanks to aidan-gibson for providing an even better program i could look into some bit
https://github.com/aidan-gibson/obsidian-opener
