// $(document).ready(function(){

$("#search-button").on("click", function() {
    var searchValue = $("#search-value").val();

    $("#search-value").val("");

    searchWeather(searchValue)
});

function searchWeather(searchValue) {
    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=d396f1b911e6af6d4db7e43392f16b15&units=imperial`,
        dataType: "json",
    }).then(function(data) {
        console.log(data)
        // Create a history link for the search (Look up .push()) (this is used to set items to local storage)

        $("#today").empty()

        //creating a card for appending weather data
        var title = $("<h3>").addClass("card-title").text(data.name);
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed);
        var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity);
        var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp);
        var cardBody = $("<div>").addClass("card-body");

        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

    })
}

// });

// make a function to get the forecast (it is a different URL)
// use a for loop to loop over all forecasts (by specs)

// function to get UV Index (another different URL call)

// get current search history, if there is any and print it out