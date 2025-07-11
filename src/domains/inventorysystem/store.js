// State
import {ref, computed} from 'vue';

const products = ref([
    {id: 1, name: 'Brood', actualAmount: 1, minimumAmount: 1},
    {id: 2, name: 'Broccoli', actualAmount: 1, minimumAmount: 1},
    {id: 3, name: 'Krentebollen', actualAmount: 1, minimumAmount: 1},
    {id: 4, name: 'Noten', actualAmount: 1, minimumAmount: 1},
    {id: 5, name: 'Chips', actualAmount: 1, minimumAmount: 1},
    {id: 6, name: 'Sla', actualAmount: 1, minimumAmount: 1},
    {id: 7, name: 'Koekjes', actualAmount: 1, minimumAmount: 1},
]);

// export const defaultProduct = {
//     name: '',
//     actualAmount: 1,
//     minimumAmount: 1,
// };

// Getters
export const getAllProducts = computed(() => products.value);
export const getProductById = id => computed(() => products.value.find(product => product.id == id));

// Actions
export const addProducts = product => {
    const newId = products.value.reduce((maxId, g) => Math.max(maxId, g.id), 0) + 1;
    products.value.push({...product, id: newId});
};

export const updateProduct = product => products.value.push(product);
