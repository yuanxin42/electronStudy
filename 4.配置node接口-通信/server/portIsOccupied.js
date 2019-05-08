// import net from 'net'
let net = require('net')
const portIsOccupied = port => {
  const server = net.createServer().listen(port)
  return new Promise((resolve, reject) => {
    server.on('listening', () => {
      console.log(`the server is runnint on port ${port}`)
      server.close()
      resolve(port)
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(portIsOccupied(port + 1)) // 如占用端口号+1
        console.log(`this port ${port} is occupied.try another.`)
      } else {
        reject(err)
      }
    })
  })
}
module.exports = {
  portIsOccupied : portIsOccupied
};
