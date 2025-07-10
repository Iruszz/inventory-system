import {createRouter, createMemoryHistory} from 'vue-router';
import routes from './../domains/inventorysystem/routes.js';

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
