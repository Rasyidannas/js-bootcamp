const getPuzzleSync = function (a){return a = `coki and siko is best friend`}

// getPuzzleSync

// const puzzle1 = getPuzzleSync()
// console.log(`Puzzle one is : ${puzzle1}`);

// const puzzle2 = getPuzzleSync()
// console.log(`Puzzle one is : ${puzzle2}`);

// console.log('End of the program');



// getPuzzleAsync
setTimeout(getPuzzleSync, 2000)

getPuzzleSync((puzzle1)=>{
    console.log(`Puzzle one is : ${puzzle1}`);
})

getPuzzleSync((puzzle2)=>{
    console.log(`Puzzle one is : ${puzzle2}`);
})

console.log('End of the program');
