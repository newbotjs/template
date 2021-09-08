const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const { Server } = require('socket.io')
const converse = require('./converse')

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    maxHttpBufferSize: 1e4
})

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/client'))

converse(io)

server.listen(PORT, () =>  {
    console.log(`
        ===> Chatbot is running on http://localhost:${PORT} <===
    `)
}) 