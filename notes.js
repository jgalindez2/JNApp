const fs = require('fs')
const txtFile = './notes.txt'
const jsonFile = './notes-data.json'

const add = function (title = '', body = '', callback) {
    let note = [...getJsonNotes(), ...[{title, body}]]
    saveNotes(note)
    callback(logNote({title, body}))
}

const list = callback => {
    const notes = getJsonNotes()
    let info = ''
    notes.length > 0
        ? notes.forEach(note => info += logNote(note))
        : info = 'There are not notes created yet.'
    callback(info)
    return info
}

const read = (title, callback) => {
    let notes = getJsonNotes()
    if (notes.length > 0) {
        notes = notes.filter(note => note.title === title)
        notes[0]
            ? callback(logNote(notes[0]))
            : callback('There is not note with that title')
    }else{
        callback('There are not notes to read.')
    }
}

const remove = (title, callback) => {
    let notes = getJsonNotes()
    if (notes.length > 0) {
        let noteFounded = notes.find(note => note.title === title)
        let outNote = JSON.stringify(noteFounded)
        notes = notes.filter(note => note !== noteFounded)
        saveNotes(notes)
        callback(logNote(outNote))
    }else{
        callback(logNote('There are not notes to remove.'))
    }
}

const saveQoutes = quote => {
    return 'Saved quote!'
}

const saveNotes = notes => {
    fs.writeFileSync(jsonFile, JSON.stringify(notes))
}

const logNote = note => {
    return `------\nTitle: ${note.title}\nBody: ${note.body}\n------`
}

const getJsonNotes = () => {
    let arr = fs.existsSync(jsonFile)
        ? require(jsonFile)
        : []
    return arr
}

const generateTxt = callback => {
    fs.writeFileSync(txtFile, list())
    console.log('The file was created successfully.')
}

module.exports = { add, list, read, remove, generateTxt }