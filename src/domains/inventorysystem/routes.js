import Overview from './pages/Overview.vue';
import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Order from './pages/Order.vue';

// TODO: geef routes ook een naam
const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/edit/:id', component: Edit},
    {path: '/order', component: Order},
];

export default routes;
