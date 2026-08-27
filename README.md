# skala-vue — Weather App

SKALA Full-Stack Engineering `Frontend-framework: Vue.js` 과정 실습 저장소입니다. 챕터를 진행하면서 하나의
미니 날씨 대시보드(Weather App)를 Vue Syntax → Composition API → Component 분리 → Router → Pinia → Axios →
UI Library 순으로 점진적으로 완성했습니다.

- **배포 URL**: https://skala-vue-kodongmin.vercel.app
- **작성자**: 고동민 (SKALA P035)

## 기술 스택

- Vue 3 (`<script setup>`, Composition API)
- Vite (빌드 도구), Vue Router, Pinia (상태 관리), Axios (HTTP 클라이언트)
- Element Plus (UI 컴포넌트 라이브러리)
- ESLint + Prettier + Oxlint

## 로컬 실행

```sh
npm install
```

날씨 API를 쓰려면 [OpenWeatherMap](https://openweathermap.org/)에서 무료 API 키를 발급받아
`.env.local` 파일을 만들고 아래처럼 채워야 합니다 (`.env.example` 참고, 이 파일은 git에 올라가지 않습니다).

```
VITE_OPENWEATHER_API_KEY=발급받은_키
```

```sh
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 (dist/)
npm run lint     # oxlint + eslint
npm run format   # prettier
```

## 챕터별 진행 내역

과제 슬라이드 순서를 따라가면서, 실습용 예제 컴포넌트와 실제 Weather App 기능을 같이 쌓아 올렸습니다.
실습 전용 컴포넌트는 `src/components/practices/`, `src/views/Practice*.vue`에 챕터별로 모아두었고,
상단 네비게이션 바에서 각 챕터 실습 페이지로 바로 이동할 수 있습니다.

### 2장 — Getting Started
- `npm create vue@3.22.3`로 스캐폴딩 (TypeScript 미사용, Router/Pinia/ESLint/Prettier 포함, Vitest/E2E 미사용)

### 3장 — Vue Syntax
- Reactivity(ref) 기초, Text Interpolation, 모든 디렉티브(`v-html/v-text/v-bind/v-if/v-show/v-for/v-pre/v-cloak/v-once/v-memo`),
  이벤트 핸들링(`v-on`, `$event`, 수식어), `v-model`과 폼 요소 매핑, scoped/external 스타일 실습
- **Weather Mockup**: 도시 5곳(서울/수원/부산/제주/강릉) 배열을 `v-for`로 카드 렌더링, 기온 25도 기준 `v-if`
  뱃지, `:value`+`@input`으로 직접 구현한 검색 바인딩, 카드 클릭/상세보기 버튼 이벤트 분리(`@click.stop`)

### 4장 — Composition API
- `ref`/`reactive` 차이와 반응성 단절 케이스, `computed` 캐싱 동작, `watch`(단일/멀티소스/deep), `watchEffect`
- **Weather Composition**: 검색어 기반 `filteredWeatherList` computed, `watch`/`watchEffect`로 상태 변화
  콘솔 로깅, 검색 결과 없음 안내, 더운 도시 개수·평균 기온 computed 추가

### 5장 — Vue Components
- Lifecycle Hook(`onMounted`/`onUpdated`/`onUnmounted` + 타이머 정리), Props & Emits, Provide/Inject(3단계
  Props Drilling 우회), Slot(Default/Named/Scoped)
- **Weather Component 분리**: `WeatherParent`(상태 소유) + `BaseDashboardCard`(slot 기반 공통 카드) +
  `SearchBar`(props: searchQuery, emits: update-query) + `WeatherCard`(props: city, emits:
  select-card/click-detail) 4개 컴포넌트로 분리

### 6장 — Vue Router
- 모든 라우트 지연 로딩(dynamic import), `useRoute`/`useRouter`, 동적 세그먼트(`:cityId`), Query String
  Routing, Catch-all Route, `beforeEach`/`afterEach` 로그
- **Weather Router**: `WeatherParent`를 `WeatherHomeView`로 흡수하고 상세보기를 `router.push`로 전환,
  `WeatherDetailView`(동적 라우팅)·`WeatherAboutView`·`NotFoundView` 구성, 추가로 `WeatherSearchView`
  (`/search?city=`)를 만들어 Query String Routing 실습

### 7장 — Pinia
- 기본 counter 스토어, `storeToRefs` 사용법과 미사용 시 반응성 깨지는 이유
- **Weather Store**: `configStore`(state: unit, getters: unitSymbol/convertTemp, actions: toggleUnit)로
  섭씨/화씨 전역 토글 구현, `UnitToggler`를 네비게이션 바에 배치. 다크 모드 표시용 state/getter/action도
  추가로 얹어봄

### 8장 — Axios
- JSONPlaceholder로 GET/POST/PUT/DELETE 전체 CRUD, Promise(.then) vs async/await 실행 순서 비교
- **Weather Axios**: Mock 데이터를 걷어내고 `services/weatherApi.js`에서 좌표 기반 OpenWeatherMap Current
  Weather API를 실제로 호출하도록 교체. 로딩 상태(⏳)/에러 메시지 처리, API 키는 `.env.local`로 분리

### 9장 — UI Libraries
- Element Plus 설치 및 전역 등록, 회원가입 폼·상품 수량/별점·삭제 확인+진행률 Code Challenge
- Weather App 전체에 Element Plus 적용: `el-card`, `el-input`, `el-tag`, `el-button`, `el-switch`,
  `el-alert`, `el-descriptions`, `ElMessage` 토스트

### 10장 — Vite Build & Deployment
- ESLint 커스텀 룰(`eqeqeq`, `no-console: off`) 추가
- 빌드 모드별 환경변수(`.env.staging` / `.env.production` → `VITE_APP_MODE`) 적용 및 `build:staging`/
  `build:production` 스크립트 추가
- `vercel.json`으로 SPA rewrite 설정 후 GitHub 연동으로 Vercel 배포

## 프로젝트 구조

```
src/
├── App.vue                    # 네비게이션 바 + RouterView
├── main.js                    # Vue/Pinia/Router/Element Plus 초기화
├── router/index.js            # 라우트 정의 (지연 로딩 + Catch-all)
├── data/cityList.js           # 도시 좌표 정보
├── services/weatherApi.js     # OpenWeatherMap API 호출
├── stores/
│   ├── counter.js             # 기본 counter 스토어
│   └── configStore.js         # 온도 단위 / 다크모드 표시 스토어
├── components/
│   ├── exercise/               # 실제 Weather App 부품
│   │   ├── BaseDashboardCard.vue
│   │   ├── SearchBar.vue
│   │   ├── WeatherCard.vue
│   │   └── UnitToggler.vue
│   └── practices/               # 챕터별 학습용 예제 컴포넌트
│       ├── basic/ composition/ component/ library/ axios/
└── views/
    ├── WeatherHomeView.vue / WeatherDetailView.vue / WeatherAboutView.vue
    ├── WeatherSearchView.vue / NotFoundView.vue
    └── Practice*.vue           # 챕터별 실습 모음 페이지
```
