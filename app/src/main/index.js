'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import fs from 'fs'

console.log(app.getPath('appData'))

import fontManager from './fontManager'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      experimentalFeatures: true,
    }
  })

  fontManager()

  ipcMain.on('SAVE_IMAGE', (event, { bounds, family }) => {
    mainWindow.capturePage(bounds, image => {
      const buff = image.toPNG()
      fs.writeFile(`${family}.png`, buff, err => {
        if (err) console.error(err)
        event.sender.once('IMAGE_SAVED')
      })
    })
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
