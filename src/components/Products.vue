<template>
    <div class="container">

        <h2 class="text-center mt-3">{{ product }}</h2>

        <b-container class="bv-example-row mt-4" fluid>

            <b-row>

                <b-col cols="3" v-for="(product, index) in products" :key="index">

                    <b-card :title="product.name" :img-src="require(`@/assets/img/products/product${index+1}.jpg`)" 
                            img-alt="Image" img-top tag="article" class="mb-4">
                    
                        <b-card-text>
                            <h5>Prix: €{{ product.price }}.00</h5>
                            <b-icon class="h1" variant="warning" icon="star-fill"></b-icon>
                            <b-icon class="h1" variant="warning" icon="star-fill"></b-icon>
                            <b-icon class="h1" variant="warning" icon="star-fill"></b-icon>
                            <b-icon class="h1" variant="warning" icon="star-fill"></b-icon>
                        </b-card-text>

                        <b-button v-if="!product.cart" :disabled="product.cart" v-on:click="product.cart=true,
                                addtocart(JSON.parse(JSON.stringify(product)))" block href="#"
                                variant="success">Ajouter
                        </b-button>
                        <b-button v-if="product.cart" :disabled="product.cart" block href="#" 
                                variant="warning">Déjà Ajouté
                        </b-button>

                    </b-card>

                </b-col>

            </b-row>

        </b-container>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: 'Liste des produits',
            products: [
                {id:1,quantity: 1,name: 'Efferalgan',price: 10,img: '@/assets/products/product1.jpg', cart:false},
                {id:2,quantity: 1,name: 'Doliprane',price: 5,img: '@/assets/products/product1.jpg', cart:false},
                {id:3,quantity: 1,name: 'Nivaquine',price: 7,img: '@/assets/products/product1.jpg', cart:false},
                {id:4,quantity: 1,name: 'Flagyl',price: 8,img: '@/assets/products/product1.jpg', cart:false},
                {id:5,quantity: 1,name: 'Hematomic',price: 6,img: '@/assets/products/product1.jpg', cart:false},
                {id:6,quantity: 1,name: 'Rhinatiol',price: 4,img: '@/assets/products/product1.jpg', cart:false},
                {id:7,quantity: 1,name: 'Terpone',price: 5,img: '@/assets/products/product1.jpg', cart:false},
                {id:8,quantity: 1,name: 'Neo-Codion',price: 9,img: '@/assets/products/product1.jpg', cart:false}
            ]
        }
    },
    methods: {
        addtocart(product) {
            let cart = []
            if(JSON.parse(localStorage.getItem('products'))) {
                cart = JSON.parse(localStorage.getItem('products'))
            } else {
                cart = []
            }
            cart.push(product);
            localStorage.setItem('products', JSON.stringify(cart))
        }
    },
    created() {
        let cart = []
        if(JSON.parse(localStorage.getItem('products'))) {
                cart = JSON.parse(localStorage.getItem('products'))
            } else {
                cart = []
            }
            for(let index = 0; index < cart.lenght; index++) {
                for(let index2 = 0; index2 < this.products.lenght; index2++) {
                    if(cart[index].id == this.products[index2].id) {
                        this.products[index2].cart = true
                    }
                }
            }
    }
}
</script>