<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="success">
                <b-navbar-brand v-on:click="goHome" href="#">
                    <i class="fas fa-home"></i>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <!-- Alignement à droite les éléments de navigation -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item v-on:click="gotocart" active><i class="fas fa-shopping-cart"></i></b-nav-item>

                        <b-nav-item-dropdown right>
                            <!-- bouton contact -->
                            <template v-slot:button-content>
                                <em>Admin</em>
                            </template>
                            <b-dropdown-item v-b-modal.modal-1>Sign in</b-dropdown-item>

                        </b-nav-item-dropdown>

                    </b-navbar-nav>

                </b-collapse>
            
            </b-navbar> 

        <div> 

            <b-modal hide-footer ref="my-modal" id="modal-1" title="Admin">

                <b-form v-on:submit="onSubmit">

                    <b-form-group id="input-group-1" label="User:" label-for="input-1">
                        <b-form-input id="input-1 my-2" v-model="form.user" type="text" placeholder="Enter User" required></b-form-input>
                        <br>
                        <b-form-input id="input-2" v-model="form.pass" type="password" placeholder="Enter Password" required></b-form-input>
                    </b-form-group>

                    <b-button type="submit" block variant="primary">Submit</b-button>

                </b-form>

            </b-modal>

        </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart: '',
            form: {
                user: '',
                pass: ''
            }
        }
    },
    created() {
        if(JSON.parse(localStorage.getItem('products'))) {
            this.cart = JSON.parse(localStorage.getItem('products'))
        } else {
            return
        }
    },
    methods: {
        gotocart() {
            this.$router.push('/cart')
        },
        goHome() {
            this.$router.push('/')
        },
        onSubmit(e) {
            e.preventDefault();
            if(this.form.user == 'admin' && this.form.pass == 'Thierno10') {
                this.$refs['my-modal'].hide()
                this.$router.push('/admin')
                localStorage.setItem('admin', JSON.stringify('true'))
            } else {
                return false,
                alert('Login ou mot de passe incorrect');
            }
        }
    }
}
</script>

<style>
</style>