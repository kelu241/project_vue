<template>
  <section class="hero is-light is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title is-1">Bem-vindo à Nossa Loja</p>
        <p class="subtitle is-3">Encontre os melhores produtos com os melhores preços</p>
        <button class="button is-light is-large" @click="$emit('show-products')">
          Ver Produtos
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  'show-products': []
}>()
</script>
