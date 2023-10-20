// Global
    //Local
        //Local
    //Local

    //let name = "Andrew";

    if(true){
        //let name = "Mike";
        if(true){
            let  name = "Jen"; //jang lupa tambahkan let untuk mencegah leaked global(global scope yang bocor)
            console.log(name);
        }
    }

    if(true){
        console.log(name);
    }