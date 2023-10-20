//The Class Syntax
class Person{
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`;

        //this didalam ini tdk bekerja ketika menggunakan arrow function
        this.likes.forEach((like)=>{
            bio +=` ${this.firstName} likes ${like}`;
        })

        return bio;
    }
    set fullName(fullName){
        const names = fullName.split(' ');
        //ini akan mendaklarakian ulang
        this.firstName = names [0]
        this.lastName = names [1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

//extends ini akan memberikan tingkah laku yang sama terhadap person
class Employee extends Person{
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)//ini untuk mengakses yang ada di Person
        this.position = position
    }
    getBio(){
        return `${this.fullName} is ${this.position}`//ini mengakses getter and setter
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

//extends ini akan memberikan tingkah laku yang sama terhadap person
class Students extends Person {
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change){
        this.grade += change
    }
    getBio(){
        const status = this.grade >= 70 ? 'Passing' : 'Failing'
        return `${this.firstName} is ${status} the class.`
    }
}


const me = new Person ('Rasyid', 'Annas', 22, 'Freelancer', ['Design'])
me.fullName = 'Clancey Turner'//ini deklarasi ulang

// me.updateGrade(-10);
// console.log(me);
console.log(me.getBio());

// const me = new Employee('Rasyid', 'Annas', 22, 'freelancer', ['Design, and Learning'])
// me.setName('Ciko Coki')
// console.log(me.getBio());
// console.log(me.getYearsLeft());

// const person = new Person ('Tukiyem', 'Cahyo', 51)
// console.log(person.getBio());


//function consturtor
    // penuliasn harus dengan upppercase
//     const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }


//prototype Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null
//ini biasanya dilakukan ketika melakukan penambahan function atau methode
// Person.prototype.getBio = function(){
//     let bio = `${this.firstName} is ${this.age}.`;

//     //this didalam ini tdk bekerja ketika menggunkan arrow function
//     this.likes.forEach((like)=>{
//         bio +=` ${this.firstName} likes ${like}`;
//     })

//     return bio;
// }


// ini function yang harus di isi dengan argument
// Person.prototype.setName = function(fullName){
//     const names = fullName.split(' ');
//     //ini akan mendaklarakian ulang
//     this.firstName = names [0]
//     this.lastName = names [1]
// }


// const me = new Person ('Rasyid', 'Annas', 22, ['Studying', 'Designing']);
// me.setName('Rasyid Annas');//ini akan mendeklarasikan ulang

//ini deklarasi ulang untuk getBio
// me.getBio = function () {
//     return 'This is fake!'
// }

// console.log(me.getBio());
// console.log(me.lastName);

// const cat1 = new Person('Coki', 'Mawar', 5, ['Sleeping'])
// console.log(cat1.getBio());

// const cat2 = new Person('Ciko', 'Mawar', 2, ['Eating']);
// console.log(cat2.getBio());
// console.log(cat2.firstName);


// ini akan mendeklarasikan ulang untuk getBio
// Person.prototype.getBio = function () {
//     return 'Testing Testing'
// }

// console.log(me.getBio());