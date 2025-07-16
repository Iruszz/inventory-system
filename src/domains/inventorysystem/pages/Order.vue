<script setup>
import {computed} from 'vue';
import {getAllProducts} from './../store.js';

const products = getAllProducts;

const toOrder = computed(() => {
    return products.value.filter(product => product.actualAmount < product.requiredAmount);
});

// TODO
// const amountToOrder = computed(() => {
//     return Math.abs(toOrder.actualAmount - toOrder.requiredAmount);
// });

// console.log('toOrder.actualAmount', toOrder.actualAmount);
// console.log('Amount to order', amountToOrder);
</script>

<template>
    <body class="w-fit m-25 border-collapse space-y-10">
        <h2>Products to Order</h2>
        <table id="ProductList">
            <tbody>
                <tr>
                    <td><strong>Product</strong></td>
                    <td><strong>In stock</strong></td>
                    <td><strong>Required</strong></td>
                    <td><strong>Amount to order</strong></td>
                </tr>
                <tr v-for="(product, index) in toOrder" :key="index">
                    <td>{{ product.name }}</td>
                    <td class="actualAmount">{{ product.actualAmount }}</td>
                    <td class="requiredAmount">{{ product.requiredAmount }}</td>
                </tr>
            </tbody>
        </table>
    </body>
</template>
