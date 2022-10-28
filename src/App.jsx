import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import PreCharging from './components/PreCharging'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [tempe, setTempe] = useState()
  

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      }
      setCoords(obj)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])


  // PETICION DEL CLIMA // 
  useEffect(() => {
    if(coords) {
      const APIKEY = '73b0ec4428e7c7b120f292f1e3e2c29c'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
          setTempe({celsius, farenheit})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?
          <WeatherCard weather={weather} tempe={tempe}/>
        :
          <PreCharging/>
    }
    </div>
  )
}

export default App
