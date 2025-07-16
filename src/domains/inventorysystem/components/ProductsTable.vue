<script setup>
import {ref, computed, watch} from 'vue';
import {getAllProducts} from './../store.js';

const products = getAllProducts;

console.log('products:', products.value);
</script>

<template>
    <body>
        <table id="ProductList" class="w-fit m-25 border-collapse">
            <tbody>
                <tr>
                    <td><strong>Product</strong></td>
                    <td><strong>In stock</strong></td>
                    <td><strong>Required</strong></td>
                    <td><strong></strong></td>
                </tr>
                <tr v-for="(product, index) in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>
                        <input
                            class="productActualAmount"
                            type="number"
                            min="0"
                            v-model.number="product.actualAmount"
                        />
                    </td>
                    <td class="requiredAmount">{{ product.requiredAmount }}</td>
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
