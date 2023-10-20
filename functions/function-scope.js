//Global scope(fahrenheitToCelcius, tempOne, tempTwo)
    //Local scope(fahrenheit, celcius)
        //Local scope(isFreezing)


let fahrenheitToCelcius = function(fahrenheit){
    let celcius = (fahrenheit - 32) * 5 / 9;
    
    if(fahrenheit <= 0){
        let isFreezing = true;
    }
    return celcius;
}

//Call a couple of times (32 -> 0) (68 -> 20)
let tempOne = fahrenheitToCelcius(32);
let tempTwo = fahrenheitToCelcius(68);
//print the converted values
console.log(tempOne);
console.log(tempTwo);