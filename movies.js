function checkIn(age, movieName) {
    var movies = {
        "Game of throne": 18,
        "Home Alone" :13,
        "Sponge bob": 6,
        "The Affair": 21,
        "Dr Strange": 13,
        "Spatacus": 21,
        "Gods of Egypt": 13,
        "The gods must be crazy": 10,
        sayDate: function(){
            console.log('Movies starts in 5 minutes');
        }

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


