// Callback
// const getDataCallback = (callback)=>{
//     setTimeout(() => {
//         callback('This is the error', undefined)
//         callback('This is the error', undefined)//ini bukti callback bisa dipanggil 2 kali
//     }, 2000);
// }

// getDataCallback((err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


// Callback Chaining
// const getDataCallback = (num, callback)=>{
//     setTimeout(() => {
//         if(typeof num === 'number'){
//             callback(undefined, num * 2)
//         }else{
//             callback('Number must be provided')
//         }
//     }, 2000);
// }


// getDataCallback(2, (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         getDataCallback(data, (err, data)=>{
//             if(err){
//                 console.log('err');
//             }else{
//                 console.log(data);
//             }
//         })
//     }
// })



// Promise
// const getDataPromise = (data) => new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(`This is my success data: ${data}`)
//             // reject('This is my promise error')
//             // reject('This is my promise error') //ini tidak bisa dipanggil lagi disini
//         }, 2000);
//     })


// const myPromise = getDataPromise(123)
// myPromise.then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// })

// // pemanggilan ulang hanya bisa dilakukan disini 
// myPromise.then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// })


//promise cahining
const getDataPromise = (num) => new Promise((resolve, reject)=>{
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject ('Number must be provided')
    }, 2000);
})

getDataPromise(2).then((data)=>{
    getDataPromise(data).then((data)=>{
        console.log(`Promise data: ${data}`);
    }, (err)=>{
        console.log(err);
    })
},(err)=>{
    console.log(err);
})

getDataPromise(10).then((data)=>{
    return getDataPromise(data)//Output 40
}).then((data)=>{
    return `This is some test data: ${data}`
}).then((data)=>{
    console.log(data);
}).catch((err)=>{//we can use catch for set error
    console.log(err);
})




