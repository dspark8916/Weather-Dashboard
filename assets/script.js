// $(document).ready(function(){

$("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();

    $("#search-value").val("");

    fiveDay(searchValue)
    searchWeather(searchValue)
});

function searchWeather(searchValue) {
    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=d396f1b911e6af6d4db7e43392f16b15&units=imperial`,
        dataType: "json",
    }).then(function (data) {
        console.log(data)
        // Create a history link for the search (Look up .push()) (this is used to set items to local storage)

        $("#today").empty()

        //creating a card for appending weather data
        var title = $("<h3>").addClass("card-title").text(data.name + " " + "(" + todaysDate + ")");
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
        var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " \u00B0F");
        var icon = (`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`)
        var cardBody = $("<div>").addClass("card-body");

        cardBody.append(title, icon, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

    })
}

var todaysDate = moment().format('MMM. Do, YYYY');

const date = new Date()

function fiveDay(searchValue) {
    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=d396f1b911e6af6d4db7e43392f16b15&units=imperial`,
        dataType: "json",
    })
    .then(function (data) {
        console.log(data)
    
        $("#oneWeek").empty()

        var fiveCast = $("<h3>").addClass("fiveDayTitle").text("5-Day Forecast: ")
        $(".fourHead").append(fiveCast);
        for (i = 0; i < 40; i = i + 8) {
            var title = $("<h3>").addClass("card-title title5").text("Month Day, Year");
            var card = $("<div>").addClass("card card5");
            var temp = $("<p>").addClass("card-text text5").text("Temperature: " + data.list[i].main.temp + " \u00B0F");
            var humid = $("<p>").addClass("card-text text5").text("Humidity: " + data.list[i].main.humidity + "%");
            var icon = (`<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`);
            var cardBody = $("<div>").addClass("card-body body5");

            cardBody.append(title, icon, temp, humid);
            card.append(cardBody);
            $("#oneWeek").append(card);
        }
    });
}

// });

// make a function to get the forecast (it is a different URL)
// use a for loop to loop over all forecasts (by specs)

// function to get UV Index (another different URL call)

// get current search history, if there is any and print it out