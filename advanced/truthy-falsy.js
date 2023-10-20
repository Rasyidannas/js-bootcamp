const products = [{ name : 'Computer mouse'}];
const product = products[0];

//truthy = values that resolve to true in boolean context
    //truthy values = array, object and data type
//falsy = values that resolve to false in boolean context
    //falsy values = false, 0, empty string, null, undefined, NaN

if(product){
    console.log('Product found');
} else{
    console.log('Product not found');
}


let a = 0;

if(a){
    console.log('this is not falsy value');
} else{
    console.log('this is falsy value');
}