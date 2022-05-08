<template>
  <h1>Learning slots</h1>
  <button @click="openModal">Open modal</button>
  <modal 
    v-if="isOpen"
    @on:close="closeModal"
    title="Hello World"
  >
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </template>
    
    <template v-slot:footer>
      <button @click="closeModal">Exit</button>
    </template>
    
    <template v-slot:header>
      <h2>Title modal</h2>
    </template>

    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>
  </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

export default {
    components:{
        Modal
    },
    setup(){

      const isOpen = ref(false)

      return {
        isOpen,
        openModal: () => { isOpen.value = true },
        closeModal: () => { isOpen.value = false },
      }
    }
}
</script>

<style>

</style>