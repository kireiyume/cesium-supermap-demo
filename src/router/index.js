import { createRouter, createWebHistory } from 'vue-router'
import mapView from '@/views/map/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: mapView
        }
    ]
})
export default router
