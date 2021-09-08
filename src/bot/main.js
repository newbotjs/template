const formats = require('newbot-formats')

module.exports = {
    code: `
        @Event('start')
        start() {
            > What is your name ?
            Prompt()
            > Welcome { :text }
            
            @Format('quickReplies', ['Fine', 'Sad'])
            > How are you doing?
        }

        @Intent('greeting', [
            'hello',
            'thanks'
        ])
        greeting() {
            > Hey !
        }

        @Event('nothing')
        nothing() {
            > What ?
        }
    `,
    skills: {
        formats
    },
    /*functions: {
        foo() {
            return 'foo'
        }
    },
    languages: {},
    nlp: {},
    conditions: {},
    constants: {},
    formats: {

    },
    shareFormats: true,
    shareNlp: true,
    propagateNlp: true*/
}