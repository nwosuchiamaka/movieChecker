function checkIn(age, movieName) {
    var movies = {
        "Game of throne": 18,
        "Home Alone" :13,
        "Sponge bob": 6

    };

    var movieExist = false;
    for(var i in movies){
        if(movieName === i){
            movieExist = true;
        }
    }

    if(movieExist){
        var movieAge  = movies[movieName];

        if(age >= movieAge){
            movies.sayDate();
            console.log("Grab a popcorn and relax");
        }else{
            console.log("You are not old enough");
        }

    }else{
        console.log("Movie is not currently showing");
    }

}


