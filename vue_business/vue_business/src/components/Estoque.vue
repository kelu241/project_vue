

<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-dt'
import "datatables.net-dt/css/dataTables.dataTables.css";
import type {Product} from './../models/Product'
import { onMounted } from 'vue';
import type { Observable } from 'rxjs';
import { ProdutoService } from '@/services/ProdutoService';

// registra o core dentro do componente DataTable
DataTable.use(DataTablesCore)

const columns = [
  { data: 'id', title: 'ID' },
  { data: 'name', title: 'Produto' },
  {data: 'price', title: 'Preço' },
  { data: 'description', title: 'Descrição' },
  { data: 'stock', title: 'Estoque' },
  { data: 'createdAt', title: 'Data da criação' },
  { data: 'updatedAt', title: 'Data da atualização' }
]


import { ref } from 'vue'
const produtos = ref<Product[]>([])

onMounted(() => {
  const produtoService = new ProdutoService();
  const response$: Observable<Product[]> = produtoService.RequisitarProdutos('http://localhost:3000/api/products', 'GET', {}, {});

  const subscription = response$.subscribe((novosProdutos: Product[]) => {
    console.log('Produtos recebidos:', novosProdutos);
    produtos.value = novosProdutos;
  });

  return () => {
    subscription.unsubscribe();
  };
})

</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Tabela</h1>

      <DataTable
          :columns="columns"
          :data="produtos"
          class="table is-striped is-hoverable"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>estoque</th>
            <th>data da criação</th>
            <th>data da atualização</th>
          </tr>
        </thead>
      </DataTable>
    </div>
  </section>
</template>
