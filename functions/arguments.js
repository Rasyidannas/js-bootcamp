//Multiple arguments
let add = function (a, b, c){
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);



//Default arguments - u/ memasukkan nlai default harus diletakkan pada paramater (didalam tanda kurung) 
let getScoreText = function(name = 'Anonymous', score = 0 ){
    return `Name : ${name} - Score: ${score}`; // ini menggunakan template string
// return 'Name :' + name + ' Score :' + score;
}

let personOne = getScoreText()
console.log(personOne);

let personTwo = getScoreText("Andrew")
console.log(personTwo);

let personThree = getScoreText(undefined, 10)
console.log(personThree);


//challenge area
let getTip = function(total, tipPercent = 0.2){
    let result = total * tipPercent;
    console.log(`A ${tipPercent * 100}% tip on ${total} would be ${result}`);//ini adalah contoh template string
    return result;
}

let tipOne = getTip(40, .25)
console.log(tipOne);

//Example Template String
let name = 'Jen';
let age = '12'
console.log(`Hey, my name is ${name}!. I am ${age} years old.`); //ini adalah contoh template string