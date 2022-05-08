<template>
  <div>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>
  </div>

  <div v-if="users.length > 0">
      <ul>
          <li v-for="{first_name, last_name, email, id} in users" :key="id">
              <h4>{{ first_name }} {{ last_name }}</h4>
              <h6>{{ email }}</h6>
          </li>
      </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina {{ currentPage }}</span>
</template>

<script >
import useUsers from '@/composables/useUsers'

export default {
    setup(){
        const {
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users
        } = useUsers()

        return {
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
div{
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}
ul{
    width: 250px;
    margin: 0 auto;
}
</style>