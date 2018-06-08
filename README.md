# tjamp-icons
npm package for custom tjamp icons

# Editing icons
Open the icons.ai and edit away in illustrator
Use artboards for each icon

## Exporting icons
1. In Illustrator: Select `File -> Export -> Export for Screens`
2. Export to `"project-folder"/tjamp-icons/svg`
3. DO NOT tick `Create subfolders`
4. Set formats "SVG"
5. Export and Replace
6. Upload SVG icons to fontello.com
7. Select and download all
8. Extract downloaded zip
9. Drag fonts into `dist/fonts`
10. Drag config.json into `dist`

#Publishing
1. Run gulp
2. Update version number
3. `npm publish`

#Installing in app
- Install new package
- Replace android fonts in `/android/app/src/main/assets/fonts`
- Rebuild app