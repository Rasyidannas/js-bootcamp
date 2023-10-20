// GETPUZZLE FUNCTION //
// AsyncAwait
const getPuzzle = async (wordCount) =>{
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else {
        throw new Error('Unable to get puzzle')
    }
}


// this we use fetch
// const getPuzzle = (wordCount) =>{
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
//         if (response.status === 200){
//             return response.json()
//         }else{
//             throw new Error ('Unable to fetch puzzle')
//         }
//     }).then((data)=>{
//         return data.puzzle
//     })
// }


// this we use Promise
// const getPuzzle = (wordCount) => new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest();//XMLHttpRequest is object to request data from a server.

//     request.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState === 4 && e.target.status === 200){
//             // console.log(e.target.status);
//             const data = JSON.parse(e.target.responseText)
//             // console.log(data);
//             resolve(data.puzzle)
//         } else if(e.target.readyState === 4){//ini untuk error
//             reject('An error has taken place')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send('')
// })



// this we use Callback
// const getPuzzle = (wordCount, callback)=>{    
// Making an HTTP request
    // const request = new XMLHttpRequest();//XMLHttpRequest is object to request data from a server.

//     request.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState === 4 && e.target.status === 200){
//             // console.log(e.target.status);
//             const data = JSON.parse(e.target.responseText)
//             // console.log(data);
//             callback(undefined, data.puzzle)//undefined ini untuk mengisi error & puzzle ini dari isi object
//         } else if(e.target.readyState === 4){//ini untuk error
//             callback('An error has taken place', undefined)
//             // console.log('An error has taken place');
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send('')
// }


//ini default atau memanggil request biasa
// const getPuzzleSync = ()=>{
//     // Making an HTTP request
//         const request = new XMLHttpRequest();//XMLHttpRequest is object to request data from a server.
    
//         request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=2', false);
//         request.send('')

//             if(request.readyState === 4 && request.status === 200){
//                 // console.log(request.status);
//                 const data = JSON.parse(request.responseText)
//                 // console.log(data);
//                 return data.puzzle
//                 callback(undefined, data.puzzle)//undefined ini untuk mengisi error & puzzle ini dari isi object
//             } else if(request.readyState === 4){//ini untuk error
//                 throw new Error('Things did not go well')
//                 // console.log('An error has taken place');
//             }
//     }


// GETCURRRENTCOUNTRY FUNCTION //
//ini function yang berisi getLocation dan getcountry
const getCurrentCountry = async ()=>{
    const location = await getLocation()
    return getCountry(location.country)//location.country ini berasal dari getLocation function
}


// GETCOUNTRY FUNCTION//
// AsyncAwait
const getCountry = async (countryCode)=>{
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)

    if(response.status === 200){
       const data = await response.json()
       return data.find((country) => country.alpha2Code === countryCode)
    }else{
        throw new Error('Unable to fetch country')
    }
}

// This we use Fetch 
// const getCountry = (countryCode) =>{
//     return fetch(`https://restcountries.eu/rest/v2/all`).then((response)=>{
//         if(response.status === 200){
//             return response.json()//json() method of the Response interface takes a Response stream and reads it to completion
//         }else{
//             throw new Error('Unable to fetch country')
//         }   
//     }).then((data)=>{
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }


// This we use Promise
// const getCountry = (countryCode) => new Promise((resolve, reject)=>{
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         }else if(e.target.readyState === 400){//ini untuk error
//             reject('Unable to fetch country')
//         }
//     })

//     countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
//     countryRequest.send('')
// })


// This we use Callback 
// const getCountry = (countryCode, callback)=>{
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             callback(undefined, country)
//         }else if(e.target.readyState === 400){//ini untuk error
//             callback('Unable to fetch country')
//         }
//     })

//     countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
//     countryRequest.send('')
// }


// GETLOCATION FUNCTION //
// AsyncAwait
const getLocation = async ()=>{
    const response = await fetch('https://ipinfo.io/json?token=002ac3d3f63951')

    if(response.status === 200){
        return response.json()
    }else{
        throw new Error('Unable to fetch location')
    }
} 

//Fetch
// const getLocation = ()=>{
//     return fetch('https://ipinfo.io/json?token=002ac3d3f63951').then((response)=>{
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error('Unable to fetch location')
//         }
//     })
// } 

//Promise
// const getLocation = () => new Promise((resolve, reject)=>{
//     const locationRequest = new XMLHttpRequest()

//     locationRequest.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             resolve(data)
//         }else if(e.target.readyState === 400){
//             reject('Unable to fetch location')
//         }
//     })

//     locationRequest.open('GET', 'https://ipinfo.io/json?token=002ac3d3f63951')
//     locationRequest.send('')
// })



