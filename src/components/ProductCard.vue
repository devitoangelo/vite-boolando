<script>
export default {
    name: 'ProductCard',

    props: {

        product: Object

    }


}
</script>


<template>


<div class="web1">
                <div class="discount"> -30% </div>
                <nav class="brand">{{product.brand}}</nav>
                <nav class="product">{{product.name}} </nav>
                <div class="price">
                    <nav class="price1">{{product.price}}</nav>
                    <nav class="discount1">29,99 €</nav>
                    <div class="heart">&hearts;</div>

                </div>

            </div>

</template>

<style>
    
</style>