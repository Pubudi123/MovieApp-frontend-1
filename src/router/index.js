import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboardRoute from './modules/dashboard_route'
import errorRoute from './modules/error_route'
import loginRoute from './modules/login_route'
import patientRoute from './modules/patient_route'
import moviesRoute from './modules/movies_route'
import unitRoute from './modules/unit_route'
import membersRoute from './modules/members_route'
import registerRoute from './modules/register_route'
import paydetailsRoute from './modules/paydetails_route'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    ...dashboardRoute,
    ...patientRoute,
    ...moviesRoute,
    ...unitRoute,
    ...loginRoute,
    ...errorRoute,
    ...membersRoute,
    ...registerRoute,
    ...paydetailsRoute

  ],
})

export default router
