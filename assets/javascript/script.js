function getForecast(cityName){
// API Key
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName +"&appid=ee5a8e3cb5bd041d69666106b722f631"
// Function to return data as 5 day forecast
fetch(queryURL)
.then(function (response) {
  return response.json();
})
.then(function (data) {
    console.log(data);
    
    // Today's weather data
    var today = $("#today");
    today.empty();
    var name = data.city.name;
    var currentDate = dayjs().format("DD MMMM YYYY");
    var iconURL = "https://openweathermap.org/img/w/"
    var iconCode = data.list[0].weather[0].icon;
    var tempC = data.list[0].main.temp - 273.15;
    var humidity = data.list[0].main.humidity;
    var windSpeed = data.list[0].wind.speed;

    // Today's weather headings
    var todayHead = $("<h1>").text("Today, " + currentDate + ", in " + name);
    var icon = $("<img>"); 
    icon.attr("src", iconURL + iconCode + ".png");
    var todayTempC = $("<p>").text("Temp (C) = " + tempC);
    var todayHumidity = $("<p>").text("Humidity = " + humidity + "%");
    var todayWindSpeed = $("<p>").text("Wind speed = " + windSpeed);

    // append today's data to page
    today.append(todayHead);
    today.append(icon);
    today.append(todayTempC);
    today.append(todayHumidity);
    today.append(todayWindSpeed);

// ======================================================
    // Tomorrow's weather data
    var forecast = $("#forecast");
    forecast.empty();
    var nextDay = dayjs().add(1,'day').format("DD MMMM YYYY");
    var iconCodeTom = data.list[8].weather[0].icon;
    var tempCtom = data.list[8].main.temp - 273.15;
    var humiditytom = data.list[8].main.humidity;
    var windSpeedtom = data.list[8].wind.speed;

    // Tomorrow's weather headings
    var tomHead = $("<h1>").text(nextDay + " " + name);
    var tomicon = $("<img>"); 
    tomicon.attr("src", iconURL + iconCodeTom + ".png");
    var tomTempC = $("<p>").text("Temp (C) = " + tempCtom);
    var tomHumidity = $("<p>").text("Humidity = " + humiditytom + "%");
    var tomWindSpeed = $("<p>").text("Wind speed = " + windSpeedtom);

    // append tomorrow's data to page
    forecast.append(tomHead);
    forecast.append(tomicon);
    forecast.append(tomTempC);
    forecast.append(tomHumidity);
    forecast.append(tomWindSpeed);

    // =========================================================
    // +2days data
        // 2days's weather data
        var Plus2 = dayjs().add(2,'day').format("DD MMMM YYYY");
        var iconplus2 = data.list[16].weather[0].icon;
        var tempCplus2 = data.list[16].main.temp - 273.15;
        var humidityplus2 = data.list[16].main.humidity;
        var windSpeedplus2 = data.list[16].wind.speed;
    
        // 2days's weather headings
        var plusTwoHead = $("<h1>").text(Plus2 + ' ' + name);
        var plus2icon = $("<img>"); 
        plus2icon.attr("src", iconURL + iconplus2 + ".png");
        var plusTwoTempC = $("<p>").text("Temp (C) = " + tempCplus2);
        var plusTwoHumidity = $("<p>").text("Humidity = " + humidityplus2 + "%");
        var plusTwoWindSpeed = $("<p>").text("Wind speed = " + windSpeedplus2);
    
        // append 2days's data to page
        forecast.append(plusTwoHead);
        forecast.append(plus2icon);
        forecast.append(plusTwoTempC);
        forecast.append(plusTwoHumidity);
        forecast.append(plusTwoWindSpeed);

    // =========================================================
    // +3days data
        // 3days's weather data
        var plus3 = dayjs().add(3,'day').format("DD MMMM YYYY");
        var iconplus3 = data.list[24].weather[0].icon;
        var tempCplus3 = data.list[24].main.temp - 273.15;
        var humidityplus3 = data.list[24].main.humidity;
        var windSpeedplus3 = data.list[24].wind.speed;
    
        // 3days's weather headings
        var plusThreeHead = $("<h1>").text(plus3 + ' ' + name);
        var plus3icon = $("<img>"); 
        plus3icon.attr("src", iconURL + iconplus3 + ".png");
        var plusThreeTempC = $("<p>").text("Temp (C) = " + tempCplus3);
        var plusThreeHumidity = $("<p>").text("Humidity = " + humidityplus3 + "%");
        var plusThreeWindSpeed = $("<p>").text("Wind speed = " + windSpeedplus3);
    
        // append 3days data to page
        forecast.append(plusThreeHead);
        forecast.append(plus3icon);
        forecast.append(plusThreeTempC);
        forecast.append(plusThreeHumidity);
        forecast.append(plusThreeWindSpeed);

    // =========================================================
    // +4days data
        // 4days's weather data
        var plus4 = dayjs().add(4,'day').format("DD MMMM YYYY");
        var iconplus4 = data.list[32].weather[0].icon
        var tempCplus4 = data.list[32].main.temp - 273.15;
        var humidityplus4 = data.list[32].main.humidity;
        var windSpeedplus4 = data.list[32].wind.speed;
    
        // 4days's weather headings
        var plusFourHead = $("<h1>").text(plus4 + ' ' + name);
        var plus4Icon = $("<img>"); 
        plus4Icon.attr("src", iconURL + iconplus4 + ".png");
        var plusFourTempC = $("<p>").text("Temp (C) = " + tempCplus4);
        var plusFourHumidity = $("<p>").text("Humidity = " + humidityplus4 + "%");
        var plusFourWindSpeed = $("<p>").text("Wind speed = " + windSpeedplus4);
    
        // append 4days's data to page
        forecast.append(plusFourHead);
        forecast.append(plus4Icon);
        forecast.append(plusFourTempC);
        forecast.append(plusFourHumidity);
        forecast.append(plusFourWindSpeed);
  })};

// Using search putton to create search input value
var searchBtn = $("#search-button");

searchBtn.on("click", function(event){
    event.preventDefault();
    var searchInput = $("#search-input");
    var city = searchInput.val();
    getForecast(searchInput.val());
    renderbutton(searchInput.val());
    localStorage.setItem(city, city); 
});



// Function to render buttons of searched locations including retrieving city from local storage
function renderbutton(city) {
    var savedButton = $("<button>");
    savedButton.text(city)
    var history = $("#history");
    history.append(savedButton);  
    savedButton.on("click", function(event){
        var storedCity = localStorage.getItem(city)
        getForecast(storedCity)
    })}