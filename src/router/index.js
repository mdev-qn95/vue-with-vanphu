import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Members from '@/components/members/Members'
import AddMember from '@/components/members/AddMember'
import Courses from '@/components/Courses'
import CountDown from '@/components/CountDown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/add-member',
      name: 'AddMember',
      component: AddMember
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/count-down',
      name: 'CountDown',
      component: CountDown
    }
  ]
})
