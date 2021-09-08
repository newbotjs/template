import { ConverseTesting, user, bot } from "newbot/testing";
import { train } from "newbot/packages/train";
import { LangEn } from "@nlpjs/lang-en";
import mainSkill from "../src/bot/main";

describe('My own test', () => {
    let converse, userConverse, model

    beforeAll(async() => {
        converse = new ConverseTesting(mainSkill)
        model = await train(converse, [LangEn])
    })

    beforeEach(() => {
        converse = new ConverseTesting(mainSkill)
        userConverse = converse.createUser({
            session: {
                message: {
                    source: 'website'
                }
            }
        })
        converse.setModelNlp(model, [LangEn]);
    })

    test('Chatbot says "What is your name ?"', () => {
        return userConverse
            .start(testing => {
                expect(testing.output(0)).toBe('What is your name ?')
            })
            .prompt('Sam', testing => {
                expect(testing.output(0)).toBe('Welcome Sam')
                expect(testing.output(1)).toMatchObject({ text: 'How are you doing?', actions: [ 'Fine', 'Sad' ] })
            })
            .end()
    })

    test('Test Greeting Intent', () => {
        return userConverse
            .conversation(
                user `Hello`,
                bot `Hey !`
            )
    })
})