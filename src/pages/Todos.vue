<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import TodoList from '@/components/Todo/List.vue'
import Hero from '@/components/Shared/Hero.vue'

const store = useStore()
const { t } = useI18n()

store.dispatch("todo/init")

const todos = computed(() => store.getters["todo/getAll"]);
</script>

<template>
  <Hero :title="t('hero.todos.title')" :summary="t('hero.todos.summary')" />

  <section class="sec-1">
    <div class="container">
      <TodoList :items="todos" />
    </div>
  </section>
</template>