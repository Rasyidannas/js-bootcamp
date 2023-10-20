let isAccountLocked = false;
let userRole = "admin";

//ini contoh pertama
// if (isAccountLocked){
//     console.log("Is account locked");
// }else{
//     console.log("Welcome!");
// }

if (isAccountLocked){
    console.log("Is account locked");
}else if (userRole === "admin"){
    console.log("Welcome " + userRole);
}else{
    console.log("Welcome " + userRole);
}


//challenge area
let temp = 20;

// 31 degree it is freezing outside!
// 120 degree it is hot outside!
// Go for it. It is pretty nice.
if (temp <= 32){
    console.log("It is freezing outside!");
}else if (temp >= 110){
    console.log("It is hot outside!");
}else{
    console.log("Go for it. It is pretty nice");
}


