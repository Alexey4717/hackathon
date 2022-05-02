import { createWebHistory, createRouter } from "vue-router"
import Home from '@/views/Home.vue'
import LayoutDeveloper from '@/views/LayoutDeveloper.vue'
import FrontendDeveloper from '@/views/FrontendDeveloper.vue'
import PythonProgrammer from '@/views/PythonProgrammer.vue'
import MobileAppDeveloper from '@/views/MobileAppDeveloper.vue'
import IosProgrammer from '@/views/IosProgrammer.vue'
import AndroidProgrammer from '@/views/AndroidProgrammer.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    // Главная
    path: "/",
    name: "Home",
    component: Home
  },
  {
    // Верстальщик
    path: "/layout-developer",
    name: "LayoutDeveloper",
    component: LayoutDeveloper
  },
  {
    // Frontend разработчик
    path: "/frontend-developer",
    name: "FrontendDeveloper",
    component: FrontendDeveloper
  },
  {
    // Программист на Python
    path: "/python-programmer",
    name: "PythonProgrammer",
    component: PythonProgrammer
  },
  {
    // Разработчик мобильных приложений
    path: "/mobile-app-developer",
    name: "MobileAppDeveloper",
    component: MobileAppDeveloper
  },
  {
    // Программист на IOS
    path: "/ios-programmer",
    name: "IosProgrammer",
    component: IosProgrammer
  },
  {
    // Программист на Android
    path: "/android-programmer",
    name: "AndroidProgrammer",
    component: AndroidProgrammer
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router