console.log("The js file for GifTastic is connected.")

//Global Variable
var topics = ["Kylo Ren", "Boba Fett", "Han Solo", "Chewbacca", "Darth Maul", "C-3PO"];

//Create function that loops through topic array and creates the buttons.
function renderButtons() {
	$("#themeButtons").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("character");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#themeButtons").append(a);
    }
}

// Generate the buttons for the page first thing on page render.
renderButtons(topics);

// Function that on click of the character buttons queries the giphy API
$("#themeButtons").on("click", "button", function() {
	console.log(this);

	var name = $(this).data("name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        name + "&api_key=417be88504ad4ce597509bda6982daab&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
    	var results = response.data;
    	for (var j = 0; j < results.length; j++) {
    		if (results[j].rating !== "r" && results[j].rating !== "pg-13") {
    			var rating = results[j].rating;
    			var p = $("<p>").text("Rating: " + rating);
    			var personStill = results[j].images.fixed_width_still.url;
    			var personAnimate = results[j].images.fixed_width.url;
                var image = $('<img>');
                image.attr('src',personStill);
                image.attr('data-personStill',personStill);
                image.attr('data-personAnimate',personAnimate);
                image.attr('data-state',"still");
                var gifDiv = $("<div class='item'>");
    			gifDiv.append(p);
    			gifDiv.append(image);
    			$("#gifsGoHere").prepend(gifDiv);
    		}
    	}
    });
});
  

// Function that on click of submit a new button is created (push to array).
$("#addTheme").on("click", function(event) {
	event.preventDefault();
	var topic = $("#theme-input").val().trim();
	topics.push(topic);
	renderButtons(topics);
    $("#theme-form")[0].reset();
});

// * * * PSUEDOCODE & REQUIREMENTS * * *
// √ 1.0 Index file to be minimal like shown in video.
// √ 2.0 Create an array of strings to the variable topics.
// √ 3.0 Create a loop that appends buttons for each string of the array.
// √ 4.0 Entering a topic in the input box and submitting will generate a new button.
// √ 5.0 Query should be https.
// √ 6.0 Prepopulated buttons generate GIFs.
// 7.0 GIFs do not auto animate until clicked.
// 8.0 Clicking on the GIF with stop the animation or start the animation.

// * * * ACTION ITEMS & TO D0 * * * 
// √ 1.0 Create Repo and basic file structure.
// √ 2.0 Create initial files - index, reset, and game.js
// √ 3.0 Psuedocode the script after watching the demo.
// 4.0 Pick a theme and colors for buttons.
// √ 5.0 Reseach the API documentation for: q, limit, rating
// √ 5.1 q = required search query term or prhase
// √ 5.2 limit = The maximum number of records to return - 10 is the assignment requirement.
// √ 5.3 rating = Filters results by specified rating (assume assignment removes any r rated).
// 5.4 fixed_width = Width set to 200px - animated
// √ 5.5 fixed_width_still = Static preview image for fixed_width.
// √ 6.0 request my own API key = 417be88504ad4ce597509bda6982daab