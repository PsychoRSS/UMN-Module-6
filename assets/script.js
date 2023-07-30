var apiKey = "9ac7556bd3a00d2411501fa796cbd188";
var city = "longmont";




function getWether() {
    // e.preventDefault
    var api =  "https://api.openweathermap.org/data/2.5/forecast?q= "+ city + "&appid=" + apiKey

    fetch(api, function(response) {
        return response.json();
    }) 
    .then(function (response) {
        var weatherData = response
        console.log(weatherData)
    })
}

getWether()
console.log(city)

