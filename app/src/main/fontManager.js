import fontManager from 'font-manager'
import { ipcMain } from 'electron'
import * as ipcTypes from './ipcTypes'

// import plist from 'simple-plist'
// import expandHomeDir from 'expand-home-dir'

export default function fontLoader () {
  ipcMain.on(ipcTypes.LOAD_FONTS, (event, dir) => {
    const fonts = fontManager.getAvailableFontsSync()
    event.sender.send(ipcTypes.FONTS_LOADED, fonts)
  })
};

// function disabledFontsPlistLoader (event) {
//   plist.readFile(expandHomeDir('~/Library/Preferences/com.apple.FontRegistry.user.plist'), (data, err) => {
//     if (err) { throw err }
//     event.sender.send('LOADED_DISABLED_FONTS', data)
//   })
// }
