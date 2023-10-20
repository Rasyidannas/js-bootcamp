let temp = 55;
//logical "And" Operator - True if both sides are true. False otherwise
//logical "Or" Operator - true if at least one side is true. False otherwise
if(temp <= 60 && temp <= 120){
    console.log("It is pretty nice out");
} else if (temp <= 0 || temp >= 120) {
    console.log("Do not go outside");
} else {
    console.log("Eh, Do what you want");
}



//Challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

if(isGuestOneVegan && isGuestTwoVegan){
    console.log("Only offer up vegan dishes");
}else if(isGuestOneVegan|| isGuestTwoVegan){
    console.log("Make sure to offer up some vegan options");
}else{
    console.log("Offer up anything on the menu");
}