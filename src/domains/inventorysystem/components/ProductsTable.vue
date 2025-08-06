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
                        <!-- TODO: computed properties zijn read-only, los dit (v-model) op een andere manier op -->
                        <input
                            class="productActualAmount"
                            type="number"
                            min="0"
                            v-model.number="product.actualAmount"
                        />
                    </td>
                    <td class="requiredAmount">{{ product.requiredAmount }}</td>
                    <td>
                        <router-link :to="`/edit/${product.id}`" class="text-indigo-600 hover:underline">
                            Edit
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</template>
