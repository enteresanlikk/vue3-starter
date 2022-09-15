<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const todo = ref('')

const store = useStore()

const addTodo = () => {
    if(!todo.value) return
    
    store.dispatch("todo/add", todo.value)
    todo.value = ''
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <input type="text" v-model.trim="todo"/>
        <button type="submit">
            Add
        </button>
    </form>
</template>