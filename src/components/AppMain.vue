<script>
// import { products } from '../data.js';
import ProductCard from './ProductCard.vue';
import axios from 'axios';


export default {
    name: 'AppMain',
    component: {
        ProductCard
    },

    data() {
        return {
            products: [],
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products')
        .then(response => {

            console.log(response);
            this.state.products = response.data
            // ho passato response.data in produscts che è diventato un array dove poterli pushare API



        })
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