<script setup>
import Header from '@/components/Shared/Header.vue'
import Footer from '@/components/Shared/Footer.vue'
</script>

<template>
    <Header />

    <main class="main">
        <slot />
    </main>

    <Footer />
</template>