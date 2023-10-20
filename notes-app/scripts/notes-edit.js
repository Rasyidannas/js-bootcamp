'use strict'; //ini untuk mengecek deklarasi dalam file js

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note)=>note.id == noteId)

if(!note){
    location.assign('index.html')//ini untk mengarahkan user ke halaman index
}

// console.log(note); //ini bukti jika deklarsi note itu menyimpan title and body

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt);//ini untuk mnambahkan wajtu last edited

titleElement.addEventListener('input', (e)=>{
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt);//ini untuk mnambahkan wajtu last edited
    saveNotes(notes)//ini disimpan di notes array
})

bodyElement.addEventListener('input', (e)=>{
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt);//ini untuk mnambahkan wajtu last edited
    saveNotes(notes)//ini disimpan di notes array
})

removeElement.addEventListener('click', (e)=>{
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

//ini fitur untuk live update in edit page
window.addEventListener('storage', (e)=>{
    if(e.key === "notes"){
        notes = JSON.parse(e.newValue)//ini akan mendeklarasikan ulang yang kita ketik atu live update di local storage and screen
        let note = notes.find(function(note){
            return note.id == noteId
        })
        
        if(!note){
            location.assign('index.html')//ini untk mengarahkan user ke halaman index
        }
        
        // console.log(note); //ini bukti jika deklarsi note itu menyimpan title and body
        
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt);//ini untuk mnambahkan wajtu last edited
    }
})
