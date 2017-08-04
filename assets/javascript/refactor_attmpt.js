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
$(document).on('click','#themeButtons',function(){
	var type = $(this).data('type');
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        name + "&api_key=417be88504ad4ce597509bda6982daab&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
    	var results = response.data;
    	for (var j = 0; j < results.length; j++) {
    		if (results[j].rating !== "r" && results[j].rating !== "pg-13") {
    			var searchDiv = $('<div class="search-item">');
                var rating = results[j].rating;
    			var p = $("<p>").text("Rating: " + rating);
    			var still = results[j].images.fixed_width_still.url;
    			var animated = results[j].images.fixed_width.url;
                var image = $('<img>');
                image.attr('src',still);
                image.attr('data-still',still);
                image.attr('data-animated',animated);
                image.attr('data-state','still');
                image.addClass('searchImage');
    			searchDiv.append(image);
                searchDiv.append(p);
    			$("#gifsGoHere").prepend(searchDiv);
    		}
    	}
    });
});

//Function for animating on click
$(document).on('click','.item',function(){
    var state = $(this).data('state');
    if(state == 'still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else {
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }
})

// Function that on click of submit a new button is created (push to array).
$("#addTheme").on("click", function(event) {
	event.preventDefault();
	var topic = $("#theme-input").val().trim();
	topics.push(topic);
	renderButtons(topics);
    $("#theme-form")[0].reset();
});