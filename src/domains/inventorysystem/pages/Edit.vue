<script setup>
import ProductForm from '../components/ProductForm.vue';
import {ref} from 'vue';
import {getAllProducts, getProductById, updateProduct} from '../store.js';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const productId = Number(route.params.id);
const productToEdit = getProductById(productId);

function saveProduct(product) {
    updateProduct(product);
    router.push({name: 'overview'});
}
</script>

<template>
    <ProductForm :product="productToEdit" @submit="saveProduct" />
</template>
