import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Game from '../views/Game.vue';
import Summary from '../views/Summary.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
