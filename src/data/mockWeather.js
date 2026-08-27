// Axios 챕터에서 실제 API로 교체되기 전까지 사용하는 임시 Mock 데이터.
// WeatherHomeView와 WeatherDetailView가 함께 참조한다.
export const weatherList = [
  { id: 'city_01', name: '서울', temp: 28, status: '맑음', humidity: 55, windSpeed: 3.2 },
  { id: 'city_02', name: '수원', temp: 24, status: '비', humidity: 78, windSpeed: 4.1 },
  { id: 'city_03', name: '부산', temp: 26, status: '구름', humidity: 62, windSpeed: 5.4 },
  { id: 'city_04', name: '제주', temp: 29, status: '맑음', humidity: 60, windSpeed: 6.8 },
  { id: 'city_05', name: '강릉', temp: 22, status: '흐림', humidity: 70, windSpeed: 2.9 },
]

export function findCityById(cityId) {
  return weatherList.find((city) => city.id === cityId) ?? null
}
