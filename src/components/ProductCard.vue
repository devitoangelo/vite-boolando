<script>
export default {
    name: 'ProductCard',

    props: {

        product: Object

    }


}
</script>


<template>


    <template>

        <div class="col">
            <div class="card">
                <img :src="product.frontImage" width="350px" alt="">

                <div class="discount"> {{ product.value }}</div>
                <div class="character">{{ product.valueType }}</div>
                <nav class="brand">{{ product.brand }}</nav>
                <nav class="product">{{ product.name }} </nav>
                <div class="price">
                    <nav class="price1">{{ product.price }}</nav>
                    <nav class="discount1">{{ product.discount }}</nav>
                    <div class="heart">&hearts;</div>
                </div>
            </div>
        </div>


    </template>

</template>

<style></style>