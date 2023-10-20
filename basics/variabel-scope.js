//Javascript use Lexical Scope(Static Scope)
//Global Scope - Defined outside of all code blocks
//Local Scope - Defined inside a code block

//in a scope you can access variable defined in that scope, or in any parent/ancestor/global scope

//Global scope(varOne) --- so it is mean parent
    //Local scope(varTwo) --- so it is child of "varOne" and parent of "varFour"
        //Local scope(varFour) --- so it is child of "varTwo"
    //Local scope (varThree) ---so it is child of "varOne" and siblings of "varTwo"

    let varOne = "varOne"; // So, it is a Global Scope

    if(true){ // Code Block ditandai dengan kurung kurawal
        console.log(varOne);
        let varTwo = "varTwo"; //So, it is a Local Scope
        console.log(varTwo);

        if(true){
            let varFour= "varFour";
            console.log(varFour);
        }
    }
    
    if(true){
        let varThree = "varThree";
        console.log(varThree);
    }
    
    console.log(varTwo);