import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { ElPagination, ElSelect, ElInput, ElTag } from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'


createApp(App)
.use(ElPagination)
.use(ElSelect)
.use(ElInput)
.use(ElTag)
.use(router)
.mount('#app')
