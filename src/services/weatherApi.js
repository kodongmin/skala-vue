import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// 좌표(위도/경도) 기반으로 OpenWeatherMap Current Weather API를 호출하고,
// 화면에서 바로 쓰기 좋은 형태로 가공해서 반환한다.
export async function fetchCurrentWeather(city) {
  const response = await axios.get(BASE_URL, {
    params: {
      lat: city.lat,
      lon: city.lon,
      appid: API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  })

  const data = response.data
  return {
    id: city.id,
    name: city.name,
    temp: Math.round(data.main.temp),
    status: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  }
}
