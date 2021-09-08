import { NewBot } from "newbot";
import { LangEn } from "@nlpjs/lang-en";
import { train } from "newbot/packages/train";
import mainSkill from "./bot/main";

const converse = new NewBot(mainSkill)

console.log('Train Bot...')

train(converse, [LangEn]).then(model => {
    converse.setModelNlp(model, [LangEn]);
    console.log('Bot is trained !')
})

export default (io) => {
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