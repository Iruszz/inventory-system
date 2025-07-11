<script setup>
import Nav from './domains/inventorysystem/components/Nav.vue';
import {getAllProducts} from './domains/inventorysystem/store.js';

const products = getAllProducts;
</script>

<template>
    <Nav />
    <RouterView />
</template>
