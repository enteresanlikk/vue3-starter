<script setup>
import { useI18n } from 'vue-i18n'
import LocaleSwitcher from '@/components/Shared/LocaleSwitcher.vue'

const { t } = useI18n()
</script>

<template>
    <header class="header">
        <nav class="header--nav container">
            <ul class="list-unstyled header--nav--menu">
                <li>
                    <RouterLink :to="{ name: 'home' }">
                        {{ t('header.home') }}
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'todos' }">
                        {{ t('header.todos') }}
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'about' }">
                        {{ t('header.about') }}
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'contact' }">
                        {{ t('header.contact') }}
                    </RouterLink>
                </li>
            </ul>

            <div class="header--nav--menu">
                <LocaleSwitcher />
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
.header {
    &--nav {
        display: flex;
        justify-content: space-between;

        &--menu {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
            justify-content: center;

            li {
                margin: 0;
                padding: 0;
                display: inline-block;

                a {
                    display: block;
                    padding: 1rem;
                    text-decoration: none;
                    font-weight: 600;
                    color: $black;

                    &:hover,
                    &.router-link-active {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>