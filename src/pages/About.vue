<script setup>
import { useI18n } from 'vue-i18n'
import Hero from '@/components/Shared/Hero.vue'

const { t } = useI18n()
</script>

<template>
  <Hero :title="t('hero.about.title')" :summary="t('hero.about.summary')" />

  <section class="sec-1">
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque totam, autem sequi odio dicta, earum consequuntur nesciunt excepturi possimus, eligendi alias voluptate voluptatem cum tempore! Aspernatur, excepturi. Quaerat, dolores deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque totam, autem sequi odio dicta, earum consequuntur nesciunt excepturi possimus, eligendi alias voluptate voluptatem cum tempore! Aspernatur, excepturi. Quaerat, dolores deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque totam, autem sequi odio dicta, earum consequuntur nesciunt excepturi possimus, eligendi alias voluptate voluptatem cum tempore! Aspernatur, excepturi. Quaerat, dolores deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque totam, autem sequi odio dicta, earum consequuntur nesciunt excepturi possimus, eligendi alias voluptate voluptatem cum tempore! Aspernatur, excepturi. Quaerat, dolores deleniti.
      </p>

      <ol>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam accusamus enim. Quo quam pariatur tempora reprehenderit, recusandae doloremque, esse earum cupiditate ipsum laudantium mollitia officia accusamus optio porro. Vitae.</li>
        <li>Nemo corrupti cum reiciendis asperiores iusto doloribus, facilis ducimus id rem error esse odit sapiente officiis. Aut, dolor quo soluta deleniti repellendus, natus neque voluptatem reprehenderit veritatis dolorum debitis! At!</li>
        <li>Officia voluptate voluptas laboriosam, ullam dolorem voluptatum labore qui accusamus dolorum pariatur fugit! Adipisci animi consequatur voluptates nesciunt nobis, molestias, similique deserunt pariatur possimus, molestiae perferendis? Fugit inventore similique ipsa?</li>
        <li>Quasi facere repellat ipsa consequuntur dolor voluptates exercitationem explicabo vel! Voluptates accusamus saepe similique odit, velit doloremque ea laboriosam quos commodi nesciunt quam, fuga hic laborum, eum quia optio dolore.</li>
        <li>Totam necessitatibus ex itaque repudiandae maxime sint placeat eum corrupti, nisi quis obcaecati nihil laudantium? Ducimus sequi consequatur dolor quisquam, porro magnam praesentium sed officiis ab eum iusto. Harum, ipsam.</li>
      </ol>
    </div>
  </section>
</template>