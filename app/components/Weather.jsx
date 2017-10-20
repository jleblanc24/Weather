var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleSearch: function(location) {
        
        var that = this;
        
        this.setState({isLoading: true});
        
        openWeatherMap.getTemp(location).then(function(temp){
            
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
            
        }, function(errMsg){
            
            console.log(errMsg);

            that.setState({
                isLoading: false
            });
            
            
        });
        
    },
    
    render: function() {
                
        var {isLoading, temp, location} = this.state;
        
        function renderMessage(){
            
            if (isLoading) {
                
                return <h3>Loading weather...</h3>;
                                
            }
            else if (temp && location) {

                return <WeatherMessage location={location} temp={temp}/>;
                
            }
        }

        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;