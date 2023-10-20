//shorthand sytax for made a function

    // very short
    // const square = (num)=>num * num

    // another way but common for programmer
    const square = (num)=>{
        return num * num;
    }

console.log(square(5));


const people =[{
    name: "Rasyid",
    age: 22
}, {
    name: "Annas",
    age: 21
}, {
    name: "Nur",
    age: 19
}, {
    name: "Andi",
    age: 22
}]


const under21 = people.filter((person)=>{
    return person.age < 21
})

console.log(under21);



//Perbandingan Find & Filter
const age22 = people.find((person)=> person.age === 22)

const age22 = people.filter((person)=> person.age === 22)
age22.forEach((age)=>{
    console.log(age.name);
})
