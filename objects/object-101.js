//object adalah array assosiatif, jadi kita bisa memberi nama pada key dan kita panggil sesuai nama dari key

let myBook = {
    title : "1984",
    author : "Georgia Orwel",
    pageCount : "326"
}
//cara menampilkan nilai yang terdapat pada object
console.log(myBook); //output akan menampilkan semua yang ada di myBook

console.log(myBook["title"]);//output akan hanya menampilkan yang ada di "title"
console.log(myBook.title);//ini sama dengan yang diatas

myBook.title = "Animal" //ini cara mendeklarasikan ulang atau reassign
console.log(myBook.title);



//challenge area

//name, age, location
let me = {
    name : "Andrew",
    age : 27,
    location : "Philadelphia"
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);

me.age = me.age + 1
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);
