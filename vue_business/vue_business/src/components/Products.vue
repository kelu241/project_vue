<template>
  <div class="container mt-5">
    <h1 class="title has-text-centered">Nossos Produtos</h1>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="product in products" :key="product.id">
        <ProductCard :product="product" @add-to-cart="onAddToCart" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProdutoService } from '../services/ProdutoService';
import { onMounted, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { Observable } from 'rxjs'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

const emit = defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()

function onAddToCart(product: Product) {
  emit('add-to-cart', product)
}

class Produtos {

  private produtoService: ProdutoService;


  constructor(produtoService: ProdutoService) {
    this.produtoService = produtoService;
  }
}



const products = ref<Product[]>([])

onMounted(() => {
  const produtoService = new ProdutoService();
  const response$: Observable<Product[]> = produtoService.RequisitarProdutos('http://localhost:3000/api/products', 'GET', {}, {});

  const subscription = response$.subscribe((produtos: Product[]) => {
    console.log('Produtos recebidos:', produtos);
    products.value = produtos;
  });

  return () => {
    subscription.unsubscribe();
  };
})


</script>
