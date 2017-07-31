console.log("The js file for GifTastic is connected.")

//Global Variable
var topics = ["kylo ren", "boba fett", "han solo", "chewbacca", "darth maul", "C-3PO"];

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

// Function that on click of submit a new button is created (push to array).
$("#addTheme").on("click", function(event) {
	event.preventDefault();
	var topic = $("#theme-input").val().trim();
	topics.push(topic);
	renderButtons();
});

// Function that on click of the character buttons queries the giphy API



// * * * PSUEDOCODE & REQUIREMENTS * * *
// √ 1.0 Index file to be minimal like shown in video.
// √ 2.0 Create an array of strings to the variable topics.
// √ 3.0 Create a loop that appends buttons for each string of the array.
// √ 4.0 Entering a topic in the input box and submitting will generate a new button.
// 5.0 Query should be https.
// 6.0 Prepopulated buttons generate GIFs.
// 7.0 GIFs do not auto animate until clicked.
// 8.0 Clicking on the GIF with stop the animation or start the animation.

// * * * ACTION ITEMS & TO D0 * * * 
// √ 1.0 Create Repo and basic file structure.
// √ 2.0 Create initial files - index, reset, and game.js
// √ 3.0 Psuedocode the script after watching the demo.
// 4.0 Pick a theme and colors for buttons.
// √ 5.0 Reseach the API documentation for: q, limit, rating
// 5.1 q = required search query term or prhase
// 5.2 limit = The maximum number of records to return - 10 is the assignment requirement.
// 5.3 rating = Filters results by specified rating (assume assignment removes any r rated).
// 5.4 fixed_width = Width set to 200px - animated
// 5.5 fixed_width_still = Static preview image for fixed_width.
// 6.0 request your own API key = 417be88504ad4ce597509bda6982daab