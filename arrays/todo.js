//Challange Area

const todos = ['Order cat food','Clean kitchen', 'Buy food', 'Do work', 'Exercise'];
//Delete the 3rd item
todos.splice(2, 1)
//Add a new item onto the end
todos.push("Buy a coffee")
//Remove the first item from the list
todos.shift();


console.log(`You have ${todos.length} todos`);


//make a list
    //with forEach
// todos.forEach(function(todo, index){
//     const num = index + 1;
//     console.log(`${num}. ${todo}`);
// })

    //with for(basic) not recomended for array
for(let count = 0; count < todos.length; count++){
    console.log(`${count + 1}. ${todos[count]}`);
}


//Make checklist todo
//1. convert array to array of objects -> text, completed
const checkTodos=[{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
},]


//2. create function to remove a todo by text value
const deleteTodo = function(checkTodos, todoText){
    const index = checkTodos.findIndex(function(todo, index){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1){
        checkTodos.splice(index, 1)
    }
}

// deleteTodo(checkTodos, 'buy food')
// console.log(checkTodos);


//3. search function to find word
const getThingsToDo = function(checkTodos){
  return checkTodos.filter(function(todo, index){
    return !todo.completed; //ini sama dengan todo.completed === false
  })
}

// console.log(getThingsToDo(checkTodos));


// 4. sorting function
const sortTodos = function(checkTodos){
  checkTodos.sort(function(a, b){
    if (!a.completed && b.completed) {
      return -1
    }else if (!b.completed && a.completed) {
      return 1
    }else {
      return 0
    }
  })
}
// sortTodos(checkTodos)
// console.log(checkTodos);
