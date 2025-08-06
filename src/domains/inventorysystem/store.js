// State
import {ref, computed} from 'vue';

const products = ref([
    {id: 1, name: 'Brood', actualAmount: 2, requiredAmount: 5},
    {id: 2, name: 'Broccoli', actualAmount: 6, requiredAmount: 2},
    {id: 3, name: 'Krentebollen', actualAmount: 2, requiredAmount: 6},
    {id: 4, name: 'Noten', actualAmount: 4, requiredAmount: 4},
    {id: 5, name: 'Chips', actualAmount: 2, requiredAmount: 2},
    {id: 6, name: 'Sla', actualAmount: 1, requiredAmount: 6},
    {id: 7, name: 'Koekjes', actualAmount: 6, requiredAmount: 7},
]);

// Getters
export const getAllProducts = computed(() => products.value);
export const getProductById = id => computed(() => products.value.find(product => product.id == id));

// Actions
export const addProduct = product => {
    const newId = products.value.reduce((maxId, g) => Math.max(maxId, g.id), 0) + 1;
    products.value.push({...product, id: newId});
};

// TODO: onderstaande functie update niet, maar voegt toe
export const updateProduct = product => products.value.push(product);
