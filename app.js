const notes = require('./notes.js')
const prompt = require('prompt')
const schema = require('./schema.js')

const main = () => {
    prompt.start()
    prompt.message = 'Hi! What do you want to do now? '
    prompt.get([{name: 'command', description: 'Enter the command'}], (err, {command}) => {
        actions(command)
    })
}

const actions = command => {
    prompt.message = ''
    switch (command) {
        case 'add':
            prompt.get(schema.addSchema, (err, { title, body }) => {
                notes.add(title, body, note => console.log(`The note was saved!\n${note}`))
            })
            break
        case 'list':
            notes.list(notes => console.log(`Here the list!\n${notes}`))
            break
        case 'read':
            prompt.get(schema.readListSchema, (err, { title }) => {
                notes.read(title, note => console.log(`Its what you looked for!\n${note}`))
            })
            break
        case 'remove':
            prompt.get(schema.readListSchema, (err, { title }) => {
                notes.remove(title, note => console.log(`The note was removed!\n${note}`))
            })
            break
        case 'export':
            notes.generateTxt()
            break
        case 'help':
            console.log(help)
            break
        case 'exit':
            console.log("Bye!")
            process.exit()
            break
        default:
            console.log(`This parameter "${command}" isn't accepted.\n ${help}`)

    }
}

const help = `
Commands: 
add     Add a new note
list    List all notes
read    Show a specific note
remove  Remove a specific note
export  Export the notes
`
main()