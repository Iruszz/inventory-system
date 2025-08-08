import Overview from './pages/Overview.vue';
import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Order from './pages/Order.vue';

// TODO: geef routes ook een naam
const routes = [
    {path: '/', component: Overview, name: 'overview'},
    {path: '/create', component: Create, name: 'create'},
    {path: '/edit/:id', component: Edit, name: 'edit'},
    {path: '/order', component: Order, name: 'order'},
];

export default routes;
