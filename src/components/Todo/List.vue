<script setup>
import { defineProps } from 'vue'
import AddForm from '@/components/Todo/AddForm.vue'
import Item from '@/components/Todo/Item.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="todo-add-container">
    <AddForm />
  </div>
  <div class="todo-list">
      <Item v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<style lang="scss">
.todo-add-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
}

.todo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
}
</style>