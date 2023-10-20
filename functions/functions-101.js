//function - input(argument), code(inside {}), output(return value)

//example I - it is in boolean
let test = function (num) {
    return num <= 0;// ini jika nilai negatif akan mencetak true
}

let a = test(-1);
console.log(a);


//example II
let greetUser = function(){
    console.log("Welcome User!");
}

greetUser();

//example III
let square = function (num){
    console.log(num);
}
square(3);//call a function for can print
square(10);

//example IV
let square1 = function(num){
    let result = num * num;
    return result;
}

let value = square1(3);
let otherValue = square1(10);

console.log(value);
console.log(otherValue);


//Challenge Area

//convertFahrenheitToCelcius
let fahrenheitToCelcius = function(fahrenheit){
    let celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

//Call a couple of times (32 -> 0) (68 -> 20)
let tempOne = fahrenheitToCelcius(32);
let tempTwo = fahrenheitToCelcius(68);
//print the converted values
console.log(tempOne);
console.log(tempTwo);