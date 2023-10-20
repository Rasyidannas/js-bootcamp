//const tidak bisa dideklarasi ulang dengan cara seperti "let"
const isRaining = true;
// isRaining = false --> ini akan menghasilkan output error 
console.log(isRaining);

//deklarsi ulang untuk const yang benar
const person ={
    name: 'Rasyid nur annas',
    age: 27
}

person.age = 28

console.log(person);

//pemanggilan
console.log(person['name'])
console.log(person.name)