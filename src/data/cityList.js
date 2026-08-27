// 8장(Axios)부터는 온도/날씨 상태를 OpenWeatherMap 실시간 API에서 가져오므로,
// 여기서는 각 도시의 고정 정보(좌표)만 관리한다. (weatherApi.js 참고)
export const cityList = [
  { id: 'city_01', name: '서울', lat: 37.5665, lon: 126.978 },
  { id: 'city_02', name: '수원', lat: 37.2636, lon: 127.0286 },
  { id: 'city_03', name: '부산', lat: 35.1796, lon: 129.0756 },
  { id: 'city_04', name: '제주', lat: 33.4996, lon: 126.5312 },
  { id: 'city_05', name: '강릉', lat: 37.7519, lon: 128.8761 },
]

export function findCityById(cityId) {
  return cityList.find((city) => city.id === cityId) ?? null
}
