<script setup>
import ProductsTable from '../components/ProductsTable.vue';

const {products} = defineProps({products: Array});
</script>

<template>
    <ProductsTable :products="products" />
</template>
