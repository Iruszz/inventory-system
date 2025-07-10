<script setup>
import {ref, computed, watch} from 'vue';

const products = defineModel();

// const productActualAmount = ref([]);

console.log('products:', products);
// console.log('productActualAmount:', productActualAmount);

// watch(
//     () => products,
//     newProducts => {
//         productActualAmount.value = newProducts.map((g, i) => productActualAmount.value[i] ?? 0);
//     },
//     {immediate: true},
// );

// const productTotalCosts = computed(() => {
//     return products.map((product, i) => {
//         return product.price * productQuantities.value[i];
//     });
// });

// const TotalCosts = computed(() => {
//     return productTotalCosts.value.reduce((acc, item) => acc + item, 0);
// });
</script>

<template>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <title>Product list</title>
    </head>
    <body>
        <table id="ProductList" class="w-fit m-25 border-collapse">
            <tbody>
                <tr>
                    <td><strong>Product</strong></td>
                    <td><strong>Actual Amount</strong></td>
                    <td><strong>Minimum Amount</strong></td>
                    <td><strong>Subtotaal</strong></td>
                    <td><strong></strong></td>
                    <td>
                        <input class="productActualAmount" type="number" v-model="products" />
                    </td>
                </tr>
                <tr v-for="(product, index) in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td class="actualAmount">{{ product.actualAmount }}</td>
                    <!-- <td>
                        <input
                            class="productActualAmount"
                            type="number"
                            min="0"
                            v-model.number="products.actualAmount"
                        />
                    </td> -->
                    <td class="minimumAmount">{{ product.minimumAmount }}</td>
                    <!-- <td class="productTotalCosts">{{ productTotalCosts[index].toFixed(2) }}</td> -->
                    <td>
                        <router-link :to="`/edit/${product.id}`" class="text-indigo-600 hover:underline">
                            Edit
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td colspan="3"><strong>Totaal</strong></td>
                    <td id="totalCost" colspan="2">
                        <!-- <strong>{{ TotalCosts.toFixed(2) }}</strong> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</template>
