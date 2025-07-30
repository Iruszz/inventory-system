<script setup>
import ProductForm from '../components/ProductForm.vue';
import {ref} from 'vue';
import {getAllProducts, getProductById, updateProduct} from '../store.js';
import {useRoute} from 'vue-router';

const route = useRoute();
const productId = Number(route.params.id);

const productToEdit = getProductById(productId);

function saveProduct(updateProduct) {
    // TODO: onderstaande regel geeft error, zoek uit waarom en verbeter fout
    updateProduct(updateProduct);
}
</script>

<template>
    <ProductForm :product="productToEdit" @submit="saveProduct" />
</template>
