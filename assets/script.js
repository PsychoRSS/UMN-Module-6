var apiKey = "9ac7556bd3a00d2411501fa796cbd188";
var city = "Longmont";
var weatherEl = document.getElementById('#weather')



function getWether() {
    // e.preventDefault
    var api =  "https://api.openweathermap.org/data/2.5/forecast?q= "+ city + "&cnt=7&appid=" + apiKey

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
            
            const dayWeather = element.weather
            var weatherELL = document.createElement('p');
            weatherELL.textContent = dayWeather;

            weatherEl.appendChild(weatherELL);
            console.log(element.weather)
            console.log(dayWeather)
        }
      
 
        console.log(data)
        console.log(weatherData)
        // console.log(newData)
        // console.log(newNewData)
    })
}

getWether()
console.log(city)

