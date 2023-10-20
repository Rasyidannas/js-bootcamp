'use strict'; //ini untuk mengecek deklarasi dalam file js

let notes = getSavedNotes();

const filters = {
              searchText: '',
              sortBy: 'byEdited'
}


            // LOCALSTORAGE is properties allow to save key/value pairs in a web browser. The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.


            // localStorage.setItem('location', 'Philadelphia');

            // console.log(localStorage.getItem('location'));

            // localStorage.removeItem('location');

            // localStorage.clear();

            // const user ={
            //   name : "Rasyid",
            //   age : "22"
            // }

            // const userJSON = JSON.stringify(user)
            // console.log(userJSON);
            // localStorage.setItem('user', userJSON)

            // const userJSON = localStorage.getItem('user')
            // const user = JSON.parse(userJSON)
            // console.log(`${user.name} is ${user.age}`);


renderNotes(notes, filters);

//ini perintah untuk menambahkan apa yang kita ketik di text field akan muncul
document.querySelector('#search-text').addEventListener('input', (e)=>{
  filters.searchText = e.target.value;
  renderNotes(notes, filters)
})



document.querySelector('#create-note').addEventListener('click', (e)=>{
  const id = uuidv4();
  const timeStamp = moment().valueOf()//ini meggunakan moment.js
  notes.push({
    id : id,
    title:'',
    body:'',
    createAt: timeStamp,
    updatedAt: timeStamp
  })
  saveNotes(notes)
  location.assign(`edit.html#${id}`)//ini untuk mengarahkan ke halaman edit.html dan ini akan menyamarkan alamat url 
})

document.querySelector('#filter-by').addEventListener('change', (e)=>{
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
  console.log(e.target.value);
})

//ini untuk live update di index.html atau untuk judul todo  
window.addEventListener('storage', (e)=>{
  if(e.key === 'notes'){
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
})


//moment.js
// const birthday = moment()
// birthday.year(1999).month(2).date(17)
// console.log(birthday.format('MMM D, YYYY'));


//js time without library
  // Unix Epoch = January 1st 1970 00:00:00
  // const now = new Date();
  // const timeStamp = now.getTime();

  // const myDate = new Date(timeStamp);
  // console.log(myDate.getFullYear());

  // console.log(`Year:${now.getFullYear()}`);
  // console.log(`Month:${now.getMonth()}`);
  // console.log(`Date:${now.getDate()}`);
  // console.log(`Hours:${now.getHours()}`);
  // console.log(`Minute:${now.getMinutes()}`);
  // console.log(`Seconds:${now.getSeconds()}`);

  // const dateOne = new Date('March 1 2017 12:00:00')
  // const dateTwo = new Date()
  // const dateOneTimestamp = dateOne.getTime()
  // const dateTwoTimestamp = dateTwo.getTime()

  // if(dateOneTimestamp < dateTwoTimestamp){
  //   console.log(dateOne.toString());
  // } else if(dateTwoTimestamp < dateOneTimestamp){
  //   console.log(dateTwo.toString());
  // }




// document.querySelector('#for-fun').addEventListener('change', function (e) {
//   console.log(e.target.checked);
// })

//ini perintah untuk menghapus elemen yang memiliki class note di HTML
// document.querySelector('#remove-all').addEventListener('click',function(){
//   document.querySelectorAll('.note').forEach(function(note){
//     note.remove()
//   })
// })

//ini untuk form yang memiliki id = name-form
// document.querySelector('#name-form').addEventListener('submit', function (e) {
//   e.preventDefault()//ini perintah untuk menghilangkan input text pada url
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = ''//ini untuk menghapus atau mengkosongkan input
// })





// Intro DOM - Document Object Model
//querySelector --> ini untuk mengeksekusi selector pertama pada html file
// const p = document.querySelector("p");
// p.remove();

//querySelectorAll --> ini untuk mengeksekusi semua selector dan harus menggunakan perulangan
//cara I untuk querySelectorAll
// const ps = document.querySelectorAll('p');
// ps.forEach(function (p){
//   p.textContent = '***********';//ini perintah untuk mencetak pada html seperti rewrite
  //console.log(p.textContent);//ini perintah untuk mencetak pada console browser karena ada console.log
  // p.remove();//ini perintah untuk menghapus
// })
//cara ke II untuk querySelectorAll
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++){
//   p[i].remove();
// }


//Add a new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from Javascript';
// document.querySelector('body').appendChild(newParagraph);//appendChild ini perintah untuk menambahkan anak pada tag 'body'
