var apiKey = "9ac7556bd3a00d2411501fa796cbd188";
var city = "Longmont";
var weatherEl = document.getElementById('#weather')
const form = $("#form")
const userInput = $("#user")



function getWether() {
    // e.preventDefault
    var api =  "https://api.openweathermap.org/data/2.5/forecast?q= "+ city + "&units=imperial&appid=" + apiKey

    fetch(api)
    .then(function(response) {
        if(!response.ok) {
            throw new Error("rawr")
        }
        return response.json();
    }).then (function (data) {
        var weatherData = data.list
        // var newNewData = weatherData.weather
        

        for (let o = 0; o < weatherData.length; o+=8) {

            const element = weatherData[o];
      
            let tempra = element.main.temp
            let weatherDesc = element.weather[0].description
            const MyHumidity = element.main.humidity
            const windSpeed = element.wind.speed
            const weatherIcon = element.weather[0].icon
            const weatherDay =  element.dt_txt
            console.log(weatherDay)

            const iconurl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

            const weatherCardDiv = $("<div>")
            const weatherDescDiv = $("<div>");

            
            
            const tempEl = $("<p>").text("The temprature in " + city +" will be " + tempra + " degree Farehnheit ")
            const weatherELL = $("<h2>").text(`The weather on ${weatherDay} weather will be ${weatherDesc}` )
            const weatherHumidEl = $("<p>").text("The humidity will be " + MyHumidity)
            const windEl = $("<p>").text("The wind will be " + windSpeed + "MPH")
            const iconEl = $("<img>").attr('src', iconurl)

            
            weatherELL.addClass("card-text");
            weatherHumidEl.addClass("card-text");
            weatherCardDiv.addClass("card col-4");
            weatherDescDiv.addClass("card-body");


            $("#form").append(weatherCardDiv);
            weatherCardDiv.append(weatherDescDiv)
            weatherDescDiv.append(iconEl)
            weatherDescDiv.append(weatherELL)
            weatherDescDiv.append(tempEl)
            weatherDescDiv.append(weatherHumidEl)
            weatherDescDiv.append(windEl)

            
            console.log(weatherData)
            console.log(tempra)
            console.log(MyHumidity)
            console.log(windSpeed)
            console.log(weatherIcon)
        }
      
 
        console.log(data)
        console.log(weatherData[0].dt_txt)
        // console.log(dayWeather)
        // console.log(newNewData)
    })
}

getWether()
console.log(city)

