<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imageUrl" :alt="product.name" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-5">{{ product.name }}</p>
      <p class="subtitle is-6">R$ {{ product.price.toFixed(2) }}</p>
      <div class="content">
        {{ product.description }}
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="$emit('add-to-cart', product)">
        <span class="icon">
          <i class="icon">🛒</i>
        </span>
        <span>Adicionar ao Carrinho</span>
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

const {product} = defineProps<{
  product: Product
}>()

defineEmits<{
  'add-to-cart': [product: Product]
}>()

const imageUrl :string = `http://localhost:3000/images/${product.image}`

</script>

<style scoped>
a{
  color: rgb(179, 165, 165);
}
a:hover {
  color:black
}
</style>