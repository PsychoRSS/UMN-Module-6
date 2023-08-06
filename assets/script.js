var apiKey = "9ac7556bd3a00d2411501fa796cbd188";
var city = "Longmont";
var weatherEl = document.getElementById('#weather')
const body = document.getElementsByName("body")



function getWether() {
    // e.preventDefault
    var api =  "https://api.openweathermap.org/data/2.5/forecast?q= "+ city + "&units=imperial&cnt=7&appid=" + apiKey

    fetch(api)
    .then(function(response) {
        if(!response.ok) {
            throw new Error("rawr")
        }
        return response.json();
    }).then (function (data) {
        var weatherData = data.list
        // var newNewData = weatherData.weather
      
        for (let o = 0; o < weatherData.length; o++) {

            const element = weatherData[o];
      
            let tempra = element.main.temp
            let weatherDesc = element.weather[0].description
            const MyHumidity = element.main.humidity
            const windSpeed = element.wind.speed
            const weatherIcon = element.weather[0].icon

            const iconurl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

            const weatherCardDiv = $("<div>")
            const weatherDescDiv = $("<div>");

            
            
            const tempEl = $("<p>").text("The temprature will be " + tempra + " degree Farehnheit ")
            const weatherELL = $("<h2>").text("Today's weather will be " + weatherDesc)
            const weatherHumidEl = $("<p>").text("The humidity is " + MyHumidity)
            const windEl = $("<p>").text("The wind is " + windSpeed + "MPH")
            const iconEl = $("<img>").attr('src', iconurl)
            
            weatherELL.addClass("card-text");
            weatherHumidEl.addClass("card-text");
            weatherCardDiv.addClass("card");
            weatherDescDiv.addClass("card-body");


            $("body").append(weatherCardDiv);
            weatherCardDiv.append(weatherDescDiv)
            weatherDescDiv.append(tempEl)
            weatherDescDiv.append(iconEl)
            weatherDescDiv.append(weatherELL)
            weatherDescDiv.append(weatherHumidEl)
            weatherDescDiv.append(windEl)

            
            console.log(weatherData.dt_txt)
            console.log(tempra)
            console.log(MyHumidity)
            console.log(windSpeed)
            console.log(weatherIcon)
        }
      
 
        console.log(data)
        console.log(weatherData)
        // console.log(dayWeather)
        // console.log(newNewData)
    })
}

getWether()
console.log(city)

