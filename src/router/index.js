import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
	},
	{
		path: '/search',
		name: 'serach',
		component: () => import('@/views/SearchView.vue'),
	},
	{
		path: '/uploaded',
		name: 'upload',
		component: () => import('@/views/UploadView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

history.pushState(null, document.title, '#back');

export default router;
