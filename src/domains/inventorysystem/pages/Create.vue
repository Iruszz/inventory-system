<script setup>
import GroceryForm from '../components/ProductForm.vue';
import {addProducts} from '../store.js';
import {computed, ref} from 'vue';
import {useRouter} from 'vue-router';

const defaultProduct = ref({
    name: '',
    actualAmount: 1,
    requiredAmount: 1,
});

const router = useRouter();

function saveProduct(updatedProduct) {
    updatedProduct.requiredAmount = updatedProduct.actualAmount + 5;
    addProducts(updatedProduct);
    router.push('/');
}
</script>

<template>
    <GroceryForm :product="defaultProduct" @submit="saveProduct" />
</template>
