<template>
    <div>
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
                    img-width="100" img-height="400" style="text-shadow: 1px 1px 2px #333">
        

        <!-- diapositive d'images -->
        <!-- Les classes .d-block et .img-fluid empêche l'alignement de l'image par défaut du navigateur -->
        <b-carousel-slide>
            <template v-slot:img>
            <img :src="require('@/assets/img/carousel1.jpg')" class="d-block img-fluid w-100" style="height:80vh!important;" alt="fruit">
            </template>
        </b-carousel-slide>

        <b-carousel-slide>
            <template v-slot:img>
            <img :src="require('@/assets/img/carousel2.jpg')" class="d-block img-fluid w-100" style="height:80vh!important;" alt="fruit">
            </template>
        </b-carousel-slide>

        <b-carousel-slide>
            <template v-slot:img>
            <img :src="require('@/assets/img/carousel3.webp')" class="d-block img-fluid w-100" style="height:80vh!important;" alt="fruit">
            </template>
        </b-carousel-slide>

        </b-carousel>

    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {

    }
}
</script>
    