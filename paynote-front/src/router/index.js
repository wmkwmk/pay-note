import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/All'
import List from '@/components/List'
import Set from '@/components/Set'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All',
      component: All
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    }
  ]
})
