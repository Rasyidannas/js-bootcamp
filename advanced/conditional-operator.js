const myAge = 27;
let message;

//Trenary Operator
message = myAge >= 18 ? 'You can vote!' : 'You cannot vote!';

// if(myAge >= 18){
//     message = 'You can vote!';
// }else{
//     message = 'You cannot vote!';
// }

console.log(message);


// const showPage = ()=>{
//     return console.log('Showing the page');
// }

// const showErrorPage = ()=>{
//     return console.log('Showing the error page');
// }

// const messageSecond = myAge >= 21 ? showPage() : showErrorPage();
// console.log(messageSecond);



const team = ['Tyler', 'Porter', 'Rasyid', 'Pono'];
messageThird = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people in your team'
console.log(messageThird);