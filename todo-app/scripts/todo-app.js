'use strict'; //ini untuk mengecek deklarasi dalam file js

const todos = getSavedTodos();

const filters = {
  searchText : '',
  hideCompleted : false
}

renderTodos(todos, filters)//ini di tulis agar menampilkan atau merender yang ada pad localStorage



//Listen for new todo creation or for add todo button
// document.querySelector('#add-todo').addEventListener('click', function(e){
//   console.log('Add a new todo...');
// })

//Listen for todo text change or  for input new todo
// document.querySelector('#new-todo-text'),addEventListener('input', function(e) {
//   console.log(e.target.value);
// })




//ini untuk input search
document.querySelector('#search-text').addEventListener('input', (e)=>{
  filters.searchText = e.target.value;
  renderTodos(todos, filters)
})

//ini untuk menambahkan todo baru
document.querySelector('#new-todo').addEventListener('submit', (e)=>{
  const text = e.target.elements.text.value.trim()

  if(text.length > 0){
    e.preventDefault()
    todos.push({
      id : uuidv4(),
      text: text,
      completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
  }
})

//ini perintah untuk menyembunyikan text yang completed true
document.querySelector('#hide-completed').addEventListener('change', (e)=>{
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})


//remove all p tags that have "the" in the text
// const paragraphs = document.querySelectorAll('p')
//
// paragraphs.forEach(function(paragraph){
//   if(paragraph.textContent.includes('the')){
//     paragraph.remove();
//   }
// })
