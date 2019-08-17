require("dotenv").config();

//var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
//var axios = require("axios");
var fs = require("fs")

var feature = process.argv[2];
var input = process.argv[3];

consumerInput(feature,input)
function consumerInput(feature,input) {
     if (feature == "concert-this") {
        console.log(feature+ " " +input)
        
    } else if (feature == "spotify-this-song") {
        console.log(input)
        getSongInfo(input)
    } else if (feature == "movie-this") {
        console.log(input)
    } else if (feature == "do-what-it-says") {
        console.log(input)
    }
}

function getSongInfo(input){
    spotify.search(
        {
            type: "track",
            query: input,
        },
        function(error,data) {
            if (error) {
                fs.appendFile("random.txt", "there was an ",error)
                console.log("there was an error",error)
            } else {
                var music = data.track.items;

                for (var i = 0 ; i < music.length; i++) {
                  fs.appendFile("random.txt","********** Song Information **********")
                }
            }
        }
    )

}

   