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
        <div class="container1">
            <!-- web1 -->
            <ProductCard :product="product" :key="product.id" v-for="product in products" />
            <!-- endweb1 -->


            <!-- web2 -->
            <div class="web2">
                <div class="discount"> -30% </div>
                <nav class="brand">Guess</nav>
                <nav class="product">ROSES TEE </nav>
                <div class="price">
                    <nav class="price1">20,99 €</nav>
                    <nav class="discount1">29,99 €</nav>
                    <div class="heart">&hearts;</div>

                </div>

            </div>

            <!-- endweb2 -->



            <!-- web3 -->
            <div class="web3">
                <div class="discount"> -30% </div>
                <nav class="brand">Come zucchero filato</nav>
                <nav class="product">VOGLIA DI COLARE PASTELLO </nav>
                <div class="price">
                    <nav class="price1">129,99 €</nav>
                    <nav class="discount1">184,99 €</nav>
                    <div class="heart">&hearts;</div>

                </div>


            </div>
            <!-- endweb3 -->



        </div>


        <!-- web4 -->
        <div class="container2">
            <div class="web4">
                <div class="discount"> -50% </div>
                <div class="character">Sostenibilità</div>
                <nav class="brand">levi's</nav>
                <nav class="product">RELAXEX FIT TEE UNISEX </nav>
                <div class="price">
                    <nav class="price1">14,99 €</nav>
                    <nav class="discount1">29,99 €</nav>
                    <div class="heart">&hearts;</div>
                </div>

            </div>
            <!-- endweb4 -->


            <!-- web5 -->
            <div class="web5">
                <nav class="brand">Maya Deluxe</nav>
                <nav class="product">STRIPE BODICE </nav>
                <div class="price">
                    <nav class="price1">99,99 €</nav>
                    <div class="heart">&hearts;</div>
                </div>




            </div>
            <!-- endweb5 -->

            <!-- web6 -->
            <div class="web6">
                <div class="character1">Sostenibilità</div>
                <nav class="brand"> Esprit</nav>
                <nav class="product"> MAGLIONE BLACK </nav>
                <div class="price">
                    <nav class="price1">29,99 €</nav>
                    <div class="heart">&hearts;</div>
                </div>



            </div>

            <!-- endweb6 -->

        </div>


    </main>



</template>
<style></style>