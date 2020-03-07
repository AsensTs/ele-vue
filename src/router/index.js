import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Index from '@/components/indexcity/IndexCity'
import childCityIndex from '@/components/indexcity/childCityIndex'
import storeView from '@/components/store/storeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/childCityIndex',
      name: 'childCityIndex',
      component: childCityIndex
    },
    {
      path: '/storeView',
      name: 'storeView',
      component: storeView
    }
  ]
})
