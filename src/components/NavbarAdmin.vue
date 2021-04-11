<template>
<div>

    <div>
       <b-navbar toggleable="lg" type="dark" variant="success">
            <b-navbar-brand href="#">
                <h6><i class="fas fa-user"></i> Admin</h6>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Alignement à droite les éléments de navigation -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item @click="gohome" active><h6><i class="fas fa-times-circle"></i></h6></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar> 
        <div>
            <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Admin</p>
            </b-modal>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        gohome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>