<template>
    <div class="home">
        <navbar-top></navbar-top>
        <carousel></carousel>
        <product></product>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import Products from '@/components/Products'
import Footer from '@/components/Footer'


export default {
    name: 'Home',
    components: {
        'navbar-top': Navbar,
        'carousel': Carousel,
        'product': Products,
        'footer-bottom': Footer
    }
}
</script>

