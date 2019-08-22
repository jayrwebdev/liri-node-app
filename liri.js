require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment")
console.log(keys)
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs")
var feature = process.argv[2];
var input = process.argv.slice(3).join(" ");

consumerInput(feature, input)
function consumerInput(feature, input) {
    if (feature == "concert-this") {
        console.log("Loading Info")
        getConcert(input)
    } else if (feature == "spotify-this-song") {
        console.log("Loading Info")
        getSongInfo(input)
    } else if (feature == "movie-this") {
        console.log("Loading Info")
        getMovieInfo(input)
    } else if (feature == "do-what-it-says") {
        console.log("Loading Info")
        doWhatItSays()
    }
}

function getSongInfo(input) {
    spotify.search(
        {
            type: "track",
            query: input,
        },
        function (error, data) {
            if (data.tracks) {
            var song = data.tracks.items

            if (error) {
                console.log("there was an error", error)
            } else {
                // console.log(song)
                console.log("**********INFO**********")
                console.log("Song name: " + song[0].name)
                console.log("Artist: " + song[0].artists[0].name)
                console.log("Link: " + song[0].external_urls.spotify)
                console.log("Album: " +song[0].album.name)
                console.log("************************")           
            }
        }
    }
    )
}

function getMovieInfo(input) {
    axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=5d2a7568")
        .then(function (response) {
            var movie = response
            var movies = movie.data
            fs.appendFile("log.txt", "******************************", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log("******************************")
            fs.appendFile("log.txt", " " + movies.Title + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Title)
            fs.appendFile("log.txt", " " + movies.Year + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Year)
            fs.appendFile("log.txt", " " + movies.imdbRating + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.imdbRating)
            fs.appendFile("log.txt", " " + movies.Ratings[1].Value + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Ratings[1].Value)
            fs.appendFile("log.txt", " " + movies.Country + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Country)
            fs.appendFile("log.txt", " " + movies.Language + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Language)
            fs.appendFile("log.txt", " " + movies.Plot + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Plot)
            fs.appendFile("log.txt", " " + movies.Actors + " ", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log(movies.Actors)
            fs.appendFile("log.txt", "******************************", function (error) {
                if (error) {
                    console.log("Ooooopsie there was a problem")
                } else {
                    console.log("text was updated")
                }
            })
            console.log("******************************")
        })

}

function getConcert(input) {

    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")

        .then(function (response) {

            var concert = response.data

            for (var i = 0; i < concert.length; i++) {
                console.log("**********INFO**********")
                console.log("Name: " + concert[i].venue.name)
                console.log("Venue: " + concert[i].venue.city)
                console.log("Date: " + moment(concert[i].venue.datetime).format("MM/DD/YYYY"))
                console.log("********************")
            }
        })
}

function doWhatItSays() {
     fs.readFile('random.txt',"utf-8",function(error,data){
         if (error) {
             console.log("there was a error",error)
         } else {
             var print = data.split(",")
             getSongInfo(print[1])
         }
        
     })
}
