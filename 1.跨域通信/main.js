const {app, BrowserWindow,ipcMain} = require('electron')
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  ipcMain.on("hello", function (event,val) {
    console.log(2222,val)
  });


  let win = new BrowserWindow();
  win.loadURL("http://www.baidu.com");

  win.webContents.executeJavaScript(`
  document.getElementById("lg").addEventListener("click", function(){
      require("electron").ipcRenderer.send("hello",'1111');
  });
  `)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
