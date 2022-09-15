<script setup>
import { useI18n } from 'vue-i18n'
import Hero from '@/components/Shared/Hero.vue'

const { t } = useI18n()
</script>

<template>
  <Hero :title="t('hero.not_found.title')" :summary="t('hero.not_found.summary')" />
</template>