function getForecast(cityName){
// API Key
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName +"&appid=ee5a8e3cb5bd041d69666106b722f631"
// Return data
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
     // var icon = data.list[0].main.weather[0].icon;
    var tempC = data.list[0].main.temp - 273.15;
    var humidity = data.list[0].main.humidity;
    var windSpeed = data.list[0].wind.speed;

    // Today's weather headings
    var todayHead = $("<h1>").text("Today in " + name);
    var todayDate = $("<p>").text(currentDate);
    // var todayIcon = 
    var todayTempC = $("<p>").text("Temp (C) = " + tempC);
    var todayHumidity = $("<p>").text("Humidity = " + humidity);
    var todayWindSpeed = $("<p>").text("Wind speed = " + windSpeed);

    // append today's data to page
    today.append(todayHead);
    today.append(currentDate);
    // today.append(todayIcon);
    today.append(todayTempC);
    today.append(todayHumidity);
    today.append(todayWindSpeed);

// ======================================================
    // Tomorrow's weather data
    var forecast = $("#forecast");
    forecast.empty();
    // var nextDay = dayjs().format("DD MMMM YYYY");
     // var icon = data.list[0].main.weather[0].icon;
    var tempCtom = data.list[8].main.temp - 273.15;
    var humiditytom = data.list[8].main.humidity;
    var windSpeedtom = data.list[8].wind.speed;

    // Today's weather headings
    var tomHead = $("<h1>").text("Tomorrow in " + name);
    // var tomDate = $("<p>").text(nextDay);
    // var todayIcon = 
    var tomTempC = $("<p>").text("Temp (C) = " + tempCtom);
    var tomHumidity = $("<p>").text("Humidity = " + humiditytom);
    var tomWindSpeed = $("<p>").text("Wind speed = " + windSpeedtom);

    // append tomorrow's data to page
    forecast.append(tomHead);
    // today.append(nextDay);
    // today.append(todayIcon);
    forecast.append(tomTempC);
    forecast.append(tomHumidity);
    forecast.append(tomWindSpeed);

    // =========================================================
    // +2days data
        // 2days's weather data
        // var nextDay = dayjs().format("DD MMMM YYYY");
         // var icon = data.list[0].main.weather[0].icon;
        var tempCplus2 = data.list[16].main.temp - 273.15;
        var humidityplus2 = data.list[16].main.humidity;
        var windSpeedplus2 = data.list[16].wind.speed;
    
        // 2days's weather headings
        var plusTwoHead = $("<h1>").text("Plus 2 Days in " + name);
        // var tomDate = $("<p>").text(nextDay);
        // var todayIcon = 
        var plusTwoTempC = $("<p>").text("Temp (C) = " + tempCplus2);
        var plusTwoHumidity = $("<p>").text("Humidity = " + humidityplus2);
        var plusTwoWindSpeed = $("<p>").text("Wind speed = " + windSpeedplus2);
    
        // append 2days's data to page
        forecast.append(plusTwoHead);
        // today.append(nextDay);
        // today.append(todayIcon);
        forecast.append(plusTwoTempC);
        forecast.append(plusTwoHumidity);
        forecast.append(plusTwoWindSpeed);

    // =========================================================
    // +3days data
        // 3days's weather data
        // var nextDay = dayjs().format("DD MMMM YYYY");
         // var icon = data.list[0].main.weather[0].icon;
        var tempCplus3 = data.list[32].main.temp - 273.15;
        var humidityplus3 = data.list[32].main.humidity;
        var windSpeedplus3 = data.list[32].wind.speed;
    
        // 3days's weather headings
        var plusThreeHead = $("<h1>").text("Plus 3 Days in " + name);
        // var tomDate = $("<p>").text(nextDay);
        // var todayIcon = 
        var plusThreeTempC = $("<p>").text("Temp (C) = " + tempCplus3);
        var plusThreeHumidity = $("<p>").text("Humidity = " + humidityplus3);
        var plusThreeWindSpeed = $("<p>").text("Wind speed = " + windSpeedplus3);
    
        // append 3days data to page
        forecast.append(plusThreeHead);
        // today.append(nextDay);
        // today.append(todayIcon);
        forecast.append(plusThreeTempC);
        forecast.append(plusThreeHumidity);
        forecast.append(plusThreeWindSpeed);

    // =========================================================
    // +4days data
        // 4days's weather data
        // var nextDay = dayjs().format("DD MMMM YYYY");
         // var icon = data.list[0].main.weather[0].icon;
        var tempCplus4 = data.list[32].main.temp - 273.15;
        var humidityplus4 = data.list[32].main.humidity;
        var windSpeedplus4 = data.list[32].wind.speed;
    
        // 4days's weather headings
        var plusFourHead = $("<h1>").text("Plus 4 Days in " + name);
        // var tomDate = $("<p>").text(nextDay);
        // var todayIcon = 
        var plusFourTempC = $("<p>").text("Temp (C) = " + tempCplus4);
        var plusFourHumidity = $("<p>").text("Humidity = " + humidityplus4);
        var plusFourWindSpeed = $("<p>").text("Wind speed = " + windSpeedplus4);
    
        // append 4days's data to page
        forecast.append(plusFourHead);
        // today.append(nextDay);
        // today.append(todayIcon);
        forecast.append(plusFourTempC);
        forecast.append(plusFourHumidity);
        forecast.append(plusFourWindSpeed);
  })};

var searchBtn = $("#search-button");
searchBtn.on("click", function(event){
    event.preventDefault();
    console.log("hello");
    

    var searchInput = $("#search-input");
    getForecast(searchInput.val());
    console.log(searchInput.val());
    renderbutton(searchInput.val());
});

function renderbutton(city) {
    var savedButton = $("<button>");
    savedButton.text(city)
    var history = $("#history");
    history.append(savedButton);
    
}


// function SayHello (){
//     console.log("hello")
// }


// SayHello();
// SayHello();
// function addTwoNumbers(){
//     console.log(10+5)
// }

// addTwoNumbers()

// function add(hi, bye){
// console.log(hi +bye)
// }

// add(5,10)
// add(22,55)