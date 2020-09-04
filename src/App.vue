<template>


    <div>
        <Navbar/>
        <div class="container">
            <Pokemons/>
        </div>
        <Footer/>
        
    </div>

</template>

<script>

// import Pokemons from "./components/Pokemons.vue";
import Pokemons from './components/Pokemons.vue';
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';

export default {
    data(){
        return{
            visibility:true
            
        }
    },
    components:{
        Pokemons, Navbar, Footer
        },
    methods:{
        deleteToast(){
            this.visibility = false
        }
    }
  

}

</script>

<style >
body{
    background: #8E2DE2;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>
