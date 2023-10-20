let name = "Rasyid Nur Annas"

//Length property
console.log(name.length);

//Convert to Uppercase
console.log(name.toUpperCase());

//Convert to Lowercase
console.log(name.toLowerCase());

//Includes methode
let password = "1234yhapassword"
console.log(password.includes("password")); // output akan bernilai true karena variabel password memiliki nilai "password"

//Trim
let anotherName = "   Nur Annnas    "
console.log(anotherName.trim()); //output akan menghilangkan spasi diawal dan akhir



//challenge area

//isValidPassword
//length is more than 8 - and doesn't contain the word password
let isValidPassword = function(pass){
    return (pass.length > 8 && !pass.includes ('password')) //--> ini cara simple dan dibawah cara panjang
    
    // if (pass.length > 8 && !pass.includes ('password')){
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdasdasdpassword'));