<script setup>
import { defineProps } from 'vue'

import BgImage from '@/assets/images/hero/bg.jpg'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    summary: String,
    image: {
        type: String,
        default: BgImage
    }
})
</script>

<template>
    <section class="hero">
        <img class="hero--bg" :src="image" :alt="title">
        <div class="container hero--texts">
            <h1 v-if="title" class="hero--texts--title" v-html="title"/>
            <p v-if="summary" class="hero--texts--summary" v-html="summary" />
        </div>
    </section>
</template>

<style lang="scss">
    .hero {
      position: relative;
      height: 400px;
      overflow: hidden;
      margin-bottom: 20px;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: rgba($black, 0.5);
        z-index: -1;
      }

      &--bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        width: inherit;
        z-index: -1;
      }

      &--texts {
        display: flex;
        height: inherit;
        z-index: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $white;

        &--title {
            font-size: 2.5rem;
            font-weight: 700;
        }

        &--summary {
            margin: 0;
        }
      }
    }
    </style>