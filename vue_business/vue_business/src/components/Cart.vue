<template>
  <div class="container mt-5">
    <h1 class="title">Carrinho de Compras</h1>

    <div v-if="cart.length === 0" class="notification is-info">
      <p>Seu carrinho está vazio. Adicione alguns produtos!</p>
    </div>

    <div v-else>
      <div class="box" v-for="item in cart" :key="item.id">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img :src="item.image" :alt="item.name" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ item.name }}</strong>
                <br />
                {{ item.description }}
                <br />
                <strong>R$ {{ item.price.toFixed(2) }}</strong>
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <div class="field has-addons">
                  <p class="control">
                    <button class="button is-small" @click="$emit('decrease-quantity', item.id)">
                      <span class="icon is-small">
                        <i class="fas fa-minus"></i>
                      </span>
                    </button>
                  </p>
                  <p class="control">
                    <button class="button is-small is-static">
                      {{ item.quantity }}
                    </button>
                  </p>
                  <p class="control">
                    <button class="button is-small" @click="$emit('increase-quantity', item.id)">
                      <span class="icon is-small">
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                  </p>
                </div>
              </div>
            </nav>
          </div>
          <div class="media-right">
            <button class="delete" @click="$emit('remove-from-cart', item.id)"></button>
          </div>
        </article>
      </div>

      <div class="box has-background-light">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="title is-4">Total:</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <p class="title is-4">R$ {{ total.toFixed(2) }}</p>
            </div>
          </div>
        </div>
        <button class="button is-primary is-fullwidth is-large" @click="$emit('checkout')">
          Finalizar Compra
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  description: string
  image: string
  quantity: number
}

const props = defineProps<{
  cart: CartItem[]
}>()

defineEmits<{
  'remove-from-cart': [productId: number]
  'increase-quantity': [productId: number]
  'decrease-quantity': [productId: number]
  'checkout': []
}>()

const total = computed(() => {
  return props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
})
</script>
