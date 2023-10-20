let myBook = {
    title : "1984",
    author : "Georgia Orwel",
    pageCount : 326
}

let otherBook = {
    title : "A People History",
    author : "Howard Zinn",
    pageCount : 723
}

//object didalam function dan diletakkan pada return
let getSummary = function(book){
    return{
        summary : `${book.title} by ${book.author}`,
        pageCountSummary : `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary);//intinya ini mengambil dari "bookSummary" (line 21) dan data dari "myBook" diambil sesuai argument di "console.log" 
console.log(otherBookSummary.summary);



//Challenge area
//Create function - take fahrenheit in - return object with all three

let fahrenheitConverter = function(fahrenheit){
    return{
        fahrenheit : fahrenheit,
        celcius : (fahrenheit - 32)*5/9,
        kelvin : (fahrenheit + 459.67)*5/9
    }
}
let temp = fahrenheitConverter(30)
let fahrenheitToCelcius = fahrenheitConverter(32)
let fahrenheitToKelvin = fahrenheitConverter(273)

console.log(temp);//ini untuk mencetak kesemua
console.log(fahrenheitToCelcius.celcius);
console.log(fahrenheitToKelvin.kelvin);

// console.log(fahrenheitConverter(30).celcius); // ini juga sama dan lebih simple untuk mencetak atau memnggil nilai object pada return