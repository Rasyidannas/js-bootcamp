let num = 103.941;

console.log(num.toFixed(2));
console.log(num.toFixed(1));
console.log(num.toFixed(10));

console.log(Math.round(num))//ini membulatkan nilai desimal ke angka yang mendekati
console.log(Math.floor(num))// ini akan membulatkan ke bawah atau menguranginya
console.log(Math.ceil(num))//ini akan membulatkan ke atas atau menambahkannya

console.log(Math.random());//memiliki nilai 0-0.9999999

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1) + min)//nilai dari Math.random 10 - 20
console.log(randomNum);



//challenge area (permainan tebak angka)
//1 - 5 - true if correct - false if not correct
let makeGuess = function (num){
    let minNum = 1
    let maxNum = 5
    let random = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)

    console.log(`com number is ${random} and your number is ${num}`);

    if (random === num){
        return true
    }else{
        return false
    }
}

console.log(makeGuess(1));
console.log(makeGuess(2));
