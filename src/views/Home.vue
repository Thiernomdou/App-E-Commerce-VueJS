<template>
    <div class="home">
        <navbar-top></navbar-top>
        <carousel></carousel>
        <product></product>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import Products from '@/components/Products'


export default {
    name: 'Home',
    components: {
        'navbar-top': Navbar,
        'carousel': Carousel,
        'product': Products
    }
}
</script>

