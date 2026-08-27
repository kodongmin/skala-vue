import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // 라우터 지연 로딩(Lazy Loading): 방문 시점에만 별도 청크로 다운로드된다.
      component: () => import('../views/WeatherHomeView.vue'),
    },
    {
      path: '/weather/:cityId',
      name: 'weather-detail',
      component: () => import('../views/WeatherDetailView.vue'),
    },
    {
      path: '/search',
      name: 'weather-search',
      component: () => import('../views/WeatherSearchView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/WeatherAboutView.vue'),
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/PracticeView.vue'),
    },
    {
      path: '/practice/composition',
      name: 'practice-composition',
      component: () => import('../views/PracticeCompositionView.vue'),
    },
    {
      path: '/practice/component',
      name: 'practice-component',
      component: () => import('../views/PracticeComponentView.vue'),
    },
    // Catch-all Route: 위 어떤 경로와도 매칭되지 않는 나머지 모든 요청을 404 페이지로 넘긴다.
    // 반드시 라우트 목록의 가장 마지막에 위치해야 한다.
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

// Navigation Guard 학습용 전역 가드: 실제 접근 제어는 없지만,
// 라우트가 전환될 때마다 어떤 경로로 이동하는지 콘솔에 남겨 동작 시점을 확인한다.
router.beforeEach((to, from) => {
  console.log(`🚦 [beforeEach] "${from.path}" -> "${to.path}" 로 이동합니다.`)
})

router.afterEach((to) => {
  console.log(`✅ [afterEach] "${to.path}" 로 이동이 완료되었습니다.`)
})

export default router
