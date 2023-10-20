'use strict'; //ini untuk mengecek deklarasi dalam file js


//read existingfrom localStorage
const getSavedNotes = ()=>{
    //check for existing saved data
    const notesJSON = localStorage.getItem('notes')

    //ini untuk menciptakan error default
    try {
      return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
      return [];
    }
    
}

//save the notes to LocalStorage
const saveNotes = (notes)=>localStorage.setItem('notes', JSON.stringify(notes));

//remove a note from the list
const removeNote = (id)=>{
  const noteIndex = notes.findIndex((note)=>(note.id === id));

  if(noteIndex > -1){
    notes.splice(noteIndex, 1)
  }
}

//generate the DOM structure for a note
const generateNoteDOM = (note)=>{
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEL = document.createElement('p')

    //setup the note tittle text
    if(note.title.length > 0){
      textEl.textContent = note.title
    }else{
      textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // setup the link
    noteEl.setAttribute('href', `edit.html#${note.id}`)//ini untuk menambahkan id uuidv4 in url
    noteEl.classList.add('list-item')

    // setup the status message
    statusEL.textContent = generateLastEdited(note.updatedAt)
    statusEL.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEL)

    return noteEl;
}

//sort your notes by one of three ways
const sortNotes = (notes, sortBy)=>{
  if (sortBy === 'byEdited') {
    return notes.sort((a, b)=>{//ini menggunakan sort, untuk nilai di return adalah angka penempatan index
      if (a.updatedAt > b.updatedAt) {
          return -1;
      } else if (a.updatedAt < b.updatedAt) {
          return 1;
      } else {
          return 0;
      }
    })
  }else if(sortBy === 'byCreated'){
    return notes.sort((a, b)=>{
      if (a.createAt > b.createAt){
        return -1;
      } else if (a.createAt < b.createAt){
        return 1;
      }else{
        return 0;
      }
    })
  }else if(sortBy === 'alphabetical'){
    return notes.sort((a, b)=>{
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1;
      }else if(a.title.toLowerCase() > b.title.toLowerCase()){
        return 1;
      }else{
        return 0;
      }
    })
  }else{
      return notes;
  }
}

//Render applications notes
//ini perintah untuk filter atau search seperti ajax
const renderNotes = (notes, filters)=>{
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy) 
    const filteredNotes = notes.filter((note)=>note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML="";

    if(filteredNotes.length > 0 ){
      filteredNotes.forEach((note)=>{
        const noteEl = generateNoteDOM(note)
        notesEl.appendChild(noteEl)
      })
    }else{
      const emptyMessage = document.createElement('p')
      emptyMessage.textContent = 'No notes to show'
      emptyMessage.classList.add('empty-message')
      notesEl.appendChild(emptyMessage)
    }
  }

//Generate the last edited message
const generateLastEdited = (timeStamp)=>`Last edited ${moment(timeStamp).fromNow()}`;
