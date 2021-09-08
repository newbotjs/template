import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import { Server } from 'socket.io'
import converse from './converse'

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    maxHttpBufferSize: 1e4
})

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/../../src/client'))

converse(io)

server.listen(PORT, () =>  {
    console.log(`
        ===> Chatbot is running on http://localhost:${PORT} <===
    `)
}) 