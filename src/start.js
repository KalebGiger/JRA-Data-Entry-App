const electron = require('electron')
const app = electron.app
const path = require('path')
const isDev = require('electron-is-dev')
const BrowserWindow = electron.BrowserWindow
const Store = require('./store.js');

let mainWindow;

const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences',
    defaults: {
        // 800x600 is the default size of our window
        windowBounds: { width: 800, height: 600 }
    }
});

function createWindow() {
    let { width, height } = store.get('windowBounds');
    mainWindow = new BrowserWindow({
        width, 
        height,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    mainWindow.on('resize', () => {

        let { width, height } = mainWindow.getBounds();

        store.set('windowBounds', { width, height });
      });

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`,
    )

    mainWindow.on('closed', () => {
        mainWindow = null
    })
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