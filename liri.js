require("dotenv").config();

var keys = require("./keys.js");
console.log(keys)
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs")
var feature = process.argv[2];
var input = process.argv[3];

consumerInput(feature, input)
function consumerInput(feature, input) {
    if (feature == "concert-this") {
        console.log(feature + " " + input)
    } else if (feature == "spotify-this-song") {
        console.log(input)
        getSongInfo(input)
    } else if (feature == "movie-this") {
        getMovieInfo(input)
        console.log(input)
    } else if (feature == "do-what-it-says") {
        console.log(input)
    }
}

function getSongInfo(input) {
    spotify.search(
        {
            type: "track",
            query: input,
        },
        function (error, response) {
            console.log(response)
        }
    )

}

function getMovieInfo(input) {
    axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=5d2a7568")
        .then(function (response) {
            var movie = response
            var movies = movie.data
            fs.appendFile("random.txt", "******************************", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log("******************************")
            fs.appendFile("random.txt", " " + movies.Title + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Title)
            fs.appendFile("random.txt", " " + movies.Year + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Year)
            fs.appendFile("random.txt", " " + movies.imdbRating + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.imdbRating)
            fs.appendFile("random.txt", " " + movies.Ratings[1].Value + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Ratings[1].Value)
            fs.appendFile("random.txt", " " + movies.Country + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Country)
            fs.appendFile("random.txt", " " + movies.Language + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Language)
            fs.appendFile("random.txt", " " + movies.Plot + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Plot)
            fs.appendFile("random.txt", " " + movies.Actors + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Actors)
            fs.appendFile("random.txt", "******************************", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log("******************************")
        })

}

