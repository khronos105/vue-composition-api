<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
        <input 
            type="number"
            placeholder="Numero de pokemon"
            v-model="pokemonId"
            ref="txtSearchId"
        >
        <br>
        <span>Presione enter para buscar</span>
  </form>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup(){

        const router = useRouter()

        const pokemonId = ref(1)

        const txtSearchId = ref('')

        onActivated(() => {
            txtSearchId.value.select()
        })

        return {
            pokemonId,
            txtSearchId,
            onSubmit: () => {
                //console.log(`Pokemon a buscar ${pokemonId.value}`)
                router.push({name: 'pokemon-id', params:{ id: pokemonId.value}})
            }
        }
    }
}
</script>