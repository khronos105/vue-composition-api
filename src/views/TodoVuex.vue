<template>
  <h1>Thanos Todo List</h1>
  <h4>Pending: {{ pending.length }}</h4>
  <hr>
  <button 
    :class="{ 'active' : currentTab === 'all' }"
    @click="currentTab = 'all'"
  >
    All
  </button>
  <button 
    :class="{ 'active' : currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pending
  </button>
  <button 
    :class="{ 'active' : currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completed
  </button>
  <div>
    <ul>
      <li 
        v-for="todo in getTodosByTab" 
        :key="todo.id"
        :class="{ 'completed' : todo.completed }"
        @dblclick="toggleTodo( todo.id )"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear Todo</button>

  <modal
    v-if="isOpen"
    @on:close="closeModal"
  >
    <template v-slot:header>
      <h2>Create Todo</h2>
    </template>

    <template v-slot:body>
      <form @submit.prevent="submitTodo" >
        <input 
          type="text"
          placeholder="Todo"
          v-model="todoText"
        >
      </form>
    </template>

    <template v-slot:footer>
      <button @click="closeModal">Exit</button>
    </template>
  </modal>

</template>

<script>
import { ref } from 'vue'
import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal.vue'

export default {
  components:{
    Modal
  },
  setup(){
    const {
      todoText,
      currentTab,
      getTodosByTab,
      pending,
      toggleTodo,
      createTodo
    } = useTodos()

    const isOpen = ref(false)

    const submitTodo = () => {
      createTodo();
      todoText.value = ''
      isOpen.value = false
    }

    return {
      todoText,
      currentTab,
      getTodosByTab,
      pending,
      toggleTodo,
      isOpen,
      submitTodo,
      openModal: () => { isOpen.value = true },
      closeModal: () => { isOpen.value = false },
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  justify-content: center;
  text-align: center;
}
ul{
  width: 300px;
  text-align: left;
}
li{
  cursor: pointer;
}
.active{
  background: #2c3e50;
  color: #fff
}
.completed{
  text-decoration: line-through;
}
</style>