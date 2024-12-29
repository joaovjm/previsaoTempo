import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInformation from './components/WeathersInformations'
import WeatherInformation5Days from './components/WeathersInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef() //Usando para adicionar uma referência no input, indicando que o valor a ser adicionado na variável é o que está no input

  //Função necessária para o Axios coletar as informações da API
  async function searchCity(){
    
    const city = inputRef.current.value
    const key = "c01e26774de3143d4e3f858ea4189385"
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`  //c01e26774de3143d4e3f858ea4189385
    const url5days = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5days)

    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5Days.data)
  }
  

  return (
    <>
      <div className='container'>
        <h1>Previsão do tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
        {weather && <WeatherInformation weather={weather}/>}
        {weather5Days && <WeatherInformation5Days weather5Days={weather5Days}/>}
        
      </div>
      
    </>
  )
}

export default App
