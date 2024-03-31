<script>
// import { products } from '../data.js';
import ProductCard from './ProductCard.vue';
// import axios from 'axios'; ho passato il link in globale
import { state } from '../state' 



export default {
    name: 'AppMain',
    component: {
        ProductCard
    },

    data() {
        return {
            // products: [],
            state,
        }
    },
    mounted() {
        console.log(this.state);
        this.state.getProducts(this.state.urlType)


        // axios.get('http://localhost:3000/products')
        // .then(response => {

        //     console.log(response);
        //     this.state.products = response.data
            // ho passato response.data in produscts che è diventato un array dove poterli pushare API
        // })

        // ho passato l'axios nel globale su state.js
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