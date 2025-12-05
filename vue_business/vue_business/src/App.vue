<template>
  <div id="app">
    <!-- Navbar recebe o total de itens do carrinho -->
    <Navbar :cartCount="cartCount" @navigate="currentView = $event" />

    <!-- Tela inicial -->
    <Hero v-if="currentView === 'home'" @show-products="currentView = 'products'" />

    <Hero v-if="currentView === 'home'" @show-products="currentView = 'products'" />



    <!-- Lista de produtos -->
    <Products v-if="currentView === 'products'" @add-to-cart="handleAddToCart" />

    <!-- Carrinho -->
    <Cart v-if="currentView === 'cart'" :cart="cart" @remove-from-cart="handleRemoveFromCart"
      @increase-quantity="handleIncreaseQuantity" @decrease-quantity="handleDecreaseQuantity"
      @checkout="handleCheckout" />

    <!-- Página Sobre -->
    <div v-if="currentView === 'about'" class="container mt-5">
     <Sobre />
    </div>

        <!-- Página Sobre -->
    <div v-if="currentView === 'estoque'" class="container mt-5">
     <Estoque/>
    </div>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Footer from './components/Footer.vue'
import Sobre from './components/Sobre.vue'
import Estoque from './components/Estoque.vue'  
import type {Product} from './models/Product'

type View = 'home' | 'products' | 'cart' | 'about'|'estoque'

const currentView = ref<View>('home')



type CartItem = Product & {
  quantity: number
}

const cart = ref<CartItem[]>([])

const cartCount = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
)

function handleAddToCart(product: Product) {
  const existingItem = cart.value.find(item => item.id === product.id)

  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }

  showNotification('Produto adicionado ao carrinho!')
}

function handleRemoveFromCart(productId: number) {
  cart.value = cart.value.filter(item => item.id !== productId)
  showNotification('Produto removido do carrinho')
}

function handleIncreaseQuantity(productId: number) {
  const item = cart.value.find(item => item.id === productId)
  if (item) {
    item.quantity++
  }
}

function handleDecreaseQuantity(productId: number) {
  const item = cart.value.find(item => item.id === productId)
  if (item && item.quantity > 1) {
    item.quantity--
  }
}

function handleCheckout() {
  alert(`Compra finalizada! Total de ${cartCount.value} itens.`)
  cart.value = []
  currentView.value = 'home'
}

function showNotification(message: string) {
  // Aqui você pode trocar por um toast bonitinho depois
  console.log(message)
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
}
</style>
