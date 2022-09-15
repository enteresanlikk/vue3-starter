<script setup>
import { watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import constants from '@/store/constants'

const { locale, availableLocales } = useI18n()
const store = useStore()

watch(
    () => locale,
    newLocale => {
        store.dispatch('setLocale', newLocale.value)
    },
    { deep: true }
)
</script>

<template>
    <div class="locale-switcher">
        <select v-model="locale">
            <option v-for="(lang, i) in availableLocales" :key="i" :value="lang">
                {{ constants.locales[lang] }}
            </option>
        </select>
    </div>
</template>

<style lang="scss">
.locale-switcher {
    display: inline-block;
    select {
        padding: 0.4em 0.5em;
        border-radius: 8px;
        background-color: $white;
        color: $black;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
    }
}
</style>