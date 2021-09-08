const { NewBot } = require('newbot')
const { LangEn } = require('@nlpjs/lang-en')
const { train } = require('newbot/packages/train')
const mainSkill = require('./bot/main')

const converse = new NewBot(mainSkill)

console.log('Train Bot...')

train(converse, [LangEn]).then(model => {
    converse.setModelNlp(model, [LangEn]);
    console.log('Bot is trained !')
})

module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('userText', (text) => {
            converse.exec(text, socket.id, {
                output(output, done) {
                    socket.emit('botReply', output)
                    done()
                },
                data: {
                    session: {
                        message: {
                            source: 'website'
                        }
                    }
                }
            })
        })
    })
}