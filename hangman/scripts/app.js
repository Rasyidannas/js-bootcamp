// HTTP(Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
let game1 

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage


//ini untuk perintah jalannya game
window.addEventListener('keypress', (e)=>{
    const guess = String.fromCharCode(e.charCode)//fromCharCode ini mencetak alphabet berdasarkan unicode atau mengkonversi
    game1.makeGuess(guess)//ini mengakses makeGuess function di Hangman.js
    render()
})

const render = () =>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage//ini mengakses statusMessage function di Hangman.js

    game1.puzzle.split('').forEach((letter)=>{//game1 disini berisi hangman karena deklarasi di startGame dibawah dan puzzle ini adalah function puzzle() di Hangman.js
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async ()=>{
    const puzzle = await getPuzzle('2')
    console.log('this is api function', puzzle)
    game1 = new Hangman(puzzle, 5)//ini function constructor Hangman
    console.log(game1);
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

//Promise
// getPuzzle('2').then((puzzle)=>{
//     console.log(puzzle);//ini dari argument atas dan ini diambil dari resolve
// }, (err)=>{
//     console.log(`Error : ${err}`);
// })


// Callback abstaction & Asynchronous 
//callback abstraction = which are to be called and then executed after the execution of another function has finished.
// Asynchronous = code doesn't have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.
//ini untuk mengakses yang ada di request.js
// getPuzzle('1', (error, puzzle)=>{
//     if(error){
//         console.log(`Erorr: ${error}`);
//     }else{
//         console.log(puzzle);
//     }
// })


// Promise
// getCountry('MX').then((country)=>{
//     console.log(country.name);
// }, (err)=>{
//     console.log(`Error: ${err}`);
// })


//Callback
// getCountry('US',(error, country)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(`Country name: ${country.name}`);
//     }
// })


// Synchronous = code is executed in sequence – each statement waits for the previous statement to finish before executing.
// const puzzle = getPuzzleSync()
// console.log(puzzle);

// console.log("Do something else");


// Fetch
// fetch('http://puzzle.mead.io/puzzle', {}).then((response)=>{
//     if(response.status === 200){
//         return response.json()
//     }else{
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data)=>{
//     console.log(data.puzzle);
// }).catch((err)=>{
//     console.log(error);
// })

// Fetch dari request.js
// getPuzzle('2').then((puzzle)=>{
//     console.log(puzzle);
// }).catch((err)=>{
//     console.log(`Error: ${err}`);
// })


// getCountry('MX').then((country)=>{
//     console.log(country.name);
// }).catch((err)=>{
//     console.log(`Error:${err}`);
// })


//ini menggabungkan 2 API
// getLocation().then((location)=>{
//     return getCountry(location.country)//ini berisi singkatan nama negara
//     // console.log(`You are currently in ${location.city} ${location.region} ${location.country}`);
// }).then((country)=>{
//     console.log(country.name);//ini akan menjabarkan singakatan nama negara diatas
// }).catch((err)=>{
//     console.log(`Error:${err}`);
// })


// GETCURRENTCOUNTRY
// getCurrentCountry().then((country)=>{
//     console.log(country.name);
// }).catch((error)=>{
//     console.log(error);
// })


// Promise
// getLocation().then((data)=>{
//     console.log(`City: ${data.city}, Region: ${data.region}, Country: ${data.country}`);
// }, (err)=>{
//     console.log(`Error: ${err}`);
// })

//Primitive value: string, number, boolean, null, undefined
//intiya semua deklarsi object akan disimpan di [[Prototype]]: String dan bisa diakses prototype
//String: myString --> String.Prototype --> Object.Prototype --> null
//const otherProduct = new String('Phone')
//console.log(otherProduct);

//Number: myNumber --> Number.Prototype --> Object.Prototype --> null

//Boolean: myBoolean --> Boolean.Prototype --> Object.Prototype --> null




//intiya semua deklarsi object akan disimpan di [[Prototype]]: Object dan bisa diakses prototype
//Object : myObject --> Object.prototype --> null
// const product = new Object({
//     name: 'influence'
// })

// console.log(product);

// Object.prototype.someNewMethod = () => 'This is the new function'
// console.log(product.someNewMethod());

//hasOwnProperty u/ mengeceek inherite atau tidak dan akan menampilkan true or false
//console.log(product.hasOwnProperty('name'));


//intiya semua deklarsi array akan disimpan di [[Prototype]]: Array dan bisa diakses prototype
//Array: myArray --> Array.prototype --> Objrct.prototype --> null
// const team = ['Luke', 'Maddison']
// console.log(team); 

//Function: MyFunc --> Function.prototype --> Object.prototype --> null
// const getScore = function(){1}
// console.log(getScore);

