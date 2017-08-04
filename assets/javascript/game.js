// Generate the buttons for the page first thing on page render.
$(function(){
    renderButtons(searchArray,'searchButton','#buttonsArea');
    console.log("The version 3 js file for GifTastic is connected.")
})

//Global Variable
var searchArray = ["Kylo Ren", "Boba Fett", "Han Solo", "Chewbacca", "Darth Maul", "C-3PO"];

//Create function that loops through topic array and creates the buttons.
function renderButtons(searchArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

// Function that on click of the character buttons queries the giphy API
$(document).on('click','.searchButton',function(){
    var type = $(this).data('type');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+
    type+"&api_key=417be88504ad4ce597509bda6982daab&limit=10";
    $.ajax({url: queryURL,method: "GET"})
    .done(function(response) {
        for (var j=0; j<response.data.length; j++) {
            var searchDiv = $('<div class="search-item">');
            var rating = response.data[j].rating;
            var p = $("<p>").text("Rating: " + rating);
            var animated = response.data[j].images.fixed_height.url;
            var still = response.data[j].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src',still);
            image.attr('data-still',still);
            image.attr('data-animated',animated);
            image.attr('data-state','still');
            image.addClass('searchImage');
            searchDiv.append(p);
            searchDiv.append(image);
            $("#searches").prepend(searchDiv);
        }
    })
})
  
//Function for animating on click
$(document).on('click','.searchImage',function(){
    var state = $(this).attr('data-state');
    if(state == 'still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else {
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }
})


// Function from video added line by line but did not work
$('#addSearch').on('click',function(){
    var newSearch = $('input').eq(0).val();
    searchArray.push(newSearch);
    renderButtons(searchArray,'searchButton','#buttonsArea');
    return false;
})

//This function was working before the reconstruction from demo video
//$("#addSearch").on("click", function() {
    //event.preventDefault();
    //var topic = $('input').eq(0).val();
    //searchArray.push(topic);
    //renderButtons(searchArray,'searchButton','#buttonsArea');
    //return false;
    //$("#search-form")[0].reset();
//});

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

// * * * PSUEDOCODE & REQUIREMENTS * * *
// √ 1.0 Index file to be minimal like shown in video.
// √ 2.0 Create an array of strings to the variable topics.
// √ 3.0 Create a loop that appends buttons for each string of the array.
// √ 4.0 Entering a topic in the input box and submitting will generate a new button.
// √ 5.0 Query should be https.
// √ 6.0 Prepopulated buttons generate GIFs.
// √ 7.0 GIFs do not auto animate until clicked.
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
// √ 5.4 fixed_width = Width set to 200px - animated
// √ 5.5 fixed_width_still = Static preview image for fixed_width.
// √ 6.0 request my own API key = 417be88504ad4ce597509bda6982daab