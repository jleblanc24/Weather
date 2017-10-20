var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=863661231ad2498fd249b8a28d027d7f&units=imperial';

module.exports = {
    getTemp: function(location) {
        
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(response){
        
            if (response.data.cod && response.data.message) {
                // Error case
                
                throw new Error(response.data.message);

            } 
            else {
                // Success case
                
                // Return temperature
                return response.data.main.temp;
                
            }
            
        }, function(response){
            
            throw new Error(response.message);

        })
        
    }
}