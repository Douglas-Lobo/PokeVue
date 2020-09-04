<template>
  <div>
    <div class="card">

        <div class="card-image">
            <figure class="has-text-centered" >
                <img v-if="!turn" :src="shinyFrontForm" alt="Placeholder image" @mouseenter="shiny = !shiny"  @mouseout="shiny = !shiny">
                <img v-else :src="shinyBackForm" alt="Placeholder image" @mouseenter="shiny = !shiny"  @mouseout="shiny = !shiny">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
            </div>
            <div class="media-content">
                <p class="title is-4 has-text-centered">{{name | nameUpper }}</p>
                <button @click="turnAround" class='button is-primary is-fullwidth'>Girar</button>
            </div>
            </div>
            <div class="content">
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return{
            id: Number,
            frontSprite: String,
            backSprite: String,
            frontShinySprite: String,
            backShinySprite: String,
            weight: Number,
            turn: false,
            shiny: false,
            
        }
    },
    props:{
        name: String,
        Url: String
    },
    created(){
        axios.get(this.Url).then(resp =>{
            this.backSprite = resp.data.sprites.back_default
            this.frontSprite = resp.data.sprites.front_default
            this.frontShinySprite = resp.data.sprites.front_shiny
            this.backShinySprite = resp.data.sprites.back_shiny
            this.weight = resp.data.weight
            this.id = resp.data.id
        });
    },
    //filtro aplicado somente na exibição da variavel
    filters:{
        nameUpper(name){
            let newName = name[0].toUpperCase() + name.slice([1])
            return newName
        }
    },
    methods:{
        turnAround(){
            if (this.turn == true) {
                this.turn = false  
            }else{
                this.turn = true
            }
        },  
    },
    computed: {
        shinyFrontForm(){
            if (this.shiny == false) {
                return this.frontSprite
            }else{
                return this.frontShinySprite
            }
        },
        shinyBackForm(){
            if (this.shiny == false) {
                return this.backSprite
            }else{
                return this.backShinySprite
            }
        }
    }
 }
</script>

<style scoped>
    .card{
        border-radius: 1rem;
        
    }
</style>