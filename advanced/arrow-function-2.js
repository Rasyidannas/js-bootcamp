//compare arrow function with regular function

//regular function
const add = function(a, b){
    console.log(arguments);
}

add(11, 22, 33, 44);
// output: [Arguments] { '0': 11, '1': 22, '2': 33, '3': 44 }. So this exit/write a index too

const addSecond = function(a, b){
    return arguments[0] + arguments[1]
}

console.log(addSecond(11, 22, 33, 44));
// output: 33

const car = {
    color :"red",
    getSummary : function(){
        return `The car is ${this.color}`;
    }
}

console.log(car.getSummary());


//arrow function
// const addArrow = (a, b)=>{
//     console.log(arguments);
// }

// addArrow(11, 22, 33, 44);
// output: akan berbeda dan akan memiliki object

const carArrow = {
    color :"red",
    getSummary : ()=>{
        return `The car is ${this.color}`;
    }
}

console.log(carArrow.getSummary());
// output: 'this' can't use and will Undefined
