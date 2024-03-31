<script>
import { products } from '../data.js';
import ProductCard from './ProductCard.vue';


export default {
    name: 'AppMain',
    component: {
        ProductCard
    },

    data() {
        return {
            products
        }
    }




}


</script>
<template>

         

<main id="site_main">

<div class="container">
    <div class="row row-cols-sm3 row-cols-md4">

   
        <ProductCard :product="product" :key="product.id" v-for="product in state.products" />


        




    </div>
</div>
</main>



</template>
<style></style>