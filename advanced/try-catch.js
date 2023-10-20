const getTip = (amount)=>{
    if (typeof amount === 'number'){
        return amount * .25;
    }else{
        throw Error ('Argument must be a number'); //thorw is a user-defined exception dan ini akan tidak berdampak ke catch tetapi akan disimpan pada argument
    }
}

try{
    const result = getTip(24);
    console.log(result);
}catch (e){//catch akan tercetak ketika error
    console.log(`catch is running and ${e}`);
}



