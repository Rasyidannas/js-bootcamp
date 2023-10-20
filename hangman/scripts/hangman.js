//This is a The Class Syntax
class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')//ini menjadikan array perhuruf
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []//ini akan diisi user
        this.status = 'playing'
    }
    calculateStatus(){
    //cara I    
        const finished = this.word.every((letter)=>{//every ini akan mengecek/mengetest semua di guessedLetters 
            return this.guessedLetters.includes(letter) || letter === ' '
        })

    //cara II
        // const letterUnguessed = this.word.filter((letter)=>{
        //     return !this.guessedLetters.includes(letter)
        // })
        // const finished = letterUnguessed.lenght === 0

    //cara III
        // let finished = true;
        // this.word.forEach((letter)=>{
        //     if(this.guessedLetters.includes(letter)){
        //         //ini sama dengan menyamakan finish true diatas
        //     }else {
        //         finished = false;
        //     }
        // })

        if(this.remainingGuesses === 0){
            this.status = 'failed';//ini mendeklaraikan ulang jika reaminingGuesses - 0
        }else if(finished){//jika finish diatas terpenuhi maka this.status bernilai finished
            this.status = 'finished'
        }else{
            this.status = 'playing'
        }
    }
    get statusMessage(){
        if(this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}`
        }else if(this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}".`
        }else{
            return 'Great work! You guessed the words.'
        }
    }
    get puzzle (){
        let puzzle = ''
    
        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter === ' '){//ini menyamakan denagan isi guessedLatter OR spasi atau jika tebakan benar maka akan menampilkan huruf
                puzzle += letter
            }else{
                puzzle += '*'
            }
        })
    
        return puzzle;
    }
    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUniqe = !this.guessedLetters.includes(guess);//ini untuk jika tebakan asal tapi sudah di tebak maka tidak mengurangi kesempatan
        const isBadGuess = !this.word.includes(guess);//ini untuk jika tebakkan tidak sama dengan word puzzle
    
        if(this.status !== 'playing'){
            return //ini akan memberhentikan dan tiak membaca kebawah lagi
        }
    
        if(isUniqe){
            this.guessedLetters.push(guess);
        }
    
        if(isUniqe && isBadGuess){
            this.remainingGuesses--;//ini akan mengurangi reaminingGusses atau kesempatan
        }
    
        this.calculateStatus()
    }

}


// const Hangman = function(word, remainingGuesses){
//     this.word = word.toLowerCase().split('')//inimenjadikan array perhuruf
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.calculateStatus = function(){
// //cara I    
//     const finished = this.word.every((letter)=>{//every ini akan mengecek/mengetest semua di guessedLetters 
//         return this.guessedLetters.includes(letter)
//     })

// //cara II
//     // const letterUnguessed = this.word.filter((letter)=>{
//     //     return !this.guessedLetters.includes(letter)
//     // })
//     // const finished = letterUnguessed.lenght === 0

// //cara III
//     // let finished = true;
//     // this.word.forEach((letter)=>{
//     //     if(this.guessedLetters.includes(letter)){
//     //         //ini sama dengan menyamakan finish true diatas
//     //     }else {
//     //         finished = false;
//     //     }
//     // })

//     if(this.remainingGuesses === 0){
//         this.status = 'failed';//ini mendeklaraikan ulang jika reaminingGuesses - 0
//     }else if(finished){//jika finish diatas terpenuhi maka this.status bernilai finished
//         this.status = 'finished'
//     }else{
//         this.status = 'playing'
//     }
// }



// Hangman.prototype.getStatusMessage = function(){
//     if(this.status === 'playing'){
//         return `Guesses left: ${this.remainingGuesses}`
//     }else if(this.status === 'failed'){
//         return `Nice try! The word was "${this.word.join('')}".`
//     }else{
//         return 'Great work! You guessed the work.'
//     }
// }

// Hangman.prototype.getPuzzle = function(){
//     let puzzle = ''

//     this.word.forEach((letter)=>{
//         if(this.guessedLetters.includes(letter) || letter === ' '){//ini menyamakan denagankan isi guessedLatter OR spasi 
//             puzzle += letter
//         }else{
//             puzzle += '*'
//         }
//     })

//     return puzzle;
// }

// Hangman.prototype.makeGuess = function (guess) {
//     guess = guess.toLowerCase();
//     const isUniqe = !this.guessedLetters.includes(guess);
//     const isBadGuess = !this.word.includes(guess);

//     if(this.status !== 'playing'){
//         return //ini akan memberhentikan dan tiak membaca kebawah lagi
//     }

//     if(isUniqe){
//         this.guessedLetters.push(guess);
//     }

//     if(isUniqe && isBadGuess){
//         this.remainingGuesses--;//ini akan mengurangin reaminingGusses atau kesempatan
//     }

//     this.calculateStatus()
// }