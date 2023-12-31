// Closures are created every time a function is created, at function creation time.|| sebuah function yg sebelumnya sudah memiliki data, hasil dari function yang lain 

// const myFunction = ()=>{
//     const message = 'This is my message'
//     const printMessage = ()=>{//ini adalah yang disebut closur, karena function yg meminta akses ke luar
//         console.log(message);
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

const createCounter =() =>{
    let count = 0 ;

    return{
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        get(){
            return count
        }
    }

}

const counter = createCounter()
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());


// Adder
const add = (a, b) => a + b
const createAdder = (a)=>{
    return (b)=>{
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2));
const add100 = createAdder(100)
console.log(add100(-90));


// Tipper
createTripper = (baseTip) =>{
        return(amount)=>{
            return baseTip * amount;
        }
}

const tip20 = createTripper(.2);
console.log(tip20(100));