
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()
    
    const currentTab = ref('all')
    const todoText = ref('')

    return {
      currentTab,
      todoText,

      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      pending: computed(() => store.getters['pendingTodos']),

      getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

      toggleTodo: ( id ) => { store.commit('toggleTodo', id) },
      createTodo: () => { 
        store.commit('createTodo', todoText.value) 
      }
    }
}

export default useTodos