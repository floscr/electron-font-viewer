import { app, BrowserWindow, ipcMain } from 'electron'
import fs from 'fs'
import fsp from 'fs-promise'
import path from 'path'
import mkdirp from 'mkdirp-promise'

import config from '../../../config'

const dataPath = path.join(app.getPath('appData'), config.name)
const imageCachePath = path.join(dataPath, '/image_cache')

// Create the data paths to store the image cache
const createDataDirectories = async () => {
  if (!fs.existsSync(dataPath)) await mkdirp(dataPath)
  if (!fs.existsSync(imageCachePath)) await mkdirp(imageCachePath)
}
createDataDirectories()

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
      const buffer = image.toPNG()
      const filePath = path.join(imageCachePath, `${family}.png`)
      if (fs.existsSync(filePath)) {
        event.sender.send('IMAGE_SAVED')
      } else {
        fs.writeFile(filePath, buffer, err => {
          if (err) console.error(err)
          event.sender.send('IMAGE_SAVED')
        })
      }
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
