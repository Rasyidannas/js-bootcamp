const notes = ['Note 1', 'Note 2', 'Note 3'];

const anotherNotes = [{
                        title: "My next trip",
                        body: "I would like to go to Spain"
                    }, {
                        title:"Habbits to work on ",
                        body:"Exercise, Eating a bit better"
                    }, {
                        title:"Office modification",
                        body: "Get a new seat"
                    }];

//cara menapilkan index yang diinginkan pada array
// console.log(notes[0]);
// console.log(notes[2]);
// console.log(notes[21]);


//methods of array

// 1. length --> jumlah panjang dari array
// console.log(notes.length);
// console.log(notes[notes.length - 1]);

//2. push --> add something/elements onto end
// notes.push('My new note');

//3. pop --> remove last/end element
// notes.pop();

//4. shift --> remove first elament
// notes.shift();

//5. unshift --> add elements in first/begining of array
// notes.unshift("My first note");

//6. splice --> add and remove elements in middle array
// notes.splice(1, 1, "Thi is the new second item");//note(index untuk awal penambahan/penempatan dan delete, jml index yang di hapus, string untuk menggantikannya)

//7. forEach --> ini seperti for biasa dan ini bentuk sederhana untuk array
// notes.forEach(function(item, index){
    // console.log(item);
    // console.log(index);
// })

//ini untuk menampilkan array notes
// console.log(notes)


//penjelasan tentang forEach sama dengan for
// for(let count = 0; count < notes.length; count++){
//     console.log(notes[count]);
// }

//     //reserve u/ forEach
// for(let count = notes.length - 1; count >= 0; count--){
//     console.log(notes[count]);
// }


//9. indexOf-->untuk mencari element pada array, hanya menampilkan angka index element (jika kita memasukkan key benar) dan -1 (jika kita salah memasukkan key)
            // tetapi tidak bisa membaca element yang bertipe data Object
console.log(notes.indexOf('Note 1'));
console.log(notes.indexOf(1));
// console.log(notes.indexOf('note 2'));

    //a. findIndex-->ini untuk mencari element array yang bertipe data object dan ini akan mengembalikan angka index (true)/-1(false)
// const index = anotherNotes.findIndex(function(note, i){
//     console.log(note);
//     return note.title === "My next trip";
// })

// console.log(index);


//function find()

//cara I | Find ini mencetak object tanpa nilai 
// const findNote = function(anotherNotes, noteTitle){
//     return anotherNotes.find(function(note, index){
//         return note.title === noteTitle;
//     })
// }

//cara II
// const findNote = function(anotherNotes, noteTitle){
//     const index = anotherNotes.findIndex(function(note, index){
//         return note.title === noteTitle;
//     })
//     return anotherNotes[index];
// }

//output bernilai : tittle: 'office modification', body: 'get a new seat'
// const note = findNote(anotherNotes, "Office modification")
// console.log(note);

//output bernilai: undefined
// const noteTwo = findNote(anotherNotes, "Get a new seat")
// console.log(noteTwo);

//output bernilai: undefined
// const noteThree = findNote(anotherNotes, "bla bla bla")
// console.log(noteThree);




//10. Filter --> untuk mencari kata didalam array dan mengembalikan semua isi array dan mencetak array baru

//cara I
// const filteredNotes = anotherNotes.filter(function(note, index){
//   const isTitleMatch = note.title.toLowerCase().includes('office')
//   const isBodyMatch = note.body.toLowerCase().includes('office')
//   return isTitleMatch || isBodyMatch
// })

// console.log(filteredNotes);

// cara II
// const findNotes= function(notes, query){
//   const filteredNotes = anotherNotes.filter(function(note, index){
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch;
//   })
//   return filteredNotes;
// }
//
//
// console.log(findNotes(note, 'work'));


// 11. Sorting array --> untuk mengurutkan element array dari nilai unit kode UTF-16 atau berdasarkan alphabet
// const sortNotes = function (anotherNotes){
//   anotherNotes.sort(function(a, b){
//     if(a.title.toLowerCase() < b.title.toLowerCase()){
//       return -1
//     }else if (b.title.toLowerCase() < a.title.toLowerCase()){
//       return 1
//     }else {
//       return 0
//     }
//   })
// }
//
// sortNotes(anotherNotes)
// console.log(anotherNotes);


// catatan:
//array memiliki element yang bertipe data object tidak bisa diakses/dicetak langsung dengan console.log | seperti ini: console.log(anotherNotes.title) --> output akan undefine
