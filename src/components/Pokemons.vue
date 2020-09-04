<template>
    
        <div class="columns is-multiline">
            <div class="column is-3" :key='p.name' v-for="p in pokeList">
                <Pokemon :name="p.name" :url="p.url" />

            </div>

        </div>
    

  
</template>

<script>

import axios from 'axios';
import Pokemon from './Pokemon.vue';
export default {
    data(){
        return{
            pokeList: null
        }
    },
    components:{
        Pokemon
    },
    //metodo chamado assim que aplicação é estartada
    created(){
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then(response =>{
            this.pokeList = response.data.results
        })
    }
    

}
    
</script>

<style scoped>
    
</style>