import './WeathersInformation5Days.css'


function WeatherInformation5Days({ weather5Days }) {

    //1 dia = 86400 segundos  /  1735430400  =  1735516800

    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const next5Days = Object.values(dailyForecast).slice(0,5)

    function convertDate(date){
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', {weekday: 'long', day:'2-digit'})
        
        return newDate
    }


    return (
        <section className="weather-container">
            <h3>5 Days</h3>
            <div className='weather-list'>
            {next5Days.map(forecast => (
                <div key={forecast.dt} className='weather-item'>
                    <p>{convertDate(forecast)}</p>
                    <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                    <p>{forecast.weather[0].description}</p>
                    <p>min. {Math.round(forecast.main.temp_min)}ºC / max. {Math.round(forecast.main.temp_max)}ºC</p>

                </div>
            ))}
            </div>
        </section>


    )

}

export default WeatherInformation5Days