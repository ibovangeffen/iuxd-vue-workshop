import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import Exercise01 from "@/views/Exercise01";
import Exercise02 from "@/views/Exercise02";
import Exercise03 from "@/views/Exercise03";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	}, {
		path: '/exercises/01',
		name: 'Exercise01',
		component: Exercise01,
	}, {
		path: '/exercises/02',
		name: 'Exercise02',
		component: Exercise02,
	}, {
		path: '/exercises/03',
		name: 'Exercise03',
		component: Exercise03,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title || 'UIXD Vue Workshop';
	next();
});

export default router;
