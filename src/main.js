import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCesium from 'vue-cesium'
import zhCn from 'vue-cesium/es/locale/lang/zh-hans'
import 'vue-cesium/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(VueCesium, {
    cesiumPath: './Cesium/Cesium.js',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWM4NjI5OC1kZTRhLTQ4NmItOGY0NC03ZTg3ZTQ4MTI4ZGQiLCJpZCI6MTMyMTI2LCJpYXQiOjE2ODA2MTQyNTV9.pTNduadpX8YMR6NEAxZKa9oK-xp7rQlTstvNTJEnoDI',
    locale: zhCn // 改成英文
})

app.mount('#app')
