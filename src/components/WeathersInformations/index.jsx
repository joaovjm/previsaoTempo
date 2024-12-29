import './WeathersInformations.css'


function WeatherInformation ({weather}){

    return (
        <section className="weather-container">
            <h2>{weather.name}</h2>
            <div className="weather-info">
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
                <p className="temperature">{Math.round(weather.main.temp)}</p>
            </div>
            <p className="description">{weather.weather[0].description}</p>
            <div className="details">
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}hPa</p>
            </div>
        </section>
        
        
    )

}

export default WeatherInformation