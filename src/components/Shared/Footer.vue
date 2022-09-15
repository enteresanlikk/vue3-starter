<script setup>
import { computed } from 'vue'
import LocaleSwitcher from '@/components/Shared/LocaleSwitcher.vue'

const startYear = 2021
const currentYear = new Date().getFullYear()

const year = computed(() => startYear === currentYear ? startYear : `${startYear}-${currentYear}`)
</script>

<template>
    <footer class="footer">
        <div class="container content">
            <span>
                &copy; {{ year }}
            </span>
            
            <LocaleSwitcher />
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    padding: 1em 0;
    margin: 1em 0;
    border-top: 1px solid $black;
    
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>