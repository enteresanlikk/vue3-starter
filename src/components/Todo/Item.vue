<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const updateTodo = computed(() => id => store.dispatch("todo/update", id))
</script>

<template>
    <div class="todo-item" :class="{ 'completed': item.completed, 'new': item.new }">
        <input class="todo-item--cb" type="checkbox" :checked="item.completed" :id="`ti_${item.id}`" @change="updateTodo(item.id)" />

        <label class="todo-item--title" :for="`ti_${item.id}`">
            {{ item.title }}
        </label>
    </div>
</template>

<style lang="scss">
.todo-item {
    display: flex;
    align-items: center;
    padding: 0.3em 0.5em;
    border: 1px solid $black;
    border-radius: 0.3em;

    &.completed {
        .todo-item--title {
            text-decoration: line-through;
        }
    }

    &.new {
        background: $green;
        color: $white;
    }

    &--cb {
        display: none;
    }

    &--title {
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>