<script setup>
import GroceryForm from '../components/ProductForm.vue';
import {addProducts} from '../store.js';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const product = ref({
    name: '',
    price: 0,
    amount: 1,
});

const router = useRouter();

function saveProduct(updatedProduct) {
    addProducts(updatedProduct);
    router.push('/');
}
</script>

<template>
    <GroceryForm :product="product" @submit="saveProduct" />
</template>
