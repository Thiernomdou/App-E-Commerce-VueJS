<template>
    <div>
        <navbar />

        <b-container class="mt-4" fluid>

            <b-row>
                <b-col>
                    <h2>Shopping Cart</h2>
                </b-col>
            </b-row>

            <b-row>

                <b-col class="text-center">

                    <b-table bordered hover :items="cart" :fields="fields">

                        <template v-slot:cell(#)="data">{{ data.index+1 }}</template>
                        <template v-slot:cell(Prix)="data">{{ data.item.price * data.item.quantity }} €</template>
                        <template v-slot:cell(Supprimer)="data">
                            <b-button @click="remove(data.item.id)" variant="danger" class="mr-2">X</b-button>
                        </template>
                        <template v-slot:cell(quantite)="data">
                            <b-row>
                                <b-col cols="3" class="text-center">
                                    <b-button v-on:click="decrement(data.item.id)" variant="primary"
                                              :disabled="data.item.quantity <= 1" class="mr-2">-</b-button>
                                </b-col>
                                <b-col cols="3" class="text-center">
                                    <b-button v-on:click="increment(data.item.id)" variant="primary" 
                                              class="mr-2">+</b-button>
                                </b-col>
                            </b-row>
                        </template>

                        <template v-slot:cell(image)="data">
                                <b-col class="text-center">
                                    <b-img style="max-width:5rem;" fluid alt="responsive image"
                                           :src="require(`@/assets/img/products/product${data.item.id}.jpg`)">
                                    </b-img>
                                </b-col>
                        </template>

                    </b-table>

                </b-col>

            </b-row>

            <b-row class="mt-4 text-center" v-if="cart.length > 0">

                <b-col>
                    <b-button v-on:click="clean" variant="danger" block class="mr-2">Supprimer tout</b-button>
                </b-col>
                <b-col></b-col>
                <b-col cols="4">Youtube Channel</b-col>
                <b-col></b-col>
                <b-col>
                    <b-button v-on:click="buy" variant="success" block class="mr-2" >Acheter</b-button>
                </b-col>

            </b-row>

            <b-modal hide-header-close no-close-on-esc no-close-on-backdrop ref="modal-1" centered title="Achat terminé">
                <template slot="modal-footer">
                    <b-button class="mt-3" block v-on:click="clean" variant="info">Fermer</b-button>
                </template>
                <p class="mb-4">Produits:</p>
                <ul v-for="productFinal in ticket.products" :key="productFinal.id">
                    <li>Nom du Produit : {{ productFinal.name }}</li>
                    <li>Quantité : {{ productFinal.quantity }}</li>
                    <li>Prix : {{ productFinal.price }} €</li>
                    <li>Total : {{ productFinal.price * productFinal.quantity }} €</li>
                    <hr>
                </ul>
                <h2 class="my-4 text-center">Total : {{ ticket.total}} €</h2>
            </b-modal>

        </b-container>
        
    </div>  
</template>

<script>
import {db} from '@/firebase'
import navbar from '@/components/Navbar'
export default {
    name: 'Cart',
    components: {
        navbar
    },
    data() {
        return {
            ticket: {
                products: null,
                total: 0
            },
            counter: 0,
            cart: [],
            fields: ['#', 'Supprimer', 'Image', 'name', 'Quantite', 'Prix']
        }//data return
    },
    methods: {
        clean() {
            this.cart = [];
            for(const key in this.cart) {
                this.cart[key].cart = false;
                this.cart[key].quantity = 1;
            }
            localStorage.setItem('products', JSON.stringify(this.cart))
            this.$refs['modal-1'].hide()
        },
        remove(id) {
            for(let index = 0; index < this.cart.length; index++) {
                if(this.cart[index].id == id) {
                    this.cart.splice(index, 1);
                    localStorage.setItem('products', JSON.stringify(this.cart))
                }
            }
        },
        buy() {
            this.ticket = {
                products: this.cart,
                total: this.total
            }
            db.collection('vue').add(this.ticket);
            this.$refs['modal-1'].show()
        },
        increment(id) {
            for(let index = 0; index < this.cart.length; index++) {
                if(this.cart[index].id == id) {
                    this.cart[index].quantity++
                    localStorage.setItem('products', JSON.stringify(this.cart))
                }
            }
        },
        decrement(id) {
            for(let index = 0; index < this.cart.length; index++) {
                if(this.cart[index].id == id) {
                    this.cart[index].quantity--
                    localStorage.setItem('products', JSON.stringify(this.cart))
                }
            }
        }
    },
    computed: {
        total() {
            let t = 0;
            for(let index = 0; index < this.cart.length; index++) {
                t += this.cart[index].price * this.cart[index].quantity
            }
            return t
        }
    },
    created() {
        if(JSON.parse(localStorage.getItem('products'))) {
            this.cart = JSON.parse(localStorage.getItem('products'))
        } else {
            this.cart = []
        }
    }
}
</script>

<style scoped>

</style>

