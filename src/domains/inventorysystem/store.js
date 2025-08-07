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
export const updateProduct = (product) => {
    const itemToUpdate = products.value.find(item => item.id === product.id);

    // products.value.splice()
    // const updatedProduct = Object.assign(product, {name : product.name, actualAmount : product.actualAmount});
    // const updatedProduct = {...product, ...{ name : product.name, actualAmount : product.actualAmount }};
    // console.log('updatedProduct,', updatedProduct);


    // const itemToUpdateArray = Object.values(itemToUpdate);
    // console.log('itemToUpdateArray,', itemToUpdateArray);
    // console.log('Product actualAmount,', product.actualAmount);
    console.log(products.value);
    console.log('itemToUpdate,', itemToUpdate);
    const index = products.value.findIndex(x => x.id === product.id);
    console.log('itemToUpdate,', itemToUpdate);
    console.log('index,', index);
    const updatedProduct = product.value.splice(index, 1, itemToUpdate);
    console.log('updatedProduct,', updatedProduct);
    // const updatedProduct = updateProduct.splice(4, 1, product.actualAmount);
    // console.log('updatedProduct,', updatedProduct);
}
