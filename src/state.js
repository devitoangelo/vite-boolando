import { reactive } from 'vue';
import axios from 'axios';



export const state = reactive({
    message: 'this is a text',


    products: [],
    urlType: 'http://localhost:3000/products',

    getProducts(url) {
        axios.get(url)
        .then(response => {

            console.log(response);
            this.products = response.data
        })
        .catch(err => {
            console.error(err.message);
            //serve per verificare se c'è un errore nel getProducts
        })



    }







})

