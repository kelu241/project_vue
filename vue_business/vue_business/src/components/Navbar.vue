<template>
  <div>
    <!-- Top Bar com Carrinho -->
    <div class="top-bar">
      <div class="top-bar-wrapper">
        <div class="top-bar-left">
          <span class="icon-text">
            <span class="icon">📞</span>
            <span>(11) 1234-5678</span>
          </span>
          <span class="icon-text ml-4">
            <span class="icon">✉️</span>
            <span>contato@minhaloja.com</span>
          </span>
        </div>
        <div class="top-bar-right">
          <a @click="$emit('navigate', 'cart')" class="cart-link">
            <span class="icon">🛒</span>
            <span>Carrinho ({{ cartCount ?? 0 }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Navbar Principal -->
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-wrapper">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <strong>Minha Loja</strong>
          </a>

          <a role="button" class="navbar-burger" :class="{ 'is-active': isMenuActive }" aria-label="menu"
            @click="isMenuActive = !isMenuActive">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">
            <a class="navbar-item" @click="$emit('navigate', 'home')">Início</a>
            <a class="navbar-item" @click="$emit('navigate', 'products')">Produtos</a>
            <a class="navbar-item" @click="$emit('navigate', 'about')">Sobre</a>
            <a class="navbar-item" @click="$emit('navigate', 'estoque')">Estoque</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-small" type="text" placeholder="Buscar produtos...">
                </div>
                <div class="control">
                  <button class="button is-small  is-light">
                   <span class="icon">🔍</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

// Mesmo tipo de view que você usa no App.vue
type View = 'home' | 'products' | 'cart' | 'about'| 'estoque'

defineProps<{
  cartCount?: number
}>()

const emit = defineEmits<{
  (e: 'navigate', view: View): void
}>()

const isMenuActive = ref(false)
</script>


<style>
.top-bar {
  background-color: #f5f5f5;
  border-bottom: 1px solid #dbdbdb;
  padding: 0.5rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  font-size: 0.875rem;
}

.top-bar-wrapper {
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.top-bar-left,
.top-bar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.cart-link {
  color: #363636;
  cursor: pointer;
  transition: color 0.3s;
}

.cart-link:hover {
  color: #3273dc;
}

.icon-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-end .input:focus {
  border-color: #3273dc;
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.navbar-end .button .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-end .button.is-small {
  min-width: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.navbar {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.navbar-wrapper {
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 3.25rem;
  box-sizing: border-box;
}

.navbar-brand {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.navbar-menu {
  display: flex !important;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  margin-left: 0;
}

.navbar-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.navbar-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
}

.navbar-brand > .navbar-item:first-child {
  padding-left: 0;
}

.navbar-end > .navbar-item:last-child {
  padding-right: 0;
}

.navbar-end > .navbar-item:last-child .buttons {
  margin-right: 0;
}

.navbar-end > .navbar-item:last-child .button {
  margin-right: 0;
  padding-right: 0;
}

@media screen and (max-width: 1023px) {
  .navbar-wrapper {
    display: block;
  }
  
  .navbar-menu {
    display: block !important;
  }
  
  .navbar-start,
  .navbar-end {
    display: block;
  }
  
  .navbar-brand > .navbar-item:first-child {
    padding-left: 0.75rem;
  }

  .navbar-end > .navbar-item:last-child {
    padding-right: 0.75rem;
  }
}
</style>
