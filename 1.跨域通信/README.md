## 跨域通信

> 用于electron里面内嵌了一个url的壳子，当我们需要通信时使用

## 实例：

> 点击百度logo弹出222


## 核心代码

```
 win.webContents.executeJavaScript(`
  document.getElementById("lg").addEventListener("click", function(){
    alert(2222)
      require("electron").ipcRenderer.send("app.quit");
  });
  `)

```