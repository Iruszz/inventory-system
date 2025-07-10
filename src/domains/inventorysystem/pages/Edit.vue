<script setup>
import GroceryForm from '../components/ProductForm.vue';
import {ref} from 'vue';
import {getProductById, updateProduct} from '../store.js';
import {useRoute} from 'vue-router';

const route = useRoute();
const id = Number(route.params.id);

const grocery = ref({...getProductById(id).value});

function saveProduct(updateProduct) {
    updateProduct(updateProduct);
}
</script>

<template>
    <GroceryForm :product="product" @submit="saveProduct" />
</template>
